/* =============================================================
   Nova Digital — Animations
   - [data-reveal] elements fade up on scroll (manual scroll check)
   - [data-counter] number animates from 0 to its written value
   - Marquee pauses on hover (via CSS)
   ============================================================= */

(function () {
  if (typeof window === 'undefined') return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Counter ----------
  function parseStatTarget(text) {
    const m = text.match(/(.*?)([\d.,]+)(.*)/);
    if (!m) return null;
    const raw = m[2].replace(/\./g, '').replace(',', '.');
    const num = parseFloat(raw);
    if (!isFinite(num)) return null;
    return { prefix: m[1], suffix: m[3], target: num, original: text, hasDecimal: m[2].includes(',') || m[2].includes('.') };
  }

  function animateCount(el, info, dur) {
    dur = dur || 1400;
    const start = performance.now();
    const ease = t => 1 - Math.pow(1 - t, 4);
    function frame(now) {
      const t = Math.min(1, (now - start) / dur);
      const v = info.target * ease(t);
      let display;
      if (info.hasDecimal) display = v.toFixed(1).replace('.', ',');
      else display = Math.round(v).toLocaleString('pt-BR');
      el.textContent = info.prefix + display + info.suffix;
      if (t < 1) requestAnimationFrame(frame);
      else el.textContent = info.original;
    }
    requestAnimationFrame(frame);
  }

  // ---------- Manual scroll-based visibility check ----------
  function isInView(el, margin) {
    margin = margin || 80;
    const r = el.getBoundingClientRect();
    const h = window.innerHeight || document.documentElement.clientHeight;
    return r.top < h - margin && r.bottom > margin;
  }

  function checkAll() {
    document.querySelectorAll('[data-reveal]:not(.is-revealed)').forEach(el => {
      if (isInView(el, 60)) el.classList.add('is-revealed');
    });
    document.querySelectorAll('[data-counter]:not(.is-counted)').forEach(el => {
      if (isInView(el, 100)) {
        el.classList.add('is-counted');
        const info = parseStatTarget(el.textContent);
        if (info) animateCount(el, info);
      }
    });
  }

  let raf;
  function schedule() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(checkAll);
  }

  function boot() {
    if (reduce) {
      document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-revealed'));
      return;
    }
    checkAll();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    // React renders async — keep checking for newly inserted elements
    const mo = new MutationObserver(schedule);
    if (document.body) mo.observe(document.body, { childList: true, subtree: true });

    // periodic safety net for first second after load
    let kicks = 0;
    const kick = setInterval(() => {
      checkAll();
      if (++kicks > 8) clearInterval(kick);
    }, 250);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(boot, 50));
  } else {
    setTimeout(boot, 50);
  }
})();
