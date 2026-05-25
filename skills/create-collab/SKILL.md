---
name: create-collab
description: Scaffolds a new collaboration under projects/collabs/<collaborator-slug>/<project-slug>/ with role split and shared credits. Use when the user wants to start a collab with another artist, studio, or person (non-client). Collaborator-first nesting: one folder per collaborator, then projects inside.
---

# create-collab

## Steps

1. Read [`../_shared/conventions.md`](../_shared/conventions.md) and [`../_shared/readme-template.md`](../_shared/readme-template.md).
2. Ask the questions below.
3. Compute `collaborator-slug` and `project-slug`.
4. If `projects/collabs/<collaborator-slug>/` does not exist, create it with a small `README.md` describing the collaborator (just name, links, notes).
5. Refuse to overwrite an existing project folder.
6. Create:
   ```
   projects/collabs/<collaborator>/<project>/
   ├── README.md
   ├── assets/.gitkeep
   ├── deliverables/.gitkeep
   └── media/.gitkeep
   ```
7. Show summary.

## Questions

Required:
1. **Collaborator name** (person / studio / band)
2. **Project name**
3. **Role split** — who does what (free-form, e.g. "NDA: visuals, sound design. X: music, lyrics.")
4. **Status** — default `planned`

Optional:
5. **Collaborator contact** (email / handle)
6. **Collaborator website / bandcamp / instagram**
7. **Dates** (single date or range)
8. **Scope / concept** (1–3 sentences)
9. **Outputs** — what's the deliverable (track, performance, installation, …)
10. **Revenue / credits split**
11. **Links**
12. **Tags**

## Output

### Collaborator folder README (only if new)

`projects/collabs/<collaborator>/README.md`:

```markdown
---
title: <Collaborator name>
slug: <collaborator-slug>
type: collab-partner
created: <today>
updated: <today>
website: <url>      # if given
---

# <Collaborator name>

## Contact
<contact or "—">

## Notes
<free-form>

## Projects
- [<Project name>](./<project-slug>/) — <status>
```

### Project README

`projects/collabs/<collaborator>/<project>/README.md`:

```markdown
---
title: <Project name>
slug: <project-slug>
type: collab
collaborators: [<collaborator name>]
status: <status>
created: <today>
updated: <today>
dates: <dates if given>
links:
  - <label>: <url>
tags: [<tags>]
---

# <Project name>

_Collab with [<collaborator>](../README.md)_

## Concept
<scope/concept or "TBD">

## Role split
<role split>

## Outputs
- <item>

## Credits & splits
<credits / splits or "—">

## Notes
_(empty)_

## Media
External — see studio drive. `media/` is gitignored.
```

## After scaffolding

If the collaborator folder already existed, append the new project to its `## Projects` list.
