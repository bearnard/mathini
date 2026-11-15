import { test } from 'node:test';
import assert from 'node:assert/strict';
import { attemptInsertPlans } from './attemptPlans';

const baseCols = ['student_id', 'task', 'qkey'];
const baseVals = ['s', 't', 'q'];
const names = (p: ReturnType<typeof attemptInsertPlans>) => p.map(([c]) => c.slice(baseCols.length).join('+') || 'plain');

test('with everything: run first, then each newer column is dropped in turn, ending with the plain row', () => {
  const p = attemptInsertPlans(baseCols, baseVals, { questionVersionId: 7, chosen: 'x', runId: 'r' });
  assert.deepEqual(names(p), ['question_version_id+chosen+run_id', 'question_version_id+chosen', 'question_version_id', 'plain']);
  assert.deepEqual(p[0][1], ['s', 't', 'q', 7, 'x', 'r']);
  assert.deepEqual(p[3], [baseCols, baseVals]);
});

test('without a run the plans are exactly what they were before 0014', () => {
  const p = attemptInsertPlans(baseCols, baseVals, { questionVersionId: 7, chosen: 'x', runId: null });
  assert.deepEqual(names(p), ['question_version_id+chosen', 'question_version_id', 'plain']);
});

test('run only: the run insert, then the plain row', () => {
  const p = attemptInsertPlans(baseCols, baseVals, { questionVersionId: null, chosen: null, runId: 'r' });
  assert.deepEqual(names(p), ['run_id', 'plain']);
});

test('nothing extra: one plain plan', () => {
  assert.deepEqual(attemptInsertPlans(baseCols, baseVals, { questionVersionId: null, chosen: null, runId: null }), [[baseCols, baseVals]]);
});

test('every plan has as many values as columns, and the last is always the plain row', () => {
  for (const q of [null, 3]) for (const c of [null, 'x']) for (const r of [null, 'r']) {
    const p = attemptInsertPlans(baseCols, baseVals, { questionVersionId: q, chosen: c, runId: r });
    for (const [cols, vals] of p) assert.equal(cols.length, vals.length);
    assert.deepEqual(p[p.length - 1], [baseCols, baseVals]);
  }
});
