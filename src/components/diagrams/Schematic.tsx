import { r3 } from './round';
import { arrowEnds, FONT, TONES, type SchematicSpec } from './schematic';

const INK = '#0f172a';
const LIGHT = '#f1f5f9';

/** Draws a SchematicSpec (schematic.ts) as an accessible SVG: dark frame, tinted boxes, labelled arrows. */
export const Schematic = ({ spec }: { spec: SchematicSpec }) => {
  const mid = `${spec.id}-head`;
  return (
    <svg
      viewBox={`0 0 ${spec.width} ${spec.height}`}
      role="img"
      aria-label={`${spec.title}. ${spec.desc}`}
      className="mx-auto block w-full max-w-lg rounded-2xl"
      style={{ background: INK, fontFamily: 'inherit' }}
    >
      <defs>
        <marker id={mid} viewBox="0 0 6 6" refX={5.2} refY={3} markerWidth={5} markerHeight={5} orient="auto-start-reverse">
          <path d="M0,0 L6,3 L0,6 z" fill="#e2e8f0" />
        </marker>
      </defs>
      {spec.arrows.map((a) => {
        const e = arrowEnds(spec, a);
        return (
          <g key={`${a.from}-${a.to}-${a.label ?? ''}`}>
            <line
              x1={e.from.x} y1={e.from.y} x2={e.to.x} y2={e.to.y}
              stroke="#e2e8f0" strokeWidth={0.9} strokeDasharray={a.dashed ? '3 2' : undefined}
              markerEnd={`url(#${mid})`} markerStart={a.both ? `url(#${mid})` : undefined}
            />
            {a.label ? (
              <text x={r3((e.from.x + e.to.x) / 2)} y={r3((e.from.y + e.to.y) / 2 - 2.4)} textAnchor="middle" fontSize={FONT - 0.4} fontWeight={800} fill="#fde68a">
                {a.label}
              </text>
            ) : null}
          </g>
        );
      })}
      {spec.boxes.map((b) => {
        const lines = b.lines ?? [];
        const lh = FONT * 1.25;
        const y0 = b.y + b.h / 2 - ((lines.length - 1) * lh) / 2 + FONT * 0.35;
        return (
          <g key={b.id}>
            <rect x={b.x} y={b.y} width={b.w} height={b.h} rx={2.4} fill={TONES[b.tone]} fillOpacity={0.18} stroke={TONES[b.tone]} strokeWidth={0.9} />
            {lines.map((t, i) => (
              <text key={t} x={r3(b.x + b.w / 2)} y={r3(y0 + i * lh)} textAnchor="middle" fontSize={FONT} fontWeight={800} fill={LIGHT}>
                {t}
              </text>
            ))}
          </g>
        );
      })}
      {spec.labels.map((l) => (
        <text key={l.text} x={l.x} y={l.y} textAnchor={l.anchor ?? 'start'} fontSize={FONT} fontWeight={800} fill={l.tone ? TONES[l.tone] : LIGHT}>
          {l.text}
        </text>
      ))}
    </svg>
  );
};
