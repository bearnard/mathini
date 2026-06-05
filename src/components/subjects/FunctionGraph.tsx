'use client';

import { Mafs, Coordinates, Plot, Theme, useMovablePoint } from 'mafs';
import 'mafs/core.css';

export interface CurveConfig {
  fn: (x: number) => number;
  color?: string;
  label?: string;
}

interface FunctionGraphProps {
  /** Array of curves to render */
  curves: CurveConfig[];
  xRange?: [number, number];
  yRange?: [number, number];
  /** Show a movable point to read coordinates */
  movable?: boolean;
  height?: number;
  className?: string;
}

/**
 * Interactive function graph using Mafs.
 *
 * Usage:
 *   <FunctionGraph curves={[{ fn: x => x ** 2, color: Theme.blue, label: 'f(x) = x²' }]} />
 */
const FunctionGraph = ({
  curves,
  xRange = [-5, 5],
  yRange = [-5, 5],
  movable = false,
  height = 300,
  className,
}: FunctionGraphProps) => {
  const point = useMovablePoint([0, 0]);

  return (
    <div className={`rounded-xl overflow-hidden border border-slate-200 ${className ?? ''}`}>
      <Mafs
        viewBox={{ x: xRange, y: yRange }}
        height={height}
        pan={false}
      >
        <Coordinates.Cartesian />
        {curves.map((c, i) => (
          <Plot.OfX
            key={i}
            y={c.fn}
            color={c.color ?? Theme.blue}
          />
        ))}
        {movable && point.element}
      </Mafs>
      {curves.some((c) => c.label) && (
        <div className="flex flex-wrap gap-3 p-3 bg-slate-50 text-sm">
          {curves.map((c, i) =>
            c.label ? (
              <span key={i} className="flex items-center gap-1">
                <span
                  className="inline-block w-4 h-0.5 rounded"
                  style={{ backgroundColor: c.color ?? '#3b82f6' }}
                />
                {c.label}
              </span>
            ) : null,
          )}
        </div>
      )}
    </div>
  );
};

export default FunctionGraph;
export { Theme };
