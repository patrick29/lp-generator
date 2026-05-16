---
execution: inline
agent: bruno-briefing
---

# Step 02: Analyze and Strategize

## Context Loading

**Primeira ação (sempre):** ler o slug do cliente atual:
```bash
slug=$(cat c:/development/lp-generator/squads/lp-generator/.runtime/current-slug.txt)
```

Depois carregue (substituindo `{slug}` pelo valor lido):
- `clients/{slug}/brief/briefing.md` — briefing preenchido pelo Patrick no step 1.
- `squads/lp-generator/pipeline/data/research-brief.md` — frameworks, awareness levels, padrões de mercado.
- `squads/lp-generator/pipeline/data/domain-framework.md` — metodologia operacional unificada.
- `squads/lp-generator/pipeline/data/anti-patterns.md` — armadilhas a evitar.
- URLs de referência citadas no briefing.md (via WebFetch skill).

## Instructions

### Process

1. **Analisar brief.md** (task `analyze-brief.md`). Identificar gaps. Para cada URL de referência, usar WebFetch e extrair estrutura/tom/paleta/social proof/CTA. Se houver gap bloqueante (produto, público OU oferta ausentes), parar e devolver perguntas ao Patrick antes de prosseguir.
2. **Diagnosticar audiência (Schwartz).** Definir awareness level (Unaware → Most Aware) e market sophistication (stage 1-5) com rationale escrito.
3. **Decidir stack** (task `decide-stack.md`). Aplicar a matriz: HTML+Tailwind single-file (default) / Astro / Next.js App Router. Documentar features que justificam.
4. **Definir Big Idea + driver dominante** (task `design-structure.md`). Big Idea: inimigo, mecanismo, promessa. Driver único entre medo de perda / status / pertencimento / liberdade / segurança / conquista / controle. Aplicar teste "concorrente não escreveria igual".
5. **Arquitetar seções.** Escolher framework (StoryBrand/AIDA/PAS/4Ps) por awareness+sophistication. Listar cada seção com objetivo de funil, social proof, CTA intensity. 1 CTA dominante.
6. **Escrever especificações para Carla, Diana e Davi.** Tom, paleta sugerida, stack, breakpoints, SEO requirements.
7. **Salvar strategy.md** em `clients/{slug}/brief/strategy.md` (sobrescreve qualquer versão anterior).

## Output Format

```markdown
# Strategy — {Nome da LP}

## Diagnóstico
- Awareness: {Unaware|Problem|Solution|Product|Most}
- Sophistication: {1-5}
- Rationale: ...

## Referências analisadas
- {URL}: estrutura / tom / paleta / social proof / CTA

## Big Idea
- Inimigo/crença: ...
- Mecanismo único: ...
- Promessa: ...
- Driver dominante: ...

## Stack
- Escolhida: {HTML+Tailwind | Astro | Next.js App Router}
- Motivo: ...
- Features que justificam: ...

## Framework
- Escolhido: {StoryBrand | AIDA | PAS | 4Ps}
- Motivo: ...

## Arquitetura de Seções
| # | Seção | Objetivo | Social Proof | CTA Intensity |
|---|-------|----------|--------------|---------------|

## Para Carla (Copy)
## Para Diana (Visual)
## Para Davi (Código)
```

## Output Example

```markdown
# Strategy — Inglês de Standup

## Diagnóstico
- Awareness: Solution Aware
- Sophistication: 4 (belief fatigue)
- Rationale: Devs intermediários já tentaram Duolingo/Babbel sem ganho em standup. Mercado tem 4 concorrentes diretos sem nicho específico.

## Referências analisadas
- https://www.englishclass101.com — estrutura: hero genérico + 3 cards de plano + depoimentos vagos. Não inspirar; é exatamente o contrário do que queremos.

## Big Idea
- Inimigo: "Cursos genéricos te ensinam inglês de viagem."
- Mecanismo único: 200h de standups reais de big techs transcritas e indexadas.
- Promessa: "Pare de travar em standup em 12 semanas."
- Driver dominante: status (parecer competente no time global).

## Stack
- Escolhida: HTML+Tailwind CDN single-file
- Motivo: 1 página, captura via embed Tally, sem auth/A-B.
- Features: 1 página, sem server action, sem CMS.

## Framework
- Escolhido: PAS (Problem → Agitate → Solution)
- Motivo: dor diária aguda; público sente todo dia no standup.

## Arquitetura de Seções
| # | Seção | Objetivo | Social Proof | CTA |
|---|-------|----------|--------------|-----|
| 1 | Hero | Filtrar e prender | logos | 4 |
| 2 | Pain | Amplificar dor | — | — |
| 3 | Mecanismo | Apresentar método | 200h citado | — |
| 4 | Currículo | Mostrar entregáveis | — | — |
| 5 | Depoimentos | Provar resultado | 3 devs nomeados | — |
| 6 | Garantia | Neutralizar objeção | — | — |
| 7 | CTA final | Conversão | scarcity | 4 |

## Para Carla
Driver: status. Tom: amigo-mentor. Hooks: pattern interrupt + dor.

## Para Diana
Vibe: terminal-friendly mas humano. Paleta zinc + lime accent.

## Para Davi
Stack: HTML+Tailwind. Breakpoints: 390/768/1024. JSON-LD Course.
```

## Veto Conditions

Reject and redo se QUALQUER for verdadeiro:
1. Driver psicológico é uma lista (mais de 1).
2. Big Idea não passa o teste "concorrente não escreveria igual".
3. Alguma seção é decorativa (sem objetivo de funil declarado).
4. Stack não está justificada por features concretas.

## Quality Criteria

- [ ] Awareness + sophistication explicitamente nomeados com rationale.
- [ ] Stack justificada por features (não preferência).
- [ ] Big Idea passa o teste anti-commodity.
- [ ] Driver psicológico é único.
- [ ] Cada seção tem objetivo de funil.
- [ ] Especificações acionáveis para Carla, Diana e Davi.
