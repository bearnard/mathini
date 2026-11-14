'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Feedback from '../ui/Feedback';
import DrillHeader from '../layout/DrillHeader';
import Streak from '../gamification/Streak';
import BadgeUnlockModal from '../gamification/BadgeUnlockModal';
import { triggerConfetti } from '../../lib/confetti';
import NstQuestionBody, { incorrectMessageFor } from '../../curriculum/grade6/natural-sciences/_shared/NstQuestionBody';
import { shuffleOptions } from '../../curriculum/grade6/natural-sciences/_shared/itemKinds';
import { useStudent } from '../../lib/client/StudentContext';
import type { ReviewQuestion } from '../../lib/client/review/resolve';
import { loadTodaysReview } from '../../lib/client/review/browserLoad';

type Phase = 'loading' | 'error' | 'empty' | 'running' | 'done';

/** "Today's review": questions the learner missed earlier, mixed across topics, with feedback and the usual XP. */
export default function ReviewScreen({ onBack, initialQuestions }: { onBack: () => void; initialQuestions?: ReviewQuestion[] | null }) {
  const { refreshStudent } = useStudent();
  const [phase, setPhase] = useState<Phase>('loading');
  const [queue, setQueue] = useState<ReviewQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [streak, setStreak] = useState(0);
  const [right, setRight] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);
  const streakRef = useRef(0);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      // The home card already resolved today's questions; otherwise (deep link, stale state) load them now.
      const questions = initialQuestions && initialQuestions.length > 0 ? initialQuestions : await loadTodaysReview();
      if (cancelled) return;
      if (questions === null) { setPhase('error'); return; }
      if (questions.length === 0) { setPhase('empty'); return; }
      setQueue(questions.map((q) => ({ ...q, item: { ...q.item, options: shuffleOptions(q.item) } })));
      setPhase('running');
    })();
    return () => { cancelled = true; };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const current = queue[index];

  // One result per question for every kind. Correct = fully right (exact order, every label), graded by the
  // same helpers as practice inside OrderQuestion/LabelQuestion.
  const handleResult = (ok: boolean, chosen?: string) => {
    if (isCorrect !== null || !current) return;
    if (chosen !== undefined) setSelected(chosen);
    else setSelected('');
    setIsCorrect(ok);
    streakRef.current = ok ? streakRef.current + 1 : 0;
    setStreak(streakRef.current);
    if (ok) { setRight((n) => n + 1); triggerConfetti(); }
    // Same endpoint as practice: XP, badges and the schedule update all happen server-side.
    void fetch('/api/attempts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task: current.task, subject: current.subject, section: current.section, itemId: current.itemId, qkey: current.qkey, isCorrect: ok, streak: streakRef.current }),
    })
      .then((r) => (r.ok ? (r.json() as Promise<{ newBadges?: string[] }>) : null))
      .then((d) => {
        if (!d) return;
        if (d.newBadges?.length) setBadges((p) => [...new Set([...p, ...d.newBadges!])]);
        refreshStudent();
      })
      .catch(() => {});
  };

  const next = () => {
    setSelected(null);
    setIsCorrect(null);
    if (index + 1 < queue.length) setIndex(index + 1);
    else setPhase('done');
  };

  const total = queue.length;
  const wrong = useMemo(() => Math.max(0, total - right), [total, right]);

  return (
    <div className="mx-auto max-w-3xl space-y-4 p-4">
      <DrillHeader onBack={onBack} title="Today's review" icon={<RotateCcw className="h-5 w-5 shrink-0" />} />

      {phase === 'loading' && (
        <div className="flex flex-col items-center gap-4 py-16 text-slate-400">
          <span className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
          <p className="font-medium">Finding your questions…</p>
        </div>
      )}

      {(phase === 'error' || phase === 'empty') && (
        <Card className="space-y-4 p-8 text-center">
          <div className="text-5xl">{phase === 'empty' ? '✅' : '📚'}</div>
          <p className="text-slate-700">{phase === 'empty' ? 'Nothing to review right now. Come back tomorrow!' : 'Sorry, your review could not load. Please try again.'}</p>
          <Button onClick={onBack}>Back</Button>
        </Card>
      )}

      {phase === 'running' && current && (
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-amber-500 transition-all duration-300" style={{ width: `${((index + 1) / total) * 100}%` }} />
            </div>
            <span className="whitespace-nowrap text-sm font-medium text-slate-500">{index + 1} / {total}</span>
            <Streak count={streak} />
          </div>

          <Card className="space-y-6 p-5 md:space-y-8 md:p-8">
            <p className="text-center text-lg font-bold text-slate-800 md:text-2xl">{current.item.prompt}</p>
            <NstQuestionBody item={current.item} questionKey={`${index}:${current.qkey}`} selected={selected} onResult={handleResult} />
          </Card>

          <div className="min-h-24">
            <Feedback
              isCorrect={isCorrect}
              correctMessage={current.item.explanation ? `Correct! ${current.item.explanation}` : 'Correct! Well done!'}
              incorrectMessage={incorrectMessageFor(current.item)}
              onNext={next}
            />
          </div>
        </div>
      )}

      {phase === 'done' && (
        <Card className="space-y-6 p-8 text-center">
          <div className="text-5xl">🎉</div>
          <h2 className="text-2xl font-bold text-slate-800">Review done!</h2>
          <p className="text-slate-600">
            You got {right} of {total} right.
            {wrong > 0 ? ` The ${wrong === 1 ? 'one' : wrong} you missed will come back tomorrow.` : ''}
            {right > 0 ? ` The ones you got right will come back later, until you know them well.` : ''}
          </p>
          <div className="flex justify-center"><Streak count={streak} /></div>
          <Button onClick={onBack}>Done</Button>
        </Card>
      )}

      <BadgeUnlockModal badges={badges} onDismiss={() => setBadges([])} />
    </div>
  );
}
