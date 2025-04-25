import express, {
  NextFunction,
  Request,
  Response,
} from 'express';
import request from 'supertest';

import urlsRouter from '../api/v1/urls';
import { authMiddleware } from '../core/middlewares/auth.middleware';

// Mock do middleware de autenticação para testes autenticados
jest.mock('../core/middlewares/auth.middleware', () => ({
  authMiddleware: (req: Request, _res: Response, next: NextFunction) => {
    (req as Request & { user?: { id: string } }).user = { id: 'user-id-test' };
    next();
  },
}));

// Mock do repositório para garantir dados determinísticos
jest.mock('../core/repositories/ShortUrlRepository', () => {
  return {
    ShortUrlRepository: jest.fn().mockImplementation(() => ({
      listByUser: (_userId: string, query?: { search?: string; orderBy?: string; order?: string; page?: number; limit?: number }) => {
        // Simula URLs para testes
        const urls = [
          { id: '1', originalUrl: 'https://www.google.com', shortCode: 'abc123', userId: 'user-id-test', clicks: 10, createdAt: new Date(), updatedAt: new Date(), deletedAt: null },
          { id: '2', originalUrl: 'https://www.example.com', shortCode: 'exmpl1', userId: 'user-id-test', clicks: 5, createdAt: new Date(), updatedAt: new Date(), deletedAt: null },
        ];
        let filtered = urls;
        if (query?.search) {
          filtered = filtered.filter((u) => u.originalUrl.includes(query.search as string));
        }
        if (query?.orderBy === 'clicks') {
          filtered = filtered.sort((a, b) => (query.order === 'asc' ? a.clicks - b.clicks : b.clicks - a.clicks));
        }
        const page = query?.page || 1;
        const limit = query?.limit || 10;
        return Promise.resolve(filtered.slice((page - 1) * limit, page * limit));
      },
    })),
  };
});

describe('ShortUrlController (autenticado)', () => {
  const appAuth = express();
  appAuth.use(express.json());
  appAuth.use('/api/v1/urls', authMiddleware, urlsRouter);

  it('deve listar URLs paginadas do usuário', async () => {
    const res = await request(appAuth).get('/api/v1/urls?page=1&limit=2');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  it('deve buscar URLs por termo', async () => {
    const res = await request(appAuth).get('/api/v1/urls?search=google');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.some((url: { originalUrl: string }) => url.originalUrl.includes('google'))).toBe(true);
  });

  it('deve ordenar URLs por número de clicks', async () => {
    const res = await request(appAuth).get('/api/v1/urls?orderBy=clicks&order=desc');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data[0].clicks).toBeGreaterThanOrEqual(res.body.data[1].clicks);
  });
}); 