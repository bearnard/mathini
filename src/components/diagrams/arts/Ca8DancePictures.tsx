import { r3 } from '../round';
import { ALIGNMENT, POSES, canonEntries, energyPoints, pathPoints, splitPlan } from './ca8-dance-helpers';
import type { Level, PathKind, Point, Segment } from './ca8-dance-helpers';

/**
 * Pictures for the Grade 8 dance lessons, in the style of the EMS and Grade 7 Maths pictures: a dark
 * panel, a 120-unit-wide viewBox, and a few named parts. Positions and counts all come from
 * ca8-dance-helpers.ts, so a picture always matches its worked example. Every picture has an `aria`.
 */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const BLUE = '#818cf8';
const GREEN = '#34d399';
const AMBER = '#fbbf24';
const ROSE = '#fb7185';
const TONES = [BLUE, GREEN, AMBER, ROSE, '#38bdf8'];

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

// ---------- the counts ----------

/** A row of numbered counts with the moves laid on them; accented counts are filled, a cue is marked. */
export const CountStrip = ({ segments, total, accents = [], cue, aria }: { segments: readonly Segment[]; total: number; accents?: readonly boolean[]; cue?: { count: number; label: string }; aria: string }) => {
  const W = 108;
  const cw = W / total;
  const x = (count: number) => r3(6 + (count - 1) * cw);
  const fs = total > 10 ? 4.4 : 5;
  return (
    <Panel h={cue ? 56 : 46} aria={aria}>
      {Array.from({ length: total }, (_, i) => (
        <g key={i}>
          <rect x={x(i + 1) + 0.4} y={6} width={r3(cw - 0.8)} height={12} rx={1.5} fill={accents[i] ? AMBER : '#1e293b'} stroke={accents[i] ? AMBER : '#475569'} strokeWidth={0.5} />
          <T x={r3(x(i + 1) + cw / 2)} y={14.4} size={fs} fill={accents[i] ? INK : LINE}>{i + 1}</T>
        </g>
      ))}
      {segments.map((s, i) => (
        <g key={s.name + i}>
          <rect x={x(s.start) + 0.4} y={22} width={r3(s.counts * cw - 0.8)} height={13} rx={2} fill={TONES[i % TONES.length]} fillOpacity={0.25} stroke={TONES[i % TONES.length]} strokeWidth={0.7} />
          <T x={r3(x(s.start) + (s.counts * cw) / 2)} y={31} size={4.4} fill={TONES[i % TONES.length]}>{s.name}</T>
        </g>
      ))}
      {cue && (
        <g>
          <path d={`M${r3(x(cue.count) + cw / 2)} 38 l-2.4 4.4 h4.8 z`} fill={ROSE} />
          <T x={r3(x(cue.count) + cw / 2)} y={51} size={4.4} fill={ROSE}>{cue.label}</T>
        </g>
      )}
    </Panel>
  );
};

// ---------- the body ----------

const Figure = ({ level, dx, color }: { level: Level; dx: number; color: string }) => {
  const p = POSES[level];
  const pt = (q: Point) => `${r3(q.x + dx)},${q.y + 4}`;
  const limb = (a: Point, b: Point, c?: Point) => <polyline points={[a, b, ...(c ? [c] : [])].map(pt).join(' ')} fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />;
  return (
    <g>
      <circle cx={r3(p.head.x + dx)} cy={p.head.y + 4} r={3.4} fill={color} />
      {limb(p.neck, p.hip)}
      {limb(p.neck, p.hands[0])}
      {limb(p.neck, p.hands[1])}
      {limb(p.hip, p.knees[0], p.feet[0])}
      {limb(p.hip, p.knees[1], p.feet[1])}
    </g>
  );
};

export const LevelsFigure = () => (
  <Panel h={70} aria="Three stick figures side by side. The first stands tall with arms raised: high level. The second crouches with knees bent: medium level. The third is down on the floor: low level.">
    {(['high', 'medium', 'low'] as const).map((lv, i) => (
      <g key={lv}>
        <Figure level={lv} dx={2 + i * 38} color={[BLUE, GREEN, AMBER][i]} />
        <T x={r3(22 + i * 38)} y={66} size={5.2} fill={[BLUE, GREEN, AMBER][i]}>{lv[0].toUpperCase() + lv.slice(1)}</T>
      </g>
    ))}
  </Panel>
);

