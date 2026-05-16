# Landing Page Institucional

_Started 2026-05-14 20:04 UTC_

---

## User

Crie uma landing page institucional arrojada e atrativa. pode sugerir todas as seções que achar pertinente a uma pagina institucional de uma agencia de marketing

## Assistant

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: update_todos]_

Perfeito. O design system tem um UI kit do próprio site da Nova com Nav, Hero, Services, Cases, CTABand e Footer — vou usar como base e expandir com seções institucionais completas: marquee de clientes, método/processo, números de impacto, manifesto, time, depoimentos, FAQ e contato.

Vou organizar tudo numa pasta dedicada.

_[tool: copy_files]_

_[tool: copy_starter_component]_

_[tool: copy_files]_

_[tool: read_file]_

_[tool: run_script]_

Combinado, vou usar placeholders e `<image-slot>` para o que precisar de imagem real.

_[tool: copy_files]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: run_script]_

Vou criar a versão dark do logo invertindo as cores brancas para tinta:

_[tool: view_image]_

_[tool: write_file]_

_[tool: write_file]_

Logo escuro pronto. Agora vou montar a página completa.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Agora o CSS — vai estender o site.css com refinamentos do Hero + todas as seções novas.

_[tool: show_html]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: save_screenshot]_

Clean. Vou dar uma olhada rápida no resultado antes de mostrar.

_[tool: done]_

_[tool: save_screenshot]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: sleep]_

_[tool: fork_verifier_agent]_

Pronto. Construí uma landing institucional completa pra Nova Digital com 13 seções:

**Estrutura**
1. **Nav** sticky com burger mobile, telefone visível e CTA
2. **Hero** com 3 variações de layout (Padrão / Manchete / Wordmark), foto + cards de métrica + selo de prêmio + indicador "role pra descobrir"
3. **Marquee de clientes** com scroll infinito e ▶ como bullet
4. **Manifesto** (banda roxa full-bleed) com wordmark gigante de fundo + 4 crenças da agência
5. **Serviços** — 4 frentes com play-mark hover
6. **Método** — 5 fases em tabs interativas com painel sticky e entregas
7. **Cases** — destaque + 2 secundários, com chips de tag
8. **Stats** (banda roxa profunda) — 6 números grandes com glow radial
9. **Time** — 8 membros + breakdown por área
10. **Depoimentos** — carrossel com aspas gigantes e dots
11. **FAQ** — accordion com numeração
12. **CTA** — formulário roxo com chips de verba + perks + contatos
13. **Footer** — banda CTA + endereços (SP + RJ) + 4 colunas + wordmark gigante

**Tweaks** (toolbar) — alternar layout do hero, mostrar/ocultar prova social, e ajustar cor de acento + roxo entre opções pré-selecionadas.

Todas as fotos estão como `<image-slot>` — você pode arrastar imagens reais em cima delas e elas persistem. Placeholders nominais (clientes, time, métricas) seguem o tom da marca: alegre, profissional, sem corporativês.

## User

Verifier agent check completed

## Assistant

_[tool: save_screenshot]_

_[tool: show_html]_

_[tool: sleep]_

_[tool: save_screenshot]_

_[tool: eval_js]_

_[tool: save_screenshot]_

_[tool: multi_screenshot]_

_[tool: eval_js]_

_[tool: eval_js]_

A página está bem montada. Os "overflows" detectados estão contidos pelo `overflow: hidden` das seções — `body.scrollWidth = viewport`, então não há rolagem horizontal real, apenas cards decorativos absolutos clipados nas bordas (o que é o efeito desejado).

Verificando o painel de Tweaks rapidamente:

Tudo funcionando: 13 seções renderizadas, Tweaks panel ativável, sem overflow horizontal no body. A landing institucional está pronta em `site/index.html` — você já está vendo ela. Use o toggle "Tweaks" no toolbar pra alternar layouts do hero (Padrão / Manchete / Wordmark), mostrar/ocultar prova social e trocar cores. Os `<image-slot>` aceitam drag-and-drop pra colocar fotos reais.

## User

consegue utilizar efeitos de hover e animações, para deixar mais atrativo e dinamico? pode ser pontualmente

## Assistant

_[tool: write_file]_

