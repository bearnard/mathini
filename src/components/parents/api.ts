// Browser helpers for the parent screens: same-origin calls that carry the action header the server requires on writes.
export interface ChildSummary {
  id: string;
  displayName: string;
  grade: number;
  avatar: string | null;
  linkedAt: number;
  lastSeenAt: number | null;
  consent: 'none' | 'learner' | 'parent';
  consentVersion: string | null;
  activity?: { answersThisWeek: number; daysPractisedLast14: number; lastPractisedAt: number | null; weekAccuracyPct: number | null; changeSinceLastWeek: number | null };
}

export interface ApiResult<T> { ok: boolean; status: number; data: T & { error?: string } }

export async function call<T = Record<string, unknown>>(path: string, action?: string, body?: unknown): Promise<ApiResult<T>> {
  try {
    const res = await fetch(path, {
      method: action ? 'POST' : 'GET',
      headers: { ...(action ? { 'X-Auth-Action': action } : {}), ...(body === undefined ? {} : { 'Content-Type': 'application/json' }) },
      body: body === undefined ? undefined : JSON.stringify(body),
      cache: 'no-store',
      referrerPolicy: 'no-referrer',
    });
    const data = (await res.json().catch(() => ({}))) as T & { error?: string };
    return { ok: res.ok, status: res.status, data };
  } catch {
    return { ok: false, status: 0, data: { error: 'Could not reach the server. Check your connection.' } as T & { error?: string } };
  }
}

/** "3 days ago", "today", "never". */
export function ago(ms: number | null, now: number): string {
  if (ms == null) return 'not yet';
  const days = Math.floor((now - ms) / 86_400_000);
  return days <= 0 ? 'today' : days === 1 ? 'yesterday' : `${days} days ago`;
}

export const CONSENT_TEXT: Record<ChildSummary['consent'], string> = {
  parent: 'You have given consent for this learner.',
  learner: "Only the learner's own tick is on file. Give your consent to replace it.",
  none: 'Consent is off. This learner has the reduced level of data use.',
};
