// The browser side of the run tracker: real fetch calls, crypto ids and localStorage. Kept thin; the logic is in runTracker.ts.
import { createRunTracker, type RunResult, type RunTracker, type RunTrackerDeps } from './runTracker';
import { saveLocalRun } from './localRuns';

const browserStorage = () => {
  try {
    return typeof localStorage === 'undefined' ? null : localStorage;
  } catch {
    return null;
  }
};

const newId = (): string => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  // Very old browsers: a v4-shaped id from Math.random (not secret: it only has to be unique).
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
};

const postJson = async (url: string, body: unknown): Promise<Response | null> => {
  try {
    return await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  } catch {
    return null;
  }
};

export function browserRunDeps(signedIn: () => boolean): RunTrackerDeps {
  return {
    signedIn,
    newId,
    now: () => Date.now(),
    clientVersion: process.env.NEXT_PUBLIC_BUILD_ID?.slice(0, 40),
    start: async (b) => {
      const r = await postJson('/api/runs', b);
      return !!r && r.ok;
    },
    finish: async (id) => {
      const r = await postJson(`/api/runs/${encodeURIComponent(id)}/finish`, {});
      if (!r || !r.ok) return null;
      const j = (await r.json().catch(() => null)) as { run?: RunResult } | null;
      return j?.run ?? null;
    },
    saveLocal: (s) => saveLocalRun(browserStorage(), s),
  };
}

/** Posts one answer to /api/attempts (the body may carry a runId). Resolves the response, or null. Never throws. */
export const postAttemptJson = (body: Record<string, unknown>): Promise<{ newBadges?: string[] } | null> =>
  fetch('/api/attempts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    .then((res) => res.json() as Promise<{ newBadges?: string[] }>)
    .catch(() => null);

export const createBrowserRunTracker = (signedIn: () => boolean): RunTracker => createRunTracker(browserRunDeps(signedIn));
