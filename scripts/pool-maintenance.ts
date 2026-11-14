/**
 * Purge / top-up planner for the AI question pools (ADR 0003 section 1a).
 *
 * DEFAULT IS A DRY RUN: it prints, per pool, which rows it would delete, how many are left, how many vectors it would delete and how many
 * questions the top-up must then generate. It changes nothing.
 *   node --import tsx scripts/pool-maintenance.ts --triage audit/task-triage.csv --actions purge,fix [--ids audit/hard-error-ids.txt]
 *        [--source local|remote|file:PATH] [--target 50] [--out DIR] [--persist-to DIR]
 *   --source remote reads PRODUCTION (SELECT only). Mutation is separate and explicit:
 *   --apply                                        backup, then delete against LOCAL D1
 *   --apply --remote --confirm-prod=<database id>  the same against PRODUCTION (the owner runs this, never an agent)
 * Order when applying: back up the rows to delete (JSON in --out; aborts if that fails) -> DELETE -> enable the pools in pool_tasks
 * -> delete their Vectorize vectors (remote only; otherwise regenerated questions are rejected as duplicates of deleted ones).
 * The weekly top-up (or GET /api/cron/top-up?secret=...) then refills the pools.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { argValue, chunk, DATABASE_ID, DATABASE_NAME, retiredItemIds, selectRows, VECTORIZE_INDEX, wrangler } from './_wrangler';
import { backupSql, decideMode, parseIds, parseTriageCsv, planMaintenance, sqlForPlan, summarise, type Action, type PoolRowLite } from '../src/lib/server/poolMaintenance';

const argv = process.argv.slice(2);
const mode = decideMode(argv, DATABASE_ID);
if (mode.kind === 'error') { console.error(`error: ${mode.message}`); process.exit(2); }
const triagePath = argValue(argv, '--triage');
const idsPath = argValue(argv, '--ids');
if (!triagePath && !idsPath) { console.error('error: give --triage FILE and/or --ids FILE'); process.exit(2); }
const actions = (argValue(argv, '--actions') ?? 'purge,fix').split(',').map((a) => a.trim()) as Action[];
for (const a of actions) if (!['purge', 'fix'].includes(a)) { console.error(`error: --actions must be purge and/or fix, got "${a}"`); process.exit(2); }
const source = argValue(argv, '--source') ?? 'local';
const persistTo = argValue(argv, '--persist-to');
const target = Number(argValue(argv, '--target') ?? 50);
const out = argValue(argv, '--out') ?? fs.mkdtempSync(path.join(os.tmpdir(), 'pool-maintenance-'));
fs.mkdirSync(out, { recursive: true });

const triage = triagePath ? parseTriageCsv(fs.readFileSync(triagePath, 'utf8')) : [];
const ids = idsPath ? parseIds(fs.readFileSync(idsPath, 'utf8')) : [];
const rows = selectRows<PoolRowLite>('SELECT id, task, vector_id, quality_score FROM item_cache', source, persistTo);
const retiredIds = retiredItemIds(source, persistTo);
const plans = planMaintenance({ triage, actions: triagePath ? actions : [], rows, ids, target, retiredIds });
const sum = summarise(plans);

const pad = (s: string | number, n: number) => String(s).padEnd(n);
console.log(`${pad('pool', 44)}${pad('action', 7)}${pad('rows', 6)}${pad('delete', 7)}${pad('left', 6)}${pad('servable', 9)}${pad('vectors', 8)}generate`);
for (const p of plans) console.log(`${pad(p.task, 44)}${pad(p.action, 7)}${pad(p.rowsBefore, 6)}${pad(p.deleteIds.length, 7)}${pad(p.rowsAfter, 6)}${pad(p.servableAfter, 9)}${pad(p.deleteVectorIds.length, 8)}${p.toGenerate}`);
if (retiredIds.size) console.log(`\n${plans.reduce((n, p) => n + p.skippedRetired, 0)} retired row(s) in these pools are left alone (moderation keeps them; reinstating needs the row)`);
console.log(`\n${sum.pools} pools; ${sum.rowsToDelete} rows and ${sum.vectorsToDelete} vectors to delete; ${sum.emptiedPools} pools emptied; ${sum.toGenerate} questions to regenerate (target ${target} per pool)`);
fs.writeFileSync(path.join(out, 'plan.json'), JSON.stringify({ source, summary: sum, plans }, null, 2));
console.log(`plan written to ${path.join(out, 'plan.json')}`);

if (mode.kind === 'dry-run') {
  console.log('\nDRY RUN: nothing was changed. To apply to local D1: add --apply. Production: the owner runs --apply --remote --confirm-prod=<database id>.');
  process.exit(0);
}

const flag = mode.kind === 'remote' ? '--remote' : '--local';
const allIds = plans.flatMap((p) => p.deleteIds);
console.log(`\napplying to ${mode.kind.toUpperCase()} D1 (${DATABASE_NAME})`);
// 1. back up the rows about to be deleted (abort if it fails)
const backup: unknown[] = [];
for (const sql of backupSql(allIds)) backup.push(...selectRows<unknown>(sql, mode.kind === 'remote' ? 'remote' : 'local', persistTo));
if (backup.length !== allIds.length) { console.error(`backup returned ${backup.length} rows for ${allIds.length} ids: aborting before deleting anything`); process.exit(3); }
const backupFile = path.join(out, `item_cache_backup_${new Date().toISOString().slice(0, 10)}.json`);
fs.writeFileSync(backupFile, JSON.stringify(backup));
console.log(`backed up ${backup.length} rows to ${backupFile}`);
// 2. delete rows, 3. enable the pools for the top-up
const sql = sqlForPlan(plans, Date.now());
sql.deletes.forEach((s, i) => { const f = path.join(out, `delete-${String(i + 1).padStart(3, '0')}.sql`); fs.writeFileSync(f, s + '\n'); wrangler(['d1', 'execute', DATABASE_NAME, flag, '--yes', '--file', f], { persistTo }); process.stdout.write('.'); });
if (sql.poolTasks) { const f = path.join(out, 'pool-tasks.sql'); fs.writeFileSync(f, sql.poolTasks + '\n'); wrangler(['d1', 'execute', DATABASE_NAME, flag, '--yes', '--file', f], { persistTo }); }
console.log(`\ndeleted ${allIds.length} rows; pools enabled in pool_tasks`);
// 4. vectors (production index only; the local simulator has no Vectorize)
const vectorIds = plans.flatMap((p) => p.deleteVectorIds);
if (mode.kind === 'remote') {
  for (const c of chunk(vectorIds, 100)) wrangler(['vectorize', 'delete-vectors', VECTORIZE_INDEX, '--ids', ...c]);
  console.log(`deleted ${vectorIds.length} vectors from ${VECTORIZE_INDEX}`);
} else console.log(`local mode: skipped ${vectorIds.length} vectors (no local Vectorize)`);
console.log('\nnext: let the weekly top-up refill the pools, or trigger it now: GET /api/cron/top-up?secret=<CRON_SECRET> (repeat until pools are full; each run has a budget).');
