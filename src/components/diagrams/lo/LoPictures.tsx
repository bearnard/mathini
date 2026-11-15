import { DAY_LABELS, criteriaMet, polar, sessionsIn } from './loHelpers';
import type { ActivityOption } from './loHelpers';

/**
 * Hand-built SVG pictures for the Grade 12 Life Orientation lessons. Positions are computed from
 * the data (loHelpers.ts), never placed by eye. At most six labels per picture.
 */

const INK = '#334155';
const COLORS = ['#818cf8', '#34d399', '#fbbf24', '#fb7185', '#38bdf8', '#a78bfa'];

/** A loop of 3 to 6 steps arranged in a circle, with arrows showing the direction. */
export const Loop = ({ steps, aria }: { steps: readonly string[]; aria: string }) => {
  const n = steps.length;
  const cx = 160;
  const cy = 132;
  const r = 78;
  return (
    <svg viewBox="0 0 320 264" role="img" aria-label={aria} className="mx-auto block w-full max-w-sm">
      <defs>
        <marker id="lo-loop-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill={INK} />
        </marker>
      </defs>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 5" />
      {steps.map((s, i) => {
        const p = polar(cx, cy, r, i, n);
        const q = polar(cx, cy, r, i + 0.5, n);
        const next = polar(cx, cy, r, i + 0.62, n);
        return (
          <g key={s}>
            <path d={`M${q.x} ${q.y} L${next.x} ${next.y}`} stroke={INK} strokeWidth="2" markerEnd="url(#lo-loop-arrow)" />
            <circle cx={p.x} cy={p.y} r="15" fill={COLORS[i % COLORS.length]} />
            <text x={p.x} y={p.y + 5} textAnchor="middle" fontSize="14" fontWeight="800" fill="#0f172a">{i + 1}</text>
          </g>
        );
      })}
      {steps.map((s, i) => {
        const p = polar(cx, cy, r + 26, i, n);
        const anchor = p.x < cx - 4 ? 'end' : p.x > cx + 4 ? 'start' : 'middle';
        const dy = p.y < cy - r ? -6 : p.y > cy + r ? 14 : 4;
        return (
          <text key={s} x={p.x} y={p.y + dy} textAnchor={anchor} fontSize="13" fontWeight="700" fill={INK}>{s}</text>
        );
      })}
    </svg>
  );
};

/** A centre idea with 3 to 6 spokes, each ending in a labelled circle. */
export const Spokes = ({ centre, spokes, aria }: { centre: string; spokes: readonly string[]; aria: string }) => {
  const n = spokes.length;
  const cx = 180;
  const cy = 120;
  const words = centre.split(' ');
  return (
    <svg viewBox="0 0 360 240" role="img" aria-label={aria} className="mx-auto block w-full max-w-sm">
      {spokes.map((s, i) => {
        const p = polar(cx, cy, 64, i, n);
        return <line key={s} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#cbd5e1" strokeWidth="3" />;
      })}
      {spokes.map((s, i) => {
        const p = polar(cx, cy, 64, i, n);
        const l = polar(cx, cy, 90, i, n);
        const anchor = l.x < cx - 4 ? 'end' : l.x > cx + 4 ? 'start' : 'middle';
        const dy = l.y < cy - 64 ? 0 : l.y > cy + 64 ? 12 : 5;
        return (
          <g key={s}>
            <circle cx={p.x} cy={p.y} r="14" fill={COLORS[i % COLORS.length]} />
            <text x={l.x + (anchor === 'end' ? -6 : anchor === 'start' ? 6 : 0)} y={l.y + dy} textAnchor={anchor} fontSize="13" fontWeight="700" fill={INK}>{s}</text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r="38" fill="#4f46e5" />
      {words.map((w, i) => (
        <text key={w} x={cx} y={cy + 5 + (i - (words.length - 1) / 2) * 15} textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff">{w}</text>
      ))}
    </svg>
  );
};

/** One or more weekly activity logs: a filled circle is an active day. Shows the session count. */
export const WeekLog = ({ rows, aria }: { rows: readonly { label: string; days: readonly boolean[] }[]; aria: string }) => (
  <svg viewBox={`0 0 320 ${30 + rows.length * 56}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-sm">
    {DAY_LABELS.map((d, i) => (
      <text key={i} x={92 + i * 30} y={18} textAnchor="middle" fontSize="12" fontWeight="700" fill="#64748b">{d}</text>
    ))}
    {rows.map((row, r) => (
      <g key={row.label} transform={`translate(0 ${30 + r * 56})`}>
        <text x="4" y="22" fontSize="13" fontWeight="800" fill={INK}>{row.label}</text>
        <text x="4" y="38" fontSize="12" fill="#64748b">{sessionsIn(row.days)} {sessionsIn(row.days) === 1 ? 'session' : 'sessions'}</text>
        {row.days.map((on, i) => (
          <circle key={i} cx={92 + i * 30} cy="26" r="11" fill={on ? '#34d399' : '#f1f5f9'} stroke={on ? '#059669' : '#cbd5e1'} strokeWidth="2" />
        ))}
      </g>
    ))}
  </svg>
);

/** Activity options against the four criteria. A tick means the criterion is met. */
export const CriteriaTable = ({ options, aria }: { options: readonly ActivityOption[]; aria: string }) => {
  const cols = ['Safe', 'Cheap', 'Fun', 'Near'];
  const keys = ['safe', 'affordable', 'enjoyable', 'accessible'] as const;
  return (
    <svg viewBox={`0 0 320 ${34 + options.length * 34}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-sm">
      {cols.map((c, i) => (
        <text key={c} x={150 + i * 36} y="18" textAnchor="middle" fontSize="12" fontWeight="700" fill="#64748b">{c}</text>
      ))}
      <text x="312" y="18" textAnchor="end" fontSize="12" fontWeight="700" fill="#64748b">of 4</text>
      {options.map((o, r) => (
        <g key={o.name} transform={`translate(0 ${30 + r * 34})`}>
          <rect x="2" y="2" width="316" height="28" rx="8" fill={r % 2 ? '#f8fafc' : '#eef2ff'} />
          <text x="10" y="21" fontSize="13" fontWeight="700" fill={INK}>{o.name}</text>
          {keys.map((k, i) => (
            <text key={k} x={150 + i * 36} y="22" textAnchor="middle" fontSize="16" fontWeight="800" fill={o[k] ? '#059669' : '#e11d48'}>{o[k] ? '✓' : '✗'}</text>
          ))}
          <text x="312" y="21" textAnchor="end" fontSize="14" fontWeight="800" fill={INK}>{criteriaMet(o)}</text>
        </g>
      ))}
    </svg>
  );
};

/** A one-page CV drawn as a page with labelled sections (grey bars stand for the text). */
export const CvSketch = ({ sections, aria }: { sections: readonly string[]; aria: string }) => {
  const rowH = 36;
  const top = 56;
  return (
    <svg viewBox={`0 0 320 ${top + sections.length * rowH + 14}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-xs">
      <rect x="40" y="2" width="240" height={top + sections.length * rowH + 8} rx="8" fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <rect x="56" y="14" width="120" height="14" rx="4" fill="#4f46e5" />
      <rect x="56" y="34" width="170" height="6" rx="3" fill="#cbd5e1" />
      {sections.map((s, i) => (
        <g key={s} transform={`translate(0 ${top + i * rowH})`}>
          <text x="56" y="12" fontSize="12" fontWeight="800" fill={INK}>{s}</text>
          <rect x="56" y="18" width={190 - (i % 3) * 30} height="6" rx="3" fill="#e2e8f0" />
        </g>
      ))}
    </svg>
  );
};
