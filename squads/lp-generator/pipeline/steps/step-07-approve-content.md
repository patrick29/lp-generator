---
type: checkpoint
---

# Step 07: Approve Content

## Objetivo

Apresentar ao Patrick o pacote completo (copy + visual + code) ANTES da revisão final da Rita. É o momento de pegar problemas grosseiros (algum texto fora do tom, alguma imagem genérica, alguma seção faltando) antes de gastar ciclo de revisão.

## Mensagem para o Patrick

> Patrick, terminamos o conteúdo. Antes que a Rita rode a revisão final, dá uma olhada no pacote:
>
> 1. **Copy:** `clients/{slug}/content/copy.md` — hero, seções, CTAs, meta SEO. O hook escolhido continua bom no contexto do corpo? Algum texto destoa do tom?
> 2. **Visual system:** `clients/{slug}/design/design-system.md` + `clients/{slug}/assets/images/` — paleta, tipografia, imagens geradas. Bate com a vibe que você queria? Tem alguma imagem que precisa refazer?
> 3. **Código:** `clients/{slug}/src/` — abrir o `index.html` no browser (ou rodar `pnpm dev` se Astro/Next.js). Hero impressiona? CTA mobile fica visível em 375px sem scroll?
>
> Se tiver ajuste pequeno, é hora. A Rita já vai entrar com Lighthouse + rubrica completa no próximo step.

## Opções para o Patrick

- **Aprovar:** seguir para step 8 (Rita revisa).
- **Pedir ajuste em copy:** volta para step 4 (Carla).
- **Pedir ajuste em visual:** volta para step 5 (Diana).
- **Pedir ajuste em código:** volta para step 6 (Davi).

## O que acontece depois

- Se aprovar, a Rita carrega quality-criteria.md, roda Lighthouse, e produz `review.md` com APPROVE / CONDITIONAL / REJECT + scoring por eixo + required changes.
- Se reprovar, o pipeline volta ao step indicado e roda a task correspondente novamente, mantendo todo o resto do estado.
