import { Panel, PICTURE_COLORS } from '../maths/Grade7Pictures';
import { r3 } from '../round';
import { COLS, MEAN_RAIN, RECORD, ROSTOW, WEEK, dec, isDroughtYear } from './geo11';

/** Pictures for the Grade 11 Geography gap lessons. Every value comes from geo11.ts. */
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const { indigo: I, green: E, amber: A, rose: R } = PICTURE_COLORS;
const T = ({ x, y, children, color = LINE, size = 3.8, anchor = 'middle' }: { x: number; y: number; children: React.ReactNode; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={r3(x)} y={r3(y)} textAnchor={anchor} fontSize={size} fontWeight={800} fill={color}>{children}</text>
);

/** Five years of rainfall against the long-term mean line. Drought years are drawn in rose. */
export const RainBars = () => {
  const max = 600;
  const Y = (mm: number) => 52 - (mm / max) * 38;
  return (
    <Panel h={66} aria={`Rainfall of a town over five years against a long-term mean of ${MEAN_RAIN} millimetres: ${RECORD.map((r) => `${r.year} ${r.mm} millimetres`).join(', ')}. Years 3 and 4 are well below the mean and are drought years.`}>
      {RECORD.map((r, i) => (
        <g key={r.year}>
          <rect x={10 + i * 21} y={Y(r.mm)} width={14} height={52 - Y(r.mm)} rx={1.2} fill={isDroughtYear(r.mm) ? R : E} fillOpacity={0.85} />
          <T x={17 + i * 21} y={Y(r.mm) - 1.6} size={3.4}>{`${r.mm}`}</T>
          <T x={17 + i * 21} y={58} size={3.4} color={MUTED}>{`Yr ${i + 1}`}</T>
        </g>
      ))}
      <line x1={6} y1={Y(MEAN_RAIN)} x2={116} y2={Y(MEAN_RAIN)} stroke={A} strokeWidth={0.7} strokeDasharray="2 1.4" />
      <T x={60} y={6} color={A} size={3.6}>{`Rainfall (mm); dashed line = mean ${MEAN_RAIN} mm`}</T>
    </Panel>
  );
};

/** Two bars side by side: a value for two groups, with a label and a verdict line. */
export const PairBars = ({ title, aLabel, a, bLabel, b, unit, verdict }: { title: string; aLabel: string; a: number; bLabel: string; b: number; unit: string; verdict: string }) => {
  const max = Math.max(a, b, 1);
  const h = (v: number) => (v / max) * 28;
  return (
    <Panel h={56} aria={`${title}. ${aLabel}: ${dec(a)} ${unit}. ${bLabel}: ${dec(b)} ${unit}. ${verdict}`}>
      <T x={60} y={7} color={A} size={4}>{title}</T>
      <rect x={24} y={42 - h(a)} width={22} height={h(a)} rx={1.5} fill={R} fillOpacity={0.85} />
      <rect x={74} y={42 - h(b)} width={22} height={h(b)} rx={1.5} fill={E} fillOpacity={0.85} />
      <T x={35} y={40 - h(a)} size={3.6}>{dec(a)}</T>
      <T x={85} y={40 - h(b)} size={3.6}>{dec(b)}</T>
      <T x={35} y={48} size={3.4} color={MUTED}>{aLabel}</T>
      <T x={85} y={48} size={3.4} color={MUTED}>{bLabel}</T>
      <T x={60} y={54} size={3.4} color={A}>{verdict}</T>
    </Panel>
  );
};

/** Rostow's five stages drawn as rising steps. */
export const RostowSteps = () => (
  <Panel h={66} aria={`Rostow's five stages of growth drawn as rising steps: ${ROSTOW.map((s, i) => `${i + 1} ${s.stage}`).join(', ')}.`}>
    {ROSTOW.map((s, i) => (
      <g key={s.stage}>
        <rect x={6 + i * 22} y={50 - (i + 1) * 8.4} width={20} height={(i + 1) * 8.4} rx={1} fill={[I, E, A, R, I][i]} fillOpacity={0.8} />
        <T x={16 + i * 22} y={50 - (i + 1) * 8.4 + 5} size={4.2}>{String(i + 1)}</T>
      </g>
    ))}
    <T x={60} y={58} size={3.4} color={MUTED}>1 Traditional  2 Preconditions  3 Take-off</T>
    <T x={60} y={63.5} size={3.4} color={MUTED}>4 Maturity  5 High mass consumption</T>
  </Panel>
);

/** Core and periphery as rings: the core at the centre, the periphery at the edge. */
export const CoreRings = ({ scale }: { scale: string }) => (
  <Panel h={68} aria={`A core and periphery picture at the ${scale} scale: a rich, busy core in the centre, a semi-periphery around it and a poorer periphery at the edge. Trade and migration flow between them.`}>
    <circle cx={60} cy={30} r={26} fill={R} fillOpacity={0.25} stroke={R} strokeWidth={0.6} />
    <circle cx={60} cy={32} r={17} fill={A} fillOpacity={0.3} stroke={A} strokeWidth={0.6} />
    <circle cx={60} cy={34} r={8} fill={E} fillOpacity={0.55} stroke={E} strokeWidth={0.6} />
    <T x={60} y={36} size={4}>Core</T>
    <T x={60} y={21} size={3.4}>Semi-periphery</T>
    <T x={60} y={10} size={3.4}>Periphery</T>
    <T x={60} y={65} size={3.4} color={MUTED}>{scale}</T>
  </Panel>
);

/** Three overlapping circles for the sustainability model. */
export const SustainCircles = () => (
  <Panel h={66} aria="Three overlapping circles labelled economic, social and environmental. Where all three overlap, development is sustainable.">
    <circle cx={48} cy={26} r={17} fill={A} fillOpacity={0.3} stroke={A} strokeWidth={0.6} />
    <circle cx={72} cy={26} r={17} fill={I} fillOpacity={0.3} stroke={I} strokeWidth={0.6} />
    <circle cx={60} cy={44} r={17} fill={E} fillOpacity={0.3} stroke={E} strokeWidth={0.6} />
    <T x={40} y={22} size={3.8}>Economic</T>
    <T x={80} y={22} size={3.8}>Social</T>
    <T x={60} y={54} size={3.6}>Environmental</T>
    <T x={60} y={35} size={3.4} color={A}>sustainable</T>
  </Panel>
);

/** An atlas page grid of six columns and five rows, with one block marked. */
export const AtlasGrid = ({ col, row, place }: { col: number; row: number; place: string }) => (
  <Panel h={64} aria={`An atlas page divided into six columns, lettered A to F across the top, and five rows, numbered 1 to 5 down the side. ${place} lies in block ${COLS[col - 1]}${row}, which is column ${COLS[col - 1]} and row ${row}.`}>
    {COLS.map((c, i) => <T key={c} x={20 + i * 16 + 8} y={8} size={3.8} color={A}>{c}</T>)}
    {[1, 2, 3, 4, 5].map((n) => <T key={n} x={14} y={10 + n * 10.4 - 3} size={3.8} color={A}>{String(n)}</T>)}
    {COLS.map((_, i) => [1, 2, 3, 4, 5].map((n) => (
      <rect key={`${i}-${n}`} x={20 + i * 16} y={10 + (n - 1) * 10.4} width={16} height={10.4} fill={i + 1 === col && n === row ? E : 'none'} fillOpacity={0.6} stroke={MUTED} strokeWidth={0.4} />
    )))}
    <T x={20 + (col - 1) * 16 + 8} y={10 + (row - 1) * 10.4 + 6.4} size={3.2}>{place}</T>
  </Panel>
);

/** A week of fieldwork data: maximum and minimum temperatures as lines, rainfall as bars. */
export const WeekGraph = () => {
  const X = (i: number) => 14 + i * 15;
  const Yt = (t: number) => 44 - (t / 30) * 30;
  const pts = (k: 'max' | 'min') => WEEK.map((d, i) => `${r3(X(i))},${r3(Yt(d[k]))}`).join(' ');
  return (
    <Panel h={66} aria={`A week of weather records. Maximum temperatures: ${WEEK.map((d) => `${d.day} ${d.max}`).join(', ')} degrees Celsius. Minimum temperatures: ${WEEK.map((d) => `${d.day} ${d.min}`).join(', ')}. Rainfall in millimetres: ${WEEK.map((d) => `${d.day} ${d.rain}`).join(', ')}.`}>
      {WEEK.map((d, i) => (
        <g key={d.day}>
          <rect x={X(i) - 3} y={58 - d.rain * 0.7} width={6} height={d.rain * 0.7} fill="#38bdf8" fillOpacity={0.8} />
          <T x={X(i)} y={64} size={3.2} color={MUTED}>{d.day}</T>
        </g>
      ))}
      <polyline points={pts('max')} fill="none" stroke={R} strokeWidth={0.9} />
      <polyline points={pts('min')} fill="none" stroke={I} strokeWidth={0.9} />
      <T x={20} y={7} size={3.4} color={R} anchor="start">max °C</T>
      <T x={50} y={7} size={3.4} color={I} anchor="start">min °C</T>
      <T x={80} y={7} size={3.4} color="#38bdf8" anchor="start">rain mm</T>
    </Panel>
  );
};
