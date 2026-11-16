'use client';

// Challenges for a generated Grade 5 exercise: signed seeds from the server (POST /api/exercise), fetched ten at a time and used one by one. The exercise
// builds its problem from the seed with the same pure generator the server has, and sends the challenge back with the answer, so the server can mark it.
// When the learner is signed out, offline or the request fails, the exercise still works from a local random seed: that answer simply does not count.
import { useCallback, useEffect, useRef, useState } from 'react';
import type { ExerciseKind } from '../shared/g5Exercises';

export interface IssuedChallenge { kind: string; seed: number; issuedAt: number; sig: string }
export interface Taken { seed: number; challenge: IssuedChallenge | null }

const FRESH_MS = 25 * 60 * 1000; // a little under the server's 30 minutes

export function useExerciseChallenge(kind: ExerciseKind, signedIn: boolean) {
  const queue = useRef<IssuedChallenge[]>([]);
  const fetching = useRef(false);
  const [ready, setReady] = useState(false);

  const refill = useCallback(async () => {
    if (!signedIn || fetching.current) return;
    fetching.current = true;
    try {
      const res = await fetch('/api/exercise', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ kind, count: 10 }) });
      if (res.ok) {
        const j = (await res.json()) as { challenges?: { seed: number; issuedAt: number; sig: string }[] };
        queue.current.push(...(j.challenges ?? []).map((c) => ({ kind, ...c })));
      }
    } catch { /* offline: local seeds */ } finally {
      fetching.current = false;
      setReady(true);
    }
  }, [kind, signedIn]);

  useEffect(() => {
    if (!signedIn) { setReady(true); return; }
    void refill();
  }, [signedIn, refill]);

  /** The next challenge (and tops the queue up); a local random seed with no challenge when none is available. */
  const take = useCallback((): Taken => {
    const now = Date.now();
    queue.current = queue.current.filter((c) => now - c.issuedAt < FRESH_MS);
    const c = queue.current.shift() ?? null;
    if (queue.current.length < 3) void refill();
    return c ? { seed: c.seed, challenge: c } : { seed: Math.floor(Math.random() * 0xffffffff), challenge: null };
  }, [refill]);

  return { ready, take };
}
