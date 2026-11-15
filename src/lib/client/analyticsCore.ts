// Core of the client analytics helper, with every browser dependency injected so
// it can be unit-tested. `track()` here must NEVER throw and never block.

export type EventType =
  | 'page_view'
  | 'session_start'
  | 'onboarding_start'
  | 'signup'
  | 'login'
  | 'topic_open'
  | 'learn_complete'
  | 'practice_start'
  | 'practice_finish'
  | 'mock_test_start'
  | 'mock_test_finish';

export interface TrackProps {
  grade?: number;
  subject?: string;
  topic?: string;
  path?: string;
  meta?: Record<string, string | number | boolean>;
}

export interface WireEvent extends TrackProps {
  type: EventType;
  device_id: string;
  session_id: string;
  referrer?: string;
}

export interface KeyValueStore {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

export interface TrackerDeps {
  now: () => number;
  randomId: () => string;
  /** localStorage (device id). null when unavailable. */
  local: KeyValueStore | null;
  /** sessionStorage (visit id). null when unavailable. */
  session: KeyValueStore | null;
  /** navigator.doNotTrack === '1' */
  dnt: boolean;
  /** Host of document.referrer, if any. */
  referrerHost: () => string | undefined;
  /** Hand a batch to the network. `unload` is true on pagehide/hidden. */
  send: (batch: { dnt: boolean; events: WireEvent[] }, unload: boolean) => void;
  setTimer: (fn: () => void, ms: number) => unknown;
  clearTimer: (handle: unknown) => void;
}

/**
 * The admin area is never tracked: the owner looking at the dashboard is not a visitor. Neither is a teacher-review link:
 * its path contains the secret token, which must not reach the event log.
 */
export function isTrackablePath(pathname: string | null | undefined): boolean {
  const p = (pathname ?? '').split(/[?#]/)[0];
  return !(p === '/admin' || p.startsWith('/admin/') || p === '/api' || p.startsWith('/api/') || p === '/teacher-review' || p.startsWith('/teacher-review/'));
}

export const FLUSH_INTERVAL_MS = 10_000;
export const MAX_BATCH = 20;
export const MAX_QUEUE = 200;
export const SESSION_IDLE_MS = 30 * 60 * 1000;
export const DEVICE_KEY = 'pp_device_id';
export const SESSION_KEY = 'pp_visit';

export interface Tracker {
  track(type: EventType, props?: TrackProps): void;
  /** Send everything queued now (in batches of at most 20). */
  flush(unload?: boolean): void;
  /** Number of events waiting to be sent (for tests). */
  pending(): number;
}

export function createTracker(deps: TrackerDeps): Tracker {
  let queue: WireEvent[] = [];
  let timer: unknown = null;
  let memDeviceId: string | null = null;
  let memSession: { id: string; last: number } | null = null;

  const safe = <T,>(fn: () => T, fallback: T): T => {
    try {
      return fn();
    } catch {
      return fallback;
    }
  };

  function deviceId(): string {
    if (deps.dnt) return 'dnt';
    return safe(() => {
      const stored = deps.local?.getItem(DEVICE_KEY);
      if (stored) return stored;
      const id = deps.randomId();
      memDeviceId = memDeviceId ?? id;
      try {
        deps.local?.setItem(DEVICE_KEY, memDeviceId);
      } catch {
        /* blocked storage: keep the in-memory id */
      }
      return memDeviceId;
    }, memDeviceId ?? (memDeviceId = deps.randomId()));
  }

  /** Returns the current visit id and whether this call started a new visit. */
  function visit(now: number): { id: string; fresh: boolean } {
    let current: { id: string; last: number } | null = memSession;
    const raw = safe(() => deps.session?.getItem(SESSION_KEY) ?? null, null);
    if (raw) {
      try {
        const p = JSON.parse(raw) as { id?: unknown; last?: unknown };
        if (typeof p.id === 'string' && typeof p.last === 'number') current = { id: p.id, last: p.last };
      } catch {
        /* ignore a corrupt value */
      }
    }
    const fresh = !current || now - current.last > SESSION_IDLE_MS;
    const next = fresh || !current ? { id: deps.randomId(), last: now } : { id: current.id, last: now };
    memSession = next;
    safe(() => deps.session?.setItem(SESSION_KEY, JSON.stringify(next)), undefined);
    return { id: next.id, fresh };
  }

  function schedule() {
    if (timer !== null) return;
    timer = safe(() => deps.setTimer(() => {
      timer = null;
      flush(false);
    }, FLUSH_INTERVAL_MS), null);
  }

  function enqueue(e: WireEvent) {
    if (queue.length >= MAX_QUEUE) queue.shift(); // never grow without bound
    queue.push(e);
    schedule();
  }

  function flush(unload = false) {
    safe(() => {
      if (timer !== null) {
        deps.clearTimer(timer);
        timer = null;
      }
      while (queue.length > 0) {
        const events = queue.splice(0, MAX_BATCH);
        try {
          deps.send({ dnt: deps.dnt, events }, unload);
        } catch {
          /* a failed send is dropped: analytics never breaks the app */
        }
      }
    }, undefined);
  }

  function track(type: EventType, props: TrackProps = {}) {
    safe(() => {
      // Do Not Track: page views only.
      if (deps.dnt && type !== 'page_view') return;
      const now = deps.now();
      const v = visit(now);
      const base = { device_id: deviceId(), session_id: v.id };
      if (v.fresh && type !== 'session_start') {
        const ref = safe(() => deps.referrerHost(), undefined);
        enqueue({ type: 'session_start', ...base, ...(ref ? { referrer: ref } : {}) });
      }
      enqueue({ type, ...base, ...props });
    }, undefined);
  }

  return { track, flush, pending: () => queue.length };
}
