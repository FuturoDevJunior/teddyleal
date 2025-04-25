<!-- HERO VISUAL -->
<p align="center" style="margin-bottom: 0;">
  <img src="encurteddy.png" alt="Logo EncurTeddy" width="160" style="border-radius: 50%; box-shadow: 0 2px 16px #0003; margin-bottom: 0;"/>
</p>

<div align="center" style="margin-top: -12px;">
  <h1 style="font-size: 2.8rem; font-weight: bold; margin-bottom: 0;">🐻 <span style="color:#7B3FE4;">EncurTeddy</span></h1>
  <p style="font-size: 1.2rem; color: #555; margin-top: 0;">
    <strong>Encurtador de URLs Profissional • Multi-Tenant • Observabilidade • Deploy Cloud</strong>
  </p>
</div>

<!-- BADGES AGRUPADOS -->
<p align="center" style="margin-top: 0;">
  <!-- Build Status -->
  <a href="https://github.com/FuturoDevJunior/teddyleal/actions" title="Status do Build (GitHub Actions)">
    <img src="https://img.shields.io/github/actions/workflow/status/FuturoDevJunior/teddyleal/ci.yml?branch=main&label=build&logo=github&style=flat-square&color=4CAF50" alt="Build Status"/>
  </a>
  <!-- Coverage -->
  <a href="https://codecov.io/gh/FuturoDevJunior/teddyleal" title="Cobertura de Testes (Codecov)">
    <img src="https://img.shields.io/codecov/c/github/FuturoDevJunior/teddyleal?style=flat-square&logo=codecov&color=7B3FE4" alt="Coverage"/>
  </a>
  <!-- Deploy/Cloud Status (Railway) -->
  <a href="https://railway.app/project/teddyleal" title="Deploy Cloud Railway">
    <img src="https://img.shields.io/badge/railway-deploy-0B0D0E?logo=railway&logoColor=white&style=flat-square" alt="Railway Deploy"/>
  </a>
  <!-- Docker -->
  <a href="https://hub.docker.com/" title="Docker Ready">
    <img src="https://img.shields.io/badge/docker-ready-2496ED?logo=docker&logoColor=white&style=flat-square" alt="Docker Ready"/>
  </a>
  <!-- Issues abertas -->
  <a href="https://github.com/FuturoDevJunior/teddyleal/issues" title="Issues Abertas">
    <img src="https://img.shields.io/github/issues/FuturoDevJunior/teddyleal?style=flat-square&label=issues&color=FF9800&logo=github" alt="Issues"/>
  </a>
  <!-- Node Version -->
  <a href="https://nodejs.org/" title="Node.js Version">
    <img src="https://img.shields.io/badge/node-%3E=20.x-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js Version"/>
  </a>
  <!-- License -->
  <a href="https://github.com/FuturoDevJunior/teddyleal/blob/main/LICENSE" title="Licença MIT">
    <img src="https://img.shields.io/badge/license-MIT-222?style=flat-square&logo=github" alt="License: MIT"/>
  </a>
</p>

<hr style="border: none; border-top: 2px solid #eee; margin: 24px 0;"/>

<!-- SUMÁRIO VISUAL EM CARDS -->
<div align="center">
  <table>
    <tr>
      <td align="center"><a href="#visao-geral">✨<br><b>Visão Geral</b></a></td>
      <td align="center"><a href="#tecnologias-utilizadas">🧰<br><b>Tecnologias</b></a></td>
      <td align="center"><a href="#diferenciais-do-projeto">🏆<br><b>Diferenciais</b></a></td>
      <td align="center"><a href="#arquitetura--componentes">🏗️<br><b>Arquitetura</b></a></td>
      <td align="center"><a href="#como-executar-localmente">🚀<br><b>Execução</b></a></td>
      <td align="center"><a href="#faq">❓<br><b>FAQ</b></a></td>
      <td align="center"><a href="#contato-e-suporte">📬<br><b>Contato</b></a></td>
    </tr>
  </table>
</div>

## 📑 Sumário

