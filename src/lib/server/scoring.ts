// XP computation for student attempts.
//
// Scoring formula:
//   base    = 10 (correct) | 2 (incorrect, "effort" XP)
//   streakBonus = min(streak, 10) * 2  (only on correct answers)
//   xp = base + streakBonus

const CORRECT_BASE = 10;
const INCORRECT_BASE = 2;
const MAX_STREAK = 10;
const STREAK_MULTIPLIER = 2;

export function computeXp(isCorrect: boolean, streak: number): number {
  const base = isCorrect ? CORRECT_BASE : INCORRECT_BASE;
  const streakBonus = isCorrect ? Math.min(streak, MAX_STREAK) * STREAK_MULTIPLIER : 0;
  return base + streakBonus;
}
