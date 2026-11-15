import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { countDecimalPoints, countRejects } from './test-support/curatedQuality';
import { extractCuratedBanks } from './test-support/curatedBanks';

// RATCHET over every curated bank (grades 6-12), using the SAME validator as the insert-time checks (ADR 0003 section 1a).
// The curated banks fail it today (the audit found strong length tells in a third of them), so the rule is: a reject-level count
// may only go DOWN. Fix a question, then run `node --import tsx scripts/curated-quality-baseline.ts` to lock the gain in. Adding a
// question that breaks a rule, or breaking an existing one, fails this test.

const baseline = JSON.parse(fs.readFileSync('src/test-support/curatedBaseline.json', 'utf8')) as { checked: number; counts: Record<string, Record<string, number>>; decimalPoints?: Record<string, number> };
const questions = extractCuratedBanks();
const { counts, checked } = countRejects(questions);

test('the extractor finds the curated banks of every grade 6-12', () => {
  const grades = new Set(questions.map((q) => q.grade));
  for (const g of [6, 7, 8, 9, 10, 11, 12]) assert.ok(grades.has(g), `no questions found for grade ${g}`);
  assert.ok(checked > 6000, `${checked} curated MCQs`);
});

test('the extractor also reads the {question, options, answer:<index>} banks of Grade 12 (answer resolved to the option text)', () => {
  const g12 = questions.filter((q) => q.grade === 12);
  assert.ok(g12.length > 1500, `${g12.length} Grade 12 questions`);
  const fromIndex = g12.filter((q) => q.file.includes('/') && !q.options.includes('') && q.options.includes(q.answer));
  assert.equal(fromIndex.length, g12.length, 'every extracted answer is one of its options');
  assert.ok(g12.some((q) => q.subject === 'economics') && g12.some((q) => q.subject === 'isixhosa'), 'Economics and isiXhosa are covered');
});

for (const scope of ['g6-natural-sciences', 'g6-history-geography', 'g6-other', 'g7', 'g8', 'g9', 'g10', 'g11', 'g12', 'other']) {
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

// Grade 12 was brought under the validator in 2026-11 (its {question, answer:index} banks) and repaired to zero in the same change.
const HELD_AT_ZERO = ['g6-natural-sciences', 'g6-history-geography', 'g6-other', 'g9', 'g11', 'g8', 'g7', 'g10', 'g12'];
// Rejects that cannot be fixed without editing a prompt (listed in docs/notes/question-quality.md). They may not grow.
const NEEDS_PROMPT_CHANGE: Record<string, Record<string, number>> = { g8: { near_duplicate: 2 }, 'g6-other': { near_duplicate: 5 } };
for (const scope of HELD_AT_ZERO) {
  test(`curated banks (${scope}) have no reject-level defect at all`, () => {
    assert.deepEqual(counts[scope] ?? {}, NEEDS_PROMPT_CHANGE[scope] ?? {});
  });
}

test('the baseline file is not stale-high by more than a few: lower it when you fix questions', () => {
  let slack = 0;
  for (const [scope, was] of Object.entries(baseline.counts)) for (const [code, n] of Object.entries(was)) slack += n - (counts[scope]?.[code] ?? 0);
  assert.ok(slack <= 5, `baseline is ${slack} above reality: run scripts/curated-quality-baseline.ts to ratchet it down`);
});

// RATCHET: curated Maths, Maths Literacy and Physical Sciences questions that still show a decimal POINT (CAPS writes the comma).
// The count per grade may only go DOWN; after converting more questions run scripts/curated-quality-baseline.ts.
const decimalNow = countDecimalPoints(questions);
for (const g of [7, 8, 9, 10, 11, 12]) {
  test(`curated banks (g${g}): decimal-point questions are not above the baseline`, () => {
    const now = decimalNow[`g${g}`] ?? 0;
    const was = baseline.decimalPoints?.[`g${g}`] ?? 0;
    assert.ok(now <= was, `g${g}: questions with a decimal point went from ${was} to ${now}. Write decimals with a comma, or (if you converted others) re-run scripts/curated-quality-baseline.ts`);
  });
}
