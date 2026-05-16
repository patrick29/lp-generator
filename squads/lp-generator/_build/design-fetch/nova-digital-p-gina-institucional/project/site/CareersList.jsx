/* global React */
const { useState, useMemo } = React;

const JOBS = [
  {
    id: 'diretor-planejamento',
    title: 'Diretor(a) de Planejamento',
    area: 'Estratégia',
    seniority: 'Sênior',
    location: 'São Paulo · Híbrido',
    type: 'CLT',
    salary: 'R$ 18—24k',
    posted: 'Há 3 dias',
    body: 'Liderar projetos de posicionamento e estratégia para clientes nacionais. Trabalha lado a lado com diretoria de criativo e mídia, e responde direto pra sócia de Planejamento.',
    requirements: [
      '8+ anos em planejamento/estratégia em agência',
      'Cases sólidos de reposicionamento e plano de canais',
      'Cabeça analítica + boa em apresentação',
      'Inglês fluente é diferencial',
    ],
    perks: ['VR/VA R$ 1.100', 'Plano de saúde + dental', 'Day off no aniversário', 'Profit sharing trimestral'],
  },
  {
    id: 'copywriter-pleno',
    title: 'Copywriter Pleno',
    area: 'Criativo',
    seniority: 'Pleno',
    location: 'Remoto · Brasil',
    type: 'PJ',
    salary: 'R$ 8—11k',
    posted: 'Há 1 semana',
    body: 'Escreve copy de campanha, landing, social e roteiro de vídeo curto. Trabalha em squads com designer e estrategista, e responde pra Direção de Criação.',
    requirements: [
      '4+ anos como copy em agência ou in-house',
      'Portfólio com campanha integrada',
      'Texto bom em PT-BR — direto, com personalidade',
      'Curte trabalhar com brief curto e prazo apertado',
    ],
    perks: ['Auxílio home office R$ 600/mês', 'Plano de saúde', 'Acesso à biblioteca + cursos', 'Sextas curtas'],
  },
  {
    id: 'designer-senior',
    title: 'Designer Sênior',
    area: 'Criativo',
    seniority: 'Sênior',
    location: 'São Paulo · Híbrido',
    type: 'CLT',
    salary: 'R$ 11—15k',
    posted: 'Há 4 dias',
    body: 'Conduz peças de campanha, identidade de marca e direção visual de projetos. Responde pra Diretora de Arte e mentora dois designers plenos.',
    requirements: [
      '6+ anos em design gráfico/digital',
      'Portfólio com identidade de marca e campanha',
      'Domínio de Figma + Adobe CC',
      'Cabeça de sistema, não só de peça',
    ],
    perks: ['VR/VA R$ 1.100', 'Plano de saúde + dental', 'Verba de cursos R$ 3k/ano', 'Setup completo'],
  },
  {
    id: 'midia-programatica',
    title: 'Mídia Programática Pleno',
    area: 'Performance',
    seniority: 'Pleno',
    location: 'São Paulo · Híbrido',
    type: 'CLT',
    salary: 'R$ 9—12k',
    posted: 'Há 5 dias',
    body: 'Planeja e otimiza campanhas em DV360, TheTradeDesk, RTB House e similares. Trabalha junto com mídia paga em Google/Meta. Responde pra Head de Performance.',
    requirements: [
      '3+ anos em mídia programática',
      'Certificações DV360 / GA4',
      'Confortável com planilha pesada + leitura de funil',
      'Curte testar coisa nova',
    ],
    perks: ['VR/VA R$ 1.100', 'Plano de saúde + dental', 'Profit sharing trimestral', 'Pacote de certificações pago'],
  },
  {
    id: 'social-coordenador',
    title: 'Social Media Coordenador(a)',
    area: 'Social',
    seniority: 'Pleno',
    location: 'Rio de Janeiro · Híbrido',
    type: 'CLT',
    salary: 'R$ 8—11k',
    posted: 'Há 2 semanas',
    body: 'Lidera a operação de social de 3 contas regionais. Calendário editorial, produção, gestão de comunidade e relatório. Atende cliente e coordena 2 analistas.',
    requirements: [
      '4+ anos em social em agência',
      'Portfólio com gestão de marca (não só execução)',
      'Boa de cliente e de prazo',
      'Topa viajar pra SP a cada 2 meses',
    ],
    perks: ['VR/VA R$ 1.000', 'Plano de saúde', 'Auxílio creche', 'Day off no aniversário'],
  },
  {
    id: 'analista-dados',
    title: 'Analista de Dados',
    area: 'Performance',
    seniority: 'Pleno',
    location: 'Remoto · Brasil',
    type: 'PJ',
    salary: 'R$ 9—13k',
    posted: 'Há 1 semana',
    body: 'Constrói dashboards e leituras de funil para clientes. Trabalha com BigQuery, Looker Studio, GA4 e os principais MMPs. Responde pra Head de Performance.',
    requirements: [
      '3+ anos em analytics digital',
      'SQL intermediário',
      'GA4 + Looker Studio fluentes',
      'Bônus: experiência com modelo de atribuição',
    ],
    perks: ['Auxílio home office', 'Plano de saúde', 'Verba de certificação', 'Sextas curtas'],
  },
  {
    id: 'motion-pleno',
    title: 'Motion Designer Pleno',
    area: 'Criativo',
    seniority: 'Pleno',
    location: 'São Paulo · Híbrido',
    type: 'CLT',
    salary: 'R$ 8—11k',
    posted: 'Há 6 dias',
    body: 'Produz peças animadas para social, mídia paga e ações de marca. Trabalha em dupla com designer e copy. Responde pra Diretora de Arte.',
    requirements: [
      '3+ anos em motion',
      'Domínio de After Effects + Cinema 4D',
      'Portfólio com peça para Instagram/TikTok que performa',
      'Conforto com prazo curto',
    ],
    perks: ['VR/VA R$ 1.100', 'Plano de saúde + dental', 'Setup completo', 'Sexta curta'],
  },
  {
    id: 'atendimento-senior',
    title: 'Atendimento Sênior',
    area: 'Estratégia',
    seniority: 'Sênior',
    location: 'São Paulo · Híbrido',
    type: 'CLT',
    salary: 'R$ 12—16k',
    posted: 'Há 3 dias',
    body: 'Conduz a relação com 2—3 contas grandes do dia a dia. Garante entrega, ritmo, expectativa e crescimento da conta. Responde pra sócia de Planejamento.',
    requirements: [
      '6+ anos em atendimento em agência',
      'Já liderou contas de R$ 1M+ ano',
      'Calmaria sob pressão',
      'Cabeça comercial sem ser vendedor',
    ],
    perks: ['VR/VA R$ 1.100', 'Plano de saúde + dental', 'Profit sharing trimestral', 'Verba de cursos R$ 3k/ano'],
  },
];

