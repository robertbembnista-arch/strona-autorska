import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://robertbembnista.pl',
  integrations: [sitemap()],
  // Stary adres książki (dawny tytuł „Tranzyty”) przekierowuje na nowy.
  redirects: { '/ksiazki/tranzyty/': '/ksiazki/zycie-ma-wiele-zakonczen/' },
  markdown: {
    remarkRehype: {
      footnoteLabel: 'Przypisy',
      footnoteBackLabel: 'Wróć do tekstu',
    },
  },
});
