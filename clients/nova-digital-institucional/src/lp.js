/* ============================================================
   Nova Digital — LP Institucional · interaction & animation
   ============================================================ */
(function () {
  'use strict';
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const icons = () => window.lucide && window.lucide.createIcons();

  /* ---------------- DATA ---------------- */
  const SERVICES = [
    { ic: 'users', cat: 'conteudo', eyebrow: 'Presença', title: 'Gestão de Redes Sociais', body: 'Conteúdo estratégico e constante que gera conexão real, comunidade e autoridade para a sua marca.', tags: ['Linha editorial', 'Stories', 'Calendário'] },
    { ic: 'clapperboard', cat: 'audiovisual', eyebrow: 'Audiovisual', title: 'Reels & Vídeos de Impacto', body: 'Roteiro, gravação presencial e edição profissional de vídeos que param o scroll e convertem.', tags: ['Roteiro', 'Gravação', 'Edição'] },
    { ic: 'camera', cat: 'audiovisual', eyebrow: 'Fotografia', title: 'Ensaio & Fotos com IA', body: 'Ensaio fotográfico de produtos e ambiente, mais fotos geradas com IA para enriquecer o feed.', tags: ['Produtos', 'Ambiente', 'IA'] },
    { ic: 'target', cat: 'aquisicao', eyebrow: 'Performance', title: 'Tráfego Pago', body: 'Campanhas no Google e Meta com foco total em retorno sobre o investimento.', tags: ['Meta Ads', 'Google Ads', 'ROI'] },
    { ic: 'sparkles', cat: 'marca', eyebrow: 'Identidade', title: 'Branding & Posicionamento', body: 'Marcas com propósito, personalidade e uma identidade visual memorável e coerente.', tags: ['Posicionamento', 'Identidade', 'Tom de voz'] },
    { ic: 'bar-chart-3', cat: 'aquisicao', eyebrow: 'Inteligência', title: 'Análise & Relatórios', body: 'Métricas claras todo mês: o que funcionou, o que ajustar e o próximo passo da estratégia.', tags: ['Relatórios', 'Métricas', 'Otimização'] },
  ];

  const METODO = [
    { letter: 'N', etapa: '01', name: 'Narrativa', sub: 'Posicionamento & Linha Editorial',
      desc: 'Antes de postar qualquer coisa, definimos QUEM é a sua marca no digital. Um posicionamento claro e uma linha editorial que atraem exatamente o público certo, não seguidores aleatórios, mas pessoas que realmente vão comprar de você.',
      items: ['Análise de perfil e diagnóstico digital', 'Definição do posicionamento e tom de voz', 'Criação da linha editorial estratégica', 'Coleta de dados e insights do público-alvo'] },
    { letter: 'O', etapa: '02', name: 'Organização', sub: 'Planejamento & Cronograma Editorial',
      desc: 'Uma marca de sucesso no digital não improvisa, ela planeja. Organizamos todo o calendário de conteúdo: datas comemorativas, campanhas sazonais e posts estratégicos que mantêm o seu perfil ativo, relevante e sempre gerando interesse.',
      items: ['Cronograma mensal de postagens', 'Planejamento de stories e interações', 'Calendário de campanhas e datas especiais', 'Gestão organizada de publicações'] },
    { letter: 'V', etapa: '03', name: 'Viralização', sub: 'Produção, Gravação & Edição de Alto Impacto',
      desc: 'É aqui que a magia acontece. Nossa equipe visita a sua empresa, capta os bastidores, os produtos e as histórias que conectam o público à marca. Produzimos Reels, fotos e conteúdos que param o scroll e geram conversão.',
      items: ['Visita presencial para gravação e captação', 'Roteirização de Reels e vídeos', 'Edição profissional com identidade visual', 'Ensaio fotográfico de produtos e ambiente', 'Fotos com IA (10 fotos)'] },
    { letter: 'A', etapa: '04', name: 'Análise', sub: 'Métricas, Insights & Melhoria Contínua',
      desc: 'Sem dados, não há estratégia. Todo mês analisamos os resultados: o que funcionou, o que pode melhorar e o que será ajustado para o próximo ciclo. Assim a sua presença digital evolui continuamente, gerando mais alcance, engajamento e clientes.',
      items: ['Relatório mensal de desempenho', 'Análise de perfil e métricas de alcance', 'Identificação de conteúdos de maior impacto', 'Ajuste de estratégia e otimização contínua'] },
  ];

  const DEPOIMENTOS = [
    { stars: 5, text: 'Em três meses a gente saiu de um perfil parado para uma fila de pedidos no direct. O Método NOVA organizou tudo: hoje sei exatamente o que postar e por quê.', name: 'Mariana Alves', role: 'Confeitaria Doce Ponto', initials: 'MA', tone: 'orange' },
    { stars: 5, text: 'A visita presencial mudou o jogo. Os Reels ficaram com a nossa cara e o alcance explodiu. Sinto que tenho uma sócia de marketing, não um fornecedor.', name: 'João Pereira', role: 'Studio JP Arquitetura', initials: 'JP', tone: '' },
    { stars: 5, text: 'O relatório mensal é o que mais valorizo. Pela primeira vez entendo para onde vai cada real investido, e os números só crescem.', name: 'Renata Castro', role: 'Clínica Vita', initials: 'RC', tone: 'orange' },
  ];

  const FAQ = [
    { q: 'O que é o Método NOVA™?', a: 'É a metodologia exclusiva da Nova Digital, estruturada em quatro etapas: Narrativa, Organização, Viralização e Análise. Ele conduz a sua marca do posicionamento estratégico à análise contínua de resultados, de forma organizada e mensurável.' },
    { q: 'Vocês atendem marcas de qualquer lugar do Brasil?', a: 'Sim. Atendemos marcas em todo o Brasil. A etapa de gravação presencial é combinada conforme a sua localização e o escopo do projeto.' },
    { q: 'Em quanto tempo vejo resultado?', a: 'Cada marca tem seu ritmo, mas a partir do primeiro ciclo já entregamos posicionamento, planejamento e os primeiros conteúdos. Os resultados de alcance e engajamento crescem de forma consistente ao longo dos meses, sempre acompanhados de perto por relatórios.' },
    { q: 'Como funciona o diagnóstico gratuito?', a: 'Você preenche o formulário com algumas informações da sua marca e, em até 1 dia útil, retornamos com uma análise do seu marketing atual e os primeiros caminhos, sem compromisso.' },
    { q: 'A gravação dos vídeos está inclusa?', a: 'Sim. Na etapa de Viralização nossa equipe visita a sua empresa para captar bastidores, produtos e histórias, com roteirização, edição profissional, ensaio fotográfico e fotos com IA.' },
  ];

  // fill: true → logo has a solid colored background; let it fill the rounded
  // tile edge-to-edge (app-icon style) instead of floating with white padding.
  const PARTNERS = [
    { name: 'iFood',       src: 'assets/logo/partners/ifood.jpg' },
    { name: 'Marisa',      src: 'assets/logo/partners/marisa.png',      fill: true },
    { name: 'C&A',         src: 'assets/logo/partners/c-e-a.png' },
    { name: 'O Boticário', src: 'assets/logo/partners/o-boticario.png' },
    { name: 'Seara',       src: 'assets/logo/partners/seara.png' },
    { name: 'Santa Lolla', src: 'assets/logo/partners/santa-lolla.png', fill: true },
    { name: '99 Food',     src: 'assets/logo/partners/99-food.png',     fill: true },
  ];

  /* ---------------- RENDER: partners ---------------- */
  const PARTNER_SCROLL_SPEED = 70; // px per second — constant regardless of logo count

  function renderPartners() {
    const track = $('#partnersTrack');
    if (!track) return;
    const make = (p) =>
      `<span class="partner-logo${p.fill ? ' partner-logo--fill' : ''}" title="${p.name}"><img src="${p.src}" alt="${p.name}" loading="lazy" data-name="${p.name}"></span>`;

    // One full pass over the logos.
    const onePass = PARTNERS.map(make).join('');
    // Repeat the pass until a single "half" is wider than the viewport, so the
    // strip never runs out of content (no empty gap). Two identical halves +
    // a -50% scroll make the loop perfectly seamless (truly infinite).
    const itemW = 116 + 32; // tile width + margin-right (--space-8)
    const viewport = (track.parentElement && track.parentElement.clientWidth) || window.innerWidth || 1280;
    const passes = Math.max(2, Math.ceil(viewport / (PARTNERS.length * itemW)) + 1);
    const half = onePass.repeat(passes);
    track.innerHTML = half + half; // duplicate the half → seamless loop

    // Keep a constant scroll speed: duration scales with the distance travelled
    // (one half-width, which is what the -50% keyframe moves).
    const halfWidth = track.scrollWidth / 2;
    if (halfWidth > 0) track.style.animationDuration = (halfWidth / PARTNER_SCROLL_SPEED).toFixed(1) + 's';

    // graceful fallback: if a logo file is missing, show the brand name as text
    track.querySelectorAll('.partner-logo img').forEach((img) => {
      img.addEventListener('error', () => {
        const span = document.createElement('span');
        span.className = 'partner-logo__fallback';
        span.textContent = img.dataset.name;
        img.replaceWith(span);
      });
    });
  }

  /* ---------------- RENDER: services ---------------- */
  function renderServices() {
    const grid = $('#svcGrid');
    if (!grid) return;
    grid.innerHTML = SERVICES.map((s, i) => `
      <article class="nd-card nd-card--interactive svc-card" data-cat="${s.cat}">
        <span class="svc-card__num">0${i + 1}</span>
        <span class="svc-card__ic"><i data-lucide="${s.ic}"></i></span>
        <div class="nd-card__eyebrow">${s.eyebrow}</div>
        <div class="nd-card__title">${s.title}</div>
        <div class="nd-card__body">${s.body}</div>
        <div class="svc-tags">${s.tags.map(t => `<span class="svc-tag">${t}</span>`).join('')}</div>
      </article>`).join('');
    icons();
  }

  /* ---------------- RENDER: depoimentos ---------------- */
  function renderDepo() {
    const grid = $('#depoGrid');
    if (!grid) return;
    grid.innerHTML = DEPOIMENTOS.map(d => `
      <article class="depo-card">
        <span class="depo-card__quote">”</span>
        <div class="depo-card__stars">${'★'.repeat(d.stars)}</div>
        <p class="depo-card__text">${d.text}</p>
        <div class="depo-card__who">
          <span class="nd-avatar nd-avatar--md ${d.tone === 'orange' ? 'nd-avatar--orange' : ''}">${d.initials}</span>
          <div>
            <div class="depo-card__name">${d.name}</div>
            <div class="depo-card__role">${d.role}</div>
          </div>
        </div>
      </article>`).join('');
  }

  /* ---------------- RENDER: FAQ ---------------- */
  function renderFaq() {
    const list = $('#faqList');
    if (!list) return;
    list.innerHTML = FAQ.map((f, i) => `
      <div class="faq-item${i === 0 ? ' is-open' : ''}">
        <button class="faq-q" aria-expanded="${i === 0}">${f.q}<span class="faq-q__ic"><i data-lucide="plus"></i></span></button>
        <div class="faq-a"><div class="faq-a__inner">${f.a}</div></div>
      </div>`).join('');
    icons();
    $$('.faq-item', list).forEach(item => {
      const q = $('.faq-q', item), a = $('.faq-a', item);
      if (item.classList.contains('is-open')) a.style.maxHeight = a.scrollHeight + 'px';
      q.addEventListener('click', () => {
        const open = item.classList.toggle('is-open');
        q.setAttribute('aria-expanded', open);
        a.style.maxHeight = open ? a.scrollHeight + 'px' : 0;
      });
    });
  }

  /* ---------------- RENDER: MÉTODO (3 modes) ---------------- */
  let metodoMode = 'timeline';
  let metodoCleanup = null;

  function stepItems(items) {
    return `<ul class="mstep__items">${items.map(it =>
      `<li><span class="mstep__check"><i data-lucide="check"></i></span>${it}</li>`).join('')}</ul>`;
  }

  function renderMetodo(mode) {
    metodoMode = mode;
    const stage = $('#metodoStage');
    const rail = $('#immRail');
    if (metodoCleanup) { metodoCleanup(); metodoCleanup = null; }
    if (rail) { rail.classList.remove('is-visible'); rail.innerHTML = ''; }
    stage.className = 'metodo__stage metodo--' + mode;
    const metodoSec = document.getElementById('metodo');
    if (metodoSec) metodoSec.classList.remove('is-hscroll');

    if (mode === 'timeline') {
      const horizontal = !reduceMotion;
      if (horizontal) {
        if (metodoSec) metodoSec.classList.add('is-hscroll');
        stage.innerHTML = `<div class="mhscroll" id="mhscroll"><div class="mhpin">
          <div class="mhtrack" id="mhtrack">
            ${METODO.map((m, i) => `
              <div class="mhpanel" data-i="${i}">
                <div class="mhpanel__inner">
                  <div class="mhpanel__visual"><span class="mhpanel__letter">${m.letter}</span></div>
                  <div class="mhpanel__card">
                    <div class="mstep__etapa"><b>Etapa ${m.letter}</b> · ${m.sub}</div>
                    <div class="mstep__name">${m.name}</div>
                    <p class="mstep__desc">${m.desc}</p>
                    ${stepItems(m.items)}
                  </div>
                </div>
              </div>`).join('')}
          </div>
          <div class="mhprogress"><div class="mhdots" id="mhdots">${METODO.map((m, i) => `<span class="mhdot${i === 0 ? ' is-on' : ''}" data-i="${i}">${m.letter}</span>`).join('')}</div><div class="mhbar"><div class="mhfill" id="mhfill"></div></div></div>
          <div class="mhhint">Role para avançar <i data-lucide="arrow-right"></i></div>
        </div></div>`;
        icons();
        setupHorizontalTimeline();
      } else {
        stage.innerHTML = `<div class="wrap"><div class="mtimeline" id="mtimeline">
        <div class="mtimeline__line"><div class="mtimeline__progress" id="mtProgress"></div></div>
        ${METODO.map(m => `
          <div class="mtstep" data-letter="${m.letter}">
            <div class="mtcard">
              <div class="mstep__etapa"><b>Etapa ${m.letter}</b></div>
              <div class="mstep__name">${m.name}</div>
              <div class="mstep__sub">${m.sub}</div>
              <p class="mstep__desc">${m.desc}</p>
              ${stepItems(m.items)}
            </div>
            <div class="mtstep__node"><span>${m.letter}</span></div>
            <div class="mtstep__aside"><div class="mtstep__bigletter">${m.letter}</div></div>
          </div>`).join('')}
      </div></div>`;
        icons();
        setupTimelineScroll();
      }
    } else if (mode === 'cards') {
      stage.innerHTML = `<div class="wrap"><div class="mcards">
        ${METODO.map(m => `
          <div class="mcard">
            <span class="mcard__watermark" aria-hidden="true">${m.letter}</span>
            <div class="mstep__etapa"><b>Etapa ${m.letter}</b></div>
            <div class="mcard__letter">${m.letter}</div>
            <div class="mstep__name">${m.name}</div>
            <div class="mstep__sub">${m.sub}</div>
            <p class="mstep__desc" style="font-size:var(--text-sm);margin-block:var(--space-1) var(--space-2)">${m.desc}</p>
            ${stepItems(m.items)}
          </div>`).join('')}
      </div></div>`;
      icons();
    } else if (mode === 'immersive') {
      stage.innerHTML = `<div class="mstage">${METODO.map(m => `
        <div class="wrap mimm" data-letter="${m.letter}">
          <div class="mimm__letterwrap"><div class="mimm__letter">${m.letter}</div></div>
          <div class="mimm__content">
            <div class="mstep__etapa"><b>Etapa ${m.letter}</b> · ${m.sub}</div>
            <div class="mstep__name">${m.name}</div>
            <p class="mstep__desc">${m.desc}</p>
            ${stepItems(m.items)}
          </div>
        </div>`).join('')}</div>`;
      icons();
      setupImmersive();
    }
    observeReveals();
  }

  function setupTimelineScroll() {
    const prog = $('#mtProgress');
    const line = prog && prog.parentElement;
    const steps = $$('.mtstep');
    if (!prog) return;
    if (reduceMotion) { prog.style.height = '100%'; steps.forEach(s => s.classList.add('is-on')); return; }
    let raf = null;
    const update = () => {
      const rect = line.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height;
      const passed = Math.min(Math.max(vh * 0.55 - rect.top, 0), total);
      prog.style.height = passed + 'px';
      steps.forEach(s => {
        const n = $('.mtstep__node', s).getBoundingClientRect();
        s.classList.toggle('is-on', n.top + n.height / 2 < vh * 0.6);
      });
      raf = null;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    metodoCleanup = () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
    update();
  }

  function setupHorizontalTimeline() {
    const scroller = $('#mhscroll');
    const pin = scroller && $('.mhpin', scroller);
    const track = $('#mhtrack');
    const fill = $('#mhfill');
    if (!scroller || !track || !pin) return;
    const dots = $$('#mhdots .mhdot');
    const panels = $$('.mhpanel', track);
    let maxTranslate = 0, raf = null;
    const layout = () => {
      const vw = document.documentElement.clientWidth;
      panels.forEach(p => { p.style.width = vw + 'px'; });
      maxTranslate = Math.max(0, (panels.length - 1) * vw);
      scroller.style.height = (window.innerHeight + maxTranslate) + 'px';
    };
    const update = () => {
      const top = scroller.getBoundingClientRect().top;
      let p;
      if (top >= 0) {
        // before the zone — sits at the top of the spacer
        pin.style.position = 'absolute'; pin.style.top = '0'; p = 0;
      } else if (-top >= maxTranslate) {
        // after the zone — parked at the bottom, releases vertical scroll
        pin.style.position = 'absolute'; pin.style.top = maxTranslate + 'px'; p = 1;
      } else {
        // inside the zone — truly locked to the viewport (no vertical drift)
        pin.style.position = 'fixed'; pin.style.top = '0'; p = -top / maxTranslate;
      }
      // horizontal scroll driven by vertical progress
      track.style.transform = `translate3d(${(-p * maxTranslate).toFixed(1)}px,0,0)`;
      if (fill) fill.style.width = (p * 100).toFixed(2) + '%';
      const active = Math.round(p * (panels.length - 1));
      dots.forEach((d, i) => d.classList.toggle('is-on', i === active));
      raf = null;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    const onResize = () => {
      if (reduceMotion) { renderMetodo('timeline'); return; }
      layout(); update();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    metodoCleanup = () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      scroller.style.height = '';
      const m = document.getElementById('metodo');
      if (m) m.classList.remove('is-hscroll');
    };
    layout(); update();
  }

  function setupImmersive() {
    const rail = $('#immRail');
    const steps = $$('.mimm');
    const mstage = $('.mstage');
    if (!rail) return;
    rail.innerHTML = steps.map((s, i) => `<div class="mimm__raildot" data-i="${i}" title="${s.dataset.letter}"></div>`).join('');
    const dots = $$('.mimm__raildot', rail);
    let raf = null;
    const update = () => {
      const mid = window.innerHeight / 2;
      let best = 0, bd = Infinity;
      steps.forEach((s, i) => {
        const r = s.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bd) { bd = d; best = i; }
      });
      dots.forEach((d, di) => d.classList.toggle('is-on', di === best));
      if (mstage) {
        const sr = mstage.getBoundingClientRect();
        rail.classList.toggle('is-visible', sr.top < mid && sr.bottom > mid && metodoMode === 'immersive');
      }
      raf = null;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    metodoCleanup = () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); rail.classList.remove('is-visible'); };
    update();
  }

  /* ---------------- Reveals (scroll-based — IO is unreliable in capture) ---------------- */
  let revealEls = [];
  function checkReveals() {
    const vh = window.innerHeight;
    revealEls = revealEls.filter(el => {
      if (el.classList.contains('in')) return false;
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) { el.classList.add('in'); return false; }
      return true;
    });
  }
  function observeReveals() {
    const found = $$('.reveal:not(.in), .reveal-stagger:not(.in)');
    found.forEach(el => { if (!revealEls.includes(el)) revealEls.push(el); });
    checkReveals();
  }

  /* ---------------- Count-up stats ---------------- */
  function setupStats() {
    const strip = $('#statsStrip');
    if (!strip) return;
    const nums = $$('.strip__num', strip);
    const run = () => nums.forEach(el => {
      const target = parseFloat(el.dataset.count);
      const dec = parseInt(el.dataset.dec || '0', 10);
      const pre = el.dataset.prefix || '', suf = el.dataset.suffix || '';
      if (reduceMotion) { el.textContent = pre + target.toFixed(dec) + suf; return; }
      const dur = 1400, t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / dur, 1);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = pre + (target * e).toFixed(dec) + suf;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    let done = false;
    const check = () => {
      if (done) return;
      const r = strip.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.85 && r.bottom > 0) { done = true; run(); window.removeEventListener('scroll', check); }
    };
    window.addEventListener('scroll', check, { passive: true });
    check();
  }

  /* ---------------- Parallax ---------------- */
  function setupParallax() {
    if (reduceMotion) return;
    const els = $$('[data-parallax]');
    let raf = null;
    const update = () => {
      const vh = window.innerHeight;
      els.forEach(el => {
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const off = (center - vh / 2) / vh; // -0.5..0.5-ish
        const speed = parseFloat(el.dataset.parallax) * (window.__animScale ?? 1);
        el.style.transform = `translate3d(0, ${(-off * speed * 100).toFixed(1)}px, 0)`;
      });
      raf = null;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    window.__nudgeParallax = () => { if (window.__animScale === 0) els.forEach(el => el.style.transform = ''); else update(); };
    update();
  }

  /* ---------------- Scroll progress bar ---------------- */
  function setupScrollbar() {
    const bar = $('#scrollbar');
    if (!bar) return;
    let raf = null;
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`;
      raf = null;
    };
    window.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(update); }, { passive: true });
    update();
  }

  /* ---------------- Header solidify ---------------- */
  function setupHeader() {
    const hdr = $('#hdr');
    if (!hdr) return;
    const onScroll = () => hdr.classList.toggle('hdr--solid', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------------- Mobile menu ---------------- */
  function setupMobileMenu() {
    const mnav = $('#mnav'), burger = $('#burger'), mclose = $('#mclose');
    if (!mnav) return;
    burger && burger.addEventListener('click', () => mnav.classList.add('open'));
    mclose && mclose.addEventListener('click', () => mnav.classList.remove('open'));
    $$('[data-close]', mnav).forEach(a => a.addEventListener('click', () => mnav.classList.remove('open')));
  }

  /* ---------------- Service filters ---------------- */
  function setupFilters() {
    const filters = $('#svcFilters');
    if (!filters) return;
    filters.addEventListener('click', (e) => {
      const chip = e.target.closest('[data-filter]');
      if (!chip) return;
      $$('.nd-tag', filters).forEach(t => t.classList.remove('nd-tag--selected'));
      chip.classList.add('nd-tag--selected');
      const f = chip.dataset.filter;
      $$('#svcGrid .svc-card').forEach(c => { c.hidden = !(f === 'all' || c.dataset.cat === f); });
    });
  }

  /* ---------------- Método nav ---------------- */
  function setupMetodoNav() {
    const nav = $('#metodoNav');
    if (!nav) return;
    nav.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-mode]');
      if (!btn) return;
      $$('.metodo__navbtn', nav).forEach(b => b.classList.remove('metodo__navbtn--on'));
      btn.classList.add('metodo__navbtn--on');
      renderMetodo(btn.dataset.mode);
    });
  }
  // expose for Tweaks
  window.__setMetodoMode = (mode) => {
    const nav = $('#metodoNav');
    if (nav) $$('.metodo__navbtn', nav).forEach(b => b.classList.toggle('metodo__navbtn--on', b.dataset.mode === mode));
    renderMetodo(mode);
  };
  window.__getMetodoMode = () => metodoMode;

  /* ---------------- Animation intensity (Tweaks) ---------------- */
  window.__animScale = 1;
  window.__applyAnim = (level) => {
    const html = document.documentElement;
    if (level === 'off') {
      window.__animScale = 0;
      html.classList.add('anim-off');
      $$('.reveal, .reveal-stagger').forEach(el => el.classList.add('in'));
    } else {
      html.classList.remove('anim-off');
      window.__animScale = level === 'sutil' ? 0.35 : 1;
    }
    if (typeof window.__nudgeParallax === 'function') window.__nudgeParallax();
  };

  /* ---------------- Forms + toast ---------------- */
  // Endpoint do Apps Script (Web App). Cole a URL /exec e o mesmo token do Code.gs.
  // Passo a passo em deploy/apps-script/SETUP.md.
  const LEAD_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwXAKagfgwxeNo6Nl39QKPXzMr99WocCxHFcEHC-EdmEt044g4SqrpCO5_RvIdZAqIt/exec'; // ex.: https://script.google.com/macros/s/XXXX/exec
  const LEAD_TOKEN    = 'ed5bd7937a8d43800bd1b9e51f1497922cf4df1725ecce8e';     // idêntico ao TOKEN no Code.gs
  const LEAD_ORIGEM   = { heroForm: 'hero', leadForm: 'contato' };

  function setupForms() {
    const toast = $('#toast');
    const show = () => { if (!toast) return; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 3400); };
    ['heroForm', 'leadForm', 'newsForm'].forEach(id => {
      const f = document.getElementById(id);
      if (!f) return;
      f.addEventListener('submit', (e) => {
        e.preventDefault();
        const origem = LEAD_ORIGEM[id];
        if (origem && /^https?:/.test(LEAD_ENDPOINT)) {
          const body = new URLSearchParams(new FormData(f)); // inclui o honeypot "website"
          body.append('token', LEAD_TOKEN);
          body.append('origem', origem);
          fetch(LEAD_ENDPOINT, { method: 'POST', mode: 'no-cors', body })
            .catch((err) => console.error('lead submit falhou', err));
        }
        show();
        f.reset();
      });
    });
  }

  /* ---------------- INIT ---------------- */
  function init() {
    icons();
    renderPartners();
    renderServices();
    renderDepo();
    renderFaq();
    renderMetodo('timeline');
    setupStats();
    setupParallax();
    setupScrollbar();
    setupHeader();
    setupMobileMenu();
    setupFilters();
    setupMetodoNav();
    setupForms();
    observeReveals();
    window.addEventListener('scroll', checkReveals, { passive: true });
    window.addEventListener('resize', checkReveals, { passive: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
