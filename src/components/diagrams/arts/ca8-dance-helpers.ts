/**
 * Numbers and shapes for the Grade 8 Creative Arts dance lessons. Every count, bar, position and
 * pathway a slide or picture shows comes from here (ca8-dance-helpers.test.ts), so the slides, the
 * pictures and the check answers can not drift apart. Counts are 1-based, as dancers say them.
 */
import { r3 } from '../round';

export const BEATS_PER_BAR = 4;

export interface Move {
  name: string;
  counts: number;
}
export interface Segment {
  name: string;
  counts: number;
  /** First count the move is danced on (1-based). */
  start: number;
  /** Last count the move covers. */
  end: number;
}

export const phraseCounts = (moves: readonly Move[]): number => moves.reduce((t, m) => t + m.counts, 0);

/** Lay moves end to end on the counts: "reach" on 1-2, "turn" on 3, and so on. */
export const timeline = (moves: readonly Move[]): Segment[] => {
  let at = 0;
  return moves.map((m) => {
    const seg = { name: m.name, counts: m.counts, start: at + 1, end: at + m.counts };
    at += m.counts;
    return seg;
  });
};

/** How many bars of `beats` counts a phrase fills (8 counts = 2 bars of 4). */
export const barsOf = (counts: number, beats = BEATS_PER_BAR): number => counts / beats;

// ---------- motifs ----------

/** A motif developed three ways: repeated, in reverse order, and slowed so each move takes twice the counts. */
export const motifVariations = (motif: readonly Move[]) => ({
  original: { moves: [...motif], counts: phraseCounts(motif) },
  repeated: { moves: [...motif, ...motif], counts: phraseCounts(motif) * 2 },
  reversed: { moves: [...motif].reverse(), counts: phraseCounts(motif) },
  slowed: { moves: motif.map((m) => ({ name: m.name, counts: m.counts * 2 })), counts: phraseCounts(motif) * 2 },
});

// ---------- stress and cues ----------

/** Which of the counts carry an accent. */
export const accentFlags = (total: number, accented: readonly number[]): boolean[] => Array.from({ length: total }, (_, i) => accented.includes(i + 1));

/** The count on which to give the cue so the group enters together on `entry`. */
export const cueCount = (entry: number, lead: number): number => entry - lead;

// ---------- groups and space ----------

export interface Point {
  x: number;
  y: number;
}
export type FormationKind = 'line' | 'circle' | 'diagonal' | 'block';

/** Dancer positions on a 100 x 100 stage (y grows towards the audience). */
export const formation = (kind: FormationKind, n: number, cols = 4): Point[] => {
  if (kind === 'line') return Array.from({ length: n }, (_, i) => ({ x: r3(n === 1 ? 50 : 12 + (76 * i) / (n - 1)), y: 50 }));
  if (kind === 'diagonal') return Array.from({ length: n }, (_, i) => ({ x: r3(n === 1 ? 50 : 15 + (70 * i) / (n - 1)), y: r3(n === 1 ? 50 : 85 - (70 * i) / (n - 1)) }));
  if (kind === 'circle') return Array.from({ length: n }, (_, i) => ({ x: r3(50 + 32 * Math.sin((2 * Math.PI * i) / n)), y: r3(50 - 32 * Math.cos((2 * Math.PI * i) / n)) }));
  const rows = Math.ceil(n / cols);
  return Array.from({ length: n }, (_, i) => ({ x: r3(cols === 1 ? 50 : 20 + (60 * (i % cols)) / (cols - 1)), y: r3(rows === 1 ? 50 : 25 + (50 * Math.floor(i / cols)) / (rows - 1)) }));
};

/** The smallest distance between any two dancers. */
export const minSpacing = (pts: readonly Point[]): number => {
  let best = Infinity;
  for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) best = Math.min(best, Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y));
  return r3(best);
};

/** Rows and columns a block of dancers fills. */
export const blockShape = (n: number, cols: number) => ({ rows: Math.ceil(n / cols), cols });

