import { TRIG_DECISION } from './trigTool';

/**
 * One decision, as the lesson states it: is the triangle right-angled? Yes: basic trig ratios.
 * No: the sine rule, the cosine rule or the area rule. Words come from trigTool.ts.
 */

const INK = '#0f172a';

const Lines = ({ lines, x, y, fill, size = 6.6, gap = 8 }: { lines: readonly string[]; x: number; y: number; fill: string; size?: number; gap?: number }) => (
  <>
    {lines.map((l, i) => (
      <text key={l} x={x} y={y + i * gap} textAnchor="middle" fontSize={size} fontWeight={800} fill={fill}>{l}</text>
    ))}
  </>
);

export const TrigToolChoice = () => (
  <svg
    viewBox="0 0 150 104"
    role="img"
    aria-labelledby="ttc-t ttc-d"
    className="mx-auto block w-full max-w-md rounded-2xl"
    style={{ background: INK, fontFamily: 'inherit' }}
  >
    <title id="ttc-t">Choosing the right trig tool</title>
    <desc id="ttc-d">
      First decide whether the triangle is right-angled. If yes, use basic trig ratios. If no, use the sine rule, the cosine rule or the area rule.
    </desc>
    <rect x={40} y={6} width={70} height={25} rx={5} fill="#1e293b" stroke="#94a3b8" strokeWidth={0.8} />
    <Lines lines={TRIG_DECISION.question} x={75} y={16.5} fill="#f8fafc" />
    <line x1={60} y1={31} x2={36} y2={62} stroke="#34d399" strokeWidth={1.2} />
    <line x1={90} y1={31} x2={114} y2={62} stroke="#fbbf24" strokeWidth={1.2} />
    <path d="M36 62 l1.2 -5.6 l4.4 3.6 z" fill="#34d399" />
    <path d="M114 62 l-1.2 -5.6 l-4.4 3.6 z" fill="#fbbf24" />
    <text x={41} y={44} textAnchor="end" fontSize={6.4} fontWeight={800} fill="#6ee7b7">yes</text>
    <text x={109} y={44} fontSize={6.4} fontWeight={800} fill="#fcd34d">no</text>
    <rect x={5} y={64} width={62} height={34} rx={5} fill="#064e3b" stroke="#34d399" strokeWidth={0.9} />
    <Lines lines={TRIG_DECISION.yes} x={36} y={78} fill="#a7f3d0" size={7} gap={9} />
    <rect x={83} y={64} width={62} height={34} rx={5} fill="#451a03" stroke="#fbbf24" strokeWidth={0.9} />
    <Lines lines={TRIG_DECISION.no} x={114} y={73.5} fill="#fde68a" size={6.4} gap={8.2} />
  </svg>
);
