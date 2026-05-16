# Anti-Patterns — LP Generator

> Erros mais comuns na produção de LP, organizados por disciplina. Compilação dos `never_do` + `always_do` de todos os agentes do squad. Use como checklist negativo: se uma destas armadilhas aparecer, refaça.

---

## Estratégia (Bruno Briefing)

### Never Do
1. **Escolher stack pesada sem necessidade.** Usar Next.js quando HTML+Tailwind resolve adiciona complexidade, build time e prejudica perf sem ganho. Sempre justificar a stack pelas features reais da LP.
2. **Pular o diagnóstico de awareness.** Escrever copy sem saber se o público é problem-aware ou product-aware gera promessas inflacionadas (ou tímidas demais). Causa #1 de LP que não converte.
3. **Aceitar briefing ambíguo.** Começar a planejar sem clareza de público e oferta gera retrabalho em todas as etapas seguintes. Listar perguntas e segurar o pipeline é mais barato que refazer.
4. **Copiar estrutura de referência cega.** Usar a mesma sequência de seções do concorrente porque ele converte ignora que awareness e sophistication podem ser diferentes.

### Always Do
1. **Documentar a decisão de stack com 1 frase de motivo** — facilita debate e ensina o squad.
2. **Listar 1 driver psicológico DOMINANTE** — não 3 misturados. Driver único alinha hook → corpo → CTA.
3. **Mapear cada seção a um objetivo específico no funil** — nenhuma seção decorativa sobrevive.

---

## Copy (Carla Copy)

### Never Do
1. **Escrever o corpo antes de confirmar o hook.** O hook é a âncora — corpo escrito antes força hook a se adaptar ao corpo, não o oposto.
2. **Usar superlativos vazios** ("incrível", "melhor", "amazing"). Em LP, isto é ruído. Substituir por número específico, fonte de prova ou comparação concreta.
3. **Inflacionar a promessa em audiência problem-aware.** Prometer "mudar sua vida" para quem ainda nem confiou no mecanismo destrói credibilidade.
4. **Empilhar CTAs concorrentes.** Hero não pode ter 3 botões disputando ("Demo", "Pricing", "Trial"). 1 primário, no máximo 1 secundário visualmente menor.
5. **Meta description genérica gerada pelo título.** Perde a chance de copy persuasiva no SERP.
6. **Usar em-dashes (travessões longos).** Regra do copywriting.md: ritmo literário, não conversacional.

### Always Do
1. **Apresentar 3 hooks com drivers diferentes ANTES de escrever o corpo.**
2. **Injetar neutralizador de objeção imediatamente antes do CTA primário.**
3. **Especificidade:** trocar "aumenta produtividade" por "34% mais conversão em 60 dias".
4. **Acentos completos em pt-BR** (ã, ç, é) — sinal de qualidade ao leitor nativo.

---

## Visual (Diana Design)

### Never Do
1. **Default genérico azul corporativo + branco sem input.** Cada LP precisa de identidade própria; default cego sinaliza preguiça.
2. **Mais de 5 cores no sistema.** Cria ruído. Variações vêm de tints/shades das 5 base.
3. **Texto sobre foto sem overlay/blur.** Falha contraste WCAG AA quase sempre.
4. **Imagens stock genéricas** (handshake corporate, equipe sorrindo). Destrói credibilidade. Preferir ilustração custom ou foto real do produto/cliente.
5. **Tap target < 48px no CTA mobile.** Regra de UX touch — perde clique.

### Always Do
1. **Documentar paleta + tipografia + spacing ANTES de gerar a primeira imagem.**
2. **Validar contraste WCAG AA em cada par cor texto/fundo.**
3. **Confirmar direção visual com 2-3 opções concretas referenciadas** (não "moderno" ou "limpo").

---

## Código (Davi Dev)

### Never Do
1. **Tailwind via CDN em produção Next.js/Astro.** CDN é só para HTML single-file. Em projeto, instalar Tailwind como dep gera CSS purged menor.
2. **Inline base64 de imagem grande no HTML.** Infla o documento, mata LCP. Imagens sempre como arquivos com width/height.
3. **JS no client sem necessidade.** `use client` em Next.js só quando há state/event.
4. **Esquecer canonical, OG, alt text.** SEO técnico básico que sempre fica de fora em LP feita às pressas.
5. **Tap target < 48px ou texto < 16px no mobile.** Falha de UX touch + acessibilidade.

### Always Do
1. **Mobile-first:** começar CSS no menor breakpoint, escalar para cima.
2. **Width/height explícitos em toda `<img>`** (evita CLS).
3. **H1 único na hero**, hierarquia semântica até H3 max.
4. **README curto** explicando stack + dev + build + sugestão de deploy.

---

## Revisão (Rita Revisao)

### Never Do
1. **Aprovar sem rodar Lighthouse.** Opinião visual não substitui métrica objetiva.
2. **Pontuar sem citar passagem/arquivo.** "6/10 porque está fraco" é inútil. Sempre apontar arquivo + linha/seção.
3. **Inflar score para evitar conflito.** Aprovar 5/10 como 7/10 manda LP ruim para fora e mina a confiança no squad.
4. **Rejeitar sem fix concreto.** "Tom está errado" sem mostrar exemplo de correção não ajuda o autor.
5. **Mandar tudo de volta para a Carla quando o problema é técnico.** Rotear errado custa um ciclo inteiro.

### Always Do
1. **Rodar Lighthouse** (ou pelo menos relatar que rodou e os números) antes de pontuar Código.
2. **Cada required change diz:** o que, onde, como, e qual step volta no on_reject.
3. **Citar pelo menos 1 Strength**, mesmo em REJECT.

---

## Anti-patterns transversais (válidos para todo o squad)

- **Decoração sem objetivo:** qualquer seção, imagem ou copy que não responda "qual papel cumpre no funil?" é descartável.
- **Stack pesada para problema leve:** mais código = mais perf-debt e mais bugs.
- **Promessa sem prova:** todo claim significativo exige número, fonte ou social proof imediato.
- **Tom inferido em silêncio:** se o briefing está ambíguo sobre tom, perguntar (Carla) ou apresentar referências (Diana). Nunca chutar.
- **Pular a regra do 1 CTA dominante:** independente de framework, 1 ação principal na LP.
