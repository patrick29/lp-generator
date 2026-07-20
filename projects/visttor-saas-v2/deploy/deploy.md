# Deploy — Visttor LP v2

Site **estático**, sem build. Qualquer host de estáticos (Vercel/Netlify/etc.).

## Root directory
Aponte o *root/base directory* do host para:

```
projects/visttor-saas-v2/src
```

Sem build command. Publish/output directory = a própria pasta `src`.

## Antes de publicar (produção)
- **Vendorizar as libs:** hoje GSAP, ScrollTrigger e Lenis vêm por CDN (jsDelivr). Para
  produção, baixe os `.min.js` para `src/assets/vendor/` e troque os `<script src>` por
  caminhos locais (evita bloqueio de CDN e dependência externa).
- **Fontes:** `assets/tokens.css` importa Plus Jakarta Sans + JetBrains Mono do Google Fonts.
  Opcional: subir `.woff2` locais e trocar o `@import` por `@font-face`.
- Conferir o CTA: todos os botões apontam para `https://app.visttor.com.br/signup`.

## Estado atual
Somente local (verificado com `scripts/verify.js`). Deploy ainda não realizado.

> Atenção: ao mover/renomear o projeto, atualize o root directory no painel do host.
