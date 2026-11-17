// Public URLs that moved when subjects or terms were restructured (CAPS alignment, Wave B). Each one gets a permanent redirect
// (next.config.ts -> HTTP 308) so links, bookmarks and search results keep working. No imports on purpose: next.config.ts reads this file.
// legacyRedirects.test.ts checks that every source is no longer a live page and every destination is one.
// Task ids and slugs never change in a restructure, so only the page the lesson is listed under moves.

/** Grade 7 "Natural Sciences & Technology" became two subjects. */
const NST_TO_NS = ['biosphere-biodiversity-and-reproduction', 'energy-transfer-heat-and-motion', 'matter-mixtures-acids-and-bases', 'sun-earth-relationship-and-gravity'];
const NST_TO_TECH = ['design-process-and-structures', 'electrical-systems-and-control', 'mechanical-systems-and-control', 'processing-materials-and-properties'];
/** Grade 7 "Life Skills" became Life Orientation (PSW and PE) and Creative Arts. */
const LSK_TO_LO = [1, 2, 3, 4].flatMap((n) => [`personal-and-social-well-being-term-${n}`, `physical-education-term-${n}`]);
const LSK_TO_CA = [1, 2, 3, 4].map((n) => `creative-arts-term-${n}`);

export interface LegacyRedirect { source: string; destination: string }

const moved = (fromSubject: string, toSubject: string, slugs: string[]): LegacyRedirect[] => [
  { source: fromSubject, destination: toSubject },
  ...slugs.map((slug) => ({ source: `${fromSubject}/${slug}`, destination: `${toSubject}/${slug}` })),
];

export const LEGACY_REDIRECTS: LegacyRedirect[] = [
  // The old subject page goes to Natural Sciences (the first half of the old name); its Technology topics go to /grade-7/technology.
  ...moved('/grade-7/natural-sciences-and-technology', '/grade-7/natural-sciences', NST_TO_NS),
  ...NST_TO_TECH.map((slug) => ({ source: `/grade-7/natural-sciences-and-technology/${slug}`, destination: `/grade-7/technology/${slug}` })),
  ...moved('/grade-7/life-skills', '/grade-7/life-orientation', LSK_TO_LO),
  ...LSK_TO_CA.map((slug) => ({ source: `/grade-7/life-skills/${slug}`, destination: `/grade-7/creative-arts/${slug}` })),
];

/** The shape next.config.ts `redirects()` wants: permanent: true answers 308. */
export function nextRedirects() {
  return LEGACY_REDIRECTS.map((r) => ({ source: r.source, destination: r.destination, permanent: true as const }));
}
