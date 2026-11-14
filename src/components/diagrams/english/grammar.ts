/**
 * Grammar data for the English sentence pictures. Every sentence drawn is stored as typed parts
 * and its kind is worked out here, so a picture can never call a sentence "complex" by accident.
 * The sentences are the ones the Term 3 lesson bank already uses.
 */

export type ClauseKind = 'independent' | 'dependent' | 'phrase' | 'conjunction';

export interface Part {
  kind: ClauseKind;
  text: string;
  /** The joining word at the start of a dependent clause, shown in the conjunction colour. */
  lead?: string;
}

/** One colour code for the whole English grammar set, so a child learns it once. */
export const KIND_COLOR: Record<ClauseKind, string> = {
  independent: '#60a5fa',
  dependent: '#34d399',
  phrase: '#fbbf24',
  conjunction: '#fb7185',
};

export const KIND_NAME: Record<ClauseKind, string> = {
  independent: 'Independent clause',
  dependent: 'Dependent clause',
  phrase: 'Phrase',
  conjunction: 'Conjunction',
};

/** The sentence as written: parts joined by single spaces, no space before , or . */
export const sentenceText = (parts: Part[]): string => parts.map((p) => p.text).join(' ').replace(/\s+([,.])/g, '$1');

export type SentenceType = 'simple' | 'compound' | 'complex' | 'compound-complex';

/** Compound = two or more independent clauses; complex = a dependent clause is present. */
export const sentenceType = (parts: Part[]): SentenceType => {
  const independent = parts.filter((p) => p.kind === 'independent').length;
  const dependent = parts.filter((p) => p.kind === 'dependent').length;
  if (independent >= 2 && dependent >= 1) return 'compound-complex';
  if (independent >= 2) return 'compound';
  if (dependent >= 1) return 'complex';
  return 'simple';
};

export const EXAMPLES = {
  phrase: { kind: 'phrase', text: 'under the old bridge' },
  independent: { kind: 'independent', text: 'The rain stopped suddenly' },
  dependent: { kind: 'dependent', text: 'because the rain stopped', lead: 'because' },
  compound: [
    { kind: 'independent', text: 'Lebo packed his bag,' },
    { kind: 'conjunction', text: 'and' },
    { kind: 'independent', text: 'he ran to the taxi' },
  ],
  complex: [
    { kind: 'dependent', text: 'Because Lebo packed early,', lead: 'Because' },
    { kind: 'independent', text: 'he was ready on time' },
  ],
  runOn: [
    { kind: 'independent', text: 'Thandi finished her homework' },
    { kind: 'independent', text: 'she went outside' },
  ],
  joined: [
    { kind: 'independent', text: 'Thandi finished her homework,' },
    { kind: 'conjunction', text: 'and' },
    { kind: 'independent', text: 'she went outside' },
  ],
  split: [
    { kind: 'independent', text: 'Thandi finished her homework.' },
    { kind: 'independent', text: 'She went outside.' },
  ],
  short: [{ kind: 'independent', text: 'The taxi arrived.' }],
} as const satisfies Record<string, Part | readonly Part[]>;

/** Joining words the lesson names. */
export const CONJUNCTIONS = ['and', 'but', 'because', 'although'] as const;
