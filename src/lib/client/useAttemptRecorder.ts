'use client';

// Records practice attempts for topics that don't go through
// CapsSubjectTopic/PracticeRunner: Grade 5's custom components and the Grade 6
// Natural Sciences, Geography, History and Afrikaans topic shells.
//
// Call recordAttempt(isCorrect, section?, itemId?, prompt?, chosen?) at the moment an answer is checked.
// Each attempt is POSTed to /api/attempts immediately (signed-in learners only); newly earned
// badges accumulate in pendingBadges for BadgeUnlockModal. Call resetStreak() when a
// practice run starts over.

import { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import { useStudent } from './StudentContext';
import { createAttemptRecorder, type AttemptBody, type AttemptResponse } from './attemptRecorderCore';
import { useRunTracker } from './runs/useRunTracker';

/** ADR 0005: follow the practice session as a run. `done` flips to true on the results screen, which finishes the run. */
export interface RunOptions {
  /** Grade of the content. */
  grade: number;
  /** How many questions the session holds (0 if not known yet). */
  total: number;
  done: boolean;
  label?: string;
}

async function postAttempt(body: AttemptBody): Promise<AttemptResponse | null> {
  const res = await fetch('/api/attempts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return res.ok ? ((await res.json()) as AttemptResponse) : null;
}

export function useAttemptRecorder(task: string, subject: string, runOpts?: RunOptions) {
  const { student, refreshStudent } = useStudent();
  const [pendingBadges, setPendingBadges] = useState<string[]>([]);
  const tracker = useRunTracker();
  const runRef = useRef(runOpts);
  runRef.current = runOpts;

  // The recorder is stable for a task/subject; it reads the latest student and refresh through refs.
  const studentRef = useRef(student);
  studentRef.current = student;
  const refreshRef = useRef(refreshStudent);
  refreshRef.current = refreshStudent;

  const recorder = useMemo(
    () =>
      createAttemptRecorder(task, subject, {
        signedIn: () => !!studentRef.current,
        post: postAttempt,
        onBadges: (b) => setPendingBadges((prev) => [...new Set([...prev, ...b])]),
        onRecorded: () => refreshRef.current(),
        run: runOpts
          ? {
              tracker,
              scope: () => ({
                kind: 'practice' as const,
                grade: runRef.current?.grade ?? 0,
                subject,
                scopeKey: task,
                scopeLabel: runRef.current?.label ?? task,
                nItems: runRef.current?.total ?? 0,
              }),
            }
          : undefined,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [task, subject, tracker],
  );

  // The results screen finishes the run (the server counts the answers; nothing here is a total).
  const finished = useRef(false);
  const done = runOpts?.done ?? false;
  useEffect(() => {
    if (!runOpts) return;
    if (done && !finished.current) {
      finished.current = true;
      void recorder.finishRun().then(() => refreshRef.current());
    }
    if (!done) finished.current = false;
  }, [done, recorder, runOpts]);

  const recordAttempt = useCallback((isCorrect: boolean, section?: string, itemId?: number, prompt?: string, chosen?: string, exercise?: Parameters<typeof recorder.record>[5]) => recorder.record(isCorrect, section, itemId, prompt, chosen, exercise), [recorder]);
  const resetStreak = useCallback(() => recorder.resetStreak(), [recorder]);
  const clearBadges = useCallback(() => setPendingBadges([]), []);

  return { recordAttempt, resetStreak, pendingBadges, clearBadges };
}
