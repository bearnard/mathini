/**
 * Small tested helpers for the Grade 7 English lessons (Term 1 grammar, story study, review and
 * essay writing; Term 2 cohesion and poetry). Every example the slides show comes from here, so a
 * test can prove the rule is applied correctly. All sentences, stories and poems are original.
 */

/* ------------------------------------------------------------ plurals */

const IRREGULAR_PLURAL: Record<string, string> = { child: 'children', woman: 'women', man: 'men', foot: 'feet', tooth: 'teeth' };

/** Plural of a noun: a few irregular ones, then -es after s/x/z/ch/sh, -ies after consonant + y, else -s. */
export const pluralOf = (noun: string): string => {
  if (IRREGULAR_PLURAL[noun]) return IRREGULAR_PLURAL[noun];
  if (/(s|x|z|ch|sh)$/.test(noun)) return `${noun}es`;
  if (/[^aeiou]y$/.test(noun)) return `${noun.slice(0, -1)}ies`;
  return `${noun}s`;
};

/** The part of `after` that is new compared with `before` (the shared start is the stem). */
export const changedTail = (before: string, after: string): { stem: string; tail: string } => {
  let i = 0;
  while (i < before.length && i < after.length && before[i] === after[i]) i += 1;
  return { stem: after.slice(0, i), tail: after.slice(i) };
};

/** Singular subjects take is/was, plural subjects take are/were. */
export const beForm = (plural: boolean, past = false): string => (past ? (plural ? 'were' : 'was') : plural ? 'are' : 'is');

/* --------------------------------------------------------- word order */

export interface Slot { role: 'subject' | 'verb' | 'object'; text: string }

/** Subject, verb, object, the order English uses. */
export const SVO: Slot[] = [
  { role: 'subject', text: 'The class' },
  { role: 'verb', text: 'read' },
  { role: 'object', text: 'the poem carefully' },
];

export const slotsText = (slots: readonly Slot[]): string => `${slots.map((s) => s.text).join(' ')}.`;

/* ------------------------------------------------------------- speech */

const STEP_BACK: Record<string, string> = { am: 'was', is: 'was', are: 'were', will: 'would', can: 'could' };
const TIME_SWAP: Record<string, string> = { tonight: 'that night', tomorrow: 'the next day' };

export const stepBack = (aux: string): string => STEP_BACK[aux] ?? aux;

export interface Speech { speaker: string; pronoun: string; reportedPronoun: string; aux: string; rest: string }

export const directSpeech = (s: Speech): string => `${s.speaker} said, “${s.pronoun} ${s.aux} ${s.rest}.”`;

export const reportedSpeech = (s: Speech): string => {
  const rest = s.rest.split(' ').map((w) => TIME_SWAP[w] ?? w).join(' ');
  return `${s.speaker} said that ${s.reportedPronoun} ${stepBack(s.aux)} ${rest}.`;
};

export const LEBO: Speech = { speaker: 'Lebo', pronoun: 'I', reportedPronoun: 'she', aux: 'am', rest: 'tired' };
export const MUSA: Speech = { speaker: 'Musa', pronoun: 'I', reportedPronoun: 'he', aux: 'will', rest: 'revise tonight' };
export const THANDI: Speech = { speaker: 'Thandi', pronoun: 'We', reportedPronoun: 'they', aux: 'are', rest: 'ready' };
export const SIPHO: Speech = { speaker: 'Sipho', pronoun: 'I', reportedPronoun: 'he', aux: 'can', rest: 'swim' };

/* ---------------------------------------------------------- adverbs */

const IRREGULAR_ADVERB: Record<string, string> = { good: 'well', fast: 'fast' };

/** Adverb from an adjective: -ly, y becomes -ily, -le becomes -ly; good and fast are irregular. */
export const toAdverb = (adj: string): string => {
  if (IRREGULAR_ADVERB[adj]) return IRREGULAR_ADVERB[adj];
  if (/[^aeiou]y$/.test(adj)) return `${adj.slice(0, -1)}ily`;
  if (/[^aeiou]le$/.test(adj)) return `${adj.slice(0, -1)}y`;
  return `${adj}ly`;
};

export type WordRole = 'noun' | 'verb' | 'adjective' | 'adverb' | 'conjunction';

export interface Tagged { text: string; role?: WordRole }

export const taggedText = (t: readonly Tagged[]): string => t.map((x) => x.text).join(' ').replace(/\s+([,.;])/g, '$1');

export const ROLE_TINT: Record<WordRole, string> = {
  noun: '#fb923c',
  verb: '#2dd4bf',
  adjective: '#e879f9',
  adverb: '#facc15',
  conjunction: '#fb7185',
};

export const POSTER: Tagged[] = [
  { text: 'The' }, { text: 'bright', role: 'adjective' }, { text: 'poster', role: 'noun' }, { text: 'caught', role: 'verb' }, { text: 'our' }, { text: 'attention.', role: 'noun' },
];
export const SPEAKER: Tagged[] = [
  { text: 'The' }, { text: 'speaker', role: 'noun' }, { text: 'answered', role: 'verb' }, { text: 'clearly.', role: 'adverb' },
];
export const REVISED: Tagged[] = [
  { text: 'We' }, { text: 'revised', role: 'verb' }, { text: 'early', role: 'adverb' }, { text: 'because', role: 'conjunction' }, { text: 'we' }, { text: 'wanted', role: 'verb' }, { text: 'to' }, { text: 'feel' }, { text: 'ready.' },
];

