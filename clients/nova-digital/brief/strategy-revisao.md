---
client_slug: nova-digital
run_id: 2026-05-15-section-audit
mode: section-audit
author: bruno-briefing
based_on: brief/briefing.md
revisions:
  - 2026-05-15-v1: auditoria inicial pós-cortes Tier 4
  - 2026-05-15-v2: novo eixo "autoridade via pessoa real" (background de influenciadora da dona) + placeholders aplicados
---

# Strategy — Revisão de seções (agência pequena/recente)

> Auditoria estratégica das seções da LP atual sob a hipótese real de que a Nova Digital é uma **agência recente com time pequeno** — não a agência consolidada implícita no copy ficcional da run original (`2026-05-14-194335`).
> **Atualização v2 (2026-05-15):** novo dado mudou o eixo — a dona da Nova tem background de **influenciadora digital**. Isso reposiciona toda a estratégia: a autoridade não precisa vir de "anos de agência" ou "tamanho de time", vem da **pessoa real** com prova social acumulada (audiência, reputação, parcerias). Ver §7.

## 1. Diagnóstico

A LP atual foi gerada como **base máxima** (cenário "agência grande consolidada"). O copy ficcional reflete isso: 9 anos no mercado, +120 marcas, R$ 38M em mídia, 38 pessoas, 23 prêmios, Top 50 BR 2025, 94% de renovação, faixas de verba até "R$ 50—100k/mês+".

Para uma **agência recente/pequena**, esses números **ativam a objeção principal da persona do briefing original** ("já fui queimado por agência que promete e não entrega"). Promessa inflada + zero prova real = quebra de credibilidade no primeiro fold.

### Awareness + sophistication (Schwartz)
- **Awareness level da persona** (CEO/C-level querendo terceirizar marketing): **problem-aware → solution-aware**. Já sabe que precisa, já considera contratar. Está comparando agências.
- **Market sophistication:** alta (stage 4-5). Já viu mil pitches genéricos.

### Driver psicológico recomendado (v2)
**Autoridade via pessoa real + transparência operacional** (não autoridade-por-escala).
→ Substitui "veja como somos grandes" por "veja quem fundou, o que ela já construiu, e como trabalhamos".

Padrão de referência: **Linear** (especificidade radical, filtro de auto-seleção) + **Basecamp** (manifesto-style, voz própria, anti-corporate) + **creator-as-founder** (Mariana Sampaio, Nathalia Arcuri estilo de "fundadora-cara-da-marca", onde a pessoa É o ativo principal de confiança). Padrão venceu concorrentes mais escalados nos três casos via *voz, identidade e prova-por-pessoa*, não via números agregados.

## 2. Critério de ranking

Cada seção avaliada em 3 dimensões:
- **Papel no funil** — atrai, qualifica, convence, neutraliza objeção, converte?
- **Fit pequena/recente** — funciona com dados reais que uma agência nova consegue mostrar?
- **Risco de ativar objeção** — pode levantar "será que é mesmo assim?" se exagerar?

## 3. Ranking por tier

### 🥇 TIER 1 — Essenciais, manter (com edição)

#### 1. Hero ([Hero.jsx](../src/Hero.jsx))
- **Papel no funil:** Filtro de auto-seleção. 57-64% nunca passam daqui.
- **Fit:** ALTO se editado.
- **Ação:**
  - Cortar prova social inflada: `+120 marcas`, `9 anos`, `4,9★`, `23 prêmios`, `Top 50 BR 2025`, `ROAS médio 5,2× +38%`, sticker "Bora ao vivo".
  - Substituir por **1 micro-prova real e específica** (1 cliente-âncora real, 1 métrica fechada, 1 menção em mídia).
  - Manter 1 CTA primário ("Bora começar") + 1 secundário discreto ("Ver cases" só se Tier 3 ficar).
  - **Layout "manchete" ou "wordmark"** funciona melhor que "padrão" — menos área para promessa inflada, mais espaço para identidade visual.

