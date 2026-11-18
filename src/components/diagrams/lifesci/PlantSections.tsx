import { Panel, PICTURE_COLORS } from '../maths/Grade7Pictures';
import { r3 } from '../round';
import { RINGS } from './plants10';

/** Plan diagrams of dicot plant anatomy (circles drawn to show where each tissue lies), and the annual rings of a tree. All text is a label. */
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const { indigo: I, green: E, amber: A, rose: R } = PICTURE_COLORS;
const T = ({ x, y, children, anchor = 'middle', color = LINE, size = 3.8 }: { x: number; y: number; children: React.ReactNode; anchor?: 'start' | 'middle' | 'end'; color?: string; size?: number }) => (
  <text x={r3(x)} y={r3(y)} textAnchor={anchor} fontSize={size} fontWeight={800} fill={color}>{children}</text>
);

/** Plan of a dicot root: epidermis with root hairs, cortex, and xylem in the centre with phloem between its arms. */
export const RootSection = () => (
  <Panel h={66} aria="Plan of a dicot root cut across: an outer epidermis with root hairs, a wide cortex, and in the centre a star-shaped xylem with phloem between its arms.">
    <circle cx={42} cy={33} r={27} fill="none" stroke={E} strokeWidth={1.4} />
    <circle cx={42} cy={33} r={23} fill={E} fillOpacity={0.18} stroke={E} strokeWidth={0.5} />
    {Array.from({ length: 16 }, (_, i) => {
      const a = (i / 16) * Math.PI * 2;
      return <line key={i} x1={r3(42 + Math.cos(a) * 27)} y1={r3(33 + Math.sin(a) * 27)} x2={r3(42 + Math.cos(a) * 31)} y2={r3(33 + Math.sin(a) * 31)} stroke={E} strokeWidth={0.6} />;
    })}
    <circle cx={42} cy={33} r={10} fill="none" stroke={MUTED} strokeWidth={0.6} />
    {[0, 90, 180, 270].map((deg) => {
      const a = (deg * Math.PI) / 180;
      return <line key={deg} x1={42} y1={33} x2={r3(42 + Math.cos(a) * 8)} y2={r3(33 + Math.sin(a) * 8)} stroke={I} strokeWidth={3} strokeLinecap="round" />;
    })}
    {[45, 135, 225, 315].map((deg) => {
      const a = (deg * Math.PI) / 180;
      return <circle key={deg} cx={r3(42 + Math.cos(a) * 6)} cy={r3(33 + Math.sin(a) * 6)} r={2} fill={A} />;
    })}
    <line x1={72} y1={12} x2={58} y2={14} stroke={MUTED} strokeWidth={0.3} />
    <T x={74} y={13} anchor="start" size={3.4}>root hairs</T>
    <line x1={72} y1={28} x2={64} y2={28} stroke={MUTED} strokeWidth={0.3} />
    <T x={74} y={29} anchor="start" size={3.4}>cortex</T>
    <line x1={72} y1={44} x2={47} y2={36} stroke={MUTED} strokeWidth={0.3} />
    <T x={74} y={45} anchor="start" size={3.4} color={I}>xylem</T>
    <line x1={72} y1={56} x2={47} y2={38} stroke={MUTED} strokeWidth={0.3} />
    <T x={74} y={57} anchor="start" size={3.4} color={A}>phloem</T>
  </Panel>
);

/** Plan of a dicot stem: epidermis, cortex, a ring of vascular bundles (xylem inside, phloem outside) and pith in the centre. */
export const StemSection = () => (
  <Panel h={66} aria="Plan of a dicot stem cut across: an outer epidermis, a cortex, a ring of vascular bundles each with xylem on the inside and phloem on the outside, and pith in the centre.">
    <circle cx={42} cy={33} r={27} fill={E} fillOpacity={0.15} stroke={E} strokeWidth={1.2} />
    <circle cx={42} cy={33} r={10} fill={MUTED} fillOpacity={0.25} />
    {Array.from({ length: 8 }, (_, i) => {
      const a = (i / 8) * Math.PI * 2;
      const cx = 42 + Math.cos(a) * 17;
      const cy = 33 + Math.sin(a) * 17;
      return (
        <g key={i}>
          <circle cx={r3(cx)} cy={r3(cy)} r={4.3} fill={A} fillOpacity={0.7} />
          <circle cx={r3(42 + Math.cos(a) * 15.2)} cy={r3(33 + Math.sin(a) * 15.2)} r={2.6} fill={I} fillOpacity={0.9} />
        </g>
      );
    })}
    <T x={74} y={13} anchor="start" size={3.4}>epidermis</T>
    <T x={74} y={25} anchor="start" size={3.4}>cortex</T>
    <T x={74} y={37} anchor="start" size={3.4} color={A}>phloem (outside)</T>
    <T x={74} y={47} anchor="start" size={3.4} color={I}>xylem (inside)</T>
    <T x={74} y={57} anchor="start" size={3.4} color={MUTED}>pith (centre)</T>
  </Panel>
);

/** The growth rings of a trunk, drawn to scale from the ring widths (in mm). */
export const AnnualRings = () => {
  const total = RINGS.reduce((a, b) => a + b, 0);
  const scale = 28 / total;
  let r = 0;
  const circles = RINGS.map((w, i) => {
    r += w * scale;
    return { r, i, w };
  });
  return (
    <Panel h={66} aria={`Annual rings of a tree trunk, drawn to scale: ${RINGS.length} rings, with widths in millimetres from the centre outwards of ${RINGS.join(', ')}. A wide ring shows a good growing year and a narrow ring a poor one.`}>
      {[...circles].reverse().map((c) => (
        <circle key={c.i} cx={36} cy={33} r={r3(c.r)} fill={c.i % 2 === 0 ? '#a16207' : '#ca8a04'} fillOpacity={0.55} stroke="#0f172a" strokeWidth={0.3} />
      ))}
      <T x={72} y={14} anchor="start" size={3.5}>{`${RINGS.length} rings = ${RINGS.length} years`}</T>
      <T x={72} y={28} anchor="start" size={3.4} color={E}>wide ring: good year</T>
      <T x={72} y={40} anchor="start" size={3.4} color={R}>narrow ring: poor year</T>
      <T x={72} y={54} anchor="start" size={3.4} color={MUTED}>centre = first year</T>
    </Panel>
  );
};
