/* global React, Icon, Eyebrow, Reveal, Wrap */
// Kinevo LP — Serviços (3 layout variants: grid · list · bento)

const KV_SERVICES = [
  { ic: 'workflow', t: 'Automação de processos internos', d: 'Conectamos seus sistemas e automatizamos processos ponta a ponta, do gatilho ao resultado, sem trabalho manual repetitivo.', tag: 'Núcleo' },
  { ic: 'plug', t: 'Integrações entre sistemas', d: 'CRM, ERP, PDV, planilhas, e-mail e APIs. Tudo conversando em tempo real, sem retrabalho nem dado duplicado.', tag: 'CRM · ERP · PDV' },
  { ic: 'bot', t: 'Agentes e decisões inteligentes', d: 'Regras e automações que roteiam, validam e decidem nos bastidores. O time foca no que importa.', tag: 'Inteligência' },
  { ic: 'route', t: 'Mapeamento de processos', d: 'Antes de automatizar, entendemos. Desenhamos seu fluxo atual e achamos onde o tempo está sendo perdido.', tag: 'Diagnóstico' },
  { ic: 'messages-square', t: 'Atendimento e follow-up', d: 'Automatizamos cotações, lembretes e follow-ups. Ideal para corretoras, imobiliárias e operações de venda.', tag: 'Relacionamento' },
  { ic: 'trending-up', t: 'Evolução contínua', d: 'Revisamos e refinamos cada fluxo a cada ciclo. Automação que ganha eficiência com o tempo.', tag: 'Movimento' },
];

function ServicesHeader() {
  return React.createElement('div', { style: { maxWidth: 640, marginBottom: 52 } },
    React.createElement(Reveal, null, React.createElement(Eyebrow, { dot: true }, 'O que fazemos')),
    React.createElement(Reveal, { delay: 80 },
      React.createElement('h2', { id: 'solucoes', style: { fontFamily: 'var(--kv-font-display)', fontWeight: 700, fontSize: 'clamp(30px,3.6vw,44px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--kv-fg1)', margin: '16px 0 0', scrollMarginTop: 90 } }, 'Tudo que trava sua operação, automatizado.')),
    React.createElement(Reveal, { delay: 140 },
      React.createElement('p', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 18, lineHeight: 1.6, color: 'var(--kv-fg2)', margin: '16px 0 0' } }, 'Mapeamos, automatizamos e mantemos cada processo evoluindo. Do diagnóstico ao fluxo rodando em produção.'))
  );
}

function Services({ layout = 'grid' }) {
  return React.createElement('section', { style: { background: 'var(--surface)' } },
    React.createElement(Wrap, { style: { padding: '100px 32px' } },
      React.createElement(ServicesHeader, null),
      layout === 'list' ? React.createElement(ServicesList, null)
        : layout === 'bento' ? React.createElement(ServicesBento, null)
        : React.createElement(ServicesGrid, null)
    )
  );
}

function ServiceIcon({ ic, size = 46, big }) {
  return React.createElement('div', { style: { width: size, height: size, borderRadius: big ? 14 : 11, background: 'var(--kv-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--kv-blue)', flex: 'none' } },
    React.createElement(Icon, { name: ic, size: big ? 26 : 22 }));
}

/* ---- GRID (3-col cards) ---- */
function ServicesGrid() {
  return React.createElement('div', { className: 'kv-svc-grid', style: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 } },
    KV_SERVICES.map((it, i) => React.createElement(Reveal, { key: it.t, delay: (i % 3) * 80, dir: 'up' },
      React.createElement(HoverCard, { style: { background: 'var(--surface)', border: '1px solid var(--kv-border)', borderRadius: 18, padding: 26, height: '100%' } },
        React.createElement(ServiceIcon, { ic: it.ic }),
        React.createElement('div', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 10.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--kv-blue-600)', margin: '18px 0 6px' } }, it.tag),
        React.createElement('h3', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 600, fontSize: 19, color: 'var(--kv-fg1)', margin: 0, letterSpacing: '-0.01em' } }, it.t),
        React.createElement('p', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 14.5, lineHeight: 1.55, color: 'var(--kv-fg2)', margin: '10px 0 0' } }, it.d)
      )
    ))
  );
}

