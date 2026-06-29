# NDA/studio — Dev Log

---

## 2026-06-29 — Session 1: Landing page planning

**What we did:**
- Reviewed Astro project setup (blank `index.astro`, GitHub Pages deploy workflow already in place)
- Established visual direction from Pinterest board reference
- Defined content: studio name NDA/studio, email, IG, LinkedIn, GitHub
- Locked in color palette, typography choice (Space Grotesk), and layout
- Designed interactive feature: canvas flow field particle system in vanilla JS
- Wrote comprehensive plan (`docs/plan.md`)

**Decisions made:**
- Warm near-black background (`#0d0e08`) not pure black — has a warm green tint that ties to the nature references in the board
- Accent is warm chartreuse (`#c8e63a`) not cold acid green — board has more yellow-green warmth than I initially read
- `NDA` bold on one line, `/studio` light weight on the second line in accent color — editorial split
- No tagline for now, content is minimal on purpose
- Particle system uses no external library — stays true to vanilla JS preference and keeps bundle size minimal

**Still to do:**
- Build the actual code (pending Niki's plan approval)

---

## 2026-06-29 — Session 2: Landing page build

**What we built:**
- `src/config/site.ts` — single source of truth for content (name, email, socials). Edit here, never touch markup.
- `src/styles/global.css` — design tokens, reset, full-viewport no-scroll base, responsive spacing.
- `src/components/SiteName.astro` — two-line wordmark, per-line weights, slash in accent, `clamp()` responsive sizing.
- `src/components/ContactLinks.astro` — email + socials row, mapped from config, hover-to-accent.
- `src/components/ParticleField.astro` — vanilla-JS canvas flow field. Mouse repulsion, trail fade, particle count scales with viewport area, pauses on hidden tab.
- `src/pages/index.astro` — imports styles + components, loads Space Grotesk, layout anchored bottom-left.

**Decisions made:**
- Went modular (component + config split) over the leaner plan structure, so content edits stay out of markup.
- Responsive across breakpoints via `clamp()`; particles kept on mobile but count auto-reduces with viewport area for performance.
- `.page` is `pointer-events: none` so the canvas stays interactive behind the content; links re-enable pointer events.

**Still to do (deferred extras):**
- OG / social-share meta tags in `<head>`
- Favicon (SVG, accent color)
- Run `npm run build` to confirm a clean build (sandbox couldn't boot this session)

---

## 2026-06-29 — Session 3: Redesign (fonts, palette, logo system)

**Direction change (Niki's feedback):**
- Killed the ambient particle field — disliked.
- Font inspo pulled from the old workshop site: Picnic (display) + Karrik (body).
- New warm palette chosen from the moodboard: "cream / earthling" (light).
- Use the workshop's logo system and make it cool.

**What changed:**
- `global.css` — repalette to cream/earthling (bg #e7e0cd, text #25281b, accent #6f7d12, muted #74765f) + self-hosted @font-face for Picnic and Karrik.
- `Backdrop.astro` (new) — replaces ParticleField. Static warm-paper wash + SVG film-grain overlay (multiply blend). No JS, no particles.
- `SiteName.astro` — ported the workshop logo system: fixed "NDA/" (Picnic) + cycling suffix (Karrik) springing through studio/software/audiovisual/installation/sound, with an accent-colored dissolve burst on each swap. Honors prefers-reduced-motion; pauses in background tabs.
- `ContactLinks.astro` — restyled to small uppercase tracked Karrik.
- `index.astro` — Backdrop instead of ParticleField; dropped Google Fonts links (self-hosted now).
- `site.ts` — name.suffixes array drives the cycling logo.

**Manual steps still needed (sandbox wouldn't boot this session):**
1. Copy 3 font files into the new project:
   `cp ../../NDA:/nda-workshop/website/public/fonts/{PicNic.woff2,Karrik-Regular.woff2,Karrik-Italic.woff2} website/public/fonts/`
   (or copy them by hand into `website/public/fonts/`)
2. Delete the now-unused `website/src/components/ParticleField.astro`.
3. `cd website && npm install && npm run dev` to view; `npm run build` to confirm.

---

## 2026-06-29 — Session 4: Generative background + glass UI

**Direction (Niki's moodboard refs):**
- Wants a generative background in the board style (Green Lions dither, earthling.fyi blur, glass-pill nav refs).
- Chosen: blurred green/cream base WITH a subtle dither texture + faint contour lines.
- Frosted-glass treatment + lime corner-bracket accents on the contact element.
- Improve the logo. Effect layer via shader (p5/glsl) welcome.

**What changed:**
- `ShaderField.astro` (new) — full-viewport WebGL fragment shader. Domain-warped FBM → soft organic green/cream terrain; ordered (bayer) dithering for halftone texture; faint topographic contour lines; rendered at reduced internal res for a textured-blur feel. Raw WebGL1, no libs. Pauses on hidden tab, freezes for reduced-motion, silent fallback to body bg if no WebGL. Tunables in CONFIG + palette block.
- `GrainOverlay.astro` (new) — grain split out of the old Backdrop into its own component (z 50, overlay blend).
- `Backdrop.astro` — REMOVED (replaced by ShaderField + GrainOverlay).
- `ContactLinks.astro` — now a frosted-glass pill (backdrop-filter blur) framed by 4 lime corner brackets.
- `SiteName.astro` — accent-colored slash + one-time spring reveal on load (reduced-motion safe). Cycling suffix + dissolve burst retained.
- `index.astro` — layers: ShaderField (z0) → content (z1) → grain (z50).

**Layer/z-index map:** shader 0 · content 1 · suffix burst 60 · grain 50.

**Still open:** OG meta tags, favicon. Plus the 3 manual steps above (now also delete `Backdrop.astro`). Sandbox never booted across sessions 2-4, so build still unverified — run `npm run dev`.
