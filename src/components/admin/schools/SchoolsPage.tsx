'use client';
// ADR 0003 section 6: the owner appoints a school admin for each school. A school admin can confirm teachers of their school and see school-level
// progress. The owner keeps every override (/admin/teachers).
import { useState } from 'react';
import { useAdminData } from '../useAdminData';
import { postJson, when } from '../reviews/api';
import type { AdminSchool } from '../../../lib/server/schools/schoolAdmins';

function SchoolCard({ s, onDone }: { s: AdminSchool; onDone: () => void }) {
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const appoint = async () => {
    setBusy(true); setErr('');
    const r = await postJson(`/api/admin/schools/${s.id}/admins`, 'school-admin-appoint', { email });
    setBusy(false);
    if (r.ok) { setEmail(''); onDone(); } else setErr(r.failure.error);
  };
  const revoke = async (userId: string, who: string) => {
    if (!window.confirm(`Remove ${who} as school admin of ${s.name}?`)) return;
    const r = await postJson(`/api/admin/schools/${s.id}/admins/${userId}/revoke`, 'school-admin-revoke', {});
    if (r.ok) onDone(); else setErr(r.failure.error);
  };
  return (
    <li className="admin-card" style={{ padding: 12, minWidth: 0, overflowWrap: 'anywhere' }}>
      <strong>{s.name}</strong>
      <span className="admin-muted" style={{ fontSize: 13 }}> {s.province ? `· ${s.province} ` : ''}· {s.teachers} {s.teachers === 1 ? 'teacher' : 'teachers'} · {s.classes} {s.classes === 1 ? 'class' : 'classes'}</span>
      <div style={{ marginTop: 8, fontSize: 14 }}>
        <span className="admin-muted">School admins: </span>
        {s.admins.length === 0 ? <span>none yet</span> : (
          <ul style={{ listStyle: 'none', margin: '4px 0 0', padding: 0, display: 'grid', gap: 4 }}>
            {s.admins.map((a) => (
              <li key={a.userId} style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                <span>{a.email}</span><span className="admin-muted" style={{ fontSize: 12 }}>since {when(a.appointedAt)}</span>
                <button type="button" className="admin-btn-danger" onClick={() => void revoke(a.userId, a.email)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap' }}>
        <input className="admin-input" aria-label={`Email of the new school admin for ${s.name}`} placeholder="Email of an adult who has signed in" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={254} style={{ flex: '1 1 240px', minWidth: 0 }} />
        <button type="button" className="admin-btn" disabled={busy || !email.trim()} onClick={() => void appoint()}>Appoint</button>
      </div>
      {err && <p role="alert" style={{ fontSize: 13, marginTop: 6 }}>{err}</p>}
    </li>
  );
}

export default function SchoolsPage() {
  const [n, setN] = useState(0);
  const state = useAdminData<{ schools: AdminSchool[] }>('/api/admin/schools', `r=${n}`);
  return (
    <main style={{ maxWidth: 980, margin: '0 auto', padding: 16 }}>
      <h1 style={{ fontSize: 22, fontWeight: 700 }}>Schools</h1>
      <p className="admin-secondary" style={{ fontSize: 14, marginTop: 4 }}>
        A school appears here once you approve its first teacher. Appoint a school admin to let them confirm their own school&apos;s teachers and see school-level progress by nickname. They can only see their own school. You can always decide in Teachers.
      </p>
      {state.status === 'loading' && <p style={{ marginTop: 16 }}>Loading…</p>}
      {state.status === 'error' && <p role="alert" style={{ marginTop: 16 }}>Could not load the schools{state.code ? ` (${state.code})` : ''}.</p>}
      {state.status === 'ok' && (state.data.schools.length === 0
        ? <p className="admin-muted" style={{ marginTop: 16 }}>No schools yet.</p>
        : <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'grid', gap: 10 }}>{state.data.schools.map((s) => <SchoolCard key={s.id} s={s} onDone={() => setN((x) => x + 1)} />)}</ul>)}
    </main>
  );
}
