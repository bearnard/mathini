/** Small tested helpers for the Grade 8 Life Orientation Term 3 lessons (lo6Helpers.test.ts). */

/** "Monday", "Monday and Wednesday", "Monday, Wednesday and Friday". */
export const joinList = (items: string[]): string =>
  items.length <= 1 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;

/** Share days between groups by turns: day 1 to group 1, day 2 to group 2, and so on round again. */
export const shareDays = (days: string[], groups: string[]): { group: string; days: string[] }[] =>
  groups.map((group, g) => ({ group, days: days.filter((_, i) => i % groups.length === g) }));

/** How many different ideas a team has once repeats are removed. */
export const countUnique = (items: string[]): number => new Set(items.map((s) => s.trim().toLowerCase())).size;

/** A gradual build-up: `n` sessions that start at `start` minutes and grow by `step` each time. */
export const buildUp = (start: number, step: number, n: number): { sessions: number[]; total: number } => {
  const sessions = Array.from({ length: Math.max(0, n) }, (_, i) => start + step * i);
  return { sessions, total: sessions.reduce((a, b) => a + b, 0) };
};
