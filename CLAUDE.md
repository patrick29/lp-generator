# lp-generator — Instruções do Projeto

Monorepo de landing pages para múltiplos clientes. **Dados do cliente** (referência) e **projetos** (código) são separados em dois níveis: `clients/` guarda a referência de cada cliente; `projects/` guarda cada projeto entregue.

## Estrutura

- `clients/` — uma pasta por cliente (slug em `kebab-case`, ex.: `visttor`), isoladas entre si. Guarda **só dados de referência**: briefing, identidade visual, logos, preferências, objetivos, produtos/serviços e o decision log de copy (`decisoes-copy.md`). É o input para o desenvolvimento. `clients/_template/` é o molde.
- `projects/` — uma pasta por projeto, nomeada `[client-slug]-[project-name]-[version]` (ex.: `visttor-saas-v1`, `nova-digital-institucional-v1`). Guarda o **código** (`src/`), configs de deploy (`deploy/`) e a copy final (`content/copy.md`). `projects/_template/` é o molde.
- `dashboard/` — app (Vite/TS) de apoio.
- `shared/` — tooling/processo compartilhado (`prompts/`, `checklists/`). Nunca dependência de runtime das LPs.
- `docs/` — documentação do fluxo ([novo-cliente.md](docs/novo-cliente.md), [stack.md](docs/stack.md)).
- `skills/` — skills auxiliares (image-*, canva, resend, template-designer, etc.).
- `.claude/skills/` — skills do Claude Code deste projeto.

## Regras

- **Clientes são isolados:** nada de código/componentes compartilhados entre projetos de clientes diferentes. O comum vai em `shared/`, só como tooling.
- Um cliente pode ter vários projetos/versões em `projects/` (ex.: `visttor-saas-v1`, `visttor-saas-v2`), todos apontando para os dados em `clients/visttor/`.
- A stack é decidida por projeto dentro de `projects/<projeto>/src/` (HTML puro, Astro, Next, etc.).
- Deploy é por projeto (ex.: Visttor via Netlify na pasta `projects/visttor-saas-v1/src/`). **Atenção:** ao mover/renomear projetos, atualize o *base/root directory* no painel do Netlify/Vercel.

## Copywriting

Para escrever, revisar ou refinar copy de LP (headlines, hooks, CTAs, prova social, FAQ), use a skill **`copy-lp`** (`.claude/skills/copy-lp/`) — copywriter sênior pt-BR orientada a conversão. Dispara sozinha em pedidos de copy ou via `/copy-lp`.

- **Padronização por cliente:** cada cliente tem um decision log em `clients/<slug>/decisoes-copy.md` (a skill lê ANTES de escrever). Fica no nível do cliente porque persiste entre projetos/versões; a copy final de cada LP fica em `projects/<projeto>/content/copy.md`. Registra tom aprovado, driver, números de prova confirmados, palavras proibidas e CTAs aprovados. É o que garante consistência entre sessões.
- **Evolução:** lições que se repetem entre clientes graduam para `.claude/skills/copy-lp/references/aprendizados.md` (memória transversal da skill).

## SEO

Para auditoria de SEO, otimização on-page ou geração de HTML otimizado, use a skill **`seo-lp`** (`.claude/skills/seo-lp/`) — especialista em SEO pt-BR para sites e LPs. Dispara sozinha em pedidos de SEO ou via `/seo-lp`.
