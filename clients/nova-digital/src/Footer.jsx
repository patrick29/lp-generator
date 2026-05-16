/* global React */
function Footer() {
  return (
    <footer className="footer" data-screen-label="Footer">
      <div className="footer__main">
        <div className="footer__inner">
          <div className="footer__cols">
            <div className="footer__col footer__col--brand">
              <a href="#top" className="footer__brand" aria-label="Nova Digital">
                <img src="assets/brand-watermark-logo-horizontal.png" alt="Nova Digital" className="footer__brand-img" />
              </a>
              <p>Agência de marketing estratégico e criativo.</p>
            </div>
            <div className="footer__col">
              <span className="eyebrow eyebrow--on-purple">A NOVA</span>
              <ul>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#fundadora">Fundadora</a></li>
                <li><a href="#cases">Cases</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer__col">
              <span className="eyebrow eyebrow--on-purple">SERVIÇOS</span>
              <ul>
                <li><a href="#servicos">Tráfego pago</a></li>
                <li><a href="#servicos">Gestão de mídia</a></li>
                <li><a href="#metodo">Método NOVA</a></li>
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

          <div className="footer__legal">
            <span>© 2026 Nova Digital · Agência LTDA · CNPJ 44.123.689/0001-17</span>
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
