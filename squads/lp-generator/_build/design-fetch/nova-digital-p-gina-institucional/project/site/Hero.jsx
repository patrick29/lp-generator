/* global React */
function Hero({ layout = 'padrao', showProof = true }) {
  return (
    <section className={"hero hero--" + layout} id="top" data-screen-label="Hero">
      <div className="hero__bg" aria-hidden="true">
        <svg viewBox="0 0 600 600" className="hero__triangle">
          <polygon points="80,40 540,300 80,560" fill="currentColor"/>
        </svg>
      </div>

      <div className="hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">
            <span className="eyebrow__dot"></span>
            AGÊNCIA · SÃO PAULO · DESDE 2017
          </span>

          {layout === 'wordmark' ? (
            <h1 className="hero__wordmark">
              <span className="hero__wordmark-line hero__wordmark-line--orange">Nova</span>
              <span className="hero__wordmark-line">Digital<span className="dot">.</span></span>
              <span className="hero__wordmark-sub">Marketing estratégico e criativo<span className="dot">.</span></span>
            </h1>
          ) : layout === 'manchete' ? (
            <h1 className="hero__title hero__title--manchete">
              A gente transforma<br/>
              <em>audiência</em> em <strong>receita</strong><span className="dot">.</span>
            </h1>
          ) : (
            <h1 className="hero__title">
              Marketing que <strong>vende</strong><span className="dot">.</span><br/>
              Criativo que <em>emociona</em><span className="dot">.</span>
            </h1>
          )}

          <p className="hero__sub">
            Estratégia, criativo e mídia em um só time. A gente cuida do crescimento da sua marca com clareza, ritmo e identidade — sem achismo.
          </p>
          <div className="hero__cta">
            <a href="#contato" className="btn btn--primary btn--lg">
              Bora começar
              <svg viewBox="0 0 24 24" className="ic"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a href="#cases" className="btn btn--ghost btn--lg">
              <svg viewBox="0 0 24 24" className="ic ic--play"><polygon points="6,4 20,12 6,20" fill="currentColor" stroke="none"/></svg>
              Ver cases
            </a>
          </div>

          {showProof && (
            <div className="hero__proof">
              <div className="proof"><strong>+120</strong><span>marcas atendidas</span></div>
              <div className="proof"><strong>9 anos</strong><span>no mercado</span></div>
              <div className="proof"><strong>4,9 ★</strong><span>avaliação Google</span></div>
              <div className="proof"><strong>23</strong><span>prêmios criativos</span></div>
            </div>
          )}
        </div>

        <div className="hero__art">
          <div className="hero__photo">
            <image-slot id="hero-photo" shape="rounded" radius="24" placeholder="Foto da equipe / cliente"></image-slot>
          </div>

          <div className="hero__card hero__card--metric">
            <span className="hero__card-label">ROAS médio</span>
            <strong>5,2×</strong>
            <span className="hero__card-trend">
              <svg viewBox="0 0 24 24" className="ic"><polyline points="3,17 9,11 13,15 21,7" fill="none"/><polyline points="14,7 21,7 21,14" fill="none"/></svg>
              +38% vs último trimestre
            </span>
          </div>

          <div className="hero__sticker">
            <img src="assets/play-mark-white.svg" alt="" />
            <span>Bora ao vivo<span className="dot">.</span></span>
          </div>

          <div className="hero__chip hero__chip--awards">
            <svg viewBox="0 0 24 24" className="ic"><circle cx="12" cy="8" r="6" fill="none"/><path d="m9 13-2 8 5-3 5 3-2-8" fill="none"/></svg>
            Top 50 agências BR · 2025
          </div>
        </div>
      </div>

      <a href="#clientes" className="hero__scroll" aria-label="Rolar para baixo">
        <span>Role para descobrir</span>
        <svg viewBox="0 0 24 24"><path d="M12 5v14M19 12l-7 7-7-7" fill="none"/></svg>
      </a>
    </section>
  );
}

window.Hero = Hero;
