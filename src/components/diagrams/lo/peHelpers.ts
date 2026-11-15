import { r3 } from '../round';

/** Numbers and layout for the Grade 7 Physical Education lessons (tested in peHelpers.test.ts). */

export const round1 = (n: number): number => Math.round(n * 10) / 10;

/** South African decimal comma: 14.2 becomes "14,2". */
export const comma = (n: number): string => String(round1(n)).replace('.', ',');

/** The target time after improving a baseline time by `gain` seconds. */
export const targetTime = (baseline: number, gain: number): number => round1(baseline - gain);

/** First, last, best (lowest) time and how much faster the last is than the first. */
export const timeProgress = (times: number[]) => {
  const first = times[0];
  const last = times[times.length - 1];
  return { first, last, best: Math.min(...times), faster: round1(first - last) };
};

/** How much a count (such as successful passes) went up from the first to the last entry. */
export const countGain = (counts: number[]): number => counts[counts.length - 1] - counts[0];

export const sum = (xs: number[]): number => xs.reduce((a, b) => a + b, 0);

export const hoursMinutes = (m: number): string => `${Math.floor(m / 60)} h ${m % 60} min`;

/** Points of a line chart: x spread evenly, y proportional between min and max of the values. */
export const chartPoints = (values: number[], box = { x0: 16, x1: 104, y0: 16, y1: 50 }) => {
  const lo = Math.min(...values);
  const hi = Math.max(...values);
  const span = hi - lo || 1;
  const n = values.length;
  return values.map((v, i) => ({
    value: v,
    x: r3(n === 1 ? (box.x0 + box.x1) / 2 : box.x0 + (i / (n - 1)) * (box.x1 - box.x0)),
    y: r3(box.y1 - ((v - lo) / span) * (box.y1 - box.y0)),
  }));
};

/** One runner's laps as end-to-end segments; every runner shares one scale so bars compare fairly. */
export const lapSegments = (laps: number[], scale: number, width = 84, x0 = 30) => {
  let x = x0;
  return laps.map((t) => {
    const w = r3((t / scale) * width);
    const seg = { t, x: r3(x), w };
    x += w;
    return seg;
  });
};

/** Shorten a line so its arrow stops `gap` units before the target. */
export const arrowEnd = (from: { x: number; y: number }, to: { x: number; y: number }, gap: number) => {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.hypot(dx, dy);
  return { x: r3(to.x - (dx / len) * gap), y: r3(to.y - (dy / len) * gap) };
};
