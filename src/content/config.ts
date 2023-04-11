// 1. Import utilities from `astro:content`
import { image, z, defineCollection } from "astro:content";
// 2. Define your collection(s)

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  article: defineCollection({
    schema: z.object({
      title: z.string(),
      linkTitle: z.string(),
    }),
  }),
  pattern: defineCollection({
    schema: z.object({
      title: z.string(),
      linkTitle: z.string().optional(),
      details: z
        .object({
          complexity: z.number(),
          complexityIcon: z.string().optional(),
          category: z.enum(["apparel", "gear"]),
          skills: z.string(),
        })
        .optional(),
    }),
  }),
};
