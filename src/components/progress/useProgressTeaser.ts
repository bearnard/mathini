'use client';

import { useEffect, useState } from 'react';
import type { ProgressResponse } from '../../lib/shared/progressTypes';
import { pickTeaser, type Teaser } from './teaser';

/** Reads GET /api/progress once for the dashboard card. Any failure just means no teaser: the card is a link either way. */
export function useProgressTeaser(enabled: boolean): Teaser | null {
  const [teaser, setTeaser] = useState<Teaser | null>(null);
  useEffect(() => {
    if (!enabled) return;
    let live = true;
    fetch('/api/progress', { cache: 'no-store' })
      .then((r) => (r.ok ? (r.json() as Promise<ProgressResponse>) : null))
      .then((d) => live && d && setTeaser(pickTeaser(d)))
      .catch(() => undefined);
    return () => {
      live = false;
    };
  }, [enabled]);
  return teaser;
}
