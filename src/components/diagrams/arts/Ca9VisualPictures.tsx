import { r3 } from '../round';
import { gridEnlarge, hatchOffsets, layerRects, mirrorX, onePointBox, ridgeColours, scalePoint, twoPointBox, valueScale, wallSpacing } from './ca9-visual-helpers';
import type { Pt } from './ca9-visual-helpers';

/**
 * Pictures for the Grade 9 Visual Arts lessons, in the style of the other lesson pictures: a dark
 * panel, a 120-unit-wide viewBox, at most six named labels, an aria description on every picture.
 * Positions come from ca9-visual-helpers.ts, so the drawings obey the rules the slides teach.
 */

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

const T = ({ x, y, children, size = 5, fill = LINE, anchor = 'middle', weight = 800 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>
    {children}
  </text>
);

const pts = (ps: readonly Pt[]) => ps.map((p) => `${r3(p.x)},${r3(p.y)}`).join(' ');

// ---------- one-point perspective ----------

export const OnePointPicture = () => {
  const vp = { x: 60, y: 28 };
  const box = onePointBox({ x: 36, y: 40, w: 44, h: 26 }, vp, 0.42);
  return (
    <Panel h={78} aria="A box drawn in one-point perspective. A horizon line crosses the page and every receding edge of the box points to one vanishing point on it. The back face is smaller than the front face.">
      <line x1={4} y1={vp.y} x2={116} y2={vp.y} stroke={MUTED} strokeWidth={0.7} />
      {box.front.map((c, i) => (
        <line key={i} x1={c.x} y1={c.y} x2={vp.x} y2={vp.y} stroke={AMBER} strokeWidth={0.5} strokeDasharray="1.6 1.6" />
      ))}
      <polygon points={pts(box.back)} fill={BLUE} fillOpacity={0.18} stroke={BLUE} strokeWidth={1} />
      {box.rays.map((r, i) => (
        <line key={i} x1={r.from.x} y1={r.from.y} x2={r.to.x} y2={r.to.y} stroke={LINE} strokeWidth={1} />
      ))}
      <polygon points={pts(box.front)} fill={GREEN} fillOpacity={0.25} stroke={LINE} strokeWidth={1.2} />
      <circle cx={vp.x} cy={vp.y} r={1.8} fill={AMBER} />
      <T x={vp.x} y={vp.y - 5} size={5} fill={AMBER}>Vanishing point</T>
      <T x={6} y={vp.y - 3} anchor="start" size={4.6} fill={MUTED}>Horizon line</T>
      <T x={58} y={75} size={4.8} fill={GREEN}>Front face</T>
    </Panel>
  );
};

// ---------- two-point perspective ----------

export const TwoPointPicture = () => {
  const vpL = { x: 5, y: 30 };
  const vpR = { x: 115, y: 30 };
  const b = twoPointBox({ x: 60, top: 40, bottom: 68 }, vpL, vpR, 0.4, 0.4);
  return (
    <Panel h={78} aria="A box seen from its corner, drawn in two-point perspective. The nearest vertical edge is in the middle. The top and bottom edges of each side slope towards a left and a right vanishing point on the horizon line.">
      <line x1={2} y1={vpL.y} x2={118} y2={vpL.y} stroke={MUTED} strokeWidth={0.7} />
      {[b.near.top, b.near.bottom].flatMap((p, i) => [
        <line key={`l${i}`} x1={p.x} y1={p.y} x2={vpL.x} y2={vpL.y} stroke={AMBER} strokeWidth={0.5} strokeDasharray="1.6 1.6" />,
        <line key={`r${i}`} x1={p.x} y1={p.y} x2={vpR.x} y2={vpR.y} stroke={AMBER} strokeWidth={0.5} strokeDasharray="1.6 1.6" />,
      ])}
      <polygon points={pts([b.near.top, b.left.top, b.left.bottom, b.near.bottom])} fill={BLUE} fillOpacity={0.25} stroke={LINE} strokeWidth={1.1} />
      <polygon points={pts([b.near.top, b.right.top, b.right.bottom, b.near.bottom])} fill={GREEN} fillOpacity={0.25} stroke={LINE} strokeWidth={1.1} />
      <circle cx={vpL.x} cy={vpL.y} r={1.8} fill={AMBER} />
      <circle cx={vpR.x} cy={vpR.y} r={1.8} fill={AMBER} />
      <T x={vpL.x + 2} y={vpL.y - 4} anchor="start" size={4.8} fill={AMBER}>VP 1</T>
      <T x={vpR.x - 2} y={vpR.y - 4} anchor="end" size={4.8} fill={AMBER}>VP 2</T>
      <T x={60} y={76} size={4.8} fill={LINE}>Nearest edge</T>
    </Panel>
  );
};

// ---------- the grid method ----------

export const GridEnlargePicture = ({ cell = 6, factor = 3 }: { cell?: number; factor?: number }) => {
  const g = gridEnlarge(4, 3, cell, factor);
  const small: Pt[] = [{ x: 0.5, y: 3 }, { x: 0.5, y: 1.5 }, { x: 2, y: 0.5 }, { x: 3.5, y: 1.5 }, { x: 3.5, y: 3 }].map((p) => ({ x: p.x * cell, y: p.y * cell }));
  const big = small.map((p) => scalePoint(p, factor));
  const Grid = ({ ox, oy, size, shape }: { ox: number; oy: number; size: number; shape: readonly Pt[] }) => (
    <g>
      {Array.from({ length: g.cols + 1 }, (_, i) => (
        <line key={`v${i}`} x1={ox + i * size} y1={oy} x2={ox + i * size} y2={oy + g.rows * size} stroke={MUTED} strokeWidth={0.4} />
      ))}
      {Array.from({ length: g.rows + 1 }, (_, i) => (
        <line key={`h${i}`} x1={ox} y1={oy + i * size} x2={ox + g.cols * size} y2={oy + i * size} stroke={MUTED} strokeWidth={0.4} />
      ))}
      <polygon points={pts(shape.map((p) => ({ x: ox + p.x, y: oy + p.y })))} fill={GREEN} fillOpacity={0.3} stroke={GREEN} strokeWidth={1} strokeLinejoin="round" />
    </g>
  );
  return (
    <Panel h={74} aria={`The grid method. A small drawing of a house on a grid of ${g.cols} by ${g.rows} squares is copied onto a grid with the same number of squares, each ${factor} times as wide, so the drawing is ${factor} times as big.`}>
      <Grid ox={5} oy={38} size={g.cell} shape={small} />
      <Grid ox={36} oy={6} size={g.bigCell} shape={big} />
      <T x={5 + g.width / 2} y={34} size={4.8} fill={BLUE}>Small grid</T>
      <T x={36 + g.bigWidth / 2} y={g.bigHeight + 14} size={4.8} fill={AMBER}>Enlarged grid</T>
    </Panel>
  );
};

// ---------- value and shading ----------

export const ValueShadingPicture = () => {
  const tones = valueScale(5);
  const hatch = hatchOffsets(30, 18, 4);
  const sw = (x: number, id: string, cross: boolean) => (
    <g>
      <clipPath id={id}>
        <rect x={x} y={40} width={30} height={18} />
      </clipPath>
      <rect x={x} y={40} width={30} height={18} fill="#f1f5f9" />
      <g clipPath={`url(#${id})`} stroke="#1e293b" strokeWidth={0.7}>
        {hatch.map((o) => (
          <line key={`a${o}`} x1={x + o} y1={40} x2={x + o - 18} y2={58} />
        ))}
        {cross && hatch.map((o) => <line key={`b${o}`} x1={x + o - 18} y1={40} x2={x + o} y2={58} />)}
      </g>
    </g>
  );
  return (
    <Panel h={70} aria="Shading. A strip of five squares goes from a light tone to a dark tone. Below it, one swatch is shaded with hatching, a single set of parallel lines, and another with cross-hatching, two sets of lines crossing.">
      {tones.map((c, i) => (
        <rect key={i} x={10 + i * 20} y={8} width={19} height={16} fill={c} stroke={MUTED} strokeWidth={0.3} />
      ))}
      <T x={10} y={32} anchor="start" size={4.8}>light</T>
      <T x={109} y={32} anchor="end" size={4.8}>dark</T>
      <T x={60} y={32} size={4.8} fill={AMBER}>value</T>
      {sw(18, 'cv9-hatch', false)}
      {sw(72, 'cv9-cross', true)}
      <T x={33} y={66} size={4.8} fill={GREEN}>Hatching</T>
      <T x={87} y={66} size={4.8} fill={GREEN}>Cross-hatching</T>
    </Panel>
  );
};

// ---------- atmospheric perspective ----------

export const AtmosphericPicture = () => {
  const [near, mid, far] = ridgeColours(3);
  return (
    <Panel h={64} aria="Three rows of hills. The nearest row is dark and clear. The middle row is lighter. The furthest row is pale and hazy, which makes the scene look deep.">
      <polygon points="0,30 18,18 36,28 58,14 80,26 100,16 120,28 120,40 0,40" fill={far} />
      <polygon points="0,42 22,28 44,40 70,26 96,38 120,30 120,52 0,52" fill={mid} />
      <polygon points="0,64 0,50 24,44 52,54 84,42 120,52 120,64" fill={near} />
      <T x={116} y={10} anchor="end" size={4.8} fill={LINE}>Far: pale and hazy</T>
      <T x={6} y={61} anchor="start" size={4.8} fill="#ecfdf5">Near: dark and clear</T>
    </Panel>
  );
};

// ---------- relief printing ----------

export const ReliefPrintPicture = () => {
  const block: Pt[] = [{ x: 14, y: 12 }, { x: 44, y: 12 }, { x: 44, y: 20 }, { x: 22, y: 20 }, { x: 22, y: 28 }, { x: 38, y: 28 }, { x: 38, y: 35 }, { x: 22, y: 35 }, { x: 22, y: 48 }, { x: 14, y: 48 }];
  const print = mirrorX(block, 60);
  return (
    <Panel h={64} aria="A carved block shaped like the letter F on the left, and its print on the right. The print is the mirror image of the block, so the letter faces the other way.">
      <rect x={8} y={7} width={42} height={46} rx={2} fill="#7c5a3c" fillOpacity={0.55} />
      <polygon points={pts(block)} fill="#d6b38a" />
      <line x1={60} y1={4} x2={60} y2={52} stroke={MUTED} strokeWidth={0.5} strokeDasharray="2 2" />
      <rect x={70} y={7} width={42} height={46} rx={2} fill="#f8fafc" />
      <polygon points={pts(print)} fill="#1e293b" />
      <T x={29} y={61} size={4.8} fill="#d6b38a">Carved block</T>
      <T x={91} y={61} size={4.8} fill={GREEN}>Print (reversed)</T>
    </Panel>
  );
};

// ---------- symbols ----------

export const SymbolCards = () => (
  <Panel h={50} aria="Three picture symbols with what they can stand for: a heart can stand for love, scales can stand for justice, and a tree can stand for growth.">
    {[
      { x: 6, name: 'love', color: ROSE },
      { x: 44, name: 'justice', color: BLUE },
      { x: 82, name: 'growth', color: GREEN },
    ].map((c, i) => (
      <g key={c.name}>
        <rect x={c.x} y={5} width={32} height={40} rx={4} fill={c.color} fillOpacity={0.16} stroke={c.color} strokeWidth={0.8} />
        {i === 0 && <path d={`M${c.x + 16} 30 C${c.x + 4} 20 ${c.x + 8} 11 ${c.x + 16} 17 C${c.x + 24} 11 ${c.x + 28} 20 ${c.x + 16} 30Z`} fill={c.color} />}
        {i === 1 && (
          <g stroke={c.color} strokeWidth={1.2} fill="none" strokeLinecap="round">
            <line x1={c.x + 16} y1={11} x2={c.x + 16} y2={30} />
            <line x1={c.x + 7} y1={15} x2={c.x + 25} y2={15} />
            <path d={`M${c.x + 7} 15 L${c.x + 4} 23 H${c.x + 10} Z M${c.x + 25} 15 L${c.x + 22} 23 H${c.x + 28} Z`} fill={c.color} fillOpacity={0.5} />
          </g>
        )}
        {i === 2 && (
          <g>
            <rect x={c.x + 14.5} y={22} width={3} height={9} fill="#a16207" />
            <circle cx={c.x + 16} cy={17} r={8} fill={c.color} />
          </g>
        )}
        <T x={c.x + 16} y={40} size={5.4} fill={c.color}>{c.name}</T>
      </g>
    ))}
  </Panel>
);

// ---------- mixed media ----------

export const LayerStackPicture = () => {
  const layers = layerRects(3, 54, 30, 12);
  const fills = ['#f5ecd7', '#60a5fa', '#fb7185'];
  const names = ['Paper', 'Paint', 'Fabric'];
  return (
    <Panel h={64} aria="Three layers stacked and overlapping in one artwork: a layer of paper, a layer of paint and a layer of fabric. Mixed media combines several materials in one work.">
      {layers.map((r, i) => (
        <g key={names[i]}>
          <rect x={r.x + 14} y={r.y + 6} width={r.w} height={r.h} rx={2} fill={fills[i]} fillOpacity={i === 0 ? 1 : 0.85} stroke={LINE} strokeWidth={0.5} />
          <T x={r.x + 14 + 3} y={r.y + 6 + 7} anchor="start" size={5} fill={i === 0 ? '#1e293b' : '#0f172a'}>{names[i]}</T>
        </g>
      ))}
    </Panel>
  );
};

// ---------- hanging an exhibition ----------

export const GalleryWallPicture = ({ wall = 300, widths = [60, 90, 60] }: { wall?: number; widths?: readonly number[] }) => {
  const sp = wallSpacing(wall, widths);
  const k = 100 / wall; // drawing units per wall unit
  const top = 12;
  const x = (i: number) => 10 + sp.xs[i] * k;
  return (
    <Panel h={57} aria="A gallery wall with three framed works hung at the same height with equal gaps between them and at both ends. A small label sits under each work.">
      <rect x={10} y={4} width={100} height={40} rx={2} fill="#e2e8f0" />
      {widths.map((wd, i) => (
        <g key={i}>
          <rect x={x(i)} y={top} width={wd * k} height={22} fill={[BLUE, GREEN, AMBER][i % 3]} stroke="#0f172a" strokeWidth={1.2} />
          <rect x={x(i) + (wd * k) / 2 - 4} y={top + 25} width={8} height={3} fill="#475569" />
        </g>
      ))}
      <T x={60} y={53} size={4.8} fill={LINE}>Equal gaps, labels under the work</T>
    </Panel>
  );
};
