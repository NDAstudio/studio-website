import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://den-ree.github.io',
  base: '/nda-studio/',
  build: {
    format: 'directory',
  },
});
