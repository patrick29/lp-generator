/* global React */
const FAQS = [
  {
    q: 'Vocês trabalham com qual tamanho de marca?',
    a: 'A gente tem cliente de bairro com R$ 500 mil de faturamento e marca nacional com R$ 200 milhões. O que importa é o time querer crescer e ter clareza sobre o que está vendendo. A gente desenha o escopo conforme o tamanho do desafio.'
  },
  {
    q: 'Quanto tempo até ver resultado?',
    a: 'Mídia paga bem feita responde em 30—60 dias. Branding e posicionamento, 90 dias pra começar a virar percepção. Crescimento orgânico, 6—12 meses. A gente fala isso desde o primeiro briefing — não vendemos milagre.'
  },
  {
    q: 'Como funciona o contrato?',
    a: 'Mensal, com escopo claro e renovação trimestral. Sem fidelidade longa, sem pegadinha. A maioria dos clientes fica conosco mais de 24 meses — não porque tem que ficar, mas porque o time virou time.'
  },
  {
    q: 'Vocês cuidam de mídia paga ou só criativo?',
    a: 'Os dois — e estratégia, e social, e CRO. Tudo no mesmo time. A gente acredita que separar criativo de mídia é o que faz campanha não funcionar.'
  },
  {
    q: 'Atendem fora de São Paulo?',
    a: 'Sim. Metade dos clientes está em outros estados. O atendimento é híbrido, com visita presencial nos marcos do projeto e tudo online no dia a dia.'
  },
  {
    q: 'Como é a primeira conversa?',
    a: 'Uma call de 30 minutos, sem custo, com a Marina ou o Rafael. A gente entende o cenário e diz, ali mesmo, se faz sentido seguir. Se não fizer, te indicamos quem pode ajudar melhor.'
  },
];

function FAQ() {
  const [open, setOpen] = React.useState(0);

  return (
    <section id="faq" className="faq" data-screen-label="FAQ">
      <div className="faq__inner">
        <div className="faq__head" data-reveal>
          <span className="eyebrow eyebrow--accent">DÚVIDAS HONESTAS</span>
          <h2 className="t-h1">Antes da gente<br/>conversar<span className="dot">.</span></h2>
          <p>As perguntas que clientes novos sempre fazem na primeira call. Respondidas aqui pra economizar o seu tempo.</p>
          <div className="faq__cta">
            <span>Não encontrou?</span>
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
