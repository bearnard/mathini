import { test } from 'node:test';
import assert from 'node:assert/strict';
import { MAX_STEPS, countdownText, dailyPlan, dayNumberOf, daysUntil, type PlanTopic } from './dailyPlan';

const t = (label: string, level: PlanTopic['level'], accuracyPct: number | null): PlanTopic => ({ task: label.toLowerCase(), label, level, accuracyPct });
const base = { dueCount: 0, daysSinceMock: 1, appHref: '/app' };
const topics = [t('Circuits', 'learning', 40), t('Solar', 'getting_there', 70), t('Mains', 'mastered', 92), t('Seasons', 'not_started', null), t('Space', 'learning', 30)];

test('dayNumberOf accepts real calendar dates only', () => {
  assert.equal(dayNumberOf('2026-11-28')! - dayNumberOf('2026-11-27')!, 1);
  assert.equal(dayNumberOf('1970-01-01'), 0);
  for (const bad of ['2026-02-30', '2026-13-01', '2026-11-31', '28-11-2026', '2026-11-28T00:00', '', 'tomorrow', '2026-1-5']) assert.equal(dayNumberOf(bad), null, bad);
  assert.equal(dayNumberOf('2028-02-29') !== null, true, 'leap day');
  assert.equal(dayNumberOf('2027-02-29'), null);
});

test('countdown text and daysUntil', () => {
  assert.equal(countdownText(0), 'Your exam is today');
  assert.equal(countdownText(1), '1 day to your exam');
  assert.equal(countdownText(12), '12 days to your exam');
  assert.equal(daysUntil(100, 90), 10);
  assert.equal(daysUntil(90, 90), 0);
});

test('no plan once the exam has passed', () => {
  assert.equal(dailyPlan({ ...base, daysLeft: -1, topics }), null);
});

test('due review cards come first, then the weakest topics, untried counted as the weakest', () => {
  const p = dailyPlan({ ...base, daysLeft: 30, dueCount: 5, topics })!;
  assert.deepEqual(p.steps.map((s) => s.kind), ['review', 'topic']);
  assert.equal(p.steps[0].title, 'Do your 5 review cards');
  assert.equal(p.steps[1].title, 'Practise Seasons', 'the untried topic is the weakest');
  assert.equal(p.headline, '30 days to your exam');
});

test('the share of topics per day grows as the exam gets closer, and never exceeds 3 topics or 4 steps', () => {
  const many = Array.from({ length: 9 }, (_, i) => t(`T${i}`, 'learning', 10 + i));
  const far = dailyPlan({ ...base, daysLeft: 60, topics: many, daysSinceMock: 1 })!;
  const near = dailyPlan({ ...base, daysLeft: 3, topics: many, daysSinceMock: 1 })!;
  assert.equal(far.steps.filter((s) => s.kind === 'topic').length, 1);
  assert.equal(near.steps.filter((s) => s.kind === 'topic').length, 3);
  const busy = dailyPlan({ ...base, daysLeft: 3, dueCount: 9, topics: many, daysSinceMock: null })!;
  assert.ok(busy.steps.length <= MAX_STEPS);
  assert.equal(busy.steps[0].kind, 'review');
  assert.equal(busy.steps.at(-1)?.kind, 'mock', 'the test is kept even when topics are trimmed');
});

test('a practice test is suggested from 14 days out when none was taken in the last 7 days, but not on the last day', () => {
  const kinds = (daysLeft: number, since: number | null) => dailyPlan({ ...base, daysLeft, topics, daysSinceMock: since })!.steps.map((s) => s.kind);
  assert.ok(kinds(14, null).includes('mock'));
  assert.ok(kinds(10, 7).includes('mock'));
  assert.ok(!kinds(10, 3).includes('mock'), 'taken recently');
  assert.ok(!kinds(15, null).includes('mock'), 'too early');
  assert.ok(!kinds(1, null).includes('mock'), 'the last day is for calm revision');
});

test('on the exam day: good luck, keep reviews, no new work', () => {
  const p = dailyPlan({ ...base, daysLeft: 0, dueCount: 2, topics })!;
  assert.deepEqual(p.steps.map((s) => s.kind), ['review', 'rest']);
  assert.equal(p.headline, 'Your exam is today');
});

test('everything mastered: keep sharp on the lowest topic; nothing known: rest', () => {
  const done = [t('A', 'mastered', 95), t('B', 'mastered', 88)];
  const p = dailyPlan({ ...base, daysLeft: 20, topics: done })!;
  assert.deepEqual([p.steps[0].kind, p.steps[0].title], ['topic', 'Keep sharp: B']);
  const empty = dailyPlan({ ...base, daysLeft: 20, topics: [] })!;
  assert.equal(empty.steps[0].kind, 'rest');
});

test('steps always have a title; rest steps have no link; the others open the app', () => {
  for (const daysLeft of [0, 1, 5, 14, 40]) for (const dueCount of [0, 3]) {
    const p = dailyPlan({ ...base, daysLeft, dueCount, topics })!;
    assert.ok(p.steps.length >= 1 && p.steps.length <= MAX_STEPS);
    for (const s of p.steps) { assert.ok(s.title.length > 0); assert.equal(s.href, s.kind === 'rest' ? null : '/app'); }
  }
});
