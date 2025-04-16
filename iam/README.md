# IAM — Serviço de Autenticação

## ✨ Visão Geral

Serviço de autenticação/autorização do monorepo, responsável por:
- Cadastro e login de usuários
- Geração e validação de tokens JWT
- Healthcheck
- Pronto para extensão (multi-tenant, OAuth, etc.)

## 🚦 Como Executar

```sh
docker-compose up --build
```
- Porta: http://localhost:4000
- Health: http://localhost:4000/health

## ⚙️ Variáveis de Ambiente

Veja `.env.example` para todas as opções:
- `PORT` — porta do serviço
- Outros segredos de autenticação conforme necessário

## 📚 Endpoints Principais

### Healthcheck
```http
GET /health
→ { "status": "ok", "service": "iam" }
```

### Cadastro e Login
- Implemente conforme sua necessidade (exemplo: `/register`, `/login`)
- Integração com backend via token JWT

## 🔗 Integração com Gateway Krakend
- Endpoints expostos via `/api/iam/:rest` no gateway
- Healthcheck via `/api/iam/health` (proxy para `/health` do IAM)

## 🧩 Troubleshooting
- Healthcheck falha? Verifique logs e variáveis de ambiente.
- Veja o [README principal](../README.md) e [CHANGELOG.md](../CHANGELOG.md) para detalhes. 