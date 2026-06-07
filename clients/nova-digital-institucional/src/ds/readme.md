# Nova Digital — Design System

> **Nova Digital** · Agência de Marketing Estratégico
> Brand & UI system. *Marketing descomplicado, estratégico e humano.*

Nova Digital is a Brazilian digital-marketing agency founded by **Letícia Shibayama**.
Its purpose is to turn clients' online presence into real, measurable results by combining
**creativity, strategy and technology** — without losing the human, welcoming touch that
makes every project unique. The brand positions itself as a *strategic partner* that walks
beside each client, "humanizing the digital": turning data, clicks and metrics into real
relationships and real growth.

The brand personality mirrors its founder: **cheerful, dynamic, optimistic and
solution-oriented**. It speaks about marketing in a relaxed, accessible and fun way — but
never loses the strategic tone that earns credibility. Energy & lightness come from the
**orange**; authority & modernity come from the **purple**.

**Brand pillars**
- Estratégia Direcionada — every action is well-aimed, focused on performance & results.
- Criatividade Vibrante — bold, energetic creative.
- Humanização do Digital — turning metrics into genuine human connection.
- Inovação Contínua — always moving forward.
- Resultados Reais e Mensuráveis — outcomes you can measure.

**Mission** — Transform the digital presence of companies and entrepreneurs through
creative, innovative and personalized strategies, uniting technology and humanization to
generate real connections, consistent results and sustainable growth.

**Vision** — Become a reference in digital marketing as an agency that pairs intelligent
strategy, innovation and human closeness — the preferred partner of brands that want to
stand out online.

---

## Sources

This system was reconstructed from the **Nova Digital brand manual** (a slide deck) and the
brand asset pack provided by the client. No code repository or Figma file was supplied.

Source files received (originals live in `/uploads`, working copies in `/assets`):
- Brand manual slides: `Leticia Shibayama - foto 01–08.png` (purpose, mission/vision,
  brand DNA pillars, essence, tone of voice, personality, the icon, logo construction).
- `cores.png` — official color palette. · `tipografia.png` — official typefaces.
- Logo lockups: `logosecundaria.png`, `marca d agua - logosecundaria.png`,
  `variações de cores - logosecundaria.png`.
- Brand icon: `icone 01/02/03.png`, `marca d agua - icone 01/02/03.png`, `icones.png`.

> ⚠ **Font substitution.** The brand's logotype font **Qalget Trial** is a commercial trial
> font and cannot be redistributed. It is substituted throughout by **Quicksand** (Google
> Fonts) — the closest free match for its rounded, geometric, low-contrast character.
> **Montserrat** (body) and the editorial serif **Playfair Display** are exact/near-exact
> matches loaded from Google Fonts. *Please upload licensed Qalget webfonts to make the
> logotype rendering pixel-perfect.*

---

## CONTENT FUNDAMENTALS

The brand's primary language is **Brazilian Portuguese**. Copy in this system is written in
PT-BR to match the source material; mirror that for client-facing work unless asked.

**Voice — "uma conversa entre parceiros."** The Nova Digital voice is:
- **Amigável e próxima** — friendly and close, like a conversation between partners.
- **Confiante e estratégica** — confident and strategic, conveying security & professionalism.
- **Clara e objetiva** — plain and direct; avoids jargon, explains in accessible terms.
- **Motivadora e criativa** — inspires clients to believe in the potential of their brand.

**Person & address.** Speaks *with* the client, not *at* them — warm second person
("seus clientes", "sua marca", "caminhamos ao seu lado"). The agency refers to itself as
"a Nova Digital" / "nós". Optimistic, never hype-y.

**Casing.** Editorial headlines use **Title Case in an elegant serif** ("O Propósito da
Marca", "Essência da Marca", "A Personalidade da marca" — note the relaxed mix of cased and
lowercase words). Eyebrows and the "AGÊNCIA" lockup use **SPACED UPPERCASE**. Body is
sentence case. The brand name is always **Nova Digital** (orange "Nova", solid "Digital.")
with a deliberate **full stop** — it signals *conclusion and delivery*.

**Tone examples (verbatim from the manual):**
- *"A Nova Digital nasceu com o propósito de transformar a presença online dos clientes em resultados reais…"*
- *"Mais do que uma agência, a Nova Digital é um ponto de conexão entre marcas e pessoas."*
- *"Transformar dados, cliques e métricas em relações verdadeiras e crescimento real."*
- *"Ela fala de marketing de forma descomplicada, acessível e divertida, mas sem perder o tom estratégico."*

**Vibe.** Vibrant, human, optimistic, momentum-driven. Words that recur: *estratégia,
crescimento, criatividade, conexão, humanização, resultados, movimento, direção.*

**Emoji.** Not used in the brand manual. Avoid emoji in formal/brand surfaces. Iconography
carries the "playful" load instead (see ICONOGRAPHY).

---

## VISUAL FOUNDATIONS

**Color.** A tight, high-confidence palette of three: **orange `#F38C33`** (energy,
lightness, action — the primary accent), **purple `#6C2180`** (authority, modernity, trust —
the signature field), **white `#FEFEFE`** (clarity, breathing room). A warm **cream
`#EDE7E1`** appears as a large decorative circle. The two brand hues are used boldly and
near-equally: purple and orange backgrounds alternate section to section. On purple, text is
white with orange accents; on orange, text is purple. Tints/shades in `tokens/colors.css`
are OKLCH-harmonious extensions for UI states & depth — the brand itself stays on the three.

