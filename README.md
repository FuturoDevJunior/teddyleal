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
      <td align="center"><a href="#visão-geral">✨<br><b>Visão Geral</b></a></td>
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

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Diferenciais do Projeto](#diferenciais-do-projeto)
- [Requisitos Atendidos](#requisitos-atendidos)
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

**Importante:**
- Nunca suba arquivos `.env` reais para o repositório.
- Sempre confira e atualize os exemplos de variáveis.
- No Railway, configure as variáveis manualmente conforme os exemplos.

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
- **Como contribuir:**
  1. Faça um fork do repositório
  2. Crie uma branch (`git checkout -b feature/nome-feature`)
  3. Commit suas mudanças (`git commit -m 'feat: minha feature'`)
  4. Push na branch (`git push origin feature/nome-feature`)
  5. Abra um Pull Request
- **Veja também:**
  - [Guia de Contribuição](./backend/CONTRIBUTING.md)
  - [Documentação Backend](./backend/README.md)

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