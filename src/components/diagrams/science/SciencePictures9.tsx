import { r3 } from '../round';
import { T, cls, st, SOFT } from './SciencePictures';
import { electronShells, massTotal, wireResistance } from './science9Helpers';

/**
 * Grade 9 Natural Sciences pictures: an atom with its shells, mass before and after a reaction,
 * and the resistance of wires of different length and thickness. Positions and numbers come from
 * science9Helpers.ts. At most six labels each.
 */

/* ---------- an atom ---------- */

export const AtomModel = ({ z = 6, neutrons = 6, name = 'carbon' }: { z?: number; neutrons?: number; name?: string }) => {
  const cx = 38;
  const cy = 44;
  const shells = electronShells(z);
  const radii = [15, 27, 39];
  const nucleus = [...Array.from({ length: z }, () => 'p'), ...Array.from({ length: neutrons }, () => 'n')];
  const k = 2.9;
  return (
    <svg viewBox="0 0 160 92" role="img" aria-labelledby="am-t am-d" className={cls} style={st}>
      <title id="am-t">{`A ${name} atom`}</title>
      <desc id="am-d">{`A ${name} atom has a nucleus of ${z} protons, which are positively charged, and ${neutrons} neutrons, which have no charge. ${z} electrons, which are negatively charged, move around the nucleus in shells: ${shells.join(', ')}. The number of electrons equals the number of protons, so the atom is neutral.`}</desc>
      {shells.map((_, i) => <circle key={i} cx={cx} cy={cy} r={radii[i]} fill="none" stroke="#475569" strokeWidth={0.7} />)}
      {nucleus.map((kind, i) => {
        const a = i * 2.39996;
        const r = k * Math.sqrt(i + 0.5);
        return <circle key={i} cx={r3(cx + r * Math.cos(a))} cy={r3(cy + r * Math.sin(a))} r={2.7} fill={kind === 'p' ? '#ef4444' : '#94a3b8'} stroke="#0f172a" strokeWidth={0.4} />;
      })}
      {shells.flatMap((n, s) => Array.from({ length: n }, (_, j) => {
        const a = (j / n) * 2 * Math.PI + s * 0.6;
        return <circle key={`${s}-${j}`} cx={r3(cx + radii[s] * Math.cos(a))} cy={r3(cy + radii[s] * Math.sin(a))} r={2.4} fill="#38bdf8" stroke="#0f172a" strokeWidth={0.4} />;
      }))}
      <circle cx={84} cy={20} r={3} fill="#ef4444" /><T x={90} y={22} anchor="start" size={5} fill="#fca5a5">proton: positive (+)</T>
      <circle cx={84} cy={34} r={3} fill="#94a3b8" /><T x={90} y={36} anchor="start" size={5} fill={SOFT}>neutron: no charge</T>
      <circle cx={84} cy={48} r={3} fill="#38bdf8" /><T x={90} y={50} anchor="start" size={5} fill="#7dd3fc">electron: negative (−)</T>
      <T x={84} y={66} anchor="start" size={4.6} fill="#e2e8f0">{`${name}: ${z} protons, ${neutrons} neutrons,`}</T>
      <T x={84} y={73} anchor="start" size={4.6} fill="#e2e8f0">{`${z} electrons in shells ${shells.join(', ')}`}</T>
      <T x={84} y={84} anchor="start" size={4.6} fill="#fcd34d">nucleus: protons and neutrons</T>
    </svg>
  );
};

/* ---------- mass before and after ---------- */

export const MassBars = ({ reactants = [10, 15] }: { reactants?: number[] }) => {
  const total = massTotal(reactants);
  const k = 3.2;
  const x0 = 12;
  const colors = ['#38bdf8', '#fbbf24', '#a78bfa'];
  return (
    <svg viewBox="0 0 160 76" role="img" aria-labelledby="mb-t mb-d" className={cls} style={st}>
      <title id="mb-t">Mass before and after a reaction</title>
      <desc id="mb-d">{`In a closed system the reactants have a total mass of ${total} grams (${reactants.join(' plus ')}), and the products have the same total mass, ${total} grams.`}</desc>
      <T x={x0} y={10} anchor="start" size={5.2} fill="#e2e8f0">{`reactants: ${reactants.join(' g + ')} g`}</T>
      {reactants.map((m, i) => {
        const x = x0 + k * reactants.slice(0, i).reduce((a, b) => a + b, 0);
        return <rect key={i} x={r3(x)} y={14} width={r3(m * k)} height={12} fill={colors[i % 3]} stroke="#0f172a" strokeWidth={0.8} />;
      })}
      <T x={80} y={38} size={7} fill="#fcd34d">=</T>
      <T x={x0} y={50} anchor="start" size={5.2} fill="#e2e8f0">{`products: ${total} g`}</T>
      <rect x={x0} y={54} width={r3(total * k)} height={12} fill="#34d399" stroke="#0f172a" strokeWidth={0.8} />
      <T x={80} y={74} size={4.6} fill={SOFT}>closed system: nothing escapes</T>
    </svg>
  );
};

/* ---------- resistance of wires ---------- */

export const WireResistance = () => {
  const wires = [
    { name: 'short, thick', length: 1, area: 1, color: '#34d399' },
    { name: 'long, thick', length: 2, area: 1, color: '#fbbf24' },
    { name: 'long, thin', length: 2, area: 0.5, color: '#fb923c' },
  ];
  return (
    <svg viewBox="0 0 160 84" role="img" aria-labelledby="wr-t wr-d" className={cls} style={st}>
      <title id="wr-t">Length, thickness and the resistance of a wire</title>
      <desc id="wr-d">{`A longer wire has more resistance, and so does a thinner wire. Compared with a short thick wire (resistance ${wireResistance(1, 1)} in these units), a long thick wire has ${wireResistance(2, 1)} and a long thin wire has the most, ${wireResistance(2, 0.5)}.`}</desc>
      {wires.map((w, i) => {
        const y = 16 + i * 25;
        const th = 8 * Math.sqrt(w.area);
        const R = wireResistance(w.length, w.area);
        return (
          <g key={w.name}>
            <T x={6} y={y + 2} anchor="start" size={5} fill={SOFT}>{w.name}</T>
            <rect x={44} y={r3(y - th / 2)} width={w.length * 30} height={r3(th)} rx={1.5} fill={w.color} />
            <rect x={112} y={y - 4} width={r3(R * 7)} height={8} rx={1} fill="#e2e8f0" opacity={0.85} />
            <T x={r3(115 + R * 7)} y={y + 2} anchor="start" size={5} fill="#f8fafc">{String(R).replace('.', ',')}</T>
          </g>
        );
      })}
      <T x={112} y={8} anchor="start" size={4.6} fill={SOFT}>resistance (units)</T>
      <T x={80} y={82} size={4.4} fill={SOFT}>longer or thinner: more resistance</T>
    </svg>
  );
};
