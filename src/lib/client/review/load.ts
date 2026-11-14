// Loads today's review in one place, for both the home-screen card and the review screen.
// The card only appears with questions that can really be shown, so tapping it always starts a session.

import { resolveCandidates, type BankLoaders, type ReviewQuestion, type TodayPayload } from './resolve';

export const REVIEW_LOAD_TIMEOUT_MS = 8000;

export interface LoadDeps {
  fetchToday: () => Promise<TodayPayload | null>;
  loaders: () => Promise<BankLoaders>;
  retire: (qkeys: string[]) => void;
  log?: (msg: string, err?: unknown) => void;
  timeoutMs?: number;
}

/** Resolves to the questions to show (possibly none). Never throws: failure or timeout gives null. */
export async function loadReview(deps: LoadDeps, limit: number): Promise<ReviewQuestion[] | null> {
  const work = (async () => {
    const payload = await deps.fetchToday();
    if (!payload) throw new Error('today request failed');
    if (payload.candidates.length === 0) return [] as ReviewQuestion[];
    const { questions, gone } = await resolveCandidates(payload, await deps.loaders(), limit);
    if (gone.length > 0) deps.retire(gone);
    return questions;
  })();
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<null>((resolve) => { timer = setTimeout(() => resolve(null), deps.timeoutMs ?? REVIEW_LOAD_TIMEOUT_MS); });
  try {
    const r = await Promise.race([work, timeout]);
    if (r === null) deps.log?.('review load timed out');
    return r;
  } catch (e) {
    deps.log?.('review load failed', e);
    return null;
  } finally {
    clearTimeout(timer);
    work.catch(() => {}); // a late failure after the timeout must not become an unhandled rejection
  }
}
