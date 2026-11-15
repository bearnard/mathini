import type { Marked, ScriptLine, StageSpot, Term } from './ca8-drama-helpers';
import type { Step } from '../business/steps';

/**
 * Facts and numbers for the Grade 9 Drama lessons (Creative Arts). Everything a slide or picture
 * lays out (the devising steps, who stands where, the rubric totals, the production team) comes from
 * here and is asserted in ca9-drama-helpers.test.ts. The Grade 8 stage, tableau and script helpers
 * (ca8-drama-helpers.ts) are reused, not copied.
 */

// ---------- Term 1: devised drama ----------

export const DEVISING_STEPS: readonly Step[] = [
  { lead: 'Choose', text: ' a theme from real life.' },
  { lead: 'Brainstorm', text: ' ideas, roles and places.' },
  { lead: 'Improvise', text: ' scenes and try them out.' },
  { lead: 'Select', text: ' the best moments and shape them.' },
  { lead: 'Rehearse', text: ' and perform for an audience.' },
];

export const SOCIAL_THEMES = ['bullying', 'friendship', 'family', 'identity', 'community issues'] as const;

export const MOOD_TOOLS: readonly Term[] = [
  { name: 'Tone', meaning: 'how the voice sounds' },
  { name: 'Pace', meaning: 'how fast or slow' },
  { name: 'Tension', meaning: 'waiting for what comes' },
  { name: 'Choices', meaning: 'what performers decide' },
];

/** A devised line marked up for the voice: soft and slow, a two-beat pause, then loud and fast. */
export const DEVISED_LINE: readonly Marked[] = [
  { text: 'I saw it.', volume: 'soft', pace: 'slow' },
  { pauseBeats: 2 },
  { text: 'Everyone saw it.', volume: 'loud', pace: 'fast' },
];

/** A devised scene uses the whole stage: enter upstage right, cross to centre stage, finish downstage left. */
export const DEVISED_ROUTE: readonly StageSpot[] = [[0, 0], [1, 1], [2, 2]];
/** The clumped alternative: everyone stays in one area. */
export const CLUMPED: readonly StageSpot[] = [[1, 1], [1, 1], [1, 1]];

/** The two roles in the devised bullying scene, and what each wants. */
export const BULLY_SCENE = {
  a: { name: 'Lerato', wants: 'to be left alone' },
  b: { name: 'Kabelo', wants: 'to stay in control' },
} as const;

// ---------- Term 2: scripts ----------

export const CHARACTER_QUESTIONS: readonly Step[] = [
  { lead: 'Where', text: ' and when is the scene?' },
  { lead: 'Who', text: ' is the character, and what language do they speak?' },
  { lead: 'What', text: ' do they want?' },
  { lead: 'How', text: ' does the setting shape them?' },
];

/** Three readers for a staged reading, in a line at the front of the stage (picture left to right). */
export const READERS: readonly { label: string; at: StageSpot }[] = [
  { label: 'A', at: [2, 0] },
  { label: 'B', at: [2, 1] },
  { label: 'C', at: [2, 2] },
];

// ---------- Term 3: writing and adapting ----------

/** A three-character scene for the class, and the same scene adapted for two actors. */
export const WAITING_THREE: readonly ScriptLine[] = [
  { who: 'ZANDILE', direction: 'checking her watch', text: 'The taxi is late again.' },
  { who: 'MOSA', direction: 'shrugging', text: 'It is always late.' },
  { who: 'AYANDA', direction: 'running in, out of breath', text: 'Did I miss it?' },
];
export const WAITING_TWO: readonly ScriptLine[] = [
  { who: 'ZANDILE', direction: 'checking her watch', text: 'The taxi is late again.' },
  { who: 'MOSA', direction: 'shrugging, then running in', text: 'It is always late. Did I miss it?' },
];

export const DIALOGUE_PARTS: readonly Term[] = [
  { name: 'Name', meaning: 'who is speaking' },
  { name: 'Direction', meaning: 'what they do' },
  { name: 'Line', meaning: 'what they say' },
];

export const MOOD_MAKERS: readonly Term[] = [
  { name: 'Dialogue', meaning: 'the words spoken' },
  { name: 'Movement', meaning: 'where and how they move' },
  { name: 'Pace', meaning: 'the speed of the scene' },
  { name: 'Choices', meaning: 'what performers decide' },
];

// ---------- Term 4: production, evaluation, careers ----------

export interface Role {
  name: string;
  does: string;
}
export const PRODUCTION_TEAM: readonly Role[] = [
  { name: 'Actors', does: 'play the roles' },
  { name: 'Stage manager', does: 'calls cues' },
  { name: 'Lighting', does: 'light on cue' },
  { name: 'Sound', does: 'music, effects' },
  { name: 'Set and costume', does: 'the look' },
];
export const DIRECTOR: Role = { name: 'Director', does: 'guides the whole production' };

export const DESIGN_CHOICES: readonly Term[] = [
  { name: 'Costume', meaning: 'what characters wear' },
  { name: 'Lighting', meaning: 'brightness and colour' },
  { name: 'Set', meaning: 'where the scene is' },
  { name: 'Props', meaning: 'objects performers use' },
];

export const ACTING_CRITERIA = ['Believable character', 'Voice', 'Movement', 'Engagement'] as const;

/** A rubric: each criterion is marked out of `max`; the total, the maximum and the percentage (rounded). */
export const rubric = (scores: readonly number[], max = 5) => {
  const total = scores.reduce((t, s) => t + s, 0);
  const outOf = scores.length * max;
  return { total, outOf, percent: Math.round((100 * total) / outOf) };
};

export const TEAMWORK_CRITERIA: readonly Term[] = [
  { name: 'Communication', meaning: 'clear and kind' },
  { name: 'Support', meaning: 'helping each other' },
  { name: 'Deadlines', meaning: 'tasks done on time' },
  { name: 'Shared tasks', meaning: 'everyone does a part' },
];

/** Deadlines met out of set, with the percentage (rounded). */
export const deadlinesMet = (met: number, set: number) => ({ met, set, missed: set - met, percent: Math.round((100 * met) / set) });

export const CAREERS: readonly Term[] = [
  { name: 'Actor', meaning: 'performs roles' },
  { name: 'Director', meaning: 'guides the production' },
  { name: 'Playwright', meaning: 'writes plays' },
  { name: 'Dramaturge', meaning: 'advises on the script' },
  { name: 'Drama therapist', meaning: 'drama for wellbeing' },
];

export const REFLECTION_STEPS: readonly Step[] = [
  { lead: 'Went well:', text: ' name one strength with a moment as evidence.' },
  { lead: 'Learned:', text: ' say what you now know or can do.' },
  { lead: 'Grow:', text: ' choose one thing to improve and how.' },
];
