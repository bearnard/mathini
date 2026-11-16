import { r3 } from '../round';
import { PICTURE_COLORS } from './Grade7Pictures';
import { columnAdd, columnSubtract, digitsOf, group } from './grade6AddSub';
import { divide, partialProducts } from './grade6MulDiv';
import { scaleTicks, scaleY, tempText } from './grade6Percent';

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


// ---------------------------------------------------------------- multiplication and division

/** Long multiplication written out: the number, the multiplier, each partial product with what it is a product of, a line and the total. */
export const LongMultiply = ({ a, b }: { a: number; b: number }) => {
  const parts = partialProducts(a, b);
  const total = parts.reduce((sum, p) => sum + p.product, 0);
  const rows: { label: string; text: string; color?: string }[] = [
    { label: '', text: group(a) },
    { label: '×', text: group(b) },
    ...parts.map((p) => ({ label: `${group(p.multiplier)} ×`, text: group(p.product), color: A })),
  ];
  const rowH = 10.5;
  const h = 14 + rows.length * rowH + 22;
  return (
    <Panel h={h} aria={`Long multiplication of ${group(a)} by ${group(b)}. The partial products are ${parts.map((p) => `${group(p.multiplier)} times ${group(a)} is ${group(p.product)}`).join(', and ')}. Added together they give ${group(total)}.`}>
      {rows.map((r, i) => (
        <g key={i}>
          <T x={10} y={14 + i * rowH} color={r.color ?? E} size={5.6} anchor="start">{r.label}</T>
          <T x={96} y={14 + i * rowH} color={r.color ?? LINE} size={7} anchor="end">{r.text}</T>
        </g>
      ))}
      <line x1={36} y1={14 + rows.length * rowH - 6} x2={100} y2={14 + rows.length * rowH - 6} stroke={MUTED} strokeWidth={0.8} />
      <T x={96} y={14 + rows.length * rowH + 6} color={I} size={7.4} anchor="end">{group(total)}</T>
    </Panel>
  );
};

/** Division by multiplying and subtracting: each step takes a multiple of the divisor away from what is left. */
export const LongDivision = ({ n, d }: { n: number; d: number }) => {
  const { quotient, remainder, steps } = divide(n, d);
  const rowH = 12;
  const h = 18 + steps.length * rowH * 2 + 20;
  return (
    <Panel
      h={h}
      aria={`Dividing ${group(n)} by ${d}. ${steps.map((st) => `Take away ${group(st.part)} times ${d}, which is ${group(st.product)}, and ${group(st.left)} is left`).join('. ')}. The answer is ${group(quotient)}${remainder ? ` remainder ${group(remainder)}` : ''}.`}
    >
      <T x={60} y={11} color={MUTED} size={5.6}>{`${group(n)} ÷ ${d}`}</T>
      {steps.map((st, i) => (
        <g key={i}>
          <T x={10} y={26 + i * rowH * 2} color={A} size={6.2} anchor="start">{`${group(st.part)} × ${d} = ${group(st.product)}`}</T>
          <T x={10} y={26 + i * rowH * 2 + rowH} color={MUTED} size={6.2} anchor="start">{`${i === 0 ? group(n) : group(steps[i - 1].left)} − ${group(st.product)} = ${group(st.left)}`}</T>
        </g>
      ))}
      <T x={60} y={h - 6} color={I} size={7.2}>{`${group(quotient)}${remainder ? ` remainder ${group(remainder)}` : ''}`}</T>
    </Panel>
  );
};

/** A few short lines of working, one colour each: clue boards, estimates and breaking a number up. */
export const LineList = ({ lines, aria }: { lines: { text: string; color?: string }[]; aria: string }) => (
  <Panel h={12 + lines.length * 12} aria={aria}>
    {lines.map((l, i) => (
      <T key={i} x={60} y={16 + i * 12} color={l.color ?? LINE} size={6.4}>{l.text}</T>
    ))}
  </Panel>
);


// ---------------------------------------------------------------- percentages and temperature

