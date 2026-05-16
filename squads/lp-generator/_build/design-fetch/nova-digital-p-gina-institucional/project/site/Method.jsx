/* global React */
const STEPS = [
  {
    n: '01',
    title: 'Diagnóstico',
    body: 'A gente entra na sua operação, conversa com time e cliente, olha dado. Sai com um raio-x honesto do que está vendendo, do que está travando e do que ninguém viu ainda.',
    duration: 'Semana 1—2',
    out: ['Análise de mercado', 'Benchmark de concorrentes', 'Mapa de oportunidades']
  },
  {
    n: '02',
    title: 'Estratégia',
    body: 'Posicionamento, persona, jornada e canais. A gente desenha o plano de 90 dias e a visão de 12 meses — com KPI claro, sem corporativês.',
    duration: 'Semana 3—4',
    out: ['Posicionamento de marca', 'Plano de canais', 'KPIs e metas trimestrais']
  },
  {
    n: '03',
    title: 'Criativo',
    body: 'Identidade visual, campanha, conteúdo, peças de mídia. O time de criação produz tudo dentro de casa, com direção de arte e copy alinhadas à estratégia.',
    duration: 'Semana 5—8',
    out: ['Conceito de campanha', 'Identidade & guidelines', 'Pacote de peças & vídeos']
  },
  {
    n: '04',
    title: 'Mídia & ativação',
    body: 'Subimos campanhas em Google, Meta, TikTok e onde mais fizer sentido. Otimização semanal e leitura de funil ponta a ponta.',
    duration: 'Semana 6 em diante',
    out: ['Setup de mídia paga', 'Landing pages & CRO', 'Otimização semanal']
  },
  {
    n: '05',
    title: 'Crescimento contínuo',
    body: 'Reunião quinzenal, relatório mensal, planejamento trimestral. A gente vira parte do seu time — e o plano vira ritmo.',
    duration: 'Em curso',
    out: ['Relatório executivo', 'Calendário editorial', 'Revisão trimestral']
  }
];

function Method() {
  const [active, setActive] = React.useState(0);
  const step = STEPS[active];

  return (
    <section id="metodo" className="method" data-screen-label="Method">
      <div className="method__head" data-reveal>
        <span className="eyebrow eyebrow--accent">COMO A GENTE TRABALHA</span>
        <h2 className="t-h1">Cinco fases<span className="dot">.</span><br/>Zero achismo<span className="dot">.</span></h2>
        <p>Um método claro do briefing ao crescimento. Cada fase tem entrega, prazo e responsável — você sabe exatamente onde a gente está.</p>
      </div>

      <div className="method__layout">
        <ol className="method__tabs" role="tablist">
          {STEPS.map((s, i) => (
            <li key={s.n}>
              <button
                role="tab"
                aria-selected={i === active}
                className={"method__tab " + (i === active ? 'is-active' : '')}
                onClick={() => setActive(i)}
              >
                <span className="method__tab-num">{s.n}</span>
                <span className="method__tab-title">{s.title}</span>
                <span className="method__tab-arrow" aria-hidden="true">→</span>
              </button>
            </li>
          ))}
        </ol>

        <div className="method__panel" key={step.n}>
          <div className="method__panel-head">
            <span className="method__panel-num">{step.n}</span>
            <span className="method__panel-duration">{step.duration}</span>
          </div>
          <h3 className="method__panel-title">{step.title}<span className="dot">.</span></h3>
          <p className="method__panel-body">{step.body}</p>
          <div className="method__panel-out">
            <span className="eyebrow">VOCÊ RECEBE</span>
            <ul>
              {step.out.map(o => (
                <li key={o}>
                  <svg viewBox="0 0 24 24" className="ic"><polyline points="4,12 10,18 20,6" fill="none"/></svg>
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Method = Method;
