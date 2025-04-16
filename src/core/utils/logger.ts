import winston from 'winston';

// Criação do logger estruturado
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

// Função utilitária para incluir correlationId nos logs
function withCorrelationId(meta: Record<string, unknown>, correlationId?: string) {
  return correlationId ? { ...meta, correlationId } : meta;
}

export function logInfo(message: string, meta: Record<string, unknown> = {}, correlationId?: string) {
  logger.info(message, withCorrelationId(meta, correlationId));
}

export function logError(message: string, meta: Record<string, unknown> = {}, correlationId?: string) {
  logger.error(message, withCorrelationId(meta, correlationId));
}

export function logWarn(message: string, meta: Record<string, unknown> = {}, correlationId?: string) {
  logger.warn(message, withCorrelationId(meta, correlationId));
}

export function logDebug(message: string, meta: Record<string, unknown> = {}, correlationId?: string) {
  logger.debug(message, withCorrelationId(meta, correlationId));
}

export default logger; 