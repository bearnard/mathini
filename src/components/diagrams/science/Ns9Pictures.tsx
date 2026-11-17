import { r3 } from '../round';
import { Panel, PICTURE_COLORS } from '../maths/Grade7Pictures';

/**
 * Grade 9 Natural Sciences pictures (Terms 3 and 4): force arrows, two magnets, a 3-pin plug, a parallel circuit that is overloaded, and later the
 * atmosphere. Everything drawn and every label comes from the arguments, so a picture always matches the worked example above it.
 */
const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const { indigo: I, green: E, amber: A, rose: R } = PICTURE_COLORS;

const T = ({ x, y, children, color = LINE, size = 4.4, anchor = 'middle' }: { x: number; y: number; children: React.ReactNode; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={r3(x)} y={r3(y)} textAnchor={anchor} fontSize={size} fontWeight={800} fill={color}>{children}</text>
);

const arrow = (x1: number, y: number, x2: number, color: string, key: string) => {
  const dir = x2 >= x1 ? 1 : -1;
  return (
    <g key={key}>
      <line x1={x1} y1={y} x2={x2 - dir * 2} y2={y} stroke={color} strokeWidth={1.4} />
      <polygon points={`${x2},${y} ${x2 - dir * 4},${y - 2.2} ${x2 - dir * 4},${y + 2.2}`} fill={color} />
    </g>
  );
};

/** Two objects pushing on each other with a pair of equal and opposite forces, in newtons (the forces act in pairs). */
export const ForcePair = ({ newtons }: { newtons: number }) => (
  <Panel h={40} aria={`Two blocks pushing on each other. Each pushes on the other with a force of ${newtons} newtons in opposite directions: forces always act in pairs.`}>
    <rect x={22} y={12} width={26} height={18} rx={2} fill="rgba(129,140,248,0.35)" stroke={I} strokeWidth={0.8} />
    <rect x={72} y={12} width={26} height={18} rx={2} fill="rgba(251,191,36,0.3)" stroke={A} strokeWidth={0.8} />
    {arrow(14, 21, 22, I, 'l')}
    {arrow(106, 21, 98, A, 'r')}
    {arrow(48, 21, 70, I, 'a')}
    {arrow(72, 21, 50, A, 'b')}
    <T x={40} y={10} size={3.8}>{`${newtons} N`}</T>
    <T x={80} y={10} size={3.8} color={A}>{`${newtons} N`}</T>
    <T x={60} y={37} size={3.8} color={MUTED}>equal and opposite pair</T>
  </Panel>
);

/** Two bar magnets, with the poles marked: unlike poles face each other (attract, arrows pulling together) or like poles face each other (repel). */
export const MagnetPair = ({ attract }: { attract: boolean }) => {
  const left = ['N', 'S'];
  const right = attract ? ['N', 'S'] : ['S', 'N'];
  const mag = (x: number, p: string[]) => (
    <g>
      <rect x={x} y={14} width={20} height={11} fill="rgba(248,113,113,0.5)" stroke={LINE} strokeWidth={0.5} />
      <rect x={x + 20} y={14} width={20} height={11} fill="rgba(96,165,250,0.5)" stroke={LINE} strokeWidth={0.5} />
      <T x={x + 10} y={22} size={5.4} color={INK}>{p[0]}</T>
      <T x={x + 30} y={22} size={5.4} color={INK}>{p[1]}</T>
    </g>
  );
  return (
    <Panel h={46} aria={`Two bar magnets in a line. The first has its north pole on the left and its south pole on the right. The second has its ${attract ? 'north' : 'south'} pole on the left, facing the first magnet's south pole. ${attract ? 'Unlike poles face each other, so the magnets attract.' : 'Like poles face each other, so the magnets repel.'}`}>
      {mag(12, left)}
      {mag(68, right)}
      {attract ? arrow(54, 19.5, 64, E, 'a') : arrow(58, 19.5, 52, R, 'b')}
      {attract ? arrow(66, 19.5, 56, E, 'c') : arrow(62, 19.5, 68, R, 'd')}
      <T x={60} y={40} size={4.4} color={attract ? E : R}>{attract ? 'unlike poles attract' : 'like poles repel'}</T>
    </Panel>
  );
};

/** A 3-pin plug seen from the front: the live and neutral pins carry the current, the earth pin joins the metal case of the appliance to the ground. */
export const PlugDiagram = () => (
  <Panel h={60} aria="A three-pin plug seen from the front. The two lower pins are the live pin and the neutral pin, which carry the current to and from the appliance. The top, longer pin is the earth pin, which is joined to the metal case of the appliance and to an earth cable in the ground.">
    <rect x={36} y={4} width={48} height={50} rx={9} fill="rgba(148,163,184,0.15)" stroke={MUTED} strokeWidth={0.8} />
    <rect x={57.5} y={9} width={5} height={15} fill={E} />
    <rect x={44} y={34} width={5} height={13} fill={R} />
    <rect x={71} y={34} width={5} height={13} fill={I} />
    <T x={60} y={31} size={3.8} color={E}>earth</T>
    <T x={46.5} y={52} size={3.6} color={R}>live</T>
    <T x={73.5} y={52} size={3.6} color={I}>neutral</T>
    <T x={20} y={30} size={3.4} color={MUTED} anchor="middle">to the</T>
    <T x={20} y={34.5} size={3.4} color={MUTED} anchor="middle">metal case</T>
    <T x={104} y={30} size={3.4} color={MUTED} anchor="middle">to the</T>
    <T x={104} y={34.5} size={3.4} color={MUTED} anchor="middle">ground</T>
  </Panel>
);

/** Appliances in parallel on one mains circuit, each drawing the current shown, with the total and the rating of the circuit breaker. */
export const ParallelOverload = ({ currents, ratingA }: { currents: number[]; ratingA: number }) => {
  const total = Math.round(currents.reduce((a, b) => a + b, 0) * 1e6) / 1e6;
  const over = total > ratingA;
  const n = currents.length;
  const x = (i: number) => 28 + (i * 70) / Math.max(1, n - 1);
  return (
    <Panel h={64} aria={`A mains circuit with a ${ratingA} ampere circuit breaker and ${n} appliances in parallel drawing ${currents.map((c) => `${String(c).replace('.', ',')} amperes`).join(', ')}. The total current is ${String(total).replace('.', ',')} amperes, which ${over ? `is more than the ${ratingA} ampere rating, so the breaker trips` : `is within the ${ratingA} ampere rating`}.`}>
      <line x1={14} y1={14} x2={106} y2={14} stroke={LINE} strokeWidth={0.9} />
      <line x1={14} y1={40} x2={106} y2={40} stroke={LINE} strokeWidth={0.9} />
      <rect x={6} y={10} width={12} height={8} rx={1.5} fill={over ? 'rgba(248,113,113,0.5)' : 'rgba(74,222,128,0.4)'} stroke={LINE} strokeWidth={0.5} />
      <T x={12} y={26} size={3.4} color={over ? R : E}>{`${ratingA} A`}</T>
      {currents.map((c, i) => (
        <g key={i}>
          <line x1={x(i)} y1={14} x2={x(i)} y2={22} stroke={LINE} strokeWidth={0.7} />
          <rect x={x(i) - 6} y={22} width={12} height={10} rx={2} fill="rgba(129,140,248,0.3)" stroke={I} strokeWidth={0.7} />
          <line x1={x(i)} y1={32} x2={x(i)} y2={40} stroke={LINE} strokeWidth={0.7} />
          <T x={x(i)} y={29.5} size={3.6}>{`${String(c).replace('.', ',')} A`}</T>
        </g>
      ))}
      <T x={60} y={52} size={4.4} color={over ? R : E}>{`total ${String(total).replace('.', ',')} A ${over ? '> ' : '≤ '}${ratingA} A`}</T>
      <T x={60} y={59} size={3.6} color={MUTED}>{over ? 'overload: the breaker trips' : 'safe: within the rating'}</T>
    </Panel>
  );
};


/** Two bars for the national grid: the energy sent into the grid and the energy that arrives after the share lost as heat in the lines and transformers. */
export const GridLoss = ({ sent, delivered, unit = 'MWh' }: { sent: number; delivered: number; unit?: string }) => {
  const lostE = Math.round((sent - delivered) * 1e6) / 1e6;
  const w = 80;
  return (
    <Panel h={50} aria={`Two bars. ${sent} ${unit} of energy is sent into the grid. After the energy lost as heat in the power lines and transformers, ${delivered} ${unit} is delivered, so ${lostE} ${unit} is lost.`}>
      <rect x={20} y={8} width={w} height={9} rx={1.5} fill={I} />
      <T x={22} y={14.8} anchor="start" size={4} color={INK}>{`sent into the grid: ${sent} ${unit}`}</T>
      <rect x={20} y={22} width={r3((w * delivered) / sent)} height={9} rx={1.5} fill={E} />
      <rect x={r3(20 + (w * delivered) / sent)} y={22} width={r3((w * lostE) / sent)} height={9} rx={1.5} fill={R} />
      <T x={22} y={28.8} anchor="start" size={4} color={INK}>{`delivered: ${delivered} ${unit}`}</T>
      <T x={60} y={40} size={4} color={R}>{`lost as heat: ${lostE} ${unit}`}</T>
      <T x={60} y={46} size={3.4} color={MUTED}>power lines and transformers</T>
    </Panel>
  );
};

/** One bar showing the composition of air: nitrogen, oxygen and the rest (carbon dioxide, water vapour and other gases), in per cent. */
export const AirBar = ({ nitrogen, oxygen, other }: { nitrogen: number; oxygen: number; other: number }) => {
  const w = 100;
  const x0 = 10;
  const nW = (w * nitrogen) / 100;
  const oW = (w * oxygen) / 100;
  const rW = Math.max(1.4, (w * other) / 100);
  return (
    <Panel h={44} aria={`A bar showing the gases in air. Nitrogen ${nitrogen}%, oxygen ${oxygen}%, and about ${other}% for carbon dioxide (less than 1%), water vapour and other gases together.`}>
      <rect x={x0} y={12} width={r3(nW)} height={12} fill={I} />
      <rect x={r3(x0 + nW)} y={12} width={r3(oW)} height={12} fill={E} />
      <rect x={r3(x0 + nW + oW)} y={12} width={r3(rW)} height={12} fill={A} />
      <T x={x0 + nW / 2} y={20} size={4.4} color={INK}>{`nitrogen ${nitrogen}%`}</T>
      <T x={x0 + nW + oW / 2} y={20} size={4.4} color={INK}>{`oxygen ${oxygen}%`}</T>
      <T x={60} y={36} size={3.8} color={A}>{`other gases about ${other}%: carbon dioxide (less than 1%), water vapour`}</T>
    </Panel>
  );
};

/** The layers of the atmosphere to scale up to 100 km (the thermosphere goes on to about 350 km): troposphere, stratosphere, mesosphere, thermosphere. */
export const LayersScale = ({ layers }: { layers: { name: string; fromKm: number; toKm: number }[] }) => {
  const top = 4;
  const bottom = 70;
  const scale = (bottom - top) / 100; // units per km
  const colors = [E, I, A, R];
  return (
    <Panel h={76} aria={`The layers of the atmosphere drawn to scale up to 100 kilometres: ${layers.map((l) => `${l.name} from ${l.fromKm} to ${l.toKm} kilometres`).join(', ')}. The thermosphere continues up to about 350 kilometres.`}>
      {layers.map((l, i) => {
        const y1 = bottom - Math.min(l.toKm, 100) * scale;
        const y2 = bottom - l.fromKm * scale;
        return (
          <g key={l.name}>
            <rect x={8} y={r3(y1)} width={26} height={r3(y2 - y1)} fill={colors[i % colors.length]} opacity={0.55} stroke={INK} strokeWidth={0.4} />
            <T x={38} y={r3((y1 + y2) / 2 + 1.4)} anchor="start" size={4} color={LINE}>{`${l.name}: ${l.fromKm} to ${l.toKm > 100 ? 'about ' + l.toKm : l.toKm} km`}</T>
          </g>
        );
      })}
      <T x={21} y={74} size={3.4} color={MUTED}>Earth&apos;s surface</T>
      <T x={21} y={3.2} size={3.2} color={MUTED}>100 km</T>
    </Panel>
  );
};

/** The temperature in the troposphere at heights above sea level: it falls about 1 °C for every 100 m. */
export const TempDrop = ({ points }: { points: { heightM: number; tempC: number }[] }) => {
  const maxH = Math.max(...points.map((p) => p.heightM));
  const temps = points.map((p) => p.tempC);
  const lo = Math.min(...temps) - 5;
  const hi = Math.max(...temps) + 5;
  const X = (t: number) => r3(18 + ((t - lo) / (hi - lo)) * 86);
  const Y = (h: number) => r3(52 - (h / maxH) * 40);
  return (
    <Panel h={64} aria={`The temperature at heights above sea level in the troposphere: ${points.map((p) => `${p.heightM} metres: ${String(p.tempC).replace('.', ',')} degrees Celsius`).join('; ')}. It falls as the height increases.`}>
      <line x1={18} y1={52} x2={106} y2={52} stroke={MUTED} strokeWidth={0.5} />
      <line x1={18} y1={10} x2={18} y2={52} stroke={MUTED} strokeWidth={0.5} />
      <polyline points={points.map((p) => `${X(p.tempC)},${Y(p.heightM)}`).join(' ')} fill="none" stroke={A} strokeWidth={1.2} />
      {points.map((p) => (
        <g key={p.heightM}>
          <circle cx={X(p.tempC)} cy={Y(p.heightM)} r={1.6} fill={A} />
          <T x={X(p.tempC) + 3} y={Y(p.heightM) + 1.4} anchor="start" size={3.6}>{`${String(p.tempC).replace('.', ',')} °C`}</T>
          <T x={16} y={Y(p.heightM) + 1.4} anchor="end" size={3.4} color={MUTED}>{`${p.heightM.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} m`}</T>
        </g>
      ))}
      <T x={62} y={60} size={3.6} color={MUTED}>height above sea level (m) and temperature</T>
    </Panel>
  );
};

/** The greenhouse effect: the Sun warms the Earth, the Earth gives out heat, and greenhouse gases trap some of it, so the air near the surface stays warm. */
export const GreenhouseDiagram = () => (
  <Panel h={66} aria="The greenhouse effect. Energy from the Sun reaches the Earth and warms it. The warm Earth gives out heat. A layer of greenhouse gases traps some of this heat and sends it back towards the surface, so the air near the surface is warmer than it would be without them.">
    <circle cx={16} cy={12} r={6} fill={A} />
    <T x={16} y={24} size={3.6}>Sun</T>
    <line x1={24} y1={14} x2={50} y2={44} stroke={A} strokeWidth={1.2} />
    <polygon points="50,44 45,42 48,39" fill={A} />
    <rect x={6} y={50} width={108} height={9} fill="rgba(74,222,128,0.4)" stroke={E} strokeWidth={0.5} />
    <T x={60} y={57} size={3.8} color={INK}>Earth&apos;s surface</T>
    <rect x={6} y={26} width={108} height={7} fill="rgba(148,163,184,0.25)" stroke={MUTED} strokeWidth={0.4} strokeDasharray="2 1.4" />
    <T x={84} y={31.6} size={3.6}>greenhouse gases</T>
    <line x1={64} y1={48} x2={64} y2={37} stroke={R} strokeWidth={1.2} />
    <polygon points="64,35 61.5,39 66.5,39" fill={R} />
    <line x1={96} y1={36} x2={96} y2={46} stroke={R} strokeWidth={1.2} strokeDasharray="2 1.4" />
    <polygon points="96,48 93.5,44 98.5,44" fill={R} />
    <T x={72} y={21} size={3.4} color={R}>heat escapes upwards</T>
    <T x={78} y={64.5} size={3.2} color={R}>some heat is trapped and returned</T>
  </Panel>
);
