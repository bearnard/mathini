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

/** Finding a fault in a simple circuit, in the order to check. */
export const FAULT_STEPS: readonly Step[] = [
  { lead: 'Check the switch', text: ' is closed and the path is complete', detail: 'current needs a closed loop to flow' },
  { lead: 'Check the cell or battery', text: ' is fresh and joined the right way round' },
  { lead: 'Check the bulb', text: ' is not blown' },
  { lead: 'Check each connection', text: ' is tight and touching the metal' },
];

/** How a dead leaf is recycled by decomposers. */
export const DECAY_STEPS: readonly Step[] = [
  { lead: 'A leaf dies', text: ' and falls to the ground' },
  { lead: 'Decomposers', text: ' (fungi and bacteria) feed on it' },
  { lead: 'Nutrients', text: ' are released into the soil' },
  { lead: 'Plants', text: ' take up the nutrients and grow' },
];
