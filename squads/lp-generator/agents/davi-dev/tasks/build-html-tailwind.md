---
task: "Build HTML + Tailwind Single-File"
order: 1
input: |
  - strategy: clients/{slug}/brief/strategy.md (stack == HTML+Tailwind)
  - copy: clients/{slug}/content/copy.md
  - visual_system: clients/{slug}/design/design-system.md
  - images_folder: clients/{slug}/assets/images/
output: |
  - code_folder: clients/{slug}/src/ (index.html + images/ + README.md)
---

# Build HTML + Tailwind Single-File

Implementa a LP em UM ÚNICO `index.html` com Tailwind via CDN, Google Fonts via `@import` e ZERO outros assets externos além de imagens locais. Default do squad para LPs estáticas, 1 página. Mobile-first, Lighthouse > 90, LCP < 2.5s, CLS < 0.1.

## Process

1. **Setup do head.** Charset, viewport, title (do copy.md), meta description (do copy.md), Open Graph completo, Twitter Card, canonical, Tailwind CDN, Google Fonts preconnect + link, style inline minimal para family.
2. **Skip-to-content + main semântico.** `<a class="sr-only focus:not-sr-only">` no topo. `<main id="main">` envolvendo todas as sections.
3. **Hero first.** H1 único, subhero, CTA primário com `min-h-[48px]`, neutralizador abaixo. Mobile-first (text-4xl md:text-6xl, padding px-6 py-20 md:py-32).
4. **Sections em ordem.** Implementar seção por seção na ordem do strategy.md. Cada uma com `<section>` semântico, H2 único, hierarquia até H3.
5. **Imagens otimizadas.** Cada `<img>` tem `alt`, `width`, `height`, `loading="lazy"` (exceto hero), formato WebP/AVIF preferido.
6. **Perf budget.** Sem JS desnecessário. Tailwind via CDN é OK aqui (single-file). `font-display: swap` via Google Fonts.
7. **README curto.** Stack, como abrir, sugestão de deploy (Cloudflare Pages, Netlify drop, Vercel static).

## Output Format

Estrutura de arquivos final:
```
output/code/
├── index.html
├── images/
│   ├── hero-{slug}.webp
│   ├── ... (todas as imagens da Diana)
│   └── og-default.png
└── README.md
```

## Output Example

> Excerto do `index.html` (hero) — use como referência de qualidade.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Inglês de Standup — Pare de travar em reunião global</title>
  <meta name="description" content="Curso de 12 semanas que ensina o inglês real que devs usam em standup, code review e PR description.">
  <link rel="canonical" href="https://inglesdestandup.com.br/">
  <meta property="og:title" content="Inglês de Standup">
  <meta property="og:description" content="Você sabe inglês. Em standup, ele te abandona. Conserte isso em 12 semanas.">
  <meta property="og:image" content="/images/og-default.png">
  <meta name="twitter:card" content="summary_large_image">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
  <style>body{font-family:'Inter',sans-serif}h1,h2,h3{font-family:'Space Grotesk',sans-serif}</style>
</head>
<body class="bg-stone-50 text-zinc-900 antialiased">
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:p-3 focus:bg-lime-500">Pular para o conteúdo</a>
  <main id="main">
    <section class="px-6 py-20 md:py-32 max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-bold leading-tight">
        Você sabe inglês. <span class="text-lime-600">Em standup, ele te abandona.</span>
      </h1>
      <p class="mt-6 text-lg md:text-xl text-zinc-600 max-w-2xl">
        Curso de 12 semanas com o inglês real de standup, code review e PR description.
      </p>
      <div class="mt-10 flex flex-col sm:flex-row gap-4">
        <a href="#inscricao" class="min-h-[48px] inline-flex items-center justify-center px-8 py-4 rounded-lg bg-lime-500 text-zinc-900 font-semibold hover:bg-lime-400 focus:ring-4 focus:ring-lime-300">
          Quero a primeira aula grátis →
        </a>
      </div>
      <p class="mt-4 text-sm text-zinc-500">Sem cartão. Primeira aula liberada na hora.</p>
    </section>
  </main>
</body>
</html>
```

## Quality Criteria

- [ ] Tudo em UM `index.html` + imagens locais. Zero outros assets externos.
- [ ] Tailwind via CDN; Google Fonts via link + preconnect.
- [ ] H1 único, hierarquia semântica até H3.
- [ ] Toda `<img>` com alt + width + height.
- [ ] CTA mobile com `min-h-[48px]`.
- [ ] README curto explicando como abrir + sugestão de deploy.

## Veto Conditions

Reject and redo se QUALQUER for verdadeiro:
1. Existe mais de um arquivo HTML ou framework no diretório code/.
2. Falta `<title>`, `<meta description>`, OG ou canonical.
