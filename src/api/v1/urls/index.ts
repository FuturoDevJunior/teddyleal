import { Router } from 'express';

import { container } from '../../../core/config/dependencyInjection';
import { authMiddleware } from '../../../core/middlewares/auth.middleware';

const router = Router();
const controller = container.shortUrlController;

/**
 * @swagger
 * /urls:
 *   get:
 *     summary: Listar URLs do usuário autenticado
 *     description: Retorna todas as URLs encurtadas pelo usuário autenticado.
 *     tags:
 *       - URLs
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de URLs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   originalUrl:
 *                     type: string
 *                   shortCode:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *       401:
 *         description: Não autenticado
 */
router.get('/', authMiddleware, (req, res) => controller.listByUser(req, res));

/**
 * @swagger
 * /urls/{id}:
 *   delete:
 *     summary: Soft delete de URL do usuário autenticado
 *     description: Marca uma URL como deletada para o usuário autenticado.
 *     tags:
 *       - URLs
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da URL
 *     responses:
 *       204:
 *         description: URL deletada com sucesso
 *       401:
 *         description: Não autenticado
 *       404:
 *         description: URL não encontrada
 */
router.delete('/:id', authMiddleware, (req, res) => controller.softDelete(req, res));

export default router; 