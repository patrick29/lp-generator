/* global React, Icon, Eyebrow, Reveal, Wrap */
// Kinevo LP — Setores (para quem)

function Sectors() {
  const sectors = [
    { ic: 'shield', t: 'Corretoras de seguros', d: 'Cotações, renovações, endossos e follow-up com seguradoras, sem digitar duas vezes.', ex: ['Cotação automática', 'Renovação no prazo', 'Sinistro acompanhado'] },
    { ic: 'truck', t: 'Logística', d: 'Pedidos, romaneios, rastreio e atualização de status entre transportadora, ERP e cliente.', ex: ['Pedido → ERP', 'Rastreio em tempo real', 'Status ao cliente'] },
    { ic: 'building', t: 'Imobiliárias', d: 'Captação, propostas, contratos e repasses fluindo entre CRM, portais e financeiro.', ex: ['Lead distribuído', 'Proposta em minutos', 'Repasse conciliado'] },
  ];
  return React.createElement('section', { style: { background: 'var(--surface)', borderBottom: '1px solid var(--kv-border)' } },
    React.createElement(Wrap, { style: { padding: '100px 32px' } },
      React.createElement('div', { style: { textAlign: 'center', maxWidth: 620, margin: '0 auto 52px' } },
        React.createElement(Reveal, null, React.createElement(Eyebrow, { dot: true, style: { justifyContent: 'center' } }, 'Para quem')),
        React.createElement(Reveal, { delay: 80 },
          React.createElement('h2', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 700, fontSize: 'clamp(30px,3.6vw,44px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--kv-fg1)', margin: '16px 0 0' } }, 'Feito para operações que não podem parar.')),
        React.createElement(Reveal, { delay: 140 },
          React.createElement('p', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 18, color: 'var(--kv-fg2)', margin: '14px 0 0' } }, 'Conhecemos de perto os processos que mais travam nestes setores.'))
      ),
      React.createElement('div', { className: 'kv-svc-grid', style: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 } },
        sectors.map((s, i) => React.createElement(Reveal, { key: s.t, delay: i * 100, dir: 'up' },
          React.createElement(SectorCard, { ...s })
        ))
      )
    )
  );
}

function SectorCard({ ic, t, d, ex }) {
  const [h, setH] = React.useState(false);
  return React.createElement('div', {
    onMouseEnter: () => setH(true), onMouseLeave: () => setH(false),
    style: { background: h ? 'var(--kv-ink)' : 'var(--surface)', border: `1px solid ${h ? 'var(--kv-ink)' : 'var(--kv-border)'}`, borderRadius: 18, padding: 28, height: '100%', boxShadow: h ? 'var(--kv-shadow-lg)' : 'var(--kv-shadow-xs)', transform: h ? 'translateY(-4px)' : 'none', transition: 'all 280ms var(--kv-ease-out)' }
  },
    React.createElement('div', { style: { width: 50, height: 50, borderRadius: 13, background: h ? 'rgba(45,91,255,0.2)' : 'var(--kv-blue-50)', color: h ? '#5C7DFF' : 'var(--kv-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, transition: 'all 280ms' } }, React.createElement(Icon, { name: ic, size: 24 })),
    React.createElement('h3', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 600, fontSize: 20, color: h ? '#fff' : 'var(--kv-fg1)', margin: 0, letterSpacing: '-0.01em', transition: 'color 280ms' } }, t),
    React.createElement('p', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 14.5, lineHeight: 1.55, color: h ? '#AEB6C4' : 'var(--kv-fg2)', margin: '10px 0 18px', transition: 'color 280ms' } }, d),
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 9, paddingTop: 16, borderTop: `1px solid ${h ? '#2A2E37' : 'var(--kv-border)'}`, transition: 'border-color 280ms' } },
      ex.map(e => React.createElement('div', { key: e, style: { display: 'flex', alignItems: 'center', gap: 9 } },
        React.createElement(Icon, { name: 'arrow-right', size: 14, color: h ? '#19E0C8' : 'var(--kv-blue)' }),
        React.createElement('span', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 12, color: h ? '#AEB6C4' : 'var(--kv-fg2)', letterSpacing: '0.01em', transition: 'color 280ms' } }, e)
      ))
    )
  );
}

Object.assign(window, { Sectors });
