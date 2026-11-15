/**
 * Facts and numbers for the Grade 8 Drama lessons (Creative Arts). Everything a slide or picture
 * lays out (stage areas, who stands where, time splits, the tension curve) comes from here and is
 * asserted in ca8-drama-helpers.test.ts, so the lessons, the pictures and the answers can not drift.
 */

// ---------- the stage ----------

/** Stage areas as the audience sees them: row 0 is the back of the stage (upstage), row 2 the front (downstage). */
export const STAGE_ROWS = ['Upstage', 'Centre', 'Downstage'] as const;
/** Column 0 is the LEFT of the picture. Stage directions are the ACTOR's left and right, facing the audience, so stage right is on the left of the picture. */
export const STAGE_COLS = ['right', 'centre', 'left'] as const;

export type StageSpot = readonly [row: number, col: number];

export const stageAreaName = ([row, col]: StageSpot): string => {
  if (row === 1 && col === 1) return 'Centre stage';
  if (row === 1) return `Centre ${STAGE_COLS[col]}`;
  return `${STAGE_ROWS[row]} ${STAGE_COLS[col]}`;
};

/** Every area, back row first, left of the picture first. */
export const allStageAreas = (): { spot: StageSpot; name: string }[] =>
  STAGE_ROWS.flatMap((_, r) => STAGE_COLS.map((_c, c) => ({ spot: [r, c] as StageSpot, name: stageAreaName([r, c]) })));

/** How many areas a move crosses (diagonals count as one). */
export const moveSteps = (a: StageSpot, b: StageSpot): number => Math.max(Math.abs(a[0] - b[0]), Math.abs(a[1] - b[1]));

/** A planned set of moves for one actor (blocking): the route and its length. */
export const blocking = (spots: readonly StageSpot[]) => ({
  names: spots.map(stageAreaName),
  legs: spots.slice(1).map((s, i) => ({ from: stageAreaName(spots[i]), to: stageAreaName(s), steps: moveSteps(spots[i], s) })),
  totalSteps: spots.slice(1).reduce((t, s, i) => t + moveSteps(spots[i], s), 0),
});

// ---------- voice, character, backstage ----------

export interface Term {
  name: string;
  meaning: string;
}

export const VOICE: readonly Term[] = [
  { name: 'Volume', meaning: 'how loud or soft' },
  { name: 'Pitch', meaning: 'how high or low' },
  { name: 'Pace', meaning: 'how fast or slow' },
  { name: 'Pause', meaning: 'a planned silence' },
  { name: 'Projection', meaning: 'reaching the back row' },
  { name: 'Articulation', meaning: 'forming words clearly' },
];

export const CHARACTER: readonly Term[] = [
  { name: 'Voice', meaning: 'how they sound' },
  { name: 'Movement', meaning: 'how they move' },
  { name: 'Motivation', meaning: 'what they want' },
  { name: 'Reaction', meaning: 'how they react' },
];

export const BACKSTAGE: readonly Term[] = [
  { name: 'Stage manager', meaning: 'calls the cues' },
  { name: 'Props', meaning: 'move the objects' },
  { name: 'Lights and sound', meaning: 'effects on cue' },
  { name: 'Costumes', meaning: 'quick changes' },
];

/** A line marked up for the voice: spoken pieces, with a planned pause (in beats) between them. */
export interface Marked {
  text?: string;
  volume?: 'loud' | 'medium' | 'soft';
  pace?: 'fast' | 'slow';
  pauseBeats?: number;
}
export const STOP_LINE: readonly Marked[] = [
  { text: 'Stop!', volume: 'loud', pace: 'fast' },
  { pauseBeats: 1 },
  { text: "Don't open that door.", volume: 'medium', pace: 'slow' },
];
export const markedText = (m: readonly Marked[]): string => m.filter((p) => p.text).map((p) => p.text).join(' ');
export const markedPause = (m: readonly Marked[]): number => m.reduce((t, p) => t + (p.pauseBeats ?? 0), 0);

// ---------- tableau ----------

export type Level = 'high' | 'medium' | 'low';
export interface Figure {
  x: number;
  level: Level;
  /** -1 faces left, 1 faces right, 0 faces the front: always towards the focus point. */
  facing: -1 | 0 | 1;
}
/** Spread figures across a 0-100 width at the given levels; each leans towards the focus point. */
export const tableau = (levels: readonly Level[], focusX = 50): Figure[] =>
  levels.map((level, i) => {
    const x = levels.length === 1 ? 50 : Math.round(14 + (i * 72) / (levels.length - 1));
    return { x, level, facing: x < focusX - 3 ? 1 : x > focusX + 3 ? -1 : 0 };
  });
export const TABLEAU_LEVELS: readonly Level[] = ['low', 'high', 'medium', 'low'];

// ---------- story structure ----------

export type Part = 'beginning' | 'middle' | 'end';
/** A tension curve with `beats` points: it rises to the climax, then falls to the ending. */
export const tensionArc = (beats: number, climaxAt: number, start = 1, peak = 9, end = 2) =>
  Array.from({ length: beats }, (_, i) => {
    const value = i <= climaxAt ? start + ((peak - start) * i) / climaxAt : peak - ((peak - end) * (i - climaxAt)) / (beats - 1 - climaxAt);
    const part: Part = i < 2 ? 'beginning' : i > climaxAt ? 'end' : 'middle';
    return { beat: i + 1, value: Math.round(value * 100) / 100, part };
  });

// ---------- rehearsal time ----------

/** Share `total` minutes by the given weights; the parts always add up to the total. */
export const splitMinutes = (total: number, weights: readonly number[]): number[] => {
  const w = weights.reduce((a, b) => a + b, 0);
  const raw = weights.map((x) => (total * x) / w);
  const out = raw.map(Math.floor);
  let left = total - out.reduce((a, b) => a + b, 0);
  raw
    .map((r, i) => ({ i, frac: r - Math.floor(r) }))
    .sort((a, b) => b.frac - a.frac)
    .forEach(({ i }) => {
      if (left > 0) {
        out[i]++;
        left--;
      }
    });
  return out;
};
export const REHEARSAL_PARTS = ['Warm-up', 'Blocking', 'Run the scene', 'Notes'] as const;
export const rehearsalPlan = (total: number, weights: readonly number[] = [1, 2, 2, 1]) => {
  const minutes = splitMinutes(total, weights);
  return REHEARSAL_PARTS.map((name, i) => ({ name, minutes: minutes[i] }));
};

// ---------- scripts ----------

export interface ScriptLine {
  who: string;
  direction?: string;
  text: string;
}
export const LOST_PHONE: readonly ScriptLine[] = [
  { who: 'NALEDI', direction: 'searching her bag, panicking', text: 'It was here a minute ago!' },
  { who: 'SIPHO', direction: 'calmly', text: 'When did you last use it?' },
  { who: 'NALEDI', direction: 'stopping', text: 'In the taxi. Oh no.' },
];
export const THE_LETTER: readonly ScriptLine[] = [
  { who: 'THANDI', direction: 'holding the letter, hands shaking', text: "I can't open it." },
  { who: 'MAMA', direction: 'quietly, stepping closer', text: 'Then we open it together.' },
];
export const WINDOW_LINE: ScriptLine = { who: 'THABO', direction: 'walking slowly to the window', text: "I thought you'd gone." };

export const scriptStats = (lines: readonly ScriptLine[]) => ({
  lines: lines.length,
  speakers: [...new Set(lines.map((l) => l.who))].length,
  withDirections: lines.filter((l) => l.direction).length,
});
