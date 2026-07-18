/* global React, Icon, Eyebrow, Reveal, NodeField, KMark, Wrap */
// Kinevo LP — Integrações (dark, hub diagram + marquee of tool chips)

const KV_TOOLS_TOP = ['Salesforce', 'HubSpot', 'RD Station', 'Pipedrive', 'SAP', 'TOTVS', 'Omie', 'Bling'];
const KV_TOOLS_BOT = ['Conta Azul', 'Tiny', 'WhatsApp', 'Gmail', 'Slack', 'Google Sheets', 'Excel', 'API REST'];

function Marquee({ items, speed = 34, dir = 'left' }) {
  const row = [...items, ...items];
  return React.createElement('div', { style: { overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)' } },
    React.createElement('div', { style: { display: 'flex', gap: 14, width: 'max-content', animation: `${dir === 'right' ? 'kvMarqueeR' : 'kvMarquee'} ${speed}s linear infinite` } },
      row.map((t, i) => React.createElement('div', { key: i, style: { display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 20px', borderRadius: 12, border: '1px solid #2A2E37', background: 'rgba(255,255,255,0.02)', whiteSpace: 'nowrap' } },
        React.createElement('span', { style: { width: 26, height: 26, borderRadius: 7, background: 'rgba(45,91,255,0.14)', color: '#5C7DFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--kv-font-display)', fontWeight: 700, fontSize: 13, flex: 'none' } }, t[0]),
        React.createElement('span', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 15, fontWeight: 500, color: '#AEB6C4' } }, t)
      ))
    )
  );
}

function Integrations() {
  return React.createElement('section', { id: 'integracoes', style: { position: 'relative', background: '#0E0F13', overflow: 'hidden', scrollMarginTop: 70 } },
    React.createElement(NodeField, { opacity: 0.3 }),
    React.createElement('div', { style: { position: 'absolute', inset: 0, background: 'radial-gradient(70% 80% at 50% 110%, rgba(45,91,255,0.2) 0%, transparent 60%)' } }),
    React.createElement(Wrap, { style: { position: 'relative', padding: '100px 32px' } },
      React.createElement('div', { style: { textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' } },
        React.createElement(Reveal, null, React.createElement(Eyebrow, { color: '#19E0C8', dot: true, style: { justifyContent: 'center' } }, 'Integrações')),
        React.createElement(Reveal, { delay: 80 },
          React.createElement('h2', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 700, fontSize: 'clamp(30px,3.6vw,44px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff', margin: '16px 0 0' } }, 'Seus sistemas, finalmente conversando.')),
        React.createElement(Reveal, { delay: 140 },
          React.createElement('p', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 18, color: '#AEB6C4', margin: '14px 0 0' } }, 'CRM, ERP, PDV, e-mail, planilhas e APIs. Conectamos o que você já usa, sem trocar de ferramenta.'))
      ),
      // hub diagram
      React.createElement(Reveal, { delay: 120, dir: 'up' }, React.createElement(HubDiagram, null)),
      // marquees
      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 14, marginTop: 56 } },
        React.createElement(Marquee, { items: KV_TOOLS_TOP, speed: 38, dir: 'right' }),
        React.createElement(Marquee, { items: KV_TOOLS_BOT, speed: 38, dir: 'left' })
      ),
      React.createElement('p', { style: { textAlign: 'center', fontFamily: 'var(--kv-font-mono)', fontSize: 10.5, color: '#6F7889', letterSpacing: '0.04em', margin: '28px 0 0' } }, 'Logos ilustrativos · integramos via API, webhook ou conector')
    )
  );
}

function HubDiagram() {
  const nodes = [
    { label: 'CRM', ic: 'contact', a: -150 },
    { label: 'ERP', ic: 'boxes', a: -90 },
    { label: 'PDV', ic: 'store', a: -30 },
    { label: 'E-mail', ic: 'mail', a: 30 },
    { label: 'Planilhas', ic: 'table', a: 90 },
    { label: 'API', ic: 'webhook', a: 150 },
  ];
  const R = 200, cx = 0, cy = 0;
  return React.createElement('div', { className: 'kv-hub', style: { position: 'relative', height: 420, maxWidth: 560, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
    // connecting lines (SVG)
    React.createElement('svg', { viewBox: '-280 -210 560 420', style: { position: 'absolute', inset: 0, width: '100%', height: '100%' } },
      nodes.map((n, i) => {
        const rad = (n.a * Math.PI) / 180;
        const x = Math.cos(rad) * R, y = Math.sin(rad) * R;
        return React.createElement('line', { key: i, x1: 0, y1: 0, x2: x, y2: y, stroke: '#2247DB', strokeWidth: 1.5, opacity: 0.5, strokeDasharray: 5, style: { animation: `kvDash ${3 + i * 0.4}s linear infinite` } });
      }),
      // pulse dots travelling
      nodes.map((n, i) => {
        const rad = (n.a * Math.PI) / 180;
        const x = Math.cos(rad) * R, y = Math.sin(rad) * R;
        return React.createElement('circle', { key: 'p' + i, r: 3, fill: '#19E0C8' },
          React.createElement('animateMotion', { dur: `${2.6 + i * 0.3}s`, repeatCount: 'indefinite', path: `M${x},${y} L0,0` })
        );
      })
    ),
    // center K hub
    React.createElement('div', { style: { position: 'absolute', width: 96, height: 96, borderRadius: 24, background: 'linear-gradient(160deg,#1A1D24,#0E0F13)', border: '1px solid #2D5BFF', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 40px rgba(45,91,255,0.5)', zIndex: 2 } },
      React.createElement(KMark, { size: 52 })
    ),
    // orbiting nodes
    nodes.map((n, i) => {
      const rad = (n.a * Math.PI) / 180;
      const x = Math.cos(rad) * R, y = Math.sin(rad) * R;
      return React.createElement('div', { key: i, className: 'kv-hub-node', style: { position: 'absolute', transform: `translate(${x}px, ${y}px)`, zIndex: 3 } },
        React.createElement('div', { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 } },
          React.createElement('div', { style: { width: 58, height: 58, borderRadius: 15, background: '#16181D', border: '1px solid #2A2E37', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#5C7DFF', boxShadow: '0 8px 22px rgba(0,0,0,0.4)' } }, React.createElement(Icon, { name: n.ic, size: 24 })),
          React.createElement('span', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 11, color: '#AEB6C4', letterSpacing: '0.04em' } }, n.label)
        )
      );
    })
  );
}

Object.assign(window, { Integrations });
