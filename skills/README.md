# Skills

Agent skills for scaffolding everything in this repo. Each skill is a folder with a `SKILL.md` file following the [Agent Skills standard](https://agentskills.io/specification).

## Shared

- [`_shared/conventions.md`](_shared/conventions.md) — slug rules, dates, status vocabulary, folder layout, media policy.
- [`_shared/readme-template.md`](_shared/readme-template.md) — README frontmatter + sections per item type.

## Skills

| Skill | Creates |
|---|---|
| [`create-client`](create-client/SKILL.md) | `projects/client/<client>/` |
| [`create-client-project`](create-client-project/SKILL.md) | `projects/client/<client>/<project>/` |
| [`create-collab`](create-collab/SKILL.md) | `projects/collabs/<collaborator>/<project>/` |
| [`create-residency`](create-residency/SKILL.md) | `projects/residencies/<venue>/<residency>/` |
| [`create-studio-project`](create-studio-project/SKILL.md) | `projects/studio/<slug>/` |
| [`create-research`](create-research/SKILL.md) | `projects/research/<slug>/` |
| [`create-open-call`](create-open-call/SKILL.md) | `projects/open-calls/<slug>/` |
| [`create-performance`](create-performance/SKILL.md) | `performances/<av\|dj-sets\|talks\|events>/<slug>/` |
| [`create-product`](create-product/SKILL.md) | `products/<tools\|apps\|resources\|tutorials\|socials\|streams\|blog>/<slug>/` |

## Using these skills

**Pi** — auto-discovered. Invoke via `/skill:create-client` etc.

**Claude Code / Codex** — point your skill config at this directory, or open the SKILL.md and follow it.

**Any agent** — open the relevant `SKILL.md` directly. It contains the questions to ask and the exact files to create.

## Adding a new skill

1. Create `skills/<skill-name>/SKILL.md` with required frontmatter (`name`, `description`).
2. Reference `../_shared/conventions.md` and `../_shared/readme-template.md`.
3. List the questions the agent should ask the user.
4. Specify the exact files/folders to create and their contents.
5. Update the table above and the table in [`/AGENTS.md`](../AGENTS.md).
