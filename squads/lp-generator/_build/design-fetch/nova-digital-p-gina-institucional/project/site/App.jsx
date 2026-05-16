/* global React, ReactDOM, Nav, Hero, Clients, Manifesto, Services, Method, Cases, Stats, Team, Testimonials, FAQ, CTABand, Footer, TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakToggle, TweakColor */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroLayout": "padrao",
  "showProof": true,
  "accent": "#F58A2A",
  "purple": "#6A2785",
  "section": "todas"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply accent + purple overrides
  React.useEffect(() => {
    document.documentElement.style.setProperty('--orange-400', t.accent);
    document.documentElement.style.setProperty('--orange-500', t.accent);
    document.documentElement.style.setProperty('--purple-500', t.purple);
  }, [t.accent, t.purple]);

  return (
    <>
      <Nav />
      <main>
        <Hero layout={t.heroLayout} showProof={t.showProof} />
        <Clients />
        <Manifesto />
        <Services />
        <Method />
        <Cases />
        <Stats />
        <Team />
        <Testimonials />
        <FAQ />
        <CTABand />
      </main>
      <Footer />

      <TweaksPanel title="Tweaks" defaultPosition={{ right: 24, bottom: 24 }}>
        <TweakSection title="Hero">
          <TweakRadio
            label="Layout"
            value={t.heroLayout}
            onChange={v => setTweak('heroLayout', v)}
            options={[
              { value: 'padrao', label: 'Padrão' },
              { value: 'manchete', label: 'Manchete' },
              { value: 'wordmark', label: 'Wordmark' },
            ]}
          />
          <TweakToggle
            label="Mostrar prova social"
            value={t.showProof}
            onChange={v => setTweak('showProof', v)}
          />
        </TweakSection>
        <TweakSection title="Cores da marca">
          <TweakColor
            label="Acento"
            value={t.accent}
            onChange={v => setTweak('accent', v)}
            options={['#F58A2A', '#E47817', '#FBAA55', '#D6453F']}
          />
          <TweakColor
            label="Roxo"
            value={t.purple}
            onChange={v => setTweak('purple', v)}
            options={['#6A2785', '#441754', '#884FAE', '#2F0F3A']}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
