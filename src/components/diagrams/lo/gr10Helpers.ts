/** Small tested helpers for the Grade 10 Life Orientation lessons (see gr10Helpers.test.ts). Every number in a worked example comes from here. */

/** Take-home pay: the gross salary minus the deductions (income tax, UIF, pension and so on). */
export const netPay = (gross: number, deductions: number): number => gross - deductions;

/** Rand amount as text with a space for thousands, e.g. 15000 -> "R15 000". */
export const rand = (n: number): string => `R${Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`;

/** Total minutes of a session from its parts (warm-up, main part, cool-down). */
export const sessionMinutes = (parts: readonly { minutes: number }[]): number => parts.reduce((s, p) => s + p.minutes, 0);

/** Minutes in a week from sessions per week and minutes per session. */
export const weeklyMinutes = (sessions: number, perSession: number): number => sessions * perSession;

/** A term mark in Grade 10 and 11 Life Orientation: the task out of 80 plus the PET out of 20 (CAPS 4.6), so out of 100. */
export const termMark = (task: number, pet: number): number => task + pet;

/** The year mark: the four term marks added up, out of 400. */
export const yearMark = (terms: readonly number[]): number => terms.reduce((s, t) => s + t, 0);

/** The year mark as a percentage of 400 (each of the four terms is out of 100). */
export const yearPercent = (terms: readonly number[]): number => (yearMark(terms) / (terms.length * 100)) * 100;

/** Whole hours in a number of minutes (only used when the minutes divide evenly). */
export const hoursOf = (minutes: number): number => minutes / 60;

/** How much a count rose between the first and the last record (for example successful catches out of 10). */
export const gain = (first: number, last: number): number => last - first;
