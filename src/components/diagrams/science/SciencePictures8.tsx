import { r3 } from '../round';
import { Arrow, T, cls, st, SOFT } from './SciencePictures';
import { ldrResistance, thermistorResistance } from './electronicsHelpers';

/**
 * Grade 9 electronics and processing pictures: component symbols, how sensor resistance changes,
 * and an electroplating cell. Curves come from electronicsHelpers.ts and are schematic (no real
 * values). At most six labels each.
 */

/* ---------- electronic component symbols ---------- */

export const ElectronicSymbols = () => {
  const cx = (i: number) => 16 + i * 32;
  const items = [
    { name: 'diode', note: 'current one way' },
    { name: 'LED', note: 'gives light' },
    { name: 'LDR', note: 'light sensor' },
    { name: 'thermistor', note: 'heat sensor' },
    { name: 'transistor', note: 'electronic switch' },
  ];
  return (
    <svg viewBox="0 0 160 72" role="img" aria-labelledby="es-t es-d" className={cls} style={st}>
      <title id="es-t">Electronic component symbols</title>
      <desc id="es-d">A diode lets current flow in one direction only. An LED is a light-emitting diode. An LDR is a light-dependent resistor, a light sensor. A thermistor is a resistor that responds to temperature. A transistor works as an electronic switch turned on by a small signal.</desc>
      {items.map((it, i) => (
        <g key={it.name}>
          <T x={cx(i)} y={54} size={5} fill="#e2e8f0">{it.name}</T>
          <T x={cx(i)} y={62} size={3.9} fill={SOFT}>{it.note}</T>
        </g>
      ))}
      {/* diode: triangle pointing right with a bar */}
      <line x1={cx(0) - 13} y1={24} x2={cx(0) - 6} y2={24} stroke="#94a3b8" strokeWidth={1} />
      <polygon points={`${cx(0) - 6},16 ${cx(0) - 6},32 ${cx(0) + 5},24`} fill="none" stroke="#7dd3fc" strokeWidth={1.2} />
      <line x1={cx(0) + 5} y1={16} x2={cx(0) + 5} y2={32} stroke="#7dd3fc" strokeWidth={1.4} />
      <line x1={cx(0) + 5} y1={24} x2={cx(0) + 13} y2={24} stroke="#94a3b8" strokeWidth={1} />
      {/* LED: diode with two light arrows */}
      <line x1={cx(1) - 13} y1={24} x2={cx(1) - 6} y2={24} stroke="#94a3b8" strokeWidth={1} />
      <polygon points={`${cx(1) - 6},16 ${cx(1) - 6},32 ${cx(1) + 5},24`} fill="none" stroke="#fde047" strokeWidth={1.2} />
      <line x1={cx(1) + 5} y1={16} x2={cx(1) + 5} y2={32} stroke="#fde047" strokeWidth={1.4} />
      <line x1={cx(1) + 5} y1={24} x2={cx(1) + 13} y2={24} stroke="#94a3b8" strokeWidth={1} />
      <Arrow x1={cx(1) - 2} y1={14} x2={cx(1) + 6} y2={6} color="#fde047" w={0.8} />
      <Arrow x1={cx(1) + 3} y1={15} x2={cx(1) + 11} y2={7} color="#fde047" w={0.8} />
      {/* LDR: resistor box in a circle with arrows in */}
      <line x1={cx(2) - 13} y1={24} x2={cx(2) - 8} y2={24} stroke="#94a3b8" strokeWidth={1} />
      <rect x={cx(2) - 8} y={20} width={16} height={8} fill="none" stroke="#6ee7b7" strokeWidth={1.2} />
      <line x1={cx(2) + 8} y1={24} x2={cx(2) + 13} y2={24} stroke="#94a3b8" strokeWidth={1} />
      <Arrow x1={cx(2) - 10} y1={6} x2={cx(2) - 3} y2={14} color="#fde047" w={0.8} />
      <Arrow x1={cx(2) - 4} y1={5} x2={cx(2) + 3} y2={13} color="#fde047" w={0.8} />
      {/* thermistor: resistor box with a slanted bar */}
      <line x1={cx(3) - 13} y1={24} x2={cx(3) - 8} y2={24} stroke="#94a3b8" strokeWidth={1} />
      <rect x={cx(3) - 8} y={20} width={16} height={8} fill="none" stroke="#fdba74" strokeWidth={1.2} />
      <line x1={cx(3) + 8} y1={24} x2={cx(3) + 13} y2={24} stroke="#94a3b8" strokeWidth={1} />
      <line x1={cx(3) - 9} y1={34} x2={cx(3) + 9} y2={14} stroke="#fdba74" strokeWidth={1} />
      {/* transistor: circle, base line and two legs */}
      <circle cx={cx(4)} cy={24} r={11} fill="none" stroke="#c4b5fd" strokeWidth={1.2} />
      <line x1={cx(4) - 13} y1={24} x2={cx(4) - 3} y2={24} stroke="#94a3b8" strokeWidth={1} />
      <line x1={cx(4) - 3} y1={16} x2={cx(4) - 3} y2={32} stroke="#c4b5fd" strokeWidth={1.6} />
      <line x1={cx(4) - 3} y1={20} x2={cx(4) + 6} y2={14} stroke="#c4b5fd" strokeWidth={1.2} />
      <line x1={cx(4) - 3} y1={28} x2={cx(4) + 6} y2={34} stroke="#c4b5fd" strokeWidth={1.2} />
    </svg>
  );
};

