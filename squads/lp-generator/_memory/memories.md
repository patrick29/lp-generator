# Squad Memory: LP Generator

## Estilo de Escrita

## Design Visual

## Estrutura de Conteúdo

## Proibições Explícitas

## Técnico (específico do squad)

- **Output do squad = `clients/{slug}/` (single-write, 2026-05-14)**: TODOS os artefatos vão para a pasta do cliente. Mapeamento: brief.md → `clients/{slug}/brief/briefing.md`; strategy.md → `brief/strategy.md`; copy.md → `content/copy.md`; visual-system → `design/design-system.md` + `assets/images/`; código → `src/`; review → `deploy/qa-review.md`. Sem mirror em `squads/.../output/`. Sem versionamento v1/v2 — sobrescreve a cada run. Histórico via git.
- **Slug propagation**: step 01 captura o slug do cliente (picker com clientes existentes ou "Novo cliente" → copia `clients/_template/`) e escreve `squads/lp-generator/.runtime/current-slug.txt`. Steps 02-08 leem esse arquivo como primeira ação. Frontmatter dos steps não usa `outputFile`/`inputFile` — agentes escrevem manualmente.
- **Modo "design handoff"**: quando o Patrick fornece uma URL de design Anthropic (api.anthropic.com/v1/design/...), o bundle vem como .tar.gz. Etapas: WebFetch baixa o gzip → extrair com `tar -xzf` em `_build/design-fetch/` → ler README → ler chats → ler index.html e seguir imports. Pular steps de strategy/copy/design (Bruno/Carla/Diana). Davi Dev no step 06 faz `cp -r` do bundle `project/site/` direto pra `clients/{slug}/src/`.
- **Patrick prefere "copy as-is"** quando o design já é HTML/CSS/JS funcional: preserva pixel-perfect, todas animações e ferramentas de iteração (tweaks-panel, image-slot). Refactor para static-single-file é follow-up opcional.
- **Modo "brand asset integration" (2026-05-15)**: quando o cliente entrega uma pasta `brief/sobre-a-marca/` com manual de marca (logos, ícones, slides de essência/missão/tom), o squad NÃO roda pipeline completo do zero. Em vez disso: (1) ler logos+slides via Read multimodal, (2) extrair copy oficial, (3) mapear pra placeholders existentes no `src/`, (4) copiar PNGs pra `src/assets/` com nomes friendly (`brand-logomarca.png`, `brand-icon-orange.png` etc.), (5) atualizar componentes que tinham placeholders. Exemplo: nova-digital — manual revelou nome real "Letícia Shibayama", essência (Alegria/proximidade + Estratégia/inovação + Humanização) que substituiu placeholders genéricos do Manifesto.
- **Decisão híbrida nome-fundadora (nova-digital, 2026-05-15)**: Patrick prefere "Letícia Shibayama" no Founder.jsx (h2, autoridade), mas "Letícia" em CTAs e atendimento ("Falar com Letícia" — proximidade). Pattern aplicável a outros clientes com fundador-cara-da-marca.
- **Logos sem versão transparente (nova-digital, 2026-05-15)**: quando o brand kit só tem logos com fundo embutido (não SVG/PNG transparente), uma saída elegante é usar a logo-com-fundo como "badge" no Nav: wrap em `.nav__brand` com `border-radius: 10px` + `overflow: hidden` + `box-shadow` sutil. Vira um stamp visual coerente com a marca. Limitação documentada: idealmente pedir ao cliente versões transparentes/SVG.
