import { useState, useEffect, useCallback } from 'react';
import { NstItem } from './types';
import { kindOf, normaliseItem, shuffleOptions } from './itemKinds';

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Drops items that cannot be played (unknown kinds fall back to mcq when valid), then shuffles. */
function prepare(items: NstItem[]): NstItem[] {
  const playable = items.map(normaliseItem).filter((it): it is NstItem => it !== null);
  return shuffle(playable).map((it) => ({ ...it, options: shuffleOptions(it) }));
}

/**
 * D1 rows carry no `kind` (they are all mcq), so on their own they would hide the curated order/label
 * items. Add those from the bank to every batch that comes from D1.
 */
export function withCuratedExtras(fetched: NstItem[], bank: NstItem[]): NstItem[] {
  return [...fetched, ...bank.filter((it) => kindOf(it) !== 'mcq')];
}

/**
 * Supplies practice items for a Natural Sciences & Technology topic. Fetches
 * from the D1-backed `/api/caps/grade6` route; falls back to the curated
 * `bank` if D1 has no questions yet for this task.
 */
export function useNstItems(task: string, bank: NstItem[]) {
  const [queue, setQueue] = useState<NstItem[]>([]);
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadBatch = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/caps/grade6?task=${encodeURIComponent(task)}&count=20`);
      if (res.ok) {
        const data = (await res.json()) as { items?: NstItem[] };
        if (data.items && data.items.length >= 1) {
          setQueue(prepare(withCuratedExtras(data.items, bank)));
          setIndex(0);
          setLoading(false);
          return;
        }
      }
      throw new Error('no items');
    } catch {
      setQueue(prepare(bank));
      setIndex(0);
      setLoading(false);
    }
  }, [task, bank]);

  useEffect(() => {
    loadBatch();
  }, [loadBatch]);

  const next = useCallback(() => {
    if (index + 1 < queue.length) {
      setIndex(index + 1);
    } else {
      setDone(true);
    }
  }, [index, queue.length]);

  const reset = useCallback(() => {
    setQueue((q) => prepare(q));
    setIndex(0);
    setDone(false);
  }, []);

  return { current: queue[index] as NstItem | undefined, loading, next, done, reset, index, total: queue.length };
}
