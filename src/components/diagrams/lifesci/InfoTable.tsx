import { r3 } from '../round';
import { Panel, PICTURE_COLORS } from '../maths/Grade7Pictures';

/**
 * A small labelled table drawn as a picture: a header row and rows of short cells. A cell may hold up to three lines (separate them with "\n"), and the
 * columns share the width by the fractions given. The text comes from the arguments, so a table always matches the lesson that shows it.
 */
const INK = '#0f172a';
const LINE = '#e2e8f0';
const MUTED = '#94a3b8';
const { indigo: I } = PICTURE_COLORS;

export const InfoTable = ({ cols, rows, aria }: { cols: { title: string; w: number }[]; rows: string[][]; aria: string }) => {
  const total = cols.reduce((a, c) => a + c.w, 0);
  const width = 112;
  const x0 = 4;
  const colX: number[] = [];
  let acc = x0;
  for (const c of cols) {
    colX.push(acc);
    acc += (c.w / total) * width;
  }
  const lineH = 4.9;
  const heights = rows.map((r) => Math.max(...r.map((c) => c.split('\n').length)) * lineH + 3.4);
  const headH = 8.6;
  const h = 4 + headH + heights.reduce((a, b) => a + b, 0) + 4;
  let y = 4 + headH;
  return (
    <Panel h={r3(h)} aria={aria}>
      <rect x={x0} y={4} width={width} height={headH} rx={1.5} fill={I} />
      {cols.map((c, i) => <text key={c.title} x={r3(colX[i] + 2)} y={r3(4 + headH / 2 + 1.6)} fontSize={4.2} fontWeight={800} fill={INK}>{c.title}</text>)}
      {rows.map((r, ri) => {
        const top = y;
        y += heights[ri];
        return (
          <g key={ri}>
            <line x1={x0} y1={r3(top + heights[ri])} x2={x0 + width} y2={r3(top + heights[ri])} stroke={MUTED} strokeWidth={0.3} />
            {r.map((cell, ci) =>
              cell.split('\n').map((ln, li) => (
                <text key={`${ci}-${li}`} x={r3(colX[ci] + 2)} y={r3(top + 5 + li * lineH)} fontSize={4} fontWeight={ci === 0 ? 800 : 700} fill={ci === 0 ? LINE : '#cbd5e1'}>{ln}</text>
              )),
            )}
          </g>
        );
      })}
    </Panel>
  );
};
