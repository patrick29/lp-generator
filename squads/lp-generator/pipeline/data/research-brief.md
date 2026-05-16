# Research Brief — LP Generator

> Compilação da pesquisa da Fase B do design. Carregado por todos os agentes do squad como conhecimento de domínio fundacional.

## 1. Frameworks de conversão para Landing Page

Quatro frameworks formam o vocabulário tático que Bruno (estratégia) e Carla (copy) usam para arquitetar a sequência de seções:

- **StoryBrand** — Cliente é o herói, a marca é o guia. Sequência: personagem → problema → guia → plano → CTA → sucesso → fracasso evitado. Excelente para LPs de marca, curso, coaching, infoproduto. Combina bem com tom amigo-mentor.
- **AIDA** — Atenção → Interesse → Desejo → Ação. Padrão clássico, melhor para top-funnel e produtos novos cujo público ainda é unaware ou problem-aware.
- **PAS** — Problem → Agitate → Solution. Mais forte emocionalmente. Ideal para dores agudas e diárias do público (ex.: dev que trava em standup, agência que perde proposta para a concorrência).
- **4Ps** — Promise → Picture → Proof → Push. Melhor para conversão direta (trial, compra, agendamento de demo) com público solution/product-aware.

**Hero anatomy 2026:** headline benefit-driven, sub-headline com mecanismo único, 1 CTA primário, 1 social proof imediato, visual que comunica o produto (não apenas decoração).

## 2. Diagnóstico de audiência — Eugene Schwartz

Antes de escolher framework, Bruno classifica o público em duas dimensões:

**Awareness levels:**
1. Unaware — não sabe que tem o problema.
2. Problem Aware — sabe da dor, não conhece soluções.
3. Solution Aware — conhece soluções da categoria, não conhece seu produto.
4. Product Aware — conhece seu produto, não decidiu comprar.
5. Most Aware — pronto para comprar, falta gatilho.

**Market sophistication (stages 1-5):** mede quantas vezes o público já viu promessas da categoria. Stage 1-2 aceita promessa direta; stage 3-4 exige mecanismo único; stage 5 exige nova identidade/posicionamento.

Awareness + sophistication determinam: tom, profundidade do mecanismo, intensidade da promessa, tipo de social proof necessário.

## 3. Exemplos de LPs que convertem (referência de mercado)

- **Stripe** — gradiente animado de marca, snippets de código que mostram complexidade técnica como atrativo, foco em devs sofisticados.
- **Linear** — especificidade radical: copy direta para devs frustrados com Jira. Filtro de auto-seleção: "se isto te incomoda, leia mais; senão, saia".
- **Notion** — simplicidade radical: uma frase só no hero, demo embedada ao vivo, tom amigo-mentor.
- **Vercel** — identidade visual para devs sofisticados, animações sutis, hover-to-preview em snippets.
- **Basecamp** — opinionated copy, manifesto-style, tom anti-corporate.

**Padrão comum:** value prop forte + 1 CTA primário + social proof imediato + zero ruído acima da dobra.

## 4. Anti-patterns (erros que matam conversão)

- Múltiplos CTAs concorrentes no hero (decision fatigue).
- Stock photos genéricos (corporate handshake, equipe sorrindo): destrói credibilidade instantaneamente.
- Hero com 3 promessas em vez de 1: drilling foco.
- Imagens grandes não otimizadas: LCP > 3s mata conversão (2s extras = 50% de queda).
- "Click here" / "Saiba mais" como CTA: zero contexto SEO, intenção vaga.
- Social proof sem especificidade: "vários clientes felizes" perde para "8 das Fortune 50".
- Mismatch entre o anúncio que trouxe o tráfego e o título da LP (message match quebrado).
- Stack pesada (Next.js) sem motivo, para LP estática 1 página: piora perf, sem ganho.

## 5. Quality criteria — benchmarks técnicos

- **Above-the-fold:** CTA primário visível em 375px mobile sem scroll.
- **Tap targets:** >= 48px.
- **Body text:** >= 16px no mobile.
- **LCP:** < 2.5s.
- **CLS:** < 0.1.
- **Lighthouse mobile:** Performance > 90, Accessibility > 95, Best Practices > 95, SEO 100.
- **Atenção do leitor:** 80% dos visitantes leem só headline + subheadline antes de decidir continuar; 57% nunca scrollam abaixo da primeira viewport no desktop, 64% no mobile.

## 6. Code patterns modernos (2025-2026)

- **HTML + Tailwind CDN single-file** — ideal para LP simples, 1 página, sem form complexo. Performance excelente quando bem implementado. Default do squad.
- **Astro** — melhor Lighthouse score absoluto da categoria, zero JS por padrão, ótimo para multi-página + blog + MDX content.
- **Next.js App Router** — padrão para LPs com server actions, A/B testing, conteúdo dinâmico, auth. React Server Components + Tailwind.
- **shadcn/ui** — padrão de fato para componentes em Next.js LP. Copy-paste, sem dependência pesada.

## 7. Vocabulário de domínio (sinaliza profissionalismo)

`above the fold`, `awareness level`, `Big Idea`, `Core Web Vitals`, `driver psicológico`, `framework`, `Intensity Ladder`, `LCP/CLS/INP`, `mobile-first`, `pattern interrupt`, `proof number`, `Server Component`, `social proof`, `stack`, `tap target`, `WCAG AA`.
