# Kinevo — LP Institucional

Landing page institucional da Kinevo (agência de automação de processos e integração de sistemas). Gerada pelo squad **lp-generator** em modo *design handoff* a partir de um bundle da Claude Design.

## Como rodar localmente

A página usa React + Babel via CDN e carrega os componentes `.jsx` por HTTP, então **não abra o `index.html` direto pelo `file://`** — sirva a pasta:

```bash
cd src
python -m http.server 8080
# abra http://127.0.0.1:8080/index.html
```

## Estrutura

```
src/
  index.html              # entrada (App + estilos globais + tema claro/escuro)
  colors_and_type.css     # tokens de cor e tipografia
  tweaks-panel.jsx        # painel de iteração visual (canto da tela)
  components/             # 13 componentes (Header, Hero, ... CTA inclui Footer)
  assets/                 # logos oficiais (horizontal, white, mark, stacked)
deploy/
  qa-review.md            # revisão de QA da entrega
```

## Painel de tweaks

Botão flutuante na página permite alternar, ao vivo:
- **Visual do hero:** `crescimento` (gráfico) · `fluxo` (card de 7 passos de captação→conversão)
- **Layout dos serviços:** `grid` · `list` · `bento`
- **Tema da página:** `light` · `dark`
- **Movimento:** `premium` · `off`

## Antes de publicar

1. Trocar WhatsApp placeholder `5511999999999` em `src/components/CTA.jsx`.
2. Inserir foto real do fundador (Patrick Almeida) na seção Sobre (`src/components/About.jsx`).
3. Métricas e depoimento estão marcados como projeção/exemplo — substituir por casos reais quando houver.
