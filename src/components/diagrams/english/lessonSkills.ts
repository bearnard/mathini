/**
 * Small tested helpers behind the Grade 7 revision and Grade 8 English lessons
 * (revision of genres, brochures, language structures and bias, poetry, formal correspondence).
 * Every rule-dependent answer shown in a slide comes from here (lessonSkills.test.ts).
 */

export type Strategy = 'skim' | 'scan' | 'infer';
export type Goal = 'gist' | 'detail' | 'implied';

/** Which reading strategy suits the question being asked. */
export const strategyFor = (goal: Goal): Strategy => (goal === 'gist' ? 'skim' : goal === 'detail' ? 'scan' : 'infer');

export type Genre = 'novel' | 'poetry' | 'drama' | 'media';

/** Signposts that give each genre away. */
export const GENRE_CLUES: Record<Genre, readonly string[]> = {
  novel: ['chapters', 'paragraphs', 'narrator'],
  poetry: ['lines', 'stanzas', 'imagery'],
  drama: ['speaker names', 'dialogue', 'stage directions'],
  media: ['headline', 'headings', 'photos and captions'],
};

/** Name the genre from a clue (the clue must be one of the signposts above). */
export const genreOfClue = (clue: string): Genre | null =>
  (Object.keys(GENRE_CLUES) as Genre[]).find((g) => GENRE_CLUES[g].includes(clue)) ?? null;

export const wordCount = (text: string): number => text.trim().split(/\s+/).filter(Boolean).length;

/* ------------------------------------------------------------------ formal letters */

/** Greeting and closing go together: unknown name -> "Dear Sir or Madam" + "Yours faithfully". */
export const letterFraming = (recipientSurname?: string, title = 'Mr') => {
  const named = Boolean(recipientSurname);
  return {
    salutation: named ? `Dear ${title} ${recipientSurname},` : 'Dear Sir or Madam,',
    closing: named ? 'Yours sincerely,' : 'Yours faithfully,',
  };
};

export type SentenceKind = 'statement' | 'question' | 'command' | 'exclamation';
export const endMark = (kind: SentenceKind): string => (kind === 'question' ? '?' : kind === 'exclamation' ? '!' : '.');

/* ------------------------------------------------------------------ word classes */

export type WordClass = 'noun' | 'verb' | 'adjective' | 'adverb' | 'other';

/** Word classes for the words used in the lesson sentences (checked against the sentence in the test). */
export const WORD_CLASS: Record<string, WordClass> = {
  the: 'other', a: 'other', they: 'other', will: 'other',
  confident: 'adjective', speaker: 'noun', explained: 'verb', clearly: 'adverb',
  present: 'verb', report: 'noun', tomorrow: 'adverb',
  learners: 'noun', quiet: 'adjective', read: 'verb', quietly: 'adverb', library: 'noun',
};

export const classify = (sentence: string): { word: string; cls: WordClass }[] =>
  sentence.replace(/[.,!?]/g, '').split(/\s+/).filter(Boolean).map((word) => ({ word, cls: WORD_CLASS[word.toLowerCase()] ?? 'other' }));

export const wordsOfClass = (sentence: string, cls: WordClass): string[] => classify(sentence).filter((w) => w.cls === cls).map((w) => w.word);

export const CLASS_COLOR: Record<WordClass, string> = {
  noun: '#fb923c', verb: '#2dd4bf', adjective: '#e879f9', adverb: '#a3e635', other: '#cbd5e1',
};

/** "Will" + base verb makes the simple future. */
export const simpleFuture = (verb: string): string => `will ${verb}`;

/* ------------------------------------------------------------------ poems */

/** Rhyme scheme from hand-marked rhyme keys: ['ight','ass','ight','ass'] -> 'ABAB'. */
export const rhymeScheme = (keys: readonly string[]): string => {
  const seen: string[] = [];
  return keys.map((k) => { if (!seen.includes(k)) seen.push(k); return String.fromCharCode(65 + seen.indexOf(k)); }).join('');
};

/** An original practice poem (Mthatha-style rain scene, invented for this app). */
export const POEM: readonly (readonly string[])[] = [
  ['The thunder roared all through the night,', 'The cold rain beat the glass;', "We hid in the candle's light", 'And waited for it to pass.'],
  ['The sun climbs up, a golden sight,', 'The puddles flash like coins;', 'The birds sing loud with new delight', 'And the whole street joins.'],
];
export const POEM_KEYS: readonly (readonly string[])[] = [['ight', 'ass', 'ight', 'ass'], ['ight', 'oins', 'ight', 'oins']];

/** "stanza 2, line 1" style reference and the quoted words (without the line-end punctuation). */
export const lineRef = (stanza: number, line: number): { ref: string; quote: string } => ({
  ref: `stanza ${stanza}, line ${line}`,
  quote: POEM[stanza - 1][line - 1].replace(/[.,;]$/, ''),
});
