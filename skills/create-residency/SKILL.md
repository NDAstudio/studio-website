---
name: create-residency
description: Scaffolds an artist residency under projects/residencies/<venue-slug>/<residency-slug>/. Venue-first nesting (one folder per host venue/organisation, then one folder per residency stint). Use when the user gets accepted to / starts / plans an artist residency.
---

# create-residency

## Steps

1. Read [`../_shared/conventions.md`](../_shared/conventions.md) and [`../_shared/readme-template.md`](../_shared/readme-template.md).
2. Ask the questions.
3. Compute slugs. Residency slug should include the **year**, e.g. `winter-lab-2026`.
4. If venue folder doesn't exist, create it with a small venue README.
5. Refuse to overwrite an existing residency folder.
6. Create:
   ```
   projects/residencies/<venue>/<residency>/
   ├── README.md
   ├── reference/.gitkeep
   ├── deliverables/.gitkeep
   └── media/.gitkeep
   ```
7. Show summary.

## Questions

Required:
1. **Venue / host organisation** name
2. **Residency name** (program name, or fall back to venue + year)
3. **Dates** (range, ISO)
4. **Goal** — what we want to make/achieve (1–3 sentences)
5. **Status** — default `planned`

Optional:
6. **Venue website / location**
7. **Contact at venue**
8. **Funding / stipend**
9. **Required outputs** (showing, talk, work-in-progress, etc.)
10. **Schedule highlights**
11. **Links**
12. **Tags**

## Output

### Venue README (only if new)

`projects/residencies/<venue>/README.md`:

```markdown
---
title: <Venue name>
slug: <venue-slug>
type: residency-venue
created: <today>
updated: <today>
website: <url>
location: <city, country>
---

# <Venue name>

## About
<short note>

## Residencies
- [<Residency name>](./<residency-slug>/) — <dates> — <status>
```

### Residency README

`projects/residencies/<venue>/<residency>/README.md`:

```markdown
---
title: <Residency name>
slug: <residency-slug>
type: residency
venue: <venue name>
status: <status>
created: <today>
updated: <today>
dates: <YYYY-MM-DD → YYYY-MM-DD>
links:
  - <label>: <url>
tags: [<tags>]
---

# <Residency name>

_At [<venue>](../README.md), <dates>._

## Goal
<goal>

## Outputs
- <required output(s)>

## Schedule
<highlights or "TBD">

## Funding
<stipend / funding info or "—">

## Notes
_(empty)_

## Media
External — see studio drive. `media/` is gitignored.
```

## After scaffolding

If venue folder already existed, append the new residency to its `## Residencies` list.