- [Visão Geral](#visao-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Diferenciais do Projeto](#diferenciais-do-projeto)
- [Requisitos Atendidos](#requisitos-atendidos)
- [Possíveis Features Futuras](#possíveis-features-futuras)
- [Arquitetura & Componentes](#arquitetura--componentes)
- [Como Executar Localmente](#como-executar-localmente)
- [Configuração de Variáveis de Ambiente](#configuração-de-variáveis-de-ambiente)
- [Scripts e Comandos Úteis](#scripts-e-comandos-úteis)
- [Padrões de Código, Arquitetura e Contribuição](#padrões-de-código-arquitetura-e-contribuição)
- [Endpoints Principais e Exemplos de Uso](#endpoints-principais-e-exemplos-de-uso)
- [Autenticação e Multi-Tenant](#autenticação-e-multi-tenant)
- [Observabilidade e Instrumentação](#observabilidade-e-instrumentação)
- [Deploy Cloud, Kubernetes e Terraform](#deploy-cloud-kubernetes-e-terraform)
- [CI/CD, Hooks e Qualidade](#cicd-hooks-e-qualidade)
- [Pontos de Melhoria e Escalabilidade](#pontos-de-melhoria-e-escalabilidade)
- [FAQ](#faq)
- [Links Úteis](#-links-úteis)
- [Roadmap](#roadmap)
- [Licença](#licença)
- [Contato e Suporte](#contato-e-suporte)

---

## 🚦 Demonstração Rápida

Veja como encurtar e acessar uma URL em segundos:

```bash
# 1. Encurtar uma URL (substitua <token> se necessário)
curl -X POST http://localhost:3000/api/v1/shorten \
  -H 'Content-Type: application/json' \
  -d '{"originalUrl": "https://exemplo.com"}'

# 2. Redirecionar (acessar a URL encurtada)
curl -v http://localhost:3000/aZbKq7
```

> Para mais exemplos, veja a seção [Endpoints Principais e Exemplos de Uso](#endpoints-principais-e-exemplos-de-uso).

---

## ✨ Visão Geral

Solução completa, escalável e profissional para encurtamento de URLs, autenticação, multi-tenant, observabilidade e infraestrutura como código. Demonstra domínio em arquitetura de APIs REST, Clean Code, SOLID, automação, escalabilidade horizontal, testes e práticas de engenharia modernas.

---

## 🧰 Tecnologias Utilizadas

| Stack         | Tecnologias principais                                                                 |
|--------------|----------------------------------------------------------------------------------------|
| **Back-End** | Node.js, Express, TypeScript, Prisma, JWT, OpenAPI                                    |
| **IAM**      | Node.js, Express, JWT                                                                 |
| **Infra**    | Docker, Docker Compose, Kubernetes (K8s), Terraform, Railway, KrakenD (API Gateway)   |
| **Observab.**| Prometheus, Jaeger, OpenTelemetry, Winston (logs)                                     |
| **CI/CD**    | GitHub Actions, Husky                                                                 |

---

## 🏆 Diferenciais do Projeto

- **Multi-Tenant**: Isolamento de dados por empresa via header `x-tenant-id`.
- **Observabilidade Completa**: Logs estruturados, métricas Prometheus, tracing Jaeger/OpenTelemetry.
- **Infraestrutura como Código**: Deploy local (Docker Compose), cloud (Railway), K8s e Terraform.
- **Clean Code & SOLID**: Código modular, testável e extensível.
- **Documentação Profissional**: OpenAPI, exemplos, scripts e FAQ.
- **CI/CD Automatizado**: Testes, lint, build e versionamento semântico.

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

## 🚀 Possíveis Features Futuras

Abaixo estão sugestões de funcionalidades que podem ser implementadas para evoluir o EncurTeddy:

- **Painel do Usuário (Dashboard):** Visualização de URLs, estatísticas de cliques, filtros e busca.
- **Expiração Personalizada de URLs:** Definir data/hora de expiração ao criar uma URL.
- **Customização de ShortCode:** Usuário pode escolher o código encurtado, com validação de unicidade.
- **Analytics Avançado:** Gráficos de cliques, origem geográfica, dispositivos, exportação de relatórios.
- **Proteção por Senha:** URLs encurtadas podem exigir senha para redirecionamento.
- **Integração com Webhooks:** Notificações externas a cada clique, criação ou expiração de URL.
- **API Key para Integração:** Geração de API Keys para uso programático seguro da API.
- **Suporte a Multi-Tenant Avançado:** Isolamento de dados por organização, admins e usuários por tenant.
- **Shortener para Arquivos:** Upload de arquivos pequenos e geração de links curtos para download.
- **Blacklist/Whitelist de Domínios:** Bloquear domínios maliciosos ou permitir apenas domínios autorizados.
- **QR Code Dinâmico:** Gerar QR Code para cada URL encurtada, com tracking de escaneamentos.
- **Limite de Uso e Planos:** Diferentes limites de uso por plano, integração com sistemas de pagamento.
- **Notificações e Alertas:** E-mail ou push para eventos como expiração ou número de cliques.
- **Admin Dashboard:** Gerenciamento de usuários, URLs, monitoramento de abuso, estatísticas globais.
- **Melhorias de Segurança:** 2FA, rate limit adaptativo, monitoramento de tentativas de ataque.

## 🛣️ Roadmap Visual do Projeto

O roadmap abaixo apresenta a evolução planejada e realizada do EncurTeddy, agrupando entregas por temas e releases. Cada item possui status visual para facilitar acompanhamento e priorização.

### Legenda de Status
- ✅ Feito
- 🚧 Em andamento
- 🕒 Planejado

### Roadmap Geral

| Tema/Release                | Feature/Entrega                                         | Status |
|----------------------------|--------------------------------------------------------|:------:|
| **MVP**                    | Cadastro e autenticação de usuários (IAM)              | ✅     |
|                            | Encurtamento de URLs (máx. 6 caracteres)               | ✅     |
|                            | Associação de URLs a usuários autenticados             | ✅     |
|                            | Listagem, edição, exclusão lógica, contabilização      | ✅     |
|                            | Soft delete e controle de timestamps                   | ✅     |
|                            | Multi-tenant (header `x-tenant-id`)                    | ✅     |
|                            | Documentação OpenAPI/Swagger                           | ✅     |
|                            | Testes automatizados (unitário/integr.)                | ✅     |
|                            | CI/CD, hooks, versionamento, cobertura                 | ✅     |
| **Observabilidade**        | Logs estruturados (Winston)                            | ✅     |
|                            | Métricas Prometheus                                    | ✅     |
|                            | Tracing Jaeger/OpenTelemetry                           | ✅     |
| **Infraestrutura**         | Deploy local (Docker Compose)                          | ✅     |
|                            | Deploy cloud (Railway)                                 | ✅     |
|                            | Kubernetes (manifests)                                 | ✅     |
|                            | Terraform (infraestrutura como código)                 | ✅     |
|                            | API Gateway (KrakenD)                                  | ✅     |
| **Segurança**              | Rate limit por endpoint sensível                       | ✅     |
|                            | JWT seguro, variáveis via .env                         | ✅     |
|                            | Blacklist/Whitelist de domínios                        | 🕒     |
|                            | Proteção por senha nas URLs                            | 🕒     |
|                            | 2FA para login                                         | 🕒     |
| **Analytics & Dashboard**  | Painel do usuário (dashboard)                          | 🕒     |
|                            | Analytics avançado (cliques, origem, exportação)       | 🕒     |
|                            | QR Code dinâmico para URLs                             | 🕒     |
| **Expansão de Produto**    | Customização de ShortCode                              | 🕒     |
|                            | Expiração personalizada de URLs                        | 🕒     |
|                            | Notificações e alertas (e-mail, push)                  | 🕒     |
|                            | Integração com webhooks                                | 🕒     |
|                            | API Key para integração                                | 🕒     |
|                            | Shortener para arquivos                                | 🕒     |
|                            | Limite de uso e planos                                 | 🕒     |
|                            | Admin dashboard                                        | 🕒     |
| **Escalabilidade**         | Cache distribuído (Redis) para contadores              | 🕒     |
|                            | Rate limit global/distribuído                          | 🕒     |
|                            | Deploy multi-região, balanceamento de carga            | 🕒     |
|                            | Sessão distribuída, mensageria, monitoramento central  | 🕒     |
| **Internacionalização**    | Interface e docs multilíngue                           | 🕒     |

---

### Fluxograma de Evolução

```text
MVP
│
├── Autenticação (IAM) ──┬─ Cadastro/Login
│                        └─ JWT, Multi-Tenant
├── Encurtamento         ──┬─ Criar/Redirecionar URL
│                        └─ Listar/Editar/Excluir
├── Observabilidade      ──┬─ Logs
│                        ├─ Métricas
│                        └─ Tracing
├── Infraestrutura       ──┬─ Docker Compose
│                        ├─ Railway
│                        ├─ K8s
│                        └─ Terraform
│
├── Segurança            ──┬─ Rate Limit
│                        └─ JWT seguro
│
├── Analytics & Dashboard (futuro)
│   ├─ Dashboard
│   ├─ Analytics avançado
│   └─ QR Code
│
├── Expansão de Produto (futuro)
│   ├─ Customização de ShortCode
│   ├─ Expiração personalizada
│   ├─ Notificações/Webhooks
│   ├─ API Key
│   ├─ Shortener para arquivos
│   └─ Admin dashboard
│
├── Escalabilidade (futuro)
│   ├─ Cache distribuído
│   ├─ Rate limit global
│   ├─ Multi-região
│   └─ Sessão distribuída
│
└── Internacionalização (futuro)
```

---

## 🏗️ Arquitetura & Componentes

- **backend/** — Serviço principal de encurtamento de URLs (Node.js, Express, TypeScript, Prisma, JWT, Observabilidade, OpenAPI)
- **iam/** — Serviço de autenticação/autorização (IAM, pronto para extensão)
- **k8s/** — Manifests para Kubernetes
- **terraform/** — Infraestrutura como código (cloud, DB, etc.)
- **.github/** — Workflows de CI/CD
- **krakend.json** — Configuração do API Gateway (KrakenD)
- **docker-compose.yml** — Orquestração local de todos os serviços

<!-- DIAGRAMA DE ARQUITETURA (ASCII) -->
<div align="center">

```
┌────────────┐      ┌──────────────┐      ┌─────────────┐
│   Usuário  │ <--> │ KrakenD API  │ <--> │   Backend   │
└────────────┘      │  Gateway     │      └─────┬───────┘
                    └──────┬───────┘            │
                           │                    │
                  ┌────────▼───────┐    ┌───────▼───────┐
                  │   IAM Service  │    │  PostgreSQL   │
                  └───────────────┘    └───────────────┘
```

</div>

```
[Usuário] ⇄ [KrakenD API Gateway] ⇄ [Backend] ⇄ [PostgreSQL]
                                 ⇄ [IAM Service]
```

---

## 🚦 Como Executar Localmente

### 1. Pré-requisitos
- [Docker e Docker Compose](https://docs.docker.com/get-docker/)
- [Node.js 20.x](https://nodejs.org/) (para desenvolvimento local)

### 2. Subir todo o ambiente (recomendado)
```sh
docker-compose up --build
```

### 3. Desenvolvimento local de cada serviço

#### Backend
```sh
cd backend
npm install
cp .env.example .env # configure as variáveis
npx prisma migrate dev --name init # apenas backend
npx prisma generate # apenas backend
npm run dev
```

#### IAM
```sh
cd iam
npm install
cp .env.example .env # configure as variáveis
npm run dev
```

### 4. Testes

#### Backend (testes reais)
```sh
cd backend
npm test
```

#### IAM (placeholder, sempre retorna sucesso)
```sh
cd iam
npm test
# Saída esperada: "No tests yet"
```

---

## 🚦 CI/CD Automatizado

O EncurTeddy utiliza GitHub Actions para garantir qualidade, automação e entrega contínua:

- **CI (`.github/workflows/ci.yml`):**
  - Executa build, lint e testes automatizados para todos os serviços (`backend`, `iam`) a cada push/PR na branch `main`.
  - Utiliza cache de dependências para acelerar builds.
  - Envia cobertura de testes do backend para o Codecov.
  - O script `test` do IAM é um placeholder para garantir sucesso no CI/CD até que testes reais sejam implementados.
  - O ESLint está configurado para projetos modernos (eslint.config.mjs), sem a flag `--ext`.

- **Docker Publish (`.github/workflows/docker-publish.yml`):**
  - Builda e publica imagens Docker para `backend` e `iam` no Docker Hub a cada push na `main` ou criação de tag de release.
  - Imagens são versionadas e também publicadas como `latest`.

> Para detalhes, consulte os arquivos em `.github/workflows/` ou o [repositório no GitHub](https://github.com/FuturoDevJunior/teddyleal).

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
- **Como contribuir:**
  1. Faça um fork do repositório
  2. Crie uma branch (`git checkout -b feature/nome-feature`)
  3. Commit suas mudanças (`git commit -m 'feat: minha feature'`)
  4. Push na branch (`git push origin feature/nome-feature`)
  5. Abra um Pull Request
- **Veja também:**
  - [Guia de Contribuição](./backend/CONTRIBUTING.md)
  - [Documentação Backend](./backend/README.md)

## 🚦 CI/CD Automatizado

O EncurTeddy utiliza GitHub Actions para garantir qualidade, automação e entrega contínua:

- **CI (`.github/workflows/ci.yml`):**
  - Executa build, lint e testes automatizados para todos os serviços (`backend`, `iam`) a cada push/PR na branch `main`.
  - Utiliza cache de dependências para acelerar builds.
  - Envia cobertura de testes do backend para o Codecov.
  - O script `test` do IAM é um placeholder para garantir sucesso no CI/CD até que testes reais sejam implementados.
  - O ESLint está configurado para projetos modernos (eslint.config.mjs), sem a flag `--ext`.

- **Docker Publish (`.github/workflows/docker-publish.yml`):**
  - Builda e publica imagens Docker para `backend` e `iam` no Docker Hub a cada push na `main` ou criação de tag de release.
  - Imagens são versionadas e também publicadas como `latest`.

> Para detalhes, consulte os arquivos em `.github/workflows/` ou o [repositório no GitHub](https://github.com/FuturoDevJunior/teddyleal).

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

> ℹ️ **Dica:** Use o [Swagger](http://localhost:3000/api-docs) para testar todos os endpoints de forma interativa!

<!-- BLOCOS DE CÓDIGO COM DESTAQUE VISUAL -->
<div style="border: 1.5px solid #7B3FE4; border-radius: 8px; background: #f8f6fc; padding: 12px; margin-bottom: 16px;">

```bash
# 1. Encurtar uma URL (substitua <token> se necessário)
curl -X POST http://localhost:3000/api/v1/shorten \
  -H 'Content-Type: application/json' \
  -d '{"originalUrl": "https://exemplo.com"}'

# 2. Redirecionar (acessar a URL encurtada)
curl -v http://localhost:3000/aZbKq7
```

</div>

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
  - [Documentação Swagger (localhost)](http://localhost:3000/api-docs)
- **Como contribuir?**
  - Veja a seção [Padrões de Código e Contribuição](#padrões-de-código-arquitetura-e-contribuição) e os guias de cada serviço.
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

- [Documentação da API (Swagger)](http://localhost:3000/api-docs) — Teste e explore todos os endpoints da API.
- [Documentação do Backend](./backend/README.md) — Guia completo de uso, arquitetura e endpoints.
- [Guia de Contribuição](./backend/CONTRIBUTING.md) — Como contribuir, padrões de código e fluxo de PRs.
- [Arquivo de Deploy Railway](./railway.json) — Configuração para deploy cloud.
- [Orquestração Docker Compose](./docker-compose.yml) — Suba todo o ambiente localmente.
- [Configuração do API Gateway (KrakenD)](./krakend.json) — Gateway de APIs.
- [Changelog do Projeto](./CHANGELOG.md) — Histórico de versões e mudanças.
- [Deploy Cloud com Railway](https://railway.app/) — Plataforma recomendada para deploy rápido e fácil.
- [Repositório no GitHub](https://github.com/FuturoDevJunior/teddyleal) — Código-fonte, issues e releases.
- [Contato do Autor — Gabriel Ferreira (LinkedIn)](https://www.linkedin.com/in/DevFerreiraG/) — Dúvidas, sugestões ou parcerias.

---

## 🛣️ Roadmap

- [ ] Integração com cache distribuído (Redis)
- [ ] Rate limit global e autenticação distribuída
- [ ] Deploy multi-região e balanceamento de carga
- [ ] Sessão distribuída, cache, mensageria, monitoramento centralizado
- [ ] Interface web para gerenciamento dos links
- [ ] Internacionalização (README e API)

---

## 📝 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

## 📬 Contato e Suporte

- Dúvidas ou sugestões? Abra uma [issue](https://github.com/FuturoDevJunior/teddyleal/issues) ou envie um PR!
- Contato direto: Gabriel Ferreira — [LinkedIn](https://www.linkedin.com/in/DevFerreiraG/) — Contato.FerreiraG@outlook.com

---

## ☁️ Deploy Cloud com Railway

O deploy pode ser realizado facilmente via [Railway](https://railway.app/):

1. **Conecte o repositório ao Railway**
   - Crie um novo projeto em https://railway.app/
   - Conecte este repositório via GitHub
2. **Configure as variáveis de ambiente**
   - Para cada serviço (`backend`, `iam`), configure as variáveis conforme os arquivos `.env.example` de cada pasta
3. **Deploy**
   - O Railway detecta automaticamente o arquivo `railway.json` e cria os serviços
   - Acompanhe os logs e URLs geradas

> Consulte o arquivo `railway.json` na raiz para detalhes de configuração dos serviços.

---

## ✅ Checklist de Deploy — EncurTeddy

### 1. Pré-requisitos
- [ ] Docker e Docker Compose instalados **(ou ambiente cloud configurado)**
- [ ] Node.js 20.x instalado (para builds locais)
- [ ] Variáveis de ambiente revisadas e seguras (`.env` ou painel cloud)
- [ ] Banco de dados provisionado e acessível (PostgreSQL)
- [ ] Secrets/JWT configurados corretamente

---

### 2. Preparação do Projeto
- [ ] Pull do código atualizado da branch principal (`main` ou `release`)
- [ ] Validar que o pipeline do **GitHub Actions (CI/CD)** está passando para o commit/PR atual
- [ ] Rodar `npm install` em todos os serviços (`backend`, `iam`)
- [ ] Rodar `npx prisma generate` e `npx prisma migrate deploy` no backend
- [ ] Validar `.env` de cada serviço (backend, iam, etc.)
- [ ] Conferir configurações de CORS, domínios e portas

---

### 3. Build e Testes
- [ ] Rodar `npm run build` em todos os serviços
- [ ] Rodar `npm test` e garantir **100% dos testes passando**
- [ ] Rodar `npm run lint` e corrigir eventuais avisos/erros
- [ ] Validar cobertura mínima de testes (>80%)
- [ ] Validar que o **cache de dependências** está funcionando no pipeline (ver logs do GitHub Actions)

---

### 4. Infraestrutura
- [ ] Subir banco de dados (local ou cloud)
- [ ] Subir serviços via `docker-compose up --build` **ou** via plataforma cloud (Railway, K8s, etc.)
- [ ] Validar que todos os containers estão "healthy" (`docker ps` ou painel cloud)
- [ ] Configurar volumes/persistência para banco de dados

---

### 5. Configuração de Observabilidade
- [ ] Validar variáveis de observabilidade (`ENABLE_OBSERVABILITY`, `JAEGER_URL`, etc.)
- [ ] Validar endpoints de métricas (`/metrics`) e tracing
- [ ] Conferir logs estruturados (Winston) e integração com sistemas de log externos (se aplicável)

---

### 6. Validação Pós-Deploy
- [ ] Testar endpoints principais via Postman/curl/Swagger
- [ ] Validar autenticação, encurtamento, listagem, exclusão e redirecionamento
- [ ] Testar cenários de erro (resposta JSON, sem HTML)
- [ ] Validar multi-tenant (header `x-tenant-id`)
- [ ] Validar métricas e tracing em produção

---

### 7. Segurança e Boas Práticas
- [ ] Garantir que `.env** NÃO** está versionado
- [ ] Validar rate limit em endpoints sensíveis
- [ ] Validar HTTPS (em produção/cloud)
- [ ] Validar que segredos/JWT não estão expostos em logs

---

### 8. Documentação e Comunicação
- [ ] Atualizar README e documentação de endpoints
- [ ] Comunicar stakeholders sobre o deploy
- [ ] Registrar release no CHANGELOG.md

---

### 9. Monitoramento e Rollback
- [ ] Monitorar logs e métricas após o deploy
- [ ] Ter plano de rollback (ex: `docker-compose down` ou reverter release cloud)
- [ ] Validar alertas de erro e performance

---

<!-- RODAPÉ VISUAL E CONTATO -->
<div align="center" style="margin-top: 32px; margin-bottom: 0;">
  <img src="encurteddy.png" alt="Logo EncurTeddy" width="80" style="border-radius: 50%; box-shadow: 0 2px 8px #0002; margin-bottom: 8px;"/>
  <h3>Gabriel Ferreira</h3>
  <p>
    <a href="https://www.linkedin.com/in/DevFerreiraG/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
    <a href="mailto:Contato.FerreiraG@outlook.com"><img src="https://img.shields.io/badge/Email-0078D4?style=flat-square&logo=microsoft-outlook&logoColor=white" alt="Email"/></a>
    <a href="https://github.com/FuturoDevJunior/teddyleal" target="_blank"><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub"/></a>
  </p>
  <p><strong>Dúvidas, sugestões ou parcerias? <br> Fique à vontade para entrar em contato ou abrir uma <a href="https://github.com/FuturoDevJunior/teddyleal/issues">issue</a>!</strong></p>
</div>

--- 