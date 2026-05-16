/* global React */
const CULTURE_POINTS = [
  {
    n: '01',
    title: 'Tudo dentro de casa',
    body: 'Estratégia, criativo, mídia e social no mesmo time. Você trabalha junto, não em silos.'
  },
  {
    n: '02',
    title: 'Cliente bom, projeto bom',
    body: 'A gente seleciona com quem trabalha. Se não tem fit, a gente não pega. Isso muda tudo no dia a dia.'
  },
  {
    n: '03',
    title: 'Carreira em Y',
    body: 'Você cresce como gestor OU como especialista — não precisa virar líder pra ganhar mais.'
  },
  {
    n: '04',
    title: 'Profit sharing trimestral',
    body: 'A Nova distribui 12% do lucro líquido entre o time. Quando a casa cresce, todo mundo cresce junto.'
  },
  {
    n: '05',
    title: 'Sexta curta',
    body: 'Toda sexta termina às 14h. Não é benefício "se sobrar tempo" — é regra.'
  },
  {
    n: '06',
    title: 'Verba de cursos',
    body: 'R$ 3.000 por ano por pessoa pra estudar o que quiser — desde Domestika até curso técnico.'
  },
];

const PROCESS = [
  { n: '01', title: 'Você manda o currículo', body: 'Pelo link da vaga ou e-mail. A gente responde tudo, mesmo "ainda não dessa vez".' },
  { n: '02', title: 'Conversa de 30min', body: 'Bate-papo com RH e líder direto da área. Sem pegadinha, sem case relâmpago.' },
  { n: '03', title: 'Desafio com prazo', body: 'Um exercício curto da sua área, com prazo de 3—5 dias. Remunerado se passar de 4 horas.' },
  { n: '04', title: 'Conversa final + proposta', body: 'Você conversa com o sócio responsável. Se rolar, a proposta chega no mesmo dia.' },
];

function CareersCulture() {
  return (
    <section id="cultura" className="culture" data-screen-label="Culture">
      <div className="culture__bg" aria-hidden="true">
        <span className="culture__bg-word">Time<span className="dot">.</span></span>
      </div>
      <div className="culture__inner">
        <div className="culture__head" data-reveal>
          <span className="eyebrow eyebrow--on-purple">COMO É TRABALHAR AQUI</span>
          <h2 className="culture__title">
            A gente leva a sério<br/>
            o que importa<span className="dot">.</span><br/>
            <em>E o resto, deixa pra lá.</em>
          </h2>
        </div>

        <div className="culture__grid">
          {CULTURE_POINTS.map((p, i) => (
            <div className="culture-point" key={p.n} data-reveal style={{'--reveal-delay': (i * 80) + 'ms'}}>
              <span className="culture-point__num">{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>

        <div className="culture__process" data-reveal>
          <div className="culture__process-head">
            <span className="eyebrow eyebrow--on-purple">COMO É O PROCESSO</span>
            <h3>Quatro etapas, em até 3 semanas<span className="dot">.</span></h3>
          </div>
          <ol className="culture__process-list">
            {PROCESS.map(p => (
              <li key={p.n}>
                <span className="culture__process-num">{p.n}</span>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

window.CareersCulture = CareersCulture;
