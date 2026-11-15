import { r3 } from '../round';
import { Arrow, T, cls, st, SOFT } from './SciencePictures';
import { STEP_BLOCK, gearRatio, outputForce, pressure, pulleyEffort, trainDirection, views } from './tech9Helpers';

/**
 * Grade 9 Technology pictures: first-angle views, line types, bending and torsion, pulley systems,
 * gear types and trains, a hydraulic press and connected syringes. Numbers and positions come from
 * tech9Helpers.ts. At most six labels each (a few identify-the-type pictures name every item).
 */

/* ---------- first-angle orthographic views ---------- */

export const OrthographicViews = () => {
  const v = views(STEP_BLOCK);
  const u = 11;
  const maxX = Math.max(...STEP_BLOCK.map((c) => c[0]));
  const maxY = Math.max(...STEP_BLOCK.map((c) => c[1]));
  const maxZ = Math.max(...STEP_BLOCK.map((c) => c[2]));
  const fx = 12;
  const fy = 12;
  const frontW = (maxX + 1) * u;
  const frontH = (maxZ + 1) * u;
  const gap = 8;
  const cell = (x: number, y: number, fill: string, k: string) => <rect key={k} x={r3(x)} y={r3(y)} width={u} height={u} fill={fill} stroke="#0f172a" strokeWidth={0.8} />;
  return (
    <svg viewBox="0 0 150 80" role="img" aria-labelledby="ov-t ov-d" className={cls} style={st}>
      <title id="ov-t">First-angle orthographic views of a stepped block</title>
      <desc id="ov-d">The front view is drawn first. The top view is drawn below the front view, and the side view to the right of it, so that matching edges line up. The block is 4 units wide, 2 units deep, with a base 1 unit high and a step 2 units wide that makes the left end 2 units high.</desc>
      {v.front.map(([x, z]) => cell(fx + x * u, fy + (maxZ - z) * u, '#38bdf8', `f${x}${z}`))}
      {v.top.map(([x, y]) => cell(fx + x * u, fy + frontH + gap + (maxY - y) * u, '#34d399', `t${x}${y}`))}
      {v.side.map(([y, z]) => cell(fx + frontW + gap + (maxY - y) * u, fy + (maxZ - z) * u, '#fbbf24', `s${y}${z}`))}
      <T x={fx + frontW / 2} y={fy - 3} size={5.2} fill="#7dd3fc">front view</T>
      <T x={fx + frontW / 2} y={fy + frontH + gap + (maxY + 1) * u + 8} size={5.2} fill="#6ee7b7">top view (below)</T>
      <T x={fx + frontW + gap + ((maxY + 1) * u) / 2} y={fy - 3} size={5.2} fill="#fcd34d">side view</T>
      <T x={112} y={60} size={4.8} fill={SOFT}>matching edges line up</T>
      <line x1={fx} y1={fy + frontH + gap / 2} x2={fx + frontW} y2={fy + frontH + gap / 2} stroke="#475569" strokeWidth={0.5} strokeDasharray="2 2" />
    </svg>
  );
};

/* ---------- line types ---------- */

export const LineTypes = () => (
  <svg viewBox="0 0 150 54" role="img" aria-labelledby="lt-t lt-d" className={cls} style={st}>
    <title id="lt-t">Line types in a technical drawing</title>
    <desc id="lt-d">A thick continuous line shows visible edges. A dashed line shows hidden edges or features. A light, thin line is a construction line used to build the drawing.</desc>
    <line x1={10} y1={12} x2={60} y2={12} stroke="#f8fafc" strokeWidth={2.4} />
    <T x={68} y={15} anchor="start" size={5.2}>thick line: visible edges</T>
    <line x1={10} y1={28} x2={60} y2={28} stroke="#7dd3fc" strokeWidth={1.4} strokeDasharray="5 3" />
    <T x={68} y={31} anchor="start" size={5.2} fill="#7dd3fc">dashed line: hidden edges</T>
    <line x1={10} y1={44} x2={60} y2={44} stroke="#64748b" strokeWidth={0.6} />
    <T x={68} y={47} anchor="start" size={5.2} fill={SOFT}>light, thin line: construction</T>
  </svg>
);

/* ---------- bending and torsion ---------- */

