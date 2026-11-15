import { r3 } from '../round';
import { viewsOf, type HeightGrid } from './mathLitHelpers';

/**
 * One solid made of unit cubes, drawn in 3D and as the three views a plan shows: top (the footprint), front (looking from the front,
 * the tallest stack in each column) and side (looking from the right, the tallest stack in each row, front row on the left). All
 * three views are computed from the same height grid by viewsOf (mathLitHelpers.ts). Rows run from the back to the front.
 *
 * The 3D drawing looks from the front-right and above. Screen x = (x + y) / sqrt2, screen up = (-x + y + 2z) / sqrt6, with x to the
 * right, y away from the viewer and z up, and cubes are painted from far to near.
 */

const INK = '#0f172a';
const S2 = Math.SQRT2;
const S6 = Math.sqrt(6);
const CELL = 8.5;
const ISO = 13; // pixels per unit in the 3D drawing

interface Pt { x: number; y: number }
const iso = (x: number, y: number, z: number, ox: number, oy: number): Pt => ({ x: r3(ox + ((x + y) / S2) * ISO), y: r3(oy - ((-x + y + 2 * z) / S6) * ISO) });
const poly = (pts: Pt[]) => pts.map((p) => `${p.x},${p.y}`).join(' ');

export const defaultSolid: HeightGrid = [[3, 2, 1], [1, 0, 0]];

export const ThreeViews = ({ grid = defaultSolid }: { grid?: HeightGrid }) => {
  const v = viewsOf(grid);
  const rows = grid.length;
  const cols = grid[0].length;
  // ---- 3D: x = column, y = rows counted from the FRONT (row 0 of the grid is the back, so y = rows - 1 - rowIndex) ----
  const cubes: { x: number; y: number; z: number }[] = [];
  grid.forEach((row, ri) => row.forEach((h, c) => { for (let z = 0; z < h; z++) cubes.push({ x: c, y: rows - 1 - ri, z }); }));
  cubes.sort((a, b) => a.x - a.y + a.z - (b.x - b.y + b.z));
  // Centre the 3D drawing in its box (x 30 to 120, y 16 to 70) from the real extent of the projected cube corners.
  const corners: Pt[] = cubes.flatMap((c) => [0, 1].flatMap((dx) => [0, 1].flatMap((dy) => [0, 1].map((dz) => iso(c.x + dx, c.y + dy, c.z + dz, 0, 0)))));
  const minX = Math.min(...corners.map((p) => p.x));
  const maxX = Math.max(...corners.map((p) => p.x));
  const minY = Math.min(...corners.map((p) => p.y));
  const ox = r3(75 - (minX + maxX) / 2);
  const oy = r3(18 - minY);
  // ---- the three flat views ----
  const maxH = Math.max(...v.front);
  const baseY = 108;
  const topX = 12;
  const frontX = 56;
  const sideX = 104;
  return (
    <svg viewBox="0 0 150 130" role="img" aria-labelledby="tv-t tv-d" className="mx-auto block w-full max-w-md rounded-2xl" style={{ background: INK, fontFamily: 'inherit' }}>
      <title id="tv-t">One solid of stacked cubes and its top, front and side views</title>
      <desc id="tv-d">
        A solid made of stacks of cubes. From the back row to the front row the stack heights are {grid.map((r) => r.join(', ')).join(' and then ')}. The top view is the footprint: {v.top.flat().filter(Boolean).length} squares. The front view shows stack heights {v.front.join(', ')} from left to right. The side view, from the right, shows heights {v.side.join(' and ')} from the front to the back.
      </desc>
      <text x={75} y={10} textAnchor="middle" fontSize={6.2} fontWeight={800} fill="#e2e8f0">the solid</text>
      <g>
        {cubes.map((c, i) => (
          <g key={i}>
            <polygon points={poly([iso(c.x, c.y, c.z + 1, ox, oy), iso(c.x + 1, c.y, c.z + 1, ox, oy), iso(c.x + 1, c.y + 1, c.z + 1, ox, oy), iso(c.x, c.y + 1, c.z + 1, ox, oy)])} fill="#a5b4fc" stroke="#312e81" strokeWidth={0.4} />
            <polygon points={poly([iso(c.x, c.y, c.z, ox, oy), iso(c.x + 1, c.y, c.z, ox, oy), iso(c.x + 1, c.y, c.z + 1, ox, oy), iso(c.x, c.y, c.z + 1, ox, oy)])} fill="#6366f1" stroke="#312e81" strokeWidth={0.4} />
            <polygon points={poly([iso(c.x + 1, c.y, c.z, ox, oy), iso(c.x + 1, c.y + 1, c.z, ox, oy), iso(c.x + 1, c.y + 1, c.z + 1, ox, oy), iso(c.x + 1, c.y, c.z + 1, ox, oy)])} fill="#4338ca" stroke="#312e81" strokeWidth={0.4} />
          </g>
        ))}
      </g>
      {/* top view */}
      {v.top.map((row, ri) => row.map((on, c) => on && <rect key={`t${ri}-${c}`} x={topX + c * CELL} y={baseY - rows * CELL + ri * CELL} width={CELL} height={CELL} fill="#a5b4fc" stroke="#312e81" strokeWidth={0.5} />))}
      <text x={r3(topX + (cols * CELL) / 2)} y={baseY + 10} textAnchor="middle" fontSize={6.4} fontWeight={800} fill="#c7d2fe">top view</text>
      {/* front view */}
      {v.front.map((h, c) => Array.from({ length: h }, (_, z) => <rect key={`f${c}-${z}`} x={frontX + c * CELL} y={baseY - (z + 1) * CELL} width={CELL} height={CELL} fill="#6366f1" stroke="#312e81" strokeWidth={0.5} />))}
      <text x={r3(frontX + (cols * CELL) / 2)} y={baseY + 10} textAnchor="middle" fontSize={6.4} fontWeight={800} fill="#c7d2fe">front view</text>
      {/* side view (from the right): front row on the left */}
      {v.side.map((h, i) => Array.from({ length: h }, (_, z) => <rect key={`s${i}-${z}`} x={sideX + i * CELL} y={baseY - (z + 1) * CELL} width={CELL} height={CELL} fill="#4338ca" stroke="#312e81" strokeWidth={0.5} />))}
      <text x={r3(sideX + (rows * CELL) / 2)} y={baseY + 10} textAnchor="middle" fontSize={6.4} fontWeight={800} fill="#c7d2fe">side view</text>
    </svg>
  );
};
