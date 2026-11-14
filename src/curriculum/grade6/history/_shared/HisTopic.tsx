import { useState } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';
import { HisItem, LearnStep } from './types';
import { useHisItems } from './useHisItems';
import QuestionBody, { incorrectMessageFor } from '../../../../components/items/QuestionBody';
import { track } from '../../../../lib/client/analytics';
import { usePracticeTracking } from '../../../../lib/client/usePracticeTracking';
import { useAttemptRecorder } from '../../../../lib/client/useAttemptRecorder';
import BadgeUnlockModal from '../../../../components/gamification/BadgeUnlockModal';
import ReportProblem from '../../../../components/items/ReportProblem';

interface HisTopicProps {
  title: string;
  subtitle: string;
  /** Stepped "Watch & Learn" slides — authoritative static content. */
  learnSteps: LearnStep[];
  /** Allowlisted task id understood by /api/his. */
  task: string;
  /** Curated fallback items used if the AI request fails. */
  bank: HisItem[];
}

const HisTopic = ({ title, subtitle, learnSteps, task, bank }: HisTopicProps) => {
  const [mode, setMode] = useState<'learn' | 'practice'>('learn');
  const [learnStep, setLearnStep] = useState(0);

  const { current, loading, next, done, reset, index, total } = useHisItems(task, bank);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [streak, setStreak] = useState(0);
  usePracticeTracking({ active: mode === 'practice', done, isCorrect, ctx: { grade: 6, subject: 'his', topic: task } });
  // Signed-in learners' answers are recorded (XP, badges, leaderboards). Subject code matches the leaderboard filter.
  const { recordAttempt, resetStreak, pendingBadges, clearBadges } = useAttemptRecorder(task, 'his');

  // One result per question for every item kind. Correct = fully right (the whole sequence, every label).
  const handleResult = (correct: boolean, chosen?: string) => {
    if (isCorrect !== null || !current) {
      return;
    }
    if (chosen !== undefined) setSelected(chosen);
    recordAttempt(correct, current.section, current.id, current.prompt, chosen);
    if (correct) {
      setIsCorrect(true);
      setStreak((s) => s + 1);
      triggerConfetti();
    } else {
      setIsCorrect(false);
      setStreak(0);
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
    resetStreak();
    reset();
  };

  const step = learnSteps[learnStep];

  return (
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
                  track('learn_complete', { grade: 6, subject: 'his', topic: task });
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
                      {current.prompt}
                    </p>

                    <QuestionBody item={current} questionKey={`${index}:${current.prompt}`} selected={selected} onResult={handleResult} />
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

export default HisTopic;
