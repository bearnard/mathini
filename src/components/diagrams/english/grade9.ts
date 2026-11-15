/**
 * Data and small helpers for the Grade 9 English lessons (grammar revision, letters, poetry and
 * drama, sentence structure, advanced language). Every word shown in a picture or worked example is
 * built here, so tests can prove the answers (rhyme scheme, reported speech, passive voice, closings).
 */
import type { Role } from './tense';

/* ------------------------------------------------------------ rhyme scheme */

export interface PoemLine { text: string; /** the last word, and the sound it rhymes on */ end: string; rhyme: string }

/** A short invented poem (four lines, the end words rhyme ABAB). */
export const POEM: PoemLine[] = [
  { text: 'The wind whispered over the sleeping hill,', end: 'hill', rhyme: 'ill' },
  { text: 'and the moon hung like a silver coin;', end: 'coin', rhyme: 'oin' },
  { text: 'the river sang softly, calm and still,', end: 'still', rhyme: 'ill' },
  { text: 'while the stars began to join.', end: 'join', rhyme: 'oin' },
];

/** Letters A, B, C... in order of first appearance; lines that share a rhyme sound share a letter. */
export const rhymeScheme = (lines: readonly { rhyme: string }[]): string => {
  const seen: string[] = [];
  return lines.map((l) => {
    let i = seen.indexOf(l.rhyme);
    if (i < 0) { seen.push(l.rhyme); i = seen.length - 1; }
    return String.fromCharCode(65 + i);
  }).join('');
};

/** True when each line really ends in the word it says it ends in and the word ends with its rhyme sound. */
export const endsAsClaimed = (lines: readonly PoemLine[]): boolean =>
  lines.every((l) => l.text.replace(/[.,;!?]+$/, '').endsWith(l.end) && l.end.endsWith(l.rhyme));

/* ----------------------------------------------------------- reported speech */

/** How a verb steps back when speech is reported after "said" (past reporting verb). */
export const BACKSHIFT: readonly [string, string][] = [
  ['am', 'was'],
  ['is', 'was'],
  ['are', 'were'],
  ['will', 'would'],
  ['can', 'could'],
];

export const backshift = (verb: string): string => BACKSHIFT.find(([d]) => d === verb)?.[1] ?? verb;

/** "She said she was happy." from the pronoun, direct verb and the rest of the clause. */
export const reported = (speaker: string, pronoun: string, verb: string, rest: string): string =>
  `${speaker} said ${pronoun} ${backshift(verb)} ${rest}.`;

/** The direct version: Speaker said, “I verb rest.” */
export const direct = (speaker: string, verb: string, rest: string): string => `${speaker} said, “I ${verb} ${rest}.”`;

/** Pronoun change from the speaker's "I" to the reporter's he/she. */
export const personChange = (speakerIsFemale: boolean): string => (speakerIsFemale ? 'she' : 'he');

/* --------------------------------------------------------------- voice */

export interface Clause { subject: string; verb: string; participle: string; object: string }

const lower = (s: string) => s.replace(/^(The|A|An) /, (m) => m.toLowerCase());
const upper = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const active = (c: Clause): string => `${c.subject} ${c.verb} ${c.object}.`;

/** Passive: the object becomes the subject, "was/were" + past participle, optional "by" agent. */
export const passive = (c: Clause, plural = false, withAgent = true): string =>
  `${upper(c.object)} ${plural ? 'were' : 'was'} ${c.participle}${withAgent ? ` by ${lower(c.subject)}` : ''}.`;

export const CHEF: Clause = { subject: 'The chef', verb: 'prepared', participle: 'prepared', object: 'the meal' };
export const TEACHER: Clause = { subject: 'The teacher', verb: 'marked', participle: 'marked', object: 'the papers' };
export const PLAYER: Clause = { subject: 'The player', verb: 'scored', participle: 'scored', object: 'a goal' };

/* ------------------------------------------------------------------ letters */

export type LetterKind = 'friendly' | 'formal';

export const LETTER_PARTS: Record<LetterKind, string[]> = {
  friendly: ['Your address', 'Date', 'Dear Thandi,', 'Body: warm and chatty', 'Love from / Your friend,', 'Your first name'],
  formal: ['Your address', 'Date', 'Recipient’s address', 'Dear Mr Dlamini,', 'Subject line and body', 'Yours sincerely, then name'],
};

/** Formal closing: Yours sincerely when the person is named, Yours faithfully for Sir or Madam. */
export const closingFor = (salutation: string): string => (/^Dear (Sir|Madam|Sir or Madam)\b/.test(salutation) ? 'Yours faithfully,' : 'Yours sincerely,');

export const REGISTER_PAIRS: { informal: string; formal: string }[] = [
  { informal: 'Hi! Can u send me the forms asap?', formal: 'Good day. Could you please send me the application forms as soon as possible?' },
  { informal: 'Thanks a ton, you rock!', formal: 'Thank you for your assistance. I am most grateful.' },
];

/* ----------------------------------------------------------- word roles */

export const ROLE_G9: { text: string; role: Role }[] = [
  { text: 'The', role: 'other' },
  { text: 'old', role: 'adjective' },
  { text: 'car', role: 'noun' },
  { text: 'needs', role: 'verb' },
  { text: 'repair.', role: 'noun' },
];

/* --------------------------------------------------------- spelling */

const VOWELS = 'aeiou';

/**
 * Past tense of a one-syllable-stress verb that ends consonant-vowel-consonant on a stressed syllable
 * (stop, plan, occur, refer): double the last letter, then add -ed.
 */
export const pastDoubling = (verb: string): string => {
  const n = verb.length;
  const cvc = n >= 3 && !VOWELS.includes(verb[n - 3]) && VOWELS.includes(verb[n - 2]) && !VOWELS.includes(verb[n - 1]);
  return cvc ? `${verb}${verb[n - 1]}ed` : `${verb}ed`;
};

/** The punctuated direct-speech sentence: comma before the opening mark, full stop inside the closing mark. */
export const quoted = (speaker: string, words: string): string => `${speaker} said, “${words}.”`;

/* ---------------------------------------------------- sentence structure */

export const CONJUNCTION_JOB: Record<string, string> = {
  and: 'adds an idea',
  but: 'shows contrast',
  because: 'gives a reason',
  so: 'shows a result',
  although: 'shows contrast (dependent clause)',
};

export const PREPOSITIONS: { word: string; shows: 'time' | 'place' | 'direction'; example: string }[] = [
  { word: 'at', shows: 'time', example: 'We meet at noon.' },
  { word: 'under', shows: 'place', example: 'The cat sleeps under the table.' },
  { word: 'onto', shows: 'direction', example: 'The cat jumped onto the table.' },
];
