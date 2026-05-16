/* global React */
function CareersCTA() {
  return (
    <section id="spontaneous" className="careers-cta" data-screen-label="Careers CTA">
      <div className="careers-cta__inner" data-reveal>
        <div className="careers-cta__copy">
          <span className="eyebrow eyebrow--accent">NÃO VIU SUA VAGA?</span>
          <h2 className="t-h1">Manda mesmo assim<span className="dot">.</span></h2>
          <p>A gente abre vagas o tempo todo e gosta de ter um banco de pessoas que já querem trabalhar com a gente. Curriculo spontaneous é levado a sério aqui — a gente responde tudo em até 7 dias úteis.</p>
        </div>
        <form className="careers-cta__form" onSubmit={e => { e.preventDefault(); alert('Recebemos seu envio! Volta em até 7 dias úteis.'); }}>
          <label className="cta-form__field">
            <span>Nome</span>
            <input type="text" placeholder="Como podemos te chamar?" required />
          </label>
          <label className="cta-form__field">
            <span>E-mail</span>
            <input type="email" placeholder="oi@email.com" required />
          </label>
          <label className="cta-form__field cta-form__field--full">
            <span>Área de interesse</span>
            <select required defaultValue="">
              <option value="" disabled>Escolha uma área</option>
              <option>Estratégia / Planejamento</option>
              <option>Criativo / Design</option>
              <option>Performance / Mídia</option>
              <option>Social / Conteúdo</option>
              <option>Tech / Dados</option>
              <option>Atendimento / Operações</option>
              <option>Outros</option>
            </select>
          </label>
          <label className="cta-form__field cta-form__field--full">
            <span>Link do portfólio / LinkedIn</span>
            <input type="url" placeholder="https://..." />
          </label>
          <label className="cta-form__field cta-form__field--full">
            <span>Uma frase sobre você</span>
            <textarea rows="3" placeholder="O que te trouxe pra Nova? O que te empolga?"></textarea>
          </label>
          <button type="submit" className="btn btn--primary btn--lg">
            Mandar candidatura
            <svg viewBox="0 0 24 24" className="ic"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
          <p className="careers-cta__legal">A gente responde tudo. Mesmo "ainda não dessa vez".</p>
        </form>
      </div>
    </section>
  );
}

window.CareersCTA = CareersCTA;
