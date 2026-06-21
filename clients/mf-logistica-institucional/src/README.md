# MF Logística — Landing Page institucional

LP de conversão (objetivo: solicitar cotação de frete) para a MF Logística — transporte rodoviário de carga seca no eixo SP ↔ Pará.

## Stack

HTML + CSS + JavaScript **vanilla**, sem build e sem dependências. Cores de marca via CSS custom properties. Escolha justificada na `brief/strategy.md`: página única, form de cotação, microinterações leves — não há razão para framework/bundler.

```
src/
  index.html      # marcação semântica + SEO (meta, OG, JSON-LD) + SVG inline (mapa, ícones, logo)
  styles.css      # design system + layout mobile-first (breakpoints 600 / 880px)
  script.js       # form de cotação, reveal on scroll, header sticky
  assets/images/  # hero + galeria da frota (WebP otimizado)
```

## Dev

Qualquer servidor estático. Por exemplo:

```bash
cd src
python -m http.server 8080
# abra http://localhost:8080
```

Abrir `index.html` direto pelo `file://` também funciona (é HTML estático puro).

## Build

Não há build. Os arquivos em `src/` são o artefato final.

## Deploy sugerido

Vercel / Netlify / Cloudflare Pages, apontando a raiz para `src/` (mesmo fluxo do cliente `nova-digital-institucional`). Domínio sugerido: o atual `mfnlogistica.com.br` (já usado no `canonical` e nas tags OG).

## Form de cotação

- Por padrão, o form **abre o WhatsApp** (`+55 91 99211-1003`) com a cotação preenchida — funciona sem backend.
- Para enviar a um CRM / Google Apps Script, defina `FORM_ENDPOINT` no topo do `script.js`. Se o POST falhar, o form degrada para o WhatsApp automaticamente (o lead não se perde).

## Pontos a substituir antes de produção

- **Fotos:** hero e galeria usam fotos stock ilustrativas (Wikimedia Commons, licença livre). Trocar pelas **fotos reais da frota da MF** (`assets/images/hero-frota.webp`, `frota-1..3.webp`). Verificar atribuição CC-BY se mantiver as stock.
- **Logos de clientes:** a seção "Segmentos" tem 4 slots placeholder (`.logos__slot`). Substituir pelos logos reais quando disponíveis.
- **Logo da MF:** atualmente um wordmark ("MF" + "Logística") em SVG/CSS. Trocar pelo logotipo oficial se houver versão vetorial.
- **Dados:** telefones, e-mails e números (14 anos, +16 mil entregas, 48+ municípios) vieram do site oficial. Conferir se estão atualizados.