/* ------------------------------------------------------- linking words */

export type Relation = 'reason' | 'contrast' | 'result';

export interface Link { relation: Relation; word: string; before: string; after: string }

export const LINKS: Link[] = [
  { relation: 'reason', word: 'because', before: 'We revised early', after: 'we wanted to feel ready.' },
  { relation: 'contrast', word: 'but', before: 'The path was narrow', after: 'we reached the gate.' },
  { relation: 'result', word: 'therefore', before: 'The team practised daily.', after: 'their passing improved.' },
];

export const RELATION_NOTE: Record<Relation, string> = {
  reason: 'gives the reason',
  contrast: 'shows a surprise or contrast',
  result: 'shows what followed',
};

export const RELATION_TINT: Record<Relation, string> = { reason: '#38bdf8', contrast: '#fbbf24', result: '#a3e635' };

export const linkSentence = (l: Link): string =>
  l.relation === 'result'
    ? `${l.before} ${l.word[0].toUpperCase()}${l.word.slice(1)}, ${l.after}`
    : `${l.before}, ${l.word} ${l.after}`;

/* ---------------------------------------------------------- story arc */

export type StageId = 'exposition' | 'rising' | 'climax' | 'falling' | 'resolution';

export interface Stage { id: StageId; name: string; event: string }

/** An original story, "The Whistle", in five stages. The order in the list is the plot order. */
export const STORY: Stage[] = [
  { id: 'exposition', name: 'Beginning', event: 'Sipho is chosen to referee Saturday’s match.' },
  { id: 'rising', name: 'Rising action', event: 'On Friday he cannot find his whistle.' },
  { id: 'climax', name: 'Climax', event: 'Both teams wait. Sipho must admit he lost it.' },
  { id: 'falling', name: 'Falling action', event: 'He tells the coach, who lends him a whistle.' },
  { id: 'resolution', name: 'Ending', event: 'The match goes ahead and Sipho keeps a spare.' },
];

/** Height of each stage on the plot mountain, 0 low to 1 peak: rises to the climax then falls. */
export const stageHeights = (stages: readonly Stage[]): number[] => {
  const peak = stages.findIndex((s) => s.id === 'climax');
  return stages.map((_, i) => (i <= peak ? (i === 0 ? 0.15 : i / peak) : 1 - ((i - peak) / (stages.length - 1 - peak)) * 0.85));
};

/* ------------------------------------------------------ writing frames */

export interface Block { label: string; hint: string }

export const REVIEW_PARTS: Block[] = [
  { label: 'Summary', hint: 'what it is about, in two or three sentences' },
  { label: 'Opinion with reasons', hint: 'what you think, and why' },
  { label: 'Recommendation', hint: 'who should watch, read or try it' },
];

export const ESSAY_PARTS: Block[] = [
  { label: 'Introduction', hint: 'say what the essay is about' },
  { label: 'Body paragraphs', hint: 'one main point in each' },
  { label: 'Conclusion', hint: 'round off and leave a final thought' },
];

/** One sentence per entry; `off` marks the sentence that breaks paragraph unity. */
export const PARAGRAPH: { text: string; off?: boolean }[] = [
  { text: 'Our school play was well planned.' },
  { text: 'The actors learnt their lines two weeks early.' },
  { text: 'My cousin has a new bicycle.', off: true },
  { text: 'The stage crew painted the set on time.' },
];

export const unityFixed = (p: readonly { text: string; off?: boolean }[]): string => p.filter((s) => !s.off).map((s) => s.text).join(' ');

/* -------------------------------------------------------------- poem */

export interface PoemLine { text: string; end: string }

/** An original eight-line poem, two stanzas of four lines. `end` is the sound the line ends on. */
export const POEM: { stanzas: PoemLine[][] } = {
  stanzas: [
    [
      { text: 'The morning sun climbs over the hill,', end: 'ill' },
      { text: 'A silver mist drifts over the road.', end: 'oad' },
      { text: 'The village is quiet, the air is still,', end: 'ill' },
      { text: 'And I walk beneath my heavy load.', end: 'oad' },
    ],
    [
      { text: 'My bag is full but my heart is light,', end: 'ight' },
      { text: 'For Gogo is waiting at the gate.', end: 'ate' },
      { text: 'Her smile is warm as a candle at night,', end: 'ight' },
      { text: 'And I know that I will not be late.', end: 'ate' },
    ],
  ],
};

export const poemLines = (): PoemLine[] => POEM.stanzas.flat();

export const lastWord = (line: string): string => line.replace(/[.,;!?]$/, '').split(' ').pop() ?? '';

/** Rhyme scheme as letters, first sound A, next new sound B, and so on. */
export const rhymeScheme = (lines: readonly PoemLine[]): string[] => {
  const seen: string[] = [];
  return lines.map((l) => {
    let i = seen.indexOf(l.end);
    if (i === -1) { seen.push(l.end); i = seen.length - 1; }
    return String.fromCharCode(65 + i);
  });
};

export const RHYME_TINT = ['#38bdf8', '#fbbf24', '#a3e635', '#fb7185'];
