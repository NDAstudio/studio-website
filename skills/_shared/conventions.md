# Repo Conventions

These rules apply to every skill in this repo.

## Slugs (folder names)

- **kebab-case**, ASCII only, lowercase
- Max ~40 characters
- No spaces, no underscores, no accents (transliterate: `é → e`, `ł → l`)
- No leading/trailing hyphens, no consecutive hyphens
- For dated items (residencies, performances, events, open calls) **append the year**: `berlin-atonal-2026`
- For client projects, the slug is the project name only — the year/date goes in the README frontmatter
- For performances, prefer `<title>-<yyyy-mm-dd>` if the date is the defining attribute

Examples:
- ✅ `acme-rebrand`, `berlin-atonal-2026`, `echoes-of-silence-2026-03-14`
- ❌ `Acme Rebrand`, `acme_rebrand`, `--acme`, `acme--rebrand`

## Dates

- Always **ISO 8601**: `2026-03-14`
- Ranges: `2026-03-14 → 2026-03-21`
- Year-only when that's all you have: `2026`

## Status vocabulary

Use one of these in every README:

| Status | Meaning |
|---|---|
| `idea` | captured but not committed |
| `planned` | committed, not started |
| `active` | in progress |
| `on-hold` | paused |
| `done` | finished and delivered/archived-as-complete |
| `archived` | abandoned or no longer relevant |

## Folder layout for any leaf item

Minimum:

```
<item-slug>/
├── README.md          # required, see template
└── .gitkeep           # only if no other files yet
```

Common optional subfolders (create only when needed):

```
├── assets/            # working source files (light)
├── deliverables/      # finished outputs (light)
├── reference/         # mood boards, research, links
├── contracts/         # signed PDFs, agreements
├── tech/              # tech rider, stage plot, patches
└── media/             # ❌ gitignored — videos, photos, RAW, large WAVs
```

## Media

Never commit:
- anything inside a folder named `media/` or `raw/`
- `.mp4 .mov .mkv .webm .wav .aif .flac .psd .tif .raw .arw .cr2 .nef .dng`
- heavy app project files (`.aep .prproj .als .logicx .blend1`)

These live on the studio drive / cloud. The README should link to where the media for that item is stored if relevant.

## README frontmatter

Every item README starts with YAML frontmatter — see [`readme-template.md`](readme-template.md).

## Asking the user

When a skill says "ask the user X", ask **only the questions in that skill**, in order, one at a time or as a short batch. Never invent values. If the user says "you decide" for a field, pick a reasonable default and tell them what you picked.

## Committing

After scaffolding, stage the new files and show the user a summary. Do not push without being asked.
