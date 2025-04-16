import validator from 'validator';
import { z } from 'zod';

export const createShortUrlSchema = z.object({
  originalUrl: z.string()
    .refine((url) => validator.isURL(url, { require_protocol: true }), { message: 'URL inválida' })
    .transform((url) => validator.trim(validator.escape(url))),
});

export type CreateShortUrlInput = z.infer<typeof createShortUrlSchema>;

export const listShortUrlsQuerySchema = z.object({
  page: z.string().optional().transform((v) => (v ? parseInt(v, 10) : 1)).refine((v) => v === undefined || v > 0, { message: 'page deve ser > 0' }),
  limit: z.string().optional().transform((v) => (v ? parseInt(v, 10) : 10)).refine((v) => !v || (v > 0 && v <= 100), { message: 'limit deve ser entre 1 e 100' }),
  orderBy: z.enum(['createdAt', 'clicks']).optional().default('createdAt'),
  order: z.enum(['asc', 'desc']).optional().default('desc'),
  search: z.string().optional().transform((v) => v?.trim()),
});

export type ListShortUrlsQueryInput = z.infer<typeof listShortUrlsQuerySchema>; 