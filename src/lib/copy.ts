/**
 * Editable page copy. Everything marked TEXT SLOT is a placeholder to be
 * rewritten — change the strings here and the page follows; no markup edits.
 */

export const hero = {
  /** TEXT SLOT 1 — the giant type around the portrait. Exactly two short
   *  words/phrases (≤ ~8 chars each reads best at this size): the first sits
   *  top-left, the second bottom-right, both tucked behind the figure. */
  headline: ['MATT', 'SNIVELY'] as [string, string],

  /** TEXT SLOT 2 — short line under the left word (1–2 sentences). */
  leftBlurb:
    'I turn unstructured data into actionable business insights for my day job.',

  /** TEXT SLOT 3 — short line by the right word (1–2 sentences). */
  rightBlurb:
    'In my spare time I noodle on projects that pique my interests: sports, politics, cars, education.',

  /** TEXT SLOT 4 — three role tags, one per category hue. */
  roles: ['Data Viz Consultant', 'Software Developer', 'Data Journalist'],
};
