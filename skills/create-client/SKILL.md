---
name: create-client
description: Scaffolds a new client folder under projects/client/<client-slug>/ with a client-level README containing contact, contracts, and rate info. Use when the user says they want to add a new client, onboard a client, or set up a client folder. Does NOT create projects — for that, use create-client-project after this.
---

# create-client

Creates a top-level client folder. Projects for the client are created later with `create-client-project`.

## Steps

1. Read [`../_shared/conventions.md`](../_shared/conventions.md) and [`../_shared/readme-template.md`](../_shared/readme-template.md).
2. Ask the user the questions below. Ask all at once as a numbered list; the user may answer "skip" for any optional one.
3. Compute the client slug from the client name per the slug rules.
4. Refuse to overwrite an existing `projects/client/<slug>/` — if it exists, tell the user and stop.
5. Create the folder and `README.md` from the template below.
6. Show the user the created path and a summary of what was written.

## Questions

Required:
1. **Client name** (legal or display name)
2. **Primary contact** (name + email, optionally role/phone)

Optional:
3. **Website**
4. **Address / location**
5. **Default rate** (hourly / day / project basis — free-form)
6. **Currency** (EUR / USD / …)
7. **Tax info / VAT id** (if relevant for invoicing)
8. **Notes** (relationship context, intro source, preferences)
9. **Status** — default `active`

## Output

`projects/client/<slug>/README.md`:

```markdown
---
title: <Client name>
slug: <slug>
type: client
status: <status>
created: <today YYYY-MM-DD>
updated: <today YYYY-MM-DD>
website: <url>           # omit if not provided
---

# <Client name>

## Contact
- **<contact name>** — <email> — <role/phone if given>

## Address
<address or "—">

## Rates
- <rate line(s)> (<currency>)

## Tax / Invoicing
<vat id / notes or "—">

## Notes
<notes or "—">

## Active projects
_Listed automatically as subfolders are added via `create-client-project`._
```

Omit any optional section the user skipped. Never invent values.

## After scaffolding

Tell the user:
> Client `<slug>` created at `projects/client/<slug>/`. To add a project for them, run `create-client-project`.
