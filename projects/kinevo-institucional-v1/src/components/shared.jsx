/* global React */
// Kinevo LP — shared primitives + premium motion engine
const { useState, useEffect, useRef, useCallback } = React;

/* ============================================================
   MOTION ENGINE
   ============================================================ */

// Reveal: diagonal slide + fade as element enters viewport.
// dir: 'up' | 'down' | 'left' | 'right' | 'none'  ·  delay in ms
function Reveal({ children, dir = 'up', delay = 0, distance = 28, once = true, style, className }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const root = document.querySelector('#scroll-root');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.unobserve(el);
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { root: root || null, threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const off = {
    up: `translate3d(0, ${distance}px, 0)`,
    down: `translate3d(0, ${-distance}px, 0)`,
    left: `translate3d(${distance}px, 0, 0)`,
    right: `translate3d(${-distance}px, 0, 0)`,
    none: 'translate3d(0,0,0)',
  }[dir];

  return React.createElement('div', {
    ref, className,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? 'translate3d(0,0,0)' : off,
      filter: shown ? 'blur(0)' : 'blur(4px)',
      transition: `opacity 720ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 820ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, filter 720ms ease ${delay}ms`,
      willChange: 'opacity, transform',
      ...style,
    },
  }, children);
}

// useInView — boolean when element enters viewport (for triggering counters etc.)
function useInView(opts = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const root = document.querySelector('#scroll-root');
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.unobserve(el); }
    }, { root: root || null, threshold: opts.threshold ?? 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView];
}

// Animated number counter. Parses a string like "−42%", "+3.4x", "120h", "99.98%"
function Counter({ value, duration = 1600, style }) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [display, setDisplay] = useState(value.replace(/[\d.]+/, (m) => '0'.repeat(m.replace('.', '').length) + (m.includes('.') ? '' : '')));
  const m = value.match(/-?[\d.]+/);
  const target = m ? parseFloat(m[0]) : 0;
  const prefix = m ? value.slice(0, m.index) : '';
  const suffix = m ? value.slice(m.index + m[0].length) : value;
  const decimals = m && m[0].includes('.') ? m[0].split('.')[1].length : 0;

  useEffect(() => {
    if (!inView || !m) { if (!m) setDisplay(value); return; }
    let raf, start;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = (target * eased).toFixed(decimals);
      setDisplay(prefix + cur + suffix);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  return React.createElement('span', { ref, style }, display);
}

// useParallax — translateY based on scroll position relative to element
function useParallax(strength = 0.15) {
  const ref = useRef(null);
  const [y, setY] = useState(0);
  useEffect(() => {
    const root = document.querySelector('#scroll-root');
    const target = root || window;
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        setY(-center * strength);
      });
    };
    target.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => target.removeEventListener('scroll', onScroll);
  }, [strength]);
  return [ref, y];
}

/* ============================================================
   BRAND PRIMITIVES
   ============================================================ */

// New Kinevo "K" mark (swoosh, PNG, transparent).
function KMark({ size = 28, style }) {
  return React.createElement('img', {
    src: 'assets/logo-mark.png', alt: 'Kinevo', width: size, height: size,
    style: { display: 'block', width: size, height: size, objectFit: 'contain', ...style }
  });
}

// Official horizontal lockup (mark + wordmark). light=true uses the white-wordmark reverse for dark backgrounds.
function Logo({ light = false, size = 28 }) {
  return React.createElement('img', {
    src: light ? 'assets/logo-horizontal-white.png' : 'assets/logo-horizontal.png',
    alt: 'Kinevo', style: { display: 'block', height: size * 1.16, width: 'auto' }
  });
}

function Icon({ name, size = 18, color, style, strokeWidth }) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = `<i data-lucide="${name}" style="width:${size}px;height:${size}px${strokeWidth ? `;stroke-width:${strokeWidth}` : ''}"></i>`;
      window.lucide.createIcons({ attrs: {}, nameAttr: 'data-lucide' });
    }
  }, [name, size]);
  return React.createElement('span', { ref, style: { display: 'inline-flex', color: color || 'currentColor', ...style } });
}

function Eyebrow({ children, color = 'var(--kv-blue-600)', style, dot }) {
  return React.createElement('span', {
    style: { display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--kv-font-mono)', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color, ...style }
  },
    dot && React.createElement('span', { style: { width: 6, height: 6, borderRadius: '50%', background: 'currentColor', flex: 'none' } }),
    children
  );
}

