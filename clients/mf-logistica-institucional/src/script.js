/* MF Logística — LP institucional. Vanilla JS: form de cotação, reveal, header scroll. */

// Endpoint de captura de leads. Vazio = usa o fallback de WhatsApp (abre conversa com a cotação preenchida).
// Para integrar com Google Apps Script / CRM, cole a URL aqui (mesmo padrão usado em outros clientes).
const FORM_ENDPOINT = "";
const WHATSAPP_NUMBER = "5591992111003"; // +55 91 99211-1003

(function () {
  "use strict";

  /* Header ganha sombra ao rolar (sinaliza profundidade sem custo de layout). */
  const header = document.getElementById("siteHeader");
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Reveal on scroll. IntersectionObserver evita custo de scroll listener por elemento. */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-revealed"); obs.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-revealed"));
  }

  /* Form de cotação. */
  const form = document.getElementById("quoteForm");
  const statusEl = document.getElementById("formStatus");
  if (!form) return;

  const setStatus = (msg, ok) => {
    statusEl.textContent = msg;
    statusEl.classList.toggle("is-ok", ok === true);
    statusEl.classList.toggle("is-err", ok === false);
  };

  const buildWhatsappLink = (d) => {
    const linhas = [
      "Olá! Quero uma cotação de frete com a MF Logística.",
      "",
      `Origem: ${d.origem}`,
      `Destino: ${d.destino}`,
      `Tipo de carga: ${d.tipo}`,
      d.peso ? `Peso/volume: ${d.peso}` : null,
      `Nome: ${d.nome}`,
      d.empresa ? `Empresa: ${d.empresa}` : null,
      `E-mail: ${d.email}`,
      `Telefone: ${d.telefone}`,
    ].filter(Boolean);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(linhas.join("\n"))}`;
  };

  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("Confira os campos obrigatórios antes de enviar.", false);
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    setStatus("Enviando…", null);

    // Sem endpoint configurado: abre o WhatsApp com a cotação preenchida (fallback robusto).
    if (!FORM_ENDPOINT) {
      window.open(buildWhatsappLink(data), "_blank", "noopener");
      setStatus("Abrimos o WhatsApp com sua cotação preenchida. É só enviar!", true);
      submitBtn.disabled = false;
      form.reset();
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      setStatus("Cotação recebida! Nossa equipe comercial retorna o quanto antes.", true);
      form.reset();
    } catch (err) {
      // Degrada para WhatsApp se a rede falhar — o lead não se perde.
      window.open(buildWhatsappLink(data), "_blank", "noopener");
      setStatus("Tivemos um problema no envio, então abrimos o WhatsApp com sua cotação. É só enviar!", true);
    } finally {
      submitBtn.disabled = false;
    }
  });
})();
