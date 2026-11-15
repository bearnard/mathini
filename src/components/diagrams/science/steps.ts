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

/** The nitrogen cycle as a loop of steps. */
export const NITROGEN_STEPS: readonly Step[] = [
  { lead: 'Nitrogen gas', text: ' makes up most of the air, but plants cannot use it' },
  { lead: 'Nitrogen-fixing bacteria', text: ' turn it into usable compounds in the soil' },
  { lead: 'Plants', text: ' take up the compounds through their roots' },
  { lead: 'Animals', text: ' eat the plants' },
  { lead: 'Decomposers', text: ' return nutrients to the soil when living things die' },
];

/** Nutrients on their way to the cells: digestive and circulatory systems working together. */
export const NUTRIENT_STEPS: readonly Step[] = [
  { lead: 'Eat', text: ': food enters the digestive system' },
  { lead: 'Digest', text: ': the digestive system breaks food down into small nutrients' },
  { lead: 'Absorb', text: ': the nutrients pass into the blood' },
  { lead: 'Carry', text: ': the circulatory system carries the nutrients to every cell' },
];

/** Oxygen and carbon dioxide: respiratory and circulatory systems working together. */
export const BREATHING_STEPS: readonly Step[] = [
  { lead: 'Breathe in', text: ': the lungs take in oxygen' },
  { lead: 'Transfer', text: ': oxygen passes from the lungs into the blood' },
  { lead: 'Carry', text: ': the blood carries oxygen to the cells, where it is used to release energy' },
  { lead: 'Return', text: ': the blood carries carbon dioxide back to the lungs' },
  { lead: 'Breathe out', text: ': the respiratory system removes the carbon dioxide' },
];

/** Making and evaluating a prototype, in order. */
export const PROTOTYPE_STEPS: readonly Step[] = [
  { lead: 'Measure and mark', text: ' accurately, so parts fit and work' },
  { lead: 'Make and join', text: ' safely, with the right tool and joining method' },
  { lead: 'Test', text: ' the prototype against the criteria' },
  { lead: 'Record', text: ': steps followed, problems found, improvements made' },
  { lead: 'Modify and retest', text: ' where testing shows a weakness' },
];

/** Plastic processing, then recycling. */
export const PLASTIC_STEPS: readonly Step[] = [
  { lead: 'Heat', text: ': raw plastic is melted' },
  { lead: 'Mould or shape', text: ': it is injected, extruded or thermoformed into a product' },
  { lead: 'Cool', text: ': the plastic sets in its new shape' },
  { lead: 'Recycle', text: ' at the end of use: cuts waste and saves resources' },
];

/** What a complete PAT project contains, in order. */
export const PAT_STEPS: readonly Step[] = [
  { lead: 'Design brief', text: ': the problem and what a good solution must do' },
  { lead: 'Research', text: ' into the need and existing solutions' },
  { lead: 'Sketches', text: ' of possible designs' },
  { lead: 'Model', text: ' made and tested' },
  { lead: 'Test results', text: ' recorded' },
  { lead: 'Evaluation', text: ' against the brief' },
];
