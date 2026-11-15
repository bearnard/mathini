/**
 * "Feature, evidence, effect" data for the Grade 9 "Grammar and Literature Consolidation" lesson.
 * The passages are original, written for this lesson.
 */

export interface FeatureAnswer { feature: string; evidence: string; effect: string }

export const isComplete = (a: FeatureAnswer): boolean => [a.feature, a.evidence, a.effect].every((s) => s.trim().length > 0);

export const SHORT: FeatureAnswer = {
  feature: 'Short sentences',
  evidence: 'Thandi froze. The door creaked. Footsteps.',
  effect: 'create urgency and match her panic',
};

export const sentences = (text: string): string[] => text.split(/(?<=[.!?])\s+/).filter(Boolean);

export const wordCount = (s: string): number => s.trim().split(/\s+/).filter(Boolean).length;

export const sentenceLengths = (text: string): number[] => sentences(text).map(wordCount);

export const PUNCTUATION = {
  plain: 'I did not take it.',
  shout: 'I did not take it!',
  pause: 'I did not… take it.',
};

export const DIALOGUE = {
  casual: '“We was waiting since morning,” said Sipho.',
  nervous: '“I… I didn’t mean to,” said Lerato, looking at the floor.',
};

export const VOICE = { active: 'The dog chased Lerato.', passive: 'Lerato was chased.' };

export const THEME = [
  'On Monday Sipho shared his lunch with a hungry boy.',
  'On Friday the boy shared his pencils with Sipho.',
];

export const CONTEXT = {
  sentence: 'The drought was severe: the dam was empty and the fields had cracked.',
  word: 'severe',
  meaning: 'very bad',
};
