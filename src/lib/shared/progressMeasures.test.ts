import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  accuracyPct, consistency, distinctDays, examReadiness, improvementPoints, masteryLevel, nextBestStep, recencyWeights, retentionPct, round1, sastDayNumber,
  sortWeakestFirst, subjectMastery, topicMeasure, trendPoints, weightedAccuracyPct, type AttemptPoint, type TrendAttempt,
} from './progressMeasures';

const D = 86_400_000;
const T0 = Date.UTC(2026, 10, 10, 6, 0, 0); // 08:00 SAST on a Tuesday
const pts = (bits: string, start = T0, stepMs = 60_000): AttemptPoint[] => [...bits].map((b, i) => ({ correct: b === '1', at: start + i * stepMs }));

test('round1 and accuracyPct', () => {
  assert.equal(round1(66.666), 66.7);
  assert.equal(accuracyPct([true, false, true]), 66.7);
  assert.equal(accuracyPct([]), null);
});

test('recencyWeights: linear from 1 to 2, a single answer weighs 1, none gives none', () => {
  assert.deepEqual(recencyWeights(0), []);
  assert.deepEqual(recencyWeights(1), [1]);
  assert.deepEqual(recencyWeights(3), [1, 1.5, 2]);
});

test('weightedAccuracyPct: recent answers count more than old ones', () => {
  assert.equal(weightedAccuracyPct([]), null);
  assert.equal(weightedAccuracyPct([true, true, true]), 100);
  const improving = weightedAccuracyPct([false, false, true, true]) as number;
  const worsening = weightedAccuracyPct([true, true, false, false]) as number;
  assert.ok(improving > 50 && worsening < 50, `${improving} / ${worsening}`);
  assert.equal(improving + worsening, 100); // mirror images
  assert.equal(weightedAccuracyPct([false, true]), 66.7); // weights 1 and 2
});

test('masteryLevel: the four levels and the thresholds', () => {
  const lv = (attempts: number, acc: number | null, windowN: number, days: number) => masteryLevel({ attempts, accuracyPct: acc, windowN, days });
  assert.equal(lv(0, null, 0, 0), 'not_started');
  assert.equal(lv(5, 49.9, 5, 1), 'learning');
  assert.equal(lv(5, 50, 5, 1), 'getting_there');
  assert.equal(lv(15, 79.9, 15, 3), 'getting_there');
  assert.equal(lv(15, 80, 15, 2), 'mastered');
  assert.equal(lv(9, 95, 9, 3), 'getting_there', 'fewer than 10 attempts');
  assert.equal(lv(30, 95, 20, 1), 'getting_there', 'all on one day');
  assert.equal(lv(10, 80, 10, 2), 'mastered');
});

test('distinctDays counts SAST days: 23:30 and 00:30 SAST are different days, 00:10 and 23:50 SAST the same', () => {
  const d = Date.UTC(2026, 10, 10, 0, 0, 0) - 2 * 3600_000; // 00:00 SAST on 10 Nov
  assert.equal(distinctDays([d + 10 * 60_000, d + 23 * 3600_000 + 50 * 60_000]), 1);
  assert.equal(distinctDays([d - 30 * 60_000, d + 30 * 60_000]), 2);
  assert.equal(sastDayNumber(d), sastDayNumber(d + D - 1));
});

test('improvementPoints: null until 20 attempts, then latest 10 minus first 10, one decimal', () => {
  assert.equal(improvementPoints(19, 40, 80), null);
  assert.equal(improvementPoints(20, 40, 80), 40);
  assert.equal(improvementPoints(25, 60, 55.5), -4.5);
  assert.equal(improvementPoints(30, null, 80), null);
});

