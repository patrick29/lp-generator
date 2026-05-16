/* global React */
const CASES = [
  {
    id: "case-1",
    client: "[Cliente 1]",
    tag: "[Frente · Frente]",
    headline: "[Headline curta — o que mudou para esse cliente.]",
    metric: "[X%]",
    metricLabel: "[indicador]",
    color: "purple"
  },
  {
    id: "case-2",
    client: "[Cliente 2]",
    tag: "[Frente · Frente]",
    headline: "[Headline curta — resultado mensurável do cliente.]",
    metric: "[X×]",
    metricLabel: "[indicador]",
    color: "orange"
  },
  {
    id: "case-3",
    client: "[Cliente 3]",
    tag: "[Frente · Frente]",
    headline: "[Headline curta — transformação concreta.]",
    metric: "[+X%]",
    metricLabel: "[indicador]",
    color: "deep"
  },
  {
    id: "case-4",
    client: "[Cliente 4]",
    tag: "[Frente · Frente]",
    headline: "[Headline curta — substitua pelo seu próximo case.]",
    metric: "[X%]",
    metricLabel: "[indicador]",
    color: "purple"
  },
  {
    id: "case-5",
    client: "[Cliente 5]",
    tag: "[Frente · Frente]",
    headline: "[Headline curta — substitua pelo seu próximo case.]",
    metric: "[X×]",
    metricLabel: "[indicador]",
    color: "orange"
  },
  {
    id: "case-6",
    client: "[Cliente 6]",
    tag: "[Frente · Frente]",
    headline: "[Headline curta — substitua pelo seu próximo case.]",
    metric: "[+X%]",
    metricLabel: "[indicador]",
    color: "deep"
  }
];

const PAGE_SIZE = 3;

function Cases() {
  const [page, setPage] = React.useState(0);
  const totalPages = Math.ceil(CASES.length / PAGE_SIZE);
  const visible = CASES.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  const goPrev = () => setPage(p => (p - 1 + totalPages) % totalPages);
  const goNext = () => setPage(p => (p + 1) % totalPages);

  return (
    <section id="cases" className="cases" data-screen-label="Cases">
      <div className="cases__head" data-reveal>
        <span className="eyebrow eyebrow--accent">CASES DE SUCESSO</span>
        <h2 className="t-h1">Marcas que cresceram<br/>com a gente do lado<span className="dot">.</span></h2>
      </div>
      <div className="cases__grid" key={page}>
        {visible.map((c, i) => (
          <article key={c.id} className={"case case--" + c.color} data-reveal style={{'--reveal-delay': (i * 120) + 'ms'}}>
            <div className="case__art">
              <image-slot id={c.id + "-img"} shape="rounded" radius="20" placeholder={"Imagem do case · " + c.client}></image-slot>
              <span className="case__chip">{c.tag}</span>
            </div>
            <div className="case__body">
              <div className="case__meta">
                <span className="case__client">{c.client}</span>
              </div>
              <h3 className="case__headline">{c.headline}</h3>
              <div className="case__footer">
                <div className="case__metric">
                  <strong>{c.metric}</strong>
                  <span>{c.metricLabel}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="cases__pagination" data-reveal>
          <button
            type="button"
            className="cases__pag-btn"
            onClick={goPrev}
            aria-label="Página anterior"
          >
            <svg viewBox="0 0 24 24" className="ic"><path d="M15 6l-6 6 6 6" fill="none"/></svg>
          </button>
          <div className="cases__pag-dots" role="tablist" aria-label="Páginas de cases">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === page}
                aria-label={"Página " + (i + 1)}
                className={"cases__pag-dot " + (i === page ? "is-active" : "")}
                onClick={() => setPage(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="cases__pag-btn"
            onClick={goNext}
            aria-label="Próxima página"
          >
            <svg viewBox="0 0 24 24" className="ic"><path d="M9 6l6 6-6 6" fill="none"/></svg>
          </button>
        </div>
      )}
    </section>
  );
}

window.Cases = Cases;
