import { r3 } from './round';

/**
 * Pictures for Natural Sciences Terms 1-2 (Grade 6): ecosystems, habitats, adaptations, the
 * balanced plate, and mixtures. Plain SVG in the dark-panel style used by the other diagrams.
 * Every coordinate is a literal or rounded with r3, so server and browser always agree.
 */

const INK = '#0f172a';
const LIVING = '#86efac';
const NONLIVING = '#7dd3fc';
const SOFT = '#cbd5e1';
const frame = 'mx-auto block w-full rounded-2xl';
const style = (maxWidth = '34rem') => ({ background: INK, fontFamily: 'inherit', maxWidth }) as const;

/** The widely taught healthy plate: half vegetables and fruit, a quarter starch, a quarter protein. */
export const PLATE = [
  { name: 'Vegetables and fruit', job: 'vitamins, minerals, fibre', share: 50, color: '#4ade80' },
  { name: 'Carbohydrates', job: 'energy', share: 25, color: '#fbbf24' },
  { name: 'Proteins', job: 'growth and repair', share: 25, color: '#fb7185' },
] as const;

/** Fats and oils are a small extra beside the plate, not a part of it. */
export const PLATE_EXTRA = { name: 'Fats and oils', job: 'a little, to store energy', color: '#a78bfa' } as const;

const polar = (cx: number, cy: number, r: number, deg: number) => {
  const a = (deg * Math.PI) / 180;
  return { x: r3(cx + r * Math.sin(a)), y: r3(cy - r * Math.cos(a)) };
};

/** Pie wedges from percentage shares, clockwise from the top. */
export const wedges = (shares: readonly number[], cx: number, cy: number, r: number) => {
  let from = 0;
  return shares.map((s) => {
    const to = from + (s / 100) * 360;
    const a = polar(cx, cy, r, from);
    const b = polar(cx, cy, r, to);
    const d = `M${cx} ${cy} L${a.x} ${a.y} A${r} ${r} 0 ${to - from > 180 ? 1 : 0} 1 ${b.x} ${b.y} Z`;
    const out = { d, from, to };
    from = to;
    return out;
  });
};

/* ------------------------------------------------------------ EcosystemScene */

export const EcosystemScene = () => (
  <svg viewBox="0 0 140 92" role="img" aria-labelledby="eco-t eco-d" className={frame} style={style()}>
    <title id="eco-t">A savanna ecosystem: living and non-living things</title>
    <desc id="eco-d">A tree and a springbok, which are living, share a place with the sun, water and soil, which are not living.</desc>
    <rect x={0} y={0} width={140} height={54} fill="#1e3a5f" />
    <rect x={0} y={54} width={140} height={26} fill="#78552b" />
    <rect x={0} y={54} width={140} height={3} fill="#4d8f3f" />
    {/* sun */}
    <g stroke="#fbbf24" strokeWidth={1}>
      <path d="M116 4 V7 M116 21 V24 M106 14 H109 M123 14 H126 M109 7 L111 9 M121 19 L123 21 M123 7 L121 9 M111 19 L109 21" />
    </g>
    <circle cx={116} cy={14} r={5.5} fill="#fbbf24" />
    {/* tree */}
    <rect x={30} y={34} width={4} height={22} fill="#92400e" />
    <circle cx={32} cy={28} r={11} fill="#22c55e" />
    <circle cx={26} cy={32} r={6} fill="#16a34a" />
    {/* springbok */}
    <g stroke="#d6a76a" strokeWidth={1.4} strokeLinecap="round">
      <path d="M56 51 V58 M60 51 V58 M68 51 V58 M72 51 V58" />
      <path d="M72 47 L76 42" strokeWidth={2} />
    </g>
    <ellipse cx={64} cy={48} rx={10} ry={4.6} fill="#d6a76a" />
    <rect x={55} y={50} width={18} height={1.6} fill="#f1e1c6" rx={0.8} />
    <circle cx={77.5} cy={41} r={2.6} fill="#d6a76a" />
    <path d="M76.5 38.8 L75.6 35 M78.6 38.8 L79.5 35" stroke="#f1e1c6" strokeWidth={0.8} />
    {/* pond */}
    <ellipse cx={100} cy={68} rx={17} ry={5.2} fill="#38bdf8" />
    <path d="M92 67 q3 -1.4 6 0 M102 69 q3 -1.4 6 0" fill="none" stroke="#e0f2fe" strokeWidth={0.7} />
    {/* labels */}
    <g fontSize={6.6} fontWeight={800} textAnchor="middle">
      <text x={32} y={12} fill={LIVING}>Tree</text>
      <text x={66} y={34} fill={LIVING}>Springbok</text>
      <text x={116} y={31} fill={NONLIVING}>Sun</text>
      <text x={100} y={78} fill={NONLIVING}>Water</text>
      <text x={42} y={75} fill={NONLIVING}>Soil</text>
    </g>
    {/* key */}
    <circle cx={44} cy={87} r={2.4} fill={LIVING} />
    <text x={49} y={89.4} fontSize={6.2} fontWeight={700} fill={SOFT}>living</text>
    <circle cx={78} cy={87} r={2.4} fill={NONLIVING} />
    <text x={83} y={89.4} fontSize={6.2} fontWeight={700} fill={SOFT}>not living</text>
  </svg>
);

