/* global React */
const STATS = [
  { v: '+120', l: 'marcas atendidas', s: 'Desde 2017, de bairro a nacional.' },
  { v: 'R$ 38M', l: 'em mídia gerenciada', s: 'Em Google, Meta e TikTok no último ano.' },
  { v: '4,2×', l: 'ROAS médio', s: 'A meta é dobrar isso até 2027.' },
  { v: '94%', l: 'renovação de contrato', s: 'Cliente que entra, fica.' },
  { v: '23', l: 'prêmios criativos', s: 'Wave, Effie, Ampro e por aí vai.' },
  { v: '38', l: 'pessoas no time', s: 'Estratégia, criativo, mídia e social.' },
];

function Stats() {
  return (
    <section className="stats" data-screen-label="Stats">
      <div className="stats__inner">
        <div className="stats__head" data-reveal>
          <span className="eyebrow eyebrow--on-purple">NÚMEROS QUE A GENTE GOSTA</span>
          <h2 className="stats__title">
            Resultado em primeiro lugar<span className="dot">.</span><br/>
            <em>Mas não em qualquer custo.</em>
          </h2>
        </div>
        <div className="stats__grid">
          {STATS.map((s, i) => (
            <div className="stat" key={s.l} data-reveal style={{'--reveal-delay': (i * 80) + 'ms'}}>
              <strong className="stat__value" data-counter>{s.v}</strong>
              <span className="stat__label">{s.l}</span>
              <span className="stat__sub">{s.s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Stats = Stats;
