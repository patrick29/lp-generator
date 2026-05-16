# Domain Framework — Produção de LP de alta conversão

> Metodologia operacional unificada para o squad LP Generator. Síntese end-to-end dos frameworks operacionais dos 5 agentes (Bruno, Carla, Diana, Davi, Rita) em uma única pipeline coerente.

## Visão geral — Briefing → Estratégia → Copy → Visual → Código → Revisão

A produção de uma LP segue 6 etapas. Cada etapa tem inputs claros, decisões a tomar e um entregável que alimenta a próxima.

```
Briefing → [Bruno] Estratégia → [Carla] Copy → [Diana] Visual → [Davi] Código → [Rita] Revisão
                       ↓                                                              ↓
                  strategy.md → copy.md → visual-system.md → code/ → review.md (APPROVE/REJECT)
```

## Etapa 1 — Briefing (input do usuário, captado pelo checkpoint)

O usuário fornece, em formato livre ou guiado pelo checkpoint:

- Produto/oferta (o que está sendo vendido)
- Público-alvo + awareness presumido
- Tom desejado (ou referências que sinalizam tom)
- URLs de referência (LPs concorrentes ou inspirações)
- Seções obrigatórias (ex.: "tem que ter FAQ", "preciso de pricing")
- Restrições especiais (ex.: stack X obrigatória, prazo, perf budget)

## Etapa 2 — Estratégia (Bruno)

1. **Carregar briefing.** Identificar gaps. Se algum campo crítico estiver vazio, listar perguntas ANTES de prosseguir.
2. **Analisar referências.** Para cada URL no briefing, usar WebFetch e extrair: estrutura de seções, tom dominante, paleta visual aparente, tipo de social proof, intensidade do CTA.
3. **Diagnosticar audiência (Schwartz).** Awareness level (Unaware → Most Aware) + market sophistication (stage 1-5).
4. **Definir Big Idea.** Responder por escrito: (a) inimigo/crença atacada, (b) mecanismo único, (c) promessa específica, (d) driver psicológico dominante (medo de perda / status / pertencimento / liberdade / segurança / conquista / controle).
5. **Decidir stack.** Aplicar matriz: HTML+Tailwind single-file (default), Astro (multi-página + blog), Next.js App Router (server actions, auth, A/B).
6. **Arquitetar seções.** Escolher framework (StoryBrand/AIDA/PAS/4Ps) com base em awareness + sophistication. Listar cada seção com objetivo de funil + tipo de social proof + intensidade do CTA. Regra: 1 CTA dominante.
7. **Entregar strategy.md.** Documento completo com diagnóstico, Big Idea, driver, stack + motivo, framework + motivo, arquitetura de seções, especificações para Carla, Diana e Davi.

## Etapa 3 — Copy (Carla)

1. **Ler strategy.md.** Absorver awareness, sophistication, Big Idea, driver, framework, arquitetura.
2. **Confirmar tom.** Se brief/strategy não definir tom concreto, perguntar com 3 opções referenciadas (ex.: "autoridade-prática como Linear / amigo-mentor como Basecamp / técnico-direto como Stripe").
3. **Gerar 3 hooks.** A/B/C com drivers diferentes E estruturas diferentes (provocação / dado / contrarian / pergunta / promessa / pattern-interrupt). Cada hook acompanha 1 frase de racional. Aguardar seleção ANTES do corpo.
4. **Escrever seções no framework.** Hook confirmado guia o resto. Aplicar regras de rhythm: uma ideia por parágrafo, máximo 3 linhas no mobile, contrast blocks.
5. **Injetar proof + neutralizador.** Cada promessa significativa com número específico ou social proof. Antes de cada CTA primário, neutralizar a objeção dominante em 1-2 linhas.
6. **Escrever CTA em escada (Intensity Ladder).** CTA primário no nível certo do funil; secundários menores.
7. **Escrever meta SEO.** Title <=60 chars com keyword primária nos primeiros 40; meta description 150-160 chars com promise+CTA; H1 espelha hero; alt descritivo para cada imagem.
8. **Stress test.** Skeptic test, anti-commodity test, scroll-stop test no hero, redução 15-25% do draft inicial.

## Etapa 4 — Visual (Diana)

