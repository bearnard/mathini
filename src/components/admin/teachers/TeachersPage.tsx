'use client';
// ADR 0003 phase 3: the owner checks teacher applications. This screen is the only place a SACE number is shown, and the only way the teacher role is granted.
import { useState } from 'react';
import { useAdminData } from '../useAdminData';
import { postJson, when } from '../reviews/api';
import type { AdminApplication } from '../../../lib/server/schools/teachers';

const BADGE: Record<string, string> = { pending: 'Waiting', approved: 'Approved', rejected: 'Not approved' };

function Row({ a, onDone }: { a: AdminApplication; onDone: () => void }) {
  const [note, setNote] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const decide = async (decision: 'approve' | 'reject' | 'revoke') => {
    const sure = decision === 'approve' ? `Approve ${a.email} as a teacher at ${a.schoolName}?` : decision === 'reject' ? `Reject ${a.email}?` : `Remove ${a.email}'s teacher role and archive their classes?`;
    if (!window.confirm(sure)) return;
    setBusy(true); setErr('');
    const r = await postJson(`/api/admin/teachers/${a.userId}/decide`, 'teacher-decide', { decision, note });
    setBusy(false);
    if (r.ok) onDone(); else setErr(r.failure.error);
  };
  return (
    <li className="admin-card" style={{ padding: 12, minWidth: 0, overflowWrap: 'anywhere' }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'baseline' }}>
        <strong style={{ overflowWrap: 'anywhere' }}>{a.email}</strong>
        <span className="admin-muted" style={{ fontSize: 13 }}>{BADGE[a.status]} · sent {when(a.submittedAt)}{a.decidedAt ? ` · decided ${when(a.decidedAt)}${a.decidedBy ? ` by ${a.decidedBy}` : ''}` : ''}</span>
      </div>
      <dl style={{ display: 'grid', gridTemplateColumns: 'max-content minmax(0, 1fr)', gap: '2px 12px', fontSize: 14, margin: '8px 0' }}>
        <dt className="admin-muted">SACE number</dt><dd style={{ margin: 0 }}><code>{a.saceNumber}</code></dd>
        <dt className="admin-muted">School</dt><dd style={{ margin: 0 }}>{a.schoolName}{a.province ? `, ${a.province}` : ''}</dd>
        {a.subjectsNote && (<><dt className="admin-muted">Teaches</dt><dd style={{ margin: 0 }}>{a.subjectsNote}</dd></>)}
        {a.note && (<><dt className="admin-muted">Note</dt><dd style={{ margin: 0 }}>{a.note}</dd></>)}
      </dl>
      {(a.status === 'pending' || a.status === 'approved') && (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <input className="admin-input" aria-label={`Note for ${a.email}`} placeholder={a.status === 'pending' ? 'Note (shown to the applicant if you reject)' : 'Reason'} value={note} onChange={(e) => setNote(e.target.value)} maxLength={300} style={{ flex: '1 1 220px', minWidth: 0 }} />
          {a.status === 'pending' && <button type="button" className="admin-btn" disabled={busy} onClick={() => void decide('approve')}>Approve</button>}
          {a.status === 'pending' && <button type="button" className="admin-btn-danger" disabled={busy} onClick={() => void decide('reject')}>Reject</button>}
          {a.status === 'approved' && <button type="button" className="admin-btn-danger" disabled={busy} onClick={() => void decide('revoke')}>Remove teacher role</button>}
        </div>
      )}
      {err && <p role="alert" style={{ fontSize: 13, marginTop: 6 }}>{err}</p>}
    </li>
  );
}

export default function TeachersPage() {
  const [n, setN] = useState(0);
  const [filter, setFilter] = useState<'' | 'pending' | 'approved' | 'rejected'>('pending');
  const state = useAdminData<{ applications: AdminApplication[] }>('/api/admin/teachers', `status=${filter}&r=${n}`);
  return (
    <main style={{ maxWidth: 980, margin: '0 auto', padding: 16 }}>
      <h1 style={{ fontSize: 22, fontWeight: 700 }}>Teachers</h1>
      <p className="admin-secondary" style={{ fontSize: 14, marginTop: 4 }}>
        Teachers ask for the role from their account page. Check the SACE number and the school, then approve. The teacher role is granted only here.
      </p>
      <div role="group" aria-label="Filter" style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
        {(['pending', 'approved', 'rejected', ''] as const).map((f) => (
          <button key={f || 'all'} type="button" className="admin-btn" aria-pressed={filter === f} onClick={() => setFilter(f)}>{f ? BADGE[f] : 'All'}</button>
        ))}
      </div>
      {state.status === 'loading' && <p style={{ marginTop: 16 }}>Loading…</p>}
      {state.status === 'error' && <p role="alert" style={{ marginTop: 16 }}>Could not load the applications{state.code ? ` (${state.code})` : ''}.</p>}
      {state.status === 'ok' && (state.data.applications.length === 0
        ? <p className="admin-muted" style={{ marginTop: 16 }}>Nothing here.</p>
        : <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'grid', gap: 10 }}>{state.data.applications.map((a) => <Row key={a.userId} a={a} onDone={() => setN((x) => x + 1)} />)}</ul>)}
    </main>
  );
}
