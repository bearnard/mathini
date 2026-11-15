/**
 * Small tested helpers for the Grade 7 English lessons (drama, project language, persuasive
 * texts, exam writing, grammar). Every sentence a worked example shows is built here, so the
 * slide and the rule cannot drift apart. See lessonHelpers.test.ts.
 */

export type Tense = 'past' | 'present' | 'future';

export interface Verb { base: string; thirdSingular: string; past: string; participle: string }

export const VERB: Record<string, Verb> = {
  complete: { base: 'complete', thirdSingular: 'completes', past: 'completed', participle: 'completed' },
  prepare: { base: 'prepare', thirdSingular: 'prepares', past: 'prepared', participle: 'prepared' },
  check: { base: 'check', thirdSingular: 'checks', past: 'checked', participle: 'checked' },
};

export interface Clause { subject: string; subjectPlural: boolean; verb: Verb; object: string; objectPlural: boolean }

export type Role = 'subject' | 'verb' | 'object' | 'be' | 'by';
export interface RolePart { role: Role; text: string }

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const lower = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

/** Subject + verb + object, with the verb in the chosen tense. */
export const activeParts = (c: Clause, tense: Tense): RolePart[] => {
  const verb = tense === 'past' ? c.verb.past : tense === 'future' ? `will ${c.verb.base}` : c.subjectPlural ? c.verb.base : c.verb.thirdSingular;
  return [
    { role: 'subject', text: cap(c.subject) },
    { role: 'verb', text: verb },
    { role: 'object', text: c.object },
  ];
};

/** The "be" helper in the passive: it agrees with the OLD OBJECT, which is the new subject. */
export const beForm = (plural: boolean, tense: Tense): string =>
  tense === 'future' ? 'will be' : tense === 'past' ? (plural ? 'were' : 'was') : plural ? 'are' : 'is';

/** Old object first, then be + participle (same tense as the active verb), then "by" + old subject. */
export const passiveParts = (c: Clause, tense: Tense): RolePart[] => [
  { role: 'subject', text: cap(c.object) },
  { role: 'be', text: beForm(c.objectPlural, tense) },
  { role: 'verb', text: c.verb.participle },
  { role: 'by', text: 'by' },
  { role: 'object', text: lower(c.subject) },
];

export const partsText = (p: readonly RolePart[]): string => `${p.map((x) => x.text).join(' ')}.`;

export const ACTIVE_EXAMPLES: { clause: Clause; tense: Tense }[] = [
  { clause: { subject: 'the learners', subjectPlural: true, verb: VERB.complete, object: 'the poster project', objectPlural: false }, tense: 'past' },
  { clause: { subject: 'the class', subjectPlural: false, verb: VERB.prepare, object: 'the speech', objectPlural: false }, tense: 'past' },
  { clause: { subject: 'the class', subjectPlural: false, verb: VERB.prepare, object: 'the speech', objectPlural: false }, tense: 'future' },
  { clause: { subject: 'the teachers', subjectPlural: true, verb: VERB.check, object: 'the posters', objectPlural: true }, tense: 'present' },
];

/** Introductory word group + comma + main clause: "After editing, we checked every paragraph." */
export const introSentence = (intro: string, main: string): string => `${cap(intro)}, ${lower(main)}.`;

/** True when the sentence has its one comma straight after the opener and ends with a full stop. */
export const hasIntroComma = (s: string, intro: string): boolean =>
  s.startsWith(`${cap(intro)}, `) && (s.match(/[,;]/g) ?? []).length === 1 && s.endsWith('.');

/** Past or present "to be" for a subject, used for subject-verb agreement. */
export const beAgrees = (plural: boolean, tense: 'past' | 'present'): string =>
  tense === 'past' ? (plural ? 'were' : 'was') : plural ? 'are' : 'is';

/** One way to share a timed writing task. The parts must add up to the total. */
export interface TimeShare { label: string; minutes: number }
export const examTime: TimeShare[] = [
  { label: 'Plan', minutes: 6 },
  { label: 'Write', minutes: 28 },
  { label: 'Edit', minutes: 6 },
];
export const totalMinutes = (t: readonly TimeShare[]): number => t.reduce((a, s) => a + s.minutes, 0);
export const shareWidths = (t: readonly TimeShare[], width: number): number[] => {
  const total = totalMinutes(t);
  return t.map((s) => (s.minutes / total) * width);
};

/** AIDA, in order. */
export const AIDA = [
  { letter: 'A', word: 'Attention', note: 'a hook that grabs the eye' },
  { letter: 'I', word: 'Interest', note: 'facts that keep you reading' },
  { letter: 'D', word: 'Desire', note: 'makes you want it' },
  { letter: 'A', word: 'Action', note: 'tells you what to do now' },
] as const;
