import test from 'node:test';
import assert from 'node:assert/strict';
import { writingTimePlan } from './examTime';

test('45 minutes: plan 5, write 30, edit 10, adding back to the total', () => {
  const p = writingTimePlan(45);
  assert.deepEqual(p, { total: 45, plan: 5, write: 30, edit: 10 });
  assert.equal(p.plan + p.write + p.edit, p.total);
});

test('the parts always add up to the total', () => {
  for (const t of [30, 40, 45, 60, 90]) {
    const p = writingTimePlan(t);
    assert.equal(p.plan + p.write + p.edit, t);
  }
});
