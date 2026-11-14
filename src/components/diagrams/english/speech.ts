import { verbIn } from './tense';

/**
 * Direct to indirect speech, using the Term 4 lesson's own pair and its three changes:
 * the speech marks are dropped, "that" is added, the tense steps back. No pronoun or time-word
 * rules, because the lesson does not teach them.
 */

export type SpeechChange = 1 | 2 | 3;

export interface SpeechToken {
  text: string;
  /** Which of the three changes this word belongs to. */
  change?: SpeechChange;
}

export const DIRECT: SpeechToken[] = [
  { text: '“', change: 1 },
  { text: 'She' },
  { text: verbIn('write', 'present', false), change: 3 },
  { text: 'neatly,' },
  { text: '”', change: 1 },
  { text: 'he said.' },
];

export const REPORTED: SpeechToken[] = [
  { text: 'He said' },
  { text: 'that', change: 2 },
  { text: 'she' },
  { text: verbIn('write', 'past', false), change: 3 },
  { text: 'neatly.' },
];

/** The sentence as written: no space after an opening mark or before a closing one. */
export const speechText = (t: readonly SpeechToken[]): string =>
  t.map((x) => x.text).join(' ').replace(/“ /g, '“').replace(/ ”/g, '”');

export const CHANGE_NOTE: Record<SpeechChange, string> = {
  1: 'speech marks dropped',
  2: '"that" added',
  3: 'the tense steps back',
};

/** The changes between the two sentences, worked out from the words, not typed. */
export const changesBetween = (direct: readonly SpeechToken[], reported: readonly SpeechToken[]): SpeechChange[] => {
  const out: SpeechChange[] = [];
  const has = (t: readonly SpeechToken[], s: string) => t.some((x) => x.text === s);
  if ((has(direct, '“') || has(direct, '”')) && !has(reported, '“') && !has(reported, '”')) out.push(1);
  if (has(reported, 'that') && !has(direct, 'that')) out.push(2);
  const dv = direct.find((x) => x.change === 3)?.text;
  const rv = reported.find((x) => x.change === 3)?.text;
  if (dv === verbIn('write', 'present', false) && rv === verbIn('write', 'past', false)) out.push(3);
  return out;
};
