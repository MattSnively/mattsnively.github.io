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
    /**
     * Category drives the card's accent color and the legend filter.
     * One of the ids in src/lib/categories.ts; defaults to 'data' so
     * older entries without the field still build.
     */
    category: z.enum(['data', 'civic', 'apps', 'play']).default('data'),
    /** Tech stack tags rendered in IBM Plex Mono */
    tags: z.array(z.string()),
    /** Preview image shown at the top of the card — swap in a real screenshot when ready */
    image: z.string().optional().nullable(),
    /**
     * How the preview image fills the card's frame.
     * 'cover' (default) crops a screenshot to fill — right for full-bleed captures.
     * 'contain' pads the image on a light plate so a full logo/wordmark always
     * shows uncropped and reads deliberately in dark mode.
     */
    imageFit: z.enum(['cover', 'contain']).default('cover'),
    /** Public live URL — omit if not yet deployed */
    liveUrl: z.string().url().optional().nullable(),
    /** GitHub repository URL — omit if private or not yet created */
    githubUrl: z.string().url().optional().nullable(),
    /** Lower number = higher position in the grid */
    order: z.number(),
    /**
     * Optional headline metric this project contributes to the hero's
     * rotating KPI panel. Any project that sets one joins the rotation,
     * wearing its category hue — so the pool grows as projects are added.
     */
    kpi: z
      .object({
        value: z.number(),
        suffix: z.string().default(''),
        label: z.string(),
      })
      .optional(),
  }),
});

export const collections = { projects };
