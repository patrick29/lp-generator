# Design System — Nova Digital

> Identidade visual oficial da agência, extraída do manual de marca em `clients/nova-digital/brief/sobre-a-marca/` (2026-05-15). Tokens já implementados em `src/colors_and_type.css`.

## Paleta de cores

### Roxo Nova (primária)
| Token | Hex | Uso |
|-------|-----|-----|
| `--purple-500` | `#6A2785` | **Core brand** — fundos full-bleed, CTAs primários, identidade |
| `--purple-400` | `#884FAE` | Hover de primário, info |
| `--purple-600` | `#581F6E` | Press de primário |
| `--purple-900` | `#1A0820` | Texto escuro principal, footer cinematográfico |

### Laranja Play (acento)
| Token | Hex | Uso |
|-------|-----|-----|
| `--orange-400` | `#F58A2A` | **Core accent** — destaque, eyebrow, "Nova" no logo, ponto final |
| `--orange-500` | `#E47817` | Hover de acento |
| `--orange-200` | `#FFC788` | Selection, badges leves |

### Neutros (warm stone, nunca cool grey)
| Token | Hex | Uso |
|-------|-----|-----|
| `--stone-50` | `#FAF7F2` | Fundo de página ("branco quente") |
| `--stone-600` | `#4A4439` | Texto secundário |

## Tipografia
- **Display (títulos):** `Quicksand` 500/600/700 — curvas suaves, alinhada à letra "Nova" do logo (curvas, dinamismo, inovação)
- **Body (corpo):** `DM Sans` 400/500/600/700 — geométrica e contemporânea, alinhada à palavra "Digital" do logo (autoridade, confiança)
- **Mono:** `JetBrains Mono` 400/500 — para dados, métricas, código
- **Escala fluida:** clamp() para hero (56–112px), display-2 (40–72px), h1 (36–56px), h2 (28–40px), h3-h4 fixos

## Logo e ícones

Assets em `src/assets/`:
- `brand-logomarca.png` — versão empilhada completa (Nova laranja + Digital branca + AGÊNCIA, fundo roxo)
- `brand-logo-horizontal.png` — versão horizontal branca em fundo roxo (usada no Nav como "badge")
- `brand-logo-horizontal-variations.png` — variações de cor (branca em roxo / preta em laranja)
- `brand-icon-white.png` — círculo branco com play roxo (uso em fundo escuro)
- `brand-icon-orange.png` — círculo laranja com play branco (uso em fundo roxo)
- `brand-icon-dark.png` — círculo preto com play branco (uso em fundo laranja)
- `brand-submark.png` — submarca circular (logo arqueado + ícone)

### Significado simbólico (do manual)
- **Cursor de mouse no "O" de Nova:** estratégia, direção, ação no marketing
- **Ponto final:** conclusão e firmeza — a Nova entrega projetos completos
- **Curvas de "Nova":** inovação e dinamismo
- **Geometria de "Digital":** autoridade e confiança

## Espaçamento (escala 8pt + step 4)
4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 — tokens `--space-1` a `--space-10`

## Border radius
- `--radius-sm: 8px` (chips, tags)
- `--radius: 12px` (botões, inputs)
- `--radius-md: 16px` (cards menores)
- `--radius-lg: 20px` (cards principais)
- `--radius-xl: 24px` (feature images)
- `--radius-pill: 999px`

## Sombras
- `--shadow-1` — sutil, elementos elevados básicos
- `--shadow-2` — cards com hover
- `--shadow-3` — modais, hero cards de destaque
- `--shadow-glow-orange` — call-to-actions com presença

## Breakpoints
- mobile: < 640px
- tablet: 640–1024px
- desktop: > 1024px

## Componentes principais
- Botão `.btn--primary` (roxo) / `.btn--ghost` (outline) / `.btn--lg` / `.btn--sm`
- Card de seção (`Cases`, `Services`)
- Eyebrow `.eyebrow` (label + dot opcional) / `.eyebrow--accent` (laranja) / `.eyebrow--on-purple` (sobre roxo)
- Brand period `.t-period::after` — ponto final laranja anexado a títulos
- FAQ accordion
- Carrossel de depoimentos
- `<image-slot>` web component para placeholders de imagem com tweaks-panel

## Tom de voz (do manual)
A comunicação da Nova Digital é:
1. **Confiante e estratégica** — segurança e profissionalismo
2. **Amigável e próxima** — conversa entre parceiros
3. **Clara e objetiva** — sem termos complexos, falando acessível
4. **Motivadora e criativa** — inspira o cliente a acreditar no potencial digital da própria marca

### Palavras a usar
"bora", "junto", "real", "humano", números concretos, "alegria", "proximidade", "estratégia direcionada"

### Palavras a evitar
"soluções inovadoras", "transformação digital" (clichê), corporativês, métricas infladas sem prova

## Pilares da marca (essência)
1. **Alegria e proximidade** — refletindo a personalidade descontraída e positiva da Letícia
2. **Estratégia e inovação** — cada ação é bem direcionada, com foco em performance e resultados
3. **Humanização do digital** — transformar dados, cliques e métricas em relações verdadeiras e crescimento real

## Referências visuais
PNGs originais do manual em `clients/nova-digital/brief/sobre-a-marca/` (logomarca, logo secundária, ícone, submarca + 8 páginas do manual).
