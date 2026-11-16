import { r3 } from '../round';
import { PICTURE_COLORS } from './Grade7Pictures';
import { columnAdd, columnSubtract, digitsOf, group } from './grade6AddSub';

/**
 * Grade 6 Mathematics lesson pictures, in the style of Grade10Maths / Grade7Pictures: a dark panel, a 120-unit-wide viewBox, positions computed from
 * the numbers passed in (so a picture always matches its worked example). No AI-generated images.
 */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const { indigo: I, green: E, amber: A, rose: R } = PICTURE_COLORS;

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    <title>{aria}</title>
    {children}
  </svg>
);
const T = ({ x, y, children, color = LINE, size = 6, anchor = 'middle' }: { x: number; y: number; children: React.ReactNode; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={r3(x)} y={r3(y)} textAnchor={anchor} fontSize={size} fontWeight={800} fill={color}>{children}</text>
);

/**
 * The column method for addition or subtraction, drawn from the same functions the lesson uses (grade6AddSub.ts): the digits in their columns, the carries
 * above an addition, the borrowed digits above a subtraction, a line, and the answer. `numbers` has two or more numbers for "+", exactly two (a, b with a >= b) for "−".
 */
export const ColumnMethod = ({ op, numbers }: { op: '+' | '−'; numbers: number[] }) => {
  const sum = op === '+' ? columnAdd(numbers) : null;
  const diff = op === '−' ? columnSubtract(numbers[0], numbers[1]) : null;
  const width = sum ? sum.width : digitsOf(numbers[0]).length;
  const answer = sum ? sum.result : (diff as NonNullable<typeof diff>).result;
  const pad = (n: number) => {
    const d = digitsOf(n);
    return Array.from({ length: width }, (_, i) => (d.length - width + i >= 0 ? String(d[d.length - width + i]) : ''));
  };
  const cell = 9;
  const gap = 3; // an extra gap after each group of three digits, from the right
  const total = (width - 1) * cell + Math.floor((width - 1) / 3) * gap;
  const colX = (c: number) => {
    const fromRight = width - 1 - c;
    return r3(60 + total / 2 - (fromRight * cell + Math.floor(fromRight / 3) * gap));
  };
  const rowH = 11;
  const topPad = 16;
  const rows = numbers.length;
  const h = topPad + rows * rowH + 26;
  const ansAnswerText = group(answer);
  return (
    <Panel
      h={h}
      aria={`The column method for ${numbers.map(group).join(` ${op} `)} = ${ansAnswerText}. The digits are lined up in columns, worked from the ones column leftwards${sum ? ', with a carry written above the next column' : ', borrowing from the next column when the top digit is too small'}.`}
    >
      {sum
        ? sum.carries.map((c, i) => (c > 0 ? <T key={`c${i}`} x={colX(i)} y={11} color={A} size={5}>{String(c)}</T> : null))
        : (diff as NonNullable<typeof diff>).top.map((t, i) => {
            const changed = t !== digitsOf(numbers[0])[i];
            return changed ? <T key={`b${i}`} x={colX(i)} y={11} color={A} size={5}>{String(t)}</T> : null;
          })}
      {numbers.map((n, r) => (
        <g key={r}>
          {pad(n).map((d, c) => (d === '' ? null : <T key={c} x={colX(c)} y={topPad + 8 + r * rowH} size={7.5}>{d}</T>))}
          {r === rows - 1 ? <T x={colX(0) - 9} y={topPad + 8 + r * rowH} color={E} size={8} anchor="end">{op}</T> : null}
        </g>
      ))}
      <line x1={colX(0) - 8} y1={topPad + rows * rowH + 3} x2={colX(width - 1) + 8} y2={topPad + rows * rowH + 3} stroke={MUTED} strokeWidth={0.8} />
      {pad(answer).map((d, c) => (d === '' ? null : <T key={c} x={colX(c)} y={topPad + rows * rowH + 14} color={I} size={7.5}>{d}</T>))}
    </Panel>
  );
};

/** A number line between two neighbouring multiples of `place`, with n marked and the rounding shown: which neighbour is nearer. */
export const RoundLine = ({ n, place }: { n: number; place: number }) => {
  const lo = Math.floor(n / place) * place;
  const hi = lo + place;
  const mid = lo + place / 2;
  const nearest = n >= mid ? hi : lo;
  const x = (v: number) => r3(14 + ((v - lo) / place) * 92);
  return (
    <Panel h={46} aria={`A number line from ${group(lo)} to ${group(hi)}. The number ${group(n)} is marked. The half way mark is ${group(mid)}. ${group(n)} is nearer to ${group(nearest)}, so it rounds to ${group(nearest)}.`}>
      <line x1={14} y1={24} x2={106} y2={24} stroke={MUTED} strokeWidth={1} />
      {[lo, mid, hi].map((v) => (
        <g key={v}>
          <line x1={x(v)} y1={20} x2={x(v)} y2={28} stroke={MUTED} strokeWidth={1} />
          <T x={x(v)} y={39} color={v === nearest ? E : MUTED} size={5}>{group(v)}</T>
        </g>
      ))}
      <circle cx={x(n)} cy={24} r={2.6} fill={A} />
      <T x={x(n)} y={14} color={A} size={5.4}>{group(n)}</T>
    </Panel>
  );
};

/** A sum or difference and the calculation that checks it: two lines joined by an arrow. */
export const InversePair = ({ top, bottom }: { top: string; bottom: string }) => (
  <Panel h={40} aria={`The calculation ${top}. It is checked with the inverse operation: ${bottom}.`}>
    <T x={60} y={13} color={I} size={6.4}>{top}</T>
    <path d="M 60 18 L 60 25" stroke={MUTED} strokeWidth={1} />
    <path d="M 57 23 L 60 27 L 63 23" fill="none" stroke={MUTED} strokeWidth={1} />
    <T x={60} y={36} color={E} size={6.4}>{bottom}</T>
  </Panel>
);

/** "I read ... so I do ...": what the words in a problem tell you to do. */
export const WordTools = ({ pairs }: { pairs: [string, string][] }) => (
  <Panel h={10 + pairs.length * 16} aria={`What the words mean: ${pairs.map(([w, d]) => `${w} means ${d}`).join('; ')}.`}>
    {pairs.map(([w, d], i) => (
      <g key={i}>
        <T x={8} y={15 + i * 16} color={A} size={5.4} anchor="start">{w}</T>
        <T x={112} y={15 + i * 16} color={E} size={5.4} anchor="end">{`→ ${d}`}</T>
      </g>
    ))}
  </Panel>
);
