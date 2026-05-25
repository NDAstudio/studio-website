# NDA Studio

Monorepo for NDA studio: portfolio website, products, projects, and performances.

## Structure

```
nda-studio/
├── website/                       # Portfolio website code
│
├── products/                      # Standalone offerings
│   ├── tools/                     # software tools
│   ├── apps/                      # applications
│   ├── resources/                 # downloadables, presets, samples
│   ├── tutorials/                 # tutorial content
│   ├── socials/                   # social content & archives
│   ├── streams/                   # stream setups & schedules
│   └── blog/                      # blog posts & newsletter issues
│
├── projects/                      # Time-bounded work
│   ├── client/<client>/<project>/ # client work (client-first)
│   ├── collabs/<partner>/<project>/
│   ├── residencies/<venue>/<name-year>/
│   ├── studio/                    # internal studio projects
│   ├── research/                  # experiments / R&D
│   └── open-calls/                # applications & submissions
│
├── performances/                  # Live work
│   ├── av/                        # audio-visual performances
│   ├── dj-sets/
│   ├── talks/
│   └── events/                    # events / meetups we organize
│
├── docs/                          # studio-wide docs (brand, bios, templates)
│
└── skills/                        # AI agent skills (see below)
```

Each leaf item is a folder with a `README.md` plus its own subfolders (`assets/`, `deliverables/`, `media/`, etc.).

## Media

`media/` folders and heavy file types (`.mp4`, `.mov`, `.wav`, `.psd`, RAW photos, etc.) are **gitignored**. They live outside git (external drive / cloud storage). See [`.gitignore`](.gitignore).

## For AI Agents

All scaffolding is done via **skills** in [`skills/`](skills/). To create a new client, project, performance, or product, run the matching skill:

| Goal | Skill |
|---|---|
| New client | `create-client` |
| New project for a client | `create-client-project` |
| New collab | `create-collab` |
| New residency | `create-residency` |
| New studio project | `create-studio-project` |
| New research item | `create-research` |
| New open call | `create-open-call` |
| New performance | `create-performance` |
| New product | `create-product` |

Conventions (slugs, status vocabulary, README format) are in [`skills/_shared/conventions.md`](skills/_shared/conventions.md).

See [`AGENTS.md`](AGENTS.md) for AI agent setup.
