# Quality Criteria — LP Generator

> Rubrica unificada de qualidade. Compila os critérios dos 5 agentes em 4 eixos avaliáveis (Copy / Visual / Código / SEO+Meta) com sistema de scoring 1-10 da Rita.

## Sistema de scoring (Rita)

Cada um dos 4 eixos recebe um score 1-10. A média determina o veredito:

| Veredito | Regra |
|----------|-------|
| **APPROVE** | Média >= 7 E nenhum eixo < 4 |
| **CONDITIONAL APPROVE** | Média >= 7 mas 1 eixo entre 4-6 |
| **REJECT** | Média < 7 OU qualquer eixo < 4 |

Cada score deve vir acompanhado de justificativa escrita citando arquivo + seção/linha.

---

## Eixo 1 — Copy

### Critérios obrigatórios
- [ ] 3 hooks (A/B/C) apresentados ao usuário ANTES do corpo, com drivers e estruturas distintos.
- [ ] Hook escolhido passa o scroll-stop test (interrompe a leitura passiva).
- [ ] Driver psicológico do strategy.md está presente do hook ao CTA (coerência ponta a ponta).
- [ ] Cada promessa significativa tem proof number ou social proof anexado.
- [ ] Neutralizador de objeção presente nas 1-2 linhas antes do CTA primário.
- [ ] CTA primário está no nível correto da Intensity Ladder para o funnel stage.
- [ ] CTAs secundários (se houver) são visivelmente menores e nunca competem com o primário.
- [ ] Anti-commodity test: a copy não funcionaria igualzinho para um concorrente direto.
- [ ] Skeptic test: cada claim sobrevive à pergunta "como você sabe disso?".
- [ ] Word count reduzido 15-25% versus draft inicial.
- [ ] Zero em-dash (travessões), zero clichê morto.
- [ ] Acentos completos em pt-BR (ã, ç, é, etc.).

### Veto conditions (qualquer uma = REJECT no eixo Copy)
- Corpo escrito antes do hook ter sido confirmado pelo usuário.
- CTA "Saiba mais" ou equivalente vago no primário.
- 3+ CTAs concorrentes no hero.
- Superlativos vazios ("incrível", "melhor", "amazing") sem prova.

---

## Eixo 2 — Visual

### Critérios obrigatórios
- [ ] Design system documentado em visual-system.md ANTES da geração da primeira imagem.
- [ ] Paleta com 3-5 cores (nunca mais que 5) justificadas — variações vêm de tints/shades.
- [ ] Tipografia com escala definida para desktop E mobile (hero/heading/body/caption).
- [ ] Todo par cor texto/fundo passa WCAG AA contraste >= 4.5:1.
- [ ] Texto sobre imagem só com overlay sólido 60%+, gradient ou backdrop-blur.
- [ ] Plano de imagens por seção com skill atribuída (image-ai-generator / image-fetcher / SVG inline).
- [ ] Tap targets mobile >= 48px.
- [ ] Body >= 16px no mobile.
- [ ] Hero image (se houver) <= 200KB pós-compressão.
- [ ] Nenhuma imagem stock corporate genérica (handshake, equipe sorrindo).
- [ ] Identidade visual amplifica a Big Idea (não decora).

### Veto conditions
- Default azul-corporativo + branco sem input do usuário.
- Mais de 5 cores no sistema.
- Texto sobre foto sem overlay/blur que falhe WCAG AA.

---

## Eixo 3 — Código

### Critérios obrigatórios
- [ ] Stack implementada conforme strategy.md (sem upgrade ou downgrade silencioso).
- [ ] Lighthouse mobile: Performance > 90, Accessibility > 95, Best Practices > 95, SEO 100.
- [ ] LCP < 2.5s.
- [ ] CLS < 0.1.
- [ ] Mobile (390px): CTA primário visível sem scroll.
- [ ] Body >= 16px no mobile, tap targets >= 48px.
- [ ] H1 único na hero, hierarquia semântica até H3 max.
- [ ] Toda `<img>` tem `alt`, `width`, `height` explícitos.
- [ ] Mobile-first: CSS começa no menor breakpoint, escala com sm/md/lg/xl.
- [ ] Zero erro de console no browser.
- [ ] Funciona com JS desabilitado (graceful degradation) para HTML+Tailwind e Astro.
- [ ] README curto com stack + comando dev + comando build + sugestão de deploy.
- [ ] Comentários de código mínimos — apenas para "porquê", nunca "o quê".

### Veto conditions
- Tailwind via CDN em projeto Next.js ou Astro de produção.
- Inline base64 de imagem grande no HTML.
- `use client` em Next.js sem state/event real.
- Tap target < 48px ou texto < 16px no mobile.

---

## Eixo 4 — SEO + Meta

### Critérios obrigatórios
- [ ] `<title>` <= 60 chars, keyword primária nos primeiros 40.
- [ ] `<meta name="description">` entre 150-160 chars com promessa + CTA implícito.
- [ ] H1 único, contém ou parafraseia a keyword primária.
- [ ] Open Graph: `og:title`, `og:description`, `og:image` presentes.
- [ ] Twitter Card definido.
- [ ] Canonical URL declarada.
- [ ] Structured data (JSON-LD) para Product/Organization/Course quando aplicável.
- [ ] Alt text descritivo (não genérico) em cada imagem.
- [ ] URL slug curto e legível.

### Veto conditions
- Meta description ausente.
- Alt vazio em imagem significativa.
- Canonical ausente.
- Duplicidade de H1.

---

## Critérios processuais (Rita aplica em toda revisão)

- [ ] Cada required change diz: o que, onde (arquivo + linha/seção), como, qual step volta no on_reject.
- [ ] Lighthouse rodado e números registrados no review.md.
- [ ] Pelo menos 1 Strength citado, inclusive em REJECT.
- [ ] Suggestions non-blocking claramente separadas das required changes.
- [ ] Veredito bate com os scores (sem contradições).
- [ ] Revisão numerada (X de 3). Na 3ª revisão, escalar para Patrick.
