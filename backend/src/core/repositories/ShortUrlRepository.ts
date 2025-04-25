import {
  PrismaClient,
  ShortUrl,
} from '@prisma/client';

import { ListShortUrlsQueryDTO } from '../dtos/ShortUrl.dto';

export interface IShortUrlRepository {
  findByShortCode(shortCode: string): Promise<ShortUrl | null>;
  findById(id: string): Promise<ShortUrl | null>;
  create(data: { originalUrl: string; shortCode: string; userId?: string | null; expiresAt?: Date | string | null; tenantId: string }): Promise<ShortUrl>;
  listByUser(userId: string, query?: ListShortUrlsQueryDTO): Promise<ShortUrl[]>;
  updateClicks(id: string, increment?: number): Promise<ShortUrl>;
  softDelete(id: string): Promise<ShortUrl>;
}

export class ShortUrlRepository implements IShortUrlRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findByShortCode(shortCode: string): Promise<ShortUrl | null> {
    return this.prisma.shortUrl.findUnique({ where: { shortCode } });
  }

  async findById(id: string): Promise<ShortUrl | null> {
    return this.prisma.shortUrl.findUnique({ where: { id } });
  }

  async create(data: { originalUrl: string; shortCode: string; userId?: string | null; expiresAt?: Date | string | null; tenantId: string }): Promise<ShortUrl> {
    const { originalUrl, shortCode, userId = null, expiresAt = null, tenantId } = data;
    return this.prisma.shortUrl.create({
      data: {
        originalUrl,
        shortCode,
        userId,
        expiresAt,
        tenantId,
      },
    });
  }

  async listByUser(userId: string, query?: ListShortUrlsQueryDTO): Promise<ShortUrl[]> {
    const { page = 1, limit = 10, orderBy = 'createdAt', order = 'desc', search } = query || {};
    const where: Record<string, unknown> = { userId };
    if (search) {
      where.OR = [
        { originalUrl: { contains: search, mode: 'insensitive' } },
        { shortCode: { contains: search, mode: 'insensitive' } },
      ];
    }
    return this.prisma.shortUrl.findMany({
      where,
      orderBy: { [orderBy]: order },
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async updateClicks(id: string, increment = 1): Promise<ShortUrl> {
    return this.prisma.shortUrl.update({
      where: { id },
      data: { clicks: { increment } },
    });
  }

  async softDelete(id: string): Promise<ShortUrl> {
    return this.prisma.shortUrl.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
} 