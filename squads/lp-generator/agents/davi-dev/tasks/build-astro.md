---
task: "Build Astro"
order: 2
input: |
  - strategy: clients/{slug}/brief/strategy.md (stack == Astro)
  - copy: clients/{slug}/content/copy.md
  - visual_system: clients/{slug}/design/design-system.md
  - images_folder: clients/{slug}/assets/images/
output: |
  - code_folder: clients/{slug}/src/ (scaffold Astro com Tailwind)
---

# Build Astro

Scaffold Astro completo com Tailwind integrado para LPs multi-página, MDX content ou blog. Alvo: Lighthouse 99/100. Zero JS por padrão; client islands só onde necessário.

## Process

1. **Scaffold padrão.** `src/pages/index.astro` (home), `src/layouts/Base.astro` (layout com meta SEO, OG, canonical), `src/components/` (Hero, Features, Pricing, Faq, CtaFinal). Tailwind via integração oficial (`@astrojs/tailwind`), não CDN.
2. **Content collections (se houver blog/casos).** `src/content/{tipo}/*.mdx` com schema Zod em `src/content/config.ts`.
3. **Imagens.** Usar `<Image>` do `astro:assets` para auto-otimização (WebP/AVIF, width/height, lazy abaixo do fold).
4. **Mobile-first com Tailwind.** Mesmas regras do single-file (px-6 / py-20 / text-4xl md:text-6xl, min-h-[48px] CTAs).
5. **SEO Layout.** `<Base>` recebe title, description, ogImage, canonical como props. Aplicar em todas as pages.
6. **Performance.** Astro é zero-JS por padrão; usar `client:idle` ou `client:visible` apenas em componentes que precisam de interatividade real.
7. **README.** Stack, `npm install`, `npm run dev`, `npm run build`, deploy sugerido (Cloudflare Pages, Netlify, Vercel).

## Output Format

Estrutura:
```
output/code/
├── astro.config.mjs
├── package.json
├── tailwind.config.cjs
├── tsconfig.json
├── public/
│   └── images/ (assets da Diana)
├── src/
│   ├── layouts/Base.astro
│   ├── components/Hero.astro
│   ├── components/Features.astro
│   ├── components/Pricing.astro
│   ├── components/Faq.astro
│   ├── components/CtaFinal.astro
│   ├── pages/index.astro
│   └── styles/global.css
└── README.md
```

## Output Example

> Excerto do `src/pages/index.astro` — referência de qualidade.

```astro
---
import Base from "../layouts/Base.astro";
import Hero from "../components/Hero.astro";
import Features from "../components/Features.astro";
import Pricing from "../components/Pricing.astro";
import Faq from "../components/Faq.astro";
import CtaFinal from "../components/CtaFinal.astro";

const meta = {
  title: "ProposalKit — Propostas em 15 minutos",
  description: "Crie propostas comerciais profissionais em 15 min, não 4 horas. Trial grátis 14 dias, sem cartão.",
  ogImage: "/images/og-default.png",
  canonical: "https://proposalkit.com",
};
---

<Base {...meta}>
  <main id="main" class="bg-white text-slate-900">
    <Hero />
    <Features />
    <Pricing />
    <Faq />
    <CtaFinal />
  </main>
</Base>
```

E o `src/layouts/Base.astro` minimal:

```astro
---
const { title, description, ogImage, canonical } = Astro.props;
---
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <meta name="twitter:card" content="summary_large_image" />
</head>
<body class="antialiased">
  <a href="#main" class="sr-only focus:not-sr-only focus:p-3 focus:bg-lime-500">Pular para o conteúdo</a>
  <slot />
</body>
</html>
```

## Quality Criteria

- [ ] Tailwind integrado via `@astrojs/tailwind` (não CDN).
- [ ] Layout `Base.astro` aplicado a todas as pages com SEO completo.
- [ ] Imagens via `astro:assets` para auto-otimização.
- [ ] Zero JS client por padrão; islands só onde há interatividade real.
- [ ] README com `npm install`, `npm run dev`, `npm run build` e deploy sugerido.

## Veto Conditions

Reject and redo se QUALQUER for verdadeiro:
1. Tailwind via CDN em vez de integração oficial.
2. Algum `client:*` directive em componente sem state/event.
