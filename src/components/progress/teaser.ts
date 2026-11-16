// The small teaser on the dashboard card. It picks WHAT to show from the GET /api/progress response; it computes nothing:
// the number in it is the one the server sent (changePoints, streakDays), only formatted. Encouraging, never a comparison.
import type { ProgressResponse } from '../../lib/shared/progressTypes';
import { arrowPoints, numText } from './format';

export interface Teaser {
  tone: 'improving' | 'streak' | 'next';
  text: string;
}

/** An improving topic first (the first one the server lists with a positive change), else the practice streak, else the next step, else nothing. */
export function pickTeaser(data: ProgressResponse): Teaser | null {
  for (const s of data.subjects) {
    for (const t of s.topics) {
      if (typeof t.changePoints === 'number' && t.changePoints > 0) return { tone: 'improving', text: `${arrowPoints(t.changePoints)} in ${t.label}` };
    }
  }
  if (data.consistency.streakDays > 0) return { tone: 'streak', text: `${numText(data.consistency.streakDays)}-day practice streak` };
  // Nothing to celebrate yet: point at the one useful thing to do (the server's own next step), only when there is something to do.
  const step = data.nextStep;
  if (step && step.href && step.kind !== 'all_caught_up' && step.title) return { tone: 'next', text: step.title };
  return null;
}
