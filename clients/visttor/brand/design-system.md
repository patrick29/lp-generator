# Visttor — Design System & Guia de Marca

> **Fonte da verdade** de identidade visual, tom de voz e componentes do **Visttor**.
> Todo projeto Visttor futuro (LP ou app) deve seguir este guia. Vive no nível do
> cliente (`clients/visttor/`) porque persiste entre projetos e versões.

**Origem:** importado de `claude.ai/design` — projeto "Landing page para SaaS"
(`ea7b691e-9072-407b-97da-100d0b71ca4d`). Design system + UI kit reconstruídos a
partir de **screenshots do produto** (não havia código-fonte nem Figma), refinados
num sistema padronizado. Build de referência: **v0.0.16**.

## Arquivos deste pacote

| Arquivo | O que é |
|---|---|
| [tokens.css](tokens.css) | **Todos os design tokens** (cores, tipografia, radii, sombras, spacing) como CSS vars. Importe primeiro. Nunca hardcode hex. |
| [components.css](components.css) | Receitas de componentes prontos (botões, campos, cards, badges, stepper, modal…) sobre os tokens. |
| [design-system.md](design-system.md) | Este guia — contexto, voz, fundamentos visuais, iconografia, do/don't. |
| [logo-icon.png](logo-icon.png) | Ícone oficial (carro royal-blue + check). |

**Como usar num projeto novo:**
```html
<link rel="stylesheet" href="tokens.css">      <!-- 1º: variáveis da marca -->
<link rel="stylesheet" href="components.css">  <!-- 2º: componentes (opcional) -->
<script src="https://unpkg.com/lucide@latest"></script>  <!-- ícones -->
```

---

## 1. Produto & contexto

**Visttor (Sistema de Vistoria Veicular)** é um SaaS de **vistoria veicular pelo celular**:
o operador fotografa, documenta e assina a condição de um veículo em minutos, direto do
telefone ou do notebook. Fotos guiadas, dados, assinatura, modo offline e sincronização
na nuvem.

- **Público:** oficinas, guinchos e gestores de frota no Brasil. Operadores muitas vezes
  **não-técnicos, em campo, no celular, às vezes com uma mão só.** O produto precisa ser
  rápido, com alvos de toque grandes, baixa fricção e tolerante a offline (indicador
  "Salvo" de sync).
- **Papéis:** `Administrador` e `Vistoriador`.
- **Fluxo típico:** Login → lista de **Vistorias** (busca + "Nova Vistoria") → **Dados do
  Veículo** → wizard de 3 passos **Dados → Fotos → Assinatura** → **Finalizar Vistoria**.
  Extras: **Ajustes**, **Meu Perfil**, e **Gerenciar Vistoriadores** (admin).
- **Domínio:** placas (`DEM0A01`), códigos de vistoria (`#VST-20260418-478`), 10 pontos
  de foto obrigatórios (Frente, Traseira, Laterais, Interior, Motor, Porta-malas,
  Odômetro, Chassi…), status `Rascunho` / `Concluída`.

---

## 2. Tom de voz & copy

- **Idioma:** português do Brasil (pt-BR) em tudo — labels, helper text, toasts.
- **Tratamento:** fala **ao usuário de forma direta e respeitosa**, com verbos no
  imperativo, sem pronome. Ex.: *"Entre com suas credenciais para acessar o sistema"*,
  *"Preencha as informações iniciais para começar."*, *"Confirme as informações básicas
  para continuar."* É orientado à ação, nunca prolixo.
- **Tom:** claro, prático, tranquilizador. **Sem marketing fluff, sem exclamação, sem
  piadas.** Diz exatamente o que fazer a seguir. Escreva como um checklist calmo.
- **Caixa (casing):**
  - Botões e nav em **Title Case**: *Nova Vistoria, Salvar e Continuar, Finalizar
    Vistoria, Criar vistoriador, Alterar Senha*.
  - Labels de campo em **Title Case**: *Nome do Proprietário, Data de Nascimento, KM rodado*.
  - **Overlines em CAIXA ALTA** com tracking largo (`--ls-wider`): *PASSO 1, FOTOS
    ADICIONAIS*, tabs *VISTORIAS / AJUSTES*.
  - Helper/meta em sentence case.
