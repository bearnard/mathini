'use client';

import { makeQkey } from '../lib/shared/qkey';
import { useState, useRef, useEffect, useCallback } from 'react';
import { triggerConfetti } from '../lib/confetti';
import Card from './ui/Card';
import Button from './ui/Button';
import Streak from './gamification/Streak';
import Feedback from './ui/Feedback';
import { useCapsItems } from '../lib/client/useCapsItems';
import type { CapsItem } from '../lib/client/useCapsItems';
import MathText from './subjects/MathText';
import { useStudent } from '../lib/client/StudentContext';
import { aggregateResultsBySection, pickWeakSections } from '../lib/client/revision';
import BadgeUnlockModal from './gamification/BadgeUnlockModal';
import { usePracticeTracking } from '../lib/client/usePracticeTracking';
import ReportProblem from './items/ReportProblem';

export interface PracticeRunnerProps {
  /** Static question bank (used as fallback or sole source in static mode). */
  bank: CapsItem[];
  /** Pool-mode options (apiPath + task). If both present, fetches from D1. */
  apiPath?: string;
  task?: string;
  /** Called after practice completes. Receives weak section names. */
  onComplete?: (weakSections: string[]) => void;
}

/**
 * Shared practice block: question display, answer options, feedback, streak.
 * Used by CapsSubjectTopic (Learn→Practice) and RevisionView.
 *
 * Accepts a static bank and optional apiPath/task for D1 pool mode.
 * On completion, POSTs per-question results to /api/attempts, then calls onComplete with weak sections.
 */
