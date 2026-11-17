/**
 * Grade 12 Accounting: the small calculations in the internal audit lesson (audit sampling and a cash count). auditExamples.test.ts checks them and the lesson
 * and its questions use these values.
 */
const cents = (r: number): number => Math.round(r * 100);

/** Percentage of the sample that had an error. */
export const errorRate = (errors: number, sampleSize: number): number => (errors * 100) / sampleSize;

/** Estimated number of errors in the whole population if the sample is typical. */
export const estimatedErrors = (population: number, errors: number, sampleSize: number): number => (population * errors) / sampleSize;

/** Cash counted less cash expected: negative is a shortage, positive an excess. */
export const cashDifference = (expected: number, counted: number): number => (cents(counted) - cents(expected)) / 100;

/** Every k-th item of a list, starting at `start` (systematic sampling): which invoice numbers are checked. */
export const everyKth = (first: number, last: number, k: number, start = first): number[] => {
  const out: number[] = [];
  for (let n = start; n <= last; n += k) if (n >= first) out.push(n);
  return out;
};

/** The lesson's examples. */
export const SAMPLE = { population: 200, sampleSize: 20, errors: 3 };
export const CASH = { expected: 4820, counted: 4770 };
