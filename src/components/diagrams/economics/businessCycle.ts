/**
 * A schematic business cycle: real output wobbling around a long-term trend. No data and no scale,
 * only the shape the Grade 12 lesson describes: expansion, peak, recession, trough. The turning
 * points and phases are found from the curve itself (where its slope changes sign), not typed in.
 */

export const PHASES = ['expansion', 'peak', 'recession', 'trough'] as const;
export type Phase = (typeof PHASES)[number];

const TREND_SLOPE = 0.35;
const AMPLITUDE = 1;

/** The long-term trend: a gentle upward line. */
export const trend = (t: number): number => TREND_SLOPE * t;

/** Real output: the trend with a wave around it. One full cycle is t = 1, starting at a trough. */
export const output = (t: number): number => trend(t) - AMPLITUDE * Math.cos(2 * Math.PI * t);

const slope = (t: number): number => TREND_SLOPE + 2 * Math.PI * AMPLITUDE * Math.sin(2 * Math.PI * t);

export interface TurningPoint { t: number; kind: 'peak' | 'trough' }

/** Where the slope changes sign between tmin and tmax, found by bisection. */
export const turningPoints = (tmin: number, tmax: number, steps = 2000): TurningPoint[] => {
  const out: TurningPoint[] = [];
  let prev = slope(tmin);
  for (let i = 1; i <= steps; i++) {
    const a = tmin + ((tmax - tmin) * (i - 1)) / steps;
    const b = tmin + ((tmax - tmin) * i) / steps;
    const next = slope(b);
    if (prev > 0 !== next > 0) {
      let lo = a;
      let hi = b;
      for (let k = 0; k < 50; k++) {
        const mid = (lo + hi) / 2;
        if (slope(lo) > 0 === slope(mid) > 0) lo = mid; else hi = mid;
      }
      out.push({ t: (lo + hi) / 2, kind: prev > 0 ? 'peak' : 'trough' });
    }
    prev = next;
  }
  return out;
};

/** Which phase the curve is in at t: rising is expansion, falling is recession. */
export const phaseAt = (t: number): 'expansion' | 'recession' => (slope(t) > 0 ? 'expansion' : 'recession');
