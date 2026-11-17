import { r3 } from '../round';
import { Panel, PICTURE_COLORS } from '../maths/Grade7Pictures';

/**
 * Small labelled pictures for the Grade 12 Life Sciences genetic engineering lessons: a vertical flow of steps, a stem cell tree and a maternal
 * (mitochondrial DNA) line. Everything drawn comes from the arguments, so the picture always matches the lesson text.
 */
const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const { indigo: I, green: E, amber: A, rose: R } = PICTURE_COLORS;
const COLORS = [I, E, A, R, '#38bdf8'];

const T = ({ x, y, children, color = LINE, size = 4.2, anchor = 'middle' }: { x: number; y: number; children: React.ReactNode; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={r3(x)} y={r3(y)} textAnchor={anchor} fontSize={size} fontWeight={800} fill={color}>{children}</text>
);

/** Steps one under the other, joined by arrows: each has a short label and an optional line of detail. */
export const FlowSteps = ({ steps, aria }: { steps: { label: string; sub?: string }[]; aria: string }) => {
  const boxH = 11;
  const gap = 5;
  const h = 6 + steps.length * boxH + (steps.length - 1) * gap + 6;
  return (
    <Panel h={r3(h)} aria={aria}>
      {steps.map((s, i) => {
        const y = 6 + i * (boxH + gap);
        const c = COLORS[i % COLORS.length];
        return (
          <g key={i}>
            <rect x={10} y={y} width={100} height={boxH} rx={2} fill="rgba(148,163,184,0.10)" stroke={c} strokeWidth={0.7} />
            <circle cx={16} cy={y + boxH / 2} r={2.6} fill={c} />
            <T x={16} y={y + boxH / 2 + 1.5} color={INK} size={3.4}>{String(i + 1)}</T>
            <T x={22} y={y + (s.sub ? 4.6 : 6.6)} anchor="start" size={4.9}>{s.label}</T>
            {s.sub ? <T x={22} y={y + 8.8} anchor="start" color={MUTED} size={3.9}>{s.sub}</T> : null}
            {i < steps.length - 1 ? <polygon points={`${60 - 2.2},${y + boxH + 1} ${60 + 2.2},${y + boxH + 1} 60,${y + boxH + gap - 0.6}`} fill={MUTED} /> : null}
          </g>
        );
      })}
    </Panel>
  );
};

/** One parent group splitting into several types: a stem cell and the specialised cells it can become. */
export const StemTree = ({ root, kids, aria }: { root: string; kids: string[]; aria: string }) => {
  const n = kids.length;
  const w = 100 / n;
  return (
    <Panel h={50} aria={aria}>
      <rect x={30} y={5} width={60} height={11} rx={3} fill="rgba(129,140,248,0.25)" stroke={I} strokeWidth={0.8} />
      <T x={60} y={12.4} size={4.6}>{root}</T>
      {kids.map((k, i) => {
        const cx = 10 + w * i + w / 2;
        return (
          <g key={k}>
            <line x1={60} y1={16} x2={r3(cx)} y2={30} stroke={MUTED} strokeWidth={0.7} />
            <rect x={r3(cx - w * 0.42)} y={30} width={r3(w * 0.84)} height={11} rx={3} fill="rgba(74,222,128,0.18)" stroke={E} strokeWidth={0.7} />
            <T x={cx} y={37.3} size={3.8}>{k}</T>
          </g>
        );
      })}
      <T x={60} y={47} color={MUTED} size={3.6}>can divide and develop into specialised cells</T>
    </Panel>
  );
};

/** A maternal line over three generations: everyone who carries the woman's mtDNA is red; a son's children do not. Circles are females, squares males. */
export const MtLine = ({ aria }: { aria: string }) => {
  const person = (x: number, y: number, female: boolean, carries: boolean, label: string) => (
    <g key={label}>
      {female ? <circle cx={x} cy={y} r={5} fill={carries ? R : 'rgba(148,163,184,0.35)'} stroke={INK} strokeWidth={0.5} /> : <rect x={x - 5} y={y - 5} width={10} height={10} fill={carries ? R : 'rgba(148,163,184,0.35)'} stroke={INK} strokeWidth={0.5} />}
      <T x={x > 60 ? x - 7 : x + 7} y={y + 1.5} anchor={x > 60 ? 'end' : 'start'} size={3.8}>{label}</T>
    </g>
  );
  const link = (x1: number, y1: number, x2: number, y2: number, on: boolean) => <line key={`${x1}${y1}${x2}${y2}`} x1={x1} y1={y1 + 5} x2={x2} y2={y2 - 5} stroke={on ? R : MUTED} strokeWidth={on ? 1.1 : 0.6} strokeDasharray={on ? undefined : '2 1.4'} />;
  return (
    <Panel h={74} aria={aria}>
      {link(60, 10, 35, 33, true)}
      {link(60, 10, 85, 33, true)}
      {link(35, 33, 20, 56, false)}
      {link(85, 33, 100, 56, true)}
      {person(60, 10, true, true, 'Mother')}
      {person(35, 33, false, true, 'Son')}
      {person(85, 33, true, true, 'Daughter')}
      {person(20, 56, true, false, "Son's child")}
      {person(100, 56, true, true, "Daughter's child")}
      <T x={60} y={72} color={MUTED} size={3.6}>red = carries the mother's mtDNA</T>
    </Panel>
  );
};
