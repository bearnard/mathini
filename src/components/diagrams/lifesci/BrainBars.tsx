import { r3 } from '../round';
import { Panel, PICTURE_COLORS } from '../maths/Grade7Pictures';
import { BRAIN_CM3 } from './cradle';

/** Horizontal bars for the approximate brain size of three hominins (cradle.ts). The bar lengths are in proportion to the numbers written beside them. */
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const { indigo: I, green: E, amber: A } = PICTURE_COLORS;

export const BrainBars = () => {
  const max = Math.max(...BRAIN_CM3.map((b) => b.cm3));
  const colors = [I, E, A];
  return (
    <Panel
      h={52}
      aria={`Approximate brain size in cubic centimetres: ${BRAIN_CM3.map((b) => `${b.name} about ${b.cm3}`).join(', ')}. The bars get longer from Australopithecus to Homo sapiens.`}
    >
      {BRAIN_CM3.map((b, i) => {
        const y = 7 + i * 14;
        return (
          <g key={b.name}>
            <text x={4} y={y + 2.5} fontSize={3.8} fontWeight={800} fill={LINE}>{b.name}</text>
            <rect x={4} y={y + 4} width={r3((b.cm3 / max) * 80)} height={5} rx={1} fill={colors[i]} />
            <text x={r3(4 + (b.cm3 / max) * 80 + 2)} y={y + 8} fontSize={3.8} fontWeight={800} fill={LINE}>{`about ${b.cm3} cm³`}</text>
          </g>
        );
      })}
      <text x={4} y={49} fontSize={3.4} fontWeight={700} fill={MUTED}>Bars are drawn to the same scale</text>
    </Panel>
  );
};
