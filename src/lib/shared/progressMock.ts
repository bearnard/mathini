// A mock GET /api/progress with the same shape as progressTypes.ts, for developing the page and for the browser check
// (SHOOT_MOCKS). It is DATA, not logic: the numbers are typed in, exactly as the server would send them.
import type { ProgressResponse } from './progressTypes';

export const MOCK_PROGRESS: ProgressResponse = {
  generatedAt: '2026-11-15T08:00:00.000Z',
  grade: 6,
  displayName: 'Lerato',
  exam: {
    scopeKey: 'g6-nst-t3t4-exam',
    label: 'Grade 6 Natural Sciences, Terms 3 and 4 exam',
    readinessPct: 68.5,
    masteryPct: 64,
    practisedPct: 75,
    topicsTotal: 8,
    topicsPractised: 6,
    latestMock: { scorePct: 72, finishedAt: '2026-11-12T10:30:00.000Z' },
  },
  subjects: [
    {
      subject: 'natural-sciences',
      label: 'Natural Sciences',
      masteryPct: 64,
      level: 'getting_there',
      topics: [
        { task: 'g6-nst-circuits', label: 'Electric circuits', level: 'learning', accuracyPct: 42.5, attempts: 24, trend: [30, 35, 38, 40, 42.5], changePoints: 12.5, practiseHref: '/grade6/natural-sciences/term3/electric-circuits' },
        { task: 'g6-nst-mains', label: 'Mains electricity', level: 'getting_there', accuracyPct: 61, attempts: 18, trend: [70, 66, 64, 61], changePoints: null, practiseHref: '/grade6/natural-sciences/term3/mains-electricity' },
        { task: 'g6-nst-solar', label: 'The solar system', level: 'getting_there', accuracyPct: 74, attempts: 30, trend: [55, 60, 66, 70, 72, 74], changePoints: 19, practiseHref: '/grade6/natural-sciences/term4/solar-system' },
        { task: 'g6-nst-space', label: 'Space exploration', level: 'mastered', accuracyPct: 88, attempts: 22, trend: [78, 82, 85, 88], changePoints: 10, practiseHref: '/grade6/natural-sciences/term4/space-exploration' },
        { task: 'g6-nst-seasons', label: 'Day, night and seasons', level: 'not_started', accuracyPct: null, attempts: 0, trend: [], changePoints: null, practiseHref: '/grade6/natural-sciences/term4/day-night-seasons' },
      ],
    },
    {
      subject: 'mathematics',
      label: 'Mathematics',
      masteryPct: 81,
      level: 'mastered',
      topics: [
        { task: 'g6-math-fractions', label: 'Common fractions', level: 'getting_there', accuracyPct: 70, attempts: 20, trend: [60, 64, 68, 70], changePoints: 8, practiseHref: '/grade6/mathematics/term2/common-fractions' },
        { task: 'g6-math-area', label: 'Area and perimeter', level: 'mastered', accuracyPct: 92, attempts: 28, trend: [85, 88, 90, 92], changePoints: 7, practiseHref: '/grade6/mathematics/term3/area-perimeter' },
      ],
    },
  ],
  tests: [
    { runId: 'r5', kind: 'mock_test', scopeKey: 'g6-nst-t3t4-mock', scopeLabel: 'Natural Sciences Terms 3 and 4 mock', scorePct: 72, nCorrect: 18, nItems: 25, finishedAt: '2026-11-12T10:30:00.000Z', changeSinceLast: 8 },
    { runId: 'r4', kind: 'quiz', scopeKey: 'g6-math-fractions', scopeLabel: 'Common fractions quiz', scorePct: 65, nCorrect: 13, nItems: 20, finishedAt: '2026-11-10T15:00:00.000Z', changeSinceLast: -5 },
    { runId: 'r3', kind: 'mock_test', scopeKey: 'g6-nst-t3t4-mock', scopeLabel: 'Natural Sciences Terms 3 and 4 mock', scorePct: 64, nCorrect: 16, nItems: 25, finishedAt: '2026-11-05T09:00:00.000Z', changeSinceLast: 12 },
    { runId: 'r2', kind: 'exam_practice', scopeKey: 'g6-nst-t3t4-exam', scopeLabel: 'Natural Sciences Terms 3 and 4 exam practice', scorePct: 60, nCorrect: 24, nItems: 40, finishedAt: '2026-11-02T09:00:00.000Z', changeSinceLast: null },
    { runId: 'r1', kind: 'mock_test', scopeKey: 'g6-nst-t3t4-mock', scopeLabel: 'Natural Sciences Terms 3 and 4 mock', scorePct: 52, nCorrect: 13, nItems: 25, finishedAt: '2026-10-28T09:00:00.000Z', changeSinceLast: null },
  ],
  testSeries: [
    {
      scopeKey: 'g6-nst-t3t4-mock',
      scopeLabel: 'Natural Sciences Terms 3 and 4 mock',
      points: [
        { finishedAt: '2026-10-28T09:00:00.000Z', scorePct: 52 },
        { finishedAt: '2026-11-05T09:00:00.000Z', scorePct: 64 },
        { finishedAt: '2026-11-12T10:30:00.000Z', scorePct: 72 },
      ],
    },
  ],
  retention: { weekCorrect: 34, weekAnswered: 40, weekPct: 85, retiredCount: 12, dueCount: 5 },
  consistency: { daysPractisedLast14: 9, streakDays: 3 },
  parentNextStep: { title: 'Ask your child to do their 5 review cards', reason: 'A few minutes now helps them remember what they have learned, ready for the exam.' },
  recentSessions: [
    { at: '2026-11-14T15:20:00.000Z', label: 'Electric Circuits', answered: 12, correct: 10, scorePct: 83 },
    { at: '2026-11-13T16:05:00.000Z', label: 'Mains Electricity and Safety', answered: 8, correct: 5, scorePct: 63 },
  ],
  nextStep: {
    kind: 'review',
    title: 'Do your 5 review cards',
    reason: 'A few minutes now helps you remember them for the exam.',
    href: '/app?start=review',
    cta: 'Start review',
  },
};

/** A learner who has just started: nothing to show yet, so the page must encourage, not look broken. */
export const MOCK_PROGRESS_NEW: ProgressResponse = {
  generatedAt: '2026-11-15T08:00:00.000Z',
  grade: 6,
  displayName: null,
  exam: null,
  subjects: [],
  tests: [],
  testSeries: [],
  retention: { weekCorrect: 0, weekAnswered: 0, weekPct: null, retiredCount: 0, dueCount: 0 },
  consistency: { daysPractisedLast14: 0, streakDays: 0 },
  recentSessions: [],
  parentNextStep: { title: 'Ask your child to try their first topic', reason: 'They can pick any topic. Their progress will appear here.' },
  nextStep: { kind: 'new_topic', title: 'Try your first topic', reason: 'Pick any topic. Your progress will appear here.', href: '/app', cta: 'Choose a topic' },
};
