/* global React, Icon, Eyebrow, Reveal, Wrap */
// Kinevo LP — Sobre (founder-led trust)

function About() {
  const companies = ['TOTVS', 'Lojas Renner', 'BTG Pactual', 'Compass'];
  const facts = [
    { ic: 'code-2', t: '11 anos', d: 'desenvolvendo software de ponta a ponta' },
    { ic: 'building-2', t: 'Grandes operações', d: 'experiência em empresas nacionais e globais' },
    { ic: 'git-merge', t: 'Sistemas críticos', d: 'integrações e processos rodando em produção' },
  ];
  return React.createElement('section', { id: 'sobre', style: { background: 'var(--bg-subtle)', borderTop: '1px solid var(--kv-border)', borderBottom: '1px solid var(--kv-border)', scrollMarginTop: 70 } },
    React.createElement(Wrap, { style: { padding: '100px 32px' } },
      React.createElement('div', { className: 'kv-grid-collapse', style: { display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 64, alignItems: 'center' } },
        // portrait placeholder
        React.createElement(Reveal, { dir: 'right' },
          React.createElement('div', { style: { position: 'relative' } },
            React.createElement('div', { style: { position: 'relative', aspectRatio: '4/5', borderRadius: 20, overflow: 'hidden', background: 'linear-gradient(160deg,#1A1D24,#0E0F13)', border: '1px solid var(--kv-border)', boxShadow: 'var(--kv-shadow-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
              React.createElement('div', { style: { position: 'absolute', inset: 0, background: 'radial-gradient(70% 60% at 70% 10%, rgba(45,91,255,0.3), transparent 60%)' } }),
              React.createElement('div', { style: { textAlign: 'center', color: '#6F7889', position: 'relative' } },
                React.createElement(Icon, { name: 'user-round', size: 64, color: '#3A4150' }),
                React.createElement('div', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 11, marginTop: 12, letterSpacing: '0.05em' } }, 'FOTO DO FUNDADOR')
              )
            ),
            // floating badge
            React.createElement('div', { style: { position: 'absolute', bottom: -18, right: -14, background: 'var(--surface)', border: '1px solid var(--kv-border)', borderRadius: 14, padding: '14px 18px', boxShadow: 'var(--kv-shadow-lg)', display: 'flex', alignItems: 'center', gap: 12 } },
              React.createElement('span', { style: { width: 40, height: 40, borderRadius: 10, background: 'var(--kv-blue-50)', color: 'var(--kv-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' } }, React.createElement(Icon, { name: 'badge-check', size: 22 })),
              React.createElement('div', null,
                React.createElement('div', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 700, fontSize: 16, color: 'var(--kv-fg1)' } }, 'Patrick Almeida'),
                React.createElement('div', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 11, color: 'var(--kv-fg3)', letterSpacing: '0.03em' } }, 'Fundador · Kinevo')
              )
            )
          )
        ),
        React.createElement('div', null,
          React.createElement(Reveal, null, React.createElement(Eyebrow, { dot: true }, 'Quem está por trás')),
          React.createElement(Reveal, { delay: 80 },
            React.createElement('h2', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 700, fontSize: 'clamp(28px,3.4vw,42px)', lineHeight: 1.12, letterSpacing: '-0.02em', color: 'var(--kv-fg1)', margin: '16px 0 0' } }, 'Quem automatiza sua operação conhece operação de verdade.')),
          React.createElement(Reveal, { delay: 150 },
            React.createElement('p', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 18, lineHeight: 1.65, color: 'var(--kv-fg2)', margin: '18px 0 0', maxWidth: 520 } },
              'A Kinevo nasce da mão de quem passou ', React.createElement('strong', { style: { color: 'var(--kv-fg1)', fontWeight: 600 } }, '11 anos construindo software'), ' dentro de algumas das maiores empresas do Brasil e do mundo. Conhecemos por dentro os processos que travam operações e sabemos como destravá-los.')),
          React.createElement(Reveal, { delay: 220 },
            React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, margin: '32px 0 0' }, className: 'kv-svc-grid' },
              facts.map(f => React.createElement('div', { key: f.t, style: { background: 'var(--surface)', border: '1px solid var(--kv-border)', borderRadius: 14, padding: 18 } },
                React.createElement('span', { style: { width: 38, height: 38, borderRadius: 9, background: 'var(--kv-blue-50)', color: 'var(--kv-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 } }, React.createElement(Icon, { name: f.ic, size: 18 })),
                React.createElement('div', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 700, fontSize: 18, color: 'var(--kv-fg1)' } }, f.t),
                React.createElement('div', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 13, lineHeight: 1.45, color: 'var(--kv-fg2)', marginTop: 4 } }, f.d)
              ))
            )
          ),
          React.createElement(Reveal, { delay: 300 },
            React.createElement('div', { style: { marginTop: 36 } },
              React.createElement('div', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 11, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--kv-fg3)', marginBottom: 16 } }, 'Experiência construída em'),
              React.createElement('div', { style: { display: 'flex', gap: 28, flexWrap: 'wrap', alignItems: 'center' } },
                companies.map(c => React.createElement('span', { key: c, style: { fontFamily: 'var(--kv-font-display)', fontWeight: 600, fontSize: 19, color: 'var(--kv-neutral-400)', letterSpacing: '-0.01em' } }, c))
              )
            )
          )
        )
      )
    )
  );
}

Object.assign(window, { About });
