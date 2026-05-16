/* global React */
function Manifesto() {
  return (
    <section id="sobre" className="manifesto" data-screen-label="Manifesto">
      <div className="manifesto__bg" aria-hidden="true">
        <span className="manifesto__bg-word">Nova</span>
        <span className="manifesto__bg-word">Digital<span className="dot">.</span></span>
      </div>
      <div className="manifesto__inner">
        <span className="eyebrow eyebrow--on-purple" data-reveal>MANIFESTO</span>
        <h2 className="manifesto__title" data-reveal>
          A gente acredita em marketing<br/>
          que tem <em>cara</em>, <em>ritmo</em><br/>
          e <strong>resultado</strong><span className="dot">.</span>
        </h2>
        <div className="manifesto__cols" data-reveal>
          <p>
            Marketing não é só anúncio. É a maneira como uma marca conversa com o mundo todo dia — no feed, na loja, no e-mail, no atendimento. A gente entra junto pra fazer isso direito.
          </p>
          <p>
            Estratégia, criativo e mídia trabalhando no mesmo time, não em silos. É assim que campanha vira venda, e venda vira marca. Sem achismo, sem firula, sem corporativês.
          </p>
        </div>

        <ul className="manifesto__beliefs">
          <li data-reveal style={{'--reveal-delay': '0ms'}}>
            <span className="manifesto__num">01</span>
            <h3>Clareza antes de criatividade</h3>
            <p>Se a estratégia não está clara, criativo é palpite caro.</p>
          </li>
          <li data-reveal style={{'--reveal-delay': '100ms'}}>
            <span className="manifesto__num">02</span>
            <h3>Marca é jornada, não campanha</h3>
            <p>A gente pensa em 90 dias, 12 meses e 5 anos — ao mesmo tempo.</p>
          </li>
          <li data-reveal style={{'--reveal-delay': '200ms'}}>
            <span className="manifesto__num">03</span>
            <h3>Resultado mora no detalhe</h3>
            <p>O criativo que vende é primo do criativo que emociona.</p>
          </li>
          <li data-reveal style={{'--reveal-delay': '300ms'}}>
            <span className="manifesto__num">04</span>
            <h3>A gente vira time</h3>
            <p>Cliente não é cliente — é parceiro de crescimento.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

window.Manifesto = Manifesto;
