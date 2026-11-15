/**
 * Numbers and note names for the Grade 9 Creative Arts music lessons. Bar totals, scale spelling,
 * staff positions, chords, key signatures and form maps all come from here (ca9-music-helpers.test.ts),
 * so the slides and pictures can not disagree with each other.
 */

// ---------- note values and bars ----------

export const NOTE_BEATS = { semibreve: 4, minim: 2, crotchet: 1, quaver: 0.5, semiquaver: 0.25 } as const;
export type NoteName = keyof typeof NOTE_BEATS;

export interface TimeSig {
  beats: number; // top number: beats in a bar
  unit: 2 | 4 | 8; // bottom number: the kind of note that is one beat
}

/** Total length of a run of notes, in crotchet beats. */
export const totalBeats = (notes: readonly NoteName[]): number => notes.reduce((t, n) => t + NOTE_BEATS[n], 0);

/** How a bar of notes compares with a time signature: whole bar, too short or too long. */
export const barCheck = (notes: readonly NoteName[], sig: TimeSig) => {
  const total = totalBeats(notes);
  const need = (sig.beats * 4) / sig.unit; // length of a bar in crotchet beats
  return { total, need, status: total === need ? ('full' as const) : total < need ? ('short' as const) : ('long' as const) };
};

/** A phrase of `bars` bars in the time signature, in beats. */
export const phraseBeats = (bars: number, sig: TimeSig): number => bars * ((sig.beats * 4) / sig.unit);

// ---------- scales ----------

const LETTERS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'] as const;
const NATURAL_SEMITONE: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
export const MAJOR_STEPS = ['tone', 'tone', 'semitone', 'tone', 'tone', 'tone', 'semitone'] as const;
const STEP_SIZE = { tone: 2, semitone: 1 } as const;

export interface Pitch {
  letter: (typeof LETTERS)[number];
  /** -1 flat, 0 natural, 1 sharp */
  acc: -1 | 0 | 1;
  octave: number;
}

export const pitchName = (p: Pitch): string => `${p.letter}${p.acc === 1 ? '#' : p.acc === -1 ? 'b' : ''}`;
const midi = (p: Pitch): number => 12 * (p.octave + 1) + NATURAL_SEMITONE[p.letter] + p.acc;

/** The major scale from a natural-letter root, one octave up, spelled with one letter per note. */
export const majorScale = (rootLetter: (typeof LETTERS)[number], rootOctave: number): Pitch[] => {
  const start = LETTERS.indexOf(rootLetter);
  // F major starts on a natural F; its fourth note is B flat. Spelling uses each letter once.
  const notes: Pitch[] = [{ letter: rootLetter, acc: 0, octave: rootOctave }];
  let semis = 0;
  for (let i = 1; i <= 7; i++) {
    semis += STEP_SIZE[MAJOR_STEPS[i - 1]];
    const li = start + i;
    const letter = LETTERS[li % 7];
    const octave = rootOctave + Math.floor(li / 7);
    const natural = 12 * (octave + 1) + NATURAL_SEMITONE[letter];
    const target = 12 * (rootOctave + 1) + NATURAL_SEMITONE[rootLetter] + semis;
    notes.push({ letter, acc: (target - natural) as -1 | 0 | 1, octave });
  }
  return notes;
};

export const scaleNames = (scale: readonly Pitch[]): string[] => scale.map(pitchName);

/** Semitones between two pitches (used to prove the tone/semitone pattern). */
export const semitonesBetween = (a: Pitch, b: Pitch): number => midi(b) - midi(a);

// ---------- the treble staff ----------

/** Steps above the bottom line (E4 = 0): each step is a line or a space. C4 is -2, F5 (top line) is 8. */
export const staffStep = (p: Pitch): number => (p.octave - 4) * 7 + (LETTERS.indexOf(p.letter) - LETTERS.indexOf('E'));

/** Even steps outside the five lines (below 0 or above 8) need a short ledger line. */
export const ledgerSteps = (steps: readonly number[]): number[] => {
  const out = new Set<number>();
  for (const s of steps) {
    for (let k = -2; k >= s; k -= 2) out.add(k);
    for (let k = 10; k <= s; k += 2) out.add(k);
  }
  return [...out].sort((a, b) => a - b);
};

// ---------- chords and intervals ----------

/** The triad built on scale degree d (1 to 7): the notes on degrees d, d+2 and d+4. */
export const triad = (scale: readonly Pitch[], degree: number): Pitch[] => {
  const full = [...scale.slice(0, 7), ...scale.slice(0, 7).map((p) => ({ ...p, octave: p.octave + 1 }))];
  const i = degree - 1;
  return [full[i], full[i + 2], full[i + 4]];
};

/** Interval number between two notes, counting both letters: C up to E is a 3rd, C up to G a 5th. */
export const intervalNumber = (low: Pitch, high: Pitch): number => Math.abs(staffStep(high) - staffStep(low)) + 1;

/** Number of sharps (positive) or flats (negative) in a major key, worked out from the scale. */
export const keySignature = (rootLetter: (typeof LETTERS)[number]) => {
  const scale = majorScale(rootLetter, 4).slice(0, 7);
  const marked = scale.filter((p) => p.acc !== 0);
  const sharps = marked.filter((p) => p.acc === 1).map(pitchName);
  const flats = marked.filter((p) => p.acc === -1).map(pitchName);
  return { sharps, flats, count: sharps.length - flats.length };
};

// ---------- form and texture ----------

/** Section letters for a form such as 'ABA': the contrast sections and where the opening returns. */
export const formMap = (form: string) => {
  const sections = form.split('');
  return {
    sections,
    distinct: new Set(sections).size,
    returns: sections.length > 1 && sections[sections.length - 1] === sections[0],
    name: new Set(sections).size === 2 && sections.length === 2 ? 'binary' : sections.length === 3 && sections[0] === sections[2] && sections[1] !== sections[0] ? 'ternary' : 'other',
  };
};

/** Length of a piece in bars when each section is `barsEach` bars long. */
export const pieceBars = (form: string, barsEach: number): number => form.length * barsEach;

/** How many times an ostinato of `bars` bars repeats in a piece of `total` bars (a whole number). */
export const ostinatoRepeats = (total: number, bars: number): number => (total % bars === 0 ? total / bars : Math.floor(total / bars));

/** Slowest to fastest, as the lesson lists them. */
export const TEMPO_LADDER = [
  { term: 'Adagio', meaning: 'slow' },
  { term: 'Andante', meaning: 'walking' },
  { term: 'Moderato', meaning: 'moderate' },
  { term: 'Allegro', meaning: 'fast' },
  { term: 'Presto', meaning: 'very fast' },
] as const;

/** Dynamics from softest to loudest. */
export const DYNAMICS = ['pp', 'p', 'mp', 'mf', 'f', 'ff'] as const;
