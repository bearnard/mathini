// Grade 9 English HL gap lessons (cartoons, summary writing, prose skills): the numbers and the original passages printed in the lessons live here
// (tested in g9eng.test.ts and g9EngGaps.test.ts). Every passage is an original teaching text.

const exact = (num: number, den: number): number => {
  if (!Number.isInteger(num) || !Number.isInteger(den) || den <= 0 || num % den !== 0) throw new Error(`${num}/${den} is not a whole number`);
  return num / den;
};
export const countWords = (s: string): number => s.trim().split(/\s+/).filter(Boolean).length;

// Summary writing
export const SUMMARY = { passageWords: 240, fractionDen: 3, points: 5 } as const;
/** A summary may be at most one third of the passage. */
export const summaryLimit = (s: { passageWords: number; fractionDen: number } = SUMMARY): number => exact(s.passageWords, s.fractionDen);
export const wordsPerPoint = (s: typeof SUMMARY = SUMMARY): number => exact(summaryLimit(s), s.points);
export const LONG_SENTENCE = 'The school started a recycling project in March to reduce waste.';
export const SHORT_SENTENCE = 'School starts recycling to reduce waste.';
export const wordsSaved = (): number => countWords(LONG_SENTENCE) - countWords(SHORT_SENTENCE);

// Prose: an original short story used for plot, setting and conflict
export const STORY: readonly string[] = [
  "The rain had flooded the road to Naledi's school, and the bridge over the stream was gone.",
  'Her exam started at eight.',
  'She stood at the edge of the water with her bag above her head, afraid and unsure.',
  'A neighbour, Mr Khumalo, saw her and tied a rope between two trees.',
  'Together they pulled themselves across, one slow step at a time.',
  'Naledi reached the hall with wet shoes and two minutes to spare.',
  'She wrote her exam, and she never again said that she was too small to cross a river.',
];
export const storyWords = (): number => countWords(STORY.join(' '));
export const PLOT_STAGES = ['Exposition', 'Rising action', 'Climax', 'Falling action', 'Resolution'] as const;

// Prose: an original passage used for character, narrator and theme
export const CHARACTER: readonly string[] = [
  'Thabo always arrived first and left last.',
  'When the others laughed at his old bag, he stitched it up and said nothing.',
  'On the day of the cleaning competition he stayed behind to sweep the corners that nobody would check.',
  'The judges did not see him, but the teacher did.',
];
export const characterWords = (): number => countWords(CHARACTER.join(' '));

// Contextual questions
export const EXTRACT: readonly string[] = [
  'Lindiwe kept the letter in her pocket all morning.',
  'Twice she took it out, and twice she put it back.',
  'At lunch she gave it to her mother without a word.',
];
export const extractWords = (): number => countWords(EXTRACT.join(' '));
