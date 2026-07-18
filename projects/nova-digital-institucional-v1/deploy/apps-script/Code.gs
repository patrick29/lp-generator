/* ============================================================
   Nova Digital — recepção de leads da LP → Google Sheets
   ------------------------------------------------------------
   Cole este código no editor do Apps Script da sua planilha
   (Extensões → Apps Script) e publique como App da Web.
   Passo a passo completo em SETUP.md.
   ============================================================ */

const SHEET_NAME = 'Leads';
const TOKEN = 'ed5bd7937a8d43800bd1b9e51f1497922cf4df1725ecce8e'; // deve ser idêntico ao LEAD_TOKEN no lp.js

function doPost(e) {
  try {
    const p = (e && e.parameter) ? e.parameter : {};

    // 1) honeypot: campo "website" só é preenchido por bots → ignora em silêncio
    if (p.website) return json_({ ok: true });

    // 2) token compartilhado (barreira leve contra POSTs na URL crua)
    if (p.token !== TOKEN) return json_({ ok: false, error: 'unauthorized' });

    // 3) validação mínima
    const nome = (p.nome || '').toString().trim();
    const whatsapp = (p.whatsapp || '').toString().trim();
    if (!nome && !whatsapp) return json_({ ok: false, error: 'empty' });

    // 4) grava a linha (cria a aba + cabeçalho na primeira vez)
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sh = ss.getSheetByName(SHEET_NAME);
    if (!sh) {
      sh = ss.insertSheet(SHEET_NAME);
      sh.appendRow(['data_hora', 'nome', 'instagram', 'whatsapp', 'investimento', 'origem']);
    }
    sh.appendRow([
      new Date(),
      nome,
      (p.instagram || '').toString().trim(),
      whatsapp,
      (p.investimento || '').toString().trim(),
      (p.origem || '').toString().trim(),
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

// Útil para um teste rápido abrindo a URL /exec no navegador (deve responder "ok").
function doGet() {
  return json_({ ok: true, service: 'nova-digital-leads' });
}

function json_(o) {
  return ContentService
    .createTextOutput(JSON.stringify(o))
    .setMimeType(ContentService.MimeType.JSON);
}
