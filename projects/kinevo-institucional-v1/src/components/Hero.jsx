/* global React, Button, Icon, Eyebrow, NodeField, Counter, Reveal, useParallax, Wrap, WhatsGlyph */
// Kinevo LP — Hero (dark, premium motion)
const { useState: useStateHero, useEffect: useEffectHero } = React;

function Hero({ onWhats, heroStyle = 'crescimento' }) {
  const [glowRef, glowY] = useParallax(0.08);
  return React.createElement('section', {
    id: 'top',
    style: { position: 'relative', background: '#0E0F13', overflow: 'hidden', borderBottom: '1px solid #1F222A' }
  },
    React.createElement(NodeField, { opacity: 0.55 }),
    React.createElement('div', { ref: glowRef, style: { position: 'absolute', inset: '-20% 0 0 0', transform: `translateY(${glowY}px)`, background: 'radial-gradient(70% 70% at 80% -5%, rgba(45,91,255,0.42) 0%, rgba(25,224,200,0.08) 40%, transparent 66%)', pointerEvents: 'none' } }),
    // subtle diagonal speed-streaks
    React.createElement('div', { style: { position: 'absolute', inset: 0, opacity: 0.5, background: 'repeating-linear-gradient(102deg, transparent 0 38px, rgba(255,255,255,0.012) 38px 39px)', pointerEvents: 'none' } }),

    React.createElement(Wrap, { className: 'kv-hero-grid', style: { position: 'relative', padding: '116px 32px 120px' } },
      React.createElement('div', { className: 'kv-hero-head' },
        React.createElement(Reveal, { dir: 'up', delay: 0 },
          React.createElement('div', { style: { display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 14px', borderRadius: 999, border: '1px solid #2A2E37', background: 'rgba(255,255,255,0.03)', marginBottom: 26 } },
            React.createElement('span', { style: { width: 7, height: 7, borderRadius: '50%', background: '#19E0C8', boxShadow: '0 0 0 0 rgba(25,224,200,0.6)', animation: 'kvPing 2.4s var(--kv-ease-out) infinite' } }),
            React.createElement(Eyebrow, { color: '#AEB6C4' }, 'Automação que vira crescimento')
          )
        ),
        React.createElement('h1', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 700, fontSize: 'clamp(42px, 5.2vw, 66px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: '#fff', margin: 0 } },
          React.createElement(Reveal, { dir: 'up', delay: 60, style: { display: 'block' } }, 'Cresça o faturamento.'),
          React.createElement(Reveal, { dir: 'up', delay: 150, style: { display: 'block' } },
            React.createElement('span', { style: { background: 'linear-gradient(102deg,#5C7DFF,#19E0C8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' } }, 'Não o tamanho do time.')
          )
        )
      ),
      React.createElement(Reveal, { dir: 'left', delay: 200, className: 'kv-hero-card' },
        heroStyle === 'fluxo' ? React.createElement(FlowCard, null) : React.createElement(GrowthChart, null)
      ),
      React.createElement('div', { className: 'kv-hero-body' },
        React.createElement(Reveal, { dir: 'up', delay: 240 },
          React.createElement('p', { className: 'kv-hero-lead', style: { fontFamily: 'var(--kv-font-body)', fontSize: 20, lineHeight: 1.6, color: '#AEB6C4', maxWidth: 520, margin: '24px 0 36px' } },
            'Cada tarefa manual é um teto invisível no seu crescimento. Quem automatiza atende mais, vende mais e lucra mais, sem inchar a equipe. Quem não automatiza fica para trás.')
        ),
        React.createElement(Reveal, { dir: 'up', delay: 320 },
          React.createElement('div', { style: { display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' } },
            React.createElement(Button, { size: 'lg', variant: 'whatsapp', onClick: onWhats }, React.createElement(WhatsGlyph, { size: 18 }), 'Quero escalar assim'),
            React.createElement(Button, { size: 'lg', variant: 'outlineLight', icon: 'arrow-down', href: '#solucoes' }, 'Ver como funciona')
          )
        ),
        React.createElement(Reveal, { dir: 'up', delay: 420 },
          React.createElement('div', { style: { display: 'flex', gap: 36, marginTop: 46, flexWrap: 'wrap' } },
            [['+3.4x', 'mais entregas'], ['−42%', 'menos esforço'], ['0', 'novas contratações']].map(([n, l]) =>
              React.createElement('div', { key: l },
                React.createElement(Counter, { value: n, style: { fontFamily: 'var(--kv-font-display)', fontWeight: 700, fontSize: 28, color: '#fff', letterSpacing: '-0.02em', display: 'block' } }),
                React.createElement('div', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 11, color: '#6F7889', marginTop: 4, letterSpacing: '0.03em' } }, l)
              )
            )
          )
        )
      )
    ),
    // projection disclaimer
    React.createElement('div', { style: { position: 'relative', textAlign: 'center', paddingBottom: 22 } },
      React.createElement('span', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 10.5, color: '#6F7889', letterSpacing: '0.04em' } }, 'Indicadores ilustrativos de projeção')
    )
  );
}

