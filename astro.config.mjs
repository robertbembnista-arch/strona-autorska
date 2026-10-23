import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://robertbembnista.pl',
  integrations: [sitemap()],
  markdown: {
    remarkRehype: {
      footnoteLabel: 'Przypisy',
      footnoteBackLabel: 'Wróć do tekstu',
    },
  },
});
