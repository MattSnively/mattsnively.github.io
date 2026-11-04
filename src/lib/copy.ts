/**
 * Editable page copy. Everything marked TEXT SLOT is a placeholder to be
 * rewritten — change the strings here and the page follows; no markup edits.
 */

export const hero = {
  /** TEXT SLOT 1 — the giant type around the portrait. Exactly four short
   *  words (≤ ~6 chars each reads best at this size), read top to bottom,
   *  alternating sides: 1 upper-left, 2 mid-right, 3 lower-left, 4 lower-right.
   *  The last word is accent-colored. */
  headline: ['HI', "Y'ALL,", "I'M", 'MATT'] as [string, string, string, string],

  /** TEXT SLOT 2 — short line under the left word (1–2 sentences). */
  leftBlurb:
    'I turn unstructured data into actionable business insights for my day job.',

  /** TEXT SLOT 3 — short line by the right word (1–2 sentences). */
  rightBlurb:
    'In my spare time I noodle on projects that pique my interests: sports, politics, cars, education.',

  /** TEXT SLOT 4 — three role tags, one per category hue. */
  roles: ['Data Viz Consultant', 'Software Developer', 'Data Journalist'],
};

export const skills = {
  /** TEXT SLOT 5 — small label above the section heading. */
  label: 'What I do',

  /** TEXT SLOT 6 — section heading. */
  heading: 'Skills & Roles',

  /** TEXT SLOT 7 — one entry per row (5–6 reads best; any count works).
   *  title: 1–3 words, shown huge and uppercase (keep each word ≤ ~10 letters).
   *  description: 1–2 sentences.
   *  tools: short list shown as small tags under the description. */
  rows: [
    {
      title: 'Data Viz',
      description:
        'Dashboards and charts that make a dataset legible at a glance, built for the people who have to act on them.',
      tools: ['Tableau', 'Power BI', 'DAX', 'Recharts'],
    },
    {
      title: 'Analytics',
      description:
        'Turning unstructured data into business insights: cleaning, modeling, and finding the story in the numbers.',
      tools: ['Python', 'Pandas', 'SQL'],
    },
    {
      title: 'Software',
      description:
        'Full-stack web and iOS apps, from scraper pipelines to polished front ends.',
      tools: ['React', 'Astro', 'Swift', 'FastAPI'],
    },
    {
      title: 'Journalism',
      description:
        'Data-driven reporting on money, votes, and accountability, with the receipts linked.',
      tools: ['Public records', 'APIs', 'Scraping'],
    },
    {
      title: 'Civic Tech',
      description:
        'Public-interest tools that make government data fair, open, and readable to the people it serves.',
      tools: ['MapLibre', 'Supabase', 'Cloudflare'],
    },
  ] as { title: string; description: string; tools: string[] }[],
};
