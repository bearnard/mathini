'use client';

import { useEffect, useRef, useState } from 'react';
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
import { commaText } from './graphTicks';
import { PHONE_PLOT, axisHeight, edgePadding, needsRotationAt, rotatedFont, wrapLabel } from './wrapLabel';

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
  /** Every category label, so the whole axis is wrapped or turned on end together. */
  labels?: string[];
  /** recharts passes the axis width and the number of ticks, so the slot width is width / count. */
  width?: number;
  visibleTicksCount?: number;
}

/** A category tick that wraps (and, if needed, shrinks a little) so every label shows on a phone. */
const WrapTick = ({ x = 0, y = 0, payload, width = 0, visibleTicksCount = 1, labels = [] }: WrapTickProps) => {
  const slot = width / Math.max(1, visibleTicksCount);
  // many categories, or a word too wide for its slot: turn the label on end, but only when it does not fit flat
  if (needsRotationAt(labels, slot)) {
    return (
      <g transform={`translate(${x},${y})`}>
        <text transform="rotate(-90)" x={-6} y={4} textAnchor="end" fill="#666" fontSize={rotatedFont(slot)}>
          {commaText(payload?.value)}
        </text>
      </g>
    );
  }
  const { lines, fontSize } = wrapLabel(commaText(payload?.value), slot);
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
  // measure the box we are drawn in, so the axis height and the labels agree on how much room there is
  const boxRef = useRef<HTMLDivElement>(null);
  const [boxWidth, setBoxWidth] = useState(0);
  useEffect(() => {
    const el = boxRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const update = () => setBoxWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const dual = type === 'climate';
  const plot = boxWidth > 0 ? Math.max(60, boxWidth - (dual ? 100 : 70)) : dual ? PHONE_PLOT.dual : PHONE_PLOT.single;
  const categoryLabels = data.map((d) => commaText(d[xKey]));
  const xAxisProps = {
    dataKey: xKey,
    interval: 0 as const,
    tick: <WrapTick labels={categoryLabels} />,
    height: axisHeight(categoryLabels, plot),
  };
  // line and area charts put the first and last label on the very edge of the plot: leave room
  const first = String(data[0]?.[xKey] ?? '');
  const last = String(data[data.length - 1]?.[xKey] ?? '');
  const edgeRoom = { padding: { left: Math.min(40, edgePadding(first)), right: edgePadding(last) } };

  const renderContent = () => {
    if (type === 'climate') {
      return (
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis {...xAxisProps} />
          <YAxis tickFormatter={commaText} yAxisId="left" domain={rainDomain} tick={{ fontSize: 12 }} label={{ value: 'Rainfall (mm)', angle: -90, position: 'insideLeft', fontSize: 12 }} />
          <YAxis tickFormatter={commaText} yAxisId="right" domain={tempDomain} orientation="right" tick={{ fontSize: 12 }} label={{ value: 'Temp (°C)', angle: 90, position: 'insideRight', fontSize: 12 }} />
          <Tooltip formatter={(value) => commaText(value)} />
          <Legend />
          {series.map((s, i) =>
            s.type === 'line' ? (
              <Line key={s.key} yAxisId="right" type="monotone" dataKey={s.key} name={s.label} stroke={colours[i]} strokeWidth={2} dot isAnimationActive={false} />
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
          <YAxis tickFormatter={commaText} tick={{ fontSize: 12 }} label={yLabel ? { value: yLabel, angle: -90, position: 'insideLeft', fontSize: 12 } : undefined} />
          <Tooltip formatter={(value) => commaText(value)} />
          <Legend />
          {series.map((s, i) => (
            <Line key={s.key} type="monotone" dataKey={s.key} name={s.label} stroke={colours[i]} strokeWidth={2} dot isAnimationActive={false} />
          ))}
        </LineChart>
      );
    }

    if (type === 'area') {
      return (
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis {...xAxisProps} {...edgeRoom} />
          <YAxis tickFormatter={commaText} tick={{ fontSize: 12 }} label={yLabel ? { value: yLabel, angle: -90, position: 'insideLeft', fontSize: 12 } : undefined} />
          <Tooltip formatter={(value) => commaText(value)} />
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
        <YAxis tickFormatter={commaText} tick={{ fontSize: 12 }} label={yLabel ? { value: yLabel, angle: -90, position: 'insideLeft', fontSize: 12 } : undefined} />
        <Tooltip formatter={(value) => commaText(value)} />
        <Legend />
        {series.map((s, i) => (
          <Bar key={s.key} dataKey={s.key} name={s.label} fill={colours[i]} radius={[3, 3, 0, 0]} />
        ))}
      </BarChart>
    );
  };

  return (
    <div ref={boxRef} className={`w-full ${className ?? ''}`}>
      <ResponsiveContainer width="100%" height={height}>
        {renderContent()}
      </ResponsiveContainer>
    </div>
  );
};

export default DataChart;
