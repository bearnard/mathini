'use client';

// Records practice attempts for topics that don't go through
// CapsSubjectTopic/PracticeRunner (e.g. Grade 5's custom components).
//
// Call recordAttempt(isCorrect) at the moment an answer is checked.
// Each attempt is POSTed to /api/attempts immediately; newly earned
// badges accumulate in pendingBadges for BadgeUnlockModal.

import { useState, useRef, useCallback } from 'react';
import { useStudent } from './StudentContext';

export function useAttemptRecorder(task: string, subject: string) {
  const { student, refreshStudent } = useStudent();
  const [pendingBadges, setPendingBadges] = useState<string[]>([]);
  const streakRef = useRef(0);

  const recordAttempt = useCallback(
    (isCorrect: boolean, section?: string) => {
      streakRef.current = isCorrect ? streakRef.current + 1 : 0;
      if (!student) return;

      fetch('/api/attempts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          task,
          subject,
          section: section ?? 'general',
          isCorrect,
          streak: streakRef.current,
        }),
      })
        .then((res) => (res.ok ? (res.json() as Promise<{ newBadges?: string[] }>) : null))
        .then((data) => {
          if (data?.newBadges?.length) {
            setPendingBadges((prev) => [...new Set([...prev, ...data.newBadges!])]);
          }
          refreshStudent();
        })
        .catch(() => {});
    },
    [task, subject, student, refreshStudent],
  );

  const clearBadges = useCallback(() => setPendingBadges([]), []);

  return { recordAttempt, pendingBadges, clearBadges };
}
