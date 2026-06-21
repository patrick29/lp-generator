---
execution: inline
agent: diana-design
format: image-design
---

# Step 05: Design Visual

## Context Loading

**Primeira ação:** ler o slug:
```bash
slug=$(cat c:/development/lp-generator/squads/lp-generator/.runtime/current-slug.txt)
```

Depois carregue:
- `clients/{slug}/brief/strategy.md` — Big Idea, driver, tom, especificações para Diana.
- `clients/{slug}/content/copy.md` — copy final para saber o que cada imagem precisa comunicar.
- `squads/lp-generator/pipeline/data/anti-patterns.md` — armadilhas visuais.
- `squads/lp-generator/pipeline/data/quality-criteria.md` — critérios do eixo Visual.
- `squads/lp-generator/resources/wireframe_lp.md` — layout/composição de cada seção (esboços ASCII): hero com mídia ao lado, barra de confiança discreta em cinza, grids escaneáveis, métricas com cor diferente do CTA, depoimentos com rosto, bloco de oferta destacado. Use ao planejar imagens e hierarquia visual por seção.

## Instructions

### Process

1. **Apresentar 2-3 direções visuais referenciadas** (task `define-visual-system.md`). Ex.: "Linear-like: deep navy + lime", "Stripe-like: white + animated gradient", "Notion-like: warm cream + black serif". Aguardar escolha do Patrick.
2. **Definir paleta** com max 5 cores justificadas (primary, secondary, accent, background, text). Documentar ratio WCAG AA para cada par texto/fundo.
3. **Definir tipografia.** Google Fonts (heading + body, opcional mono). Escala desktop E mobile.
4. **Definir spacing, radius, sombra.** Spacing base 8px. Radius por componente.
5. **Salvar visual-system.md** em `clients/{slug}/design/design-system.md` (sobrescreve).
6. **Listar imagens por seção** (task `produce-images.md`) e atribuir skill: `image-ai-generator` (hero/product), `image-fetcher` (logos/Unsplash), SVG inline (ícones).
7. **Gerar assets via skills com prompt específico.** Hero <= 200KB pós-compressão. WebP/AVIF preferido.
8. **WCAG AA check em imagens com overlay de texto.** Overlay sólido 60%+, gradient ou backdrop-blur.
9. **Salvar imagens** diretamente em `clients/{slug}/assets/images/`.

## Output Format

```markdown
# Visual System — {Nome da LP}

## Direção escolhida
{Opção referenciada}

## Colors (max 5, todos validados WCAG AA)
Primary:    #...  ratio: X.X:1
Secondary:  #...
Accent:     #...  (CTA)
Background: #...
Text:       #...

## Typography
Heading: '{Familia}', {pesos}
Body:    '{Familia}', {pesos}

Scale (desktop): hero X / h2 X / h3 X / body X / caption X
Scale (mobile):  hero X / h2 X / h3 X / body X / caption X

## Spacing & Radius
Base: 8px. Scale: 8/16/24/32/48/64/96
Radius: button X, card X, image X

## Images Plan
| Seção | Skill | Arquivo | Prompt/Query | Alt sugerido |
|-------|-------|---------|--------------|--------------|
```

## Output Example

```markdown
# Visual System — Inglês de Standup

## Direção escolhida
Opção A: Terminal-friendly mas humano (zinc + lime accent, à la GitHub dark / Vercel).

## Colors
Primary:    #18181B (zinc-900)   ratio com bg: 16.4:1 ✓
Secondary:  #A1A1AA (zinc-400)   ratio com bg: 4.8:1 ✓
Accent:     #84CC16 (lime-500)   ratio com zinc-900: 8.3:1 ✓
Background: #FAFAF9 (stone-50)
Text:       #18181B / #FAFAF9

## Typography
Heading: 'Space Grotesk', 600/700
Body:    'Inter', 400/500
Mono:    'JetBrains Mono', 500

Scale (desktop): hero 64 / h2 40 / h3 28 / body 18 / caption 14
Scale (mobile):  hero 40 / h2 28 / h3 22 / body 16 / caption 13

## Spacing & Radius
Base: 8px. Scale: 8/16/24/32/48/64/96
Radius: button 8, card 12, image 12

## Images Plan
| Seção | Skill | Arquivo | Prompt | Alt |
|-------|-------|---------|--------|-----|
| hero | image-ai-generator | hero-standup.webp | Dev em videoconferência com balão de fala incompleto, flat illustration, zinc + lime | Dev em videoconferência com balão de fala incompleto |
| social_proof | image-fetcher | logo-{1..8}.svg | URLs do briefing | Logo da empresa {nome} |
| features_icons | svg_inline | Heroicons set | clock / mic-off / chat / exclamation | (definidos por ícone) |
| testimonials | image-fetcher | testimonial-{nome}.webp | Unsplash 'brazilian developer portrait' | Foto da dev {Nome}, engineer em {empresa} |

## A11Y
- Body min 16px no mobile ✓
- Tap target min 48px (CTAs com min-h-[48px]) ✓
- Todos pares cor validados WCAG AA 4.5:1 ✓
```

## Veto Conditions

Reject and redo se QUALQUER for verdadeiro:
1. Paleta tem mais de 5 cores.
2. Algum par cor texto/fundo falha WCAG AA 4.5:1.
3. Imagem stock corporate genérica aprovada para a LP.
4. Hero image > 200KB pós-compressão.

## Quality Criteria

- [ ] Direção visual confirmada com 2-3 opções referenciadas.
- [ ] Paleta com 3-5 cores justificadas, ratios WCAG AA documentados.
- [ ] Tipografia com escala desktop E mobile.
- [ ] Plano de imagens por seção com skill atribuída.
- [ ] Hero <= 200KB; outras imagens <= 100KB.
- [ ] Nenhuma imagem stock corporate genérica.
