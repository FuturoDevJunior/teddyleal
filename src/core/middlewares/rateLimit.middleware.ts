import {
  Request,
  Response,
} from 'express';
import rateLimit, { Options } from 'express-rate-limit';

import { logWarn } from '../utils/logger';

/**
 * Middleware de rate limiting configurável para endpoints sensíveis.
 * - Limite e janela configuráveis por endpoint.
 * - Resposta padronizada e logging estruturado.
 * - Uso: aplique diretamente na rota desejada.
 */
export function createRateLimitMiddleware(options?: Partial<Options>) {
  return rateLimit({
    windowMs: 60 * 1000, // 1 minuto
    max: 5, // 5 requisições por janela
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req: Request, res: Response) => {
      // @ts-expect-error: propriedade customizada
      const correlationId = req.correlationId;
      logWarn('Rate limit exceeded', { ip: req.ip, path: req.originalUrl }, correlationId);
      res.status(429).json({ success: false, error: 'Muitas requisições. Tente novamente em instantes.' });
    },
    ...options,
  });
} 