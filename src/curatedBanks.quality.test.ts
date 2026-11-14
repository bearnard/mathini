import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { countRejects } from './test-support/curatedQuality';
import { extractCuratedBanks } from './test-support/curatedBanks';

// RATCHET over every curated bank (grades 6-12), using the SAME validator as the insert-time checks (ADR 0003 section 1a).
// The curated banks fail it today (the audit found strong length tells in a third of them), so the rule is: a reject-level count
// may only go DOWN. Fix a question, then run `node --import tsx scripts/curated-quality-baseline.ts` to lock the gain in. Adding a
// question that breaks a rule, or breaking an existing one, fails this test.

const baseline = JSON.parse(fs.readFileSync('src/test-support/curatedBaseline.json', 'utf8')) as { checked: number; counts: Record<string, Record<string, number>> };
const questions = extractCuratedBanks();
const { counts, checked } = countRejects(questions);

test('the extractor finds the curated banks of every grade 6-12', () => {
  const grades = new Set(questions.map((q) => q.grade));
  for (const g of [6, 7, 8, 9, 10, 11, 12]) assert.ok(grades.has(g), `no questions found for grade ${g}`);
  assert.ok(checked > 6000, `${checked} curated MCQs`);
});

for (const scope of ['g6-natural-sciences', 'g6-history-geography', 'other']) {
  test(`curated banks (${scope}): no reject-level count is above its baseline`, () => {
    const now = counts[scope] ?? {};
    const was = baseline.counts[scope] ?? {};
    for (const [code, n] of Object.entries(now)) {
      assert.ok(n <= (was[code] ?? 0), `${scope}: ${code} went from ${was[code] ?? 0} to ${n}. Fix the new question(s), or (if you fixed others) re-run scripts/curated-quality-baseline.ts`);
    }
  });
}

test('Grade 6 Natural Sciences (the bank written to the ADR 0001 rules) has no defect other than a strong length tell', () => {
  const now = counts['g6-natural-sciences'] ?? {};
  for (const code of Object.keys(now)) assert.equal(code, 'length_tell_strong', `unexpected ${code} in the Grade 6 NST bank`);
});

test('the baseline file is not stale-high by more than a few: lower it when you fix questions', () => {
  let slack = 0;
  for (const [scope, was] of Object.entries(baseline.counts)) for (const [code, n] of Object.entries(was)) slack += n - (counts[scope]?.[code] ?? 0);
  assert.ok(slack <= 5, `baseline is ${slack} above reality: run scripts/curated-quality-baseline.ts to ratchet it down`);
});
