/* global React */
const FAQS = [
  {
    q: 'A Nova é uma agência recente — o que isso significa pra mim?',
    a: 'Significa que você vai falar direto com quem decide e com quem executa, sem camada de intermediário. A fundadora atende, lê os números, escreve o plano. O custo de uma agência grande é diluído em pirâmide; o nosso é direcionado pra aplicar estratégia com excelência no seu projeto.'
  },
  {
    q: 'Quem realmente vai atender a minha conta?',
    a: 'A Letícia, fundadora da Nova, entra na primeira call e segue como ponto direto durante o projeto. Ela coordena estratégia e execução com o time, e é quem responde quando o número pede ajuste. Sem repasse de e-mail, sem "vou checar com o gerente de contas".'
  },
  {
    q: 'Como vocês compensam ter um time pequeno?',
    a: 'Time pequeno é estrutura, não desvantagem — todo mundo na Nova lê o mesmo painel e fala com o mesmo cliente. Para escopo que pede braço extra (produção pesada, peças por volume), trabalhamos com parceiros de confiança, sempre coordenados pela estratégia da casa.'
  },
  {
    q: 'Quanto tempo até ver resultado?',
    a: 'Mídia paga bem feita responde em 30—60 dias. Branding e posicionamento, 90 dias pra começar a virar percepção. Crescimento orgânico, 6—12 meses. A gente fala isso desde o primeiro briefing — não vendemos milagre, vendemos método aplicado.'
  },
  {
    q: 'Como funciona o contrato?',
    a: 'Mensal, com escopo claro e revisão trimestral. Sem fidelidade longa, sem pegadinha. A ideia é que o cliente fique porque o trabalho está rendendo no painel, não porque a cláusula obriga.'
  },
  {
    q: 'Como é a primeira conversa?',
    a: 'Uma call de 30 minutos, sem custo, direto com a Letícia. A gente entende o cenário e diz, ali mesmo, se faz sentido seguir. Se não fizer, te indicamos quem pode ajudar melhor — preferimos cliente certo a cliente cheio.'
  },
];

function FAQ() {
  const [open, setOpen] = React.useState(0);

  return (
    <section id="faq" className="faq" data-screen-label="FAQ">
      <div className="faq__inner">
        <div className="faq__head" data-reveal>
          <span className="eyebrow eyebrow--accent">FAQ</span>
          <h2 className="t-h1">Dúvidas Frequentes<span className="dot">.</span></h2>
          <div className="faq__cta">
            <span>Ainda com dúvida?</span>
            <a href="#contato" className="faq__cta-link">
              Manda pra gente <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <ul className="faq__list">
          {FAQS.map((item, i) => {
            const isOpen = i === open;
            return (
              <li key={i} className={"faq__item " + (isOpen ? 'is-open' : '')} data-reveal style={{'--reveal-delay': (i * 50) + 'ms'}}>
                <button
                  className="faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="faq__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="faq__q-text">{item.q}</span>
                  <span className="faq__plus" aria-hidden="true">
                    <span></span><span></span>
                  </span>
                </button>
                <div className="faq__a-wrap">
                  <p className="faq__a">{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

window.FAQ = FAQ;
