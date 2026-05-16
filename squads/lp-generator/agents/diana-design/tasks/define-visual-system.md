---
task: "Define Visual System"
order: 1
input: |
  - strategy: clients/{slug}/brief/strategy.md
  - copy: clients/{slug}/content/copy.md (se já entregue)
output: |
  - visual_system_file: clients/{slug}/design/design-system.md
  - direction_choice: direção visual confirmada pelo Patrick (2-3 opções referenciadas)
---

# Define Visual System

Define o design system completo (paleta, tipografia, spacing, radius, sombra) e confirma direção visual com Patrick apresentando 2-3 opções referenciadas. Validação WCAG AA em cada par cor texto/fundo. Antes de qualquer asset.

## Process

1. **Ler strategy + copy.** Absorver tom, público, Big Idea, seções a visualizar. Identidade visual amplifica a Big Idea — não decora.
2. **Propor 2-3 direções visuais referenciadas.** Cada direção citada com referência reconhecível (ex.: "Linear-like: deep navy + lime, sans tight"; "Stripe-like: white + animated gradient"; "Notion-like: warm cream + black serif heading"). Aguardar escolha do Patrick.
3. **Definir paleta.** Max 5 cores: primary, secondary, accent (CTA), background, text. Justificar cada cor.
4. **Definir tipografia.** Família via Google Fonts (heading + body, opcional mono). Escala hero/heading/body/caption para desktop E mobile.
5. **Definir spacing, radius, sombra.** Spacing base (geralmente 8px), escala (8/16/24/32/48/64/96). Radius por componente. Sombras suaves para card/elevation.
6. **WCAG AA check.** Cada par cor texto/fundo passa 4.5:1. Documentar o ratio calculado.
7. **Salvar em visual-system.md.**

## Output Format

```markdown
# Visual System — {Nome da LP}

## Direção escolhida
{Opção A | B | C}: {descrição + referência}

## Colors (max 5)
Primary:    #...  ratio com bg: X.X:1
Secondary:  #...
Accent:     #...  (CTA)
Background: #...
Text:       #...

## Typography
Heading: '{Familia}', {pesos}
Body:    '{Familia}', {pesos}
(opcional) Mono: '{Familia}'

Scale (desktop): hero {X} / h2 {X} / h3 {X} / body {X} / caption {X}
Scale (mobile):  hero {X} / h2 {X} / h3 {X} / body {X} / caption {X}

## Spacing & Radius
Base: {X}px. Scale: 8/16/24/32/48/64/96
Radius: button {X}, card {X}, image {X}

## Sombra
Card: 0 10px 30px -10px rgba(...)

## A11Y
- Body min 16px no mobile ✓
- Tap target min 48px ✓
- Todos os pares cor passam WCAG AA 4.5:1 ✓
```

## Output Example

> Use como referência de qualidade.

```markdown
# Visual System — Inglês de Standup

## Direção escolhida
Opção A: Terminal-friendly mas humano (zinc + lime accent, à la GitHub dark / Vercel).

## Colors
Primary:    #18181B (zinc-900)   ratio com bg: 16.4:1 ✓
Secondary:  #A1A1AA (zinc-400)   ratio com bg: 4.8:1 ✓
Accent:     #84CC16 (lime-500)   ratio com zinc-900: 8.3:1 ✓
Background: #FAFAF9 (stone-50)
Text:       #18181B / #FAFAF9 (inverted)

## Typography
Heading: 'Space Grotesk', 600/700
Body:    'Inter', 400/500
Mono:    'JetBrains Mono', 500

Scale (desktop): hero 64 / h2 40 / h3 28 / body 18 / caption 14
Scale (mobile):  hero 40 / h2 28 / h3 22 / body 16 / caption 13

## Spacing & Radius
Base: 8px. Scale: 8/16/24/32/48/64/96
Radius: button 8, card 12, image 12

## Sombra
Card: 0 10px 30px -10px rgba(24,24,27,0.12)

## A11Y
- Body min 16px no mobile ✓
- Tap target min 48px (CTAs com min-h-[48px]) ✓
- Pares validados: zinc-900/stone-50, zinc-400/stone-50, lime-500/zinc-900 — todos > 4.5:1 ✓
```

## Quality Criteria

- [ ] Direção visual confirmada com 2-3 opções referenciadas antes da decisão.
- [ ] Paleta com 3-5 cores justificadas, nunca mais que 5.
- [ ] Tipografia com escala para desktop E mobile.
- [ ] Cada par cor texto/fundo passa WCAG AA 4.5:1 (ratio documentado).
- [ ] Body >= 16px no mobile, tap targets >= 48px.

## Veto Conditions

Reject and redo se QUALQUER for verdadeiro:
1. Paleta tem mais de 5 cores.
2. Algum par cor texto/fundo falha WCAG AA 4.5:1.
