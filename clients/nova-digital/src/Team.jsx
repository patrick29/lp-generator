/* global React */
const TEAM = [
  { name: 'Marina Castro', role: 'Sócia · Estratégia', tag: 'estrategia' },
  { name: 'Rafael Lima', role: 'Sócio · Criativo', tag: 'criativo' },
  { name: 'Bruna Okada', role: 'Head de Performance', tag: 'performance' },
  { name: 'Diego Saraiva', role: 'Head de Social', tag: 'social' },
  { name: 'Aline Prado', role: 'Diretora de Arte', tag: 'criativo' },
  { name: 'Tiago Mendes', role: 'Lead Designer', tag: 'criativo' },
  { name: 'Camila Reis', role: 'Planner Sênior', tag: 'estrategia' },
  { name: 'Henrique Sá', role: 'Mídia Pleno', tag: 'performance' },
];

function Team() {
  return (
    <section id="time" className="team" data-screen-label="Team">
      <div className="team__head" data-reveal>
        <div className="team__head-copy">
          <span className="eyebrow eyebrow--accent">A GENTE</span>
          <h2 className="t-h1">38 pessoas que gostam<br/>do que fazem<span className="dot">.</span></h2>
          <p>Time fixo, dedicado e dentro de casa. Nada de freela voador, nada de "o estagiário que postou". Quem fala com você, faz com você.</p>
          <a href="carreiras.html" className="btn btn--ghost">Carreiras na Nova <span aria-hidden>→</span></a>
        </div>
        <div className="team__head-stat">
          <div className="team__head-stat-row">
            <strong>09</strong>
            <span>estrategistas</span>
          </div>
          <div className="team__head-stat-row">
            <strong>14</strong>
            <span>criativos</span>
          </div>
          <div className="team__head-stat-row">
            <strong>08</strong>
            <span>mídia & dados</span>
          </div>
          <div className="team__head-stat-row">
            <strong>07</strong>
            <span>social & conteúdo</span>
          </div>
        </div>
      </div>

      <div className="team__grid">
        {TEAM.map((p, i) => (
          <article key={p.name} className="member" data-reveal style={{'--reveal-delay': (i * 60) + 'ms'}}>
            <div className="member__photo">
              <image-slot id={"team-" + i} shape="rounded" radius="20" placeholder={"Foto · " + p.name.split(' ')[0]}></image-slot>
              <span className="member__chip">{p.tag}</span>
            </div>
            <h3 className="member__name">{p.name}</h3>
            <span className="member__role">{p.role}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

window.Team = Team;
