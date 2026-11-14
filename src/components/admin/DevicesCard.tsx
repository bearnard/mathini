'use client';

import RankedList from './RankedList';
import { formatInt, formatPercent } from './format';
import { useAdminData } from './useAdminData';
import { plural } from './names';

interface Share { name: string; count: number; share: number }
interface DevicesData { devices: Share[]; browsers: Share[]; os: Share[]; dntSessions: number }

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
// Only device-type words are capitalised; browser and OS names (iOS, macOS, ...) are shown exactly as stored.
const items = (rows: Share[], prefix: string, capitalise = false) => rows.map((r) => ({ key: `${prefix}-${r.name}`, label: capitalise ? cap(r.name) : r.name, value: r.share, text: `${formatPercent(r.share)} · ${formatInt(r.count)}` }));

export default function DevicesCard({ qs }: { qs: string }) {
  const state = useAdminData<DevicesData>('/api/admin/devices', qs);
  return (
    <section className="admin-card" style={{ padding: 16 }} aria-label="Devices">
      <h2 style={{ fontSize: 18, fontWeight: 700 }}>Devices</h2>
      <p className="admin-muted" style={{ fontSize: 12, marginTop: 4, lineHeight: 1.5 }}>
        Unique devices by type, browser and operating system (families only; no versions are stored).
      </p>
      {state.status === 'error' ? (
        <p role="alert" style={{ marginTop: 12 }}>Sorry, this could not be loaded.</p>
      ) : state.status === 'loading' ? (
        <p aria-busy="true" style={{ marginTop: 12 }}>Loading…</p>
      ) : (
        <>
          <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginTop: 10 }}>
            <div><h3 style={{ fontSize: 14, fontWeight: 700 }}>Device type</h3><RankedList items={items(state.data.devices, 'd', true)} max={1} empty="No visits in this period." /></div>
            <div><h3 style={{ fontSize: 14, fontWeight: 700 }}>Browser</h3><RankedList items={items(state.data.browsers, 'b')} max={1} empty="No visits in this period." /></div>
            <div><h3 style={{ fontSize: 14, fontWeight: 700 }}>Operating system</h3><RankedList items={items(state.data.os, 'o')} max={1} empty="No visits in this period." /></div>
          </div>
          {state.data.dntSessions > 0 && (
            <p className="admin-muted" style={{ fontSize: 12, marginTop: 10 }}>Not included: {plural(state.data.dntSessions, 'private (Do Not Track) visit')}, which have no device id.</p>
          )}
        </>
      )}
    </section>
  );
}
