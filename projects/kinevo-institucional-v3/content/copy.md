# Kinevo — Site Institucional v3 — Copy Final

> Estrutura: jornada de consciência (PAS + prova), definida em 2026-07-23 a pedido do Patrick.
> Problema (hero) → Agitação (custo) → Solução macro (tela real) → Soluções específicas (4 telas) → Processo → FAQ → Quem somos → CTA.
> Awareness: Problem Aware. Driver dominante: controle (enxergar a carteira). Mecanismo único: conecta os portais que a corretora já usa, sem trocar de sistema.

## Meta
- **Title:** Kinevo — dados de todas as suas seguradoras numa base só
- **Description:** A Kinevo reúne as apólices de todas as seguradoras que sua corretora opera numa base só, para você saber o que vence, o que renova e onde está a margem.

## Hero (consciência do problema)
- **Eyebrow:** Para corretoras de seguro
- **H1:** Cada seguradora tem seu portal. E nenhum deles conversa com o outro.
- **Lead:** A visão da sua carteira depende de alguém baixar relatório portal por portal e colar tudo numa planilha que nasce desatualizada.
- **CTA primário:** Ver como resolvemos (âncora #solucao)
- **CTA secundário:** Falar com a Kinevo (WhatsApp — número pendente)
- **Nota de confiança:** Escopo fechado: preço e prazo definidos antes de começar.
- **Visual:** caos real (XLS/CSV/PDF → planilha_carteira_v7_FINAL.xlsx, pill "2 dias de trabalho").

## O que isso custa (agitação)
- **H2:** Enquanto a carteira vive em planilha, a conta chega em três lugares.
1. **Renovação passa em branco** — Sem aviso antecipado, o vencimento aparece quando outro corretor já ligou para o seu cliente.
2. **Comissão paga a menor** — Sem conferência mensal contra o que era devido, diferença de repasse fica meses sem ninguém notar.
3. **Dois dias de trabalho manual** — O administrativo refaz a mesma planilha toda semana, e ela já nasce velha.

## A solução (consciência da solução)
- **H2:** Existe outro jeito: todas as suas seguradoras numa base só.
- **Lead:** A Kinevo conecta os portais que a corretora já usa e devolve uma base única, sincronizada todos os dias. Sem trocar de sistema de gestão.
- **Visual:** tela real do sistema (visão geral) em frame de navegador, com convergência animada, barra de sincronização e toasts.

## O que muda (soluções específicas — telas reais)
- **H2:** Com a carteira inteira numa base só, o dia a dia muda de figura.
1. **Você para de perder renovação** — O produtor responsável recebe o aviso de vencimento com 90, 60 e 30 dias de antecedência. *(tela-renovacoes)*
2. **Você enxerga o cross-sell** — Mostramos quais clientes têm auto há anos e nunca receberam uma proposta de vida. *(tela-cobertura)*
3. **Você confere comissão sem esforço** — Comparamos o que cada seguradora pagou com o que era devido e apontamos a diferença. *(tela-comissoes)*
4. **Você tira tarefa manual da equipe** — Automatizamos rotinas previsíveis como cadastro de cliente, emissão e follow-up de cotação. *(tela-automacoes)*

## Como trabalhamos
- **H2:** Três etapas, sem surpresa no meio do caminho.
1. **Diagnóstico** — Mapeamos com você quais seguradoras a corretora opera e onde a informação trava hoje.
2. **Proposta fechada** — Você aprova escopo, prazo e preço antes de qualquer linha de código.
3. **Entrega** — Colocamos no ar, treinamos sua equipe e acompanhamos as primeiras semanas.

## FAQ
- **H2:** O que toda corretora pergunta antes de fechar.
- **Vocês vão pedir meu login das seguradoras?** — Precisamos de acesso aos portais para ler os dados. Sempre que a seguradora permite, usamos um usuário próprio com perfil somente de leitura. As credenciais ficam em cofre criptografado e você revoga o acesso quando quiser.
- **Preciso trocar meu sistema de gestão?** — Não. Trabalhamos com o que a corretora já usa. Se o sistema aceita importação ou tem API, devolvemos os dados lá dentro. Se não aceita, entregamos num painel à parte.
- **E se a seguradora mudar o portal depois?** — Acontece com frequência. Por isso todo projeto inclui um período de acompanhamento, e oferecemos manutenção mensal opcional para ajustar a coleta sempre que um portal muda.

## Quem somos
- **H2:** Gente de software que resolveu olhar para seguros.
- Sócio 1 (nome pendente) — Cuida da integração com os portais das seguradoras.
- Sócio 2 (nome pendente) — Conduz o diagnóstico e o desenho do processo.
- A Kinevo é uma empresa de software e automação focada em corretoras de seguro. Trabalhamos com projetos de escopo fechado, com preço e prazo definidos antes de começar.

## Contato (CTA final)
- **H2:** Conte como sua corretora consolida os dados hoje.
- A gente devolve um diagnóstico do que dá para automatizar primeiro.
- CTAs: Falar com a Kinevo (WhatsApp) · Agendar conversa (mailto)

## Footer
- contato@kinevo.com.br · LinkedIn (URL pendente) · CNPJ 00.000.000/0001-00 (pendente)

## Nota sobre as telas do sistema
As telas em `src/assets/tela-*.webp` são renderizações do mock `mockup/app-mock.html`
(mesmos tokens visuais do site). Dados ilustrativos e coerentes entre si (devido
R$ 48.230 = soma por seguradora; diferença R$ 2.360 = Meridional 1.220 + Horizonte RE 1.140).
Seguradoras fictícias (Atlântica, Meridional, Cruzeiro Vida, Horizonte RE, Pilar) para não
implicar parceria com marcas reais. Para alterar uma tela: editar o mock e recapturar.

## Pendências
- [ ] Número de WhatsApp real (`55SEUNUMERO` em 2 lugares)
- [ ] Nomes dos sócios
- [ ] URL do LinkedIn
- [ ] CNPJ real
- [ ] Decisão: hero claro (padrão) vs. escuro (`hero-dark` no `<html>`)
