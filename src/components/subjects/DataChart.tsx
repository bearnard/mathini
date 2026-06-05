'use client';

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';

export type ChartType = 'bar' | 'line' | 'area' | 'climate';

export interface DataSeries {
  key: string;
  label: string;
  color?: string;
  type?: 'bar' | 'line';
}

interface DataChartProps {
  data: Record<string, string | number>[];
  series: DataSeries[];
  xKey: string;
  type?: ChartType;
  yLabel?: string;
  height?: number;
  className?: string;
}

const COLOURS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

/**
 * Flexible Recharts chart wrapper.
 * type="climate" renders bars (rainfall) + line (temperature) on dual axes.
 */
const DataChart = ({
  data,
  series,
  xKey,
  type = 'bar',
  yLabel,
  height = 280,
  className,
}: DataChartProps) => {
  const colours = series.map((s, i) => s.color ?? COLOURS[i % COLOURS.length]);

  const renderContent = () => {
    if (type === 'climate') {
      return (
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey={xKey} tick={{ fontSize: 12 }} />
          <YAxis yAxisId="left" tick={{ fontSize: 12 }} label={{ value: 'Rainfall (mm)', angle: -90, position: 'insideLeft', fontSize: 12 }} />
          <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} label={{ value: 'Temp (°C)', angle: 90, position: 'insideRight', fontSize: 12 }} />
          <Tooltip />
          <Legend />
          {series.map((s, i) =>
            s.type === 'line' ? (
              <Line key={s.key} yAxisId="right" type="monotone" dataKey={s.key} name={s.label} stroke={colours[i]} strokeWidth={2} dot />
            ) : (
              <Bar key={s.key} yAxisId="left" dataKey={s.key} name={s.label} fill={colours[i]} />
            ),
          )}
        </ComposedChart>
      );
    }

    if (type === 'line') {
      return (
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey={xKey} tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} label={yLabel ? { value: yLabel, angle: -90, position: 'insideLeft', fontSize: 12 } : undefined} />
          <Tooltip />
          <Legend />
          {series.map((s, i) => (
            <Line key={s.key} type="monotone" dataKey={s.key} name={s.label} stroke={colours[i]} strokeWidth={2} dot />
          ))}
        </LineChart>
      );
    }

    if (type === 'area') {
      return (
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey={xKey} tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} label={yLabel ? { value: yLabel, angle: -90, position: 'insideLeft', fontSize: 12 } : undefined} />
          <Tooltip />
          <Legend />
          {series.map((s, i) => (
            <Area key={s.key} type="monotone" dataKey={s.key} name={s.label} stroke={colours[i]} fill={colours[i]} fillOpacity={0.15} />
          ))}
        </AreaChart>
      );
    }

    return (
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey={xKey} tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} label={yLabel ? { value: yLabel, angle: -90, position: 'insideLeft', fontSize: 12 } : undefined} />
        <Tooltip />
        <Legend />
        {series.map((s, i) => (
          <Bar key={s.key} dataKey={s.key} name={s.label} fill={colours[i]} radius={[3, 3, 0, 0]} />
        ))}
      </BarChart>
    );
  };

  return (
    <div className={`w-full ${className ?? ''}`}>
      <ResponsiveContainer width="100%" height={height}>
        {renderContent()}
      </ResponsiveContainer>
    </div>
  );
};

export default DataChart;
