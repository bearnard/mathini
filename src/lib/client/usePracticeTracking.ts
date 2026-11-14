import { useEffect, useRef } from 'react';
import { track } from './analytics';

interface PracticeContext {
  grade?: number;
  subject?: string;
  topic?: string;
}

interface Options {
  /** True while the learner is in practice mode. */
  active: boolean;
  /** True once the whole question set has been answered. */
  done: boolean;
  /** The shell's `isCorrect` state: null between questions, true/false after an answer. */
  isCorrect: boolean | null;
  ctx: PracticeContext;
}

/**
 * Emits practice_start when practice begins (or restarts after "Practice Again")
 * and practice_finish { score, total, ms } when the set is completed. It only
 * watches state the shell already has, so it changes no behaviour.
 */
export function usePracticeTracking({ active, done, isCorrect, ctx }: Options): void {
  const ctxRef = useRef(ctx);
  ctxRef.current = ctx;
  const prev = useRef({ active: false, done: false });
  const startedAt = useRef(0);
  const answered = useRef(0);
  const correct = useRef(0);

  // Count answers as they happen. Declared first so the counts are current when `done` flips.
  useEffect(() => {
    if (isCorrect === null) return;
    answered.current += 1;
    if (isCorrect) correct.current += 1;
  }, [isCorrect]);

  useEffect(() => {
    const p = prev.current;
    if (active && (!p.active || (p.done && !done))) {
      startedAt.current = Date.now();
      answered.current = 0;
      correct.current = 0;
      track('practice_start', ctxRef.current);
    }
    if (active && done && !p.done) {
      track('practice_finish', {
        ...ctxRef.current,
        meta: { score: correct.current, total: answered.current, ms: Math.max(0, Date.now() - startedAt.current) },
      });
    }
    prev.current = { active, done };
  }, [active, done]);
}
