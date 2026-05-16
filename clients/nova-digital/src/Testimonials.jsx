/* global React */
const QUOTES = [
  {
    body: '[Depoimento 1 — fala completa do cliente, em 2-3 frases. Tom natural, mantém os "tics" de fala da pessoa se forem da marca dela.]',
    name: '[Nome do Cliente 1]',
    role: '[Cargo · Empresa]'
  },
  {
    body: '[Depoimento 2 — outro ângulo: por que renovou contrato, ou o que esperava e não tinha visto antes.]',
    name: '[Nome do Cliente 2]',
    role: '[Cargo · Empresa]'
  },
  {
    body: '[Depoimento 3 — diferente dos anteriores: foco em processo, em resultado mensurável, ou em relacionamento.]',
    name: '[Nome do Cliente 3]',
    role: '[Cargo · Empresa]'
  },
  {
    body: '[Depoimento 4 — opcional, se Patrick conseguir permissão para usar.]',
    name: '[Nome do Cliente 4]',
    role: '[Cargo · Empresa]'
  },
  {
    body: '[Depoimento 5 — opcional, se Patrick conseguir permissão para usar.]',
    name: '[Nome do Cliente 5]',
    role: '[Cargo · Empresa]'
  }
];

function Testimonials() {
  const [i, setI] = React.useState(0);
  const q = QUOTES[i];

  return (
    <section id="depoimentos" className="testimonials" data-screen-label="Testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__head" data-reveal>
          <span className="eyebrow eyebrow--accent">PALAVRA DE QUEM CONTRATA</span>
          <h2 className="t-h1">Ouça de quem<br/>importa<span className="dot">.</span></h2>
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
