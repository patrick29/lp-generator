# Conectar os formulários da LP a uma planilha no Google Drive

Os formulários da LP (hero e contato) enviam cada lead para uma planilha no **seu** Google Drive,
usando um **Google Apps Script** publicado como App da Web. Sem backend, custo zero, e os leads
ficam só com você (ninguém de fora consegue ler a planilha — o script apenas *adiciona* linhas).

## 1. Criar a planilha

1. Acesse `https://sheets.new` (cria uma planilha nova no seu Drive).
2. Dê um nome, ex.: **Nova Digital — Leads**.
   > Não precisa criar colunas à mão: o script cria a aba `Leads` e o cabeçalho no primeiro envio.

## 2. Colar o script

1. Na planilha: **Extensões → Apps Script**.
2. Apague o conteúdo padrão e cole tudo de [`Code.gs`](./Code.gs).
3. Troque o valor de `TOKEN` por um texto aleatório (ex.: gere em `https://www.uuidgenerator.net/`).
   **Guarde esse token** — ele tem que ser idêntico ao `LEAD_TOKEN` no `lp.js`.
4. Salve (ícone de disquete).

## 3. Publicar como App da Web

1. Botão **Implantar → Nova implantação**.
2. Em "Selecionar tipo" (ícone de engrenagem), escolha **App da Web**.
3. Configure:
   - **Executar como:** Eu (sua conta)
   - **Quem tem acesso:** **Qualquer pessoa**
4. **Implantar** → autorize o acesso à sua conta Google quando pedir
   (pode aparecer um aviso "App não verificado" → *Avançado* → *Acessar (não seguro)*; é o seu próprio script).
5. Copie a **URL do app da Web** — termina em `/exec`.

> Atualizou o `Code.gs` depois? Use **Implantar → Gerenciar implantações → editar (lápis) → Versão: Nova versão → Implantar**.
> A URL `/exec` continua a mesma.

## 4. Ligar a LP ao endpoint

No arquivo [`../../src/lp.js`](../../src/lp.js), no topo do bloco `Forms + toast`, preencha:

```javascript
const LEAD_ENDPOINT = 'https://script.google.com/macros/s/XXXX/exec'; // a URL do passo 3
const LEAD_TOKEN    = 'o-mesmo-token-do-Code.gs';
```

Publique a LP (Vercel) e pronto.

## 5. Testar

**Endpoint isolado (terminal):**

```bash
curl -L -d "token=SEU_TOKEN&nome=Teste&whatsapp=91999999999&instagram=@teste&investimento=Acima de R$ 5.000&origem=teste" "URL_DO_EXEC"
```

- Resposta esperada: `{"ok":true}` e uma nova linha na aba `Leads`.
- Com `&website=spam` no comando → responde `{"ok":true}` mas **não** grava (honeypot).
- Com token errado → `{"ok":false,"error":"unauthorized"}`.

**No site:** preencha o formulário e envie. No DevTools → Network aparece o POST para `/exec`
(status "opaco"/0 é esperado por usar `mode:'no-cors'`). Confira a linha nova na planilha —
`origem=hero` no formulário do topo e `origem=contato` no de baixo.

## Segurança (resumo)

- Os leads ficam privados na sua conta Google; o endpoint só **adiciona** linhas, não lê.
- Nenhuma chave/segredo vai para o navegador.
- Único risco: spam de leads falsos no endpoint público — mitigado por honeypot + token + validação.
  Para proteção forte, dá para acrescentar Cloudflare Turnstile depois.
