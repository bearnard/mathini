import { r3 } from '../round';
import { DIRECTOR, PRODUCTION_TEAM, rubric } from './ca9-drama-helpers';

/**
 * Pictures for the Grade 9 Drama lessons: the production team round the director, and rubric bars.
 * Same style as Ca8DramaPictures (dark panel, 120-unit-wide viewBox, a few named parts). Positions and
 * totals come from ca9-drama-helpers.ts. The Grade 8 stage, tableau, script and term-box pictures are
 * reused by the lessons, not copied. Every picture has an `aria` description.
 */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const BLUE = '#818cf8';
const GREEN = '#34d399';
const AMBER = '#fbbf24';
const ROSE = '#fb7185';
const COLORS = [BLUE, GREEN, AMBER, ROSE, '#38bdf8'];

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

// ---------- the production team round the director ----------

// Three groups across the top, the director in the middle, two groups along the bottom.
const NODES = [
  { x: 2, y: 4, w: 36 },
  { x: 42, y: 4, w: 36 },
  { x: 82, y: 4, w: 36 },
  { x: 16, y: 62, w: 42 },
  { x: 62, y: 62, w: 42 },
] as const;
const NODE_H = 18;
const BOX = { x: 34, y: 32, w: 52, h: 18 };

export const ProductionTeam = ({ aria }: { aria: string }) => {
  const centre = { x: BOX.x + BOX.w / 2, y: BOX.y + BOX.h / 2 };
  return (
    <Panel h={84} aria={aria}>
      {PRODUCTION_TEAM.map((r, i) => {
        const n = NODES[i];
        const nx = r3(n.x + n.w / 2);
        const top = n.y < BOX.y;
        return <line key={r.name} x1={centre.x} y1={top ? BOX.y : BOX.y + BOX.h} x2={nx} y2={top ? n.y + NODE_H : n.y} stroke={MUTED} strokeWidth={0.8} />;
      })}
      <rect x={BOX.x} y={BOX.y} width={BOX.w} height={BOX.h} rx={4} fill={AMBER} fillOpacity={0.2} stroke={AMBER} strokeWidth={0.9} />
      <T x={centre.x} y={BOX.y + 8} size={5.6} fill={AMBER}>{DIRECTOR.name}</T>
      <T x={centre.x} y={BOX.y + 14.5} size={4.3} weight={600}>guides the production</T>
      {PRODUCTION_TEAM.map((r, i) => {
        const n = NODES[i];
        const color = COLORS[i];
        return (
          <g key={r.name}>
            <rect x={n.x} y={n.y} width={n.w} height={NODE_H} rx={4} fill={color} fillOpacity={0.18} stroke={color} strokeWidth={0.8} />
            <T x={r3(n.x + n.w / 2)} y={n.y + 7.5} size={4.7} fill={color}>{r.name}</T>
            <T x={r3(n.x + n.w / 2)} y={n.y + 14.5} size={4.3} weight={600}>{r.does}</T>
          </g>
        );
      })}
    </Panel>
  );
};

// ---------- rubric bars ----------

export const RubricBars = ({ criteria, scores, max = 5, aria }: { criteria: readonly string[]; scores: readonly number[]; max?: number; aria: string }) => {
  const sum = rubric(scores, max);
  const rowH = 11;
  const top = 10;
  const BAR_X = 64;
  const BAR_W = 40;
  return (
    <Panel h={top + criteria.length * rowH + 16} aria={aria}>
      {criteria.map((c, i) => {
        const y = top + i * rowH;
        const w = r3((scores[i] / max) * BAR_W);
        return (
          <g key={c}>
            <T x={4} y={y + 6.4} anchor="start" size={4.6}>{c}</T>
            <rect x={BAR_X} y={y + 1} width={BAR_W} height={6} rx={1.5} fill="#1e293b" />
            <rect x={BAR_X} y={y + 1} width={w} height={6} rx={1.5} fill={COLORS[i % COLORS.length]} />
            <T x={BAR_X + BAR_W + 3} y={y + 6.4} anchor="start" size={4.6} fill={LINE}>{scores[i]}/{max}</T>
          </g>
        );
      })}
      <T x={4} y={top + criteria.length * rowH + 10} anchor="start" size={5.2} fill={AMBER}>Total {sum.total}/{sum.outOf} = {sum.percent}%</T>
    </Panel>
  );
};
