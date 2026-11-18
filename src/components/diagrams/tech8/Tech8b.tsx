import { r3 } from '../round';
import { boxSurfaceArea, iBeamArea, materialSaved, netSheet, rectArea } from './tech8bHelpers';

/** Pictures for the Grade 8 Technology Term 2 lessons. Sizes come from tech8bHelpers.ts. */

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
const big = (x: number) => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const T = ({ x, y, children, size = 4.4, fill = LINE, anchor = 'middle', weight = 700 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>{children}</text>
);

/** The development (net) of an opened box: a row of four side faces with the top and bottom on one side. */
export const NetPicture = ({ l, w, h }: { l: number; w: number; h: number }) => {
  const sheet = netSheet(l, w, h);
  const k = Math.min(100 / sheet.width, 40 / sheet.height);
  const x0 = r3(60 - (sheet.width * k) / 2), y0 = 12;
  const rect = (x: number, y: number, wd: number, ht: number, fill: string, label?: string) => (
    <g key={`${x}-${y}`}>
      <rect x={r3(x0 + x * k)} y={r3(y0 + y * k)} width={r3(wd * k)} height={r3(ht * k)} fill={fill} fillOpacity={0.3} stroke={LINE} strokeWidth={0.6} />
      {label ? <T x={r3(x0 + (x + wd / 2) * k)} y={r3(y0 + (y + ht / 2) * k + 1.4)} size={3.2} fill={LINE} weight={600}>{label}</T> : null}
    </g>
  );
  return (
    <Panel h={68} aria={`The development of an opened box ${l} mm by ${w} mm by ${h} mm. Four side faces are in a row with the top and bottom faces joined above and below one side. The six faces together have an area of ${boxSurfaceArea(l, w, h)} square millimetres.`}>
      <T x={60} y={8} size={4} fill={AMBER}>net (development) of an opened box</T>
      {rect(0, w, l, h, SKY, `${l}×${h}`)}
      {rect(l, w, w, h, GREEN)}
      {rect(l + w, w, l, h, SKY, `${l}×${h}`)}
      {rect(2 * l + w, w, w, h, GREEN)}
      {rect(0, 0, l, w, BLUE, `${l}×${w}`)}
      {rect(0, w + h, l, w, BLUE, `${l}×${w}`)}
      <T x={60} y={58} size={3.6} fill={MUTED} weight={600}>{`narrow faces ${w}×${h}; 6 faces, area ${big(boxSurfaceArea(l, w, h))} mm²`}</T>
      <T x={60} y={65} size={3.4} fill={MUTED} weight={600}>(all sizes in mm)</T>
    </Panel>
  );
};

/** A beam bent by a load: the top is squashed (compression), the bottom is stretched (tension), and the steel bars go at the bottom. */
export const ReinforcedBeam = () => (
  <Panel h={64} aria="A concrete beam supported at both ends with a load in the middle. The beam bends. The top edge is in compression and the bottom edge is in tension. Concrete is weak in tension, so steel reinforcing bars are placed near the bottom of the beam.">
    <path d="M18 22 Q60 30 102 22 V34 Q60 42 18 34 Z" fill={MUTED} fillOpacity={0.35} stroke={LINE} strokeWidth={0.8} />
    <path d="M22 36 Q60 41 98 36" fill="none" stroke={ROSE} strokeWidth={1.6} />
    <path d="M22 37.4 Q60 42.4 98 37.4" fill="none" stroke={ROSE} strokeWidth={1.6} />
    <path d="M60 8 V19 M57 16 L60 19 L63 16" fill="none" stroke={AMBER} strokeWidth={1} />
    <T x={60} y={6} size={3.8} fill={AMBER}>load</T>
    <T x={20} y={19.5} size={3.4} anchor="start" fill={SKY}>top: compression</T>
    <T x={60} y={50} size={3.6} fill={ROSE}>bottom: tension, steel bars here</T>
    <path d="M14 38 L22 38 M98 38 L106 38" stroke={MUTED} strokeWidth={1.2} />
    <T x={60} y={60} size={3.6} fill={MUTED} weight={600}>concrete: strong in compression; steel: strong in tension</T>
  </Panel>
);

/** Cross-sections: a solid bar, an I-beam of the same depth, an angle iron and a T-bar. */
export const SectionShapes = ({ depth, flange, flangeT, web }: { depth: number; flange: number; flangeT: number; web: number }) => {
  const k = 0.2;
  const solid = rectArea(flange, depth), ib = iBeamArea(depth, flange, flangeT, web);
  const dk = depth * k, fk = flange * k, tk = flangeT * k, wk = web * k;
  const y0 = 14;
  return (
    <Panel h={70} aria={`Cross-sections of metal sections. A solid bar ${flange} by ${depth} millimetres has an area of ${solid} square millimetres. An I-beam of the same depth and width has an area of ${ib} square millimetres, so it uses ${materialSaved(solid, ib)} percent less material. An angle iron is shaped like an L and a T-bar like the letter T.`}>
      <rect x={8} y={y0} width={fk} height={dk} fill={MUTED} fillOpacity={0.4} stroke={LINE} strokeWidth={0.7} />
      <T x={r3(8 + fk / 2)} y={y0 + dk + 6} size={3.4} fill={MUTED}>solid bar</T>
      <path d={`M${r3(40)} ${y0} h${fk} v${tk} h${r3(-(fk - wk) / 2)} v${r3(dk - 2 * tk)} h${r3((fk - wk) / 2)} v${tk} h${-fk} v${-tk} h${r3((fk - wk) / 2)} v${r3(-(dk - 2 * tk))} h${r3(-(fk - wk) / 2)} Z`} fill={SKY} fillOpacity={0.4} stroke={LINE} strokeWidth={0.7} />
      <T x={r3(40 + fk / 2)} y={y0 + dk + 6} size={3.4} fill={SKY}>I-beam</T>
      <path d={`M72 ${y0} h${tk} v${r3(dk - tk)} h${r3(fk - tk - 8)} v${tk} h${-r3(fk - 8)} Z`} fill={GREEN} fillOpacity={0.4} stroke={LINE} strokeWidth={0.7} />
      <T x={80} y={y0 + dk + 6} size={3.4} fill={GREEN}>angle iron</T>
      <path d={`M100 ${y0} h14 v${tk} h-${r3(7 - wk / 2)} v${r3(dk - tk)} h${-wk} v${r3(-(dk - tk))} h-${r3(7 - wk / 2)} Z`} fill={AMBER} fillOpacity={0.4} stroke={LINE} strokeWidth={0.7} />
      <T x={107} y={y0 + dk + 6} size={3.4} fill={AMBER}>T-bar</T>
      <T x={60} y={7} size={3.8} fill={LINE}>{`solid bar ${big(solid)} mm², I-beam ${big(ib)} mm²`}</T>
      <T x={60} y={64} size={3.8} fill={GREEN}>{`the I-beam saves ${materialSaved(solid, ib)}% of the material`}</T>
    </Panel>
  );
};
