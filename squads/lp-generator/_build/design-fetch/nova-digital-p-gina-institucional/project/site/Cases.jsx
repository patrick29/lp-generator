/* global React */
const CASES = [
  {
    id: "case-1",
    client: "Padaria Boa Vista",
    tag: "Branding · Social",
    headline: "De padaria de bairro a destino do café da manhã.",
    body: "Reposicionamento, identidade e plano de social. Em 6 meses, fila no fim de semana e ticket médio em alta.",
    metric: "+38%",
    metricLabel: "ticket médio",
    color: "purple"
  },
  {
    id: "case-2",
    client: "Studio Frame",
    tag: "Performance · Criativo",
    headline: "Estúdio fotográfico lotou a agenda em 3 meses.",
    body: "Funil de aquisição em Meta e Google, landing nova, fotos retrabalhadas. Custo por lead caiu 62%.",
    metric: "5,2×",
    metricLabel: "ROAS médio",
    color: "orange"
  },
  {
    id: "case-3",
    client: "Vida Verde",
    tag: "Estratégia · Conteúdo",
    headline: "Marca de horti orgânico chegou em 4 estados.",
    body: "Estratégia de canais, conteúdo proprietário, parcerias com influência regional e PR. Tráfego orgânico triplicou.",
    metric: "+220%",
    metricLabel: "tráfego orgânico",
    color: "deep"
  }
];

function Cases() {
  return (
    <section id="cases" className="cases" data-screen-label="Cases">
      <div className="cases__head" data-reveal>
        <div>
          <span className="eyebrow eyebrow--accent">CASES SELECIONADOS</span>
          <h2 className="t-h1">Marcas que cresceram<br/>com a gente do lado<span className="dot">.</span></h2>
        </div>
        <a href="#" className="btn btn--ghost">Ver todos →</a>
      </div>
      <div className="cases__grid">
        {CASES.map((c, i) => (
          <article key={c.id} className={"case case--" + c.color + (i === 0 ? " case--lg" : "")} data-reveal style={{'--reveal-delay': (i * 120) + 'ms'}}>
            <div className="case__art">
              <image-slot id={c.id + "-img"} shape="rounded" radius="20" placeholder={"Imagem do case · " + c.client}></image-slot>
              <span className="case__chip">{c.tag}</span>
            </div>
            <div className="case__body">
              <div className="case__meta">
                <span className="case__client">{c.client}</span>
              </div>
              <h3 className="case__headline">{c.headline}</h3>
              {i === 0 && <p className="case__body-text">{c.body}</p>}
              <div className="case__footer">
                <div className="case__metric">
                  <strong>{c.metric}</strong>
                  <span>{c.metricLabel}</span>
                </div>
                <a href="#" className="case__link">Ler case <span aria-hidden>→</span></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

window.Cases = Cases;
