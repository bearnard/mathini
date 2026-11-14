// Soft per-key rate limit kept in memory (per Worker isolate). It is approximate
// across isolates by design: it only needs to stop a runaway client, not be exact.

export interface RateLimiter {
  /** Counts `n` events for `key`; returns false when the key is over its limit. */
  allow(key: string, n: number, now?: number): boolean;
}

export function createRateLimiter(limit = 300, windowMs = 60 * 60 * 1000, maxKeys = 5000): RateLimiter {
  const buckets = new Map<string, { start: number; count: number }>();

  return {
    allow(key, n, now = Date.now()) {
      if (buckets.size > maxKeys) {
        for (const [k, v] of buckets) {
          if (now - v.start >= windowMs) buckets.delete(k);
        }
        if (buckets.size > maxKeys) buckets.clear();
      }
      const b = buckets.get(key);
      if (!b || now - b.start >= windowMs) {
        buckets.set(key, { start: now, count: n });
        return n <= limit;
      }
      if (b.count + n > limit) return false;
      b.count += n;
      return true;
    },
  };
}