- **Labels curtas e do domínio:** *Placa, Chassi, Odômetro, Vistoriador, Rascunho*.
- **Placeholders ensinam por exemplo**, prefixados com *"Ex:"* — *"Ex: João Silva",
  "Ex: (11) 99999-9999", "Ex: 123.456.789-00", "Ex: 152.480"*.
- **Empty states** encorajadores e diretos: *"Nenhuma vistoria encontrada — Comece
  criando uma nova vistoria para o veículo."* com um único CTA claro.
- **Confirmações destrutivas** explicitam a permanência: *"Tem certeza que deseja excluir
  esta vistoria? Esta ação não pode ser desfeita."* O botão reafirma o verbo: *"Sim, Excluir"*.
- **Tokens de template** (mensagem de compartilhamento) usam chaves: `{nome}`, `{modelo}`,
  `{placa}`.
- **Sem emoji.** Ícones carregam o significado.
- **Números/unidades — formato BR:** `152.480` (ponto de milhar), datas `DD/MM/AAAA`,
  datetime `18/04/2026, 21:46:21`, unidade como sufixo (`KM`) à direita do campo.

> **Regra de ouro:** verbo no imperativo, diga o que acontece, reafirme ações
> destrutivas. Title Case para ações, CAIXA ALTA + tracking para overlines/tabs, "Ex:"
> em placeholders.

> Para copy de **landing page** (headlines, hooks, prova social), use a skill `copy-lp`
> e registre decisões em `clients/visttor/decisoes-copy.md`. O tom acima é da **UI do
> produto**; a LP pode ter mais ambição de venda, mas mantém a mesma marca e sobriedade.

---

## 3. Fundamentos visuais

Base: **Tailwind-slate refinado** — neutros cinza-frios, um azul royal como cor de marca,
e um conjunto semântico enxuto (verde confirma, vermelho destrói). Limpo, frio,
corporativo-utilitário. **Sem gradientes em superfícies, sem lavagens de cor,
sem glassmorphism** (blur só no scrim de modal).

### Cor
- **Primária / marca:** `--primary` / `--brand-600` **`#1840A4`** — royal blue tirado do
  logo. Preenche botões primários, tab ativa, stepper, links, focus rings.
  Hover → `--brand-500 #2A55C2`, press → `--brand-700 #122F7A`, tint → `--brand-soft #E9EEFA`.
- **Ink (texto):** `--navy-900` **`#0F172A`** — títulos, corpo, badges escuros.
  Near-black, **não** é a cor da marca.
- **Neutros:** escala slate `#F8FAFC → #334155`. Fundo `--slate-50`; cards branco puro;
  bordas `--slate-200`; borda de input `--slate-300`; placeholder/ícone-vazio `--slate-400`;
  texto muted `--slate-500`.
- **Semântico:** `--success #16A34A` (Finalizar Vistoria, nuvem "Salvo"),
  `--danger #EF4444 / #DC2626` (excluir, "Sair da Conta"), `--warning #D97706`,
  `--info` = azul da marca. Cada um tem `-soft` para badges/fills.
- **Vibe:** cor usada com parcimônia — ink/neutros carregam a estrutura; azul marca o
  caminho primário; verde e vermelho só em momentos de decisão.

### Tipografia
- **UI/display:** **Plus Jakarta Sans** (400/500/600/700/800). Títulos bold→extrabold com
  tracking levemente negativo. *(Substituição — ver §6.)*
- **Mono:** **JetBrains Mono** para placas e códigos (`DEM0A01`, `#VST-…`), tabular-nums.
- Escala 12→34px; **corpo 14px**. Overlines 12px CAIXA ALTA com `0.08em`.
- **Em LP:** ok escalar hero/display acima de `--text-4xl` (34px), mantendo a mesma
  família, pesos e tracking negativo.

### Spacing & layout
- **Grid base 4px.** Cards com padding `24px`; campos empilham com `16–20px`; linhas de
  dois campos usam grid gap `16px`.
