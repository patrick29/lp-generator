/* global React */
function Footer() {
  return (
    <footer className="footer" data-screen-label="Footer">
      <div className="footer__top">
        <div className="footer__top-inner" data-reveal>
          <div className="footer__cta-block">
            <span className="eyebrow eyebrow--on-purple">PRONTO?</span>
            <h3>Bora crescer junto<span className="dot">.</span></h3>
            <a href="#contato" className="btn btn--accent btn--lg">
              Falar com a gente
              <svg viewBox="0 0 24 24" className="ic"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
          <div className="footer__addresses">
            <div>
              <span className="eyebrow eyebrow--on-purple">SÃO PAULO · HQ</span>
              <p>Av. Paulista, 1000 · 14º andar<br/>Bela Vista — SP · 01310-100</p>
            </div>
            <div>
              <span className="eyebrow eyebrow--on-purple">RIO DE JANEIRO</span>
              <p>R. Visconde de Pirajá, 414 · sala 502<br/>Ipanema — RJ · 22410-002</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__main">
        <div className="footer__inner">
          <div className="footer__cols">
            <div className="footer__col footer__col--brand">
              <img src="assets/logo-secondary.png" alt="Nova Digital" />
              <p>Agência de marketing estratégico e criativo. São Paulo, desde 2017.</p>
            </div>
            <div className="footer__col">
              <span className="eyebrow eyebrow--on-purple">AGÊNCIA</span>
              <ul>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#time">Time</a></li>
                <li><a href="carreiras.html">Carreiras</a></li>
                <li><a href="#">Imprensa</a></li>
                <li><a href="#">Manifesto</a></li>
              </ul>
            </div>
            <div className="footer__col">
              <span className="eyebrow eyebrow--on-purple">SERVIÇOS</span>
              <ul>
                <li><a href="#servicos">Estratégia</a></li>
                <li><a href="#servicos">Criativo</a></li>
                <li><a href="#servicos">Performance</a></li>
                <li><a href="#servicos">Social & conteúdo</a></li>
                <li><a href="#metodo">Método</a></li>
              </ul>
            </div>
            <div className="footer__col">
              <span className="eyebrow eyebrow--on-purple">CONTATO</span>
              <ul>
                <li><a href="mailto:oi@novadigital.ag">oi@novadigital.ag</a></li>
                <li><a href="#">+55 11 9 9999-9999</a></li>
                <li><a href="carreiras.html">Trabalhe com a gente</a></li>
              </ul>
            </div>
            <div className="footer__col">
              <span className="eyebrow eyebrow--on-purple">SIGA</span>
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">TikTok</a></li>
                <li><a href="#">YouTube</a></li>
                <li><a href="#">Behance</a></li>
              </ul>
            </div>
          </div>

          <div className="footer__mark">
            <span className="footer__wordmark">Nova&nbsp;Digital<span className="dot">.</span></span>
          </div>

          <div className="footer__legal">
            <span>© 2026 Nova Digital · Agência LTDA · CNPJ 00.000.000/0001-00</span>
            <span className="footer__legal-tag">Marketing estratégico e criativo<span className="dot">.</span></span>
            <div className="footer__legal-links">
              <a href="#">Política de privacidade</a>
              <a href="#">Termos</a>
              <a href="#">LGPD</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
