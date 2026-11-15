import { r3 } from '../round';
import { lineScaleMarks, mapCmPerKm, sa, scaleDistance } from './mathLitHelpers';

/**
 * A ratio scale and a line scale side by side. A cm ruler lies above the map's own line scale, and the two are drawn to the same
 * length, so the ticks line up: for 1 : 50 000 one real kilometre is 2 cm on the map. Positions come from lineScaleMarks and the
 * distances from scaleDistance (mathLitHelpers.ts).
 *   ScaleDistanceExample: a distance read on the ruler (4 cm) becomes a real distance (2 km). Grade 11.
 *   LineScaleKm: one kilometre on the line scale is 2 cm on the map. Grade 12.
 */

const INK = '#0f172a';
const LEFT = 14;
const PXCM = 26; // pixels per cm on the map

const Scale = ({ id, denominator, kmCount, spanKm, topLabel, bottomLabel, title, desc }: {
  id: string; denominator: number; kmCount: number; spanKm: number; topLabel: string; bottomLabel: string; title: string; desc: string;
}) => {
  const marks = lineScaleMarks(denominator, kmCount);
  const x = (cm: number) => r3(LEFT + cm * PXCM);
  const spanCm = spanKm * mapCmPerKm(denominator);
  return (
    <svg viewBox="0 0 150 100" role="img" aria-labelledby={`${id}-t ${id}-d`} className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
      <title id={`${id}-t`}>{title}</title>
      <desc id={`${id}-d`}>{desc}</desc>
      <text x={75} y={10} textAnchor="middle" fontSize={7} fontWeight={800} fill="#f9a8d4">scale 1 : {sa(denominator)}</text>
      <path d={`M${x(0)} 24 v-3 H${x(spanCm)} v3`} fill="none" stroke="#38bdf8" strokeWidth={0.8} />
      <text x={r3((x(0) + x(spanCm)) / 2)} y={18} textAnchor="middle" fontSize={6.6} fontWeight={800} fill="#7dd3fc">{topLabel}</text>
      <rect x={x(0)} y={28} width={r3(marks.ruler[marks.ruler.length - 1] * PXCM)} height={9} fill="#1e293b" stroke="#64748b" strokeWidth={0.5} />
      {marks.ruler.map((cm) => (
        <g key={`r${cm}`}>
          <line x1={x(cm)} y1={28} x2={x(cm)} y2={cm === 0 ? 37 : 33} stroke="#cbd5e1" strokeWidth={0.6} />
          <text x={x(cm)} y={44} textAnchor="middle" fontSize={5.4} fontWeight={700} fill="#cbd5e1">{cm}</text>
        </g>
      ))}
      <text x={x(marks.ruler[marks.ruler.length - 1]) + 3} y={44} fontSize={5.4} fontWeight={700} fill="#cbd5e1">cm</text>
      {marks.km.map((cm, i) => (
        <line key={`g${i}`} x1={x(cm)} y1={37} x2={x(cm)} y2={60} stroke="#475569" strokeWidth={0.5} strokeDasharray="1.4 1.4" />
      ))}
      <line x1={x(0)} y1={62} x2={x(marks.km[marks.km.length - 1])} y2={62} stroke="#4ade80" strokeWidth={1.6} />
      {marks.km.map((cm, i) => (
        <g key={`k${i}`}>
          <line x1={x(cm)} y1={59} x2={x(cm)} y2={66} stroke="#4ade80" strokeWidth={1} />
          <text x={x(cm)} y={74} textAnchor="middle" fontSize={5.4} fontWeight={700} fill="#bbf7d0">{i}</text>
        </g>
      ))}
      <text x={x(marks.km[marks.km.length - 1]) + 3} y={74} fontSize={5.4} fontWeight={700} fill="#bbf7d0">km</text>
      <path d={`M${x(0)} 80 v3 H${x(spanCm)} v-3`} fill="none" stroke="#4ade80" strokeWidth={0.8} />
      <text x={r3((x(0) + x(spanCm)) / 2)} y={92} textAnchor="middle" fontSize={6.6} fontWeight={800} fill="#86efac">{bottomLabel}</text>
    </svg>
  );
};

export const ScaleDistanceExample = ({ mapCm = 4, denominator = 50_000 }: { mapCm?: number; denominator?: number }) => {
  const d = scaleDistance(mapCm, denominator);
  const perKm = mapCmPerKm(denominator);
  const kmCount = Math.max(1, Math.ceil(mapCm / perKm));
  return (
    <Scale
      id="sde" denominator={denominator} kmCount={kmCount} spanKm={d.km}
      topLabel={`${sa(mapCm)} cm on the map`} bottomLabel={`× ${sa(denominator)} = ${sa(d.cm)} cm = ${sa(d.km)} km`}
      title={`${sa(mapCm)} cm on a 1 to ${sa(denominator)} map is ${sa(d.km)} km on the ground`}
      desc={`A ruler and the map's line scale drawn to the same length. ${sa(mapCm)} cm on the ruler lines up with ${sa(d.km)} km on the line scale, because ${sa(mapCm)} times ${sa(denominator)} is ${sa(d.cm)} cm, which is ${sa(d.m)} m or ${sa(d.km)} km.`}
    />
  );
};

export const LineScaleKm = ({ denominator = 50_000, kmCount = 2 }: { denominator?: number; kmCount?: number }) => {
  const per = mapCmPerKm(denominator);
  return (
    <Scale
      id="lsk" denominator={denominator} kmCount={kmCount} spanKm={1}
      topLabel={`${sa(per)} cm on the map`} bottomLabel="= 1 km on the ground"
      title={`On a 1 to ${sa(denominator)} map, 1 km is ${sa(per)} cm`}
      desc={`A cm ruler above the map's line scale, drawn to the same length. The line scale's 0 and 1 km marks are ${sa(per)} cm apart on the ruler, because one kilometre is 100 000 cm and 100 000 divided by ${sa(denominator)} is ${sa(per)}.`}
    />
  );
};
