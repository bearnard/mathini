import { r3 } from '../round';

/** Numbers for the Grade 10 Physical Sciences electric circuits lesson, kept to the Grade 10 CAPS list:
 * potential difference V = W/Q, current I = Q/t, resistors in series and in parallel. No Ohm's law calculations (Grade 11).
 * Tested in circuit10Helpers.test.ts. */

export const potentialDifference = (workJ: number, chargeC: number): number => r3(workJ / chargeC);
export const workDone = (volts: number, chargeC: number): number => r3(volts * chargeC);
export const current = (chargeC: number, seconds: number): number => r3(chargeC / seconds);
export const chargeFlowed = (amps: number, seconds: number): number => r3(amps * seconds);

/** Series: the same current flows through each resistor and the resistances add. */
export const seriesR = (rs: readonly number[]): number => r3(rs.reduce((a, r) => a + r, 0));
/** Parallel: the reciprocals add. */
export const parallelR = (rs: readonly number[]): number => r3(1 / rs.reduce((a, r) => a + 1 / r, 0));
/** Two resistors in parallel: product over sum. */
export const twoParallel = (r1: number, r2: number): number => r3((r1 * r2) / (r1 + r2));
/** Series circuit: the potential differences across the components add up to the supply (the voltage divider). */
export const totalPd = (vs: readonly number[]): number => r3(vs.reduce((a, v) => a + v, 0));
/** Parallel circuit: the branch currents add up to the total current (the current divider). */
export const totalCurrent = (is: readonly number[]): number => r3(is.reduce((a, i) => a + i, 0));
export const missingPart = (total: number, others: readonly number[]): number => r3(total - others.reduce((a, x) => a + x, 0));
/** Adding a resistor in series raises the total resistance and adding one in parallel lowers it. */
export const effect = (before: number, after: number): 'increases' | 'decreases' | 'stays the same' => (after > before ? 'increases' : after < before ? 'decreases' : 'stays the same');
