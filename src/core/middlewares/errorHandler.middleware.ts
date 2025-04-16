import {
  Request,
  Response,
} from 'express';

import { logError } from '../utils/logger';

/**
 * Middleware global para tratamento e logging de erros.
 * - Padroniza resposta: { success: false, error }
 * - Usa logger estruturado
 * - Não vaza dados sensíveis
 */
function getErrorStatus(err: unknown): number {
  if (typeof err === 'object' && err !== null && 'status' in err && typeof (err as { status?: unknown }).status === 'number') {
    return (err as { status: number }).status;
  }
  return 500;
}

export function errorHandlerMiddleware(err: unknown, req: Request, res: Response) {
  // Nunca logar dados sensíveis
  const safeError = {
    message: err instanceof Error ? err.message : 'Internal Server Error',
    status: getErrorStatus(err),
    ...(process.env.NODE_ENV !== 'production' && err instanceof Error ? { stack: err.stack } : {})
  };

  // @ts-expect-error: propriedade customizada
  const correlationId = req.correlationId;
  logError(safeError.message, safeError, correlationId);
  res.status(safeError.status).json({ success: false, error: safeError.message });
} 