/**
 * Numbers and positions for the Grade 8 Creative Arts music lessons. Every beat count, bar total,
 * staff position, form letter and tempo figure that a slide or picture shows comes from here
 * (ca8-music-helpers.test.ts), so the slides and the pictures can not drift apart.
 */

// ---------- note and rest values ----------

export type ValueName = 'semibreve' | 'minim' | 'crotchet' | 'quaver';

export const NOTE_BEATS: Record<ValueName, number> = { semibreve: 4, minim: 2, crotchet: 1, quaver: 0.5 };
export const VALUE_ORDER: readonly ValueName[] = ['semibreve', 'minim', 'crotchet', 'quaver'];

export interface Sound {
  value: ValueName;
  /** A rest is a silence of the same length as the note of that name. */
  rest?: boolean;
}

export const sound = (value: ValueName, rest = false): Sound => ({ value, rest });
export const beatsOf = (s: Sound): number => NOTE_BEATS[s.value];
export const totalBeats = (bar: readonly Sound[]): number => bar.reduce((t, s) => t + beatsOf(s), 0);

export type TimeSig = '2/4' | '3/4' | '4/4';
export const beatsPerBar = (sig: TimeSig): number => Number(sig.split('/')[0]);

/** A bar is correct when its notes and rests add up to the top number of the time signature. */
export const fillsBar = (sig: TimeSig, bar: readonly Sound[]): boolean => totalBeats(bar) === beatsPerBar(sig);

/** Where each sound starts and how long it lasts, in beats, for drawing a rhythm bar to scale. */
export const barLayout = (bar: readonly Sound[]) => {
  let at = 0;
  return bar.map((s) => {
    const item = { ...s, start: at, beats: beatsOf(s) };
    at += item.beats;
    return item;
  });
};

/** The beat still missing from a bar (0 when full, negative when it holds too much). */
export const beatsMissing = (sig: TimeSig, bar: readonly Sound[]): number => beatsPerBar(sig) - totalBeats(bar);

/** Beats counted over a number of bars. */
export const beatsInBars = (sig: TimeSig, bars: number): number => beatsPerBar(sig) * bars;

/** The count a group says aloud before it starts: "1 2 3 4" in 4/4. */
export const countIn = (sig: TimeSig): string => Array.from({ length: beatsPerBar(sig) }, (_, i) => i + 1).join(' ');

// ---------- the staff ----------

const LETTERS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'] as const;
export type Letter = (typeof LETTERS)[number];

/**
 * Steps above the bottom line of the treble staff (E4 = 0). Each step is one line or one space, so
 * the five lines are steps 0, 2, 4, 6, 8; C4 (middle C) is -2 and sits on a ledger line below.
 */
export const staffStep = (letter: Letter, octave: number): number => octave * 7 + LETTERS.indexOf(letter) - (4 * 7 + LETTERS.indexOf('E'));

export const noteStep = (name: string): number => {
  const m = /^([A-G])([0-9])$/.exec(name);
  if (!m) return NaN;
  return staffStep(m[1] as Letter, Number(m[2]));
};

/** Whether a note sits on a line (even step inside the staff) rather than in a space. */
export const onLine = (step: number): boolean => step % 2 === 0;

/** How many steps and which direction a tune moves between two notes: one step is a "step", more is a "skip" or leap. */
export const motion = (from: string, to: string): 'repeat' | 'step up' | 'step down' | 'skip up' | 'skip down' => {
  const d = noteStep(to) - noteStep(from);
  if (d === 0) return 'repeat';
  const size = Math.abs(d) === 1 ? 'step' : 'skip';
  return `${size} ${d > 0 ? 'up' : 'down'}` as 'step up' | 'step down' | 'skip up' | 'skip down';
};

// ---------- dynamics ----------

export const DYNAMICS = [
  { mark: 'pp', word: 'pianissimo', meaning: 'very soft' },
  { mark: 'p', word: 'piano', meaning: 'soft' },
  { mark: 'mp', word: 'mezzo piano', meaning: 'moderately soft' },
  { mark: 'mf', word: 'mezzo forte', meaning: 'moderately loud' },
  { mark: 'f', word: 'forte', meaning: 'loud' },
  { mark: 'ff', word: 'fortissimo', meaning: 'very loud' },
] as const;

/** 1 (pp) to 6 (ff). */
export const loudness = (mark: string): number => DYNAMICS.findIndex((d) => d.mark === mark) + 1;

// ---------- form, ostinato and layers ----------

/** "AB" is binary, "ABA" is ternary; anything else is not one of the two forms in this lesson. */
export const formName = (sections: string): 'binary' | 'ternary' | 'other' => {
  if (sections === 'AB') return 'binary';
  if (sections === 'ABA') return 'ternary';
  return 'other';
};

/** True when a piece comes back to its first section at the end. */
export const returnsToStart = (sections: string): boolean => sections.length > 1 && sections[sections.length - 1] === sections[0];

/** An ostinato is a short pattern repeated: the same pattern written out a number of times. */
export const ostinato = <T,>(pattern: readonly T[], times: number): T[] => Array.from({ length: times }, () => pattern).flat();

/** Call-and-response: the phrases alternate, call first. */
export const callAndResponse = (pairs: number): ('call' | 'response')[] => Array.from({ length: pairs * 2 }, (_, i) => (i % 2 === 0 ? 'call' : 'response'));

export interface Part {
  name: string;
  level: number;
}

/** Bring any part that is louder than the target down to it; quieter parts stay as they are. */
export const rebalance = (parts: readonly Part[], target: number): Part[] => parts.map((p) => ({ ...p, level: Math.min(p.level, target) }));

/** The parts that overpower the others: louder than the target. */
export const tooLoud = (parts: readonly Part[], target: number): string[] => parts.filter((p) => p.level > target).map((p) => p.name);

/** How many layers of sound are heard: one per part that is playing. */
export const layers = (parts: readonly { name: string; playing: boolean }[]): number => parts.filter((p) => p.playing).length;

// ---------- tempo ----------

/** Seconds from one beat to the next at a tempo in beats per minute. */
export const secondsPerBeat = (bpm: number): number => Math.round((60 / bpm) * 1000) / 1000;
export const barSeconds = (bpm: number, sig: TimeSig): number => Math.round(secondsPerBeat(bpm) * beatsPerBar(sig) * 1000) / 1000;
export const TEMPO_TERMS = [
  { term: 'adagio', meaning: 'slow' },
  { term: 'andante', meaning: 'at a walking pace' },
  { term: 'allegro', meaning: 'fast and lively' },
] as const;

// ---------- rehearsing ----------

/** Bars played when a hard section (from bar `from` to bar `to`, both included) is practised `times` times. */
export const barsPracticed = (from: number, to: number, times: number): number => (to - from + 1) * times;

/** Seconds that a number of bars last at a tempo. */
export const barsSeconds = (bpm: number, sig: TimeSig, bars: number): number => Math.round(barSeconds(bpm, sig) * bars * 1000) / 1000;
