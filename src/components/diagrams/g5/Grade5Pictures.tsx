import { T, cls, st } from '../science/SciencePictures';
import { DIRECTIONS, GAUGE_LEVEL_MM, GAUGE_MAX_MM, LESSON_MAP_CM, LESSON_SCALE_KM_PER_CM, PROFILE, bearing, gaugeFraction, realKm } from './grade5Helpers';

const r3 = (n: number) => Math.round(n * 1000) / 1000;

/** A cross-section of the Nile valley: desert, a strip of fertile land, the river, fertile land, desert. Schematic. */
export const NileValley = () => (
  <svg viewBox="0 0 160 84" role="img" aria-labelledby="g5-nile-t g5-nile-d" className={cls} style={st}>
    <title id="g5-nile-t">The Nile valley from above</title>
    <desc id="g5-nile-d">A schematic view: dry desert on both sides, a green strip of fertile land along each bank, and the River Nile in the middle. When the river floods it leaves rich black silt on the land beside it. Not to scale.</desc>
    <rect x={0} y={8} width={46} height={62} fill="#d6b36a" />
    <rect x={114} y={8} width={46} height={62} fill="#d6b36a" />
    <rect x={46} y={8} width={20} height={62} fill="#4ade80" />
    <rect x={94} y={8} width={20} height={62} fill="#4ade80" />
    <rect x={66} y={8} width={28} height={62} fill="#38bdf8" />
    <T x={23} y={42} size={5.2} fill="#422006">desert</T>
    <T x={137} y={42} size={5.2} fill="#422006">desert</T>
    <T x={80} y={42} size={5.6} fill="#082f49">River Nile</T>
    <T x={56} y={24} size={4.4} fill="#14532d">farms</T>
    <T x={104} y={24} size={4.4} fill="#14532d">farms</T>
    <T x={80} y={80} size={4.6} fill="#cbd5e1">flood leaves rich black silt on the green strips (not to scale)</T>
  </svg>
);

/** The ladder of Ancient Egyptian society, from the Pharaoh at the top to farmers at the bottom. */
export const SocietyPyramid = () => (
  <svg viewBox="0 0 160 90" role="img" aria-labelledby="g5-soc-t g5-soc-d" className={cls} style={st}>
    <title id="g5-soc-t">Who was who in Ancient Egypt</title>
    <desc id="g5-soc-d">A pyramid in four layers. The Pharaoh, the ruler, is at the top. Below are officials and priests, then scribes and craftspeople, and the biggest layer at the bottom is the farmers.</desc>
    <polygon points="80,6 94,24 66,24" fill="#fcd34d" />
    <polygon points="66,24 94,24 106,44 54,44" fill="#fb923c" />
    <polygon points="54,44 106,44 120,64 40,64" fill="#a78bfa" />
    <polygon points="40,64 120,64 136,84 24,84" fill="#4ade80" />
    <T x={80} y={20.5} size={4.2} fill="#422006">Pharaoh</T>
    <T x={80} y={37} size={4.4} fill="#431407">officials, priests</T>
    <T x={80} y={57} size={4.4} fill="#2e1065">scribes, craftspeople</T>
    <T x={80} y={77} size={4.6} fill="#052e16">farmers</T>
  </svg>
);

