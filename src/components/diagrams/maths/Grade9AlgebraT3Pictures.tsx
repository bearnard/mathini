/**
 * Pictures for the Grade 9 Term 3 algebra lessons (factorising and solving by factorisation), in the style of
 * Grade9Pictures: dark panel, 120-unit-wide viewBox, indigo / emerald / amber / rose. The numbers drawn come from the
 * props, which the lessons take from grade9AlgebraT3.
 */
const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const I = '#818cf8';
const E = '#34d399';
const A = '#fbbf24';
const R = '#fb7185';
const FILL = '#1e293b';

const Panel = ({ h, aria, children, className }: { h: number; aria: string; children: React.ReactNode; className?: string }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className={`mx-auto block w-full max-w-md rounded-2xl ${className ?? ''}`} style={{ background: INK }}>
    {children}
  </svg>
);

const T = ({ x, y, children, color = LINE, size = 5.8, anchor = 'middle' }: { x: number; y: number; children: React.ReactNode; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={800} fill={color}>{children}</text>
);

/**
 * A big square of side a with a small square of side b cut from one corner (area a² − b²), and the same area
 * rearranged as a rectangle (a + b) long and (a − b) wide. Drawn to scale from a and b.
 */
export const SquareDifference = ({ a, b }: { a: number; b: number }) => {
  const s = 30 / a;
  const A0 = a * s;
  const B0 = b * s;
  const ox = 8;
  const oy = 10;
  const rx = 52;
  const rw = (a + b) * s * 1.0;
  const rh = (a - b) * s;
  return (
    <Panel
      h={58}
      aria={`Two pictures with the same area. On the left a square of side ${a} with a square of side ${b} cut out of one corner, so the area is ${a} squared minus ${b} squared. On the right the same area as a rectangle ${a + b} long and ${a - b} wide.`}
    >
      <rect x={ox} y={oy} width={A0} height={A0} fill={I} fillOpacity={0.35} stroke={I} strokeWidth={0.9} />
      <rect x={ox + A0 - B0} y={oy} width={B0} height={B0} fill={INK} stroke={R} strokeWidth={0.9} strokeDasharray="2 1.5" />
      <rect x={rx} y={oy} width={rw} height={rh} fill={E} fillOpacity={0.35} stroke={E} strokeWidth={0.9} />
      <T x={ox + A0 / 2} y={oy + A0 + 8} color={I}>{`${a}² − ${b}²`}</T>
      <T x={rx + rw / 2} y={oy + rh + 8} color={E}>{`(${a} + ${b})(${a} − ${b})`}</T>
      <T x={60} y={53} size={5.2} color={MUTED}>{`${a * a - b * b} = ${(a + b) * (a - b)}`}</T>
    </Panel>
  );
};

/** Two factors multiplied to give 0: each factor on its own is set to 0 and gives one solution. */
export const ZeroProduct = ({ equation, factors, results }: { equation: string; factors: [string, string]; results: [string, string] }) => (
  <Panel h={58} aria={`The equation ${equation}. A product is zero when one of its factors is zero, so ${factors[0]} = 0 gives ${results[0]} and ${factors[1]} = 0 gives ${results[1]}.`}>
    <T x={60} y={11} size={7} color={A}>{equation}</T>
    {[0, 1].map((i) => {
      const cx = 32 + i * 56;
      return (
        <g key={i}>
          <rect x={cx - 18} y={18} width={36} height={12} rx={2} fill={FILL} stroke={I} strokeWidth={0.9} />
          <T x={cx} y={26.4} size={6.2}>{`${factors[i]} = 0`}</T>
          <path d={`M${cx},30 v8 m-2,-2.4 l2,2.4 l2,-2.4`} fill="none" stroke={A} strokeWidth={0.9} />
          <rect x={cx - 14} y={41} width={28} height={12} rx={2} fill="rgba(52,211,153,0.2)" stroke={E} strokeWidth={0.9} />
          <T x={cx} y={49.4} size={6.4} color={E}>{results[i]}</T>
        </g>
      );
    })}
  </Panel>
);

/** A table of x and y values for an equation such as y = 2x² − 3. */
export const ValueTable = ({ rule, pairs, names = ['x', 'y'] }: { rule: string; pairs: [number, number][]; names?: [string, string] }) => {
  const n = pairs.length;
  const w = Math.min(18, 96 / (n + 1));
  const x0 = 60 - ((n + 1) * w) / 2;
  const fmt = (v: number) => (v < 0 ? `−${Math.abs(v)}` : String(v));
  return (
    <Panel
      h={48}
      aria={`A table for ${rule}. ${pairs.map(([x, y]) => `${names[0]} = ${fmt(x)} gives ${names[1]} = ${fmt(y)}`).join('; ')}.`}
    >
      <T x={60} y={9} size={6.4} color={A}>{rule}</T>
      {names.map((name, r) => (
        <g key={name}>
          <rect x={x0} y={14 + r * 14} width={w} height={13} fill={r ? E : I} fillOpacity={0.3} stroke={LINE} strokeWidth={0.4} />
          <T x={x0 + w / 2} y={22.6 + r * 14} size={6.2}>{name}</T>
          {pairs.map((p, i) => (
            <g key={i}>
              <rect x={x0 + (i + 1) * w} y={14 + r * 14} width={w} height={13} fill={FILL} stroke={LINE} strokeWidth={0.4} />
              <T x={x0 + (i + 1) * w + w / 2} y={22.6 + r * 14} size={6.2} color={r ? E : LINE}>{fmt(p[r])}</T>
            </g>
          ))}
        </g>
      ))}
    </Panel>
  );
};
