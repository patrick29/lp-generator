/* global React, Icon, Eyebrow, Reveal, Wrap */
// Kinevo LP — Problema ⇄ Blueprint da solução (carrossel, dores gerais)
const { useState: useStateP, useEffect: useEffectP, useRef: useRefP } = React;

const KV_PAIRS = [
  { pic: 'banknote', pt: 'Horas caras em tarefas baratas',
    pd: 'Seu time qualificado passa o dia copiando dados entre planilhas e sistemas, em vez de vender e atender.',
    cost: 'Folha de pagamento queimada no operacional',
    st: 'Tarefa repetitiva no piloto automático',
    steps: ['O sistema recebe a tarefa', 'A Kinevo executa a regra sozinha', 'Resultado pronto, sem ninguém digitar'] },
  { pic: 'receipt-text', pt: 'Erro manual vira prejuízo',
    pd: 'Cadastro digitado duas vezes, dado que não bate, informação perdida entre um sistema e outro.',
    cost: 'Estorno, multa ou cliente perdido',
    st: 'Um dado, um caminho só',
    steps: ['A informação entra uma única vez', 'Ela flui sozinha entre seus sistemas', 'Tudo bate, sem retrabalho'] },
  { pic: 'hourglass', pt: 'Processo lento trava o caixa',
    pd: 'Aprovações, conciliações e cobranças que ficam paradas esperando alguém lembrar de tocar.',
    cost: 'Recebimento atrasado, caixa apertado',
    st: 'Aprovação e cobrança no automático',
    steps: ['O pedido entra no fluxo', 'Avança sozinho por cada etapa', 'O dinheiro entra mais rápido'] },
  { pic: 'door-open', pt: 'Receita escorrendo pelo gargalo',
    pd: 'Lead que ninguém respondeu, cotação que esfriou, cliente que ficou sem retorno e foi pro concorrente.',
    cost: 'Venda que evapora sem ninguém ver',
    st: 'Nenhuma oportunidade esquecida',
    steps: ['O lead chega e é registrado', 'A Kinevo acompanha e lembra', 'Follow-up automático até fechar'] },
  { pic: 'file-spreadsheet', pt: 'Relatório montado na unha toda semana',
    pd: 'Alguém perde horas juntando número de vários sistemas e planilhas só pra fechar o relatório de sempre.',
    cost: 'Horas do time gastas em copiar e colar',
    st: 'Relatório pronto sozinho',
    steps: ['Os dados são coletados automaticamente', 'Consolidados no formato que você usa', 'O relatório chega pronto, no prazo'] },
  { pic: 'inbox', pt: 'Informação espalhada, ninguém acha',
    pd: 'Dado importante perdido entre e-mail, WhatsApp, planilha e sistema. Cada um tem uma versão diferente.',
    cost: 'Decisão tomada com dado errado',
    st: 'Tudo num lugar só',
    steps: ['As informações entram automaticamente', 'Ficam centralizadas e sempre atualizadas', 'A equipe enxerga tudo em um lugar'] },
  { pic: 'user-x', pt: 'O processo depende de uma pessoa só',
    pd: 'Quando quem faz aquela tarefa falta ou sai, tudo trava, porque o passo a passo está só na cabeça dela.',
    cost: 'Operação refém de uma pessoa',
    st: 'Processo que não para',
    steps: ['A regra fica registrada no fluxo', 'Roda igual todo dia, sem depender de ninguém', 'Férias e troca de time não travam nada'] },
  { pic: 'users', pt: 'Crescer só contratando mais gente',
    pd: 'Cada aumento de volume exige mais mão de obra no operacional, e o custo sobe na mesma velocidade da receita.',
    cost: 'Margem que não cresce com a empresa',
    st: 'Escala sem inchar o time',
    steps: ['O volume de trabalho aumenta', 'A automação absorve o repetitivo', 'Você cresce sem contratar na mesma proporção'] },
];