export type PathKind = 'straight' | 'zigzag' | 'curved' | 'circular';
/** A pathway on the floor, drawn in a 100 x 100 box. */
export const pathPoints = (kind: PathKind): Point[] => {
  if (kind === 'straight') return [{ x: 10, y: 50 }, { x: 90, y: 50 }];
  if (kind === 'zigzag') return [10, 30, 50, 70, 90].map((x, i) => ({ x, y: i % 2 === 0 ? 20 : 80 }));
  if (kind === 'curved') return Array.from({ length: 13 }, (_, i) => ({ x: r3(10 + (80 * i) / 12), y: r3(50 - 30 * Math.sin((Math.PI * 2 * i) / 12)) }));
  return Array.from({ length: 25 }, (_, i) => ({ x: r3(50 + 36 * Math.cos((2 * Math.PI * i) / 24 - Math.PI / 2)), y: r3(50 + 36 * Math.sin((2 * Math.PI * i) / 24 - Math.PI / 2)) }));
};

// ---------- energy ----------

export type EnergyKind = 'sharp' | 'smooth' | 'sustained';
/** The shape of the movement's energy over time, in a 100 x 100 box. */
export const energyPoints = (kind: EnergyKind): Point[] => {
  if (kind === 'sharp') return [10, 22, 34, 46, 58, 70, 82, 94].map((x, i) => ({ x, y: i % 2 === 0 ? 75 : 25 }));
  if (kind === 'smooth') return Array.from({ length: 25 }, (_, i) => ({ x: r3(8 + (86 * i) / 24), y: r3(50 - 25 * Math.sin((Math.PI * 2 * i) / 24)) }));
  return [{ x: 8, y: 50 }, { x: 94, y: 50 }];
};

// ---------- canon and unison ----------

/** When each dancer starts and finishes a phrase: an offset of 0 is unison, more is a canon. */
export const canonEntries = (dancers: number, offset: number, phrase: number) =>
  Array.from({ length: dancers }, (_, i) => ({ dancer: i + 1, start: 1 + i * offset, end: i * offset + phrase }));

// ---------- sections of a routine or a session ----------

export interface Section {
  name: string;
  size: number;
}
/** Sections end to end: where each starts and ends, the total and each one's share (whole percent). */
export const splitPlan = (sections: readonly Section[]) => {
  const total = sections.reduce((t, s) => t + s.size, 0);
  let at = 0;
  return {
    total,
    parts: sections.map((s) => {
      const part = { ...s, from: at + 1, to: at + s.size, percent: Math.round((100 * s.size) / total) };
      at += s.size;
      return part;
    }),
  };
};

// ---------- the body ----------

export type Level = 'high' | 'medium' | 'low';
/** Stick-figure joints in a 40 x 52 cell, so that "high" really is higher on the page than "low". */
export const POSES: Record<Level, { head: Point; neck: Point; hip: Point; hands: [Point, Point]; knees: [Point, Point]; feet: [Point, Point] }> = {
  high: { head: { x: 20, y: 7 }, neck: { x: 20, y: 12 }, hip: { x: 20, y: 29 }, hands: [{ x: 11, y: 2 }, { x: 29, y: 2 }], knees: [{ x: 18, y: 40 }, { x: 22, y: 40 }], feet: [{ x: 17, y: 50 }, { x: 23, y: 50 }] },
  medium: { head: { x: 20, y: 19 }, neck: { x: 20, y: 24 }, hip: { x: 20, y: 36 }, hands: [{ x: 8, y: 29 }, { x: 32, y: 29 }], knees: [{ x: 11, y: 43 }, { x: 29, y: 43 }], feet: [{ x: 11, y: 50 }, { x: 29, y: 50 }] },
  low: { head: { x: 5, y: 44 }, neck: { x: 10, y: 45 }, hip: { x: 25, y: 47 }, hands: [{ x: 14, y: 38 }, { x: 14, y: 50 }], knees: [{ x: 33, y: 42 }, { x: 33, y: 50 }], feet: [{ x: 39, y: 47 }, { x: 39, y: 51 }] },
};

/** The joints that should sit on one vertical line in good posture (x is the same for all of them). */
export const ALIGNMENT = [
  { part: 'Ear', y: 8 },
  { part: 'Shoulder', y: 18 },
  { part: 'Hip', y: 34 },
  { part: 'Knee', y: 46 },
  { part: 'Ankle', y: 58 },
] as const;
