/**
 * Category definitions shared by the filter legend (index.astro) and the
 * project cards (ProjectCard.astro).
 *
 * Each project belongs to exactly one category; the category's hue is used
 * consistently everywhere it appears (card accent, legend chip, footer bar) —
 * the Gestalt similarity principle: same color = same kind of work.
 *
 * Hues come from a CVD-validated categorical palette (see tailwind.config.mjs).
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
  { id: 'data',  label: 'Data & Analytics', light: '#2a78d6', dark: '#3987e5' },
  { id: 'civic', label: 'Civic Tech',       light: '#4a3aa7', dark: '#9085e9' },
  { id: 'apps',  label: 'Apps & Tools',     light: '#1baf7a', dark: '#199e70' },
  { id: 'play',  label: 'Just for Fun',     light: '#e87ba4', dark: '#d55181' },
];

/** Fast lookup by id — used by ProjectCard to resolve a project's accent */
export const CATEGORY_MAP: Record<CategoryId, Category> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c]),
) as Record<CategoryId, Category>;