/** Good posture: ear, shoulder, hip, knee and ankle stacked on one vertical line. */
export const AlignmentFigure = () => {
  const cx = 58;
  const y = ALIGNMENT.map((a) => a.y);
  return (
    <Panel h={76} aria="A side view of a standing dancer. A vertical line runs through the ear, shoulder, hip, knee and ankle, which sit directly above each other.">
      <line x1={cx} y1={2} x2={cx} y2={70} stroke={ROSE} strokeWidth={0.7} strokeDasharray="2 1.6" />
      <circle cx={cx} cy={y[0] - 1} r={4.6} fill="none" stroke={GREEN} strokeWidth={1.5} />
      <polyline points={`${cx},${y[0] + 4} ${cx},${y[1]} ${cx},${y[2]} ${cx},${y[3]} ${cx},${y[4]}`} fill="none" stroke={GREEN} strokeWidth={1.8} strokeLinecap="round" />
      <polyline points={`${cx},${y[1]} ${cx + 9},${y[2] - 4}`} fill="none" stroke={GREEN} strokeWidth={1.5} strokeLinecap="round" />
      <path d={`M${cx - 6} ${y[4] + 6} h14`} stroke={MUTED} strokeWidth={1} strokeLinecap="round" />
      {ALIGNMENT.map((a) => (
        <g key={a.part}>
          <circle cx={cx} cy={a.y} r={1.7} fill={AMBER} />
          <T x={cx - 8} y={a.y + 1.8} anchor="end" size={4.8}>{a.part}</T>
        </g>
      ))}
      <T x={cx + 9} y={8} anchor="start" size={4.4} fill={ROSE}>one line</T>
    </Panel>
  );
};

// ---------- space ----------

const SW = 100;
const stageX = (v: number) => r3(10 + (v / 100) * SW);
const stageY = (v: number) => r3(15 + (v / 100) * 44);

export const FloorPlan = ({ points, aria }: { points: readonly Point[]; aria: string }) => (
  <Panel h={80} aria={aria}>
    <T x={60} y={8} size={4.4} fill={MUTED} weight={700}>back of the stage</T>
    <rect x={10} y={11} width={SW} height={52} rx={3} fill="#1e293b" stroke="#475569" strokeWidth={0.7} />
    {points.map((p, i) => (
      <g key={i}>
        <circle cx={stageX(p.x)} cy={stageY(p.y)} r={3.6} fill={TONES[i % TONES.length]} />
        <T x={stageX(p.x)} y={r3(stageY(p.y) + 1.6)} size={4.4} fill={INK}>{i + 1}</T>
      </g>
    ))}
    <T x={60} y={71} size={5} fill={AMBER}>audience</T>
    <path d="M52 74 h16" stroke={AMBER} strokeWidth={0.8} />
  </Panel>
);

export const PATH_NAMES: Record<PathKind, string> = { straight: 'Straight', zigzag: 'Zigzag', curved: 'Curved', circular: 'Circular' };

export const Pathways = ({ kinds }: { kinds: readonly PathKind[] }) => {
  const cell = 28;
  return (
    <Panel h={46} aria={`Floor patterns drawn from above: ${kinds.map((k) => PATH_NAMES[k].toLowerCase()).join(', ')}.`}>
      {kinds.map((k, i) => {
        const ox = 4 + i * 29;
        const pts = pathPoints(k);
        const first = pts[0];
        return (
          <g key={k}>
            <rect x={ox} y={4} width={cell} height={28} rx={3} fill="#1e293b" stroke="#475569" strokeWidth={0.6} />
            <polyline points={pts.map((p) => `${r3(ox + 2 + (p.x / 100) * (cell - 4))},${r3(6 + (p.y / 100) * 24)}`).join(' ')} fill="none" stroke={TONES[i]} strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" />
            <circle cx={r3(ox + 2 + (first.x / 100) * (cell - 4))} cy={r3(6 + (first.y / 100) * 24)} r={1.6} fill={LINE} />
            <T x={ox + cell / 2} y={40} size={4.6} fill={TONES[i]}>{PATH_NAMES[k]}</T>
          </g>
        );
      })}
    </Panel>
  );
};

