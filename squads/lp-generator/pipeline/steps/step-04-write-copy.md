---
execution: inline
agent: carla-copy
format: copywriting
---

# Step 04: Write Copy

## Context Loading

**Primeira ação:** ler o slug:
```bash
slug=$(cat c:/development/lp-generator/squads/lp-generator/.runtime/current-slug.txt)
```

Depois carregue:
- `clients/{slug}/brief/strategy.md` — Big Idea, driver, framework, arquitetura.
- `clients/{slug}/brief/briefing.md` — contexto original.
- `squads/lp-generator/pipeline/data/tone-of-voice.md` — 6 tons disponíveis.
- `squads/lp-generator/pipeline/data/anti-patterns.md` — clichês a evitar, regras de CTA.
- `squads/lp-generator/pipeline/data/output-examples.md` — exemplos de hero e seções.

## Instructions

### Process

1. **Confirmar tom com o Patrick.** Ler `tone-of-voice.md`. Detectar tom inferido do brief+strategy. Apresentar 2-3 tons mais aderentes ao público + oferta, com 1 frase de motivo + mini-exemplo de hero em cada um. AGUARDAR escolha antes de gerar hooks. Se o brief já é explícito sobre tom, citar a passagem e confirmar — não inferir em silêncio.
2. **Gerar 3 hooks A/B/C** (task `generate-hooks.md`). Estruturas distintas (provocação / dado / contrarian / pergunta / promessa / pattern-interrupt). Cada hook com 1 frase de racional (estrutura + driver + scroll-stop). Apresentar e AGUARDAR seleção do Patrick.
3. **Escrever seções no framework** (task `write-sections.md`). Hook confirmado guia o resto. Aplicar rhythm rules (uma ideia por parágrafo, max 3 linhas mobile). Driver psicológico do strategy presente em cada seção.
4. **Injetar proof + neutralizador.** Toda promessa significativa com número/social proof. Neutralizador antes de cada CTA primário.
5. **CTA em escada (Intensity Ladder).** Primário no nível do funil; secundários menores.
6. **Escrever meta SEO** (task `write-meta-seo.md`). Title <=60 chars, meta 150-160 chars, H1 final, alt text descritivo por imagem.
7. **Stress test.** Skeptic test, anti-commodity test, redução 15-25%.
8. **Salvar copy.md** em `clients/{slug}/content/copy.md` (sobrescreve).

## Output Format

```markdown
# Copy — {Nome da LP}

## Tom escolhido
{tom} — confirmado com o Patrick.

## Hooks apresentados
### HOOK A ({Estrutura}) — [SELECIONADO]
...

### HOOK B
...

### HOOK C
...

## HERO
**H1:** ...
**Subhero:** ...
**CTA primário:** ... (intensity X)
**Neutralizador:** ...

## {Sections — uma por uma no framework}

## CTA FINAL
...

## META SEO
**Title:** ... (X chars)
**Meta description:** ... (X chars)
**Canonical:** ...

### Alt texts
- /images/hero.webp — "..."
- ...
```

## Output Example

```markdown
# Copy — Inglês de Standup

## Tom escolhido
Amigo-mentor (referência: Basecamp / 37signals manifestos) — confirmado com o Patrick.

## Hooks apresentados
### HOOK A (Pattern interrupt) — [SELECIONADO]
**Headline:** Você sabe inglês. Em standup, ele te abandona.
**Rationale:** Pattern interrupt + driver status + scroll-stop porque inverte expectativa do leitor competente que falha em situação específica.

### HOOK B (Dado)
**Headline:** Devs intermediários travam 5 segundos por intervenção em standup. Você não está sozinho.
**Rationale:** Dado + alívio social + driver pertencimento.

### HOOK C (Pergunta)
**Headline:** E se você liderasse o standup amanhã, em inglês, sem cinco segundos de silêncio?
**Rationale:** Future-pacing + driver status.

## HERO
**H1:** Você sabe inglês. Em standup, ele te abandona.
**Subhero:** Curso de 12 semanas com o inglês real de standup, code review e PR description.
**CTA primário:** Quero a primeira aula grátis → (intensity 4)
**Neutralizador:** Sem cartão. Primeira aula liberada na hora.

## PAIN (PAS — Problem + Agitate)
**H2:** Você sabe inglês. Em standup, ele te abandona.

Você lê doc em inglês todo dia.
Mas no standup global, trava na hora de explicar "porque o deploy falhou".
Cinco segundos de silêncio. O PM repete. Você responde curto demais.

Não é falta de inglês. É falta de inglês DE STANDUP.

## MECANISMO (Solution)
**H2:** O método anti-genérico.
200 horas de standups reais de big techs, transcritas e indexadas por situação.

## CTA FINAL
**Headline:** Pare de fingir que entendeu.
**Subhead:** Primeira aula liberada agora.
**Botão:** Quero a primeira aula grátis →
**Neutralizador:** Sem cartão. Cancele a qualquer momento.

## META SEO
**Title:** Inglês de Standup — Pare de travar em reunião global (58 chars)
**Meta description:** Curso de 12 semanas que ensina o inglês real que devs usam em standup, code review e PR description. Primeira aula grátis, sem cartão. (159 chars)
**Canonical:** https://inglesdestandup.com.br/

### Alt texts
- /images/hero-standup.webp — "Dev em videoconferência de standup global com balão de fala incompleto"
- /images/testimonial-ana.webp — "Foto da dev Ana Souza, engineer no Mercado Livre"
```

## Veto Conditions

Reject and redo se QUALQUER for verdadeiro:
1. Corpo escrito antes do tom OU do hook ter sido confirmado pelo Patrick.
2. Driver psicológico do strategy se perde em alguma seção.
3. CTA primário sem neutralizador imediatamente antes.
4. Title tag > 60 chars OU meta description fora de 150-160 chars.

## Quality Criteria

- [ ] Tom confirmado com Patrick com 2-3 opções referenciadas.
- [ ] 3 hooks com estruturas distintas apresentados antes do corpo.
- [ ] Driver psicológico do strategy presente do hero ao CTA final.
- [ ] Toda promessa significativa com proof number ou social proof.
- [ ] Neutralizador antes de cada CTA primário.
- [ ] Meta SEO completo: title <=60, meta 150-160, H1 espelha hero, alt descritivo.
- [ ] Word count reduzido 15-25% vs draft inicial.
- [ ] Zero em-dash, zero clichê morto, acentos completos em pt-BR.
