'use client';

import { useState } from 'react';
import SaMap, { METRIC_LABEL, type CityData, type MapMetric, type ProvinceData } from './SaMap';
import { SA_PROVINCES } from './saProvinces';
import { HEAT_STEPS, heatColor, heatLegend, heatStep } from './heat';
import { countryName, formatInt } from './format';
import { useAdminData } from './useAdminData';

interface Metrics {
  events: number;
  visitors: number;
  dntSessions: number;
  learners: number;
  questions: number;
}
interface GeoData {
  total: Metrics;
  provinces: ProvinceData[];
  southAfricaUnlocated: Metrics;
  cities: CityData[];
  table: (Metrics & { country: string | null; region: string | null; city: string | null; province: string | null })[];
  world: (Metrics & { country: string | null })[];
}

const NAME = new Map(SA_PROVINCES.map((p) => [p.id, p.name]));
const TABLE_ROWS = 12;

export default function WhereCard({ qs }: { qs: string }) {
  const state = useAdminData<GeoData>('/api/admin/geo', qs);
  const [metric, setMetric] = useState<MapMetric>('visitors');
  const [active, setActive] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="admin-card" style={{ padding: 16 }} aria-label="Where visitors are">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
        <h2 style={{ fontSize: 18, fontWeight: 700 }}>Where</h2>
        <div role="group" aria-label="Map measure" style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {(Object.keys(METRIC_LABEL) as MapMetric[]).map((m) => (
            <button key={m} type="button" className="admin-btn" aria-pressed={metric === m} onClick={() => setMetric(m)}>
              {METRIC_LABEL[m]}
            </button>
          ))}
        </div>
      </div>

      {state.status === 'error' ? (
        <p role="alert" style={{ marginTop: 12 }}>Sorry, the location data could not be loaded.</p>
      ) : state.status === 'loading' ? (
        <p aria-busy="true" style={{ marginTop: 12 }}>Loading the map…</p>
      ) : (
        <Body data={state.data} metric={metric} active={active} setActive={setActive} showAll={showAll} setShowAll={setShowAll} />
      )}
    </section>
  );
}

