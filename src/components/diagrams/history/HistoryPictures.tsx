import { r3 } from '../round';
import { T, cls, st, SOFT } from '../science/SciencePictures';
import { positions, type DatedEvent } from './historyHelpers';

/**
 * A timeline strip and a schematic trench section for the History lessons. Events are placed by
 * their dates (historyHelpers.ts), so the spacing is true to time. At most six labelled events.
 */

export const TimelineStrip = ({ events, id, title }: { events: DatedEvent[]; id: string; title: string }) => {
  const xs = positions(events, 12, 148);
  const Y = 50;
  const labelW = (s: string) => s.length * 2.45;
  const clamp = (x: number, w: number) => Math.min(Math.max(x, w / 2 + 3), 157 - w / 2);
  return (
    <svg viewBox="0 0 160 100" role="img" aria-labelledby={`${id}-t ${id}-d`} className={cls} style={st}>
      <title id={`${id}-t`}>{title}</title>
      <desc id={`${id}-d`}>{`A timeline, with the distance between events matching the time between them: ${events.map((e) => `${Math.floor(e.year)}, ${e.label}`).join('; ')}.`}</desc>
      <line x1={8} y1={Y} x2={152} y2={Y} stroke="#64748b" strokeWidth={1.2} />
      {events.map((e, i) => {
        const up = i % 2 === 0;
        const w = labelW(e.label);
        const lx = clamp(xs[i], w);
        const ly = up ? Y - 14 - (i % 4 === 0 ? 0 : 12) : Y + 16 + (i % 4 === 1 ? 0 : 12);
        return (
          <g key={e.label}>
            <line x1={r3(xs[i])} y1={Y} x2={r3(xs[i])} y2={up ? ly + 4 : ly - 9} stroke="#475569" strokeWidth={0.5} />
            <circle cx={r3(xs[i])} cy={Y} r={2.6} fill={up ? '#34d399' : '#fbbf24'} stroke="#0f172a" strokeWidth={0.6} />
            <T x={r3(lx)} y={ly} size={4.6} fill="#f8fafc">{e.label}</T>
            <T x={r3(lx)} y={ly + 6} size={4.4} fill={up ? '#6ee7b7' : '#fcd34d'}>{String(Math.floor(e.year))}</T>
          </g>
        );
      })}
      <T x={80} y={96} size={4.2} fill={SOFT}>spaced by the years between events</T>
    </svg>
  );
};

/* ---------- a trench section (schematic) ---------- */

export const TrenchSection = () => (
  <svg viewBox="0 0 160 84" role="img" aria-labelledby="tr-t tr-d" className={cls} style={st}>
    <title id="tr-t">Trenches on the Western Front</title>
    <desc id="tr-d">Two lines of long ditches face each other. Soldiers fought from the trenches, which were defensive systems. Between them lies no man's land, with barbed wire and shell holes. The picture is a simplified sketch, not to scale.</desc>
    <rect x={0} y={34} width={160} height={50} fill="#78350f" />
    <polygon points="12,34 20,56 40,56 48,34" fill="#0f172a" />
    <polygon points="112,34 120,56 140,56 148,34" fill="#0f172a" />
    <rect x={14} y={30} width={6} height={4} fill="#a16207" />
    <rect x={140} y={30} width={6} height={4} fill="#a16207" />
    <circle cx={30} cy={50} r={3} fill="#fbbf24" />
    <circle cx={130} cy={50} r={3} fill="#f87171" />
    <path d="M62 34 q8 12 16 0" fill="#0f172a" />
    {[56, 82, 92].map((x) => <line key={x} x1={x} y1={34} x2={x} y2={26} stroke="#94a3b8" strokeWidth={0.8} />)}
    <polyline points="54,28 62,24 70,28 78,24 86,28 94,24" fill="none" stroke="#94a3b8" strokeWidth={0.8} />
    <T x={30} y={28} size={5} fill="#fcd34d">trench</T>
    <T x={130} y={28} size={5} fill="#fca5a5">enemy trench</T>
    <T x={78} y={70} size={5} fill="#fde68a">no man&apos;s land</T>
    <T x={78} y={19} size={4.6} fill="#cbd5e1">barbed wire and shell holes</T>
  </svg>
);
