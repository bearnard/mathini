// What the end of a practice session says: the score, how it went in words (never a blanket "Well done" after a poor round), and what to look at again.
export interface MissedItem { prompt: string; answer: string }
export const MAX_MISSED_SHOWN = 5;

export interface SummaryText { emoji: string; title: string; message: string; percent: number }

/** Honest and kind: the headline follows the score. */
export function summaryText(correct: number, total: number): SummaryText {
  const percent = total <= 0 ? 0 : Math.round((100 * correct) / total);
  if (total > 0 && correct === total) return { emoji: '🏆', title: 'Perfect round!', message: 'Every question right. Try another topic or come back tomorrow to keep it fresh.', percent };
  if (percent >= 80) return { emoji: '🎉', title: 'Great work!', message: 'You know this topic well. Look at the few you missed, then try another topic.', percent };
  if (percent >= 60) return { emoji: '👍', title: 'Good effort', message: 'You are getting there. Have a look at the questions below, then practise again.', percent };
  if (percent >= 40) return { emoji: '💪', title: 'Keep practising', message: 'This topic needs a bit more time. Read the answers below, go back to the lesson, then try again.', percent };
  return { emoji: '🌱', title: 'This one is tricky', message: 'That is fine: it is how you learn. Go back to the lesson, read the answers below, and try again.', percent };
}
