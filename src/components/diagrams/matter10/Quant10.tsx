import { r3 } from '../round';

/** Pictures for the Grade 10 Physical Sciences quantitative aspects extension. */

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
const T = ({ x, y, children, size = 4.4, fill = LINE, anchor = 'middle', weight = 700 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>{children}</text>
);
const n = (x: number) => String(r3(x)).replace('.', ',');

/** Moles of each element (percentage ÷ relative atomic mass), then divided by the smallest. */
export const MoleRatioBars = ({ rows, ratio }: { rows: { el: string; percent: number; moles: number }[]; ratio: number[] }) => {
  const max = Math.max(...rows.map((r) => r.moles));
  return (
    <Panel h={20 + rows.length * 12} aria={`Empirical formula steps. ${rows.map((r, i) => `${r.el}: ${r.percent} percent gives ${String(Math.round(r.moles * 100) / 100).replace('.', ',')} mol, ratio ${ratio[i]}`).join('; ')}. The whole-number ratio gives the empirical formula.`}>
      <T x={60} y={7} size={4.2} fill={AMBER}>moles of each element (percent ÷ atomic mass)</T>
      {rows.map((r, i) => {
        const y = 12 + i * 12;
        const w = r3((r.moles / max) * 52);
        return (
          <g key={r.el}>
            <T x={4} y={y + 6} size={4.2} anchor="start" weight={600}>{`${r.el} ${n(r.percent)}%`}</T>
            <rect x={34} y={y + 1} width={w} height={7} rx={1.5} fill={[GREEN, BLUE, ROSE][i % 3]} />
            <T x={r3(34 + w + 2)} y={y + 6.4} size={3.8} anchor="start">{`${String(Math.round(r.moles * 100) / 100).replace('.', ',')} mol → ${ratio[i]}`}</T>
          </g>
        );
      })}
    </Panel>
  );
};

/** Two beakers with the same amount of solute in different volumes: the smaller volume is more concentrated. */
export const BeakerPair = ({ left, right }: { left: { n: number; v: number }; right: { n: number; v: number } }) => {
  const draw = (x: number, b: { n: number; v: number }, col: string) => {
    const c = b.n / b.v;
    const h = Math.max(...[left.v, right.v]);
    const fillH = r3((b.v / h) * 28);
    const dots = Math.round(c * 10);
    return (
      <g>
        <path d={`M${x - 14} 16 V46 H${x + 14} V16`} fill="none" stroke={MUTED} strokeWidth={0.8} />
        <rect x={x - 13.6} y={r3(46 - fillH)} width={27.2} height={fillH} fill={col} fillOpacity={0.25} />
        {Array.from({ length: dots }, (_, i) => (
          <circle key={i} cx={r3(x - 10 + ((i * 7) % 20))} cy={r3(46 - 3 - ((i * 5) % Math.max(fillH - 5, 4)))} r={1.1} fill={col} />
        ))}
        <T x={x} y={54} size={3.8}>{`${n(b.n)} mol in ${n(b.v)} dm³`}</T>
        <T x={x} y={60} size={3.8} fill={col}>{`c = ${n(c)} mol·dm⁻³`}</T>
      </g>
    );
  };
  return (
    <Panel h={66} aria={`Two beakers. The first holds ${n(left.n)} mole of solute in ${n(left.v)} cubic decimetres, a concentration of ${n(left.n / left.v)} mole per cubic decimetre. The second holds ${n(right.n)} mole in ${n(right.v)} cubic decimetres, a concentration of ${n(right.n / right.v)} mole per cubic decimetre. Concentration is the amount of solute divided by the volume of the solution.`}>
      <T x={60} y={8} size={4.2} fill={AMBER}>c = n ÷ V (V in dm³)</T>
      {draw(30, left, GREEN)}
      {draw(90, right, ROSE)}
    </Panel>
  );
};
