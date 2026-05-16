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
    ['Serviços', 'index.html#servicos'],
    ['Método', 'index.html#metodo'],
    ['Cases', 'index.html#cases'],
    ['Sobre', 'index.html#sobre'],
    ['Time', 'index.html#time'],
    ['Carreiras', 'carreiras.html'],
    ['Contato', 'index.html#contato'],
  ];

  return (
    <nav className={"nav " + (scrolled ? "nav--scrolled" : "")} data-screen-label="Nav">
      <div className="nav__inner">
        <a href="index.html#top" className="nav__brand" aria-label="Nova Digital">
          <img src="assets/logo-secondary-dark.png" alt="Nova Digital" />
        </a>
        <div className="nav__links">
          {links.map(([label, href]) => (
            <a key={href} href={href} className={(typeof window !== 'undefined' && window.location.pathname.endsWith('carreiras.html') && href === 'carreiras.html') ? 'is-current' : ''}>{label}</a>
          ))}
        </div>
        <div className="nav__actions">
          <a href="index.html#contato" className="btn btn--ghost btn--sm nav__phone">
            <svg viewBox="0 0 24 24" className="ic"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
            <span>(11) 9 9999-9999</span>
          </a>
          <a href="index.html#contato" className="btn btn--primary btn--sm">Falar com a gente</a>
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
          <a href="index.html#contato" onClick={() => setOpen(false)} className="btn btn--primary">Falar com a gente</a>
        </div>
      )}
    </nav>
  );
}

window.Nav = Nav;
