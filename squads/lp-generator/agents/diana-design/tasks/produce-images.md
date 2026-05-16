---
task: "Produce Images"
order: 2
input: |
  - visual_system: clients/{slug}/design/design-system.md
  - copy: clients/{slug}/content/copy.md (para entender o que cada imagem precisa comunicar)
output: |
  - images_folder: clients/{slug}/assets/images/ (assets gerados/capturados)
  - images_plan: lista por seção com skill usada + prompt/query + alt sugerido
---

# Produce Images

Por seção da LP, escolhe entre 3 skills (`image-ai-generator`, `image-fetcher` ou SVG inline) e gera os assets. Aplica WCAG AA antes de aprovar imagem com overlay de texto. Salva em `images/` folder com naming consistente.

## Process

1. **Listar imagens por seção.** Da arquitetura do strategy.md + copy.md, identificar: hero image, product shots, logos, retratos de depoimento, ícones de features.
2. **Escolher skill por seção:**
   - Hero/product shot/ilustração custom: `image-ai-generator`.
   - Logos de marcas reais: `image-fetcher` com URLs do briefing.
   - Foto humana/equipe: `image-fetcher` (Unsplash) ou `image-ai-generator` se stock genérica não serve.
   - Ícones de features: SVG inline (Heroicons/Tabler) — Davi insere depois, Diana apenas indica o set.
3. **Executar skill com prompt específico.** Prompts incluem: cena, paleta (alinhada ao visual-system), composição, formato (16:9 hero, 4:3 product, 1:1 retrato), peso visual (flat / 3D / fotorealista).
4. **WCAG AA check em imagens com texto sobreposto.** Se a imagem vai receber overlay de copy, validar contraste ou aplicar overlay sólido 60%+ / gradient / backdrop-blur.
5. **Perf budget.** Hero <= 200KB pós-compressão. Outras <= 100KB. Formato WebP/AVIF preferido.
6. **Salvar em images/ folder** com naming claro: `hero-{slug}.webp`, `feature-{n}.svg`, `testimonial-{nome}.webp`, `og-default.png`.

## Output Format

```yaml
images_plan:
  - section: "hero"
    skill: "image-ai-generator"
    file: "images/hero-{slug}.webp"
    prompt: "..."
    dimensions: "1280x720"
    target_kb: 180
    alt_suggested: "..."
    wcag_check: "overlay gradient 70% slate-900 → transparent — text passes 5.2:1"

  - section: "social_proof_logos"
    skill: "image-fetcher"
    files: ["images/logo-{1..8}.svg"]
    source: "URLs fornecidas no briefing"

  - section: "features_icons"
    skill: "svg_inline"
    set: "Heroicons outline 24"
    icons: ["clock", "mic-off", "chat-bubble", "exclamation"]
```

## Output Example

> Use como referência de qualidade.

```yaml
images_plan:
  - section: "hero"
    skill: "image-ai-generator"
    file: "images/hero-standup.webp"
    prompt: "Cena split: dev em videoconferência de standup virtual, balão de fala '...uh...the deploy' incompleto. Flat illustration. Paleta zinc-900 + lime-500 accent. Composição centralizada, espaço para overlay de copy à esquerda."
    dimensions: "1440x900"
    target_kb: 180
    alt_suggested: "Dev em standup virtual com balão de fala incompleto representando bloqueio de inglês"
    wcag_check: "Overlay gradient zinc-900 → transparent 70% no lado esquerdo; copy lime-100 sobre overlay passa 6.1:1"

  - section: "social_proof_logos"
    skill: "image-fetcher"
    files: ["images/logo-mercadolivre.svg", "images/logo-nubank.svg", "images/logo-stone.svg"]
    source: "URLs do briefing (logos oficiais de marcas dos depoentes)"

  - section: "features_icons"
    skill: "svg_inline"
    set: "Heroicons outline 24"
    icons: ["clock", "microphone-slash", "chat-bubble-bottom-center", "exclamation-triangle"]
    note: "Davi insere via <svg> no HTML — Diana fornece apenas o nome dos ícones."

  - section: "testimonials"
    skill: "image-fetcher"
    files: ["images/testimonial-ana.webp", "images/testimonial-pedro.webp", "images/testimonial-juliana.webp"]
    source: "Unsplash queries: 'brazilian developer woman portrait', 'brazilian latino software engineer portrait'"
    target_kb_each: 80
    alt_each: "Foto profissional da depoente {Nome}, engineer em {empresa}"
```

## Quality Criteria

- [ ] Cada imagem da LP tem skill atribuída.
- [ ] Hero <= 200KB pós-compressão; outras imagens <= 100KB.
- [ ] Imagens com overlay de texto passam WCAG AA com overlay/gradient/blur documentado.
- [ ] Nenhuma imagem stock corporate genérica (handshake, equipe sorrindo).
- [ ] Alt text sugerido é descritivo (não "imagem" ou "foto").

## Veto Conditions

Reject and redo se QUALQUER for verdadeiro:
1. Hero image acima de 200KB pós-compressão.
2. Imagem stock corporate genérica aprovada para a LP.
