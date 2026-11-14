import { test } from 'node:test';
import assert from 'node:assert/strict';
import { nextReviewState, sastDay, type ReviewState } from './scheduler';

// SAST = UTC+2. Build instants from SAST wall-clock time.
const sast = (y: number, mo: number, d: number, h = 12, mi = 0) => Date.UTC(y, mo - 1, d, h - 2, mi);
const at = (ms: number) => sastDay(ms);

test('sastDay rolls over at SAST midnight, not UTC midnight', () => {
  assert.equal(at(sast(2026, 11, 14, 0, 0)), at(sast(2026, 11, 14, 23, 59)));
  assert.equal(at(sast(2026, 11, 14, 23, 59)) + 1, at(sast(2026, 11, 15, 0, 0)));
  // 22:30 UTC on the 14th is already 00:30 SAST on the 15th
  assert.equal(sastDay(Date.UTC(2026, 10, 14, 22, 30)), at(sast(2026, 11, 15, 0, 30)));
  // 21:59 UTC on the 14th is still 23:59 SAST on the 14th
  assert.equal(sastDay(Date.UTC(2026, 10, 14, 21, 59)), at(sast(2026, 11, 14, 23, 59)));
});

test('a miss schedules tomorrow (SAST calendar day), even at 23:30', () => {
  const s = nextReviewState(null, false, sast(2026, 11, 14, 23, 30))!;
  assert.equal(s.dueDay, at(sast(2026, 11, 15, 0, 0)));
  assert.deepEqual({ box: s.box, streak: s.streakCorrect, retired: s.retired }, { box: 1, streak: 0, retired: false });
});

test('a correct answer on a question that was never missed stores nothing', () => {
  assert.equal(nextReviewState(null, true, sast(2026, 11, 14)), null);
});

test('full path: miss, then 1 / 3 / 7 day reviews, retired after 3 correct in a row', () => {
  let s = nextReviewState(null, false, sast(2026, 11, 14, 15))!;
  assert.equal(s.dueDay, at(sast(2026, 11, 15)));
  s = nextReviewState(s, true, sast(2026, 11, 15, 8))!; // box 1 -> 2, +3 days
  assert.deepEqual([s.box, s.streakCorrect, s.dueDay], [2, 1, at(sast(2026, 11, 18))]);
  s = nextReviewState(s, true, sast(2026, 11, 18, 8))!; // box 2 -> 3, +7 days
  assert.deepEqual([s.box, s.streakCorrect, s.dueDay], [3, 2, at(sast(2026, 11, 25))]);
  s = nextReviewState(s, true, sast(2026, 11, 25, 8))!; // retires
  assert.equal(s.retired, true);
  assert.equal(s.streakCorrect, 3);
});

test('a wrong review goes back to box 1, due tomorrow, streak 0', () => {
  const prev: ReviewState = { box: 3, dueDay: at(sast(2026, 11, 25)), streakCorrect: 2, retired: false };
  const s = nextReviewState(prev, false, sast(2026, 11, 25, 9))!;
  assert.deepEqual([s.box, s.streakCorrect, s.dueDay, s.retired], [1, 0, at(sast(2026, 11, 26)), false]);
});

test('correct BEFORE the due day is not a review (no cramming credit)', () => {
  const prev: ReviewState = { box: 1, dueDay: at(sast(2026, 11, 15)), streakCorrect: 0, retired: false };
  assert.equal(nextReviewState(prev, true, sast(2026, 11, 14, 23, 59)), prev);
});

test('due at 00:00 SAST counts as due; 23:59 the night before does not', () => {
  const prev: ReviewState = { box: 1, dueDay: at(sast(2026, 11, 15)), streakCorrect: 0, retired: false };
  assert.equal(nextReviewState(prev, true, sast(2026, 11, 15, 0, 0))!.box, 2);
  assert.equal(nextReviewState(prev, true, sast(2026, 11, 14, 23, 59)), prev);
});

test('a late review (days overdue) still counts and the next gap runs from the review day', () => {
  const prev: ReviewState = { box: 1, dueDay: at(sast(2026, 11, 15)), streakCorrect: 0, retired: false };
  const s = nextReviewState(prev, true, sast(2026, 11, 20, 10))!;
  assert.deepEqual([s.box, s.dueDay], [2, at(sast(2026, 11, 23))]);
});

test('retired questions stay retired when right, and come back when missed again', () => {
  const retired: ReviewState = { box: 3, dueDay: 0, streakCorrect: 3, retired: true };
  assert.equal(nextReviewState(retired, true, sast(2026, 11, 14)), retired);
  const s = nextReviewState(retired, false, sast(2026, 11, 14, 10))!;
  assert.deepEqual([s.retired, s.box, s.dueDay], [false, 1, at(sast(2026, 11, 15))]);
});

test('month and year boundaries (Dec 31 23:30 SAST, Feb 28 in a non-leap year)', () => {
  const s = nextReviewState(null, false, sast(2026, 12, 31, 23, 30))!;
  assert.equal(s.dueDay, at(sast(2027, 1, 1)));
  const t = nextReviewState({ box: 1, dueDay: at(sast(2027, 2, 28)), streakCorrect: 0, retired: false }, true, sast(2027, 2, 28, 7))!;
  assert.equal(t.dueDay, at(sast(2027, 3, 3)));
});
