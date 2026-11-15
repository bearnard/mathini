import { r3 } from '../round';
import { contrastRatio, layerRects, risingBars, tileRow } from './caHelpers';
import { planSegments, wrapLabel } from './pswHelpers';

/** Grade 7 Creative Arts pictures: dark panel, 120-unit viewBox, at most six labels each. */

const INK = '#0f172a';
const WHITE = '#f8fafc';
const MUTED = '#94a3b8';
const I = '#818cf8';
const E = '#34d399';
const A = '#fbbf24';
const R = '#fb7185';
const COLS = [I, E, A, R];

const Panel = ({ h, aria, children }: { h: number; aria: string; children: React.ReactNode }) => (
  <svg viewBox={`0 0 120 ${h}`} role="img" aria-label={aria} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
    {children}
  </svg>
);

/** Two sample poster headings, one with strong contrast and one weak, with the contrast ratio computed. */
export const ContrastPair = ({ strong, weak, aria }: { strong: { bg: string; fg: string }; weak: { bg: string; fg: string }; aria: string }) => {
  const items = [
    { ...strong, label: 'Strong contrast', ratio: contrastRatio(strong.bg, strong.fg) },
    { ...weak, label: 'Weak contrast', ratio: contrastRatio(weak.bg, weak.fg) },
  ];
  return (
    <Panel h={50} aria={aria}>
      {items.map((it, i) => {
        const x = 4 + i * 58;
        return (
          <g key={i}>
            <rect x={x} y={4} width={54} height={26} rx={3} fill={it.bg} />
            <text x={x + 27} y={21} textAnchor="middle" fontSize={8} fontWeight={800} fill={it.fg}>Read me</text>
            <text x={x + 27} y={38} textAnchor="middle" fontSize={4.6} fontWeight={800} fill={WHITE}>{it.label}</text>
            <text x={x + 27} y={45} textAnchor="middle" fontSize={4.2} fontWeight={600} fill={MUTED}>{`ratio ${it.ratio} to 1`}</text>
          </g>
        );
      })}
    </Panel>
  );
};

/** One piece laid out in sections side by side, widths in proportion to the length of each section. */
export const SectionBar = ({ parts, unit, aria }: { parts: { label: string; units: number }[]; unit: string; aria: string }) => {
  const { total, segs } = planSegments(parts.map((p) => ({ label: p.label, minutes: p.units })));
  return (
    <Panel h={46} aria={aria}>
      <text x={60} y={9} textAnchor="middle" fontSize={5.4} fontWeight={800} fill={A}>{`${total} ${unit} in all`}</text>
      {segs.map((s, i) => (
        <g key={i}>
          <rect x={s.x} y={16} width={s.w} height={14} fill={COLS[i % COLS.length]} stroke={INK} strokeWidth={0.6} />
          <text x={r3(s.x + s.w / 2)} y={25} textAnchor="middle" fontSize={4.8} fontWeight={800} fill={INK}>{s.minutes}</text>
          <text x={r3(s.x + s.w / 2)} y={37} textAnchor="middle" fontSize={4.2} fontWeight={700} fill={WHITE}>{s.label}</text>
        </g>
      ))}
    </Panel>
  );
};

/** A row of equal tiles; a "repeat" tile is the same movement idea, a "change" tile is the idea developed. */
export const MotifRow = ({ tiles, aria }: { tiles: { label: string; kind: 'repeat' | 'change' }[]; aria: string }) => {
  const pos = tileRow(tiles.length);
  return (
    <Panel h={40} aria={aria}>
      {tiles.map((t, i) => {
        const lines = wrapLabel(t.label, 14);
        return (
          <g key={i}>
            <rect x={pos[i].x} y={6} width={pos[i].w} height={28} rx={3} fill={t.kind === 'repeat' ? I : A} />
            <text x={r3(pos[i].x + pos[i].w / 2)} y={lines.length > 1 ? 18 : 21} textAnchor="middle" fontSize={4.6} fontWeight={800} fill={INK}>
              {lines.map((l, j) => (
                <tspan key={j} x={r3(pos[i].x + pos[i].w / 2)} dy={j === 0 ? 0 : 6}>{l}</tspan>
              ))}
            </text>
          </g>
        );
      })}
    </Panel>
  );
};

/** Layers of different materials stacked on a base, bottom first. */
export const MixedLayers = ({ layers, aria }: { layers: string[]; aria: string }) => {
  const rects = layerRects(layers.length);
  return (
    <Panel h={76} aria={aria}>
      {rects.map((r, i) => (
        <g key={i}>
          <rect x={r.x} y={r.y} width={r.w} height={r.h} rx={2} fill={COLS[i % COLS.length]} stroke={INK} strokeWidth={0.6} />
          <text x={r3(r.x + r.w / 2)} y={r3(r.y + r.h / 2 + 1.7)} textAnchor="middle" fontSize={4.8} fontWeight={800} fill={INK}>{layers[i]}</text>
        </g>
      ))}
    </Panel>
  );
};

/** Bars that rise from the first piece to the last, to show growth across a portfolio. */
export const GrowthBars = ({ labels, values, aria }: { labels: string[]; values: number[]; aria: string }) => {
  const bars = risingBars(values, 30);
  const pos = tileRow(values.length, 108, 6);
  return (
    <Panel h={60} aria={aria}>
      <line x1={6} y1={46} x2={114} y2={46} stroke={MUTED} strokeWidth={0.6} />
      {bars.map((b, i) => (
        <g key={i}>
          <rect x={pos[i].x} y={r3(46 - b.h)} width={pos[i].w} height={b.h} rx={1.5} fill={COLS[i % COLS.length]} />
          <text x={r3(pos[i].x + pos[i].w / 2)} y={53} textAnchor="middle" fontSize={4.2} fontWeight={700} fill={WHITE}>{labels[i]}</text>
        </g>
      ))}
      <text x={60} y={9} textAnchor="middle" fontSize={5} fontWeight={800} fill={A}>Skill grows as the work improves</text>
    </Panel>
  );
};
