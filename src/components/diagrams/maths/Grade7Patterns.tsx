import { r3 } from '../round';
import { A, E, I, INK, LINE, Panel } from './Grade7Pictures';
import { plusStage } from './grade7Helpers2';

/**
 * Grade 7 pattern pictures: a row of terms with the step between them, a growing tile pattern and
 * the square numbers. Every number comes from the terms passed in or from grade7Helpers2.ts.
 */

const T = ({ x, y, children, fill = LINE, size = 5.6, anchor = 'middle' }: { x: number; y: number; children: React.ReactNode; fill?: string; size?: number; anchor?: 'start' | 'middle' | 'end' }) => (
  <text x={r3(x)} y={r3(y)} textAnchor={anchor} fontSize={size} fontWeight={800} fill={fill}>{children}</text>
);

/** Terms in boxes with the step between neighbours written above: "+7", "−3" or "× 2". `hide` turns one term into "?". */
export const TermRow = ({ terms, mode, hide, className }: { terms: number[]; mode: 'difference' | 'ratio'; hide?: number; className?: string }) => {
  const n = terms.length;
  const BW = Math.min(18, 84 / n);
  const GAP = (112 - n * BW) / (n - 1);
  const x = (i: number) => 4 + i * (BW + GAP);
  const step = (i: number) => {
    if (mode === 'ratio') return `× ${terms[i + 1] / terms[i]}`;
    const d = terms[i + 1] - terms[i];
    return d < 0 ? `−${-d}` : `+${d}`;
  };
  return (
    <Panel h={44} className={className} aria={`A pattern: ${terms.map((t, i) => (i === hide ? 'a missing term' : t)).join(', ')}. Each step is ${step(0)}.${hide !== undefined ? ` The missing term is ${terms[hide]}.` : ''}`}>
      {terms.map((t, i) => (
        <g key={i}>
          <rect x={r3(x(i))} y={20} width={r3(BW)} height={15} rx={3} fill={i === hide ? 'none' : I} stroke={i === hide ? A : 'none'} strokeWidth={1.1} strokeDasharray={i === hide ? '2.4 1.6' : undefined} />
          <T x={x(i) + BW / 2} y={30.5} fill={i === hide ? A : INK} size={t >= 100 ? 6.4 : 7.6}>{i === hide ? '?' : t}</T>
          {i < n - 1 && (
            <g>
              <path d={`M${r3(x(i) + BW / 2 + 2)},18 Q${r3(x(i) + BW + GAP / 2)},${8} ${r3(x(i + 1) + BW / 2 - 2)},18`} fill="none" stroke={E} strokeWidth={0.8} />
              <T x={x(i) + BW + GAP / 2} y={9.5} fill={E} size={5.4}>{step(i)}</T>
            </g>
          )}
        </g>
      ))}
    </Panel>
  );
};

/** Stages of a plus-shaped tile pattern: a centre tile with four arms of n tiles, so 4n + 1 tiles. */
export const PlusStages = ({ stages, className }: { stages: number[]; className?: string }) => {
  const biggest = Math.max(...stages);
  const cell = Math.min(5.4, 36 / (2 * biggest + 1));
  const colW = 120 / stages.length;
  const cy = 6 + (biggest + 0.5) * cell;
  return (
    <Panel h={r3(cy + (biggest + 0.5) * cell + 14)} className={className} aria={`A tile pattern. ${stages.map((s) => `Stage ${s} has a centre tile and four arms of ${s}, ${plusStage(s).length} tiles`).join('. ')}. Each stage adds 4 tiles.`}>
      {stages.map((s, i) => {
        const cx = colW * i + colW / 2;
        return (
          <g key={s}>
            {plusStage(s).map(([c, r], k) => (
              <rect key={k} x={r3(cx + (c - 0.5) * cell)} y={r3(cy + (r - 0.5) * cell)} width={r3(cell - 0.5)} height={r3(cell - 0.5)} rx={0.6} fill={c === 0 && r === 0 ? A : Math.max(Math.abs(c), Math.abs(r)) === s && s > 1 ? E : I} />
            ))}
            <T x={cx} y={cy + (biggest + 0.5) * cell + 9} size={5.4}>{`Stage ${s}: ${plusStage(s).length}`}</T>
          </g>
        );
      })}
    </Panel>
  );
};

/** The square numbers as squares of dots: 1, 4, 9, 16 ... */
export const SquareStages = ({ upTo, className }: { upTo: number; className?: string }) => {
  const sizes = Array.from({ length: upTo }, (_, i) => i + 1);
  const cell = Math.min(6.4, 84 / ((upTo * (upTo + 1)) / 2 + upTo));
  const gap = cell * 1.6;
  const total = sizes.reduce((s, n) => s + n * cell, 0) + gap * (upTo - 1);
  let x = 60 - total / 2;
  const bottom = 8 + upTo * cell;
  return (
    <Panel h={r3(bottom + 14)} className={className} aria={`Square numbers drawn as squares of dots: ${sizes.map((n) => `${n} by ${n} is ${n * n}`).join(', ')}.`}>
      {sizes.map((n) => {
        const x0 = x;
        x += n * cell + gap;
        return (
          <g key={n}>
            {Array.from({ length: n * n }).map((_, k) => (
              <circle key={k} cx={r3(x0 + (k % n) * cell + cell / 2)} cy={r3(bottom - Math.floor(k / n) * cell - cell / 2)} r={r3(cell * 0.38)} fill={n % 2 ? I : E} />
            ))}
            <T x={x0 + (n * cell) / 2} y={bottom + 9} fill={A} size={6}>{n * n}</T>
          </g>
        );
      })}
    </Panel>
  );
};