Boa ideia. Vou adicionar animações pontuais — entrada por scroll com IntersectionObserver, contador animado nos stats e hovers mais ricos. Mantendo o tom da marca (sem bounces exagerados).

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: write_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Agora adicionar `data-reveal` nos heads/cards e `data-counter` nos números:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: write_file]_

A IntersectionObserver não está disparando neste contexto. Vou trocar pra checagem manual no scroll, que é mais simples e confiável:

_[tool: show_html]_

_[tool: eval_js]_

_[tool: eval_js]_

Animações funcionando — confirmei: contador animou de +112 → +120 ao entrar na viewport, reveals disparam por scroll. Resumo do que foi adicionado:

**Entrada por scroll** — heads de seção, cards (services, cases, team, faq) e crenças do manifesto fazem fade-up escalonado quando entram na tela.

**Contador animado** — os 6 números da seção Stats sobem de 0 ao valor final (preserva sufixos como "R$", "×", "%").

**Hovers ricos**
- Hero: sticker rotaciona, card de métrica flutua sutilmente, chip de prêmio desliza
- Marquee pausa ao passar o mouse, bullets ▶ escalam em laranja
- Services: barra laranja desliza por baixo, ícone ▶ rotaciona 90° + vira laranja
- Cases: imagem dá zoom 1.05, chip de tag fica laranja, métrica cresce
- Team: foto dá zoom, nome muda pra roxo, chip vira laranja
- Method tabs: traço laranja aparece à esquerda no hover
- FAQ: número fica laranja quando aberto, resposta faz fade
- Stats: hover puxa valor pra cima 2px

**Entrada do hero** — escalonada no load: eyebrow → título → sub → CTAs → prova social → foto → sticker → card métrica → chip prêmio.

Tudo respeita `prefers-reduced-motion`. Sem bounces — easing `cubic-bezier(.22,1,.36,1)` (out-quart) do design system.

## User

botão Carreiras na Nova deve navegar para uma página com lista de postagens de vagas em aberto

## Assistant

_[tool: update_todos]_

Vou criar uma página `carreiras.html` completa e ligar os botões existentes a ela.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: str_replace_edit]_

_[tool: eval_js]_

_[tool: eval_js]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: done]_

Pronto. Criei `site/carreiras.html` — uma página de carreiras completa, ligada a partir de todos os botões "Carreiras" da landing (no Time, no Footer e agora também no menu principal).

**O que tem na página:**
- **Hero** com breadcrumb (Nova Digital / Carreiras), título "Bora fazer parte do time que cresce junto", e um card com 4 stats da agência (08 vagas, 38 pessoas, 94% retenção, 4,8★ Glassdoor)
- **Filtros** — chips por Área (Estratégia, Criativo, Performance, Social) com contador, e por Local (SP, RJ, Remoto). Contador de vagas + botão "limpar filtros"
- **Lista de 8 vagas** em accordion expandível, cada uma com:
  - Área, senioridade, local, tipo (CLT/PJ), faixa salarial, "há X dias"
  - Painel expandido com 3 colunas: descrição da vaga, requisitos, pacote (benefícios)
  - Botão "Candidatar-se" (abre mailto com assunto pré-preenchido) + "Como é o processo" + "Copiar link da vaga"
- **Cultura** — banda roxa com 6 pontos (tudo dentro de casa, profit sharing trimestral, sexta curta, etc.) + bloco de processo seletivo em 4 etapas
- **CTA spontaneous** — formulário pra quem não viu sua vaga (com select de área de interesse)
- **Footer** reusado

**Vagas seedadas:** Diretor de Planejamento, Copywriter Pleno, Designer Sênior, Mídia Programática, Social Media Coordenador, Analista de Dados, Motion Designer, Atendimento Sênior — variadas em senioridade, local (SP/RJ/remoto), tipo de contrato e faixa salarial.

O Nav foi adaptado para funcionar entre páginas — links de seção apontam pra `index.html#...` e tem novo item "Carreiras" no menu principal. Animações de reveal e contadores funcionam aqui também.

## User

Apply comment

## Assistant

_[tool: str_replace_edit]_

Os inputs/textareas do form da página Carreiras não estavam herdando o estilo do form principal. Vou adicionar:

_[tool: done]_

Pronto. Os inputs, textarea e o select da seção "Manda mesmo assim" agora têm o mesmo padrão visual do form de contato — fundo creme, borda fina arredondada, foco com glow laranja, placeholders no tom certo, e a setinha do select alinhada à direita.