/* -------------------------------------------------------------- HabitatNeeds */

export const HabitatNeeds = () => {
  const needs = [
    { name: 'food', x: 8, y: 8, icon: <ellipse cx={0} cy={0} rx={5} ry={2.8} fill="#4ade80" transform="rotate(-30)" /> },
    { name: 'water', x: 8, y: 40, icon: <path d="M0 -5 C4 0 4.6 3.4 0 4.6 C-4.6 3.4 -4 0 0 -5Z" fill="#38bdf8" /> },
    { name: 'shelter', x: 94, y: 8, icon: <path d="M-5 3.6 L0 -4 L5 3.6Z" fill="#a8a29e" /> },
    { name: 'space', x: 94, y: 40, icon: <rect x={-4.4} y={-4.4} width={8.8} height={8.8} fill="none" stroke="#fbbf24" strokeWidth={1.1} strokeDasharray="2 1.4" /> },
  ];
  return (
    <svg viewBox="0 0 140 68" role="img" aria-labelledby="hab-t hab-d" className={frame} style={style()}>
      <title id="hab-t">What a habitat gives an organism</title>
      <desc id="hab-d">Four arrows run into a springbok from food, water, shelter and space.</desc>
      {needs.map((n) => {
        const left = n.x < 70;
        const cx = n.x + 19;
        const cy = n.y + 10;
        return (
          <g key={n.name}>
            <rect x={n.x} y={n.y} width={38} height={20} rx={5} fill="#1e293b" stroke="#475569" strokeWidth={0.8} />
            <g transform={`translate(${n.x + 8} ${cy})`}>{n.icon}</g>
            <text x={n.x + 14} y={cy + 2.4} fontSize={7.2} fontWeight={800} fill="#e2e8f0">{n.name}</text>
            <path d={left ? `M${cx + 20} ${cy} L${57} ${34}` : `M${cx - 20} ${cy} L${83} ${34}`} stroke={SOFT} strokeWidth={1} />
            <path d={left ? 'M53 31 L57 34 L52 36.4' : 'M87 31 L83 34 L88 36.4'} fill="none" stroke={SOFT} strokeWidth={1} />
          </g>
        );
      })}
      <circle cx={70} cy={34} r={13} fill="#14532d" stroke={LIVING} strokeWidth={1} />
      <g transform="translate(70 34) scale(0.95)">
        <g stroke="#d6a76a" strokeWidth={1.2} strokeLinecap="round"><path d="M-5 3 V8 M-1.6 3 V8 M3.4 3 V8 M6.6 3 V8" /></g>
        <ellipse cx={0} cy={0} rx={8} ry={3.8} fill="#d6a76a" />
        <path d="M6 -1 L9 -5" stroke="#d6a76a" strokeWidth={1.8} strokeLinecap="round" />
        <circle cx={10} cy={-6} r={2.2} fill="#d6a76a" />
      </g>
      <text x={70} y={58} textAnchor="middle" fontSize={6.6} fontWeight={800} fill={LIVING}>organism</text>
    </svg>
  );
};

