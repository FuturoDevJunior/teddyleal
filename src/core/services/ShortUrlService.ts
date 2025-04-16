import { ShortUrl } from '@prisma/client';

import { ListShortUrlsQueryDTO } from '../dtos/ShortUrl.dto';
import { IShortUrlRepository } from '../repositories/ShortUrlRepository';

export interface IShortUrlService {
  shorten(data: { originalUrl: string; userId?: string | null }): Promise<ShortUrl>;
  findByShortCode(shortCode: string): Promise<ShortUrl | null>;
  listByUser(userId: string, query?: ListShortUrlsQueryDTO): Promise<ShortUrl[]>;
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

  async shorten(data: { originalUrl: string; userId?: string | null }): Promise<ShortUrl> {
    // Gera shortCode único
    let shortCode: string;
    let exists: ShortUrl | null;
    do {
      shortCode = generateShortCode();
      exists = await this.shortUrlRepository.findByShortCode(shortCode);
    } while (exists);
    return this.shortUrlRepository.create({
      originalUrl: data.originalUrl,
      shortCode,
      userId: data.userId ?? null,
    });
  }

  async findByShortCode(shortCode: string): Promise<ShortUrl | null> {
    return this.shortUrlRepository.findByShortCode(shortCode);
  }

  async listByUser(userId: string, query?: ListShortUrlsQueryDTO): Promise<ShortUrl[]> {
    return this.shortUrlRepository.listByUser(userId, query);
  }

  async incrementClicks(id: string, increment = 1): Promise<ShortUrl> {
    return this.shortUrlRepository.updateClicks(id, increment);
  }

  async softDelete(id: string): Promise<ShortUrl> {
    return this.shortUrlRepository.softDelete(id);
  }
} 