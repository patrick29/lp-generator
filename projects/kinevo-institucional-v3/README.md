# kinevo-institucional-v3

Site institucional da Kinevo (software e automação para corretoras de seguro), construído **do zero** — sem reaproveitar nada da v1/v2 — a partir do wireframe aprovado (`kinevo-site.html`, jul/2026).

## Design

- **Narrativa:** jornada de expansão de consciência (decisão 2026-07-23, ver `clients/kinevo/decisoes-copy.md`): Hero problem-first → O que isso custa (agitação) → A solução (tela real do sistema) → O que muda (4 telas) → Como trabalhamos → FAQ → Quem somos → CTA final.
- **Direção:** editorial "trust & authority". **Fundos sempre neutros** (branco/cinza claro; seções escuras em grafite neutro); o azul da marca `#0254EA` aparece **somente como destaque** (CTAs, eyebrows, acentos). **Prova visual = telas reais do sistema** renderizadas de `mockup/app-mock.html` (mesmos tokens do site) e capturadas em `src/assets/tela-*.webp` @2x — nunca wireframes abstratos nem foto de banco de imagem. Para alterar uma tela, edite o mock e recapture.
- **Tipografia:** Sora (títulos, ecoa a geometria do logo) · Inter (texto) · IBM Plex Mono (labels/dados).
- **Logo:** ícone "K" oficial inline (paths de `clients/kinevo/brand/SVG/`, viewBox recortado `288 304 504 472`), wordmark em Sora.
- **Dark mode:** automático via `prefers-color-scheme`, base grafite neutro.
- **Motion:** hero encena a consolidação (chips de portais + arquivos convergem no card, linhas entram em sequência) e vira dashboard "ao vivo" (barra de sync com typewriter, toasts, pill crítica pulsando, tilt no mouse). Em "O que muda", o texto rola e o painel sticky troca de vista (renovação → cross-sell → comissão → rotinas); no mobile cada bloco mostra seu próprio card. Tudo respeita `prefers-reduced-motion` (estado final estático).
- **Variante pendente de decisão:** hero claro (padrão) vs. hero escuro em grafite — ativar adicionando a classe `hero-dark` no `<html>`. Comparar `screenshots/01-hero.png` × `screenshots/01b-hero-dark.png`.

## Stack

HTML único (`src/index.html`), zero dependências de build. Google Fonts é a única request externa.

## Estrutura

- `src/index.html` — site completo
- `content/copy.md` — copy final + pendências (WhatsApp, sócios, LinkedIn, CNPJ)

## Deploy

Publicar a pasta `src/` (Netlify/Vercel, site estático). Antes do go-live, resolver as pendências listadas em `content/copy.md`.
