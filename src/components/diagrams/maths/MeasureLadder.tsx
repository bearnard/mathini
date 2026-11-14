import { LADDERS, formatNumber, stepFactors, type LadderKind } from './mathsHelpers';

/**
 * A ladder of units, biggest at the top. Going DOWN a step you multiply (to a smaller unit, so you
 * need more of them); going UP you divide. The step factors come from the same table the
 * conversion function uses, so the picture and the arithmetic cannot differ.
 */

interface MeasureLadderProps {
  kind: LadderKind;
  className?: string;
}

const RUNG_H = 15;
const GAP = 19;
const TOP = 6;
const COLORS = ['#fb7185', '#fbbf24', '#34d399', '#38bdf8'];

const MeasureLadder = ({ kind, className }: MeasureLadderProps) => {
  const rungs = LADDERS[kind];
  const factors = stepFactors(kind);
  const h = TOP * 2 + rungs.length * RUNG_H + (rungs.length - 1) * GAP;
  const yOf = (i: number) => TOP + i * (RUNG_H + GAP);
  const desc = rungs.map((r) => r.name + 's').join(', ');
  return (
    <svg
      viewBox={`0 0 130 ${h}`}
      role="img"
      aria-label={`A ladder of ${kind} units from biggest to smallest: ${desc}. Going down a step you multiply by ${factors.map(formatNumber).join(', then ')}. Going up you divide by the same numbers.`}
      className={`mx-auto block w-full max-w-sm rounded-2xl ${className ?? ''}`}
      style={{ background: '#0f172a', fontFamily: 'inherit' }}
    >
      <defs>
        <marker id={`ml-down-${kind}`} markerWidth={4.4} markerHeight={4.4} refX={2.4} refY={2.2} orient="auto">
          <path d="M0,0 L4.4,2.2 L0,4.4Z" fill="#fbbf24" />
        </marker>
        <marker id={`ml-up-${kind}`} markerWidth={4.4} markerHeight={4.4} refX={2.4} refY={2.2} orient="auto">
          <path d="M0,0 L4.4,2.2 L0,4.4Z" fill="#38bdf8" />
        </marker>
      </defs>
      {/* ladder rails */}
      <line x1={47} y1={TOP - 2} x2={47} y2={h - TOP + 2} stroke="#475569" strokeWidth={1.6} />
      <line x1={83} y1={TOP - 2} x2={83} y2={h - TOP + 2} stroke="#475569" strokeWidth={1.6} />
      {rungs.map((r, i) => (
        <g key={r.unit}>
          <rect x={47} y={yOf(i)} width={36} height={RUNG_H} rx={3} fill={COLORS[i]} />
          <text x={65} y={yOf(i) + RUNG_H / 2 + 3.2} textAnchor="middle" fontSize={10} fontWeight={800} fill="#0f172a">{r.unit}</text>
        </g>
      ))}
      {factors.map((f, i) => {
        const a = yOf(i) + RUNG_H / 2;
        const b = yOf(i + 1) + RUNG_H / 2;
        const mid = (a + b) / 2;
        return (
          <g key={i}>
            {/* multiply: down the left side */}
            <line x1={36} y1={a + 3} x2={36} y2={b - 5} stroke="#fbbf24" strokeWidth={1.4} markerEnd={`url(#ml-down-${kind})`} />
            <text x={32} y={mid + 2.2} textAnchor="end" fontSize={6.6} fontWeight={800} fill="#fbbf24">× {formatNumber(f)}</text>
            {/* divide: up the right side */}
            <line x1={94} y1={b - 3} x2={94} y2={a + 5} stroke="#38bdf8" strokeWidth={1.4} markerEnd={`url(#ml-up-${kind})`} />
            <text x={98} y={mid + 2.2} fontSize={6.6} fontWeight={800} fill="#38bdf8">÷ {formatNumber(f)}</text>
          </g>
        );
      })}
    </svg>
  );
};

export default MeasureLadder;
