/**
 * Facts and numbers for the Grade 8 Creative Arts music lessons that follow the CAPS music plan: note values (with the dotted
 * minim, dotted crotchet and the triplet), time signatures including 6/8, the major scales and key signatures of C, G, F and D,
 * tempo, dynamic and articulation words, the four families of instruments and the jingle. Every count or note name that a slide,
 * picture or question shows comes from here (ca8-music-gaps.test.ts and g8CaMusic.test.ts recompute them independently).
 */

// ---------- durations in thirds of a quaver, so a triplet is a whole number ----------

export type Duration = 'semibreve' | 'dotted minim' | 'minim' | 'dotted crotchet' | 'crotchet' | 'quaver' | 'triplet quaver';

/** Length in sixths of a crotchet: a crotchet is 6, a quaver 3 and a triplet quaver 2 (three of them fill one crotchet). */
export const UNITS: Record<Duration, number> = {
  semibreve: 24,
  'dotted minim': 18,
  minim: 12,
  'dotted crotchet': 9,
  crotchet: 6,
  quaver: 3,
  'triplet quaver': 2,
};

/** How many crotchet beats a duration lasts. */
export const crotchetBeats = (d: Duration): number => UNITS[d] / 6;

export type Metre = '2/4' | '3/4' | '4/4' | '6/8';

/** Length of one bar in the same units. 2/4 holds 2 crotchets, 3/4 holds 3, 4/4 holds 4 and 6/8 holds six quavers. */
export const BAR_UNITS: Record<Metre, number> = { '2/4': 12, '3/4': 18, '4/4': 24, '6/8': 18 };

export const barTotal = (bar: readonly Duration[]): number => bar.reduce((t, d) => t + UNITS[d], 0);
export const fills = (m: Metre, bar: readonly Duration[]): boolean => barTotal(bar) === BAR_UNITS[m];
/** What is still missing from the bar, in sixths of a crotchet (negative when the bar is overfull). */
export const missingUnits = (m: Metre, bar: readonly Duration[]): number => BAR_UNITS[m] - barTotal(bar);

/** The top number is how many beats are counted; in 6/8 the six quavers are felt as two beats of three. */
export const countedBeats = (m: Metre): number => (m === '6/8' ? 2 : Number(m.split('/')[0]));
export const quaversPerBar = (m: Metre): number => BAR_UNITS[m] / UNITS.quaver;

/** How many triplet quavers are played in the time of one crotchet. */
export const tripletsPerCrotchet = (): number => UNITS.crotchet / UNITS['triplet quaver'];
/** Two ordinary quavers fill a crotchet; so a triplet puts this many notes where two would be. */
export const quaversPerCrotchet = (): number => UNITS.crotchet / UNITS.quaver;

// ---------- the major scale, its notes and key signature ----------

export type Key = 'C' | 'G' | 'F' | 'D';
export const KEYS: readonly Key[] = ['C', 'G', 'F', 'D'];

/** Tone (2 semitones) or semitone (1 semitone) between neighbours of any major scale: T T S T T T S. */
export const MAJOR_PATTERN = [2, 2, 1, 2, 2, 2, 1] as const;
export const patternLetters = (): string => MAJOR_PATTERN.map((s) => (s === 2 ? 'T' : 'S')).join(' ');

const LETTERS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'] as const;
const NATURAL_PC: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/** The eight notes of a major scale (the first note is repeated an octave higher), spelt with one letter per step. */
export const majorScale = (key: Key): string[] => {
  const start = LETTERS.indexOf(key);
  let pc = NATURAL_PC[key];
  const out: string[] = [];
  for (let i = 0; i < 8; i++) {
    const letter = LETTERS[(start + i) % 7];
    let diff = (pc - NATURAL_PC[letter] + 12) % 12;
    if (diff > 6) diff -= 12;
    out.push(letter + (diff === 1 ? '♯' : diff === -1 ? '♭' : ''));
    if (i < 7) pc = (pc + MAJOR_PATTERN[i]) % 12;
  }
  return out;
};

