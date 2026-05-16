# Brief

**Origem:** Design Anthropic (Claude Design handoff bundle)
**URL:** https://api.anthropic.com/v1/design/h/eIImgwHGgPcbk5I4KcrJsA?open_file=site%2Findex.html
**Projeto no bundle:** `nova-digital-p-gina-institucional`
**Marca:** Nova Digital — agência de marketing estratégico e criativo

## Solicitação do Patrick

> Fetch this design file, read its readme, and implement the relevant aspects of the design.
> Implement: site/index.html

## Decisões do checkpoint

- **Abordagem:** Copiar protótipo as-is (HTML + JSX via Babel-standalone in-browser, React UMD)
- **Escopo:** Incluir `carreiras.html` (página secundária linkada pelo nav)
- **Destino:** `c:/development/lp-generator/clients/nova-digital/src/` (pasta do cliente conforme nova convenção do squad — migrado de `site/` raiz em 2026-05-14)

## Contexto do bundle

O design é um protótipo gerado em `claude.ai/design`. Conforme o README oficial do bundle:

- Os arquivos HTML/CSS/JS são protótipos, não código de produção
- O coding agent deve "recriar pixel-perfectly na tecnologia que fizer sentido"
- Para este projeto (LP Generator pessoal), copiar o pacote completo preserva fidelidade total e mantém todas as ferramentas de iteração in-browser (tweaks-panel, image-slot)

## Estrutura entregue em `clients/nova-digital/src/`

**index.html (página principal)** — 13 seções:
1. Nav sticky com burger mobile, telefone visível e CTA
2. Hero com 3 variações de layout, foto + cards de métrica + selo de prêmio
3. Marquee de clientes (scroll infinito)
4. Manifesto (banda roxa full-bleed com wordmark de fundo)
5. Serviços — 4 frentes com play-mark hover
6. Método — 5 fases em tabs interativas
7. Cases — destaque + 2 secundários
8. Stats — 6 números com contador animado e glow radial
9. Time — 8 membros com hover rich
10. Depoimentos — carrossel com dots
11. FAQ — accordion numerado
12. CTA — formulário roxo com chips de verba
13. Footer — banda CTA + endereços SP/RJ + 4 colunas + wordmark gigante

**carreiras.html (página secundária)** — Hero com breadcrumb, filtros por área/local, 8 vagas em accordion, banda de cultura, CTA spontaneous, footer reusado.

**Stack:**
- React 18.3.1 + ReactDOM via UMD
- @babel/standalone 7.29 para compilar JSX no browser
- CSS plain (colors_and_type, site, extras, animations, careers)
- IntersectionObserver-fallback via scroll listener para reveal animations
- Counter animation nos stats
- Custom element `<image-slot>` para drag-replace de imagens (dev-time)
- Tweaks panel para alternar layout do hero, prova social e cores (dev-time)

## Como rodar

Abrir `index.html` em um servidor estático local (não funciona via `file://` por causa de CORS para os scripts `text/babel`):

```
cd c:/development/lp-generator/clients/nova-digital/src
npx serve .
```

Depois abrir http://localhost:3000 (ou a porta que o serve indicar).

## Considerações para produção

O protótipo usa Babel-standalone em runtime — adequado para iteração de design, **não ideal para produção** pelo overhead de compilação no browser e ausência de cache de bundle. Para promover a produção:

1. **Pré-compilar JSX** — usar esbuild/Vite para gerar `bundle.js` estático, remover Babel e os scripts `text/babel`
2. **Remover tweaks-panel** — é uma ferramenta de design-time
3. **Remover image-slot.js** — substituir os elementos por `<img>` reais
4. **Adicionar meta tags SEO** — description, OG, Twitter cards
5. **Otimizar assets** — converter PNGs para WebP/AVIF, lazy-load imagens fora do hero

Esses passos podem ser executados em uma próxima run do squad.
