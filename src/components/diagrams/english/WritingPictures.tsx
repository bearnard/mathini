import { SCAN_LINES, SCAN_TITLE } from './writing';

/**
 * Hand-built SVG pictures for the writing lessons (at most 6 labels each, each with an aria description).
 * Dark panel like the other English diagrams so the colours match.
 */

const INK = '#0f172a';
const panel = 'mx-auto w-full max-w-md rounded-2xl';

type Part = { label: string; color: string; sub?: string };

/** Stages shown as proportional bars (for example minutes of an exam). */
export const ShareBar = ({ parts, aria }: { parts: readonly (Part & { value: number })[]; aria: string }) => {
  const total = parts.reduce((a, p) => a + p.value, 0);
  const W = 300;
  let x = 10;
  return (
    <svg role="img" aria-label={aria} viewBox="0 0 320 96" className={panel} style={{ background: INK }}>
      {parts.map((p) => {
        const w = (p.value / total) * W;
        const cx = x + w / 2;
        const node = (
          <g key={p.label}>
            <rect x={x} y={18} width={w - 2} height={36} rx={6} fill={p.color} />
            <text x={cx - 1} y={41} textAnchor="middle" fontSize={14} fontWeight={800} fill={INK}>{p.label}</text>
            <text x={cx - 1} y={74} textAnchor="middle" fontSize={13} fontWeight={700} fill="#e2e8f0">{p.sub}</text>
          </g>
        );
        x += w;
        return node;
      })}
    </svg>
  );
};

/** A row of stages joined by arrows. Long labels wrap onto two lines. */
export const StepFlow = ({ steps, aria }: { steps: readonly Part[]; aria: string }) => {
  const n = steps.length;
  const gap = 16;
  const w = (300 - gap * (n - 1)) / n;
  const size = n > 3 ? 12 : 13;
  return (
    <svg role="img" aria-label={aria} viewBox="0 0 320 84" className={panel} style={{ background: INK }}>
      {steps.map((s, i) => {
        const x = 10 + i * (w + gap);
        const words = s.label.split(' ');
        const lines = s.label.length * size * 0.62 > w - 8 && words.length > 1 ? [words[0], words.slice(1).join(' ')] : [s.label];
        return (
          <g key={s.label + i}>
            <rect x={x} y={12} width={w} height={46} rx={8} fill={s.color} />
            {lines.map((l, j) => (
              <text key={l} x={x + w / 2} y={(lines.length === 1 ? 40 : 31) + j * 15} textAnchor="middle" fontSize={size} fontWeight={800} fill={INK}>{l}</text>
            ))}
            {i < n - 1 ? <path d={`M${x + w + 3} 29 l9 6 l-9 6 z`} fill="#94a3b8" /> : null}
            <text x={x + w / 2} y={76} textAnchor="middle" fontSize={11} fontWeight={700} fill="#cbd5e1">{s.sub ?? ''}</text>
          </g>
        );
      })}
    </svg>
  );
};

/** One text, two reading strategies: skim the whole page for the gist, scan one line for a detail. */
export const SkimScan = ({ target, aria }: { target: number; aria: string }) => (
  <svg role="img" aria-label={aria} viewBox="0 0 320 190" className={panel} style={{ background: INK }}>
    <rect x={10} y={10} width={300} height={118} rx={8} fill="#f1f5f9" />
    <text x={22} y={34} fontSize={14} fontWeight={800} fill={INK}>{SCAN_TITLE}</text>
    {SCAN_LINES.map((l, i) => (
      <g key={l}>
        {i === target ? <rect x={16} y={44 + i * 28} width={288} height={24} rx={4} fill="#fde68a" /> : null}
        <text x={22} y={61 + i * 28} fontSize={12.5} fontWeight={600} fill="#334155">{l}</text>
      </g>
    ))}
    <text x={10} y={152} fontSize={13} fontWeight={800} fill="#818cf8">Skim</text>
    <text x={52} y={152} fontSize={12} fontWeight={600} fill="#cbd5e1">the whole page, for the gist</text>
    <text x={10} y={174} fontSize={13} fontWeight={800} fill="#fbbf24">Scan</text>
    <text x={52} y={174} fontSize={12} fontWeight={600} fill="#cbd5e1">one line, for a detail</text>
  </svg>
);

/** A hub with up to four skills around one task. */
export const Hub = ({ centre, spokes, aria }: { centre: string; spokes: readonly string[]; aria: string }) => {
  const colors = ['#818cf8', '#34d399', '#fbbf24', '#fb7185'];
  const pos = [[10, 8], [178, 8], [10, 102], [178, 102]];
  return (
    <svg role="img" aria-label={aria} viewBox="0 0 320 160" className={panel} style={{ background: INK }}>
      {spokes.map((s, i) => (
        <g key={s}>
          <line x1={160} y1={80} x2={pos[i][0] + 66} y2={pos[i][1] + 25} stroke="#64748b" strokeWidth={2} />
          <rect x={pos[i][0]} y={pos[i][1]} width={132} height={50} rx={8} fill={colors[i]} />
          <text x={pos[i][0] + 66} y={pos[i][1] + 30} textAnchor="middle" fontSize={14} fontWeight={800} fill={INK}>{s}</text>
        </g>
      ))}
      <circle cx={160} cy={80} r={30} fill="#e2e8f0" />
      <text x={160} y={77} textAnchor="middle" fontSize={11} fontWeight={800} fill={INK}>{centre.split(' ')[0]}</text>
      <text x={160} y={90} textAnchor="middle" fontSize={11} fontWeight={800} fill={INK}>{centre.split(' ').slice(1).join(' ')}</text>
    </svg>
  );
};