/** The sharps or flats in the key signature, in the order they are written. */
export const keySignature = (key: Key): { kind: 'sharp' | 'flat' | 'none'; notes: string[] } => {
  const accidentals = majorScale(key).slice(0, 7).filter((n) => n.length > 1);
  if (accidentals.length === 0) return { kind: 'none', notes: [] };
  return { kind: accidentals[0].endsWith('♯') ? 'sharp' : 'flat', notes: accidentals };
};

/** Number of notes in the scale that change letter name (one letter per step, so all seven letters appear once). */
export const letterNames = (key: Key): number => new Set(majorScale(key).slice(0, 7).map((n) => n[0])).size;

// ---------- staff notes (treble clef) for the picture: letter and octave of each note of the scale ----------

/** Scale notes written as letter + octave for the staff picture ("F4"), starting on the key note in the octave of middle C. */
export const scaleOnStaff = (key: Key): string[] => {
  const start = LETTERS.indexOf(key);
  return Array.from({ length: 8 }, (_, i) => {
    const idx = start + i;
    const octave = 4 + Math.floor(idx / 7);
    return `${LETTERS[idx % 7]}${octave}`;
  });
};

// ---------- tempo, dynamics, articulation ----------

export const TEMPO_ORDER = ['andante', 'moderato', 'allegro', 'presto'] as const;
export const TEMPO_MEANING: Record<string, string> = {
  andante: 'at a walking pace',
  moderato: 'at a moderate speed',
  allegro: 'fast and lively',
  presto: 'very fast',
  ritardando: 'gradually slowing down',
  'a tempo': 'back to the original speed',
};
/** Position from slow (1) to fast (4) of the four tempo words that name a speed. */
export const speedRank = (word: string): number => TEMPO_ORDER.indexOf(word as (typeof TEMPO_ORDER)[number]) + 1;
export const faster = (a: string, b: string): string => (speedRank(a) > speedRank(b) ? a : b);

export const DYNAMIC_WORDS: Record<string, string> = {
  piano: 'soft',
  forte: 'loud',
  crescendo: 'gradually getting louder',
  diminuendo: 'gradually getting softer',
};
export const ARTICULATION: Record<string, string> = {
  legato: 'smooth and joined together',
  staccato: 'short and detached',
};

/** Beats and bars in a stretch of music: seconds at a tempo (beats a minute) and a metre. */
export const beatsIn = (seconds: number, bpm: number): number => (seconds * bpm) / 60;
export const barsIn = (seconds: number, bpm: number, m: Metre): number => beatsIn(seconds, bpm) / countedBeats(m);
/** Seconds one bar lasts at a tempo, counting the crotchet beats. */
export const barSecondsAt = (bpm: number, beatsInBar: number): number => (60 / bpm) * beatsInBar;

// ---------- the four families of instruments ----------

export interface Family {
  name: 'membranophones' | 'idiophones' | 'chordophones' | 'aerophones';
  sound: string;
  examples: string[];
}

export const FAMILIES: readonly Family[] = [
  { name: 'membranophones', sound: 'a stretched skin or membrane vibrates', examples: ['djembe', 'ngoma drum', 'snare drum'] },
  { name: 'idiophones', sound: 'the body of the instrument itself vibrates', examples: ['marimba', 'triangle', 'shaker'] },
  { name: 'chordophones', sound: 'a stretched string vibrates', examples: ['guitar', 'violin', 'uhadi'] },
  { name: 'aerophones', sound: 'a column of air vibrates', examples: ['flute', 'recorder', 'vuvuzela'] },
];

export const familyOf = (instrument: string): string | undefined => FAMILIES.find((f) => f.examples.includes(instrument))?.name;

// ---------- patterns, riffs, the jingle ----------

/** Notes played when a pattern of this many notes is repeated this many times. */
export const patternNotes = (cell: number, times: number): number => cell * times;
/** Bars needed to hold a number of beats in a metre counted in crotchet beats. */
export const barsFor = (beats: number, beatsInBar: number): number => beats / beatsInBar;
