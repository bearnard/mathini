/**
 * Small tested helpers behind the Grade 12 Life Orientation lessons (PET tasks, active citizenship,
 * world of work). Every number a worked example or check answer shows comes from here.
 */

export const DAY_LABELS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'] as const;

/** Number of active days in a week log (true = active). */
export const sessionsIn = (days: readonly boolean[]): number => days.filter(Boolean).length;

/** Did the week reach its session target? */
export const meetsTarget = (days: readonly boolean[], target: number): boolean => sessionsIn(days) >= target;

/** Attendance or participation as a whole-number percentage (0 when nothing was planned). */
export const attendancePercent = (attended: number, planned: number): number =>
  planned > 0 ? Math.round((attended / planned) * 100) : 0;

/** How many weeks in a log reached the target. */
export const weeksMeeting = (weekCounts: readonly number[], target: number): number =>
  weekCounts.filter((n) => n >= target).length;

/** Drop in a self-rated score (for example stress out of 10) after an activity. */
export const scoreDrop = (before: number, after: number): number => before - after;

export interface ActivityOption {
  name: string;
  safe: boolean;
  affordable: boolean;
  enjoyable: boolean;
  accessible: boolean;
}

export const CRITERIA = ['safe', 'affordable', 'enjoyable', 'accessible'] as const;

/** How many of the four sustainability criteria an activity option meets. */
export const criteriaMet = (o: ActivityOption): number => CRITERIA.filter((c) => o[c]).length;

/** The option that meets the most criteria (first one wins a tie). */
export const bestOption = (options: readonly ActivityOption[]): ActivityOption =>
  options.reduce((best, o) => (criteriaMet(o) > criteriaMet(best) ? o : best));

/** Point on a circle, starting at the top and going clockwise. Rounded to 0.1 for stable markup. */
export const polar = (cx: number, cy: number, r: number, i: number, n: number): { x: number; y: number } => {
  const a = -Math.PI / 2 + (2 * Math.PI * i) / n;
  return { x: Math.round((cx + r * Math.cos(a)) * 10) / 10, y: Math.round((cy + r * Math.sin(a)) * 10) / 10 };
};

/** Words in a piece of text (used to keep slide prose in the 40 to 80 word band). */
export const wordCount = (s: string): number => s.trim().split(/\s+/).filter(Boolean).length;
