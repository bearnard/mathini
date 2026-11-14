'use client';

import { useState } from 'react';
import Button from '../ui/Button';
import { cn } from '../../lib/utils';
import { isOrderCorrect, orderPositionResults, orderSequence } from '../../curriculum/grade6/natural-sciences/_shared/itemKinds';

export interface OrderQuestionProps {
  /** The steps in the order to display them (already shuffled, and not in the right order). */
  steps: readonly string[];
  /** The correct sequence joined with '|' (same encoding as NstItem.answer for kind 'order'). */
  answer: string;
  /** Called once, when the learner taps Check. correct = the exact sequence. */
  onSubmit: (correct: boolean, detail: { attempt: string[] }) => void;
  /** Use a new `key` for each question so the state resets. */
  className?: string;
}

/**
 * Tap-to-order. Tap a step to add it to the numbered answer; tap a placed step to take it back out.
 * No drag and drop, so it works with a thumb on a phone.
 */
const OrderQuestion = ({ steps, answer, onSubmit, className }: OrderQuestionProps) => {
  const [placed, setPlaced] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const item = { answer };
  const right = checked ? orderPositionResults(item, placed) : [];
  const complete = placed.length === steps.length;
  const waiting = steps.filter((s) => !placed.includes(s));

  const check = () => {
    if (!complete || checked) return;
    setChecked(true);
    onSubmit(isOrderCorrect(item, placed), { attempt: placed });
  };

  return (
    <div className={cn('space-y-6', className)} data-testid="order-question">
      <div>
        <p className="mb-2 text-sm font-semibold text-slate-500">Your order</p>
        <ol className="space-y-2" aria-label="Your order" data-testid="order-answer">
          {steps.map((_, i) => {
            const step = placed[i];
            return (
              <li key={i} className="flex items-stretch gap-2">
                <span className="flex w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 font-bold text-slate-600">
                  {i + 1}
                </span>
                {step ? (
                  <button
                    type="button"
                    disabled={checked}
                    onClick={() => setPlaced((p) => p.filter((s) => s !== step))}
                    aria-label={`Step ${i + 1}: ${step}. Tap to remove.`}
                    className={cn(
                      'min-h-11 flex-1 rounded-xl border-2 px-3 py-2 text-left font-semibold',
                      !checked && 'border-[#3285bc] bg-[#3285bc]/10 text-slate-800',
                      checked && right[i] && 'border-[#60a763] bg-[#60a763]/15 text-green-900',
                      checked && !right[i] && 'border-[#f97665] bg-[#f97665]/15 text-red-900',
                    )}
                  >
                    {step}
                    {checked && <span aria-hidden> {right[i] ? '✓' : '✗'}</span>}
                  </button>
                ) : (
                  <span className="flex min-h-11 flex-1 items-center rounded-xl border-2 border-dashed border-slate-300 px-3 text-slate-400">
                    Tap a step below
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      {!checked && (
        <div>
          <p className="mb-2 text-sm font-semibold text-slate-500">Steps to place</p>
          <div className="flex flex-col gap-2" data-testid="order-pool">
            {waiting.map((step) => (
              <button
                key={step}
                type="button"
                onClick={() => setPlaced((p) => [...p, step])}
                className="min-h-11 rounded-xl border-2 border-slate-300 bg-white px-3 py-2 text-left font-semibold text-slate-800 hover:bg-slate-50"
              >
                {step}
              </button>
            ))}
            {waiting.length === 0 && <p className="text-sm text-slate-400">All steps placed.</p>}
          </div>
        </div>
      )}

      {!checked ? (
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
          {placed.length > 0 && (
            <Button variant="secondary" onClick={() => setPlaced([])}>
              Start again
            </Button>
          )}
          <Button onClick={check} disabled={!complete}>
            Check my order
          </Button>
        </div>
      ) : (
        !isOrderCorrect(item, placed) && (
          <div className="rounded-xl bg-slate-50 p-4" data-testid="order-correct">
            <p className="mb-2 font-semibold text-slate-700">The right order:</p>
            <ol className="list-decimal space-y-1 pl-6 text-slate-800">
              {orderSequence(item).map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>
        )
      )}
    </div>
  );
};

export default OrderQuestion;
