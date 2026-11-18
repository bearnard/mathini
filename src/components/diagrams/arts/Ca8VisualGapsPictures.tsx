import { r3 } from '../round';
import { PAIRS, PENCILS, SWATCH, TONE_GREY } from './ca8-visual-gaps';

/**
 * Pictures for the Grade 8 Creative Arts visual arts lessons: complementary colour pairs and the grades of pencil from light to dark.
 * A dark panel, a 120-unit-wide viewBox, every colour and order from ca8-visual-gaps.ts. Each has an `aria` description.
 */

const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

const T = ({ x, y, children, size = 5, fill = LINE, anchor = 'middle', weight = 800 }: { x: number; y: number; children: React.ReactNode; size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number }) => (
  <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>
    {children}
  </text>
);

export const ComplementPairs = ({ aria }: { aria: string }) => (
  <Panel h={46} aria={aria}>
    {PAIRS.map(([a, b], i) => {
      const x = 8 + i * 37;
      return (
        <g key={a}>
          <rect x={x} y={8} width={15} height={20} rx={2.5} fill={SWATCH[a]} />
          <rect x={r3(x + 15)} y={8} width={15} height={20} rx={2.5} fill={SWATCH[b]} />
          <T x={r3(x + 7.5)} y={36} size={4.4}>{a}</T>
          <T x={r3(x + 22.5)} y={36} size={4.4}>{b}</T>
        </g>
      );
    })}
    <T x={60} y={44} size={4.2} fill={MUTED}>opposite each other on the colour wheel</T>
  </Panel>
);

export const ToneScale = ({ aria }: { aria: string }) => (
  <Panel h={44} aria={aria}>
    {PENCILS.map((p, i) => (
      <g key={p}>
        <rect x={8 + i * 26.5} y={8} width={24} height={16} rx={2.5} fill={TONE_GREY[p]} />
        <T x={r3(20 + i * 26.5)} y={33} size={5.2}>{p}</T>
      </g>
    ))}
    <T x={8} y={42} anchor="start" size={4.2} fill={MUTED}>lighter</T>
    <T x={112} y={42} anchor="end" size={4.2} fill={MUTED}>darker</T>
  </Panel>
);