**Type.** Three voices: an **editorial serif** (Playfair Display) for large headings and the
italic background watermarks — high-contrast, elegant, a little unexpected for a marketing
agency, which is the point; a **rounded geometric display** (Quicksand ⇽ Qalget) for the
logotype, UI titles, buttons and labels — soft, friendly terminals; and **Montserrat** for
body, set with a touch of positive tracking (≈0.04em) exactly as the deck does. Headlines mix
serif elegance with lowercase ease.

**Backgrounds.** Solid brand fields dominate — full-bleed **purple** or **orange**, never
muddy gradients. Imagery is **full-bleed photography under a purple/orange duotone** (purple
in the shadows, warm orange in the highlights), often with the logo centered and a **bottom
protection gradient** fading to solid purple so white text stays legible. Decorative motifs:
a large **off-white circle** bleeding off one edge; the **brand mark blown up huge** and
cropped off a corner; thin **orange "rule" accents** (a vertical capsule bar, or a horizontal
lead-in line before a heading); faint **serif-italic watermark words** behind content.

**Imagery vibe.** Real people in creative/marketing/workspace contexts — warm, candid,
optimistic (someone celebrating at a phone, a team at a sticky-note wall). Treated **warm**,
not cool; duotoned into the brand purple→orange range rather than left natural.

**Shape language — rounded & soft.** This is core. **Stadium / pill (capsule)** shapes are
the signature: the color swatches, chips and buttons are fully rounded. Cards use generous
radii (16–32px). Radius scale in `tokens/spacing.css` runs `xs 6 → 2xl 44 → pill 999`.

**Borders.** Thin (1–2px), low-contrast purple on light. Outlined pill labels use a 2px
border in `currentColor`. The orange rule accent is a 6px capsule bar.

**Shadows.** Soft, warm, low-spread, purple-tinted (`rgba(36,9,43,…)`), never harsh. Accent
surfaces may carry a colored glow (`--shadow-orange`, `--shadow-purple`). No hard drop shadows.

**Transparency & blur.** Used sparingly — soft white overlays on dark sections
(`rgba(254,254,254,.x)`), the duotone multiply layer over imagery. No heavy glassmorphism.

**Hover / press.** Hover = subtle darken to the next shade (orange → `--orange-600`) or a
gentle opacity drop (links to ~0.78) plus a soft lift. Press = darker still (`-700`) and a
tiny scale-down (~0.97). Motion is gentle: fades and short eases (`--ease-out`,
`--ease-spring`), 140–420ms. No bouncy/infinite decorative loops on content.

**Layout.** Roomy. Generous gutters (`--page-gutter` clamps to 5rem), centered measure for
prose, asymmetric hero compositions (off-center circle / cropped mark). Content breathes.

---

## ICONOGRAPHY

**The brand mark.** Nova Digital's icon unites two symbols of digital marketing: the
**mouse cursor** and the **full stop (ponto final)**. A rounded **ring** (the "O" of "Nova")
contains a soft, hand-drawn **cursor/play swoosh** — it stands for *strategy, direction and
action*: every click is aimed at a concrete result. The full stop after "Digital." signals
*conclusion, firmness and delivery*. The mark is intentionally **simple, modern and direct**.

It ships as PNG in three transparent color treatments (in `assets/icon/`):
- `icon-orange.png` — orange ring + white cursor. The most common; use on purple/dark fields.
- `icon-white.png` — all white. For purple/dark or photographic fields.
- `icon-black.png` — all black. For light/cream backgrounds.

Use the icon as: favicon / app mark, loading state, bullet/marker, watermark, section anchor.
Give it room — it reads best with clear space around it, and looks great blown up huge and
cropped off a corner (a brand-deck signature move).

**UI icons.** The brand manual defines no UI icon set. For interface needs this system uses
**[Lucide](https://lucide.dev)** via CDN — a clean, **rounded** line set whose soft joins and
~2px stroke echo the logo's geometry. Load:
`<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`.
*This is a documented substitution* — swap for a licensed set if the brand adopts one. Keep
strokes rounded, weight ~2px, and prefer line (not filled) icons to match the mark.

**No emoji** in brand surfaces. No ad-hoc unicode glyphs as icons.

---

## INDEX / MANIFEST

**Root**
- `styles.css` — global entry point (import this). `@import`-only.
- `readme.md` — this guide. · `SKILL.md` — Agent-Skill manifest.

**`tokens/`** — `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `base.css`

**`assets/`**
- `logo/` — `nova-digital-logomarca.png` (primary, stacked, transparent),
  `nova-digital-wordmark.png` (secondary, horizontal, transparent),
  `nova-digital-logo-purplebg.png` (secondary on its own purple field)
- `icon/` — `icon-orange.png` · `icon-white.png` · `icon-black.png` (all transparent)
- `imagery/` — `team-duotone.png`, `woman-phone.png` (duotone treatment references)
- `brand-deck/` — `cores.png`, `tipografia.png` (original palette & type specimens)

**`guidelines/`** — foundation specimen cards (Type, Colors, Spacing, Brand) for the Design
System tab.

**`components/`** — reusable React primitives (see each dir's `.prompt.md`):
`Button`, `IconButton`, `Badge`, `Tag`, `Input`, `Card`, `Avatar`, `Stat`, `Logo`, `BrandMark`.

**`ui_kits/`**
- `website/` — Nova Digital marketing site recreation (hero, services, about, CTA).

> Compiler note: `Fonts: (none)` in `check_design_system` is expected — webfonts are loaded
> via the Google Fonts CDN (`tokens/fonts.css`), not as local `@font-face` binaries. They
> render correctly everywhere.