/* ---- LIST (editorial rows) ---- */
function ServicesList() {
  return React.createElement('div', { style: { borderTop: '1px solid var(--kv-border)' } },
    KV_SERVICES.map((it, i) => React.createElement(Reveal, { key: it.t, delay: 0, dir: 'up' },
      React.createElement(HoverRow, { num: String(i + 1).padStart(2, '0'), ...it })
    ))
  );
}
function HoverRow({ num, ic, t, d, tag }) {
  const [h, setH] = React.useState(false);
  return React.createElement('div', {
    onMouseEnter: () => setH(true), onMouseLeave: () => setH(false),
    style: { display: 'grid', gridTemplateColumns: '60px 56px 1fr 1.3fr', gap: 24, alignItems: 'center', padding: '26px 16px', borderBottom: '1px solid var(--kv-border)', background: h ? 'var(--kv-neutral-25)' : 'transparent', transition: 'background 200ms', borderRadius: 12 },
    className: 'kv-svc-row'
  },
    React.createElement('span', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 14, fontWeight: 600, color: h ? 'var(--kv-blue)' : 'var(--kv-neutral-300)', transition: 'color 200ms' } }, num),
    React.createElement(ServiceIcon, { ic }),
    React.createElement('div', null,
      React.createElement('h3', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 600, fontSize: 21, color: 'var(--kv-fg1)', margin: 0, letterSpacing: '-0.01em' } }, t),
      React.createElement('div', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 10.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--kv-blue-600)', marginTop: 6 } }, tag)
    ),
    React.createElement('p', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 15, lineHeight: 1.55, color: 'var(--kv-fg2)', margin: 0 } }, d)
  );
}

/* ---- BENTO (asymmetric) ---- */
function ServicesBento() {
  // first item large (feature), rest tiled
  const [feat, ...rest] = KV_SERVICES;
  return React.createElement('div', { className: 'kv-bento', style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '1fr', gap: 16 } },
    React.createElement(Reveal, { dir: 'up', style: { gridColumn: 'span 1', gridRow: 'span 2' } },
      React.createElement(HoverCard, { style: { background: 'linear-gradient(165deg,#16181D,#0E0F13)', border: '1px solid #2A2E37', borderRadius: 20, padding: 30, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' } },
        React.createElement('div', { style: { position: 'absolute', inset: 0, background: 'radial-gradient(80% 60% at 90% 0%, rgba(45,91,255,0.3), transparent 60%)' } }),
        React.createElement('div', { style: { width: 52, height: 52, borderRadius: 14, background: 'rgba(45,91,255,0.18)', color: '#5C7DFF', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' } }, React.createElement(Icon, { name: feat.ic, size: 28 })),
        React.createElement('div', { style: { flex: 1 } }),
        React.createElement('div', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 10.5, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#19E0C8', margin: '0 0 8px', position: 'relative' } }, feat.tag),
        React.createElement('h3', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 700, fontSize: 26, color: '#fff', margin: 0, letterSpacing: '-0.02em', position: 'relative' } }, feat.t),
        React.createElement('p', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 15, lineHeight: 1.6, color: '#AEB6C4', margin: '14px 0 0', position: 'relative' } }, feat.d)
      )
    ),
    rest.map((it, i) => React.createElement(Reveal, { key: it.t, delay: i * 60, dir: 'up', style: { gridColumn: i === 0 ? 'span 2' : 'span 1' } },
      React.createElement(HoverCard, { style: { background: 'var(--surface)', border: '1px solid var(--kv-border)', borderRadius: 18, padding: 24, height: '100%', display: 'flex', flexDirection: i === 0 ? 'row' : 'column', gap: i === 0 ? 18 : 0, alignItems: i === 0 ? 'center' : 'stretch' } },
        React.createElement(ServiceIcon, { ic: it.ic }),
        React.createElement('div', null,
          React.createElement('h3', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 600, fontSize: 18, color: 'var(--kv-fg1)', margin: i === 0 ? 0 : '16px 0 0', letterSpacing: '-0.01em' } }, it.t),
          React.createElement('p', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 14, lineHeight: 1.5, color: 'var(--kv-fg2)', margin: '8px 0 0' } }, it.d)
        )
      )
    ))
  );
}

// shared hover-lift card
function HoverCard({ children, style }) {
  const [h, setH] = React.useState(false);
  return React.createElement('div', {
    onMouseEnter: () => setH(true), onMouseLeave: () => setH(false),
    style: { boxShadow: h ? 'var(--kv-shadow-lg)' : 'var(--kv-shadow-xs)', transform: h ? 'translateY(-4px)' : 'none', transition: 'all 240ms var(--kv-ease-out)', ...style }
  }, children);
}

Object.assign(window, { Services, KV_SERVICES });
