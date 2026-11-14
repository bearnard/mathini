import { test } from 'node:test';
import assert from 'node:assert/strict';
import { openPoolDb } from './testD1';
import { backupSql, decideMode, parseIds, parseTriageCsv, planMaintenance, sqlForPlan, summarise, type PoolRowLite } from './poolMaintenance';

const DB = '46f7b6a0-c555-4168-ae45-681dba2ceec2';
const rows: PoolRowLite[] = [
  ...Array.from({ length: 10 }, (_, i) => ({ id: 100 + i, task: 'purge-me', vector_id: `v${100 + i}`, quality_score: 90 })),
  ...Array.from({ length: 6 }, (_, i) => ({ id: 200 + i, task: 'fix-me', vector_id: i % 2 ? `v${200 + i}` : null, quality_score: i < 2 ? 0 : i === 2 ? 60 : null })),
  ...Array.from({ length: 4 }, (_, i) => ({ id: 300 + i, task: 'keep-me', vector_id: null, quality_score: 95 })),
  { id: 400, task: 'ids-only', vector_id: 'v400', quality_score: 90 },
  { id: 401, task: 'ids-only', vector_id: null, quality_score: 90 },
];
const triage = parseTriageCsv('action,task,grade\npurge,purge-me,6\nfix,fix-me,6\nkeep,keep-me,6\n');

test('purge deletes every row and its vectors; the pool needs the full target regenerated', () => {
  const [p] = planMaintenance({ triage, actions: ['purge'], rows });
  assert.equal(p.task, 'purge-me');
  assert.equal(p.deleteIds.length, 10);
  assert.equal(p.deleteVectorIds.length, 10);
  assert.equal(p.rowsAfter, 0);
  assert.equal(p.toGenerate, 50);
});

test('fix deletes rejected rows and named ids only (never clean or unscored ones)', () => {
  const [p] = planMaintenance({ triage, actions: ['fix'], rows, ids: [203] });
  assert.deepEqual(p.deleteIds, [200, 201, 203]);
  assert.deepEqual(p.deleteVectorIds, ['v201', 'v203']);
  assert.equal(p.rowsAfter, 3);
  assert.equal(p.servableAfter, 3, 'score 60, and the unscored rows, still serve');
  assert.equal(p.toGenerate, 47);
});

test('keep pools are never touched; an ids file alone targets exactly those rows, in any pool', () => {
  const plans = planMaintenance({ triage, actions: ['purge', 'fix'], rows, ids: [400] });
  assert.ok(!plans.some((p) => p.task === 'keep-me'));
  const only = planMaintenance({ triage: [], actions: [], rows, ids: [400, 401] });
  assert.equal(only.length, 1);
  assert.equal(only[0].action, 'ids');
  assert.deepEqual(only[0].deleteIds, [400, 401]);
  assert.deepEqual(only[0].deleteVectorIds, ['v400']);
});

test('summary totals', () => {
  const s = summarise(planMaintenance({ triage, actions: ['purge', 'fix'], rows }));
  assert.equal(s.pools, 2);
  assert.equal(s.rowsToDelete, 12);
  assert.equal(s.emptiedPools, 1);
  assert.equal(s.toGenerate, 50 + 46);
});