/* --------------------------------------------------------------- Adaptations */

export const Adaptations = () => (
  <svg viewBox="0 0 150 84" role="img" aria-labelledby="ada-t ada-d" className={frame} style={style()}>
    <title id="ada-t">Interdependence and two adaptations</title>
    <desc id="ada-d">A bee carries pollen between flowers. A green stick insect hides on a green leaf. A plant with long roots reaches water deep in the soil.</desc>
    {[0, 1, 2].map((i) => (
      <rect key={i} x={3 + i * 49} y={3} width={46} height={52} rx={5} fill="#1e293b" />
    ))}
    {/* pollination */}
    <g transform="translate(26 30)">
      <path d="M0 8 V22" stroke="#4ade80" strokeWidth={1.4} />
      {[0, 72, 144, 216, 288].map((a) => {
        const p = polar(0, 0, 5.4, a);
        return <circle key={a} cx={p.x} cy={p.y} r={3.4} fill="#f472b6" />;
      })}
      <circle cx={0} cy={0} r={2.6} fill="#fbbf24" />
      <g transform="translate(-13 -9)">
        <ellipse cx={0} cy={0} rx={4.4} ry={2.8} fill="#fbbf24" />
        <path d="M-1.4 -2.6 V2.6 M1.4 -2.6 V2.6" stroke={INK} strokeWidth={1} />
        <ellipse cx={0} cy={-3.6} rx={2.6} ry={1.6} fill="#e0f2fe" opacity={0.85} />
      </g>
      <path d="M-8 -7 L-4 -3.4" stroke={SOFT} strokeWidth={0.9} strokeDasharray="1.4 1.2" />
    </g>
    {/* camouflage */}
    <g transform="translate(75 29)">
      <ellipse cx={0} cy={0} rx={20} ry={11} fill="#22c55e" transform="rotate(-18)" />
      <path d="M-19 7 L19 -7" stroke="#16a34a" strokeWidth={1.1} />
      <path d="M-5 -4.4 L-2 -9" stroke="#16a34a" strokeWidth={0.8} />
      <path d="M-8 1.6 L-4 -3 L0 -1 L4 -6.2 L8 -4.6" fill="none" stroke="#4d9a3a" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={8.6} cy={-4.8} r={1.1} fill="#4d9a3a" />
    </g>
    {/* deep roots */}
    <g transform="translate(124 0)">
      <rect x={-20} y={30} width={40} height={25} fill="#78552b" />
      <rect x={-20} y={46} width={40} height={9} fill="#38bdf8" opacity={0.75} />
      <rect x={-20} y={28} width={40} height={3} fill="#4d8f3f" />
      <path d="M0 29 V12" stroke="#22c55e" strokeWidth={1.6} />
      <ellipse cx={-4} cy={14} rx={4.4} ry={2} fill="#22c55e" transform="rotate(-25 -4 14)" />
      <ellipse cx={4.5} cy={11} rx={4.4} ry={2} fill="#22c55e" transform="rotate(25 4.5 11)" />
      <path d="M0 30 V47 M0 36 L-6 41 M0 40 L6 45" stroke="#e7d3a8" strokeWidth={1} fill="none" />
    </g>
    {/* captions */}
    <g textAnchor="middle" fontWeight={800}>
      {[
        { x: 26, name: 'Pollination', a: 'insects help', b: 'plants' },
        { x: 75, name: 'Camouflage', a: 'animals hide', b: 'from danger' },
        { x: 124, name: 'Deep roots', a: 'plants reach', b: 'water' },
      ].map((c) => (
        <g key={c.name}>
          <text x={c.x} y={65} fontSize={6.8} fill="#e2e8f0">{c.name}</text>
          <text x={c.x} y={73} fontSize={5.6} fontWeight={700} fill={SOFT}>{c.a}</text>
          <text x={c.x} y={80} fontSize={5.6} fontWeight={700} fill={SOFT}>{c.b}</text>
        </g>
      ))}
    </g>
  </svg>
);

