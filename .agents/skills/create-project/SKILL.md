---
name: create-project
description: >
  Scaffolds a new item in the NDA Studio repo — client, client project, collab,
  residency, studio project, research experiment, open-call application,
  performance (A/V, DJ set, talk, event), or product (tool, app, resource,
  tutorial, social, stream, blog). Asks the user which type, then the required
  details, and creates the folder with a populated README. Use whenever the user
  says "create", "new", "add", or "set up" followed by any of these item types.
---

# create-project

One skill to scaffold any item in the NDA Studio repo.

Before doing anything, read the reference files in this skill:

- [conventions.md](references/conventions.md) — slug rules, dates, status vocab, folder layout, media policy
- [readme-template.md](references/readme-template.md) — README frontmatter and sections per type

## Flow

1. **Determine the type.** Ask the user (or infer from context):

   | Category | Types | Output path |
   |----------|-------|-------------|
   | **Projects** | `client`, `client-project`, `collab`, `residency`, `studio-project`, `research`, `open-call` | `projects/…` |
   | **Performances** | `av`, `dj-set`, `talk`, `event` | `performances/…` |
   | **Products** | `tool`, `app`, `resource`, `tutorial`, `social`, `stream`, `blog` | `products/…` |

   If ambiguous, list the types and let the user pick.

2. **Ask the questions** for that type (see sections below). Ask all required questions together as a numbered list. The user may answer "skip" for any optional one. Never invent values.

3. **Compute the slug** from the name/title per [conventions.md](references/conventions.md).

4. **Check for conflicts.** If the target folder already exists, tell the user and stop.

5. **Create the folder and files** per the type-specific layout below.

6. **Update parent READMEs** where applicable (client folder, collaborator folder, venue folder).

7. **Show the user** the created path and a summary. Stage files with `git add` but do **not** commit or push unless asked.

---

## Type: client

Creates a client folder. Projects for the client are added later as `client-project`.

**Path:** `projects/client/<client-slug>/`

**Questions (required):**
1. Client name
2. Primary contact (name + email)

**Questions (optional):**
3. Website
4. Address / location
5. Default rate + currency
6. Tax / VAT info
7. Notes
8. Status (default: `active`)

**Creates:**
```
projects/client/<client-slug>/
└── README.md
```

**README sections:** `## Contact`, `## Address`, `## Rates`, `## Tax / Invoicing`, `## Notes`, `## Projects` (initially: _None yet — use `create-project` → `client-project` to add one._)

**After:** Tell the user to run `create-project` → `client-project` to add work for this client.

---

## Type: client-project

Creates a project under an existing client.

**Path:** `projects/client/<client-slug>/<project-slug>/`

**Pre-check:** List `projects/client/` and ask which client. If the client folder doesn't exist, offer to create it first (chain into the `client` type above).

**Questions (required):**
1. Client (must exist)
2. Project name
3. Scope (1–3 sentences)
4. Status (default: `planned`)

**Questions (optional):**
5. Start date
6. Deadline
7. Deliverables (bullet list)
8. Budget / fee
9. Key contacts on client side
10. Links (label + URL)
11. Tags

**Creates:**
```
projects/client/<client>/<project-slug>/
├── README.md
├── assets/.gitkeep
├── deliverables/.gitkeep
└── media/.gitkeep
```

**README sections:** `## Scope`, `## Deliverables`, `## Timeline`, `## Contacts`, `## Budget`, `## Notes`, `## Media`

**After:** Append a bullet `- [<name>](./<slug>/) — <status>` to the client's `## Projects` list in `projects/client/<client>/README.md`.

---

## Type: collab

Creates a collaboration. Collaborator-first nesting.

**Path:** `projects/collabs/<collaborator-slug>/<project-slug>/`

**Questions (required):**
1. Collaborator name
2. Project name
3. Role split (who does what)
4. Status (default: `planned`)

**Questions (optional):**
5. Collaborator contact
6. Collaborator website / socials
7. Dates
8. Scope / concept
9. Outputs
10. Revenue / credits split
11. Links
12. Tags

**Creates:**

If collaborator folder is new, also create `projects/collabs/<collaborator>/README.md` with contact info and a `## Projects` list.

```
projects/collabs/<collaborator>/<project-slug>/
├── README.md
├── assets/.gitkeep
├── deliverables/.gitkeep
└── media/.gitkeep
```

**README sections:** `## Concept`, `## Role split`, `## Outputs`, `## Credits & splits`, `## Notes`, `## Media`

**After:** If collaborator folder already existed, append the new project to its `## Projects` list.

---

## Type: residency

Creates a residency. Venue-first nesting.

**Path:** `projects/residencies/<venue-slug>/<residency-slug>/`

Residency slug should include the year (e.g. `winter-lab-2026`).

**Questions (required):**
1. Venue / host organisation
2. Residency name
3. Dates (range, ISO)
4. Goal (1–3 sentences)
5. Status (default: `planned`)

**Questions (optional):**
6. Venue website / location
7. Contact at venue
8. Funding / stipend
9. Required outputs
10. Schedule highlights
11. Links
12. Tags

**Creates:**

If venue folder is new, also create `projects/residencies/<venue>/README.md`.

