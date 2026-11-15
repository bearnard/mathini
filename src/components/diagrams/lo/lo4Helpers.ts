import { r3 } from '../round';

/** Numbers and layout for the Grade 8 Life Orientation Term 1 lessons. Tested in lo4Helpers.test.ts. */

/** Bar heights for values out of `max`; the full height `maxH` is a value equal to `max`. */
export const progressBars = (values: number[], max: number, maxH = 40) =>
  values.map((v) => ({ value: v, h: max <= 0 ? 0 : r3((Math.min(v, max) / max) * maxH) }));

/** Marks gained between two results (percentage points when both are percentages). */
export const gain = (from: number, to: number): number => to - from;

/** Whole-number percentage of goals done. */
export const percentDone = (done: number, total: number): number => (total <= 0 ? 0 : Math.round((done / total) * 100));

export interface Task {
  name: string;
  daysLeft: number;
}

/** Closest deadline first. Ties keep the order they were given in. */
export const byDeadline = (tasks: Task[]): Task[] =>
  tasks
    .map((t, i) => ({ t, i }))
    .sort((a, b) => a.t.daysLeft - b.t.daysLeft || a.i - b.i)
    .map((x) => x.t);

export interface Pt {
  x: number;
  y: number;
}

export const dist = (a: Pt, b: Pt): number => Math.hypot(a.x - b.x, a.y - b.y);

/** Distance from a player to the nearest defender. */
export const nearestDefender = (p: Pt, defenders: Pt[]): number => Math.min(...defenders.map((d) => dist(p, d)));

/** Index of the teammate with the most space round them (the one to pass to). */
export const openTeammate = (mates: Pt[], defenders: Pt[]): number => {
  let best = 0;
  mates.forEach((m, i) => {
    if (nearestDefender(m, defenders) > nearestDefender(mates[best], defenders)) best = i;
  });
  return best;
};

/** The pass shown in the lesson: the ball carrier, two teammates and two defenders on a 120 x 80 pitch. */
export const PASS_SCENE = {
  carrier: { x: 24, y: 44 },
  mates: [
    { x: 64, y: 16 },
    { x: 84, y: 64 },
  ],
  defenders: [
    { x: 68, y: 22 },
    { x: 56, y: 40 },
  ],
} as const;
