# Instructions for AI Agents

This repo uses the [Agent Skills standard](https://agentskills.io/specification) for scaffolding.

## Skill

There is one skill: **`create-project`** at `.agents/skills/create-project/SKILL.md`.

It handles all item types:

| Request | Type |
|---|---|
| "new client" | `client` |
| "new project for client X" | `client-project` |
| "new collab with …" | `collab` |
| "new residency at …" | `residency` |
| "new studio project" | `studio-project` |
| "new experiment / research" | `research` |
| "new open call" | `open-call` |
| "new A/V performance / DJ set / talk / event" | `av` / `dj-set` / `talk` / `event` |
| "new tool / app / resource / tutorial / blog / stream / social" | product types |

## How to use

1. Read `.agents/skills/create-project/SKILL.md`
2. Follow the flow: determine type → ask questions → compute slug → create folder
3. Reference files are in `.agents/skills/create-project/references/`

## Rules

- Follow conventions in `references/conventions.md` (slugs, dates, status vocabulary)
- Use the README template in `references/readme-template.md`
- Never commit media — `media/` folders and heavy file types are gitignored
- Do not invent values — ask the user
- Stage files with `git add` but do not commit or push unless asked

## Website — adding performances

The site is in `website/` (Astro, deployed to GitHub Pages).

To add a performance, create a `.md` file in `website/src/content/performances/` with this frontmatter:

```yaml
title: "Show Name"           # required
date: YYYY-MM-DD              # required
venue: "Venue Name"           # required
city: "City"                  # required
type: "av"                    # required: av | dj-set | talk | event
url: "https://..."            # optional: makes title a link
description: "..."             # optional
lineup: [artist1, artist2]     # optional
draft: true                    # optional: hides from site
```

File naming convention: `YYYY-MM-DD-short-name.md` (e.g. `2026-09-20-berghain.md`).

The site auto-sorts into **Upcoming** / **Past** by date. Push to `main` → deploys in ~30s.

See `website/src/content/performances/_example.md` for a reference template.

## Agent-specific setup

**Pi** — skills in `.agents/skills/` are auto-discovered. Use `/skill:create-project` or just describe what you need.

**Claude Code** — add to `.claude/settings.json`: `{ "skills": [".agents/skills"] }`

**Other agents** — open `.agents/skills/create-project/SKILL.md` and follow it.
