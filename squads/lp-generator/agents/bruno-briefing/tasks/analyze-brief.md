---
task: "Analyze Brief"
order: 1
input: |
  - brief_file: clients/{slug}/brief/briefing.md (briefing preenchido pelo Patrick)
  - reference_urls: lista opcional de URLs de referência citadas no briefing
output: |
  - gaps_list: lista de campos ausentes ou ambíguos (se houver)
  - references_analyzed: síntese de cada URL via WebFetch (estrutura, tom, paleta, social proof, CTA)
  - audience_diagnosis: awareness level + market sophistication preliminares
---

# Analyze Brief

Lê o briefing por completo, identifica gaps que impedem a estratégia, analisa cada URL de referência via WebFetch e produz um diagnóstico preliminar de audiência. Não escreve strategy.md ainda — apenas valida que existe matéria-prima suficiente.

## Process

1. **Ler brief.md por completo.** Identificar: produto/oferta, público-alvo, tom desejado, URLs de referência, seções obrigatórias e restrições. Listar campos vazios ou ambíguos.
2. **Validar suficiência.** Se faltar produto, público OU oferta concreta, parar e devolver perguntas ao Patrick. Não prosseguir com campos críticos vazios.
3. **Analisar referências via WebFetch.** Para cada URL: extrair estrutura de seções, tom de voz dominante, paleta visual aparente, tipo de social proof, intensidade do CTA. Compilar em referencias-analisadas.md interno.
4. **Diagnóstico preliminar.** Classificar awareness level (Unaware → Most Aware) e market sophistication (stage 1-5) a partir do que o briefing diz sobre público + nicho.

## Output Format

```yaml
gaps:
  - field: "campo_ausente_ou_ambiguo"
    severity: "blocking | minor"
    pergunta_ao_usuario: "..."

references_analyzed:
  - url: "https://..."
    structure: ["hero", "social-proof", "..."]
    tone: "autoridade-prática | amigo-mentor | ..."
    palette_hint: "deep navy + orange"
    social_proof_type: "logos | cases | numbers | testimonials"
    cta_intensity: "1-5 da Intensity Ladder"

audience_diagnosis:
  awareness: "Problem Aware"
  sophistication: 3
  rationale: "Por que essa classificação."
```

## Output Example

> Use como referência de qualidade, não template rígido.

```yaml
gaps:
  - field: "tom_de_voz"
    severity: "minor"
    pergunta_ao_usuario: "Você quer mais autoridade-prática (como Linear) ou amigo-mentor (como Basecamp)?"

references_analyzed:
  - url: "https://linear.app"
    structure: ["hero", "demo-loop", "features-trio", "team-logos", "ic-quotes", "pricing", "final-cta"]
    tone: "autoridade-prática"
    palette_hint: "dark + neutral + electric blue accent"
    social_proof_type: "logos + IC quotes"
    cta_intensity: "4 (Start free trial)"

audience_diagnosis:
  awareness: "Problem Aware"
  sophistication: 3
  rationale: "Agências digitais já sabem que Word é ineficiente, mas ainda não confiaram em uma ferramenta dedicada. Mercado tem 3+ concorrentes diretos — sophistication 3."
```

## Quality Criteria

- [ ] Cada gap tem severity e pergunta clara para o Patrick.
- [ ] Cada URL de referência foi efetivamente analisada via WebFetch (não suposição).
- [ ] Diagnóstico preliminar nomeia explicitamente awareness + sophistication com rationale.

## Veto Conditions

Reject and redo se QUALQUER for verdadeiro:
1. Algum campo crítico do briefing está vazio E não foi listado em `gaps`.
2. URL de referência foi citada mas não foi analisada (sem extração de estrutura/tom).
