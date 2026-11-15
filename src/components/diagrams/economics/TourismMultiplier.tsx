import type { Round } from './tourism';

/** Bars for each round of tourist spending: the kept share (re-spent locally) and the leaked share. */

const INK = '#0f172a';
const KEPT = '#34d399';
const LEAK = '#fb7185';

export const TourismMultiplier = ({ rounds, keptPct }: { rounds: readonly Round[]; keptPct: number }) => {
  const max = rounds[0].spent;
  const base = 150;
  const scale = 110 / max;
  const colW = 312 / rounds.length;
  return (
    <svg
      viewBox="0 0 340 214"
      role="img"
      aria-label={`Bars for ${rounds.length} rounds of spending starting at R${max}. In each round ${keptPct}% is kept and re-spent locally and the rest leaks out. The amounts are ${rounds.map((r) => 'R' + r.spent).join(', ')}.`}
      className="mx-auto w-full max-w-md rounded-2xl"
      style={{ background: INK }}
    >
      {rounds.map((r, i) => {
        const x = 14 + i * colW + 8;
        const bw = colW - 16;
        const keptH = r.kept * scale;
        const leakH = r.leaked * scale;
        return (
          <g key={r.round}>
            <rect x={x} y={base - keptH - leakH} width={bw} height={leakH} fill={LEAK} />
            <rect x={x} y={base - keptH} width={bw} height={keptH} fill={KEPT} />
            <text x={x + bw / 2} y={base - keptH - leakH - 6} textAnchor="middle" fontSize={13} fontWeight={800} fill="#f1f5f9">R{r.spent}</text>
            <text x={x + bw / 2} y={base + 18} textAnchor="middle" fontSize={12} fontWeight={700} fill="#cbd5e1">Round {r.round}</text>
          </g>
        );
      })}
      <line x1={14} x2={326} y1={base} y2={base} stroke="#64748b" />
      <rect x={30} y={186} width={12} height={12} fill={KEPT} />
      <text x={48} y={196} fontSize={12} fontWeight={700} fill="#e2e8f0">Kept and re-spent</text>
      <rect x={190} y={186} width={12} height={12} fill={LEAK} />
      <text x={208} y={196} fontSize={12} fontWeight={700} fill="#e2e8f0">Leaks out</text>
    </svg>
  );
};
