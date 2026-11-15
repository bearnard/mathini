/**
 * Complementary base pairing in DNA: adenine pairs with thymine (two hydrogen bonds) and cytosine pairs with guanine (three).
 * The second strand of the picture is computed from the first with complement(), so the rule on the slide and the picture cannot disagree.
 */

export type Base = 'A' | 'T' | 'C' | 'G';

export const PAIR: Record<Base, Base> = { A: 'T', T: 'A', C: 'G', G: 'C' };
export const BASE_NAME: Record<Base, string> = { A: 'adenine', T: 'thymine', C: 'cytosine', G: 'guanine' };

const isBase = (c: string): c is Base => c === 'A' || c === 'T' || c === 'C' || c === 'G';

/** The complementary strand, base for base (read in the same left-to-right order as the picture draws it). */
export const complement = (strand: string): string => {
  return [...strand].map((c) => {
    if (!isBase(c)) throw new RangeError(`not a DNA base: ${c}`);
    return PAIR[c];
  }).join('');
};

/** Hydrogen bonds between a base and its partner: A and T share 2, C and G share 3. */
export const hydrogenBonds = (base: Base): 2 | 3 => (base === 'A' || base === 'T' ? 2 : 3);

export interface Rung { left: Base; right: Base; bonds: 2 | 3 }

export const rungs = (strand: string): Rung[] => {
  const other = complement(strand);
  return [...strand].map((c, i) => ({ left: c as Base, right: other[i] as Base, bonds: hydrogenBonds(c as Base) }));
};
