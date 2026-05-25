---
name: create-studio-project
description: Scaffolds an internal studio project under projects/studio/<slug>/. Use for self-initiated work that isn't a client job, collab, residency, research experiment, or open-call submission — e.g. a record, an installation, a self-produced show.
---

# create-studio-project

## Steps

1. Read [`../_shared/conventions.md`](../_shared/conventions.md) and [`../_shared/readme-template.md`](../_shared/readme-template.md).
2. Ask the questions.
3. Compute slug. Refuse to overwrite.
4. Create:
   ```
   projects/studio/<slug>/
   ├── README.md
   ├── assets/.gitkeep
   ├── deliverables/.gitkeep
   └── media/.gitkeep
   ```
5. Show summary.

## Questions

Required:
1. **Project name**
2. **Goal / concept** (1–3 sentences)
3. **Status** — default `planned`

Optional:
4. **Start date**
5. **Target completion / release date**
6. **Outputs / deliverables**
7. **Budget**
8. **Collaborators** (internal only — for external collabs use `create-collab` instead)
9. **Links**
10. **Tags**

## Output

`projects/studio/<slug>/README.md`:

```markdown
---
title: <Project name>
slug: <slug>
type: studio-project
status: <status>
created: <today>
updated: <today>
start: <date>          # if given
target: <date>         # if given
links:
  - <label>: <url>
tags: [<tags>]
---

# <Project name>

## Concept
<goal/concept>

## Deliverables
- <item>

## Timeline
- Start: <date or TBD>
- Target: <date or TBD>

## Budget
<budget or "—">

## Notes
_(empty)_

## Media
External — `media/` is gitignored.
```
