---
task: "Decide Stack"
order: 2
input: |
  - brief_file: clients/{slug}/brief/briefing.md
  - audience_diagnosis: resultado da task analyze-brief
output: |
  - stack: "HTML+Tailwind single-file | Astro | Next.js App Router"
  - rationale: motivo de 1-2 linhas
  - features_required: lista de features da LP que justificam a stack escolhida
---

# Decide Stack

Aplica a matriz de decisão para escolher a stack da LP. Default é HTML+Tailwind single-file. Upgrade para Astro ou Next.js App Router apenas quando features concretas exigirem. Decisão é documentada com motivo objetivo.

## Process

1. **Listar features concretas da LP.** Quantas páginas? Tem form com submit? Precisa de auth? A/B testing? Conteúdo dinâmico/CMS? Blog/MDX? Server actions?
2. **Aplicar matriz.**
   - **HTML + Tailwind CDN single-file (DEFAULT)**: LP estática, 1 página, sem auth, sem A/B, sem CMS.
   - **Astro**: LP + 2+ páginas estáticas (sobre, casos, blog), SEO crítico, MDX content.
   - **Next.js App Router**: forms com server actions, auth, A/B testing, API routes, conteúdo dinâmico.
3. **Documentar a decisão.** Escrever stack + motivo de 1-2 linhas + lista das features que justificaram a escolha. Em caso de dúvida entre 2 stacks, ficar com a mais simples e justificar.

## Output Format

```yaml
stack: "HTML+Tailwind single-file"
rationale: "LP estática 1 página, sem form server-side, sem multi-página."
features_required:
  - "1 página, hero + 5 seções + footer"
  - "form de captura via mailto: ou Tally embed (sem server action)"
  - "sem blog, sem auth, sem A/B"
upgrade_path: "Se adicionarem blog ou trial form com server action, migrar para Astro/Next.js."
```

## Output Example

> Use como referência de qualidade.

```yaml
stack: "Next.js App Router"
rationale: "Form de trial precisa server action (envia para CRM) + A/B testing planejado em 30 dias + analytics de produto via PostHog (client component)."
features_required:
  - "1 página inicial + /thank-you + /pricing"
  - "form de trial com submit para CRM via server action"
  - "A/B testing planejado: 2 variantes do hero"
  - "analytics de evento (PostHog) em CTA, scroll-depth, form-submit"
  - "auth-light no futuro (gate /pricing para logged users)"
upgrade_path: "Stack atual já é o teto — adicionar middleware se auth virar requisito firme."
matriz_aplicada:
  html_tailwind: "REJEITADO — form server action necessário."
  astro: "REJEITADO — A/B testing dinâmico + auth-light futuros."
  nextjs: "ESCOLHIDO — server actions, RSC, fácil A/B com middleware."
```

## Quality Criteria

- [ ] Stack é uma das três permitidas (HTML+Tailwind / Astro / Next.js App Router).
- [ ] Rationale tem motivo objetivo (não preferência genérica).
- [ ] Features required listadas concretamente (não "ser moderno").
- [ ] Se a stack escolhida não é o default, o motivo do upgrade é explícito.

## Veto Conditions

Reject and redo se QUALQUER for verdadeiro:
1. Stack escolhida não consta da matriz das três permitidas.
2. Rationale é "porque é melhor" / "porque é moderno" / vago — sem features concretas que justifiquem.
