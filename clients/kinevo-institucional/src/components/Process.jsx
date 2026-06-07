/* global React, Icon, Eyebrow, Reveal, useInView, Wrap */
// Kinevo LP — Como funciona (animated 4-step process with flowing line)

function Process() {
  const steps = [
    { n: '01', ic: 'search', t: 'Diagnóstico', d: 'Mapeamos seus processos e achamos onde o tempo está sendo perdido. Grátis, sem compromisso.' },
    { n: '02', ic: 'pen-tool', t: 'Desenho do fluxo', d: 'Desenhamos a automação ponta a ponta, com regras e integrações entre seus sistemas.' },
    { n: '03', ic: 'rocket', t: 'Implementação', d: 'Colocamos em produção com testes, alertas e reprocessamento. Sem virar a chave no escuro.' },
    { n: '04', ic: 'infinity', t: 'Evolução', d: 'Acompanhamos as métricas e refinamos a cada ciclo. Movimento que evolui.' },
  ];
  const [ref, inView] = useInView({ threshold: 0.3 });
  const n = steps.length;
  // seq interleaves: even => an icon is revealed, odd => the bar grows one segment.
  // icon i shown when seq >= 2*i ; segments filled = floor((seq+1)/2), capped at n-1.
  const [seq, setSeq] = React.useState(-1);
  React.useEffect(() => {
    if (!inView) return;
    const total = n * 2 - 2; // last meaningful state
    let cur = 0;
    setSeq(0);
    const id = setInterval(() => {
      cur += 1;
      setSeq(cur);
      if (cur >= total) clearInterval(id);
    }, 360);
    return () => clearInterval(id);
  }, [inView]);
  const filled = seq < 0 ? 0 : Math.min(Math.floor((seq + 1) / 2), n - 1);

  return React.createElement('section', { id: 'processo', style: { background: 'var(--bg-subtle)', borderTop: '1px solid var(--kv-border)', borderBottom: '1px solid var(--kv-border)', scrollMarginTop: 70 } },
    React.createElement(Wrap, { style: { padding: '100px 32px' } },
      React.createElement(Reveal, null, React.createElement(Eyebrow, { dot: true }, 'Como funciona')),
      React.createElement(Reveal, { delay: 80 },
        React.createElement('h2', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 700, fontSize: 'clamp(30px,3.6vw,44px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--kv-fg1)', margin: '16px 0 12px', maxWidth: 560 } }, 'Quatro passos. Movimento contínuo.')),
      React.createElement(Reveal, { delay: 140 },
        React.createElement('p', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 18, color: 'var(--kv-fg2)', margin: '0 0 56px', maxWidth: 520 } }, 'Um método claro, do primeiro diagnóstico ao fluxo que melhora sozinho.')),

      React.createElement('div', { ref, className: 'kv-process', style: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0, position: 'relative' } },
        // connector line — grows one segment at a time, in sync with each icon
        React.createElement('div', { className: 'kv-process-line', style: { position: 'absolute', top: 23, left: 24, right: 'calc(25% - 24px)', height: 2, background: 'transparent', overflow: 'hidden' } },
          React.createElement('div', { style: { position: 'absolute', inset: 0, width: `${(filled / (n - 1)) * 100}%`, background: 'linear-gradient(90deg,#2D5BFF,#19E0C8)', transition: 'width 340ms cubic-bezier(0.22,1,0.36,1)' } })
        ),
        steps.map((s, i) => {
          const shown = seq >= 2 * i;
          return React.createElement('div', {
            key: s.n,
            style: { position: 'relative', paddingRight: 24, opacity: shown ? 1 : 0, transform: shown ? 'none' : 'translateY(22px)', filter: shown ? 'none' : 'blur(3px)', transition: 'opacity 420ms cubic-bezier(0.22,1,0.36,1), transform 480ms cubic-bezier(0.22,1,0.36,1), filter 420ms ease' }
          },
            React.createElement('div', { style: { width: 48, height: 48, borderRadius: 13, background: 'var(--surface)', border: '1px solid var(--kv-border)', boxShadow: 'var(--kv-shadow-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--kv-blue)', marginBottom: 22, position: 'relative', zIndex: 1 } },
              React.createElement(Icon, { name: s.ic, size: 22 })),
            React.createElement('div', { style: { display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8 } },
              React.createElement('span', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 13, fontWeight: 600, color: 'var(--kv-blue)' } }, s.n),
              React.createElement('h3', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 600, fontSize: 20, color: 'var(--kv-fg1)', margin: 0 } }, s.t)
            ),
            React.createElement('p', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 14.5, lineHeight: 1.55, color: 'var(--kv-fg2)', margin: 0 } }, s.d)
          );
        })
      )
    )
  );
}

Object.assign(window, { Process });
