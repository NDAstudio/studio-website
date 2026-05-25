# Instructions for AI Agents

This repo uses **skills** (the [Agent Skills standard](https://agentskills.io/specification)) for all scaffolding.

## When asked to create anything

Do **not** create folders by hand. Find and follow the matching skill in [`skills/`](skills/):

| Request | Skill |
|---|---|
| "create a client …" | [`skills/create-client/SKILL.md`](skills/create-client/SKILL.md) |
| "new project for client X …" | [`skills/create-client-project/SKILL.md`](skills/create-client-project/SKILL.md) |
| "new collab with …" | [`skills/create-collab/SKILL.md`](skills/create-collab/SKILL.md) |
| "new residency …" | [`skills/create-residency/SKILL.md`](skills/create-residency/SKILL.md) |
| "new studio project …" | [`skills/create-studio-project/SKILL.md`](skills/create-studio-project/SKILL.md) |
| "new research/experiment …" | [`skills/create-research/SKILL.md`](skills/create-research/SKILL.md) |
| "new open call …" | [`skills/create-open-call/SKILL.md`](skills/create-open-call/SKILL.md) |
| "new performance / a-v set / dj set / talk / event …" | [`skills/create-performance/SKILL.md`](skills/create-performance/SKILL.md) |
| "new product / tool / app / resource / tutorial / blog post / newsletter …" | [`skills/create-product/SKILL.md`](skills/create-product/SKILL.md) |

Each skill tells you what to ask the user and how to lay out the resulting folder.

## Always

- Follow the conventions in [`skills/_shared/conventions.md`](skills/_shared/conventions.md) (slugs, dates, status vocabulary).
- Use the README template at [`skills/_shared/readme-template.md`](skills/_shared/readme-template.md) (filled in per skill instructions).
- Never commit media: `media/` folders and heavy file types are gitignored.
- If the user is vague, ask the questions listed in the skill — do not invent values.

## Pi users

Pi auto-discovers skills under `skills/` via the `SKILL.md` files. You can also invoke them explicitly:

```
/skill:create-client
/skill:create-client-project
```

## Claude Code / Codex / other harnesses

Point your skills config at this repo's `skills/` directory, or just open the SKILL.md file directly and follow it.