/* -------------------------------------------------------------- NutrientPlate */

export const NutrientPlate = () => {
  const cx = 38;
  const cy = 40;
  const ws = wedges(PLATE.map((p) => p.share), cx, cy, 31);
  return (
    <svg viewBox="0 0 172 80" role="img" aria-labelledby="pla-t pla-d" className={frame} style={style()}>
      <title id="pla-t">A balanced plate</title>
      <desc id="pla-d">A plate with half vegetables and fruit, a quarter carbohydrates and a quarter proteins. {PLATE_EXTRA.name}, {PLATE_EXTRA.job}, sit beside the plate as a small extra.</desc>
      <circle cx={cx} cy={cy} r={36} fill="#e2e8f0" />
      {ws.map((w, i) => (
        <path key={PLATE[i].name} d={w.d} fill={PLATE[i].color} stroke="#e2e8f0" strokeWidth={1.2} />
      ))}
      {[...PLATE, PLATE_EXTRA].map((p, i) => {
        const y = 13 + i * 17;
        const extra = i === PLATE.length;
        return (
          <g key={p.name}>
            {extra ? (
              <circle cx={84} cy={y} r={2.6} fill={p.color} stroke="#e2e8f0" strokeWidth={0.8} />
            ) : (
              <circle cx={84} cy={y} r={3} fill={p.color} />
            )}
            <text x={91} y={y - 0.6} fontSize={6.4} fontWeight={800} fill="#e2e8f0">{p.name}</text>
            <text x={91} y={y + 6.4} fontSize={5.6} fontWeight={700} fill={SOFT}>{p.job}</text>
          </g>
        );
      })}
    </svg>
  );
};

/* --------------------------------------------------------------- Mixture bits */

const BOWL = '#94a3b8';
const flake = (x: number, y: number, k: number) => (
  <rect key={`f${x}-${y}`} x={x} y={y} width={4.4} height={3} rx={1.2} fill="#f59e0b" transform={`rotate(${k} ${x + 2.2} ${y + 1.5})`} />
);
const raisin = (x: number, y: number) => <ellipse key={`r${x}-${y}`} cx={x} cy={y} rx={2} ry={1.5} fill="#7c3aed" />;

/** A shallow bowl centred on x whose rim is at y. */
const Bowl = ({ x, y, children }: { x: number; y: number; children?: React.ReactNode }) => (
  <g transform={`translate(${x} ${y})`}>
    {children}
    <path d="M-15 0 H15 Q14 12 0 12 Q-14 12 -15 0Z" fill="none" stroke={BOWL} strokeWidth={1.3} strokeLinejoin="round" />
  </g>
);

