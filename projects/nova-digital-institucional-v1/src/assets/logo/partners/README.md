# Logos de marcas parceiras

A seção "Grandes Marcas Parceiras" (marquee na home) carrega os logos por
arquivo. Cada logo é exibido dentro de um **tile quadrado de tamanho idêntico,
com bordas arredondadas** (`.partner-logo` em `lp.css`). O logo é centralizado
e ajustado com `object-fit: contain`, então **qualquer proporção** (largo,
quadrado, etc.) funciona sem distorcer.

## Arquivos esperados

Coloque os arquivos abaixo nesta pasta com **exatamente** estes nomes:

| Marca        | Arquivo                |
|--------------|------------------------|
| iFood        | `ifood.jpg`            |
| Marisa       | `marisa.png`           |
| C&A          | `c-e-a.png`            |
| O Boticário  | `o-boticario.png`      |
| Seara        | `seara.png`            |
| Santa Lolla  | `santa-lolla.png`      |
| 99 Food      | `99-food.png`          |

A lista (nomes/ordem) fica em `PARTNERS`, dentro de `src/lp.js`.

## Recomendações de arte

- Preferir **PNG com fundo transparente** (ou fundo branco), pois o tile já é
  branco com bordas arredondadas.
- Resolução sugerida: ~256–512 px no maior lado.
- Se um arquivo estiver faltando, o nome da marca aparece como texto (fallback),
  mantendo o tamanho/forma do tile.
