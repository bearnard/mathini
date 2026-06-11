// Badge evaluation logic.
//
// Determines which new badges a student has earned based on their
// accumulated stats (XP, streak, accuracy, attempt counts).

// Stats passed to evaluateBadges after an attempt submit.
export interface BadgeStats {
  totalXp: number;           // total overall XP after this attempt
  streak: number;            // current streak length (highest in this session)
  bestStreak: number;        // best streak ever recorded
  topicCorrect: number;      // correct answers in this topic
  topicTotal: number;        // total attempts in this topic
  topicAccuracy: number;     // correct / total (0-1)
  perfectStreak: number;     // current unbroken perfect streak
}

// Badge definition used internally.
export interface BadgeDef {
  id: string;
  evaluate: (stats: BadgeStats) => boolean;
}

// All badge rules.
const BADGE_RULES: BadgeDef[] = [
  { id: 'first-correct', evaluate: (s) => s.totalXp >= 10 },
  { id: 'streak-3', evaluate: (s) => s.bestStreak >= 3 },
  { id: 'streak-5', evaluate: (s) => s.bestStreak >= 5 },
  { id: 'streak-10', evaluate: (s) => s.bestStreak >= 10 },
  { id: 'xp-500', evaluate: (s) => s.totalXp >= 500 },
  { id: 'xp-2000', evaluate: (s) => s.totalXp >= 2000 },
  { id: 'xp-5000', evaluate: (s) => s.totalXp >= 5000 },
  { id: 'topic-complete-5', evaluate: (s) => s.topicTotal >= 5 },
  { id: 'topic-complete-20', evaluate: (s) => s.topicAccuracy >= 0.9 && s.topicTotal >= 20 },
  { id: 'perfect-set-5', evaluate: (s) => s.perfectStreak >= 5 },
  { id: 'perfect-set-10', evaluate: (s) => s.perfectStreak >= 10 },
];

/**
 * Return the list of badge IDs earned given the current stats.
 * Use this in the UI to detect `newlyUnlocked = earned.filter(id => !previouslyOwned.has(id))`.
 */
export function evaluateBadges(stats: BadgeStats): string[] {
  return BADGE_RULES.filter((b) => b.evaluate(stats)).map((b) => b.id);
}
