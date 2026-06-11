// Parse task slugs into their components.
//
// Format: `gr<n>-<topic>-t<term>`  (e.g. `gr7-whole-numbers-t1`)
// Grade 6 is special — no `gr6-` prefix (e.g. `whole-numbers-t1`).

export interface ParsedTaskSlug {
  grade: number;
  topic: string;
  term: number;
}

/**
 * Parse a task slug into grade, topic, and term.
 *
 * Rules:
 *   - Strip leading `gr<n>-` (e.g. `gr7-`). If absent, grade defaults to 6
 *     (grade 6 uses a dedicated /api/caps/grade6 endpoint).
 *   - Strip trailing `-t<digit>` (e.g. `-t1`).
 *   - The remainder is the topic slug.
 *
 * @example
 *   parseTaskSlug('gr7-whole-numbers-t1')  // → { grade: 7, topic: 'whole-numbers', term: 1 }
 *   parseTaskSlug('gr12-reading-viewing-t3') // → { grade: 12, topic: 'reading-viewing', term: 3 }
 *   parseTaskSlug('whole-numbers-t1')       // → { grade: 6, topic: 'whole-numbers', term: 1 }
 *   parseTaskSlug('construction-geo-t2')    // → { grade: 6, topic: 'construction-geo', term: 2 }
 */
export function parseTaskSlug(slug: string): ParsedTaskSlug {
  const trimmed = slug.trim();

  // Extract term: everything after the last `-tN`
  const termMatch = trimmed.match(/-t(\d+)$/);
  const term = termMatch ? parseInt(termMatch[1], 10) : 1;
  const withoutTerm = termMatch ? trimmed.slice(0, trimmed.length - termMatch[0].length) : trimmed;

  // Extract grade: leading `gr\d+-`
  const gradeMatch = withoutTerm.match(/^gr(\d+)-/);
  const grade = gradeMatch ? parseInt(gradeMatch[1], 10) : 6;

  const topic = gradeMatch
    ? withoutTerm.slice(gradeMatch[0].length)
    : withoutTerm;

  return { grade, topic, term };
}
