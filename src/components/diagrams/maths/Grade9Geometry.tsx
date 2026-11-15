import { r3 } from '../round';
import { PICTURE_COLORS } from './Grade7Pictures';
import { circleIntersections, quadFromAngles, type Pt } from './grade9GeometryHelpers';

/**
 * Grade 9 geometry pictures (angles, constructions, Pythagoras) in the style of Grade7Pictures: a
 * dark panel, a 120-unit-wide viewBox, indigo / emerald / amber / rose and at most six labels. Every
 * point is computed from the angles and lengths passed in (construction arcs meet where the circles
 * really cross), so a picture always matches its worked example.
 */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const { indigo: I, green: E, amber: A, rose: R } = PICTURE_COLORS;

const Panel = ({ h, aria, children, className }: { h: number; aria: string; children: React.ReactNode; className?: string }) => (
  <svg viewBox={`0 0 120 ${r3(h)}`} role="img" aria-label={aria} className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`} style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

const Label = ({ x, y, children, color = LINE, size = 5.8, anchor = 'middle' }: { x: number; y: number; children: React.ReactNode; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={r3(x)} y={r3(y)} textAnchor={anchor} fontSize={size} fontWeight={800} fill={color}>
    {children}
  </text>
);

/** Unit vector for a maths angle (degrees, anticlockwise from east) in SVG coordinates (y down). */
const dir = (deg: number) => ({ x: Math.cos((deg * Math.PI) / 180), y: -Math.sin((deg * Math.PI) / 180) });
const at = (p: Pt, deg: number, r: number): Pt => ({ x: p.x + dir(deg).x * r, y: p.y + dir(deg).y * r });

/** An arc around c from maths angle a1 to a2 (anticlockwise). */
const arcPath = (c: Pt, r: number, a1: number, a2: number) => {
  const p1 = at(c, a1, r);
  const p2 = at(c, a2, r);
  const large = ((a2 - a1 + 360) % 360) > 180 ? 1 : 0;
  return `M${r3(p1.x)},${r3(p1.y)} A${r},${r} 0 ${large} 0 ${r3(p2.x)},${r3(p2.y)}`;
};

/** Text placed in the middle of an angle, at distance r from its vertex, centred on the baseline. */
const AngleText = ({ c, a1, a2, r, color, children, size = 5.6 }: { c: Pt; a1: number; a2: number; r: number; color: string; children: React.ReactNode; size?: number }) => {
  const mid = a1 + (((a2 - a1 + 360) % 360) / 2);
  const p = at(c, mid, r);
  return <Label x={p.x} y={p.y + size * 0.35} color={color} size={size}>{children}</Label>;
};

const deg = (n: number) => `${n}°`;
const angleOf = (from: Pt, to: Pt) => (Math.atan2(-(to.y - from.y), to.x - from.x) * 180) / Math.PI;

// ---------- angles ----------

/** Two straight lines crossing: the four angles, two pairs of vertically opposite angles. */
export const CrossingLines = ({ angle, className }: { angle: number; className?: string }) => {
  const c = { x: 60, y: 30 };
  const L = 44;
  const other = 180 - angle;
  const arcs = [
    { a1: 0, a2: angle, v: angle, color: I },
    { a1: angle, a2: 180, v: other, color: E },
    { a1: 180, a2: 180 + angle, v: angle, color: I },
    { a1: 180 + angle, a2: 360, v: other, color: E },
  ];
  return (
    <Panel h={60} className={className} aria={`Two straight lines crossing. The four angles are ${angle}°, ${other}°, ${angle}° and ${other}°. Vertically opposite angles are equal, and angles next to each other on a straight line add up to 180°.`}>
      <line x1={r3(c.x - L)} y1={c.y} x2={r3(c.x + L)} y2={c.y} stroke={LINE} strokeWidth={0.9} />
      <line x1={r3(at(c, angle + 180, 32).x)} y1={r3(at(c, angle + 180, 32).y)} x2={r3(at(c, angle, 32).x)} y2={r3(at(c, angle, 32).y)} stroke={LINE} strokeWidth={0.9} />
      {arcs.map((a, i) => (
        <g key={i}>
          <path d={arcPath(c, 7, a.a1, a.a2)} fill="none" stroke={a.color} strokeWidth={0.9} />
          <AngleText c={c} a1={a.a1} a2={a.a2} r={a.v < 90 ? 14 : 12} color={a.color}>{deg(a.v)}</AngleText>
        </g>
      ))}
    </Panel>
  );
};

export interface TransversalMark {
  line: 'top' | 'bottom';
  /** Which of the four angles at the crossing: upper-right, upper-left, lower-left, lower-right. */
  corner: 'ur' | 'ul' | 'll' | 'lr';
  color: string;
  label: string;
}

/** Two parallel lines cut by a transversal at `angle` to the lines, with chosen angles marked. */
export const ParallelTransversal = ({ angle, marks, aria, className }: { angle: number; marks: TransversalMark[]; aria: string; className?: string }) => {
  const yTop = 20;
  const yBot = 46;
  const run = (yBot - yTop) / Math.tan((angle * Math.PI) / 180);
  const P = { top: { x: 60 + run / 2, y: yTop }, bottom: { x: 60 - run / 2, y: yBot } };
  const range = (corner: TransversalMark['corner']) =>
    corner === 'ur' ? [0, angle] : corner === 'ul' ? [angle, 180] : corner === 'll' ? [180, 180 + angle] : [180 + angle, 360];
  const ends = [at(P.bottom, angle + 180, 14), at(P.top, angle, 14)];
  const chevron = (x: number, y: number) => <path d={`M${x - 1.6},${y - 2} l2.4,2 l-2.4,2`} fill="none" stroke={MUTED} strokeWidth={0.8} />;
  return (
    <Panel h={64} aria={aria} className={className}>
      <line x1={8} y1={yTop} x2={112} y2={yTop} stroke={LINE} strokeWidth={0.9} />
      <line x1={8} y1={yBot} x2={112} y2={yBot} stroke={LINE} strokeWidth={0.9} />
      {chevron(18, yTop)}
      {chevron(18, yBot)}
      <line x1={r3(ends[0].x)} y1={r3(ends[0].y)} x2={r3(ends[1].x)} y2={r3(ends[1].y)} stroke={A} strokeWidth={0.9} />
      {marks.map((m, i) => {
        const [a1, a2] = range(m.corner);
        const c = P[m.line];
        const size = a2 - a1;
        return (
          <g key={i}>
            <path d={arcPath(c, 5, a1, a2)} fill="none" stroke={m.color} strokeWidth={1} />
            <AngleText c={c} a1={a1} a2={a2} r={size < 90 ? 12 : 10} color={m.color} size={5.4}>{m.label}</AngleText>
          </g>
        );
      })}
    </Panel>
  );
};

/** A triangle drawn from two of its angles (at the left and right ends of the base), with all three angles labelled. */
export const TriangleAngles = ({ left, right, exterior, className }: { left: number; right: number; exterior?: boolean; className?: string }) => {
  const top = 180 - left - right;
  const tl = Math.tan((left * Math.PI) / 180);
  const tr = Math.tan((right * Math.PI) / 180);
  const base0 = 80;
  const apexX0 = (base0 * tr) / (tl + tr);
  const h0 = apexX0 * tl;
  const s = Math.min(1, 46 / h0);
  const base = base0 * s;
  const h = h0 * s;
  const Ax = exterior ? 14 : 20;
  const yb = 8 + h;
  const pA = { x: Ax, y: yb };
  const pB = { x: Ax + base, y: yb };
  const pC = { x: Ax + apexX0 * s, y: yb - h };
  return (
    <Panel
      h={yb + 10}
      className={className}
      aria={`A triangle with angles ${left}°, ${right}° and ${top}°, which add up to 180°.${exterior ? ` The base is extended past the ${right}° angle: the exterior angle there is ${180 - right}°, equal to ${left}° + ${top}°.` : ''}`}
    >
      <polygon points={`${r3(pA.x)},${r3(pA.y)} ${r3(pB.x)},${r3(pB.y)} ${r3(pC.x)},${r3(pC.y)}`} fill={I} fillOpacity={0.15} stroke={LINE} strokeWidth={0.9} />
      <path d={arcPath(pA, 6, 0, left)} fill="none" stroke={I} strokeWidth={0.9} />
      <AngleText c={pA} a1={0} a2={left} r={13} color={I}>{deg(left)}</AngleText>
      <path d={arcPath(pB, 6, 180 - right, 180)} fill="none" stroke={E} strokeWidth={0.9} />
      <AngleText c={pB} a1={180 - right} a2={180} r={13} color={E}>{deg(right)}</AngleText>
      <path d={arcPath(pC, 5, angleOf(pC, pA), angleOf(pC, pB))} fill="none" stroke={A} strokeWidth={0.9} />
      <AngleText c={pC} a1={angleOf(pC, pA)} a2={angleOf(pC, pB)} r={12} color={A}>{deg(top)}</AngleText>
      {exterior && (
        <g>
          <line x1={r3(pB.x)} y1={r3(yb)} x2={r3(Math.min(116, pB.x + 22))} y2={r3(yb)} stroke={MUTED} strokeWidth={0.8} strokeDasharray="1.6 1.2" />
          <path d={arcPath(pB, 5, 0, 180 - right)} fill="none" stroke={R} strokeWidth={0.9} />
          <AngleText c={pB} a1={0} a2={180 - right} r={11} color={R}>{deg(180 - right)}</AngleText>
        </g>
      )}
    </Panel>
  );
};

/** A quadrilateral drawn from its four angles, split by a diagonal into two triangles. */
export const QuadrilateralAngles = ({ angles, labels, className }: { angles: number[]; labels: string[]; className?: string }) => {
  const pts = quadFromAngles(angles, 60, 40) ?? [];
  if (pts.length !== 4) return null;
  const xs = pts.map((p) => p.x);
  const ys = pts.map((p) => p.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const s = Math.min(96 / (maxX - minX), 52 / (maxY - minY));
  const P = pts.map((p) => ({ x: 12 + (p.x - minX) * s, y: 8 + (maxY - p.y) * s }));
  const h = 8 + (maxY - minY) * s + 8;
  const colors = [I, E, A, R];
  return (
    <Panel h={h} className={className} aria={`A quadrilateral with angles ${labels.join(', ')}. A diagonal splits it into two triangles, so its angles add up to 2 × 180° = 360°.`}>
      <polygon points={`${r3(P[0].x)},${r3(P[0].y)} ${r3(P[1].x)},${r3(P[1].y)} ${r3(P[2].x)},${r3(P[2].y)}`} fill={I} fillOpacity={0.15} />
      <polygon points={`${r3(P[0].x)},${r3(P[0].y)} ${r3(P[2].x)},${r3(P[2].y)} ${r3(P[3].x)},${r3(P[3].y)}`} fill={E} fillOpacity={0.15} />
      <polygon points={P.map((p) => `${r3(p.x)},${r3(p.y)}`).join(' ')} fill="none" stroke={LINE} strokeWidth={0.9} />
      <line x1={r3(P[0].x)} y1={r3(P[0].y)} x2={r3(P[2].x)} y2={r3(P[2].y)} stroke={MUTED} strokeWidth={0.8} strokeDasharray="1.6 1.2" />
      {P.map((p, i) => {
        const prev = P[(i + 3) % 4];
        const next = P[(i + 1) % 4];
        const a1 = angleOf(p, next);
        const a2 = angleOf(p, prev);
        return <AngleText key={i} c={p} a1={a1} a2={a2} r={angles[i] > 100 ? 9 : angles[i] < 80 ? 18 : 11} color={colors[i]} size={5.4}>{labels[i]}</AngleText>;
      })}
    </Panel>
  );
};

// ---------- constructions ----------

const Arc = ({ c, r, through, spread = 14, color = A }: { c: Pt; r: number; through: Pt; spread?: number; color?: string }) => {
  const mid = angleOf(c, through);
  return <path d={arcPath(c, r, mid - spread, mid + spread)} fill="none" stroke={color} strokeWidth={0.7} />;
};
const Dot = ({ p, color = LINE }: { p: Pt; color?: string }) => <circle cx={r3(p.x)} cy={r3(p.y)} r={1.3} fill={color} />;
const Seg = ({ p, q, color = LINE, dash, w = 0.9 }: { p: Pt; q: Pt; color?: string; dash?: boolean; w?: number }) => (
  <line x1={r3(p.x)} y1={r3(p.y)} x2={r3(q.x)} y2={r3(q.y)} stroke={color} strokeWidth={w} strokeDasharray={dash ? '1.6 1.2' : undefined} />
);
const RightMark = ({ p, a1, a2, size = 3 }: { p: Pt; a1: number; a2: number; size?: number }) => {
  const u = at(p, a1, size);
  const v = at(p, a2, size);
  const w = { x: u.x + v.x - p.x, y: u.y + v.y - p.y };
  return <path d={`M${r3(u.x)},${r3(u.y)} L${r3(w.x)},${r3(w.y)} L${r3(v.x)},${r3(v.y)}`} fill="none" stroke={E} strokeWidth={0.7} />;
};

/** An equilateral triangle constructed on a base: arcs with radius = the side from both ends meet at the apex. */
export const EquilateralConstruction = ({ side, unit, className }: { side: number; unit: string; className?: string }) => {
  const L = 56;
  const pA = { x: 32, y: 62 };
  const pB = { x: 32 + L, y: 62 };
  const [pC] = circleIntersections(pA, L, pB, L).sort((p, q) => p.y - q.y);
  return (
    <Panel h={72} className={className} aria={`Constructing an equilateral triangle with sides of ${side} ${unit}. Draw AB = ${side} ${unit}. With the compass set to ${side} ${unit}, draw an arc from A and an arc from B. They cross at C. Join AC and BC.`}>
      <Arc c={pA} r={L} through={pC} />
      <Arc c={pB} r={L} through={pC} />
      <Seg p={pA} q={pB} w={1.1} />
      <Seg p={pA} q={pC} color={I} />
      <Seg p={pB} q={pC} color={I} />
      {[pA, pB, pC].map((p, i) => <Dot key={i} p={p} />)}
      <Label x={pA.x - 3} y={pA.y + 2} anchor="end">A</Label>
      <Label x={pB.x + 3} y={pB.y + 2} anchor="start">B</Label>
      <Label x={pC.x} y={pC.y - 4}>C</Label>
      <Label x={60} y={pA.y + 7} color={A} size={5.4}>{`${side} ${unit}`}</Label>
    </Panel>
  );
};

/** The perpendicular bisector of AB: four arcs (radius more than half of AB) cross at P and Q; PQ cuts AB at its midpoint M at 90°. */
export const PerpendicularBisector = ({ className }: { className?: string }) => {
  const pA = { x: 30, y: 38 };
  const pB = { x: 90, y: 38 };
  const r = 40;
  const [P, Q] = circleIntersections(pA, r, pB, r).sort((p, q) => p.y - q.y);
  const M = { x: (pA.x + pB.x) / 2, y: pA.y };
  return (
    <Panel h={76} className={className} aria="Constructing the perpendicular bisector of AB. With the compass wider than half of AB, draw an arc above and below AB from A, and again from B: four arcs. They cross at two points. The line through them cuts AB in half at M, at a right angle.">
      {[P, Q].map((X, i) => (
        <g key={i}>
          <Arc c={pA} r={r} through={X} spread={10} />
          <Arc c={pB} r={r} through={X} spread={10} />
        </g>
      ))}
      <Seg p={pA} q={pB} w={1.1} />
      <Seg p={{ x: P.x, y: P.y - 3 }} q={{ x: Q.x, y: Q.y + 3 }} color={I} />
      <RightMark p={M} a1={0} a2={90} />
      {[pA, pB, M].map((p, i) => <Dot key={i} p={p} />)}
      <Label x={pA.x - 3} y={pA.y + 2} anchor="end">A</Label>
      <Label x={pB.x + 3} y={pB.y + 2} anchor="start">B</Label>
      <Label x={M.x - 2.5} y={M.y + 7} anchor="end">M</Label>
    </Panel>
  );
};

/** Bisecting an angle at O: an arc cuts the arms at P and Q; equal arcs from P and Q meet at R; OR halves the angle. */
export const AngleBisectorConstruction = ({ angle, className }: { angle: number; className?: string }) => {
  const O = { x: 14, y: 62 };
  const r1 = 34;
  const P = at(O, 0, r1);
  const Q = at(O, angle, r1);
  const r2 = 26;
  const [Rp] = circleIntersections(P, r2, Q, r2).sort((p, q) => Math.hypot(q.x - O.x, q.y - O.y) - Math.hypot(p.x - O.x, p.y - O.y));
  const half = angle / 2;
  const far = (a: number) => at(O, a, 96);
  return (
    <Panel h={70} className={className} aria={`Bisecting a ${angle}° angle at O. An arc from O cuts the arms at P and Q. Arcs of equal radius from P and from Q cross at R. The line OR splits the angle into two angles of ${half}°.`}>
      <Seg p={O} q={far(0)} w={1.1} />
      <Seg p={O} q={at(O, angle, 72)} w={1.1} />
      <path d={arcPath(O, r1, -4, angle + 4)} fill="none" stroke={A} strokeWidth={0.7} />
      <Arc c={P} r={r2} through={Rp} spread={12} />
      <Arc c={Q} r={r2} through={Rp} spread={12} />
      <Seg p={O} q={at(O, half, 92)} color={I} />
      {[O, P, Q, Rp].map((p, i) => <Dot key={i} p={p} />)}
      <Label x={O.x - 1} y={O.y + 6.5}>O</Label>
      <Label x={P.x} y={P.y + 6.5}>P</Label>
      <Label x={Q.x - 3.5} y={Q.y + 1} anchor="end">Q</Label>
      <Label x={Rp.x + 4} y={Rp.y + 1} anchor="start">R</Label>
      <AngleText c={O} a1={0} a2={half} r={22} color={E} size={5}>{deg(half)}</AngleText>
      <AngleText c={O} a1={half} a2={angle} r={22} color={E} size={5}>{deg(half)}</AngleText>
    </Panel>
  );
};

/** A perpendicular at a point P on a line: an arc from P cuts the line at A and B; wider equal arcs from A and B meet at Q; PQ ⟂ AB. */
export const PerpendicularAtPoint = ({ className }: { className?: string }) => {
  const P = { x: 60, y: 58 };
  const r1 = 22;
  const pA = { x: P.x - r1, y: P.y };
  const pB = { x: P.x + r1, y: P.y };
  const r2 = 36;
  const [Q] = circleIntersections(pA, r2, pB, r2).sort((p, q) => p.y - q.y);
  return (
    <Panel h={68} className={className} aria="Constructing a perpendicular at a point P on a line. Mark P on the line. An arc centred at P cuts the line at A and B, the same distance from P. With a wider compass, arcs from A and from B cross at Q. The line PQ is perpendicular to the line, shown by a small square at P.">
      <Seg p={{ x: 8, y: P.y }} q={{ x: 112, y: P.y }} w={1.1} />
      <path d={arcPath(P, r1, -8, 8)} fill="none" stroke={A} strokeWidth={0.7} />
      <path d={arcPath(P, r1, 172, 188)} fill="none" stroke={A} strokeWidth={0.7} />
      <Arc c={pA} r={r2} through={Q} spread={10} />
      <Arc c={pB} r={r2} through={Q} spread={10} />
      <Seg p={P} q={{ x: Q.x, y: Q.y - 4 }} color={I} />
      <RightMark p={P} a1={0} a2={90} />
      {[P, pA, pB, Q].map((p, i) => <Dot key={i} p={p} />)}
      <Label x={P.x} y={P.y + 7}>P</Label>
      <Label x={pA.x} y={pA.y + 7}>A</Label>
      <Label x={pB.x} y={pB.y + 7}>B</Label>
      <Label x={Q.x + 3.5} y={Q.y + 1} anchor="start">Q</Label>
    </Panel>
  );
};

/** A triangle from three sides: the base, then arcs with the other two lengths from its ends. */
export const SSSConstruction = ({ base, left, right, unit, className }: { base: number; left: number; right: number; unit: string; className?: string }) => {
  const s = 80 / base;
  const pA = { x: 20, y: 60 };
  const pB = { x: 20 + base * s, y: 60 };
  const [pC] = circleIntersections(pA, left * s, pB, right * s).sort((p, q) => p.y - q.y);
  const mid = (p: Pt, q: Pt) => ({ x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 });
  return (
    <Panel h={70} className={className} aria={`Constructing a triangle with sides ${base}, ${left} and ${right} ${unit}. Draw the base of ${base} ${unit}. Draw an arc of radius ${left} ${unit} from the left end and an arc of radius ${right} ${unit} from the right end. They cross at the third corner.`}>
      <Arc c={pA} r={left * s} through={pC} spread={16} />
      <Arc c={pB} r={right * s} through={pC} spread={16} />
      <Seg p={pA} q={pB} w={1.1} />
      <Seg p={pA} q={pC} color={I} />
      <Seg p={pB} q={pC} color={E} />
      {[pA, pB, pC].map((p, i) => <Dot key={i} p={p} />)}
      <Label x={mid(pA, pB).x} y={pA.y + 7} color={LINE} size={5.4}>{`${base} ${unit}`}</Label>
      <Label x={mid(pA, pC).x - 3} y={mid(pA, pC).y} color={I} size={5.4} anchor="end">{`${left} ${unit}`}</Label>
      <Label x={mid(pB, pC).x + 3} y={mid(pB, pC).y} color={E} size={5.4} anchor="start">{`${right} ${unit}`}</Label>
    </Panel>
  );
};

// ---------- Pythagoras ----------

/** A right-angled triangle with squares drawn on all three sides; each square's area is written inside. */
export const SquaresOnSides = ({ a, b, className }: { a: number; b: number; className?: string }) => {
  const c = Math.hypot(a, b);
  // maths coordinates: right angle at (0,0), leg a along x, leg b along y
  const T = [{ x: 0, y: 0 }, { x: a, y: 0 }, { x: 0, y: b }];
  const sqA = [{ x: 0, y: 0 }, { x: a, y: 0 }, { x: a, y: -a }, { x: 0, y: -a }];
  const sqB = [{ x: 0, y: 0 }, { x: 0, y: b }, { x: -b, y: b }, { x: -b, y: 0 }];
  // outward normal of the hypotenuse from (a,0) to (0,b): (b, a)/c
  const n = { x: (b / c) * c, y: (a / c) * c };
  const sqC = [{ x: a, y: 0 }, { x: 0, y: b }, { x: n.x, y: b + n.y }, { x: a + n.x, y: n.y }];
  const all = [...sqA, ...sqB, ...sqC];
  const minX = Math.min(...all.map((p) => p.x));
  const maxX = Math.max(...all.map((p) => p.x));
  const minY = Math.min(...all.map((p) => p.y));
  const maxY = Math.max(...all.map((p) => p.y));
  const s = Math.min(100 / (maxX - minX), 72 / (maxY - minY));
  const W = (maxX - minX) * s;
  const X = (p: { x: number; y: number }) => r3(60 - W / 2 + (p.x - minX) * s);
  const Y = (p: { x: number; y: number }) => r3(6 + (maxY - p.y) * s);
  const poly = (ps: { x: number; y: number }[]) => ps.map((p) => `${X(p)},${Y(p)}`).join(' ');
  const centre = (ps: { x: number; y: number }[]) => ({ x: ps.reduce((t, p) => t + p.x, 0) / ps.length, y: ps.reduce((t, p) => t + p.y, 0) / ps.length });
  const h = 6 + (maxY - minY) * s + 6;
  const lab = (ps: { x: number; y: number }[], text: string, color: string) => {
    const m = centre(ps);
    return <Label x={X(m)} y={Y(m) + 2.2} color={color} size={6.2}>{text}</Label>;
  };
  return (
    <Panel h={h} className={className} aria={`A right-angled triangle with sides ${a}, ${b} and ${c}. Squares are drawn on each side: areas ${a * a}, ${b * b} and ${c * c}. ${a * a} + ${b * b} = ${c * c}.`}>
      <polygon points={poly(sqA)} fill={I} fillOpacity={0.3} stroke={I} strokeWidth={0.8} />
      <polygon points={poly(sqB)} fill={E} fillOpacity={0.3} stroke={E} strokeWidth={0.8} />
      <polygon points={poly(sqC)} fill={A} fillOpacity={0.25} stroke={A} strokeWidth={0.8} />
      <polygon points={poly(T)} fill={LINE} fillOpacity={0.15} stroke={LINE} strokeWidth={0.9} />
      {lab(sqA, `${a}² = ${a * a}`, I)}
      {lab(sqB, `${b}² = ${b * b}`, E)}
      {lab(sqC, `${c}² = ${c * c}`, A)}
    </Panel>
  );
};

/** A right-angled triangle drawn to scale (legs along the bottom and the left), with a label on each side. */
export const RightTriangle = ({ base, height, labels, wall, className, aria }: { base: number; height: number; labels: { base: string; height: string; hyp: string }; wall?: boolean; className?: string; aria: string }) => {
  const s = Math.min(70 / base, 54 / height);
  const W = base * s;
  const H = height * s;
  const x0 = wall ? 40 : 60 - W / 2 + 6;
  const yb = 6 + H;
  const C = { x: x0, y: yb };
  const Bp = { x: x0 + W, y: yb };
  const Tp = { x: x0, y: yb - H };
  const hm = { x: (Bp.x + Tp.x) / 2, y: (Bp.y + Tp.y) / 2 };
  return (
    <Panel h={yb + 12} aria={aria} className={className}>
      {wall && <rect x={x0 - 5} y={2} width={5} height={r3(yb - 2)} fill="#334155" />}
      {wall && <line x1={x0 - 10} y1={r3(yb)} x2={116} y2={r3(yb)} stroke={MUTED} strokeWidth={0.8} />}
      <polygon points={`${r3(C.x)},${r3(C.y)} ${r3(Bp.x)},${r3(Bp.y)} ${r3(Tp.x)},${r3(Tp.y)}`} fill={I} fillOpacity={wall ? 0.08 : 0.18} stroke={LINE} strokeWidth={0.6} />
      <Seg p={Bp} q={Tp} color={A} w={wall ? 1.6 : 1.1} />
      <RightMark p={C} a1={0} a2={90} size={4} />
      <Label x={x0 + W / 2} y={yb + 8} color={I}>{labels.base}</Label>
      <Label x={x0 - (wall ? 7 : 3)} y={yb - H / 2 + 2} color={E} anchor="end">{labels.height}</Label>
      <Label x={hm.x + 3} y={hm.y - 2} color={A} anchor="start">{labels.hyp}</Label>
    </Panel>
  );
};

/** Bars to scale: a² and b² end to end against c². Equal lengths mean a right angle. */
export const SquareSumBars = ({ a, b, c, className }: { a: number; b: number; c: number; className?: string }) => {
  const total = Math.max(a * a + b * b, c * c);
  const s = 96 / total;
  const x0 = 12;
  const right = a * a + b * b === c * c;
  return (
    <Panel h={52} className={className} aria={`Two bars drawn to scale. The top bar is ${a * a} plus ${b * b}, which is ${a * a + b * b}. The bottom bar is ${c * c}. ${right ? 'They are the same length, so the triangle is right-angled.' : 'They are different lengths, so the triangle is not right-angled.'}`}>
      <rect x={x0} y={12} width={r3(a * a * s)} height={12} fill={I} fillOpacity={0.5} stroke={I} strokeWidth={0.8} />
      <rect x={r3(x0 + a * a * s)} y={12} width={r3(b * b * s)} height={12} fill={E} fillOpacity={0.5} stroke={E} strokeWidth={0.8} />
      <rect x={x0} y={30} width={r3(c * c * s)} height={12} fill={A} fillOpacity={0.45} stroke={A} strokeWidth={0.8} />
      {a * a * s < 26 ? (
        <Label x={x0} y={9} size={5.6} color={I} anchor="start">{`${a}² = ${a * a}`}</Label>
      ) : (
        <Label x={x0 + (a * a * s) / 2} y={20.2} size={5.6}>{`${a}² = ${a * a}`}</Label>
      )}
      <Label x={x0 + a * a * s + (b * b * s) / 2} y={20.2} size={5.6}>{`${b}² = ${b * b}`}</Label>
      <Label x={x0 + (c * c * s) / 2} y={38.2} size={5.6}>{`${c}² = ${c * c}`}</Label>
      <Label x={60} y={49} size={5.2} color={right ? E : R}>{right ? `${a * a} + ${b * b} = ${c * c}: right-angled` : `${a * a} + ${b * b} ≠ ${c * c}`}</Label>
    </Panel>
  );
};
