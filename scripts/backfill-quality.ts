/**
 * Backfill item_cache.quality_score / quality_flags with the validator (migration 0007 must be applied first).
 *
 * DEFAULT: reads rows and WRITES SQL FILES only. It changes nothing.
 *   node --import tsx scripts/backfill-quality.ts [--source local|remote|file:PATH] [--out DIR] [--persist-to DIR]
 *     --source remote reads PRODUCTION (SELECT only). Mutation is separate:
 *   --apply                       run the SQL files against LOCAL D1
 *   --apply --remote --confirm-prod=<database id>   run them against PRODUCTION (the owner runs this, never an agent)
 * Idempotent: every statement is an UPDATE by id, so running it twice is harmless; rows inserted later are scored at insert time.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { argValue, chunk, DATABASE_ID, DATABASE_NAME, selectRows, wrangler } from './_wrangler';
import { decideMode } from '../src/lib/server/poolMaintenance';
import { bandCounts, scoreRows, updateSql, type BackfillRow } from '../src/lib/server/qualityBackfill';

const argv = process.argv.slice(2);
const mode = decideMode(argv, DATABASE_ID);
if (mode.kind === 'error') { console.error(`error: ${mode.message}`); process.exit(2); }
const source = argValue(argv, '--source') ?? 'local';
const persistTo = argValue(argv, '--persist-to');
const out = argValue(argv, '--out') ?? fs.mkdtempSync(path.join(os.tmpdir(), 'quality-backfill-'));
fs.mkdirSync(out, { recursive: true });

const rows = selectRows<BackfillRow>('SELECT id, task, prompt, options, answer, explanation FROM item_cache ORDER BY id', source, persistTo);
const scored = scoreRows(rows);
const bands = bandCounts(scored);
const files = updateSql(scored, 500);
const written = files.map((sql, i) => { const f = path.join(out, `backfill-${String(i + 1).padStart(3, '0')}.sql`); fs.writeFileSync(f, sql + '\n'); return f; });
fs.writeFileSync(path.join(out, 'summary.json'), JSON.stringify({ source, ...bands, files: written.length }, null, 2));

console.log(`read ${rows.length} rows from ${source}`);
console.log(`would score: ${bands.clean} clean (80+), ${bands.warn} warn (1-79), ${bands.rejected} rejected (0, never served)`);
console.log(`wrote ${written.length} SQL file(s) to ${out}`);

if (mode.kind === 'dry-run') {
  console.log('\nDRY RUN: nothing was changed. To apply to local D1: add --apply. Production: the owner runs --apply --remote --confirm-prod=<database id>.');
  process.exit(0);
}
const target = mode.kind === 'remote' ? '--remote' : '--local';
console.log(`\napplying to ${mode.kind.toUpperCase()} D1 (${DATABASE_NAME})...`);
for (const f of written) { wrangler(['d1', 'execute', DATABASE_NAME, target, '--yes', '--file', f], { persistTo }); process.stdout.write('.'); }
console.log('\ndone. Check: SELECT COUNT(*) FROM item_cache WHERE quality_score IS NULL;  -- expect 0 unless rows were added meanwhile');
void chunk;