function Body({ data, metric, active, setActive, showAll, setShowAll }: { data: GeoData; metric: MapMetric; active: string | null; setActive: (id: string | null) => void; showAll: boolean; setShowAll: (b: boolean) => void }) {
  const max = Math.max(0, ...data.provinces.map((p) => p[metric]));
  const ranked = [...data.provinces].sort((a, b) => b[metric] - a[metric] || (NAME.get(a.id) ?? '').localeCompare(NAME.get(b.id) ?? ''));
  const legend = heatLegend(max);
  const maxWorld = Math.max(1, ...data.world.map((w) => w.visitors + w.dntSessions));
  const rows = showAll ? data.table : data.table.slice(0, TABLE_ROWS);
  const unlocated = data.southAfricaUnlocated;

  return (
    <>
      <p className="admin-muted" style={{ fontSize: 12, marginTop: 4, lineHeight: 1.5 }}>
        Provinces are shaded by {METRIC_LABEL[metric].toLowerCase()}. Orange bubbles are cities, sized by activity; they appear only for learners whose parent or guardian agreed, and sit near (not exactly on) the town because locations are rounded to about 10 km. Learners are only counted where they agreed.
      </p>

      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: 12, alignItems: 'start' }}>
        <div>
          <SaMap provinces={data.provinces} cities={data.cities} metric={metric} activeProvince={active} onActiveProvince={setActive} />
          <div aria-label="Colour key" style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap', marginTop: 8, fontSize: 12 }} className="admin-muted">
            <span>Fewer</span>
            {Array.from({ length: HEAT_STEPS }, (_, i) => (
              <span key={i} title={legend[i] ? `${formatInt(legend[i].from)}–${formatInt(legend[i].to)}` : ''} style={{ width: 22, height: 10, borderRadius: 2, background: heatColor(i), display: 'inline-block' }} />
            ))}
            <span>More{max > 0 ? ` (up to ${formatInt(max)})` : ''}</span>
            <span style={{ marginLeft: 12, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <span aria-hidden style={{ width: 10, height: 10, borderRadius: 5, background: 'var(--bubble)', display: 'inline-block' }} /> city activity
            </span>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: 14, fontWeight: 700 }}>Provinces by {METRIC_LABEL[metric].toLowerCase()}</h3>
          <ol style={{ listStyle: 'none', padding: 0, margin: '8px 0 0', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {ranked.map((p) => {
              const v = p[metric];
              return (
                <li
                  key={p.id}
                  onPointerEnter={() => setActive(p.id)}
                  onPointerLeave={() => setActive(null)}
                  style={{ display: 'grid', gridTemplateColumns: '120px 1fr 52px', alignItems: 'center', gap: 8, fontSize: 13, opacity: active && active !== p.id ? 0.55 : 1 }}
                >
                  <span className="admin-secondary" style={{ whiteSpace: 'nowrap' }}>{NAME.get(p.id)}</span>
                  <span aria-hidden style={{ height: 10, borderRadius: 5, background: 'var(--grid)', overflow: 'hidden' }}>
                    <span style={{ display: 'block', height: '100%', width: `${max > 0 ? Math.max(v > 0 ? 3 : 0, (v / max) * 100) : 0}%`, background: heatColor(Math.max(0, heatStep(v, max))), borderRadius: 5 }} />
                  </span>
                  <span style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>{formatInt(v)}</span>
                </li>
              );
            })}
          </ol>
          {(unlocated.visitors > 0 || unlocated.dntSessions > 0) && (
            <p className="admin-muted" style={{ fontSize: 12, marginTop: 8 }}>
              Also in South Africa with no province recorded: {formatInt(unlocated.visitors)} visitors{unlocated.dntSessions > 0 ? ` and ${formatInt(unlocated.dntSessions)} private (Do Not Track) visits` : ''}.
            </p>
          )}

          <h3 style={{ fontSize: 14, fontWeight: 700, marginTop: 16 }}>Rest of the world</h3>
          {data.world.length === 0 ? (
            <p className="admin-muted" style={{ fontSize: 13, marginTop: 6 }}>No visits from outside South Africa in this period.</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0', display: 'flex', flexDirection: 'column', gap: 6 }}>
              {data.world.slice(0, 8).map((w) => {
                const v = w.visitors + w.dntSessions;
                return (
                  <li key={w.country ?? 'unknown'} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 52px', alignItems: 'center', gap: 8, fontSize: 13 }}>
                    <span className="admin-secondary" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{countryName(w.country)}</span>
                    <span aria-hidden style={{ height: 10, borderRadius: 5, background: 'var(--grid)', overflow: 'hidden' }}>
                      <span style={{ display: 'block', height: '100%', width: `${(v / maxWorld) * 100}%`, background: 'var(--series-1)', borderRadius: 5 }} />
                    </span>
                    <span style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>{formatInt(v)}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <h3 style={{ fontSize: 14, fontWeight: 700, marginTop: 20 }}>All places</h3>
      <div style={{ overflowX: 'auto', marginTop: 6 }}>
        <table className="admin-table">
          <thead>
            <tr>
              <th scope="col" style={{ textAlign: 'left' }}>Place</th>
              <th scope="col">Visitors</th>
              <th scope="col">Learners</th>
              <th scope="col" title="Questions practised: the total of finished practice runs">Questions</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr><td colSpan={4} className="admin-muted" style={{ textAlign: 'left' }}>No location data in this period.</td></tr>
            ) : (
              rows.map((r, i) => (
                <tr key={`${r.country}-${r.region}-${r.city}-${i}`}>
                  <td style={{ textAlign: 'left' }}>
                    <div className={r.city ? undefined : 'admin-secondary'} style={{ fontWeight: r.city ? 600 : 400 }}>{r.city ?? 'Province only'}</div>
                    <div className="admin-muted" style={{ fontSize: 12 }}>
                      {r.province ? NAME.get(r.province) : (r.region ?? 'no province recorded')} · {countryName(r.country)}
                    </div>
                  </td>
                  <td style={{ fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>
                    {formatInt(r.visitors)}
                    {r.dntSessions > 0 && <div className="admin-muted" style={{ fontSize: 12 }}>+{formatInt(r.dntSessions)} private</div>}
                  </td>
                  <td style={{ fontVariantNumeric: 'tabular-nums' }}>{formatInt(r.learners)}</td>
                  <td style={{ fontVariantNumeric: 'tabular-nums' }}>{formatInt(r.questions)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {data.table.length > TABLE_ROWS && (
        <button type="button" className="admin-btn" style={{ marginTop: 8 }} onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show fewer' : `Show all ${formatInt(data.table.length)} places`}
        </button>
      )}
      <p className="admin-muted" style={{ fontSize: 12, marginTop: 8 }}>
        Each row is a separate group: a device that appears both with and without a city is counted in both rows. Province totals above count each device once.
      </p>
    </>
  );
}
