'use client';

import { useState } from 'react';

export interface FlowStep {
  label: string;
  description?: string;
  detail?: string;
  icon?: string;
  color?: string;
}

interface ProcessFlowProps {
  steps: FlowStep[];
  title?: string;
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

const STEP_COLORS = [
  'border-violet-400 bg-violet-50 text-violet-800',
  'border-blue-400 bg-blue-50 text-blue-800',
  'border-cyan-400 bg-cyan-50 text-cyan-800',
  'border-green-400 bg-green-50 text-green-800',
  'border-amber-400 bg-amber-50 text-amber-800',
  'border-orange-400 bg-orange-50 text-orange-800',
  'border-red-400 bg-red-50 text-red-800',
];

/**
 * Displays a linear process as a sequence of connected step cards.
 * Clicking a step reveals its detail panel.
 *
 * Usage:
 *   <ProcessFlow
 *     title="Photosynthesis"
 *     steps={[
 *       { label: 'Light Reactions', description: 'Chlorophyll absorbs sunlight', detail: '...' },
 *       { label: 'Calvin Cycle',    description: 'CO₂ is fixed into G3P',        detail: '...' },
 *       { label: 'Glucose Output',  description: 'G3P → glucose (C₆H₁₂O₆)',      detail: '...' },
 *     ]}
 *   />
 */
const ProcessFlow = ({ steps, title, direction = 'horizontal', className }: ProcessFlowProps) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const isHorizontal = direction === 'horizontal';

  return (
    <div className={`rounded-xl border border-slate-200 overflow-hidden ${className ?? ''}`}>
      {title && (
        <div className="bg-emerald-700 text-white px-4 py-2 text-sm font-semibold">⚡ {title}</div>
      )}
      <div className="p-4">
        <div className={`flex ${isHorizontal ? 'flex-row flex-wrap justify-center gap-1' : 'flex-col items-center gap-1'}`}>
          {steps.map((step, i) => {
            const colorClass = step.color ?? STEP_COLORS[i % STEP_COLORS.length];
            const isActive = activeIdx === i;
            return (
              <div key={i} className={`flex ${isHorizontal ? 'flex-row items-center' : 'flex-col items-center'}`}>
                <button
                  onClick={() => setActiveIdx(isActive ? null : i)}
                  className={`border-2 rounded-xl px-4 py-3 text-sm font-semibold text-center transition-all shadow-sm min-w-28
                    ${colorClass}
                    ${isActive ? 'ring-2 ring-offset-1 ring-current shadow-md scale-105' : 'hover:shadow-md hover:scale-102'}
                    ${step.detail ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  {step.icon && <span className="block text-xl mb-1">{step.icon}</span>}
                  <span className="block">{step.label}</span>
                  {step.description && (
                    <span className="block text-xs font-normal opacity-75 mt-0.5">{step.description}</span>
                  )}
                </button>
                {i < steps.length - 1 && (
                  <span className={`text-slate-400 font-bold text-lg mx-1 ${isHorizontal ? '' : 'rotate-90'}`}>→</span>
                )}
              </div>
            );
          })}
        </div>

        {activeIdx !== null && steps[activeIdx].detail && (
          <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700 animate-in fade-in duration-200">
            <strong className="text-slate-900">{steps[activeIdx].label}</strong>
            <p className="mt-1">{steps[activeIdx].detail}</p>
          </div>
        )}

        {steps.some(s => s.detail) && (
          <p className="text-center text-xs text-slate-400 mt-3">Click a step to learn more</p>
        )}
      </div>
    </div>
  );
};

export default ProcessFlow;
