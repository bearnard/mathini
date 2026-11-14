// Generic hook for any CAPS subject.
// - Without options: serves questions from the static bank (Gr7–12 topics).
// - With apiPath + task: fetches from the D1 question pool, falling back to the
//   curated static `bank` when the pool is empty (not yet seeded) or the fetch
//   fails — so a topic always has practice items rather than an empty state.
import { useState, useCallback, useEffect, useRef } from 'react';
import { topUpFromBank, usableForTopUp } from '../shared/topUpFromBank';
import { dropRetired } from './retired';

export interface CapsItem {
  id?: number;
  section?: string;
  prompt: string;
  options: string[];
  answer: string;
  explanation?: string;
}

interface PoolOptions {
  apiPath: string;
  task: string;
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
  return shuffle(dropRetired(items)).map((it) => ({ ...it, options: shuffle(it.options) }));
}

/**
 * Picks the question set for pool mode: the fetched pool when it has enough items;
 * a pool that runs short (purged, or rejected rows no longer served) is topped up
 * from the curated static `bank` (topUpFromBank); an empty pool is the bank. A
 * null/undefined pool means the fetch failed or returned no `items` field — both
 * fall back to the bank.
 */
export function selectQueue(
  pool: CapsItem[] | null | undefined,
  bank: CapsItem[],
): CapsItem[] {
  return pool && pool.length > 0 ? topUpFromBank(pool, bank, undefined, undefined, usableForTopUp) : bank;
}

/**
 * Supplies practice items for a topic.
 *
 * Static mode (no options): shuffles the pre-curated `bank` — no network call.
 * Pool mode (apiPath + task): fetches from the D1 question pool via the given
 * API path, and falls back to the static `bank` when the pool returns no items
 * or the request fails.
 */
export function useCapsItems(bank: CapsItem[], options?: PoolOptions) {
  const isPoolMode = !!(options?.apiPath && options?.task);

  // Latest bank, read inside the fetch effect without making it a dependency.
  const bankRef = useRef(bank);
  bankRef.current = bank;

  const [queue, setQueue] = useState<CapsItem[]>(() =>
    isPoolMode ? [] : prepare(bank),
  );
  const [loading, setLoading] = useState(isPoolMode);
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isPoolMode) return;

    let cancelled = false;

    const fetchPool = async () => {
      setLoading(true);
      try {
        const url = `${options.apiPath}?task=${encodeURIComponent(options.task)}&count=20`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`API error ${res.status}`);
        const data = (await res.json()) as { items?: CapsItem[] };
        if (!cancelled) {
          setQueue(prepare(selectQueue(data.items, bankRef.current)));
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setQueue(prepare(selectQueue(null, bankRef.current)));
          setLoading(false);
        }
      }
    };

    void fetchPool();
    return () => {
      cancelled = true;
    };
  }, [isPoolMode, options?.apiPath, options?.task]);

  const next = useCallback(() => {
    setIndex((i) => {
      if (i + 1 < queue.length) return i + 1;
      setDone(true);
      return i;
    });
  }, [queue.length]);

  const reset = useCallback(() => {
    if (isPoolMode && options?.apiPath && options?.task) {
      setLoading(true);
      setIndex(0);
      setDone(false);
      const url = `${options.apiPath}?task=${encodeURIComponent(options.task)}&count=20`;
      fetch(url)
        .then((r) => r.json() as Promise<{ items?: CapsItem[] }>)
        .then((data) => {
          setQueue(prepare(selectQueue(data.items, bank)));
          setLoading(false);
        })
        .catch(() => {
          setQueue(prepare(selectQueue(null, bank)));
          setLoading(false);
        });
    } else {
      setQueue(prepare(bank));
      setIndex(0);
      setDone(false);
    }
  }, [isPoolMode, options?.apiPath, options?.task, bank]);

  return {
    current: queue[index] as CapsItem | undefined,
    loading,
    next,
    done,
    reset,
    index,
    total: queue.length,
  };
}

