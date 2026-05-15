import { defineCollection, z } from 'astro:content';

/**
 * Schema for project entries. All URLs are optional — cards
 * only render link buttons when a URL is present.
 */
const projects = defineCollection({
  type: 'data',
  schema: z.object({
    /** Display title for the project card */
    title: z.string(),
    /** Two-sentence description shown on the card */
    description: z.string(),
    /** Controls the status badge and grid sort order */
    status: z.enum(['live', 'beta', 'in-progress', 'planning']),
    /** Tech stack tags rendered in IBM Plex Mono */
    tags: z.array(z.string()),
    /** Preview image shown at the top of the card — swap in a real screenshot when ready */
    image: z.string().optional().nullable(),
    /** Public live URL — omit if not yet deployed */
    liveUrl: z.string().url().optional().nullable(),
    /** GitHub repository URL — omit if private or not yet created */
    githubUrl: z.string().url().optional().nullable(),
    /** Lower number = higher position in the grid */
    order: z.number(),
  }),
});

export const collections = { projects };
