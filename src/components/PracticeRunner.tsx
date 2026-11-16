'use client';

import { makeQkey } from '../lib/shared/qkey';
import { useState, useRef, useEffect, useCallback } from 'react';
import { triggerConfetti } from '../lib/confetti';
import Card from './ui/Card';
import Button from './ui/Button';
import PracticeSummary from './practice/PracticeSummary';
import { usePracticeTally } from '../lib/client/usePracticeTally';
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
import { useRunTracker } from '../lib/client/runs/useRunTracker';
import { submitPracticeRun } from '../lib/client/runs/submitRun';
import { postAttemptJson } from '../lib/client/runs/runClient';
import { parseTaskSlug } from '../lib/server/caps/slug';

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
  // ADR 0005: this session is one run; it starts at the first answer.
  const tracker = useRunTracker();
  const firstAnswerAt = useRef<number | null>(null);

  const tally = usePracticeTally();

  const handleSelect = (option: string) => {
    if (selected !== null || !current) {
      return;
    }
    if (firstAnswerAt.current === null) firstAnswerAt.current = Date.now();
    setSelected(option);
    const correct = option === current.answer;
    setIsCorrect(correct);
    setStreak((s) => (correct ? s + 1 : 0));

    // Record result for section aggregation
    tally.note(correct, current);
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
    tally.reset();
    setSelected(null);
    setIsCorrect(null);
    setStreak(0);
    setPendingBadges([]);
    reset();
    resultsRef.current = [];
    hasSubmitted.current = false;
    firstAnswerAt.current = null;
  };

  // Submit results when practice is done
  useEffect(() => {
    if (!done || !task || hasSubmitted.current) return;
    hasSubmitted.current = true;
    const subject = taskToSubject(apiPath);
    const scope = { kind: 'practice' as const, grade: parseTaskSlug(task).grade, subject, scopeKey: task, scopeLabel: task, nItems: total, startedAt: firstAnswerAt.current ?? undefined };
    if (!student) {
      // Anonymous: nothing is sent; the run is kept on the device only.
      void submitPracticeRun({ tracker, post: null }, { scope, task, subject, results: resultsRef.current });
      const weak = pickWeakSections(aggregateResultsBySection(resultsRef.current));
      onComplete?.(weak);
      return;
    }

    const results = resultsRef.current;
    if (results.length === 0) {
      onComplete?.([]);
      return;
    }

    void submitPracticeRun({ tracker, post: postAttemptJson }, { scope, task, subject, results }).then(({ newBadges }) => {
      if (newBadges.length > 0) setPendingBadges(newBadges);
      refreshStudent();
      const weak = pickWeakSections(aggregateResultsBySection(resultsRef.current));
      onComplete?.(weak);
    });
  }, [done, task, apiPath, student, refreshStudent, onComplete, tracker, total]);

  // Compute weak sections from results
  const results = resultsRef.current;
  const sectionResults = aggregateResultsBySection(results);
  const weakSections = pickWeakSections(sectionResults);

  return (
    <>
      {done ? (
        <PracticeSummary total={total} correct={tally.correct} missed={tally.missed} weakSections={weakSections} onAgain={handleReset} />
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
