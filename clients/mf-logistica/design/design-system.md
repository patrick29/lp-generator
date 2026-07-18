# Visual System — MF Logística (LP Institucional)

## Direção escolhida

**A · Institucional sólido** (ref: transportadoras premium / DHL custom). Azul `#005CB2` dominante em headers e blocos de marca; laranja `#FF5A21` reservado a CTAs, números de destaque e ícones-chave; branco/cinza-claro nos fundos de conteúdo. Hero fotográfico (caminhão na rodovia) com overlay azul para contraste. Amplifica a Big Idea (segurança/controle), não decora.

## Colors (5 base — variações por tint/shade; todos os pares validados WCAG AA)

| Token | Hex | Papel | Contraste validado |
|-------|-----|-------|--------------------|
| `--blue` (primary) | `#005CB2` | marca, headings, links, blocos | branco sobre `--blue` = **6.6:1** ✓ (AA todos os tamanhos) · `--blue` sobre branco = **6.6:1** ✓ |
| `--orange` (accent/CTA) | `#FF5A21` | botões CTA, números display, ícones | texto branco **700 ≥18px** sobre `--orange` = **3.11:1** ✓ (AA large text) · usar laranja só em texto grande/bold ou elementos não-texto |
| `--navy` (dark) | `#00264D` | footer, seções de contraste, overlay do hero | branco sobre `--navy` = **15.2:1** ✓ |
| `--surface` (light) | `#F4F7FB` | fundos de seções alternadas, cards | texto `--text` sobre surface ≈ 15:1 ✓ |
| `--text` | `#0F1B2D` | corpo e títulos sobre claro | sobre branco ≈ **16.8:1** ✓ |

Suporte (tints/shades das bases, não contam como novas cores):
- `--text-muted` `#475569` (slate-600) sobre branco = **7.5:1** ✓ (texto secundário)
- `--blue-tint` `#E6F0FA` (fundo de chips/realces suaves)
- `--border` `#D9E2EC`
- `--white` `#FFFFFF`

**Regra de contraste (anti-veto):**
- Laranja **NUNCA** em texto pequeno de corpo (3.11:1 reprova para texto normal). Só em: botões (700 ≥18px = large text ✓), números display (≥32px ✓), ícones, bordas e elementos gráficos.
- Texto sobre o hero fotográfico: overlay `--navy` a 62% (ou gradiente navy→transparente) garante branco a 15:1.

## Typography

- **Heading:** `Manrope`, pesos 700 / 800 (geométrica, robusta, B2B sólida) — Google Fonts.
- **Body:** `Inter`, pesos 400 / 500 / 600 — Google Fonts.

Scale (desktop): hero 56 / h2 38 / h3 24 / body 18 / caption 14
Scale (mobile):  hero 34 / h2 26 / h3 20 / body 16 / caption 13

- Line-height: headings 1.1, body 1.6. Body mínimo 16px no mobile ✓.

## Spacing & Radius

- Base: 8px. Scale: 8 / 16 / 24 / 32 / 48 / 64 / 96.
- Section padding vertical: 64 (mobile) / 96 (desktop).
- Radius: button 10, card 16, image 16, input 10, chip 9999 (pill).

## Shadows

- `--shadow-sm`: `0 2px 8px rgba(0,38,77,.06)`
- `--shadow-md`: `0 4px 16px rgba(0,38,77,.10)` (cards)
- `--shadow-lg`: `0 12px 32px rgba(0,38,77,.14)` (form card / elevados)

## Breakpoints

- mobile-first. 390 (base) / 768 (tablet) / 1024 (desktop). CTA primário visível em 375px sem scroll.

## Componentes principais

