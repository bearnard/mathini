import { test } from 'node:test';
import assert from 'node:assert/strict';
import { decimalPolicyFor } from './formatPolicy';
import { TASK_INDEX } from './taskIndex.generated';

test('Grade 6 maths tasks REJECT a decimal point (everything there is converted)', () => {
  assert.equal(decimalPolicyFor('gr6-decimal-fractions-t2', 'grade6'), 'reject');
  assert.equal(decimalPolicyFor('gr6-length-t3', 'grade6'), 'reject');
});

test('maths and Mathematical Literacy of the other grades only WARN (their lessons are not converted yet)', () => {
  assert.equal(decimalPolicyFor('gr7-decimal-fractions-t2', 'math'), 'warn');
  assert.equal(decimalPolicyFor('gr10-finance-t1', 'ml'), 'warn');
});

test('IT, CAT, the sciences, accounting, languages and Grade 6 non-maths tasks are NOT checked', () => {
  for (const code of ['it', 'cat', 'ps', 'ls', 'acc', 'econ', 'ems', 'bus', 'tech', 'ns', 'nst', 'his', 'geo', 'eng', 'xho', 'lo', 'lsk', 'ca']) assert.equal(decimalPolicyFor('some-task', code), undefined, code);
  assert.equal(decimalPolicyFor('what-is-democracy', 'grade6'), undefined);
  assert.equal(decimalPolicyFor('current-issues-media', 'grade6'), undefined);
});

test('applied to the real task index: policy per grade is exactly as intended', () => {
  const counts: Record<string, number> = {};
  for (const [task, [code, grade]] of Object.entries(TASK_INDEX)) {
    const p = decimalPolicyFor(task, code);
    if (p === 'reject') assert.equal(grade, 6, `${task}: reject only for Grade 6`);
    if (p) counts[`${p}:${grade}`] = (counts[`${p}:${grade}`] ?? 0) + 1;
  }
  assert.ok((counts['reject:6'] ?? 0) >= 20, 'the Grade 6 maths tasks are covered');
  for (const g of [7, 8, 9, 10, 11, 12]) assert.ok((counts[`warn:${g}`] ?? 0) >= 1, `maths of Grade ${g} is covered (warn)`);
  assert.ok(!Object.keys(counts).some((k) => k.startsWith('reject:') && k !== 'reject:6'));
});
