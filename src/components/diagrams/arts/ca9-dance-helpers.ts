/**
 * Numbers and positions for the Grade 9 Creative Arts dance lessons (counts, canon entries, formations,
 * route timelines, dynamics, score bars). Every number a slide or picture shows comes from here
 * (ca9-dance-helpers.test.ts), so the slides and pictures can not drift apart. Positions are on a
 * 0 to 100 stage grid: x runs left to right, y runs from the back (0) to the front, nearest the audience (100).
 */

/** A number with the South African decimal comma: 0,5 not 0.5. */
export const dec = (n: number): string => String(n).replace('.', ',');

const r1 = (n: number): number => Math.round(n * 10) / 10;

// ---------- counts ----------

export interface Move {
  name: string;
  counts: number;
}
export const eightsOf = (counts: number) => ({ full: Math.floor(counts / 8), left: counts % 8 });

/** A phrase of linked moves: where each starts, the total counts and how many eights that is. */
export const phraseOf = (moves: readonly Move[]) => {
  let at = 0;
  const placed = moves.map((m) => {
    const p = { ...m, start: at };
    at += m.counts;
    return p;
  });
  return { moves: placed, total: at, eights: eightsOf(at) };
};

/** Seconds that a number of counts last at a tempo in beats per minute (one count = one beat). */
export const countsToSeconds = (counts: number, bpm: number): number => r1((counts * 60) / bpm);

// ---------- alignment ----------

/** How far the furthest point is from a plumb line through the ankle, the last point (0 = perfectly aligned). */
export const alignmentDeviation = (xs: readonly number[]): number => Math.max(...xs.map((x) => Math.abs(x - xs[xs.length - 1])));
/** Ear, shoulder, hip, knee, ankle: sideways offsets from the plumb line, in grid units. */
export const ALIGNED_OFFSETS = [0, 0, 0, 0, 0] as const;
export const SLOUCHED_OFFSETS = [9, 5, 0, -2, 0] as const;

// ---------- dynamics ----------

export interface Level {
  name: string;
  /** 1 (soft, slow, light) to 5 (sharp, fast, strong). */
  energy: number;
}
/** The change in energy from each segment to the next, and the biggest change. */
export const contrastOf = (levels: readonly Level[]) => {
  const jumps = levels.slice(1).map((l, i) => ({ from: i, to: i + 1, diff: Math.abs(l.energy - levels[i].energy) }));
  const biggest = jumps.reduce((a, b) => (b.diff > a.diff ? b : a), jumps[0]);
  return { jumps, biggest };
};

// ---------- patterns, canon, unison ----------

/** How many times each letter appears in a pattern such as "ABABA". */
export const patternCounts = (pattern: string): Record<string, number> =>
  [...pattern].reduce<Record<string, number>>((acc, c) => ({ ...acc, [c]: (acc[c] ?? 0) + 1 }), {});

/** Start counts of each dancer in a canon: dancer i starts i x delay counts after the first. */
export const canonStarts = (dancers: number, delay: number): number[] => Array.from({ length: dancers }, (_, i) => i * delay);
/** The count on which the last dancer finishes. */
export const canonEnd = (length: number, dancers: number, delay: number): number => length + (dancers - 1) * delay;
/** The gap between the earliest and the latest start; 0 means every dancer starts together (unison). */
export const unisonGap = (starts: readonly number[]): number => Math.max(...starts) - Math.min(...starts);

// ---------- formations ----------

export type FormationKind = 'line' | 'circle' | 'diagonal' | 'block';
export interface Pt {
  x: number;
  y: number;
}
const r2 = (n: number): number => Math.round(n * 100) / 100;

/** Positions of n dancers in a formation on the 0-100 stage grid. */
export const formationPoints = (kind: FormationKind, n: number): Pt[] => {
  const i = Array.from({ length: n }, (_, k) => k);
  switch (kind) {
    case 'line':
      return i.map((k) => ({ x: r2(15 + (70 * k) / (n - 1)), y: 45 }));
    case 'diagonal':
      return i.map((k) => ({ x: r2(15 + (70 * k) / (n - 1)), y: r2(75 - (55 * k) / (n - 1)) }));
    case 'circle':
      // dancer 0 at the left of the circle, then clockwise as the audience sees it
      return i.map((k) => ({ x: r2(50 - 30 * Math.cos((2 * Math.PI * k) / n)), y: r2(45 - 28 * Math.sin((2 * Math.PI * k) / n)) }));
    case 'block': {
      const perRow = Math.ceil(n / 2);
      return i.map((k) => ({ x: r2(20 + (60 * (k % perRow)) / Math.max(perRow - 1, 1)), y: k < perRow ? 30 : 62 }));
    }
  }
};

/** A zigzag route across the floor with `legs` legs, from left to right. */
export const zigzagPath = (legs: number, x0: number, x1: number, yA: number, yB: number): Pt[] =>
  Array.from({ length: legs + 1 }, (_, k) => ({ x: r2(x0 + ((x1 - x0) * k) / legs), y: k % 2 === 0 ? yA : yB }));

// ---------- a whole routine ----------

export interface Section {
  name: string;
  counts: number;
}
export interface Block {
  kind: 'section' | 'link';
  name: string;
  start: number;
  counts: number;
}
/** Sections in order with a link of `link` counts between each pair. */
export const routineTimeline = (sections: readonly Section[], link: number) => {
  const blocks: Block[] = [];
  let at = 0;
  sections.forEach((s, k) => {
    if (k > 0 && link > 0) {
      blocks.push({ kind: 'link', name: 'link', start: at, counts: link });
      at += link;
    }
    blocks.push({ kind: 'section', name: s.name, start: at, counts: s.counts });
    at += s.counts;
  });
  return { blocks, total: at, eights: eightsOf(at), links: Math.max(sections.length - 1, 0) };
};

// ---------- rehearsals and scores ----------

export const attendance = (here: readonly boolean[]) => {
  const attended = here.filter(Boolean).length;
  return { attended, of: here.length, percent: Math.round((attended / here.length) * 100) };
};

export interface Score {
  name: string;
  score: number;
}
/** The lowest-scoring criterion: the one to work on first (the first listed if two tie). */
export const weakestOf = (scores: readonly Score[]): Score => scores.reduce((a, b) => (b.score < a.score ? b : a), scores[0]);
export const averageOf = (scores: readonly Score[]): number => r1(scores.reduce((t, s) => t + s.score, 0) / scores.length);

export const sessionMinutes = (parts: readonly { name: string; minutes: number }[]): number => parts.reduce((t, p) => t + p.minutes, 0);
