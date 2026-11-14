/**
 * Backfill item_cache.quality_score / quality_flags with the validator (migration 0007 must be applied first).
 *
 * DEFAULT: reads rows and WRITES SQL FILES only. It changes nothing.
 *   node --import tsx scripts/backfill-quality.ts [--source local|remote|file:PATH] [--out DIR] [--persist-to DIR]
 *     --source remote reads PRODUCTION (SELECT only). Mutation is separate:
 *   --apply                       run the SQL files against LOCAL D1
 *   --apply --remote --confirm-prod=<database id>   run them against PRODUCTION (the owner runs this, never an agent)
 *   --only decimal-point   TARGETED: UPDATEs only for rows that contain a decimal point in a maths-type task the decimal-comma rule covers
 *                          (Grade 6 maths = reject, maths/ML of Grades 7-12 = warn) and whose score changes; prints counts per grade first.
 * RETIRED questions (questions.status = 'retired', via questions.legacy_item_id) are never rescored: moderation keeps their score at 0.
 * Idempotent: every statement is an UPDATE by id, so running it twice is harmless; rows inserted later are scored at insert time.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { argValue, chunk, DATABASE_ID, DATABASE_NAME, retiredItemIds, selectRows, wrangler } from './_wrangler';
import { decideMode } from '../src/lib/server/poolMaintenance';
import { bandCounts, scoreRows, targetedDecimalUpdates, updateSql, type StoredRow } from '../src/lib/server/qualityBackfill';

const argv = process.argv.slice(2);
const mode = decideMode(argv, DATABASE_ID);
if (mode.kind === 'error') { console.error(`error: ${mode.message}`); process.exit(2); }
const source = argValue(argv, '--source') ?? 'local';
const persistTo = argValue(argv, '--persist-to');
const out = argValue(argv, '--out') ?? fs.mkdtempSync(path.join(os.tmpdir(), 'quality-backfill-'));
fs.mkdirSync(out, { recursive: true });

const only = argValue(argv, '--only');
if (only && only !== 'decimal-point') { console.error(`error: --only must be "decimal-point", got "${only}"`); process.exit(2); }
// quality_score is read when the source has it (production/local D1); an exported file without it falls back to the pre-rule score.
const rows = selectRows<StoredRow>(source.startsWith('file:') ? 'SELECT id, task, prompt, options, answer, explanation FROM item_cache ORDER BY id' : 'SELECT id, task, prompt, options, answer, explanation, quality_score FROM item_cache ORDER BY id', source, persistTo);
const retiredIds = retiredItemIds(source, persistTo);
if (retiredIds.size) console.log(`skipping ${retiredIds.size} retired question(s): their quality_score stays 0 (moderation)`);
let scored = scoreRows(rows, { retiredIds });
let bands = bandCounts(scored);
if (only === 'decimal-point') {
  const { updates, report } = targetedDecimalUpdates(rows, retiredIds);
  console.log('\nDECIMAL-COMMA RULE: rows with a decimal point in a covered maths task');
  console.log('grade  policy   rows  score changes  (before -> after)');
  for (const g of report) console.log(`${String(g.grade).padEnd(6)} ${g.policy.padEnd(7)} ${String(g.affected).padStart(5)} ${String(g.changed).padStart(8)}      ${Object.entries(g.transitions).map(([k, v]) => `${v} ${k}`).join('; ') || 'none'}`);
  const top = report.flatMap((g) => Object.entries(g.tasks).map(([t, n]) => [t, n, g.grade] as const)).sort((a, b) => b[1] - a[1]).slice(0, 10);
  console.log(`top pools: ${top.map(([t, n, g]) => `${t} (Gr ${g}) ${n}`).join(', ')}`);
  console.log(`${updates.length} UPDATE(s) would be written (all other rows are untouched)`);
  scored = updates;
  bands = bandCounts(updates);
}
const files = updateSql(scored, 500);
const written = files.map((sql, i) => { const f = path.join(out, `backfill-${String(i + 1).padStart(3, '0')}.sql`); fs.writeFileSync(f, sql + '\n'); return f; });
fs.writeFileSync(path.join(out, 'summary.json'), JSON.stringify({ source, ...bands, files: written.length }, null, 2));

console.log(`read ${rows.length} rows from ${source}`);
console.log(`${only ? 'would write' : 'would score'}: ${bands.clean} clean (80+), ${bands.warn} warn (1-79), ${bands.rejected} rejected (0, never served)`);
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
