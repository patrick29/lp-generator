/* global React */
const QUOTES = [
  {
    body: 'A Nova não é fornecedor — é parte do meu time de marketing. Em um ano a marca cresceu mais do que nos quatro anteriores juntos.',
    name: 'Lia Ferraz',
    role: 'CEO · Padaria Boa Vista'
  },
  {
    body: 'Eu vinha trocando de agência todo ano. Com a Nova a gente fechou o terceiro contrato. Eles entendem o negócio antes de pensar em campanha.',
    name: 'Renato Yoshida',
    role: 'Sócio · Studio Frame'
  },
  {
    body: 'Estratégia, criativo e mídia conversando de verdade. É raro. Aqui não tem aquele "passa o briefing" entre departamentos — é tudo no mesmo time.',
    name: 'Carolina Bastos',
    role: 'CMO · Vida Verde'
  }
];

function Testimonials() {
  const [i, setI] = React.useState(0);
  const q = QUOTES[i];

  return (
    <section className="testimonials" data-screen-label="Testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__head" data-reveal>
          <span className="eyebrow eyebrow--accent">PALAVRA DE QUEM CONTRATA</span>
          <h2 className="t-h1">A gente fala<br/>menos<span className="dot">.</span> Eles falam<br/>mais<span className="dot">.</span></h2>
        </div>

        <div className="testimonials__stage" data-reveal>
          <span className="testimonials__quote-mark" aria-hidden="true">"</span>
          <blockquote className="testimonials__body" key={i}>
            {q.body}
          </blockquote>
          <div className="testimonials__person">
            <div className="testimonials__avatar">
              <image-slot id={"quote-" + i} shape="circle" placeholder={q.name.split(' ')[0]}></image-slot>
            </div>
            <div>
              <strong>{q.name}</strong>
              <span>{q.role}</span>
            </div>
          </div>

          <div className="testimonials__nav">
            <button
              className="testimonials__arrow"
              aria-label="Anterior"
              onClick={() => setI((i - 1 + QUOTES.length) % QUOTES.length)}
            >
              <svg viewBox="0 0 24 24"><path d="M19 12H5M11 18l-6-6 6-6" fill="none"/></svg>
            </button>
            <div className="testimonials__dots">
              {QUOTES.map((_, k) => (
                <button
                  key={k}
                  className={"testimonials__dot " + (k === i ? 'is-active' : '')}
                  aria-label={"Depoimento " + (k+1)}
                  onClick={() => setI(k)}
                />
              ))}
            </div>
            <button
              className="testimonials__arrow"
              aria-label="Próximo"
              onClick={() => setI((i + 1) % QUOTES.length)}
            >
              <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" fill="none"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Testimonials = Testimonials;
