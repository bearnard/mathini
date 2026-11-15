/**
 * Report and instruction data for the Grade 9 "Reports and Instructional Texts" lesson.
 * The parts, the instruction steps and the checks live here so the tests can prove the lesson's
 * claims (order of report parts, imperative openings, closing for each greeting).
 */

export interface ReportPart { id: string; label: string; note: string }

/** The order a reader expects in a short report. */
export const REPORT_PARTS: readonly ReportPart[] = [
  { id: 'title', label: 'Title', note: 'says what the report is about' },
  { id: 'intro', label: 'Introduction', note: 'purpose: why it was written' },
  { id: 'body', label: 'Sections with headings', note: 'facts in a logical order' },
  { id: 'conclusion', label: 'Conclusion', note: 'sums up what the facts show' },
];

/** The jumbled list a learner sorts in the worked example. */
export const JUMBLED = ['conclusion', 'title', 'body', 'intro'] as const;

export const sortReport = (ids: readonly string[]): string[] =>
  [...ids].sort((a, b) => REPORT_PARTS.findIndex((p) => p.id === a) - REPORT_PARTS.findIndex((p) => p.id === b));

/** Instructions: every step opens with a command (imperative) verb. */
export const IMPERATIVES = ['boil', 'pour', 'add', 'stir', 'wait', 'open', 'press', 'mix', 'place', 'fill', 'switch', 'put', 'cut', 'wash', 'remove'] as const;

export const firstWord = (step: string): string => step.trim().split(/\s+/)[0].toLowerCase().replace(/[^a-z]/g, '');

export const isImperative = (step: string): boolean => (IMPERATIVES as readonly string[]).includes(firstWord(step));

/** Worked example: how to make rooibos tea, one action per step. */
export const TEA_STEPS = [
  'Boil water in a kettle.',
  'Place one teabag in a mug.',
  'Pour the hot water over the teabag.',
  'Wait three minutes.',
  'Remove the teabag.',
] as const;

/** The mistake: several actions bundled into one step. */
export const TEA_BUNDLED = 'Boil the water and put a teabag in a mug and pour it in and then wait.';

export const actionCount = (steps: readonly string[]): number => steps.length;

/** First person opinion and its third-person, factual rewrite (worked example, slide 2). */
export const VOICE = {
  first: 'I think the school field is a mess, and I hate the litter.',
  third: 'The school field had litter near the gate and under the trees.',
};

export const hasFirstPerson = (s: string): boolean => /\b(i|me|my|we|our|us)\b/i.test(s);

/** Same facts, two audiences. */
export const AUDIENCE = {
  learners: 'Put your plastic bottles in the blue bin by the gate.',
  principal: 'Blue recycling bins were placed at the gate to collect plastic bottles.',
};

export const CHECK_ORDER = ['intro', 'title', 'conclusion', 'body'] as const;
