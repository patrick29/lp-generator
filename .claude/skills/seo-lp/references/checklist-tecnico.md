# Checklist técnico de SEO — auditoria completa

Marque cada item. Cada achado vira uma linha no relatório com severidade e impacto.

## 1. `<head>` e metadados
- [ ] `<html lang="pt-BR">` presente.
- [ ] `<meta charset="utf-8">` como primeiro filho do `<head>`.
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- [ ] `<title>` único, ≤60 caracteres, keyword primária no início. 🔴 se ausente/duplicado.
- [ ] `<meta name="description">` ≤155 caracteres, com keyword + benefício + CTA. 🟡 se ausente.
- [ ] `<link rel="canonical">` apontando para a URL preferida (evita conteúdo duplicado). 🔴 se ausente em site com parâmetros/variações.
- [ ] `<meta name="robots">` correto — cuidado com `noindex`/`nofollow` acidental em página que deveria ranquear. 🔴.
- [ ] Favicon e `theme-color` definidos.

## 2. Open Graph / redes sociais
- [ ] `og:title`, `og:description`, `og:image` (≥1200×630, <8MB), `og:url`, `og:type`, `og:locale=pt_BR`.
- [ ] `twitter:card` (`summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`.
- [ ] Imagem OG existe e carrega (testar URL absoluta, não relativa). 🟡.

## 3. Dados estruturados (JSON-LD)
- [ ] JSON-LD presente e válido (validar em validator.schema.org). 🟡.
- [ ] Tipo correto para o negócio: Organization/WebSite (base), + LocalBusiness / Service / Product / FAQPage / BreadcrumbList conforme o caso.
- [ ] **Sem schema falso** — não marcar `AggregateRating`/`Review` sem avaliações reais e visíveis na página. 🔴 (penalização).
- [ ] NAP no schema idêntico ao Google Business Profile (negócio local).

## 4. Estrutura semântica e headings
- [ ] Exatamente um `<h1>`, contendo a keyword primária. 🔴 se zero ou múltiplos.
- [ ] Hierarquia H2/H3 lógica, sem pular níveis, refletindo subtemas e perguntas de busca.
- [ ] Marcação semântica: `header`, `nav`, `main`, `section`, `article`, `footer` em vez de `div` genérica.
- [ ] Landmarks e ordem de leitura fazem sentido (também ajuda acessibilidade).

## 5. Conteúdo on-page
- [ ] Keyword primária nos primeiros ~100 palavras.
- [ ] Densidade natural (sem stuffing); sinônimos e termos relacionados (entidades).
- [ ] Conteúdo responde a intenção do termo-alvo; profundidade suficiente vs. concorrentes que ranqueiam.
- [ ] CTAs claros; bloco de FAQ para long-tail e featured snippets.

## 6. Imagens e mídia
- [ ] `alt` descritivo em toda imagem informativa (`alt=""` só em decorativa). 🟡.
- [ ] `width`/`height` (ou `aspect-ratio`) definidos para evitar CLS. 🔴 se causa layout shift.
- [ ] `loading="lazy"` em imagens fora da dobra; **eager** na imagem de LCP (herói).
- [ ] Formatos modernos (WebP/AVIF) e compressão; imagem do herói dimensionada, não gigante.

## 7. Performance / Core Web Vitals (auditoria real via Lighthouse)
- [ ] **LCP ≤ 2,5s** — herói otimizado, sem render-block, `preload` do recurso de LCP. 🔴 se >4s.
- [ ] **INP ≤ 200ms** — JS não bloqueia a thread; evitar handlers pesados.
- [ ] **CLS ≤ 0,1** — dimensões reservadas para imagem/fonte/embed. 🔴 se >0,25.
- [ ] CSS/JS crítico inline ou minificado; adiar não-crítico (`defer`/`async`).
- [ ] Fontes com `font-display: swap` e `preconnect` ao provedor.

## 8. Indexação e crawl
- [ ] `robots.txt` existe e não bloqueia recursos essenciais nem a própria página.
- [ ] `sitemap.xml` presente, listado no robots.txt e submetido no Search Console.
- [ ] URLs limpas, curtas, com keyword (sem parâmetros desnecessários).
- [ ] HTTPS ativo; sem mixed content; redirect 301 de http→https e www↔apex consistente.
- [ ] Sem cadeias de redirect nem 404 em links internos.

## 9. Links
- [ ] Links internos com âncora descritiva ligando páginas relacionadas.
- [ ] Links externos relevantes; `rel="nofollow"`/`sponsored` onde apropriado.
- [ ] Sem links quebrados.

## 10. Internacional / regional (se aplicável)
- [ ] `hreflang` correto se há versões por idioma/região.
- [ ] Sinais de localização (endereço, telefone BR, moeda R$) para negócio local.

## Severidade — guia rápido
- 🔴 **Crítico:** bloqueia indexação, quebra CWV, ou schema penalizável. Resolver primeiro.
- 🟡 **Importante:** afeta CTR/relevância/experiência mas não bloqueia. Resolver na sequência.
- 🟢 **Refino:** ganho marginal ou boa prática. Fazer quando os demais estiverem ok.
