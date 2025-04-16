import express from 'express';
import request from 'supertest';

import urlsRouter from '../api/v1/urls';
import { authMiddleware } from '../core/middlewares/auth.middleware';

describe('ShortUrlController (não autenticado)', () => {
  const appNoAuth = express();
  appNoAuth.use(express.json());
  appNoAuth.use('/api/v1/urls', authMiddleware, urlsRouter);

  it('deve impedir acesso se não autenticado', async () => {
    const res = await request(appNoAuth).get('/api/v1/urls');
    expect(res.status).toBe(401);
  });
}); 