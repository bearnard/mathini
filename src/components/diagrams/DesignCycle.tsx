import type { ReactNode } from 'react';
import { r3 } from './round';

/**
 * DesignCycle: the design process as a loop of five steps (investigate, design, make, evaluate,
 * communicate) with an "improve" arrow from Evaluate back to Design.
 * InputProcessOutput: a system as three boxes (input, process, output) for a torch.
 */

const INK = '#0f172a';
const ARROW = '#e2e8f0';

const polar = (cx: number, cy: number, r: number, deg: number) => {
  const a = (deg * Math.PI) / 180;
  return { x: r3(cx + r * Math.sin(a)), y: r3(cy - r * Math.cos(a)) };
};

const ICONS: Record<string, ReactNode> = {
  investigate: (
    <g stroke="#fff" strokeWidth={2} strokeLinecap="round" fill="none">
      <circle cx={-2} cy={-2} r={6} />
      <path d="M2.6 2.6 L9 9" strokeWidth={2.6} />
    </g>
  ),
  design: (
    <g>
      <path d="M-8 9 L-6.6 3.4 L4.6 -7.8 L8.4 -4 L-2.8 7.2Z" fill="#fff" />
      <path d="M-8 9 L-6.6 3.4 L-2.8 7.2Z" fill="#fde68a" />
    </g>
  ),
  make: (
    <g fill="#fff">
      <rect x={-9} y={-9} width={12} height={6.4} rx={1.4} transform="rotate(35)" />
      <rect x={-1.2} y={-5} width={2.6} height={15} rx={1.2} transform="rotate(35)" />
    </g>
  ),
  evaluate: <path d="M-8 1 L-2.6 7 L9 -7" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  communicate: (
    <g fill="#fff">
      <path d="M-9 -7 H9 a2 2 0 0 1 2 2 V3 a2 2 0 0 1 -2 2 H0 L-5 10 V5 H-9 a2 2 0 0 1 -2 -2 V-5 a2 2 0 0 1 2 -2Z" />
    </g>
  ),
};

const STEPS = [
  { key: 'investigate', label: 'Investigate', color: '#38bdf8', deg: 0 },
  { key: 'design', label: 'Design', color: '#a78bfa', deg: 72 },
  { key: 'make', label: 'Make', color: '#f59e0b', deg: 144 },
  { key: 'evaluate', label: 'Evaluate', color: '#34d399', deg: 216 },
  { key: 'communicate', label: 'Communicate', color: '#fb7185', deg: 288 },
];

const CX = 94;
const CY = 58;
const RING = 36;
const DISC = 9;

export const DesignCycle = ({ className }: { className?: string }) => {
  const pts = STEPS.map((s) => polar(CX, CY, RING, s.deg));
  // clockwise arc between neighbouring discs, trimmed so the arrow stops before the next disc
  const gap = 12.2; // degrees of ring hidden under each disc
  const arcs = STEPS.map((s, i) => {
    const a = polar(CX, CY, RING, s.deg + gap);
    const b = polar(CX, CY, RING, STEPS[(i + 1) % 5].deg + (i === 4 ? 360 : 0) - gap - 1);
    return `M${a.x} ${a.y} A${RING} ${RING} 0 0 1 ${b.x} ${b.y}`;
  });
  const ev = pts[3];
  const de = pts[1];
  return (
    <svg
      viewBox="0 0 180 116"
      role="img"
      aria-labelledby="dc-title dc-desc"
      className={`mx-auto block w-full rounded-2xl ${className ?? ''}`}
      style={{ background: INK, fontFamily: 'inherit', maxWidth: '30rem', aspectRatio: '180 / 116' }}
    >
      <title id="dc-title">The design process is a loop</title>
      <desc id="dc-desc">
        Five steps in a circle: investigate, design, make, evaluate, communicate. An extra arrow goes from evaluate back to design: if the test shows a fault, improve the design and test again.
      </desc>
      <defs>
        <marker id="dc-head" markerWidth={4.4} markerHeight={4.4} refX={3} refY={2.2} orient="auto">
          <path d="M0,0 L4.4,2.2 L0,4.4Z" fill={ARROW} />
        </marker>
        <marker id="dc-improve" markerWidth={4.4} markerHeight={4.4} refX={3} refY={2.2} orient="auto">
          <path d="M0,0 L4.4,2.2 L0,4.4Z" fill="#fde68a" />
        </marker>
      </defs>
      {arcs.map((d, i) => (
        <path key={i} d={d} fill="none" stroke={ARROW} strokeWidth={1.6} strokeLinecap="round" markerEnd="url(#dc-head)" />
      ))}
      {/* improve: back from Evaluate to Design */}
      <path
        d={`M${r3(ev.x + 6)} ${r3(ev.y - 5)} Q${CX} ${r3(CY + 14)} ${r3(de.x - 7)} ${r3(de.y + 7)}`}
        fill="none"
        stroke="#fde68a"
        strokeWidth={1.4}
        strokeDasharray="2.4 1.8"
        strokeLinecap="round"
        markerEnd="url(#dc-improve)"
      />
      <text x={CX} y={CY + 17} textAnchor="middle" fontSize={6.2} fontWeight={800} fill="#fde68a">improve</text>
      {STEPS.map((s, i) => {
        const p = pts[i];
        const right = s.deg > 0 && s.deg < 180;
        const left = s.deg > 180;
        const lx = s.deg === 0 ? p.x : right ? p.x + DISC + 2.4 : left ? p.x - DISC - 2.4 : p.x;
        const ly = s.deg === 0 ? p.y - DISC - 3 : p.y + 1.8;
        return (
          <g key={s.key}>
            <circle cx={p.x} cy={p.y} r={DISC} fill={s.color} />
            <g transform={`translate(${p.x} ${p.y}) scale(0.78)`}>{ICONS[s.key]}</g>
            <circle cx={r3(p.x + DISC - 1)} cy={r3(p.y - DISC + 1)} r={3.2} fill="#f8fafc" />
            <text x={r3(p.x + DISC - 1)} y={r3(p.y - DISC + 2.3)} textAnchor="middle" fontSize={4} fontWeight={800} fill={INK}>{i + 1}</text>
            <text x={lx} y={ly} textAnchor={s.deg === 0 ? 'middle' : right ? 'start' : 'end'} fontSize={6.8} fontWeight={800} fill="#e2e8f0">{s.label}</text>
          </g>
        );
      })}
    </svg>
  );
};

