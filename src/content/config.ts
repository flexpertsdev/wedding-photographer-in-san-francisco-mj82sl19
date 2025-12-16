import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    image: z.string(),
    alt: z.string(),
    categories: z.array(z.string()).optional(),
    author: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};