# Kinevo — Decision Log de Copy

Cliente: Kinevo (software e automação para corretoras de seguro).
Este log persiste entre projetos/versões. A skill copy-lp lê este arquivo ANTES de escrever.

## Fundamentos (vigentes)

- **Awareness do público:** Problem Aware. A corretora vive a dor (portais isolados, planilha manual), mas não sabe que existe solução consolidada acessível ao porte dela. A página educa da dor para a solução.
- **Sophistication:** mercado saturado de "sistema de gestão para corretora". Não vender categoria; vender **mecanismo único**: conecta os portais que a corretora já usa e devolve uma base única, **sem trocar de sistema de gestão**.
- **Big idea / inimigo:** a planilha manual (`planilha_carteira_v7_FINAL.xlsx`) e os portais que não conversam.
- **Driver dominante:** controle (enxergar a carteira inteira para não deixar renovação e comissão escaparem).
- **Tom:** autoridade prática B2B. Frases curtas, dado primeiro, zero hype.

## Log de decisões

### 2026-07-23 — Estrutura da página: jornada de consciência (PAS + prova)
- **Decisão:** Patrick definiu que o site conduz uma jornada de expansão de consciência: primeiro consciência do problema, depois das soluções, e só no fim o CTA. Ordem: Hero problem-first → "O que isso custa" (agitação em 3 custos) → "A solução" (base única, tela real) → "O que muda" (4 soluções com telas) → Como trabalhamos → FAQ → Quem somos → Contato.
- **Por quê:** pedido explícito do Patrick em 2026-07-23.
- **Aplicar:** toda revisão futura da LP mantém essa ordem narrativa. Hero nunca abre com a promessa; abre com o problema reconhecível. CTA de contato permanece acessível no header, mas o CTA primário do hero conduz a jornada ("Ver como resolvemos").

### 2026-07-23 — Prova visual: telas reais do sistema, não ilustrações
- **Decisão:** as soluções são provadas com telas de sistema real (mock HTML com os tokens da marca, capturado como imagem: visão geral, renovações, cross-sell, comissões, automações). Patrick rejeitou ilustrações wireframe e mini-UIs ilustrativas; quer "telas que representam um sistema real já implementado entregando a promessa", mantendo o padrão visual do site.
- **Por quê:** wireframes pareciam site inacabado; o visitante precisa ver o software funcionando.
- **Aplicar:** nova seção de solução = nova tela no mock (`projects/kinevo-institucional-v3/mockup/app-mock.html`) recapturada. Nunca voltar a diagramas esqueléticos.

### 2026-07-23 — Números de prova ilustrativos e coerentes (não confirmados como reais)
- **Decisão:** as telas usam dados ilustrativos internamente consistentes: 312 apólices, R$ 1,84 mi de carteira, devido R$ 48.230 vs pago R$ 45.870 (diferença R$ 2.360 = Meridional 1.220 + Horizonte RE 1.140), 47 apólices por sincronização, 12 oportunidades de vida. Seguradoras fictícias: Atlântica, Meridional, Cruzeiro Vida, Horizonte RE, Pilar.
- **Por quê:** ainda não há números reais de cliente confirmados; nomes reais de seguradoras implicariam parceria.
- **Aplicar:** se surgir número real confirmado, substituir no mock e registrar aqui. Não usar marcas reais de seguradoras sem autorização.

### 2026-07-23 — Headline do hero (proposta, aguardando validação do Patrick)
- **Decisão:** H1 "Cada seguradora tem seu portal. E nenhum deles conversa com o outro." (promovida da antiga seção problema). Promessa "Reunimos as apólices... numa base só" desceu para a seção solução como H2 "Existe outro jeito: todas as suas seguradoras numa base só."
- **Por quê:** hero problem-first exige headline de reconhecimento imediato da dor.
- **Aplicar:** validar com Patrick; se rejeitar, registrar a vencedora aqui.

### 2026-07-23 — Claims operacionais permitidos
- **Decisão:** manter apenas claims já aprovados no wireframe: avisos 90/60/30 dias, escopo fechado com preço e prazo antes de começar, acompanhamento pós-entrega, credenciais em cofre com perfil somente leitura. Agitação usa cenários plausíveis sem prometer comportamento ("outro corretor já ligou" descreve o risco, não um serviço).
- **Por quê:** princípio "nunca prometer o que não é operacionalmente real".
- **Aplicar:** qualquer claim novo de operação (tempo de resposta, SLA, garantia) só entra com confirmação do Patrick.
