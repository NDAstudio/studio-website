# NDA Studio

Portfolio website for NDA Studio, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Structure

```
nda-studio/
├── .github/workflows/deploy.yml   # auto-deploy on push to main
├── public/                        # static assets
└── src/                           # Astro app source
```

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # production build
```

Push to `main` → deploys automatically to GitHub Pages.
