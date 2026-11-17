/**
 * Grade 9 EMS: price theory, sectors of the economy and trade unions. One small linear market (bread) gives every number in the price theory lesson and its
 * questions: quantity demanded qd = a - b x price, quantity supplied qs = c + d x price. ems9d-helpers.test.ts and g9EmsEconomy.test.ts check them.
 */

export interface Market { a: number; b: number; c: number; d: number }

export const qtyDemanded = (m: Market, price: number): number => Math.max(0, m.a - m.b * price);
export const qtySupplied = (m: Market, price: number): number => Math.max(0, m.c + m.d * price);

/** The price where quantity demanded equals quantity supplied. It must be a whole rand and the quantity a whole number for these lessons. */
export const equilibrium = (m: Market): { price: number; qty: number } => {
  const price = (m.a - m.c) / (m.b + m.d);
  if (!Number.isInteger(price)) throw new Error('the lesson market must have a whole-rand equilibrium');
  return { price, qty: qtyDemanded(m, price) };
};

export interface MarketRow { price: number; demanded: number; supplied: number; result: 'shortage' | 'surplus' | 'equilibrium'; gap: number }
export const marketTable = (m: Market, prices: readonly number[]): MarketRow[] =>
  prices.map((price) => {
    const demanded = qtyDemanded(m, price);
    const supplied = qtySupplied(m, price);
    return { price, demanded, supplied, result: demanded > supplied ? 'shortage' : demanded < supplied ? 'surplus' : 'equilibrium', gap: Math.abs(demanded - supplied) };
  });

/** A change in demand or supply that is not caused by the price: the whole schedule moves by `by` units at every price. */
export const shiftDemand = (m: Market, by: number): Market => ({ ...m, a: m.a + by });
export const shiftSupply = (m: Market, by: number): Market => ({ ...m, c: m.c + by });

/** Bread: R8 to R18 a loaf. qd = 220 - 10p and qs = 10p - 20, so the equilibrium is R12 and 100 loaves. */
export const BREAD: Market = { a: 220, b: 10, c: -20, d: 10 };
export const BREAD_PRICES = [8, 10, 12, 14, 16, 18] as const;

// ---------- sectors of the economy ----------

export type Sector = 'primary' | 'secondary' | 'tertiary';
export const SECTORS: readonly { activity: string; sector: Sector }[] = [
  { activity: 'A farmer grows wheat', sector: 'primary' },
  { activity: 'A miner digs out iron ore', sector: 'primary' },
  { activity: 'A fisher catches hake', sector: 'primary' },
  { activity: 'A mill grinds wheat into flour', sector: 'secondary' },
  { activity: 'A factory assembles cars', sector: 'secondary' },
  { activity: 'A builder constructs a house', sector: 'secondary' },
  { activity: 'A shop sells bread', sector: 'tertiary' },
  { activity: 'A teacher teaches a class', sector: 'tertiary' },
  { activity: 'A bank lends money', sector: 'tertiary' },
  { activity: 'A taxi driver transports people', sector: 'tertiary' },
];

// ---------- trade unions: the steps of a wage dispute ----------

export const DISPUTE_STEPS = ['Negotiation', 'Conciliation', 'Strike or arbitration'] as const;
