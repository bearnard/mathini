// The small teaser on the dashboard card. It picks WHAT to show from the GET /api/progress response; it computes nothing:
// the number in it is the one the server sent (changePoints, streakDays), only formatted. Encouraging, never a comparison.
import type { ProgressResponse } from '../../lib/shared/progressTypes';
import { arrowPoints, numText } from './format';

export interface Teaser {
  tone: 'improving' | 'streak';
  text: string;
}

/** An improving topic first (the first one the server lists with a positive change), else the practice streak, else nothing. */
export function pickTeaser(data: ProgressResponse): Teaser | null {
  for (const s of data.subjects) {
    for (const t of s.topics) {
      if (typeof t.changePoints === 'number' && t.changePoints > 0) return { tone: 'improving', text: `${arrowPoints(t.changePoints)} in ${t.label}` };
    }
  }
  if (data.consistency.streakDays > 0) return { tone: 'streak', text: `${numText(data.consistency.streakDays)}-day practice streak` };
  return null;
}
