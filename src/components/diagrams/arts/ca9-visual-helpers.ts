/**
 * Geometry and colour for the Grade 9 Visual Arts lessons. Every position a perspective, grid,
 * shading, print or exhibition picture draws comes from here (ca9-visual-helpers.test.ts), so the
 * pictures follow the rules the slides teach: receding lines really meet at the vanishing point.
 */

export interface Pt {
  x: number;
  y: number;
}

const round3 = (n: number): number => Math.round(n * 1000) / 1000;
/** A point moved a fraction `t` of the way from `from` towards `to`. */
export const towards = (from: Pt, to: Pt, t: number): Pt => ({ x: round3(from.x + (to.x - from.x) * t), y: round3(from.y + (to.y - from.y) * t) });

// ---------- perspective ----------

export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

/** One-point perspective: the front face of a box, and its back face pulled `depth` (0..1) of the way to the vanishing point. */
export const onePointBox = (front: Rect, vp: Pt, depth: number) => {
  const corners: Pt[] = [
    { x: front.x, y: front.y },
    { x: front.x + front.w, y: front.y },
    { x: front.x + front.w, y: front.y + front.h },
    { x: front.x, y: front.y + front.h },
  ];
  const back = corners.map((c) => towards(c, vp, depth));
  return { front: corners, back, rays: corners.map((c, i) => ({ from: c, to: back[i] })), vp };
};

/**
 * Two-point perspective: the nearest vertical edge of a box (x, top to bottom) and the far edge on each side,
 * found by moving the edge's ends a fraction of the way to each vanishing point on the horizon.
 */
export const twoPointBox = (edge: { x: number; top: number; bottom: number }, vpLeft: Pt, vpRight: Pt, depthLeft: number, depthRight: number) => {
  const top: Pt = { x: edge.x, y: edge.top };
  const bottom: Pt = { x: edge.x, y: edge.bottom };
  return {
    near: { top, bottom },
    left: { top: towards(top, vpLeft, depthLeft), bottom: towards(bottom, vpLeft, depthLeft) },
    right: { top: towards(top, vpRight, depthRight), bottom: towards(bottom, vpRight, depthRight) },
  };
};

// ---------- proportion and the grid method ----------

/** Copy a design onto a bigger grid: the same number of squares, each `factor` times as wide. */
export const gridEnlarge = (cols: number, rows: number, cell: number, factor: number) => ({
  cols,
  rows,
  cell,
  bigCell: cell * factor,
  width: cols * cell,
  height: rows * cell,
  bigWidth: cols * cell * factor,
  bigHeight: rows * cell * factor,
});

/** A point on the small grid carried to the same place on the enlarged grid. */
export const scalePoint = (p: Pt, factor: number): Pt => ({ x: p.x * factor, y: p.y * factor });

// ---------- value, shading ----------

/** `n` greys from light to dark, as hex colours. */
export const valueScale = (n: number, lightest = 240, darkest = 30): string[] =>
  Array.from({ length: n }, (_, i) => {
    const v = Math.round(lightest + ((darkest - lightest) * i) / Math.max(1, n - 1));
    const h = v.toString(16).padStart(2, '0');
    return `#${h}${h}${h}`;
  });

/** How many 45-degree lines, `spacing` apart, cover a w by h rectangle (draw them clipped to the rectangle). */
export const hatchOffsets = (w: number, h: number, spacing: number): number[] => {
  const count = Math.ceil((w + h) / spacing);
  return Array.from({ length: count }, (_, i) => round3(i * spacing));
};

// ---------- atmospheric perspective ----------

const toRgb = (hex: string): [number, number, number] => [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];
const toHex = (c: readonly number[]): string => `#${c.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('')}`;

/** Mix two hex colours: t = 0 is `a`, t = 1 is `b`. */
export const mix = (a: string, b: string, t: number): string => {
  const [ar, ag, ab] = toRgb(a);
  const [br, bg, bb] = toRgb(b);
  return toHex([ar + (br - ar) * t, ag + (bg - ag) * t, ab + (bb - ab) * t]);
};

/** Colours for `n` ridges from near (strong) to far (hazy): each is mixed further towards the sky colour. */
export const ridgeColours = (n: number, near = '#1f4e3d', sky = '#cfe3f2'): string[] => Array.from({ length: n }, (_, i) => mix(near, sky, i / n + 0.15 * (i === 0 ? 0 : 1)));

/** Brightness 0..255 of a hex colour (for tests: far ridges must be lighter). */
export const brightness = (hex: string): number => {
  const [r, g, b] = toRgb(hex);
  return Math.round(0.299 * r + 0.587 * g + 0.114 * b);
};

// ---------- relief printing ----------

/** A block mirrored about a vertical axis: what the print looks like, the reverse of the block. */
export const mirrorX = (points: readonly Pt[], axisX: number): Pt[] => points.map((p) => ({ x: round3(2 * axisX - p.x), y: p.y }));

// ---------- mixed media ----------

/** `n` overlapping sheets, each shifted right and down, for a layered mixed-media sketch. */
export const layerRects = (n: number, w: number, h: number, shift: number): Rect[] => Array.from({ length: n }, (_, i) => ({ x: i * shift, y: i * shift, w, h }));

// ---------- exhibition ----------

/** Hang works of the given widths on a wall of `wall` units with equal gaps, also at both ends. */
export const wallSpacing = (wall: number, widths: readonly number[]) => {
  const gap = round3((wall - widths.reduce((a, b) => a + b, 0)) / (widths.length + 1));
  const xs: number[] = [];
  let x = gap;
  for (const w of widths) {
    xs.push(round3(x));
    x += w + gap;
  }
  return { gap, xs };
};