- **Containers:** auth/forms centrados e estreitos (`460–540px`); listas/admin largas
  (`~1200px`) com grids responsivos (3-up → 1-up).
- **Header:** barra fixa no topo, `64px`, branca com borda-fio inferior; marca + título à
  esquerda, perfil + sync à direita, back-arrow opcional em sub-páginas.
- **Bottom tab bar:** barra branca **flutuante, pill-rounded** (`VISTORIAS / AJUSTES`)
  com sombra para cima — navegação phone-first. Tab ativa = azul da marca.

### Superfícies, bordas, radii
- **Cards:** branco, `--radius-lg 12px` (auth vai a 16–20px), borda `1px --slate-200`,
  **sombra bem suave** (`--shadow-sm`). Bordas fazem a maior parte da separação.
- **Inputs:** branco, `1px --slate-300`, `--radius-md 8px`, `~40px` de altura. Foco =
  ring azul sutil (`--shadow-focus`) + borda escurece.
- **Dropzones (slots de foto):** borda tracejada `--slate-300`, ícone de câmera central,
  altura generosa.
- **Modais:** centrados, branco, `--radius-xl`, `--shadow-xl`, sobre scrim
  `rgba(15,23,42,.45)`; "×" no topo direito.
- **Radii:** inputs/botões 8px · cards 12px · auth/tabbar 16–20px · badges/avatars pill.

### Elevação / sombras
Suaves, low-spread, **tingidas de navy** (não preto duro). `xs→xl` + `--shadow-tabbar`
(sombra para cima). Tudo flutua de leve sobre o fundo slate.

### Motion & estados
- **Animação:** mínima e funcional — fades curtos em modais/menus (~150–200ms). Sem
  bounce, sem parallax. Barra do stepper preenche entre passos.
  *(Nota: LPs Visttor já feitas usam reveal on-scroll, contadores e tilt sutil — aceitável
  em marketing, sempre com `transform`/`opacity` e desligado em `prefers-reduced-motion`.)*
- **Hover:** botão primário escurece; secundário/ghost ganham fill `--slate-100`; cards
  sobem um passo de sombra ou borda vira `--slate-300`.
- **Press:** cor aprofunda; `scale(0.99)` aceitável em alvos grandes.
- **Disabled:** texto `--slate-400` sobre `--slate-100`, sem sombra.
- **Foco:** sempre ring visível (`--shadow-focus`) — são ferramentas de campo,
  acessibilidade importa.

### Imagery
O produto não tem fotografia de marketing — as únicas imagens são **fotos de veículos
capturadas pelo usuário** (reais, qualidade de câmera de celular) em slots de proporção
fixa. Trate qualquer foto como documentação utilitária, não arte de hero.

---

## 4. Iconografia

