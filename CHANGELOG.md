# CHANGELOG

## [1.1.0] - 2025-04-16
### Added
- Endpoint `/api/v1/health` no backend para healthcheck versionado.
- Endpoint explícito `/api/url/health` no Krakend para proxy transparente do healthcheck do backend.
- Documentação detalhada dos fluxos de healthcheck e proxy no README.

### Changed
- `krakend.json`: Corrigido `url_pattern` dos endpoints dinâmicos para `/api/v1/:rest` (backend) e `/api/iam/:rest` (IAM).
- Adicionado `output_encoding: "no-op"` em todos os endpoints dinâmicos do Krakend para proxy transparente.
- README.md: Atualizado exemplos, instruções de troubleshooting, rebuild e arquitetura.

### Fixed
- Erro 500 ao acessar healthcheck via gateway devido a proxy dinâmico inadequado.
- Problema de build desatualizado do backend resolvido com rebuild forçado (`docker compose build --no-cache backend`).

## [1.1.0] - 2024-06-07
### Adicionado
- Criação do arquivo MELHORIAS.md, documentando de forma transparente e estratégica todas as oportunidades de melhoria do projeto.
- Expansão do MELHORIAS.md com sugestões técnicas, de experiência do usuário, automação, performance, cultura DevOps, onboarding, gamificação, acessibilidade e feedback do usuário.
- Linguagem acessível para devs, RH e liderança, com tom profissional e divertido.

---

## [1.0.0] - 2024-06-06
### Adicionado
- Primeira versão estável do EncurTeddy: backend, IAM, infraestrutura, testes, documentação e observabilidade.

## [1.2.0] - 2025-04-16
### Added
- Integração Codecov e badge de cobertura no README.
- Upload automático de cobertura no CI/CD (GitHub Actions).

### Changed
- Middleware soft delete compatível com Prisma v5 (tipagem e robustez).
- Configuração Jest para cobertura e compatibilidade com TypeScript.
- Scripts de teste e cobertura padronizados para CI/CD.
- Documentação README aprimorada (sumário, quickstart, roadmap, licenciamento, contribuição, links úteis).

### Fixed
- Dependências de tipagem e execução de testes (`qs`, `@types/qs`).
- Lint 100% limpo em todo o projeto.
- Problemas de cobertura e execução de testes corrigidos. 