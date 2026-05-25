---
name: create-product
description: Scaffolds a product under products/<type>/<slug>/ where type is tools, apps, resources, tutorials, socials, streams, or blog. Use for standalone offerings — a software tool, an app, a downloadable resource, a tutorial, a social content series, a stream setup, a blog post, or a newsletter issue.
---

# create-product

## Steps

1. Read [`../_shared/conventions.md`](../_shared/conventions.md) and [`../_shared/readme-template.md`](../_shared/readme-template.md).
2. Ask the questions. Decide `<type>` from the user's intent. If ambiguous, ask.
3. For `blog` items, the slug should be `<YYYY-MM-DD>-<title-slug>` so they sort chronologically.
4. Compute slug. Refuse to overwrite.
5. Create the appropriate folder layout (see below).
6. Show summary.

## Type mapping

| User says | type |
|---|---|
| tool, library, plugin, CLI | `tools` |
| app, mobile app, web app | `apps` |
| pack, preset pack, sample pack, template, downloadable | `resources` |
| tutorial, course, lesson, workshop material | `tutorials` |
| social series, instagram series, tiktok series, content plan | `socials` |
| stream, twitch series, youtube live | `streams` |
| blog post, article, newsletter, essay | `blog` |

## Folder layout

Base layout for all types:
```
products/<type>/<slug>/
├── README.md
└── media/.gitkeep
```

Add per type:
- `tools` / `apps`: `+ src/.gitkeep`
- `resources`: `+ files/.gitkeep` (the deliverable itself, kept light or linked externally)
- `tutorials`: `+ outline.md`, `+ assets/.gitkeep`
- `socials`: `+ posts/.gitkeep`, `+ schedule.md`
- `streams`: `+ setup.md`, `+ vods.md`
- `blog`: `+ post.md` (the actual draft)

## Questions

Required:
1. **Product type** (from the mapping above)
2. **Name / title**
3. **Summary** — 1–2 sentences
4. **Status** — default depends on type: `blog`/`socials` → `idea`, others → `planned`

Optional:
5. **Audience** (who it's for)
6. **Links** (repo, store page, published URL)
7. **Tags**
8. For `blog`: **publish date** (ISO, target or actual)
9. For `streams`: **schedule** (e.g. "weekly Thursdays 20:00 CET")
10. For `tutorials`: **format** (video / written / both) and **length**
11. For `resources`: **format / file types** and **price (free / paid)**

## Output

`products/<type>/<slug>/README.md`:

```markdown
---
title: <Name>
slug: <slug>
type: product-<type>            # product-tool | product-app | product-resource | product-tutorial | product-social | product-stream | product-blog
status: <status>
created: <today>
updated: <today>
links:
  - <label>: <url>
tags: [<tags>]
---

# <Name>

## What it is
<summary>

## Audience
<audience or "—">

## Status / roadmap
- <next step>

## Links
- <label>: <url>

## Media
External — `media/` is gitignored.
```

For `blog`, also write a `post.md` skeleton:

```markdown
---
title: <Name>
date: <publish date or TBD>
status: draft
---

<draft body here>
```

For `socials`, also write a `schedule.md`:

```markdown
# Schedule

| Date | Platform | Post | Status |
|---|---|---|---|
| <YYYY-MM-DD> | <ig/tiktok/x> | <title/idea> | idea |
```

For `streams`, also write `setup.md` (hardware/software/scenes) and `vods.md` (links list).
