# NDA/studio — Landing Page Plan
**Date:** 2026-06-29  
**Status:** Approved — awaiting build  
**Branch:** `feature-landingpage`

---

## Goal

A minimal, professional landing page that serves as a digital business card while we build out the full site. Needs to communicate who NDA/studio is and how to make contact — and make a strong first impression visually.

---

## Content

| Element | Value |
|---|---|
| Studio name | NDA/studio |
| Email | contact@nda.studio |
| Instagram | nda.root |
| LinkedIn | linkedin.com/company/studio-nda/ |
| GitHub | github.com/orgs/NDAstudio/ |

No tagline or bio for now — keeping it to the essentials. Can be added later.

---

## Visual Direction

**Reference:** Pinterest board `nl.pinterest.com/n111k111l1114/nda/ndawebsite/`

The board has a strong nature × digital identity. Key themes:
- Organic forms (moss, terrain, particles) rendered with digital precision
- Bold experimental typography mixed with clean UI
- Dark backgrounds with warm accent greens — not cold acid green, but chartreuse, lime, yellow-green
- Warm off-white/cream as a secondary tone (appears in several pieces: SOIL, earthing.yt)
- The feeling of things that are alive, slowly moving, responsive

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#0d0e08` | Page background — near-black with a warm green tint |
| `--text` | `#ede9d8` | Primary text — warm off-white/cream, not pure white |
| `--accent` | `#c8e63a` | Warm chartreuse — links on hover, the `/` in NDA/studio, particles |
| `--muted` | `#7a7c68` | Secondary text — contact links at rest, warm gray-green |

---

## Typography

**Font:** Space Grotesk (Google Fonts, open source)  
Chosen for: geometric grotesque feel, slightly quirky character shapes, works well at display sizes. Fits the digital-organic aesthetic without being too sterile (unlike Inter) or too designed (unlike Neue Haas).

**Weights used:**
- `700` — NDA (display, large)
- `300` — /studio (display, large, lighter to contrast)
- `400` — contact links

**Stylization of the name:**
```
NDA        ← large, bold, all-caps
/studio    ← second line, light weight, accent color, ~40% the size of NDA
```
This two-line split is common in editorial/studio design — the slash reads as a structural element, not just punctuation.

---

## Layout

Single full-viewport page. No scroll.

```
┌────────────────────────────────────────┐
│                                        │
│         [ particle field ]             │
│                                        │
│                                        │
│                                        │
│  NDA                                   │
│  /studio                               │
│  ──────────────────────────────────── │
│  contact@nda.studio  IG  LI  GH        │
└────────────────────────────────────────┘
```

- Canvas sits fixed at z-index 0, full viewport
- Main content sits at z-index 1, fixed, padding ~2.5rem on all sides
- Name anchored to bottom-left (flex column, justify-content: flex-end)
- Contact links as a horizontal row directly below the name
- A subtle `border-top: 1px solid var(--muted)` separates name from links

---

## Interactive Feature: Flow Field Particle System

**What it is:** ~200 small particles moving across the canvas according to a vector flow field. The direction at each point in the field is calculated from layered sin/cos math, producing slow organic movement that looks like wind or water currents. No external library — pure canvas 2D API.

**Why this fits:** The board references organic particle arrangements, generative text, and moving visuals. The flow field produces that "alive" quality — never static, never random, always moving with intention.

**Mouse interaction:** The cursor creates a circular repulsion zone (~120px radius). Particles deflect away smoothly when the cursor approaches, then drift back into the flow. This makes the page feel reactive without being gimmicky.

**Visual spec:**
- Particle color: `rgba(200, 230, 58, α)` — the accent chartreuse, varying opacity per particle
- Size: 0.5–2px radius, randomized per particle
- Trail: canvas is cleared each frame with a semi-transparent fill (`rgba(13, 14, 8, 0.12)`) instead of a hard clear — this creates ghostly trails that fade over ~8–10 frames, adding to the organic feel
- Speed: slow (max 0.8px/frame), almost meditative

**Performance:** Lightweight. No external deps, no WebGL. Runs on requestAnimationFrame. Pauses/resumes with Page Visibility API to avoid burning CPU in background tabs.

---

## File Structure

```
studio-website/
├── docs/
│   ├── plan.md          ← this file
│   └── log.md           ← dated dev log
├── claude-notes.md      ← technical reference (Astro patterns, techniques)
└── website/
    └── src/
        ├── styles/
        │   └── global.css        ← CSS custom properties, reset, base styles
        ├── components/
        │   └── ParticleField.astro  ← canvas element + vanilla JS particle system
        └── pages/
            └── index.astro       ← main page: imports styles, component, renders layout
```

**Why this structure:**
- `styles/global.css` lives separately so it can be imported anywhere as the site grows
- `ParticleField.astro` is self-contained — the canvas and its JS are co-located in one file (Astro's `<script>` tag gets bundled automatically)
- No layout component yet — not needed for a single page; we'll add one when more pages exist

---

## Astro Notes

- Astro `<script>` tags inside components are processed as ES modules and deferred — DOM is guaranteed ready when they run
- Scripts are bundled and deduplicated by Astro — including `ParticleField.astro` twice won't run the code twice
- Google Fonts loaded via `<link>` in `<head>` (faster than `@import` in CSS)
- `astro.config.mjs` already has `site` and `base` set for GitHub Pages deploy — no changes needed

---

## Next Steps (after landing page)

- Add a proper favicon
- Add OG meta tags (social sharing preview)
- Consider adding a `BaseLayout.astro` when we build more pages
- Work section / portfolio will come later
