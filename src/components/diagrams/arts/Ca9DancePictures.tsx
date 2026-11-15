import { r3 } from '../round';
import { formationPoints, zigzagPath } from './ca9-dance-helpers';
import type { Block, FormationKind, Level, Pt, Score } from './ca9-dance-helpers';

/**
 * Grade 9 dance lesson pictures, in the style of the Grade 7 Maths and EMS pictures: a dark panel,
 * a 120-unit-wide viewBox, at most six named labels. Positions come from ca9-dance-helpers.ts, so a
 * picture always matches its worked example. Every picture has an `aria` description.
 */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const BLUE = '#818cf8';
const GREEN = '#34d399';
const AMBER = '#fbbf24';
const ROSE = '#fb7185';
const DANCER = [BLUE, GREEN, AMBER, ROSE, '#38bdf8', '#c084fc'];

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

// ---------- alignment: a plumb line through ear, shoulder, hip, knee and ankle ----------

const BODY_Y = [16, 27, 46, 64, 82];

const Figure = ({ cx, offsets, color, name }: { cx: number; offsets: readonly number[]; color: string; name: string }) => {
  const pts = offsets.map((dx, i) => ({ x: r3(cx + dx * 0.9), y: BODY_Y[i] }));
  return (
    <g>
      <line x1={cx} y1={8} x2={cx} y2={88} stroke={MUTED} strokeWidth={0.5} strokeDasharray="2 2" />
      <polyline points={pts.map((p) => `${p.x},${p.y}`).join(' ')} fill="none" stroke={color} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={pts[0].x} cy={pts[0].y - 5} r={4.4} fill="none" stroke={color} strokeWidth={1.6} />
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={1.5} fill={LINE} />
      ))}
      <T x={cx} y={98} size={5.2} fill={color}>{name}</T>
    </g>
  );
};

export const AlignmentFigures = ({ aligned, slouched, aria }: { aligned: readonly number[]; slouched: readonly number[]; aria: string }) => (
  <Panel h={104} aria={aria}>
    <Figure cx={32} offsets={aligned} color={GREEN} name="Aligned" />
    <Figure cx={88} offsets={slouched} color={ROSE} name="Out of line" />
    <T x={60} y={50} size={4.4} fill={MUTED}>plumb line</T>
  </Panel>
);

// ---------- on the spot or travelling ----------

/** A small triangle at `to`, pointing along the line from `from`. */
const arrowHead = (from: Pt, to: Pt): string => {
  const ang = Math.atan2(to.y - from.y, to.x - from.x);
  const p = (len: number, side: number) => `${r3(to.x - len * Math.cos(ang) + side * Math.sin(ang))},${r3(to.y - len * Math.sin(ang) - side * Math.cos(ang))}`;
  return `${to.x},${to.y} ${p(5, 2.6)} ${p(5, -2.6)}`;
};

export const FloorPaths = ({ legs, aria }: { legs: number; aria: string }) => {
  const route = zigzagPath(legs, 66, 112, 22, 50);
  const last = route[route.length - 1];
  const prev = route[route.length - 2];
  return (
    <Panel h={76} aria={aria}>
      <T x={30} y={9} size={4.8} fill={BLUE}>On the spot</T>
      <circle cx={30} cy={36} r={13} fill="none" stroke={BLUE} strokeWidth={1.4} strokeDasharray="3 2.4" />
      <circle cx={30} cy={36} r={3} fill={LINE} />
      <T x={30} y={62} size={4.4} fill={MUTED}>non-locomotor</T>
      <T x={89} y={9} size={4.8} fill={GREEN}>Across the floor</T>
      <polyline points={route.map((p) => `${p.x},${p.y}`).join(' ')} fill="none" stroke={GREEN} strokeWidth={1.6} strokeLinejoin="round" strokeLinecap="round" />
      {route.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={1.6} fill={LINE} />
      ))}
      <polygon points={arrowHead(prev, last)} fill={GREEN} />
      <T x={89} y={62} size={4.4} fill={MUTED}>travelling</T>
    </Panel>
  );
};

// ---------- a phrase as blocks of counts ----------

export const PhraseBars = ({ moves, total, aria }: { moves: readonly { name: string; counts: number; start: number }[]; total: number; aria: string }) => {
  const W = 104;
  const x = (c: number) => r3(8 + (c / total) * W);
  return (
    <Panel h={52} aria={aria}>
      {moves.map((m, i) => (
        <g key={m.name + i}>
          <rect x={x(m.start) + 0.4} y={10} width={r3((m.counts / total) * W - 0.8)} height={24} rx={2.5} fill={DANCER[i % DANCER.length]} fillOpacity={0.25} stroke={DANCER[i % DANCER.length]} strokeWidth={0.9} />
          <T x={r3((x(m.start) + x(m.start + m.counts)) / 2)} y={20.5} size={4.7} fill={DANCER[i % DANCER.length]}>{m.name}</T>
          <T x={r3((x(m.start) + x(m.start + m.counts)) / 2)} y={29} size={4.6}>{m.counts}</T>
        </g>
      ))}
      <T x={60} y={46} size={5} fill={AMBER}>{total} counts</T>
    </Panel>
  );
};