// ---------- energy ----------

export const EnergyLines = () => {
  const rows: { kind: 'sharp' | 'smooth' | 'sustained'; label: string; color: string }[] = [
    { kind: 'sharp', label: 'Sharp', color: ROSE },
    { kind: 'smooth', label: 'Smooth', color: GREEN },
    { kind: 'sustained', label: 'Sustained', color: BLUE },
  ];
  return (
    <Panel h={66} aria="Three lines showing how movement can feel. Sharp movement is a jagged zigzag. Smooth movement is a flowing wave. Sustained movement is a steady straight line.">
      {rows.map((r, i) => (
        <g key={r.kind}>
          <T x={6} y={r3(10 + i * 20 + 1.6)} anchor="start" size={5} fill={r.color}>{r.label}</T>
          <polyline points={energyPoints(r.kind).map((p) => `${r3(36 + (p.x / 100) * 78)},${r3(10 + i * 20 - 7 + (p.y / 100) * 14)}`).join(' ')} fill="none" stroke={r.color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ))}
    </Panel>
  );
};

// ---------- canon and unison ----------

export const CanonDiagram = ({ dancers, offset, phrase }: { dancers: number; offset: number; phrase: number }) => {
  const entries = canonEntries(dancers, offset, phrase);
  const last = Math.max(...entries.map((e) => e.end));
  const cw = 80 / last;
  const x = (c: number) => r3(30 + (c - 1) * cw);
  const kind = offset === 0 ? 'unison' : 'canon';
  return (
    <Panel h={14 + dancers * 12 + 12} aria={`A ${kind} with ${dancers} dancers and a ${phrase}-count phrase. ${entries.map((e) => `Dancer ${e.dancer} dances counts ${e.start} to ${e.end}`).join('. ')}.`}>
      {entries.map((e, i) => (
        <g key={e.dancer}>
          <T x={6} y={r3(16 + i * 12 + 1.6)} anchor="start" size={4.8} fill={TONES[i]}>Dancer {e.dancer}</T>
          <rect x={x(e.start)} y={10 + i * 12} width={r3(phrase * cw - 0.6)} height={9} rx={2} fill={TONES[i]} fillOpacity={0.3} stroke={TONES[i]} strokeWidth={0.7} />
          <T x={r3(x(e.start) + (phrase * cw) / 2)} y={r3(16.6 + i * 12)} size={4.2} fill={LINE}>{e.start}–{e.end}</T>
        </g>
      ))}
      <T x={60} y={14 + dancers * 12 + 6} size={4.4} fill={MUTED}>counts 1 to {last}</T>
    </Panel>
  );
};

// ---------- sections ----------

/** A bar split into sections, each as wide as its share (counts of a routine, or minutes of a rehearsal). */
export const SectionBar = ({ sections, unit, aria }: { sections: readonly { name: string; size: number }[]; unit: string; aria: string }) => {
  const plan = splitPlan(sections);
  const W = 108;
  let at = 6;
  return (
    <Panel h={50} aria={aria}>
      {plan.parts.map((p, i) => {
        const w = (p.size / plan.total) * W;
        const x0 = at;
        at += w;
        const narrow = w < 24; // the name will not fit inside: put it under the bar
        return (
          <g key={p.name}>
            <rect x={r3(x0 + 0.4)} y={8} width={r3(w - 0.8)} height={18} rx={2.5} fill={TONES[i % TONES.length]} fillOpacity={0.25} stroke={TONES[i % TONES.length]} strokeWidth={0.8} />
            {narrow ? (
              <>
                <T x={r3(x0 + w / 2)} y={19.5} size={5}>{p.size}</T>
                <T x={r3(x0 + w / 2)} y={32} size={4.4} fill={TONES[i % TONES.length]}>{p.name}</T>
              </>
            ) : (
              <>
                <T x={r3(x0 + w / 2)} y={15.5} size={4.8} fill={TONES[i % TONES.length]}>{p.name}</T>
                <T x={r3(x0 + w / 2)} y={22.6} size={4.4}>{p.size}</T>
              </>
            )}
          </g>
        );
      })}
      <T x={60} y={44} size={4.6} fill={MUTED}>{plan.total} {unit} in all</T>
    </Panel>
  );
};
