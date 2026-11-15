'use client';

import { useState } from 'react';

interface SwotMatrixProps {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
  title?: string;
  subject?: string;
  className?: string;
}

const QUADRANTS = [
  {
    key: 'strengths' as const,
    label: 'Strengths',
    letter: 'S',
    bg: 'bg-green-50',
    border: 'border-green-200',
    header: 'bg-green-500',
    dot: 'bg-green-500',
  },
  {
    key: 'weaknesses' as const,
    label: 'Weaknesses',
    letter: 'W',
    bg: 'bg-red-50',
    border: 'border-red-200',
    header: 'bg-red-500',
    dot: 'bg-red-500',
  },
  {
    key: 'opportunities' as const,
    label: 'Opportunities',
    letter: 'O',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    header: 'bg-blue-500',
    dot: 'bg-blue-500',
  },
  {
    key: 'threats' as const,
    label: 'Threats',
    letter: 'T',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    header: 'bg-amber-500',
    dot: 'bg-amber-500',
  },
];

/**
 * Interactive SWOT analysis 2×2 matrix.
 */
const SwotMatrix = ({ strengths, weaknesses, opportunities, threats, title, subject, className }: SwotMatrixProps) => {
  const [active, setActive] = useState<string | null>(null);
  const data = { strengths, weaknesses, opportunities, threats };
  const heading = title ?? (subject ? `SWOT Analysis: ${subject}` : undefined);

  return (
    <div className={`space-y-3 ${className ?? ''}`}>
      {heading && <div className="text-center font-semibold text-slate-600 text-sm">{heading}</div>}
      <div className="grid grid-cols-2 gap-3">
        {QUADRANTS.map((q) => {
          const items = data[q.key];
          const isOpen = active === q.key;
          return (
            <div
              key={q.key}
              className={`rounded-xl border ${q.border} ${q.bg} overflow-hidden cursor-pointer transition-all ${isOpen ? 'ring-2 ring-offset-1 ring-slate-400' : ''}`}
              onClick={() => setActive(isOpen ? null : q.key)}
            >
              <div className={`${q.header} text-white px-2 sm:px-3 py-1.5 flex items-center gap-1.5 sm:gap-2`}>
                <span className="font-bold text-lg leading-none">{q.letter}</span>
                <span className="font-semibold text-xs sm:text-sm min-w-0">{q.label}</span>
              </div>
              <ul className="px-3 py-2 space-y-1">
                {items.slice(0, isOpen ? undefined : 2).map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-700">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${q.dot}`} />
                    {item}
                  </li>
                ))}
                {!isOpen && items.length > 2 && (
                  <li className="text-xs text-slate-400">+{items.length - 2} more…</li>
                )}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SwotMatrix;
