---
task: "Write Meta SEO"
order: 3
input: |
  - copy_sections: corpo entregue pela task write-sections
  - strategy: clients/{slug}/brief/strategy.md (keyword primária, posicionamento)
output: |
  - meta_block: title tag, meta description, H1, alt texts descritivos
---

# Write Meta SEO

Escreve title tag, meta description, H1 final e alt texts descritivos para cada imagem. Garante que keyword primária aparece na H1 e nos primeiros 40 chars do title. Salva no final do copy.md.

## Process

1. **Identificar keyword primária.** Pegar do strategy.md ou inferir do produto + público (ex.: "curso de inglês para devs", "software de proposta comercial").
2. **Escrever title tag.** <= 60 chars total, keyword primária nos primeiros 40 chars, separar marca com `—` ou `|` se sobrar espaço.
3. **Escrever meta description.** 150-160 chars com promessa + CTA implícito. Não regurgitar o title — adicionar gancho persuasivo do SERP.
4. **Confirmar H1 final.** Espelha o hero (mesma linha). H1 único na página.
5. **Alt text descritivo por imagem.** Listar imagens (Diana fornece em paralelo) e escrever alt descritivo, não genérico ("Dashboard mostrando proposta com pricing e e-sign" > "Imagem").

## Output Format

```markdown
## META SEO

**Title tag:** ... (X chars)
**Meta description:** ... (X chars)
**H1 final:** ...
**Canonical:** https://...

### Alt texts
- /images/hero.webp — "..."
- /images/feature-1.svg — "..."
- /images/testimonial-ana.webp — "..."
```

## Output Example

> Use como referência de qualidade.

```markdown
## META SEO

**Title tag:** Inglês de Standup — Pare de travar em reunião global (58 chars)
**Meta description:** Curso de 12 semanas que ensina o inglês real que devs usam em standup, code review e PR description. Primeira aula grátis, sem cartão. (159 chars)
**H1 final:** Você sabe inglês. Em standup, ele te abandona.
**Canonical:** https://inglesdestandup.com.br/

### Alt texts
- /images/hero-standup.webp — "Dev em videoconferência de standup global com balão de fala incompleto representando bloqueio de inglês"
- /images/icon-clock.svg — "Ícone de relógio: representa segundos perdidos no standup"
- /images/icon-mic-off.svg — "Ícone de microfone desligado: representa silêncio na hora da fala"
- /images/testimonial-ana.webp — "Foto da dev Ana Souza, engineer no Mercado Livre, sorrindo durante standup"
- /images/og-default.png — "Capa Open Graph: Inglês de Standup, curso para devs, 12 semanas"
```

## Quality Criteria

- [ ] Title tag <= 60 chars com keyword primária nos primeiros 40.
- [ ] Meta description 150-160 chars com promessa + CTA implícito.
- [ ] H1 único, espelha o hero, contém ou parafraseia a keyword primária.
- [ ] Alt text descritivo (não "imagem" ou "foto") em cada imagem listada.

## Veto Conditions

Reject and redo se QUALQUER for verdadeiro:
1. Title tag > 60 chars ou meta description fora do intervalo 150-160 chars.
2. Algum alt text é genérico ("imagem", "ícone", "foto").
