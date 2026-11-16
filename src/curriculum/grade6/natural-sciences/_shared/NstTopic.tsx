import { useState } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import PracticeSummary from '../../../../components/practice/PracticeSummary';
import { usePracticeTally } from '../../../../lib/client/usePracticeTally';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';
import { NstItem, LearnStep } from './types';
import { kindOf } from './itemKinds';
import { useNstItems } from './useNstItems';
import NstQuestionBody, { incorrectMessageFor } from './NstQuestionBody';
import { track } from '../../../../lib/client/analytics';
import { usePracticeTracking } from '../../../../lib/client/usePracticeTracking';
import { useAttemptRecorder } from '../../../../lib/client/useAttemptRecorder';
import BadgeUnlockModal from '../../../../components/gamification/BadgeUnlockModal';
import ReportProblem from '../../../../components/items/ReportProblem';

interface NstTopicProps {
  title: string;
  subtitle: string;
  /** Stepped "Watch & Learn" slides — authoritative static content. */
  learnSteps: LearnStep[];
  /** Allowlisted task id understood by /api/nst. */
  task: string;
  /** Curated fallback items used if the AI request fails. */
  bank: NstItem[];
}

const NstTopic = ({ title, subtitle, learnSteps, task, bank }: NstTopicProps) => {
  const [mode, setMode] = useState<'learn' | 'practice'>('learn');
  const [learnStep, setLearnStep] = useState(0);

  const { current, loading, next, done, reset, index, total, autoTotal } = useNstItems(task, bank);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [streak, setStreak] = useState(0);
  usePracticeTracking({ active: mode === 'practice', done, isCorrect, ctx: { grade: 6, subject: 'nst', topic: task } });
  // Signed-in learners' answers are recorded (XP, badges, leaderboards). Subject code matches the leaderboard filter.
  const { recordAttempt, resetStreak, pendingBadges, clearBadges } = useAttemptRecorder(task, 'nst', { grade: 6, total: autoTotal, done, label: title });

  // One result per question for every item kind. Correct = fully right (the whole sequence, every label).
  const handleResult = (correct: boolean, chosen?: string) => {
    if (isCorrect !== null || !current) {
      return;
    }
    if (chosen !== undefined) setSelected(chosen);
    // A written answer the learner marks themselves is not recorded (the server cannot check it) and is not part of the score.
    if (kindOf(current) !== 'explain') {
      recordAttempt(correct, current.section, current.id, current.prompt, chosen);
      tally.note(correct, current);
    }
    if (correct) {
      setIsCorrect(true);
      setStreak((s) => s + 1);
      triggerConfetti();
    } else {
      setIsCorrect(false);
      setStreak(0);
    }
  };

  const tally = usePracticeTally();

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
    resetStreak();
    reset();
  };

  const step = learnSteps[learnStep];

  return (
    <TopicContainer title={title} subtitle={subtitle} onModeChange={setMode}>
      {mode === 'learn' ? (
        <Card className="p-5 sm:p-8 space-y-8">
          <h2 className="text-2xl font-bold text-slate-800">{step.title}</h2>

          {step.image && (
            <div className="flex justify-center">
              <img
                src={step.image.src}
                alt={step.image.alt}
                className="rounded-2xl bg-slate-50 max-h-72 w-auto object-contain shadow-sm"
              />
            </div>
          )}

          {step.content}

          <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-3 pt-6 sm:pt-8 border-t border-slate-100">
            <Button
              variant="secondary"
              disabled={learnStep === 0}
              onClick={() => setLearnStep((p) => p - 1)}
            >
              Previous
            </Button>
            <div className="flex gap-1 items-center justify-center order-last basis-full sm:order-none sm:basis-auto">
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
                  track('learn_complete', { grade: 6, subject: 'nst', topic: task });
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
            <PracticeSummary total={autoTotal} correct={tally.correct} missed={tally.missed} onBackToLearn={() => setMode('learn')} onAgain={handleReset} />
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

              <Card className="p-5 sm:p-8 space-y-8">
                {!current || loading ? (
                  <div className="flex flex-col items-center justify-center py-12 gap-4 text-slate-400">
                    <span className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
                    <p className="font-medium">Loading questions…</p>
                  </div>
                ) : (
                  <>
                    <p className="text-xl md:text-2xl font-bold text-slate-800 text-center">
                      {current.prompt}
                    </p>

                    <NstQuestionBody item={current} questionKey={`${index}:${current.prompt}`} selected={selected} onResult={handleResult} />
                  </>
                )}
              </Card>

              {current && !loading && <ReportProblem key={current.prompt} task={task} prompt={current.prompt} itemId={current.id} />}

              <div className="min-h-24">
                <Feedback
                  isCorrect={isCorrect}
                  correctMessage={
                    current?.explanation ? `Correct! ${current.explanation}` : 'Correct! Well done!'
                  }
                  incorrectMessage={incorrectMessageFor(current)}
                  onNext={handleNext}
                />
              </div>
            </div>
          )}
        </>
      )}
      <BadgeUnlockModal badges={pendingBadges} onDismiss={clearBadges} />
    </TopicContainer>
  );
};

export default NstTopic;
