# QA Review — Nova Digital · LP Institucional

Revisão da entrega do port de produção (de bundle Claude Design → `clients/nova-digital-institucional/`).
Método: revisão adversarial multiagente em **4 dimensões** (referências/build, fidelidade ao bundle original, prontidão de produção/runtime, correção+acessibilidade), com **carregamento real da página em navegador** (sem o runtime da Claude Design) para validar comportamento.

## Resultado por dimensão

| Dimensão | Veredito |
|----------|----------|
| **Fidelidade ao original** | ✅ PASS |
| **Referências / build** | ✅ PASS |
| **Prontidão de produção / runtime** | ✅ PASS |
| **Correção / acessibilidade** | ⚠️ Corrigido (ver abaixo) |

### Fidelidade — PASS
`lp.css`, `lp.js`, `image-slot.js`, `tweaks-panel.jsx`, `lp-tweaks.jsx` e todo o design system (`ds/tokens/*`, `ds/components/components.css`, `ds/styles.css`) são **byte-idênticos** ao bundle original. O `index.html` difere do original **apenas** nas mudanças intencionais:
1. caminho do design system `_ds/<hash>/styles.css` → `ds/styles.css`;
2. foto da fundadora conectada via `src="assets/images/founder.webp"` no `<image-slot>`;
3. atributos de ferramenta (`data-comment-anchor`, `data-screen-label`) removidos.

Nenhuma seção, copy ou script foi perdido ou alterado fora isso.

### Referências / build — PASS
Todos os `href`/`src` locais resolvem para arquivos existentes; a cadeia de `@import` do `ds/styles.css` (tokens + components) resolve; favicon, logos, marcas SVG e `founder.webp` corretos. Nenhuma referência remanescente ao caminho antigo `_ds/<hash>/`.

### Prontidão de produção / runtime — PASS
Página carregada em navegador real **sem host da Claude Design** (`window.omelette` indefinido, `window.parent === window`): **zero exceções de JS**.
- `image-slot.js` degrada corretamente — todo acesso a `window.omelette` é guardado; a foto da fundadora renderiza pelo fallback `src` (read-only, `data-editable=false`). Confirmado ao vivo: `<img src="assets/images/founder.webp">`, `display:block`, `naturalWidth=637`.
- A ilha React (Tweaks) monta sem erro e **fica oculta** (`TweaksPanel` retorna `null` sem o sinal `__activate_edit_mode`); `tweaks-root` sem filhos — nenhuma UI de ferramenta vaza para a página.
- `lp.js` inicializa limpo: 6 serviços, 5 FAQs, 3 depoimentos, 16 logos no marquee, Método em modo Jornada, ícones Lucide desenhados.
- Scroll da página inteira exercitou parallax, pin horizontal do Método, count-up e reveals sem erros.

## Correções aplicadas nesta revisão

Aplicadas ao port (deltas pós-handoff, sem alterar o visual da marca):

1. **Captura de leads (HIGH)** — todos os 8 campos dos formulários (hero + contato) ganharam `name` (`nome`, `instagram`, `whatsapp`, `investimento`). Sem `name`, um backend futuro receberia dados vazios. → `src/index.html`
2. **Nome acessível dos campos (HIGH)** — `aria-label` em cada input/select (o label visual era só `placeholder`, que some ao digitar e não é nome acessível confiável). O `<select>` antes expunha um nome acessível truncado com todas as `<option>`. → `src/index.html`
3. **Foto da fundadora (MEDIUM)** — `<image-slot>` ganhou `role="img"` + `aria-label="Letícia Shibayama, fundadora da Nova Digital"` (a imagem é conteúdo, antes invisível à tecnologia assistiva). → `src/index.html`
4. **Toggle do Método (LOW)** — `role="tablist"` (incompleto, sem `role="tab"`/painéis) trocado por `role="group"`, adequado a um seletor de visualização. → `src/index.html`
5. **Movimento reduzido (LOW)** — `@media (prefers-reduced-motion: reduce){ html{ scroll-behavior:auto } }`, alinhando o smooth-scroll de âncoras ao gating de movimento que o JS já aplica. → bloco marcado no fim de `src/lp.css`
6. **Doc** — README corrigido (a ilha são **5** `<script>`, não 4).

## Itens documentados (recomendações — não alteram a entrega atual)

Decisões de marca/produto ou itens cosméticos, deixados para o cliente decidir:

