/* global React */
const SERVICES = [
  {
    eyebrow: "01",
    title: "Estratégia",
    body: "Pesquisa, posicionamento, persona e plano de canais. A base de tudo que vem depois.",
    items: ["Branding & posicionamento", "Plano de marketing 360", "Pesquisa de mercado", "Arquitetura de marca"]
  },
  {
    eyebrow: "02",
    title: "Criativo",
    body: "Campanhas, identidade visual, vídeo e conteúdo que tem a cara da sua marca — e funciona.",
    items: ["Identidade visual", "Campanhas integradas", "Conteúdo & vídeo", "Direção de arte"]
  },
  {
    eyebrow: "03",
    title: "Performance",
    body: "Mídia paga em Google, Meta e TikTok com leitura de funil ponta a ponta.",
    items: ["Google & Meta Ads", "CRO & landing pages", "Analytics & relatórios", "Funil de aquisição"]
  },
  {
    eyebrow: "04",
    title: "Social & conteúdo",
    body: "Calendário editorial, produção e gestão de comunidade. Presença que vira relacionamento.",
    items: ["Gestão de redes", "Produção fotográfica", "Influência & parcerias", "Live commerce"]
  }
];

function Services() {
  return (
    <section id="servicos" className="services" data-screen-label="Services">
      <div className="services__head" data-reveal>
        <span className="eyebrow eyebrow--accent">O QUE A GENTE FAZ</span>
        <h2 className="t-h1">Quatro frentes<span className="dot">.</span> Um time só<span className="dot">.</span></h2>
        <p className="services__sub">Estratégia, criativo, performance e social trabalhando juntos — não em silos. É assim que campanha vira resultado.</p>
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
