'use client';

import { Mafs, Coordinates, Plot, Theme, useMovablePoint } from 'mafs';
import 'mafs/core.css';
import { useEffect, useRef, useState } from 'react';
import { axisStep, displayedSpans, formatTick, niceStep, withRoomForLabels } from './graphTicks';

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
  /**
   * Keep one unit the same length on both axes. Needed whenever the shape matters: a circle must be
   * round and perpendicular lines must look perpendicular. The view is then widened to fit the box,
   * so xRange and yRange become the minimum range shown.
   */
  equalAxes?: boolean;
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
  equalAxes = false,
  movable = false,
  height = 300,
  className,
}: FunctionGraphProps) => {
  const point = useMovablePoint([0, 0]);
  // with equal axes the view shows more than the ranges asked for, so pick the grid step from the box
  const boxRef = useRef<HTMLDivElement>(null);
  const [boxWidth, setBoxWidth] = useState(800);
  useEffect(() => {
    const el = boxRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const update = () => setBoxWidth(el.clientWidth || 800);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const shown = equalAxes ? displayedSpans(xRange, yRange, boxWidth, height) : null;
  const xStep = shown ? niceStep(shown.x) : axisStep(xRange);
  const yStep = shown ? niceStep(shown.y) : axisStep(yRange);

  return (
    <div ref={boxRef} className={`rounded-xl overflow-hidden border border-slate-200 ${className ?? ''}`}>
      <Mafs
        viewBox={{ x: withRoomForLabels(xRange, 0.06), y: withRoomForLabels(yRange, 0.12) }}
        height={height}
        pan={false}
        // Honour the ranges the lesson asks for. Mafs keeps a 1:1 aspect ratio by default, which
        // widens the view far beyond xRange when the two ranges differ (for example 0-8 by 0-80):
        // hundreds of tick labels, an unreadable graph, the curve a thin line.
        preserveAspectRatio={equalAxes ? 'contain' : false}
      >
        {/* about 4 to 10 grid lines and labels per axis, not one per unit (360 labels on a 0-360 axis) */}
        <Coordinates.Cartesian
          xAxis={{ lines: xStep, labels: formatTick }}
          yAxis={{ lines: yStep, labels: formatTick }}
        />
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
