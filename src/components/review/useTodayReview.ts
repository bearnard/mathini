'use client';

import { useEffect, useState } from 'react';
import { loadTodaysReview } from '../../lib/client/review/browserLoad';
import type { ReviewQuestion } from '../../lib/client/review/resolve';
import type { PreviewState } from '../../lib/client/review/startOutcome';

/**
 * Questions ready to show today, for the home-screen card. Starts only once the browser is idle after the
 * home screen has rendered, and yields null questions (no card) when nothing can be shown or loading fails. `state` says which of those it was.
 */
export function useReviewPreview(enabled: boolean, refreshKey: unknown = 0): { questions: ReviewQuestion[] | null; state: PreviewState } {
  const [questions, setQuestions] = useState<ReviewQuestion[] | null>(null);
  const [state, setState] = useState<PreviewState>('idle');
  useEffect(() => {
    if (!enabled) { setQuestions(null); setState('idle'); return; }
    setState('loading');
    let cancelled = false;
    const start = () => {
      void loadTodaysReview().then((q) => {
        if (cancelled) return;
        setQuestions(q && q.length > 0 ? q : null);
        setState(q === null ? 'error' : q.length > 0 ? 'ready' : 'none');
      });
    };
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number; cancelIdleCallback?: (id: number) => void };
    let idle: number | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (w.requestIdleCallback) idle = w.requestIdleCallback(start, { timeout: 2000 });
    else timer = setTimeout(start, 500);
    return () => {
      cancelled = true;
      if (idle !== undefined) w.cancelIdleCallback?.(idle);
      if (timer) clearTimeout(timer);
    };
  }, [enabled, refreshKey]);
  return { questions, state };
}
