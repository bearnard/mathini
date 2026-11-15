// The real numbers the landing page shows (landing brief section 7): computed from the curriculum registry and the code question banks, so they
// are never typed in and never drift. Shared by scripts/generate-site-stats.ts and by src/lib/seo/siteStats.test.ts, which fails when the committed
// JSON is out of date. No database is read: the questions counted are the CURATED banks in code (the pool in D1 is extra and not counted).
import { extractCuratedBanks } from '../../src/test-support/curatedBanks';
import { buildSeoContent } from './seoContent';

export interface SiteStats {
  /** Grades with practice: 5 to 12. */
  grades: number;
  /** Different subjects (by title) across all grades, for example Mathematics counts once. */
  subjects: number;
  /** Grade-and-subject combinations, one practice area each. */
  subjectAreas: number;
  /** Topics. Each is a public page with a lesson and practice questions. */
  topics: number;
  /** Curated multiple-choice questions written into the code banks (not counting questions generated and checked later). */
  questions: number;
  /** The lowest and highest grade, for wording such as "Grades 5 to 12". */
  gradeFrom: number;
  gradeTo: number;
}

export function buildSiteStats(): SiteStats {
  const content = buildSeoContent();
  const titles = new Set<string>();
  let areas = 0;
  let topics = 0;
  for (const g of content) {
    for (const s of g.subjects) {
      titles.add(s.title);
      areas++;
      for (const t of s.terms) topics += t.topics.length;
    }
  }
  const ids = content.map((g) => g.id);
  return {
    grades: content.length,
    subjects: titles.size,
    subjectAreas: areas,
    topics,
    questions: extractCuratedBanks().length,
    gradeFrom: Math.min(...ids),
    gradeTo: Math.max(...ids),
  };
}
