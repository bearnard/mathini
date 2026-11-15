/**
 * Grid and label spacing for lesson graphs. The graph library puts a line and a label at every 1
 * unit by default, which is right for -5 to 5 and unreadable for 0 to 360 degrees (360 labels) or
 * 0 to 260. Pick a step so an axis has about 4 to 10 intervals: a "nice" step of 1, 2 or 5 times a
 * power of ten, or a degree step (15, 30, 45, 90) when the axis is in degrees.
 */

const NICE = [1, 2, 5];
const DEGREE_STEPS = [15, 30, 45, 90];

/** The smallest step from `candidates` that is at least `min`, else the biggest. */
const atLeast = (candidates: number[], min: number): number => candidates.find((c) => c >= min) ?? candidates[candidates.length - 1];

/** A nice step (1, 2, 5 x 10^k) giving at most `target` intervals over `span`. */
export const niceStep = (span: number, target = 8): number => {
  const raw = Math.abs(span) / target;
  if (!(raw > 0)) return 1;
  const exp = Math.floor(Math.log10(raw));
  const base = 10 ** exp;
  const candidates = [...NICE.map((n) => n * base), 10 * base];
  return Math.round(atLeast(candidates, raw * 0.999) * 1e9) / 1e9;
};

/** Spans of a degrees axis in trigonometry: a quarter turn, half, three quarters, a full turn, two turns. */
const DEGREE_SPANS = [90, 180, 270, 360, 720];

/** True when an axis from lo to hi looks like degrees: one of the usual turn spans, ending on multiples of 15. */
export const looksLikeDegrees = (lo: number, hi: number): boolean => DEGREE_SPANS.includes(hi - lo) && lo % 15 === 0 && hi % 15 === 0;

/** The grid step for one axis. */
export const axisStep = (range: [number, number], target = 8): number => {
  const [lo, hi] = range;
  if (looksLikeDegrees(lo, hi)) return atLeast(DEGREE_STEPS, (hi - lo) / target);
  return niceStep(hi - lo, target);
};

/**
 * Leave room for the axis numbers. When a range starts at 0 or above, the axis sits on the edge of
 * the picture and its numbers fall outside it; widen that side a little (12 percent below, 6
 * percent to the left) so they show. A range that crosses zero already has its axis inside.
 */
export const withRoomForLabels = (range: [number, number], fraction: number): [number, number] => {
  const [lo, hi] = range;
  return lo >= 0 ? [lo - (hi - lo) * fraction, hi] : [lo, hi];
};

/** An axis label without floating-point noise, written with the South African decimal comma: 0.6000000000000001 shows as 0,6. */
export const formatTick = (n: number): string => String(Math.round(n * 1e6) / 1e6).replace('.', ',');

/** A number as chart text (axis tick, category label or tooltip value) with the decimal comma; anything else is shown as it is. */
export const commaText = (v: unknown): string => (typeof v === 'number' ? formatTick(v) : String(v ?? ''));

/** The library pads the requested range by half a unit on every side. */
const VIEW_PADDING = 0.5;

/**
 * How many units each axis actually shows when one unit must be the same length on both axes:
 * the scale is set by whichever axis is tighter, and the other axis shows more than was asked.
 */
export const displayedSpans = (xRange: [number, number], yRange: [number, number], width: number, height: number): { x: number; y: number } => {
  const xSpan = Math.abs(xRange[1] - xRange[0]) + 2 * VIEW_PADDING;
  const ySpan = Math.abs(yRange[1] - yRange[0]) + 2 * VIEW_PADDING;
  const scale = Math.min(width / xSpan, height / ySpan); // pixels per unit
  return { x: width / scale, y: height / scale };
};
