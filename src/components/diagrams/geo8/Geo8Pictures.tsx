import { MONTHS, type ClimateData } from './grade8Geo';

/**
 * Pictures for the Grade 8 Geography gap lessons, in the style of the other lesson pictures: dark panel,
 * 120-unit-wide viewBox, indigo / emerald / amber / rose. Every position comes from the numbers passed in.
 */
const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const I = '#818cf8';
const E = '#34d399';
const A = '#fbbf24';
const R = '#fb7185';

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK }}>
    {children}
  </svg>
);
const T = ({ x, y, children, color = LINE, size = 5.4, anchor = 'middle' }: { x: number; y: number; children: React.ReactNode; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={800} fill={color}>{children}</text>
);
const f1 = (n: number) => (Number.isInteger(n) ? String(n) : String(n).replace('.', ','));

/** Three midday sun rays reaching the same place on the ground at the angles for 21 December, the equinox and 21 June. */
export const SunAngle = ({ place, rays }: { place: string; rays: { label: string; angle: number; color: 'a' | 'e' | 'r' }[] }) => {
  const px = 80;
  const py = 46;
  const col = { a: A, e: E, r: R };
  return (
    <Panel
      h={56}
      aria={`Three sun rays reaching ${place} at midday. ${rays.map((r) => `${r.label}: the ray meets the ground at ${f1(r.angle)} degrees`).join('. ')}. A higher angle means the sunlight is more concentrated.`}
    >
      <line x1={6} y1={py} x2={114} y2={py} stroke={MUTED} strokeWidth={1} />
      {rays.map((r, i) => {
        const a = (r.angle * Math.PI) / 180;
        const len = 38;
        const x0 = px - len * Math.cos(a);
        const y0 = py - len * Math.sin(a);
        return (
          <g key={i}>
            <line x1={x0} y1={y0} x2={px} y2={py} stroke={col[r.color]} strokeWidth={1.4} />
            <T x={6} y={9 + i * 7.5} color={col[r.color]} size={5} anchor="start">{`${r.label} ${f1(r.angle)}°`}</T>
          </g>
        );
      })}
      <circle cx={px} cy={py} r={1.6} fill={LINE} />
      <T x={114} y={py + 8} anchor="end" size={4.8}>{place}</T>
    </Panel>
  );
};

/** A climate graph: bars for rainfall, a line for temperature, with the month initials underneath. */
export const ClimateGraph = ({ data }: { data: ClimateData }) => {
  const maxRain = Math.max(...data.rain);
  const maxTemp = Math.max(...data.temp);
  const left = 10;
  const w = 100 / 12;
  const base = 44;
  const top = 8;
  const rainH = (v: number) => (v / (maxRain || 1)) * (base - top);
  const tempY = (v: number) => base - (v / (maxTemp + 5)) * (base - top);
  const pts = data.temp.map((v, i) => `${(left + i * w + w / 2).toFixed(1)},${tempY(v).toFixed(1)}`).join(' ');
  return (
    <Panel
      h={58}
      aria={`A climate graph for ${data.name}. The bars show rainfall and the line shows temperature, month by month from January to December. ${MONTHS.map((m, i) => `${m}: ${data.rain[i]} millimetres, ${data.temp[i]} degrees`).join('; ')}.`}
    >
      <line x1={left} y1={base} x2={left + 100} y2={base} stroke={MUTED} strokeWidth={0.8} />
      {data.rain.map((v, i) => <rect key={i} x={left + i * w + 1} y={base - rainH(v)} width={w - 2} height={rainH(v)} fill={I} fillOpacity={0.7} />)}
      <polyline points={pts} fill="none" stroke={R} strokeWidth={1.4} />
      {'JFMAMJJASOND'.split('').map((c, i) => <T key={i} x={left + i * w + w / 2} y={50} size={4.6} color={MUTED}>{c}</T>)}
      <T x={left} y={6} anchor="start" size={4.8} color={I}>rainfall (bars)</T>
      <T x={left + 100} y={6} anchor="end" size={4.8} color={R}>temperature (line)</T>
      <T x={60} y={57} size={4.8} color={MUTED}>{data.name}</T>
    </Panel>
  );
};

/** A schematic strip from the equator to a pole showing which kind of climate is typical where (not to scale). */
export const LatitudeBands = ({ bands }: { bands: { label: string; from: number; to: number; color: 'a' | 'e' | 'i' | 'r' }[] }) => {
  const col = { a: A, e: E, i: I, r: R };
  const x0 = 8;
  const w = 104;
  return (
    <Panel
      h={40}
      aria={`A schematic strip from the equator at 0 degrees to the pole at 90 degrees. ${bands.map((b) => `${b.label} between about ${b.from} and ${b.to} degrees`).join('; ')}. The strip is not to scale.`}
    >
      {bands.map((b, i) => (
        <g key={i}>
          <rect x={x0 + (b.from / 90) * w} y={10} width={((b.to - b.from) / 90) * w - 0.6} height={14} fill={col[b.color]} fillOpacity={0.85} />
          <T x={x0 + (((b.from + b.to) / 2) / 90) * w} y={19.4} size={4.4} color={INK}>{b.label}</T>
        </g>
      ))}
      <T x={x0} y={32} anchor="start" size={4.8}>Equator 0°</T>
      <T x={x0 + w} y={32} anchor="end" size={4.8}>Pole 90°</T>
      <T x={60} y={38} size={4.4} color={MUTED}>schematic, not to scale</T>
    </Panel>
  );
};

/**
 * A simple sketch map of an imagined settlement, to show what a good sketch map contains: a title, a river and a road,
 * labelled places, a north arrow and a key. The labels come from the lesson (at most four places).
 */
export const SketchMap = ({ title, places, aria }: { title: string; places: string[]; aria: string }) => {
  const spots = [
    { x: 30, y: 24 },
    { x: 56, y: 32 },
    { x: 80, y: 22 },
    { x: 96, y: 47 },
  ].slice(0, places.length);
  return (
    <Panel h={62} aria={aria}>
      <rect x={4} y={4} width={112} height={54} rx={3} fill="none" stroke={MUTED} strokeWidth={0.8} />
      <T x={60} y={11} size={5.6} color={A}>{title}</T>
      <path d="M8,56 C30,40 40,50 62,38 S100,30 112,14" fill="none" stroke={I} strokeWidth={2} />
      <line x1={8} y1={40} x2={112} y2={36} stroke={LINE} strokeWidth={1.4} strokeDasharray="4 2" />
      {spots.map((s, i) => (
        <g key={i}>
          <rect x={s.x - 3} y={s.y - 3} width={6} height={6} fill={[E, R, A, E][i]} />
          <T x={s.x} y={s.y - 5} size={4.4}>{places[i]}</T>
        </g>
      ))}
      <path d="M104,28 v-9 m-2.4,3 l2.4,-3 l2.4,3" fill="none" stroke={LINE} strokeWidth={1} />
      <T x={104} y={33} size={4.4}>N</T>
      <T x={10} y={55} anchor="start" size={4.2} color={I}>Key: river</T>
      <T x={78} y={55} anchor="start" size={4.2} color={MUTED}>- - road</T>
    </Panel>
  );
};
