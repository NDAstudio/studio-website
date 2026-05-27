# NDA Studio

Portfolio website for NDA Studio, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Structure

```
nda-studio/
├── .github/workflows/deploy.yml   # auto-deploy on push to main
└── website/                        # Astro site
```

## Development

```bash
cd website
npm install
npm run dev       # local dev server
npm run build     # production build
```

Push to `main` → deploys automatically to GitHub Pages.
