/* global React, Icon, Eyebrow, Reveal, Wrap */
// Kinevo LP — FAQ (accordion)
const { useState: useStateFaq, useRef: useRefFaq } = React;

function FAQ() {
  const items = [
    { q: 'Por que confiar na Kinevo?', a: 'Pela bagagem de quem está por trás. Patrick Almeida soma 11 anos construindo software em empresas como TOTVS, Lojas Renner, BTG Pactual e Compass. Você fala direto com quem constrói e começa por um diagnóstico gratuito, sem risco.' },
    { q: 'Preciso trocar os sistemas que já uso?', a: 'Não. Integramos o que você já tem: CRM, ERP, PDV, planilhas, e-mail e APIs. A automação se encaixa na sua operação atual, sem migração forçada.' },
    { q: 'Quanto tempo até ver resultado?', a: 'Começamos pequeno e provamos valor rápido. Os primeiros fluxos costumam entrar em produção em poucas semanas. A partir daí, evoluímos a cada ciclo.' },
    { q: 'Como funciona a cobrança?', a: 'O diagnóstico é gratuito. Depois, montamos um escopo claro com você e só avançamos se o ganho estiver evidente. Sem letra miúda, sem compromisso de longo prazo para começar.' },
    { q: 'Vocês atendem meu setor?', a: 'Temos foco em corretoras de seguros, logística e imobiliárias. Mas a automação de processos vale para qualquer operação com tarefas manuais e sistemas que não conversam. Fale com a gente e avaliamos juntos.' },
    { q: 'O que acontece depois que o fluxo está no ar?', a: 'Não entregamos e sumimos. Acompanhamos as métricas de cada automação e refinamos continuamente. É o "movimento que evolui" na prática.' },
  ];
  const [open, setOpen] = useStateFaq(0);
  return React.createElement('section', { id: 'faq', style: { background: 'var(--bg-subtle)', borderTop: '1px solid var(--kv-border)', scrollMarginTop: 70 } },
    React.createElement(Wrap, { max: 920, style: { padding: '100px 32px' } },
      React.createElement('div', { style: { textAlign: 'center', marginBottom: 52 } },
        React.createElement(Reveal, null, React.createElement(Eyebrow, { dot: true, style: { justifyContent: 'center' } }, 'Perguntas frequentes')),
        React.createElement(Reveal, { delay: 80 },
          React.createElement('h2', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 700, fontSize: 'clamp(30px,3.6vw,44px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--kv-fg1)', margin: '16px 0 0' } }, 'Tudo que você quer saber.'))
      ),
      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 12 } },
        items.map((it, i) => React.createElement(Reveal, { key: i, delay: i * 50, dir: 'up' },
          React.createElement(FaqItem, { ...it, isOpen: open === i, onToggle: () => setOpen(open === i ? -1 : i) })
        ))
      )
    )
  );
}

function FaqItem({ q, a, isOpen, onToggle }) {
  const bodyRef = useRefFaq(null);
  return React.createElement('div', {
    style: { background: 'var(--surface)', border: `1px solid ${isOpen ? 'var(--kv-blue-200)' : 'var(--kv-border)'}`, borderRadius: 14, overflow: 'hidden', transition: 'border-color 220ms', boxShadow: isOpen ? 'var(--kv-shadow-sm)' : 'none' }
  },
    React.createElement('button', {
      onClick: onToggle,
      style: { width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }
    },
      React.createElement('span', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 600, fontSize: 17.5, color: 'var(--kv-fg1)', letterSpacing: '-0.01em' } }, q),
      React.createElement('span', { style: { flex: 'none', width: 32, height: 32, borderRadius: 9, background: isOpen ? 'var(--kv-blue)' : 'var(--kv-neutral-100)', color: isOpen ? '#fff' : 'var(--kv-fg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 220ms var(--kv-ease-out)', transform: isOpen ? 'rotate(180deg)' : 'none' } },
        React.createElement(Icon, { name: 'chevron-down', size: 18 }))
    ),
    React.createElement('div', {
      style: { maxHeight: isOpen ? (bodyRef.current ? bodyRef.current.scrollHeight + 24 : 300) : 0, overflow: 'hidden', transition: 'max-height 360ms var(--kv-ease-out)' }
    },
      React.createElement('p', { ref: bodyRef, style: { fontFamily: 'var(--kv-font-body)', fontSize: 15.5, lineHeight: 1.62, color: 'var(--kv-fg2)', margin: 0, padding: '0 24px 22px' } }, a)
    )
  );
}

Object.assign(window, { FAQ });
