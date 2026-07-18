# QA Review — Kinevo (LP Institucional)

> Run `2026-06-04-173140` · Modo **design handoff** (bundle Claude Design) · Revisora: Rita Revisão

## Origem

- **Fonte:** bundle `.tar.gz` da Claude Design (`api.anthropic.com/v1/design/...`), arquivo de entrada `Kinevo Landing Page.html`.
- **Abordagem:** *copy as-is* (preferência registrada do Patrick para protótipos HTML/CSS/JS funcionais). Preserva pixel-perfect, todas as animações e o painel de tweaks. Pipeline de estratégia/copy/design (Bruno/Carla/Diana) **pulado** — o conteúdo já estava definido e iterado no chat de design.
- **Stack:** React 18 + Babel standalone via CDN, JSX servido como `<script type="text/babel">`, Lucide icons. CSS em `colors_and_type.css` + `<style>` inline no `index.html`.

## O que foi entregue

`clients/kinevo-institucional/src/`:
- `index.html` — entrada (renomeada de "Kinevo Landing Page.html"; imports relativos preservados)
- `colors_and_type.css` — tokens de cor + tipografia
- `tweaks-panel.jsx` — painel de iteração (Visual do hero / Layout serviços / Tema / Movimento)
- `components/` — 13 componentes (Header, Hero, Problem, Services, Process, Sectors, Integrations, About, Proof, Guarantee, FAQ, CTA→inclui Footer, shared)
- `assets/` — 4 logos oficiais (`logo-horizontal`, `logo-horizontal-white`, `logo-mark`, `logo-stacked`)

**Seções (11):** Hero → Problema → Serviços → Como funciona → Para quem (Setores) → Integrações → Sobre → Resultados → Por que a Kinevo → FAQ → CTA. Footer ao final.

## Verificação (render real, servido via HTTP)

| Item | Resultado |
|------|-----------|
| App React monta | ✅ `#root` com conteúdo, 11 `<section>` |
| Erros de console | ✅ 0 erros |
| Warnings | ⚠️ 1 — apenas o aviso padrão do Babel in-browser (esperado neste stack de protótipo) |
| Símbolos referenciados (Footer, useTweaks, KV_WHATS_DEFAULT, etc.) | ✅ todos definidos |
| Logos (header, rodapé branco, hub integrações) | ✅ 3/3 carregam, 0 quebradas |
| Imports relativos / ordem de scripts | ✅ todos resolvem |
| Referências a artefatos de dev (uploads/screenshots) | ✅ nenhuma |
| Hero final | ✅ "Cresça o faturamento. Não o tamanho do time." |

## Pendências antes de publicar (placeholders)

1. **Número do WhatsApp** — `5511999999999` (placeholder) em `src/components/CTA.jsx:5`. Trocar pelo número real da Kinevo.
2. **Foto do fundador** — placeholder "FOTO DO FUNDADOR" na seção Sobre (`src/components/About.jsx`). Inserir foto real do Patrick Almeida.
3. **Métricas/depoimento** — números do Hero e da seção Resultados estão marcados como *projeção/exemplo* (decisão de design: agência sem prova social madura). Substituir por casos reais quando houver.

## Notas técnicas

- Para abrir localmente, **precisa de servidor HTTP** (o Babel busca os `.jsx` via XHR — `file://` não funciona). Ex.: `python -m http.server` dentro de `src/`.
- Refator para single-file estático (sem CDN/Babel em runtime) é follow-up opcional, não bloqueia uso.

**Veredito:** ✅ Aprovado para entrega. LP renderiza completa e sem erros; pendências são apenas dados reais (WhatsApp, foto) a preencher pelo Patrick.
