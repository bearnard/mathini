/**
 * Grade 6 Mathematics: percentages (CAPS Term 3, new in Grade 6) and temperature (Term 3). Every number in a lesson, picture or bank key comes from
 * these functions; grade6Percent.test.ts pins the values. No React here.
 *
 * CAPS: percentages are only tenths and hundredths, fractions whose denominators are factors of 100 (2, 4, 5, 10, 20, 25, 50), decimals in tenths and
 * hundredths, and a percentage of a whole number (25% of R300 = 1/4 of R300 = R75). Learners are NOT expected to convert any fraction to a percentage.
 */

/** The denominators CAPS allows for fraction to percentage work. */
export const PERCENT_DENOMINATORS: readonly number[] = [2, 4, 5, 10, 20, 25, 50, 100];

/** n/d as a percentage when d is a factor of 100: 1/4 -> 25, 3/20 -> 15. Null for any other denominator. */
export const fractionToPercent = (n: number, d: number): number | null => (100 % d === 0 ? (n * 100) / d : null);

/** The hundredths form of n/d: 1/4 = 25/100 (multiply top and bottom by 100 ÷ d). */
export const hundredths = (n: number, d: number): { n: number; d: 100; k: number } | null => (100 % d === 0 ? { n: (n * 100) / d, d: 100, k: 100 / d } : null);

/** A decimal in tenths or hundredths, given as a whole number of hundredths (0,25 -> 25), as a percentage: the same number. */
export const decimalToPercent = (hundredthsCount: number): number => hundredthsCount;

/** The percentage written as a decimal, in hundredths: 7% -> 0,07 (7 hundredths). */
export const percentToHundredths = (percent: number): number => percent;

/** p% of a whole number, exact when the answer is a whole number (null otherwise). */
export const percentOf = (percent: number, whole: number): number | null => ((percent * whole) % 100 === 0 ? (percent * whole) / 100 : null);

/** The fraction route CAPS shows: 25% = 1/4, so 25% of R300 = R300 ÷ 4. Returns the unit fraction denominator for 50, 25, 20, 10, 5% (else null). */
export const unitFractionOf = (percent: number): number | null => (percent > 0 && 100 % percent === 0 ? 100 / percent : null);

/** 10% first, then build: 10% of w = w ÷ 10, 5% = half of that, 20% = double it, and so on. Whole numbers only. */
export const tenPercent = (whole: number): number | null => (whole % 10 === 0 ? whole / 10 : null);

/** The percentage that part is of whole when 100 is a multiple of whole (whole = 20, 25, 50, 100 ...). */
export const partAsPercent = (part: number, whole: number): number | null => fractionToPercent(part, whole);

/** The amount after taking a percentage off. */
export const afterDiscount = (price: number, percent: number): number | null => {
  const off = percentOf(percent, price);
  return off === null ? null : price - off;
};

// ---------------------------------------------------------------- temperature (whole degrees and tenths of a degree, kept as integers)

/** Tenths of a degree as text with a decimal comma: 367 -> "36,7 °C", 23 -> keep whole degrees with tenths = 0 -> "23 °C". The argument is in TENTHS. */
export const tempText = (tenths: number): string => {
  const whole = Math.floor(tenths / 10);
  const t = tenths % 10;
  return `${whole}${t ? `,${t}` : ''} °C`;
};

/** The difference between two temperatures in tenths, always positive (the higher minus the lower). */
export const tempDifference = (aTenths: number, bTenths: number): number => Math.abs(aTenths - bTenths);

/** The temperature after a rise (positive) or fall (negative), in tenths; never below 0 here, because Grade 6 stays with positive temperatures. */
export const afterChange = (startTenths: number, changeTenths: number): number | null => (startTenths + changeTenths >= 0 ? startTenths + changeTenths : null);

/** The reading on a thermometer: the value lies on a line when it is a multiple of `step`. */
export const onLine = (valueTenths: number, stepTenths: number): boolean => valueTenths % stepTenths === 0;

/** The degrees that get a line on a thermometer scale: min, min + step, ... max. */
export const scaleTicks = (min: number, max: number, step: number): number[] => {
  const out: number[] = [];
  for (let d = min; d <= max + 1e-9; d += step) out.push(Math.round(d * 1000) / 1000);
  return out;
};

/** Small lines strictly between two numbered lines that are `interval` degrees apart: the gap is interval / step equal steps, so there is one line fewer. */
export const smallLinesBetween = (interval: number, step: number): number => interval / step - 1;

/** The y position (in the picture) of a temperature on a scale: the same function places the lines and the top of the mercury. */
export const scaleY = (deg: number, min: number, max: number, top: number, bottom: number): number => Math.round((bottom - ((deg - min) / (max - min)) * (bottom - top)) * 1000) / 1000;
