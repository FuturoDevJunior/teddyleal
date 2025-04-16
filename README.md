# 🚀 Encurtador de URLs — Teste Técnico Back-End & Monorepo Enterprise

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/SEU_REPO/actions)
[![Coverage](https://img.shields.io/badge/coverage-80%25%2B-blue)](#testes)
[![Docker Ready](https://img.shields.io/badge/docker-ready-blue)](Dockerfile)
[![Deploy Cloud](https://img.shields.io/badge/cloud-deploy-success-green)](#deploy-cloud)

---

> **Desenvolvido por Gabriel Ferreira para o processo seletivo Back-End — Teddy (Tabata Leal)**

---

## ✨ Visão Geral

Este repositório entrega uma solução completa, escalável e profissional para encurtamento de URLs, autenticação, multi-tenant, observabilidade e infraestrutura como código. O projeto foi desenhado para demonstrar domínio em arquitetura de APIs REST, Clean Code, SOLID, automação, escalabilidade horizontal, testes e práticas de engenharia modernas.

---

## 📋 Requisitos Atendidos

| Requisito | Status |
|-----------|:------:|
| Cadastro e autenticação de usuários (IAM) | ✅ |
| Encurtamento de URLs (máx. 6 caracteres) | ✅ |
| Associação de URLs a usuários autenticados | ✅ |
| Listagem, edição, exclusão lógica e contabilização de cliques | ✅ |
| Soft delete e controle de timestamps | ✅ |
| Multi-tenant (header `x-tenant-id`) | ✅ |
| Observabilidade (logs, métricas, tracing) | ✅ |
| Deploy via Docker Compose, K8s, Terraform | ✅ |
| Testes automatizados, CI/CD, hooks, versionamento, documentação OpenAPI | ✅ |

---

## 🏗️ Arquitetura & Componentes

- **backend/** — Serviço principal de encurtamento de URLs (Node.js, Express, TypeScript, Prisma, JWT, Observabilidade, OpenAPI)
- **iam/** — Serviço de autenticação/autorização (IAM, pronto para extensão)
- **k8s/** — Manifests para Kubernetes
- **terraform/** — Infraestrutura como código (cloud, DB, etc.)
- **.github/** — Workflows de CI/CD
- **krakend.json** — Configuração do API Gateway (KrakenD)
- **docker-compose.yml** — Orquestração local de todos os serviços

```
[Usuário] ⇄ [KrakenD API Gateway] ⇄ [Backend] ⇄ [PostgreSQL]
                                 ⇄ [IAM Service]
```

---

## 🚦 Como Avaliar e Executar

1. **Suba o ambiente completo:**
   ```sh
   docker-compose up --build
   ```
   - API Gateway: http://localhost:8080
   - Backend: http://localhost:3000
   - IAM: http://localhost:4000
   - Swagger: http://localhost:3000/api-docs
   - Métricas: http://localhost:3000/metrics
   - Health: http://localhost:3000/health
2. **Acesse a documentação da API:**
   [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
3. **Rode os testes:**
   ```sh
   cd backend
   npm test
   ```
4. **Valide diferenciais:**
   - Multi-tenant: use o header `x-tenant-id`
   - Observabilidade: acesse `/metrics` e configure tracing via variáveis de ambiente

---

## 🛠️ Como Rodar Localmente (Desenvolvimento)

### 1. Pré-requisitos
- Docker e Docker Compose
- Node.js 20.x (para desenvolvimento local)

### 2. Subir todo o ambiente
```sh
docker-compose up --build
```

### 3. Desenvolvimento local de um serviço
```sh
cd backend # ou iam
npm install
cp .env.example .env # configure as variáveis
npx prisma migrate dev --name init # apenas backend
npx prisma generate # apenas backend
npm run dev
```

---

## ⚙️ Configuração de Variáveis de Ambiente

Cada serviço possui seu próprio arquivo `.env.example`. Configure conforme necessário:
- **backend/.env.example** — Banco, JWT, CORS, métricas, tracing
- **iam/.env.example** — Segredos de autenticação, DB, etc.

> Consulte cada README de serviço para detalhes específicos.

---

## 📜 Scripts e Comandos Úteis

| Comando | Descrição |
|---------|-----------|
| `docker-compose up --build` | Sobe todo o ambiente |
| `docker-compose down` | Para e remove containers |
| `npm run dev` | Dev backend/iam |
| `npm run lint` | Lint estrito |
| `npm test` | Testes unitários |
| `npx prisma migrate dev` | Migrations (backend) |
| `npx prisma generate` | Gera client Prisma (backend) |

---

## 🧩 Padrões de Código, Arquitetura e Contribuição

- **Clean Code & SOLID:** Todos os serviços seguem princípios de modularidade, responsabilidade única e extensibilidade.
- **Testes:** Todo novo código deve ser coberto por testes automatizados.
- **Documentação:** Atualize README e exemplos ao contribuir.
- **Pull Requests:**
  - Use branches descritivas
  - Explique o contexto e objetivo
  - Relacione issues/tarefas
  - Aguarde revisão antes do merge
- **Veja também:**
  - [backend/CONTRIBUTING.md](./backend/CONTRIBUTING.md)
  - [backend/README.md](./backend/README.md)

---

## 📚 Endpoints Principais e Exemplos de Uso

### Encurtar URL (público ou autenticado)
```http
POST /api/v1/shorten
Content-Type: application/json
Authorization: Bearer <token> (opcional)
{
  "originalUrl": "https://exemplo.com"
}
```
- Resposta: `{ "shortUrl": "http://localhost/aZbKq7" }`

### Redirecionar
```http
GET /aZbKq7
```
- Redireciona e contabiliza acesso

### Listar URLs do usuário (autenticado)
```http
GET /api/v1/urls
Authorization: Bearer <token>
```
- Resposta inclui quantidade de cliques

### Editar URL encurtado (autenticado)
```http
PUT /api/v1/urls/:id
Authorization: Bearer <token>
{
  "originalUrl": "https://novo-destino.com"
}
```

### Deletar URL encurtado (autenticado, soft delete)
```http
DELETE /api/v1/urls/:id
Authorization: Bearer <token>
```

### Autenticação
```http
POST /api/v1/auth/login
{
  "email": "user@dominio.com",
  "password": "senha"
}
```
- Resposta: `{ "token": "..." }`

---

## 🔒 Autenticação e Multi-Tenant

- **Cadastro e login de usuários** via IAM
- **Bearer Token** para endpoints protegidos
- **Multi-tenant:** header `x-tenant-id` para isolar dados por empresa
- URLs encurtadas por usuários autenticados são associadas ao usuário

---

## 📈 Observabilidade e Instrumentação

- **Logs:** Winston (estruturados)
- **Métricas:** Prometheus (`/metrics`)
- **Tracing:** Jaeger/OpenTelemetry
- **Ativação por variável de ambiente:** `ENABLE_OBSERVABILITY=true`
- **Configuração:** via variáveis de ambiente (ex: JAEGER_URL)

---

## ☁️ Deploy Cloud, Kubernetes e Terraform

- **Deploy cloud:** Railway, GCP, AWS, etc. (ajuste variáveis de ambiente)
- **Kubernetes:** manifests em `/k8s` para todos os serviços
- **Terraform:** infraestrutura como código em `/terraform`
- **API Gateway:** KrakenD (`krakend.json`)
- **Exemplo de deploy:**
  - `kubectl apply -f k8s/`
  - `terraform apply` (infra)

---

## 🔄 CI/CD, Hooks e Qualidade

- **CI/CD:** GitHub Actions (`.github/workflows/`)
- **Hooks:** Husky (pre-commit, pre-push)
- **Lint, testes e build** automatizados
- **Cobertura mínima:** 80%
- **Changelog:** versionamento semântico (`CHANGELOG.md`)
- **Git tags:** releases (`0.1.0`, `0.2.0`, ...)

---

## 🧭 Pontos de Melhoria e Escalabilidade

- Cache distribuído para contadores de cliques (Redis)
- Rate limit global e autenticação distribuída
- Deploy multi-região e balanceamento de carga
- Sessão distribuída, cache, mensageria, monitoramento centralizado

---

## ❓ FAQ

- **Como resetar o banco?**
  - Pare o Docker, remova o volume `db_data` e suba novamente.
- **Como rodar só um serviço?**
  - Siga o README do serviço desejado.
- **Como acessar a documentação da API?**
  - http://localhost:3000/api-docs
- **Como contribuir?**
  - Veja a seção [Padrões de Código e Contribuição](#padrões-de-código-e-contribuição) e os guias de cada serviço.
- **Porta ocupada?**
  - Rode `docker-compose down` e tente novamente.
- **Banco não conecta?**
  - Verifique `.env` e serviço `db`.
- **Testes falham?**
  - Rode `npm install` e `npx prisma generate`.
- **Problemas com Docker Compose?**
  - Atualize Docker/Compose.
- **Deploy cloud falha?**
  - Confira variáveis e logs.

---

## 🔗 Links Úteis
- [backend/README.md](./backend/README.md)
- [backend/CONTRIBUTING.md](./backend/CONTRIBUTING.md)
- [Documentação da API](http://localhost:3000/api-docs)
- [Princípios SOLID](https://medium.com/luizalabs/solid-principles-eab4be2d8e1b)
- [Clean Code](https://github.com/ryanmcdermott/clean-code-javascript)

---

> Dúvidas ou sugestões? Abra uma issue ou envie um PR!
> 
> **Contato:** Gabriel Ferreira — [LinkedIn](https://www.linkedin.com/in/devferreirag/) — devferreirag@gmail.com 