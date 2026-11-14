/**
 * VAT arithmetic for the Grade 11 Accounting pictures. Every number drawn comes from here, and the
 * example figures are the lesson's own (the VAT control account: input R12 000, output R18 000;
 * the price example: R200 excluding VAT, R230 including). South African VAT is 15 percent.
 */

export const VAT_RATE = 15;

/** The lesson's VAT control account example (rand). */
export const VAT_EXAMPLE = { input: 12000, output: 18000 } as const;
/** The lesson's price example (rand). */
export const PRICE_EXAMPLE = { exclusive: 200 } as const;

const toRand = (cents: number): number => Math.round(cents) / 100;

/** VAT on a VAT-exclusive price: 15 percent of it. */
export const vatOnExclusive = (exclusive: number): number => toRand(exclusive * VAT_RATE);

/** VAT-inclusive price = exclusive x 1.15. */
export const vatInclusive = (exclusive: number): number => toRand(exclusive * (100 + VAT_RATE));

/** The VAT inside a VAT-inclusive price: 15/115 of it (not 15 percent of it). */
export const vatPortion = (inclusive: number): number => toRand((inclusive * VAT_RATE * 100) / (100 + VAT_RATE));

/** The price without VAT, from a VAT-inclusive price. */
export const vatExclusive = (inclusive: number): number => toRand(inclusive * 100 - vatPortion(inclusive) * 100);

/** Net VAT = output - input: payable to SARS, or a refund from SARS when input is bigger. */
export const netVat = (output: number, input: number): { amount: number; direction: 'payable' | 'refund' } => ({
  amount: Math.abs(output - input),
  direction: output >= input ? 'payable' : 'refund',
});
