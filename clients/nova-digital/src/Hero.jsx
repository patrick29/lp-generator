/* global React */
function Hero({ layout = 'padrao', showProof = true }) {
  return (
    <section className={"hero hero--" + layout} id="top" data-screen-label="Hero">
<div className="hero__inner">
        <div className="hero__copy">
          <span className="eyebrow eyebrow--accent hero__eyebrow">AGÊNCIA DE MARKETING ESTRATÉGICO</span>
          {layout === 'manchete' ? (
            <h1 className="hero__title hero__title--manchete">
              Estratégia todo mundo<br/>
              <em>promete</em><span className="dot">.</span> <strong>Aplicar</strong> com<br/>
              excelência é outra história<span className="dot">.</span>
            </h1>
          ) : (
            <h1 className="hero__title">
              Estratégia todo mundo <em>promete</em><span className="dot">.</span><br/>
              <strong>Aplicar</strong> com excelência é outra história<span className="dot">.</span>
            </h1>
          )}

          <p className="hero__sub">
            Marketing digital com plano, execução e leitura de painel — do briefing ao número que importa.
          </p>

          <div className="hero__cta">
            <a href="#contato" className="btn btn--primary btn--lg">
              Falar com a gente
              <svg viewBox="0 0 24 24" className="ic"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a href="#metodo" className="btn btn--ghost btn--lg">
              <svg viewBox="0 0 24 24" className="ic ic--play"><polygon points="6,4 20,12 6,20" fill="currentColor" stroke="none"/></svg>
              Ver o método NOVA
            </a>
          </div>

          {showProof && (
            <div className="hero__proof">
              <div className="proof"><strong>[Anos]</strong><span>de mercado digital</span></div>
              <div className="proof"><strong>[Marcas]</strong><span>já atendidas</span></div>
              <div className="proof"><strong>[Métrica âncora]</strong><span>[label curta]</span></div>
              <div className="proof"><strong>[Reconhecimento]</strong><span>[label curta]</span></div>
            </div>
          )}
        </div>

        <div className="hero__art">
          <div className="hero__photo">
            <image-slot id="hero-photo" shape="rounded" radius="24" placeholder="Foto · [tema — fundadora, equipe ou cliente]"></image-slot>
          </div>

          <div className="hero__card hero__card--metric">
            <span className="hero__card-label">[Métrica de destaque]</span>
            <strong>[valor]</strong>
            <span className="hero__card-trend">
              <svg viewBox="0 0 24 24" className="ic"><polyline points="3,17 9,11 13,15 21,7" fill="none"/><polyline points="14,7 21,7 21,14" fill="none"/></svg>
              [contexto — período ou comparação]
            </span>
          </div>

          <div className="hero__sticker">
            <img src="assets/play-mark-white.svg" alt="" />
            <span>Do plano ao painel<span className="dot">.</span></span>
          </div>

          <div className="hero__chip hero__chip--awards">
            <svg viewBox="0 0 24 24" className="ic"><circle cx="12" cy="8" r="6" fill="none"/><path d="m9 13-2 8 5-3 5 3-2-8" fill="none"/></svg>
            [Reconhecimento — chip opcional]
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
