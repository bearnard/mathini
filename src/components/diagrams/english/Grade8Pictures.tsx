import { arcPoints, planSegments } from './grade8';
import type { PlanTask } from './grade8';

/**
 * Hand-built pictures for the Grade 8 English lessons: a numbered flow, a two-column comparison,
 * a story arc and a timeline bar. At most six labels each; every picture has an aria description.
 */

const INK = '#0f172a';
export const COLORS = ['#38bdf8', '#fbbf24', '#34d399', '#fb7185', '#a78bfa', '#f97316'];

export interface FlowItem { label: string; note?: string }

/** Boxes in order, joined by arrows (a process, or the parts of a text). */
export const StepFlow = ({ items, aria }: { items: readonly FlowItem[]; aria: string }) => (
  <div role="group" aria-label={aria} className="mx-auto w-full max-w-md rounded-2xl p-4 text-left" style={{ background: INK }}>
    <ol className="space-y-1">
      {items.map((it, i) => (
        <li key={it.label}>
          <div className="flex items-center gap-2.5 rounded-lg bg-slate-800 p-2">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-black" style={{ background: COLORS[i % COLORS.length], color: INK }}>{i + 1}</span>
            <span className="min-w-0 flex-1">
              <span className="block text-[15px] font-extrabold text-slate-100">{it.label}</span>
              {it.note ? <span className="block text-sm font-semibold text-slate-300">{it.note}</span> : null}
            </span>
          </div>
          {i < items.length - 1 ? <p aria-hidden className="text-center text-sm font-black leading-none text-slate-500">↓</p> : null}
        </li>
      ))}
    </ol>
  </div>
);

export interface Column { title: string; lines: readonly string[] }

/** Two things side by side (fact and opinion, active and passive, news report and folktale). */
export const TwoColumns = ({ left, right, aria }: { left: Column; right: Column; aria: string }) => (
  <div role="group" aria-label={aria} className="mx-auto grid w-full max-w-md grid-cols-2 gap-2 rounded-2xl p-3 text-left" style={{ background: INK }}>
    {[left, right].map((c, i) => (
      <div key={c.title} className="min-w-0 rounded-lg bg-slate-800 p-2.5">
        <p className="rounded-md px-2 py-1 text-sm font-black" style={{ background: COLORS[i === 0 ? 0 : 1], color: INK }}>{c.title}</p>
        <ul className="mt-2 space-y-1.5">
          {c.lines.map((l) => (
            <li key={l} className="break-words text-sm font-semibold text-slate-200">{l}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

/** Tension rising to the climax and falling to the ending. */
export const StoryArc = ({ aria }: { aria: string }) => {
  const W = 340;
  const H = 190;
  const pts = arcPoints(W, H);
  const path = pts.map((p) => `${p.x},${p.y}`).join(' ');
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl p-2" style={{ background: INK }}>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={aria} className="block h-auto w-full">
        <line x1={14} y1={H - 48} x2={W - 8} y2={H - 48} stroke="#475569" strokeWidth={2} />
        <polyline points={path} fill="none" stroke="#38bdf8" strokeWidth={4} strokeLinejoin="round" strokeLinecap="round" />
        {pts.map((p, i) => (
          <g key={p.name}>
            <circle cx={p.x} cy={p.y} r={i === 2 ? 8 : 5} fill={i === 2 ? '#fbbf24' : '#e2e8f0'} />
            {i === 2 ? (
              <text x={p.x} y={p.y - 14} textAnchor="middle" fontSize={14} fontWeight={800} fill="#fbbf24">{p.name}</text>
            ) : (
              <text x={p.x} y={H - 30} textAnchor="middle" fontSize={13} fontWeight={800} fill="#f1f5f9">
                {p.name.split(' ').map((w, k) => (
                  <tspan key={w} x={p.x} dy={k === 0 ? 0 : 15}>{w}</tspan>
                ))}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
};

/** Stages of a project laid along one bar, each as wide as the days it takes. */
export const PlanBar = ({ tasks, aria }: { tasks: readonly PlanTask[]; aria: string }) => {
  const segs = planSegments(tasks);
  return (
    <div role="group" aria-label={aria} className="mx-auto w-full max-w-md rounded-2xl p-4" style={{ background: INK }}>
      <div className="flex h-8 w-full overflow-hidden rounded-md" aria-hidden>
        {segs.map((s, i) => (
          <div key={s.name} style={{ width: `${s.width * 100}%`, background: COLORS[i % COLORS.length] }} className="border-r-2 border-slate-900 last:border-r-0" />
        ))}
      </div>
      <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5">
        {segs.map((s, i) => (
          <li key={s.name} className="flex items-center gap-2 text-sm font-bold text-slate-100">
            <span aria-hidden className="h-3 w-3 shrink-0 rounded-sm" style={{ background: COLORS[i % COLORS.length] }} />
            {s.name}: {s.days} {s.days === 1 ? 'day' : 'days'}
          </li>
        ))}
      </ul>
    </div>
  );
};
