import { r3 } from '../round';
import {
  LETTER_F, WHEEL, alternate, complementOf, crossHatching, depthLayers, hang, hatching, lineSamples, mirrorX, repeatX, shade, wheelAngle,
  stipple, tint, valueScale, wheelColor,
} from './ca8-visual-helpers';

/**
 * Pictures for the Grade 8 Visual Arts lessons: a dark panel, a 120-unit-wide viewBox, and at most
 * six named labels per picture. Every colour, mark and position is computed in ca8-visual-helpers.ts,
 * so the picture matches the words beside it. Each picture has an aria description.
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

const T = ({ x, y, children, size = 4.8, fill = LINE, anchor = 'middle', weight = 800 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>
    {children}
  </text>
);

const pts = (ps: readonly (readonly [number, number])[], dx = 0, dy = 0, k = 1): string => ps.map(([x, y]) => `${r3(dx + x * k)},${r3(dy + y * k)}`).join(' ');

// ---------- five kinds of line ----------

export const LINE_MEANINGS = [
  { key: 'horizontal', label: 'horizontal: calm, still', color: BLUE },
  { key: 'vertical', label: 'vertical: strong, upright', color: GREEN },
  { key: 'diagonal', label: 'diagonal: movement', color: AMBER },
  { key: 'curved', label: 'curved: flowing', color: ROSE },
  { key: 'zigzag', label: 'zigzag: energy', color: BLUE },
] as const;

export const LineTypes = () => {
  const s = lineSamples(36, 12);
  return (
    <Panel h={76} aria="Five lines, each with a word for the feeling it gives: a horizontal line is calm and still, a vertical line is strong and upright, a diagonal line suggests movement, a curved line is flowing, and a zigzag line has energy.">
      {LINE_MEANINGS.map((m, i) => (
        <g key={m.key}>
          <polyline points={pts(s[m.key], 6, 4 + i * 14)} fill="none" stroke={m.color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
          <T x={50} y={13 + i * 14} anchor="start" size={4.8}>{m.label}</T>
        </g>
      ))}
    </Panel>
  );
};

// ---------- shape, form and value ----------

export const ShapeFormValue = ({ base = '#e76f51', steps = 7 }: { base?: string; steps?: number }) => {
  const greys = valueScale(steps);
  const w = 108 / steps;
  return (
    <Panel h={74} aria="On the left a flat circle, a shape with only two dimensions. In the middle a circle shaded from a light tint to a dark shade so it looks like a solid ball, a form. Below, a strip of grey squares from light to dark shows value.">
      <defs>
        <radialGradient id="c8v-ball" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor={tint(base, 0.7)} />
          <stop offset="45%" stopColor={base} />
          <stop offset="100%" stopColor={shade(base, 0.6)} />
        </radialGradient>
      </defs>
      <circle cx={30} cy={24} r={15} fill={base} />
      <T x={30} y={48} size={4.6}>shape: flat</T>
      <circle cx={88} cy={24} r={15} fill="url(#c8v-ball)" />
      <T x={88} y={48} size={4.6}>form: looks solid</T>
      {greys.map((g, i) => (
        <rect key={i} x={r3(6 + i * w)} y={54} width={r3(w)} height={8} fill={g} />
      ))}
      <T x={6} y={70} anchor="start" size={4.4} fill={MUTED}>light</T>
      <T x={114} y={70} anchor="end" size={4.4} fill={MUTED}>dark</T>
    </Panel>
  );
};

// ---------- texture marks ----------

export const TextureMarks = () => {
  const W = 32;
  const H = 30;
  const patches = [
    { label: 'hatching', content: hatching(W, H, 4).map((s, i) => <line key={i} x1={s[0]} y1={s[1]} x2={s[2]} y2={s[3]} stroke={LINE} strokeWidth={0.7} />) },
    { label: 'cross-hatching', content: crossHatching(W, H, 4).map((s, i) => <line key={i} x1={s[0]} y1={s[1]} x2={s[2]} y2={s[3]} stroke={LINE} strokeWidth={0.7} />) },
    { label: 'stippling', content: stipple(W, H, [4, 8, 16, 28]).map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r={0.7} fill={LINE} />) },
  ];
  return (
    <Panel h={52} aria="Three small squares showing three ways to draw texture. Hatching is a set of parallel lines. Cross-hatching has a second set of lines crossing the first, so it looks darker. Stippling is made of dots, and more dots look darker.">
      {patches.map((p, i) => {
        const x = 4 + i * 39;
        return (
          <g key={p.label}>
            <rect x={x} y={5} width={W} height={H} fill="none" stroke={MUTED} strokeWidth={0.5} />
            <svg x={x} y={5} width={W} height={H} viewBox={`0 0 ${W} ${H}`} overflow="hidden">{p.content}</svg>
            <T x={x + W / 2} y={44} size={4.4}>{p.label}</T>
          </g>
        );
      })}
    </Panel>
  );
};

// ---------- colour wheel ----------

const polar = (cx: number, cy: number, r: number, deg: number): [number, number] => [r3(cx + r * Math.sin((deg * Math.PI) / 180)), r3(cy - r * Math.cos((deg * Math.PI) / 180))];

export const ColourWheel = () => {
  const cx = 60;
  const cy = 47;
  const R = 33;
  const r = 12;
  return (
    <Panel h={96} aria="A twelve-colour wheel with red at the top, going clockwise through orange, yellow, green, blue and violet. The upper right, red to yellow, is the warm side and the left, green to violet, is the cool side. A dashed line joins orange to blue, which are opposite each other, so they are complementary colours. Red, yellow and blue are labelled as the primary colours.">
      {WHEEL.map((_, i) => {
        const a0 = i * 30 - 15;
        const a1 = i * 30 + 15;
        const [x0, y0] = polar(cx, cy, R, a0);
        const [x1, y1] = polar(cx, cy, R, a1);
        const [x2, y2] = polar(cx, cy, r, a1);
        const [x3, y3] = polar(cx, cy, r, a0);
        return <path key={i} d={`M${x0} ${y0} A${R} ${R} 0 0 1 ${x1} ${y1} L${x2} ${y2} A${r} ${r} 0 0 0 ${x3} ${y3} Z`} fill={wheelColor(i)} stroke={INK} strokeWidth={0.6} />;
      })}
      {(() => {
        const [ax, ay] = polar(cx, cy, R, 2 * 30);
        const [bx, by] = polar(cx, cy, R, complementOf(2) * 30);
        return <line x1={ax} y1={ay} x2={bx} y2={by} stroke="#ffffff" strokeWidth={0.9} strokeDasharray="2 1.5" />;
      })()}
      {(() => {
        const label = (i: number, text: string, color: string) => {
          const deg = wheelAngle(i);
          const [x, y] = polar(cx, cy, R + 4, deg);
          const anchor = deg === 0 ? 'middle' : deg < 180 ? 'start' : 'end';
          return <T x={x} y={deg === 0 ? y - 1 : y + 1.5} anchor={anchor} size={4.6} fill={color}>{text}</T>;
        };
        return (
          <>
            {label(0, 'red', wheelColor(0))}
            {label(4, 'yellow', wheelColor(4))}
            {label(8, 'blue', wheelColor(8))}
            {label(2, 'warm side', MUTED)}
            {label(10, 'cool side', MUTED)}
          </>
        );
      })()}
      <T x={cx} y={94} size={4.4} fill={LINE}>dashed line: complementary colours</T>
    </Panel>
  );
};

// ---------- foreground, middle ground, background ----------

export const DepthLayers = () => {
  const layers = depthLayers(60, 14);
  const colors = [shade('#2a9d8f', 0.2), '#2a9d8f', tint('#2a9d8f', 0.55)];
  const xs = [28, 62, 94];
  return (
    <Panel h={84} aria="Three trees stepping up the picture from left to right. The biggest, darkest tree is lowest on the page: the foreground. A smaller tree sits higher: the middle ground. The smallest, palest tree is highest: the background. Things further away look smaller, higher and paler.">
      <rect x={0} y={0} width={120} height={84} fill={tint('#0f172a', 0.12)} />
      {layers.map((l, i) => {
        const k = l.scale;
        const trunkH = 14 * k;
        const crown = 22 * k;
        const x = xs[i];
        return (
          <g key={l.name}>
            <rect x={r3(x - 2.5 * k)} y={r3(l.base - trunkH)} width={r3(5 * k)} height={r3(trunkH)} fill={shade('#a47148', i === 0 ? 0.1 : 0)} />
            <polygon points={`${x},${r3(l.base - trunkH - crown)} ${r3(x - 11 * k)},${r3(l.base - trunkH + 2)} ${r3(x + 11 * k)},${r3(l.base - trunkH + 2)}`} fill={colors[i]} />
            <T x={x} y={l.base + 7} size={4.4} fill={LINE}>{l.name}</T>
          </g>
        );
      })}
      <T x={6} y={80} anchor="start" size={4.4} fill={MUTED}>nearer: bigger, lower, darker</T>
    </Panel>
  );
};

// ---------- pattern and rhythm ----------

export const PatternStrip = () => {
  const xs = repeatX(7, 8, 7, 8);
  const alt = alternate(7);
  return (
    <Panel h={58} aria="Two rows of shapes. In the top row the same circle is repeated again and again with equal gaps, which makes a pattern. In the bottom row a circle and a triangle alternate, which makes a pattern with rhythm.">
      <T x={6} y={10} anchor="start" size={4.8} fill={BLUE}>repetition: the same shape</T>
      {xs.map((x, i) => (
        <circle key={i} cx={x + 4} cy={22} r={4} fill={BLUE} />
      ))}
      <T x={6} y={40} anchor="start" size={4.8} fill={GREEN}>alternating: circle, triangle</T>
      {xs.map((x, i) =>
        alt[i] === 'A' ? <circle key={i} cx={x + 4} cy={52} r={4} fill={GREEN} /> : <polygon key={i} points={`${x + 4},${48} ${x},${56} ${x + 8},${56}`} fill={AMBER} />,
      )}
    </Panel>
  );
};

// ---------- contrast and focal point ----------

export const ContrastFocal = () => (
  <Panel h={66} aria="Five small pale grey circles and one big bright orange circle. The big orange circle stands out because it contrasts in size and colour, so it is where the eye goes first: the focal point.">
    {[[14, 14], [30, 44], [50, 20], [96, 14], [104, 46]].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r={4} fill="#64748b" />
    ))}
    <circle cx={72} cy={36} r={14} fill="#f97316" />
    <T x={114} y={60} anchor="end" size={4.8} fill={AMBER}>focal point</T>
    <T x={6} y={60} anchor="start" size={4.4} fill={MUTED}>contrast: size and colour</T>
  </Panel>
);

// ---------- positive and negative space ----------

export const PositiveNegative = () => (
  <Panel h={68} aria="A white vase shape on a dark rectangle. The vase is the positive space, the object itself. The dark area around it is the negative space, the empty area around the object.">
    <rect x={14} y={6} width={92} height={46} rx={3} fill="#334155" />
    <path d="M52 12 H68 C68 20 76 24 76 34 C76 44 70 48 60 48 C50 48 44 44 44 34 C44 24 52 20 52 12 Z" fill={LINE} />
    <T x={91} y={32} size={4.6} fill={LINE}>negative</T>
    <T x={91} y={37.6} size={4.6} fill={LINE}>space</T>
    <T x={60} y={63} size={4.6} fill={AMBER}>the vase is positive space</T>
  </Panel>
);

// ---------- a print is a mirror image ----------

export const PrintMirror = () => {
  const k = 2.6;
  const block = pts(LETTER_F, 10, 8, k);
  const print = pts(mirrorX(LETTER_F, 5), 78, 8, k);
  return (
    <Panel h={62} aria="On the left a printing block with the letter F carved the right way round, with an arrow pointing to the right. On the right the printed result, where the F is reversed like its reflection in a mirror. A print is the mirror image of the block.">
      <rect x={6} y={4} width={34} height={44} rx={2} fill="#7c5a3a" />
      <polyline points={block} fill="none" stroke="#f1e3d3" strokeWidth={1.8} strokeLinejoin="round" strokeLinecap="round" />
      <path d="M46 26 H70" stroke={LINE} strokeWidth={1} />
      <path d="M66 22 L71 26 L66 30" fill="none" stroke={LINE} strokeWidth={1} />
      <rect x={74} y={4} width={34} height={44} rx={2} fill="#f8fafc" />
      <polyline points={print} fill="none" stroke="#1e293b" strokeWidth={1.8} strokeLinejoin="round" strokeLinecap="round" />
      <T x={23} y={57} size={4.6}>block</T>
      <T x={91} y={57} size={4.6}>print: reversed</T>
    </Panel>
  );
};

// ---------- symbols ----------

export const SymbolGrid = () => (
  <Panel h={54} aria="Three symbols. A heart can stand for love. A sun can stand for life and energy. Two linked rings can stand for unity or being joined together.">
    <path d="M20 22 C20 14 8 14 8 22 C8 29 20 36 20 36 C20 36 32 29 32 22 C32 14 20 14 20 22 Z" fill={ROSE} transform="translate(0 0)" />
    <circle cx={60} cy={24} r={7} fill={AMBER} />
    {Array.from({ length: 8 }, (_, i) => {
      const [x1, y1] = polar(60, 24, 10, i * 45);
      const [x2, y2] = polar(60, 24, 14, i * 45);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={AMBER} strokeWidth={1.4} strokeLinecap="round" />;
    })}
    <circle cx={95} cy={24} r={8} fill="none" stroke={BLUE} strokeWidth={2.2} />
    <circle cx={106} cy={24} r={8} fill="none" stroke={GREEN} strokeWidth={2.2} />
    <T x={20} y={46} size={4.6}>love</T>
    <T x={60} y={46} size={4.6}>life, energy</T>
    <T x={100} y={46} size={4.6}>unity</T>
  </Panel>
);

// ---------- rough against smooth (texture contrast) ----------

export const TextureContrast = () => {
  const W = 40;
  const H = 34;
  return (
    <Panel h={60} aria="Two squares side by side. The left one is rough, made of many tiny marks, like rough paper. The right one is smooth, a flat even colour, like smooth paint. Putting them together gives texture contrast.">
      <rect x={10} y={5} width={W} height={H} fill="#a3866a" />
      <svg x={10} y={5} width={W} height={H} viewBox={`0 0 ${W} ${H}`} overflow="hidden">
        {stipple(W, H, [18, 18, 18, 18], 3).map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r={0.8} fill={i % 2 ? '#5c4631' : '#d9c3a6'} />
        ))}
      </svg>
      <rect x={70} y={5} width={W} height={H} fill="#2563eb" />
      <T x={30} y={47} size={4.6}>rough paper</T>
      <T x={90} y={47} size={4.6}>smooth paint</T>
      <T x={60} y={56} size={4.4} fill={AMBER}>texture contrast</T>
    </Panel>
  );
};

// ---------- hanging an exhibition ----------

export const ExhibitionWall = ({ wall, widths }: { wall: number; widths: readonly number[] }) => {
  const h = hang(wall, widths);
  const k = 108 / wall;
  const x = (mm: number) => r3(6 + mm * k);
  return (
    <Panel h={56} aria={`A gallery wall ${wall} millimetres wide with ${widths.length} works hung on one level line at eye level. The gap at each end and between the works is the same, ${h.gap} millimetres.`}>
      <rect x={6} y={4} width={108} height={38} fill="#1e293b" />
      <line x1={6} y1={23} x2={114} y2={23} stroke={MUTED} strokeWidth={0.5} strokeDasharray="2 1.5" />
      {h.xs.map((mm, i) => {
        const w = widths[i] * k;
        return <rect key={i} x={x(mm)} y={r3(23 - w * 0.4)} width={r3(w)} height={r3(w * 0.8)} fill={[BLUE, GREEN, AMBER, ROSE][i % 4]} />;
      })}
      <T x={110} y={38} anchor="end" size={4.2} fill={MUTED}>dashed line: eye level</T>
      <rect x={6} y={46} width={r3(h.gap * k)} height={2.4} fill={AMBER} />
      <T x={r3(6 + h.gap * k + 3)} y={50} anchor="start" size={4.4} fill={AMBER}>equal gaps</T>
      <T x={110} y={54} anchor="end" size={4.4}>wall</T>
    </Panel>
  );
};

