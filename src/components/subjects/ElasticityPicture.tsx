import { SCHEMATIC, ped } from './elasticity';

const r3 = (n: number) => Math.round(n * 1000) / 1000;

// Axes: quantity 40..130 across, price R8..R14 up. Pretend good, not real data.
const X0 = 46, X1 = 190, Y0 = 118, Y1 = 14;
const qx = (q: number) => r3(X0 + ((q - 40) / 90) * (X1 - X0));
const py = (p: number) => r3(Y0 - ((p - 8) / 6) * (Y0 - Y1));

export default function ElasticityPicture() {
  const { p1, p2, q1, elasticQ2, inelasticQ2 } = SCHEMATIC;
  // Straight lines through (q1, p1) and each (q2, p2), drawn from price R9 to R13.
  const line = (q2: number) => {
    const slope = (q2 - q1) / (p2 - p1); // quantity change per rand
    const at = (p: number) => q1 + slope * (p - p1);
    return { x1: qx(at(9)), y1: py(9), x2: qx(at(13)), y2: py(13) };
  };
  const elasticAt = (p: number) => q1 + ((elasticQ2 - q1) / (p2 - p1)) * (p - p1);
  const inelasticAt = (p: number) => q1 + ((inelasticQ2 - q1) / (p2 - p1)) * (p - p1);
  const el = line(elasticQ2);
  const inel = line(inelasticQ2);
  return (
    <svg viewBox="0 0 240 140" role="img" aria-labelledby="ep-t ep-d" className="mx-auto h-auto w-full max-w-md rounded-xl bg-slate-900">
      <title id="ep-t">Elastic and inelastic demand curves for a pretend good</title>
      <desc id="ep-d">
        Price rises from R10 to R12, a 20 percent rise. On the flat demand curve quantity falls from 100 to 60, a 40 percent fall, so PED is minus 2: elastic. On the steep curve quantity falls from 100 to 90, a 10 percent fall, so PED is minus 0,5: inelastic. Made-up numbers.
      </desc>
      <line x1={X0} y1={Y1} x2={X0} y2={Y0} stroke="#94a3b8" strokeWidth={1} />
      <line x1={X0} y1={Y0} x2={X1} y2={Y0} stroke="#94a3b8" strokeWidth={1} />
      <text x={X0 - 4} y={Y1 + 3} textAnchor="end" fontSize={7} fill="#cbd5e1">price</text>
      <text x={X1} y={Y0 + 12} textAnchor="end" fontSize={7} fill="#cbd5e1">quantity</text>
      <line x1={X0} y1={py(p1)} x2={qx(q1)} y2={py(p1)} stroke="#64748b" strokeWidth={0.8} strokeDasharray="3 3" />
      <line x1={X0} y1={py(p2)} x2={qx(elasticQ2)} y2={py(p2)} stroke="#64748b" strokeWidth={0.8} strokeDasharray="3 3" />
      <text x={X0 - 4} y={py(p1) + 2.5} textAnchor="end" fontSize={7} fill="#cbd5e1">R{p1}</text>
      <text x={X0 - 4} y={py(p2) + 2.5} textAnchor="end" fontSize={7} fill="#cbd5e1">R{p2}</text>
      <line {...el} stroke="#f87171" strokeWidth={2} />
      <line {...inel} stroke="#34d399" strokeWidth={2} />
      <circle cx={qx(q1)} cy={py(p1)} r={2.6} fill="#f8fafc" />
      <text x={r3(qx(elasticAt(12.6)) + 4)} y={r3(py(12.6) - 3)} textAnchor="start" fontSize={7.5} fontWeight={700} fill="#f87171">
        elastic
      </text>
      <text x={r3(qx(inelasticAt(12.6)) + 4)} y={r3(py(12.6) - 3)} textAnchor="start" fontSize={7.5} fontWeight={700} fill="#34d399">
        inelastic
      </text>
      <text x={X0 + 6} y={94} textAnchor="start" fontSize={6.5} fill="#94a3b8">same price rise, R10 to R12</text>
      <text x={X0 + 6} y={104} textAnchor="start" fontSize={7.5} fill="#f87171">elastic: PED = {ped(p1, q1, p2, elasticQ2).toString().replace('-', '−')}</text>
      <text x={X0 + 6} y={114} textAnchor="start" fontSize={7.5} fill="#34d399">inelastic: PED = −0,5</text>
      <text x={X1} y={136} textAnchor="end" fontSize={6.2} fill="#94a3b8">made-up numbers for one pretend good</text>
    </svg>
  );
}
