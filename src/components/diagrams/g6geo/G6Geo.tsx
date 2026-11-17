import { r3 } from '../round';
import { BANDS, latFraction, MONTHS, RAIN_MM, TEMP_C, type Section, type IndexEntry } from './g6geoHelpers';

/** Pictures for the Grade 6 Geography lessons. Every position comes from g6geoHelpers.ts. */

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
const T = ({ x, y, children, size = 4.6, fill = LINE, anchor = 'middle', weight = 700 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>{children}</text>
);

// ---------- the contents page and the index of a sample atlas ----------

export const AtlasPages = ({ contents, index }: { contents: Section[]; index: IndexEntry[] }) => {
  const rows = Math.max(contents.length, index.length);
  return (
    <Panel h={22 + rows * 9} aria={`A sample atlas. The contents page lists the sections with their pages: ${contents.map((s) => `${s.name}, pages ${s.from} to ${s.to}`).join('; ')}. The index lists places in alphabetical order with a page and a block reference: ${index.map((e) => `${e.place}, page ${e.page}, ${e.ref}`).join('; ')}.`}>
      <rect x={3} y={3} width={56} height={14 + rows * 9} rx={3} fill={BLUE} fillOpacity={0.14} stroke={BLUE} strokeWidth={0.8} />
      <rect x={61} y={3} width={56} height={14 + rows * 9} rx={3} fill={GREEN} fillOpacity={0.14} stroke={GREEN} strokeWidth={0.8} />
      <T x={31} y={10} size={5} fill={BLUE} weight={800}>Contents</T>
      <T x={89} y={10} size={5} fill={GREEN} weight={800}>Index</T>
      {contents.map((s, i) => (
        <g key={s.name}>
          <T x={6} y={19 + i * 9} size={4.2} anchor="start" weight={600}>{s.name}</T>
          <T x={56} y={19 + i * 9} size={4.2} anchor="end" fill={AMBER}>{`${s.from}–${s.to}`}</T>
        </g>
      ))}
      {index.map((e, i) => (
        <g key={e.place}>
          <T x={64} y={19 + i * 9} size={4.2} anchor="start" weight={600}>{e.place}</T>
          <T x={114} y={19 + i * 9} size={4.2} anchor="end" fill={AMBER}>{`${e.page}, ${e.ref}`}</T>
        </g>
      ))}
    </Panel>
  );
};

// ---------- where the regions lie by latitude ----------

export const LatitudeBands = () => {
  const x0 = 34, x1 = 114, top = 6, h = 72;
  const y = (lat: number) => r3(top + latFraction(lat) * h);
  const cols = [BLUE, AMBER, GREEN];
  return (
    <Panel h={90} aria={`Latitude bands on a side view of the Earth, from 90 degrees north at the top to 90 degrees south at the bottom. Tropical rainforests lie close to the Equator. Hot deserts lie roughly from 15 to 35 degrees north. Coniferous forests lie in a belt in the Northern Hemisphere, roughly from 50 to 65 degrees north.`}>
      <rect x={x0} y={top} width={x1 - x0} height={h} rx={2} fill="none" stroke={MUTED} strokeWidth={0.6} />
      {[90, 60, 30, 0, -30, -60, -90].map((lat) => (
        <g key={lat}>
          <line x1={x0 - 2} y1={y(lat)} x2={x1} y2={y(lat)} stroke="#334155" strokeWidth={lat === 0 ? 0.9 : 0.4} />
          <T x={x0 - 4} y={y(lat) + 1.4} size={3.6} anchor="end" fill={MUTED} weight={600}>{lat === 0 ? '0° Equator' : `${Math.abs(lat)}°${lat > 0 ? 'N' : 'S'}`}</T>
        </g>
      ))}
      {BANDS.map((b, i) => (
        <g key={b.name}>
          <rect x={x0 + 2} y={y(b.to)} width={x1 - x0 - 4} height={r3(y(b.from) - y(b.to))} rx={1.5} fill={cols[i]} fillOpacity={0.55} />
          <T x={r3((x0 + x1) / 2)} y={r3((y(b.to) + y(b.from)) / 2 + 1.3)} size={3.8} fill={INK} weight={800}>{b.name}</T>
        </g>
      ))}
      <T x={r3((x0 + x1) / 2)} y={86} size={3.6} fill={MUTED} weight={600}>latitudes are approximate</T>
    </Panel>
  );
};

// ---------- a climate graph: rainfall bars and a temperature line ----------

export const ClimatePanel = () => {
  const x0 = 14, w = 96, y0 = 46, rainTop = 80; // rain axis 0..80 mm; temperature axis -20..20 °C mapped to the same height
  const h = 34;
  const bw = w / 12;
  const rainY = (mm: number) => r3(y0 - (mm / rainTop) * h);
  const tempY = (t: number) => r3(y0 - ((t + 20) / 40) * h);
  const line = TEMP_C.map((t, i) => `${i === 0 ? 'M' : 'L'}${r3(x0 + i * bw + bw / 2)} ${tempY(t)}`).join(' ');
  return (
    <Panel h={66} aria="A climate graph for an example coniferous forest. Blue bars show rainfall in millimetres for each month, from about 25 to 75, with the most in July and August. The red line shows temperature in degrees Celsius, from about minus 12 in January up to 18 in July, and below zero for five months of the year.">
      <T x={60} y={6} size={4.4} fill={AMBER}>Example coniferous forest: rainfall and temperature</T>
      <line x1={x0} y1={tempY(0)} x2={x0 + w} y2={tempY(0)} stroke={MUTED} strokeWidth={0.5} strokeDasharray="1.5 1.2" />
      <T x={x0 - 1.5} y={tempY(0) + 1.4} size={3.4} anchor="end" fill={MUTED} weight={600}>0°</T>
      {RAIN_MM.map((mm, i) => (
        <rect key={i} x={r3(x0 + i * bw + 1)} y={rainY(mm)} width={r3(bw - 2)} height={r3(y0 - rainY(mm))} fill={SKY} fillOpacity={0.8} />
      ))}
      <path d={line} fill="none" stroke={ROSE} strokeWidth={1.3} strokeLinejoin="round" />
      {MONTHS.map((m, i) => (
        <T key={i} x={r3(x0 + i * bw + bw / 2)} y={y0 + 5} size={3.8} fill={MUTED} weight={600}>{m}</T>
      ))}
      <rect x={14} y={56} width={4} height={4} fill={SKY} />
      <T x={20} y={59.4} size={3.8} anchor="start" weight={600}>rainfall (mm)</T>
      <rect x={66} y={57.4} width={5} height={1.4} fill={ROSE} />
      <T x={73} y={59.4} size={3.8} anchor="start" weight={600}>temperature (°C)</T>
    </Panel>
  );
};