test('the generated SQL really deletes the planned rows, leaves the rest, and enables the pools for refill', async () => {
  const t = await openPoolDb();
  if (!t) return;
  t.raw.exec('DELETE FROM pool_tasks');
  const ins = t.raw.prepare('INSERT INTO item_cache (id, task, prompt, options, answer, explanation, created_at, vector_id, quality_score) VALUES (?,?,?,?,?,?,1,?,?)');
  for (const r of rows) ins.run(r.id, r.task, `p${r.id}`, '[]', 'a', 'e', r.vector_id, r.quality_score);
  const plans = planMaintenance({ triage, actions: ['purge', 'fix'], rows });
  const sql = sqlForPlan(plans, 123);
  for (const s of sql.deletes) t.raw.exec(s);
  t.raw.exec(sql.poolTasks);
  const left = (t.raw.prepare('SELECT task, COUNT(*) AS n FROM item_cache GROUP BY task ORDER BY task').all() as { task: string; n: number }[]).map((r) => ({ ...r }));
  assert.deepEqual(left, [{ task: 'fix-me', n: 4 }, { task: 'ids-only', n: 2 }, { task: 'keep-me', n: 4 }]);
  const pools = (t.raw.prepare('SELECT task, enabled FROM pool_tasks ORDER BY task').all() as { task: string; enabled: number }[]).map((r) => ({ ...r }));
  assert.deepEqual(pools, [{ task: 'fix-me', enabled: 1 }, { task: 'purge-me', enabled: 1 }]);
  // running the pool_tasks upsert again (or on a disabled pool) re-enables it and does not error
  t.raw.exec("UPDATE pool_tasks SET enabled = 0 WHERE task = 'purge-me'");
  t.raw.exec(sql.poolTasks);
  assert.equal((t.raw.prepare("SELECT enabled FROM pool_tasks WHERE task='purge-me'").get() as { enabled: number }).enabled, 1);
  // backup statements select exactly the doomed rows
  const doomed = plans.flatMap((p) => p.deleteIds);
  assert.equal(backupSql(doomed).length, 1);
  assert.match(backupSql(doomed)[0], /SELECT \* FROM item_cache WHERE id IN \(/);
});

test('SQL chunks stay at 200 ids per statement', () => {
  const big = [{ task: 't', action: 'purge' as const, rowsBefore: 450, deleteIds: Array.from({ length: 450 }, (_, i) => i + 1), deleteVectorIds: [], skippedRetired: 0, rowsAfter: 0, servableAfter: 0, toGenerate: 50 }];
  assert.equal(sqlForPlan(big, 1).deletes.length, 3);
  assert.equal(sqlForPlan([], 1).poolTasks, '');
});

test('SAFETY: dry run by default; local apply; production only with --remote AND the exact --confirm-prod', () => {
  assert.deepEqual(decideMode([], DB), { kind: 'dry-run' });
  assert.deepEqual(decideMode(['--triage', 'x.csv', '--dry-run'], DB), { kind: 'dry-run' });
  assert.deepEqual(decideMode(['--apply'], DB), { kind: 'local' });
  assert.deepEqual(decideMode(['--apply', '--local'], DB), { kind: 'local' });
  assert.equal(decideMode(['--apply', '--remote'], DB).kind, 'error');
  assert.equal(decideMode(['--apply', '--remote', '--confirm-prod=wrong'], DB).kind, 'error');
  assert.deepEqual(decideMode(['--apply', '--remote', `--confirm-prod=${DB}`], DB), { kind: 'remote' });
  // --remote WITHOUT --apply must not silently become a prod action
  assert.equal(decideMode(['--remote'], DB).kind, 'error');
  assert.equal(decideMode(['--confirm-prod=' + DB], DB).kind, 'error');
  assert.equal(decideMode(['--apply', '--local', '--remote'], DB).kind, 'error');
});

test('parsers reject garbage', () => {
  assert.deepEqual(parseIds('1 2\n3'), [1, 2, 3]);
  assert.throws(() => parseIds('1 x'));
  assert.throws(() => parseIds('-5'));
  assert.throws(() => parseTriageCsv('foo,bar\n1,2'));
  assert.throws(() => parseTriageCsv('action,task\nnuke,a'));
});

// ── retired questions (moderation) are never deleted ────────────────────────────────────────────────────────────────────────────

test('retired rows are left alone by purge, fix and ids: moderation keeps them at score 0 and a reinstate needs the row', () => {
  const withRetired: PoolRowLite[] = [...rows, { id: 500, task: 'fix-me', vector_id: 'v500', quality_score: 0 }, { id: 501, task: 'purge-me', vector_id: 'v501', quality_score: 0 }];
  const retiredIds = new Set([500, 501, 400]);
  const plans = planMaintenance({ triage, actions: ['purge', 'fix'], rows: withRetired, ids: [400], retiredIds });
  const by = Object.fromEntries(plans.map((p) => [p.task, p]));
  assert.ok(!by['fix-me'].deleteIds.includes(500), 'a retired rejected row is not "fixed" away');
  assert.equal(by['fix-me'].skippedRetired, 1);
  assert.ok(!by['purge-me'].deleteIds.includes(501), 'purge keeps the retired row');
  assert.equal(by['purge-me'].deleteIds.length, 10);
  assert.equal(by['purge-me'].skippedRetired, 1);
  assert.ok(!by['ids-only'].deleteIds.includes(400), 'a named id that is retired is skipped');
  const sql = sqlForPlan(plans, 1).deletes.join('\n');
  assert.ok(!/\b(500|501)\b/.test(sql));
  // no retired set: unchanged behaviour
  const plain = planMaintenance({ triage, actions: ['fix'], rows: withRetired });
  assert.ok(plain.find((p) => p.task === 'fix-me')!.deleteIds.includes(500));
});
