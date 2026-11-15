import { r3 } from '../round';

/** Layout and colour maths for the Grade 7 Creative Arts pictures. Tested in caHelpers.test.ts. */

const channel = (v: number) => {
  const s = v / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
};

/** WCAG relative luminance of a #rrggbb colour (0 black to 1 white). */
export const luminance = (hex: string): number => {
  const n = parseInt(hex.replace('#', ''), 16);
  return 0.2126 * channel((n >> 16) & 255) + 0.7152 * channel((n >> 8) & 255) + 0.0722 * channel(n & 255);
};

/** WCAG contrast ratio of two colours, rounded to one decimal place: 21 is black on white, 1 is identical colours. */
export const contrastRatio = (a: string, b: string): number => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return Math.round(((hi + 0.05) / (lo + 0.05)) * 10) / 10;
};

/** Bars that grow from the first value to the last; the biggest value fills `maxH`. */
export const risingBars = (values: number[], maxH = 36) => {
  const top = Math.max(...values);
  return values.map((v) => ({ value: v, h: top === 0 ? 0 : r3((v / top) * maxH) }));
};

/** Stacked layers, bottom first, each a little narrower than the one below it. */
export const layerRects = (n: number, w = 100, h = 12, gap = 2, x0 = 10, baseY = 70) =>
  Array.from({ length: n }, (_, i) => ({ x: r3(x0 + i * 4), w: r3(w - i * 8), y: r3(baseY - (i + 1) * (h + gap)), h }));

/** x positions for `n` equal tiles across a row of width `width`. */
export const tileRow = (n: number, width = 108, gap = 3, x0 = 6) => {
  const w = r3((width - gap * (n - 1)) / n);
  return Array.from({ length: n }, (_, i) => ({ x: r3(x0 + i * (w + gap)), w }));
};
