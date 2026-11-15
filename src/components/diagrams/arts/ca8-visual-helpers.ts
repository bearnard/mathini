/**
 * Numbers and colours for the Grade 8 Visual Arts lessons. Every colour, position and count the
 * lesson pictures and slides show comes from here (ca8-visual-helpers.test.ts), so a picture always
 * matches the words beside it.
 */

const clamp255 = (n: number): number => Math.max(0, Math.min(255, Math.round(n)));
const hex2 = (n: number): string => clamp255(n).toString(16).padStart(2, '0');

export const rgbToHex = (r: number, g: number, b: number): string => `#${hex2(r)}${hex2(g)}${hex2(b)}`;

export const hexToRgb = (hex: string): [number, number, number] => [
  parseInt(hex.slice(1, 3), 16),
  parseInt(hex.slice(3, 5), 16),
  parseInt(hex.slice(5, 7), 16),
];

/** hsl (hue 0-360, saturation and lightness 0-100) to a hex colour. */
export const hslToHex = (h: number, s: number, l: number): string => {
  const sat = s / 100;
  const lig = l / 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = sat * Math.min(lig, 1 - lig);
  const f = (n: number) => lig - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return rgbToHex(f(0) * 255, f(8) * 255, f(4) * 255);
};

/** Mix `a` towards `b`: t = 0 is all a, t = 1 is all b. */
export const mixHex = (a: string, b: string, t: number): string => {
  const [r1, g1, b1] = hexToRgb(a);
  const [r2, g2, b2] = hexToRgb(b);
  return rgbToHex(r1 + (r2 - r1) * t, g1 + (g2 - g1) * t, b1 + (b2 - b1) * t);
};

/** A tint is the colour mixed with white; a shade is the colour mixed with black. */
export const tint = (hex: string, t: number): string => mixHex(hex, '#ffffff', t);
export const shade = (hex: string, t: number): string => mixHex(hex, '#000000', t);

/** How light a colour looks, 0 (black) to 255 (white), using the usual perceived-brightness weights. */
export const lightness = (hex: string): number => {
  const [r, g, b] = hexToRgb(hex);
  return Math.round(0.299 * r + 0.587 * g + 0.114 * b);
};

// ---------- the 12-step colour wheel (red at the top, going clockwise) ----------

export const WHEEL = [
  { name: 'red', hue: 0, kind: 'primary' },
  { name: 'red-orange', hue: 15, kind: 'tertiary' },
  { name: 'orange', hue: 30, kind: 'secondary' },
  { name: 'yellow-orange', hue: 45, kind: 'tertiary' },
  { name: 'yellow', hue: 55, kind: 'primary' },
  { name: 'yellow-green', hue: 85, kind: 'tertiary' },
  { name: 'green', hue: 120, kind: 'secondary' },
  { name: 'blue-green', hue: 175, kind: 'tertiary' },
  { name: 'blue', hue: 220, kind: 'primary' },
  { name: 'blue-violet', hue: 255, kind: 'tertiary' },
  { name: 'violet', hue: 285, kind: 'secondary' },
  { name: 'red-violet', hue: 330, kind: 'tertiary' },
] as const;

export const wheelColor = (i: number): string => hslToHex(WHEEL[i].hue, 78, 50);

/** The colour opposite on the wheel: red and green, orange and blue, yellow and violet. */
export const complementOf = (i: number): number => (i + 6) % 12;

/** Red through yellow are the warm colours; green through violet are the cool ones. */
export const temperature = (i: number): 'warm' | 'cool' | 'in between' => (i <= 4 ? 'warm' : i >= 6 && i <= 10 ? 'cool' : 'in between');

/** The angle (degrees, 0 = straight up, clockwise) of the middle of wheel segment i. */
export const wheelAngle = (i: number): number => i * 30;

// ---------- value ----------

/** n greys from light to dark (lightness steps evenly spaced between 0.95 and 0.1). */
export const valueScale = (n: number): string[] =>
  Array.from({ length: n }, (_, i) => {
    const l = 95 - (85 * i) / (n - 1);
    return hslToHex(0, 0, l);
  });

// ---------- line ----------

export type Pt = readonly [number, number];

/** Five kinds of line across a box of width w, centred on y: horizontal, vertical, diagonal, curved, zigzag. */
export const lineSamples = (w: number, h: number) => ({
  horizontal: [[0, h / 2], [w, h / 2]] as Pt[],
  vertical: [[w / 2, 0], [w / 2, h]] as Pt[],
  diagonal: [[0, h], [w, 0]] as Pt[],
  curved: Array.from({ length: 21 }, (_, i): Pt => [(w * i) / 20, h / 2 - (h / 2) * Math.sin((i / 20) * Math.PI * 2)]),
  zigzag: Array.from({ length: 7 }, (_, i): Pt => [(w * i) / 6, i % 2 === 0 ? h : 0]),
});

