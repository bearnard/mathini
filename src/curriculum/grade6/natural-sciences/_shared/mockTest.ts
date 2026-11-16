import type { NstItem } from './types';
import { kindOf, marksOf, normaliseItem, shuffleOptions } from './itemKinds';
import { dropRetired } from '../../../../lib/client/retired';

export interface TopicBank {
  /** Human-readable topic name, used for the per-topic score breakdown. */
  topic: string;
  /** The topic's task slug, so a question can be reported. */
  task?: string;
  items: NstItem[];
}

export interface MockItem extends NstItem {
  topic: string;
  task?: string;
}

export interface MockTestOptions {
  /**
   * How many self-marked explain items to include. Default 0: the term mock tests are quick and fully auto-marked,
   * so explain items are left out. The exam practice test asks for some (each from a different topic where it can).
   */
  explain?: number;
}

export { seededRandom, type Rng } from '../../../../lib/shared/seededRandom';
import type { Rng } from '../../../../lib/shared/seededRandom';

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
 * shortfall is topped up from the other banks. Items never repeat, and neither
 * does a question (the same prompt in two topic banks is asked only once).
 * Question order is shuffled, and each item's options are shuffled.
 *
 * Self-marked explain items are never drawn at random. `options.explain` asks for that many on purpose, each from
 * a different topic where it can (they count towards that topic's share); the default is none.
 */
export function buildMockTest(
  groups: readonly TopicBank[],
  count = 20,
  rng: Rng = Math.random,
  options: MockTestOptions = {},
): MockItem[] {
  // Items that cannot be played are dropped; unknown kinds fall back to mcq when valid.
  const entries = groups
    .map((g) => {
      const playable = dropRetired(g.items).map(normaliseItem).filter((it): it is NstItem => it !== null);
      return {
        topic: g.topic,
        task: g.task,
        explain: shuffle(playable.filter((it) => kindOf(it) === 'explain'), rng),
        items: shuffle(playable.filter((it) => kindOf(it) !== 'explain'), rng),
        taken: 0,
      };
    })
    .filter((e) => e.items.length > 0 || e.explain.length > 0);
  if (entries.length === 0 || count <= 0) return [];

  const base = Math.floor(count / entries.length);
  const extra = count % entries.length;
  const quota = entries.map(() => base);
  shuffle(entries.map((_, i) => i), rng)
    .slice(0, extra)
    .forEach((i) => {
      quota[i] += 1;
    });

  const picked: MockItem[] = [];
  const seenPrompts = new Set<string>();

  // Explain items first: one per topic in a random topic order, going round again only if more are wanted.
  let explainLeft = Math.max(0, Math.floor(options.explain ?? 0));
  const explainOrder = shuffle(entries.map((_, i) => i), rng);
  while (explainLeft > 0) {
    let progressed = false;
    for (const i of explainOrder) {
      if (explainLeft === 0) break;
      const item = entries[i].explain.shift();
      if (!item || seenPrompts.has(item.prompt)) continue;
      seenPrompts.add(item.prompt);
      picked.push({ ...item, topic: entries[i].topic, task: entries[i].task });
      quota[i] = Math.max(0, quota[i] - 1);
      explainLeft -= 1;
      progressed = true;
    }
    if (!progressed) break;
  }

  // Order and label items take longer, so a test never holds more than ~15% of them (3 in 20, 4 in 25).
  const maxRecall = Math.max(1, Math.round(count * 0.15));
  let recallPicked = 0;
  const take = (poolIndex: number, n: number) => {
    const pool = entries[poolIndex];
    while (n > 0 && pool.taken < pool.items.length) {
      const item = pool.items[pool.taken];
      pool.taken += 1;
      if (seenPrompts.has(item.prompt)) continue; // already asked from another topic
      if (kindOf(item) !== 'mcq') {
        if (recallPicked >= maxRecall) continue;
        recallPicked += 1;
      }
      seenPrompts.add(item.prompt);
      picked.push({ ...item, topic: pool.topic, task: pool.task });
      n -= 1;
    }
    return n;
  };

  let shortfall = 0;
  entries.forEach((_, i) => {
    shortfall += take(i, quota[i]);
  });

  // Top up from whichever banks still have unused items, one at a time, round-robin.
  while (shortfall > 0) {
    let progressed = false;
    for (let i = 0; i < entries.length && shortfall > 0; i++) {
      const left = take(i, 1);
      if (left === 0) {
        shortfall -= 1;
        progressed = true;
      }
    }
    if (!progressed) break;
  }

  return shuffle(picked, rng).map((it) => ({ ...it, options: shuffleOptions(it, rng) }));
}

export interface TopicScore {
  topic: string;
  total: number;
  correct: number;
}

/**
 * First-attempt score per topic, in order of first appearance. `firstAttempt[i]` is true/false for an auto-marked
 * question (worth marksOf(item): 1 for mcq, order and label) or the marks gained, for a self-marked explain item.
 * With no explain items every question is worth 1, so `total` and `correct` count questions as before.
 */
export function scoreByTopic(items: readonly MockItem[], firstAttempt: readonly (boolean | number)[]): TopicScore[] {
  const map = new Map<string, TopicScore>();
  items.forEach((it, i) => {
    const row = map.get(it.topic) ?? { topic: it.topic, total: 0, correct: 0 };
    row.total += marksOf(it);
    row.correct += marksGained(it, firstAttempt[i]);
    map.set(it.topic, row);
  });
  return Array.from(map.values());
}

/** Marks gained by one question: a boolean means all or nothing; a number is the marks given (capped to the question's marks). */
export function marksGained(item: NstItem, result: boolean | number | undefined): number {
  if (typeof result === 'number') return Math.max(0, Math.min(result, marksOf(item)));
  return result ? marksOf(item) : 0;
}

/** Total marks a test is worth. */
export function totalMarks(items: readonly NstItem[]): number {
  return items.reduce((n, it) => n + marksOf(it), 0);
}

/** Topics below the pass mark, lowest score first. */
export function topicsToRevise(scores: readonly TopicScore[], threshold = 0.6): string[] {
  return scores
    .filter((s) => s.total > 0 && s.correct / s.total < threshold)
    .sort((a, b) => a.correct / a.total - b.correct / b.total)
    .map((s) => s.topic);
}