test('topicMeasure: a learner who struggled early and is fine now reads as fine (only the window counts)', () => {
  const first = pts('0000000000');
  const window = pts('11111111111111111111', T0 + 20 * D, 6 * 3600_000); // spread over 5 days
  const m = topicMeasure({ window, first, total: 50, totalCorrect: 30, firstAt: T0, lastAt: T0 + 20 * D });
  assert.deepEqual([m.last20N, m.last20Pct, m.first10Pct, m.last10Pct, m.level, m.attempts, m.correct], [20, 100, 0, 100, 'mastered', 50, 30]);
});

test('topicMeasure: a new topic with a few attempts is Learning or Getting there, never Mastered', () => {
  const w = pts('11111');
  const m = topicMeasure({ window: w, first: w, total: 5, totalCorrect: 5, firstAt: T0, lastAt: T0 + 5 });
  assert.equal(m.level, 'getting_there');
  assert.equal(m.daysPractised, 1);
});

test('topicMeasure: the window never holds more than 20 attempts and keeps the newest', () => {
  const w = pts('0'.repeat(10) + '1'.repeat(20));
  const m = topicMeasure({ window: w, first: pts('0'.repeat(10)), total: 30, totalCorrect: 20, firstAt: T0, lastAt: T0 });
  assert.equal(m.last20N, 20);
  assert.equal(m.last20Pct, 100);
});

test('trendPoints: one point per session (run), at most 6, oldest first; fewer than 2 sessions is empty', () => {
  const att = (run: string | null, bits: string, day = 0): TrendAttempt[] => [...bits].map((b, i) => ({ correct: b === '1', at: T0 + day * D + i * 1000, runId: run }));
  assert.deepEqual(trendPoints([]), []);
  assert.deepEqual(trendPoints(att('r1', '1111')), []);
  const two = trendPoints([...att('r1', '0000'), ...att('r2', '1111', 1)]);
  assert.equal(two.length, 2);
  assert.equal(two[0], 0);
  assert.ok(two[1] > 0 && two[1] < 100, 'the window still holds the old misses');
  const many = trendPoints(Array.from({ length: 9 }, (_, i) => att(`r${i}`, '1', i)).flat());
  assert.equal(many.length, 6);
  const loose = trendPoints([...att(null, '01', 0), ...att(null, '11', 1)]); // outside runs: one session per day
  assert.equal(loose.length, 2);
});

test('sortWeakestFirst: lowest accuracy first, NOT STARTED topics last, stable by label', () => {
  const t = (label: string, level: 'learning' | 'getting_there' | 'mastered' | 'not_started', accuracyPct: number | null) => ({ label, level, accuracyPct });
  const sorted = sortWeakestFirst([t('Z new', 'not_started', null), t('B', 'mastered', 90), t('A', 'learning', 40), t('C', 'getting_there', 40), t('Y new', 'not_started', null)]);
  assert.deepEqual(sorted.map((x) => x.label), ['A', 'C', 'B', 'Y new', 'Z new']);
  assert.deepEqual(sortWeakestFirst([]), []);
});

test('subjectMastery: mean of the practised topics, ignoring those not started; null when none', () => {
  assert.deepEqual(subjectMastery([]), { masteryPct: null, level: 'not_started' });
  assert.deepEqual(subjectMastery([{ level: 'not_started', accuracyPct: null, attempts: 0 }]), { masteryPct: null, level: 'not_started' });
  const m = subjectMastery([{ level: 'mastered', accuracyPct: 90, attempts: 20 }, { level: 'learning', accuracyPct: 40, attempts: 8 }, { level: 'not_started', accuracyPct: null, attempts: 0 }]);
  assert.deepEqual(m, { masteryPct: 65, level: 'getting_there' });
  assert.equal(subjectMastery([{ level: 'mastered', accuracyPct: 88, attempts: 20 }, { level: 'mastered', accuracyPct: 92, attempts: 20 }]).level, 'mastered');
  assert.equal(subjectMastery([{ level: 'learning', accuracyPct: 30, attempts: 5 }]).level, 'learning');
});

