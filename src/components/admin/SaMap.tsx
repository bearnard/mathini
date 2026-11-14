'use client';

import { useState } from 'react';
import { SA_PROVINCES, SA_VIEWBOX, projectSA } from './saProvinces';
import { bubbleRadius, heatColor, heatStep } from './heat';
import { formatInt } from './format';

export interface ProvinceData {
  id: string;
  visitors: number;
  dntSessions: number;
  learners: number;
  questions: number;
  events: number;
}
export interface CityData {
  city: string;
  province: string | null;
  lat: number | null;
  lon: number | null;
  visitors: number;
  learners: number;
  questions: number;
  events: number;
}
export type MapMetric = 'visitors' | 'learners' | 'questions';

export const METRIC_LABEL: Record<MapMetric, string> = { visitors: 'Visitors', learners: 'Learners', questions: 'Questions practised' };

interface Tip {
  x: number;
  y: number;
  title: string;
  lines: string[];
}

/**
 * South Africa by province (shaded by the chosen measure, one-hue ramp) with a bubble per city
 * (sized by activity). Bubbles use rounded coordinates (about 10 km), so they sit near, not on,
 * a town. Hover or focus shows the exact figures; the ranked list beside it carries the names.
 */
export default function SaMap({
  provinces,
  cities,
  metric,
  activeProvince,
  onActiveProvince,
}: {
  provinces: ProvinceData[];
  cities: CityData[];
  metric: MapMetric;
  activeProvince: string | null;
  onActiveProvince: (id: string | null) => void;
}) {
  const [tip, setTip] = useState<Tip | null>(null);
  const byId = new Map(provinces.map((p) => [p.id, p]));
  const max = Math.max(0, ...provinces.map((p) => p[metric]));
  const maxActivity = Math.max(0, ...cities.map((c) => c.events));
  const nameOf = new Map(SA_PROVINCES.map((p) => [p.id, p.name]));

  const place = (e: React.PointerEvent | React.FocusEvent, title: string, lines: string[]) => {
    const box = (e.currentTarget as SVGElement).ownerSVGElement?.getBoundingClientRect();
    const pt = 'clientX' in e ? { x: e.clientX, y: e.clientY } : { x: (box?.left ?? 0) + 40, y: (box?.top ?? 0) + 40 };
    setTip({ x: pt.x - (box?.left ?? 0), y: pt.y - (box?.top ?? 0), title, lines });
  };

  return (
    <div style={{ position: 'relative' }}>
      <svg
        viewBox={`0 0 ${SA_VIEWBOX.width} ${SA_VIEWBOX.height}`}
        role="img"
        aria-label={`Map of South Africa by province, shaded by ${METRIC_LABEL[metric].toLowerCase()}, with a bubble for each city`}
        style={{ width: '100%', height: 'auto', display: 'block' }}
        onPointerLeave={() => {
          setTip(null);
          onActiveProvince(null);
        }}
      >
        {SA_PROVINCES.map((p) => {
          const d = byId.get(p.id);
          const v = d ? d[metric] : 0;
          const active = activeProvince === p.id;
          return (
            <path
              key={p.id}
              d={p.path}
              fillRule="evenodd"
              fill={heatColor(heatStep(v, max))}
              stroke={active ? 'var(--text-primary)' : 'var(--surface-1)'}
              strokeWidth={active ? 2 : 1.5}
              strokeLinejoin="round"
              tabIndex={0}
              aria-label={`${p.name}: ${formatInt(v)} ${METRIC_LABEL[metric].toLowerCase()}`}
              onPointerMove={(e) => {
                onActiveProvince(p.id);
                place(e, p.name, [`${formatInt(d?.visitors)} visitors`, `${formatInt(d?.learners)} learners`, `${formatInt(d?.questions)} questions practised`]);
              }}
              onFocus={(e) => {
                onActiveProvince(p.id);
                place(e, p.name, [`${formatInt(d?.visitors)} visitors`, `${formatInt(d?.learners)} learners`, `${formatInt(d?.questions)} questions practised`]);
              }}
              onBlur={() => {
                setTip(null);
                onActiveProvince(null);
              }}
              style={{ cursor: 'default', outline: 'none' }}
            />
          );
        })}
        {cities
          .filter((c) => c.lat !== null && c.lon !== null)
          .map((c) => {
            const { x, y } = projectSA(c.lat as number, c.lon as number);
            return (
              <circle
                key={`${c.city}-${c.lat}-${c.lon}`}
                cx={x}
                cy={y}
                r={bubbleRadius(c.events, maxActivity)}
                fill="var(--bubble)"
                fillOpacity={0.8}
                stroke="var(--surface-1)"
                strokeWidth={2}
                tabIndex={0}
                aria-label={`${c.city}: ${formatInt(c.events)} events`}
                onPointerMove={(e) => {
                  e.stopPropagation();
                  place(e, c.city, [`${c.province ? nameOf.get(c.province) : ''}`.trim() || 'Province unknown', `${formatInt(c.visitors)} visitors · ${formatInt(c.learners)} learners`, `${formatInt(c.questions)} questions practised`, `${formatInt(c.events)} events`]);
                }}
                onFocus={(e) => place(e, c.city, [`${formatInt(c.visitors)} visitors · ${formatInt(c.learners)} learners`, `${formatInt(c.events)} events`])}
                onBlur={() => setTip(null)}
                style={{ outline: 'none' }}
              />
            );
          })}
      </svg>
      {tip && (
        <div
          role="status"
          className="admin-card"
          style={{ position: 'absolute', left: Math.min(tip.x + 12, 360), top: Math.max(tip.y - 8, 0), padding: '8px 10px', fontSize: 13, pointerEvents: 'none', boxShadow: '0 4px 14px rgba(0,0,0,.18)', zIndex: 2, whiteSpace: 'nowrap' }}
        >
          <div style={{ fontWeight: 700 }}>{tip.title}</div>
          {tip.lines.map((l) => (
            <div key={l} className="admin-secondary">{l}</div>
          ))}
        </div>
      )}
    </div>
  );
}
