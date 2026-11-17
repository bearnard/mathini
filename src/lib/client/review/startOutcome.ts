// What /app?start=review does once the review has been looked for. Pure, so the rule is tested: the learner must NEVER land on the home screen with
// nothing happening and no word why.

export type PreviewState = 'idle' | 'loading' | 'ready' | 'none' | 'error';

export type StartOutcome = 'ignore' | 'wait' | 'start' | 'none' | 'error';

export const NO_REVIEW_MESSAGE = 'No review cards today. Nicely done: come back tomorrow.';
export const REVIEW_ERROR_MESSAGE = 'We could not load your review cards just now. Open your progress page and try again.';

export function startReviewOutcome(o: { wantsStart: boolean; grade: number | null; state: PreviewState }): StartOutcome {
  if (!o.wantsStart) return 'ignore';
  if (o.grade === null) return 'wait'; // not signed in yet
  if (o.grade !== 6) return 'none'; // spaced review is Grade 6 only: say so instead of doing nothing
  if (o.state === 'idle' || o.state === 'loading') return 'wait';
  return o.state === 'ready' ? 'start' : o.state === 'none' ? 'none' : 'error';
}
