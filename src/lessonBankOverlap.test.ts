import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { THRESHOLD, bestOverlap, findOverlaps, overlapKey, tokens } from './test-support/lessonBankOverlap';

// A lesson must TEACH the idea a practice question tests, not print the question. If a lesson contains a bank prompt (or nearly all of it),
// practice measures recall of one sentence instead of understanding. The check: a Grade 6-9 bank prompt of 6 or more words is "repeated" when
// 80% or more of its tokens appear, in order, in one sentence (or two neighbouring sentences) of the lesson text in the same topic folder.
//
// RATCHET. When the check was added, 381 prompts in 157 lessons already failed it (most are "Check yourself" questions or worked examples
// that reuse a bank item). They are listed in src/test-support/lessonBankOverlapBaseline.json and must be rewritten with a different example;
// the list may only shrink (node --import tsx scripts/lesson-bank-overlap-baseline.ts). A NEW lesson sentence that repeats a prompt fails here.

test('bestOverlap: a copied prompt scores 1, an unrelated sentence low, a reworded one below the threshold', () => {
  const p = tokens('What may happen if a producer disappears from a food chain?');
  assert.equal(bestOverlap(p, ['What may happen if a producer disappears from a food chain?']), 1);
  assert.ok(bestOverlap(p, ['Question: what may happen if a producer disappears from a food chain']) >= THRESHOLD);
  assert.ok(bestOverlap(p, ['Plants are producers. They make food from sunlight, and animals eat them.']) < 0.5);
  assert.ok(bestOverlap(p, ['Taking away the plants in a chain leaves the animals that eat them with less food.']) < THRESHOLD);
  // the same common words in another order do not count as a copy
  assert.ok(bestOverlap(tokens('Why is a food chain important?'), ['An important food chain: why a chain, a food web?']) < THRESHOLD);
});

const baseline = JSON.parse(fs.readFileSync('src/test-support/lessonBankOverlapBaseline.json', 'utf8')) as { repeated: string[] };
const now = findOverlaps();

test('no lesson repeats a bank prompt that was not already on the baseline', () => {
  const known = new Set(baseline.repeated);
  const fresh = now.map(overlapKey).filter((k) => !known.has(k));
  assert.deepEqual(fresh, [], 'a lesson sentence repeats a practice question: teach the idea with a different example instead');
});

test('the baseline only shrinks: prompts no longer repeated are removed from it', () => {
  const nowKeys = new Set(now.map(overlapKey));
  const stale = baseline.repeated.filter((k) => !nowKeys.has(k));
  assert.deepEqual(stale, [], 'these prompts are no longer repeated: re-run scripts/lesson-bank-overlap-baseline.ts to shrink the baseline');
});