// ---------- dynamics: energy rising and falling along a phrase ----------

export const DynamicsLine = ({ levels, biggest, aria }: { levels: readonly Level[]; biggest: { from: number; to: number }; aria: string }) => {
  const n = levels.length;
  const px = (i: number) => r3(18 + (i * 84) / (n - 1));
  const py = (e: number) => r3(54 - (e - 1) * 9.5);
  return (
    <Panel h={74} aria={aria}>
      <line x1={10} y1={14} x2={10} y2={58} stroke={MUTED} strokeWidth={0.7} />
      <T x={13} y={11} anchor="start" size={4.4} fill={MUTED}>energy</T>
      <polyline points={levels.map((l, i) => `${px(i)},${py(l.energy)}`).join(' ')} fill="none" stroke={BLUE} strokeWidth={1.6} strokeLinejoin="round" />
      <line x1={px(biggest.from)} y1={py(levels[biggest.from].energy)} x2={px(biggest.to)} y2={py(levels[biggest.to].energy)} stroke={AMBER} strokeWidth={2.6} strokeLinecap="round" />
      {levels.map((l, i) => (
        <g key={l.name}>
          <circle cx={px(i)} cy={py(l.energy)} r={2} fill={LINE} />
          <T x={px(i)} y={69} size={4.6}>{l.name}</T>
        </g>
      ))}
      <T x={r3((px(biggest.from) + px(biggest.to)) / 2 - 5)} y={r3((py(levels[biggest.from].energy) + py(levels[biggest.to].energy)) / 2 - 4)} anchor="end" size={4.6} fill={AMBER}>biggest contrast</T>
    </Panel>
  );
};

// ---------- a pattern of motifs ----------

export const PatternStrip = ({ pattern, aria }: { pattern: string; aria: string }) => {
  const letters = [...pattern];
  const w = Math.min(12, 104 / letters.length - 1.5);
  const colorOf = (c: string) => (c === 'A' ? BLUE : c === 'B' ? GREEN : AMBER);
  const total = letters.length * (w + 1.5) - 1.5;
  const x0 = (120 - total) / 2;
  return (
    <Panel h={42} aria={aria}>
      {letters.map((c, i) => (
        <g key={i}>
          <rect x={r3(x0 + i * (w + 1.5))} y={9} width={w} height={w} rx={2} fill={colorOf(c)} fillOpacity={0.3} stroke={colorOf(c)} strokeWidth={1} />
          <T x={r3(x0 + i * (w + 1.5) + w / 2)} y={r3(9 + w / 2 + 2)} size={6} fill={colorOf(c)}>{c}</T>
        </g>
      ))}
      <T x={60} y={35} size={4.6} fill={MUTED}>each letter is one motif</T>
    </Panel>
  );
};

// ---------- canon and unison: each dancer's start and finish on a line of counts ----------

export const CanonBars = ({ starts, length, end, aria }: { starts: readonly number[]; length: number; end: number; aria: string }) => {
  const W = 84;
  const x = (c: number) => r3(26 + (c / end) * W);
  const rowH = 11;
  return (
    <Panel h={22 + starts.length * rowH} aria={aria}>
      {starts.map((s, i) => (
        <g key={i}>
          <T x={4} y={14 + i * rowH + 3} anchor="start" size={4.6} fill={DANCER[i % DANCER.length]}>Dancer {i + 1}</T>
          <rect x={x(s)} y={9 + i * rowH} width={r3(x(s + length) - x(s))} height={7} rx={1.8} fill={DANCER[i % DANCER.length]} fillOpacity={0.3} stroke={DANCER[i % DANCER.length]} strokeWidth={0.9} />
          <T x={r3((x(s) + x(s + length)) / 2)} y={14.4 + i * rowH} size={4.2}>{s}-{s + length}</T>
        </g>
      ))}
      <line x1={26} y1={12 + starts.length * rowH} x2={110} y2={12 + starts.length * rowH} stroke={MUTED} strokeWidth={0.6} />
      <T x={110} y={20 + starts.length * rowH} anchor="end" size={4.4} fill={MUTED}>counts</T>
    </Panel>
  );
};

// ---------- a stage with dancers ----------

const SX = 10;
const SW = 100;
const SY = 4;
const SH = 72;
const sx = (p: Pt) => r3(SX + (p.x / 100) * SW);
const sy = (p: Pt) => r3(SY + (p.y / 100) * SH);

const StageBase = () => (
  <>
    <rect x={SX} y={SY} width={SW} height={SH} rx={3} fill="#1e293b" stroke={MUTED} strokeWidth={0.7} />
    <T x={60} y={88} size={4.8} fill={MUTED}>audience</T>
  </>
);

export const FormationStage = ({ kind, n, aria }: { kind: FormationKind; n: number; aria: string }) => {
  const pts = formationPoints(kind, n);
  return (
    <Panel h={94} aria={aria}>
      <StageBase />
      {pts.map((p, i) => (
        <g key={i}>
          <circle cx={sx(p)} cy={sy(p)} r={4.6} fill={DANCER[i % DANCER.length]} fillOpacity={0.9} />
          <T x={sx(p)} y={r3(sy(p) + 1.8)} size={5} fill={INK}>{i + 1}</T>
        </g>
      ))}
    </Panel>
  );
};