- **Sistema:** **[Lucide](https://lucide.dev)** — a linguagem de ícones do produto de
  ponta a ponta. Stroke `2px`, caps/joins `round`, grid `24px`, monocromático herdando
  `currentColor`. **Sem emoji, sem ícones coloridos/filled.**
- **Ícones observados:** `car` (marca + empty state), `search`, `user`/`user-round`,
  `settings`, `list`, `cloud`/`cloud-check` (sync "Salvo"), `arrow-left`, `plus`,
  `trash-2`, `calendar`, `lock`, `key-round`, `user-cog`, `mail`, `info`, `images`,
  `camera`, `eraser`, `save`, `log-out`, `check`/`circle-check`, `x`, `chevron-down`.
- **Uso:** ícones pareiam com texto (botões, tabs, meta) a `16–18px`, gap `8px`; ícones
  standalone (header) a `20–24px` em `--slate-600`.
- **Carregar:** `<script src="https://unpkg.com/lucide@latest"></script>` +
  `lucide.createIcons()`, ou por ícone `<i data-lucide="car"></i>`.

### Logo
- **Ícone oficial:** carro royal-blue com check, PNG fundo transparente
  ([logo-icon.png](logo-icon.png), 500×500). Tamanhos PWA (192/512/apple-touch) existem no
  projeto de design original em `assets/icons/`.
- **Wordmark:** o texto "Visttor" em **Plus Jakarta Sans ExtraBold** ao lado do ícone.
- **Faltando:** versão vetorial (SVG) e monocromática single-color para tamanhos pequenos
  e fundos escuros. Pedir ao cliente se disponível.

---

## 5. Componentes (índice)

Estilos completos em [components.css](components.css). Principais classes:

| Componente | Classe base | Notas |
|---|---|---|
| Botões | `.btn` + `.btn-primary/-secondary/-ghost/-success/-danger/-link` | `.btn-block`, `.btn-sm`. Primário = azul, success = verde (Finalizar), danger = vermelho. |
| Campo | `.field` > `label` + `.input`/`.textarea`/`.select` | 40px, radius 8px, foco com ring. `.field-grid-2` para dois-a-dois. `.input-suffix` mono (ex.: KM). |
| Card | `.card` + `.card-pad` | Branco, radius 12px, borda slate-200, shadow-sm. |
| Badge/status | `.badge` + `.badge-dark/-soft/-success/-warn/-danger/-info` | Pill. `dark` para papel Administrador; `success` para Concluída; `soft` para Rascunho. |
| Header | `.hdr` | Fixo 64px, marca + título + ações. |
| Tab bar | `.tabbar-wrap` > `.tabbar` > `.tab` | Flutuante, pill, phone-first, tab ativa azul. |
| Stepper | `.stepper` > `.step` (`.step-dot.done/.current`, `.step-line.done`) | Wizard 3 passos. |
| Busca | `.search` > `input` | 44px, ícone à esquerda. |
| Empty state | `.empty` + `.empty-title` + `.empty-sub` | Ícone slate-300, título + CTA. |
| Dropzone | `.dropzone` | Foto: tracejado, hover azul. |
| Overline | `.overline` / `.vt-overline` | CAIXA ALTA + tracking (PASSO 1). |
| Row-button | `.row-btn` | Lista de ações em Ajustes. |
| Modal | `.scrim` > `.modal` (+ `.modal-head/-title/-sub/-actions/-form`) | Centrado, radius-xl, shadow-xl, fade+pop. |

O projeto de design original inclui uma recriação interativa completa do app em
`ui_kits/visttor/` (JSX: `Primitives`, `Chrome`, `Auth`, `Vistorias`, `Wizard`,
`SettingsAdmin`) — consulte lá se precisar reconstruir a UI do produto.

---

## 6. Substituições & pendências

- **Fonts (substituição):** o produto original renderiza numa stack Tailwind-default /
  system / tipo-Inter. Foram substituídas por **Plus Jakarta Sans + JetBrains Mono** (via
  Google Fonts) para um acabamento mais crafted. **Se o cliente tiver as fontes reais,
  trocar** `--font-sans` / `--font-mono` em [tokens.css](tokens.css) e subir os `.woff2`.
- **Logo:** ícone oficial ✅. Falta SVG vetorial + versão monocromática.
- **Tokens:** hex/radii/spacing são best-effort a partir de screenshots. Se surgir código
  ou Figma oficial, apertar os valores.

---

## 7. Checklist — projeto Visttor novo

- [ ] Importar [tokens.css](tokens.css) antes de qualquer estilo próprio. **Zero hex
      hardcoded** — sempre `var(--…)`.
- [ ] Azul `--primary #1840A4` só no caminho primário; navy `#0F172A` para texto; verde/
      vermelho só em decisão. Sem gradiente em superfície.
- [ ] Plus Jakarta Sans (UI) + JetBrains Mono (placas/códigos).
- [ ] Ícones **Lucide** monocromáticos, 2px, `currentColor`. Sem emoji.
- [ ] Copy pt-BR imperativa, Title Case em ações, CAIXA ALTA+tracking em overlines,
      "Ex:" em placeholders, formato BR de número/data.
- [ ] Cards branco/radius-12/borda-slate-200/shadow-sm; inputs 8px/40px com focus ring.
- [ ] Foco sempre visível; alvos de toque grandes (público em campo, no celular).
- [ ] Animação sutil, só `transform`/`opacity`, respeitando `prefers-reduced-motion`.
- [ ] Logo oficial ([logo-icon.png](logo-icon.png)); pedir SVG/monocromático se faltar.
