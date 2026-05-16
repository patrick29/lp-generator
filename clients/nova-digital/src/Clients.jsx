/* global React */
const CLIENT_LOGOS = [
  '[Logo 1]', '[Logo 2]', '[Logo 3]', '[Logo 4]',
  '[Logo 5]', '[Logo 6]', '[Logo 7]'
];

function Clients() {
  const stream = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section id="clientes" className="clients" data-screen-label="Clients">
      <div className="clients__head" data-reveal>
        <span className="eyebrow">MARCAS PARCEIRAS</span>
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
