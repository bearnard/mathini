import { r3 } from '../round';
import { allStageAreas, tableau, tensionArc } from './ca8-drama-helpers';
import type { Level, ScriptLine, StageSpot, Term } from './ca8-drama-helpers';

/**
 * Pictures for the Grade 8 Drama lessons: dark panel, 120-unit-wide viewBox, a few named parts.
 * Positions come from ca8-drama-helpers.ts, so a picture always matches its worked example.
 * Every picture has an `aria` description.
 */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const BLUE = '#818cf8';
const GREEN = '#34d399';
const AMBER = '#fbbf24';
const ROSE = '#fb7185';
const COLORS = [BLUE, GREEN, AMBER, ROSE, '#38bdf8', '#c084fc'];

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

const T = ({ x, y, children, size = 5, fill = LINE, anchor = 'middle', weight = 800 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>
    {children}
  </text>
);

// ---------- named terms in boxes (voice tools, character parts, backstage roles) ----------

export const TermGrid = ({ terms, cols, aria }: { terms: readonly Term[]; cols: number; aria: string }) => {
  const rows = Math.ceil(terms.length / cols);
  const gap = 4;
  const w = (120 - gap * (cols + 1)) / cols;
  const bh = 24;
  return (
    <Panel h={gap + rows * (bh + gap)} aria={aria}>
      {terms.map((t, i) => {
        const x = gap + (i % cols) * (w + gap);
        const y = gap + Math.floor(i / cols) * (bh + gap);
        const color = COLORS[i % COLORS.length];
        return (
          <g key={t.name}>
            <rect x={r3(x)} y={y} width={r3(w)} height={bh} rx={4} fill={color} fillOpacity={0.18} stroke={color} strokeWidth={0.8} />
            <T x={r3(x + w / 2)} y={y + 10} size={t.name.length > 13 ? 4.6 : 5.6} fill={color}>{t.name}</T>
            <T x={r3(x + w / 2)} y={y + 18.5} size={4.2} weight={600}>{t.meaning}</T>
          </g>
        );
      })}
    </Panel>
  );
};

// ---------- the stage seen from above ----------

export interface StageMark {
  at: StageSpot;
  label: string;
  color?: string;
}

export const StageGrid = ({ marks = [], route = [], aria }: { marks?: readonly StageMark[]; route?: readonly StageSpot[]; aria: string }) => {
  const X0 = 22;
  const Y0 = 12;
  const CW = 25;
  const CH = 15;
  const cx = (c: number) => r3(X0 + c * CW + CW / 2);
  const cy = (r: number) => r3(Y0 + r * CH + CH / 2);
  const areas = allStageAreas();
  return (
    <Panel h={Y0 + 3 * CH + 17} aria={aria}>
      <T x={X0 + 1.5 * CW} y={8} size={4.8} fill={MUTED}>Upstage (back)</T>
      {areas.map(({ spot, name }) => (
        <rect key={name} x={X0 + spot[1] * CW} y={Y0 + spot[0] * CH} width={CW} height={CH} fill={name === 'Centre stage' ? AMBER : '#1e293b'} fillOpacity={name === 'Centre stage' ? 0.18 : 1} stroke={MUTED} strokeWidth={0.5} />
      ))}
      <T x={X0 - 2} y={cy(1) + 1.5} anchor="end" size={4.6} fill={GREEN}>Stage</T>
      <T x={X0 - 2} y={cy(1) + 6.5} anchor="end" size={4.6} fill={GREEN}>right</T>
      <T x={X0 + 3 * CW + 2} y={cy(1) + 1.5} anchor="start" size={4.6} fill={ROSE}>Stage</T>
      <T x={X0 + 3 * CW + 2} y={cy(1) + 6.5} anchor="start" size={4.6} fill={ROSE}>left</T>
      {route.length > 1 && (
        <polyline points={route.map((s) => `${cx(s[1])},${cy(s[0])}`).join(' ')} fill="none" stroke={LINE} strokeWidth={0.9} strokeDasharray="2.5 1.8" strokeLinejoin="round" />
      )}
      {marks.map((m) => (
        <g key={`${m.label}-${m.at.join('-')}`}>
          <circle cx={cx(m.at[1])} cy={cy(m.at[0])} r={4.6} fill={m.color ?? BLUE} />
          <T x={cx(m.at[1])} y={cy(m.at[0]) + 1.9} size={5.4} fill={INK}>{m.label}</T>
        </g>
      ))}
      <T x={X0 + 1.5 * CW} y={Y0 + 3 * CH + 7} size={4.8} fill={MUTED}>Downstage (front)</T>
      <T x={X0 + 1.5 * CW} y={Y0 + 3 * CH + 14} size={5} fill={AMBER}>AUDIENCE</T>
    </Panel>
  );
};

// ---------- a tableau (freeze frame) ----------

const FLOOR = 52;
// Body shape by level: torso and leg length, so a high figure stands tall and a low one is crouched, all on the floor.
const SHAPE: Record<Level, { torso: number; legs: number }> = { high: { torso: 11, legs: 9 }, medium: { torso: 9, legs: 6 }, low: { torso: 7, legs: 3 } };

export const TableauLevels = ({ levels, aria }: { levels: readonly Level[]; aria: string }) => {
  const figs = tableau(levels);
  return (
    <Panel h={66} aria={aria}>
      <circle cx={60} cy={9} r={2.4} fill={AMBER} />
      <T x={66} y={10.6} anchor="start" size={4.6} fill={AMBER}>focus</T>
      <line x1={8} y1={FLOOR + 0.5} x2={112} y2={FLOOR + 0.5} stroke={MUTED} strokeWidth={0.6} />
      {figs.map((f, i) => {
        const x = r3(8 + (f.x / 100) * 104);
        const { torso, legs } = SHAPE[f.level];
        const hip = FLOOR - legs;
        const neck = hip - torso;
        const head = neck - 3.2;
        const reach = f.facing * 6;
        const color = COLORS[i % COLORS.length];
        return (
          <g key={i} stroke={color} strokeWidth={1.7} strokeLinecap="round" fill="none">
            <circle cx={x} cy={head} r={3.2} fill={color} />
            <line x1={x} y1={neck} x2={x} y2={hip} />
            <line x1={x} y1={neck + 2.5} x2={r3(x + reach)} y2={neck - 2.5} />
            <line x1={x} y1={neck + 2.5} x2={r3(x - f.facing * 3.5)} y2={neck + 5.5} />
            <line x1={x} y1={hip} x2={r3(x - 3.5)} y2={FLOOR} />
            <line x1={x} y1={hip} x2={r3(x + 3.5)} y2={FLOOR} />
          </g>
        );
      })}
      <T x={8} y={FLOOR + 9} anchor="start" size={4.4} fill={MUTED}>levels: high, medium, low</T>
    </Panel>
  );
};

// ---------- the story arc ----------

export const StoryArc = ({ beats = 7, climaxAt = 4, aria }: { beats?: number; climaxAt?: number; aria: string }) => {
  const arc = tensionArc(beats, climaxAt);
  const X0 = 14;
  const X1 = 112;
  const Y0 = 14;
  const Y1 = 56;
  const px = (i: number) => r3(X0 + (i / (beats - 1)) * (X1 - X0));
  const py = (v: number) => r3(Y1 - ((v - 1) / 8) * (Y1 - Y0));
  const parts = [
    { name: 'Beginning', from: 0, to: 1, color: BLUE },
    { name: 'Middle', from: 2, to: climaxAt, color: GREEN },
    { name: 'End', from: climaxAt + 1, to: beats - 1, color: AMBER },
  ];
  return (
    <Panel h={74} aria={aria}>
      <line x1={X0} y1={Y0 - 4} x2={X0} y2={Y1 + 3} stroke={MUTED} strokeWidth={0.7} />
      <line x1={X0} y1={Y1 + 3} x2={X1 + 3} y2={Y1 + 3} stroke={MUTED} strokeWidth={0.7} />
      <T x={X0 + 2} y={7} anchor="start" size={4.8} fill={ROSE}>Tension</T>
      {parts.map((p) => (
        <g key={p.name}>
          <polyline points={arc.filter((_, i) => i >= p.from && i <= p.to).map((a, k) => `${px(p.from + k)},${py(a.value)}`).join(' ')} fill="none" stroke={p.color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
          <T x={r3((px(p.from) + px(p.to)) / 2)} y={Y1 + 11} size={5} fill={p.color}>{p.name}</T>
        </g>
      ))}
      <polyline points={`${px(1)},${py(arc[1].value)} ${px(2)},${py(arc[2].value)}`} fill="none" stroke={GREEN} strokeWidth={1.8} strokeLinecap="round" />
      <polyline points={`${px(climaxAt)},${py(arc[climaxAt].value)} ${px(climaxAt + 1)},${py(arc[climaxAt + 1].value)}`} fill="none" stroke={AMBER} strokeWidth={1.8} strokeLinecap="round" />
      <circle cx={px(climaxAt)} cy={py(arc[climaxAt].value)} r={2.3} fill={LINE} />
      <T x={px(climaxAt)} y={py(arc[climaxAt].value) - 4} size={5} fill={LINE}>climax</T>
    </Panel>
  );
};

// ---------- a script excerpt, laid out the way a script is ----------

export const ScriptExcerpt = ({ lines, title, aria }: { lines: readonly ScriptLine[]; title: string; aria: string }) => (
  <div className="mx-auto w-full max-w-md rounded-2xl p-3 text-left" style={{ background: INK }} role="group" aria-label={aria}>
    <p className="text-sm font-extrabold text-amber-300">{title}</p>
    <dl className="mt-1.5 space-y-1.5 text-[13px] text-slate-100">
      {lines.map((l, i) => (
        <div key={i} className="grid grid-cols-[4.5rem_1fr] gap-2">
          <dt className="font-extrabold tracking-wide text-indigo-300">{l.who}</dt>
          <dd className="m-0">
            {l.direction ? <i className="text-emerald-300">({l.direction}) </i> : null}
            {l.text}
          </dd>
        </div>
      ))}
    </dl>
  </div>
);

// ---------- conflict ----------

export const ConflictPair = ({ a, b, aria }: { a: { name: string; wants: string }; b: { name: string; wants: string }; aria: string }) => (
  <Panel h={44} aria={aria}>
    {[a, b].map((c, i) => {
      const x = i === 0 ? 4 : 70;
      const color = i === 0 ? BLUE : ROSE;
      return (
        <g key={c.name}>
          <rect x={x} y={6} width={46} height={32} rx={4} fill={color} fillOpacity={0.18} stroke={color} strokeWidth={0.9} />
          <T x={x + 23} y={16} size={5.6} fill={color}>{c.name}</T>
          <T x={x + 23} y={24} size={4.2} weight={600}>wants</T>
          <T x={x + 23} y={31} size={4.6}>{c.wants}</T>
        </g>
      );
    })}
    <path d="M52 22 L64 22" stroke={AMBER} strokeWidth={1.2} markerEnd="url(#cp-a)" markerStart="url(#cp-a)" />
    <defs>
      <marker id="cp-a" viewBox="0 0 6 6" refX={3} refY={3} markerWidth={4} markerHeight={4} orient="auto-start-reverse">
        <path d="M0 0 L6 3 L0 6 z" fill={AMBER} />
      </marker>
    </defs>
    <T x={58} y={18} size={4.4} fill={AMBER}>clash</T>
  </Panel>
);

// ---------- a rehearsal shared out in minutes ----------

export const RehearsalBar = ({ plan, aria }: { plan: readonly { name: string; minutes: number }[]; aria: string }) => {
  const total = plan.reduce((t, p) => t + p.minutes, 0);
  const W = 108;
  let x = 6;
  return (
    <Panel h={52} aria={aria}>
      <T x={6} y={9} anchor="start" size={5} fill={AMBER}>{total}-minute rehearsal</T>
      {plan.map((p, i) => {
        const w = r3((p.minutes / total) * W);
        const here = x;
        x += w;
        return (
          <g key={p.name}>
            <rect x={r3(here)} y={14} width={w} height={14} fill={COLORS[i]} fillOpacity={0.85} stroke={INK} strokeWidth={0.6} />
            <T x={r3(here + w / 2)} y={23.3} size={5.2} fill={INK}>{p.minutes}</T>
            <T x={r3(here + w / 2)} y={36 + (i % 2) * 7} size={4.2} fill={COLORS[i]}>{p.name}</T>
          </g>
        );
      })}
    </Panel>
  );
};
