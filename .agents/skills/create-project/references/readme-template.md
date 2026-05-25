# README Template

Every item README starts with YAML frontmatter, followed by sections. Omit optional fields if unknown — never invent values.

```markdown
---
title: <Human-readable title>
slug: <folder-slug>
type: <see type list below>
status: <idea | planned | active | on-hold | done | archived>
created: <YYYY-MM-DD>
updated: <YYYY-MM-DD>
# --- include only what applies ---
client: <client-slug>
collaborators: [name1, name2]
venue: <venue name>
date: <YYYY-MM-DD>
dates: <YYYY-MM-DD → YYYY-MM-DD>
deadline: <YYYY-MM-DD>
links:
  - <label>: <url>
tags: [tag1, tag2]
---

# <Title>

One-sentence summary.
```

## Type values

`client` · `client-project` · `collab` · `collab-partner` · `residency` · `residency-venue` · `studio-project` · `research` · `open-call` · `performance-av` · `performance-dj-set` · `performance-talk` · `performance-event` · `product-tool` · `product-app` · `product-resource` · `product-tutorial` · `product-social` · `product-stream` · `product-blog`

## Sections per type

- **client**: `## Contact`, `## Address`, `## Rates`, `## Tax / Invoicing`, `## Notes`, `## Projects`
- **client-project**: `## Scope`, `## Deliverables`, `## Timeline`, `## Contacts`, `## Budget`, `## Notes`, `## Media`
- **collab**: `## Concept`, `## Role split`, `## Outputs`, `## Credits & splits`, `## Notes`, `## Media`
- **residency**: `## Goal`, `## Outputs`, `## Schedule`, `## Funding`, `## Notes`, `## Media`
- **studio-project**: `## Concept`, `## Deliverables`, `## Timeline`, `## Budget`, `## Notes`, `## Media`
- **research**: `## Question`, `## Method`, `## Findings`, `## Next steps`, `## Media`
- **open-call**: `## Submitting`, `## Requirements`, `## Submission checklist`, `## Fee`, `## Result`, `## Notes`, `## Media`
- **performance-***: `## Booking`, `## Lineup`, `## Set / programme`, `## Tech`, `## Notes`, `## Media` (events add `## Theme / format`, `## Audience`)
- **product-***: `## What it is`, `## Audience`, `## Status / roadmap`, `## Links`, `## Media`
- **product-blog**: also creates `post.md` (draft)
- **product-social**: also creates `schedule.md`
- **product-stream**: also creates `setup.md`, `vods.md`

Keep READMEs short. They're an index, not the work itself.
