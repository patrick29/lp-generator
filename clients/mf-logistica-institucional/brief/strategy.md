# Strategy — MF Logística (LP Institucional)

## Diagnóstico

- **Awareness:** Solution Aware. O embarcador/indústria já sabe que precisa de transporte rodoviário de carga seca e conhece a categoria (transportadoras). O que ele NÃO conhece é a MF especificamente. A decisão dele não é "preciso de frete?", é "em qual transportadora eu confio minha carga no eixo SP↔Norte?".
- **Sophistication:** Stage 4. Mercado de transporte rodoviário é maduro e saturado de promessas iguais ("entrega rápida", "frota moderna", "rastreamento"). Promessa direta já não fura — exige mecanismo único e prova. O público tem belief fatigue com transportadora que promete e falha (atraso, avaria, carga sem visibilidade).
- **Rationale:** Como o público já é solution-aware e cético (stage 4), a LP não precisa educar sobre "por que contratar transportadora". Precisa **diferenciar e provar**. O eixo da decisão é confiança/risco, não preço ou novidade. Por isso a prova (14 anos, +16 mil entregas, frota própria, seguro total) é a alavanca central, não a promessa.

## Referências analisadas

- **https://www.mfnlogistica.com.br/** (site atual da própria MF):
  - **Estrutura:** institucional clássico — apresentação, serviços (transporte carga seca, cotação, coleta, rastreio, distribuição), diferenciais, cobertura, contato.
  - **Tom:** profissional, confiável, direto, centrado em segurança.
  - **Paleta:** azul + laranja (confirmado pelo Patrick: #005CB2 / #FF5A21).
  - **Social proof presente:** "14 anos", "+16 mil entregas no último ano", "frota própria", "seguro total", cobertura SP→PA (48+ municípios).
  - **CTA do site atual:** difuso (contato genérico). **Oportunidade da nova LP:** converter esse tráfego difuso em um CTA único e forte — solicitar cotação.
  - **O que aproveitar:** os números e o slogan de segurança são ativos fortes. **O que NÃO copiar:** a dispersão de CTA e o tom puramente expositivo sem gancho de conversão.

## Big Idea

- **Inimigo/crença:** "Frete pro Norte é sinônimo de carga que atrasa, some no caminho ou chega avariada — e quando você liga pra cobrar, ninguém sabe onde ela está." O inimigo concreto é a transportadora que terceiriza a frota e perde o controle (e a visibilidade) da carga no longo trajeto SP→PA.
- **Mecanismo único:** **Controle de ponta a ponta por frota 100% própria** — equipada com rastreamento e comunicação digital, com seguro total (avarias e perdas) e especialização no corredor SP↔Norte/PA. Não é frete terceirizado: é operação própria, vigiada e segurada do embarque à entrega.
- **Promessa:** Sua carga seca chega na data combinada, do jeito que saiu — com rastreio e seguro total, no eixo SP ↔ Norte.
- **Driver dominante:** **SEGURANÇA** (mitigação do medo de perda — perder a carga, perder o prazo, perder a visibilidade). Único. Alinhado 1:1 ao slogan da marca ("levando segurança em tudo que faz"). Hook, corpo e CTA giram todos em torno de proteção + previsibilidade da carga.
- **Teste anti-commodity:** um concorrente genérico escreveria "transporte rápido e eficiente para todo o Brasil". A MF escreve sobre **controle e segurança da carga via frota própria no corredor SP↔Norte específico**, lastreado por 14 anos + 16 mil entregas + seguro total. Passa no teste.

## Stack

- **Escolhida:** HTML + CSS + JS estático (vanilla), estrutura `index.html` + `styles.css` + `script.js` em `src/`. Sem build, sem framework.
- **Motivo:** 1 página institucional com um form de cotação e microinterações leves. Não há auth, CMS, conteúdo dinâmico nem A/B. Stack estática entrega o melhor LCP e é coerente com o padrão dos clientes anteriores do squad (nova-digital, kinevo).
- **Features que justificam:** página única; form de cotação com validação client-side e envio para endpoint configurável (Apps Script / WhatsApp deep-link como fallback, padrão já usado em nova-digital); scroll-reveal; cores de marca via CSS custom properties. Nada disso exige React/Next/Astro.
- **NÃO usar:** Next.js/Astro (over-engineering para 1 página estática — vide anti-patterns). Tailwind CDN é dispensável aqui: CSS próprio dá controle total sobre o par azul/laranja da marca.

## Framework

- **Escolhido:** 4Ps (Promise → Picture → Proof → Push).
- **Motivo:** público Solution Aware + sophistication 4 cuja decisão é "em quem confiar". O gargalo da conversão é **prova**, e 4Ps centra o corpo da página exatamente em Proof (números, frota própria, seguro, cobertura, 14 anos) — o ativo mais forte da MF. A "Picture" (uma seção curta agitando a dor do frete pro Norte, ao estilo PAS) cria message match com a ansiedade real do embarcador antes de entregar a solução.

## Arquitetura de Seções (revisada — ajuste do Patrick, step 03)

> **Ajuste pedido pelo Patrick:** adicionar (1) Clientes/Segmentos, (2) Galeria da frota, (3) FAQ — e ao mesmo tempo **enxugar** a página. Resolução: as 3 seções novas entram, mas seções redundantes foram **fundidas** para a LP não inchar:
> - "O problema" + "Diferenciais" → **1 seção** ("Por que a MF").
> - "Serviços" + "Como funciona" → **1 seção** ("O que fazemos + como funciona").
> - "Sobre / credibilidade" → **absorvida** pela barra de números + hero (sem seção isolada).
> Resultado: página mais escaneável, cada bloco compacto, sem perder prova.

CTA Intensity: 0 (nenhum) → 5 (CTA primário forte). **1 CTA dominante em toda a página: "Solicitar cotação"** (form). CTA secundário único: WhatsApp.

| # | Seção | Objetivo no funil | Social Proof | CTA Intensity |
|---|-------|-------------------|--------------|---------------|
| 1 | Hero + Form de cotação | Promise. Prender, comunicar segurança/data certa e capturar o lead acima da dobra | "14 anos · +16 mil entregas/ano · 100% nacional" | 5 |
| 2 | Barra de números (trust strip) | Prova imediata e quantificada; absorve o "Sobre" (14 anos, 100% nacional) | 14 anos · +16 mil entregas · frota própria · seguro total · 48+ municípios | 1 |
| 3 | Por que a MF (problema + diferenciais) | Picture+Proof. Agita a dor (atraso/avaria/carga sem rastreio) e responde com o mecanismo: frota própria, seguro total, data certa, especialização SP↔Norte | frota própria, seguro total, rastreio | 2 |
| 4 | O que fazemos + como funciona | Escopo (transporte carga seca, gestão integrada, coleta, rastreio, distribuição) + 4 passos compactos (Cotação → Coleta → Rastreamento → Entrega) | — | 1 |
| 5 | **Galeria da frota** *(nova)* | Prova visual do mecanismo "frota 100% própria". Reforça controle/segurança | frota própria equipada | 1 |
| 6 | Cobertura (eixo SP↔PA) | Prova de capilaridade e relevância geográfica | matriz Castanhal/PA + filial SP, 48+ municípios | 1 |
| 7 | **Segmentos que confiam na MF** *(nova)* | Prova social por segmento (não inventar clientes). Cards de segmentos + faixa de logos plugável | indústria, varejo, distribuição, agro; slot p/ logos reais | 1 |
| 8 | **FAQ** *(nova)* | Neutralizar objeções residuais (tipos de carga, regiões, seguro, prazo, cotação) | — | 1 |
| 9 | CTA final + Form | Push. Repetir a cotação com neutralizador de objeção | — | 5 |
| 10 | Footer / contato | Fechamento: matriz PA, filial SP, WhatsApp, emails, endereços | — | 2 |

Nenhuma seção é decorativa — cada uma tem papel de funil declarado. A página tem 8 blocos de conteúdo (3–8) + hero + CTA final + footer, mais escaneável que a versão anterior apesar das 3 adições.

### Integridade de prova social (regra dura)

- **NÃO inventar nomes/logos de clientes reais.** A seção 7 usa **segmentos atendidos** (indústria, varejo, distribuição, agro) como prova, com um slot de "logos de clientes" que o Patrick preenche com marcas reais quando fornecer. Até lá, exibir apenas os segmentos + um aviso interno (comentário no HTML) de onde plugar logos.
- **Galeria da frota:** usar fotos reais dos caminhões da MF quando o Patrick fornecer; na ausência, imagens de caminhão/carga geradas ou genéricas de veículo (nunca stock de "equipe sorrindo"/"aperto de mão"). Diana documenta a origem de cada asset.

## Para Carla (Copy)

- **Tom:** Autoridade-confiança (variante de **Autoridade-prática** aplicada a logística B2B). Frases curtas, dado primeiro, segurança como fio condutor. Sério, sólido, sem hype. Sem superlativo vazio ("o melhor", "incrível"). **Sem em-dash (travessão longo).** Acentos completos pt-BR.
- **Driver único:** segurança (proteção da carga + previsibilidade da entrega + visibilidade/rastreio).
- **3 hooks A/B/C com ângulos distintos do MESMO driver:** (A) proteção da carga / seguro total; (B) previsibilidade / entrega na data combinada; (C) controle via frota própria ("não terceirizamos sua carga").
- **Números obrigatórios (usar com especificidade):** 14 anos, +16 mil entregas no último ano, 48+ municípios atendidos, frota própria, seguro total, eixo SP↔Norte (PA), empresa 100% nacional.
- **RESTRIÇÃO CRÍTICA (memory):** **nunca prometer um comportamento operacional não garantido.** Não cravar prazo numérico de entrega ("entrega em 3 dias") — usar **"entrega na data combinada / data certa"**. A promessa é de segurança e previsibilidade do método, não de um SLA específico que não temos confirmado.
- **Neutralizador de objeção antes do CTA primário:** cotação sem compromisso + retorno rápido do time comercial (sem cravar tempo que não temos garantido — usar "nossa equipe retorna o quanto antes" ou similar, não "em X minutos").
- **CTA primário (texto):** "Solicitar cotação" / "Solicite sua cotação". Comprometimento médio. **Nunca "Saiba mais" ou "Enviar".** CTA secundário: "Falar no WhatsApp".
- **FAQ (seção 8):** escrever 5–6 pares pergunta/resposta que neutralizam objeção real do embarcador. Sugestões: "Quais tipos de carga vocês transportam?" (carga seca), "Quais regiões vocês atendem?" (eixo SP↔Norte, 48+ municípios, matriz PA + filial SP), "Como acompanho minha carga?" (rastreio + comunicação digital), "A carga é segurada?" (seguro total contra avarias e perdas), "Como funciona a cotação?" (preencher form → equipe retorna), "Vocês têm frota própria?" (sim, 100% própria equipada). Respostas curtas, factuais, sem prometer prazo numérico não garantido.
- **Segmentos (seção 7):** microcopy de headline + 1 linha por segmento (indústria, varejo, distribuição, agro). Sem citar nomes de clientes que não temos.
- **Meta/SEO copy:** title + meta description persuasivos com keyword "transporte rodoviário de carga seca" + "SP / Norte / Pará".

## Para Diana (Visual)

- **Paleta (máx 5):**
  - Azul `#005CB2` — primária, institucional, confiança. Base de headers/seções de marca.
  - Laranja `#FF5A21` — accent de ação: CTAs, destaques numéricos, ícones-chave. Usar com parcimônia (energia/movimento).
  - Azul-escuro derivado (navy ~`#003D78`) — seções de contraste e footer.
  - Neutros: branco `#FFFFFF` + cinza-claro (`#F4F6F9`) para fundos; cinza-texto (`#1F2937`/`slate`) para corpo.
- **Tipografia:** sans-serif robusta e geométrica, alta legibilidade B2B (ex.: Inter, Manrope ou Montserrat). Headlines bold/extrabold. Corpo >= 16px mobile.
- **Direção visual (NÃO "moderno" genérico):** sólido + movimento + logística. Hero com **caminhão na rodovia / carga / estrada** (foto real ou ilustração com tratamento de marca) — **nunca** stock de aperto de mão ou equipe sorrindo. Considerar overlay azul para contraste WCAG AA sobre foto.
- **Iconografia:** escudo (seguro/segurança), pino de rastreio/GPS, caminhão, mapa/rota, relógio (data certa). Linha consistente.
- **Seção cobertura:** mapa do Brasil destacando o eixo SP→PA (rota), com pinos em Castanhal/PA (matriz) e São Paulo (filial).
- **Galeria da frota (seção 5):** grid de 3–6 imagens de caminhão/carga (foto real da MF quando houver; senão imagem gerada/genérica de veículo de carga com tratamento de marca). Legenda curta reforçando "frota própria equipada com rastreio". Documentar origem de cada asset. **Nunca** stock de aperto de mão/equipe sorrindo.
- **Segmentos (seção 7):** 4 cards de segmento com ícone (indústria, varejo, distribuição, agro) + faixa horizontal de slots de logo em cinza ("sua marca aqui" / placeholder) com comentário no HTML indicando onde plugar logos reais. Não desenhar logos falsos.
- **Contraste:** validar WCAG AA em cada par. Atenção ao laranja `#FF5A21` + texto branco em botões (contraste limítrofe) — usar texto branco bold em tamanho >= 18px ou avaliar texto azul-escuro sobre o laranja; Diana valida e documenta.
- **Tap target CTA >= 48px.**

## Para Davi (Código)

- **Stack:** HTML + CSS + JS estático em `clients/mf-logistica-institucional/src/` (`index.html`, `styles.css`, `script.js`). Sem build.
- **Mobile-first.** Breakpoints: 390 / 768 / 1024. CTA primário visível em 375px sem scroll.
- **Cores de marca como CSS custom properties:** `--blue:#005CB2; --orange:#FF5A21; --navy:#003D78;` etc.
- **Form de cotação (lead — CTA primário):** campos = origem (cidade/UF), destino (cidade/UF), tipo de carga, peso/volume aprox., nome, empresa, email, telefone. Validação client-side (campos obrigatórios + email/telefone). **Submit:** endpoint configurável no topo do `script.js` (constante `FORM_ENDPOINT`) com fallback para WhatsApp deep-link (padrão nova-digital). Mensagem de sucesso/erro inline. Two-step framing leve ("Passo 1: preencha · Passo 2: receba sua cotação").
- **SEO técnico:** `<title>`, meta description, canonical, OG tags (incl. og:image), JSON-LD `Organization`/`LocalBusiness` (com matriz Castanhal/PA + filial SP, telefones, emails). `alt` em todas as imagens. H1 único na hero.
- **Performance:** `width`/`height` explícitos em toda `<img>`, lazy-load abaixo da dobra, sem base64 inline pesado. LCP < 2.5s, CLS < 0.1.
- **Acessibilidade:** WCAG AA, `<legend>` em fieldset de chips (padrão do squad), labels associados aos inputs, foco visível.
- **Contatos no footer:** Matriz (PA) +55 91 3711-1503 · mf@mf.log.br · Filial (SP) +55 11 3843-1048 · filial.sp@mf.log.br · WhatsApp +55 91 99211-1003.
