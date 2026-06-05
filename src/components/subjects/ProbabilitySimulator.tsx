'use client';

import { useEffect, useMemo, useState } from 'react';

import { cn } from '../../lib/utils';

type SimMode = 'coin' | 'dice' | 'spinner';

interface SpinnerSection {
  label: string;
  weight: number;
  color: string;
}

interface ProbabilitySimulatorProps {
  defaultMode?: SimMode;
  spinnerSections?: SpinnerSection[];
  className?: string;
}

const DEFAULT_SPINNER_SECTIONS: SpinnerSection[] = [
  { label: 'Red', weight: 1, color: '#ef4444' },
  { label: 'Blue', weight: 1, color: '#3b82f6' },
  { label: 'Green', weight: 1, color: '#22c55e' },
  { label: 'Gold', weight: 1, color: '#f59e0b' },
];

const EXTRA_COLORS = ['#8b5cf6', '#ec4899'];

const createCountMap = (labels: string[]) =>
  labels.reduce<Record<string, number>>((accumulator, label) => {
    accumulator[label] = 0;
    return accumulator;
  }, {});

const clampWeight = (weight: number) => Math.min(6, Math.max(1, Math.round(weight)));
const formatProbability = (value: number) => value.toFixed(2);

export default function ProbabilitySimulator({
  defaultMode = 'coin',
  spinnerSections = DEFAULT_SPINNER_SECTIONS,
  className,
}: ProbabilitySimulatorProps) {
  const [mode, setMode] = useState<SimMode>(defaultMode);
  const [sections, setSections] = useState<SpinnerSection[]>(spinnerSections.length >= 2 ? spinnerSections.slice(0, 6) : DEFAULT_SPINNER_SECTIONS);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [totalTrials, setTotalTrials] = useState(0);
  const [lastResult, setLastResult] = useState<string | null>(null);

  const outcomes = useMemo(() => {
    if (mode === 'coin') return ['Heads', 'Tails'];
    if (mode === 'dice') return ['1', '2', '3', '4', '5', '6'];
    return sections.map((section, index) => section.label.trim() || `Section ${index + 1}`);
  }, [mode, sections]);

  const theoreticalProbabilities = useMemo(() => {
    if (mode === 'coin') {
      return { Heads: 0.5, Tails: 0.5 };
    }

    if (mode === 'dice') {
      return { '1': 1 / 6, '2': 1 / 6, '3': 1 / 6, '4': 1 / 6, '5': 1 / 6, '6': 1 / 6 };
    }

    const totalWeight = sections.reduce((sum, section) => sum + section.weight, 0);

    return sections.reduce<Record<string, number>>((accumulator, section, index) => {
      const label = section.label.trim() || `Section ${index + 1}`;
      accumulator[label] = totalWeight === 0 ? 0 : section.weight / totalWeight;
      return accumulator;
    }, {});
  }, [mode, sections]);

  const configurationKey = useMemo(
    () => `${mode}:${sections.map((section) => `${section.label}-${section.weight}-${section.color}`).join('|')}`,
    [mode, sections],
  );

  useEffect(() => {
    setCounts(createCountMap(outcomes));
    setTotalTrials(0);
    setLastResult(null);
  }, [configurationKey, outcomes]);

  const runTrials = (requestedTrials: number) => {
    const availableTrials = Math.min(requestedTrials, 1000 - totalTrials);

    if (availableTrials <= 0) {
      return;
    }

    const nextCounts = { ...createCountMap(outcomes), ...counts };
    let nextResult = lastResult;

    for (let index = 0; index < availableTrials; index += 1) {
      let outcome: string;

      if (mode === 'coin') {
        outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
      } else if (mode === 'dice') {
        outcome = String(Math.floor(Math.random() * 6) + 1);
      } else {
        const totalWeight = sections.reduce((sum, section) => sum + section.weight, 0);
        let target = Math.random() * totalWeight;
        let chosenIndex = sections.length - 1;

        for (let sectionIndex = 0; sectionIndex < sections.length; sectionIndex += 1) {
          target -= sections[sectionIndex].weight;
          if (target <= 0) {
            chosenIndex = sectionIndex;
            break;
          }
        }

        outcome = sections[chosenIndex].label.trim() || `Section ${chosenIndex + 1}`;
      }

      nextCounts[outcome] = (nextCounts[outcome] ?? 0) + 1;
      nextResult = outcome;
    }

    setCounts(nextCounts);
    setTotalTrials((current) => current + availableTrials);
    setLastResult(nextResult);
  };

  const reset = () => {
    setCounts(createCountMap(outcomes));
    setTotalTrials(0);
    setLastResult(null);
  };

  const updateSection = (index: number, key: keyof SpinnerSection, value: string) => {
    setSections((current) =>
      current.map((section, sectionIndex) => {
        if (sectionIndex !== index) {
          return section;
        }

        if (key === 'weight') {
          return { ...section, weight: clampWeight(Number(value)) };
        }

        return { ...section, [key]: value };
      }),
    );
  };

  const addSection = () => {
    if (sections.length >= 6) {
      return;
    }

    setSections((current) => [
      ...current,
      {
        label: `Section ${current.length + 1}`,
        weight: 1,
        color: EXTRA_COLORS[current.length - 4] ?? '#64748b',
      },
    ]);
  };

  const removeSection = (index: number) => {
    if (sections.length <= 2) {
      return;
    }

    setSections((current) => current.filter((_, sectionIndex) => sectionIndex !== index));
  };

  const modeVerb = mode === 'coin' ? 'Flip' : mode === 'dice' ? 'Roll' : 'Spin';
  const resultPrefix = mode === 'coin' ? '🪙' : mode === 'dice' ? '🎲' : '🌀';

  return (
    <div className={cn('rounded-2xl border border-slate-200 bg-white shadow-sm', className)}>
      <div className="border-b border-slate-100 px-4 py-3 sm:px-6">
        <h3 className="text-lg font-semibold text-slate-900">Probability Simulator</h3>
        <p className="mt-1 text-sm text-slate-500">Compare experimental results with theoretical probability using repeated trials.</p>
      </div>

      <div className="space-y-6 p-4 sm:p-6">
        <div className="flex flex-wrap gap-2">
          {([
            { value: 'coin', label: 'Coin flip' },
            { value: 'dice', label: 'Dice roll' },
            { value: 'spinner', label: 'Spinner' },
          ] as const).map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setMode(option.value)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                mode === option.value ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200',
              )}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(18rem,1fr)]">
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto]">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-medium text-slate-500">Last result</p>
                <p className="mt-3 text-3xl font-bold text-slate-900">{lastResult ? `${resultPrefix} ${lastResult}` : 'Ready to start'}</p>
                <p className="mt-2 text-sm text-slate-500">Trials used: {totalTrials}/1000</p>
              </div>

              <div className="grid gap-2 sm:min-w-[10rem]">
                <button
                  type="button"
                  onClick={() => runTrials(1)}
                  disabled={totalTrials >= 1000}
                  className="rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  {modeVerb}
                </button>
                <button
                  type="button"
                  onClick={() => runTrials(100)}
                  disabled={totalTrials >= 1000}
                  className="rounded-2xl bg-indigo-100 px-5 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-200 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
                >
                  Run 100
                </button>
                <button
                  type="button"
                  onClick={reset}
                  className="rounded-2xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h4 className="text-sm font-semibold text-slate-900">Relative frequencies vs theoretical probability</h4>
              <div className="mt-4 space-y-4">
                {outcomes.map((outcome, index) => {
                  const count = counts[outcome] ?? 0;
                  const actual = totalTrials === 0 ? 0 : count / totalTrials;
                  const expected = theoreticalProbabilities[outcome] ?? 0;
                  const spinnerColor = mode === 'spinner' ? sections[index]?.color ?? '#4f46e5' : '#4f46e5';

                  return (
                    <div key={outcome} className="space-y-2">
                      <div className="flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between">
                        <span className="font-semibold text-slate-700">{outcome}</span>
                        <span className="text-slate-500">
                          {outcome}: {count}/{totalTrials || 0} = {formatProbability(actual)} (expected: {formatProbability(expected)})
                        </span>
                      </div>
                      <div className="rounded-xl bg-slate-100 p-3">
                        <div className="grid gap-2 sm:grid-cols-[4.5rem_1fr] sm:items-center">
                          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Actual</div>
                          <div className="h-4 overflow-hidden rounded-full bg-white">
                            <div className="h-full rounded-full" style={{ width: `${actual * 100}%`, backgroundColor: spinnerColor }} />
                          </div>
                          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Expected</div>
                          <div className="h-4 overflow-hidden rounded-full bg-white">
                            <div className="h-full rounded-full bg-slate-400" style={{ width: `${expected * 100}%` }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h4 className="text-sm font-semibold text-slate-900">Frequency table</h4>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {outcomes.map((outcome) => (
                  <div key={outcome} className="rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-semibold text-slate-700">{outcome}</span>
                      <span className="font-mono text-lg font-bold text-slate-900">{counts[outcome] ?? 0}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {mode === 'spinner' ? (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Spinner sections</h4>
                    <p className="text-xs text-slate-500">Set 2 to 6 sections, labels and weights from 1 to 6.</p>
                  </div>
                  <button
                    type="button"
                    onClick={addSection}
                    disabled={sections.length >= 6}
                    className="rounded-full bg-indigo-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                  >
                    Add section
                  </button>
                </div>

                <div className="space-y-3">
                  {sections.map((section, index) => (
                    <div key={`${section.label}-${index}`} className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                      <div className="grid gap-3 sm:grid-cols-[auto_minmax(0,1fr)_6rem_auto] sm:items-center">
                        <input
                          type="color"
                          value={section.color}
                          onChange={(event) => updateSection(index, 'color', event.target.value)}
                          aria-label={`Choose color for ${section.label}`}
                          className="h-11 w-14 rounded-lg border border-slate-200 bg-transparent"
                        />
                        <input
                          value={section.label}
                          onChange={(event) => updateSection(index, 'label', event.target.value)}
                          className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none"
                          placeholder="Section label"
                        />
                        <select
                          value={section.weight}
                          onChange={(event) => updateSection(index, 'weight', event.target.value)}
                          className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 outline-none"
                        >
                          {[1, 2, 3, 4, 5, 6].map((weight) => (
                            <option key={weight} value={weight}>
                              {weight}
                            </option>
                          ))}
                        </select>
                        <button
                          type="button"
                          onClick={() => removeSection(index)}
                          disabled={sections.length <= 2}
                          className="rounded-xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-300"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h4 className="text-sm font-semibold text-slate-900">Expected probabilities</h4>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                {outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-2">
                    <span className="font-medium text-slate-700">{outcome}</span>
                    <span>{formatProbability(theoreticalProbabilities[outcome] ?? 0)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
