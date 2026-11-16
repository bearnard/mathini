// The Grade 5 generated exercises (Rounding, Comparing, Place value, Mass problems, Reading scales, Conversions) as PURE functions of a random generator,
// so the SERVER can rebuild the exact problem a learner was given from a seed it issued and mark the answer itself (src/lib/server/exerciseChallenge.ts).
// The components use the same functions: what the learner sees is what the server checks. Nothing here touches the browser or the database.
import { weightOnMark } from '../../curriculum/grade5/term4/mass/massFormat';
import type { Rng } from './seededRandom';

export const EXERCISE_KINDS = ['rounding', 'comparing', 'place-value', 'mass-calc', 'reading-scales', 'conversions'] as const;
export type ExerciseKind = (typeof EXERCISE_KINDS)[number];
export const isExerciseKind = (v: unknown): v is ExerciseKind => typeof v === 'string' && (EXERCISE_KINDS as readonly string[]).includes(v);

/** Where an answer to this exercise is recorded (the same task, subject and section the components always used). */
export const EXERCISE_META: Record<ExerciseKind, { task: string; subject: string; section: string }> = {
  rounding: { task: 'gr5-whole-numbers-t4', subject: 'math', section: 'rounding' },
  comparing: { task: 'gr5-whole-numbers-t4', subject: 'math', section: 'comparing' },
  'place-value': { task: 'gr5-whole-numbers-t4', subject: 'math', section: 'place-value' },
  'mass-calc': { task: 'gr5-mass-t4', subject: 'math', section: 'calculations' },
  'reading-scales': { task: 'gr5-mass-t4', subject: 'math', section: 'reading-scales' },
  conversions: { task: 'gr5-mass-t4', subject: 'math', section: 'conversions' },
};

const int = (rng: Rng, n: number): number => Math.floor(rng() * n);

export interface RoundingProblem { number: number; roundTo: number; answer: number }
export function roundingProblem(rng: Rng): RoundingProblem {
  const precisions = [5, 10, 100, 1000];
  const roundTo = precisions[int(rng, precisions.length)];
  let number = 0;
  do {
    const max = roundTo * 100;
    const min = roundTo * 2;
    number = Math.floor(rng() * (max - min)) + min;
  } while (number % roundTo === 0);
  return { number, roundTo, answer: Math.round(number / roundTo) * roundTo };
}

export interface ComparingProblem { numA: number; numB: number; answer: '<' | '>' | '=' }
export function comparingProblem(rng: Rng): ComparingProblem {
  const base = Math.floor(rng() * 900000) + 100000;
  const type = rng();
  const a = base;
  let b = base;
  if (type < 0.4) {
    b = a;
  } else if (type < 0.7) {
    const diff = Math.pow(10, Math.floor(rng() * 4));
    b = rng() < 0.5 || a - diff < 100000 ? a + diff : a - diff;
  } else {
    b = Math.floor(rng() * 900000) + 100000;
  }
  return { numA: a, numB: b, answer: a < b ? '<' : a > b ? '>' : '=' };
}

export interface PlaceValueProblem { number: number; targetDigitIndex: number; options: number[]; answer: number }
export function placeValueProblem(rng: Rng): PlaceValueProblem {
  const number = Math.floor(rng() * 900000) + 100000;
  const targetDigitIndex = Math.floor(rng() * 6);
  const digit = parseInt(number.toString().split('').reverse().join('')[targetDigitIndex]);
  const answer = digit * Math.pow(10, targetDigitIndex);
  const distractors = new Set<number>([answer]);
  while (distractors.size < 4) {
    const type = rng();
    let val: number;
    if (type < 0.33) val = digit * Math.pow(10, Math.floor(rng() * 6));
    else if (type < 0.66) val = (Math.floor(rng() * 9) + 1) * Math.pow(10, targetDigitIndex);
    else val = digit;
    if (val !== answer && val > 0) distractors.add(val);
    if (distractors.size < 4 && rng() < 0.1) distractors.add(Math.floor(rng() * 10000));
  }
  return { number, targetDigitIndex, options: Array.from(distractors).sort((a, b) => a - b), answer };
}

