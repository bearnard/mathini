/**
 * A short invented passage and the reading strategies run on it, for the Grade 9 "Synoptic Revision" lesson.
 * Skimming and scanning are computed from the passage, so the picture and the lesson agree.
 */

export const PARAGRAPHS: readonly string[] = [
  'Our school started a vegetable garden in March. Learners dug the beds during break. Spinach and beetroot were planted first.',
  'Watering is done by a different class each week. The water comes from a tank that collects rain. Buckets are carried to the beds.',
  'By June the first spinach was ready. The kitchen used it for the school lunch. Learners now plan a second garden.',
];

export const sentencesOf = (p: string): string[] => p.split(/(?<=[.!?])\s+/).filter(Boolean);

/** Skimming: read the first sentence of each paragraph to get the main idea. */
export const skim = (paragraphs: readonly string[]): string[] => paragraphs.map((p) => sentencesOf(p)[0]);

/** Scanning: jump straight to the sentences that contain the word you want. */
export const scan = (paragraphs: readonly string[], keyword: string): { paragraph: number; sentence: string }[] =>
  paragraphs.flatMap((p, paragraph) =>
    sentencesOf(p)
      .filter((s) => s.toLowerCase().includes(keyword.toLowerCase()))
      .map((sentence) => ({ paragraph, sentence })),
  );

export const SUMMARY = {
  text: 'The school grew its own vegetables: learners planted spinach and beetroot, watered them with rainwater, and used the first harvest for lunch.',
  copied: 'Our school started a vegetable garden in March.',
};

export const wordCount = (s: string): number => s.trim().split(/\s+/).filter(Boolean).length;

export const totalWords = (paragraphs: readonly string[]): number => paragraphs.reduce((n, p) => n + wordCount(p), 0);

export const INFERENCE = {
  clue: 'Zinhle checked the sky, then picked up her umbrella.',
  conclusion: 'She expects rain.',
  wild: 'She is going to the beach.',
};

export const EVIDENCE = {
  point: 'The garden is useful to the whole school.',
  best: 'The kitchen used it for the school lunch.',
  irrelevant: 'Our school started a vegetable garden in March.',
};
