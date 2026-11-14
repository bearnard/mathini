// Spaced-review scheduler (Leitner, 3 boxes). Pure: no clock, no database.
//
//   miss                     -> box 1, due tomorrow, streak 0
//   correct review in box 1  -> box 2, due in 3 days
//   correct review in box 2  -> box 3, due in 7 days
//   correct review in box 3  -> retired (3 correct reviews in a row)
//   miss at any point        -> back to box 1, due tomorrow
// A correct answer BEFORE the due day is not a review: nothing changes (no cramming credit).
// Days are SAST (UTC+2, no DST) calendar days, so "tomorrow" means tomorrow morning.

export const SAST_OFFSET_MS = 2 * 60 * 60 * 1000;
const DAY_MS = 86_400_000;
/** Days until a question in each box comes back (box 1 = just missed). */
export const BOX_GAP_DAYS: Record<1 | 2 | 3, number> = { 1: 1, 2: 3, 3: 7 };
export const RETIRE_AFTER = 3;

/** SAST calendar-day number of an epoch-ms instant. */
export function sastDay(ms: number): number {
  return Math.floor((ms + SAST_OFFSET_MS) / DAY_MS);
}

export interface ReviewState {
  box: 1 | 2 | 3;
  dueDay: number;
  streakCorrect: number;
  retired: boolean;
}

/** New state after an answer, or null when there is nothing to store. */
export function nextReviewState(prev: ReviewState | null, isCorrect: boolean, nowMs: number): ReviewState | null {
  const today = sastDay(nowMs);
  if (!isCorrect) return { box: 1, dueDay: today + BOX_GAP_DAYS[1], streakCorrect: 0, retired: false };
  if (!prev || prev.retired) return prev;
  if (today < prev.dueDay) return prev;
  const streakCorrect = prev.streakCorrect + 1;
  if (streakCorrect >= RETIRE_AFTER) return { ...prev, streakCorrect, retired: true };
  const box = Math.min(prev.box + 1, 3) as 1 | 2 | 3;
  return { box, dueDay: today + BOX_GAP_DAYS[box], streakCorrect, retired: false };
}
