import {
  Request,
  Response,
} from 'express';
import { ParsedQs } from 'qs';

import { ShortUrlController } from '../core/controllers/ShortUrlController';
import { IShortUrlService } from '../core/services/ShortUrlService';
import { createShortUrlSchema } from '../core/validators/shortUrl.validator';

type MockAuthenticatedRequest = Partial<Request> & { user?: { id: string } };
type MockResponse = Partial<Response> & {
  status: jest.Mock;
  json: jest.Mock;
  redirect: jest.Mock;
};

const makeRes = (): MockResponse => {
  const res = {} as MockResponse;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.redirect = jest.fn().mockReturnValue(res);
  return res;
};

describe('ShortUrlController (unitário)', () => {
  let service: jest.Mocked<IShortUrlService>;
  let controller: ShortUrlController;

  beforeEach(() => {
    service = {
      shorten: jest.fn(),
      findByShortCode: jest.fn(),
      listByUser: jest.fn(),
      incrementClicks: jest.fn(),
      softDelete: jest.fn(),
    };
    controller = new ShortUrlController(service);
  });

  describe('shorten', () => {
    it('deve retornar 201 e shortUrl válido', async () => {
      // Body válido conforme schema, objeto literal simples com protótipo padrão
      const validBody = { originalUrl: 'https://www.google.com' };
      Object.setPrototypeOf(validBody, Object.prototype);
      const req: MockAuthenticatedRequest = { body: validBody, user: { id: 'user1' } };
      const res = makeRes();
      service.shorten.mockResolvedValue({ id: '1', originalUrl: 'https://www.google.com', shortCode: 'abc123', userId: 'user1', clicks: 0, createdAt: new Date(), updatedAt: new Date(), deletedAt: null });
      await controller.shorten(req as Request, res as Response);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ success: true, data: expect.any(Object) }));
    });
    it('deve retornar 422 se body inválido', async () => {
      // Body inválido conforme schema, objeto literal simples
      const invalidBody = { originalUrl: 123 as unknown as string };
      const req: MockAuthenticatedRequest = { body: invalidBody, user: { id: 'user1' } };
      const res = makeRes();
      await controller.shorten(req as Request, res as Response);
      expect(res.status).toHaveBeenCalledWith(422);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ success: false }));
    });
  });

  describe('redirect', () => {
    it('deve redirecionar se shortCode válido', async () => {
      const req: MockAuthenticatedRequest = { params: { shortCode: 'abc123' } };
      const res = makeRes();
      service.findByShortCode.mockResolvedValue({ id: '1', originalUrl: 'https://www.google.com', shortCode: 'abc123', userId: 'user1', clicks: 0, createdAt: new Date(), updatedAt: new Date(), deletedAt: null });
      service.incrementClicks.mockResolvedValue({ id: '1', originalUrl: 'https://www.google.com', shortCode: 'abc123', userId: 'user1', clicks: 1, createdAt: new Date(), updatedAt: new Date(), deletedAt: null });
      await controller.redirect(req as Request, res as Response);
      expect(res.redirect).toHaveBeenCalledWith('https://www.google.com');
    });
    it('deve retornar 404 se shortCode não encontrado', async () => {
      const req: MockAuthenticatedRequest = { params: { shortCode: 'notfound' } };
      const res = makeRes();
      service.findByShortCode.mockResolvedValue(null);
      await controller.redirect(req as Request, res as Response);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ success: false }));
    });
    it('deve retornar 404 se shortCode deletado', async () => {
      const req: MockAuthenticatedRequest = { params: { shortCode: 'deleted' } };
      const res = makeRes();
      service.findByShortCode.mockResolvedValue({ id: '1', originalUrl: 'https://www.google.com', shortCode: 'deleted', userId: 'user1', clicks: 0, createdAt: new Date(), updatedAt: new Date(), deletedAt: new Date() });
      await controller.redirect(req as Request, res as Response);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ success: false }));
    });
  });

  describe('listByUser', () => {
    it('deve retornar 401 se não autenticado', async () => {
      const req: MockAuthenticatedRequest = { user: undefined, query: {} };
      const res = makeRes();
      await controller.listByUser(req as Request, res as Response);
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ success: false }));
    });
    it('deve retornar 400 se query inválida', async () => {
      // Query inválida: page = '0' (menor que 1, string como espera o schema)
      const invalidQuery: ParsedQs = { page: '0' };
      const req: MockAuthenticatedRequest = { user: { id: 'user1' }, query: invalidQuery };
      const res = makeRes();
      await controller.listByUser(req as Request, res as Response);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ success: false }));
    });
    it('deve retornar lista de URLs se autenticado e query válida', async () => {
      // Query válida: page = '1', limit = '10' (string como espera o schema)
      const validQuery: ParsedQs = { page: '1', limit: '10' };
      const req: MockAuthenticatedRequest = { user: { id: 'user1' }, query: validQuery };
      const res = makeRes();
      service.listByUser.mockResolvedValue([{ id: '1', originalUrl: 'https://www.google.com', shortCode: 'abc123', userId: 'user1', clicks: 0, createdAt: new Date(), updatedAt: new Date(), deletedAt: null }]);
      await controller.listByUser(req as Request, res as Response);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ success: true, data: expect.any(Array) }));
    });
  });

  describe('softDelete', () => {
    it('deve retornar 401 se não autenticado', async () => {
      const req: MockAuthenticatedRequest = { user: undefined, params: { id: '1' } };
      const res = makeRes();
      await controller.softDelete(req as Request, res as Response);
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ success: false }));
    });
    it('deve retornar 403 se não for owner', async () => {
      const req: MockAuthenticatedRequest = { user: { id: 'user1' }, params: { id: '1' } };
      const res = makeRes();
      service.findByShortCode.mockResolvedValue({ id: '1', originalUrl: 'https://www.google.com', shortCode: 'abc123', userId: 'other', clicks: 0, createdAt: new Date(), updatedAt: new Date(), deletedAt: null });
      await controller.softDelete(req as Request, res as Response);
      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ success: false }));
    });
    it('deve deletar se owner', async () => {
      const req: MockAuthenticatedRequest = { user: { id: 'user1' }, params: { id: '1' } };
      const res = makeRes();
      service.findByShortCode.mockResolvedValue({ id: '1', originalUrl: 'https://www.google.com', shortCode: 'abc123', userId: 'user1', clicks: 0, createdAt: new Date(), updatedAt: new Date(), deletedAt: null });
      service.softDelete.mockResolvedValue({ id: '1', originalUrl: 'https://www.google.com', shortCode: 'abc123', userId: 'user1', clicks: 0, createdAt: new Date(), updatedAt: new Date(), deletedAt: new Date() });
      await controller.softDelete(req as Request, res as Response);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ success: true }));
    });
  });
});

describe('Validação Zod isolada', () => {
  it('deve aceitar um objeto body válido', () => {
    const validBody = { originalUrl: 'https://www.google.com' };
    const result = createShortUrlSchema.safeParse(validBody);
    expect(result.success).toBe(true);
  });
}); 