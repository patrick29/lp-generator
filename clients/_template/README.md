# <Nome do Cliente>

Pasta-template para um novo cliente. Copie esta pasta inteira, renomeie para o slug do cliente (`kebab-case`) e preencha o conteúdo.

## Estrutura

| Pasta | O que vai aqui |
|-------|----------------|
| `brief/`   | Briefing do cliente, personas, objetivos, KPIs, contexto de negócio |
| `content/` | Copy final da LP, textos, CTAs, FAQs, depoimentos |
| `design/`  | Design tokens, paleta, tipografia, referências visuais, wireframes |
| `assets/`  | Logos, imagens, fontes, vídeos do cliente (já otimizados quando possível) |
| `src/`     | Código-fonte da landing page (stack escolhida para este cliente) |
| `deploy/`  | Configs de deploy (Vercel, Netlify, Cloudflare, domínio, DNS) |

## Fluxo

1. Preencher `brief/`, `content/`, `design/` e `assets/` — é o input do opensquad.
2. Acionar opensquad apontando para esta pasta. Os agentes leem os artefatos acima e produzem código em `src/`.
3. QA, deploy e ajustes iterativos.

## Metadata

- **Cliente:** <preencher>
- **Setor:** <preencher>
- **Objetivo principal da LP:** <preencher — captura de leads, venda, evento, etc.>
- **Prazo:** <preencher>
- **URL final:** <preencher>
- **Stack escolhida:** <preencher quando decidir>
