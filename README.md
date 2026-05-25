# NDA Studio

Monorepo for NDA studio: portfolio website, products, projects, and performances.

## Structure

```
nda-studio/
├── website/                       # Portfolio website code
│
├── products/                      # Standalone offerings
│   ├── tools/                     # software tools
│   ├── apps/                      # applications
│   ├── resources/                 # downloadables, presets, samples
│   ├── tutorials/                 # tutorial content
│   ├── socials/                   # social content & archives
│   ├── streams/                   # stream setups & schedules
│   └── blog/                      # blog posts & newsletter issues
│
├── projects/                      # Time-bounded work
│   ├── client/<client>/<project>/ # client work (client-first)
│   ├── collabs/<partner>/<project>/
│   ├── residencies/<venue>/<name-year>/
│   ├── studio/                    # internal studio projects
│   ├── research/                  # experiments / R&D
│   └── open-calls/                # applications & submissions
│
├── performances/                  # Live work
│   ├── av/                        # audio-visual performances
│   ├── dj-sets/
│   ├── talks/
│   └── events/                    # events / meetups we organize
│
├── docs/                          # studio-wide docs (brand, bios, templates)
│
└── .agents/skills/                # AI agent skills
```

## Website

The portfolio site lives in `website/` and is built with [Astro](https://astro.build). It deploys automatically to GitHub Pages on every push to `main`.

**Live at:** [nda.studio](https://nda.studio)

### Adding a performance

Create a `.md` file in `website/src/content/performances/`:

```markdown
---
title: "Show Name"
date: 2026-09-20
venue: "Venue Name"
city: "Berlin"
type: "av"            # av | dj-set | talk | event
url: "https://..."    # optional, makes title a link
description: "..."    # optional
lineup: [artist1]     # optional
draft: true           # optional, hides from site
---
Optional body text.
```

The site automatically splits performances into **Upcoming** and **Past** based on the date. Push → deploys in ~30 seconds.

See `website/src/content/performances/_example.md` for a template.

## Media

`media/` folders and heavy file types (`.mp4`, `.mov`, `.wav`, `.psd`, RAW photos, etc.) are **gitignored**. They live outside git (external drive / cloud storage).

## For AI Agents

Scaffolding is handled by the **`create-project`** skill in `.agents/skills/`. It covers all item types: clients, projects, collabs, residencies, performances, products, and more.

Use it by saying something like:
- "create a new client called Acme Corp"
- "new DJ set at Berghain on 2026-07-15"
- "add an open call for Ars Electronica 2026"

The skill will ask the necessary questions and scaffold the correct folder.

See [`AGENTS.md`](AGENTS.md) for details.
