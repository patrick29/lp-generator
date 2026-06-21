==============================
 REVIEW VERDICT: APPROVE
==============================
LP: MF Logística — Institucional
Stack: HTML + CSS + JS vanilla (estático)
Revisão: 1 de 3

| Eixo      | Score | Resumo |
|-----------|-------|--------|
| Copy      | 9/10  | Hook C com scroll-stop, driver segurança coerente do hero ao CTA, 4Ps, proof numbers, neutralizador antes de cada CTA. |
| Visual    | 9/10  | Design system documentado antes dos assets, 5 cores, WCAG AA 100, fotos de caminhão (não stock corporativo genérico). |
| Código    | 10/10 | Lighthouse 100/100/100/100, LCP 1.8s, CLS 0.005, mobile-first, semântico, 0 erro de console, convenções de LP respeitadas. |
| SEO+Meta  | 10/10 | Title 50c, meta 150c, H1 único com keyword, OG+Twitter+canonical, JSON-LD MovingCompany, alts descritivos. |
| MÉDIA     | 9.5/10 |  |

Lighthouse mobile: Perf 100 / A11y 100 / BP 100 / SEO 100
(LCP 1.8s · CLS 0.005 · TBT 0ms — medido via `npx lighthouse` headless contra o build local servido em http://127.0.0.1:8137)

## Strengths
- **Strength:** O eixo Código bate todos os Core Web Vitals com folga (`src/index.html` + `src/styles.css`): fontes carregadas sem bloquear render (`media="print" onload`), hero pré-carregado e comprimido para 114KB, `font-display:swap`. Resultado: Perf 100, LCP 1.8s.
- **Strength:** Copy mantém o driver único (segurança) do hero (`content/copy.md` HERO) ao CTA final, com proof numbers reais em vez de superlativo. Hook C ("+16 mil entregas… nenhuma você precisou caçar") passa o scroll-stop test e o teste anti-commodity.
- **Strength:** Integridade respeitada: a copy não crava prazo numérico de entrega (usa "data combinada"), e a seção de prova social usa **segmentos** em vez de inventar clientes (`index.html` seção 7), com slots claramente marcados como placeholder.
- **Strength:** Estrutura segue o `wireframe_lp.md`: barra superior só com logo + 1 CTA (sem menu de navegação), barra de confiança logo após o hero, FAQ em `<details>` acessível, CTA final em alto contraste, rodapé enxuto.

## Required Changes
Nenhuma bloqueante. Média 9.5, nenhum eixo < 4 → APPROVE.

## Suggestions (non-blocking)
- [→ futuro, Diana/Patrick] Substituir as **fotos stock** do hero e da galeria (`src/assets/images/*.webp`, Wikimedia Commons) pelas **fotos reais da frota da MF**. Antes de publicar com as stock, verificar a licença CC de cada arquivo e atribuir se for CC-BY.
- [→ futuro, Patrick] Plugar **logos reais de clientes** nos 4 slots `.logos__slot` (`index.html` seção 7) — hoje são placeholders "sua marca aqui".
- [→ futuro] Trocar o **wordmark "MF Logística"** (SVG/CSS) pelo logotipo oficial vetorial, se houver.
- [→ deploy] Definir `FORM_ENDPOINT` no topo de `src/script.js` para enviar leads a um CRM/Google Apps Script (hoje o form abre o WhatsApp com a cotação preenchida — funciona sem backend, degrada com segurança).
- [→ deploy] Conferir se os números do site oficial seguem atuais (14 anos, +16 mil entregas, 48+ municípios) e os telefones/e-mails.
- [→ opcional] Considerar banner LGPD se for adicionar analytics/pixel.

## Path to Approval
Já aprovada nesta 1ª revisão. As sugestões acima são melhorias de produção, não bloqueiam o deploy do MVP.

VERDICT: APPROVE.
