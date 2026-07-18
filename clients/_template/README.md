# <Nome do Cliente>

Pasta-template para os **dados de referência** de um cliente. Copie esta pasta inteira, renomeie para o slug do cliente (`kebab-case`) e preencha o conteúdo. O **código** da LP não mora aqui — vai em `projects/<slug>-<projeto>-<versão>/` (use `projects/_template/`).

## Estrutura (só referência — input do desenvolvimento)

| Item | O que vai aqui |
|------|----------------|
| `brief/`   | Briefing do cliente, personas, objetivos, KPIs, contexto de negócio, produtos/serviços |
| `design/`  | Design tokens, paleta, tipografia, referências visuais, wireframes |
| `assets/`  | Logos, imagens, fontes, vídeos do cliente (identidade visual, já otimizados quando possível) |
| `decisoes-copy.md` | Decision log de copy do cliente (lido pela skill `copy-lp`). Persiste entre projetos/versões. |

## Fluxo

1. Preencher `brief/`, `design/`, `assets/` e `decisoes-copy.md` — é a referência da marca.
2. Criar o projeto em `projects/<slug>-<projeto>-<versão>/` a partir de `projects/_template/` e gerar o código lá, consumindo estes dados.
3. Um mesmo cliente pode ter vários projetos/versões apontando para esta pasta.

## Metadata

- **Cliente:** <preencher>
- **Setor:** <preencher>
- **Objetivo principal:** <preencher — captura de leads, venda, evento, etc.>
- **Projetos:** <listar projetos em projects/ que usam este cliente>
