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

---

## [1.0.0] - 2025-04-15
- Versão inicial do monorepo, arquitetura completa, CI/CD, testes, documentação e deploy local/cloud. 