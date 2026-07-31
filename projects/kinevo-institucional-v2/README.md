# kinevo-institucional-v2

Site institucional da Kinevo como **scroll-film** (skill `scroll-film-studio`, Lane A —
pure-code): o topo da página é um filme contínuo scrubado pelo scroll ("O Expediente":
o caos dos portais de seguradoras colapsa no K da Kinevo e vira uma base única), que
dissolve nas seções editoriais do wireframe aprovado.

- `src/index.html` — página completa, autocontida (GSAP + ScrollTrigger + Lenis via CDN,
  Google Fonts: Sora / Inter / IBM Plex Mono). Logo real da marca embutido como SVG inline
  a partir de `clients/kinevo/brand/SVG/`.
- Cores da marca: azul `#0254EA`, marinho `#020B44` (extraídas dos SVGs oficiais).
- Acessibilidade: `prefers-reduced-motion` → fallback estático sem filme; figuras SVG com
  `role="img"` + `aria-label`.
- Dev contract: `?jump=<scrollY>` + `window.__ready` (verificação via
  `.claude/skills/scroll-film-studio/scripts/verify.js`). Jank test: PASS (max 46.8ms).
- Build sem nada da v1 (`kinevo-institucional-v1` permanece intocado).

Antes do deploy: preencher placeholders listados em `content/copy.md` e, se for CDN-less,
vendorizar GSAP/Lenis/fonts.