export const BendingTorsion = () => (
  <svg viewBox="0 0 150 70" role="img" aria-labelledby="bt-t bt-d" className={cls} style={st}>
    <title id="bt-t">Bending and torsion</title>
    <desc id="bt-d">Bending: a beam fixed at one end curves downwards when a load pushes on it. Torsion: a rod twists when opposite turning forces act on its ends.</desc>
    <rect x={8} y={14} width={5} height={32} fill="#64748b" />
    <path d="M13 28 Q44 28 64 44" fill="none" stroke="#38bdf8" strokeWidth={5} strokeLinecap="round" />
    <path d="M13 28 L64 28" stroke="#475569" strokeWidth={0.7} strokeDasharray="2 2" />
    <Arrow x1={62} y1={12} x2={62} y2={36} color="#fb923c" w={1.6} />
    <T x={38} y={60} size={6.2} fill="#7dd3fc">bending</T>
    <T x={38} y={67} size={4.6}>the material curves under load</T>
    <rect x={92} y={26} width={46} height={7} rx={2} fill="#34d399" />
    <path d="M90 22 Q84 29.5 90 37" fill="none" stroke="#fbbf24" strokeWidth={1.4} />
    <polygon points="90,37 85.4,33.4 91.6,32.4" fill="#fbbf24" />
    <path d="M140 22 Q146 29.5 140 37" fill="none" stroke="#fbbf24" strokeWidth={1.4} />
    <polygon points="140,22 144.6,25.6 138.4,26.6" fill="#fbbf24" />
    <T x={115} y={60} size={6.2} fill="#6ee7b7">torsion</T>
    <T x={115} y={67} size={4.6}>a twisting force</T>
  </svg>
);

/* ---------- pulley systems ---------- */

const Wheel = ({ x, y, r = 5 }: { x: number; y: number; r?: number }) => (
  <g>
    <circle cx={x} cy={y} r={r} fill="#1e293b" stroke="#fbbf24" strokeWidth={1.2} />
    <circle cx={x} cy={y} r={1.2} fill="#fbbf24" />
  </g>
);

export const PulleySystems = ({ load = 100 }: { load?: number }) => {
  const rope = '#e2e8f0';
  return (
    <svg viewBox="0 0 160 96" role="img" aria-labelledby="pu-t pu-d" className={cls} style={st}>
      <title id="pu-t">Fixed pulley, movable pulley and block and tackle</title>
      <desc id="pu-d">{`A fixed pulley changes the direction of the force: the load is held by 1 rope, so the effort equals the load (${pulleyEffort(load, 1)} N for ${load} N). A movable pulley has the load held by 2 rope segments, so the effort is half (${pulleyEffort(load, 2)} N). A block and tackle with 4 rope segments needs a quarter (${pulleyEffort(load, 4)} N). Friction is ignored.`}</desc>
      {/* fixed */}
      <rect x={10} y={4} width={36} height={4} fill="#64748b" />
      <Wheel x={28} y={16} />
      <line x1={23} y1={16} x2={23} y2={58} stroke={rope} strokeWidth={1} />
      <line x1={33} y1={16} x2={33} y2={46} stroke={rope} strokeWidth={1} />
      <rect x={17} y={58} width={12} height={9} rx={1.5} fill="#38bdf8" />
      <Arrow x1={33} y1={40} x2={33} y2={54} color="#fb923c" w={1.6} />
      <T x={28} y={78} size={5.4} fill="#fcd34d">fixed</T>
      <T x={28} y={85} size={4.4}>changes direction</T>
      <T x={28} y={92} size={4.6} fill="#fdba74">{`${pulleyEffort(load, 1)} N`}</T>
      {/* movable */}
      <rect x={62} y={4} width={36} height={4} fill="#64748b" />
      <Wheel x={72} y={16} />
      <line x1={67} y1={16} x2={67} y2={34} stroke={rope} strokeWidth={1} />
      <line x1={77} y1={16} x2={77} y2={46} stroke={rope} strokeWidth={1} />
      <Wheel x={85} y={46} />
      <line x1={80} y1={8} x2={80} y2={46} stroke={rope} strokeWidth={1} />
      <line x1={90} y1={8} x2={90} y2={46} stroke={rope} strokeWidth={1} opacity={0} />
      <line x1={85} y1={51} x2={85} y2={58} stroke={rope} strokeWidth={1} />
      <rect x={79} y={58} width={12} height={9} rx={1.5} fill="#38bdf8" />
      <T x={80} y={78} size={5.4} fill="#6ee7b7">movable</T>
      <T x={80} y={85} size={4.4}>2 ropes share the load</T>
      <T x={80} y={92} size={4.6} fill="#fdba74">{`${pulleyEffort(load, 2)} N`}</T>
      {/* block and tackle */}
      <rect x={116} y={4} width={36} height={4} fill="#64748b" />
      <Wheel x={126} y={14} r={4} /><Wheel x={142} y={14} r={4} />
      {[122, 130, 138, 146].map((x) => <line key={x} x1={x} y1={14} x2={x} y2={44} stroke={rope} strokeWidth={1} />)}
      <Wheel x={126} y={46} r={4} /><Wheel x={142} y={46} r={4} />
      <line x1={134} y1={50} x2={134} y2={58} stroke={rope} strokeWidth={1} />
      <rect x={128} y={58} width={12} height={9} rx={1.5} fill="#38bdf8" />
      <T x={134} y={78} size={5.4} fill="#c4b5fd">block and tackle</T>
      <T x={134} y={85} size={4.4}>4 ropes share the load</T>
      <T x={134} y={92} size={4.6} fill="#fdba74">{`${pulleyEffort(load, 4)} N`}</T>
    </svg>
  );
};

