---
task: "Review LP"
order: 1
input: |
  - brief: clients/{slug}/brief/briefing.md
  - strategy: clients/{slug}/brief/strategy.md
  - copy: clients/{slug}/content/copy.md
  - visual_system: clients/{slug}/design/design-system.md
  - code_folder: clients/{slug}/src/
  - quality_criteria: pipeline/data/quality-criteria.md
output: |
  - review_file: clients/{slug}/deploy/qa-review.md (verdict + scoring + required changes + suggestions + path-to-approval)
---

# Review LP

Avalia a LP em 4 eixos (Copy / Visual / Código / SEO+Meta) com scoring 1-10 por eixo. Aplica regras objetivas de veredito e, se REJECT, roteia on_reject inteligentemente para a step que deve refazer.

## Process

1. **Carregar todos os entregáveis e a rubrica.** Ler brief.md, strategy.md, copy.md, visual-system.md, code/ + quality-criteria.md.
2. **Ler a LP renderizada na íntegra.** Abrir preview local da code/ (`pnpm dev` / `npm run dev` / abrir index.html). Percorrer hero → footer ANTES de pontuar. Anotar reações iniciais.
3. **Rodar Lighthouse.** Coletar Performance, Accessibility, Best Practices, SEO em mobile. Registrar os 4 números no review.
4. **Pontuar 4 eixos (1-10).** Para cada eixo, ler critérios em quality-criteria.md e pontuar. Cada score acompanhado de 1-3 linhas de justificativa citando arquivo + seção/linha.
5. **Calcular veredito.** APPROVE (média >= 7 E nenhum eixo < 4); CONDITIONAL APPROVE (média >= 7 mas 1 eixo entre 4-6); REJECT (média < 7 OU qualquer eixo < 4).
6. **Rotear on_reject.** Falha Copy → step 4 (carla-copy). Falha Visual → step 5 (diana-design). Falha Código/SEO → step 6 (davi-dev). Falha alinhamento estratégico → step 2 (bruno-briefing).
7. **Listar required changes** (bloqueantes) e **suggestions** (non-blocking). Cada required: o que, onde (arquivo+linha), como, step de retorno. Pelo menos 1 Strength.
8. **Salvar review.md.** Numerar revisão (1 de 3 / 2 de 3 / 3 de 3). Na 3ª, escalar para Patrick.

## Output Format

```markdown
==============================
 REVIEW VERDICT: {APPROVE | CONDITIONAL | REJECT}
==============================
LP: {nome}
Stack: {stack}
Revisão: X de 3

| Eixo      | Score | Resumo |
|-----------|-------|--------|
| Copy      | X/10  | ... |
| Visual    | X/10  | ... |
| Código    | X/10  | ... |
| SEO+Meta  | X/10  | ... |
| MÉDIA     | X/10  |   |

Lighthouse mobile: Perf X / A11y X / BP X / SEO X

## Strengths
- Strength: ...

## Required Changes (bloqueantes)
- [→ step N {agente}] {o que, onde (arquivo+linha), como}

## Suggestions (non-blocking)
- ...

## Path to Approval
1. ...
2. ...

VERDICT: {APPROVE | CONDITIONAL | REJECT}
```

## Output Example

> Use como referência de qualidade.

```markdown
==============================
 REVIEW VERDICT: REJECT
==============================
LP: ProposalKit
Stack: Next.js App Router
Revisão: 1 de 3

| Eixo      | Score | Resumo |
|-----------|-------|--------|
| Copy      | 6/10  | CTA primário "Saiba mais" fora da Intensity Ladder; resto OK |
| Visual    | 7/10  | Sistema OK, contraste OK |
| Código    | 3/10  | LCP 4.1s (hero 1.8MB), CLS 0.24 |
| SEO+Meta  | 5/10  | Meta description ausente, alt vazio em 3 imagens |
| MÉDIA     | 5.25/10 |   |

Lighthouse mobile: Perf 48 / A11y 88 / BP 92 / SEO 70

HARD REJECTION TRIGGER: Eixo Código 3/10.

## Strengths
- Strength: Arquitetura segue o framework 4Ps do strategy.md (Promise → Picture → Proof → Push) — coerência ponta a ponta.
- Strength: Hook A escolhido ("Sua proposta não é lenta. Seu Word é") passa scroll-stop test e é anti-commodity.

## Required Changes (bloqueantes)
- [→ step 6 davi-dev] Otimizar hero image. Arquivo: `public/images/hero.png` (1.8MB). Converter para WebP (~200KB), adicionar `width={1280} height={720}` no `<Image>`, marcar `priority`. Meta: LCP < 2.5s.
- [→ step 6 davi-dev] Definir width/height em TODAS imagens da `components/Features.tsx`. CLS atual 0.24, meta < 0.1.
- [→ step 4 carla-copy] `app/page.tsx:32` — CTA "Saiba mais" é nível 1 da Intensity Ladder. Reescrever para nível 4 ("Comece grátis por 14 dias →"), alinhado ao strategy.
- [→ step 6 davi-dev] `app/page.tsx` — adicionar `description` em `export const metadata`.

## Suggestions (non-blocking)
- Adicionar JSON-LD Product para rich snippet no SERP.
- Converter logos PNG em SVG (ganho de perf + crispness em retina).

## Path to Approval
1. Otimizar hero image → step 6
2. width/height em Features → step 6
3. Reescrever CTA hero → step 4
4. Adicionar meta description → step 6

VERDICT: REJECT.
```

## Quality Criteria

- [ ] Cada score (Copy/Visual/Código/SEO) tem justificativa escrita citando arquivo + linha/seção.
- [ ] Lighthouse rodado e os 4 números registrados.
- [ ] Pelo menos 1 Strength por revisão (inclusive em REJECT).
- [ ] Cada required change tem: o que, onde, como, step de retorno.
- [ ] Suggestions claramente separadas das required changes.

## Veto Conditions

Reject and redo se QUALQUER for verdadeiro:
1. Algum score sem justificativa ou sem citar arquivo/seção.
2. Required change sem step de retorno (on_reject não roteado).