- **Botão primário:** bg `--orange`, texto branco 700 18px, `min-height:52px`, radius 10, hover escurece 8% + leve translateY. (tap target ≥48px ✓)
- **Botão secundário (WhatsApp):** outline `--blue` / texto `--blue`, ou bg verde WhatsApp `#25D366` com ícone; visualmente menor que o primário.
- **Card:** bg branco, `--shadow-md`, radius 16, padding 24/32, ícone laranja no topo.
- **Input + Label:** label 14 `--text-muted`, input radius 10, border `--border`, focus ring `--blue`. `<legend>` em `<fieldset>` para grupos (padrão do squad).
- **Trust strip:** faixa `--blue` (ou `--surface`), números display laranja/branco, rótulo caption.
- **FAQ accordion:** `<details>/<summary>` nativo (acessível, zero-JS-dependente), borda inferior `--border`, ícone chevron que gira.
- **Stat / número:** display 40–56, peso 800, cor laranja sobre claro (large text ✓) ou branco sobre azul.

## Images Plan

| # | Seção | Skill | Arquivo | Query / Técnica | Alt |
|---|-------|-------|---------|-----------------|-----|
| 1 | Hero | image-fetcher (stock) | `assets/images/hero-frota.jpg` | "cargo semi truck highway brazil" (Pexels, landscape ≥1600px) | Caminhão de carga seca da MF Logística em rodovia no eixo São Paulo ao Pará |
| 2 | Galeria frota | image-fetcher (stock) | `assets/images/frota-1.jpg` | "cargo truck highway" | Caminhão baú da frota própria da MF Logística |
| 3 | Galeria frota | image-fetcher (stock) | `assets/images/frota-2.jpg` | "semi truck loading cargo" | Carreta da MF Logística carregando carga seca paletizada |
| 4 | Galeria frota | image-fetcher (stock) | `assets/images/frota-3.jpg` | "truck fleet parking lot" | Frota de caminhões da MF Logística no pátio |
| 5 | Cobertura | svg_inline | (inline no HTML) | Mapa do Brasil simplificado com rota SP→PA + 2 pinos | Mapa do Brasil com a rota de São Paulo ao Pará destacada |
| 6 | Ícones (diferenciais, serviços, passos, segmentos) | svg_inline | (inline no HTML) | Heroicons-style: shield-check, truck, clock, map-pin, route, signal, factory, shopping-cart, archive-box, leaf | por ícone |
| 7 | Logo | svg_inline / wordmark | (inline) | Badge "MF" em `--blue` + "Logística" — MF não forneceu logo; usar wordmark até ter o oficial | Logotipo da MF Logística |

- **Fotos stock:** Pexels (licença livre, sem atribuição obrigatória). Comprimir para WebP/JPG: hero ≤ 200KB, galeria ≤ 100KB cada. `width`/`height` explícitos no HTML.
- **Disclaimer de integridade:** fotos stock são ilustrativas (não são os caminhões reais da MF). Documentado para a Rita e para o Patrick — substituir por fotos reais quando disponíveis.

## Assets produzidos (step 05)

Salvos em `clients/mf-logistica-institucional/assets/images/` (WebP otimizado):

| Arquivo | Dimensões | Peso | Budget |
|---------|-----------|------|--------|
| `hero-frota.webp` | 1100×552 | 114KB | ≤200KB ✓ (reduzido na revisão p/ LCP 1.8s) |
| `frota-1.webp` | 1000×667 | 90KB | ≤100KB ✓ |
| `frota-2.webp` | 1000×660 | 53KB | ≤100KB ✓ |
| `frota-3.webp` | 1000×600 | 53KB | ≤100KB ✓ |

**Fonte / licença:** fotos do **Wikimedia Commons** (caminhões/rodovia, licença livre).
Antes de publicar em produção: (1) verificar a licença de cada arquivo na página do Commons e incluir atribuição se for CC-BY; (2) **idealmente substituir por fotos reais da frota da MF** — são apenas ilustrativas, não são os caminhões da MF (decisão do Patrick: "buscar fotos stock"). O HTML deve deixar comentário marcando onde trocar.

Mapa de cobertura, ícones e logo: **SVG inline** no HTML (Davi) — sem arquivos binários, escaláveis e leves.

## A11Y

- Body min 16px no mobile ✓
- Tap target min 48px (botões com `min-height:52px`) ✓
- Todos os pares cor validados (ver tabela Colors); laranja restrito a large text / não-texto ✓
- Overlay navy 62% atrás de texto sobre foto ✓
- Foco visível (ring `--blue` 2px) em inputs e links ✓
