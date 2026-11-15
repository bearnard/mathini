import { r3 } from '../round';
import { planSegments, stackLayout } from './pswHelpers';

/** Layout and numbers for the Grade 9 Life Orientation Term 2 pictures. Tested in lo9Helpers.test.ts. */

/** Two columns of boxes (e.g. "can spread" and "cannot spread"), each stacked with the same layout rules. */
export const compareLayout = (left: string[], right: string[], max = 20) => {
  const l = stackLayout(left, max, 3, 16);
  const r = stackLayout(right, max, 3, 16);
  const end = (items: { y: number; h: number }[]) => (items.length ? items[items.length - 1].y + items[items.length - 1].h : 16);
  return { left: l.items, right: r.items, height: r3(Math.max(end(l.items), end(r.items)) + 4) };
};

/** A practice session (warm-up, skills, game, cool-down): the minutes add up and each block gets a share of the bar. */
export const SESSION = [
  { label: 'Warm-up', minutes: 10 },
  { label: 'Skills', minutes: 20 },
  { label: 'Game', minutes: 25 },
  { label: 'Cool-down', minutes: 5 },
];

export const sessionPlan = () => {
  const { total, segs } = planSegments(SESSION);
  return { total, segs, share: segs.map((s) => r3(s.minutes / total)) };
};

/** Minutes of easy running over a week that builds up a little each session. */
export const BUILD_UP = { days: ['Mon', 'Wed', 'Fri'], minutes: [15, 20, 25] };
export const buildUpTotal = () => BUILD_UP.minutes.reduce((a, b) => a + b, 0);