#### 2. CTABand / Form ([CTABand.jsx](../src/CTABand.jsx))
- **Papel no funil:** Conversão final. Não-negociável — a página inteira existe para este momento.
- **Fit:** ALTO.
- **Ação:**
  - Humanizar atendimento: "Quem responde sou eu, [nome do sócio]" — vira diferencial real de agência pequena.
  - Revisar faixas de verba: `Até R$ 20k`, `R$ 20—50k`, `R$ 50—100k`, `Mais que isso` → ajustar para faixas onde o lead-base atual cabe (ex.: `Até R$ 5k`, `R$ 5—15k`, `R$ 15—40k`, `Acima`).
  - Manter "call de 30min sem custo" — combina perfeito com posicionamento de transparência.

#### 3. Services ([Services.jsx](../src/Services.jsx))
- **Papel no funil:** Qualifica oferta — persona precisa saber o que você faz.
- **Fit:** MÉDIO (no formato atual).
- **Ação:**
  - Cortar de 4 frentes para **2-3 que a Nova realmente entrega com profundidade**.
  - 4 frentes (Estratégia + Criativo + Performance + Social) é cardápio de agência de 38 pessoas.
  - Promessa "tudo dentro de casa" **só vale se for verdade**. Melhor 2 fortes + "parceiros para X, Y" do que 4 medianos.

### 🥈 TIER 2 — Onde agência pequena GANHA contra grande

#### 4. Manifesto ([Manifesto.jsx](../src/Manifesto.jsx))
- **Papel no funil:** Convence por identidade/voz.
- **Por que ganha aqui:** Agência grande escreve por comitê. Pequena tem voz própria (Basecamp/Linear pattern).
- **Ação:** Manter, possivelmente encurtar de 4 para 2-3 crenças. Validar que cada crença tem um *fato* por trás (não promessa). Tom atual está afiado — mexer pouco.

#### 5. FAQ ([FAQ.jsx](../src/FAQ.jsx))
- **Papel no funil:** Neutraliza objeções antes do form.
- **Por que ganha aqui:** Agência nova tem objeções específicas que FAQ honesto vira diferencial.
- **Ação:**
  - Trocar 3 das 6 perguntas atuais por objeções reais da fase atual:
    - "Vocês são uma agência recente — o que isso significa pra mim?"
    - "Quem realmente vai atender minha conta?"
    - "Como vocês compensam ter um time pequeno?"
  - Cortar pergunta "metade dos clientes fora de SP" se ainda não é real.
  - Manter "Quanto tempo até ver resultado?" e "Como funciona o contrato?" — são universais.

#### 6. Testimonials ([Testimonials.jsx](../src/Testimonials.jsx))
- **Papel no funil:** Prova social qualitativa — mais forte que logos.
- **Por que ganha aqui:** 1 depoimento real com nome + cargo + resultado bate qualquer logo wall.
- **Ação:**
  - Manter SE houver 1-3 depoimentos reais com permissão de uso.
  - Se for 1-2, remover o carrossel e mostrar 1-2 cards estáticos.
  - **Se não há nenhum depoimento real: CORTAR a seção inteira.** Vazio é melhor que ficcional — anti-pattern "promessa sem prova".

### 🥉 TIER 3 — Condicional (depende do que existe de verdade)

#### 7. Cases ([Cases.jsx](../src/Cases.jsx))
- **Manter SE:** há 1-3 cases reais com permissão de divulgação **e** uma métrica concreta cada.
- **Cortar SE:** cases ainda são "trabalhos em andamento" ou métricas não estão fechadas.
- **Risco:** sem case real, esta é a **maior fonte de risco da página** — persona compara casos como vetor #1 de decisão.

#### 8. Clients (logos) ([Clients.jsx](../src/Clients.jsx))
- **Manter SE:** há 5+ logos reconhecíveis no público-alvo.
- **Cortar SE:** há <5 ou logos pouco conhecidos.
- **Atenção:** marquee duplicado (12 logos × 2 = 24 itens rolando) **infla artificialmente** — anti-pattern de credibilidade. Se ficar, **trocar por strip estático com 4-6 logos**.

#### 9. Method ([Method.jsx](../src/Method.jsx))
- **Manter SE:** Nova tem um processo real e replicável que já entregou.
- **Cortar SE:** as "5 fases com prazos semana-1-2 / 3-4 / 5-8" são aspiracionais. Cosplay de metodologia de agência grande soa rígido.
- **Alternativa enxuta:** substituir o componente tabbed por 3 etapas em texto curto: "Conversamos → Propomos → Executamos junto".

