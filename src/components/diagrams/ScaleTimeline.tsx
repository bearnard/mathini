'use client';

import { useState } from 'react';
import type { TimelineEvent } from '@/components/subjects/Timeline';

/**
 * To-scale vertical timeline. The distance down the line is proportional to the
 * years, so a long gap LOOKS long ("164 yrs") and events close together sit close
 * together. Labels are short (year + title); tap one to read its description in a card
 * below. When events are too close for their labels to fit, the label is nudged down
 * and a leader line still points at the true position on the line.
 *
 * Kept separate from subjects/Timeline (used by ~70 topics) so those do not change.
 * Years are read from the first 4-digit number in `date` ("27 Apr 1994" -> 1994).
 */

interface ScaleTimelineProps {
  events: TimelineEvent[];
  /** Height of the line in px for the whole span (default 380). */
  span?: number;
  className?: string;
}

const AXIS_X = 44;
const COL_W = 56;
const LABEL_H = 48; // minimum space one label needs
const GAP_NOTE_MIN = 30; // show "N yrs" for gaps at least this long
const PAD = 26;

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#f43f5e', '#6366f1'];

const yearOf = (date: string): number => {
  const m = date.match(/\d{4}/);
  return m ? Number(m[0]) : NaN;
};

const ScaleTimeline = ({ events, span = 380, className }: ScaleTimelineProps) => {
  const [sel, setSel] = useState(0);

  const items = events
    .map((e, i) => ({ e, i, year: yearOf(e.date) }))
    .filter((x) => Number.isFinite(x.year))
    .sort((a, b) => a.year - b.year);
  if (items.length === 0) return null;

  const min = items[0].year;
  const max = items[items.length - 1].year;
  const range = Math.max(max - min, 1);

  // True positions, then nudge labels apart (top to bottom) so they never overlap.
  const trueY = items.map((x) => PAD + ((x.year - min) / range) * span);
  const labelY: number[] = [];
  trueY.forEach((y, k) => labelY.push(k === 0 ? y : Math.max(y, labelY[k - 1] + LABEL_H)));
  const height = Math.max(PAD * 2 + span, labelY[labelY.length - 1] + LABEL_H / 2 + PAD);

  const chosen = items[Math.min(sel, items.length - 1)];

  return (
    <div className={className}>
      <div className="relative" style={{ height }}>
        <svg width={COL_W} height={height} className="absolute left-0 top-0" aria-hidden="true">
          <line x1={AXIS_X} y1={PAD} x2={AXIS_X} y2={PAD + span} stroke="#cbd5e1" strokeWidth={3} strokeLinecap="round" />
          {items.slice(1).map((x, k) => {
            const gap = x.year - items[k].year;
            if (gap < GAP_NOTE_MIN) return null;
            const mid = (trueY[k] + trueY[k + 1]) / 2;
            return (
              <text key={x.i} x={AXIS_X - 8} y={mid + 3} textAnchor="end" fontSize={10} fill="#64748b" fontWeight={600}>
                {gap} yrs
              </text>
            );
          })}
          {items.map((x, k) => (
            <g key={x.i}>
              <polyline
                points={`${AXIS_X},${trueY[k]} ${AXIS_X + 6},${labelY[k]} ${COL_W},${labelY[k]}`}
                fill="none"
                stroke={COLORS[x.i % COLORS.length]}
                strokeWidth={1.5}
              />
              <circle cx={AXIS_X} cy={trueY[k]} r={5.5} fill={COLORS[x.i % COLORS.length]} stroke="#fff" strokeWidth={2} />
            </g>
          ))}
        </svg>

        {items.map((x, k) => {
          const active = k === Math.min(sel, items.length - 1);
          return (
            <button
              key={x.i}
              type="button"
              aria-pressed={active}
              onClick={() => setSel(k)}
              className={`absolute right-0 flex min-h-[44px] flex-col justify-center rounded-lg border px-3 text-left transition-colors ${
                active ? 'border-slate-400 bg-slate-50 shadow-sm' : 'border-slate-100 bg-white hover:bg-slate-50'
              }`}
              style={{ left: COL_W + 4, top: labelY[k] - 22 }}
            >
              <span className="text-xs font-bold leading-tight" style={{ color: COLORS[x.i % COLORS.length] }}>
                {x.e.date}
              </span>
              <span className="text-sm font-semibold leading-tight text-slate-800">{x.e.title}</span>
            </button>
          );
        })}
      </div>

      {chosen.e.description && (
        <p aria-live="polite" className="mt-3 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
          <strong className="text-slate-800">{chosen.e.date}:</strong> {chosen.e.description}
        </p>
      )}
    </div>
  );
};

export default ScaleTimeline;
