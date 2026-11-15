// The real numbers for the landing page, read from a JSON snapshot made at build time by scripts/generate-site-stats.ts. A snapshot (like
// curriculum-content.generated.json) because the code question banks cannot be imported into a server component. The test keeps it honest.
import generated from './site-stats.generated.json';
import type { SiteStats } from '../../../scripts/lib/siteStats';

export const SITE_STATS: SiteStats = generated;

/** 8055 -> "8 055" (South African style: a space between thousands). A plain function so the server and the test agree on the text. */
export const formatCount = (n: number): string => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

/** "Grades 5 to 12". */
export const gradeRangeText = (s: SiteStats = SITE_STATS): string => `Grades ${s.gradeFrom} to ${s.gradeTo}`;

/**
 * A number to show as "1 000+" style would round down and hide the real value, so the page shows the exact count. This is the floor to the
 * nearest hundred for places that want "over 8 000": never larger than the truth.
 */
export const overCount = (n: number): string => `over ${formatCount(Math.floor(n / 100) * 100)}`;
