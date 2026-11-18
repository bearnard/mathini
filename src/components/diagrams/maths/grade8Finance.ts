/**
 * Grade 8 Term 1 helpers: scientific notation, ratio and rate, percentages and financial contexts.
 * Whole numbers only. Money is whole cents and every percentage step is integer arithmetic, so a
 * result is either exact or the function returns null (the lessons only use exact numbers).
 * CAPS Grade 8 asks for repeated calculation, not the simple-interest formula, and compound interest is Grade 9.
 */

export const VAT_PERCENT = 15;

const SEP = ' ';
/** 2500000 to "2 500 000" with non-breaking spaces. */
export const spaced = (n: number): string => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, SEP);

// ---------- scientific notation (positive exponents) ----------

/** 25 000 000 to { mantissa: '2,5', exp: 7 }. n must be a whole number of at least 10. */
export const sciNotation = (n: number): { mantissa: string; exp: number } | null => {
  if (!Number.isInteger(n) || n < 10) return null;
  const digits = String(n);
  const rest = digits.slice(1).replace(/0+$/, '');
  return { mantissa: rest ? `${digits[0]},${rest}` : digits[0], exp: digits.length - 1 };
};

/** '2,5' and 7 to 25 000 000. Null when the mantissa does not give a whole number. */
export const fromSci = (mantissa: string, exp: number): number | null => {
  const [whole, dec = ''] = mantissa.split(',');
  const digits = `${whole}${dec}`;
  const shift = exp - dec.length;
  if (shift < 0) return null;
  return Number(digits) * 10 ** shift;
};

/** How many places the decimal comma moves to get from 2,5 to 2 500: the exponent. */
export const placesMoved = (n: number): number => (sciNotation(n)?.exp ?? 0);

// ---------- ratio and rate ----------

const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b));

/** 12 : 18 to { a: 2, b: 3, by: 6 }. */
export const simplifyRatio = (a: number, b: number): { a: number; b: number; by: number } => {
  const g = gcd(a, b);
  return { a: a / g, b: b / g, by: g };
};

/** Share a whole in a ratio: 20 in 3 : 2 gives [12, 8] (one part is 4). Null when it does not share exactly. */
export const shareInRatio = (whole: number, parts: number[]): { onePart: number; shares: number[] } | null => {
  const total = parts.reduce((s, p) => s + p, 0);
  if (whole % total !== 0) return null;
  const onePart = whole / total;
  return { onePart, shares: parts.map((p) => p * onePart) };
};

/** Increase (or decrease) a number in a ratio from : to. 12 in 3 : 5 gives { onePart: 4, result: 20 }. */
export const changeInRatio = (n: number, from: number, to: number): { onePart: number; result: number } | null => {
  if (n % from !== 0) return null;
  const onePart = n / from;
  return { onePart, result: onePart * to };
};

/** A rate as a whole amount per unit: R360 for 6 kg is R60 per kg. Null when it is not whole. */
export const unitRate = (total: number, units: number): number | null => (total % units === 0 ? total / units : null);

/** Distance (km) and time (hours) to speed (km/h); also gives the time from distance and speed. Whole answers only. */
export const speedKmH = (km: number, hours: number): number | null => unitRate(km, hours);
export const hoursFor = (km: number, kmh: number): number | null => unitRate(km, kmh);

// ---------- percentages and money (cents) ----------

/** pct % of an amount in cents, or null when that is not a whole number of cents. */
export const percentOf = (pct: number, cents: number): number | null => ((cents * pct) % 100 === 0 ? (cents * pct) / 100 : null);

export const increaseBy = (cents: number, pct: number): { change: number; result: number } | null => {
  const change = percentOf(pct, cents);
  return change === null ? null : { change, result: cents + change };
};

export const decreaseBy = (cents: number, pct: number): { change: number; result: number } | null => {
  const change = percentOf(pct, cents);
  return change === null ? null : { change, result: cents - change };
};

/** Cost price and selling price. */
export const profitOrLoss = (cost: number, sell: number): { kind: 'profit' | 'loss' | 'break-even'; amount: number } =>
  sell > cost ? { kind: 'profit', amount: sell - cost } : sell < cost ? { kind: 'loss', amount: cost - sell } : { kind: 'break-even', amount: 0 };

/** Profit or loss as a percentage of the cost price (whole percent only). */
export const profitPercent = (cost: number, sell: number): number | null => {
  const amount = Math.abs(sell - cost);
  return (amount * 100) % cost === 0 ? (amount * 100) / cost : null;
};

/** Discount of pct % on a marked price: what is taken off and what you pay. */
export const discount = (marked: number, pct: number): { off: number; pay: number } | null => {
  const r = decreaseBy(marked, pct);
  return r === null ? null : { off: r.change, pay: r.result };
};

/** Price before VAT to VAT and price including VAT at 15%. */
export const addVat = (exclusive: number): { vat: number; inclusive: number } | null => {
  const r = increaseBy(exclusive, VAT_PERCENT);
  return r === null ? null : { vat: r.change, inclusive: r.result };
};

/** Price including VAT back to the price before VAT (divide by 115, multiply by 100). */
export const removeVat = (inclusive: number): { exclusive: number; vat: number } | null => {
  if ((inclusive * 100) % (100 + VAT_PERCENT) !== 0) return null;
  const exclusive = (inclusive * 100) / (100 + VAT_PERCENT);
  return { exclusive, vat: inclusive - exclusive };
};

/** A budget: income, the planned amounts, what is spent and what is left (can be negative). */
export const budget = (income: number, items: number[]): { spent: number; left: number } => {
  const spent = items.reduce((s, v) => s + v, 0);
  return { spent, left: income - spent };
};

// ---------- loans, simple interest, hire purchase, exchange rates (cents) ----------

/** Simple interest by repeated calculation: the same interest every year on the original amount. */
export const simpleInterestByYear = (principal: number, pct: number, years: number): { perYear: number; total: number; amount: number; yearly: number[] } | null => {
  const perYear = percentOf(pct, principal);
  if (perYear === null) return null;
  const yearly = Array.from({ length: years }, () => perYear);
  const total = perYear * years;
  return { perYear, total, amount: principal + total, yearly };
};

/** Hire purchase: deposit plus equal monthly instalments, compared with the cash price. */
export const hirePurchase = (cash: number, deposit: number, instalment: number, months: number): { paid: number; extra: number; instalments: number } => {
  const instalments = instalment * months;
  const paid = deposit + instalments;
  return { paid, extra: paid - cash, instalments };
};

/** Rand to a foreign currency at a rate of R (cents) per 1 unit. Null when it does not divide exactly. */
export const toForeign = (randCents: number, rateCents: number): number | null => (randCents % rateCents === 0 ? randCents / rateCents : null);
/** Foreign units to rand (cents). */
export const toRand = (units: number, rateCents: number): number => units * rateCents;
