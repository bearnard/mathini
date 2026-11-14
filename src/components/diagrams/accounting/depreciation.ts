/**
 * Depreciation arithmetic for the Grade 11 fixed-asset pictures. Every number drawn comes from here,
 * and the examples are the lesson's own:
 *   straight-line: cost R45 000, residual value R5 000, 4 years, so R10 000 every year;
 *   diminishing balance: 20 percent a year on the carrying value, starting from R40 000.
 */

export const STRAIGHT_LINE_EXAMPLE = { cost: 45000, residual: 5000, years: 4 } as const;
export const DIMINISHING_EXAMPLE = { opening: 40000, ratePercent: 20, years: 3 } as const;

const toRand = (cents: number): number => Math.round(cents) / 100;

export interface Schedule {
  /** Carrying value at the start, then at the end of each year. */
  values: number[];
  /** Depreciation charged in each year. */
  charges: number[];
}

/** Straight-line: the same charge every year, (cost - residual) / years. */
export const straightLine = (cost: number, residual: number, years: number): Schedule => {
  const annual = toRand(((cost - residual) * 100) / years);
  const values = [cost];
  const charges: number[] = [];
  for (let y = 1; y <= years; y++) {
    charges.push(annual);
    values.push(toRand(values[y - 1] * 100 - annual * 100));
  }
  return { values, charges };
};

/** Diminishing balance: a fixed percentage of the carrying value each year, so the charge shrinks. */
export const diminishing = (opening: number, ratePercent: number, years: number): Schedule => {
  const values = [opening];
  const charges: number[] = [];
  for (let y = 1; y <= years; y++) {
    const charge = toRand(values[y - 1] * ratePercent);
    charges.push(charge);
    values.push(toRand(values[y - 1] * 100 - charge * 100));
  }
  return { values, charges };
};

/** "R10 000 every year" when the charges are all equal, else the list "R8 000, R6 400, R5 120". */
export const chargeCaption = (charges: number[]): string =>
  charges.every((c) => c === charges[0]) ? `${rand(charges[0])} every year` : charges.map(rand).join(', ');

/** Rand as the lesson writes it: "R10 000", cents only when needed. */
export const rand = (n: number): string => {
  const whole = Math.trunc(Math.abs(n));
  const cents = Math.round((Math.abs(n) - whole) * 100);
  return `R${String(whole).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}${cents ? `,${String(cents).padStart(2, '0')}` : ''}`;
};
