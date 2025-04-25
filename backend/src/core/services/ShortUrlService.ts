import { ListShortUrlsQueryDTO } from '../dtos/ShortUrl.dto';
import { IShortUrlRepository } from '../repositories/ShortUrlRepository';

// Tipos utilitários para os retornos do repositório
// (Ajuste o nome do método se necessário)
type ShortUrl = Awaited<ReturnType<IShortUrlRepository['findByShortCode']>>;
type ShortUrlArray = Awaited<ReturnType<IShortUrlRepository['listByUser']>>;

export interface IShortUrlService {
  shorten(data: { originalUrl: string; userId?: string | null; expiresAt?: Date | string | null; tenantId: string }): Promise<ShortUrl>;
  findByShortCode(shortCode: string): Promise<ShortUrl>;
  listByUser(userId: string, query?: ListShortUrlsQueryDTO): Promise<ShortUrlArray>;
  incrementClicks(id: string, increment?: number): Promise<ShortUrl>;
  softDelete(id: string): Promise<ShortUrl>;
}

function generateShortCode(length = 6): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export class ShortUrlService implements IShortUrlService {
  constructor(private readonly shortUrlRepository: IShortUrlRepository) {}

  async shorten(data: { originalUrl: string; userId?: string | null; expiresAt?: Date | string | null; tenantId: string }): Promise<ShortUrl> {
    // Gera shortCode único
    let shortCode: string;
    let exists: ShortUrl;
    do {
      shortCode = generateShortCode();
      exists = await this.shortUrlRepository.findByShortCode(shortCode);
    } while (exists);
    return this.shortUrlRepository.create({
      originalUrl: data.originalUrl,
      shortCode,
      userId: data.userId ?? null,
      expiresAt: data.expiresAt ?? null,
      tenantId: data.tenantId,
    });
  }

  async findByShortCode(shortCode: string): Promise<ShortUrl> {
    return this.shortUrlRepository.findByShortCode(shortCode);
  }

  async listByUser(userId: string, query?: ListShortUrlsQueryDTO): Promise<ShortUrlArray> {
    return this.shortUrlRepository.listByUser(userId, query);
  }

  async incrementClicks(id: string, increment = 1): Promise<ShortUrl> {
    return this.shortUrlRepository.updateClicks(id, increment);
  }

  async softDelete(id: string): Promise<ShortUrl> {
    return this.shortUrlRepository.softDelete(id);
  }
} 