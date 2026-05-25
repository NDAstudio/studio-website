---
name: create-research
description: Scaffolds a research / experiment folder under projects/research/<slug>/. Use for R&D experiments, technical investigations, prototypes that aren't yet products. Each item has a question, method, and findings.
---

# create-research

## Steps

1. Read [`../_shared/conventions.md`](../_shared/conventions.md) and [`../_shared/readme-template.md`](../_shared/readme-template.md).
2. Ask the questions.
3. Compute slug. Refuse to overwrite.
4. Create:
   ```
   projects/research/<slug>/
   ├── README.md
   ├── notes/.gitkeep
   ├── prototype/.gitkeep
   └── media/.gitkeep
   ```
5. Show summary.

## Questions

Required:
1. **Title** (short, descriptive)
2. **Research question / hypothesis** (1–3 sentences)
3. **Status** — default `active` (research usually starts immediately)

Optional:
4. **Method** — how we plan to investigate
5. **Related work / references** (links)
6. **Expected output** (note, prototype, blog post, talk, product seed)
7. **Tags**

## Output

`projects/research/<slug>/README.md`:

```markdown
---
title: <Title>
slug: <slug>
type: research
status: <status>
created: <today>
updated: <today>
links:
  - <label>: <url>
tags: [<tags>]
---

# <Title>

## Question
<question / hypothesis>

## Method
<method or "TBD">

## Findings
_(update as we go)_

## Next steps
- <item>

## Media
External — `media/` is gitignored.
```
