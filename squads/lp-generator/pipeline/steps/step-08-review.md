---
execution: inline
agent: rita-revisao
---

# Step 08: Review

## Context Loading

**Primeira ação:** ler o slug:
```bash
slug=$(cat c:/development/lp-generator/squads/lp-generator/.runtime/current-slug.txt)
```

Depois carregue:
- `clients/{slug}/brief/briefing.md` — briefing original (alinhamento estratégico).
- `clients/{slug}/brief/strategy.md` — Big Idea, driver, framework, arquitetura.
- `clients/{slug}/content/copy.md` — copy final + meta SEO.
- `clients/{slug}/design/design-system.md` — design system + plano de imagens.
- `clients/{slug}/src/` — código entregue por Davi.
- `squads/lp-generator/pipeline/data/quality-criteria.md` — rubrica completa por eixo.
- `squads/lp-generator/pipeline/data/anti-patterns.md` — armadilhas a checar.

## Instructions

### Process

1. **Ler todos os entregáveis e a rubrica.** Não pontuar nada antes de ter contexto completo.
2. **Abrir preview da LP renderizada.** HTML+Tailwind: abrir index.html. Astro/Next.js: `pnpm dev` / `npm run dev`. Percorrer hero → footer ANTES de pontuar. Anotar reações iniciais.
3. **Rodar Lighthouse mobile.** Coletar Performance, Accessibility, Best Practices, SEO. Registrar os 4 números no review.
4. **Pontuar 4 eixos com score 1-10:**
   - **Copy:** alinha com strategy (awareness, Big Idea, driver, framework)? hooks A/B/C apresentados? CTA na Intensity Ladder? proof, neutralizador, anti-commodity?
   - **Visual:** design system documentado? WCAG AA? hierarquia clara? imagens consistentes com tom? sem stock genérico?
   - **Código:** stack correta? mobile-first? Lighthouse > 90? LCP < 2.5s? CLS < 0.1? semantic HTML? a11y básico?
   - **SEO+Meta:** title/meta/H1/OG/canonical/alt? structured data? keyword na H1?
   Cada score com 1-3 linhas de justificativa citando arquivo + seção/linha.
5. **Aplicar veredito.** APPROVE (média >= 7 E nenhum eixo < 4); CONDITIONAL (média >= 7 mas 1 eixo entre 4-6); REJECT (média < 7 OU qualquer eixo < 4).
6. **Rotear on_reject explicitamente** no review.md: Copy → step 4; Visual → step 5; Código/SEO → step 6; Alinhamento estratégico → step 2.
7. **Listar required changes + suggestions.** Cada required: o que, onde (arquivo+linha), como, step de retorno. Pelo menos 1 Strength.
8. **Path to approval numerado.**
9. **Numerar revisão (X de 3).** Na 3ª, escalar para o Patrick.
10. **Salvar review.md** em `clients/{slug}/deploy/qa-review.md` (sobrescreve).

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
- ...

## Required Changes
- [→ step N {agente}] {o que, onde, como}

## Suggestions (non-blocking)
- ...

## Path to Approval
1. ...

VERDICT: ...
```

## Output Example

```markdown
==============================
 REVIEW VERDICT: REJECT
==============================
LP: ProposalKit
Stack: Next.js App Router
Revisão: 1 de 3

| Eixo      | Score | Resumo |
|-----------|-------|--------|
| Copy      | 6/10  | CTA "Saiba mais" fora da Intensity Ladder |
| Visual    | 7/10  | Sistema OK, contraste OK |
| Código    | 3/10  | LCP 4.1s (hero 1.8MB), CLS 0.24 |
| SEO+Meta  | 5/10  | Meta description ausente |
| MÉDIA     | 5.25/10 |  |

Lighthouse mobile: Perf 48 / A11y 88 / BP 92 / SEO 70

HARD REJECTION TRIGGER: Eixo Código 3/10.

## Strengths
- Strength: Arquitetura segue 4Ps do strategy.md (Promise → Picture → Proof → Push).
- Strength: Hook A ("Sua proposta não é lenta. Seu Word é") passa scroll-stop test.

## Required Changes
- [→ step 6 davi-dev] Otimizar `public/images/hero.png` (1.8MB → ~200KB WebP). Adicionar width/height + priority. Meta LCP < 2.5s.
- [→ step 6 davi-dev] Definir width/height em todas imagens de `components/Features.tsx`. CLS atual 0.24, meta < 0.1.
- [→ step 4 carla-copy] `app/page.tsx:32` — CTA "Saiba mais" reescrever para nível 4 ("Comece grátis por 14 dias →").
- [→ step 6 davi-dev] `app/page.tsx` metadata — adicionar description.

## Suggestions (non-blocking)
- Adicionar JSON-LD Product para rich snippet.
- Converter logos PNG → SVG.

## Path to Approval
1. Otimizar hero image → step 6
2. width/height em Features → step 6
3. Reescrever CTA hero → step 4
4. Adicionar meta description → step 6

VERDICT: REJECT.
```

## Veto Conditions

Reject and redo se QUALQUER for verdadeiro:
1. Algum score sem justificativa ou sem citar arquivo/seção.
2. Required change sem step de retorno (on_reject não roteado).
3. Lighthouse não rodado (ou os 4 números ausentes do review).

## Quality Criteria

- [ ] Cada score com justificativa citando arquivo + linha/seção.
- [ ] Lighthouse rodado e 4 números registrados.
- [ ] Pelo menos 1 Strength (inclusive em REJECT).
- [ ] Cada required change com o que/onde/como/step de retorno.
- [ ] Suggestions claramente separadas das required changes.
- [ ] Veredito bate com os scores (sem contradições).
- [ ] Revisão numerada (X de 3).