test('examReadiness: untried topics count as 0 in mastery; a mock changes the weights; null with nothing to go on', () => {
  const none = examReadiness({ scopeKey: 'k', label: 'L', topics: [{ accuracyPct: null }, { accuracyPct: null }], latestMock: null });
  assert.deepEqual([none.readinessPct, none.masteryPct, none.practisedPct, none.topicsTotal, none.topicsPractised], [null, 0, 0, 2, 0]);
  const noMock = examReadiness({ scopeKey: 'k', label: 'L', topics: [{ accuracyPct: 80 }, { accuracyPct: null }, { accuracyPct: 60 }, { accuracyPct: 60 }], latestMock: null });
  assert.deepEqual([noMock.masteryPct, noMock.practisedPct, noMock.readinessPct], [50, 75, 56.3]); // 0.75*50 + 0.25*75
  const mock = { scorePct: 70, finishedAt: '2026-11-12T10:00:00.000Z' };
  const withMock = examReadiness({ scopeKey: 'k', label: 'L', topics: [{ accuracyPct: 80 }, { accuracyPct: null }, { accuracyPct: 60 }, { accuracyPct: 60 }], latestMock: mock });
  assert.equal(withMock.readinessPct, 60.8); // 0.5*50 + 0.35*70 + 0.15*75 = 60.75
  assert.equal(withMock.latestMock, mock);
  assert.equal(examReadiness({ scopeKey: 'k', label: 'L', topics: [{ accuracyPct: null }], latestMock: mock }).readinessPct, 24.5); // a mock alone still gives a number
  assert.deepEqual([examReadiness({ scopeKey: 'k', label: 'L', topics: [], latestMock: null }).readinessPct, examReadiness({ scopeKey: 'k', label: 'L', topics: [], latestMock: null }).masteryPct], [null, null]);
});

test('consistency: days practised in the last 14 and the streak (which survives a morning with nothing done yet)', () => {
  const today = 20000;
  assert.deepEqual(consistency([], today), { daysPractisedLast14: 0, streakDays: 0 });
  assert.deepEqual(consistency([today, today - 1, today - 2, today - 5], today), { daysPractisedLast14: 4, streakDays: 3 });
  assert.deepEqual(consistency([today - 1, today - 2], today), { daysPractisedLast14: 2, streakDays: 2 }, 'today not done yet: the streak is still alive');
  assert.deepEqual(consistency([today - 2, today - 3], today), { daysPractisedLast14: 2, streakDays: 0 }, 'a missed yesterday ends it');
  assert.deepEqual(consistency([today - 14, today - 13, today], today), { daysPractisedLast14: 2, streakDays: 1 }, '14 days ago is outside the window');
});

test('retentionPct', () => {
  assert.equal(retentionPct(34, 40), 85);
  assert.equal(retentionPct(0, 0), null);
  assert.equal(retentionPct(9, 3), 100, 'never above 100');
});

test('nextBestStep: due reviews first, then the weakest practised topic in the exam, then an untried topic, then all caught up', () => {
  const base = { reviewHref: '/app', appHref: '/app' };
  const weak = { label: 'Electric circuits', href: '/app' };
  const untried = { label: 'Solar system', href: '/app' };
  assert.deepEqual(nextBestStep({ ...base, dueCount: 1, weakestInScope: weak, untried }).title, 'Do your review card');
  assert.deepEqual([nextBestStep({ ...base, dueCount: 5, weakestInScope: weak, untried }).kind, nextBestStep({ ...base, dueCount: 5, weakestInScope: weak, untried }).title], ['review', 'Do your 5 review cards']);
  assert.equal(nextBestStep({ ...base, dueCount: 0, weakestInScope: weak, untried }).kind, 'weak_topic');
  assert.equal(nextBestStep({ ...base, dueCount: 0, weakestInScope: null, untried }).kind, 'new_topic');
  const done = nextBestStep({ ...base, dueCount: 0, weakestInScope: null, untried: null });
  assert.deepEqual([done.kind, done.href], ['all_caught_up', null]);
});
