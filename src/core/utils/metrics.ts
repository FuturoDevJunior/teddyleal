import client, {
  Counter,
  Gauge,
  Histogram,
} from 'prom-client';

// Registry customizado para evitar conflitos em testes
export const metricsRegistry = new client.Registry();

// Exemplo de métricas globais
export const httpRequestCounter = new Counter({
  name: 'http_requests_total',
  help: 'Total de requisições HTTP',
  labelNames: ['method', 'route', 'status'],
  registers: [metricsRegistry],
});

export const httpRequestDuration = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duração das requisições HTTP em segundos',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.05, 0.1, 0.2, 0.5, 1, 2, 5],
  registers: [metricsRegistry],
});

export const activeUsersGauge = new Gauge({
  name: 'active_users',
  help: 'Usuários autenticados ativos',
  registers: [metricsRegistry],
});

export default {
  metricsRegistry,
  httpRequestCounter,
  httpRequestDuration,
  activeUsersGauge,
}; 