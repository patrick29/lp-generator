# lp-generator — Instruções do Projeto

Monorepo de landing pages para múltiplos clientes. Cada cliente é isolado em sua própria pasta sob `clients/`.

## Estrutura

- `clients/` — uma pasta por cliente, isoladas entre si. `clients/_template/` é o molde para novos clientes.
- `dashboard/` — app (Vite/TS) de apoio.
- `shared/` — tooling/processo compartilhado (`prompts/`, `checklists/`). Nunca dependência de runtime das LPs.
- `docs/` — documentação do fluxo ([novo-cliente.md](docs/novo-cliente.md), [stack.md](docs/stack.md)).
- `skills/` — skills auxiliares (image-*, canva, resend, template-designer, etc.).
- `.claude/skills/` — skills do Claude Code deste projeto.

## Regras

- **Clientes são isolados:** nada de código/componentes compartilhados entre `clients/X` e `clients/Y`. O comum vai em `shared/`, só como tooling.
- A stack é decidida por cliente dentro de `clients/<cliente>/src/` (HTML puro, Astro, Next, etc.).
- Deploy é por cliente (ex.: Visttor via Netlify na pasta `clients/visttor-saas/`).

## Copywriting

Para escrever, revisar ou refinar copy de LP (headlines, hooks, CTAs, prova social, FAQ), use a skill **`copy-lp`** (`.claude/skills/copy-lp/`) — copywriter sênior pt-BR orientada a conversão. Dispara sozinha em pedidos de copy ou via `/copy-lp`.

- **Padronização por cliente:** cada cliente tem um decision log em `clients/<slug>/content/decisoes-copy.md` (a skill lê ANTES de escrever). Registra tom aprovado, driver, números de prova confirmados, palavras proibidas e CTAs aprovados. É o que garante consistência entre sessões.
- **Evolução:** lições que se repetem entre clientes graduam para `.claude/skills/copy-lp/references/aprendizados.md` (memória transversal da skill).

## SEO

Para auditoria de SEO, otimização on-page ou geração de HTML otimizado, use a skill **`seo-lp`** (`.claude/skills/seo-lp/`) — especialista em SEO pt-BR para sites e LPs. Dispara sozinha em pedidos de SEO ou via `/seo-lp`.
