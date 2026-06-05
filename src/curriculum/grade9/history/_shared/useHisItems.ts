import { useState, useEffect } from 'react';
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
 * Gemini-backed `/api/caps/his` route; on any failure (or invalid response) it falls
 * back to the topic's curated `bank` so practice always works offline.
 */
export function useHisItems(task: string, bank: HisItem[]) {
  const [queue, setQueue] = useState<HisItem[]>([]);
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadBatch = () => {
    setLoading(true);
    fetch('/api/caps/his', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task, count: 8 }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json() as Promise<{ items?: HisItem[] }>;
        }
        throw new Error('Response not ok');
      })
      .then((data) => {
        if (data.items && data.items.length >= 1) {
          setQueue(prepare(data.items));
          setIndex(0);
          setLoading(false);
          return;
        }
        throw new Error('No items');
      })
      .catch(() => {
        setQueue(prepare(bank));
        setIndex(0);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadBatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [task]);

  const next = () => {
    if (index + 1 < queue.length) {
      setIndex(index + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setQueue((q) => prepare(q));
    setIndex(0);
    setDone(false);
  };

  return { current: queue[index] as HisItem | undefined, loading, next, done, reset, index, total: queue.length };
}
