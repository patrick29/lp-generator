# <slug-do-cliente>-<projeto>-<versão>

Pasta-template para um **projeto** (uma LP entregável). Copie esta pasta, renomeie no padrão `[client-slug]-[project-name]-[version]` (ex.: `visttor-saas-v1`) e desenvolva aqui. Os **dados de referência** (briefing, identidade visual, logos, decision log de copy) ficam em `clients/<slug>/` — este projeto consome de lá.

## Estrutura (código da entrega)

| Item | O que vai aqui |
|------|----------------|
| `src/`     | Código-fonte da landing page (stack escolhida para este projeto) |
| `content/copy.md` | Copy final da LP (espelha os blocos). O decision log fica em `clients/<slug>/decisoes-copy.md`. |
| `deploy/`  | Configs de deploy (Vercel, Netlify, Cloudflare, domínio, DNS) |

## Fluxo

1. Ler a referência do cliente em `clients/<slug>/` (brief, design, assets, `decisoes-copy.md`).
2. Gerar/editar o código em `src/` a partir desses artefatos. Para SEO, use a skill `seo-lp`; para copy, `copy-lp`.
3. QA (`shared/checklists/qa.md`), preencher `deploy/deploy.md` e publicar.

> ⚠️ **Deploy:** ao criar/renomear esta pasta, aponte o *base/root directory* do Netlify/Vercel para `projects/<esta-pasta>/src`.

## Metadata

- **Cliente (slug):** <preencher — corresponde a clients/<slug>/>
- **Projeto:** <preencher — ex.: institucional, saas>
- **Versão:** <preencher — ex.: v1>
- **Stack escolhida:** <preencher>
- **URL final:** <preencher>
- **Prazo:** <preencher>
