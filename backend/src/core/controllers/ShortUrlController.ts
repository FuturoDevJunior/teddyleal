import {
  Request,
  Response,
} from 'express';

import { IShortUrlService } from '../services/ShortUrlService';
import {
  createShortUrlSchema,
  listShortUrlsQuerySchema,
} from '../validators/shortUrl.validator';

interface AuthenticatedRequest extends Request {
  user?: { id: string };
}

export class ShortUrlController {
  constructor(private readonly shortUrlService: IShortUrlService) {}

  async shorten(req: AuthenticatedRequest, res: Response) {
    const parse = createShortUrlSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(422).json({ success: false, error: parse.error.flatten(), data: null });
    }
    const { originalUrl, expiresAt } = parse.data;
    // userId opcional (autenticado ou anônimo)
    const userId = req.user?.id || null;
    // tenantId obrigatório (exemplo: header x-tenant-id)
    const tenantId = req.headers && req.headers['x-tenant-id'] ? req.headers['x-tenant-id'] as string : '';
    if (!tenantId) {
      return res.status(400).json({ success: false, error: 'TenantId obrigatório no header x-tenant-id', data: null });
    }
    const shortUrl = await this.shortUrlService.shorten({ originalUrl, userId, expiresAt, tenantId });
    return res.status(201).json({ success: true, data: shortUrl, error: null });
  }

  async redirect(req: Request, res: Response) {
    const { shortCode } = req.params;
    const shortUrl = await this.shortUrlService.findByShortCode(shortCode);
    if (!shortUrl || shortUrl.deletedAt) {
      return res.status(404).json({ success: false, error: 'URL não encontrada', data: null });
    }
    if (shortUrl.expiresAt && new Date(shortUrl.expiresAt) < new Date()) {
      return res.status(410).json({ success: false, error: 'URL expirada', data: null });
    }
    await this.shortUrlService.incrementClicks(shortUrl.id);
    return res.redirect(shortUrl.originalUrl);
  }

  async listByUser(req: AuthenticatedRequest, res: Response) {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ success: false, error: 'Não autenticado', data: null });
    }
    const parse = listShortUrlsQuerySchema.safeParse(req.query);
    if (!parse.success) {
      return res.status(400).json({ success: false, error: parse.error.flatten(), data: null });
    }
    const urls = await this.shortUrlService.listByUser(userId, parse.data);
    return res.json({ success: true, data: urls, error: null });
  }

  async softDelete(req: AuthenticatedRequest, res: Response) {
    const userId = req.user?.id;
    const { id } = req.params;
    if (!userId) {
      return res.status(401).json({ success: false, error: 'Não autenticado', data: null });
    }
    // Ownership: só pode deletar suas URLs
    const url = await this.shortUrlService.findByShortCode(id);
    if (!url || url.userId !== userId) {
      return res.status(403).json({ success: false, error: 'Acesso negado', data: null });
    }
    const deleted = await this.shortUrlService.softDelete(url.id);
    return res.json({ success: true, data: deleted, error: null });
  }
} 