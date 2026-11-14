import type { NstItem } from './types';

export interface TopicBank {
  /** Human-readable topic name, used for the per-topic score breakdown. */
  topic: string;
  items: NstItem[];
}

export interface MockItem extends NstItem {
  topic: string;
}

export type Rng = () => number;

export function shuffle<T>(arr: readonly T[], rng: Rng = Math.random): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Builds a mixed test of `count` items, spread as evenly as possible across the
 * topic banks (e.g. 20 items over 5 topics = 4 each; over 4 topics = 5 each).
 * Any remainder goes to randomly chosen topics. If a bank is too small, the
 * shortfall is topped up from the other banks. Items never repeat, question
 * order is shuffled, and each item's options are shuffled.
 */
export function buildMockTest(groups: readonly TopicBank[], count = 20, rng: Rng = Math.random): MockItem[] {
  const usable = groups.filter((g) => g.items.length > 0);
  if (usable.length === 0 || count <= 0) return [];

  const pools = usable.map((g) => ({
    topic: g.topic,
    items: shuffle(g.items, rng),
    taken: 0,
  }));

  const base = Math.floor(count / pools.length);
  const extra = count % pools.length;
  const quota = pools.map(() => base);
  shuffle(pools.map((_, i) => i), rng)
    .slice(0, extra)
    .forEach((i) => {
      quota[i] += 1;
    });

  const picked: MockItem[] = [];
  const take = (poolIndex: number, n: number) => {
    const pool = pools[poolIndex];
    while (n > 0 && pool.taken < pool.items.length) {
      picked.push({ ...pool.items[pool.taken], topic: pool.topic });
      pool.taken += 1;
      n -= 1;
    }
    return n;
  };

  let shortfall = 0;
  pools.forEach((_, i) => {
    shortfall += take(i, quota[i]);
  });

  // Top up from whichever banks still have unused items, one at a time, round-robin.
  while (shortfall > 0) {
    let progressed = false;
    for (let i = 0; i < pools.length && shortfall > 0; i++) {
      const left = take(i, 1);
      if (left === 0) {
        shortfall -= 1;
        progressed = true;
      }
    }
    if (!progressed) break;
  }

  return shuffle(picked, rng).map((it) => ({ ...it, options: shuffle(it.options, rng) }));
}

export interface TopicScore {
  topic: string;
  total: number;
  correct: number;
}

/** First-attempt score per topic, in order of first appearance. */
export function scoreByTopic(items: readonly MockItem[], firstAttempt: readonly boolean[]): TopicScore[] {
  const map = new Map<string, TopicScore>();
  items.forEach((it, i) => {
    const row = map.get(it.topic) ?? { topic: it.topic, total: 0, correct: 0 };
    row.total += 1;
    if (firstAttempt[i]) row.correct += 1;
    map.set(it.topic, row);
  });
  return Array.from(map.values());
}

/** Topics below the pass mark, lowest score first. */
export function topicsToRevise(scores: readonly TopicScore[], threshold = 0.6): string[] {
  return scores
    .filter((s) => s.total > 0 && s.correct / s.total < threshold)
    .sort((a, b) => a.correct / a.total - b.correct / b.total)
    .map((s) => s.topic);
}
