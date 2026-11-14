'use client';

import { useState, type KeyboardEvent } from 'react';
import { MOON_PHASES, CX, CY, pos, Face, OrbitMoon } from './MoonPhases';

/**
 * Interactive Moon phases: step the Moon through its 8 orbit positions.
 * The Moon's face as seen from SOUTH AFRICA (waxing = lit on the left) and the phase
 * name update together. Prev/Next buttons, tapping an orbit position, and the arrow
 * keys (Left/Up = previous, Right/Down = next, Home/End) all work. The phase name is
 * in an aria-live region so a screen reader announces each step. Nothing plays by
 * itself, and the Moon's slide is only animated when the user has not asked for
 * reduced motion.
 *
 * The static diagram (MoonPhases, with its hotspot export) is unchanged.
 */

const RING = 33;

interface MoonStepperProps {
  className?: string;
}

const MoonStepper = ({ className }: MoonStepperProps) => {
  const [i, setI] = useState(0);
  const go = (n: number) => setI(((n % 8) + 8) % 8);
  const phase = MOON_PHASES[i];
  const here = pos(i, RING);

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') go(i + 1);
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') go(i - 1);
    else if (e.key === 'Home') go(0);
    else if (e.key === 'End') go(7);
    else return;
    e.preventDefault();
  };

  const side = i === 0 || i === 4 ? null : i < 4 ? 'left' : 'right';

  return (
    <div
      role="group"
      aria-label="Moon phases stepper. Use the arrow keys or the Previous and Next buttons."
      tabIndex={0}
      onKeyDown={onKey}
      className={`mx-auto w-full max-w-md rounded-2xl outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 ${className ?? ''}`}
    >
      <svg
        viewBox="0 0 100 100"
        role="img"
        aria-label={`The Moon in its orbit, position ${i + 1} of 8: ${phase.name}. Sunlight comes from the left.`}
        className="block aspect-square w-full rounded-2xl"
        style={{ background: '#0f172a', fontFamily: 'inherit' }}
      >
        {/* sunlight from the left */}
        <g stroke="#fbbf24" strokeWidth={0.5} strokeDasharray="1.6 1.6" opacity={0.35}>
          {[CY - 14, CY, CY + 14].map((y) => (
            <line key={y} x1={7} y1={y} x2={93} y2={y} />
          ))}
        </g>
        <circle cx={-5} cy={CY} r={11} fill="#f59e0b" />
        <circle cx={-5} cy={CY} r={14} fill="#f59e0b" opacity={0.25} />
        <text x={2} y={CY - 17} fontSize={3.6} fill="#fbbf24" fontWeight={700}>Sun</text>

        {/* orbit, Earth, and the 8 positions (tap one) */}
        <circle cx={CX} cy={CY} r={RING} fill="none" stroke="#475569" strokeWidth={0.5} strokeDasharray="1.2 1.2" />
        <circle cx={CX} cy={CY} r={7} fill="#38bdf8" />
        <text x={CX} y={CY + 1.3} textAnchor="middle" fontSize={3.4} fill="#0c4a6e" fontWeight={700}>Earth</text>
        {MOON_PHASES.map((p, k) => {
          const q = pos(k, RING);
          return (
            <circle
              key={p.slug}
              cx={q.x}
              cy={q.y}
              r={k === i ? 0 : 3.4}
              fill="#334155"
              stroke="#94a3b8"
              strokeWidth={0.4}
              style={{ cursor: 'pointer' }}
              onClick={() => go(k)}
            >
              <title>{p.name}</title>
            </circle>
          );
        })}

        {/* the current Moon: bigger, lit side toward the Sun, ringed */}
        <g
          className="motion-safe:transition-transform motion-safe:duration-500"
          style={{ transform: `translate(${here.x}px, ${here.y}px)` }}
        >
          <circle r={8.6} fill="none" stroke="#fde68a" strokeWidth={0.9} />
          <OrbitMoon cx={0} cy={0} r={6} />
        </g>
      </svg>

      <div className="mt-3 flex items-center gap-3">
        <button
          type="button"
          onClick={() => go(i - 1)}
          className="min-h-[44px] rounded-xl border-2 border-slate-300 bg-white px-4 font-bold text-slate-700 hover:bg-slate-50"
          aria-label="Previous phase"
        >
          Previous
        </button>
        <div className="flex min-w-0 flex-1 flex-col items-center">
          <svg viewBox="0 0 24 24" className="h-16 w-16" role="img" aria-label={`The ${phase.name} as seen from South Africa`} style={{ background: '#0f172a', borderRadius: 12 }}>
            <Face index={i} cx={12} cy={12} r={9} />
          </svg>
          <p aria-live="polite" className="mt-1 text-center text-xl font-black text-slate-800">
            {phase.name}
          </p>
          <p className="text-center text-sm text-slate-500">
            {side ? `lit on the ${side}` : i === 0 ? 'we cannot see it' : 'whole face lit'}
          </p>
        </div>
        <button
          type="button"
          onClick={() => go(i + 1)}
          className="min-h-[44px] rounded-xl bg-indigo-600 px-4 font-bold text-white hover:bg-indigo-700"
          aria-label="Next phase"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MoonStepper;
