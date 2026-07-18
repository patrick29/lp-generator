/* global React, Logo, Button, Icon, WhatsGlyph */
// Kinevo LP — Header (sticky, translucent blur, scroll-progress bar)
const { useState: useStateH, useEffect: useEffectH } = React;

function Header({ onWhats, pageTheme }) {
  const [scrolled, setScrolled] = useStateH(false);
  const [progress, setProgress] = useStateH(0);

  useEffectH(() => {
    const el = document.querySelector('#scroll-root');
    const handler = () => {
      const top = el ? el.scrollTop : window.scrollY;
      const h = el ? el.scrollHeight - el.clientHeight : document.body.scrollHeight - window.innerHeight;
      setScrolled(top > 12);
      setProgress(h > 0 ? top / h : 0);
    };
    const root = el || window;
    root.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => root.removeEventListener('scroll', handler);
  }, []);

  const links = [
    ['Problema', '#problema'], ['Soluções', '#solucoes'], ['Como funciona', '#processo'],
    ['Integrações', '#integracoes'], ['Sobre', '#sobre'], ['FAQ', '#faq'],
  ];

  // header is always solid now, so chrome follows the page theme only
  const onDark = pageTheme === 'dark';
  const linkColor = onDark ? 'rgba(255,255,255,0.78)' : 'var(--kv-fg2)';

  return React.createElement('header', {
    style: {
      position: 'sticky', top: 0, zIndex: 60,
      background: 'var(--header-bg)',
      backdropFilter: 'blur(18px) saturate(140%)',
      WebkitBackdropFilter: 'blur(18px) saturate(140%)',
      borderBottom: '1px solid var(--kv-border)',
      boxShadow: scrolled ? '0 4px 20px rgba(16,24,40,0.06)' : 'none',
      transition: 'box-shadow 320ms cubic-bezier(0.22,1,0.36,1)',
    }
  },
    React.createElement('div', {
      style: { maxWidth: 1200, margin: '0 auto', padding: '15px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }
    },
      React.createElement('a', { href: '#top', style: { textDecoration: 'none' } }, React.createElement(Logo, { size: 26, light: onDark })),
      React.createElement('nav', { className: 'kv-nav', style: { display: 'flex', gap: 26, alignItems: 'center' } },
        links.map(([l, href]) => React.createElement('a', {
          key: l, href, className: 'kv-navlink',
          style: { fontFamily: 'var(--kv-font-body)', fontSize: 14.5, fontWeight: 500, color: linkColor, textDecoration: 'none', position: 'relative', transition: 'color 160ms', whiteSpace: 'nowrap' }
        }, l))
      ),
      React.createElement('div', { className: 'kv-head-right', style: { display: 'flex', gap: 10, alignItems: 'center' } },
        React.createElement('div', { className: 'kv-headcta', style: { display: 'flex', gap: 12, alignItems: 'center' } },
          React.createElement(Button, { size: 'sm', variant: onDark ? 'outlineLight' : 'secondary', onClick: onWhats }, React.createElement(WhatsGlyph, { size: 16 }), 'Chame agora')
        )
      )
    ),
    // scroll progress
    React.createElement('div', { style: { height: 2, background: 'transparent', position: 'relative' } },
      React.createElement('div', { style: { position: 'absolute', left: 0, top: 0, height: '100%', width: `${progress * 100}%`, background: 'linear-gradient(90deg,#2D5BFF,#19E0C8)', transition: 'width 80ms linear' } })
    )
  );
}

Object.assign(window, { Header });
