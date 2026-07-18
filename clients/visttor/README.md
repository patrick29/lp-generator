# Visttor — Landing Page

Landing page premium para o **Visttor**, um SaaS de vistoria veicular (vistoria pelo celular: fotos guiadas, dados, assinatura, modo offline e sincronização na nuvem).

Redesign próprio a partir do design importado de `claude.ai/design` (projeto "Landing page para SaaS"), reutilizando os tokens oficiais da marca.

## Stack

HTML + CSS + JS estáticos, sem build. Pronto para deploy direto (Vercel/Netlify/qualquer host estático).

```
src/
├── index.html       # Página completa
├── styles.css       # Design system (tokens da marca) + estilos da LP
├── app.js           # Animações e interações (reveal, contadores, FAQ, drawer, parallax)
├── vercel.json      # Headers de cache para deploy
└── assets/icon/
    └── logo-icon.png
```

## Marca

- **Cor primária:** royal blue `#1840A4` (do ícone do carro)
- **Tinta/títulos:** navy `#0F172A` + escala slate
- **Tipografia:** Plus Jakarta Sans (UI/display) + JetBrains Mono (placas/códigos)
- **Sucesso:** `#16A34A` · **Erro:** `#EF4444`

## Seções

Header (sticky + barra de progresso) · Hero com mockup do app · Strip de público · Stats com contadores · Problemas · Como funciona (3 passos) · **Offline-first** (diferencial) · Benefícios · **Planos (Grátis / PRO / Business)** · FAQ · CTA final · Footer.

## Animações

Todas usam apenas `transform`/`opacity` (sem reflow) e são desligadas em `prefers-reduced-motion`:

- Scroll reveal via `IntersectionObserver` (com fallback)
- Contadores animados (easeOutExpo)
- Parallax sutil do hero (apenas desktop)
- Tilt 3D do mockup ao mover o ponteiro
- Acordeão da FAQ, drawer mobile, barra de progresso de scroll

## Rodar localmente

```bash
cd src
python -m http.server 8000
# abra http://localhost:8000
```

## Deploy (Vercel)

Aponte o Root Directory para `clients/visttor-saas/src`. É um site estático — sem build command.
