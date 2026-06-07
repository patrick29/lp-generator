/* global React, Button, Icon, Logo, Eyebrow, Reveal, Wrap, WhatsGlyph */
// Kinevo LP — CTA final + WhatsApp modal + Footer
const { useState: useStateCTA } = React;

const KV_WHATS_NUMBER = '5511999999999'; // ⚠️ placeholder — trocar pelo número real

function buildWhatsLink(msg) {
  return `https://wa.me/${KV_WHATS_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function CTA({ onWhats }) {
  return React.createElement('section', { style: { background: 'var(--surface)' } },
    React.createElement(Wrap, { style: { padding: '40px 32px 100px' } },
      React.createElement(Reveal, { dir: 'up' },
        React.createElement('div', { style: { position: 'relative', overflow: 'hidden', borderRadius: 28, background: 'linear-gradient(150deg,#2D5BFF 0%,#1B39B0 100%)', padding: 'clamp(48px,6vw,72px) clamp(28px,5vw,64px)', textAlign: 'center' } },
          React.createElement('div', { style: { position: 'absolute', inset: 0, background: 'radial-gradient(60% 120% at 85% 0%, rgba(25,224,200,0.4) 0%, transparent 55%)' } }),
          React.createElement('div', { style: { position: 'absolute', inset: 0, opacity: 0.4, background: 'repeating-linear-gradient(102deg, transparent 0 44px, rgba(255,255,255,0.04) 44px 45px)' } }),
          React.createElement('div', { style: { position: 'relative' } },
            React.createElement(Eyebrow, { color: 'rgba(255,255,255,0.8)', dot: true, style: { justifyContent: 'center', marginBottom: 18 } }, 'Diagnóstico grátis · sem compromisso'),
            React.createElement('h2', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 700, fontSize: 'clamp(30px,4vw,46px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#fff', margin: 0, maxWidth: 660, marginInline: 'auto' } }, 'Coloque sua operação em ritmo.'),
            React.createElement('p', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 19, color: 'rgba(255,255,255,0.85)', margin: '18px auto 34px', maxWidth: 500 } }, 'Em 30 minutos no WhatsApp mostramos onde a automação rende mais na sua operação.'),
            React.createElement('div', { style: { display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' } },
              React.createElement(Button, { size: 'lg', variant: 'whatsapp', onClick: onWhats }, React.createElement(WhatsGlyph, { size: 18 }), 'Falar no WhatsApp agora')
            )
          )
        )
      )
    )
  );
}

function Footer({ onWhats }) {
  const cols = [
    { h: 'Soluções', items: [['Automação de processos', '#solucoes'], ['Integrações', '#integracoes'], ['Agentes e decisões', '#solucoes'], ['Evolução contínua', '#solucoes']] },
    { h: 'Empresa', items: [['Sobre', '#sobre'], ['Como funciona', '#processo'], ['Para quem', '#problema'], ['FAQ', '#faq']] },
    { h: 'Contato', items: [['WhatsApp', '#'], ['Diagnóstico grátis', '#']] },
  ];
  return React.createElement('footer', { style: { background: '#0E0F13', borderTop: '1px solid #1F222A' } },
    React.createElement(Wrap, { style: { padding: '72px 32px 40px' } },
      React.createElement('div', { className: 'kv-footer-grid', style: { display: 'grid', gridTemplateColumns: '1.7fr 1fr 1fr 1fr', gap: 40 } },
        React.createElement('div', null,
          React.createElement(Logo, { light: true, size: 26 }),
          React.createElement('p', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 14, lineHeight: 1.6, color: '#6F7889', margin: '18px 0 22px', maxWidth: 280 } }, 'Automação em movimento. Processos que evoluem e ganham eficiência ao longo do tempo.'),
          React.createElement(Button, { size: 'sm', variant: 'whatsapp', iconLeft: 'message-circle', onClick: onWhats }, 'Falar no WhatsApp')
        ),
        cols.map(c => React.createElement('div', { key: c.h },
          React.createElement('div', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 11, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#6F7889', marginBottom: 16 } }, c.h),
          React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 11 } },
            c.items.map(([it, href]) => React.createElement('a', { key: it, href: href === '#' ? undefined : href, onClick: href === '#' ? onWhats : undefined, style: { fontFamily: 'var(--kv-font-body)', fontSize: 14, color: '#AEB6C4', textDecoration: 'none', cursor: 'pointer' } }, it))
          )
        ))
      ),
      React.createElement('div', { className: 'kv-footer-bottom', style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 48, paddingTop: 24, borderTop: '1px solid #1F222A', gap: 16, flexWrap: 'wrap' } },
        React.createElement('span', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 12, color: '#6F7889' } }, '© 2026 Kinevo · Sua empresa evoluindo na direção certa'),
        React.createElement('div', { style: { display: 'flex', gap: 18 } },
          ['LinkedIn', 'Instagram'].map(s => React.createElement('a', { key: s, href: '#', style: { fontFamily: 'var(--kv-font-mono)', fontSize: 12, color: '#6F7889', textDecoration: 'none' } }, s))
        )
      )
    )
  );
}

function WhatsAppModal({ open, onClose }) {
  const [empresa, setEmpresa] = useStateCTA('');
  const [nome, setNome] = useStateCTA('');
  const [gargalo, setGargalo] = useStateCTA('');
  if (!open) return null;
  const msg = `Olá, Kinevo! Sou ${nome || '[seu nome]'}${empresa ? ` da ${empresa}` : ''}.\nMeu maior gargalo hoje: ${gargalo || '[descreva]'}.\nQuero um diagnóstico gratuito.`;
  return React.createElement('div', {
    onClick: onClose,
    style: { position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(14,15,19,0.6)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, animation: 'kvFade 200ms ease' }
  },
    React.createElement('div', {
      onClick: e => e.stopPropagation(),
      style: { background: 'var(--surface)', borderRadius: 22, width: '100%', maxWidth: 470, padding: 32, boxShadow: 'var(--kv-shadow-xl)', animation: 'kvPop 280ms var(--kv-ease-out)' }
    },
      React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 } },
        React.createElement('div', { style: { display: 'inline-flex', alignItems: 'center', gap: 9 } },
          React.createElement('span', { style: { width: 36, height: 36, borderRadius: 10, background: '#E4F7EE', color: '#1FA855', display: 'flex', alignItems: 'center', justifyContent: 'center' } }, React.createElement(Icon, { name: 'message-circle', size: 20 })),
          React.createElement(Eyebrow, { color: 'var(--kv-success)' }, 'Diagnóstico via WhatsApp')
        ),
        React.createElement('button', { onClick: onClose, style: { border: 'none', background: 'none', cursor: 'pointer', color: 'var(--kv-fg3)', display: 'flex' } }, React.createElement(Icon, { name: 'x', size: 20 }))
      ),
      React.createElement('h3', { style: { fontFamily: 'var(--kv-font-display)', fontWeight: 700, fontSize: 25, color: 'var(--kv-fg1)', margin: '6px 0 6px', letterSpacing: '-0.01em' } }, 'Vamos mapear sua operação'),
      React.createElement('p', { style: { fontFamily: 'var(--kv-font-body)', fontSize: 14.5, color: 'var(--kv-fg2)', margin: '0 0 22px', lineHeight: 1.5 } }, 'Preencha e abrimos o WhatsApp com sua mensagem pronta. Respondemos rápido.'),
      React.createElement(Field, { label: 'Seu nome', icon: 'user', placeholder: 'Como te chamamos?', value: nome, onChange: setNome }),
      React.createElement(Field, { label: 'Empresa', icon: 'building-2', placeholder: 'Nome da empresa', value: empresa, onChange: setEmpresa }),
      React.createElement(Field, { label: 'Maior gargalo hoje', icon: 'activity', placeholder: 'Ex.: conciliação manual, cotações…', value: gargalo, onChange: setGargalo }),
      React.createElement(Button, { variant: 'whatsapp', iconLeft: 'message-circle', href: buildWhatsLink(msg), onClick: () => setTimeout(onClose, 400), style: { width: '100%', marginTop: 8, justifyContent: 'center' } }, 'Abrir no WhatsApp'),
      React.createElement('p', { style: { fontFamily: 'var(--kv-font-mono)', fontSize: 10.5, color: 'var(--kv-fg3)', textAlign: 'center', margin: '14px 0 0', letterSpacing: '0.03em' } }, 'Número de demonstração · configurar o real antes de publicar')
    )
  );
}

function Field({ label, icon, placeholder, value, onChange }) {
  const [focus, setFocus] = useStateCTA(false);
  return React.createElement('div', { style: { marginBottom: 14 } },
    React.createElement('label', { style: { display: 'block', fontFamily: 'var(--kv-font-body)', fontSize: 13, fontWeight: 500, color: 'var(--kv-fg1)', marginBottom: 6 } }, label),
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 9, border: `1px solid ${focus ? 'var(--kv-blue)' : 'var(--kv-border-strong)'}`, boxShadow: focus ? '0 0 0 3px rgba(45,91,255,0.15)' : 'none', borderRadius: 10, padding: '11px 13px', transition: 'all 120ms' } },
      React.createElement(Icon, { name: icon, size: 16, color: 'var(--kv-fg3)' }),
      React.createElement('input', { placeholder, value, onChange: e => onChange(e.target.value), onFocus: () => setFocus(true), onBlur: () => setFocus(false), style: { border: 'none', outline: 'none', fontFamily: 'var(--kv-font-body)', fontSize: 14, width: '100%', color: 'var(--kv-fg1)', background: 'none' } })
    )
  );
}

const KV_WHATS_DEFAULT = buildWhatsLink('Olá, Kinevo! Quero automatizar minha operação e captar mais leads. Podemos falar?');

Object.assign(window, { CTA, Footer, WhatsAppModal, buildWhatsLink, KV_WHATS_DEFAULT });
