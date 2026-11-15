'use client';

import { useState } from 'react';
import { addCounts, outcomesOf, relFreq, runTrials, theoryOf, theoryText, type ExperimentKind } from './probabilityExperimentLogic';

/**
 * A compact, optional probability experiment for the Grade 8 and 9 Probability lessons: toss a fair coin or roll a fair die
 * 10 or 50 times and watch the relative frequency settle near the probability. Decimals use the SA comma. About 220 px tall.
 * (The shared ProbabilitySimulator is not used or changed.)
 */

const COLORS = ['#818cf8', '#34d399', '#fbbf24', '#fb7185', '#38bdf8', '#a78bfa'];

const ProbabilityExperiment = ({ kind, className }: { kind: ExperimentKind; className?: string }) => {
  const names = outcomesOf(kind);
  const [counts, setCounts] = useState<number[]>(() => names.map(() => 0));
  const total = counts.reduce((a, b) => a + b, 0);
  const verb = kind === 'coin' ? 'toss' : 'roll';
  const run = (n: number) => setCounts((c) => addCounts(c, runTrials(kind, n)));
  return (
    <div role="group" aria-label={`An experiment: ${verb} a fair ${kind === 'coin' ? 'coin' : 'die'} and see how often each outcome comes up. The relative frequency of each outcome moves closer to ${theoryText(kind)} as the number of trials grows.`} className={`mx-auto w-full max-w-md rounded-2xl bg-slate-900 p-4 text-slate-100 ${className ?? ''}`}>
      <div className="space-y-1.5" aria-live="polite">
        {names.map((nm, i) => {
          const share = total === 0 ? 0 : counts[i] / total;
          return (
            <div key={nm} className="flex items-center gap-2 text-sm">
              <span className="w-12 shrink-0 font-bold">{nm}</span>
              <div className="relative h-4 flex-1 overflow-hidden rounded bg-slate-700">
                <div className="h-full" style={{ width: `${Math.round(share * 100)}%`, background: COLORS[i % COLORS.length] }} />
                <div className="absolute inset-y-0 w-0.5 bg-amber-300" style={{ left: `${Math.round(theoryOf(kind) * 100)}%` }} />
              </div>
              <span className="w-24 shrink-0 text-right tabular-nums">{counts[i]} · {relFreq(counts[i], total)}</span>
            </div>
          );
        })}
      </div>
      <p className="mt-2 text-xs text-amber-300">Yellow line: theory = {theoryText(kind)}. Trials so far: {total}.</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={() => run(10)} className="rounded-lg bg-indigo-500 px-3 py-1.5 text-sm font-bold text-white">{verb[0].toUpperCase() + verb.slice(1)} 10</button>
        <button type="button" onClick={() => run(50)} className="rounded-lg bg-indigo-500 px-3 py-1.5 text-sm font-bold text-white">{verb[0].toUpperCase() + verb.slice(1)} 50</button>
        <button type="button" onClick={() => setCounts(names.map(() => 0))} className="rounded-lg bg-slate-600 px-3 py-1.5 text-sm font-bold text-white">Reset</button>
      </div>
    </div>
  );
};

export default ProbabilityExperiment;
