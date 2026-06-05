'use client';

import { useState } from 'react';

export interface Hotspot {
  /** 0–100 percentage from left */
  x: number;
  /** 0–100 percentage from top */
  y: number;
  label: string;
  note?: string;
}

interface LabelledDiagramProps {
  /** URL or import path for the base SVG/image */
  src: string;
  alt: string;
  hotspots: Hotspot[];
  className?: string;
}

/**
 * Image/SVG with interactive hotspot pins that reveal labels on click.
 *
 * Usage:
 *   <LabelledDiagram
 *     src="/diagrams/cell.svg"
 *     alt="Animal cell"
 *     hotspots={[
 *       { x: 50, y: 45, label: 'Nucleus', note: 'Contains the cell's DNA.' },
 *       { x: 30, y: 30, label: 'Mitochondria', note: 'Site of cellular respiration.' },
 *     ]}
 *   />
 */
const LabelledDiagram = ({ src, alt, hotspots, className }: LabelledDiagramProps) => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className={`relative rounded-xl border border-slate-200 overflow-hidden ${className ?? ''}`}>
      <img src={src} alt={alt} className="w-full block select-none" draggable={false} />
      {hotspots.map((hs, i) => (
        <button
          key={i}
          style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
          onClick={() => setActive(active === i ? null : i)}
          aria-label={hs.label}
        >
          <span
            className={`flex items-center justify-center w-7 h-7 rounded-full border-2 font-bold text-xs transition-all shadow-md
              ${active === i
                ? 'bg-indigo-600 border-indigo-700 text-white scale-110'
                : 'bg-white border-indigo-400 text-indigo-600 hover:bg-indigo-50'
              }`}
          >
            {i + 1}
          </span>
        </button>
      ))}
      {active !== null && (
        <div className="absolute bottom-0 left-0 right-0 bg-indigo-900/90 text-white px-4 py-3 text-sm backdrop-blur-sm">
          <span className="font-bold mr-1">{hotspots[active].label}</span>
          {hotspots[active].note && <span className="opacity-90">{hotspots[active].note}</span>}
        </div>
      )}
      {/* Legend strip */}
      <div className="bg-slate-50 border-t border-slate-100 px-3 py-2 flex flex-wrap gap-x-4 gap-y-1">
        {hotspots.map((hs, i) => (
          <button
            key={i}
            className={`text-xs flex items-center gap-1 transition-colors ${active === i ? 'text-indigo-700 font-semibold' : 'text-slate-500 hover:text-slate-700'}`}
            onClick={() => setActive(active === i ? null : i)}
          >
            <span className="w-4 h-4 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[10px] font-bold">{i + 1}</span>
            {hs.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LabelledDiagram;
