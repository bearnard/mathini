/**
 * Tested helpers for the Grade 7-8 Geography pictures: schematic monthly climate patterns (patterns
 * only, not real data), temperature with height, population change from birth and death rates,
 * and the positions of settlements in three patterns. Every number or position drawn comes from here.
 */

/* ---------- climate patterns, southern hemisphere months 0 = January ---------- */

export interface Month { rain: number; temp: number } // rain 0-100 (relative), temp 0-100 (relative)

const wave = (m: number, peak: number) => Math.cos(((m - peak) * 2 * Math.PI) / 12); // +1 at the peak month

/** Hot, dry summer (Dec-Feb) and mild, wet winter (Jun-Aug): the Mediterranean pattern of the Western Cape. */
export const mediterranean = (m: number): Month => ({ rain: 50 + 42 * wave(m, 6.5) - 0, temp: 50 + 30 * wave(m, 0.5) });
/** Hot and very wet in every month. */
export const rainforest = (m: number): Month => ({ rain: 80 + 6 * wave(m, 2), temp: 82 + 3 * wave(m, 0) });
/** Hot, with very little rain in any month. */
export const desert = (m: number): Month => ({ rain: 4 + 2 * wave(m, 2), temp: 72 + 20 * wave(m, 0.5) });

export const year = (f: (m: number) => Month): Month[] => Array.from({ length: 12 }, (_, m) => f(m));
export const annualRain = (f: (m: number) => Month): number => year(f).reduce((a, b) => a + b.rain, 0);
export const driestMonth = (f: (m: number) => Month): number => year(f).reduce((best, v, m, arr) => (v.rain < arr[best].rain ? m : best), 0);
export const wettestMonth = (f: (m: number) => Month): number => year(f).reduce((best, v, m, arr) => (v.rain > arr[best].rain ? m : best), 0);

/* ---------- temperature with height ---------- */

/** Temperature falls about 6,5 degrees Celsius for every 1 000 m of height (the average lapse rate). */
export const LAPSE_PER_KM = 6.5;
export const tempAtHeight = (seaLevelTemp: number, metres: number): number => Math.round((seaLevelTemp - (LAPSE_PER_KM * metres) / 1000) * 10) / 10;

/* ---------- population change ---------- */

/** Natural change per 1 000 people per year: births minus deaths. Migration is ignored. */
export const naturalChange = (birthsPer1000: number, deathsPer1000: number): number => birthsPer1000 - deathsPer1000;

/** Population (in thousands) after some years of a steady natural change per 1 000. */
export const project = (startThousands: number, birthsPer1000: number, deathsPer1000: number, years: number): number[] => {
  const out = [startThousands];
  for (let y = 1; y <= years; y++) out.push(out[y - 1] * (1 + naturalChange(birthsPer1000, deathsPer1000) / 1000));
  return out.map((v) => Math.round(v * 100) / 100);
};

/** Share (per cent) of each age band in a population, young to old, for a simple schematic age structure. */
export const youngStructure = [34, 28, 20, 12, 6];
export const matureStructure = [14, 20, 22, 24, 20];

/* ---------- settlement patterns ---------- */

export interface Pt { x: number; y: number }

const lcg = (seed: number) => {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
};

/** n houses packed round a centre (nucleated), along a line (linear), or spread out (dispersed), inside a w by h box. */
export const settlement = (kind: 'nucleated' | 'linear' | 'dispersed', n: number, w: number, h: number, seed = 5): Pt[] => {
  const rnd = lcg(seed);
  if (kind === 'linear') return Array.from({ length: n }, (_, i) => ({ x: (w * (i + 0.5)) / n, y: h / 2 + (i % 2 ? 4 : -4) }));
  if (kind === 'nucleated') {
    const out: Pt[] = [];
    let guard = 0;
    while (out.length < n && guard++ < 5000) {
      const a = rnd() * 2 * Math.PI;
      const r = Math.sqrt(rnd()) * Math.min(w, h) * 0.3;
      const p = { x: w / 2 + r * Math.cos(a), y: h / 2 + r * Math.sin(a) };
      if (out.every((q) => Math.hypot(q.x - p.x, q.y - p.y) >= 5)) out.push(p);
    }
    return out;
  }
  const out: Pt[] = [];
  let guard = 0;
  const minGap = Math.min(w, h) * 0.28;
  while (out.length < n && guard++ < 5000) {
    const p = { x: 6 + rnd() * (w - 12), y: 6 + rnd() * (h - 12) };
    if (out.every((q) => Math.hypot(q.x - p.x, q.y - p.y) >= minGap)) out.push(p);
  }
  return out;
};

/** Mean distance from each house to its nearest neighbour. */
export const meanNearest = (pts: Pt[]): number => pts.reduce((s, p) => s + Math.min(...pts.filter((q) => q !== p).map((q) => Math.hypot(q.x - p.x, q.y - p.y))), 0) / pts.length;
