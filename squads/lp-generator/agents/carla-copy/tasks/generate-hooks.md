---
task: "Generate Hooks"
order: 1
input: |
  - strategy: clients/{slug}/brief/strategy.md (Big Idea, driver, framework)
  - tone_choice: tom confirmado pelo Patrick (referencia tone-of-voice.md)
output: |
  - hooks_block: 3 hooks (A/B/C) com drivers e estruturas distintos + 1 frase de racional cada
  - selected_hook: hook escolhido pelo Patrick (aguarda input antes da próxima task)
---

# Generate Hooks

Gera 3 hooks alternativos (A, B, C) para o hero, cada um com driver psicológico e estrutura distintos. Apresenta ao Patrick e AGUARDA seleção antes de seguir para o corpo da LP.

## Process

1. **Ler strategy.md.** Absorver Big Idea, driver psicológico dominante e framework (StoryBrand/AIDA/PAS/4Ps).
2. **Gerar 3 hooks com estruturas diferentes.** Escolher 3 estruturas distintas da lista: provocação / dado / contrarian / pergunta / promessa / pattern-interrupt. Cada hook ancora o driver dominante mas explora ângulo diferente.
3. **Anexar racional.** Cada hook acompanha 1 frase explicando: que estrutura usa, qual driver ativa, e por que faria scroll-stop neste público.
4. **Apresentar ao Patrick.** Formato A/B/C, claro, sem esconder o vencedor. AGUARDAR escolha. Não escrever corpo antes da confirmação.

## Output Format

```markdown
## Hooks gerados para {Nome da LP}

### HOOK A ({Estrutura})
**Headline:** ...
**Rationale:** Estrutura {X}, driver {Y}, scroll-stop porque {Z}.

### HOOK B ({Estrutura})
**Headline:** ...
**Rationale:** ...

### HOOK C ({Estrutura})
**Headline:** ...
**Rationale:** ...

> Patrick, escolha A, B ou C antes que eu escreva o corpo.
```

## Output Example

> Use como referência de qualidade.

```markdown
## Hooks gerados para ProposalKit

### HOOK A (Contrarian)
**Headline:** Sua proposta comercial não é lenta. Seu Word é.
**Rationale:** Estrutura contrarian (inverte a culpa), driver liberdade (alivia a auto-cobrança do leitor), scroll-stop porque pega quem se cobra por ser lento e aponta a ferramenta como vilã.

### HOOK B (Dado)
**Headline:** 4 horas. É o que sua agência gasta por proposta. Concorrentes que migraram fecham em 15 min.
**Rationale:** Estrutura dado + comparativo, driver liberdade + status (FOMO competitivo), scroll-stop porque o número é específico e cria ansiedade controlada.

### HOOK C (Pergunta)
**Headline:** E se cada proposta sua saísse com pricing, e-sign e case studies em 15 minutos?
**Rationale:** Estrutura pergunta + future-pacing, driver liberdade, scroll-stop porque abre loop concreto com elementos sensoriais (pricing, e-sign, cases).

> Patrick, escolha A, B ou C antes que eu escreva o corpo.
```

## Quality Criteria

- [ ] 3 hooks com estruturas distintas (não 3 variações do mesmo).
- [ ] Cada hook ancora o driver psicológico do strategy.md.
- [ ] Cada hook tem racional de 1 frase explicando estrutura + driver + scroll-stop.
- [ ] Nenhum hook usa em-dash ou clichê morto.

## Veto Conditions

Reject and redo se QUALQUER for verdadeiro:
1. Os 3 hooks usam a mesma estrutura (ex.: 3 perguntas, 3 dados).
2. Algum hook contradiz o driver psicológico do strategy.md.
