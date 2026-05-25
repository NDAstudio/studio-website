# README Template

Every leaf-item README must start with YAML frontmatter, followed by sections. Fields marked `# optional` can be omitted if unknown — do **not** invent values.

```markdown
---
title: <Human-readable title>
slug: <folder-slug>
type: <client-project | collab | residency | studio-project | research | open-call | performance-av | performance-dj-set | performance-talk | performance-event | product-tool | product-app | product-resource | product-tutorial | product-social | product-stream | product-blog | client>
status: <idea | planned | active | on-hold | done | archived>
created: <YYYY-MM-DD>
updated: <YYYY-MM-DD>
# --- optional, include only the ones that apply ---
client: <client-slug>           # for client projects
collaborators: [name1, name2]   # for collabs / performances
venue: <venue name>             # for performances / residencies / events
date: <YYYY-MM-DD>              # single-day item
dates: <YYYY-MM-DD → YYYY-MM-DD>  # range
deadline: <YYYY-MM-DD>          # open calls, client projects
links:
  - <label>: <url>
tags: [tag1, tag2]
---

# <Title>

One-sentence summary.

## Overview
What this is and why it exists. 2–5 sentences.

## Scope / Deliverables
- Item 1
- Item 2

## Notes
Free-form notes, decisions, references.

## Media
Where the media for this item lives (external drive path, cloud URL). The `media/` folder in this directory is gitignored.
```

## Section rules per type

- **client (client folder itself)**: no `## Scope` — instead `## Contact`, `## Contracts`, `## Rates`, `## Active projects` (auto-listed).
- **client-project**: include `## Scope`, `## Deliverables`, `## Timeline`.
- **performance**: include `## Tech`, `## Set / programme`, `## Lineup`.
- **open-call**: include `## Requirements`, `## Submission checklist`, `## Result`.
- **residency**: include `## Goal`, `## Outputs`, `## Schedule`.
- **research**: include `## Question`, `## Method`, `## Findings`.
- **product**: include `## What it is`, `## Audience`, `## Status / roadmap`, `## Links`.
- **blog/newsletter**: include `## Draft`, `## Published at`.

Keep it short. The README is an index, not the work itself.