function Button({ children, variant = 'primary', size = 'md', icon, iconLeft, onClick, href, style }) {
  const [hover, setHover] = useState(false);
  const sizes = {
    sm: { padding: '8px 16px', fontSize: 14 },
    md: { padding: '12px 22px', fontSize: 15 },
    lg: { padding: '16px 30px', fontSize: 17 },
  };
  const variants = {
    primary: { background: hover ? '#2247DB' : '#2D5BFF', color: '#fff', boxShadow: hover ? '0 12px 32px rgba(45,91,255,0.42)' : '0 8px 24px rgba(45,91,255,0.28)' },
    accent: { background: hover ? '#10B6A3' : '#19E0C8', color: '#0E1A18', boxShadow: hover ? '0 12px 30px rgba(25,224,200,0.4)' : '0 8px 22px rgba(25,224,200,0.28)' },
    whatsapp: { background: hover ? '#1FA855' : '#25D366', color: '#06301A', boxShadow: hover ? '0 12px 30px rgba(37,211,102,0.42)' : '0 8px 22px rgba(37,211,102,0.3)' },
    secondary: { background: hover ? '#F4F6FA' : '#fff', color: '#16181D', border: '1px solid #B7C0D0' },
    ghost: { background: 'transparent', color: hover ? '#2247DB' : '#2D5BFF' },
    dark: { background: hover ? '#1A1D24' : '#16181D', color: '#fff' },
    light: { background: hover ? '#E8ECF3' : '#fff', color: '#16181D' },
    outlineLight: { background: hover ? 'rgba(255,255,255,0.08)' : 'transparent', color: '#fff', border: '1px solid #2A2E37' },
  };
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, {
    onClick, href, target: href ? '_blank' : undefined, rel: href ? 'noopener' : undefined,
    onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex', alignItems: 'center', gap: 8, justifyContent: 'center',
      fontFamily: 'var(--kv-font-body)', fontWeight: 600, borderRadius: 10, whiteSpace: 'nowrap', textDecoration: 'none',
      border: '1px solid transparent', cursor: 'pointer', transition: 'all 160ms cubic-bezier(0.22,1,0.36,1)',
      transform: hover ? 'translateY(-2px)' : 'none',
      ...sizes[size], ...variants[variant], ...style,
    },
  },
    iconLeft && React.createElement(Icon, { name: iconLeft, size: 17 }),
    children,
    icon && React.createElement(Icon, { name: icon, size: 17, style: { transition: 'transform 200ms var(--kv-ease-out)', transform: hover ? 'translateX(3px)' : 'none' } })
  );
}

// Animated connector-node field for dark sections. animate=true -> nodes pulse.
function NodeField({ opacity = 1, animate = true }) {
  const nodes = [
    [80, 60], [220, 130], [380, 70], [520, 160], [680, 90], [840, 180], [1000, 80],
    [300, 240], [460, 30], [620, 260], [780, 40], [940, 260], [1120, 200],
  ];
  const links = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[1,7],[2,8],[3,9],[4,10],[5,11],[6,12]];
  return React.createElement('svg', {
    viewBox: '0 0 1200 300', preserveAspectRatio: 'xMidYMid slice',
    style: { position: 'absolute', inset: 0, width: '100%', height: '100%', opacity, pointerEvents: 'none' }
  },
    links.map(([a, b], i) => React.createElement('line', {
      key: i, x1: nodes[a][0], y1: nodes[a][1], x2: nodes[b][0], y2: nodes[b][1],
      stroke: '#2D5BFF', strokeWidth: 1, opacity: 0.35,
      strokeDasharray: animate ? 6 : undefined,
      style: animate ? { animation: `kvDash ${4 + (i % 4)}s linear infinite` } : undefined,
    })),
    nodes.map(([x, y], i) => React.createElement('circle', {
      key: 'n' + i, cx: x, cy: y, r: i % 3 === 1 ? 4 : 2.5,
      fill: i % 3 === 1 ? '#19E0C8' : '#2D5BFF', opacity: i % 3 === 1 ? 0.9 : 0.7,
    }))
  );
}

// Section wrapper with consistent max width
// Official WhatsApp glyph (Lucide has no brand icons)
function WhatsGlyph({ size = 17, color = 'currentColor', style }) {
  return React.createElement('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: color, style: { display: 'block', ...style } },
    React.createElement('path', { d: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.437-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' })
  );
}

function Wrap({ children, style, max = 1200, className }) {
  return React.createElement('div', { className, style: { maxWidth: max, margin: '0 auto', padding: '0 32px', ...style } }, children);
}

Object.assign(window, { Reveal, useInView, Counter, useParallax, KMark, Logo, Icon, Eyebrow, Button, NodeField, Wrap, WhatsGlyph });
