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

test('with marking (0018): the whole chain carries marked_by and client_correct first, then the same chain without them, so a missing 0018 still stores the answer', () => {
  const p = attemptInsertPlans(baseCols, baseVals, { questionVersionId: 7, chosen: 'x', runId: 'r', marking: { markedBy: 'server', clientCorrect: true } });
  assert.deepEqual(names(p), [
    'marked_by+client_correct+question_version_id+chosen+run_id', 'marked_by+client_correct+question_version_id+chosen', 'marked_by+client_correct+question_version_id', 'marked_by+client_correct',
    'question_version_id+chosen+run_id', 'question_version_id+chosen', 'question_version_id', 'plain',
  ]);
  assert.deepEqual(p[0][1], ['s', 't', 'q', 'server', 1, 7, 'x', 'r']);
  assert.deepEqual(p[3], [[...baseCols, 'marked_by', 'client_correct'], [...baseVals, 'server', 1]], 'even without a question version or run the marking is stored');
  assert.deepEqual(p[p.length - 1], [baseCols, baseVals], 'the last resort is still the plain row');
  for (const [cols, vals] of p) assert.equal(cols.length, vals.length);
});

test('the browser\'s claim is stored as 0 or 1 beside the server\'s verdict', () => {
  const p = attemptInsertPlans(baseCols, baseVals, { questionVersionId: null, chosen: null, runId: null, marking: { markedBy: 'client', clientCorrect: false } });
  assert.deepEqual(p[0], [[...baseCols, 'marked_by', 'client_correct'], [...baseVals, 'client', 0]]);
  assert.deepEqual(p[1], [baseCols, baseVals]);
});
