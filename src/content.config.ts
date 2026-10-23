import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tekst = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
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
    description: z.string(),
    status: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { eseje, poradniki, ksiazki };