### ❌ TIER 4 — Cortar na fase atual

#### 10. Stats ([Stats.jsx](../src/Stats.jsx))
- **A seção mais incompatível com agência pequena/recente.**
- 6 números agregados (+120 marcas, R$ 38M mídia, 4,2× ROAS médio, 94% renovação, 23 prêmios, 38 pessoas) mentem ou destroem credibilidade se não forem reais.
- Persona problem-aware compara estes números mentalmente com agências consolidadas. Vai perder.
- **Ação:** Cortar inteiro. Se houver 1-2 números reais valiosos, migrar para o Hero como micro-prova.

#### 11. Team grid de 8 + agregados de 38 ([Team.jsx](../src/Team.jsx))
- A versão atual ("38 pessoas / 9 estrategistas / 14 criativos / 8 mídia / 7 social") **é o oposto da realidade**.
- Time pequeno é **vantagem** (atendimento direto, sem intermediário) — mas o componente atual celebra escala.
- **Ação:** Cortar versão atual e **substituir por seção "Quem você fala" enxuta**: 2-4 cards dos sócios/leads com foto real, nome, função e linha curta ("você fala diretamente comigo"). Vira ativo de conversão, não passivo decorativo.

#### 12. Página Careers ([carreiras.html](../src/carreiras.html) + Careers*.jsx)
- Agência recente sem volume de contratações ativa **não justifica página dedicada**.
- Sinaliza "performaticamente grande".
- **Ação:** Cortar página + remover link do Team/Nav. Quando começar a contratar, basta um "vagas: oi@..." no Footer.

## 4. Estrutura proposta (pós-v2)

Ordem aplicada em código (10 seções de conteúdo):

```
1. Hero          (pendente reescrita — ainda com proof inflado)
2. Clients       (logos placeholder, 7 slots, marquee mantido)
3. Manifesto     (mantido — copy já alinhada)
4. Fundadora     (NOVA — eixo do novo driver, placeholders)
5. Services      (Tráfego pago + Gestão de mídia confirmados; 2 placeholders)
6. Method        (mantido — confirmar/ajustar conteúdo das 5 fases)
7. Cases         (3 cases placeholder, espaço pra +2)
8. Testimonials  (5 quotes placeholder)
9. FAQ           (mantido — pendente reescrita das 3 objeções de agência nova)
10. CTABand      (faixas de verba ajustadas a partir de R$ 1k)
```

Nav e Footer atualizados pra refletir essa estrutura (Fundadora adicionada, Time/Carreiras removidos).

## 5. Quick-wins imediatos

- **Remove 3 seções** (Stats, Team-versão-atual, Careers) → LP fica coerente com o estágio real. Página perde ruído sem perder valor.
- **Edita 2 seções** (Hero, CTABand) → realinha promessa com prova disponível e ajusta faixa de verba.
- **Reescreve 1 seção** (FAQ com objeções reais de agência nova) → vira o ativo mais diferenciado da página.

LP resultante: **6-8 seções**. Cada uma paga seu próprio espaço no funil, nenhuma ativa a objeção principal da persona.

## 6. O que falta para executar (v1 — resolvido)

Respostas confirmadas em 2026-05-15:

| # | Pergunta | Resposta |
|---|---|---|
| 1 | Cases reais? | 3-5 cases disponíveis → seção mantida com 3 slots base |
| 2 | Depoimentos com permissão? | ~5 → seção mantida com 5 slots placeholder |
| 3 | Logos com permissão? | 7 → seção mantida (marquee), 7 slots placeholder |
| 4 | Faixa de verba real? | A partir de R$ 1k → aplicado: 1k / 1—3k / 3—8k / 8k+ |
| 5 | Sócios/leads para foto? | Eixo virou "Fundadora" (background influenciadora) → seção dedicada criada |

## 7. Novo eixo estratégico (v2): autoridade via pessoa real

### A virada
O briefing original (v1) tratava a Nova como "agência pequena tentando não parecer pequena". A virada veio com o dado de que **a dona tem background de influenciadora digital**. Isso muda o jogo:

