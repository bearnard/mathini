'use client';

import { useState } from 'react';

export interface Annotation {
  start: number;
  end: number;
  device: string;
  note: string;
  color?: string;
}

interface AnnotatedTextProps {
  /** The full text passage */
  text: string;
  annotations: Annotation[];
  title?: string;
  className?: string;
}

const PALETTE: Record<string, string> = {
  metaphor: 'bg-blue-100 text-blue-800',
  simile: 'bg-green-100 text-green-800',
  alliteration: 'bg-purple-100 text-purple-800',
  personification: 'bg-amber-100 text-amber-800',
  hyperbole: 'bg-red-100 text-red-800',
  irony: 'bg-rose-100 text-rose-800',
  imagery: 'bg-cyan-100 text-cyan-800',
  default: 'bg-yellow-100 text-yellow-800',
};

/**
 * Text passage with hoverable literary device annotations.
 *
 * Usage:
 *   <AnnotatedText
 *     title="Sonnet 18"
 *     text="Shall I compare thee to a summer's day?"
 *     annotations={[{ start: 17, end: 30, device: 'simile', note: 'Compares the subject to summer.' }]}
 *   />
 */
const AnnotatedText = ({ text, annotations, title, className }: AnnotatedTextProps) => {
  const [active, setActive] = useState<number | null>(null);

  // Build sorted, non-overlapping segments
  type Seg = { text: string; annotation?: Annotation & { idx: number } };
  const segments: Seg[] = [];
  const sorted = [...annotations].map((a, i) => ({ ...a, idx: i })).sort((a, b) => a.start - b.start);

  let cursor = 0;
  for (const ann of sorted) {
    if (ann.start > cursor) segments.push({ text: text.slice(cursor, ann.start) });
    segments.push({ text: text.slice(ann.start, ann.end), annotation: ann });
    cursor = ann.end;
  }
  if (cursor < text.length) segments.push({ text: text.slice(cursor) });

  return (
    <div className={`rounded-xl border border-slate-200 overflow-hidden ${className ?? ''}`}>
      {title && (
        <div className="bg-slate-100 px-4 py-2 font-semibold text-slate-700 text-sm border-b border-slate-200">
          {title}
        </div>
      )}
      <div className="p-4 leading-8 text-slate-800 text-base font-serif">
        {segments.map((seg, i) => {
          if (!seg.annotation) return <span key={i}>{seg.text}</span>;
          const { annotation: ann } = seg;
          const palette = PALETTE[ann.device.toLowerCase()] ?? PALETTE.default;
          return (
            <span
              key={i}
              className={`rounded px-0.5 cursor-pointer transition-all ${palette} ${active === ann.idx ? 'ring-2 ring-offset-1 ring-slate-400' : ''}`}
              onClick={() => setActive(active === ann.idx ? null : ann.idx)}
              title={ann.device}
            >
              {seg.text}
            </span>
          );
        })}
      </div>
      {active !== null && (
        <div className="border-t border-slate-200 bg-slate-50 px-4 py-3">
          <span className="font-semibold capitalize text-slate-700">{annotations[active].device}: </span>
          <span className="text-slate-600 text-sm">{annotations[active].note}</span>
        </div>
      )}
      {/* Legend */}
      <div className="border-t border-slate-100 px-4 py-2 flex flex-wrap gap-2">
        {annotations.map((ann, i) => {
          const palette = PALETTE[ann.device.toLowerCase()] ?? PALETTE.default;
          return (
            <button
              key={i}
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${palette} ${active === i ? 'ring-2 ring-offset-1 ring-slate-400' : ''}`}
              onClick={() => setActive(active === i ? null : i)}
            >
              {ann.device}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AnnotatedText;