function Problem() {
  const [active, setActive] = useStateP(0);
  const [paused, setPaused] = useStateP(false);
  const pausedRef = useRefP(false);
  pausedRef.current = paused;
  const n = KV_PAIRS.length;

  useEffectP(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) setActive((a) => (a + 1) % n);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const go = (d) => setActive((a) => (a + d + n) % n);

  return React.createElement('section', {
    id: 'problema', style: { background: 'var(--bg-subtle)', borderBottom: '1px solid var(--kv-border)' }
  },
    React.createElement(Wrap, { style: { padding: '100px 32px' } },
      React.createElement('div', { style: { maxWidth: 680, marginBottom: 40 } },
        React.createElement(Reveal, null, React.createElement(Eyebrow, { dot: true }, 'O custo de não automatizar')),
        React.createElement(Reveal, { delay: 80 },
          React.createElement('h2', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 700, fontSize: 'clamp(30px,3.6vw,44px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--kv-fg1)', margin: '16px 0 0' } },
            'Reconheceu o problema? ',
            React.createElement('span', { style: { color: 'var(--kv-neutral-400)' } }, 'A saída está do lado.')
          )
        ),
        React.createElement(Reveal, { delay: 160 },
          React.createElement('p', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 18, lineHeight: 1.65, color: 'var(--kv-fg2)', margin: '18px 0 0', maxWidth: 540 } },
            'Cada dor que trava sua operação tem uma saída. Deslize e veja, em alto nível, como a automação resolve cada uma.')
        )
      ),
      React.createElement(Reveal, { delay: 120, dir: 'up' },
        React.createElement('div', { onMouseEnter: () => setPaused(true), onMouseLeave: () => setPaused(false) },
          React.createElement('div', { style: { overflow: 'hidden', borderRadius: 20 } },
            React.createElement('div', { style: { display: 'flex', width: `${n * 100}%`, transform: `translateX(-${active * (100 / n)}%)`, transition: 'transform 620ms cubic-bezier(0.22,1,0.36,1)' } },
              KV_PAIRS.map((p) => React.createElement(Slide, { key: p.pt, ...p, total: n }))
            )
          ),
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 22, gap: 16, flexWrap: 'wrap' } },
            React.createElement('div', { style: { display: 'flex', gap: 9, flexWrap: 'wrap' } },
              KV_PAIRS.map((p, i) => React.createElement('button', {
                key: i, onClick: () => setActive(i), 'aria-label': `Slide ${i + 1}`,
                style: { width: i === active ? 30 : 9, height: 9, borderRadius: 999, border: 'none', cursor: 'pointer', padding: 0, background: i === active ? 'var(--kv-blue)' : 'var(--kv-border-strong)', transition: 'all 320ms var(--kv-ease-out)' }
              }))
            ),
            React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 14 } },
              React.createElement('span', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 12, color: 'var(--kv-fg3)', letterSpacing: '0.04em' } }, `${String(active + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}`),
              React.createElement(NavBtn, { dir: 'left', onClick: () => go(-1) }),
              React.createElement(NavBtn, { dir: 'right', onClick: () => go(1) })
            )
          )
        )
      )
    )
  );
}

function NavBtn({ dir, onClick }) {
  const [h, setH] = useStateP(false);
  return React.createElement('button', {
    onClick, onMouseEnter: () => setH(true), onMouseLeave: () => setH(false), 'aria-label': dir === 'left' ? 'Anterior' : 'Próximo',
    style: { width: 42, height: 42, borderRadius: '50%', border: '1px solid', borderColor: h ? 'var(--kv-blue)' : 'var(--kv-border-strong)', background: h ? 'var(--kv-blue)' : 'var(--surface)', color: h ? '#fff' : 'var(--kv-fg1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 200ms var(--kv-ease-out)', boxShadow: 'var(--kv-shadow-xs)' }
  }, React.createElement(Icon, { name: dir === 'left' ? 'arrow-left' : 'arrow-right', size: 19 }));
}

