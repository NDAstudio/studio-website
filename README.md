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
└── .agents/skills/                # AI agent skills
```

## Media

`media/` folders and heavy file types (`.mp4`, `.mov`, `.wav`, `.psd`, RAW photos, etc.) are **gitignored**. They live outside git (external drive / cloud storage).

## For AI Agents

Scaffolding is handled by the **`create-project`** skill in `.agents/skills/`. It covers all item types: clients, projects, collabs, residencies, performances, products, and more.

Use it by saying something like:
- "create a new client called Acme Corp"
- "new DJ set at Berghain on 2026-07-15"
- "add an open call for Ars Electronica 2026"

The skill will ask the necessary questions and scaffold the correct folder.

See [`AGENTS.md`](AGENTS.md) for details.
