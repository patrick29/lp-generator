/* global React */
function CareersHero() {
  return (
    <section className="careers-hero" id="top" data-screen-label="Careers Hero">
      <div className="careers-hero__bg" aria-hidden="true">
        <svg viewBox="0 0 600 600" className="careers-hero__triangle">
          <polygon points="80,40 540,300 80,560" fill="currentColor"/>
        </svg>
      </div>
      <div className="careers-hero__inner">
        <nav className="crumbs" aria-label="caminho">
          <a href="index.html">Nova Digital</a>
          <span aria-hidden="true">/</span>
          <span>Carreiras</span>
        </nav>

        <div className="careers-hero__row">
          <div className="careers-hero__copy">
            <span className="eyebrow">
              <span className="eyebrow__dot"></span>
              VAGAS · BRASIL · 2026
            </span>
            <h1 className="careers-hero__title">
              Bora fazer parte<br/>
              do <em>time</em> que <strong>cresce junto</strong><span className="dot">.</span>
            </h1>
            <p className="careers-hero__sub">
              A Nova é um time fixo, dedicado e em casa. A gente contrata pra ficar — não por projeto. Se você curte estratégia, criativo, mídia ou social e quer crescer com a marca, dá uma olhada nas vagas abertas.
            </p>

            <div className="careers-hero__cta">
              <a href="#vagas" className="btn btn--primary btn--lg">
                Ver vagas abertas
                <svg viewBox="0 0 24 24" className="ic"><path d="M12 5v14M19 12l-7 7-7-7" fill="none"/></svg>
              </a>
              <a href="#cultura" className="btn btn--ghost btn--lg">
                Como é trabalhar aqui
              </a>
            </div>
          </div>

          <div className="careers-hero__stats">
            <div className="careers-stat">
              <strong>08</strong>
              <span>vagas em aberto</span>
            </div>
            <div className="careers-stat">
              <strong>38</strong>
              <span>pessoas no time</span>
            </div>
            <div className="careers-stat">
              <strong>94%</strong>
              <span>retenção em 12 meses</span>
            </div>
            <div className="careers-stat">
              <strong>4,8 ★</strong>
              <span>nota no Glassdoor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.CareersHero = CareersHero;
