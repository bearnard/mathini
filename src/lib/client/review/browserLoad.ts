import { loadReview } from './load';
import type { TodayPayload } from './resolve';
import { REVIEW_SESSION_SIZE } from '../../server/review/due';

/** Browser wiring for loadReview: the real endpoints and the lazily imported bank registry. */
export function loadTodaysReview() {
  return loadReview(
    {
      fetchToday: async () => {
        const res = await fetch('/api/review/today');
        return res.ok ? ((await res.json()) as TodayPayload) : null;
      },
      loaders: async () => (await import('../../../curriculum/grade6/reviewBanks')).GRADE6_BANKS,
      retire: (qkeys) => { void fetch('/api/review/retire', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ qkeys }) }).catch(() => {}); },
      log: (msg, err) => console.warn(msg, err),
    },
    REVIEW_SESSION_SIZE,
  );
}
