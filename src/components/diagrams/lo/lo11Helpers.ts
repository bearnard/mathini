import { r3 } from '../round';

/** Numbers and layout for the Grade 9 Life Orientation Term 4 lessons. Tested in lo11Helpers.test.ts. */

/** The difference between two results, e.g. sit-ups in Term 1 and in Term 4. */
export const change = (from: number, to: number) => ({ from, to, diff: to - from, direction: to > from ? 'up' : to < from ? 'down' : 'same' });

/** Percentage points still needed to reach a goal mark (0 when the goal is met). */
export const gapToGoal = (mark: number, goal: number) => Math.max(0, goal - mark);

/** Minutes of revision in a week: sessions of the same length on some days. */
export const weeklyMinutes = (sessionMinutes: number, days: number) => sessionMinutes * days;

/** Topics per revision evening when topics are shared equally; `rest` are left over. */
export const perEvening = (topics: number, evenings: number) => ({ each: Math.floor(topics / evenings), rest: topics % evenings });

/**
 * A paper's time split: reading time and checking time are kept aside, the rest is shared by marks.
 * Returns the minutes per mark and the minutes for every section.
 */
export const examPlan = (totalMinutes: number, marks: number, readMinutes: number, checkMinutes: number, sectionMarks: number[]) => {
  const answering = totalMinutes - readMinutes - checkMinutes;
  const perMark = answering / marks;
  const sections = sectionMarks.map((m) => r3(m * perMark));
  return { answering, perMark: r3(perMark), sections, sumMarks: sectionMarks.reduce((a, b) => a + b, 0) };
};

/** FET Grade 10 to 12 learners take seven subjects: four compulsory and three they choose. */
export const fetSubjects = () => {
  const compulsory = ['Home language', 'First additional language', 'Mathematics or Mathematical Literacy', 'Life Orientation'];
  const chosen = 3;
  return { compulsory, chosen, total: compulsory.length + chosen };
};

/** Which school phase a grade belongs to (Grades 7-9 Senior Phase, 10-12 FET). */
export const phaseOf = (grade: number): 'Senior Phase' | 'FET' | 'other' => (grade >= 7 && grade <= 9 ? 'Senior Phase' : grade >= 10 && grade <= 12 ? 'FET' : 'other');

/** Bar heights proportional to the values (the biggest fills maxH). */
export const barHeights = (values: number[], maxH = 40) => {
  const top = Math.max(...values);
  return { total: values.reduce((a, b) => a + b, 0), bars: values.map((v) => ({ value: v, h: top <= 0 ? 0 : r3((v / top) * maxH) })) };
};
