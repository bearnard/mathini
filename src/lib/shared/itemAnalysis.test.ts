import { test } from 'node:test';
import assert from 'node:assert/strict';
import { difficultyAndDiscriminationFlags, distractorFlag, pointBiserial, pValue, type VersionAggregate } from './itemAnalysis';

const agg = (over: Partial<VersionAggregate>): VersionAggregate => ({ n: 40, k: 20, nx: 40, kx: 20, sumX: 0, sumXX: 0, sumX1: 0, ...over });

// Two-point example: 10 right answers from learners at 0.8, 20 wrong from learners at 0.4 (30 answers).
const twoPoint = (hi: number, lo: number, right: number, wrong: number): VersionAggregate => {
  const n = right + wrong;
  return { n, k: right, nx: n, kx: right, sumX: right * hi + wrong * lo, sumXX: right * hi * hi + wrong * lo * lo, sumX1: right * hi };
};

test('p-value is the share right, null with no answers', () => {
  assert.equal(pValue({ n: 40, k: 10 }), 0.25);
  assert.equal(pValue({ n: 0, k: 0 }), null);
});

test('point-biserial: right answers from stronger learners give +1, from weaker learners -1 (two-point data)', () => {
  assert.ok(Math.abs(pointBiserial(twoPoint(0.8, 0.4, 10, 20))! - 1) < 1e-9);
  assert.ok(Math.abs(pointBiserial(twoPoint(0.4, 0.8, 10, 20))! + 1) < 1e-9);
});

test('point-biserial is null when it cannot be computed: too few answers, everyone right or wrong, no spread', () => {
  assert.equal(pointBiserial(twoPoint(0.8, 0.4, 5, 20)), null, 'under 30');
  assert.equal(pointBiserial(twoPoint(0.8, 0.4, 0, 40)), null, 'nobody right');
  assert.equal(pointBiserial(twoPoint(0.8, 0.4, 40, 0)), null, 'everybody right');
  assert.equal(pointBiserial(twoPoint(0.6, 0.6, 20, 20)), null, 'everyone has the same ability');
});

test('nothing is flagged below 30 answers; thresholds are strict (0.95 and 0.20 themselves are fine)', () => {
  assert.deepEqual(difficultyAndDiscriminationFlags(agg({ n: 29, k: 29, nx: 0, kx: 0 })), []);
  assert.deepEqual(difficultyAndDiscriminationFlags(agg({ n: 100, k: 95, nx: 0, kx: 0 })), []);
  assert.deepEqual(difficultyAndDiscriminationFlags(agg({ n: 100, k: 20, nx: 0, kx: 0 })), []);
  assert.deepEqual(difficultyAndDiscriminationFlags(agg({ n: 100, k: 96, nx: 0, kx: 0 })).map((f) => f.kind), ['too_easy']);
  assert.deepEqual(difficultyAndDiscriminationFlags(agg({ n: 100, k: 19, nx: 0, kx: 0 })).map((f) => f.kind), ['too_hard']);
});

test('negative discrimination is flagged, positive is not', () => {
  const bad = difficultyAndDiscriminationFlags({ ...twoPoint(0.4, 0.8, 15, 15) });
  assert.deepEqual(bad.map((f) => f.kind), ['negative_discrimination']);
  assert.ok(bad[0].value < 0);
  assert.deepEqual(difficultyAndDiscriminationFlags(twoPoint(0.8, 0.4, 15, 15)), []);
});

test('distractor: flagged only when a wrong option beats the key, with 30 or more recorded choices', () => {
  assert.equal(distractorFlag('A', { A: 10, B: 10, C: 5 }), null, 'under 30 choices');
  assert.equal(distractorFlag('A', { A: 20, B: 15, C: 5 }), null, 'key is the most picked');
  assert.equal(distractorFlag('A', { A: 15, B: 15, C: 10 }), null, 'a tie is not enough');
  const f = distractorFlag('A', { A: 10, B: 25, C: 5 })!;
  assert.equal(f.kind, 'distractor');
  assert.equal(f.n, 40);
  assert.equal(f.value, 0.625);
  assert.deepEqual(f.detail, { option: 'B', picks: 25, keyPicks: 10 });
  assert.equal(distractorFlag('A', { B: 20, C: 15 })!.detail?.keyPicks, 0, 'nobody picked the key');
});
