# Templates de HTML otimizado para SEO

Blocos prontos. Substitua os placeholders `{{...}}` por valores reais do brief.
Use URLs **absolutas** em canonical, OG e schema. Datas em formato `AAAA-MM-DD`.

## 1. `<head>` completo (base para qualquer LP)

```html
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>{{Keyword primária}} | {{Marca}} — {{gancho de valor ≤60 car.}}</title>
  <meta name="description" content="{{Keyword}} com {{benefício}}. {{prova/diferencial}}. {{CTA}} ≤155 car.">
  <link rel="canonical" href="https://{{dominio}}/{{caminho}}">
  <meta name="robots" content="index, follow, max-image-preview:large">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:site_name" content="{{Marca}}">
  <meta property="og:title" content="{{Título social}}">
  <meta property="og:description" content="{{Descrição social}}">
  <meta property="og:url" content="https://{{dominio}}/{{caminho}}">
  <meta property="og:image" content="https://{{dominio}}/og-image.jpg"><!-- 1200x630 -->

  <!-- Twitter/X -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{{Título social}}">
  <meta name="twitter:description" content="{{Descrição social}}">
  <meta name="twitter:image" content="https://{{dominio}}/og-image.jpg">

  <meta name="theme-color" content="{{#hex}}">
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">

  <!-- Fontes: preconnect + swap para não bloquear render -->
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <!-- Preload do recurso de LCP (imagem do herói) -->
  <link rel="preload" as="image" href="/hero.webp" fetchpriority="high">
</head>
```

## 2. Esqueleto semântico

```html
<body>
  <header>
    <nav aria-label="Principal"><!-- logo + menu --></nav>
  </header>
  <main>
    <section aria-labelledby="hero-title">
      <h1 id="hero-title">{{H1 com keyword primária}}</h1>
      <p>{{subtítulo com benefício e keyword secundária nos primeiros 100 palavras}}</p>
      <img src="/hero.webp" alt="{{descrição real da imagem}}" width="1200" height="675" fetchpriority="high">
      <a href="#cta" class="btn">{{CTA}}</a>
    </section>
    <section aria-labelledby="beneficios-title">
      <h2 id="beneficios-title">{{H2 com termo relacionado}}</h2>
    </section>
    <section aria-labelledby="faq-title">
      <h2 id="faq-title">Perguntas frequentes</h2>
      <!-- espelhar as perguntas do FAQPage abaixo -->
    </section>
  </main>
  <footer><!-- NAP, links, contato --></footer>
</body>
</html>
```

## 3. JSON-LD por tipo

Coloque no `<head>` ou fim do `<body>`. Um `<script>` por bloco; pode combinar via `@graph`.

### Organization + WebSite (base — quase toda página)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://{{dominio}}/#org",
      "name": "{{Marca}}",
      "url": "https://{{dominio}}/",
      "logo": "https://{{dominio}}/logo.png",
      "sameAs": ["https://instagram.com/{{perfil}}", "https://linkedin.com/company/{{perfil}}"]
    },
    {
      "@type": "WebSite",
      "@id": "https://{{dominio}}/#site",
      "url": "https://{{dominio}}/",
      "name": "{{Marca}}",
      "inLanguage": "pt-BR",
      "publisher": { "@id": "https://{{dominio}}/#org" }
    }
  ]
}
</script>
```

### LocalBusiness (negócio local BR — NAP igual ao Google Business)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "{{Nome exato do negócio}}",
  "image": "https://{{dominio}}/fachada.jpg",
  "url": "https://{{dominio}}/",
  "telephone": "+55{{DDD}}{{numero}}",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "{{Rua, número}}",
    "addressLocality": "{{Cidade}}",
    "addressRegion": "{{UF}}",
    "postalCode": "{{CEP}}",
    "addressCountry": "BR"
  },
  "areaServed": "{{Cidade/região atendida}}",
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00", "closes": "18:00"
  }]
}
</script>
```

### Service (serviço / assessoria)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "{{Nome do serviço}}",
  "provider": { "@type": "Organization", "name": "{{Marca}}" },
  "areaServed": { "@type": "Country", "name": "Brasil" },
  "description": "{{O que o serviço entrega}}"
}
</script>
```

### FAQPage (só perguntas que REALMENTE aparecem na página)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{{Pergunta long-tail 1}}",
      "acceptedAnswer": { "@type": "Answer", "text": "{{Resposta objetiva}}" }
    },
    {
      "@type": "Question",
      "name": "{{Pergunta long-tail 2}}",
      "acceptedAnswer": { "@type": "Answer", "text": "{{Resposta objetiva}}" }
    }
  ]
}
</script>
```

### BreadcrumbList (páginas internas)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://{{dominio}}/" },
    { "@type": "ListItem", "position": 2, "name": "{{Seção}}", "item": "https://{{dominio}}/{{caminho}}" }
  ]
}
</script>
```

## 4. robots.txt + sitemap (raiz do site)

`robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://{{dominio}}/sitemap.xml
```

`sitemap.xml` (mínimo):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://{{dominio}}/</loc>
    <lastmod>{{AAAA-MM-DD}}</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

## Regras ao usar estes templates
- **Nunca** insira `AggregateRating`/`Review` sem avaliações reais e visíveis na página.
- O conteúdo de `FAQPage` deve existir de fato no HTML visível (mesmo texto).
- Imagem OG e imagem do herói: sempre com dimensões corretas para evitar CLS e broken preview.
- Valide o JSON-LD em validator.schema.org e o rich result em search.google.com/test/rich-results antes de publicar.
