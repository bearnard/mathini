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
import { axisHeight, isDense, wrapLabel } from './wrapLabel';

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
  /** climate only: fix the rainfall (left) and temperature (right) axes so two graphs can be compared fairly. */
  rainDomain?: [number, number];
  tempDomain?: [number, number];
}

interface WrapTickProps {
  x?: number;
  y?: number;
  payload?: { value: string | number };
  /** Many categories: turn the label on end instead of wrapping it. */
  rotate?: boolean;
  /** recharts passes the axis width and the number of ticks, so the slot width is width / count. */
  width?: number;
  visibleTicksCount?: number;
}

/** A category tick that wraps (and, if needed, shrinks a little) so every label shows on a phone. */
const WrapTick = ({ x = 0, y = 0, payload, width = 0, visibleTicksCount = 1, rotate = false }: WrapTickProps) => {
  const slot = width / Math.max(1, visibleTicksCount);
  // many categories: turn the label on end, but only when it does not fit flat in its slot
  if (rotate && slot - 4 < String(payload?.value ?? '').length * 0.58 * 12) {
    return (
      <g transform={`translate(${x},${y})`}>
        <text transform="rotate(-90)" x={-6} y={4} textAnchor="end" fill="#666" fontSize={10}>
          {String(payload?.value ?? '')}
        </text>
      </g>
    );
  }
  const { lines, fontSize } = wrapLabel(String(payload?.value ?? ''), slot);
  return (
    <g transform={`translate(${x},${y})`}>
      <text textAnchor="middle" fill="#666" fontSize={fontSize}>
        {lines.map((line, i) => (
          <tspan key={i} x={0} dy={i === 0 ? 14 : fontSize + 1}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
};

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
  rainDomain,
  tempDomain,
}: DataChartProps) => {
  const colours = series.map((s, i) => s.color ?? COLOURS[i % COLOURS.length]);
  // every category label must show: interval 0, wrapped ticks, and an axis tall enough for them
  const xAxisProps = {
    dataKey: xKey,
    interval: 0 as const,
    tick: <WrapTick rotate={isDense(data.map((d) => String(d[xKey])))} />,
    height: axisHeight(data.map((d) => String(d[xKey]))),
  };
  // line and area charts put the first and last label on the very edge of the plot: leave room
  const edgeRoom = { padding: { left: 8, right: 18 } };

  const renderContent = () => {
    if (type === 'climate') {
      return (
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis {...xAxisProps} />
          <YAxis yAxisId="left" domain={rainDomain} tick={{ fontSize: 12 }} label={{ value: 'Rainfall (mm)', angle: -90, position: 'insideLeft', fontSize: 12 }} />
          <YAxis yAxisId="right" domain={tempDomain} orientation="right" tick={{ fontSize: 12 }} label={{ value: 'Temp (°C)', angle: 90, position: 'insideRight', fontSize: 12 }} />
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
          <XAxis {...xAxisProps} {...edgeRoom} />
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
          <XAxis {...xAxisProps} {...edgeRoom} />
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
        <XAxis {...xAxisProps} />
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