- **Contraste laranja sobre roxo (WCAG AA) — ✅ corrigido.** Os rótulos pequenos laranja sobre roxo (eyebrows de hero/método/contato, `.mstep__sub` 18px e "Etapa N") usavam `--nova-orange` #F38C33 = **3.97:1** (< 4.5:1). Trocados para o token `--lp-accent-on-purple` (= `--orange-300` #F6B065 = **5.22:1**) em `lp.css`; títulos grandes, botões, ícones e decoração mantêm o laranja da marca (passam por serem texto grande ≥3:1 ou objeto gráfico). **Pendente por opção:** os eyebrows laranja sobre fundo **branco** (seções claras Serviços/Depoimentos) reprovam pior (~2.4:1) e pediriam um laranja mais escuro (orange-700) — não alterado a pedido (escopo: só laranja-sobre-roxo).
- **Contraste do placeholder** — `--neutral-400` (#9B889A) sobre branco = **3.26:1**. Como o design é “premium” só com placeholder (sem label visível), considerar escurecer para `--neutral-500` (#735F74 ≈ 5:1) **ou** adicionar labels visíveis. Não alterado (manteria consistência com o design system).
- **Acessibilidade do menu mobile** — o burger funciona, mas falta `aria-expanded`/`aria-controls`, *focus trap* no overlay e *scroll-lock* do `body`. Requer mexer no `lp.js` (mantido verbatim); recomendado como enhancement.
- **404 cosmético** — `image-slot.js` faz `fetch('.image-slots.state.json')` a cada load; o sidecar foi intencionalmente removido, então aparece um 404 (silenciado por `.catch`, sem efeito no render). Para silenciar: incluir um `src/.image-slots.state.json` com `{}`.
- **React/Babel em dev** — a página baixa React 18 *development* + Babel standalone (~1,5MB + warning de transformer no console) só para a ilha oculta. Ver README (“build público enxuto”) para remover, ou trocar pelos builds `.production.min.js`.
- **Código morto inofensivo** — `setupForms` itera um id `newsForm` inexistente e há CSS `.ftr__news` sem uso (resíduo da newsletter removida). Sem efeito em runtime.
- **Lucide `@latest`** — fixar uma versão antes de publicar.

## Antes de publicar (resumo — ver README)

1. `heroForm`/`leadForm` agora enviam para uma planilha do Google via Apps Script (`deploy/apps-script/`). Falta só colar `LEAD_ENDPOINT`/`LEAD_TOKEN` no `lp.js` — ver `apps-script/SETUP.md`.
2. Substituir conteúdo placeholder: números (Resultados), depoimentos, logos de parceiras e dados de contato.
3. Fixar versão do Lucide; subir webfonts licenciados da Qalget (hoje substituída por Quicksand).
4. Contraste WCAG AA: laranja-sobre-roxo **corrigido**; restam (por opção) os eyebrows laranja sobre fundo branco e o placeholder cinza.

## Revisão de tamanho de fontes (verificada no navegador a 1440px)

- **Bug — `clamp()` inválido nos títulos de FAQ e Contato.** Os `style="font-size:clamp(...)"` inline estavam sem espaço ao redor do `+` (`1.3rem+2vw`), o que é CSS inválido — `calc/clamp` exigem espaço em `+`/`-`. Resultado: os dois `<h2>` caíam no **default do navegador (24px)** em vez do tamanho de seção. Corrigido para `clamp(1.8rem, 1.3rem + 2vw, 2.8rem)` (FAQ → **44.8px**) e `clamp(2rem, 1.4rem + 2.4vw, 3.2rem)` (Contato → **51.2px**). Os demais `clamp()` (em `lp.css`) já estavam corretos.
- **Título do card de formulário (hero) reduzido.** `.hero__formtitle` usava `--text-2xl` (**44px**) e "Diagnóstico gratuito" quebrava em 2 linhas, espremendo o card. Trocado para `clamp(1.5rem, 1.2rem + 1vw, 1.75rem)` (**28px**) → cabe em 1 linha, card equilibrado.
- **Não alterado (intencional):** hero h1 (86px, display editorial), títulos de seção (51px), e o Método (letra 317px · nome 51px · corpo 16px · itens 14px — consistente). Disponível para ajuste se quiser.

## Responsividade / telas pequenas (replicado da iteração da Claude Design, verificado no navegador)

Portados os deltas v2 do bundle (só `lp.css` + `lp.js` mudaram lá):

- **Método Jornada agora horizontal em todas as larguras** (antes caía para timeline vertical < 880px). `lp.js`: `const horizontal = !reduceMotion` (sem o `&& innerWidth >= 880`) e o `onResize` só volta ao vertical com `reduceMotion`. Em < 880px o painel é otimizado: a letra vira marca-d'água (`.mhpanel__visual` absolute, `opacity:.14`, `52vw`) atrás do card (`z-index:1`), com nome/desc/itens compactos e dots/barra menores.
- **`dvh` no pin** (`.mhpin { height: 100vh; height: 100dvh; }`) para o painel fixo não “saltar” quando a barra de endereço mobile aparece/some.
- **Overflow horizontal corrigido:** `.nd-btn--full { white-space: normal; text-align: center; }` — o botão full-width tinha `nowrap` (de `.nd-btn`) e forçava a coluna além da viewport em telas estreitas (hero + contato).
- **Verificado:** a 390px `scrollWidth == clientWidth` (zero overflow), Método `is-hscroll` com `mhpanel` presente, letra-marca a `.14`, card 27/14/12px; a 1440px sem regressão (duas colunas, letra opacity 1, nome 51px).

### Espaço de entrada do Método (header → painel)

O painel "pinado" de 100vh com o card **centralizado** deixava um vão grande abaixo do header do Método na entrada (medido **231px** entre o parágrafo e o card). O card centralizado é o que equilibra o estado "travado", então não dá pra simplesmente alinhar ao topo (fica top-heavy).

Solução: manter o card centralizado **e** sobrepor o painel ao header com margem negativa (`.metodo.is-hscroll .shead { margin-bottom: var(--space-4) }` + `.metodo.is-hscroll .metodo__stage { margin-top: -6rem }`). Como o topo do painel é transparente, a sobreposição não gera artefato — o card centralizado já aparece alto na entrada.

**Verificado no navegador:** vão de entrada **231 → 69px** (desktop 1280) / **79px** (mobile 390), `card_overlaps_header: false` nos dois, zero overflow, e painel travado equilibrado (card centralizado, dots no rodapé).
