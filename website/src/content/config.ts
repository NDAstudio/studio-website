import { defineCollection, z } from 'astro:content';

const performances = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    venue: z.string(),
    city: z.string(),
    type: z.enum(['av', 'dj-set', 'talk', 'event']),
    description: z.string().optional(),
    url: z.string().url().optional(),
    lineup: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { performances };
