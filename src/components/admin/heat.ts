// Sequential colour steps for heatmaps and the map: one hue, light to dark (dark mode runs the
// ramp the other way so "more" is always the stronger colour against the surface).

export const HEAT_STEPS = 7;

/** -1 for zero (drawn as an empty cell, never as the palest colour); otherwise 0..HEAT_STEPS-1. */
export function heatStep(value: number, max: number, steps = HEAT_STEPS): number {
  if (!(value > 0) || !(max > 0)) return -1;
  return Math.min(steps - 1, Math.max(0, Math.ceil((value / max) * steps) - 1));
}

/** CSS colour for a step, from the --heat-N tokens in admin.css. */
export function heatColor(step: number): string {
  return step < 0 ? 'var(--heat-empty)' : `var(--heat-${step + 1})`;
}

/** The value range covered by each step, for the legend: [from, to] inclusive-ish, rounded. */
export function heatLegend(max: number, steps = HEAT_STEPS): { from: number; to: number }[] {
  if (!(max > 0)) return [];
  return Array.from({ length: steps }, (_, i) => ({
    from: i === 0 ? 1 : Math.floor((max * i) / steps) + 1,
    to: Math.ceil((max * (i + 1)) / steps),
  }));
}

/** Bubble radius in SVG units: area proportional to activity, never smaller than 4 (8 px across). */
export function bubbleRadius(value: number, max: number, maxR = 16, minR = 4): number {
  if (!(value > 0) || !(max > 0)) return minR;
  return Math.max(minR, Math.sqrt(value / max) * maxR);
}
