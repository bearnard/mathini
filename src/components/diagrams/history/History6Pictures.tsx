import { r3 } from '../round';
import { Panel, PICTURE_COLORS } from '../maths/Grade7Pictures';
import { spanText, type Span } from './history6';

/**
 * Grade 6 History pictures: a timeline of bars (each bar one period, drawn in proportion to its years) and a labelled plan of a hill town. Every date and
 * label comes from the arguments (history6.ts), so a picture always matches the lesson text. Schematics only: no real artefact or place is drawn.
 */
const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const { indigo: I, green: E, amber: A, rose: R } = PICTURE_COLORS;
const T = ({ x, y, children, color = LINE, size = 4.4, anchor = 'middle' }: { x: number; y: number; children: React.ReactNode; color?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={r3(x)} y={r3(y)} textAnchor={anchor} fontSize={size} fontWeight={800} fill={color}>{children}</text>
);

/** Periods as bars on a time axis, one row each, in proportion to the years. `min` and `max` are the years at the ends of the axis. */
export const TimelineBars = ({ spans, min, max, step = 100 }: { spans: readonly Span[]; min: number; max: number; step?: number }) => {
  const x0 = 10;
  const w = 100;
  const X = (y: number) => r3(x0 + ((y - min) / (max - min)) * w);
  const rowH = 10;
  const top = 8;
  const h = top + spans.length * rowH + 14;
  const colors = [A, I, E, R];
  const ticks: number[] = [];
  for (let y = min; y <= max; y += step) ticks.push(y);
  return (
    <Panel h={r3(h)} aria={`A timeline from AD ${min} to AD ${max}. ${spans.map((s) => `${s.name}: ${spanText(s)}`).join('. ')}.`}>
      {ticks.map((y) => (
        <g key={y}>
          <line x1={X(y)} y1={top - 2} x2={X(y)} y2={top + spans.length * rowH} stroke={MUTED} strokeWidth={0.3} />
          <T x={X(y)} y={top + spans.length * rowH + 6} size={3.8} color={MUTED}>{String(y)}</T>
        </g>
      ))}
      {spans.map((s, i) => {
        const y = top + i * rowH;
        const bar = X(s.to) - X(s.from);
        return (
          <g key={s.name}>
            <rect x={X(s.from)} y={y + 1.5} width={r3(bar)} height={6.5} rx={1.2} fill={colors[i % colors.length]} opacity={0.85} />
            <T x={X(s.from) + bar / 2} y={y + 6.2} size={3.8} color={INK}>{bar > 26 ? s.name : ''}</T>
            {bar <= 26 ? (X(s.to) > 90 ? <T x={X(s.from) - 2} y={y + 6.2} size={3.8} anchor="end">{s.name}</T> : <T x={X(s.to) + 2} y={y + 6.2} size={3.8} anchor="start">{s.name}</T>) : null}
          </g>
        );
      })}
    </Panel>
  );
};

/** A side view of a hill with a town on the plain: the king and the leaders on top, the ordinary people below. Not to scale and not a drawing of a real place. */
export const HillPlan = ({ top, bottom }: { top: string[]; bottom: string[] }) => (
  <Panel h={66} aria={`A plan, not to scale. On top of a flat-topped hill: ${top.join(', ')}. Below the hill on the plain: ${bottom.join(', ')}.`}>
    <polygon points="14,52 40,18 84,18 108,52" fill="rgba(251,191,36,0.25)" stroke={A} strokeWidth={0.8} />
    <rect x={10} y={52} width={104} height={8} fill="rgba(74,222,128,0.25)" stroke={E} strokeWidth={0.5} />
    <T x={62} y={14} size={4.2} color={A}>top of the hill</T>
    {top.map((t, i) => <T key={t} x={62} y={26 + i * 6} size={3.9}>{t}</T>)}
    {bottom.map((t, i) => <T key={t} x={62} y={57.5 + i * 0} size={3.9} color={LINE}>{i === 0 ? t : ''}</T>)}
    <T x={62} y={65} size={3.4} color={MUTED}>schematic, not to scale</T>
  </Panel>
);
