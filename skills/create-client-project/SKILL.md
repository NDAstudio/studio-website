---
name: create-client-project
description: Scaffolds a new project folder for an existing client under projects/client/<client>/<project-slug>/ with a populated README, assets/, deliverables/, and a gitignored media/. Use when the user wants to start a new piece of client work. If the client folder doesn't exist yet, run create-client first.
---

# create-client-project

Creates a project under an existing client.

## Steps

1. Read [`../_shared/conventions.md`](../_shared/conventions.md) and [`../_shared/readme-template.md`](../_shared/readme-template.md).
2. List existing clients: `ls projects/client/`. Ask which client this is for.
3. If the named client folder does not exist, **stop** and tell the user to run `create-client` first (offer to chain into it).
4. Ask the project questions below.
5. Compute project slug from project name. Refuse to overwrite an existing folder.
6. Create:
   ```
   projects/client/<client>/<project-slug>/
   ├── README.md
   ├── assets/.gitkeep
   ├── deliverables/.gitkeep
   └── media/.gitkeep        # gitignored anyway, but keeps the convention visible
   ```
7. Show summary to the user.

## Questions

Required:
1. **Client** (must already exist as a folder)
2. **Project name**
3. **Scope** — 1–3 sentences on what we're delivering
4. **Status** — default `planned`

Optional:
5. **Start date** (ISO)
6. **Deadline** (ISO)
7. **Deliverables** — bullet list
8. **Budget / fee**
9. **Key contacts on client side** (if different from the main client contact)
10. **Links** (brief, references, shared drives — label + URL)
11. **Tags**

## Output

`projects/client/<client>/<project-slug>/README.md`:

```markdown
---
title: <Project name>
slug: <project-slug>
type: client-project
client: <client-slug>
status: <status>
created: <today>
updated: <today>
start: <YYYY-MM-DD>        # if given
deadline: <YYYY-MM-DD>     # if given
links:
  - <label>: <url>
tags: [<tags>]
---

# <Project name>

_Client: [<client name>](../README.md)_

## Scope
<scope text>

## Deliverables
- <item>

## Timeline
- Start: <date or TBD>
- Deadline: <date or TBD>

## Contacts
- <contact lines or "See client README.">

## Budget
<budget or "—">

## Notes
_(empty)_

## Media
External — see studio drive. The `media/` folder here is gitignored.
```

Omit sections the user skipped (except Scope, Deliverables, Timeline which are always present, with `TBD` if unknown).

## After scaffolding

Append a bullet to the client's `Active projects` list in `projects/client/<client>/README.md`:

```
- [<Project name>](./<project-slug>/) — <status>
```

If the section says `_Listed automatically as subfolders are added…_`, replace that line with the new bullet.
