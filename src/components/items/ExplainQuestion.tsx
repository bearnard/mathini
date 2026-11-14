'use client';

// PRIVACY: this component deliberately imports nothing that can send or store data. What a child types lives in
// React state only and is dropped when the question goes away. It is never sent, saved, logged or tracked.
// (explainPrivacy.test.ts fails the build if this file starts using fetch, storage, analytics or the recorder.)

import { useState } from 'react';
import type { ComponentType } from 'react';
import Button from '../ui/Button';
import { cn } from '../../lib/utils';
import { isExplainCorrect } from '../../curriculum/grade6/natural-sciences/_shared/itemKinds';

export interface ExplainQuestionProps {
  /** The memo mark points, one mark each, in memo order. */
  points: readonly string[];
  /** The learner answers on paper (e.g. "draw a circuit"): no typing box is shown. */
  paper?: boolean;
  /** Optional reference picture shown in the memo, drawn with showLabels. */
  Diagram?: ComponentType<{ showLabels: boolean }>;
  /** Called once, when the learner taps "Finish marking". correct = at least 70% of the marks. */
  onSubmit: (correct: boolean, detail: { marks: number; of: number }) => void;
  className?: string;
}

/**
 * A self-marked written answer, memo style. The learner may type (optional), shows the memo, then honestly ticks
 * each mark point they covered. Remount with a new `key` for each question.
 */
const ExplainQuestion = ({ points, paper, Diagram, onSubmit, className }: ExplainQuestionProps) => {
  const [text, setText] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [ticked, setTicked] = useState<boolean[]>(() => points.map(() => false));
  const [finished, setFinished] = useState(false);
  const total = points.length;
  const got = ticked.filter(Boolean).length;

  const finish = () => {
    if (finished) return;
    setFinished(true);
    onSubmit(isExplainCorrect(got, total), { marks: got, of: total });
  };

  return (
    <div className={cn('space-y-6', className)} data-testid="explain-question">
      {!revealed && (
        <div className="space-y-4">
          {paper ? (
            <p className="rounded-xl bg-slate-50 p-4 text-center font-semibold text-slate-700" data-testid="explain-paper">
              Do this on paper first. Then show the memo and check your work.
            </p>
          ) : (
            <div>
              <label htmlFor="explain-text" className="mb-2 block text-sm font-semibold text-slate-500">
                Your answer (optional)
              </label>
              <textarea
                id="explain-text"
                data-testid="explain-text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={5}
                autoComplete="off"
                className="w-full rounded-xl border-2 border-slate-300 p-3 text-base text-slate-800 focus:border-[#3285bc] focus:outline-none"
                placeholder="Type your answer here, or say it out loud."
              />
              <p className="mt-1 text-sm text-slate-500">What you type stays on this device. It is never sent or saved.</p>
            </div>
          )}
          <div className="flex justify-center">
            <Button onClick={() => setRevealed(true)}>Show the memo</Button>
          </div>
        </div>
      )}

      {revealed && (
        <div className="space-y-5">
          {!paper && text.trim() !== '' && (
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="mb-1 text-sm font-semibold text-slate-500">What you wrote</p>
              <p className="whitespace-pre-wrap text-slate-800" data-testid="explain-yours">
                {text}
              </p>
            </div>
          )}

          {Diagram && (
            <div className="mx-auto w-full max-w-md rounded-2xl bg-slate-50 p-2" data-testid="explain-diagram">
              <p className="mb-1 px-2 text-sm font-semibold text-slate-500">Compare with this diagram</p>
              <Diagram showLabels />
            </div>
          )}

          <div>
            <p className="mb-2 font-semibold text-slate-700">
              Memo. Tick each point you made ({total} {total === 1 ? 'mark' : 'marks'}):
            </p>
            <ul className="space-y-2" data-testid="explain-points">
              {points.map((pt, i) => (
                <li key={pt}>
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={ticked[i]}
                    disabled={finished}
                    onClick={() => setTicked((t) => t.map((v, j) => (j === i ? !v : v)))}
                    className={cn(
                      'flex min-h-11 w-full items-center gap-3 rounded-xl border-2 px-3 py-2 text-left font-semibold',
                      ticked[i] ? 'border-[#60a763] bg-[#60a763]/15 text-green-900' : 'border-slate-300 bg-white text-slate-800',
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        'flex h-7 w-7 shrink-0 items-center justify-center rounded-md border-2 text-base',
                        ticked[i] ? 'border-[#60a763] bg-[#60a763] text-white' : 'border-slate-400 bg-white text-transparent',
                      )}
                    >
                      ✓
                    </span>
                    <span className="flex-1">{pt}</span>
                    <span className="shrink-0 text-sm font-normal text-slate-500">I said this</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-center text-lg font-bold text-slate-800" data-testid="explain-score" aria-live="polite">
            {finished ? 'You scored' : 'So far'} {got} / {total} {total === 1 ? 'mark' : 'marks'}
          </p>

          {!finished && (
            <div className="flex justify-center">
              <Button onClick={finish}>Finish marking</Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ExplainQuestion;
