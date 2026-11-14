import { makeQkey } from '../lib/shared/qkey';
import { useState, useRef, useCallback, useEffect } from 'react';
import type { ReactNode } from 'react';
import { triggerConfetti } from '../lib/confetti';
import Card from './ui/Card';
import Button from './ui/Button';
import Streak from './gamification/Streak';
import Feedback from './ui/Feedback';
import { cn } from '../lib/utils';
import TopicContainer from './layout/TopicContainer';
import { useCapsItems } from '../lib/client/useCapsItems';
import type { CapsItem } from '../lib/client/useCapsItems';
import MathText from './subjects/MathText';
import { useStudent } from '../lib/client/StudentContext';
import { aggregateResultsBySection, pickWeakSections } from '../lib/client/revision';
import BadgeUnlockModal from './gamification/BadgeUnlockModal';
import { track } from '../lib/client/analytics';
import { usePracticeTracking } from '../lib/client/usePracticeTracking';

export interface LearnStep {
  title: string;
  content: ReactNode;
  image?: { src: string; alt: string };
}

interface CapsSubjectTopicProps {
  title: string;
  subtitle: string;
  /** Stepped "Watch & Learn" slides — authoritative static content. */
  learnSteps: LearnStep[];
  /** Pre-curated practice questions for Gr7–12 topics (ignored in pool mode). */
  bank: CapsItem[];
  /**
   * API path for the D1 question pool. When provided together with `task`,
   * the component fetches questions from D1 instead of using `bank`.
   * Grade 6 topics set this to "/api/caps/grade6".
   */
  task?: string;
  /**
   * Task key identifying which question set to fetch from D1.
   * Must be provided alongside `apiPath` to activate pool mode.
   */
  apiPath?: string;
  grade?: number;
}

const CapsSubjectTopic = ({ title, subtitle, learnSteps, bank, task, apiPath, grade }: CapsSubjectTopicProps) => {
  const { student, refreshStudent } = useStudent();
  const [mode, setMode] = useState<'learn' | 'practice'>('learn');
  const [learnStep, setLearnStep] = useState(0);

  const { current, loading, next, done, reset, index, total } = useCapsItems(
    bank,
    task && apiPath ? { task, apiPath } : undefined,
  );
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [streak, setStreak] = useState(0);
  const [pendingBadges, setPendingBadges] = useState<string[]>([]);
  usePracticeTracking({ active: mode === 'practice', done, isCorrect, ctx: { grade, subject: apiPath?.split('/').filter(Boolean).pop(), topic: task ?? title } });

  // Track per-question results for section aggregation
  const resultsRef = useRef<{ section?: string; correct: boolean; qkey?: string }[]>([]);
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
    resultsRef.current.push({ section: current.section, correct, qkey: task ? makeQkey(task, current.prompt) : undefined });

    if (correct) {
      triggerConfetti();
    }
  };

  // Submit results when practice is done (once per session, for logged-in students)
  useEffect(() => {
    if (!done || !task || hasSubmitted.current) return;
    hasSubmitted.current = true;
    if (!student) return;

    const results = resultsRef.current;
    if (results.length === 0) return;

    // Per-result POSTs — collect newBadges from responses
    const promises = results.map((r) =>
      fetch('/api/attempts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          task,
          subject: taskToSubject(apiPath),
          section: r.section,
          isCorrect: r.correct,
          qkey: r.qkey,
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
    });
  }, [done, task, apiPath, student, refreshStudent]);

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

  // Compute weak sections from results
  const results = resultsRef.current;
  const sectionResults = aggregateResultsBySection(results);
  const weakSections = pickWeakSections(sectionResults);

  const step = learnSteps[learnStep];

  return (
    <>
      <TopicContainer title={title} subtitle={subtitle} onModeChange={setMode}>
        {mode === 'learn' ? (
        <Card className="p-8 space-y-8">
          <h2 className="text-2xl font-bold text-slate-800">{step.title}</h2>

          {step.image && (
            <div className="flex justify-center">
              <img
                src={step.image.src}
                alt={step.image.alt}
                className="rounded-2xl bg-slate-50 max-h-72 w-auto object-contain shadow-sm"
                onError={(e) => {
                  // Hide gracefully if the diagram hasn't been generated yet,
                  // so partially-generated batches don't show broken images.
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          )}

          {step.content}

          <div className="flex justify-between pt-8 border-t border-slate-100">
            <Button
              variant="secondary"
              disabled={learnStep === 0}
              onClick={() => setLearnStep((p) => p - 1)}
            >
              Previous
            </Button>
            <div className="flex gap-1 items-center">
              {learnSteps.map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    'w-2 h-2 rounded-full transition-colors',
                    i === learnStep ? 'bg-indigo-600' : 'bg-slate-200',
                  )}
                />
              ))}
            </div>
            <Button
              onClick={() => {
                if (learnStep < learnSteps.length - 1) {
                  setLearnStep((p) => p + 1);
                } else {
                  track('learn_complete', { grade, subject: apiPath?.split('/').filter(Boolean).pop(), topic: task ?? title });
                  setMode('practice');
                }
              }}
            >
              {learnStep === learnSteps.length - 1 ? 'Start Practice' : 'Next'}
            </Button>
          </div>
        </Card>
      ) : (
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

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Button variant="secondary" onClick={() => setMode('learn')}>
                  Back to Learn
                </Button>
                <Button onClick={handleReset}>Practice Again</Button>
              </div>
            </Card>
          ) : (
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 rounded-full transition-all duration-300"
                    style={{ width: `${((index + 1) / Math.max(total, 1)) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
                  {index + 1} / {total}
                </span>
                <Streak count={streak} />
              </div>

              <Card className="p-8 space-y-8">
                {!current || loading ? (
                  <div className="flex flex-col items-center justify-center py-12 gap-4 text-slate-400">
                    <span className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
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
                            className="text-lg py-6"
                          >
                            <MathText>{option}</MathText>
                          </Button>
                        );
                      })}
                    </div>
                  </>
                )}
              </Card>

              <div className="min-h-24">
                <Feedback
                  isCorrect={isCorrect}
                  correctMessage={
                    current?.explanation ? <>Correct! {current.explanation}</> : 'Correct! Well done!'
                  }
                  incorrectMessage={
                    current ? (
                      <>
                        Not quite. The answer is &ldquo;<MathText>{current.answer}</MathText>&rdquo;.
                        {current.explanation ? ` ${current.explanation}` : ''}
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
        </>
      )}
      </TopicContainer>

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

export default CapsSubjectTopic;
export type { CapsItem };
