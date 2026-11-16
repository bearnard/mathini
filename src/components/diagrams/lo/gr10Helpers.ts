/** Small tested helpers for the Grade 10 Life Orientation lessons (see gr10Helpers.test.ts). Every number in a worked example comes from here. */

/** Take-home pay: the gross salary minus the deductions (income tax, UIF, pension and so on). */
export const netPay = (gross: number, deductions: number): number => gross - deductions;

/** Rand amount as text with a space for thousands, e.g. 15000 -> "R15 000". */
export const rand = (n: number): string => `R${Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`;

/** Total minutes of a session from its parts (warm-up, main part, cool-down). */
export const sessionMinutes = (parts: readonly { minutes: number }[]): number => parts.reduce((s, p) => s + p.minutes, 0);

/** Minutes in a week from sessions per week and minutes per session. */
export const weeklyMinutes = (sessions: number, perSession: number): number => sessions * perSession;
