// Questions an admin has retired (ADR 0003 section 4). Curated banks ship in the app bundle, so a retired question is hidden
// here, by the key of its wording. FAILS OPEN: if the list cannot be loaded nothing is hidden (a learner is never blocked by
// moderation). The list is fetched once per session (also kept in sessionStorage for the next page load), and applies from
// the learner's next page load or practice run.
import { promptKey } from '../shared/retiredKey';

const STORAGE_KEY = 'pp_retired_v1';
const TIMEOUT_MS = 3000;

function readStored(): Set<string> {
  try {
    const raw = typeof sessionStorage === 'undefined' ? null : sessionStorage.getItem(STORAGE_KEY);
    const v = raw ? (JSON.parse(raw) as unknown) : null;
    return new Set(Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string') : []);
  } catch {
    return new Set();
  }
}

let retired: ReadonlySet<string> = readStored();
let inflight: Promise<void> | null = null;

/** Fetches the retired list once. Never rejects. */
export function loadRetired(): Promise<void> {
  if (inflight) return inflight;
  inflight = (async () => {
    try {
      const ctl = typeof AbortController === 'undefined' ? null : new AbortController();
      const timer = ctl ? setTimeout(() => ctl.abort(), TIMEOUT_MS) : null;
      try {
        const res = await fetch('/api/questions/retired', ctl ? { signal: ctl.signal } : undefined);
        if (!res.ok) return;
        const data = (await res.json()) as { prompts?: unknown };
        if (!Array.isArray(data.prompts)) return;
        retired = new Set(data.prompts.filter((x): x is string => typeof x === 'string'));
        try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify([...retired])); } catch { /* storage unavailable */ }
      } finally {
        if (timer) clearTimeout(timer);
      }
    } catch {
      /* fail open: nothing is hidden */
    }
  })();
  return inflight;
}

export function isRetiredPrompt(prompt: string): boolean {
  return retired.size > 0 && retired.has(promptKey(prompt));
}

/** The items without retired questions. Returns the same array when nothing is retired. */
export function dropRetired<T extends { prompt: string }>(items: readonly T[]): T[] {
  if (retired.size === 0) return items as T[];
  return items.filter((it) => !retired.has(promptKey(it.prompt)));
}

/** Test hook. */
export function setRetiredForTest(prompts: readonly string[] | null): void {
  retired = new Set(prompts ?? []);
  inflight = null;
}
