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
    /**
     * Optional deep-dive content. When present, the card gains a "Case study"
     * action that opens an on-page modal built from these fields. Everything
     * here is optional so a project can fill in as much or as little as it has.
     */
    detail: z
      .object({
        /** One-line hook shown under the title in the modal header */
        tagline: z.string().optional(),
        /** When it was built / how long — e.g. "2025 · self-directed" */
        timeline: z.string().optional(),
        /** What Matt personally did — the honest scope line */
        role: z.string().optional(),
        /** Overview paragraphs (the "what and why") */
        overview: z.array(z.string()).optional(),
        /** Headline numbers for the modal's metric row; values are strings so
         *  they can carry units ("55 months", "~475 KB gzipped") */
        metrics: z
          .array(z.object({ value: z.string(), label: z.string() }))
          .optional(),
        /** Screenshot gallery — each shot with a caption used as its alt text */
        gallery: z
          .array(z.object({ src: z.string(), caption: z.string() }))
          .optional(),
        /** Notable features, each a title + one-line detail */
        features: z
          .array(z.object({ title: z.string(), detail: z.string() }))
          .optional(),
        /** Engineering challenges: the problem faced and how it was resolved */
        challenges: z
          .array(
            z.object({
              title: z.string(),
              problem: z.string(),
              outcome: z.string(),
            }),
          )
          .optional(),
        /** Tech choices with the reason each was chosen */
        stack: z
          .array(z.object({ name: z.string(), why: z.string() }))
          .optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };
