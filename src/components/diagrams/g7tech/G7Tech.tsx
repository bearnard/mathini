import { r3 } from '../round';
import { drawnLength, fmtMm, obliqueBox, vpBox, type Pt } from './drawingHelpers';

/** Pictures for the Technology drawing lessons. Every coordinate comes from drawingHelpers.ts. */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const BLUE = '#818cf8';
const GREEN = '#34d399';
const AMBER = '#fbbf24';
const ROSE = '#fb7185';

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);
const T = ({ x, y, children, size = 4.4, fill = LINE, anchor = 'middle', weight = 700 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>{children}</text>
);
const poly = (pts: Pt[]) => pts.map((p) => `${p.x},${p.y}`).join(' ');

// ---------- the three line types ----------

export const LineTypes = () => (
  <Panel h={62} aria="A drawing of a box with a hole in it, showing three line types. The outline is a thick dark line. A construction line that helps you to place the shape is thin and faint. Hidden detail, the hole that goes through the box, is a dashed line.">
    <rect x={10} y={14} width={46} height={32} fill="none" stroke={LINE} strokeWidth={1.8} />
    <rect x={22} y={24} width={22} height={12} fill="none" stroke={MUTED} strokeWidth={0.7} strokeDasharray="2 1.4" />
    <line x1={4} y1={30} x2={62} y2={30} stroke={BLUE} strokeWidth={0.4} opacity={0.8} />
    <line x1={33} y1={8} x2={33} y2={52} stroke={BLUE} strokeWidth={0.4} opacity={0.8} />
    {[{ y: 18, t: 'Outline', s: 'thick, dark', c: LINE, w: 1.8, d: undefined }, { y: 32, t: 'Construction', s: 'thin, faint line', c: BLUE, w: 0.5, d: undefined }, { y: 46, t: 'Hidden detail', s: 'dashed', c: MUTED, w: 0.9, d: '2 1.4' }].map((r) => (
      <g key={r.t}>
        <line x1={68} y1={r.y} x2={82} y2={r.y} stroke={r.c} strokeWidth={r.w} strokeDasharray={r.d} />
        <T x={85} y={r.y - 0.4} size={4.4} anchor="start" fill={r.c === LINE ? LINE : r.c}>{r.t}</T>
        <T x={85} y={r.y + 4.4} size={3.8} anchor="start" fill={MUTED} weight={600}>{r.s}</T>
      </g>
    ))}
  </Panel>
);

// ---------- a working drawing: one face, dimensions and scale ----------

export const WorkingDrawing = ({ realW, realH, scale, name }: { realW: number; realH: number; scale: string; name: string }) => {
  const dw = drawnLength(realW, scale);
  const dh = drawnLength(realH, scale);
  const k = Math.min(70 / dw, 34 / dh); // fit the page
  const w = r3(dw * k), h = r3(dh * k);
  const x0 = 26, y0 = 12;
  return (
    <Panel h={62} aria={`Working drawing of the front face of ${name}. It is ${realW} millimetres wide and ${realH} millimetres high. The dimensions show the real size, and the scale is ${scale}, so on paper it is ${dw} millimetres by ${dh} millimetres.`}>
      <rect x={x0} y={y0} width={w} height={h} fill="none" stroke={LINE} strokeWidth={1.6} />
      <line x1={x0} y1={y0 + h + 6} x2={x0 + w} y2={y0 + h + 6} stroke={AMBER} strokeWidth={0.6} />
      <line x1={x0} y1={y0 + h + 3} x2={x0} y2={y0 + h + 8} stroke={AMBER} strokeWidth={0.6} />
      <line x1={x0 + w} y1={y0 + h + 3} x2={x0 + w} y2={y0 + h + 8} stroke={AMBER} strokeWidth={0.6} />
      <T x={r3(x0 + w / 2)} y={y0 + h + 13} size={4.6} fill={AMBER}>{fmtMm(realW)}</T>
      <line x1={x0 - 6} y1={y0} x2={x0 - 6} y2={y0 + h} stroke={AMBER} strokeWidth={0.6} />
      <line x1={x0 - 8} y1={y0} x2={x0 - 3} y2={y0} stroke={AMBER} strokeWidth={0.6} />
      <line x1={x0 - 8} y1={y0 + h} x2={x0 - 3} y2={y0 + h} stroke={AMBER} strokeWidth={0.6} />
      <text x={x0 - 9} y={r3(y0 + h / 2)} fontSize={4.6} fontWeight={700} fill={AMBER} textAnchor="middle" transform={`rotate(-90 ${x0 - 9} ${r3(y0 + h / 2)})`}>{fmtMm(realH)}</text>
      <T x={r3(x0 + w / 2)} y={r3(y0 + h / 2 + 1.5)} size={4.4} fill={MUTED} weight={600}>{name}</T>
      <T x={112} y={8} size={4.4} anchor="end" fill={GREEN}>{`Scale ${scale}`}</T>
    </Panel>
  );
};

// ---------- 3D oblique ----------

export const ObliqueDrawing = ({ w, h, d, k }: { w: number; h: number; d: number; k: number }) => {
  const b = obliqueBox(w, h, d, k);
  const off = b.back[0].x; // the same step across and up
  const s = Math.min(76 / (w + off), 38 / (h + off)); // fit the page
  const X = (x: number) => r3(14 + x * s);
  const Y = (y: number) => r3(52 - y * s);
  const f = b.front.map((p) => ({ x: X(p.x), y: Y(p.y) }));
  const r = b.back.map((p) => ({ x: X(p.x), y: Y(p.y) }));
  return (
    <Panel h={62} aria={`Oblique drawing of a box. The front face is drawn in its true shape, ${w} by ${h}. The depth of ${d} is drawn as lines at 45 degrees and shortened to ${k * d}, so the box looks solid.`}>
      <polygon points={poly([f[3], f[2], r[2], r[3]])} fill={BLUE} fillOpacity={0.25} stroke={LINE} strokeWidth={1} />
      <polygon points={poly([f[1], f[2], r[2], r[1]])} fill={BLUE} fillOpacity={0.4} stroke={LINE} strokeWidth={1} />
      <polygon points={poly(f)} fill={BLUE} fillOpacity={0.15} stroke={LINE} strokeWidth={1.6} />
      <T x={r3((f[0].x + f[1].x) / 2)} y={r3(f[0].y + 6)} size={4.4} fill={AMBER}>{`front ${w}`}</T>
      <T x={r3(r[2].x + 3)} y={r3((f[2].y + r[2].y) / 2 + 3.5)} size={4.2} anchor="start" fill={GREEN}>{`depth at 45°`}</T>
      <path d={`M${f[2].x} ${f[2].y} L${r[2].x} ${r[2].y}`} stroke={GREEN} strokeWidth={1.6} />
    </Panel>
  );
};

// ---------- single vanishing point ----------

export const VpDrawing = ({ t, label = 'vanishing point' }: { t: number; label?: string }) => {
  const front: Pt[] = [{ x: 18, y: 52 }, { x: 52, y: 52 }, { x: 52, y: 22 }, { x: 18, y: 22 }];
  const vp: Pt = { x: 92, y: 14 };
  const b = vpBox(front, vp, t);
  return (
    <Panel h={62} aria={`One-point perspective drawing of a box. The horizon is a level line and every line that goes back into the picture runs to one vanishing point on it. The front face is drawn true shape. The back face is smaller, because things further away look smaller.`}>
      <line x1={4} y1={vp.y} x2={116} y2={vp.y} stroke={MUTED} strokeWidth={0.5} />
      <T x={8} y={11} size={3.8} anchor="start" fill={MUTED} weight={600}>horizon</T>
      {front.map((p, i) => (
        <line key={i} x1={p.x} y1={p.y} x2={vp.x} y2={vp.y} stroke={BLUE} strokeWidth={0.4} strokeDasharray="1.4 1.2" opacity={0.8} />
      ))}
      <polygon points={poly([front[3], front[2], b.back[2], b.back[3]])} fill={BLUE} fillOpacity={0.25} stroke={LINE} strokeWidth={1} />
      <polygon points={poly([front[1], front[2], b.back[2], b.back[1]])} fill={BLUE} fillOpacity={0.4} stroke={LINE} strokeWidth={1} />
      <polygon points={poly(front)} fill={BLUE} fillOpacity={0.15} stroke={LINE} strokeWidth={1.6} />
      <circle cx={vp.x} cy={vp.y} r={1.6} fill={AMBER} />
      <T x={vp.x} y={vp.y - 4} size={4.2} fill={AMBER}>{label}</T>
      <T x={35} y={59} size={4.2} fill={GREEN}>front face: true shape</T>
    </Panel>
  );
};
