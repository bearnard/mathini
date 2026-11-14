import { numberSteps, stepText } from './steps';
import type { Step } from './steps';

/**
 * A sequence as a path: numbered circles joined by a line, first to last, each step in the
 * lesson's own words. Numbers come from numberSteps(), never typed. Plain HTML so the words wrap
 * on a phone and stay real text; `loop` adds a closing line for a cycle.
 */

const INK = '#0f172a';
const TONES = {
  blue: '#60a5fa',
  violet: '#a78bfa',
  teal: '#2dd4bf',
  amber: '#fbbf24',
} as const;

export type Tone = keyof typeof TONES;

export const NumberedSteps = ({ steps, tone = 'blue', heading, label, loop = false }: { steps: readonly Step[]; tone?: Tone; heading?: string; label: string; loop?: boolean }) => {
  const color = TONES[tone];
  const numbered = numberSteps(steps);
  const compact = steps.length >= 7;
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl p-4 text-left" style={{ background: INK, fontFamily: 'inherit' }}>
      {heading && <p className="mb-2.5 text-sm font-extrabold text-slate-200">{heading}</p>}
      <ol aria-label={label} className="m-0 list-none p-0">
        {numbered.map((s) => (
          <li key={s.n} className={`relative flex gap-3 ${s.last && !loop ? '' : compact ? 'pb-2.5' : 'pb-3.5'}`}>
            {!s.last && <span aria-hidden className="absolute left-[13px] top-7 h-[calc(100%-1.75rem)] w-0.5 rounded" style={{ background: `${color}88` }} />}
            <span
              aria-hidden
              className={`z-10 grid h-7 w-7 shrink-0 place-items-center rounded-full text-[13px] font-black ${s.last && !loop ? 'ring-2 ring-white/80' : ''}`}
              style={{ background: color, color: INK }}
            >
              {s.n}
            </span>
            <div className="min-w-0 pt-0.5 text-[15px] leading-snug text-slate-100">
              <span className="sr-only">Step {s.n}: </span>
              <span className="font-semibold">
                {s.lead && <strong className="font-extrabold" style={{ color }}>{s.lead}</strong>}
                {s.lead ? s.text : s.text}
              </span>
              {s.detail && <p className="mt-0.5 text-[13px] font-medium text-slate-300">{s.detail}</p>}
            </div>
          </li>
        ))}
      </ol>
      {loop && (
        <p className="mt-1 flex items-center gap-2 pl-0.5 text-[13px] font-bold" style={{ color }}>
          <span aria-hidden className="grid h-7 w-7 place-items-center">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12a8 8 0 1 0 2.6-5.9" />
              <path d="M4 4v5h5" />
            </svg>
          </span>
          the cycle repeats from step 1
        </p>
      )}
    </div>
  );
};

export { stepText };
