import {
  Request,
  Response,
} from 'express';

import { logError } from '../utils/logger';

/**
 * Middleware global para tratamento e logging de erros.
 * - Padroniza resposta: { success: false, error }
 * - Nunca vaza dados sensíveis em produção
 * - Loga erros inesperados
 * - Retorna status 500 padrão e mensagem amigável
 */
function getErrorStatus(err: unknown): number {
  if (typeof err === 'object' && err !== null && 'status' in err && typeof (err as { status?: unknown }).status === 'number') {
    return (err as { status: number }).status;
  }
  return 500;
}

export function errorHandlerMiddleware(err: unknown, req: Request, res: Response) {
  // Nunca logar dados sensíveis
  const isProd = process.env.NODE_ENV === 'production';
  const safeError = {
    message: isProd ? 'Internal Server Error' : err instanceof Error ? err.message : 'Internal Server Error',
    status: getErrorStatus(err),
    ...(isProd ? {} : err instanceof Error ? { stack: err.stack } : {})
  };

  // @ts-expect-error: propriedade customizada
  const correlationId = req.correlationId;
  logError(safeError.message, safeError, correlationId);
  res.status(safeError.status).json({ success: false, error: safeError.message });
} 