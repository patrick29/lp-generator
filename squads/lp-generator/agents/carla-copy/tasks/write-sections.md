---
task: "Write Sections"
order: 2
input: |
  - strategy: clients/{slug}/brief/strategy.md
  - selected_hook: hook A/B/C confirmado pelo Patrick
output: |
  - sections_copy: corpo completo de cada seção da LP no framework escolhido
---

# Write Sections

Com o hook confirmado, escreve o corpo completo da LP: cada seção segue o framework (StoryBrand/AIDA/PAS/4Ps) e mantém o driver psicológico único do início ao fim. Aplica stress tests antes de entregar.

## Process

1. **Ler arquitetura.** Pegar a tabela de seções do strategy.md (nome, objetivo, social proof, CTA intensity).
2. **Escrever seção por seção, na ordem.** Aplicar regras de rhythm: uma ideia por parágrafo, máximo 3 linhas no mobile, contrast blocks (parágrafo longo intercalado com sentença curta). Aplicar pattern interrupts em pontos-chave.
3. **Injetar proof + neutralizador.** Toda promessa significativa ganha número/social proof. Imediatamente antes de cada CTA primário, neutralizar a objeção dominante em 1-2 linhas ("Sem cartão", "Cancele quando quiser", "Funciona mesmo se você já tentou").
4. **CTA em escada.** CTA primário no nível certo da Intensity Ladder (depende do funnel stage). CTAs secundários sempre menores (assistir demo, baixar PDF).
5. **Stress test antes de entregar.** Skeptic test (cada claim sobrevive a "como você sabe?"), anti-commodity test (copy não funcionaria igualzinho para o concorrente), redução de 15-25% do draft inicial.

## Output Format

```markdown
## HERO
**H1:** ...
**Subhero:** ...
**CTA primário:** ... (intensity X)
**Neutralizador:** ...

## {Seção 2}
... corpo no framework escolhido ...

## {Seção 3}
...

## CTA FINAL
**Headline:** ...
**Subhead:** ...
**Botão:** ...
**Neutralizador:** ...
```

## Output Example

> Use como referência de qualidade.

```markdown
## HERO
**H1:** Você sabe inglês. Em standup, ele te abandona.
**Subhero:** Curso de 12 semanas com o inglês real de standup, code review e PR description.
**CTA primário:** Quero a primeira aula grátis → (intensity 4)
**Neutralizador:** Sem cartão. Primeira aula liberada na hora.

## PAIN
**H2:** Você sabe inglês. Em standup, ele te abandona.

Você lê doc em inglês todo dia.
Mas no standup global, trava na hora de explicar "porque o deploy falhou".
Cinco segundos de silêncio. O PM repete a pergunta. Você responde curto demais.
A reunião segue. Você fica.

Não é falta de inglês. É falta de inglês DE STANDUP.

Gramática de curso de viagem não te ensina:
- Como interromper educadamente quando a conversa acelera
- O verbo certo para "subir branch" sem soar tradução literal
- Como pedir contexto sem parecer perdido
- A entonação que separa "tenho dúvida" de "estou perdido"

Tudo isso é aprendível. Em 12 semanas.

## MECANISMO
**H2:** O método anti-genérico.

200 horas de standups reais de big techs, transcritas e indexadas por situação.
Você não aprende inglês. Você aprende o inglês que aparece no seu dia.

## CTA FINAL
**Headline:** Pare de fingir que entendeu.
**Subhead:** Primeira aula liberada agora. 12 semanas para mudar como você é visto no time.
**Botão:** Quero a primeira aula grátis →
**Neutralizador:** Sem cartão. Cancele a qualquer momento.
```

## Quality Criteria

- [ ] Cada seção respeita o framework escolhido (StoryBrand/AIDA/PAS/4Ps).
- [ ] Driver psicológico do strategy.md aparece em cada seção, não apenas no hero.
- [ ] Toda promessa significativa tem proof number ou social proof anexado.
- [ ] Neutralizador presente imediatamente antes do CTA primário.
- [ ] Word count reduzido 15-25% versus draft inicial.

## Veto Conditions

Reject and redo se QUALQUER for verdadeiro:
1. Driver psicológico do strategy.md se perde em alguma seção (incoerência).
2. CTA primário aparece sem neutralizador imediatamente antes.