```
projects/residencies/<venue>/<residency-slug>/
├── README.md
├── reference/.gitkeep
├── deliverables/.gitkeep
└── media/.gitkeep
```

**README sections:** `## Goal`, `## Outputs`, `## Schedule`, `## Funding`, `## Notes`, `## Media`

**After:** If venue folder already existed, append the new residency to its `## Residencies` list.

---

## Type: studio-project

Internal studio project (not client, collab, or residency).

**Path:** `projects/studio/<slug>/`

**Questions (required):**
1. Project name
2. Goal / concept (1–3 sentences)
3. Status (default: `planned`)

**Questions (optional):**
4. Start date
5. Target completion date
6. Outputs / deliverables
7. Budget
8. Internal collaborators
9. Links
10. Tags

**Creates:**
```
projects/studio/<slug>/
├── README.md
├── assets/.gitkeep
├── deliverables/.gitkeep
└── media/.gitkeep
```

**README sections:** `## Concept`, `## Deliverables`, `## Timeline`, `## Budget`, `## Notes`, `## Media`

---

## Type: research

R&D experiment or prototype.

**Path:** `projects/research/<slug>/`

**Questions (required):**
1. Title
2. Research question / hypothesis (1–3 sentences)
3. Status (default: `active`)

**Questions (optional):**
4. Method
5. Related work / references
6. Expected output
7. Tags

**Creates:**
```
projects/research/<slug>/
├── README.md
├── notes/.gitkeep
├── prototype/.gitkeep
└── media/.gitkeep
```

**README sections:** `## Question`, `## Method`, `## Findings`, `## Next steps`, `## Media`

---

## Type: open-call

Application to a festival, grant, residency call, or commission.

**Path:** `projects/open-calls/<slug>/`

Slug should include the year (e.g. `ars-electronica-2026`).

**Questions (required):**
1. Call name
2. Organisation
3. Deadline (ISO date)
4. Status (default: `planned`)

**Questions (optional):**
5. Call URL
6. Application fee
7. What we're submitting
8. Requirements (bullet list)
9. Eligibility notes
10. Tags

**Creates:**
```
projects/open-calls/<slug>/
├── README.md
├── submission/.gitkeep
└── media/.gitkeep
```

**README sections:** `## Submitting`, `## Requirements` (with checkboxes), `## Submission checklist` (`- [ ] Drafted`, `- [ ] Reviewed`, `- [ ] Submitted`, `- [ ] Confirmation received`), `## Fee`, `## Result` (default: `pending`), `## Notes`, `## Media`

---

## Type: av | dj-set | talk | event (Performances)

**Path:** `performances/<type>/<slug>/`

Where `<type>` is `av`, `dj-sets`, `talks`, or `events`. Slug should be `<title>-<YYYY-MM-DD>` or `<venue>-<YYYY-MM-DD>`.

**Questions (required):**
1. Type (av / dj-set / talk / event)
2. Title (or derive from venue + date)
3. Date (ISO)
4. Venue (name + city)
5. Status (default: `planned`)

**Questions (optional):**
6. Booker / promoter contact
7. Fee
8. Travel / accommodation
9. Lineup (other artists)
10. Set length (minutes)
11. Tech requirements (short — full rider in `tech/`)
12. Programme / set notes
13. For events: theme, format, expected audience
14. Links
15. Tags

**Creates:**
```
performances/<type>/<slug>/
├── README.md
├── tech/.gitkeep
├── set/.gitkeep
└── media/.gitkeep
```

**README sections:** `## Booking` (contact, fee, travel), `## Lineup`, `## Set / programme`, `## Tech`, `## Notes`, `## Media`. For `event` type also: `## Theme / format`, `## Audience`.

---

## Type: tool | app | resource | tutorial | social | stream | blog (Products)

**Path:** `products/<type>/<slug>/`

Where `<type>` maps as:

| User says | Folder |
|---|---|
| tool, library, plugin, CLI | `tools` |
| app, mobile/web app | `apps` |
| pack, preset, sample pack, template | `resources` |
| tutorial, course, lesson | `tutorials` |
| social series, content plan | `socials` |
| stream, twitch/youtube live | `streams` |
| blog post, article, newsletter | `blog` |

For `blog`, slug should be `<YYYY-MM-DD>-<title-slug>`.

**Questions (required):**
1. Product type
2. Name / title
3. Summary (1–2 sentences)
4. Status (default: `blog`/`socials` → `idea`, others → `planned`)

**Questions (optional):**
5. Audience
6. Links
7. Tags
8. For blog: publish date
9. For streams: schedule
10. For tutorials: format + length
11. For resources: file types + price

**Creates (base):**
```
products/<type>/<slug>/
├── README.md
└── media/.gitkeep
```

**Extra files per type:**
- `tools` / `apps`: `+ src/.gitkeep`
- `resources`: `+ files/.gitkeep`
- `tutorials`: `+ outline.md` + `assets/.gitkeep`
- `socials`: `+ posts/.gitkeep` + `schedule.md`
- `streams`: `+ setup.md` + `vods.md`
- `blog`: `+ post.md` (draft skeleton)

**README sections:** `## What it is`, `## Audience`, `## Status / roadmap`, `## Links`, `## Media`
