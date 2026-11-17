import { r3 } from '../round';
import { Panel, PICTURE_COLORS } from '../maths/Grade7Pictures';
import type { Profile } from './dnaProfile';

/**
 * A gel with a DNA profile in each lane: wells at the top, and the bands drawn at their position (1 = the biggest fragments, which travel the least).
 * The positions come from dnaProfile.ts, so a picture always matches its worked example.
 */
const MUTED = '#94a3b8';
const LINE = '#e2e8f0';
const { amber: A, rose: R } = PICTURE_COLORS;

export const DnaGel = ({ lanes, rows = 10, highlight }: { lanes: { label: string; bands: Profile }[]; rows?: number; highlight?: number[] }) => {
  const n = lanes.length;
  const laneW = Math.min(18, 100 / n);
  const x0 = 60 - (n * laneW) / 2;
  const top = 14;
  const step = 4.4;
  const h = top + rows * step + 12;
  const y = (pos: number) => r3(top + (pos - 0.5) * step);
  // Lane labels must never run into each other: shrink the text until the longest label fits its lane.
  const longest = Math.max(...lanes.map((l) => l.label.length));
  const labelSize = Math.min(3.8, r3((laneW * 0.94) / (longest * 0.6)));
  return (
    <Panel
      h={r3(h)}
      aria={`A gel with ${n} lanes. ${lanes.map((l) => `${l.label} has bands at positions ${l.bands.join(', ')}`).join('. ')}. Position 1 is nearest the wells at the top.${highlight ? ` Bands at positions ${highlight.join(' and ')} are marked in red.` : ''}`}
    >
      {lanes.map((l, i) => {
        const cx = x0 + i * laneW + laneW / 2;
        return (
          <g key={l.label}>
            <rect x={r3(cx - laneW * 0.32)} y={top - 4} width={r3(laneW * 0.64)} height={2.2} fill={MUTED} />
            <rect x={r3(cx - laneW * 0.4)} y={top - 1.5} width={r3(laneW * 0.8)} height={r3(rows * step + 1)} fill="rgba(148,163,184,0.10)" />
            {l.bands.map((b) => (
              <rect key={b} x={r3(cx - laneW * 0.32)} y={r3(y(b) - 0.9)} width={r3(laneW * 0.64)} height={1.8} rx={0.4} fill={highlight?.includes(b) ? R : A} />
            ))}
            <text x={r3(cx)} y={r3(top + rows * step + 7)} textAnchor="middle" fontSize={labelSize} fontWeight={800} fill={LINE}>{l.label}</text>
          </g>
        );
      })}
    </Panel>
  );
};
