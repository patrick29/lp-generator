/* global React */
const CLIENT_LOGOS = [
  'Padaria Boa Vista', 'Studio Frame', 'Vida Verde', 'Clínica Aurora',
  'Tropico Café', 'Editora Norte', 'Lumus Joias', 'Marina Pet',
  'Quintal Casa', 'Frota Mais', 'Banco Solar', 'Tinta Coletivo'
];

function Clients() {
  const stream = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section id="clientes" className="clients" data-screen-label="Clients">
      <div className="clients__head" data-reveal>
        <span className="eyebrow">CLIENTES · 2017 — HOJE</span>
        <p>Marcas que cresceram com a gente do lado<span className="dot">.</span></p>
      </div>
      <div className="marquee" aria-hidden="false">
        <div className="marquee__track">
          {stream.map((name, i) => (
            <div className="marquee__item" key={i}>
              <span className="marquee__mark" aria-hidden="true">▶</span>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Clients = Clients;
