'use client';

import { useCallback, useState } from 'react';
import { MAX_MISSED_SHOWN, type MissedItem } from '../shared/practiceSummary';

/** Counts a practice session's right answers and keeps the questions the learner missed, so the end screen can say how it went and what to look at again. */
export function usePracticeTally() {
  const [correct, setCorrect] = useState(0);
  const [missed, setMissed] = useState<MissedItem[]>([]);
  const note = useCallback((ok: boolean, item?: { prompt: string; answer: string } | null) => {
    if (ok) setCorrect((n) => n + 1);
    else if (item) setMissed((m) => (m.length >= MAX_MISSED_SHOWN * 4 ? m : [...m, { prompt: item.prompt, answer: item.answer }]));
  }, []);
  const reset = useCallback(() => { setCorrect(0); setMissed([]); }, []);
  return { correct, missed, note, reset };
}
