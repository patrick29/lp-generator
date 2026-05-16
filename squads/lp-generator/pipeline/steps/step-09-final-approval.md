---
type: checkpoint
---

# Step 09: Final Approval

## Objetivo

Entrega final ao Patrick. A LP passou pela revisão da Rita com veredito APPROVE (ou CONDITIONAL). É o momento de empacotar, mostrar o caminho do código e fechar o run.

## Mensagem para o Patrick

> Patrick, a LP está pronta. Cliente: **{slug}**. Resumo final:
>
> - **Briefing:** `clients/{slug}/brief/briefing.md`
> - **Estratégia:** `clients/{slug}/brief/strategy.md`
> - **Copy + meta SEO:** `clients/{slug}/content/copy.md`
> - **Visual system:** `clients/{slug}/design/design-system.md` + `clients/{slug}/assets/images/`
> - **Código pronto para deploy:** `clients/{slug}/src/`
> - **Review da Rita:** `clients/{slug}/deploy/qa-review.md`
>
> Próximos passos sugeridos:
> 1. Abrir `clients/{slug}/src/index.html` (ou rodar `pnpm dev` se Astro/Next.js) e confirmar.
> 2. Deploy em Cloudflare Pages / Netlify / Vercel (instruções no `clients/{slug}/src/README.md` e `clients/{slug}/deploy/deploy.md`).
> 3. Apontar o domínio.
> 4. Se o veredito foi CONDITIONAL, considerar aplicar as suggestions non-blocking do `qa-review.md` antes do deploy.

## Opções para o Patrick

- **Aprovar e fechar o run:** o squad grava a entrada em `_memory/runs.md` e finaliza.
- **Pedir mais um ciclo de polish:** volta para o step 4, 5 ou 6 conforme o ajuste.
- **Salvar aprendizado:** se algo neste run deve virar regra futura, escrever em `_memory/memories.md`.

## O que acontece depois

- O Pipeline Runner anota o run em `squads/lp-generator/_memory/runs.md` com data, run_id, slug do cliente, tema e resultado.
- A pasta do cliente em `clients/{slug}/` fica como fonte autoritativa — versionada por git se você quiser histórico de mudanças.
- O slug atual em `squads/lp-generator/.runtime/current-slug.txt` é descartado na próxima run (sobrescrito pelo step 01).
- Patrick pode rodar `/opensquad run lp-generator` novamente — para o MESMO cliente (revisão) ou um novo.
