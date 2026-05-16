---
execution: inline
agent: davi-dev
---

# Step 06: Build Code

## Context Loading

**Primeira ação:** ler o slug:
```bash
slug=$(cat c:/development/lp-generator/squads/lp-generator/.runtime/current-slug.txt)
```

Depois carregue:
- `clients/{slug}/brief/strategy.md` — stack escolhida (HTML+Tailwind / Astro / Next.js / design-handoff).
- `clients/{slug}/content/copy.md` — textos finais (hero, sections, meta SEO, alt texts).
- `clients/{slug}/design/design-system.md` — paleta, tipografia, spacing, radius.
- `clients/{slug}/assets/images/` — assets gerados pela Diana.
- `clients/{slug}/brief/briefing.md` — verificar `mode:` no frontmatter (brief-driven vs design-handoff).
- `squads/lp-generator/pipeline/data/quality-criteria.md` — critérios do eixo Código.
- `squads/lp-generator/pipeline/data/anti-patterns.md` — armadilhas de implementação.

## Modo "design handoff"

Se `mode: design-handoff` no frontmatter do brief, **pular steps 1-7** abaixo. Fluxo:

1. Extrair o tarball do bundle Anthropic Design (em `squads/lp-generator/_build/design-fetch/`).
2. Ler `README.md` e `chats/*.md` do bundle.
3. Identificar a pasta `project/site/` (ou equivalente) no bundle.
4. Copiar a pasta inteira pra `clients/{slug}/src/` (sobrescreve):
   ```bash
   cp -r {bundle_path}/project/site/. clients/{slug}/src/
   ```
5. Validar via `diff -r`.
6. Pular pro Output abaixo.

## Instructions

### Process

1. **Confirmar stack** do strategy.md. Selecionar a task correspondente:
   - `build-html-tailwind.md` para HTML + Tailwind CDN single-file (default).
   - `build-astro.md` para Astro.
   - `build-nextjs.md` para Next.js App Router.
2. **Setup da stack.** HTML+Tailwind: 1 `index.html` com Tailwind CDN, Google Fonts via link. Astro: scaffold + `@astrojs/tailwind`. Next.js: App Router + Tailwind dep + `next/font`.
3. **Construir do hero para baixo.** Seção por seção na ordem do strategy.md. Hero primeiro (peso desproporcional). Mobile-first: CSS começa em 390px, escala com sm/md/lg/xl.
4. **Aplicar SEO técnico.** Title + meta description (do copy.md) + Open Graph (og:title, og:description, og:image) + Twitter Card + canonical. JSON-LD (Product/Organization/Course) quando aplicável.
5. **Imagens otimizadas.** Cada `<img>` com `alt`, `width`, `height`. Hero priority/eager; resto lazy. WebP/AVIF.
6. **Semântica + a11y.** `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`. H1 único na hero. Skip-to-content link no topo. Tap targets min 48px.
7. **Performance budget.** LCP < 2.5s, CLS < 0.1. Sem JS desnecessário. `font-display: swap`.
8. **README curto.** Stack, dev command, build command, deploy sugerido.
9. **Salvar tudo direto em `clients/{slug}/src/`** (sobrescreve). Nada de cópia intermediária.

## Output Format

Estrutura de arquivos depende da stack:
- HTML+Tailwind: `code/index.html` + `code/images/` + `code/README.md`.
- Astro: scaffold completo (`astro.config`, `src/`, `public/`, `package.json`, `README.md`).
- Next.js: scaffold completo (`next.config`, `app/`, `components/`, `public/`, `package.json`, `README.md`).

## Output Example

> Excerto do hero em HTML+Tailwind single-file (caso default):

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
  <meta property="og:description" content="Você sabe inglês. Em standup, ele te abandona.">
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

## Veto Conditions

Reject and redo se QUALQUER for verdadeiro:
1. Stack implementada difere do strategy.md (upgrade ou downgrade silencioso).
2. Falta `<title>`, `<meta description>`, OG ou canonical.
3. Tailwind via CDN em projeto Next.js ou Astro de produção.
4. Alguma `<img>` sem `alt`, `width` ou `height`.

## Quality Criteria

- [ ] Stack implementada conforme strategy.md.
- [ ] Lighthouse mobile (a ser confirmado pela Rita): Performance > 90, A11y > 95, BP > 95, SEO 100.
- [ ] Mobile-first com breakpoints sm/md/lg/xl.
- [ ] H1 único na hero, semantic HTML.
- [ ] Toda `<img>` com alt + width + height.
- [ ] Meta + OG + canonical implementados.
- [ ] README com stack + dev + build + sugestão de deploy.
- [ ] Zero erro de console no browser.