// Growth chart: manual (flat) vs automated (rising) — the growth you're leaving on the table
function GrowthChart() {
  const [drawn, setDrawn] = useStateHero(false);
  useEffectHero(() => {
    const id = setTimeout(() => setDrawn(true), 350);
    return () => clearTimeout(id);
  }, []);
  const autoPath = 'M 44 296 C 170 286, 300 210, 460 64';
  const manualPath = 'M 44 296 C 180 292, 320 286, 460 272';
  const areaPath = 'M 44 296 C 170 286, 300 210, 460 64 L 460 272 C 320 286, 180 292, 44 296 Z';
  return React.createElement('div', {
    style: { background: 'linear-gradient(160deg,#1A1D24 0%,#141519 100%)', border: '1px solid #2A2E37', borderRadius: 20, padding: '24px 24px 20px', boxShadow: '0 30px 70px rgba(0,0,0,0.5)', position: 'relative', overflow: 'hidden' }
  },
    React.createElement('div', { style: { position: 'absolute', top: -1, left: 24, right: 24, height: 1, background: 'linear-gradient(90deg, transparent, rgba(25,224,200,0.6), transparent)' } }),
    React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 } },
      React.createElement('span', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 11, color: '#6F7889', letterSpacing: '0.05em' } }, 'crescimento: 12 meses'),
      React.createElement('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'var(--kv-font-mono)', fontSize: 11, color: '#19E0C8' } },
        React.createElement('span', { style: { width: 6, height: 6, borderRadius: '50%', background: '#19E0C8' } }), 'projeção')
    ),
    React.createElement('svg', { viewBox: '0 0 500 330', style: { width: '100%', display: 'block', overflow: 'visible' } },
      React.createElement('defs', null,
        React.createElement('linearGradient', { id: 'kvAutoStroke', x1: '0', y1: '1', x2: '1', y2: '0' },
          React.createElement('stop', { offset: '0%', stopColor: '#2D5BFF' }),
          React.createElement('stop', { offset: '100%', stopColor: '#19E0C8' })
        ),
        React.createElement('linearGradient', { id: 'kvAutoArea', x1: '0', y1: '0', x2: '0', y2: '1' },
          React.createElement('stop', { offset: '0%', stopColor: 'rgba(45,91,255,0.28)' }),
          React.createElement('stop', { offset: '100%', stopColor: 'rgba(45,91,255,0)' })
        )
      ),
      // gridlines
      [88, 152, 216, 280].map((y) => React.createElement('line', { key: y, x1: 44, y1: y, x2: 460, y2: y, stroke: '#1A1D24', strokeWidth: 1 })),
      // area between curves
      React.createElement('path', { d: areaPath, fill: 'url(#kvAutoArea)', opacity: drawn ? 1 : 0, style: { transition: 'opacity 700ms ease 900ms' } }),
      // manual (flat) line
      React.createElement('path', { d: manualPath, fill: 'none', stroke: '#6F7889', strokeWidth: 2.5, strokeDasharray: '2 7', strokeLinecap: 'round', pathLength: 1, strokeDashoffset: drawn ? 0 : 1, style: { strokeDasharray: drawn ? '2 7' : '1', strokeDashoffset: drawn ? 0 : 1, transition: 'stroke-dashoffset 1500ms cubic-bezier(0.22,1,0.36,1)' } }),
      // automated (rising) line
      React.createElement('path', { d: autoPath, fill: 'none', stroke: 'url(#kvAutoStroke)', strokeWidth: 4, strokeLinecap: 'round', pathLength: 1, style: { strokeDasharray: 1, strokeDashoffset: drawn ? 0 : 1, transition: 'stroke-dashoffset 1700ms cubic-bezier(0.22,1,0.36,1)' } }),
      // travelling dot on automated curve
      drawn && React.createElement('circle', { r: 4, fill: '#19E0C8' },
        React.createElement('animateMotion', { dur: '3.4s', repeatCount: 'indefinite', path: autoPath, keyPoints: '0;1', keyTimes: '0;1', calcMode: 'spline', keySplines: '0.22 1 0.36 1' })
      ),
      // manual endpoint
      React.createElement('circle', { cx: 460, cy: 272, r: 4, fill: '#6F7889', opacity: drawn ? 1 : 0, style: { transition: 'opacity 400ms ease 1400ms' } }),
      // automated endpoint glow node
      React.createElement('circle', { cx: 460, cy: 64, r: 7, fill: '#19E0C8', opacity: drawn ? 1 : 0, style: { transition: 'opacity 400ms ease 1600ms', filter: 'drop-shadow(0 0 8px rgba(25,224,200,0.8))' } })
    ),
    // overlaid labels (HTML for crisp type)
    React.createElement('div', { style: { position: 'relative', marginTop: -6, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' } },
      React.createElement('div', null,
        React.createElement('div', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 10.5, color: '#6F7889', letterSpacing: '0.04em', textTransform: 'uppercase' } }, 'Operação manual'),
        React.createElement('div', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 700, fontSize: 22, color: '#AEB6C4', letterSpacing: '-0.02em' } }, '+12%')
      ),
      React.createElement('div', { style: { textAlign: 'right' } },
        React.createElement('div', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 10.5, color: '#19E0C8', letterSpacing: '0.04em', textTransform: 'uppercase' } }, 'Operação automatizada'),
        React.createElement('div', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 700, fontSize: 34, letterSpacing: '-0.02em', background: 'linear-gradient(102deg,#5C7DFF,#19E0C8)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' } },
          React.createElement(Counter, { value: '+218%' })
        )
      )
    ),
    React.createElement('div', { style: { marginTop: 4, fontFamily: 'var(--kv-font-mono)', fontSize: 10, color: '#6F7889', letterSpacing: '0.03em' } }, 'crescimento acumulado · mesmo time')
  );
}

