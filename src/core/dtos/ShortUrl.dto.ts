export interface CreateShortUrlDTO {
  originalUrl: string;
}

export interface ListShortUrlsQueryDTO {
  page?: number;
  limit?: number;
  orderBy?: 'createdAt' | 'clicks';
  order?: 'asc' | 'desc';
  search?: string;
} 