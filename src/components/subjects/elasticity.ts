// Schematic helpers for the price-elasticity picture. The numbers are made up
// for teaching (a pretend good); they are not real market data.

export const percentChange = (from: number, to: number): number => ((to - from) / from) * 100;

/** PED = % change in quantity demanded ÷ % change in price (negative for a normal demand curve). */
export const ped = (p1: number, q1: number, p2: number, q2: number): number =>
  percentChange(q1, q2) / percentChange(p1, p2);

export type DemandKind = 'perfectly inelastic' | 'inelastic' | 'unit elastic' | 'elastic';

export const demandKind = (pedValue: number): DemandKind => {
  const m = Math.abs(pedValue);
  if (m === 0) return 'perfectly inelastic';
  if (Math.abs(m - 1) < 1e-9) return 'unit elastic';
  return m > 1 ? 'elastic' : 'inelastic';
};

export const totalRevenue = (p: number, q: number): number => p * q;

/** Pretend good: price rises R10 to R12. Elastic buyers cut quantity 100 to 60; inelastic buyers 100 to 90. */
export const SCHEMATIC = {
  p1: 10,
  p2: 12,
  q1: 100,
  elasticQ2: 60,
  inelasticQ2: 90,
} as const;
