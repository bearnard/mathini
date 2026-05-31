// Generic hook for any CAPS subject — replaces per-subject useXItems hooks.
// apiPath example: '/api/caps'  task example: 'gr6-history-what-is-history'
import { useState, useEffect, useCallback } from 'react';

export interface CapsItem {
  prompt: string;
  options: string[];
  answer: string;
  explanation?: string;
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function prepare(items: CapsItem[]): CapsItem[] {
  return shuffle(items).map((it) => ({ ...it, options: shuffle(it.options) }));
}

/**
 * Supplies practice items for a CAPS topic. Fetches a fresh batch from the
 * Gemini-backed route; on any failure (or invalid response) it falls back to
 * the topic's curated `bank` so practice always works offline.
 */
export function useCapsItems(apiPath: string, task: string, bank: CapsItem[]) {
  const [queue, setQueue] = useState<CapsItem[]>([]);
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadBatch = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(apiPath, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task, count: 8 }),
      });
      if (res.ok) {
        const data = (await res.json()) as { items?: CapsItem[] };
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
  }, [apiPath, task, bank]);

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

  return { current: queue[index] as CapsItem | undefined, loading, next, done, reset, index, total: queue.length };
}