/** A compass rose with the eight points. */
export const CompassRose = () => {
  const cx = 80;
  const cy = 46;
  const R = 26;
  const pos = (deg: number, rad: number) => {
    const a = (deg * Math.PI) / 180;
    return { x: r3(cx + rad * Math.sin(a)), y: r3(cy - rad * Math.cos(a)) };
  };
  return (
    <svg viewBox="0 0 160 94" role="img" aria-labelledby="g5-comp-t g5-comp-d" className={cls} style={st}>
      <title id="g5-comp-t">The eight points of the compass</title>
      <desc id="g5-comp-d">A compass rose with north at the top. Going clockwise the points are north, north-east, east, south-east, south, south-west, west and north-west. North-west is directly opposite south-east.</desc>
      <circle cx={cx} cy={cy} r={R} fill="none" stroke="#475569" strokeWidth={0.8} />
      {DIRECTIONS.map((d) => {
        const b = bearing(d);
        const tip = pos(b, R);
        const label = pos(b, R + 8);
        const major = b % 90 === 0;
        return (
          <g key={d}>
            <line x1={cx} y1={cy} x2={tip.x} y2={tip.y} stroke={major ? '#fcd34d' : '#94a3b8'} strokeWidth={major ? 1.6 : 0.9} />
            <T x={label.x} y={r3(label.y + 2)} size={major ? 6 : 5} fill={major ? '#fde68a' : '#cbd5e1'}>{d}</T>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={1.6} fill="#f8fafc" />
    </svg>
  );
};

/** A scale bar: 3 cm on the map, 1 cm = 50 km, so 150 km on the ground. */
export const ScaleBar = () => {
  const x0 = 28;
  const cm = 28; // drawing units per cm of the bar
  const km = LESSON_SCALE_KM_PER_CM;
  const total = realKm(LESSON_MAP_CM, km);
  return (
    <svg viewBox="0 0 160 62" role="img" aria-labelledby="g5-scale-t g5-scale-d" className={cls} style={st}>
      <title id="g5-scale-t">A scale bar on a map</title>
      <desc id="g5-scale-d">A bar three centimetres long. Every centimetre stands for 50 kilometres, so the whole bar stands for 150 kilometres. A distance of 3 cm on the map is 150 km on the ground.</desc>
      <T x={80} y={11} size={5.4} fill="#fde68a">scale: 1 cm = {km} km</T>
      {Array.from({ length: LESSON_MAP_CM }, (_, i) => (
        <rect key={i} x={x0 + i * cm} y={22} width={cm} height={8} fill={i % 2 === 0 ? '#f8fafc' : '#0f172a'} stroke="#f8fafc" strokeWidth={0.8} />
      ))}
      {Array.from({ length: LESSON_MAP_CM + 1 }, (_, i) => (
        <T key={i} x={x0 + i * cm} y={43} size={5}>{realKm(i, km)}</T>
      ))}
      <T x={80} y={55} size={4.8} fill="#bae6fd">{LESSON_MAP_CM} cm on the map = {total} km (kilometres)</T>
    </svg>
  );
};

/** A side view of the land: coastal plain, steep escarpment, high flat plateau. Schematic, not to scale. */
export const LandProfile = () => {
  const x0 = 12;
  const w = 136;
  const base = 78;
  const hScale = 0.6;
  const px = (v: number) => r3(x0 + (v / 100) * w);
  const py = (h: number) => r3(base - h * hScale);
  const pts = [
    `${px(0)},${py(PROFILE[0].height)}`,
    `${px(PROFILE[0].to)},${py(PROFILE[0].height)}`,
    `${px(PROFILE[1].to)},${py(PROFILE[1].height)}`,
    `${px(100)},${py(PROFILE[2].height)}`,
  ].join(' ');
  return (
    <svg viewBox="0 0 160 92" role="img" aria-labelledby="g5-land-t g5-land-d" className={cls} style={st}>
      <title id="g5-land-t">The coastal plain, the escarpment and the plateau</title>
      <desc id="g5-land-d">A side view of the land going inland from the sea. The low coastal plain comes first, then the steep slope of the escarpment, then the high flat plateau. Not to scale.</desc>
      <polygon points={`${px(0)},${base} ${pts} ${px(100)},${base}`} fill="#a16207" />
      <polyline points={pts} fill="none" stroke="#fde68a" strokeWidth={1.4} />
      <rect x={0} y={r3(py(PROFILE[0].height))} width={x0} height={r3(base - py(PROFILE[0].height))} fill="#0ea5e9" />
      <T x={6} y={r3(py(PROFILE[0].height) - 3)} size={4.6} fill="#bae6fd">sea</T>
      <T x={px(15)} y={r3(py(PROFILE[0].height) - 4)} size={5} fill="#fde68a">coastal plain</T>
      <T x={px(37)} y={r3(py(50) - 6)} size={5} fill="#fecaca" anchor="end">escarpment</T>
      <T x={px(76)} y={r3(py(PROFILE[2].height) - 5)} size={5.4} fill="#bbf7d0">plateau</T>
      <T x={80} y={88} size={4.6} fill="#cbd5e1">schematic, not to scale</T>
    </svg>
  );
};

/** A rain gauge: a tube with a scale in millimetres and the rain that has collected. */
export const RainGauge = () => {
  const top = 12;
  const bottom = 72;
  const frac = gaugeFraction(GAUGE_LEVEL_MM, GAUGE_MAX_MM);
  const waterTop = r3(bottom - (bottom - top) * frac);
  const ticks = Array.from({ length: GAUGE_MAX_MM / 10 + 1 }, (_, i) => i * 10);
  return (
    <svg viewBox="0 0 160 88" role="img" aria-labelledby="g5-rain-t g5-rain-d" className={cls} style={st}>
      <title id="g5-rain-t">A rain gauge</title>
      <desc id="g5-rain-d">A tube marked from 0 to 50 millimetres. The rain collected stands at 32 millimetres, so 32 millimetres of rain fell.</desc>
      <rect x={60} y={top} width={22} height={bottom - top} rx={2} fill="#0f172a" stroke="#cbd5e1" strokeWidth={1} />
      <rect x={61} y={waterTop} width={20} height={r3(bottom - waterTop)} fill="#38bdf8" />
      {ticks.map((t) => {
        const y = r3(bottom - ((bottom - top) * t) / GAUGE_MAX_MM);
        return (
          <g key={t}>
            <line x1={82} y1={y} x2={88} y2={y} stroke="#cbd5e1" strokeWidth={0.8} />
            <T x={91} y={r3(y + 2)} anchor="start" size={4.6} fill="#cbd5e1">{t}</T>
          </g>
        );
      })}
      <T x={118} y={20} anchor="start" size={4.8} fill="#e2e8f0">mm</T>
      <T x={20} y={r3(waterTop + 2)} anchor="start" size={5.4} fill="#7dd3fc">{GAUGE_LEVEL_MM} mm</T>
      <line x1={46} y1={r3(waterTop)} x2={60} y2={r3(waterTop)} stroke="#7dd3fc" strokeWidth={0.9} />
      <T x={71} y={83} size={5} fill="#e2e8f0">rain gauge</T>
    </svg>
  );
};

/** Two ways to mine: from the surface (open-pit) or through a shaft and tunnels. */
export const MiningTypes = () => (
  <svg viewBox="0 0 160 90" role="img" aria-labelledby="g5-mine-t g5-mine-d" className={cls} style={st}>
    <title id="g5-mine-t">Open-pit and shaft mining</title>
    <desc id="g5-mine-d">Left: an open-pit mine, a big hole dug down from the surface. Right: a shaft mine, a vertical shaft from the surface with tunnels branching off sideways to reach the minerals deep underground.</desc>
    <rect x={0} y={20} width={160} height={70} fill="#78350f" />
    <rect x={0} y={14} width={160} height={6} fill="#4ade80" />
    <polygon points="8,20 72,20 58,50 22,50" fill="#e2e8f0" opacity={0.22} />
    <polyline points="8,20 22,50 58,50 72,20" fill="none" stroke="#fde68a" strokeWidth={1.3} />
    <rect x={112} y={20} width={5} height={52} fill="#0f172a" />
    <rect x={92} y={70} width={44} height={4} fill="#0f172a" />
    <rect x={98} y={46} width={30} height={4} fill="#0f172a" />
    <circle cx={90} cy={72} r={3} fill="#fcd34d" />
    <circle cx={138} cy={72} r={3} fill="#fcd34d" />
    <T x={40} y={10} size={5.4} fill="#e2e8f0">open-pit</T>
    <T x={114} y={10} size={5.4} fill="#e2e8f0">shaft</T>
    <T x={40} y={65} size={4.6} fill="#fde68a">dug from the surface</T>
    <T x={114} y={84} size={4.6} fill="#fde68a">tunnels go sideways</T>
  </svg>
);


/** Four kinds of food and what each does for the body. */
export const FoodGroups = () => {
  const boxes = [
    { x: 8, y: 8, color: '#fcd34d', title: 'carbohydrates', note: 'energy', eg: 'bread, rice, pap, potatoes' },
    { x: 84, y: 8, color: '#fb923c', title: 'proteins', note: 'grow and repair', eg: 'meat, fish, eggs, beans' },
    { x: 8, y: 52, color: '#4ade80', title: 'fruit and vegetables', note: 'vitamins', eg: 'apples, spinach, carrots' },
    { x: 84, y: 52, color: '#93c5fd', title: 'milk and cheese', note: 'calcium for bones', eg: 'milk, yoghurt, cheese' },
  ];
  return (
    <svg viewBox="0 0 160 96" role="img" aria-labelledby="g5-food-t g5-food-d" className={cls} style={st}>
      <title id="g5-food-t">Food groups and what they do</title>
      <desc id="g5-food-d">Four boxes. Carbohydrates such as bread, rice and pap give energy. Proteins such as meat, fish, eggs and beans help the body grow and repair. Fruit and vegetables give vitamins. Milk and cheese give calcium for strong bones and teeth.</desc>
      {boxes.map((b) => (
        <g key={b.title}>
          <rect x={b.x} y={b.y} width={68} height={38} rx={4} fill={b.color} />
          <T x={b.x + 34} y={b.y + 13} size={4.8} fill="#0f172a">{b.title}</T>
          <T x={b.x + 34} y={b.y + 23} size={4.4} fill="#1e293b">{b.note}</T>
          <T x={b.x + 34} y={b.y + 33} size={3.8} fill="#334155">{b.eg}</T>
        </g>
      ))}
    </svg>
  );
};
