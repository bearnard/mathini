/**
 * Small tested helpers for the Grade 8 Term 4 and Grade 9 Term 1 English writing lessons.
 * Every number and list a slide shows comes from here (see writing.test.ts).
 */

/** Share a total number of minutes between stages, in whole minutes, always summing to the total. */
export const splitMinutes = (total: number, shares: readonly number[]): number[] => {
  const sum = shares.reduce((a, b) => a + b, 0);
  const mins = shares.map((s) => Math.floor((total * s) / sum));
  mins[mins.length - 1] += total - mins.reduce((a, b) => a + b, 0);
  return mins;
};

export const EXAM_STAGES = [
  { label: 'Plan', share: 1, color: '#818cf8' },
  { label: 'Write', share: 4, color: '#34d399' },
  { label: 'Edit', share: 1, color: '#fbbf24' },
] as const;
export const EXAM_TOTAL = 60;

export const AIDA = [
  { letter: 'A', word: 'Attention', job: 'grab the reader with a striking image or bold colour', color: '#fb7185' },
  { letter: 'I', word: 'Interest', job: 'give a reason to keep reading', color: '#fbbf24' },
  { letter: 'D', word: 'Desire', job: 'make the reader want the product', color: '#34d399' },
  { letter: 'A', word: 'Action', job: 'motivate the reader to buy or respond', color: '#818cf8' },
] as const;
export const aidaInitials = () => AIDA.map((s) => s.letter).join('');

export const PROCESS = [
  { label: 'Plan', color: '#818cf8' },
  { label: 'Draft', color: '#34d399' },
  { label: 'Review', color: '#fbbf24' },
  { label: 'Revise', color: '#fb7185' },
] as const;

export const ESSAY_STRUCTURE = [
  { label: 'Introduction', color: '#818cf8' },
  { label: 'Body paragraphs', color: '#34d399' },
  { label: 'Conclusion', color: '#fbbf24' },
] as const;

export const ESSAY_TYPES = [
  { type: 'Narrative', purpose: 'tell a story with characters, setting and plot', prompt: 'The day the lights went out', color: '#818cf8' },
  { type: 'Descriptive', purpose: 'create a vivid picture with sensory details', prompt: 'The school hall at break', color: '#34d399' },
  { type: 'Reflective', purpose: 'explore your thoughts and feelings about an experience', prompt: 'What losing a match taught me', color: '#fbbf24' },
  { type: 'Argumentative', purpose: 'present a viewpoint and support it with evidence', prompt: 'Cellphones should be allowed in class', color: '#fb7185' },
] as const;

export const SCAN_LINES = [
  'Choir practice: Tuesday 14:30 in the hall',
  'Netball: Wednesday 15:00 on the court',
  'Chess club: Thursday 14:00 in Room 5',
] as const;
export const SCAN_TITLE = 'After-school clubs';

/** Scanning: the index of the first line holding the keyword, or -1. */
export const findLine = (lines: readonly string[], keyword: string) =>
  lines.findIndex((l) => l.toLowerCase().includes(keyword.toLowerCase()));

export const wordCount = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

export const HUB_SKILLS = ['Comprehension', 'Literature', 'Grammar', 'Summary'] as const;

export const SUMMARY_SOURCE =
  'The report explains that several suburbs ran short of water because the dams were low. It also describes how the council cut supply at night, and it proposes that neighbours work together to save water by fixing leaks and collecting rainwater.';
export const SUMMARY_GOOD = 'The report highlights water shortages and proposes community saving measures.';
export const SUMMARY_BAD = 'The report is extremely interesting and very amazing and incredibly important for everyone always.';
