import 'dotenv/config';

import cors from 'cors';
import express, {
  NextFunction,
  Request,
  Response,
} from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import { PrismaClient } from '@prisma/client';

import authRouter from './api/v1/auth';
import shortenRouter from './api/v1/shorten';
import urlsRouter from './api/v1/urls';
import {
  correlationIdMiddleware,
} from './core/middlewares/correlationId.middleware';
import {
  errorHandlerMiddleware,
} from './core/middlewares/errorHandler.middleware';
import { softDeleteMiddleware } from './core/middlewares/softDelete.middleware';
import { logInfo } from './core/utils/logger';
import {
  httpRequestCounter,
  httpRequestDuration,
  metricsRegistry,
} from './core/utils/metrics';
import { initTracing } from './core/utils/tracing';

// Prisma Client
export const prisma = new PrismaClient();
prisma.$use(softDeleteMiddleware);

// Express App
const app = express();

// Middleware de correlationId (deve ser o primeiro)
app.use(correlationIdMiddleware);

// Middlewares globais
app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigin = process.env.CORS_ORIGIN;
    if (!origin || origin === allowedOrigin) {
      callback(null, true);
    } else {
      // @ts-expect-error: propriedade customizada
      const correlationId = ({}).correlationId;
      logInfo('CORS bloqueado', { origin }, correlationId);
      callback(new Error('CORS bloqueado: origem não permitida'));
    }
  },
  credentials: true,
}));
app.use(express.json());

// Logger de requisições estruturado
app.use((req: Request, res: Response, next: NextFunction) => {
  // @ts-expect-error: propriedade customizada
  const correlationId = req.correlationId;
  logInfo(`[${req.method}] ${req.url}`, {}, correlationId);
  next();
});

// Middleware de métricas HTTP (apenas se habilitado)
if (process.env.ENABLE_METRICS === 'true') {
  app.use((req: Request, res: Response, next: NextFunction) => {
    const end = httpRequestDuration.startTimer({ method: req.method, route: req.path });
    res.on('finish', () => {
      httpRequestCounter.inc({ method: req.method, route: req.path, status: res.statusCode });
      end({ status: res.statusCode });
    });
    next();
  });
}

// Healthcheck
app.get('/health', (_req: Request, res: Response) => res.json({ status: 'ok' }));

// Expor métricas Prometheus se habilitado
if (process.env.ENABLE_METRICS === 'true') {
  app.get('/metrics', async (_req: Request, res: Response) => {
    res.set('Content-Type', metricsRegistry.contentType);
    res.end(await metricsRegistry.metrics());
  });
}

// Rotas versionadas
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/shorten', shortenRouter);
app.use('/api/v1/urls', urlsRouter);

// Middleware global de tratamento de erros
app.use(errorHandlerMiddleware);

// Configuração Swagger/OpenAPI
if (process.env.NODE_ENV !== 'production') {
  const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'URL Shortener API',
      version: '1.0.0',
      description: 'Documentação da API do MVP Encurtador de URLs',
    },
    servers: [
      { url: 'http://localhost:' + (process.env.PORT || 3333) + '/api/v1' },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ bearerAuth: [] }],
  };
  const options = {
    swaggerDefinition,
    apis: ['./src/api/v1/**/*.ts', './src/core/controllers/*.ts'],
  };
  const swaggerSpec = swaggerJSDoc(options);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

// Inicializar tracing distribuído se habilitado
initTracing();

const port = process.env.PORT || 3333;
app.listen(port, () => {
  logInfo(`🚀 Server running on http://localhost:${port}`);
}); 