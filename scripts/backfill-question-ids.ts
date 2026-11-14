/**
 * Registers every item_cache row as a question under its stable id (= its qkey). Run AFTER migration 0008.
 *
 * DEFAULT: reads rows and WRITES SQL FILES only. It changes nothing.
 *   node --import tsx scripts/backfill-question-ids.ts [--source local|remote|file:PATH] [--out DIR] [--persist-to DIR]
 *     --source remote reads PRODUCTION (SELECT only).
 *   --apply                                          run the SQL files against LOCAL D1
 *   --apply --remote --confirm-prod=<database id>    run them against PRODUCTION (the owner runs this, never an agent)
 * Idempotent: every statement is INSERT OR IGNORE / guarded UPDATE, so a second run changes nothing. Rows added to item_cache
 * later are registered lazily by /api/attempts, so this never has to be run again for correctness.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { argValue, chunk, DATABASE_ID, DATABASE_NAME, selectRows, wrangler } from './_wrangler';
import { decideMode } from '../src/lib/server/poolMaintenance';
import { backfillStatements, type PoolRowForIds } from '../src/lib/server/questions/backfill';

const argv = process.argv.slice(2);
const mode = decideMode(argv, DATABASE_ID);
if (mode.kind === 'error') { console.error(`error: ${mode.message}`); process.exit(2); }
const source = argValue(argv, '--source') ?? 'local';
const persistTo = argValue(argv, '--persist-to');
const out = argValue(argv, '--out') ?? fs.mkdtempSync(path.join(os.tmpdir(), 'question-ids-'));
fs.mkdirSync(out, { recursive: true });

const rows = selectRows<PoolRowForIds>('SELECT id, task, prompt, options, answer, explanation, section FROM item_cache ORDER BY id', source, persistTo);
const { statements, registered, skipped } = backfillStatements(rows);
const files = chunk(statements, 1500).map((c, i) => {
  const f = path.join(out, `question-ids-${String(i + 1).padStart(3, '0')}.sql`);
  fs.writeFileSync(f, c.join('\n') + '\n');
  return f;
});
fs.writeFileSync(path.join(out, 'summary.json'), JSON.stringify({ source, itemCacheRows: rows.length, registered, skipped, files: files.length }, null, 2));
console.log(`read ${rows.length} item_cache rows from ${source}; would register ${registered}; skipped ${skipped.length}${skipped.length ? ` (ids ${skipped.slice(0, 20).join(', ')}${skipped.length > 20 ? ', ...' : ''})` : ''}`);
console.log(`wrote ${files.length} SQL file(s) to ${out}`);

if (mode.kind === 'dry-run') {
  console.log('\nDRY RUN: nothing was changed. To apply to local D1: add --apply. Production: the owner runs --apply --remote --confirm-prod=<database id>.');
  process.exit(0);
}
const target = mode.kind === 'remote' ? '--remote' : '--local';
console.log(`\napplying to ${mode.kind.toUpperCase()} D1 (${DATABASE_NAME})...`);
for (const f of files) { wrangler(['d1', 'execute', DATABASE_NAME, target, '--yes', '--file', f], { persistTo }); process.stdout.write('.'); }
console.log('\ndone. Check: SELECT COUNT(*) FROM item_cache c LEFT JOIN questions q ON q.legacy_item_id = c.id WHERE q.id IS NULL;  -- expect only skipped rows');
