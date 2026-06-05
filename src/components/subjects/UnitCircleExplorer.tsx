'use client';

import { useMemo, useState } from 'react';

import { cn } from '../../lib/utils';

interface UnitCircleExplorerProps {
  initialAngle?: number;
  showCastRule?: boolean;
  className?: string;
}

const EXACT_VALUES: Record<number, { sin: string; cos: string; tan: string }> = {
  0: { sin: '0', cos: '1', tan: '0' },
  30: { sin: '1/2', cos: '√3/2', tan: '√3/3' },
  45: { sin: '√2/2', cos: '√2/2', tan: '1' },
  60: { sin: '√3/2', cos: '1/2', tan: '√3' },
  90: { sin: '1', cos: '0', tan: 'undefined' },
  120: { sin: '√3/2', cos: '-1/2', tan: '-√3' },
  135: { sin: '√2/2', cos: '-√2/2', tan: '-1' },
  150: { sin: '1/2', cos: '-√3/2', tan: '-√3/3' },
  180: { sin: '0', cos: '-1', tan: '0' },
  210: { sin: '-1/2', cos: '-√3/2', tan: '√3/3' },
  225: { sin: '-√2/2', cos: '-√2/2', tan: '1' },
  240: { sin: '-√3/2', cos: '-1/2', tan: '√3' },
  270: { sin: '-1', cos: '0', tan: 'undefined' },
  300: { sin: '-√3/2', cos: '1/2', tan: '-√3' },
  315: { sin: '-√2/2', cos: '√2/2', tan: '-1' },
  330: { sin: '-1/2', cos: '√3/2', tan: '-√3/3' },
  360: { sin: '0', cos: '1', tan: '0' },
};

const CAST_CELLS = [
  { label: 'S = sin +', quadrant: 2 },
  { label: 'A = all +', quadrant: 1 },
  { label: 'T = tan +', quadrant: 3 },
  { label: 'C = cos +', quadrant: 4 },
] as const;

const clampAngle = (angle: number) => Math.min(360, Math.max(0, Math.round(angle)));

const formatDecimal = (value: number) => {
  if (Math.abs(value) < 1e-9) {
    return '0.000';
  }

  return value.toFixed(3);
};

const getQuadrant = (angle: number) => {
  if (angle > 0 && angle < 90) return 1;
  if (angle > 90 && angle < 180) return 2;
  if (angle > 180 && angle < 270) return 3;
  if (angle > 270 && angle < 360) return 4;
  return null;
};

