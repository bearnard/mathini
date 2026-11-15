import { r3 } from '../round';
import { barHeights, courtZones } from './lo5Helpers';

/**
 * Pictures for the Grade 8 Life Orientation Term 2 lessons, in the style of PswPictures:
 * a dark panel on a 120-unit-wide viewBox with a handful of labels. Layout comes from lo5Helpers.
 */

const INK = '#0f172a';
const WHITE = '#f8fafc';
const MUTED = '#94a3b8';
const I = '#818cf8';
const E = '#34d399';
const A = '#fbbf24';
const COLS = [I, E, A, '#fb7185'];

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

/** Weekly minutes as bars, so a gradual build-up is easy to see. */
export const RampBars = ({ weeks, minutes, aria }: { weeks: string[]; minutes: number[]; aria: string }) => {
  const hs = barHeights(minutes);
  const base = 62;
  const step = 108 / weeks.length;
  return (
    <Panel h={74} aria={aria}>
      <text x={60} y={9} textAnchor="middle" fontSize={5.4} fontWeight={800} fill={A}>Minutes of activity each week</text>
      <line x1={6} y1={base} x2={114} y2={base} stroke={MUTED} strokeWidth={0.6} />
      {hs.map((h, i) => {
        const cx = r3(6 + step * (i + 0.5));
        return (
          <g key={i}>
            <rect x={r3(cx - 7)} y={r3(base - h)} width={14} height={h} rx={1.5} fill={COLS[i % COLS.length]} />
            <text x={cx} y={r3(base - h - 2)} textAnchor="middle" fontSize={4.6} fontWeight={700} fill={WHITE}>{minutes[i]}</text>
            <text x={cx} y={base + 7} textAnchor="middle" fontSize={4.6} fontWeight={700} fill={MUTED}>{weeks[i]}</text>
          </g>
        );
      })}
    </Panel>
  );
};

/** A net court seen from above: our side is split into equal zones, one player in each. */
export const Court = ({ players, aria }: { players: number; aria: string }) => {
  const zones = courtZones(players);
  return (
    <Panel h={84} aria={aria}>
      <rect x={10} y={8} width={100} height={68} rx={2} fill="#14532d" stroke={WHITE} strokeWidth={0.7} />
      <line x1={6} y1={42} x2={114} y2={42} stroke={WHITE} strokeWidth={1.4} strokeDasharray="2 1.2" />
      <text x={14} y={39.2} textAnchor="start" fontSize={4.4} fontWeight={800} fill={WHITE}>Net</text>
      {zones.map((z, i) => (
        <g key={i}>
          <rect x={z.x + 0.6} y={43.5} width={z.w - 1.2} height={31} fill={COLS[i % COLS.length]} opacity={0.28} />
          <circle cx={z.cx} cy={60} r={4.4} fill={COLS[i % COLS.length]} stroke={INK} strokeWidth={0.6} />
          <text x={z.cx} y={61.6} textAnchor="middle" fontSize={4.4} fontWeight={800} fill={INK}>{i + 1}</text>
        </g>
      ))}
      <text x={60} y={20} textAnchor="middle" fontSize={4.6} fontWeight={700} fill={WHITE}>Other side</text>
      <text x={60} y={50} textAnchor="middle" fontSize={4.6} fontWeight={800} fill={WHITE}>Our side: one zone each</text>
    </Panel>
  );
};
