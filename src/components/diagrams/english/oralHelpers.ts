// Grade 12 English HL Paper 4 (Orals): the numbers printed in the lessons are computed here (tested in oralHelpers.test.ts).

/** The Paper 4 tasks and their marks (CAPS Grade 12): prepared speech 2 x 10, unprepared speech 15, listening for comprehension 15. */
export const PAPER4 = {
  preparedSpeeches: 2,
  marksPerPreparedSpeech: 10,
  unpreparedSpeech: 15,
  listening: 15,
  endOfYearTotal: 300,
} as const;

export const preparedMarks = (p: typeof PAPER4 = PAPER4): number => p.preparedSpeeches * p.marksPerPreparedSpeech;
export const paper4Total = (p: typeof PAPER4 = PAPER4): number => preparedMarks(p) + p.unpreparedSpeech + p.listening;
/** Paper 4 as a percentage of the 300 marks of the end-of-year external assessment, one decimal place. */
export const paper4Percent = (p: typeof PAPER4 = PAPER4): number => Math.round((paper4Total(p) / p.endOfYearTotal) * 1000) / 10;

/** A learner's example marks. */
export const EXAMPLE = { listening: 12, prepared: [8, 9], unprepared: 11 } as const;
export const exampleTotal = (e: { listening: number; prepared: readonly number[]; unprepared: number } = EXAMPLE): number => e.listening + e.prepared.reduce((a, b) => a + b, 0) + e.unprepared;

/** Suggested duration in minutes (CAPS), low and high. */
export const DURATIONS: readonly { text: string; min: number; max: number }[] = [
  { text: 'Prepared speech, report, review', min: 4, max: 5 },
  { text: 'Unprepared speech', min: 2, max: 3 },
  { text: 'Introducing a speaker; vote of thanks', min: 4, max: 5 },
  { text: 'Dialogue', min: 6, max: 8 },
  { text: 'Interview', min: 10, max: 15 },
  { text: 'Debate, panel or group discussion', min: 20, max: 30 },
];
export const rangeText = (d: { min: number; max: number }): string => `${d.min} to ${d.max} minutes`;
