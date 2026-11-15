/**
 * Small tested helpers for the Grade 8 English lessons (report and dialogue, media and literary
 * texts, creative writing project, essay writing, short stories). Every sentence a worked example
 * or a "Check yourself" answer shows is built here, so a test can prove it.
 */

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** Verb forms used in the lessons: base -> [simple past, past participle]. */
export const FORMS: Record<string, readonly [string, string]> = {
  complete: ['completed', 'completed'],
  finish: ['finished', 'finished'],
  write: ['wrote', 'written'],
  open: ['opened', 'opened'],
  present: ['presented', 'presented'],
  paint: ['painted', 'painted'],
  choose: ['chose', 'chosen'],
  break: ['broke', 'broken'],
};

const PLURAL_SUBJECTS = ['i', 'we', 'you', 'they'];

/** Present perfect: has/have + past participle ("She has completed"). */
export const presentPerfect = (subject: string, verb: string, plural = false): string =>
  `${subject} ${plural || PLURAL_SUBJECTS.includes(subject.toLowerCase()) ? 'have' : 'has'} ${FORMS[verb][1]}`;

/** Future: will + base form ("They will present"). */
export const futureTense = (subject: string, verb: string): string => `${subject} will ${verb}`;

const TENSE_BACK: Record<string, string> = {
  am: 'was', is: 'was', are: 'were', will: 'would', can: 'could', have: 'had', has: 'had',
};

/** Words that step back one tense when speech is reported. Other words stay as they are. */
export const stepBack = (word: string): string => TENSE_BACK[word.toLowerCase()] ?? word;

/**
 * Direct speech to a reported statement: "that" is added, the speaker's pronouns are swapped for
 * the person speaking about them, and am/is/are/will/can/have step back. `pronouns` maps the
 * words of the quotation (lower case) to their reported forms.
 */
export const reportStatement = (speaker: string, quote: string, pronouns: Record<string, string>): string => {
  const words = quote
    .replace(/[.,!?"“”]/g, '')
    .split(/\s+/)
    .map((w) => pronouns[w.toLowerCase()] ?? stepBack(w));
  return `${speaker} said that ${words.join(' ')}.`;
};

export interface PassiveInput { doer: string; verb: string; receiver: string; receiverPlural?: boolean }

/** "The class monitor wrote the notice." */
export const activeSentence = (p: PassiveInput): string => `${cap(p.doer)} ${FORMS[p.verb][0]} ${p.receiver}.`;

/** "The notice was written by the class monitor." (past tense passive: was/were + participle) */
export const passiveSentence = (p: PassiveInput): string =>
  `${cap(p.receiver)} ${p.receiverPlural ? 'were' : 'was'} ${FORMS[p.verb][1]} by ${p.doer}.`;

/** Words that signal a personal judgement rather than a checkable fact. */
export const OPINION_CUES = ['most', 'best', 'worst', 'inspiring', 'beautiful', 'boring', 'amazing', 'terrible', 'should', 'greatest', 'better'];

export const isOpinion = (sentence: string): boolean => {
  const words = sentence.toLowerCase().replace(/[^a-z\s']/g, '').split(/\s+/);
  return OPINION_CUES.some((c) => words.includes(c));
};

export type Viewpoint = 'first person' | 'third person';

/** First person narrators use I, me, my, we, us, our. */
export const viewpointOf = (sentence: string): Viewpoint =>
  /\b(i|me|my|we|us|our)\b/i.test(sentence.replace(/[^A-Za-z\s']/g, ' ')) ? 'first person' : 'third person';

export interface PlanTask { name: string; days: number }

export const totalDays = (tasks: readonly PlanTask[]): number => tasks.reduce((s, t) => s + t.days, 0);

/** The project plan the creative writing lesson draws: school days for each stage. */
export const PROJECT_PLAN: readonly PlanTask[] = [
  { name: 'Plan', days: 2 },
  { name: 'Draft', days: 3 },
  { name: 'Peer review', days: 1 },
  { name: 'Redraft', days: 2 },
  { name: 'Edit', days: 1 },
  { name: 'Present', days: 1 },
];

/** Start and width (0-1) of each task along the whole project, in order. */
export const planSegments = (tasks: readonly PlanTask[]): { name: string; start: number; width: number; days: number }[] => {
  const total = totalDays(tasks);
  let used = 0;
  return tasks.map((t) => {
    const seg = { name: t.name, start: used / total, width: t.days / total, days: t.days };
    used += t.days;
    return seg;
  });
};

export interface ArcPoint { name: string; x: number; y: number }

/** Story shape: tension (0-1) at each stage. The climax is the highest point. */
export const ARC_TENSION: readonly { name: string; tension: number }[] = [
  { name: 'Opening', tension: 0.15 },
  { name: 'Conflict builds', tension: 0.55 },
  { name: 'Climax', tension: 1 },
  { name: 'Falling action', tension: 0.5 },
  { name: 'Ending', tension: 0.2 },
];

export const arcPoints = (width: number, height: number, pad = 28, bottom = 52): ArcPoint[] =>
  ARC_TENSION.map((s, i) => ({
    name: s.name,
    x: pad + ((width - 2 * pad) * i) / (ARC_TENSION.length - 1),
    y: height - bottom - s.tension * (height - pad - bottom),
  }));
