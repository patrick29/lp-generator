# Nova Digital — LP Institucional

Landing page institucional da **Nova Digital** (agência de marketing estratégico, fundada por Letícia Shibayama). Implementada pelo squad **lp-generator** em modo *design handoff*, a partir de um bundle da Claude Design.

Objetivo da LP: apresentar a agência, descrever os serviços e a metodologia proprietária **Método NOVA™**, e capturar leads via formulário de diagnóstico gratuito.

## Como rodar localmente

A página é HTML/CSS/JS vanilla. A ilha de Ajustes (tweaks) carrega `.jsx` por HTTP, então o ideal é **servir a pasta** em vez de abrir o `index.html` direto pelo `file://`:

```bash
cd src
python -m http.server 8080
# abra http://127.0.0.1:8080/index.html
```

> A foto da fundadora é carregada via atributo `src` (`assets/images/founder.webp`), então ela aparece mesmo abrindo por `file://`.

## Estrutura

```
src/
  index.html            # a LP (entrada)
  lp.css                # camada premium: layout + animações sobre o design system
  lp.js                 # render de dados, animações, parallax, Método NOVA (3 modos)
  image-slot.js         # componente <image-slot> da foto da fundadora (read-only em produção)
  tweaks-panel.jsx      # ilha React do painel de Ajustes (canto da tela)
  lp-tweaks.jsx         # estado/aplicação dos Ajustes ao DOM
  ds/                   # Nova Digital Design System (tokens + componentes)
    styles.css          #   entrada (@import dos tokens e componentes)
    tokens/             #   fonts, colors, typography, spacing, base
    components/         #   components.css (nd-btn, nd-card, nd-tag, nd-avatar, ...)
    readme.md           #   manual de marca (referência)
  assets/
    icon/               # ícone da marca (orange/white/black) + marca vetorial (SVG)
    logo/               # wordmark e logomarca
    images/             # founder.webp (foto da Letícia)
brief/
  design-handoff-README.md   # README original do bundle Claude Design
  design-chat-transcript.md  # transcript completo da iteração com o design assistant
  metodo-nova.md             # texto-fonte do Método NOVA (Metodo_NOVA.docx)
deploy/
  qa-review.md          # revisão de QA da entrega
```

## Seções da página

Hero (com formulário de diagnóstico) → Serviços → **Método NOVA™** → Depoimentos → A agência (Sobre/Fundadora) → Marcas Parceiras → Resultados → FAQ → Contato → Footer.

### Método NOVA™ — fixo no modo Jornada

A seção exibe o Método sempre no modo **Jornada**: timeline horizontal dirigida por scroll/parallax — o scroll vertical avança as 4 etapas (N → O → V → A) na horizontal e é liberado ao fim. **Em telas pequenas mantém a mesma experiência horizontal**: a letra vira uma marca-d'água ao fundo e o card fica compacto (usa `dvh` para não saltar com a barra do navegador mobile). Só cai para a timeline vertical com `prefers-reduced-motion`.

> O seletor de visualização (Jornada / Cards / Imersivo) foi **removido** da seção e do painel de Ajustes. Os modos Cards e Imersivo continuam no `lp.js` (dormentes), mas não são expostos.

## Ilha de Ajustes (Tweaks) — ferramenta de iteração

A LP carrega uma ilha React (`tweaks-panel.jsx` + `lp-tweaks.jsx`) que expõe os controles de variação da entrega:
- **Movimento — Animação:** `Expressivo` · `Sutil` · `Desligado`
- **Layout — Densidade:** `Compacto` · `Padrão` · `Espaçoso`
- **Cor — Destaque:** `Laranja` · `Roxo`

> **Importante:** esse painel só **abre dentro do runtime da Claude Design** (ele espera um sinal `__activate_edit_mode` do host). Num deploy estático comum ele fica **oculto** e a página renderiza com os padrões travados: **Jornada / Expressivo / Compacto / Laranja**. A densidade `Compacto` está fixada em `<html data-density="compact">`, então vale mesmo sem a ilha React (build enxuto ou `file://`). O Método fica **fixo em Jornada** (seletor removido da seção e do painel).

Para um **build público enxuto**, remova a ilha sem nenhuma mudança visual: apague de `index.html` os **5 últimos** `<script>` (React, ReactDOM, Babel standalone, `tweaks-panel.jsx` e `lp-tweaks.jsx`) e a `<div id="tweaks-root">`. A página continua idêntica nos padrões acima e deixa de baixar React + Babel.

## Antes de publicar

1. **Conteúdo placeholder** — números (Resultados), depoimentos e logos de parceiras são exemplos; substituir por dados reais. Dados de contato (WhatsApp `(11) 99999-0000`, e-mail, @, endereço) também são placeholder.
2. **Formulários** — `heroForm` e `leadForm` só disparam um toast; conectar a um backend/CRM/e-mail real.
3. **Fonte do logotipo** — o display usa **Quicksand** como substituto livre da **Qalget Trial** (comercial). Subir os webfonts licenciados de Qalget para fidelidade total do logotipo.
4. **Lucide** — os ícones carregam de `unpkg.com/lucide@latest`; **fixar uma versão** (ex.: `lucide@0.460.0`) antes de publicar para não quebrar com releases futuras.
5. **Foto da fundadora** — já incluída (`assets/images/founder.webp`); trocar/recortar se quiser. O atributo `position="50% 12%"` ancora o corte pelo topo.

---

**Cliente:** Nova Digital · **Setor:** Agência de marketing · **Objetivo:** Captura de leads (diagnóstico gratuito) · **Stack:** HTML/CSS/JS vanilla + design system próprio.
