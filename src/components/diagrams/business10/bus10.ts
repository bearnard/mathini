/**
 * Grade 10 Business Studies gap lessons: self-scores, a weighted location decision, pyramid scheme growth, force-field analysis, a survey result,
 * a daily time budget and a hire purchase example. All data are imaginary teaching data. bus10.test.ts and g10BsGaps.test.ts recompute every number
 * independently (BigInt for money and growth).
 */
export const dec = (n: number) => String(n).replace('.', ',');
export const nbsp = (n: number | string) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

// ---------- entrepreneurial self-assessment (1 = weak, 5 = strong) ----------
export const SELF = [
  ['Risk taking', 4], ['Perseverance', 5], ['Leadership', 3], ['Organisation', 2], ['Confidence', 4], ['Flexibility', 3], ['Commitment', 5], ['Willpower', 4],
] as const;
export const selfTotal = () => SELF.reduce((a, [, s]) => a + s, 0);
export const selfAverage = () => selfTotal() / SELF.length;
export const strongest = () => SELF.reduce((a, b) => (b[1] > a[1] ? b : a));
export const weakest = () => SELF.reduce((a, b) => (b[1] < a[1] ? b : a));

// ---------- business location: weighted scores ----------
export const FACTORS = [
  { name: 'Transport', weight: 3 }, { name: 'Labour', weight: 2 }, { name: 'Electricity and water', weight: 3 }, { name: 'Crime', weight: 2 },
] as const;
export const SITES = [
  { name: 'Site A (town centre)', scores: [4, 3, 4, 2] },
  { name: 'Site B (industrial park)', scores: [5, 4, 5, 4] },
  { name: 'Site C (rural farm)', scores: [2, 2, 3, 5] },
] as const;
export const siteTotal = (s: readonly number[]) => s.reduce((a, v, i) => a + v * FACTORS[i].weight, 0);
export const bestSite = () => SITES.reduce((a, b) => (siteTotal(b.scores) > siteTotal(a.scores) ? b : a));
export const maxScore = () => FACTORS.reduce((a, f) => a + f.weight * 5, 0);

// ---------- pyramid scheme growth ----------
/** People needed at level n when each person must recruit `each` new people: each^n. */
export const level = (each: number, n: number): bigint => BigInt(each) ** BigInt(n);
export const cumulative = (each: number, n: number): bigint => { let s = 0n; for (let i = 0; i <= n; i++) s += level(each, i); return s; };
export const SA_POPULATION = 60000000n; // about

// ---------- force-field analysis ----------
export const DRIVING = [4, 3, 2] as const;
export const RESTRAINING = [3, 2] as const;
export const sum = (xs: readonly number[]) => xs.reduce((a, b) => a + b, 0);

// ---------- survey ----------
export const SURVEY = { asked: 50, yes: 40 } as const;
export const percentYes = () => (SURVEY.yes / SURVEY.asked) * 100;

// ---------- time budget (hours in a school day) ----------
export const DAY = [['Sleep', 8], ['School', 7], ['Travel', 1], ['Meals', 2], ['Homework and study', 3]] as const;
export const freeHours = () => 24 - DAY.reduce((a, [, h]) => a + h, 0);

// ---------- hire purchase example (cents) ----------
export const HP = { cash: 2400000, deposit: 240000, n: 12, each: 190000 } as const;
export const hpTotal = () => HP.deposit + HP.n * HP.each;
export const hpExtra = () => hpTotal() - HP.cash;
