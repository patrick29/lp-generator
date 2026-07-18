# lp-generator

Repositório central de landing pages para múltiplos clientes. Os **dados de cada cliente** (referência) ficam em `clients/`; os **projetos** (código entregável) ficam em `projects/`. Um cliente pode ter vários projetos/versões.

## Estrutura

```
lp-generator/
├── clients/                        # Dados de referência, uma pasta por cliente (isoladas)
│   ├── _template/                  # Molde de cliente — copie e renomeie
│   └── <slug-cliente>/             # brief/, design/, assets/, decisoes-copy.md
├── projects/                       # Projetos entregáveis, uma pasta por projeto
│   ├── _template/                  # Molde de projeto — copie e renomeie
│   └── <slug>-<projeto>-<versão>/  # src/, deploy/, content/copy.md
├── shared/                         # Recursos compartilhados (tooling/processo)
│   ├── prompts/                    # Prompts/instruções de apoio
│   └── checklists/                 # Checklists de QA, performance, SEO, etc.
└── docs/                           # Documentação do fluxo de trabalho
```

> **Importante:** clientes são isolados — nada de código/componentes compartilhados entre projetos de clientes diferentes. O que é compartilhado vai em `shared/`, apenas como tooling/processo, nunca como dependência de runtime das LPs.

## Como iniciar um novo cliente/projeto

1. Copie `clients/_template/` → `clients/<slug-do-cliente>/` e preencha `brief/`, `design/`, `assets/`, `decisoes-copy.md`.
2. Copie `projects/_template/` → `projects/<slug>-<projeto>-<versão>/` (ex.: `acme-corp-institucional-v1`).
3. Gere/edite a LP em `src/` e a copy em `content/copy.md`, consumindo os dados do cliente.

Detalhes em [docs/novo-cliente.md](docs/novo-cliente.md).

## Stack

Ainda não definida — a estrutura é agnóstica. A escolha de stack (HTML puro, Astro, Next, etc.) é feita por projeto dentro de `projects/<projeto>/src/`. Veja [docs/stack.md](docs/stack.md) para o processo de decisão.
