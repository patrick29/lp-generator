/* global React, Icon, Eyebrow, Reveal, Button, Wrap */
// Kinevo LP — Garantia + diferenciais (Por que a Kinevo)

function Guarantee({ onWhats }) {
  const diffs = [
    { ic: 'gift', t: 'Diagnóstico grátis', d: 'Mapeamos sua operação e mostramos onde a automação rende mais, antes de qualquer proposta.' },
    { ic: 'shield-check', t: 'Sem risco', d: 'Você só avança se enxergar o ganho. Começamos pequeno, provamos valor, então escalamos.' },
    { ic: 'user-check', t: 'Atendimento direto', d: 'Você fala com quem constrói. Sem camadas, sem repassar para júnior. Expertise sênior do início ao fim.' },
    { ic: 'infinity', t: 'Evolução contínua', d: 'Não entregamos e sumimos. Acompanhamos métricas e refinamos cada fluxo ao longo do tempo.' },
  ];
  return React.createElement('section', { style: { background: 'var(--surface)' } },
    React.createElement(Wrap, { style: { padding: '100px 32px' } },
      React.createElement('div', { className: 'kv-grid-collapse', style: { display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 64, alignItems: 'flex-start' } },
        React.createElement('div', { style: { position: 'sticky', top: 100 }, className: 'kv-sticky' },
          React.createElement(Reveal, null, React.createElement(Eyebrow, { dot: true }, 'Por que a Kinevo')),
          React.createElement(Reveal, { delay: 80 },
            React.createElement('h2', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 700, fontSize: 'clamp(30px,3.6vw,44px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--kv-fg1)', margin: '16px 0 0' } }, 'Confiança não se promete. Se prova.')),
          React.createElement(Reveal, { delay: 150 },
            React.createElement('p', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 18, lineHeight: 1.65, color: 'var(--kv-fg2)', margin: '18px 0 28px', maxWidth: 420 } },
              'Trabalhamos com método e mão na massa. Sem burocracia, sem promessa vazia. Você vê o valor antes de assumir qualquer compromisso.')),
          React.createElement(Reveal, { delay: 220 },
            React.createElement(Button, { size: 'lg', variant: 'whatsapp', iconLeft: 'message-circle', onClick: onWhats }, 'Começar pelo diagnóstico'))
        ),
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 14 } },
          diffs.map((d, i) => React.createElement(Reveal, { key: d.t, delay: i * 80, dir: 'up' },
            React.createElement(DiffRow, { ...d })
          ))
        )
      )
    )
  );
}

function DiffRow({ ic, t, d }) {
  const [h, setH] = React.useState(false);
  return React.createElement('div', {
    onMouseEnter: () => setH(true), onMouseLeave: () => setH(false),
    style: { display: 'flex', gap: 18, alignItems: 'flex-start', padding: 24, borderRadius: 16, border: `1px solid ${h ? 'var(--kv-blue-200)' : 'var(--kv-border)'}`, background: h ? 'var(--kv-blue-50)' : '#fff', transition: 'all 240ms var(--kv-ease-out)' }
  },
    React.createElement('span', { style: { width: 48, height: 48, borderRadius: 12, background: h ? 'var(--kv-blue)' : 'var(--kv-blue-50)', color: h ? '#fff' : 'var(--kv-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', transition: 'all 240ms' } }, React.createElement(Icon, { name: ic, size: 22 })),
    React.createElement('div', null,
      React.createElement('h3', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 600, fontSize: 20, color: 'var(--kv-fg1)', margin: 0, letterSpacing: '-0.01em' } }, t),
      React.createElement('p', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 15, lineHeight: 1.55, color: 'var(--kv-fg2)', margin: '8px 0 0' } }, d)
    )
  );
}

Object.assign(window, { Guarantee });
