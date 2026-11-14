import { useState, useEffect, useCallback } from 'react';
import { GeoItem } from './types';
import { prepareItems, withCuratedExtras } from '../../natural-sciences/_shared/itemKinds';

function prepare(items: GeoItem[]): GeoItem[] {
  return prepareItems(items);
}

/**
 * Supplies practice items for a Geography topic. Fetches from the D1-backed
 * `/api/caps/grade6` route; falls back to the curated `bank` if D1 has no
 * questions yet for this task.
 */
export function useGeoItems(task: string, bank: GeoItem[]) {
  const [queue, setQueue] = useState<GeoItem[]>([]);
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadBatch = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/caps/grade6?task=${encodeURIComponent(task)}&count=20`);
      if (res.ok) {
        const data = (await res.json()) as { items?: GeoItem[] };
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

  return { current: queue[index] as GeoItem | undefined, loading, next, done, reset, index, total: queue.length };
}
