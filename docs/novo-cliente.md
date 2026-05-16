# Como adicionar um novo cliente

## 1. Copiar o template
```powershell
Copy-Item -Recurse clients/_template clients/<slug-do-cliente>
```
Slug em `kebab-case` (ex.: `acme-corp`, `padaria-do-zé` → `padaria-do-ze`).

## 2. Preencher os artefatos
Na ordem:
1. `brief/briefing.md` — quem é, o que quer, para quem
2. `content/copy.md` — todo o texto final da LP
3. `design/design-system.md` — paleta, tipografia, tokens
4. `assets/` — logos, imagens, fontes do cliente
5. `design/references/` — screenshots, mood boards, links de inspiração

> ⚠️ Não pule o briefing. Os agentes do opensquad usam ele como verdade.

## 3. Acionar o opensquad
Apontando para `clients/<slug>/`. O prompt base está em [shared/prompts/opensquad-lp.md](../shared/prompts/opensquad-lp.md).

Os agentes produzem código em `clients/<slug>/src/`.

## 4. QA e deploy
- Rodar checklist de [shared/checklists/qa.md](../shared/checklists/qa.md)
- Preencher `deploy/deploy.md` com config de produção
- Deploy

## 5. Manutenção
Toda alteração futura passa pela mesma pasta do cliente. Nada é compartilhado entre clientes — se algo precisar ser replicado, copie explicitamente.
