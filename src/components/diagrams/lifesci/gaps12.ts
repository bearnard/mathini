/**
 * Grade 12 Life Sciences gap lessons: the reaction-time investigation, a resistance model and a few percentage changes.
 * All data are imaginary teaching data. gaps12.test.ts and g12LsGaps.test.ts recompute every number independently.
 */
const r2 = (n: number) => Math.round(n * 100) / 100;
export const dec = (n: number) => String(n).replace('.', ',');

// ---------- reaction time ----------
/** Five learners' reaction times to a stimulus (a falling ruler), in seconds. */
export const REACTION = [0.21, 0.25, 0.28, 0.24, 0.27] as const;
export const mean = (xs: readonly number[]) => r2(xs.reduce((a, b) => a + b, 0) / xs.length);
/** 100 km/h in metres per second. */
export const mps = (kmh: number) => (kmh * 1000) / 3600;
/** Distance a car travels during a reaction time, in metres. */
export const reactionDistance = (kmh: number, seconds: number) => r2(mps(kmh) * seconds);
export const SLOWED = 0.45; // reaction time of a distracted or drug-impaired driver, seconds (imaginary)

// ---------- resistance model ----------
/** Share of the population that is resistant after each spray: non-resistant individuals survive with probability `survive`. */
export const resistantShare = (start: number, survive: number, sprays: number): number => {
  let p = start;
  for (let i = 0; i < sprays; i++) p = p / (p + (1 - p) * survive);
  return p;
};
export const pct = (x: number) => r2(x * 100);

// ---------- finch beaks and other changes ----------
export const BEAK = { before: 9.2, after: 9.7 } as const; // mm, mean beak depth of a finch population before and after a drought (about)
export const change = (from: number, to: number) => r2(to - from);
export const percentChange = (from: number, to: number) => r2(((to - from) / from) * 100);

// ---------- artificial selection (imaginary dairy herd) ----------
export const HERD = [12, 13.5, 15, 16.5] as const; // mean milk yield, litres a day, in successive generations of selected cows
// ---------- habitat loss (imaginary) ----------
export const FOREST = { from: 12000, to: 9000 } as const; // hectares
