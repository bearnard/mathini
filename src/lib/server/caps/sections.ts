// Section manifest for tasks that have meaningful sub-sections.
//
// This is a standalone manifest, NOT part of the curriculum schema
// (src/types/curriculum.ts). Only tasks with real sub-sections appear here;
// everything else implicitly uses the single 'general' section.

export interface SectionDef {
  slug: string;
  title: string;
}

export const SECTIONS: Record<string, SectionDef[]> = {
  // Grade 6 — Whole Numbers
  'g6-whole-numbers': [
    { slug: 'large-numbers', title: 'Large Numbers' },
    { slug: 'prime-numbers', title: 'Prime Numbers' },
  ],
  // Grade 7 — Whole Numbers
  'g7-whole-numbers-t1': [
    { slug: 'factors-multiples', title: 'Factors & Multiples' },
    { slug: 'prime-factorisation', title: 'Prime Factorisation' },
    { slug: 'hcf-lcm', title: 'HCF & LCM' },
    { slug: 'ratios', title: 'Ratios & Rates' },
  ],
};

/**
 * Get section definitions for a task slug, or undefined if the task
 * has no sub-sections (defaults to 'general').
 */
export function getSections(taskSlug: string): SectionDef[] | undefined {
  return SECTIONS[taskSlug];
}
