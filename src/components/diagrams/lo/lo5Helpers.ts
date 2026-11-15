import { r3 } from '../round';

/** Layout and number helpers for the Grade 8 Life Orientation Term 2 pictures. Tested in lo5Helpers.test.ts. */

/** Weekly minutes when you start at `start` and add `step` every week for `weeks` weeks. */
export const gradualPlan = (start: number, step: number, weeks: number) => {
  const minutes = Array.from({ length: Math.max(0, weeks) }, (_, i) => start + step * i);
  return { minutes, increase: minutes.length ? minutes[minutes.length - 1] - start : 0 };
};

/** Bar heights for a list of values; the tallest bar is `maxH` tall. */
export const barHeights = (values: number[], maxH = 40): number[] => {
  const top = Math.max(0, ...values);
  return values.map((v) => (top === 0 ? 0 : r3((v / top) * maxH)));
};

/** Zones for `n` players side by side across a court side: each player stands in the middle of an equal zone. */
export const courtZones = (n: number, width = 100, x0 = 10) => {
  const w = n > 0 ? width / n : 0;
  return Array.from({ length: Math.max(0, n) }, (_, i) => ({ x: r3(x0 + w * i), w: r3(w), cx: r3(x0 + w * (i + 0.5)) }));
};