const PracticeRunner = ({ bank, apiPath, task, onComplete }: PracticeRunnerProps) => {
  const { student, refreshStudent } = useStudent();
  const { current, loading, next, done, reset, index, total } = useCapsItems(
    bank,
    task && apiPath ? { task, apiPath } : undefined,
  );
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [streak, setStreak] = useState(0);
  const [pendingBadges, setPendingBadges] = useState<string[]>([]);
  usePracticeTracking({ active: true, done, isCorrect, ctx: { subject: taskToSubject(apiPath), topic: task } });

  // Track per-question results for section aggregation
  const resultsRef = useRef<{ section?: string; correct: boolean; qkey?: string; chosen?: string }[]>([]);
  const hasSubmitted = useRef(false);

  const handleSelect = (option: string) => {
    if (selected !== null || !current) {
      return;
    }
    setSelected(option);
    const correct = option === current.answer;
    setIsCorrect(correct);
    setStreak((s) => (correct ? s + 1 : 0));

    // Record result for section aggregation
    resultsRef.current.push({ section: current.section, correct, qkey: task ? makeQkey(task, current.prompt) : undefined, chosen: option });

    if (correct) {
      triggerConfetti();
    }
  };

  const handleNext = () => {
    setSelected(null);
    setIsCorrect(null);
    next();
  };

  const handleReset = () => {
    setSelected(null);
    setIsCorrect(null);
    setStreak(0);
    setPendingBadges([]);
    reset();
    resultsRef.current = [];
    hasSubmitted.current = false;
  };

  // Submit results when practice is done
  useEffect(() => {
    if (!done || !task || hasSubmitted.current) return;
    hasSubmitted.current = true;
    if (!student) {
      const weak = pickWeakSections(aggregateResultsBySection(resultsRef.current));
      onComplete?.(weak);
      return;
    }

    const results = resultsRef.current;
    if (results.length === 0) {
      onComplete?.([]);
      return;
    }

    const subject = taskToSubject(apiPath);

    const promises = results.map((r) =>
      fetch('/api/attempts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          task,
          subject,
          section: r.section,
          isCorrect: r.correct,
          qkey: r.qkey,
          chosen: r.chosen,
          streak: 0,
        }),
      })
        .then((res) => res.json() as Promise<{ newBadges?: string[] }>)
        .catch(() => null),
    );

    Promise.allSettled(promises).then((settled) => {
      const newBadges = [
        ...new Set(
          settled
            .filter(
              (r): r is PromiseFulfilledResult<{ newBadges?: string[] }> =>
                r.status === 'fulfilled' && r.value !== null,
            )
            .flatMap((r) => r.value.newBadges ?? []),
        ),
      ];
      if (newBadges.length > 0) setPendingBadges(newBadges);
      refreshStudent();
      const weak = pickWeakSections(aggregateResultsBySection(resultsRef.current));
      onComplete?.(weak);
    });
  }, [done, task, apiPath, student, refreshStudent, onComplete]);

  // Compute weak sections from results
  const results = resultsRef.current;
  const sectionResults = aggregateResultsBySection(results);
  const weakSections = pickWeakSections(sectionResults);

  return (
    <>
      {done ? (
        <Card className="p-8 text-center space-y-6">
          <div className="text-5xl">🎉</div>
          <h2 className="text-2xl font-bold text-slate-800">Well done!</h2>
          <p className="text-slate-600">You completed all {total} questions.</p>
          <div className="flex justify-center">
            <Streak count={streak} />
          </div>

          {weakSections.length > 0 && (
            <div className="space-y-3">
              <p className="text-slate-600">Revise the sections you struggled with:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {weakSections.map((section) => (
                  <Button key={section} variant="secondary" size="sm">
                    {section}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </Card>
      ) : (
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-brand-orange rounded-full transition-all duration-300"
                style={{ width: `${((index + 1) / Math.max(total, 1)) * 100}%` }}
              />
            </div>
            <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
              {index + 1} / {total}
            </span>
            <Streak count={streak} />
          </div>

          <Card className="p-5 sm:p-8 space-y-8">
            {!current || loading ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-slate-400">
                <span className="h-8 w-8 animate-spin rounded-full border-4 border-brand-blue/30 border-t-brand-blue" />
                <p className="font-medium">Loading questions…</p>
              </div>
            ) : (
              <>
                <p className="text-xl md:text-2xl font-bold text-slate-800 text-center">
                  <MathText>{current.prompt}</MathText>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {current.options.map((option, idx) => {
                    let variant: 'outline' | 'success' | 'danger' = 'outline';
                    if (selected !== null) {
                      if (option === current.answer) {
                        variant = 'success';
                      } else if (option === selected) {
                        variant = 'danger';
                      }
                    }

                    return (
                      <Button
                        key={idx}
                        onClick={() => handleSelect(option)}
                        disabled={selected !== null}
                        variant={variant}
                        className="w-full text-lg py-6"
                      >
                        <MathText>{option}</MathText>
                      </Button>
                    );
                  })}
                </div>
              </>
            )}
          </Card>

          {current && !loading && <ReportProblem key={current.prompt} task={task} prompt={current.prompt} itemId={current.id} />}

          <div className="min-h-24">
            <Feedback
              isCorrect={isCorrect}
              correctMessage={
                current?.explanation ? <>Correct! <MathText>{current.explanation}</MathText></> : 'Correct! Well done!'
              }
              incorrectMessage={
                current ? (
                  <>
                    Not quite. The answer is &ldquo;<MathText>{current.answer}</MathText>&rdquo;.
                    {current.explanation ? <> <MathText>{current.explanation}</MathText></> : null}
                  </>
                ) : (
                  'Not quite.'
                )
              }
              onNext={handleNext}
            />
          </div>
        </div>
      )}
      <BadgeUnlockModal
        badges={pendingBadges}
        onDismiss={() => setPendingBadges([])}
      />
    </>
  );
};

/** Derive subject code from an apiPath like /api/caps/math or /api/caps/grade6 */
function taskToSubject(apiPath?: string): string {
  if (!apiPath) return 'unknown';
  const parts = apiPath.split('/').filter(Boolean);
  return parts[parts.length - 1] ?? 'unknown';
}

export default PracticeRunner;