/* ---------- gear types ---------- */

const teethPath = (cx: number, cy: number, n: number, ro: number, ri: number) => {
  const pts: string[] = [];
  const step = (2 * Math.PI) / n;
  for (let i = 0; i < n; i++) {
    for (const [da, r] of [[0, ri], [step * 0.25, ro], [step * 0.5, ro], [step * 0.75, ri]] as const) pts.push(`${r3(cx + r * Math.cos(i * step + da))},${r3(cy + r * Math.sin(i * step + da))}`);
  }
  return pts.join(' ');
};

export const GearTypes = () => (
  <svg viewBox="0 0 160 84" role="img" aria-labelledby="gt-t gt-d" className={cls} style={st}>
    <title id="gt-t">Four kinds of gear drive</title>
    <desc id="gt-d">Spur gears have straight teeth and pass rotation between parallel shafts. Bevel gears pass motion between shafts that meet at an angle. A worm gear, a screw-like worm turning a worm wheel, gives a big speed reduction and high torque in a small space. A rack and pinion changes the turning of a small gear into straight-line motion of a toothed bar.</desc>
    {/* spur */}
    <polygon points={teethPath(12, 24, 10, 9, 6.6)} fill="#38bdf8" />
    <polygon points={teethPath(30, 24, 10, 9, 6.6)} fill="#34d399" />
    <T x={21} y={50} size={5.4} fill="#7dd3fc">spur</T>
    <T x={21} y={57} size={4.2}>parallel shafts</T>
    {/* bevel */}
    <polygon points="62,14 62,34 78,34 78,26" fill="#38bdf8" stroke="#0c4a6e" strokeWidth={0.5} />
    <polygon points="70,44 90,44 90,26 78,26" fill="#34d399" stroke="#064e3b" strokeWidth={0.5} opacity={0} />
    <polygon points="78,26 90,26 90,44 70,44" fill="#34d399" stroke="#064e3b" strokeWidth={0.5} />
    <T x={76} y={50} size={5.4} fill="#7dd3fc">bevel</T>
    <T x={76} y={57} size={4.2}>shafts at an angle</T>
    {/* worm */}
    <rect x={102} y={12} width={26} height={8} rx={3} fill="#fbbf24" />
    {[106, 112, 118, 124].map((x) => <line key={x} x1={x} y1={12} x2={x + 3} y2={20} stroke="#78350f" strokeWidth={1} />)}
    <polygon points={teethPath(115, 34, 14, 12, 9.4)} fill="#34d399" />
    <T x={115} y={58} size={5.4} fill="#fcd34d">worm</T>
    <T x={115} y={65} size={4.2}>big slow-down</T>
    {/* rack and pinion */}
    <polygon points={teethPath(146, 20, 8, 7, 4.8)} fill="#38bdf8" />
    <rect x={132} y={30} width={26} height={5} fill="#64748b" />
    {[134, 138, 142, 146, 150, 154].map((x) => <rect key={x} x={x} y={27.6} width={2} height={2.6} fill="#64748b" />)}
    <T x={156} y={50} anchor="end" size={5.4} fill="#c4b5fd">rack and</T>
    <T x={156} y={57} anchor="end" size={5.4} fill="#c4b5fd">pinion</T>
    <T x={158} y={64} anchor="end" size={4.2}>turns to a line</T>
  </svg>
);

/* ---------- a gear train ---------- */

export const GearTrain = ({ teeth = [12, 20, 12] }: { teeth?: number[] }) => {
  const k = 1.1;
  const radii = teeth.map((t) => t * k);
  const total = radii.reduce((a, r) => a + 2 * r, 0);
  let x = (160 - total) / 2;
  const cy = 36;
  const colors = ['#38bdf8', '#34d399', '#fbbf24'];
  return (
    <svg viewBox="0 0 160 84" role="img" aria-labelledby="gr-t gr-d" className={cls} style={st}>
      <title id="gr-t">A gear train</title>
      <desc id="gr-d">{`In a train of ${teeth.length} meshing gears, neighbouring gears turn in opposite directions: ${teeth.map((_, i) => trainDirection(i, 'clockwise')).join(', ')}.`}</desc>
      {teeth.map((t, i) => {
        const cx = r3(x + radii[i]);
        x += 2 * radii[i];
        const dir = trainDirection(i, 'clockwise');
        return (
          <g key={i}>
            <polygon points={teethPath(cx, cy, t, radii[i], radii[i] - 3)} fill={colors[i % 3]} stroke="#0f172a" strokeWidth={0.5} />
            <circle cx={cx} cy={cy} r={2.2} fill="#0f172a" />
            <T x={cx} y={cy + radii[i] + 11} size={5} fill={colors[i % 3]}>{dir}</T>
            <T x={cx} y={cy + radii[i] + 18} size={4.4}>{`${t} teeth`}</T>
          </g>
        );
      })}
    </svg>
  );
};