export default function UnitCircleExplorer({
  initialAngle = 45,
  showCastRule = true,
  className,
}: UnitCircleExplorerProps) {
  const [angle, setAngle] = useState(clampAngle(initialAngle));

  const radians = (angle * Math.PI) / 180;
  const sinValue = Math.sin(radians);
  const cosValue = Math.cos(radians);
  const tanValue = Math.abs(cosValue) < 1e-9 ? null : sinValue / cosValue;
  const exactValue = EXACT_VALUES[angle];
  const quadrant = getQuadrant(angle);

  const geometry = useMemo(() => {
    const cx = 150;
    const cy = 150;
    const radius = 110;

    return {
      cx,
      cy,
      radius,
      x: cx + radius * cosValue,
      y: cy - radius * sinValue,
      projectionX: cx + radius * cosValue,
      projectionY: cy,
    };
  }, [cosValue, sinValue]);

  const sinePath = useMemo(() => {
    const width = 400;
    const midline = 40;
    const amplitude = 28;

    return Array.from({ length: 121 }, (_, index) => {
      const currentAngle = (index / 120) * 360;
      const x = (currentAngle / 360) * width;
      const y = midline - Math.sin((currentAngle * Math.PI) / 180) * amplitude;
      return `${index === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`;
    }).join(' ');
  }, []);

  const trackerX = (angle / 360) * 400;

  return (
    <div className={cn('rounded-2xl border border-slate-200 bg-white shadow-sm', className)}>
      <div className="border-b border-slate-100 px-4 py-3 sm:px-6">
        <h3 className="text-lg font-semibold text-slate-900">Unit Circle Explorer</h3>
        <p className="mt-1 text-sm text-slate-500">Track sine, cosine and tangent as a point moves around the unit circle.</p>
      </div>

      <div className="space-y-6 p-4 sm:p-6">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(18rem,1fr)]">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <svg viewBox="0 0 300 300" className="h-auto w-full">
                <defs>
                  <pattern id="unit-circle-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#cbd5e1" strokeWidth="0.6" />
                  </pattern>
                </defs>
                <rect width="300" height="300" fill="url(#unit-circle-grid)" />
                <line x1="20" y1="150" x2="280" y2="150" stroke="#475569" strokeWidth="1.5" />
                <line x1="150" y1="20" x2="150" y2="280" stroke="#475569" strokeWidth="1.5" />
                <circle cx="150" cy="150" r="110" fill="white" stroke="#0f172a" strokeWidth="2" />
                <line x1="150" y1="150" x2={geometry.x} y2={geometry.y} stroke="#2563eb" strokeWidth="3" />
                <line
                  x1="150"
                  y1="150"
                  x2={geometry.projectionX}
                  y2={geometry.projectionY}
                  stroke="#4f46e5"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                />
                <line
                  x1={geometry.x}
                  y1={geometry.projectionY}
                  x2={geometry.x}
                  y2={geometry.y}
                  stroke="#db2777"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                />
                <circle cx={geometry.x} cy={geometry.y} r="7" fill="#0f172a" />
                <text x={geometry.x + 10} y={geometry.y - 10} className="fill-slate-900 text-[12px] font-semibold">
                  P
                </text>
                <text x="245" y="143" className="fill-indigo-700 text-[12px] font-semibold">
                  cos θ
                </text>
                <text x={geometry.x + 10} y={(geometry.y + geometry.projectionY) / 2} className="fill-pink-600 text-[12px] font-semibold">
                  sin θ
                </text>
                <text x="286" y="144" className="fill-slate-500 text-[11px]">
                  x
                </text>
                <text x="154" y="18" className="fill-slate-500 text-[11px]">
                  y
                </text>
              </svg>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-700">Angle θ</p>
                  <p className="text-xs text-slate-500">Use the slider or number input.</p>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 ring-1 ring-slate-200">
                  <span className="text-sm text-slate-500">θ =</span>
                  <input
                    type="number"
                    min={0}
                    max={360}
                    value={angle}
                    onChange={(event) => setAngle(clampAngle(Number(event.target.value || 0)))}
                    className="w-20 rounded-lg border border-slate-200 px-2 py-1 text-right text-sm font-semibold text-slate-900 outline-none"
                  />
                  <span className="text-sm text-slate-500">°</span>
                </div>
              </div>
              <input
                type="range"
                min={0}
                max={360}
                value={angle}
                onChange={(event) => setAngle(clampAngle(Number(event.target.value)))}
                className="h-3 w-full cursor-pointer accent-indigo-600"
              />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Mini sine graph</h4>
                  <p className="text-xs text-slate-500">The vertical tracker matches the current angle.</p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-slate-200">
                  θ = {angle}°
                </span>
              </div>
              <div className="overflow-x-auto">
                <svg viewBox="0 0 400 80" className="h-24 min-w-[400px] w-full rounded-xl bg-white">
                  <line x1="0" y1="40" x2="400" y2="40" stroke="#94a3b8" strokeWidth="1.5" />
                  <path d={sinePath} fill="none" stroke="#4f46e5" strokeWidth="3" strokeLinecap="round" />
                  <line x1={trackerX} y1="8" x2={trackerX} y2="72" stroke="#db2777" strokeWidth="2" strokeDasharray="5 4" />
                  <circle cx={trackerX} cy={40 - sinValue * 28} r="4" fill="#db2777" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
              {[
                { label: 'sin θ', value: formatDecimal(sinValue), tone: 'bg-pink-500' },
                { label: 'cos θ', value: formatDecimal(cosValue), tone: 'bg-indigo-500' },
                { label: 'tan θ', value: tanValue === null ? 'undefined' : formatDecimal(tanValue), tone: 'bg-amber-500' },
                { label: 'Angle', value: `${angle}°`, tone: 'bg-slate-600' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <span className={cn('h-3 w-3 rounded-full', item.tone)} />
                    <p className="text-sm font-medium text-slate-500">{item.label}</p>
                  </div>
                  <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>

            {exactValue ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <h4 className="text-sm font-semibold text-emerald-900">Exact values at {angle}°</h4>
                <div className="mt-3 space-y-2 text-sm text-emerald-900">
                  <p>sin {angle}° = {exactValue.sin}</p>
                  <p>cos {angle}° = {exactValue.cos}</p>
                  <p>tan {angle}° = {exactValue.tan}</p>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                Move to a special angle like 30°, 45°, 60° or 315° to show exact trig values.
              </div>
            )}

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h4 className="text-sm font-semibold text-slate-900">Quadrant</h4>
              <p className="mt-2 text-sm text-slate-600">
                {quadrant ? `Point P is in Quadrant ${quadrant}.` : 'Point P is on an axis, so the quadrant changes here.'}
              </p>
            </div>

            {showCastRule ? (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">CAST rule</h4>
                    <p className="text-xs text-slate-500">Which trig ratios are positive in each quadrant?</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                    {quadrant ? `Q${quadrant}` : 'Axis'}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {CAST_CELLS.map((cell) => {
                    const active = quadrant === cell.quadrant;

                    return (
                      <div
                        key={cell.label}
                        className={cn(
                          'rounded-2xl border px-4 py-4 text-sm font-semibold transition-colors',
                          active ? 'border-indigo-300 bg-indigo-600 text-white' : 'border-slate-200 bg-white text-slate-700'
                        )}
                      >
                        <div>{cell.label}</div>
                        <div className={cn('mt-1 text-xs', active ? 'text-indigo-100' : 'text-slate-500')}>Quadrant {cell.quadrant}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
