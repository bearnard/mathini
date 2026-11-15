import { test } from 'node:test';
import assert from 'node:assert/strict';
import { findGaps } from '../scripts/g10-12-coverage';

// RATCHET: a Grade 10-12 bank answer should be answerable from its lesson (the key words of the answer appear in the lesson text).
// The 2026-11 review found many that were not; the gaps were closed by adding a slide to the lessons. The count of answers with
// THREE or more missing key words may only go down. See audit/g10-12-coverage.md and scripts/g10-12-coverage.ts.
const MAX_STRONG_3 = 206;

test('Grade 10-12 bank answers: no new answer is missing three or more key words from its lesson', () => {
  const { gaps, checked } = findGaps();
  assert.ok(checked > 3000, `${checked} answers checked`);
  const strong3 = gaps.filter((g) => g.strong.length >= 3);
  assert.ok(strong3.length <= MAX_STRONG_3, `${strong3.length} answers are missing 3+ key words (limit ${MAX_STRONG_3}), e.g. ${strong3.slice(0, 3).map((g) => `${g.file}: ${g.answer}`).join(' | ')}`);
});
