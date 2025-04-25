import express from 'express';
import request from 'supertest';

import authRouter from '../api/v1/auth';

const app = express();
app.use(express.json());
app.use('/api/v1/auth', authRouter);

describe('AuthController (integração)', () => {
  it('deve retornar erro se e-mail ou senha não forem enviados', async () => {
    const res = await request(app).post('/api/v1/auth/login').send({});
    expect(res.status).toBe(422);
    expect(res.body.success).toBe(false);
  });

  // Para testar sucesso real, seria necessário mockar o container e o controller
  // Aqui, garantimos que a rota está protegida contra payloads inválidos
}); 