import { useState, useEffect, useCallback } from 'react';
import { HisItem } from './types';

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function prepare(items: HisItem[]): HisItem[] {
  return shuffle(items).map((it) => ({ ...it, options: shuffle(it.options) }));
}

/**
 * Supplies practice items for a History topic. Fetches a fresh batch from the
 * Gemini-backed `/api/his` route; on any failure (or invalid response) it falls
 * back to the topic's curated `bank` so practice always works offline.
 */
export function useHisItems(task: string, bank: HisItem[]) {
  const [queue, setQueue] = useState<HisItem[]>([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const loadBatch = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/his', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task, count: 8 }),
      });
      if (res.ok) {
        const data = (await res.json()) as { items?: HisItem[] };
        if (data.items && data.items.length >= 1) {
          setQueue(prepare(data.items));
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
    setIndex((prev) => {
      if (prev + 1 < queue.length) {
        return prev + 1;
      }
      // Exhausted the batch — reshuffle the same items for continued practice.
      setQueue((q) => prepare(q));
      return 0;
    });
  }, [queue.length]);

  return { current: queue[index] as HisItem | undefined, loading, next };
}
