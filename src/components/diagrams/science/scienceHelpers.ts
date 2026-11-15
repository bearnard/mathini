/**
 * Small tested helpers behind the Natural Sciences and Technology pictures: where the particles
 * go in each state of matter, which zone of the pH scale a value is in, what litmus paper does,
 * and efficiency. Nothing here is drawn by eye.
 */

export type State = 'solid' | 'liquid' | 'gas';
export interface Dot { x: number; y: number }

/** A small deterministic generator, so the picture is the same on the server and in the browser. */
const lcg = (seed: number) => {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
};

/**
 * Particle positions in a box of w by h.
 * solid: a regular grid, touching; liquid: touching rows, shifted so they can slide past each
 * other, a little looser than a solid; gas: far apart and scattered.
 */
export const particleLayout = (state: State, w: number, h: number, seed = 7): Dot[] => {
  if (state === 'solid') {
    const cols = 6;
    const rows = 5;
    const dx = w / cols;
    const dy = h / rows;
    return Array.from({ length: cols * rows }, (_, i) => ({ x: dx / 2 + (i % cols) * dx, y: dy / 2 + Math.floor(i / cols) * dy }));
  }
  if (state === 'liquid') {
    const step = (w - 7.5) / 5;
    const out: Dot[] = [];
    for (let r = 0; r < 4; r++) {
      const count = r % 2 ? 5 : 6;
      const x0 = 4 + (r % 2 ? step / 2 : 0);
      for (let c = 0; c < count; c++) out.push({ x: x0 + c * step, y: h - 5 - r * ((h - 10) / 4.2) });
    }
    return out;
  }
  const rnd = lcg(seed + 11);
  const out: Dot[] = [];
  const minGap = Math.min(w, h) * 0.26;
  let guard = 0;
  while (out.length < 9 && guard++ < 5000) {
    const p = { x: w * 0.08 + rnd() * w * 0.84, y: h * 0.08 + rnd() * h * 0.84 };
    if (out.every((q) => Math.hypot(q.x - p.x, q.y - p.y) >= minGap)) out.push(p);
  }
  return out;
};

/** Mean distance from each particle to its nearest neighbour. Smaller means closer together. */
export const meanNearestGap = (dots: Dot[]): number =>
  dots.reduce((sum, p) => sum + Math.min(...dots.filter((q) => q !== p).map((q) => Math.hypot(q.x - p.x, q.y - p.y))), 0) / dots.length;

export type Zone = 'acid' | 'neutral' | 'base';

/** On the pH scale from 0 to 14: below 7 is acidic, 7 is neutral, above 7 is basic. */
export const phZone = (ph: number): Zone => {
  if (!(ph >= 0 && ph <= 14)) throw new RangeError('pH is between 0 and 14');
  return ph < 7 ? 'acid' : ph === 7 ? 'neutral' : 'base';
};

/** What litmus paper does: blue turns red in an acid, red turns blue in a base, neither changes in a neutral substance. */
export const litmus = (paper: 'blue' | 'red', zone: Zone): 'blue' | 'red' =>
  paper === 'blue' ? (zone === 'acid' ? 'red' : 'blue') : zone === 'base' ? 'blue' : 'red';

/** Efficiency as a percentage: the useful energy out of every 100 units of energy put in. */
export const efficiency = (useful: number, input: number): number => {
  if (!(input > 0) || useful < 0 || useful > input) throw new RangeError('useful energy is between 0 and the energy put in');
  return Math.round((useful / input) * 1000) / 10;
};

/** Energy that is not useful: put in, minus useful. */
export const wasted = (useful: number, input: number): number => input - useful;

/**
 * Words that the lesson text must contain so that a learner can answer every bank question:
 * the content words (four letters or more) of each correct answer.
 */
export const answerWords = (answer: string): string[] =>
  [...new Set(answer.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').split(/\s+/).filter((w) => w.length >= 4))];

/** The correct-answer strings of a lesson file's question bank. */
export const bankAnswers = (source: string): string[] => {
  const bank = source.slice(source.indexOf('const bank'));
  return [...bank.matchAll(/answer: '((?:[^'\\]|\\.)*)'/g)].map((m) => m[1].replace(/\\'/g, "'"));
};

/** Bank answers whose key words are missing from the lesson slides (the part before the bank). */
export const uncoveredAnswers = (source: string): string[] => {
  const slides = source.slice(0, source.indexOf('const bank')).toLowerCase();
  return bankAnswers(source).filter((a) => answerWords(a).some((w) => !slides.includes(w)));
};
