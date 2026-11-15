import type { Step } from '../business/steps';

/** The IDMEC process of the Technology lessons: Investigate, Design, Make, Evaluate, Communicate. */
export const IDMEC_STEPS: readonly Step[] = [
  { lead: 'Investigate', text: ' the problem', detail: 'find out the needs, limits and context' },
  { lead: 'Design', text: ' a solution', detail: 'sketch ideas and choose one' },
  { lead: 'Make', text: ' it', detail: 'build a model or prototype' },
  { lead: 'Evaluate', text: ' it', detail: 'check it against the design criteria' },
  { lead: 'Communicate', text: ' it', detail: 'show others what you made and why' },
];

/** From raw material to product: wood to paper. */
export const PAPER_STEPS: readonly Step[] = [
  { lead: 'Wood', text: ' (a natural material)' },
  { lead: 'Wood pulp', text: ': the wood is broken down and mixed with water' },
  { lead: 'Paper', text: ': the pulp is pressed and dried into sheets (a processed material)' },
];
