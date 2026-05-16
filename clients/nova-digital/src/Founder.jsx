/* global React */
function Founder() {
  return (
    <section id="fundadora" className="founder" data-screen-label="Founder">
      <div className="founder__inner">
        <div className="founder__copy" data-reveal>
          <span className="eyebrow eyebrow--accent">FUNDADORA</span>
          <h2 className="t-h1">
            Letícia Shibayama<span className="dot">.</span>
          </h2>
          <p className="founder__credential">
            Profissional alegre, comunicativa e apaixonada por <strong>marketing digital</strong> · fundadora da <strong>Nova Digital</strong>
          </p>

          <div className="founder__body">
            <p>
              A Nova nasceu de um princípio simples: estratégia sem aplicação é discurso. A Letícia fundou a agência pra fazer o contrário — plano, execução e leitura de dados na mesma mesa, com o time que entrega conversando com o time que decide.
            </p>
            <p>
              Quem coordena cada projeto no dia a dia é ela. É a Letícia que entra na primeira call, escuta o cenário e diz, sem rodeio, se faz sentido seguir juntos. Marketing digital com olhar humano — e com a régua alta que a sua marca merece.
            </p>
          </div>

          <ul className="founder__proofs">
            <li>
              <strong>[Anos]</strong>
              <span>criando conteúdo e estratégia</span>
            </li>
            <li>
              <strong>[Marcas]</strong>
              <span>com quem já fez parceria</span>
            </li>
            <li>
              <strong>[Audiência]</strong>
              <span>[plataforma principal]</span>
            </li>
          </ul>

          <div className="founder__cta">
            <a href="[link-do-perfil]" target="_blank" rel="noopener" className="btn btn--ghost">
              Ver perfil <span aria-hidden>→</span>
            </a>
            <a href="#contato" className="btn btn--primary">
              Falar com a gente
              <svg viewBox="0 0 24 24" className="ic"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </div>

        <div className="founder__art" data-reveal>
          <div className="founder__photo">
            <image-slot id="founder-photo" shape="rounded" radius="24" placeholder="Foto · Letícia Shibayama"></image-slot>
          </div>

          <div className="founder__chip founder__chip--platform">
            <span className="eyebrow">[PLATAFORMA]</span>
            <strong>@[handle]</strong>
          </div>

          <div className="founder__chip founder__chip--quote">
            <span aria-hidden="true">"</span>
            Estratégia bem aplicada é o que separa marca que cresce de marca que aparece.
          </div>
        </div>
      </div>
    </section>
  );
}

window.Founder = Founder;
