// Client analytics (ADR 0002). `track()` queues an event in memory; the queue is
// flushed every 10 s and when the page is hidden. It never throws, never awaits,
// and never blocks rendering. Identity and location are set on the server only.
//
// One line per call site:  track('topic_open', { topic: id });

import { createTracker, type EventType, type TrackProps, type Tracker } from './analyticsCore';
import { CONSENT_VERSION } from '../privacyNotice';

export type { EventType, TrackProps } from './analyticsCore';

// Version of the privacy notice the learner agreed to. Defined next to the notice
// text in lib/privacyNotice.ts; re-exported here because `signup` events carry it in meta.
export { CONSENT_VERSION };

const ENDPOINT = '/api/events';

let tracker: Tracker | null = null;
let listening = false;

function storage(kind: 'localStorage' | 'sessionStorage') {
  try {
    const s = window[kind];
    // Touch it: some browsers throw only on access.
    s.getItem('pp_probe');
    return s;
  } catch {
    return null;
  }
}

function randomId(): string {
  try {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  } catch {
    /* fall through */
  }
  return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 12)}`;
}

function getTracker(): Tracker {
  if (tracker) return tracker;
  const dnt = (() => {
    try {
      return navigator.doNotTrack === '1' || (window as unknown as { doNotTrack?: string }).doNotTrack === '1';
    } catch {
      return false;
    }
  })();

  tracker = createTracker({
    now: () => Date.now(),
    randomId,
    local: storage('localStorage'),
    session: storage('sessionStorage'),
    dnt,
    referrerHost: () => {
      try {
        return document.referrer ? new URL(document.referrer).hostname || undefined : undefined;
      } catch {
        return undefined;
      }
    },
    send: ({ dnt: isDnt, events }, unload) => {
      const body = JSON.stringify({ dnt: isDnt, events });
      if (unload && typeof navigator.sendBeacon === 'function') {
        if (navigator.sendBeacon(ENDPOINT, new Blob([body], { type: 'application/json' }))) return;
      }
      void fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true }).catch(() => {});
    },
    setTimer: (fn, ms) => window.setTimeout(fn, ms),
    clearTimer: (h) => window.clearTimeout(h as number),
  });
  return tracker;
}

function listen() {
  if (listening) return;
  listening = true;
  try {
    const flushNow = () => getTracker().flush(true);
    window.addEventListener('pagehide', flushNow);
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') flushNow();
    });
  } catch {
    /* ignore */
  }
}

export function track(type: EventType, props?: TrackProps): void {
  try {
    if (typeof window === 'undefined') return;
    listen();
    getTracker().track(type, props);
  } catch {
    /* analytics must never break the app */
  }
}