export const MixtureMake = () => (
  <svg viewBox="0 0 140 76" role="img" aria-labelledby="mix-t mix-d" className={frame} style={style()}>
    <title id="mix-t">Making a mixture</title>
    <desc id="mix-d">A bowl of cereal and a bowl of raisins are mixed into one bowl. A dashed arrow shows they can be separated again.</desc>
    <Bowl x={22} y={22}>
      {[[-9, -3, 10], [-3, -4, -20], [3, -3, 25], [-6, 1, -5], [1, 1, 15], [7, 0, -25], [-11, 1, 30], [10, 3, 5]].map(([x, y, k]) => flake(x - 2, y - 1, k))}
    </Bowl>
    <Bowl x={70} y={22}>{[[-6, -2], [0, -3], [6, -2], [-3, 2], [3, 2]].map(([x, y]) => raisin(x, y))}</Bowl>
    <Bowl x={118} y={22}>
      {[[-9, -3, 10], [-3, -4, -20], [3, -3, 25], [-6, 1, -5], [1, 1, 15], [7, 0, -25], [-11, 1, 30], [10, 3, 5]].map(([x, y, k]) => flake(x - 2, y - 1, k))}
      {[[-7, -1], [1, -2], [8, 1], [-2, 2]].map(([x, y]) => raisin(x, y))}
    </Bowl>
    <text x={46} y={23.6} textAnchor="middle" fontSize={11} fontWeight={800} fill={SOFT}>+</text>
    <text x={94} y={23.6} textAnchor="middle" fontSize={11} fontWeight={800} fill={SOFT}>=</text>
    <g fontSize={6.4} fontWeight={800} textAnchor="middle" fill="#e2e8f0">
      <text x={22} y={42}>cereal</text>
      <text x={70} y={42}>raisins</text>
      <text x={118} y={42}>mixture</text>
    </g>
    <path d="M118 48 V60 H22 V50" fill="none" stroke={LIVING} strokeWidth={1.1} strokeDasharray="3 2" />
    <path d="M19 53 L22 49 L25 53" fill="none" stroke={LIVING} strokeWidth={1.1} />
    <text x={70} y={70} textAnchor="middle" fontSize={6.4} fontWeight={800} fill={LIVING}>separate them again</text>
  </svg>
);

/** A round close-up tile centred on x, with a unique clip. */
const Tile = ({ id, x, y, bg, children }: { id: string; x: number; y: number; bg: string; children: React.ReactNode }) => (
  <g transform={`translate(${x} ${y})`}>
    <clipPath id={id}><circle cx={0} cy={0} r={13} /></clipPath>
    <circle cx={0} cy={0} r={13} fill={bg} />
    <g clipPath={`url(#${id})`}>{children}</g>
    <circle cx={0} cy={0} r={13} fill="none" stroke="#e2e8f0" strokeWidth={1} />
  </g>
);

export const MixturesAround = () => (
  <svg viewBox="0 0 168 72" role="img" aria-labelledby="aro-t aro-d" className={frame} style={style()}>
    <title id="aro-t">Mixtures around us</title>
    <desc id="aro-d">Cereal, fruit salad and muddy water are mixtures where you can see the parts. Air is a mixture that looks the same all the way through.</desc>
    <Tile id="aro-c" x={20} y={30} bg="#fde68a">
      {[[-7, -6, 10], [2, -8, -20], [7, -2, 30], [-8, 2, -10], [0, 1, 15], [-3, 8, 40], [8, 7, -25]].map(([x, y, k]) => flake(x, y, k))}
      {[[-3, -3], [5, 4], [-7, 7]].map(([x, y]) => raisin(x, y))}
    </Tile>
    <Tile id="aro-f" x={58} y={30} bg="#fef3c7">
      <circle cx={-5} cy={-5} r={4.4} fill="#fb923c" />
      <rect x={1} y={-8} width={7} height={6} rx={1.4} fill="#4ade80" />
      <circle cx={-7} cy={4} r={4} fill="#ef4444" />
      <rect x={-1} y={0} width={7} height={7} rx={1.4} fill="#fde047" />
      <circle cx={8} cy={7} r={3.4} fill="#c084fc" />
    </Tile>
    <Tile id="aro-m" x={96} y={30} bg="#a16207">
      {[[-6, -7], [3, -9], [8, -3], [-8, 0], [0, -2], [6, 4], [-4, 6], [1, 9], [-9, 8]].map(([x, y]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r={1.5} fill="#451a03" />
      ))}
    </Tile>
    <Tile id="aro-a" x={142} y={30} bg="#bae6fd">
      {[-8, -3, 2, 7].flatMap((x, i) => [-8, -3, 2, 7].map((y, j) => (
        <circle key={`${x}${y}`} cx={x + 0.5} cy={y + 0.5} r={1.2} fill={(i + j) % 3 === 0 ? '#0e7490' : '#0369a1'} />
      )))}
    </Tile>
    <g fontSize={5.8} fontWeight={800} textAnchor="middle" fill="#e2e8f0">
      <text x={20} y={52}>cereal</text>
      <text x={58} y={52}>fruit salad</text>
      <text x={96} y={52}>muddy water</text>
      <text x={142} y={52}>air</text>
    </g>
    <path d="M8 57 V60 H108 V57" fill="none" stroke={LIVING} strokeWidth={1} />
    <text x={58} y={68} textAnchor="middle" fontSize={5.8} fontWeight={700} fill={LIVING}>you can see the parts</text>
    <path d="M124 57 V60 H160 V57" fill="none" stroke={NONLIVING} strokeWidth={1} />
    <text x={142} y={68} textAnchor="middle" fontSize={5.4} fontWeight={700} fill={NONLIVING}>looks the same</text>
  </svg>
);