/* ---------- hydraulic press ---------- */

export const PascalPicture = ({ force = 50, a1 = 5, a2 = 10 }: { force?: number; a1?: number; a2?: number }) => {
  const p = pressure(force, a1);
  const f2 = outputForce(force, a1, a2);
  const w1 = r3(Math.sqrt(a1) * 7);
  const w2 = r3(Math.sqrt(a2) * 7);
  return (
    <svg viewBox="0 0 160 92" role="img" aria-labelledby="pa-t pa-d" className={cls} style={st}>
      <title id="pa-t">Pascal's principle in a hydraulic press</title>
      <desc id="pa-d">{`A force of ${force} newtons pushes on a small piston of area ${a1} square centimetres. The pressure, ${p} newtons per square centimetre, is passed on equally through the trapped fluid. The large piston has area ${a2} square centimetres, so its output force is ${f2} newtons.`}</desc>
      <rect x={20} y={46} width={120} height={22} fill="#1e3a5f" />
      <rect x={r3(40 - w1 / 2)} y={28} width={w1} height={20} fill="#1e3a5f" />
      <rect x={r3(120 - w2 / 2)} y={28} width={w2} height={20} fill="#1e3a5f" />
      <rect x={r3(40 - w1 / 2)} y={24} width={w1} height={4} fill="#cbd5e1" />
      <rect x={r3(120 - w2 / 2)} y={24} width={w2} height={4} fill="#cbd5e1" />
      <Arrow x1={40} y1={6} x2={40} y2={22} color="#fb923c" w={1.8} />
      <Arrow x1={120} y1={22} x2={120} y2={4} color="#34d399" w={2.4} />
      <T x={40} y={80} size={5.2} fill="#fdba74">{`in: ${force} N on ${a1} cm²`}</T>
      <T x={120} y={80} size={5.2} fill="#6ee7b7">{`out: ${f2} N on ${a2} cm²`}</T>
      <T x={80} y={60} size={5.2} fill="#bae6fd">{`pressure ${p} N/cm² everywhere`}</T>
      <T x={80} y={90} size={4.6}>{`${a2} ÷ ${a1} = ${gearRatio(a1, a2)}: twice the area, twice the force`}</T>
    </svg>
  );
};

/* ---------- two connected syringes ---------- */

export const SyringePair = () => (
  <svg viewBox="0 0 160 70" role="img" aria-labelledby="sy-t sy-d" className={cls} style={st}>
    <title id="sy-t">Two connected syringes</title>
    <desc id="sy-d">Pushing the plunger of one syringe moves the fluid or air through the tube and pushes the plunger of the other syringe outwards. With liquid this shows a hydraulic system; with air it shows a pneumatic system.</desc>
    <rect x={10} y={22} width={44} height={14} rx={2} fill="#1e3a5f" stroke="#94a3b8" strokeWidth={1} />
    <rect x={2} y={27} width={10} height={4} fill="#94a3b8" /><rect x={0} y={23} width={3} height={12} fill="#94a3b8" />
    <rect x={106} y={22} width={44} height={14} rx={2} fill="#1e3a5f" stroke="#94a3b8" strokeWidth={1} />
    <rect x={152} y={27} width={8} height={4} fill="#94a3b8" /><rect x={148} y={23} width={3} height={12} fill="#94a3b8" />
    <path d="M54 29 L106 29" stroke="#38bdf8" strokeWidth={3} />
    <Arrow x1={-2} y1={14} x2={10} y2={14} color="#fb923c" w={1.8} />
    <T x={22} y={12} size={5.2} fill="#fdba74" anchor="end">push</T>
    <Arrow x1={152} y1={14} x2={160} y2={14} color="#34d399" w={1.8} />
    <T x={150} y={12} size={5.2} fill="#6ee7b7" anchor="end">moves out</T>
    <T x={80} y={50} size={5.4} fill="#bae6fd">liquid: hydraulic</T>
    <T x={80} y={58} size={5.4} fill="#e2e8f0">air: pneumatic</T>
    <T x={80} y={67} size={4.6}>the pressure is passed along the tube</T>
  </svg>
);
