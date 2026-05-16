/* global React */
function Manifesto() {
  return (
    <section id="sobre" className="manifesto" data-screen-label="Manifesto">
      <div className="manifesto__inner">
        <span className="eyebrow eyebrow--on-purple" data-reveal>MANIFESTO</span>
        <h2 className="manifesto__title" data-reveal>
          A gente <em>aplica</em> estratégia<br/>
          com <strong>excelência</strong> — e o<br/>
          <strong>resultado</strong> aparece no painel<span className="dot">.</span>
        </h2>
        <ul className="manifesto__beliefs">
          <li data-reveal style={{'--reveal-delay': '0ms'}}>
            <span className="manifesto__num">01</span>
            <h3>Resultado real, no painel</h3>
            <p>Crescimento que dá pra ver: receita, marca e relevância com leitura de dados, não com achismo.</p>
          </li>
          <li data-reveal style={{'--reveal-delay': '100ms'}}>
            <span className="manifesto__num">02</span>
            <h3>Estratégia direcionada</h3>
            <p>Cada ação tem um porquê. A gente decide com base no que move o seu negócio, não com base no que está na moda.</p>
          </li>
          <li data-reveal style={{'--reveal-delay': '200ms'}}>
            <span className="manifesto__num">03</span>
            <h3>Alegria e proximidade</h3>
            <p>Conversa entre parceiros, não pitch corporativo. Tom leve, firme no método e direto no que precisa ajustar.</p>
          </li>
          <li data-reveal style={{'--reveal-delay': '300ms'}}>
            <span className="manifesto__num">04</span>
            <h3>Humanização do digital</h3>
            <p>Dados, cliques e métricas viram relação real. Tecnologia a serviço da conexão com o público da sua marca.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

window.Manifesto = Manifesto;
