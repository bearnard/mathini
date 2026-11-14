'use client';

// Records practice attempts for topics that don't go through
// CapsSubjectTopic/PracticeRunner: Grade 5's custom components and the Grade 6
// Natural Sciences, Geography, History and Afrikaans topic shells.
//
// Call recordAttempt(isCorrect, section?, itemId?) at the moment an answer is checked.
// Each attempt is POSTed to /api/attempts immediately (signed-in learners only); newly earned
// badges accumulate in pendingBadges for BadgeUnlockModal. Call resetStreak() when a
// practice run starts over.

import { useState, useRef, useCallback, useMemo } from 'react';
import { useStudent } from './StudentContext';
import { createAttemptRecorder, type AttemptBody, type AttemptResponse } from './attemptRecorderCore';

async function postAttempt(body: AttemptBody): Promise<AttemptResponse | null> {
  const res = await fetch('/api/attempts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return res.ok ? ((await res.json()) as AttemptResponse) : null;
}

export function useAttemptRecorder(task: string, subject: string) {
  const { student, refreshStudent } = useStudent();
  const [pendingBadges, setPendingBadges] = useState<string[]>([]);

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
      }),
    [task, subject],
  );

  const recordAttempt = useCallback((isCorrect: boolean, section?: string, itemId?: number) => recorder.record(isCorrect, section, itemId), [recorder]);
  const resetStreak = useCallback(() => recorder.resetStreak(), [recorder]);
  const clearBadges = useCallback(() => setPendingBadges([]), []);

  return { recordAttempt, resetStreak, pendingBadges, clearBadges };
}
