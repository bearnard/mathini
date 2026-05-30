import { useState } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { cn } from '../../../../lib/utils';
import TopicContainer from '../../../../components/layout/TopicContainer';
import { NstItem, LearnStep } from './types';
import { useNstItems } from './useNstItems';

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

  const { current, loading, next } = useNstItems(task, bank);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [streak, setStreak] = useState(0);

  const handleSelect = (option: string) => {
    if (selected !== null || !current) {
      return;
    }
    setSelected(option);
    if (option === current.answer) {
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
                  setMode('practice');
                }
              }}
            >
              {learnStep === learnSteps.length - 1 ? 'Start Practice' : 'Next'}
            </Button>
          </div>
        </Card>
      ) : (
        <div className="space-y-8">
          <div className="flex justify-end">
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
                        {option}
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
                current?.explanation ? `Correct! ${current.explanation}` : 'Correct! Well done!'
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
    </TopicContainer>
  );
};

export default NstTopic;
