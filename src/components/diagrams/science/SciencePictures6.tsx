import { r3 } from '../round';
import { Arrow, T, cls, st, SOFT } from './SciencePictures';
import { rampAdvantage, rampEffort, truthTable, type Bit, type TruthRow } from './techHelpers';

/**
 * Technology pictures: circuit symbols, AND and OR from switches, a truth table, a ramp, and
 * layers that protect steel from rusting. Numbers come from techHelpers.ts. At most six labels each.
 */

/* ---------- circuit symbols ---------- */

export const CircuitSymbols = () => {
  const items = [
    { name: 'cell', note: 'energy source' },
    { name: 'switch (closed)', note: 'path complete' },
    { name: 'switch (open)', note: 'path broken' },
    { name: 'fuse', note: 'melts if current is too high' },
    { name: 'bulb', note: 'output' },
  ];
  const cx = (i: number) => 17 + i * 29;
  return (
    <svg viewBox="0 0 150 70" role="img" aria-labelledby="cs-t cs-d" className={cls} style={st}>
      <title id="cs-t">Circuit symbols</title>
      <desc id="cs-d">Symbols for a cell (energy source), a closed switch (the path is complete), an open switch (the path is broken), a fuse (melts and breaks the circuit if the current is too high), and a bulb (an output).</desc>
      {items.map((it, i) => (
        <g key={it.name}>
          <line x1={cx(i) - 12} y1={24} x2={cx(i) - 6} y2={24} stroke="#94a3b8" strokeWidth={1} />
          <line x1={cx(i) + 6} y1={24} x2={cx(i) + 12} y2={24} stroke="#94a3b8" strokeWidth={1} />
          <T x={cx(i)} y={48} size={4.6} fill="#e2e8f0">{it.name.split(' (')[0]}</T>
          <T x={cx(i)} y={55} size={3.9} fill={SOFT}>{it.name.includes('(') ? it.name.slice(it.name.indexOf('(') + 1, -1) : ''}</T>
        </g>
      ))}
      {/* cell */}
      <line x1={cx(0) - 2} y1={17} x2={cx(0) - 2} y2={31} stroke="#e2e8f0" strokeWidth={1} />
      <line x1={cx(0) + 2} y1={13} x2={cx(0) + 2} y2={35} stroke="#e2e8f0" strokeWidth={2} />
      {/* closed switch */}
      <circle cx={cx(1) - 6} cy={24} r={1.4} fill="#e2e8f0" /><circle cx={cx(1) + 6} cy={24} r={1.4} fill="#e2e8f0" />
      <line x1={cx(1) - 6} y1={24} x2={cx(1) + 6} y2={24} stroke="#34d399" strokeWidth={1.4} />
      {/* open switch */}
      <circle cx={cx(2) - 6} cy={24} r={1.4} fill="#e2e8f0" /><circle cx={cx(2) + 6} cy={24} r={1.4} fill="#e2e8f0" />
      <line x1={cx(2) - 6} y1={24} x2={cx(2) + 4} y2={14} stroke="#fb923c" strokeWidth={1.4} />
      {/* fuse */}
      <rect x={cx(3) - 6} y={20} width={12} height={8} fill="none" stroke="#fbbf24" strokeWidth={1} />
      <line x1={cx(3) - 6} y1={24} x2={cx(3) + 6} y2={24} stroke="#fbbf24" strokeWidth={0.8} />
      {/* bulb */}
      <circle cx={cx(4)} cy={24} r={6} fill="none" stroke="#fde047" strokeWidth={1} />
      <line x1={cx(4) - 4} y1={20} x2={cx(4) + 4} y2={28} stroke="#fde047" strokeWidth={0.9} />
      <line x1={cx(4) + 4} y1={20} x2={cx(4) - 4} y2={28} stroke="#fde047" strokeWidth={0.9} />
      <T x={75} y={67} size={4.6} fill={SOFT}>an open switch breaks the circuit</T>
    </svg>
  );
};

/* ---------- AND and OR as switches ---------- */

const Sw = ({ x, y, closed = true }: { x: number; y: number; closed?: boolean }) => (
  <g>
    <circle cx={x - 5} cy={y} r={1.3} fill="#e2e8f0" /><circle cx={x + 5} cy={y} r={1.3} fill="#e2e8f0" />
    <line x1={x - 5} y1={y} x2={x + 5} y2={closed ? y : y - 6} stroke="#34d399" strokeWidth={1.3} />
  </g>
);

export const LogicSwitches = () => (
  <svg viewBox="0 0 160 76" role="img" aria-labelledby="lsw-t lsw-d" className={cls} style={st}>
    <title id="lsw-t">AND and OR logic from switches</title>
    <desc id="lsw-d">Two switches in series make an AND gate: the lamp is on only when both switches are closed. Two switches in parallel make an OR gate: the lamp is on when at least one switch is closed.</desc>
    <g stroke="#94a3b8" strokeWidth={1} fill="none">
      <polyline points="8,16 72,16 72,46 8,46 8,16" />
    </g>
    <rect x={20} y={11} width={24} height={10} fill="#0f172a" />
    <Sw x={32} y={16} /><rect x={48} y={11} width={22} height={10} fill="#0f172a" /><Sw x={58} y={16} />
    <circle cx={40} cy={46} r={5} fill="#fde047" stroke="#a16207" strokeWidth={0.8} />
    <T x={40} y={62} size={6.2} fill="#7dd3fc">AND</T>
    <T x={40} y={70} size={4.6}>both switches closed</T>
    <g stroke="#94a3b8" strokeWidth={1} fill="none">
      <polyline points="92,16 150,16 150,50 92,50 92,16" />
      <polyline points="108,16 108,30 140,30 140,16" />
    </g>
    <rect x={100} y={11} width={16} height={10} fill="#0f172a" />
    <Sw x={108} y={16} />
    <rect x={118} y={25} width={16} height={10} fill="#0f172a" />
    <Sw x={126} y={30} />
    <circle cx={122} cy={50} r={5} fill="#fde047" stroke="#a16207" strokeWidth={0.8} />
    <T x={122} y={62} size={6.2} fill="#6ee7b7">OR</T>
    <T x={122} y={70} size={4.6}>at least one closed</T>
  </svg>
);