const AREAS = ['Todas', 'Estratégia', 'Criativo', 'Performance', 'Social'];
const LOCATIONS = ['Todas', 'São Paulo', 'Rio de Janeiro', 'Remoto'];

function CareersList() {
  const [area, setArea] = useState('Todas');
  const [loc, setLoc] = useState('Todas');
  const [open, setOpen] = useState(null);

  const filtered = useMemo(() => JOBS.filter(j =>
    (area === 'Todas' || j.area === area) &&
    (loc === 'Todas' || j.location.startsWith(loc))
  ), [area, loc]);

  return (
    <section className="careers-list" id="vagas" data-screen-label="Jobs">
      <div className="careers-list__inner">
        <div className="careers-list__head" data-reveal>
          <span className="eyebrow eyebrow--accent">VAGAS EM ABERTO</span>
          <h2 className="t-h1">{JOBS.length} oportunidades<br/>pra entrar no time<span className="dot">.</span></h2>
        </div>

        <div className="careers-filters" data-reveal>
          <div className="careers-filter-group">
            <span className="careers-filter-label">Área</span>
            <div className="careers-filter-row">
              {AREAS.map(a => (
                <button
                  key={a}
                  className={"chip " + (area === a ? 'is-active' : '')}
                  onClick={() => { setArea(a); setOpen(null); }}
                >
                  {a}
                  {a !== 'Todas' && <span className="chip__count">{JOBS.filter(j => j.area === a).length}</span>}
                </button>
              ))}
            </div>
          </div>
          <div className="careers-filter-group">
            <span className="careers-filter-label">Local</span>
            <div className="careers-filter-row">
              {LOCATIONS.map(l => (
                <button
                  key={l}
                  className={"chip " + (loc === l ? 'is-active' : '')}
                  onClick={() => { setLoc(l); setOpen(null); }}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="careers-count">
          <span>{filtered.length} vaga{filtered.length === 1 ? '' : 's'} encontrada{filtered.length === 1 ? '' : 's'}</span>
          {(area !== 'Todas' || loc !== 'Todas') && (
            <button className="careers-clear" onClick={() => { setArea('Todas'); setLoc('Todas'); }}>
              Limpar filtros <span aria-hidden>×</span>
            </button>
          )}
        </div>

        <ul className="jobs">
          {filtered.length === 0 ? (
            <li className="jobs__empty">
              <span className="jobs__empty-icon">▶</span>
              <h3>Nenhuma vaga com esses filtros<span className="dot">.</span></h3>
              <p>Manda um currículo spontaneous — quando abrir algo da sua área, a gente chama.</p>
              <a href="#spontaneous" className="btn btn--primary">Mandar currículo</a>
            </li>
          ) : filtered.map((j, i) => {
            const isOpen = open === j.id;
            return (
              <li key={j.id} className={"job " + (isOpen ? 'is-open' : '')} data-reveal style={{'--reveal-delay': (i * 60) + 'ms'}}>
                <button className="job__row" onClick={() => setOpen(isOpen ? null : j.id)} aria-expanded={isOpen}>
                  <div className="job__row-main">
                    <span className="job__area">{j.area}</span>
                    <h3 className="job__title">{j.title}</h3>
                    <div className="job__meta">
                      <span className="job__meta-item">
                        <svg viewBox="0 0 24 24" className="ic"><circle cx="12" cy="12" r="9" fill="none"/><path d="M12 7v5l3 2" fill="none"/></svg>
                        {j.seniority}
                      </span>
                      <span className="job__meta-item">
                        <svg viewBox="0 0 24 24" className="ic"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" fill="none"/><circle cx="12" cy="10" r="3" fill="none"/></svg>
                        {j.location}
                      </span>
                      <span className="job__meta-item">
                        <svg viewBox="0 0 24 24" className="ic"><rect x="3" y="7" width="18" height="13" rx="2" fill="none"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" fill="none"/></svg>
                        {j.type}
                      </span>
                      <span className="job__meta-item">
                        <svg viewBox="0 0 24 24" className="ic"><line x1="12" y1="2" x2="12" y2="22" strokeLinecap="round"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" fill="none"/></svg>
                        {j.salary}
                      </span>
                    </div>
                  </div>
                  <div className="job__row-side">
                    <span className="job__posted">{j.posted}</span>
                    <span className="job__plus" aria-hidden="true">
                      <span></span><span></span>
                    </span>
                  </div>
                </button>

                <div className="job__panel-wrap">
                  <div className="job__panel">
                    <div className="job__panel-grid">
                      <div className="job__panel-col">
                        <span className="eyebrow eyebrow--accent">O QUE A VAGA É</span>
                        <p>{j.body}</p>
                      </div>
                      <div className="job__panel-col">
                        <span className="eyebrow eyebrow--accent">QUEM A GENTE PROCURA</span>
                        <ul className="job__list">
                          {j.requirements.map(r => (
                            <li key={r}>
                              <svg viewBox="0 0 24 24" className="ic"><polyline points="4,12 10,18 20,6" fill="none"/></svg>
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="job__panel-col">
                        <span className="eyebrow eyebrow--accent">PACOTE</span>
                        <ul className="job__list">
                          {j.perks.map(p => (
                            <li key={p}>
                              <span className="job__perk-mark">▶</span>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="job__panel-footer">
                      <a href={"mailto:carreiras@novadigital.ag?subject=Candidatura · " + j.title} className="btn btn--primary btn--lg">
                        Candidatar-se
                        <svg viewBox="0 0 24 24" className="ic"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                      </a>
                      <a href="#cultura" className="btn btn--ghost">Como é o processo</a>
                      <span className="job__share">
                        <button onClick={() => navigator.clipboard?.writeText(window.location.origin + window.location.pathname + '#' + j.id)} aria-label="Copiar link">
                          <svg viewBox="0 0 24 24" className="ic"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" fill="none"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" fill="none"/></svg>
                          Copiar link da vaga
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

window.CareersList = CareersList;
