/* ============================================================
   Visttor — Landing interactions
   All motion is transform/opacity based and gated behind
   prefers-reduced-motion. No layout-shifting animations.
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Header shadow on scroll + scroll progress ---------- */
  var header = document.getElementById("header");
  var progress = document.getElementById("scrollProgress");

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY || window.pageYOffset;
      if (header) header.classList.toggle("is-scrolled", y > 8);

      if (progress) {
        var doc = document.documentElement;
        var max = doc.scrollHeight - doc.clientHeight;
        var ratio = max > 0 ? Math.min(y / max, 1) : 0;
        progress.style.transform = "scaleX(" + ratio + ")";
      }
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile drawer ---------- */
  var toggle = document.getElementById("menuToggle");
  var drawer = document.getElementById("mobileDrawer");
  if (toggle && drawer) {
    function closeDrawer() {
      drawer.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
    toggle.addEventListener("click", function () {
      var open = drawer.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    drawer.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeDrawer);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 760) closeDrawer();
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Animated counters ---------- */
  var counters = Array.prototype.slice.call(document.querySelectorAll("[data-count]"));
  function formatCount(el, value) {
    var suffix = el.getAttribute("data-suffix") || "";
    el.textContent = value + (suffix ? "" : "");
    el.innerHTML = value + (suffix ? '<span class="suffix">' + suffix + "</span>" : "");
  }
  function runCounter(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    if (reduceMotion) { formatCount(el, target); return; }
    var duration = 1400;
    var start = null;
    function tick(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      // easeOutExpo
      var eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      formatCount(el, Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if (counters.length) {
    if (!("IntersectionObserver" in window)) {
      counters.forEach(function (el) { formatCount(el, parseInt(el.getAttribute("data-count"), 10) || 0); });
    } else {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            runCounter(entry.target);
            cio.unobserve(entry.target);
          }
        });
      }, { threshold: 0.6 });
      counters.forEach(function (el) { cio.observe(el); });
    }
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var btn = item.querySelector(".faq-q");
    var panel = item.querySelector(".faq-a");
    if (!btn || !panel) return;
    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      // close siblings for a clean single-open accordion
      document.querySelectorAll(".faq-item.open").forEach(function (other) {
        if (other !== item) {
          other.classList.remove("open");
          other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
          other.querySelector(".faq-a").style.maxHeight = null;
        }
      });
      if (isOpen) {
        item.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        panel.style.maxHeight = null;
      } else {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
  // keep open panel sized correctly on resize
  window.addEventListener("resize", function () {
    var open = document.querySelector(".faq-item.open .faq-a");
    if (open) open.style.maxHeight = open.scrollHeight + "px";
  });

  /* ---------- Subtle parallax (hero mesh + chips) ---------- */
  if (!reduceMotion && window.innerWidth > 760) {
    var parallaxEls = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
    if (parallaxEls.length) {
      var pTicking = false;
      window.addEventListener("scroll", function () {
        if (pTicking) return;
        pTicking = true;
        requestAnimationFrame(function () {
          var y = window.scrollY || window.pageYOffset;
          if (y < 900) {
            parallaxEls.forEach(function (el) {
              var speed = parseFloat(el.getAttribute("data-parallax")) || 0;
              el.style.transform = "translate3d(0," + (y * speed).toFixed(1) + "px,0)";
            });
          }
          pTicking = false;
        });
      }, { passive: true });
    }

    /* ---------- Hero phone tilt on pointer move ---------- */
    var tilt = document.querySelector("[data-tilt]");
    var device = document.querySelector(".hero-device");
    if (tilt && device) {
      device.addEventListener("pointermove", function (e) {
        var r = device.getBoundingClientRect();
        var dx = (e.clientX - r.left) / r.width - 0.5;
        var dy = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.transform = "perspective(900px) rotateY(" + (dx * 7).toFixed(2) + "deg) rotateX(" + (-dy * 7).toFixed(2) + "deg)";
      });
      device.addEventListener("pointerleave", function () {
        tilt.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
      });
    }
  }
})();
