# Prompt base — opensquad para landing pages

> Prompt/instrução padrão para o opensquad orquestrar a geração de uma LP a partir da pasta de um cliente.

## Contexto
Você está gerando uma landing page para um cliente. Todo o input necessário está em `clients/<cliente>/`:

- `brief/`   — quem é o cliente, objetivo, persona, KPIs, restrições
- `content/` — copy final aprovada (não invente texto além disso)
- `design/`  — design system, paleta, tipografia, referências
- `assets/`  — logos, imagens, fontes a serem usadas
- `src/`     — destino do código gerado

## Regras
1. **Não invente copy** — use exatamente o que está em `content/copy.md`. Se faltar algo, pergunte ou marque como TODO.
2. **Respeite o design system** de `design/design-system.md`. Tokens vêm dali.
3. **Performance é obrigatória** — Lighthouse > 90 em mobile. Imagens otimizadas, lazy loading, sem JS desnecessário.
4. **Acessibilidade básica** — semântica HTML correta, contraste, alt em imagens, labels em forms.
5. **SEO básico** — title, meta description, OG tags, sitemap.
6. **Mobile-first.**

## Entregáveis
- Código completo em `src/`
- README dentro de `src/` com instruções de build/run
- Checklist preenchido em `deploy/deploy.md`

## Decisão de stack
Se ainda não houver stack definida para o cliente, sugira 1 baseada no escopo (LP simples → HTML/CSS/JS; LP com componentes reutilizáveis → Astro; LP com app integrado → Next).