- A agência **não precisa maquiar tamanho de time** — a autoridade vem antes da agência existir, na pessoa que fundou.
- O ativo de prova social mais forte **já existe**: audiência, reputação, parcerias, conteúdo público.
- Posiciona a Nova fora do mar de "agências pequenas anônimas" e dentro do segmento "**agência fundada por creator**" — categoria com poucos concorrentes e alto sinal de confiança.

### Como isso reescreve cada seção
| Seção | Impacto do novo eixo |
|---|---|
| **Hero** | Substituir prova-de-escala ficcional (+120 marcas / 9 anos / 23 prêmios) por **prova-de-pessoa real** (1 número da fundadora — seguidores, anos criando, ou marcas com quem fez parceria). |
| **Fundadora** (nova) | Seção dedicada — foto, nome, credenciais como creator, 1-2 parágrafos de história, métricas-âncora, link pro perfil principal, frase pessoal. **É a seção de prova mais forte da página.** |
| **Manifesto** | Pode ganhar tom 1ª pessoa ("eu acredito"), já que a marca é uma pessoa. Decidir após receber dados da fundadora. |
| **Services** | Frentes (Tráfego pago + Gestão de mídia) **batem com expertise direta** da fundadora — ela vendeu pra audiência própria. Credibilidade nativa. |
| **Cases** | Podem incluir casos de cliente E casos da própria fundadora (próprio canal). Diferenciação real. |
| **Testimonials** | Pode aceitar prints de DM/comentário em redes (formato creator-economy) além de depoimentos formais — amplia o repertório. |
| **CTABand** | "Falar com [Primeiro nome]" funciona naturalmente. Ela atende direto. |

### Risco a vigiar
Se a fundadora não estiver disposta a aparecer publicamente (foto, nome, link), o eixo desmorona — volta-se ao plano v1 (transparência operacional). Confirmar antes de finalizar copy.

## 8. Placeholders abertos — checklist para preencher

### Conteúdo (texto + dados)
- [ ] **Founder.jsx**: nome da fundadora, plataforma principal, handle, audiência, nicho, 2 parágrafos de bio, 3 métricas, frase pessoal, link do perfil.
- [ ] **Hero.jsx**: substituir 4 proofs inflados (+120 marcas, 9 anos, 4,9★, 23 prêmios), eyebrow "AGÊNCIA · SP · DESDE 2017", card "ROAS 5,2× +38%", sticker "Bora ao vivo", chip "Top 50 BR 2025". **Pendente reescrita completa.**
- [ ] **Clients.jsx**: 7 nomes/logos reais + decidir eyebrow (`CLIENTES` vs `MARCAS PARCEIRAS` — depende se vêm da agência ou do canal da fundadora).
- [ ] **Services.jsx**: confirmar título da frente 02 (Gestão de mídia paga vs. social media), preencher corpos das 2 frentes confirmadas + nomear/descrever frentes 03 e 04.
- [ ] **Method.jsx**: validar/reescrever o conteúdo das 5 fases pro método Nova real (mantém estrutura tabbed).
- [ ] **Cases.jsx**: nome cliente, headline, métrica, frente, body do card grande × 3 (ou até 5).
- [ ] **Testimonials.jsx**: 3-5 depoimentos com nome, cargo, empresa, texto.
- [ ] **FAQ.jsx**: trocar 3 perguntas atuais por: "Vocês são uma agência recente — o que isso significa pra mim?" / "Quem realmente vai atender minha conta?" / "Como vocês compensam ter um time pequeno?".
- [ ] **Footer.jsx**: endereço(s) reais ou cortar bloco; CNPJ real; cortar links "Imprensa", "Manifesto" anchor extra se não fizer sentido.

### Visual / assets
- [ ] Foto real da fundadora (substituir image-slot em Founder.jsx).
- [ ] Foto pro Hero (substituir image-slot do hero-photo).
- [ ] Imagens dos cases (image-slots case-1-img, case-2-img, case-3-img).
- [ ] Avatares dos clientes que dão depoimento (image-slots quote-0, quote-1, etc.).
- [ ] Logo da Nova (substituir `assets/logo-secondary-dark.png` e `assets/logo-secondary.png`).
- [ ] Logos reais dos 7 clientes (Clients hoje renderiza texto, pode virar `<img>` quando tiver SVG/PNG).
