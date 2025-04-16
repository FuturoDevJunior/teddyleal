import {
  NextFunction,
  Request,
  Response,
} from 'express';
import { v4 as uuidv4 } from 'uuid';

/**
 * Middleware para gerar e propagar correlationId em cada requisição.
 * - Adiciona correlationId em req.correlationId
 * - Adiciona header X-Correlation-Id na resposta
 */
export function correlationIdMiddleware(req: Request, res: Response, next: NextFunction) {
  const correlationId = req.headers['x-correlation-id'] as string || uuidv4();
  // @ts-expect-error: propriedade customizada
  req.correlationId = correlationId;
  res.setHeader('X-Correlation-Id', correlationId);
  next();
} 