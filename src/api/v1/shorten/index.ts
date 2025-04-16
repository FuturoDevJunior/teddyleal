import { Router } from 'express';

import { container } from '../../../core/config/dependencyInjection';
import {
  createRateLimitMiddleware,
} from '../../../core/middlewares/rateLimit.middleware';

const router = Router();
const controller = container.shortUrlController;

/**
 * @swagger
 * /shorten:
 *   post:
 *     summary: Encurtar uma URL
 *     description: Recebe uma URL longa e retorna uma versão encurtada.
 *     tags:
 *       - Shorten
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 format: uri
 *                 example: "https://exemplo.com"
 *     responses:
 *       201:
 *         description: URL encurtada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 shortUrl:
 *                   type: string
 *                   example: "http://localhost:3000/abc123"
 *       400:
 *         description: Dados inválidos
 */
router.post('/', createRateLimitMiddleware({ windowMs: 60 * 1000, max: 10 }), (req, res) => controller.shorten(req, res));

/**
 * @swagger
 * /shorten/{shortCode}:
 *   get:
 *     summary: Redirecionar para a URL original
 *     description: Redireciona o usuário para a URL original a partir do código encurtado.
 *     tags:
 *       - Shorten
 *     parameters:
 *       - in: path
 *         name: shortCode
 *         schema:
 *           type: string
 *         required: true
 *         description: Código encurtado da URL
 *     responses:
 *       302:
 *         description: Redirecionamento para a URL original
 *       404:
 *         description: Código não encontrado
 */
router.get('/:shortCode', (req, res) => controller.redirect(req, res));

export default router; 