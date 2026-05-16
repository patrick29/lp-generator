# Decisão de stack por cliente

A stack é decidida **por cliente**, não global. Não há código compartilhado entre clientes. Guia rápido:

| Tipo de LP | Stack sugerida | Por quê |
|------------|----------------|---------|
| 1 página estática, copy fixa | **HTML/CSS/JS puro** | Sem build, deploy trivial, performance máxima |
| LP com várias seções reutilizáveis ou variantes | **Astro** | Componentes + zero JS por padrão |
| LP integrada a app/dashboard ou com muita lógica client-side | **Next.js** | SSR/ISR, ecossistema React |
| Cliente no-code/CMS | Webflow/Framer exportado | Cliente edita sozinho depois |

A escolha vira parte do README do cliente. Uma vez escolhida, fica registrada e não muda sem motivo forte.
