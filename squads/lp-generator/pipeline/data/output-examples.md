# Output Examples — LP Generator

> Exemplos completos de LPs geradas pelo squad. Use como referência de qualidade, não como template rígido. Dois cenários cobrindo HTML+Tailwind single-file e Next.js App Router.

---

## Exemplo 1 — Curso de inglês para devs (HTML + Tailwind single-file, tom amigo-mentor)

### Strategy (síntese)

- **Diagnóstico:** Solution Aware, Sophistication 4 (belief fatigue — exige nicho específico).
- **Big Idea:** "Cursos genéricos te ensinam inglês de viagem. Você precisa de inglês de standup."
- **Driver dominante:** status (parecer competente no time global).
- **Stack:** HTML + Tailwind CDN single-file (estática, 1 página, sem form complexo).
- **Framework:** PAS (Problem → Agitate → Solution — dor diária aguda).
- **Sequência de seções:** Hero → Pain (5 situações dolorosas) → Mecanismo (método anti-genérico) → Conteúdo do curso → Depoimentos (3 devs nomeados) → Garantia → CTA único.

### Copy do hero (selecionado entre 3 hooks)

```
HOOK ESCOLHIDO (Pattern interrupt):
Você sabe inglês. Em standup, ele te abandona.

SUBHERO:
Curso de 12 semanas com o inglês real de standup, code review e PR description.

CTA PRIMÁRIO: Quero a primeira aula grátis →
NEUTRALIZADOR: Sem cartão. Primeira aula liberada na hora.
```

### Copy da seção Pain (excerto, PAS)

```
H2: Você sabe inglês. Em standup, ele te abandona.

Você lê doc em inglês todo dia.
Mas no standup global, trava na hora de explicar "porque o deploy falhou".
Cinco segundos de silêncio. O PM repete a pergunta. Você responde curto demais.
A reunião segue. Você fica.

Não é falta de inglês. É falta de inglês DE STANDUP.

Gramática de curso de viagem não te ensina:
- Como interromper educadamente quando a conversa acelera
- O verbo certo para "subir branch" sem soar tradução literal
- Como pedir contexto sem parecer perdido
- A entonação que separa "tenho dúvida" de "estou perdido"

Tudo isso é aprendível. Em 12 semanas.
```

### Visual system (excerto)

```
DESIGN SYSTEM — Inglês de Standup
Vibe: amigo-mentor, terminal-friendly mas humano

Colors:
  Primary:    #18181B (zinc-900)
  Secondary:  #A1A1AA (zinc-400)
  Accent:     #84CC16 (lime-500 — CTAs, success)
  Background: #FAFAF9 (stone-50)
  Text:       #18181B

Typography:
  Heading: 'Space Grotesk', 600/700
  Mono:    'JetBrains Mono', 500
  Body:    'Inter', 400/500
  Scale (desktop): hero 64, h2 40, h3 28, body 18, caption 14
  Scale (mobile):  hero 40, h2 28, h3 22, body 16, caption 13

Spacing base: 8px
Radius: button 8, card 12

Images plan:
  Hero: image-ai-generator — "cena split: dev em standup virtual, balão de fala '...uh...the deploy', flat illustration, paleta zinc + lime"
  Pain section: 4 SVG inline (Heroicons: clock, mic-off, chat, exclamation)
  Testimonials: image-fetcher Unsplash para 3 retratos diversos de devs
```

### Código entregue (excerto — index.html)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Inglês de Standup — Pare de travar em reunião global</title>
  <meta name="description" content="Curso de 12 semanas que ensina o inglês real que devs usam em standup, code review e PR description.">
  <meta property="og:title" content="Inglês de Standup">
  <meta property="og:description" content="Você sabe inglês. Em standup, ele te abandona. Conserte isso em 12 semanas.">
  <meta property="og:image" content="/images/hero-og.png">
  <link rel="canonical" href="https://inglesdestandup.com.br/">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
  <style>body{font-family:'Inter',sans-serif}h1,h2,h3{font-family:'Space Grotesk',sans-serif}</style>
</head>
<body class="bg-stone-50 text-zinc-900 antialiased">
  <a href="#main" class="sr-only focus:not-sr-only focus:p-3 focus:bg-lime-500">Pular para o conteúdo</a>
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

### Veredito da Rita

