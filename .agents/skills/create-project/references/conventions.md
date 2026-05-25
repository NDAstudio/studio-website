# Repo Conventions

These rules apply to all items created in the NDA Studio repo.

## Slugs (folder names)

- **kebab-case**, ASCII only, lowercase
- Max ~40 characters
- No spaces, no underscores, no accents (transliterate: `é → e`, `ł → l`)
- No leading/trailing hyphens, no consecutive hyphens
- For dated items (residencies, performances, events, open calls) **append the year**: `berlin-atonal-2026`
- For client projects, the slug is the project name only — the date goes in the README
- For performances, prefer `<title>-<YYYY-MM-DD>` or `<venue>-<YYYY-MM-DD>`
- For blog posts, prefix with date: `2026-03-14-my-post`

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
├── README.md          # required
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

These live on the studio drive / cloud. The README should note where media is stored.

## Asking the user

- Ask **only the questions listed** in the skill, in order
- Ask required questions together as a numbered list
- The user may answer "skip" for optional ones
- Never invent values
- If the user says "you decide", pick a reasonable default and tell them what you picked

## Committing

After scaffolding, stage files with `git add` and show a summary. Do **not** commit or push unless the user asks.
