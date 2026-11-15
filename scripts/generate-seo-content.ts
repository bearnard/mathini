/**
 * Generates a plain-data (title/description only) snapshot of the curriculum
 * tree for use by server-rendered SEO pages (homepage, subject landing pages,
 * sitemap).
 *
 * The real curriculum index files (src/curriculum/gradeN/index.ts) define
 * each topic's `component` as `lazy(() => import('./SomeTopic'))`. Some of
 * those topic files themselves call `next/dynamic(..., { ssr: false })` at
 * module scope (e.g. PhysicsSim components). Next's Server Component bundler
 * statically walks the whole import graph — including `import()` arguments
 * inside `lazy()`, even though they're never invoked at runtime here — so
 * importing the curriculum modules directly into a server-rendered file
 * fails the build with "`ssr: false` is not allowed ... in Server
 * Components." This script runs in a plain Node/tsx process (outside Next's
 * bundler) to strip out `component` and produce a JSON file with only the
 * fields SEO pages need, which src/lib/seo/curriculumIndex.ts imports
 * instead of the live curriculum modules.
 *
 * Re-run this whenever curriculum titles/descriptions change:
 *   npx tsx scripts/generate-seo-content.ts
 */
import { writeFileSync } from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildSeoContent } from './lib/seoContent';

const output = buildSeoContent();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.resolve(__dirname, '../src/lib/seo/curriculum-content.generated.json');
writeFileSync(outPath, JSON.stringify(output, null, 2) + '\n');
console.log(`Wrote ${outPath} (${output.length} grades)`);