/* ---------- Input - Process - Output, for a torch ---------- */

const Box = ({ x, head, sub, color, children }: { x: number; head: string; sub: string; color: string; children: ReactNode }) => (
  <g transform={`translate(${x} 0)`}>
    <rect x={0} y={4} width={36} height={46} rx={4} fill="#1e293b" stroke={color} strokeWidth={1.2} />
    <text x={18} y={13.6} textAnchor="middle" fontSize={6} fontWeight={800} fill={color}>{head}</text>
    <g transform="translate(18 28)">{children}</g>
    <text x={18} y={46} textAnchor="middle" fontSize={4.6} fontWeight={700} fill="#e2e8f0">{sub}</text>
  </g>
);

export const InputProcessOutput = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 130 54"
    role="img"
    aria-labelledby="ipo-title ipo-desc"
    className={`mx-auto block w-full rounded-2xl ${className ?? ''}`}
    style={{ background: INK, fontFamily: 'inherit', maxWidth: '30rem', aspectRatio: '130 / 54' }}
  >
    <title id="ipo-title">A torch is a system: input, process, output</title>
    <desc id="ipo-desc">
      Input: the switch is pressed. Process: current flows along the wires. Output: the bulb lights.
    </desc>
    <defs>
      <marker id="ipo-head" markerWidth={4.4} markerHeight={4.4} refX={3} refY={2.2} orient="auto">
        <path d="M0,0 L4.4,2.2 L0,4.4Z" fill={ARROW} />
      </marker>
    </defs>
    <line x1={38} y1={28} x2={46} y2={28} stroke={ARROW} strokeWidth={1.6} markerEnd="url(#ipo-head)" />
    <line x1={84} y1={28} x2={92} y2={28} stroke={ARROW} strokeWidth={1.6} markerEnd="url(#ipo-head)" />
    <Box x={1} head="Input" sub="switch pressed" color="#38bdf8">
      <g stroke="#fff" strokeWidth={1.8} strokeLinecap="round" fill="none">
        <path d="M-9 4 H-4 M4 4 H9" />
        <path d="M-4 4 L4 4" />
      </g>
      <circle cx={-4} cy={4} r={1.6} fill="#fff" />
      <circle cx={4} cy={4} r={1.6} fill="#fff" />
    </Box>
    <Box x={47} head="Process" sub="current flows" color="#fbbf24">
      <g stroke="#fbbf24" strokeWidth={1.8} fill="none" strokeLinejoin="round">
        <path d="M-9 -5 H9 V6 H-9 Z" />
      </g>
      <path d="M-3 -2 L-5 1 H-1 L-3 4" stroke="#fde68a" strokeWidth={1.4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 -2 L2 1 H6 L4 4" stroke="#fde68a" strokeWidth={1.4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
    <Box x={93} head="Output" sub="bulb lights" color="#34d399">
      <circle r={9} fill="#fbbf24" opacity={0.25} />
      <circle r={5.4} fill="#fde68a" stroke="#fbbf24" strokeWidth={0.8} />
      <rect x={-2.2} y={5} width={4.4} height={3} rx={0.8} fill="#94a3b8" />
    </Box>
  </svg>
);
