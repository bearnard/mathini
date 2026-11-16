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
import { AfrikaansItem, LearnStep } from './types';
import { useAfrikaansItems } from './useAfrikaansItems';
import { track } from '../../../../lib/client/analytics';
import { usePracticeTracking } from '../../../../lib/client/usePracticeTracking';
import { useAttemptRecorder } from '../../../../lib/client/useAttemptRecorder';
import BadgeUnlockModal from '../../../../components/gamification/BadgeUnlockModal';
import SpeakButton from './SpeakButton';
import ReportProblem from '../../../../components/items/ReportProblem';

interface AfrikaansTopicProps {
  title: string;
  subtitle: string;
  /** Stepped "Watch & Learn" slides — authoritative static content. */
  learnSteps: LearnStep[];
  /** Allowlisted task id understood by /api/gemini. */
  task: string;
  /** Curated fallback items used if the AI request fails. */
  bank: AfrikaansItem[];
  /** Which Afrikaans text gets a tap-to-hear button in practice. */
  speak?: 'options' | 'prompt' | 'both' | 'none';
}

const AfrikaansTopic = ({
  title,
  subtitle,
  learnSteps,
  task,
  bank,
  speak = 'options',
}: AfrikaansTopicProps) => {
  const [mode, setMode] = useState<'learn' | 'practice'>('learn');
  const [learnStep, setLearnStep] = useState(0);

  const { current, loading, next, done, reset, index, total } = useAfrikaansItems(task, bank);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [streak, setStreak] = useState(0);
  usePracticeTracking({ active: mode === 'practice', done, isCorrect, ctx: { grade: 6, subject: 'afr', topic: task } });
  // Signed-in learners' answers are recorded (XP, badges, leaderboards). Subject code matches the leaderboard filter.
  const { recordAttempt, resetStreak, pendingBadges, clearBadges } = useAttemptRecorder(task, 'afr', { grade: 6, total, done, label: title });

  const handleSelect = (option: string) => {
    if (selected !== null || !current) {
      return;
    }
    setSelected(option);
    recordAttempt(option === current.answer, current.section, current.id, current.prompt, option);
    tally.note(option === current.answer, current);
    if (option === current.answer) {
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

  const speakPrompt = speak === 'prompt' || speak === 'both';
  const speakOptions = speak === 'options' || speak === 'both';

  return (
    <TopicContainer title={title} subtitle={subtitle} onModeChange={setMode}>
      {mode === 'learn' ? (
        <Card className="p-5 sm:p-8 space-y-8">
          <h2 className="text-2xl font-bold text-slate-800">
            {learnSteps[learnStep].title}
          </h2>
          {learnSteps[learnStep].content}

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
                  track('learn_complete', { grade: 6, subject: 'afr', topic: task });
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
            <PracticeSummary total={total} correct={tally.correct} missed={tally.missed} onBackToLearn={() => setMode('learn')} onAgain={handleReset} />
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
                    <div className="flex items-start justify-center gap-2 text-center">
                      <p className="text-xl md:text-2xl font-bold text-slate-800">
                        {current.prompt}
                      </p>
                      {speakPrompt && <SpeakButton text={current.prompt} />}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {current.options.map((option, idx) => {
                        let variant:
                          | 'outline'
                          | 'success'
                          | 'danger' = 'outline';
                        if (selected !== null) {
                          if (option === current.answer) {
                            variant = 'success';
                          } else if (option === selected) {
                            variant = 'danger';
                          }
                        }

                        return (
                          <div key={idx} className="flex items-center gap-2">
                            <Button
                              onClick={() => handleSelect(option)}
                              disabled={selected !== null}
                              variant={variant}
                              className="flex-1 text-lg py-6"
                            >
                              {option}
                            </Button>
                            {speakOptions && <SpeakButton text={option} />}
                          </div>
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
                    current?.explanation ? `Korrek! ${current.explanation}` : 'Korrek! Well done!'
                  }
                  incorrectMessage={
                    current
                      ? `Not quite. The answer is "${current.answer}".${
                          current.explanation ? ` ${current.explanation}` : ''
                        }`
                      : 'Not quite.'
                  }
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

export default AfrikaansTopic;
