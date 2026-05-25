---
name: create-performance
description: Scaffolds a performance under performances/<type>/<slug>/ where type is av, dj-sets, talks, or events. Use when the user is booked for / planning an audio-visual performance, DJ set, talk, or self-organised event/meetup. Each performance gets a README with tech rider, set/programme, lineup, and venue info.
---

# create-performance

## Steps

1. Read [`../_shared/conventions.md`](../_shared/conventions.md) and [`../_shared/readme-template.md`](../_shared/readme-template.md).
2. Ask the questions.
3. Determine `<type>`: one of `av`, `dj-sets`, `talks`, `events`. Ask if ambiguous.
4. Compute slug. Prefer `<title>-<YYYY-MM-DD>` so chronological sort works. If no specific title, use `<venue>-<YYYY-MM-DD>`.
5. Refuse to overwrite.
6. Create:
   ```
   performances/<type>/<slug>/
   ├── README.md
   ├── tech/.gitkeep
   ├── set/.gitkeep
   └── media/.gitkeep
   ```
7. Show summary.

## Questions

Required:
1. **Type** — av / dj-set / talk / event
2. **Title** (or "—" to skip)
3. **Date** (ISO)
4. **Venue** (name + city)
5. **Status** — default `planned`

Optional:
6. **Booker / promoter contact**
7. **Fee**
8. **Travel / accommodation provided?**
9. **Lineup** (other artists on the bill)
10. **Set length** (minutes)
11. **Tech requirements** — short note (full rider lives in `tech/`)
12. **Programme / set notes** (what we're playing/showing)
13. **For events**: theme, format, expected audience
14. **Links** (event page, ticket link)
15. **Tags**

## Output

`performances/<type>/<slug>/README.md`:

```markdown
---
title: <Title or "<venue> performance">
slug: <slug>
type: performance-<type>           # performance-av | performance-dj-set | performance-talk | performance-event
status: <status>
created: <today>
updated: <today>
date: <YYYY-MM-DD>
venue: <venue>
collaborators: [<other artists>]   # if any
links:
  - <label>: <url>
tags: [<tags>]
---

# <Title>

_<Type> · <venue> · <date>_

## Booking
- Contact: <booker / promoter>
- Fee: <fee or "—">
- Travel / accom: <provided / not / details>

## Lineup
- <artist>
- <artist>

## Set / programme
- Length: <minutes>
- <programme notes or set list>

## Tech
<short summary — see `tech/` for full rider, stage plot, patches>

## Notes
_(empty)_

## Media
External — recordings, photos, video stored on studio drive. `media/` is gitignored.
```

For `events` type, also include:

```markdown
## Theme / format
<theme>

## Audience
<expected audience>
```
