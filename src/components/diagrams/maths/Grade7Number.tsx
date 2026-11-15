import { r3 } from '../round';
import { A, E, I, INK, LINE, Panel, R } from './Grade7Pictures';
import { dec, digitSum, factorTree, primeFactors, primeVenn, roundDec, simplifyRatio } from './grade7Helpers';
import { hcf } from './mathsHelpers';

/** Grade 7 number pictures (place value, factor trees, HCF/LCM, ratio, decimals). All values are computed from the numbers passed in. */

const T = ({ x, y, children, fill = LINE, size = 5.6, anchor = 'middle' }: { x: number; y: number; children: React.ReactNode; fill?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={r3(x)} y={r3(y)} textAnchor={anchor} fontSize={size} fontWeight={800} fill={fill}>{children}</text>
);

/** A place-value chart: one cell per digit with its heading. `highlight` marks one cell; a comma is drawn after cell `commaAfter`. */
export const ValueChart = ({ digits, heads, highlight, commaAfter, caption, className }: { digits: string[]; heads: string[]; highlight?: number; commaAfter?: number; caption?: string; className?: string }) => {
  const n = digits.length;
  const w = Math.min(26, 100 / n);
  const x0 = 60 - (n * w) / 2;
  return (
    <Panel h={caption ? 58 : 48} className={className} aria={`A place-value chart. ${digits.map((d, i) => `${d} in the ${heads[i]} place`).join(', ')}.${caption ? ' ' + caption : ''}`}>
      {digits.map((d, i) => (
        <g key={i}>
          <rect x={r3(x0 + i * w + 1)} y={18} width={r3(w - 2)} height={22} rx={2.5} fill={i === highlight ? 'rgba(251,191,36,0.3)' : '#1e293b'} stroke={i === highlight ? A : '#64748b'} strokeWidth={0.9} />
          <T x={x0 + i * w + w / 2} y={33.5} fill={i === highlight ? A : LINE} size={13}>{d}</T>
          <T x={x0 + i * w + w / 2} y={13} fill={I} size={w < 22 ? 3.9 : 4.4}>{heads[i]}</T>
        </g>
      ))}
      {commaAfter !== undefined && <T x={x0 + (commaAfter + 1) * w} y={40} fill={A} size={11}>,</T>}
      {caption && <T x={60} y={53} fill={A} size={5.6}>{caption}</T>}
    </Panel>
  );
};

/** The digits of n added up: the sum decides divisibility by 3 and 9. */
export const DigitSumPicture = ({ n, by, className }: { n: number; by: number; className?: string }) => {
  const digits = String(n).split('');
  const sum = digitSum(n);
  const w = 14;
  const x0 = 60 - (digits.length * w) / 2;
  const ok = sum % by === 0;
  return (
    <Panel h={64} className={className} aria={`The digits of ${n} are ${digits.join(', ')}. They add up to ${sum}. ${sum} ${ok ? 'is' : 'is not'} in the ${by} times table, so ${n} ${ok ? 'is' : 'is not'} divisible by ${by}.`}>
      {digits.map((d, i) => (
        <g key={i}>
          <rect x={r3(x0 + i * w + 1.5)} y={8} width={w - 3} height={18} rx={2.5} fill="#1e293b" stroke={I} strokeWidth={0.9} />
          <T x={x0 + i * w + w / 2} y={21} fill={LINE} size={11}>{d}</T>
        </g>
      ))}
      <T x={60} y={40} fill={A} size={6.2}>{digits.join(' + ')} = {sum}</T>
      <T x={60} y={53} fill={ok ? E : R} size={6}>{sum} ÷ {by} = {sum / by}: {ok ? `divisible by ${by}` : `not divisible by ${by}`}</T>
    </Panel>
  );
};

/** A factor tree for n: composites split into a prime and the rest until only primes are left. */
export const FactorTreePicture = ({ n, className }: { n: number; className?: string }) => {
  const steps = factorTree(n);
  const pf = primeFactors(n);
  const node = (x: number, y: number, v: number, prime: boolean) => (
    <g>
      <circle cx={r3(x)} cy={r3(y)} r={7} fill={prime ? 'rgba(52,211,153,0.3)' : '#1e293b'} stroke={prime ? E : I} strokeWidth={1} />
      <T x={x} y={y + 2.2} fill={LINE} size={6.4}>{v}</T>
    </g>
  );
  const pos = (i: number) => ({ x: 40 + i * 15, y: 12 + i * 23 });
  const h = 12 + steps.length * 23 + 28;
  const last = steps[steps.length - 1];
  const lastRest = pos(steps.length - 1);
  return (
    <Panel h={h} className={className} aria={`A factor tree for ${n}. ${steps.map((s) => `${s.n} splits into ${s.p} and ${s.rest}`).join('; ')}. The prime factors are ${pf.join(' times ')}.`}>
      {steps.map((s, i) => {
        const c = pos(i);
        const left = { x: c.x - 15, y: c.y + 23 };
        const right = i === steps.length - 1 ? { x: c.x + 15, y: c.y + 23 } : pos(i + 1);
        return (
          <g key={i}>
            <line x1={c.x} y1={c.y + 7} x2={left.x + 3} y2={left.y - 7} stroke="#64748b" strokeWidth={0.9} />
            <line x1={c.x} y1={c.y + 7} x2={right.x - 3} y2={right.y - 7} stroke="#64748b" strokeWidth={0.9} />
          </g>
        );
      })}
      {steps.map((s, i) => (
        <g key={i}>
          {node(pos(i).x, pos(i).y, s.n, false)}
          {node(pos(i).x - 15, pos(i).y + 23, s.p, true)}
        </g>
      ))}
      {node(lastRest.x + 15, lastRest.y + 23, last.rest, true)}
      <T x={60} y={h - 5} fill={A} size={6}>{n} = {pf.join(' × ')}</T>
    </Panel>
  );
};

/** Prime factors of a and b in two overlapping circles: the overlap gives the HCF, everything together gives the LCM. */
export const PrimeVennPicture = ({ a, b, className }: { a: number; b: number; className?: string }) => {
  const v = primeVenn(a, b);
  const stack = (xs: number[], cx: number) =>
    xs.map((p, i) => <T key={i} x={cx} y={46 + (i - (xs.length - 1) / 2) * 9} fill={LINE} size={7}>{p}</T>);
  const lcmParts = [...v.common, ...v.onlyA, ...v.onlyB];
  return (
    <Panel h={110} className={className} aria={`${a} and ${b} written as products of primes in two overlapping circles. ${a} has ${[...v.onlyA, ...v.common].join(', ')}; ${b} has ${[...v.onlyB, ...v.common].join(', ')}. The shared primes ${v.common.join(' and ')} multiply to the HCF ${v.hcf}. All the primes together multiply to the LCM ${v.lcm}.`}>
      <circle cx={46} cy={46} r={29} fill="rgba(129,140,248,0.22)" stroke={I} strokeWidth={1.1} />
      <circle cx={74} cy={46} r={29} fill="rgba(52,211,153,0.22)" stroke={E} strokeWidth={1.1} />
      <T x={34} y={12} fill={I} size={6.6}>{a}</T>
      <T x={86} y={12} fill={E} size={6.6}>{b}</T>
      {stack(v.onlyA, 33)}
      {stack(v.common, 60)}
      {stack(v.onlyB, 87)}
      <T x={60} y={89} fill={A} size={5.6}>HCF = {v.common.join(' × ')} = {v.hcf}</T>
      <T x={60} y={100} fill={A} size={5.6}>LCM = {lcmParts.join(' × ')} = {v.lcm}</T>
    </Panel>
  );
};

/** A ratio as blocks: each block stands for the highest common factor, so 15:25 shows as 3 blocks to 5 blocks. */
export const RatioBlocks = ({ a, b, className }: { a: number; b: number; className?: string }) => {
  const g = hcf(a, b);
  const s = simplifyRatio(a, b);
  const bw = 12;
  return (
    <Panel h={58} className={className} aria={`The ratio ${a} to ${b} drawn as blocks. Each block stands for ${g}. The first row has ${s.a} blocks and the second row has ${s.b} blocks, so the ratio is ${s.a} to ${s.b}.`}>
      {[{ n: s.a, v: a, y: 8, c: I }, { n: s.b, v: b, y: 28, c: E }].map((row) => (
        <g key={row.y}>
          <T x={16} y={row.y + 11} fill={row.c} size={7}>{row.v}</T>
          {Array.from({ length: row.n }).map((_, i) => (
            <rect key={i} x={r3(30 + i * (bw + 1.5))} y={row.y} width={bw} height={15} rx={2} fill={row.c} opacity={0.85} />
          ))}
        </g>
      ))}
      <T x={60} y={53} fill={A} size={5.6}>each block = {g}, so {a}:{b} = {s.a}:{s.b}</T>
    </Panel>
  );
};

/** A number line between two neighbouring tenths with the value marked: which end is it nearer to? */
export const RoundingLine = ({ value, className }: { value: number; className?: string }) => {
  const lo = Math.floor(value * 10) / 10;
  const hi = Math.round((lo + 0.1) * 10) / 10;
  const mid = Math.round((lo + 0.05) * 100) / 100;
  const rounded = roundDec(value, 1);
  const X0 = 16;
  const W = 88;
  const x = (v: number) => X0 + ((v - lo) / (hi - lo)) * W;
  return (
    <Panel h={64} className={className} aria={`A number line from ${dec(lo)} to ${dec(hi)} with the halfway mark ${dec(mid, 2)}. ${dec(value)} is ${value >= mid ? 'past' : 'before'} the halfway mark, so it rounds to ${dec(rounded)}.`}>
      <line x1={X0 - 4} y1={34} x2={X0 + W + 4} y2={34} stroke={LINE} strokeWidth={1} />
      {[lo, mid, hi].map((v) => <line key={v} x1={r3(x(v))} y1={30} x2={r3(x(v))} y2={38} stroke={v === mid ? A : LINE} strokeWidth={1} />)}
      <T x={x(lo)} y={48} fill={I} size={6}>{dec(lo)}</T>
      <T x={x(mid)} y={48} fill={A} size={5.2}>{dec(mid, 2)}</T>
      <T x={x(hi)} y={48} fill={E} size={6}>{dec(hi)}</T>
      <circle cx={r3(x(value))} cy={34} r={2.6} fill={R} stroke={INK} strokeWidth={0.6} />
      <T x={x(value)} y={22} fill={R} size={6}>{dec(value)}</T>
      <T x={60} y={60} fill={A} size={5.4}>{dec(value)} is {value >= mid ? 'past' : 'before'} the halfway mark: {dec(rounded)}</T>
    </Panel>
  );
};

/** 0,4 x 0,5 on a 10 x 10 grid: 4 columns and 5 rows overlap in 4 x 5 = 20 hundredths. */
export const DecimalProductGrid = ({ a, b, className }: { a: number; b: number; className?: string }) => {
  const cols = Math.round(a * 10);
  const rows = Math.round(b * 10);
  const cell = 5.4;
  const x0 = 33;
  const y0 = 18;
  const squares = cols * rows;
  return (
    <Panel h={92} className={className} aria={`A 10 by 10 grid of hundredths. ${cols} columns are shaded for ${dec(a)} across and ${rows} rows are shaded for ${dec(b)} down. They overlap in ${cols} times ${rows}, ${squares} squares, which is ${squares} hundredths, ${dec(squares / 100, 2)}.`}>
      {Array.from({ length: 100 }).map((_, k) => {
        const c = k % 10;
        const r = Math.floor(k / 10);
        const inC = c < cols;
        const inR = r < rows;
        const fill = inC && inR ? A : inC ? 'rgba(129,140,248,0.45)' : inR ? 'rgba(52,211,153,0.45)' : '#1e293b';
        return <rect key={k} x={r3(x0 + c * cell)} y={r3(y0 + r * cell)} width={cell - 0.7} height={cell - 0.7} fill={fill} />;
      })}
      <T x={x0 + (cols * cell) / 2} y={13} fill={I} size={5.4}>{dec(a)} across</T>
      <T x={x0 + 10 * cell + 3} y={y0 + (rows * cell) / 2 + 2} fill={E} size={5.4} anchor="start">{dec(b)} down</T>
      <T x={60} y={86} fill={A} size={5.8}>{cols} × {rows} = {squares} squares = {dec(squares / 100, 2)}</T>
    </Panel>
  );
};

/** A column sum or difference with the commas lined up: a + b or a - b, every number written to the same places. */
export const ColumnSum = ({ a, b, op, result, places, unit = '', className }: { a: number; b: number; op: '+' | '−'; result: number; places: number; unit?: string; className?: string }) => {
  const rows = [dec(a, places), dec(b, places)];
  const out = dec(result, places);
  return (
    <Panel h={66} className={className} aria={`${rows[0]} ${op} ${rows[1]} written in a column with the commas lined up gives ${out}.`}>
      <g fontFamily="ui-monospace, Menlo, Consolas, monospace" fontWeight={800} fill={LINE} fontSize={9.5} textAnchor="end">
        <text x={86} y={17}>{unit}{rows[0]}</text>
        <text x={86} y={31}>{unit}{rows[1]}</text>
        <text x={26} y={31} fill={A}>{op}</text>
        <line x1={24} y1={36} x2={88} y2={36} stroke={LINE} strokeWidth={0.9} />
        <text x={86} y={50} fill={E}>{unit}{out}</text>
      </g>
      <T x={60} y={62} fill={A} size={5.2}>commas lined up, one under the other</T>
    </Panel>
  );
};
