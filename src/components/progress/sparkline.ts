// Geometry for the tiny trend line beside each topic. The page does not work anything out here: the server sends the points
// (accuracy 0 to 100 after each recent run) and this only draws them in a 60 x 24 box. The box is scaled to the line's own range
// (at least 20 points tall, so a small wobble is not made to look like a big climb), because on a 0-100 scale a few points of
// improvement would be a flat line. The aria label carries the real numbers.
import { r3 } from '../diagrams/round';

export const SPARK = { w: 60, h: 24, pad: 3, minSpan: 20 } as const;

/** SVG polyline points for 0..100 values. One value is drawn as a short flat line so a single point still shows. */
export function sparkPoints(values: readonly number[]): string {
  const { w, h, pad, minSpan } = SPARK;
  const list = values.length === 1 ? [values[0], values[0]] : values;
  const lo = Math.min(...list);
  const hi = Math.max(...list);
  const span = Math.max(minSpan, hi - lo);
  const base = lo - (span - (hi - lo)) / 2; // centre a short range in the box
  return list
    .map((v, i) => {
      const x = pad + (i * (w - 2 * pad)) / (list.length - 1);
      const y = h - pad - ((v - base) * (h - 2 * pad)) / span;
      return `${r3(x)},${r3(Math.min(h - pad, Math.max(pad, y)))}`;
    })
    .join(' ');
}
