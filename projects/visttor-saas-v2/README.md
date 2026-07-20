# Visttor — Landing Page v2 ("Sinal Zero", scroll-film)

LP cinematográfica de scroll para o **Visttor** (SaaS de vistoria veicular pelo celular:
fotos guiadas, dados, assinatura, offline e sincronização na nuvem). A página inteira é
**um plano contínuo** que roda conforme o visitante rola: do campo sem sinal, pela captura
guiada e pelo wizard, até a sincronização na nuvem. Depois disso, dissolve no conteúdo do
produto e no CTA de **teste grátis**.

Construída com a skill `scroll-film-studio` (Lane A — pure-code GSAP/Lenis, zero custo).
Reutiliza os tokens oficiais da marca em `clients/visttor/brand/`.

## Stack

HTML + CSS + JS estáticos, sem build. GSAP + ScrollTrigger + Lenis via CDN (jsDelivr).

```
src/
├── index.html            # Página completa (filme + conteúdo), self-contained
└── assets/
    ├── tokens.css        # Tokens oficiais da marca (fonte da verdade em clients/visttor/brand/)
    ├── icon/logo-icon.png
    └── photos/           # Fotos reais de vistoria (frente, lateral, painel, traseira)
```

## Conceito

**"Sinal Zero":** no campo, com o indicador de sinal zerado, a prova ainda é capturada. As
fotos, os dados e a assinatura ficam salvos no aparelho e sobem para a nuvem quando um traço
de sinal volta. O antagonista não é a "internet ruim", é a **prova que se perderia**.

- **Filme (tema escuro):** navy quase-preto `#070B16`, azul royal `#1840A4` como única cor de
  energia, UI branca/slate. Capítulos: `01 CAMPO · 02 CAPTURA · 03 REGISTRO · 04 ASSINATURA ·
  05 SINCRONIA`.
- **Conteúdo (tema claro):** volta ao visual corporativo diurno da marca (slate-50). O corte
  escuro→claro é o "payoff" da sincronização.
- **Tipografia:** Plus Jakarta Sans (display) + JetBrains Mono (status, códigos, leitura de
  capítulo).

## Animações

GSAP + ScrollTrigger (palco pinado, timeline única com `scrub`) + Lenis (scroll suave). Tudo
em `transform`/`opacity`. Ordem de criação respeita a lei do pin (pin → reveals → ambient).

- **Degradação graciosa:** se o Lenis não carregar, cai para o scroll nativo (o ScrollTrigger
  continua). `prefers-reduced-motion` mostra um estado estático legível (device sincronizado +
  conteúdo revelado), sem pin/scrub.
- **Contrato de verificação:** `?jump=<scrollY>` posiciona a página já rolada e assentada;
  `window.__ready = true` dispara quando está pronta. Verificado com `scripts/verify.js`
  (puppeteer-core + Chrome do sistema): screenshots por beat + teste de jank (p95 ~21ms).

## Rodar localmente

```bash
cd src
python -m http.server 8123
# abra http://localhost:8123
```

## Deploy

Site estático, sem build. Ver [deploy/deploy.md](deploy/deploy.md). **Para produção,
vendorizar GSAP/ScrollTrigger/Lenis localmente** (hoje via CDN). Ao publicar, aponte o
root/base directory do host para `projects/visttor-saas-v2/src`.
