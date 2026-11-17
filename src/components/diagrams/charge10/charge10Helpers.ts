import { r3 } from '../round';

/** Numbers for the Grade 10 Physical Sciences electrostatics basics lesson. Tested in charge10Helpers.test.ts. */

/** The charge on one electron in magnitude: 1,6 × 10⁻¹⁹ C (data sheet value used in Grade 10). */
export const QE = 1.6e-19;
/** Charge of n extra electrons (negative) or n missing electrons (positive), in coulomb. */
export const chargeFromElectrons = (n: number, gained: boolean): number => (gained ? -1 : 1) * n * QE;
/** Number of electrons that carry a charge Q (quantisation: Q = n qe). */
export const electronsFromCharge = (q: number): number => Math.round(Math.abs(q) / QE);
/** Two identical conducting spheres that touch share the total charge equally (conservation of charge). */
export const sharedCharge = (q1: number, q2: number): number => r3((q1 + q2) / 2);
/** Net charge is conserved: before = after. */
export const totalCharge = (qs: readonly number[]): number => r3(qs.reduce((a, q) => a + q, 0));
/** Force direction between two charges. */
export const interaction = (q1: number, q2: number): 'attract' | 'repel' | 'none' => (q1 === 0 || q2 === 0 ? 'none' : q1 * q2 > 0 ? 'repel' : 'attract');
/** Which way electrons move when two materials touch and one is rubbed: the material that ends up negative gained electrons. */
export const chargeAfterFriction = (gainedElectrons: boolean): 'negative' | 'positive' => (gainedElectrons ? 'negative' : 'positive');