1. **Ler strategy + copy.** Tom, público, Big Idea, seções a visualizar. Identidade visual AMPLIFICA a Big Idea.
2. **Definir design system.** Paleta (max 5), tipografia (família via Google Fonts + escala desktop/mobile), spacing base, radius, sombra. Body min 16px, tap targets min 48px.
3. **Confirmar direção.** Se brief não definiu paleta/mood, apresentar 2-3 direções concretas referenciadas (ex.: Linear-like, Stripe-like, Notion-like). Aguardar escolha.
4. **Escolher estratégia de imagens por seção.**
   - Hero/product shot: `image-ai-generator`.
   - Logos/social proof: `image-fetcher` com URLs reais.
   - Foto humana: `image-fetcher` (Unsplash) ou `image-ai-generator` se stock genérica não serve.
   - Ícones de features: SVG inline (Heroicons/Tabler) — Davi insere.
5. **Gerar assets.** Executar skill com prompt específico. Verificar contraste antes de aprovar imagem para overlay de texto.
6. **WCAG AA check.** Todo par cor texto/fundo passa 4.5:1. Texto sobre imagem só com overlay sólido 60%+, gradient ou backdrop-blur.
7. **Entregar pacote.** visual-system.md + images/ folder + (opcional) template-reference.html para Davi seguir.

## Etapa 5 — Código (Davi)

1. **Carregar inputs.** strategy.md (stack), copy.md (textos finais), visual-system.md (paleta, tipo, spacing), images/ folder.
2. **Setup da stack.**
   - HTML+Tailwind: 1 arquivo `index.html` com Tailwind via CDN + Google Fonts @import.
   - Astro: scaffold padrão (`src/pages`, `src/layouts`, `src/components`), Tailwind integrado.
   - Next.js: app router (`app/page.tsx`, `app/layout.tsx`), Tailwind, server actions se brief pedir.
3. **Construir do hero para baixo.** Seção por seção, na ordem do strategy.md.
4. **Mobile-first.** CSS mobile (390px) primeiro, escalar com breakpoints sm/md/lg/xl. CTA visível above-the-fold em 375px. Tap targets >= 48px. Body >= 16px.
5. **Performance budget.** LCP < 2.5s (hero com width/height, WebP/AVIF, lazy abaixo do fold). CLS < 0.1 (dimensões fixas, font-display: swap). JS mínimo.
6. **Semântica + a11y.** `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`. H1 único na hero. `alt` em toda `<img>`. `aria-label` em ícone-only buttons. Skip-to-content link no topo.
7. **SEO on-page.** `<title>`, `<meta description>`, Open Graph, Twitter Card, canonical, JSON-LD (Product/Organization quando aplicável).
8. **Entrega.** Estrutura de arquivos clara + README com stack, dev, build, sugestão de deploy (Vercel/Netlify/Cloudflare Pages).

## Etapa 6 — Revisão (Rita)

1. **Carregar rubrica + entregáveis.** quality-criteria.md + brief.md + strategy.md + copy.md + visual-system.md + code/.
2. **Ler na íntegra.** Percorrer a LP renderizada (preview localhost se possível) do hero ao footer. Anotar reações iniciais antes de pontuar.
3. **Avaliar 4 eixos com score 1-10.**
   - **Copy:** alinha com strategy? hooks A/B/C apresentados? CTA na Intensity Ladder? proof + neutralizador + anti-commodity?
   - **Visual:** design system documentado? WCAG AA? hierarquia? imagens consistentes com tom? sem stock genérico?
   - **Código:** stack correta? mobile-first? Lighthouse > 90? LCP < 2.5s? CLS < 0.1? semantic HTML? a11y?
   - **SEO+Meta:** title/meta/H1/OG/canonical/alt? structured data? keyword na H1?
4. **Aplicar veredito.**
   - APPROVE: média >= 7 E nenhum eixo < 4.
   - CONDITIONAL: média >= 7 mas 1 eixo entre 4-6.
   - REJECT: média < 7 OU qualquer eixo < 4.
5. **Rotear on_reject.** Copy → step 4; Visual → step 5; Código/SEO → step 6; Alinhamento estratégico → step 2.
6. **Separar required changes (bloqueantes) de suggestions (non-blocking).** Cada required: o que, onde (arquivo/linha), como, step de retorno.
7. **Reconhecer pelo menos 1 Strength** mesmo em REJECT.
8. **Entregar review.md** com verdict, scoring table, detalhes por eixo, required changes, suggestions, path-to-approval, revision count.

## Regras de coerência entre etapas

- Nenhuma etapa contradiz a anterior. Carla não contradiz Bruno; Davi não contradiz Diana.
- Em caso de discordância, registrar e pedir alinhamento ANTES de seguir.
- O driver psicológico único definido por Bruno aparece do hook (Carla) ao visual (Diana) ao layout (Davi).
- A stack escolhida por Bruno é executada por Davi sem upgrade nem downgrade silencioso.
