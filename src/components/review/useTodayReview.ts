'use client';

import { useEffect, useState } from 'react';
import type { TodayPayload } from '../../lib/client/review/resolve';

/** How many questions are due today for the signed-in Grade 6 learner. null = unknown/none (show nothing). */
export function useDueCount(enabled: boolean, refreshKey: unknown = 0): number | null {
  const [count, setCount] = useState<number | null>(null);
  useEffect(() => {
    if (!enabled) { setCount(null); return; }
    let cancelled = false;
    fetch('/api/review/today')
      .then((r) => (r.ok ? (r.json() as Promise<TodayPayload>) : null))
      .then((d) => { if (!cancelled) setCount(d && d.dueCount > 0 ? d.dueCount : null); })
      .catch(() => { if (!cancelled) setCount(null); });
    return () => { cancelled = true; };
  }, [enabled, refreshKey]);
  return count;
}
