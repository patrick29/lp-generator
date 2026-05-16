---
task: "Build Next.js App Router"
order: 3
input: |
  - strategy: clients/{slug}/brief/strategy.md (stack == Next.js App Router)
  - copy: clients/{slug}/content/copy.md
  - visual_system: clients/{slug}/design/design-system.md
  - images_folder: clients/{slug}/assets/images/
output: |
  - code_folder: clients/{slug}/src/ (Next.js App Router + Tailwind + shadcn/ui opcional)
---

# Build Next.js App Router

Implementa LP com Next.js App Router + Tailwind, usando React Server Components por padrão. Client components apenas onde há state/event. Server actions para forms. shadcn/ui se brief pedir componentes ricos.

## Process

1. **Scaffold app router.** `app/layout.tsx` (root layout com fontes, metadata default), `app/page.tsx` (home), `components/` (Hero, Features, Pricing, Faq, CtaFinal). Tailwind instalado como dep (não CDN).
2. **Metadata API.** Exportar `metadata` em `app/page.tsx` com title, description, openGraph, twitter, alternates.canonical. Em `app/layout.tsx`, default templates.
3. **Server actions (se houver form).** `app/actions.ts` com `"use server"`. Form usa `<form action={action}>` ou `useFormState` no client. Submit para CRM/Sheets/email.
4. **Imagens.** `next/image` com `priority` no hero e `loading="lazy"` no resto. Width/height obrigatórios.
5. **shadcn/ui (opcional).** Se brief pedir componentes ricos (Dialog, Accordion, Tabs), instalar via `npx shadcn-ui@latest init`. Componentes ficam em `components/ui/`.
6. **Performance.** RSC por padrão. `"use client"` somente em componentes com state/event/listener. Fonts via `next/font` (otimização automática).
7. **README.** `pnpm install`, `pnpm dev`, `pnpm build`, deploy sugerido (Vercel default).

## Output Format

Estrutura:
```
output/code/
├── next.config.mjs
├── package.json
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── actions.ts (se houver form)
├── components/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── Faq.tsx
│   ├── CtaFinal.tsx
│   └── ui/ (shadcn, se aplicável)
├── public/images/ (assets da Diana)
└── README.md
```

## Output Example

> Excerto do `app/page.tsx` + `app/layout.tsx` — referência de qualidade.

```tsx
// app/page.tsx
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import CtaFinal from "@/components/CtaFinal";

export const metadata = {
  title: "ProposalKit — Propostas em 15 minutos",
  description: "Crie propostas comerciais profissionais em 15 min, não 4 horas. Trial grátis 14 dias, sem cartão.",
  openGraph: {
    title: "ProposalKit",
    description: "Sua proposta comercial não é lenta. Seu Word é.",
    images: ["/images/og-default.png"],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://proposalkit.com" },
};

export default function Home() {
  return (
    <main id="main" className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <CtaFinal />
    </main>
  );
}
```

```tsx
// app/layout.tsx
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${space.variable}`}>
      <body className="antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:p-3 focus:bg-lime-500">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
```

## Quality Criteria

- [ ] Tailwind como dep (não CDN).
- [ ] RSC por padrão; `"use client"` só onde há state/event.
- [ ] `next/image` com width/height/priority/lazy onde apropriado.
- [ ] Metadata API com title, description, OG, Twitter, canonical.
- [ ] README com pnpm install / dev / build + deploy.

## Veto Conditions

Reject and redo se QUALQUER for verdadeiro:
1. Tailwind via CDN.
2. `"use client"` aplicado a componente sem state ou event listener.