/** A 10 by 10 grid of 100 squares with the first n shaded: n per cent is n out of 100. */
export const PercentGrid = ({ n, caption }: { n: number; caption?: string }) => {
  const size = 4.6;
  const x0 = 10;
  const y0 = 7;
  return (
    <Panel h={58} aria={`A grid of 100 squares with ${n} of them shaded. ${n} out of 100 is ${n} per cent.${caption ? ` ${caption}` : ''}`}>
      {Array.from({ length: 100 }, (_, i) => {
        const row = Math.floor(i / 10);
        const col = i % 10;
        return <rect key={i} x={r3(x0 + col * size)} y={r3(y0 + row * size)} width={size - 0.6} height={size - 0.6} rx={0.6} fill={i < n ? A : 'rgba(148,163,184,0.18)'} />;
      })}
      <T x={92} y={26} color={A} size={11}>{`${n}%`}</T>
      <T x={92} y={38} color={MUTED} size={5.4}>{`${n} out of 100`}</T>
    </Panel>
  );
};

/** A bar for the whole amount with the part that is the percentage shaded: 25% of R300 is R75. */
export const PercentBar = ({ percent, whole, part, unit }: { percent: number; whole: number; part: number; unit: string }) => {
  const w = 96;
  return (
    <Panel h={46} aria={`A bar for the whole amount, ${unit}${group(whole)}. The shaded part is ${percent} per cent of it, which is ${unit}${group(part)}.`}>
      <rect x={12} y={12} width={w} height={14} rx={2} fill="rgba(148,163,184,0.18)" stroke={MUTED} strokeWidth={0.6} />
      <rect x={12} y={12} width={r3((w * percent) / 100)} height={14} rx={2} fill={A} />
      <T x={12 + (w * percent) / 200} y={21.5} color={INK} size={5.4}>{`${percent}%`}</T>
      <T x={12 + (w * percent) / 200} y={37} color={A} size={5.4}>{`${unit}${group(part)}`}</T>
      <T x={12 + w} y={37} color={MUTED} size={5.4} anchor="end">{`whole: ${unit}${group(whole)}`}</T>
    </Panel>
  );
};

/** One or more thermometers on the same scale (degrees Celsius). Values are in TENTHS of a degree (367 = 36,7 °C). Lines every `step` degrees, numbers every `numberEvery`. */
export const Thermometers = ({ items, min, max, step, numberEvery }: { items: { value: number; label: string }[]; min: number; max: number; step: number; numberEvery: number }) => {
  const top = 10;
  const bottom = 58;
  const yOf = (deg: number) => scaleY(deg, min, max, top, bottom);
  const n = items.length;
  const ticks = scaleTicks(min, max, step);
  return (
    <Panel
      h={76}
      aria={`${n > 1 ? 'Thermometers' : 'A thermometer'} in degrees Celsius with a scale from ${min} to ${max}, a line for every ${step} degree${step === 1 ? '' : 's'}. ${items.map((it) => `${it.label}: ${tempText(it.value)}`).join('; ')}.`}
    >
      {items.map((it, i) => {
        const cx = 60 + (i - (n - 1) / 2) * (n > 1 ? 40 : 0);
        const level = yOf(it.value / 10);
        return (
          <g key={i}>
            <rect x={cx - 3} y={top - 2} width={6} height={bottom - top + 4} rx={3} fill="rgba(148,163,184,0.2)" stroke={MUTED} strokeWidth={0.6} />
            <rect x={cx - 1.6} y={level} width={3.2} height={r3(bottom - level + 2)} rx={1.6} fill={R} />
            <circle cx={cx} cy={bottom + 5} r={4.2} fill={R} />
            {ticks.map((d) => (
              <g key={d}>
                <line x1={cx - 8} y1={yOf(d)} x2={cx - 4} y2={yOf(d)} stroke={MUTED} strokeWidth={d % numberEvery === 0 ? 0.9 : 0.5} />
                {d % numberEvery === 0 ? <T x={cx - 10} y={yOf(d) + 1.8} color={MUTED} size={4.4} anchor="end">{String(d)}</T> : null}
              </g>
            ))}
            <T x={cx + 8} y={Math.max(level, top + 6) + 1.5} color={A} size={5.2} anchor="start">{tempText(it.value)}</T>
            <T x={cx} y={73} color={LINE} size={4.8}>{it.label}</T>
          </g>
        );
      })}
    </Panel>
  );
};
