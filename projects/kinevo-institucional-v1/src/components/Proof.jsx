/* global React, Icon, Eyebrow, NodeField, Counter, Reveal, Wrap */
// Kinevo LP — Proof (dark: projected metrics + placeholder testimonial)

function Proof() {
  const metrics = [
    { n: '−42%', l: 'menos esforço nas tarefas' },
    { n: '+3.4x', l: 'mais entregas no mesmo período' },
    { n: '120h', l: 'poupadas por mês / time' },
    { n: '11', l: 'anos de experiência técnica' },
  ];
  return React.createElement('section', { id: 'resultados', style: { position: 'relative', background: '#16181D', overflow: 'hidden' } },
    React.createElement(NodeField, { opacity: 0.3 }),
    React.createElement('div', { style: { position: 'absolute', inset: 0, background: 'radial-gradient(80% 90% at 15% 110%, rgba(25,224,200,0.14) 0%, transparent 55%)' } }),
    React.createElement(Wrap, { style: { position: 'relative', padding: '92px 32px' } },
      React.createElement(Reveal, null, React.createElement(Eyebrow, { color: '#19E0C8', dot: true }, 'O que você pode esperar')),
      React.createElement(Reveal, { delay: 80 },
        React.createElement('h2', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 700, fontSize: 'clamp(28px,3.4vw,40px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', margin: '16px 0 48px', maxWidth: 560 } }, 'Números que se movem na direção certa.')),
      React.createElement('div', { className: 'kv-metrics', style: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, borderTop: '1px solid #2A2E37', paddingTop: 40 } },
        metrics.map((m, i) => React.createElement(Reveal, { key: m.l, delay: i * 90, dir: 'up' },
          React.createElement('div', null,
            React.createElement(Counter, { value: m.n, style: { fontFamily: 'var(--kv-font-display)', fontWeight: 700, fontSize: 52, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1, display: 'block' } }),
            React.createElement('div', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 14, color: '#AEB6C4', marginTop: 12 } }, m.l)
          )
        ))
      ),
      React.createElement('p', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 10.5, color: '#6F7889', letterSpacing: '0.04em', margin: '18px 0 0' } }, 'Projeções ilustrativas baseadas em benchmarks do setor'),

      // placeholder testimonial
      React.createElement(Reveal, { delay: 120 },
        React.createElement('div', { style: { marginTop: 64, maxWidth: 860, position: 'relative', padding: '32px 34px', background: 'rgba(255,255,255,0.03)', border: '1px dashed #3A4150', borderRadius: 20 } },
          React.createElement('span', { style: { position: 'absolute', top: -10, left: 24, fontFamily: 'var(--kv-font-mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0E0F13', background: '#19E0C8', padding: '4px 10px', borderRadius: 6 } }, 'Depoimento de exemplo'),
          React.createElement('blockquote', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 500, fontSize: 'clamp(20px,2.4vw,28px)', lineHeight: 1.4, color: '#F4F6FA', margin: 0, letterSpacing: '-0.01em' } },
            '"A Kinevo tirou nossa operação do manual. O que levava dias hoje roda sozinho e melhora a cada mês."'),
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 12, marginTop: 24 } },
            React.createElement('div', { style: { width: 42, height: 42, borderRadius: '50%', background: 'linear-gradient(135deg,#2D5BFF,#19E0C8)', flex: 'none' } }),
            React.createElement('div', null,
              React.createElement('div', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 15, fontWeight: 600, color: '#fff' } }, 'Seu nome aqui'),
              React.createElement('div', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 12, color: '#6F7889' } }, 'Cargo · Sua empresa')
            )
          )
        )
      )
    )
  );
}

Object.assign(window, { Proof });
