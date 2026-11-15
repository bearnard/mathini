/**
 * Step sequences for the Grade 11 Business Studies lessons, in each lesson's own words. The
 * numbers are never typed: the picture numbers the steps itself (numberSteps), so a sequence can
 * not repeat or skip a number (the old picture ran 1 2 3 3 4 4 6).
 */

export interface Step {
  /** A bold lead-in the lesson puts first, such as "Identify". */
  lead?: string;
  /** The rest of the step. */
  text: string;
  /** A second line of explanation, where the lesson gives one. */
  detail?: string;
}

export interface NumberedStep extends Step {
  n: number;
  first: boolean;
  last: boolean;
}

/** 1, 2, 3 ... in order, with the first and last flagged. */
export const numberSteps = (steps: readonly Step[]): NumberedStep[] =>
  steps.map((s, i) => ({ ...s, n: i + 1, first: i === 0, last: i === steps.length - 1 }));

/** The step as one plain sentence, for screen readers. */
export const stepText = (s: Step): string => `${s.lead ? `${s.lead}` : ''}${s.lead && s.text && !s.text.startsWith(' ') && !/^[—,.:;]/.test(s.text) ? ' ' : ''}${s.text}`.trim();

/** G11 Term 3, "Key steps to start a business" (seven steps, each with its explanation). */
export const START_UP_STEPS: readonly Step[] = [
  { text: 'Identify a viable opportunity', detail: 'Confirm market need through research.' },
  { text: 'Write a business plan', detail: 'Detail the vision, financials and operations.' },
  { text: 'Choose a form of ownership', detail: 'Decide on sole proprietor, Pty Ltd, co-op, etc.' },
  { text: 'Register the business', detail: 'Register with CIPC, SARS, and relevant councils.' },
  { text: 'Secure funding', detail: 'Apply for loans, grants or attract investors.' },
  { text: 'Set up operations', detail: 'Rent premises, buy equipment, hire staff.' },
  { text: 'Launch and market', detail: 'Open officially, run promotions, serve customers.' },
];

/** G11 Term 4, "The selection process" (six steps). */
export const SELECTION_STEPS: readonly Step[] = [
  { text: 'Receive and sort applications' },
  { text: 'Shortlist candidates who meet the minimum requirements' },
  { text: 'Conduct tests (aptitude, psychometric, practical)' },
  { text: 'Interview shortlisted candidates' },
  { text: 'Check references and verify qualifications' },
  { text: 'Appoint the most suitable candidate' },
];

/** G11 Term 2, "The problem-solving cycle" (seven steps). */
export const PROBLEM_SOLVING_STEPS: readonly Step[] = [
  { lead: 'Identify and define', text: ' the problem clearly' },
  { lead: 'Gather information', text: ' relevant to the problem' },
  { lead: 'Analyse', text: ' the information and causes' },
  { lead: 'Generate solutions', text: ' (use brainstorming, mind mapping, etc.)' },
  { lead: 'Select', text: ' the best solution' },
  { lead: 'Implement', text: ' the chosen solution' },
  { lead: 'Evaluate', text: ' whether the solution worked' },
];

/** G11 Term 2, "Crisis management steps" (five steps). */
export const CRISIS_STEPS: readonly Step[] = [
  { lead: 'Identify', text: ' the crisis and assess the scale of the damage' },
  { lead: 'Activate', text: ' the crisis management team and plan' },
  { lead: 'Communicate', text: ' honestly with stakeholders (staff, customers, media)' },
  { lead: 'Contain', text: ' the damage and restore operations' },
  { lead: 'Review and learn', text: ' — update the crisis plan based on lessons learnt' },
];

/** G12 Term 1, "Selection narrows down the best candidate" (human-resources-processes, four steps). */
export const HR_SELECTION_STEPS: readonly Step[] = [
  { text: 'Screen applications against the job specification.' },
  { text: 'Shortlist the strongest candidates.' },
  { text: 'Interview, test and check references fairly.' },
  { text: 'Make the appointment using objective evidence.' },
];

/** G11 IT Term 2, "Connecting a program to a database": the lesson's own "connect → query → process results → close connection". */
export const DB_CONNECTION_STEPS: readonly Step[] = [
  { text: 'Connect' },
  { text: 'Query' },
  { text: 'Process results' },
  { text: 'Close connection' },
];
