// Grade 12 Life Orientation Wave A: the numbers printed in the lessons are computed here (tested in lo12Helpers.test.ts).

/** Active minutes in a week plan. */
export const weekMinutes = (plan: readonly { day: string; minutes: number }[]): number => plan.reduce((a, d) => a + d.minutes, 0);
/** Days with any activity in the plan. */
export const activeDays = (plan: readonly { minutes: number }[]): number => plan.filter((d) => d.minutes > 0).length;
/** Minutes still needed to reach a weekly target (never negative). */
export const minutesShort = (done: number, target: number): number => Math.max(0, target - done);

/** Example week plan: a Grade 12 learner's long-term action plan. Target 150 minutes of moderate activity. */
export const PLAN = {
  target: 150,
  days: [
    { day: 'Mon', minutes: 30 },
    { day: 'Tue', minutes: 0 },
    { day: 'Wed', minutes: 45 },
    { day: 'Thu', minutes: 0 },
    { day: 'Fri', minutes: 30 },
    { day: 'Sat', minutes: 60 },
    { day: 'Sun', minutes: 0 },
  ],
} as const;

/** Unemployment rate in percent: the unemployed as a share of the labour force (those working plus those looking for work). */
export const unemploymentRate = (unemployed: number, labourForce: number): number => Math.round((unemployed / labourForce) * 1000) / 10;

/** A small informal business over one month, in rand. */
export const STALL = { sales: 9000, stock: 5000, transport: 1500 } as const;
export const stallProfit = (s: { sales: number; stock: number; transport: number }): number => s.sales - s.stock - s.transport;

/** Rand with a non-breaking space for thousands, so an amount never breaks across lines: R9 000. */
export const randNb = (n: number): string => `R${Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`;
