# Nova Digital

Página institucional para agência de marketing fictícia "Nova Digital". **Run de teste do squad** em modo "design handoff" (bundle Anthropic Design, não brief tradicional).

## Estrutura

| Pasta | O que tem aqui |
|-------|----------------|
| `brief/`   | Briefing e estratégia |
| `content/` | (vazio — copy veio embutido no design) |
| `design/`  | (vazio — design veio pronto no bundle) |
| `assets/`  | (vazio — assets do design vivem em `src/assets/`) |
| `src/`     | Código-fonte da LP (HTML + JSX via Babel + CSS) |
| `deploy/`  | Configs de deploy |

## Metadata

- **Cliente:** Nova Digital (fictício)
- **Setor:** Agência de marketing
- **Objetivo principal da LP:** Página institucional (apresentação + captura de lead via form de orçamento)
- **Prazo:** —
- **URL final:** —
- **Stack escolhida:** HTML + React UMD + Babel-standalone (CDN) + CSS plain
- **Origem:** Design handoff bundle (api.anthropic.com/v1/design/h/eIImgwHGgPcbk5I4KcrJsA)
- **Run squad:** 2026-05-14-194335

## Como rodar localmente

```
cd clients/nova-digital/src
npx serve .
```

Os scripts `text/babel` precisam de servidor estático — não funciona via `file://`.

## Próximos passos sugeridos

- Pré-compilar JSX (esbuild/Vite) e remover Babel-standalone do runtime
- Adicionar meta tags SEO (description, OG, Twitter cards)
- Converter PNGs para WebP, lazy-load imagens fora do hero
- Rita Revisão pode rodar rubrica de acessibilidade