/* ---------- a truth table (plain HTML) ---------- */

export const TruthTable = ({ gate, name }: { gate: (a: Bit, b: Bit) => Bit; name: string }) => {
  const rows: TruthRow[] = truthTable(gate);
  return (
    <table className="mx-auto w-full max-w-[14rem] border-collapse overflow-hidden rounded-xl text-center text-sm" aria-label={`${name} truth table`}>
      <caption className="pb-1 text-left text-xs font-extrabold uppercase tracking-wide text-slate-600">{name}</caption>
      <thead>
        <tr className="bg-slate-800 text-white">
          <th className="px-3 py-1.5">A</th><th className="px-3 py-1.5">B</th><th className="px-3 py-1.5">output</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={`${r.a}${r.b}`} className="odd:bg-slate-50 even:bg-white">
            <td className="px-3 py-1">{r.a}</td><td className="px-3 py-1">{r.b}</td>
            <td className={`px-3 py-1 font-extrabold ${r.out ? 'text-emerald-600' : 'text-slate-500'}`}>{r.out}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

/* ---------- an inclined plane ---------- */

export const RampPicture = ({ load = 100, height = 1, length = 4 }: { load?: number; height?: number; length?: number }) => {
  const effort = rampEffort(load, height, length);
  const ma = rampAdvantage(height, length);
  const X0 = 16;
  const Y0 = 62;
  const W = 108;
  const H = r3((height / length) * W);
  const t = 0.55;
  const bx = r3(X0 + W * t);
  const by = r3(Y0 - H * t);
  return (
    <svg viewBox="0 0 150 85" role="img" aria-labelledby="rp-t rp-d" className={cls} style={st}>
      <title id="rp-t">A ramp (inclined plane)</title>
      <desc id="rp-d">{`A ${load} newton load is raised ${height} metre. Lifting it straight up needs ${load} newtons. Pushing it up a ${length} metre ramp needs only ${effort} newtons, over a longer distance, so the ramp has a mechanical advantage of ${ma}.`}</desc>
      <polygon points={`${X0},${Y0} ${X0 + W},${Y0} ${X0 + W},${r3(Y0 - H)}`} fill="#1e293b" stroke="#94a3b8" strokeWidth={1} />
      <rect x={r3(bx - 6)} y={r3(by - 9)} width={12} height={9} rx={1} fill="#38bdf8" transform={`rotate(${r3(-Math.atan(H / W) * 180 / Math.PI)} ${bx} ${by})`} />
      <Arrow x1={r3(bx + 4)} y1={r3(by - 12)} x2={r3(bx + 24)} y2={r3(by - 12 - (H / W) * 20)} color="#fb923c" w={1.6} />
      <T x={r3(bx + 28)} y={r3(by - 20)} anchor="start" size={5.2} fill="#fdba74">{`effort ${effort} N`}</T>
      <T x={r3(X0 + 30)} y={r3(Y0 + 9)} size={5.2}>{`ramp ${length} m long`}</T>
      <line x1={X0 + W + 5} y1={Y0} x2={X0 + W + 5} y2={r3(Y0 - H)} stroke={SOFT} strokeWidth={0.6} />
      <T x={X0 + W + 8} y={r3(Y0 - H / 2 + 2)} anchor="start" size={5.2}>{`${height} m`}</T>
      <T x={30} y={22} anchor="start" size={5.2} fill="#7dd3fc">{`load ${load} N`}</T>
      <T x={75} y={81} size={4.8} fill="#e2e8f0">{`${load} × ${height} ÷ ${length} = ${effort} N, mechanical advantage ${ma}`}</T>
    </svg>
  );
};

/* ---------- layers that stop rust ---------- */

export const ProtectionLayers = () => (
  <svg viewBox="0 0 150 80" role="img" aria-labelledby="pl-t pl-d" className={cls} style={st}>
    <title id="pl-t">Layers that protect steel from rusting</title>
    <desc id="pl-d">A steel surface is coated with a layer of zinc, as in galvanising, and then with paint. The layers form a barrier that blocks water and oxygen from reaching the steel, which slows rusting.</desc>
    <rect x={10} y={50} width={130} height={22} fill="#64748b" />
    <T x={75} y={65} size={5.6} fill="#f1f5f9">steel</T>
    <rect x={10} y={42} width={130} height={8} fill="#7dd3fc" />
    <T x={150} y={48} anchor="end" size={4.6} fill="#0c4a6e">zinc coating (galvanising)</T>
    <rect x={10} y={34} width={130} height={8} fill="#ef4444" />
    <T x={14} y={40} anchor="start" size={4.6} fill="#fef2f2">paint</T>
    {[34, 70, 106].map((x) => (
      <g key={x}>
        <Arrow x1={x} y1={14} x2={x} y2={30} color="#7dd3fc" w={1.2} />
        <line x1={x - 4} y1={31} x2={x + 4} y2={31} stroke="#fbbf24" strokeWidth={1.4} />
      </g>
    ))}
    <T x={75} y={9} size={5} fill="#bae6fd">water and oxygen are blocked</T>
  </svg>
);
