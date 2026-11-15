import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { LEVELS, activeThisWeek, attentionCount, averageAccuracy, cellShare, countdownText, visibleTopics } from './classDashboard';
import type { ClassProgress } from './classProgressTypes';
import { AttentionCard, ClassTiles, ImprovementCard, LearnersCard, ScoreCard, TopicHeatmap } from '../../components/teacher/ClassDashboard';

const topic = (i: number, a: number | null, lv: [number, number, number, number]) => ({ task: `t${i}`, label: `Topic ${i}`, practised: lv[1] + lv[2] + lv[3], avgAccuracyPct: a, levels: { not_started: lv[0], learning: lv[1], getting_there: lv[2], mastered: lv[3] } });
const learner = (nickname: string, avg: number | null, change: number | null, due = 0, last: string | null = '2026-11-14') => ({ nickname, topicsPractised: avg === null ? 0 : 4, avgAccuracyPct: avg, dueCount: due, changePoints: change, lastPractisedDay: last });
const P: ClassProgress = {
  generatedAt: '2026-11-15T08:00:00.000Z', classId: 'c1', className: '6B Natural Sciences', grade: 6, memberCount: 5,
  exam: { title: 'Term 3 and 4 test', examDate: '2026-11-27', daysLeft: 12 },
  topics: Array.from({ length: 10 }, (_, i) => topic(i + 1, 40 + i * 5.5, [1, 1, 2, 1])),
  behindOnReviews: [{ nickname: 'Ben', dueCount: 5, overdueDays: 4 }],
  mockDistribution: { buckets: [{ label: '0–39%', from: 0, to: 39, count: 1 }, { label: '40–59%', from: 40, to: 59, count: 2 }, { label: '60–79%', from: 60, to: 79, count: 1 }, { label: '80–100%', from: 80, to: 100, count: 0 }], scored: 4, notTaken: 1, averagePct: 58.5 },
  improvement: { since: '2026-10-01', avgChangePoints: 4.5, learnersCompared: 4, improved: 2, declined: 1, steady: 1 },
  notPractisedLast7: [{ nickname: 'Ben', lastPractisedDay: '2026-11-01' }, { nickname: 'Amy', lastPractisedDay: null }],
  learners: [learner('Amy', null, null, 0, null), learner('Ben', 40, -3, 5, '2026-11-01'), learner('Sipho', 88, 6.5), learner('Thandi', 71.5, 4), learner('Lerato', 55, 0)],
};

test('helpers count the server lists and add no statistics of their own', () => {
  assert.equal(activeThisWeek(P), 3);
  assert.equal(activeThisWeek({ memberCount: 1, notPractisedLast7: [{ nickname: 'a', lastPractisedDay: null }, { nickname: 'b', lastPractisedDay: null }] }), 0);
  assert.equal(averageAccuracy(P), 63.6);
  assert.equal(averageAccuracy({ learners: [] }), null);
  assert.equal(averageAccuracy({ learners: [learner('a', null, null)] }), null);
  assert.equal(attentionCount(P), 2, 'Ben is on both lists and counts once');
  assert.deepEqual([countdownText(0), countdownText(1), countdownText(12), countdownText(-1), countdownText(-3)], ['today', '1 day to go', '12 days to go', 'yesterday', '3 days ago']);
  assert.deepEqual([cellShare(6, 24), cellShare(30, 24), cellShare(0, 24), cellShare(3, 0)], [0.25, 1, 0, 0]);
  assert.equal(visibleTopics(P.topics, false).length, 8);
  assert.equal(visibleTopics(P.topics, true).length, 10);
  assert.deepEqual([...LEVELS], ['not_started', 'learning', 'getting_there', 'mastered']);
});

const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);

test('header strip: learners, active this week, average, exam countdown; decimal comma; a fall is not red', () => {
  const t = html(h(ClassTiles, { p: P }));
  for (const label of ['Learners', 'Active this week', 'Average accuracy', 'Term 3 and 4 test']) assert.ok(t.includes(label), label);
  assert.match(t, /63,6%/);
  assert.match(t, /up 4,5 points/);
  assert.match(t, />12</);
  assert.match(t, /days to go · 27 Nov/);
  assert.match(html(h(ClassTiles, { p: { ...P, exam: null } })), /None set/);
  assert.ok(!/text-red/.test(t));
});

test('heatmap: weakest topics first, the four levels across, eight rows until asked, no learner names', () => {
  const t = html(h(TopicHeatmap, { p: P }));
  assert.equal((t.match(/<tr>/g) ?? []).length, 1 + 8 + 0 - 0 + 0, 'header row plus eight topics');
  assert.ok(t.indexOf('Topic 1') < t.indexOf('Topic 8'));
  assert.ok(!t.includes('Topic 9'));
  for (const w of ['Not started', 'Learning', 'Getting there', 'Mastered']) assert.ok(t.includes(w), w);
  assert.match(t, /Show all 10 topics/);
  assert.match(t, /<caption class="sr-only">/);
  assert.ok(!/Amy|Ben|Sipho/.test(t));
  assert.match(html(h(TopicHeatmap, { p: { ...P, topics: [] } })), /No one has practised yet/);
});

test('who could use a nudge: friendly, by nickname, both lists; an empty list says well done', () => {
  const a = html(h(AttentionCard, { p: P }));
  assert.match(a, /Who could use a nudge/);
  assert.match(a, /Ben/);
  assert.match(a, /5 cards · 4 days/);
  assert.match(a, /not started yet/);
  assert.match(a, /A friendly word usually helps/);
  assert.ok(!/worst|failing|lazy|behind the class/i.test(a));
  assert.match(html(h(AttentionCard, { p: { ...P, behindOnReviews: [], notPractisedLast7: [] } })), /Everyone is on track/);
});

test('scores, improvement and learners cards: empty states, decimal comma, sortable learners table with no rank column', () => {
  assert.match(html(h(ScoreCard, { p: { ...P, mockDistribution: { ...P.mockDistribution, scored: 0 } } })), /No practice test taken yet/);
  assert.match(html(h(ScoreCard, { p: P })), /58,5%/);
  const imp = html(h(ImprovementCard, { p: P, since: '2026-10-01', onSince: () => undefined, err: '' }));
  assert.match(imp, /\+4,5 <span[^>]*>points on average/);
  assert.match(imp, /1 need a look/);
  assert.match(html(h(ImprovementCard, { p: { ...P, improvement: { ...P.improvement, learnersCompared: 0 } }, since: '2026-10-01', onSince: () => undefined, err: '' })), /Not enough practice/);
  const l = html(h(LearnersCard, { p: P }));
  assert.match(l, /aria-sort="ascending"/);
  assert.ok(l.indexOf('Amy') < l.indexOf('Ben') && l.indexOf('Ben') < l.indexOf('Lerato'), 'alphabetical to start with');
  assert.match(l, /71,5%/);
  assert.match(l, /−3/);
  assert.ok(!/>#<|Rank|Position|Top /i.test(l), 'no rank');
  assert.match(html(h(LearnersCard, { p: { ...P, learners: [] } })), /No learners yet/);
});
