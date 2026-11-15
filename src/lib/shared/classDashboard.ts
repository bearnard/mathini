// Small, pure helpers behind the teacher's class dashboard. Every number here is either read straight from GET /api/teacher/classes/[id]/progress or is
// a count of its lists; the dashboard adds no new statistics and never ranks a learner.
import type { ClassProgress, ClassTopicProgress } from './classProgressTypes';
import type { MasteryLevel } from './progressTypes';

export const LEVELS: readonly MasteryLevel[] = ['not_started', 'learning', 'getting_there', 'mastered'];

/** Learners who practised in the last 7 days: the class minus the ones the server listed as not practised. */
export const activeThisWeek = (p: Pick<ClassProgress, 'memberCount' | 'notPractisedLast7'>): number => Math.max(0, p.memberCount - p.notPractisedLast7.length);

/** The mean of the learners' own average accuracy, over learners who have one. null when nobody has practised. One decimal. */
export function averageAccuracy(p: Pick<ClassProgress, 'learners'>): number | null {
  const v = p.learners.map((l) => l.avgAccuracyPct).filter((x): x is number => typeof x === 'number');
  return v.length === 0 ? null : Math.round((v.reduce((a, b) => a + b, 0) / v.length) * 10) / 10;
}

/** "12 days to go", "1 day to go", "today", "2 days ago" (an exam date that has passed). */
export function countdownText(daysLeft: number): string {
  if (daysLeft === 0) return 'today';
  if (daysLeft === 1) return '1 day to go';
  if (daysLeft > 1) return `${daysLeft} days to go`;
  return daysLeft === -1 ? 'yesterday' : `${-daysLeft} days ago`;
}

/** How strongly to tint a heatmap cell: the share of the class at that level, between 0 and 1. An empty class tints nothing. */
export const cellShare = (count: number, members: number): number => (members <= 0 ? 0 : Math.min(1, Math.max(0, count / members)));

/** The topics to show: the weakest first (the server already ordered them), the first `limit` unless the teacher asked for all. */
export const visibleTopics = (topics: ClassTopicProgress[], showAll: boolean, limit = 8): ClassTopicProgress[] => (showAll ? topics : topics.slice(0, limit));

/** Learners who need a friendly nudge: the union of "behind on review cards" and "not practised in 7 days", by nickname, no repeats. */
export function attentionCount(p: Pick<ClassProgress, 'behindOnReviews' | 'notPractisedLast7'>): number {
  return new Set([...p.behindOnReviews.map((b) => b.nickname), ...p.notPractisedLast7.map((l) => l.nickname)]).size;
}
