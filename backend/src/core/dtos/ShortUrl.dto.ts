export interface CreateShortUrlDTO {
  originalUrl: string;
  expiresAt?: Date | string;
}

export interface ListShortUrlsQueryDTO {
  page?: number;
  limit?: number;
  orderBy?: 'createdAt' | 'clicks';
  order?: 'asc' | 'desc';
  search?: string;
} 