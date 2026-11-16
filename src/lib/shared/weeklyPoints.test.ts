import test from 'node:test';
import assert from 'node:assert/strict';
import { DAY_MS, MIN_ACTIVE_LEARNERS, WEIGHTS, rankOf, schoolScore, weekStartOf, weeklyPoints, type ScoredAttempt } from './weeklyPoints';

// Monday 2026-11-16 00:00 SAST = Sunday 22:00 UTC
const WEEK = Date.UTC(2026, 10, 15, 22, 0, 0);
const at = (day: number, hour = 10) => WEEK + day * DAY_MS + hour * 3_600_000;
const att = (qkey: string | null, correct: boolean, t: number, inReviewRun = false): ScoredAttempt => ({ qkey, correct, at: t, inReviewRun });
const score = (attempts: ScoredAttempt[], extra: Partial<Parameters<typeof weeklyPoints>[0]> = {}) =>
  weeklyPoints({ weekStart: WEEK, attempts, masteredAt: [], runs: [], priorBest: {}, ...extra });

test('week starts Monday 00:00 SAST', () => {
  assert.equal(weekStartOf(WEEK), WEEK);
  assert.equal(weekStartOf(WEEK + 6 * DAY_MS + 23.9 * 3_600_000), WEEK);
  assert.equal(weekStartOf(WEEK - 1), WEEK - 7 * DAY_MS); // Sunday 23:59:59.999 SAST belongs to the previous week
  assert.equal(weekStartOf(Date.UTC(2026, 10, 16, 0, 0, 0)), WEEK); // Monday 02:00 SAST
});

test('a new correct answer earns full points; wrong answers earn nothing', () => {
  const r = score([att('q1', true, at(0)), att('q2', false, at(0))]);
  assert.equal(r.points, WEIGHTS.newCorrect);
  assert.equal(r.answered, 2);
});

test('repeating a question already right within 7 days earns 0, after 7 days earns again', () => {
  assert.equal(score([att('q1', true, at(0)), att('q1', true, at(0, 11)), att('q1', true, at(2))]).points, WEIGHTS.newCorrect);
  assert.equal(score([att('q1', true, WEEK - 3 * DAY_MS), att('q1', true, at(1))]).points, 0); // right 3 days before the week: repeat
  assert.equal(score([att('q1', true, WEEK - 8 * DAY_MS), att('q1', true, at(1))]).points, WEIGHTS.newCorrect);
});

test('a wrong answer between two right ones does not reset the repeat rule; an answer without a key earns 0', () => {
  assert.equal(score([att('q1', true, at(0)), att('q1', false, at(1)), att('q1', true, at(2))]).points, WEIGHTS.newCorrect);
  assert.equal(score([att(null, true, at(0))]).points, 0);
});

test('a wrong answer first, then right, still counts as new', () => {
  assert.equal(score([att('q1', false, at(0)), att('q1', true, at(0, 11))]).points, WEIGHTS.newCorrect);
});

test('review remembered earns the review bonus once per card and not the answer points', () => {
  const r = score([att('q1', true, at(0), true), att('q1', true, at(1), true), att('q2', true, at(0), true)]);
  assert.equal(r.points, 2 * WEIGHTS.reviewRemembered);
  assert.equal(r.breakdown.review, 2 * WEIGHTS.reviewRemembered);
});

test('the daily cap stops marathon farming but a new day starts fresh', () => {
  const many = Array.from({ length: 40 }, (_, i) => att(`a${i}`, true, at(0, 8) + i * 1000));
  assert.equal(score(many).points, WEIGHTS.dailyCap);
  const two = [...many, ...Array.from({ length: 3 }, (_, i) => att(`b${i}`, true, at(1) + i * 1000))];
  const r = score(two);
  assert.equal(r.points, WEIGHTS.dailyCap + 3 * WEIGHTS.newCorrect);
  assert.equal(r.breakdown.capped, 40 * WEIGHTS.newCorrect - WEIGHTS.dailyCap);
});

test('the SAST day, not the UTC day, decides the cap', () => {
  const lateSunday = Array.from({ length: 11 }, (_, i) => att(`a${i}`, true, WEEK - 3_000_000 + i)); // 23:10 Sunday SAST: previous week
  assert.equal(score(lateSunday).points, 0);
  const mondayEarly = Array.from({ length: 11 }, (_, i) => att(`a${i}`, true, WEEK + 1000 + i)); // 00:00:01 Monday SAST
  assert.equal(score(mondayEarly).points, WEIGHTS.dailyCap);
});

test('mastered topics add the bonus only when first mastered inside the week', () => {
  assert.equal(score([], { masteredAt: [at(2), WEEK - 5, WEEK + 7 * DAY_MS] }).points, WEIGHTS.topicMastered);
});

test('a finished mock beating the previous best earns the bonus; first run, ties and tiny runs do not', () => {
  const run = (scopeKey: string, scorePct: number, day: number, nItems = 20) => ({ scopeKey, scorePct, nItems, finishedAt: at(day) });
  assert.equal(score([], { runs: [run('t3', 70, 1)], priorBest: { t3: 60 } }).points, WEIGHTS.mockBeatBest);
  assert.equal(score([], { runs: [run('t3', 70, 1)], priorBest: {} }).points, 0, 'first attempt has no previous best');
  assert.equal(score([], { runs: [run('t3', 60, 1)], priorBest: { t3: 60 } }).points, 0);
  assert.equal(score([], { runs: [run('t3', 90, 1, 3)], priorBest: { t3: 60 } }).points, 0);
  // two runs in the week: only improvements over the running best count
  assert.equal(score([], { runs: [run('t3', 70, 1), run('t3', 65, 2), run('t3', 80, 3)], priorBest: { t3: 60 } }).points, 2 * WEIGHTS.mockBeatBest);
  assert.equal(score([], { runs: [run('t3', 99, -1)], priorBest: { t3: 60 } }).points, 0, 'a run outside the week is ignored');
});

test('school score needs the minimum number of active learners and is the average', () => {
  assert.equal(schoolScore(400, MIN_ACTIVE_LEARNERS - 1), null);
  assert.equal(schoolScore(105, 5), 21);
  assert.equal(schoolScore(100, 6), 16.7);
});

test('competition ranking gives equal points the same rank', () => {
  assert.deepEqual(rankOf([50, 40, 40, 10], (x) => x), [1, 2, 2, 4]);
});
