---
type: checkpoint
---

# Step 01: Brief Intake + Client Selection

## Objetivo

Identificar o cliente alvo e coletar o briefing. **Tudo é salvo em UM lugar:** `clients/{slug}/brief/briefing.md`.

Para propagar o slug pros próximos steps, o step 01 também escreve `squads/lp-generator/.runtime/current-slug.txt` — um side file leve que todos os outros steps leem como primeira ação.

**Sem outputFile no frontmatter** — esse step não usa o auto-write do runner; faz tudo manualmente.

## Pre-step A: Selecionar cliente (sempre via AskUserQuestion)

1. **Listar clientes existentes** via Bash:
   ```bash
   ls c:/development/lp-generator/clients/ 2>/dev/null | grep -v '^_template$' | sort
   ```

2. **Construir o picker** seguindo as regras de AskUserQuestion (2-4 opções):
   - **0 clientes existentes** → pular o picker. Ir direto pra "Pre-step B: Novo cliente".
   - **1-3 clientes** → mostrar todos + opção "Novo cliente". Total = N+1 opções (2-4).
   - **4+ clientes** → mostrar os 3 mais recentemente modificados + "Outro/Novo cliente". Se o usuário escolher "Outro/Novo cliente", apresentar segunda AskUserQuestion com os próximos 3 + "Novo cliente".

   Cada opção de cliente existente: label = `<slug>`, description = primeira linha após `# ` no `clients/<slug>/README.md` (ou `(sem README)`).

3. **Se o usuário escolher um cliente existente** → set `{slug}` = escolhido. Pular Pre-step B.
4. **Se o usuário escolher "Novo cliente"** → ir para Pre-step B.

## Pre-step B: Novo cliente

1. **Perguntar o slug** via AskUserQuestion (free-text com 2-3 sugestões de exemplo):
   - Pergunta: "Qual o slug do novo cliente? (kebab-case, sem espaços)"
   - Opções de exemplo: "acme-corp", "joana-fotografia", "evento-2026". O usuário usa "Other" pra digitar o real.

2. **Validar o slug**:
   - Regex: `^[a-z0-9][a-z0-9-]*[a-z0-9]$`
   - Não pode ser `_template`
   - Não pode já existir em `clients/`
   - Se inválido → erro + repetir até válido

3. **Copiar o template** via Bash:
   ```bash
   cp -r c:/development/lp-generator/clients/_template c:/development/lp-generator/clients/{slug}
   ```

4. Informar: `✓ Cliente "{slug}" criado a partir do template.`

## Pre-step C: Salvar slug no side file

```bash
mkdir -p c:/development/lp-generator/squads/lp-generator/.runtime
echo "{slug}" > c:/development/lp-generator/squads/lp-generator/.runtime/current-slug.txt
```

Este arquivo é a fonte da verdade pros próximos steps descobrirem o cliente atual.

## Brief capture

Com `{slug}` resolvido, perguntar (ou usar o brief que veio nos args do run):

> Olá Patrick. Cliente: **{slug}**.
>
> Briefing curto da LP (texto livre OU campos):
>
> 1. **Produto/oferta:** O que está sendo vendido nesta LP? (1-2 frases concretas)
> 2. **Público-alvo:** Quem você quer atingir? Awareness presumido?
> 3. **Tom desejado:** (autoridade-prática / amigo-mentor / técnico-direto / descontraído / inspiracional / didático).
> 4. **URLs de referência (opcional):** 1-3 LPs próximas ao tom/estrutura desejado.
> 5. **Seções obrigatórias (opcional):** pricing, FAQ, etc.
> 6. **Restrições especiais (opcional):** Stack, prazo, perf budget, brand colors.
> 7. **Sugestão de stack (opcional):** HTML+Tailwind / Astro / Next.js / handoff-bundle / outro.

**Modo "design handoff":** Se o brief mencionar uma URL `api.anthropic.com/v1/design/...`, esta é uma run em modo handoff. O Davi Dev no step 6 fará copy as-is do bundle pra `clients/{slug}/src/` (pulando partes de strategy/copy/design).

## Saving (um lugar só)

Escrever o briefing diretamente em `clients/{slug}/brief/briefing.md`:

```markdown
---
client_slug: {slug}
run_id: {run_id}
mode: {brief-driven | design-handoff}
date: {ISO date}
---

# Briefing — {slug}

{resposta integral do Patrick}
```

Sobrescreve qualquer `briefing.md` anterior do cliente.

## O que acontece depois

1. Step 02 lê `squads/lp-generator/.runtime/current-slug.txt`, depois lê `clients/{slug}/brief/briefing.md`.
2. Bruno produz `strategy.md` em `clients/{slug}/brief/strategy.md`.
3. Patrick aprova no step 3.
4. Carla → `clients/{slug}/content/copy.md`.
5. Diana → `clients/{slug}/design/design-system.md` + `clients/{slug}/assets/images/`.
6. Davi → `clients/{slug}/src/`.
7. Rita → `clients/{slug}/deploy/qa-review.md`.
