import { useEffect, useRef, useState } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { buildMockTest, scoreByTopic, topicsToRevise, type MockItem, type TopicBank } from './mockTest';
import { onFinish, onStart } from './mockTestEvents';

interface NstMockTestProps {
  title: string;
  subtitle: string;
  /** One entry per topic in the term; items are drawn evenly from each. */
  groups: TopicBank[];
  /** Number of questions in the test. Default 20. */
  count?: number;
}

type Phase = 'round1' | 'reask' | 'results';

/**
 * Client-only term mock test. Round 1 asks `count` mixed questions and keeps a
 * clean first-attempt score. Missed questions are then asked ONCE more (the
 * re-ask round). Nothing is sent to the server.
 */
const NstMockTest = ({ title, subtitle, groups, count = 20 }: NstMockTestProps) => {
  const [questions, setQuestions] = useState<MockItem[]>(() => buildMockTest(groups, count));
  const [phase, setPhase] = useState<Phase>('round1');
  const [queue, setQueue] = useState<MockItem[]>(questions);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [streak, setStreak] = useState(0);
  // First-attempt result for each question in `questions` (same order).
  const [firstAttempt, setFirstAttempt] = useState<boolean[]>([]);
  const [reaskFixed, setReaskFixed] = useState(0);
  const finished = useRef(false);
  const startedFor = useRef<MockItem[] | null>(null);

  // Analytics hook point: one call when a test begins.
  useEffect(() => {
    if (startedFor.current === questions) return; // once per test (StrictMode replays effects in dev)
    startedFor.current = questions;
    onStart({ title, questionCount: questions.length });
  }, [questions]);

  const current = phase === 'results' ? undefined : queue[index];
  // The last question overall: end of the re-ask round, or end of round 1 with nothing missed.
  const isLastQuestion = index + 1 >= queue.length && (phase === 'reask' || firstAttempt.every(Boolean));

  const byTopic = scoreByTopic(questions, firstAttempt);
  const score = firstAttempt.filter(Boolean).length;
  const reaskTotal = firstAttempt.filter((ok) => !ok).length;

  useEffect(() => {
    if (phase !== 'results' || finished.current) return;
    finished.current = true;
    // Analytics hook point: one call when the results screen is shown.
    onFinish({ title, score, total: questions.length, byTopic, reaskFixed, reaskTotal });
  }, [phase]);

  const handleSelect = (option: string) => {
    if (selected !== null || !current) return;
    const correct = option === current.answer;
    setSelected(option);
    setIsCorrect(correct);
    setStreak((s) => (correct ? s + 1 : 0));
    if (correct) triggerConfetti();
    if (phase === 'round1') {
      setFirstAttempt((prev) => [...prev, correct]);
    } else if (correct) {
      setReaskFixed((n) => n + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setIsCorrect(null);
    if (index + 1 < queue.length) {
      setIndex(index + 1);
      return;
    }
    if (phase === 'round1') {
      const missed = questions.filter((_, i) => !firstAttempt[i]);
      if (missed.length > 0) {
        setQueue(missed);
        setIndex(0);
        setPhase('reask');
        return;
      }
    }
    setPhase('results');
  };

  const handleNewTest = () => {
    const fresh = buildMockTest(groups, count);
    finished.current = false;
    setQuestions(fresh);
    setQueue(fresh);
    setIndex(0);
    setPhase('round1');
    setSelected(null);
    setIsCorrect(null);
    setStreak(0);
    setFirstAttempt([]);
    setReaskFixed(0);
  };

  const header = (
    <header className="w-full max-w-4xl">
      <h1 className="text-xl md:text-2xl font-bold text-slate-800">{title}</h1>
      <p className="text-slate-500 text-sm">{subtitle}</p>
    </header>
  );

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center w-full space-y-6 px-4 py-6">
        {header}
        <Card className="p-8 text-center text-slate-600">No questions are available for this test yet.</Card>
      </div>
    );
  }

  if (phase === 'results') {
    const percent = Math.round((score / questions.length) * 100);
    const revise = topicsToRevise(byTopic);
    const message =
      percent >= 80
        ? 'Excellent! You are well prepared.'
        : percent >= 60
          ? 'Good work. A little more revision will help.'
          : 'Keep practising. Go back and revise the topics below.';
    return (
      <div className="flex flex-col items-center w-full space-y-6 px-4 py-6">
        {header}
        <Card className="p-8 space-y-6 w-full max-w-4xl">
          <div className="text-center space-y-2">
            <div className="text-5xl">{percent >= 60 ? '🎉' : '💪'}</div>
            <h2 className="text-2xl font-bold text-slate-800">
              You scored {score} / {questions.length} ({percent}%)
            </h2>
            <p className="text-slate-600">{message}</p>
            <p className="text-sm text-slate-500">
              This is your score on the first try of each question.
              {reaskTotal > 0 && ` In the second try you fixed ${reaskFixed} of ${reaskTotal} missed questions.`}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-slate-700">Score by topic</h3>
            {byTopic.map((row) => (
              <div key={row.topic} className="space-y-1">
                <div className="flex justify-between text-sm text-slate-600">
                  <span>{row.topic}</span>
                  <span>
                    {row.correct} / {row.total}
                  </span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${(row.correct / Math.max(row.total, 1)) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {revise.length > 0 && (
            <div className="rounded-xl bg-amber-50 p-5 text-amber-800">
              <p className="font-semibold">Topics to revise:</p>
              <ul className="list-disc pl-5">
                {revise.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex justify-center pt-2">
            <Button onClick={handleNewTest}>Take a new test</Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full space-y-6 px-4 py-6">
      {header}
      <div className="w-full max-w-4xl space-y-8">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-500 rounded-full transition-all duration-300"
              style={{ width: `${((index + 1) / Math.max(queue.length, 1)) * 100}%` }}
            />
          </div>
          <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
            {index + 1} / {queue.length}
          </span>
          <Streak count={streak} />
        </div>

        {phase === 'reask' && (
          <div className="rounded-xl bg-indigo-50 p-4 text-center text-indigo-800 font-medium">
            Second try: here are the questions you missed.
          </div>
        )}

        <Card className="p-8 space-y-8">
          {current && (
            <>
              <p className="text-sm font-medium text-slate-400 text-center">{current.topic}</p>
              <p className="text-xl md:text-2xl font-bold text-slate-800 text-center">{current.prompt}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {current.options.map((option, idx) => {
                  let variant: 'outline' | 'success' | 'danger' = 'outline';
                  if (selected !== null) {
                    if (option === current.answer) variant = 'success';
                    else if (option === selected) variant = 'danger';
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
            correctMessage={current?.explanation ? `Correct! ${current.explanation}` : 'Correct! Well done!'}
            incorrectMessage={
              current
                ? `Not quite. The answer is "${current.answer}".${current.explanation ? ` ${current.explanation}` : ''}`
                : 'Not quite.'
            }
            onNext={handleNext}
            actionLabel={isLastQuestion ? 'See results' : 'Next'}
          />
        </div>
      </div>
    </div>
  );
};

export default NstMockTest;
