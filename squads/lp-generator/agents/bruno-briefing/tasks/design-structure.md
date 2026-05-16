---
task: "Design Structure"
order: 3
input: |
  - brief: clients/{slug}/brief/briefing.md
  - audience_diagnosis: awareness + sophistication
  - stack_decision: resultado de decide-stack
output: |
  - strategy_file: clients/{slug}/brief/strategy.md — documento operacional completo
---

# Design Structure

Sintetiza o trabalho das duas tasks anteriores em strategy.md: diagnóstico de audiência, Big Idea, driver psicológico dominante, framework escolhido, arquitetura de seções e especificações para Carla, Diana e Davi.

## Process

1. **Definir Big Idea.** Responder por escrito: (a) Qual o inimigo/crença que a LP ataca? (b) Qual o mecanismo único? (c) Qual a promessa específica? (d) Driver psicológico DOMINANTE (medo de perda / status / pertencimento / liberdade / segurança / conquista / controle). Teste: a Big Idea passaria do concorrente? Se sim, refazer.
2. **Escolher framework.** Com base em awareness + sophistication: StoryBrand (narrativa-cliente, marca-guia), AIDA (top-funnel novo), PAS (dor diária aguda), 4Ps (conversão direta bottom-funnel).
3. **Arquitetar seções.** Listar cada seção com: nome, objetivo no funil, tipo de social proof esperado, intensidade do CTA (1-5 Intensity Ladder). Regra: 1 CTA dominante na LP toda.
4. **Especificar entregáveis para downstream.** Bloco "Para Carla" (driver, tom, hooks recomendados), "Para Diana" (vibe visual, paleta sugerida, referências), "Para Davi" (stack, breakpoints críticos, SEO requirements).
5. **Salvar em clients/{slug}/brief/strategy.md.**

## Output Format

```markdown
# Strategy — {Nome da LP}

## Diagnóstico
- Awareness: {Unaware|Problem|Solution|Product|Most}
- Sophistication: {1-5}
- Rationale: ...

## Big Idea
- Inimigo/crença atacada: ...
- Mecanismo único: ...
- Promessa específica: ...
- Driver dominante: ...

## Stack
- Escolhida: HTML+Tailwind | Astro | Next.js
- Motivo: ...

## Framework
- Escolhido: StoryBrand | AIDA | PAS | 4Ps
- Motivo: ...

## Arquitetura de Seções
| # | Seção | Objetivo de Funil | Social Proof | CTA Intensity |
|---|-------|-------------------|--------------|---------------|

## Especificações
### Para Carla (Copy)
### Para Diana (Visual)
### Para Davi (Código)
```

## Output Example

> Use como referência de qualidade.

```markdown
# Strategy — Inglês de Standup

## Diagnóstico
- Awareness: Solution Aware
- Sophistication: 4 (belief fatigue — exige nicho específico)
- Rationale: Devs intermediários já tentaram apps genéricos (Duolingo, Babbel) e não viram aplicação em standup global.

## Big Idea
- Inimigo: "Cursos genéricos te ensinam inglês de viagem."
- Mecanismo único: corpus real de 200h de standups gravados de big techs.
- Promessa: "Você vai parar de travar em standup em 12 semanas."
- Driver dominante: status (parecer competente no time global).

## Stack
- Escolhida: HTML+Tailwind CDN single-file
- Motivo: 1 página, captura via embed Tally, sem auth/A-B.

## Framework
- Escolhido: PAS (dor diária aguda)
- Motivo: público sofre na hora do standup; PAS amplifica antes de oferecer mecanismo.

## Arquitetura de Seções
| # | Seção | Objetivo | Social Proof | CTA |
|---|-------|----------|--------------|-----|
| 1 | Hero | Filtrar e prender | logo de empresas | 4 |
| 2 | Pain | Amplificar dor | — | — |
| 3 | Mecanismo | Apresentar método anti-genérico | corpus de 200h citado | — |
| 4 | Currículo | Mostrar entregáveis | — | — |
| 5 | Depoimentos | Provar resultado | 3 devs nomeados + foto | — |
| 6 | Garantia | Neutralizar objeção | — | — |
| 7 | CTA final | Conversão | scarcity (turma 24) | 4 |

## Para Carla
- Driver: status. Tom: amigo-mentor.
- Hooks recomendados: pattern interrupt + dor.

## Para Diana
- Vibe: amigo-mentor + terminal-friendly.
- Paleta sugerida: zinc + lime accent.

## Para Davi
- Stack: HTML+Tailwind CDN single-file.
- Breakpoints críticos: 390px, 768px, 1024px.
- SEO: title <= 60 chars com "inglês para devs"; JSON-LD Course.
```

## Quality Criteria

- [ ] Big Idea passa o teste "concorrente não escreveria igual".
- [ ] Driver psicológico é único (não lista de 3).
- [ ] Cada seção tem objetivo de funil declarado.
- [ ] Especificações para Carla, Diana e Davi são acionáveis (não vagas).

## Veto Conditions

Reject and redo se QUALQUER for verdadeiro:
1. Driver psicológico é uma lista (mais de 1).
2. Alguma seção é decorativa (não tem objetivo de funil declarado).
