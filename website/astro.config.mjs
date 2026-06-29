import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ndastudio.github.io',
  base: '/studio-website/',
  build: {
    format: 'directory',
  },
});
