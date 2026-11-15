import { r3 } from '../round';
import { planSegments, wrapLabel } from './pswHelpers';
import { barHeights, fetSubjects, phaseOf } from './lo11Helpers';

/** Grade 9 Life Orientation Term 4 pictures: dark panel, 120-unit viewBox, few labels, layout from lo11Helpers. */

const INK = '#0f172a';
const WHITE = '#f8fafc';
const MUTED = '#94a3b8';
const I = '#818cf8';
const E = '#34d399';
const A = '#fbbf24';
const R = '#fb7185';
const COLS = [I, E, A, R];

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

/** Bars for a count per label, with the total and its unit on top (e.g. "34 sessions"). */
/** `unit` is written after the total; pass `title` instead when a total would mean nothing (e.g. two test results). */
export const CountBars = ({ labels, values, unit, title, aria }: { labels: string[]; values: number[]; unit: string; title?: string; aria: string }) => {
  const { total, bars } = barHeights(values);
  const base = 62;
  const step = 108 / labels.length;
  return (
    <Panel h={74} aria={aria}>
      <text x={60} y={9} textAnchor="middle" fontSize={5.4} fontWeight={800} fill={A}>{title ?? `${total} ${unit}`}</text>
      <line x1={6} y1={base} x2={114} y2={base} stroke={MUTED} strokeWidth={0.6} />
      {bars.map((b, i) => {
        const cx = r3(6 + step * (i + 0.5));
        return (
          <g key={i}>
            <rect x={r3(cx - 6)} y={r3(base - b.h)} width={12} height={b.h} rx={1.5} fill={COLS[i % COLS.length]} />
            <text x={cx} y={r3(base - b.h - 2)} textAnchor="middle" fontSize={4.6} fontWeight={700} fill={WHITE}>{b.value}</text>
            <text x={cx} y={base + 7} textAnchor="middle" fontSize={4.6} fontWeight={700} fill={MUTED}>{labels[i]}</text>
          </g>
        );
      })}
    </Panel>
  );
};

/** The seven FET subjects as seven blocks: four compulsory, three chosen. */
export const SubjectBlocks = ({ aria }: { aria: string }) => {
  const f = fetSubjects();
  const cells = [...f.compulsory.map(() => I), ...Array.from({ length: f.chosen }, () => A)];
  const w = 14;
  const gap = 1.8;
  const x0 = r3((120 - (cells.length * w + (cells.length - 1) * gap)) / 2);
  return (
    <Panel h={50} aria={aria}>
      <text x={60} y={9} textAnchor="middle" fontSize={5.4} fontWeight={800} fill={WHITE}>{`${f.total} subjects in Grades 10 to 12`}</text>
      {cells.map((c, i) => (
        <rect key={i} x={r3(x0 + i * (w + gap))} y={15} width={w} height={14} rx={2} fill={c} />
      ))}
      <text x={r3(x0 + (4 * w + 3 * gap) / 2)} y={38} textAnchor="middle" fontSize={4.6} fontWeight={800} fill={I}>4 compulsory</text>
      <text x={r3(x0 + 4 * (w + gap) + (3 * w + 2 * gap) / 2)} y={38} textAnchor="middle" fontSize={4.6} fontWeight={800} fill={A}>3 you choose</text>
    </Panel>
  );
};

/** Grades 7 to 12 in a row, coloured by phase (Senior Phase or FET). */
export const PhaseBar = ({ aria }: { aria: string }) => {
  const grades = [7, 8, 9, 10, 11, 12];
  const w = 16;
  return (
    <Panel h={46} aria={aria}>
      {grades.map((g, i) => (
        <g key={g}>
          <rect x={r3(6 + i * (w + 2.4))} y={10} width={w} height={14} rx={2} fill={phaseOf(g) === 'FET' ? E : I} />
          <text x={r3(6 + i * (w + 2.4) + w / 2)} y={19.4} textAnchor="middle" fontSize={5.4} fontWeight={800} fill={INK}>{g}</text>
        </g>
      ))}
      <text x={r3(6 + (3 * w + 2 * 2.4) / 2)} y={35} textAnchor="middle" fontSize={4.6} fontWeight={800} fill={I}>Senior Phase</text>
      <text x={r3(6 + 3 * (w + 2.4) + (3 * w + 2 * 2.4) / 2)} y={35} textAnchor="middle" fontSize={4.6} fontWeight={800} fill={E}>FET</text>
    </Panel>
  );
};

const SLOTS = [
  { x: 60, y: 9 },
  { x: 97, y: 50 },
  { x: 60, y: 91 },
  { x: 23, y: 50 },
];

/** Like the Hub in PswPictures, with wider label boxes for longer words such as "Opportunities". */
export const WideHub = ({ centre, spokes, aria }: { centre: string; spokes: string[]; aria: string }) => {
  const slots = SLOTS.slice(0, Math.min(4, spokes.length));
  const cl = wrapLabel(centre, 9);
  return (
    <Panel h={100} aria={aria}>
      {slots.map((s, i) => (
        <line key={i} x1={60} y1={50} x2={s.x} y2={s.y} stroke={COLS[i]} strokeWidth={0.8} />
      ))}
      <circle cx={60} cy={50} r={15} fill="#1e293b" stroke={WHITE} strokeWidth={0.8} />
      <text x={60} y={cl.length > 1 ? 49 : 51.4} textAnchor="middle" fontSize={4.8} fontWeight={700} fill={WHITE}>
        {cl.map((l, i) => (
          <tspan key={i} x={60} dy={i === 0 ? 0 : 6.2}>{l}</tspan>
        ))}
      </text>
      {slots.map((s, i) => {
        const lines = wrapLabel(spokes[i], 16);
        return (
          <g key={i}>
            <rect x={s.x - 21} y={s.y - 6} width={42} height={12} rx={3} fill={COLS[i]} />
            <text x={s.x} y={lines.length > 1 ? s.y - 1 : s.y + 1.7} textAnchor="middle" fontSize={4.4} fontWeight={800} fill={INK}>
              {lines.map((l, j) => (
                <tspan key={j} x={s.x} dy={j === 0 ? 0 : 5.6}>{l}</tspan>
              ))}
            </text>
          </g>
        );
      })}
    </Panel>
  );
};

/** Like PlanBar in PswPictures but with its own title, e.g. a whole exam paper split into reading, sections and checking. */
export const TimeBar = ({ title, parts, aria }: { title: string; parts: { label: string; minutes: number; kind: 'work' | 'rest' }[]; aria: string }) => {
  const { segs } = planSegments(parts);
  return (
    <Panel h={46} aria={aria}>
      <text x={60} y={9} textAnchor="middle" fontSize={5.4} fontWeight={800} fill={A}>{title}</text>
      {segs.map((sg, i) => (
        <g key={i}>
          <rect x={sg.x} y={16} width={sg.w} height={14} fill={parts[i].kind === 'work' ? I : E} stroke={INK} strokeWidth={0.6} />
          <text x={r3(sg.x + sg.w / 2)} y={25} textAnchor="middle" fontSize={4.6} fontWeight={800} fill={INK}>{sg.minutes}</text>
          <text x={r3(sg.x + sg.w / 2)} y={37} textAnchor="middle" fontSize={4} fontWeight={700} fill={WHITE}>{sg.label}</text>
        </g>
      ))}
    </Panel>
  );
};