function Slide({ pic, pt, pd, cost, st, steps, total }) {
  return React.createElement('div', { style: { flex: `0 0 ${100 / total}%`, width: `${100 / total}%`, paddingRight: 2 } },
    React.createElement('div', { className: 'kv-carousel-slide', style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, minHeight: 340 } },
      // problem side
      React.createElement('div', { style: { background: 'var(--surface)', border: '1px solid var(--kv-border)', borderRadius: '16px 0 0 16px', padding: '36px 38px', display: 'flex', flexDirection: 'column' } },
        React.createElement('div', { style: { display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 22 } },
          React.createElement('span', { style: { width: 8, height: 8, borderRadius: '50%', background: 'var(--kv-danger)' } }),
          React.createElement('span', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 11, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--kv-danger)' } }, 'Onde dói hoje')
        ),
        React.createElement('span', { style: { width: 50, height: 50, borderRadius: 13, background: 'var(--kv-danger-bg)', color: 'var(--kv-danger)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 } }, React.createElement(Icon, { name: pic, size: 24 })),
        React.createElement('h3', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 700, fontSize: 24, color: 'var(--kv-fg1)', margin: 0, letterSpacing: '-0.02em', lineHeight: 1.15 } }, pt),
        React.createElement('p', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 15.5, lineHeight: 1.6, color: 'var(--kv-fg2)', margin: '12px 0 0' } }, pd),
        React.createElement('div', { style: { flex: 1, minHeight: 18 } }),
        React.createElement('div', { style: { display: 'inline-flex', alignItems: 'center', gap: 9, padding: '11px 14px', background: 'var(--kv-danger-bg)', borderRadius: 10, alignSelf: 'flex-start' } },
          React.createElement(Icon, { name: 'trending-down', size: 16, color: 'var(--kv-danger)' }),
          React.createElement('span', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 13.5, fontWeight: 500, color: 'var(--kv-danger)' } }, cost)
        )
      ),
      // blueprint side (dark)
      React.createElement('div', { style: { position: 'relative', background: 'linear-gradient(160deg,#1A1D24 0%,#0E0F13 100%)', border: '1px solid #2A2E37', borderRadius: '0 16px 16px 0', padding: '36px 38px', display: 'flex', flexDirection: 'column', overflow: 'hidden' } },
        React.createElement('div', { style: { position: 'absolute', inset: 0, background: 'radial-gradient(70% 60% at 90% 0%, rgba(45,91,255,0.22), transparent 60%)', pointerEvents: 'none' } }),
        React.createElement('div', { style: { position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 22 } },
          React.createElement('span', { style: { width: 8, height: 8, borderRadius: '50%', background: '#19E0C8' } }),
          React.createElement('span', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 11, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#19E0C8' } }, 'A solução, em alto nível')
        ),
        React.createElement('h3', { style: { position: 'relative', fontFamily: 'var(--kv-font-display)', fontWeight: 700, fontSize: 24, color: '#fff', margin: '0 0 22px', letterSpacing: '-0.02em', lineHeight: 1.15 } }, st),
        React.createElement('div', { style: { position: 'relative', display: 'flex', flexDirection: 'column', gap: 0 } },
          steps.map((s, i) => React.createElement('div', { key: i },
            React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 14 } },
              React.createElement('span', { style: { width: 30, height: 30, borderRadius: 9, background: i === steps.length - 1 ? 'rgba(25,224,200,0.16)' : 'rgba(45,91,255,0.16)', color: i === steps.length - 1 ? '#19E0C8' : '#5C7DFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', fontFamily: 'var(--kv-font-mono)', fontSize: 13, fontWeight: 600 } },
                i === steps.length - 1 ? React.createElement(Icon, { name: 'check', size: 16 }) : String(i + 1)),
              React.createElement('span', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 15, color: '#E6E9EF', fontWeight: 450 } }, s)
            ),
            i < steps.length - 1 && React.createElement('div', { style: { width: 2, height: 16, background: 'linear-gradient(#2D5BFF,#19E0C8)', margin: '4px 0 4px 14px', opacity: 0.5 } })
          ))
        )
      )
    )
  );
}

Object.assign(window, { Problem });