// ---------- texture marks ----------

export type Seg = readonly [number, number, number, number];

/** Parallel diagonal hatching lines (bottom-left to top-right) clipped to a w x h box, `gap` apart. */
export const hatching = (w: number, h: number, gap: number): Seg[] => {
  const out: Seg[] = [];
  for (let c = -h; c <= w; c += gap) {
    // the line is x = c + (h - y): it runs up and to the right across the box
    const yTop = Math.max(0, h + c - w);
    const yBottom = Math.min(h, h + c);
    if (yTop >= yBottom) continue;
    out.push([c + (h - yBottom), yBottom, c + (h - yTop), yTop]);
  }
  return out;
};

/** Cross-hatching: the same hatching, plus its mirror image across the box. */
export const crossHatching = (w: number, h: number, gap: number): Seg[] => [
  ...hatching(w, h, gap),
  ...hatching(w, h, gap).map(([x1, y1, x2, y2]): Seg => [w - x1, y1, w - x2, y2]),
];

/** A small repeatable pseudo-random sequence (so the picture is identical on the server and in the browser). */
const lcg = (seed: number) => {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
};

/** Stipple dots in horizontal bands: bands[i] dots in band i of the box (more dots look darker). */
export const stipple = (w: number, h: number, bands: readonly number[], seed = 7): Pt[] => {
  const rnd = lcg(seed);
  const bandH = h / bands.length;
  const out: Pt[] = [];
  bands.forEach((count, b) => {
    for (let i = 0; i < count; i++) out.push([Math.round(rnd() * w * 100) / 100, Math.round((b * bandH + rnd() * bandH) * 100) / 100]);
  });
  return out;
};

// ---------- depth ----------

/** Foreground, middle ground and background: each one further away is smaller and sits higher up. */
export const depthLayers = (baseline: number, step: number, ratio = 0.62) =>
  (['foreground', 'middle ground', 'background'] as const).map((name, i) => ({
    name,
    scale: Math.round(ratio ** i * 1000) / 1000,
    base: baseline - i * step,
  }));

// ---------- pattern ----------

/** x positions of n repeats of a unit of width `unit`, `gap` apart, starting at x0. */
export const repeatX = (n: number, unit: number, gap: number, x0 = 0): number[] => Array.from({ length: n }, (_, i) => x0 + i * (unit + gap));

/** An alternating pattern A B A B ...: which of the two motifs sits at each place. */
export const alternate = (n: number): ('A' | 'B')[] => Array.from({ length: n }, (_, i) => (i % 2 === 0 ? 'A' : 'B'));

// ---------- printmaking ----------

/** The capital letter F as a path on a 10 x 14 grid, drawn the right way round. */
export const LETTER_F: Pt[] = [[1, 13], [1, 1], [9, 1], [9, 4], [4, 4], [4, 6], [8, 6], [8, 9], [4, 9], [4, 13]];

/** Reflect points left-to-right across a vertical axis at x = axis. A print is the mirror image of its block. */
export const mirrorX = (pts: readonly Pt[], axis: number): Pt[] => pts.map(([x, y]): Pt => [2 * axis - x, y]);

// ---------- exhibition ----------

/** Hang works of the given widths on a wall with equal gaps at both ends and between: gap = (wall - total) / (n + 1). */
export const hang = (wall: number, widths: readonly number[]) => {
  const total = widths.reduce((a, b) => a + b, 0);
  const gap = (wall - total) / (widths.length + 1);
  const xs: number[] = [];
  let x = gap;
  for (const w of widths) {
    xs.push(x);
    x += w + gap;
  }
  return { wall, widths, total, gap, xs };
};

/** Choose `n` works for a portfolio, taking one from each kind in turn so the choice shows range. */
export const pickRange = (counts: Record<string, number>, n: number): Record<string, number> => {
  const picked: Record<string, number> = Object.fromEntries(Object.keys(counts).map((k) => [k, 0]));
  const kinds = Object.keys(counts);
  let left = n;
  while (left > 0 && kinds.some((k) => picked[k] < counts[k])) {
    for (const k of kinds) {
      if (left > 0 && picked[k] < counts[k]) {
        picked[k]++;
        left--;
      }
    }
  }
  return picked;
};