/* ----------------------------------------------------------------- PartsKeep */

export const PartsKeep = () => (
  <svg viewBox="0 0 140 76" role="img" aria-labelledby="kee-t kee-d" className={frame} style={style()}>
    <title id="kee-t">The parts of a mixture keep their properties</title>
    <desc id="kee-d">Raisins can be picked out of a bowl of cereal by hand. In a beaker of muddy water the sand settles to the bottom.</desc>
    <Bowl x={34} y={34}>
      {[[-9, -3, 10], [-3, -4, -20], [3, -3, 25], [-6, 1, -5], [1, 1, 15], [7, 0, -25], [-11, 1, 30]].map(([x, y, k]) => flake(x - 2, y - 1, k))}
      {[[-7, -1], [8, 1]].map(([x, y]) => raisin(x, y))}
    </Bowl>
    {raisin(30, 14)}
    {raisin(38, 10)}
    <path d="M31 22 V17 M39 22 V13" stroke={LIVING} strokeWidth={1} strokeDasharray="2 1.6" />
    <path d="M29 19 L31 16 L33 19 M37 15 L39 12 L41 15" fill="none" stroke={LIVING} strokeWidth={1} />
    <text x={34} y={58} textAnchor="middle" fontSize={6.4} fontWeight={800} fill="#e2e8f0">raisins</text>
    <text x={34} y={66} textAnchor="middle" fontSize={5.6} fontWeight={700} fill={SOFT}>pick them out</text>
    {/* beaker */}
    <g transform="translate(104 8)">
      <rect x={-13} y={8} width={26} height={36} fill="#a16207" opacity={0.55} />
      <rect x={-13} y={36} width={26} height={8} fill="#78350f" />
      {[[-8, 14], [2, 18], [8, 12], [-3, 25], [6, 29], [-9, 31]].map(([x, y]) => (
        <circle key={`${x}${y}`} cx={x} cy={y} r={1.1} fill="#78350f" />
      ))}
      <path d="M-14 0 L-13 44 H13 L14 0" fill="none" stroke="#e2e8f0" strokeWidth={1.3} strokeLinejoin="round" />
      <path d="M17 14 V30" stroke={LIVING} strokeWidth={1} strokeDasharray="2 1.6" />
      <path d="M15 28 L17 31 L19 28" fill="none" stroke={LIVING} strokeWidth={1} />
    </g>
    <text x={104} y={58} textAnchor="middle" fontSize={6.4} fontWeight={800} fill="#e2e8f0">sand</text>
    <text x={104} y={66} textAnchor="middle" fontSize={5.6} fontWeight={700} fill={SOFT}>settles to the bottom</text>
  </svg>
);