export const TransitionPaths = ({ from, to, n, aria }: { from: FormationKind; to: FormationKind; n: number; aria: string }) => {
  const a = formationPoints(from, n);
  const b = formationPoints(to, n);
  // two small stages side by side, the same dancer in the same colour on both
  const mini = (ox: number, pts: Pt[], title: string) => (
    <g>
      <rect x={ox} y={14} width={50} height={40} rx={2.5} fill="#1e293b" stroke={MUTED} strokeWidth={0.6} />
      {pts.map((p, i) => (
        <g key={i}>
          <circle cx={r3(ox + (p.x / 100) * 50)} cy={r3(14 + (p.y / 100) * 40)} r={3.2} fill={DANCER[i % DANCER.length]} />
          <T x={r3(ox + (p.x / 100) * 50)} y={r3(14 + (p.y / 100) * 40 + 1.5)} size={4.2} fill={INK}>{i + 1}</T>
        </g>
      ))}
      <T x={ox + 25} y={10} size={4.8} fill={LINE}>{title}</T>
    </g>
  );
  return (
    <Panel h={62} aria={aria}>
      {mini(6, a, 'End of A')}
      <path d="M58 34 L62 34" stroke={LINE} strokeWidth={1} />
      <polygon points="64,34 60.5,31.6 60.5,36.4" fill={LINE} />
      {mini(64, b, 'Start of B')}
      <T x={60} y={60} size={4.2} fill={MUTED}>same dancers, same numbers</T>
    </Panel>
  );
};

// ---------- a whole routine ----------

export const RoutineTimeline = ({ blocks, total, aria }: { blocks: readonly Block[]; total: number; aria: string }) => {
  const W = 104;
  const x = (c: number) => r3(8 + (c / total) * W);
  const sections = blocks.filter((b) => b.kind === 'section');
  return (
    <Panel h={52} aria={aria}>
      {blocks.map((b, i) => {
        const isLink = b.kind === 'link';
        const idx = sections.findIndex((s) => s.start === b.start);
        const color = isLink ? AMBER : DANCER[idx % DANCER.length];
        return (
          <g key={i}>
            <rect x={x(b.start) + 0.3} y={isLink ? 17 : 11} width={r3((b.counts / total) * W - 0.6)} height={isLink ? 12 : 24} rx={1.8} fill={color} fillOpacity={isLink ? 0.55 : 0.28} stroke={color} strokeWidth={0.8} />
            {!isLink && <T x={r3((x(b.start) + x(b.start + b.counts)) / 2)} y={r3(24)} size={Math.max(4.2, Math.min(4.6, r3(((b.counts / total) * W - 1) / (b.name.length * 0.6))))} fill={color}>{b.name}</T>}
          </g>
        );
      })}
      <rect x={8} y={42} width={4} height={4} fill={AMBER} fillOpacity={0.55} />
      <T x={14} y={45.6} anchor="start" size={4.4}>link</T>
      <T x={112} y={45.6} anchor="end" size={4.8} fill={AMBER}>{total} counts</T>
    </Panel>
  );
};

// ---------- scores ----------

export const ScoreBars = ({ scores, max, weakest, aria }: { scores: readonly Score[]; max: number; weakest: string; aria: string }) => (
  <Panel h={14 + scores.length * 15} aria={aria}>
    {scores.map((s, i) => {
      const w = r3((s.score / max) * 62);
      const low = s.name === weakest;
      return (
        <g key={s.name}>
          <T x={6} y={16 + i * 15} anchor="start" size={5} fill={low ? AMBER : LINE}>{s.name}</T>
          <rect x={46} y={9.5 + i * 15} width={62} height={8} rx={2} fill="#1e293b" />
          <rect x={46} y={9.5 + i * 15} width={w} height={8} rx={2} fill={low ? AMBER : GREEN} />
          <T x={r3(46 + w - 2)} y={16 + i * 15} anchor="end" size={4.8} fill={INK}>{s.score}</T>
        </g>
      );
    })}
  </Panel>
);

// ---------- a rehearsal log (a real table so the words wrap on a phone) ----------

export const RehearsalLog = ({ rows, aria }: { rows: readonly { date: string; practised: string; next: string }[]; aria: string }) => (
  <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl text-left" style={{ background: INK }}>
    <table aria-label={aria} className="w-full border-collapse text-[13px] text-slate-100">
      <thead>
        <tr className="text-xs uppercase tracking-wide text-slate-400">
          <th scope="col" className="px-3 py-1.5 text-left font-bold">Date</th>
          <th scope="col" className="px-3 py-1.5 text-left font-bold">We practised</th>
          <th scope="col" className="px-3 py-1.5 text-left font-bold">Work on next</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.date} className="border-t border-slate-700 align-top">
            <td className="whitespace-nowrap px-3 py-1.5">{r.date}</td>
            <td className="px-3 py-1.5">{r.practised}</td>
            <td className="px-3 py-1.5 text-amber-300">{r.next}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
