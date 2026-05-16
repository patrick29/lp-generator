# lp-generator

Repositório central de landing pages para múltiplos clientes. Cada cliente vive isolado em sua própria pasta sob `clients/`, com briefing, conteúdo, design e código próprios. A implementação é feita pelo **opensquad** (skill de orquestração multi-agente), que lê os artefatos da pasta do cliente como input.

## Estrutura

```
lp-generator/
├── clients/             # Uma pasta por cliente (isoladas)
│   ├── _template/       # Molde para novos clientes — copie e renomeie
│   └── <nome-cliente>/  # Pasta de cada cliente real
├── shared/              # Recursos compartilhados entre clientes
│   ├── prompts/         # Prompts/instruções para o opensquad
│   └── checklists/      # Checklists de QA, performance, SEO, etc.
└── docs/                # Documentação do fluxo de trabalho
```

> **Importante:** clientes são isolados — nada de código/componentes compartilhados entre `clients/X` e `clients/Y`. O que é compartilhado vai em `shared/`, mas apenas como tooling/processo, nunca como dependência de runtime das LPs.

## Como iniciar um novo cliente

1. Copie `clients/_template/` → `clients/<slug-do-cliente>/`
2. Preencha os arquivos em `brief/`, `content/`, `design/` e jogue assets em `assets/`
3. Acione o opensquad apontando para a pasta do cliente para gerar a LP em `src/`

Detalhes em [docs/novo-cliente.md](docs/novo-cliente.md).

## Stack

Ainda não definida — a estrutura é agnóstica. A escolha de stack (HTML puro, Astro, Next, etc.) é feita por cliente dentro de `clients/<cliente>/src/`. Veja [docs/stack.md](docs/stack.md) para o processo de decisão.
