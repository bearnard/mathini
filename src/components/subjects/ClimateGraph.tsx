'use client';

import DataChart from './DataChart';

interface MonthlyData {
  month: string;
  rainfall: number;
  temp: number;
}

interface ClimateGraphProps {
  station: string;
  data: MonthlyData[];
  className?: string;
  /** Fix the axes (same values on two graphs = fair comparison). */
  rainDomain?: [number, number];
  tempDomain?: [number, number];
}

/**
 * Standard climatograph (Walter-Lieth style) showing monthly rainfall bars and temperature line.
 *
 * Usage:
 *   <ClimateGraph
 *     station="Johannesburg"
 *     data={[
 *       { month: 'Jan', rainfall: 114, temp: 21 },
 *       ...
 *     ]}
 *   />
 */
const ClimateGraph = ({ station, data, className, rainDomain, tempDomain }: ClimateGraphProps) => {
  return (
    <div className={`rounded-xl border border-slate-200 overflow-hidden ${className ?? ''}`}>
      <div className="bg-sky-700 text-white px-4 py-2 font-semibold text-sm">{station} — Climatograph</div>
      <div className="p-3">
        <DataChart
          data={data as unknown as Record<string, string | number>[]}
          xKey="month"
          type="climate"
          height={250}
          rainDomain={rainDomain}
          tempDomain={tempDomain}
          series={[
            { key: 'rainfall', label: 'Rainfall (mm)', type: 'bar', color: '#38bdf8' },
            { key: 'temp', label: 'Temperature (°C)', type: 'line', color: '#ef4444' },
          ]}
        />
      </div>
      <div className="flex gap-4 px-4 py-2 bg-slate-50 border-t border-slate-100 text-xs text-slate-500">
        <span>📊 Blue bars = rainfall (mm) — left axis</span>
        <span>📈 Red line = temperature (°C) — right axis</span>
      </div>
    </div>
  );
};

export default ClimateGraph;
