/**
 * Tense and word-role data for the English pictures. Sentences are the lesson bank's own,
 * stored as parts so a test can prove which verbs are in which tense and whether a sentence
 * keeps one tense.
 */

export type Tense = 'past' | 'present' | 'future';

export const TENSE_COLOR: Record<Tense, string> = {
  past: '#a78bfa',
  present: '#22d3ee',
  future: '#a3e635',
};

export const TENSE_NOTE: Record<Tense, string> = {
  past: 'already happened',
  present: 'happening now',
  future: 'will happen later',
};

export interface TenseForms { past: string; presentSingular: string; presentPlural: string; future: string }

/** The verbs the pictures use, in their three tenses. */
export const VERBS: Record<string, TenseForms> = {
  walk: { past: 'walked', presentSingular: 'walks', presentPlural: 'walk', future: 'will walk' },
  write: { past: 'wrote', presentSingular: 'writes', presentPlural: 'write', future: 'will write' },
};

export const verbIn = (verb: string, tense: Tense, plural: boolean): string => {
  const f = VERBS[verb];
  if (tense === 'present') return plural ? f.presentPlural : f.presentSingular;
  return f[tense];
};

export interface Token { text: string; tense?: Tense }

export const tokensText = (t: readonly Token[]): string => t.map((x) => x.text).join(' ').replace(/\s+([,.])/g, '$1');

/** A sentence keeps its tense when all of its marked verbs are in one tense. */
export const keepsTense = (t: readonly Token[]): boolean => new Set(t.filter((x) => x.tense).map((x) => x.tense)).size <= 1;

/** The exam mistake and its correction, from the bank. */
export const TENSE_CHECKS = {
  lebo: {
    wrong: [{ text: 'Lebo' }, { text: 'packed', tense: 'past' }, { text: 'her bag and' }, { text: 'hurries', tense: 'present' }, { text: 'to the gate.' }],
    right: [{ text: 'Lebo' }, { text: 'packed', tense: 'past' }, { text: 'her bag and' }, { text: 'hurried', tense: 'past' }, { text: 'to the gate.' }],
  },
  revised: {
    wrong: [{ text: 'We' }, { text: 'revised', tense: 'past' }, { text: 'the poem and' }, { text: 'answer', tense: 'present' }, { text: 'the questions.' }],
    right: [{ text: 'We' }, { text: 'revised', tense: 'past' }, { text: 'the poem and' }, { text: 'answered', tense: 'past' }, { text: 'the questions.' }],
  },
} as const satisfies Record<string, { wrong: readonly Token[]; right: readonly Token[] }>;

export type Role = 'noun' | 'verb' | 'adjective' | 'other';

export const ROLE_COLOR: Record<Exclude<Role, 'other'>, string> = {
  noun: '#fb923c',
  verb: '#2dd4bf',
  adjective: '#e879f9',
};

export const ROLE_NOTE: Record<Exclude<Role, 'other'>, string> = {
  noun: 'names people, places, things',
  verb: 'shows action or state',
  adjective: 'describes a noun',
};

/** One sentence with the roles the bank asks about: nouns, a verb and an adjective. */
export const ROLE_SENTENCE: { text: string; role: Role }[] = [
  { text: 'The', role: 'other' },
  { text: 'noisy', role: 'adjective' },
  { text: 'class', role: 'noun' },
  { text: 'praised', role: 'verb' },
  { text: 'the', role: 'other' },
  { text: 'teacher.', role: 'noun' },
];