function FlowCard() {
  const steps = [
    { ic: 'layout-template', label: 'LP criada e publicada', tag: 'Captação', color: '#19E0C8' },
    { ic: 'user-plus', label: 'Lead capturado no formulário', tag: 'Captação', color: '#19E0C8' },
    { ic: 'sparkles', label: 'IA qualifica e pontua', tag: 'Qualificação', color: '#2D5BFF' },
    { ic: 'settings', label: 'CRM configurado e integrado', tag: 'Integração', color: '#2D5BFF' },
    { ic: 'send', label: 'Encaminha ao vendedor certo', tag: 'Distribuição', color: '#2D5BFF' },
    { ic: 'bell-ring', label: 'Follow-up automático', tag: 'Nutrição', color: '#2D5BFF' },
    { ic: 'handshake', label: 'Lead convertido', tag: 'Conversão', color: '#1FB873' },
  ];
  const [active, setActive] = useStateHero(0);
  useEffectHero(() => {
    const id = setInterval(() => setActive(a => (a + 1) % steps.length), 1100);
    return () => clearInterval(id);
  }, []);

  return React.createElement('div', {
    style: { background: 'linear-gradient(160deg,#1A1D24 0%,#141519 100%)', border: '1px solid #2A2E37', borderRadius: 20, padding: 22, boxShadow: '0 30px 70px rgba(0,0,0,0.5)', position: 'relative', overflow: 'hidden' }
  },
    React.createElement('div', { style: { position: 'absolute', top: -1, left: 22, right: 22, height: 1, background: 'linear-gradient(90deg, transparent, rgba(25,224,200,0.6), transparent)' } }),
    React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 } },
      React.createElement('span', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 11, color: '#6F7889', letterSpacing: '0.05em' } }, 'fluxo: captacao_de_leads'),
      React.createElement('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'var(--kv-font-mono)', fontSize: 11, color: '#19E0C8' } },
        React.createElement('span', { style: { width: 6, height: 6, borderRadius: '50%', background: '#19E0C8' } }), 'ativo')
    ),
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 7 } },
      steps.map((s, i) => {
        const isActive = i === active;
        const done = i < active;
        return React.createElement('div', { key: i },
          React.createElement('div', {
            style: {
              display: 'flex', alignItems: 'center', gap: 11, padding: '10px 13px',
              background: isActive ? 'rgba(45,91,255,0.10)' : '#0E0F13',
              border: `1px solid ${isActive ? 'rgba(45,91,255,0.5)' : '#1A1D24'}`,
              borderRadius: 11, transition: 'all 320ms var(--kv-ease-out)',
              transform: isActive ? 'translateX(4px)' : 'none',
            }
          },
            React.createElement('span', { style: { width: 30, height: 30, borderRadius: 8, background: isActive ? 'rgba(45,91,255,0.2)' : 'rgba(45,91,255,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: done ? '#1FB873' : s.color, flex: 'none', transition: 'all 320ms' } },
              React.createElement(Icon, { name: done ? 'check' : s.ic, size: 16 })),
            React.createElement('div', { style: { flex: 1 } },
              React.createElement('div', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 13.5, fontWeight: 500, color: '#F4F6FA' } }, s.label),
              React.createElement('div', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 9.5, color: '#6F7889', marginTop: 1, textTransform: 'uppercase', letterSpacing: '0.05em' } }, s.tag)
            ),
            isActive && React.createElement('span', { style: { width: 7, height: 7, borderRadius: '50%', background: '#19E0C8', animation: 'kvPing 1.6s var(--kv-ease-out) infinite' } })
          ),
          i < steps.length - 1 && React.createElement('div', { style: { width: 2, height: 7, background: done ? '#1FB873' : '#2A2E37', margin: '0 0 0 28px', transition: 'background 320ms' } })
        );
      })
    )
  );
}

Object.assign(window, { Hero, FlowCard });