export interface MassProblem { question: string; answer: number; unit: string }
export function massProblem(rng: Rng): MassProblem {
  const types = ['add', 'sub', 'mul', 'div'];
  const type = types[int(rng, types.length)];
  const names = ['Thabo', 'Zinhle', 'Sipho', 'Aisha', 'Mrs Naidoo'];
  const name = names[int(rng, names.length)];
  if (type === 'add') {
    const w1 = Math.floor(rng() * 500) + 100;
    const w2 = Math.floor(rng() * 500) + 100;
    return { question: `${name} bought ${w1} g of flour and ${w2} g of sugar. What is the total mass of the ingredients?`, answer: w1 + w2, unit: 'g' };
  }
  if (type === 'sub') {
    const total = Math.floor(rng() * 800) + 200;
    const used = Math.floor(rng() * (total - 100)) + 50;
    return { question: `${name} had ${total} g of butter and used ${used} g for a cake. How much butter is left?`, answer: total - used, unit: 'g' };
  }
  if (type === 'mul') {
    const count = Math.floor(rng() * 8) + 2;
    const weight = Math.floor(rng() * 3) + 2;
    return { question: `One brick has a mass of ${weight} kg. What is the mass of ${count} bricks?`, answer: count * weight, unit: 'kg' };
  }
  const count = Math.floor(rng() * 4) + 2;
  const total = count * (Math.floor(rng() * 20) + 5);
  return { question: `${count} identical bags of rice have a total mass of ${total} kg. What is the mass of one bag?`, answer: total / count, unit: 'kg' };
}

export interface ScaleProblem { weight: number; scaleType: 'analogue' | 'digital'; maxScale: number }
export function scaleProblem(rng: Rng): ScaleProblem {
  const scaleType = rng() > 0.3 ? 'analogue' : 'digital';
  const maxes = [1000, 2000, 5000];
  const maxScale = maxes[int(rng, maxes.length)];
  return { weight: weightOnMark(maxScale, rng), scaleType, maxScale };
}

export interface ConversionProblem { grams: number; direction: 'g-to-kg' | 'kg-to-g' }
export function conversionProblem(rng: Rng): ConversionProblem {
  const direction = rng() > 0.5 ? 'g-to-kg' : 'kg-to-g';
  const bases = [100, 200, 250, 500];
  const base = bases[int(rng, bases.length)];
  const multiplier = Math.floor(rng() * 50) + 1;
  return { grams: base * multiplier, direction };
}

/** What a learner typed, as a number: spaces between digit groups are allowed and a comma counts as a decimal comma (the same rule as the exercises). */
export const parseNumber = (text: string): number => parseFloat(String(text).replace(/\s/g, '').replace(/,/g, '.'));

/** Is this answer right for the problem that `seed` builds? The checks are exactly the ones the components use. */
export function checkExercise(kind: ExerciseKind, rng: Rng, answer: string): boolean {
  const a = String(answer).slice(0, 40);
  switch (kind) {
    case 'rounding': return parseInt(a.replace(/\s/g, '')) === roundingProblem(rng).answer;
    case 'comparing': return a === comparingProblem(rng).answer;
    case 'place-value': return Number(a) === placeValueProblem(rng).answer;
    case 'mass-calc': return Math.abs(parseFloat(a) - massProblem(rng).answer) < 0.1;
    case 'reading-scales': return Math.abs(parseNumber(a) - scaleProblem(rng).weight) < 1;
    case 'conversions': {
      const p = conversionProblem(rng);
      const v = parseNumber(a);
      return p.direction === 'g-to-kg' ? Math.abs(v - p.grams / 1000) < 0.001 : Math.abs(v - p.grams) < 0.1;
    }
  }
}
