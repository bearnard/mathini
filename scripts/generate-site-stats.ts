/**
 * Writes src/lib/seo/site-stats.generated.json: the real numbers for the landing page (grades, subjects, topics, curated questions), computed from
 * the curriculum registry and the code question banks. No database. Re-run when topics or banks change (the test in src/lib/seo/siteStats.test.ts
 * fails until you do):
 *   node --import tsx scripts/generate-site-stats.ts
 */
import { writeFileSync } from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildSiteStats } from './lib/siteStats';

const stats = buildSiteStats();
const out = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/lib/seo/site-stats.generated.json');
writeFileSync(out, JSON.stringify(stats, null, 2) + '\n');
console.log(`Wrote ${out}: ${JSON.stringify(stats)}`);
