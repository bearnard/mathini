import { r3 } from '../round';

/**
 * Grade 7 lesson pictures in the same style as FractionRows: a dark panel, a 120-unit-wide
 * viewBox, indigo / emerald / amber / rose, and at most six labels per picture. Positions come
 * from the numbers passed in, so a picture always matches its worked example.
 */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const I = '#818cf8';
const E = '#34d399';
const A = '#fbbf24';
const R = '#fb7185';
export const PICTURE_COLORS = { indigo: I, green: E, amber: A, rose: R } as const;

const Panel = ({ h, aria, children, className }: { h: number; aria: string; children: React.ReactNode; className?: string }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`} style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);


// ---------- number line ----------

export interface LineMark {
  value: number;
  /** Label under the line; leave out for a plain dot. */
  label?: string;
  color?: string;
}
export interface LineJump {
  from: number;
  to: number;
  /** Written above the arrow, e.g. "+8" or "−12". */
  label: string;
  color?: string;
}

/** A number line with every whole number ticked. Only 0 and the marks you pass are labelled. */
export const NumberLine = ({ min, max, marks = [], jumps = [], aria, className }: { min: number; max: number; marks?: LineMark[]; jumps?: LineJump[]; aria: string; className?: string }) => {
  const X0 = 8;
  const W = 104;
  const x = (v: number) => r3(X0 + ((v - min) / (max - min)) * W);
  const top = jumps.length ? 34 : 14;
  const axisY = top + 12;
  const h = axisY + 24;
  const ticks = Array.from({ length: max - min + 1 }, (_, i) => min + i);
  const labelled = new Set(marks.filter((m) => m.label !== undefined).map((m) => m.value));
  return (
    <Panel h={h} aria={aria} className={className}>
      <line x1={X0 - 3} y1={axisY} x2={X0 + W + 3} y2={axisY} stroke={LINE} strokeWidth={0.9} />
      <path d={`M${X0 + W + 3},${axisY} l-2.4,-1.3 v2.6 z`} fill={LINE} />
      <path d={`M${X0 - 3},${axisY} l2.4,-1.3 v2.6 z`} fill={LINE} />
      {ticks.map((t) => (
        <line key={t} x1={x(t)} y1={axisY - (t === 0 ? 3.2 : 2)} x2={x(t)} y2={axisY + (t === 0 ? 3.2 : 2)} stroke={t === 0 ? A : LINE} strokeWidth={t === 0 ? 1.1 : 0.6} />
      ))}
      {!labelled.has(0) && min <= 0 && max >= 0 && (
        <text x={x(0)} y={axisY + 11} textAnchor="middle" fontSize={5.6} fontWeight={800} fill={A}>0</text>
      )}
      {jumps.map((j, i) => {
        const x1 = x(j.from);
        const x2 = x(j.to);
        const lift = 11 + i * 3;
        const mid = r3((x1 + x2) / 2);
        const dir = x2 >= x1 ? 1 : -1;
        const c = j.color ?? I;
        return (
          <g key={i}>
            <path d={`M${x1},${axisY - 2.5} Q${mid},${axisY - 2.5 - lift * 2} ${x2},${axisY - 2.5}`} fill="none" stroke={c} strokeWidth={1.1} />
            <path d={`M${x2},${axisY - 2.5} l${-2.6 * dir},-2.2 m${2.6 * dir},2.2 l${-1.2 * dir},3`} fill="none" stroke={c} strokeWidth={1.1} strokeLinecap="round" />
            <text x={mid} y={r3(axisY - 2.5 - lift - 2)} textAnchor="middle" fontSize={6.4} fontWeight={800} fill={c}>{j.label}</text>
          </g>
        );
      })}
      {marks.map((m, i) => (
        <g key={i}>
          <circle cx={x(m.value)} cy={axisY} r={2.3} fill={m.color ?? I} stroke={INK} strokeWidth={0.6} />
          {m.label !== undefined && (
            <text x={x(m.value)} y={axisY + 11} textAnchor="middle" fontSize={5.6} fontWeight={800} fill={m.color ?? I}>{m.label}</text>
          )}
        </g>
      ))}
    </Panel>
  );
};

// ---------- mixed numbers ----------

export interface MixedRow {
  whole: number;
  n: number;
  d: number;
  color: string;
}

/** Mixed numbers as unit bars: whole bars fully shaded, then one bar cut into d parts with n shaded. */
export const MixedBars = ({ rows, signs = [], aria, className }: { rows: MixedRow[]; signs?: (string | null)[]; aria: string; className?: string }) => {
  const CELL = 21;
  const X0 = 26;
  const BAR_H = 11;
  const GAP = 9;
  const rowY = (i: number) => 6 + i * (BAR_H + GAP);
  const h = 6 * 2 + rows.length * BAR_H + (rows.length - 1) * GAP;
  return (
    <Panel h={h} aria={aria} className={className}>
      {rows.map((row, i) => {
        const y = rowY(i);
        const cells = row.whole + (row.n > 0 ? 1 : 0);
        return (
          <g key={i}>
            <text x={13} y={y + BAR_H / 2 + 2.2} textAnchor="middle" fontSize={6} fontWeight={800} fill={LINE}>
              {row.whole > 0 ? row.whole : ''}{row.n > 0 ? `${row.whole > 0 ? ' ' : ''}${row.n}/${row.d}` : ''}
            </text>
            {Array.from({ length: cells }).map((_, c) => {
              const isFrac = c >= row.whole;
              const x = X0 + c * (CELL + 1.5);
              return (
                <g key={c}>
                  <rect x={x} y={y} width={CELL} height={BAR_H} fill="#1e293b" />
                  {isFrac
                    ? Array.from({ length: row.n }).map((__, k) => (
                        <rect key={k} x={r3(x + (k * CELL) / row.d)} y={y} width={r3(CELL / row.d)} height={BAR_H} fill={row.color} />
                      ))
                    : <rect x={x} y={y} width={CELL} height={BAR_H} fill={row.color} />}
                  {isFrac && (
                    <g stroke={INK} strokeWidth={0.7}>
                      {Array.from({ length: row.d - 1 }).map((__, k) => (
                        <line key={k} x1={r3(x + ((k + 1) * CELL) / row.d)} y1={y} x2={r3(x + ((k + 1) * CELL) / row.d)} y2={y + BAR_H} />
                      ))}
                    </g>
                  )}
                  <rect x={x} y={y} width={CELL} height={BAR_H} fill="none" stroke={LINE} strokeWidth={0.8} />
                </g>
              );
            })}
          </g>
        );
      })}
      {signs.map((s, i) =>
        s ? (
          <text key={i} x={13} y={r3(rowY(i) + BAR_H + GAP / 2 + 2.2)} textAnchor="middle" fontSize={6.4} fontWeight={800} fill={A}>{s}</text>
        ) : null,
      )}
    </Panel>
  );
};

// ---------- fraction of an amount ----------

/** `amount` dots in `d` equal groups, the first `n` groups shaded: n/d of the amount. */
export const FractionOfAmount = ({ n, d, amount, className }: { n: number; d: number; amount: number; className?: string }) => {
  if (amount % d !== 0) throw new Error('amount must split into equal groups');
  const per = amount / d;
  const GW = Math.min(24, 100 / d - 2);
  const startX = (120 - (d * GW + (d - 1) * 2)) / 2;
  const cols = Math.min(per, 2);
  const rowsN = Math.ceil(per / cols);
  const dot = Math.min(4.2, GW / cols - 1, 4.2);
  const GH = rowsN * (dot + 1.6) + 4;
  const h = 10 + GH + 22;
  return (
    <Panel h={h} className={className} aria={`${amount} dots in ${d} equal groups of ${per}. ${n} of the ${d} groups are shaded, which is ${n} times ${per}, so ${n} over ${d} of ${amount} is ${n * per}.`}>
      {Array.from({ length: d }).map((_, g) => {
        const gx = startX + g * (GW + 2);
        const on = g < n;
        return (
          <g key={g}>
            <rect x={r3(gx)} y={6} width={GW} height={GH} rx={2} fill={on ? 'rgba(52,211,153,0.18)' : '#1e293b'} stroke={on ? E : '#475569'} strokeWidth={0.8} />
            {Array.from({ length: per }).map((_, k) => (
              <circle key={k} cx={r3(gx + GW / 2 + ((k % cols) - (cols - 1) / 2) * (dot + 1.2))} cy={r3(6 + 3 + dot / 2 + Math.floor(k / cols) * (dot + 1.6))} r={r3(dot / 2)} fill={on ? E : '#64748b'} />
            ))}
          </g>
        );
      })}
      <text x={60} y={6 + GH + 9} textAnchor="middle" fontSize={5.8} fontWeight={800} fill={LINE}>{`${amount} ÷ ${d} = ${per} in each group`}</text>
      <text x={60} y={6 + GH + 18} textAnchor="middle" fontSize={5.8} fontWeight={800} fill={E}>{`${n} groups: ${n} × ${per} = ${n * per}`}</text>
    </Panel>
  );
};

// ---------- exponents ----------

/** A square of n x n unit squares: n squared. */
export const SquareGrid = ({ n, className }: { n: number; className?: string }) => {
  const cell = Math.min(9, 60 / n);
  const side = n * cell;
  const x0 = 60 - side / 2;
  const y0 = 12;
  return (
    <Panel h={y0 + side + 19} className={className} aria={`A square made of ${n} rows of ${n} small squares, ${n * n} in all.`}>
      {Array.from({ length: n * n }).map((_, k) => (
        <rect key={k} x={r3(x0 + (k % n) * cell)} y={r3(y0 + Math.floor(k / n) * cell)} width={cell - 0.8} height={cell - 0.8} rx={0.8} fill={(Math.floor(k / n) + (k % n)) % 2 ? I : '#a5b4fc'} />
      ))}
      <text x={60} y={8.5} textAnchor="middle" fontSize={5.6} fontWeight={800} fill={A}>{n}</text>
      <text x={r3(x0 - 4)} y={r3(y0 + side / 2 + 2)} textAnchor="middle" fontSize={5.6} fontWeight={800} fill={A}>{n}</text>
      <text x={60} y={r3(y0 + side + 12)} textAnchor="middle" fontSize={6} fontWeight={800} fill={LINE}>{`${n} × ${n} = ${n * n} squares`}</text>
    </Panel>
  );
};

/** The anatomy of a power: base, exponent, and the repeated multiplication it stands for. */
export const PowerAnatomy = ({ base, exp, className }: { base: number; exp: number; className?: string }) => {
  const value = base ** exp;
  const expanded = Array.from({ length: exp }, () => String(base)).join(' × ');
  return (
    <Panel h={66} className={className} aria={`The power ${base} to the exponent ${exp}. The base ${base} is the number that is multiplied. The exponent ${exp} says how many times ${base} is written. ${expanded} = ${value}.`}>
      <text x={52} y={34} textAnchor="middle" fontSize={26} fontWeight={800} fill={I}>{base}</text>
      <text x={r3(52 + String(base).length * 8 + 4)} y={20} textAnchor="start" fontSize={15} fontWeight={800} fill={E}>{exp}</text>
      <text x={20} y={46} textAnchor="middle" fontSize={5.6} fontWeight={800} fill={I}>base</text>
      <text x={92} y={12} textAnchor="middle" fontSize={5.6} fontWeight={800} fill={E}>exponent</text>
      <path d="M26,40 L48,36" stroke={I} strokeWidth={0.7} />
      <path d="M82,13.5 L74,17" stroke={E} strokeWidth={0.7} />
      <text x={60} y={60} textAnchor="middle" fontSize={6.4} fontWeight={800} fill={LINE}>{`${expanded} = ${value}`}</text>
    </Panel>
  );
};


/** The base written out in groups: 5² × 5³ is a group of 2 fives and a group of 3 fives, 5 fives in all. */
export const PowerGroups = ({ base, groups, className }: { base: number; groups: number[]; className?: string }) => {
  const total = groups.reduce((a, b) => a + b, 0);
  const colors = [I, E, A];
  const R0 = 5.2;
  const step = Math.min(13, 108 / total);
  const startX = 60 - ((total - 1) * step) / 2;
  let idx = 0;
  return (
    <Panel h={54} className={className} aria={`${total} circles, each holding the number ${base}, in groups of ${groups.join(' and ')}. ${groups.join(' + ')} = ${total}, so there are ${total} copies of ${base} multiplied together.`}>
      {groups.map((g, gi) => {
        const first = idx;
        const circles = Array.from({ length: g }).map((_, k) => {
          const cx = r3(startX + (first + k) * step);
          return (
            <g key={k}>
              <circle cx={cx} cy={17} r={R0} fill={colors[gi % 3]} />
              <text x={cx} y={19.2} textAnchor="middle" fontSize={6.2} fontWeight={800} fill={INK}>{base}</text>
            </g>
          );
        });
        idx += g;
        const x1 = r3(startX + first * step - R0);
        const x2 = r3(startX + (first + g - 1) * step + R0);
        return (
          <g key={gi}>
            {circles}
            <path d={`M${x1},27 v2 h${r3(x2 - x1)} v-2`} fill="none" stroke={colors[gi % 3]} strokeWidth={0.9} />
            <text x={r3((x1 + x2) / 2)} y={36} textAnchor="middle" fontSize={5.8} fontWeight={800} fill={colors[gi % 3]}>{g}</text>
          </g>
        );
      })}
      <text x={60} y={48} textAnchor="middle" fontSize={6} fontWeight={800} fill={LINE}>{`${groups.join(' + ')} = ${total} copies of ${base}`}</text>
    </Panel>
  );
};

/** Powers of 10 stepping down: each step is divided by 10, which is why 10⁰ must be 1. */
export const PowerLadder = ({ top, className }: { top: number; className?: string }) => {
  const rowsN = top + 1;
  const ROW = 12;
  const fmt = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0');
  const sup = (n: number) => String(n).replace(/\d/g, (c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(c)]);
  const h = 8 + rowsN * ROW + 12;
  return (
    <Panel h={h} className={className} aria={`Powers of 10 from 10 to the power ${top} down to 10 to the power 0. Each step down divides by 10, so 10 to the power 0 is 1.`}>
      {Array.from({ length: rowsN }).map((_, i) => {
        const e = top - i;
        const y = 6 + i * ROW;
        return (
          <g key={e}>
            <rect x={22} y={y} width={76} height={ROW - 2.4} rx={2} fill={e === 0 ? 'rgba(251,191,36,0.2)' : '#1e293b'} stroke={e === 0 ? A : '#475569'} strokeWidth={0.8} />
            <text x={60} y={y + ROW - 5} textAnchor="middle" fontSize={6.2} fontWeight={800} fill={e === 0 ? A : LINE}>{`10${sup(e)} = ${fmt(10 ** e)}`}</text>
          </g>
        );
      })}
      <text x={60} y={h - 3.5} textAnchor="middle" fontSize={5.8} fontWeight={800} fill={E}>each step down: ÷ 10</text>
    </Panel>
  );
};
