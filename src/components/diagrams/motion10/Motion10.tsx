import { r3 } from '../round';
import { displacementAlong, distanceAlong, positionAt, velocityAt } from './motion10Helpers';

/** Pictures for the Grade 10 Physical Sciences motion in one dimension lessons. Every number and line comes from motion10Helpers.ts. */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const BLUE = '#818cf8';
const GREEN = '#34d399';
const AMBER = '#fbbf24';
const ROSE = '#fb7185';
const SKY = '#38bdf8';

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);
const T = ({ x, y, children, size = 4.4, fill = LINE, anchor = 'middle', weight = 700 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>{children}</text>
);
const n = (x: number) => String(x).replace('.', ',').replace('-', '−');

/** A path along a number line, with the distance and the displacement written underneath. */
export const NumberLinePath = ({ path, min, max, unit = 'm' }: { path: number[]; min: number; max: number; unit?: string }) => {
  const x0 = 12, w = 96;
  const px = (v: number) => r3(x0 + ((v - min) / (max - min)) * w);
  const dist = distanceAlong(path), disp = displacementAlong(path);
  const rowH = 9;
  const h = 34 + (path.length - 1) * rowH;
  return (
    <Panel h={h} aria={`A path on a number line with positions ${path.map(n).join(', then ')} ${unit}. The distance travelled is ${n(dist)} ${unit}. The displacement, the change in position from start to finish, is ${n(disp)} ${unit}, where the sign shows the direction.`}>
      <line x1={x0 - 4} y1={14} x2={x0 + w + 4} y2={14} stroke={MUTED} strokeWidth={0.6} />
      {Array.from({ length: max - min + 1 }, (_, i) => min + i).map((v) => (
        <g key={v}>
          <line x1={px(v)} y1={12.2} x2={px(v)} y2={15.8} stroke={MUTED} strokeWidth={0.5} />
          <T x={px(v)} y={21} size={3.6} fill={MUTED} weight={600}>{n(v)}</T>
        </g>
      ))}
      {path.slice(1).map((v, i) => {
        const y = 28 + i * rowH;
        const a = px(path[i]), b = px(v);
        const dir = b >= a ? 1 : -1;
        return (
          <g key={i}>
            <path d={`M${a} ${y} H${b} M${r3(b - dir * 2.2)} ${y - 1.8} L${b} ${y} L${r3(b - dir * 2.2)} ${y + 1.8}`} fill="none" stroke={[GREEN, ROSE, SKY][i % 3]} strokeWidth={1.1} />
            <T x={r3((a + b) / 2)} y={y - 2.2} size={3.4} fill={[GREEN, ROSE, SKY][i % 3]}>{`${n(r3(v - path[i]))} ${unit}`}</T>
          </g>
        );
      })}
      <T x={60} y={h - 9} size={4} fill={AMBER}>{`distance = ${n(dist)} ${unit} (scalar)`}</T>
      <T x={60} y={h - 3} size={4} fill={LINE}>{`displacement = ${n(disp)} ${unit} (vector)`}</T>
    </Panel>
  );
};

/** Position-time graph of constant acceleration x = x0 + v0 t + a t^2/2 with a chord and the tangent at time t0. */
export const XtGraph = ({ x0, v0, a, t0, t1, tMax }: { x0: number; v0: number; a: number; t0: number; t1: number; tMax: number }) => {
  const L = 16, B = 52, W = 96, H = 40;
  const xMax = positionAt(x0, v0, a, tMax);
  const px = (t: number) => r3(L + (t / tMax) * W);
  const py = (x: number) => r3(B - ((x - 0) / xMax) * H);
  const pts = Array.from({ length: 61 }, (_, i) => {
    const t = (i / 60) * tMax;
    return `${i === 0 ? 'M' : 'L'}${px(t)} ${py(positionAt(x0, v0, a, t))}`;
  }).join(' ');
  const xt0 = positionAt(x0, v0, a, t0), xt1 = positionAt(x0, v0, a, t1);
  const slope = velocityAt(v0, a, t0);
  const tl = (t: number) => r3(xt0 + slope * (t - t0));
  const tA = Math.max(0, t0 - 1.2), tB = Math.min(tMax, t0 + 1.2);
  return (
    <Panel h={66} aria={`A position-time graph for constant acceleration. The curve rises more and more steeply. The straight line through the two points at ${t0} and ${t1} seconds is a chord whose slope is the average velocity. The tangent at ${t0} seconds has a slope of ${slope} metres per second, the instantaneous velocity at that time.`}>
      <path d={`M${L} 8 V${B} H${L + W + 2}`} fill="none" stroke={MUTED} strokeWidth={0.6} />
      <T x={L - 3} y={11} size={3.8} fill={MUTED} anchor="end" weight={600}>x (m)</T>
      <T x={L + W} y={B + 8} size={3.8} fill={MUTED} anchor="end" weight={600}>t (s)</T>
      <path d={pts} fill="none" stroke={BLUE} strokeWidth={1.3} />
      <line x1={px(t0)} y1={py(xt0)} x2={px(t1)} y2={py(xt1)} stroke={ROSE} strokeWidth={0.9} />
      <line x1={px(tA)} y1={py(tl(tA))} x2={px(tB)} y2={py(tl(tB))} stroke={GREEN} strokeWidth={1} />
      <circle cx={px(t0)} cy={py(xt0)} r={1.4} fill={GREEN} />
      <circle cx={px(t1)} cy={py(xt1)} r={1.4} fill={ROSE} />
      <T x={L + 4} y={22} size={3.6} anchor="start" fill={GREEN}>{`tangent at ${n(t0)} s: v = ${n(slope)} m·s⁻¹`}</T>
      <T x={L + 4} y={27.5} size={3.6} anchor="start" fill={ROSE}>chord: average velocity</T>
    </Panel>
  );
};
