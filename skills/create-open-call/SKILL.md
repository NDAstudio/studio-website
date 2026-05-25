---
name: create-open-call
description: Scaffolds an open-call application under projects/open-calls/<slug>/ with requirements, submission checklist, and result tracking. Use when the user wants to track a festival / grant / residency / commission open call they're applying to.
---

# create-open-call

## Steps

1. Read [`../_shared/conventions.md`](../_shared/conventions.md) and [`../_shared/readme-template.md`](../_shared/readme-template.md).
2. Ask the questions.
3. Compute slug — include the year for clarity, e.g. `ars-electronica-2026`.
4. Refuse to overwrite.
5. Create:
   ```
   projects/open-calls/<slug>/
   ├── README.md
   ├── submission/.gitkeep
   └── media/.gitkeep
   ```
6. Show summary.

## Questions

Required:
1. **Call name** (e.g. "Ars Electronica – Prix 2026")
2. **Organisation**
3. **Deadline** (ISO date, with timezone if known)
4. **Status** — default `planned`

Optional:
5. **Call URL**
6. **Fee** (application fee, if any)
7. **What we're submitting** (existing project / new proposal)
8. **Requirements** — bullet list of what they ask for (bio, statement, samples, etc.)
9. **Eligibility notes**
10. **Result** (default `pending`)
11. **Notes**
12. **Tags**

## Output

`projects/open-calls/<slug>/README.md`:

```markdown
---
title: <Call name>
slug: <slug>
type: open-call
organisation: <org>
status: <status>
created: <today>
updated: <today>
deadline: <YYYY-MM-DD>
result: <pending | accepted | rejected | withdrawn | shortlisted>
links:
  - call: <url>
tags: [<tags>]
---

# <Call name>

_Organisation: <org>. Deadline: <YYYY-MM-DD>._

## Submitting
<existing project or new proposal>

## Requirements
- [ ] <item>

## Submission checklist
- [ ] Drafted
- [ ] Reviewed
- [ ] Submitted
- [ ] Confirmation received

## Fee
<fee or "—">

## Result
<pending — update when announced>

## Notes
_(empty)_

## Media
External — `media/` is gitignored.
```
