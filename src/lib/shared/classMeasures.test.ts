import { test } from 'node:test';
import assert from 'node:assert/strict';
import { BEHIND_AFTER_DAYS, behindOnReviews, classTopics, dayLabel, improvementSince, lastDayLabel, mockDistribution, type HistAttempt, type MemberTopic } from './classMeasures';

const T = (studentId: string, task: string, accuracyPct: number | null, level: MemberTopic['level']): MemberTopic => ({ studentId, task, accuracyPct, level });
const tasks = [{ task: 'a', label: 'Alpha' }, { task: 'b', label: 'Beta' }, { task: 'c', label: 'Gamma' }];

test('classTopics: mean accuracy of those who practised, level counts that sum to the class, weakest first, untouched topics last', () => {
  const ids = ['s1', 's2', 's3'];
  const rows = [T('s1', 'a', 80, 'mastered'), T('s2', 'a', 40, 'learning'), T('s1', 'b', 30, 'learning'), T('s3', 'b', 50, 'getting_there'), T('s2', 'b', null, 'not_started')];
  const out = classTopics(tasks, ids, rows);
  assert.deepEqual(out.map((x) => x.task), ['b', 'a', 'c'], 'Beta 40 < Alpha 60 < Gamma (nobody)');
  const b = out[0];
  assert.deepEqual([b.practised, b.avgAccuracyPct], [2, 40]);
  assert.deepEqual(b.levels, { not_started: 1, learning: 1, getting_there: 1, mastered: 0 });
  assert.deepEqual(out[1].levels, { not_started: 1, learning: 1, getting_there: 0, mastered: 1 });
  assert.deepEqual([out[2].practised, out[2].avgAccuracyPct, out[2].levels.not_started], [0, null, 3]);
  for (const t of out) assert.equal(Object.values(t.levels).reduce((s, n) => s + n, 0), ids.length);
});

test('classTopics: a row for someone who is not in the class is ignored; an empty class gives empty counts', () => {
  const out = classTopics([{ task: 'a', label: 'A' }], ['s1'], [T('stranger', 'a', 99, 'mastered')]);
  assert.deepEqual([out[0].practised, out[0].avgAccuracyPct, out[0].levels.not_started], [0, null, 1]);
  assert.deepEqual(classTopics([{ task: 'a', label: 'A' }], [], [])[0].levels, { not_started: 0, learning: 0, getting_there: 0, mastered: 0 });
});

test('behindOnReviews: only cards that have waited 2+ days, oldest first, nicknames only, due-today cards and future cards do not count', () => {
  const today = 20000;
  const nick = new Map([['s1', 'Zola'], ['s2', 'Amy'], ['s3', 'Thabo'], ['s4', 'New']]);
  const cards = [
    { studentId: 's1', dueDay: today - 5 }, { studentId: 's1', dueDay: today }, { studentId: 's2', dueDay: today - 2 }, { studentId: 's3', dueDay: today - 1 },
    { studentId: 's3', dueDay: today + 4 }, { studentId: 's4', dueDay: today }, { studentId: 'stranger', dueDay: today - 9 },
  ];
  const out = behindOnReviews(cards, nick, today);
  assert.deepEqual(out, [{ nickname: 'Zola', dueCount: 2, overdueDays: 5 }, { nickname: 'Amy', dueCount: 1, overdueDays: 2 }]);
  assert.equal(BEHIND_AFTER_DAYS, 2);
});

test('mockDistribution: buckets cover 0 to 100, no score is "not taken" (never a zero), average over scored only', () => {
  const scores = new Map([['a', 0], ['b', 39], ['c', 40], ['d', 59], ['e', 60], ['f', 79], ['g', 80], ['h', 100]]);
  const d = mockDistribution(scores, ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'x', 'y']);
  assert.deepEqual(d.buckets.map((b) => b.count), [2, 2, 2, 2]);
  assert.deepEqual([d.scored, d.notTaken, d.averagePct], [8, 2, 57.1]);
  const none = mockDistribution(new Map(), ['a', 'b']);
  assert.deepEqual([none.scored, none.notTaken, none.averagePct, none.buckets.every((b) => b.count === 0)], [0, 2, null, true]);
  assert.equal(mockDistribution(new Map([['z', 90]]), ['a']).scored, 0, 'a score for a stranger is ignored');
});

const run = (studentId: string, task: string, bits: string, start: number): HistAttempt[] => [...bits].map((b, i) => ({ studentId, task, correct: b === '1', at: start + i * 1000 }));

test('improvementSince: accuracy now minus accuracy at the date, per learner, averaged; needs history on both sides', () => {
  const since = 100_000;
  const attempts = [
    ...run('up', 'a', '0000000000', 0), ...run('up', 'a', '11111111', 200_000), // was 0%, now better
    ...run('down', 'a', '1111111111', 0), ...run('down', 'a', '0000000', 200_000),
    ...run('flat', 'a', '1010101010', 0), ...run('flat', 'a', '10', 200_000),
    ...run('thin', 'a', '111', 0), ...run('thin', 'a', '1111', 200_000), // fewer than 5 before: not compared
    ...run('quiet', 'a', '1111111111', 0), // nothing after: not compared
  ].sort((x, y) => x.at - y.at);
  const { summary, perLearner } = improvementSince(attempts, since, '2026-11-01');
  assert.equal(summary.learnersCompared, 3);
  assert.deepEqual([summary.improved, summary.declined, summary.steady], [1, 1, 1]);
  assert.ok((perLearner.get('up') as number) > 40 && (perLearner.get('down') as number) < -40);
  assert.ok(Math.abs(perLearner.get('flat') as number) < 5);
  assert.ok(!perLearner.has('thin') && !perLearner.has('quiet'));
  assert.equal(summary.since, '2026-11-01');
  assert.equal(typeof summary.avgChangePoints, 'number');
});

test('improvementSince: averages several topics per learner; nothing to compare gives null', () => {
  const since = 100_000;
  const attempts = [...run('s', 'a', '0000011111', 0), ...run('s', 'a', '1111', 200_000), ...run('s', 'b', '1111100000', 0), ...run('s', 'b', '0000', 200_000)].sort((x, y) => x.at - y.at);
  const { summary, perLearner } = improvementSince(attempts, since, 'x');
  assert.equal(summary.learnersCompared, 1);
  assert.equal(perLearner.size, 1);
  const none = improvementSince(run('s', 'a', '111', 0), since, 'x');
  assert.deepEqual([none.summary.avgChangePoints, none.summary.learnersCompared], [null, 0]);
});

test('day labels are South Africa calendar days', () => {
  assert.equal(dayLabel(0), '1970-01-01');
  assert.equal(lastDayLabel(null), null);
  const lateEvening = Date.UTC(2026, 10, 14, 22, 30); // 00:30 on the 15th in SAST
  assert.equal(lastDayLabel(lateEvening), '2026-11-15');
});
