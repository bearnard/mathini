/**
 * The decision the Grade 12 lesson "Choosing the right trig tool" states: start by deciding
 * whether the triangle is right-angled; that tells you whether basic trig ratios, the sine rule,
 * the cosine rule or the area rule is the best method. The picture shows only that decision, so
 * every word comes from the lesson (a test reads the lesson to prove it).
 */

export const TRIG_DECISION = {
  question: ['Is the triangle', 'right-angled?'],
  yes: ['Basic trig', 'ratios'],
  no: ['Sine rule', 'Cosine rule', 'Area rule'],
} as const;

/** The method names the picture uses, as they appear in the lesson text. */
export const trigDecisionWords = (): string[] => [
  'right-angled',
  'basic trig ratios',
  'sine rule',
  'cosine rule',
  'area rule',
];
