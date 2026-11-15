import { useEffect, useRef, useState } from 'react';
import { triggerConfetti } from '../../../../lib/confetti';
import Card from '../../../../components/ui/Card';
import Button from '../../../../components/ui/Button';
import Streak from '../../../../components/gamification/Streak';
import Feedback from '../../../../components/ui/Feedback';
import { buildMockTest, marksGained, scoreByTopic, topicsToRevise, totalMarks, type MockItem, type TopicBank } from './mockTest';
import { kindOf, marksOf } from './itemKinds';
import { onFinish, onStart } from './mockTestEvents';
import NstQuestionBody, { incorrectMessageFor } from './NstQuestionBody';
import ReportProblem from '../../../../components/items/ReportProblem';
import { useStudent } from '../../../../lib/client/StudentContext';
import { useRunTracker } from '../../../../lib/client/runs/useRunTracker';
import { postAttemptJson } from '../../../../lib/client/runs/runClient';
import type { RunKind } from '../../../../lib/client/runs/runTracker';

interface NstMockTestProps {
  title: string;
  subtitle: string;
  /** One entry per topic in the term; items are drawn evenly from each. */
  groups: TopicBank[];
  /** Number of questions in the test. Default 20. */
  count?: number;
  /**
   * Self-marked explain questions to include (default 0). When there are any, the test is scored in MARKS out of a
   * total, like an exam, and explain questions are not re-asked (their memo has just been shown).
   */
  explainCount?: number;
  /** ADR 0005: record the test as a run (kind and a stable id of this test). Leave out to record nothing. */
  run?: { kind: Extract<RunKind, 'mock_test' | 'exam_practice'>; scopeKey: string };
}

type Phase = 'round1' | 'reask' | 'results';

/**
 * Client-only term mock test. Round 1 asks `count` mixed questions and keeps a
 * clean first-attempt score. Missed questions are then asked ONCE more (the
 * re-ask round). Nothing is sent to the server, unless `run` is given: then the first-attempt answers of a signed-in learner are recorded as one
 * run (ADR 0005). They are sent without a question key, so a mock test never feeds the spaced-review schedule.
 */
const NstMockTest = ({ title, subtitle, groups, count = 20, explainCount = 0, run }: NstMockTestProps) => {
  const { student } = useStudent();
  const tracker = useRunTracker();
  const [questions, setQuestions] = useState<MockItem[]>(() => buildMockTest(groups, count, Math.random, { explain: explainCount }));
  const [phase, setPhase] = useState<Phase>('round1');
  const [queue, setQueue] = useState<MockItem[]>(questions);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [streak, setStreak] = useState(0);
  // First-attempt result for each question in `questions` (same order).
  const [firstAttempt, setFirstAttempt] = useState<boolean[]>([]);
  // Marks gained on the first attempt (same order). Auto-marked questions are 0 or 1; explain items 0..their marks.
  const [firstMarks, setFirstMarks] = useState<number[]>([]);
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
  // Missed auto-marked questions are asked once more. Explain items are not: the memo was just shown.
  const missed = questions.filter((it, i) => firstAttempt[i] === false && kindOf(it) !== 'explain');
  const isLastQuestion = index + 1 >= queue.length && (phase === 'reask' || missed.length === 0);

  // Exam mode: any explain item means the test is scored in marks out of a total.
  const marksMode = questions.some((it) => kindOf(it) === 'explain');
  const byTopic = scoreByTopic(questions, firstMarks);
  const score = firstMarks.reduce((n, m) => n + m, 0);
  const outOf = totalMarks(questions);
  const reaskTotal = missed.length;

  useEffect(() => {
    if (phase !== 'results' || finished.current) return;
    finished.current = true;
    // Analytics hook point: one call when the results screen is shown.
    onFinish({ title, score, total: outOf, byTopic, reaskFixed, reaskTotal });
    // ADR 0005: the results screen finishes the run; the server counts the answers it received.
    if (run) void tracker.finish();
  }, [phase]);

  // One result per question for every item kind; correct = fully right.
  const handleResult = (correct: boolean, chosen?: string, given?: { marks: number; of: number }) => {
    if (isCorrect !== null || !current) return;
    if (chosen !== undefined) setSelected(chosen);
    setIsCorrect(correct);
    setStreak((s) => (correct ? s + 1 : 0));
    if (correct) triggerConfetti();
    if (phase === 'round1') {
      if (run) {
        // A self-marked written answer counts as correct only for full marks (correct = fully right, as in the score above).
        tracker.begin({ kind: run.kind, grade: 6, subject: 'nst', scopeKey: run.scopeKey, scopeLabel: title, nItems: questions.length });
        tracker.note(correct);
        if (student) {
          const body: Record<string, unknown> = { task: current.task ?? run.scopeKey, subject: 'nst', section: current.section, isCorrect: correct, streak: 0 };
          if (chosen) body.chosen = chosen.slice(0, 200);
          tracker.track(tracker.runId().then((id) => postAttemptJson(id ? { ...body, runId: id } : body)));
        }
      }
      setFirstAttempt((prev) => [...prev, correct]);
      setFirstMarks((prev) => [...prev, marksGained(current, given ? given.marks : correct)]);
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
    const fresh = buildMockTest(groups, count, Math.random, { explain: explainCount });
    finished.current = false;
    tracker.reset();
    setQuestions(fresh);
    setQueue(fresh);
    setIndex(0);
    setPhase('round1');
    setSelected(null);
    setIsCorrect(null);
    setStreak(0);
    setFirstAttempt([]);
    setFirstMarks([]);
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
    const percent = Math.round((score / Math.max(outOf, 1)) * 100);
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
              You scored {score} / {outOf}{marksMode ? ' marks' : ''} ({percent}%)
            </h2>
            <p className="text-slate-600">{message}</p>
            <p className="text-sm text-slate-500">
              This is your score on the first try of each question.
              {marksMode && ' Written answers are marked by you, using the memo.'}
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
                    {row.correct} / {row.total}{marksMode ? ' marks' : ''}
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
              <p className="text-sm font-medium text-slate-400 text-center">
                {current.topic}
                {marksMode && ` · ${marksOf(current)} ${marksOf(current) === 1 ? 'mark' : 'marks'}`}
              </p>
              <p className="text-xl md:text-2xl font-bold text-slate-800 text-center">{current.prompt}</p>
              <NstQuestionBody
                item={current}
                questionKey={`${phase}:${index}:${current.prompt}`}
                selected={selected}
                onResult={handleResult}
              />
            </>
          )}
        </Card>

        {current && <ReportProblem key={`${phase}:${index}:${current.prompt}`} task={current.task} prompt={current.prompt} itemId={current.id} />}

        <div className="min-h-24">
          <Feedback
            isCorrect={isCorrect}
            correctMessage={current?.explanation ? `Correct! ${current.explanation}` : 'Correct! Well done!'}
            incorrectMessage={incorrectMessageFor(current)}
            onNext={handleNext}
            actionLabel={isLastQuestion ? 'See results' : 'Next'}
          />
        </div>
      </div>
    </div>
  );
};

export default NstMockTest;
