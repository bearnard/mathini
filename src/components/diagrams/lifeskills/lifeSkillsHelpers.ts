/** Rhythm values in beats: a long sound is 1 beat, a short sound is half a beat. */
export const BEAT = { long: 1, short: 0.5 } as const;

export type Sound = keyof typeof BEAT;

/** Total beats in a pattern of sounds. */
export const beatsIn = (pattern: Sound[]): number => pattern.reduce((sum, s) => sum + BEAT[s], 0);

/** Where each sound starts, in beats from the start of the bar. */
export const starts = (pattern: Sound[]): number[] => pattern.map((_, i) => beatsIn(pattern.slice(0, i)));

/** The pattern drawn in the rhythm picture: long, short, short, long, long = 4 beats. */
export const DEMO_PATTERN: Sound[] = ['long', 'short', 'short', 'long', 'long'];
