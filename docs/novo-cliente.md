# Como adicionar um novo cliente e projeto

A estrutura separa **dados do cliente** (referência, em `clients/`) do **projeto** (código entregável, em `projects/`). Um cliente pode ter vários projetos/versões.

## 1. Criar a pasta de dados do cliente
```powershell
Copy-Item -Recurse clients/_template clients/<slug-do-cliente>
```
Slug em `kebab-case` (ex.: `acme-corp`, `padaria-do-zé` → `padaria-do-ze`).

## 2. Preencher a referência do cliente
Na ordem, em `clients/<slug>/`:
1. `brief/briefing.md` — quem é, o que quer, para quem, produtos/serviços
2. `design/design-system.md` — paleta, tipografia, tokens
3. `assets/` — logos, imagens, fontes (identidade visual)
4. `design/references/` — screenshots, mood boards, links de inspiração
5. `decisoes-copy.md` — decision log de copy (a skill `copy-lp` cuida disto)

> ⚠️ Não pule o briefing. Ele é a fonte da verdade para a geração da LP.

## 3. Criar o projeto
```powershell
Copy-Item -Recurse projects/_template projects/<slug>-<projeto>-<versão>
```
Nomeie no padrão `[client-slug]-[project-name]-[version]` (ex.: `acme-corp-institucional-v1`).

## 4. Gerar a LP
A partir dos dados em `clients/<slug>/`, gere/edite o código em `projects/<slug>-<projeto>-<versão>/src/` e a copy em `content/copy.md`. Para SEO, use a skill `seo-lp`; para copy, `copy-lp`.

## 5. QA e deploy
- Rodar checklist de [shared/checklists/qa.md](../shared/checklists/qa.md)
- Preencher `projects/<projeto>/deploy/deploy.md` com config de produção
- Apontar o *base/root directory* do Netlify/Vercel para `projects/<projeto>/src` e publicar

## 6. Manutenção e novas versões
Alterações no mesmo projeto ficam na própria pasta dele. Uma nova versão/reformulação é um novo projeto (`<slug>-<projeto>-v2`) apontando para os mesmos dados em `clients/<slug>/`. Nada é compartilhado entre clientes — se algo precisar ser replicado, copie explicitamente.
