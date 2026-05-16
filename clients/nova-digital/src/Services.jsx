/* global React */
const SERVICES = [
  {
    eyebrow: "01",
    title: "Tráfego pago",
    body: "Campanhas em Google, Meta e onde fizer sentido — com plano antes do botão, criativo testado e leitura semanal de funil. A meta nunca é só CPL: é CAC saudável e LTV no painel.",
    items: ["Planejamento e setup", "Criativos otimizados por etapa", "Otimização e leitura semanal", "Relatório executivo mensal"]
  },
  {
    eyebrow: "02",
    title: "Gestão de mídia paga",
    body: "Quem cuida da sua verba é quem entende a estratégia que ela serve. Gestão diária, decisões com base em dado, e ajuste rápido quando o número pede.",
    items: ["Cadência diária de leitura", "Ajuste de verba por canal", "Testes A/B contínuos", "Reuniões quinzenais com você"]
  },
  {
    eyebrow: "03",
    title: "[Frente 03 — a definir]",
    body: "[Descrição curta da terceira frente da Nova quando confirmar — ex.: social media, criativo, branding ou consultoria estratégica.]",
    items: ["[Sub-serviço 1]", "[Sub-serviço 2]", "[Sub-serviço 3]", "[Sub-serviço 4]"]
  },
  {
    eyebrow: "04",
    title: "[Frente 04 — a definir]",
    body: "[Descrição curta da quarta frente quando confirmar — ou cortar este card e ficar com 3.]",
    items: ["[Sub-serviço 1]", "[Sub-serviço 2]", "[Sub-serviço 3]", "[Sub-serviço 4]"]
  }
];

function Services() {
  return (
    <section id="servicos" className="services" data-screen-label="Services">
      <div className="services__head" data-reveal>
        <span className="eyebrow eyebrow--accent">O QUE A GENTE APLICA</span>
        <h2 className="t-h1">Planejamento estratégico<span className="dot">.</span> Execução com método<span className="dot">.</span></h2>
        <p className="services__sub">Plano, mídia e leitura de painel trabalhando juntos — não em silos, não terceirizados. É assim que campanha vira número que se sustenta.</p>
      </div>
      <div className="services__grid">
        {SERVICES.map((s, i) => (
          <article key={s.title} className="service" data-reveal style={{'--reveal-delay': (i * 80) + 'ms'}}>
            <div className="service__head">
              <div className="service__num">{s.eyebrow}</div>
              <span className="service__play" aria-hidden="true">▶</span>
            </div>
            <h3 className="service__title">{s.title}</h3>
            <p className="service__body">{s.body}</p>
            <ul className="service__list">
              {s.items.map(i => <li key={i}>{i}</li>)}
            </ul>
            <a href="#contato" className="service__link">Conversar sobre <span aria-hidden>→</span></a>
          </article>
        ))}
      </div>
    </section>
  );
}

window.Services = Services;
