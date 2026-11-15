import { r3 } from '../round';

/**
 * Pictures for the Grade 9 Term 3 and 4 EMS lessons, in the style of EmsPictures: a dark panel, a
 * 120-unit-wide viewBox and at most six named parts. Positions are computed from the arguments.
 * Every picture has an aria description.
 */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const COLORS = ['#818cf8', '#34d399', '#fbbf24', '#fb7185', '#2dd4bf'] as const;

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

const Lines = ({ lines, x, y, size, fill, gap = 5 }: { lines: readonly string[]; x: number; y: number; size: number; fill: string; gap?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={800} fill={fill} textAnchor="middle">
    {lines.map((l, i) => (
      <tspan key={l} x={x} dy={i === 0 ? 0 : gap}>
        {l}
      </tspan>
    ))}
  </text>
);

// ---------- a centre with five parts around it ----------

export interface Spoke {
  lines: readonly string[];
}

/** One box in the middle joined to five around it, drawn on an ellipse. */
export const HubDiagram = ({ centre, spokes, aria }: { centre: readonly string[]; spokes: readonly Spoke[]; aria: string }) => {
  const cx = 60;
  const cy = 46;
  return (
    <Panel h={92} aria={aria}>
      {spokes.map((s, i) => {
        const a = (-90 + (360 / spokes.length) * i) * (Math.PI / 180);
        const x = r3(cx + 40 * Math.cos(a));
        const y = r3(cy + 33 * Math.sin(a));
        const color = COLORS[i % COLORS.length];
        return (
          <g key={s.lines.join(' ')}>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke={MUTED} strokeWidth={0.7} />
            <rect x={r3(x - 18)} y={r3(y - 8)} width={36} height={16} rx={4} fill={INK} stroke={color} strokeWidth={0.9} />
            <Lines lines={s.lines} x={x} y={r3(y + (s.lines.length > 1 ? -1 : 1.6))} size={4.6} fill={color} gap={5} />
          </g>
        );
      })}
      <rect x={cx - 20} y={cy - 9} width={40} height={18} rx={5} fill="#334155" stroke={LINE} strokeWidth={0.9} />
      <Lines lines={centre} x={cx} y={centre.length > 1 ? cy - 1 : cy + 1.6} size={4.8} fill={LINE} />
    </Panel>
  );
};

// ---------- the 4 Ps ----------

export const FOUR_PS = [
  { name: 'Product', what: 'what you sell' },
  { name: 'Price', what: 'what it costs' },
  { name: 'Place', what: 'where it is sold' },
  { name: 'Promotion', what: 'how people hear' },
] as const;

export const FourPs = () => (
  <Panel h={62} aria="Four boxes for the four Ps of marketing: Product is what you sell, Price is what it costs, Place is where it is sold, and Promotion is how people hear about it.">
    {FOUR_PS.map((p, i) => {
      const x = 6 + (i % 2) * 56;
      const y = 6 + Math.floor(i / 2) * 29;
      const color = COLORS[i];
      return (
        <g key={p.name}>
          <rect x={x} y={y} width={52} height={25} rx={4} fill={color} fillOpacity={0.18} stroke={color} strokeWidth={0.8} />
          <text x={x + 26} y={y + 11} fontSize={6.2} fontWeight={800} fill={color} textAnchor="middle">{p.name}</text>
          <text x={x + 26} y={y + 19.5} fontSize={4.8} fontWeight={600} fill={LINE} textAnchor="middle">{p.what}</text>
        </g>
      );
    })}
  </Panel>
);

// ---------- clue in the case study -> concept ----------

export const MatchTable = ({ title, rows, aria }: { title: string; rows: readonly { clue: string; concept: string }[]; aria: string }) => (
  <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl text-left" style={{ background: INK }}>
    <table aria-label={aria} className="w-full border-collapse text-[13px] text-slate-100">
      <caption className="px-3 pt-2.5 text-left text-sm font-extrabold text-amber-300">{title}</caption>
      <thead>
        <tr className="text-xs uppercase tracking-wide text-slate-400">
          <th scope="col" className="px-3 py-1.5 text-left font-bold">Clue in the case</th>
          <th scope="col" className="px-3 py-1.5 text-left font-bold">Concept</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.clue} className="border-t border-slate-700">
            <td className="px-3 py-1.5">{r.clue}</td>
            <td className="px-3 py-1.5 font-semibold text-emerald-300">{r.concept}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
