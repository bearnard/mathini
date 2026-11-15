import { r3 } from '../round';
import { arrowEnd, chartPoints, comma, lapSegments, sum } from './peHelpers';

/** Grade 7 Physical Education pictures: dark panel, 120-unit-wide viewBox, at most six labels each. */

const INK = '#0f172a';
const WHITE = '#f8fafc';
const MUTED = '#94a3b8';
const I = '#818cf8';
const E = '#34d399';
const A = '#fbbf24';
const R = '#fb7185';

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

/** A line chart of one result per week. Only the first and last values are written; an optional goal is a dashed line. */
export const ProgressLine = ({ values, firstLabel, lastLabel, unit, goal, aria }: { values: number[]; firstLabel: string; lastLabel: string; unit: string; goal?: number; aria: string }) => {
  const box = { x0: 16, x1: 104, y0: 16, y1: 46 };
  const pts = chartPoints(goal === undefined ? values : [...values, goal], box);
  const line = pts.slice(0, values.length);
  const goalY = goal === undefined ? null : pts[pts.length - 1].y;
  const first = line[0];
  const last = line[line.length - 1];
  const rising = last.value > first.value;
  return (
    <Panel h={74} aria={aria}>
      <line x1={10} y1={58} x2={112} y2={58} stroke={MUTED} strokeWidth={0.6} />
      {goalY !== null && (
        <g>
          <line x1={10} y1={goalY} x2={112} y2={goalY} stroke={E} strokeWidth={0.7} strokeDasharray="2 2" />
          <text x={112} y={r3(goalY - 2)} textAnchor="end" fontSize={4.4} fontWeight={800} fill={E}>{`Goal ${comma(goal as number)} ${unit}`}</text>
        </g>
      )}
      <polyline points={line.map((p) => `${p.x},${p.y}`).join(' ')} fill="none" stroke={I} strokeWidth={1.2} />
      {line.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={1.9} fill={i === line.length - 1 ? A : I} />
      ))}
      <text x={first.x} y={r3(rising ? first.y + 8 : first.y - 4)} textAnchor="middle" fontSize={4.6} fontWeight={800} fill={WHITE}>{`${comma(first.value)} ${unit}`}</text>
      <text x={last.x} y={r3(last.y - 4)} textAnchor="middle" fontSize={4.6} fontWeight={800} fill={A}>{`${comma(last.value)} ${unit}`}</text>
      <text x={first.x} y={67} textAnchor="middle" fontSize={4.4} fontWeight={700} fill={MUTED}>{firstLabel}</text>
      <text x={last.x} y={67} textAnchor="middle" fontSize={4.4} fontWeight={700} fill={MUTED}>{lastLabel}</text>
    </Panel>
  );
};

const LAP_X = 20;
const LAP_W = 70;

/** Two runners' laps end to end on one scale: the steady runner finishes first. */
export const LapBars = ({ a, b, nameA, nameB, aria }: { a: number[]; b: number[]; nameA: string; nameB: string; aria: string }) => {
  const scale = Math.max(sum(a), sum(b));
  const rows = [
    { name: nameA, laps: a, y: 14 },
    { name: nameB, laps: b, y: 38 },
  ];
  return (
    <Panel h={62} aria={aria}>
      {rows.map((r) => {
        const segs = lapSegments(r.laps, scale, LAP_W, LAP_X);
        const end = segs[segs.length - 1];
        return (
          <g key={r.name}>
            <text x={LAP_X} y={r.y - 3} fontSize={4.6} fontWeight={800} fill={WHITE}>{r.name}</text>
            {segs.map((s, i) => (
              <rect key={i} x={s.x} y={r.y} width={s.w} height={10} fill={i % 2 === 0 ? I : E} stroke={INK} strokeWidth={0.5} />
            ))}
            <text x={r3(end.x + end.w + 2)} y={r.y + 7} fontSize={4.6} fontWeight={800} fill={A}>{`${sum(r.laps)} s`}</text>
          </g>
        );
      })}
      <text x={60} y={58} textAnchor="middle" fontSize={4} fontWeight={700} fill={MUTED}>Each block is one lap</text>
    </Panel>
  );
};

/** Top view of a pitch: you, a covered teammate beside a defender, and a teammate in open space. */
export const PassingSpace = ({ aria }: { aria: string }) => {
  const you = { x: 22, y: 38 };
  const open = { x: 92, y: 21 };
  const covered = { x: 78, y: 54 };
  const defender = { x: 84, y: 46 };
  const end = arrowEnd(you, open, 5);
  const bad = arrowEnd(you, covered, 5);
  return (
    <Panel h={70} aria={aria}>
      <rect x={4} y={4} width={112} height={62} rx={3} fill="#14532d" stroke={WHITE} strokeWidth={0.6} />
      <path d={`M${you.x + 4},${you.y} L${bad.x},${bad.y}`} stroke={R} strokeWidth={0.9} strokeDasharray="2 2" />
      <path d={`M${you.x + 4},${you.y - 3} L${end.x},${end.y}`} stroke={A} strokeWidth={1.3} />
      <circle cx={you.x} cy={you.y} r={3.6} fill={I} />
      <circle cx={open.x} cy={open.y} r={3.6} fill={E} />
      <circle cx={covered.x} cy={covered.y} r={3.6} fill={E} />
      <circle cx={defender.x} cy={defender.y} r={3.6} fill={R} />
      <text x={you.x} y={you.y + 10} textAnchor="middle" fontSize={4.6} fontWeight={800} fill={WHITE}>You</text>
      <text x={open.x + 4} y={open.y - 6} textAnchor="end" fontSize={4.6} fontWeight={800} fill={WHITE}>Open space</text>
      <text x={covered.x} y={covered.y + 9} textAnchor="middle" fontSize={4.6} fontWeight={800} fill={WHITE}>Covered</text>
      <text x={defender.x + 6} y={defender.y + 1} fontSize={4.6} fontWeight={800} fill={WHITE}>Defender</text>
    </Panel>
  );
};
