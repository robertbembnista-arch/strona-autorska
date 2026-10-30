import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tekst = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  toc: z.boolean().default(false),
  order: z.number().optional(),
  // Zapowiedź pokazywana zamiast pełnego tekstu od `od` do `premiera` (strona przebudowuje się codziennie rano).
  zapowiedz: z.object({
    seria: z.string(),
    od: z.coerce.date(),
    premiera: z.coerce.date(),
    akapit: z.string(),
    oCzym: z.string(),
  }).optional(),
});

const eseje = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/eseje' }),
  schema: tekst,
});

const poradniki = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/poradniki' }),
  schema: tekst,
});

// Książki: opis + wybrane fragmenty (nigdy całość).
const ksiazki = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ksiazki' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    cover: z.string().optional(),
    description: z.string(),
    status: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().default(''),
    order: z.number().default(0),
  }),
});

export const collections = { eseje, poradniki, ksiazki };
