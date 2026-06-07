// lp-tweaks.jsx — Tweaks island for the Nova Digital LP.
// The page itself is vanilla; this React root only renders the Tweaks panel
// and applies its state to the DOM (CSS vars / data-attrs / window helpers).

const NOVA_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "animacao": "Expressivo",
  "densidade": "Compacto",
  "destaque": "Laranja"
}/*EDITMODE-END*/;

// Método fixo em Jornada (timeline): seletor removido da seção e do painel.
const ANIM_MAP   = { "Expressivo": "expressivo", "Sutil": "sutil", "Desligado": "off" };
const DENS_MAP   = { "Compacto": "compact", "Padrão": "regular", "Espaçoso": "comfy" };
const ACCENT_MAP = { "Laranja": "orange", "Roxo": "purple" };

function NovaTweaks() {
  const { useTweaks, TweaksPanel, TweakSection, TweakRadio } = window;
  const [t, setTweak] = useTweaks(NOVA_TWEAK_DEFAULTS);

  React.useEffect(() => {
    if (window.__applyAnim) window.__applyAnim(ANIM_MAP[t.animacao] || 'expressivo');
  }, [t.animacao]);

  React.useEffect(() => {
    document.documentElement.dataset.density = DENS_MAP[t.densidade] || 'regular';
  }, [t.densidade]);

  React.useEffect(() => {
    document.documentElement.dataset.accent = ACCENT_MAP[t.destaque] || 'orange';
  }, [t.destaque]);

  return (
    <TweaksPanel title="Ajustes">
      <TweakSection label="Movimento" />
      <TweakRadio label="Animação" value={t.animacao}
        options={["Expressivo", "Sutil", "Desligado"]}
        onChange={(v) => setTweak('animacao', v)} />
      <TweakSection label="Layout" />
      <TweakRadio label="Densidade" value={t.densidade}
        options={["Compacto", "Padrão", "Espaçoso"]}
        onChange={(v) => setTweak('densidade', v)} />
      <TweakSection label="Cor" />
      <TweakRadio label="Destaque" value={t.destaque}
        options={["Laranja", "Roxo"]}
        onChange={(v) => setTweak('destaque', v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<NovaTweaks />);
