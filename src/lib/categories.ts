/**
 * Category definitions shared by the filter legend (index.astro) and the
 * project cards (ProjectCard.astro).
 *
 * Each project belongs to exactly one category; the category's hue is used
 * consistently everywhere it appears (card accent, legend chip, footer bar) —
 * the Gestalt similarity principle: same color = same kind of work.
 *
 * Hues are the brand navy/teal/red plus a neutral gray (the fourth slot),
 * validated for CVD separation on both surfaces. Gray fails the validator's
 * chroma floor by design — it is the deliberately quiet category.
 * `light` is the step for the light surface, `dark` for the dark surface —
 * same hue, different lightness step per mode.
 */
export type CategoryId = 'data' | 'civic' | 'apps' | 'play';

export interface Category {
  id: CategoryId;
  /** Human label shown in the legend, card tag, and footer caption */
  label: string;
  /** Hex accent for the light surface */
  light: string;
  /** Hex accent for the dark surface (same hue, re-stepped) */
  dark: string;
}

export const CATEGORIES: Category[] = [
  { id: 'data',  label: 'Data & Analytics', light: '#2358a0', dark: '#4f86c6' },
  { id: 'civic', label: 'Civic Tech',       light: '#d62839', dark: '#f0525f' },
  { id: 'apps',  label: 'Apps & Tools',     light: '#08846b', dark: '#1aa886' },
  { id: 'play',  label: 'Just for Fun',     light: '#8794a1', dark: '#8795a3' },
];

/** Fast lookup by id — used by ProjectCard to resolve a project's accent */
export const CATEGORY_MAP: Record<CategoryId, Category> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c]),
) as Record<CategoryId, Category>;
