/* global React */
const { useState, useEffect } = React;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    ['Sobre', '#sobre'],
    ['Cases', '#cases'],
    ['Serviços', '#servicos'],
    ['Método NOVA', '#metodo'],
    ['Depoimentos', '#depoimentos'],
    ['FAQ', '#faq'],
    ['Contato', '#contato'],
  ];

  return (
    <nav className={"nav " + (scrolled ? "nav--scrolled" : "")} data-screen-label="Nav">
      <div className="nav__inner">
        <a href="#top" className="nav__brand" aria-label="Nova Digital">
          <img src="assets/brand-watermark-logo-horizontal.png" alt="Nova Digital" className="nav__brand-img" />
        </a>
        <div className="nav__links">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
        <div className="nav__actions">
          <a href="#contato" className="btn btn--primary btn--sm">Falar com a gente</a>
        </div>
        <button
          className={"nav__burger " + (open ? 'is-open' : '')}
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      {open && (
        <div className="nav__mobile">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a href="#contato" onClick={() => setOpen(false)} className="btn btn--primary">Falar com a gente</a>
        </div>
      )}
    </nav>
  );
}

window.Nav = Nav;