/* ---------- sensors: resistance against light and against heat ---------- */

export const SensorCurves = () => {
  const X0 = 14;
  const W = 56;
  const Y0 = 14;
  const H = 40;
  const panel = (ox: number, f: (x: number) => number, color: string, xlabel: string) => {
    const vals = Array.from({ length: 41 }, (_, i) => f(i / 40));
    const hi = Math.max(...vals);
    const lo = Math.min(...vals);
    const pts = vals.map((v, i) => `${r3(ox + (i / 40) * W)},${r3(Y0 + (1 - (v - lo) / (hi - lo)) * H)}`).join(' ');
    return (
      <g>
        <line x1={ox} y1={Y0 - 4} x2={ox} y2={Y0 + H} stroke="#94a3b8" strokeWidth={0.8} />
        <line x1={ox} y1={Y0 + H} x2={ox + W + 3} y2={Y0 + H} stroke="#94a3b8" strokeWidth={0.8} />
        <polyline points={pts} fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
        <T x={ox + W / 2} y={Y0 + H + 9} size={5} fill={color}>{xlabel}</T>
        <T x={ox + 2} y={Y0 - 5} anchor="start" size={4.8} fill={SOFT}>resistance</T>
      </g>
    );
  };
  return (
    <svg viewBox="0 0 160 82" role="img" aria-labelledby="sc-t sc-d" className={cls} style={st}>
      <title id="sc-t">How an LDR and a thermistor change their resistance</title>
      <desc id="sc-d">An LDR has high resistance in the dark and its resistance falls as more light falls on it. A common type of thermistor has high resistance when cold and its resistance falls as it gets hotter. The graphs are sketches without values.</desc>
      {panel(X0, ldrResistance, '#6ee7b7', 'more light →')}
      {panel(X0 + 80, thermistorResistance, '#fdba74', 'hotter →')}
      <T x={X0 + W / 2} y={78} size={5.4} fill="#6ee7b7">LDR: falls in light</T>
      <T x={X0 + 80 + W / 2} y={78} size={5.4} fill="#fdba74">thermistor: falls when hot</T>
    </svg>
  );
};

/* ---------- electroplating ---------- */

export const ElectroplatingCell = () => (
  <svg viewBox="0 0 160 90" role="img" aria-labelledby="ep-t ep-d" className={cls} style={st}>
    <title id="ep-t">Electroplating</title>
    <desc id="ep-d">An object is hung in a solution that contains the coating metal and connected to a cell. An electric current makes a thin layer of the metal build up on the object.</desc>
    <path d="M40 34 L40 74 Q40 80 46 80 L114 80 Q120 80 120 74 L120 34" fill="none" stroke="#94a3b8" strokeWidth={1.4} />
    <rect x={41} y={46} width={78} height={33} fill="#1e3a5f" />
    <rect x={52} y={26} width={4} height={40} fill="#cbd5e1" />
    <rect x={102} y={26} width={4} height={40} fill="#fbbf24" />
    <rect x={101} y={56} width={6} height={10} fill="#fde68a" opacity={0} />
    <polyline points="54,26 54,12 80,12" fill="none" stroke="#e2e8f0" strokeWidth={1} />
    <polyline points="104,26 104,12 128,12" fill="none" stroke="#e2e8f0" strokeWidth={1} />
    {/* long thin plate = positive, joined to the coating metal; short thick plate = negative, joined to the object to coat */}
    <line x1={85} y1={6} x2={85} y2={18} stroke="#e2e8f0" strokeWidth={1.6} />
    <line x1={80} y1={9} x2={80} y2={15} stroke="#e2e8f0" strokeWidth={3} />
    <T x={74} y={9} size={5.4} fill="#e2e8f0">−</T>
    <T x={91} y={9} size={5.4} fill="#e2e8f0">+</T>
    <polyline points="85,12 128,12" fill="none" stroke="#e2e8f0" strokeWidth={1} />
    <T x={4} y={22} anchor="start" size={5} fill="#e2e8f0">object to coat</T>
    <T x={80} y={88} size={5} fill="#bae6fd">solution of the coating metal</T>
    <T x={112} y={22} anchor="start" size={5} fill="#fcd34d">coating metal</T>
    <T x={96} y={9} anchor="start" size={4.8} fill={SOFT}>cell</T>
  </svg>
);
