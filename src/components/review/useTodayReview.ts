'use client';

import { useEffect, useState } from 'react';
import { loadTodaysReview } from '../../lib/client/review/browserLoad';
import type { ReviewQuestion } from '../../lib/client/review/resolve';

/**
 * Questions ready to show today, for the home-screen card. Starts only once the browser is idle after the
 * home screen has rendered, and yields null (no card) when nothing can be shown or loading fails.
 */
export function useReviewPreview(enabled: boolean, refreshKey: unknown = 0): ReviewQuestion[] | null {
  const [questions, setQuestions] = useState<ReviewQuestion[] | null>(null);
  useEffect(() => {
    if (!enabled) { setQuestions(null); return; }
    let cancelled = false;
    const start = () => {
      void loadTodaysReview().then((q) => { if (!cancelled) setQuestions(q && q.length > 0 ? q : null); });
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
  return questions;
}
