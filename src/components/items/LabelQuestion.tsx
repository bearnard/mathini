'use client';

import { useState } from 'react';
import type { ComponentType } from 'react';
import Button from '../ui/Button';
import { cn } from '../../lib/utils';
import { isLabelCorrect, labelMapping, labelResults } from '../../curriculum/grade6/natural-sciences/_shared/itemKinds';

export interface LabelQuestionProps {
  /** The picture: an image path ... */
  image?: { src: string; alt: string };
  /** ... or a React SVG component. It must fill the width of its box and must not print the answers. */
  Diagram?: ComponentType<{ showLabels: boolean }>;
  /** Hotspot positions as percentages (0-100) of the diagram box. Numbered 1..n in this order. */
  hotspots: readonly { id: string; x: number; y: number }[];
  /** The labels to choose from (the correct ones plus any extra wrong ones). */
  labels: readonly string[];
  /** 'hotspotId=Label' pairs joined with '|' (same encoding as NstItem.answer for kind 'label'). */
  answer: string;
  /** Called once, when the learner taps Check. correct = every hotspot has the right label. */
  onSubmit: (correct: boolean, detail: { attempt: Record<string, string> }) => void;
  className?: string;
}

/**
 * Numbered hotspots on a diagram. Tap a hotspot (or its row), then tap a label to put on it.
 * Each label can be used once; tapping a used label moves it. Use a new `key` for each question.
 */
const LabelQuestion = ({ image, Diagram, hotspots, labels, answer, onSubmit, className }: LabelQuestionProps) => {
  const [assigned, setAssigned] = useState<Record<string, string>>({});
  const [active, setActive] = useState<string | null>(hotspots[0]?.id ?? null);
  const [checked, setChecked] = useState(false);
  const item = { answer };
  const results = checked ? labelResults(item, assigned) : {};
  const want = labelMapping(item);
  const complete = hotspots.every((h) => assigned[h.id]);
  const usedLabels = new Set(Object.values(assigned));

  const choose = (label: string) => {
    if (checked || !active) return;
    const next = { ...assigned };
    for (const id of Object.keys(next)) if (next[id] === label) delete next[id];
    next[active] = label;
    setAssigned(next);
    const following = hotspots.find((h) => !next[h.id]);
    setActive(following ? following.id : active);
  };

  const check = () => {
    if (!complete || checked) return;
    setChecked(true);
    onSubmit(isLabelCorrect(item, assigned), { attempt: assigned });
  };

  const stateClass = (id: string) => {
    if (checked) return results[id] ? 'border-[#60a763] bg-[#60a763] text-white' : 'border-[#f97665] bg-[#f97665] text-white';
    if (id === active) return 'border-[#f68535] bg-[#f68535] text-white ring-4 ring-[#f68535]/30';
    return assigned[id] ? 'border-[#3285bc] bg-[#3285bc] text-white' : 'border-slate-700 bg-white text-slate-800';
  };

  return (
    <div className={cn('space-y-6', className)} data-testid="label-question">
      <div className="relative mx-auto w-full max-w-md rounded-2xl bg-slate-50 shadow-sm">
        {Diagram ? <Diagram showLabels={false} /> : image ? <img src={image.src} alt={image.alt} className="block h-auto w-full rounded-2xl" /> : null}
        {hotspots.map((h, i) => (
          <button
            key={h.id}
            type="button"
            data-testid={`hotspot-${h.id}`}
            onClick={() => !checked && setActive(h.id)}
            aria-label={`Hotspot ${i + 1}${assigned[h.id] ? `: ${assigned[h.id]}` : ''}`}
            style={{ left: `${h.x}%`, top: `${h.y}%` }}
            className={cn(
              'absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 text-base font-bold shadow-md',
              stateClass(h.id),
            )}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <ul className="space-y-2" aria-label="Hotspots">
        {hotspots.map((h, i) => (
          <li key={h.id}>
            <button
              type="button"
              disabled={checked}
              onClick={() => setActive(h.id)}
              className={cn(
                'flex min-h-11 w-full items-center gap-3 rounded-xl border-2 px-3 py-2 text-left font-semibold',
                !checked && (h.id === active ? 'border-[#f68535] bg-[#f68535]/10' : 'border-slate-200 bg-white'),
                checked && results[h.id] && 'border-[#60a763] bg-[#60a763]/15 text-green-900',
                checked && !results[h.id] && 'border-[#f97665] bg-[#f97665]/15 text-red-900',
              )}
            >
              <span className={cn('flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm', stateClass(h.id))}>
                {i + 1}
              </span>
              <span className={cn('flex-1', !assigned[h.id] && 'font-normal text-slate-400')}>
                {assigned[h.id] ?? 'Tap to choose a label'}
                {checked && !results[h.id] && (
                  <span className="block text-sm font-semibold">Right answer: {want[h.id]}</span>
                )}
              </span>
              {checked && <span aria-hidden>{results[h.id] ? '✓' : '✗'}</span>}
            </button>
          </li>
        ))}
      </ul>

      {!checked && (
        <div>
          <p className="mb-2 text-sm font-semibold text-slate-500">
            Labels{active ? ` for ${hotspots.findIndex((h) => h.id === active) + 1}` : ''}
          </p>
          <div className="flex flex-wrap gap-2" data-testid="label-choices">
            {labels.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => choose(l)}
                className={cn(
                  'min-h-11 rounded-xl border-2 px-4 py-2 font-semibold',
                  usedLabels.has(l) ? 'border-slate-200 bg-slate-100 text-slate-500' : 'border-[#3285bc]/70 bg-white text-[#2a6f9e]',
                )}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}

      {!checked && (
        <div className="flex justify-center">
          <Button onClick={check} disabled={!complete}>
            Check my labels
          </Button>
        </div>
      )}
    </div>
  );
};

export default LabelQuestion;
