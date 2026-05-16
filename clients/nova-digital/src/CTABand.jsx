/* global React */
function CTABand() {
  const [budget, setBudget] = React.useState('');
  const budgets = ['Até R$ 1k/mês', 'R$ 1—3k/mês', 'R$ 3—8k/mês', 'Acima de R$ 8k/mês'];

  return (
    <section id="contato" className="cta-band" data-screen-label="CTA">
      <div className="cta-band__inner">
        <div className="cta-band__copy" data-reveal="left">
          <span className="eyebrow eyebrow--on-purple">VAMOS CONVERSAR</span>
          <h2 className="cta-band__title">Conta o que você precisa<span className="dot">.</span><br/>A gente volta em até <em>1 dia útil</em>.</h2>

          <ul className="cta-band__perks">
            <li>
              <svg viewBox="0 0 24 24" className="ic"><polyline points="4,12 10,18 20,6" fill="none"/></svg>
              Call de 30 minutos, sem custo
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="ic"><polyline points="4,12 10,18 20,6" fill="none"/></svg>
              Diagnóstico honesto no primeiro contato
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="ic"><polyline points="4,12 10,18 20,6" fill="none"/></svg>
              Proposta em até 5 dias úteis
            </li>
          </ul>

        </div>

        <form className="cta-form" data-reveal onSubmit={(e) => { e.preventDefault(); alert('Obrigado! A gente volta em 1 dia útil.'); }}>
          <label className="cta-form__field">
            <span>Nome</span>
            <input type="text" placeholder="Como podemos te chamar?" required />
          </label>
          <label className="cta-form__field">
            <span>Empresa</span>
            <input type="text" placeholder="Nome da sua marca" />
          </label>
          <label className="cta-form__field">
            <span>E-mail</span>
            <input type="email" placeholder="oi@suamarca.com.br" required />
          </label>
          <label className="cta-form__field">
            <span>WhatsApp</span>
            <input type="tel" placeholder="(11) 9 9999-9999" />
          </label>

          <fieldset className="cta-form__field cta-form__field--full cta-form__chips">
            <span>Verba prevista</span>
            <div className="cta-form__chip-row">
              {budgets.map(b => (
                <button
                  type="button"
                  key={b}
                  className={"cta-form__chip " + (budget === b ? 'is-active' : '')}
                  onClick={() => setBudget(b)}
                >
                  {b}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="cta-form__field cta-form__field--full">
            <span>Sobre o projeto</span>
            <textarea rows="3" placeholder="Ex: queremos relançar nossa marca e crescer em mídia paga."></textarea>
          </label>

          <button type="submit" className="btn btn--primary btn--lg cta-form__submit">
            Bora começar
            <svg viewBox="0 0 24 24" className="ic"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
        </form>
      </div>
    </section>
  );
}

window.CTABand = CTABand;
