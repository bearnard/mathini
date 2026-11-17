import { r3 } from '../round';
import { PICTURE_COLORS } from '../maths/Grade7Pictures';

/** Grade 12 chemistry lesson pictures: dark panel, 120-unit viewBox, at most six labels each, computed from the numbers passed in. */
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
const T = ({ x, y, children, color = LINE, size = 5.4, anchor = 'middle' }: { x: number; y: number; children: React.ReactNode; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={r3(x)} y={r3(y)} textAnchor={anchor} fontSize={size} fontWeight={800} fill={color}>{children}</text>
);

/** Text that never leaves its box: when the estimated width is more than `max`, SVG squeezes it to exactly `max` (spacing and glyphs). */
const Fit = ({ x, y, max, children, color = LINE, size = 5.2 }: { x: number; y: number; max: number; children: string; color?: string; size?: number }) => {
  const est = children.length * size * 0.6;
  return (
    <text x={r3(x)} y={r3(y)} textAnchor="middle" fontSize={size} fontWeight={800} fill={color} {...(est > max ? { textLength: r3(max), lengthAdjust: 'spacingAndGlyphs' as const } : {})}>
      {children}
    </text>
  );
};

/** Boxes joined by arrows: a process, step by step (label above, value or note below). */
export const ProcessFlow = ({ steps, aria }: { steps: { label: string; note?: string; color?: string }[]; aria: string }) => {
  const n = steps.length;
  const per = 112 / n;
  return (
    <Panel h={46} aria={aria}>
      {steps.map((s, i) => {
        const cx = 4 + per * i + per / 2;
        const c = s.color ?? I;
        return (
          <g key={i}>
            <rect x={r3(cx - per / 2 + 2)} y={8} width={r3(per - 4)} height={30} rx={3} fill="rgba(99,102,241,0.16)" stroke={c} strokeWidth={0.9} />
            <Fit x={cx} y={n > 4 ? 20 : 22} max={per - 8} size={n > 4 ? 4.4 : 5.2}>{s.label}</Fit>
            {s.note ? <Fit x={cx} y={32} max={per - 8} color={MUTED} size={4}>{s.note}</Fit> : null}
            {i < n - 1 ? <T x={cx + per / 2} y={25} color={E} size={7}>›</T> : null}
          </g>
        );
      })}
    </Panel>
  );
};

/** Monomer units joined into a chain: `units` circles, the repeat unit written once, and n marked. */
export const PolymerChain = ({ monomer, repeat, units = 4, aria }: { monomer: string; repeat: string; units?: number; aria: string }) => {
  const step = 80 / units;
  return (
    <Panel h={58} aria={aria}>
      <T x={14} y={11} color={A} size={5}>{monomer}</T>
      <T x={14} y={19} color={MUTED} size={4}>monomer</T>
      <T x={62} y={11} color={E} size={5}>{`polymer: ${repeat}`}</T>
      {Array.from({ length: units }, (_, i) => {
        const cx = 28 + step * i + step / 2;
        return (
          <g key={i}>
            {i > 0 ? <line x1={r3(cx - step)} y1={40} x2={r3(cx)} y2={40} stroke={E} strokeWidth={1.6} /> : null}
            <circle cx={r3(cx)} cy={40} r={5.6} fill="rgba(251,191,36,0.3)" stroke={A} strokeWidth={1} />
            <T x={cx} y={41.6} size={4.4}>{i === units - 1 ? 'n' : String(i + 1)}</T>
          </g>
        );
      })}
      <T x={14} y={43} color={A} size={5}>×n</T>
    </Panel>
  );
};

/** A bag of fertiliser: the whole bag split into filler and N, P and K, drawn to scale from the label. */
export const NpkBag = ({ label, bagKg, filler, n, p, k }: { label: string; bagKg: number; filler: number; n: number; p: number; k: number }) => {
  const parts = [
    { name: 'filler', v: filler, c: MUTED },
    { name: 'N', v: n, c: I },
    { name: 'P', v: p, c: E },
    { name: 'K', v: k, c: A },
  ];
  let x = 10;
  const W = 100;
  const f = (v: number) => String(Math.round(v * 100) / 100).replace('.', ',');
  return (
    <Panel h={56} aria={`A ${bagKg} kg bag of fertiliser labelled ${label}: ${f(filler)} kg filler, ${f(n)} kg nitrogen, ${f(p)} kg phosphorus and ${f(k)} kg potassium.`}>
      <T x={60} y={10} color={LINE} size={5.6}>{`${label}   ${bagKg} kg`}</T>
      {parts.map((pt) => {
        const w = (pt.v / bagKg) * W;
        const x0 = x;
        x += w;
        return (
          <g key={pt.name}>
            <rect x={r3(x0)} y={16} width={r3(w)} height={18} fill={pt.c} fillOpacity={0.35} stroke={pt.c} strokeWidth={0.9} />
            {w > 9 ? <T x={x0 + w / 2} y={28} color={LINE} size={5}>{pt.name}</T> : null}
          </g>
        );
      })}
      <T x={10} y={46} color={MUTED} size={4.4} anchor="start">{`filler ${f(filler)}`}</T>
      <T x={72} y={46} color={I} size={4.4}>{`N ${f(n)}`}</T>
      <T x={92} y={46} color={E} size={4.4}>{`P ${f(p)}`}</T>
      <T x={112} y={46} color={A} size={4.4} anchor="end">{`K ${f(k)}`}</T>
    </Panel>
  );
};

export const RECYCLING_CODES: { code: number; abbr: string; name: string }[] = [
  { code: 1, abbr: 'PET', name: 'poly(ethylene terephthalate)' },
  { code: 2, abbr: 'HDPE', name: 'high-density poly(ethene)' },
  { code: 3, abbr: 'PVC', name: 'poly(chloroethene)' },
  { code: 4, abbr: 'LDPE', name: 'low-density poly(ethene)' },
  { code: 5, abbr: 'PP', name: 'poly(propene)' },
  { code: 6, abbr: 'PS', name: 'poly(phenylethene)' },
  { code: 7, abbr: 'other', name: 'mixed or other plastics' },
];