```
REVIEW VERDICT: APPROVE
| Eixo      | Score | Resumo |
|-----------|-------|--------|
| Copy      | 9/10  | Hook passa scroll-stop, PAS bem executado, proof concreto |
| Visual    | 8/10  | Sistema documentado, contraste OK, ilustração custom |
| Código    | 9/10  | Lighthouse 96/98/100/100, LCP 1.4s, CLS 0.03 |
| SEO+Meta  | 8/10  | Title/meta/OG presentes; falta JSON-LD Course |
| MÉDIA     | 8.5/10|   |
```

---

## Exemplo 2 — SaaS B2B (Next.js App Router, tom autoridade-prática)

### Strategy (síntese)

- **Diagnóstico:** Problem Aware, Sophistication 3 (mercado competido — exige mecanismo).
- **Big Idea:** "Não é seu time que é lento, é o seu template Word."
- **Driver dominante:** liberdade (escapar do trabalho repetitivo).
- **Stack:** Next.js App Router (form de trial precisa server action + analytics).
- **Framework:** 4Ps (Promise → Picture → Proof → Push — bottom-funnel).
- **Sequência:** Hero (promessa+CTA) → Pain Stack → Demo interativa → Comparativo (nós vs Word) → Social proof (logos + 2 cases com %) → Pricing → FAQ → CTA final.

### Hooks gerados (Carla apresenta os 3 ao usuário)

```
HOOK A (Contrarian):
"Sua proposta comercial não é lenta. Seu Word é."
Rationale: Inverte a culpa do operador para a ferramenta — alivia o leitor (Driver: liberdade) e cria curiosidade pelo mecanismo.

HOOK B (Dado):
"4 horas. É o que sua agência gasta por proposta. Concorrentes que migraram fecham em 15 min."
Rationale: Comparativo numérico cria ansiedade competitiva sem fazer claim do produto ainda.

HOOK C (Pergunta):
"E se cada proposta sua saísse com pricing, e-sign e case studies em 15 minutos?"
Rationale: Future-pacing concreto; abre loop com elementos sensoriais.

[Usuário escolhe Hook A]
```

### Hero finalizado

```
H1: Sua proposta comercial não é lenta. Seu Word é.
Subhero: Crie propostas com branding, pricing, timeline e e-sign em 15 minutos.

CTA PRIMÁRIO: Comece grátis por 14 dias →
NEUTRALIZADOR: Sem cartão. Sem onboarding. Sua primeira proposta sai hoje.
```

### Código entregue (excerto — app/page.tsx)

```tsx
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
    images: ["/og/og-default.png"],
  },
  alternates: { canonical: "https://proposalkit.com" },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <CtaFinal />
    </main>
  );
}
```

### Visual system

```
Colors:
  Primary:    #0F172A (slate-900)
  Secondary:  #38BDF8 (sky-400)
  Accent:     #F97316 (orange-500 — CTAs)
  Background: #FFFFFF
  Text:       #0F172A / #F8FAFC

Typography:
  Heading: 'Inter', 700/800
  Body:    'Inter', 400/500
  Scale (desktop): hero 64, h2 40, h3 28, body 18, caption 14

Images plan:
  Hero: image-ai-generator — "dashboard mockup de proposta comercial em laptop, deep navy + orange accent, ângulo 3/4"
  Logos: image-fetcher — 8 logos de clientes citados no briefing
  Case study: image-ai-generator — "retrato profissional de fundadora de agência sorrindo, estúdio neutro"
```

### Veredito da Rita (caso real de REJECT)

```
REVIEW VERDICT: REJECT
| Eixo      | Score | Resumo |
|-----------|-------|--------|
| Copy      | 6/10  | CTA primário "Saiba mais" fora da Intensity Ladder |
| Visual    | 7/10  | Sistema OK |
| Código    | 3/10  | LCP 4.1s (hero 1.8MB), CLS 0.24 |
| SEO+Meta  | 5/10  | Meta description ausente, alt vazio em 3 imagens |
| MÉDIA     | 5.25/10 |   |

HARD REJECTION TRIGGER: Eixo Código 3/10.

Required change [→ step 6 davi-dev]: Otimizar hero image. Atual 1.8MB PNG sem width/height. Converter para WebP (~200KB), adicionar width="1280" height="720", marcar priority no Next/Image. Meta LCP < 2.5s.
Required change [→ step 4 carla-copy]: CTA "Saiba mais" é nível 1 da Intensity Ladder. Reescrever para nível 4 ("Comece grátis por 14 dias →").
```
