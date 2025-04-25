import { Router } from 'express';

import { container } from '../../../core/config/dependencyInjection';
import {
  createRateLimitMiddleware,
} from '../../../core/middlewares/rateLimit.middleware';

const router = Router();
const controller = container.authController;

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Autenticação de usuário
 *     description: Realiza login e retorna um token JWT.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "user@email.com"
 *               password:
 *                 type: string
 *                 example: "senha123"
 *     responses:
 *       200:
 *         description: Autenticado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 refreshToken:
 *                   type: string
 *       401:
 *         description: Credenciais inválidas
 */
router.post('/login', createRateLimitMiddleware({ windowMs: 60 * 1000, max: 5 }), (req, res) => controller.login(req, res));

/**
 * @swagger
 * /auth/refresh:
 *   post:
 *     summary: Renovar token JWT
 *     description: Recebe um refresh token e retorna um novo token JWT.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token renovado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Refresh token inválido
 */
router.post('/refresh', (req, res) => controller.refresh(req, res));

export default router; 