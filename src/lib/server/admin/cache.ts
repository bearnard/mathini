// 60-second in-memory cache for identical admin queries (per Worker isolate).

export function createTtlCache<T>(ttlMs = 60_000, maxEntries = 200) {
  const map = new Map<string, { at: number; value: T }>();
  return {
    async get(key: string, load: () => Promise<T>, now: number = Date.now()): Promise<T> {
      const hit = map.get(key);
      if (hit && now - hit.at < ttlMs) return hit.value;
      const value = await load();
      if (map.size >= maxEntries) map.delete(map.keys().next().value as string);
      map.set(key, { at: now, value });
      return value;
    },
    clear() {
      map.clear();
    },
    size: () => map.size,
  };
}
