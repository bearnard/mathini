'use client';
// ADR 0003 sections 1 and 4: the owner's queue of teacher proposals, and the moderator groups. Until a group has 5 moderators the owner decides
// its proposals; every approve or reject needs a reason. Approving applies the change through the normal edit pipeline.
import { useState } from 'react';
import AdminDiscussion from './AdminDiscussion';
import { useAdminData } from '../useAdminData';
import { postJson, when } from '../reviews/api';
import { SOURCE_LABEL, MODERATOR_THRESHOLD, type SourceKind } from '../../../lib/shared/moderation';
import type { ProposalView } from '../../../lib/server/moderation/views';
import type { GroupRow } from '../../../lib/server/moderation/groups';

const KIND: Record<string, string> = { edit: 'Change', retire: 'Retire', new: 'New question' };
const FILTERS = [['waiting', 'Waiting'], ['approved', 'Accepted'], ['rejected', 'Not accepted'], ['stale', 'Out of date'], ['returned', 'Sent back'], ['all', 'All']] as const;

const Mcq = ({ c, label }: { c: { prompt: string; options: string[]; answer: string; explanation: string }; label: string }) => (
  <div style={{ minWidth: 0, overflowWrap: 'anywhere', fontSize: 14 }}>
    <div className="admin-muted" style={{ fontSize: 12, fontWeight: 600 }}>{label}</div>
    <p style={{ margin: '2px 0', fontWeight: 600 }}>{c.prompt}</p>
    <ul style={{ margin: 0, paddingLeft: 18 }}>{c.options.map((o) => <li key={o}>{o === c.answer ? <strong>{o} ✓</strong> : o}</li>)}</ul>
    {c.explanation && <p className="admin-muted" style={{ margin: '4px 0 0' }}>{c.explanation}</p>}
  </div>
);

function Card({ p, onDone }: { p: ProposalView; onDone: () => void }) {
  const [reason, setReason] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const [talk, setTalk] = useState(false);
  const decide = async (decision: 'approve' | 'reject') => {
    if (!window.confirm(decision === 'approve' ? 'Approve and apply this change to the question bank?' : 'Reject this proposal?')) return;
    setBusy(true); setErr('');
    const r = await postJson(`/api/admin/proposals/${p.id}/decide`, 'proposal-decide', { decision, reason });
    setBusy(false);
    if (r.ok) onDone(); else setErr(r.failure.error + (r.failure.findings?.length ? `: ${r.failure.findings.map((f) => f.detail).join('; ')}` : ''));
  };
  return (
    <li className="admin-card" style={{ padding: 12, minWidth: 0 }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'baseline' }}>
        <strong>{KIND[p.kind]}</strong>
        <span className="admin-muted" style={{ fontSize: 13 }}>{p.groupTitle} · {p.author}{p.authorEmail ? ` (${p.authorEmail})` : ''} · {when(p.createdAt)} · {p.status}</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12, margin: '10px 0' }}>
        {p.current && <Mcq c={p.current} label={p.kind === 'retire' ? 'This question' : 'Now'} />}
        {p.proposed && <Mcq c={p.proposed} label={p.kind === 'new' ? 'Proposed question' : 'Proposed'} />}
      </div>
      <p style={{ fontSize: 14, margin: '4px 0', overflowWrap: 'anywhere' }}><strong>Why:</strong> {p.reason}</p>
      <p style={{ fontSize: 14, margin: '4px 0', overflowWrap: 'anywhere' }}><strong>Source:</strong> {SOURCE_LABEL[p.sourceKind as SourceKind]}, {p.sourceRef}</p>
      {p.findings.filter((f) => f.severity === 'warn').length > 0 && <p className="admin-muted" style={{ fontSize: 13 }}>Checker warnings: {p.findings.filter((f) => f.severity === 'warn').map((f) => f.detail).join('; ')}</p>}
      <p className="admin-muted" style={{ fontSize: 13 }}>{p.comments} comment{p.comments === 1 ? '' : 's'} in the discussion. This group has {p.moderators} of {MODERATOR_THRESHOLD} moderators{p.selfGoverning ? ', so its moderators can decide too' : ', so the owner decides'}.</p>
      {p.status === 'submitted' ? (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', marginTop: 6 }}>
          <input className="admin-input" aria-label="Reason" placeholder="Reason (required, shown in the audit)" value={reason} onChange={(e) => setReason(e.target.value)} maxLength={400} style={{ flex: '1 1 240px', minWidth: 0 }} />
          <button type="button" className="admin-btn" disabled={busy || reason.trim().length < 3} onClick={() => void decide('approve')}>Approve</button>
          <button type="button" className="admin-btn-danger" disabled={busy || reason.trim().length < 3} onClick={() => void decide('reject')}>Reject</button>
        </div>
      ) : p.decisionReason ? <p style={{ fontSize: 14 }}><strong>Decision ({p.decidedBy}):</strong> {p.decisionReason}</p> : null}
      <button type="button" className="admin-btn" style={{ marginTop: 6 }} aria-expanded={talk} onClick={() => setTalk((t) => !t)}>{talk ? 'Hide discussion' : 'Discussion'}</button>
      {talk && <AdminDiscussion target={{ proposal: p.id }} />}
      {err && <p role="alert" style={{ fontSize: 13, marginTop: 6 }}>{err}</p>}
    </li>
  );
}

function Queue() {
  const [n, setN] = useState(0);
  const [filter, setFilter] = useState<(typeof FILTERS)[number][0]>('waiting');
  const state = useAdminData<{ proposals: ProposalView[] }>('/api/admin/proposals', `status=${filter}&r=${n}`);
  return (
    <section aria-label="Proposals">
      <div role="group" aria-label="Filter" style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
        {FILTERS.map(([f, label]) => <button key={f} type="button" className="admin-btn" aria-pressed={filter === f} onClick={() => setFilter(f)}>{label}</button>)}
      </div>
      {state.status === 'loading' && <p style={{ marginTop: 16 }}>Loading…</p>}
      {state.status === 'error' && <p role="alert" style={{ marginTop: 16 }}>Could not load the proposals{state.code ? ` (${state.code})` : ''}.</p>}
      {state.status === 'ok' && (state.data.proposals.length === 0
        ? <p className="admin-muted" style={{ marginTop: 16 }}>Nothing here.</p>
        : <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'grid', gap: 10 }}>{state.data.proposals.map((p) => <Card key={p.id} p={p} onDone={() => setN((x) => x + 1)} />)}</ul>)}
    </section>
  );
}

function Groups() {
  const [n, setN] = useState(0);
  const [pick, setPick] = useState<Record<string, string>>({});
  const [err, setErr] = useState('');
  const state = useAdminData<{ groups: GroupRow[]; candidates: { userId: string; email: string; points: number; eligible: boolean }[] }>('/api/admin/moderators', `r=${n}`);
  const act = async (action: 'appoint' | 'remove', groupKey: string, userId: string) => {
    if (!userId) return;
    if (!window.confirm(action === 'appoint' ? 'Appoint this teacher as a moderator of this group?' : 'Remove this moderator?')) return;
    setErr('');
    const r = await postJson('/api/admin/moderators', 'moderator-manage', { action, groupKey, userId });
    if (r.ok) setN((x) => x + 1); else setErr(r.failure.error);
  };
  if (state.status === 'loading') return <p style={{ marginTop: 16 }}>Loading…</p>;
  if (state.status === 'error') return <p role="alert" style={{ marginTop: 16 }}>Could not load the groups{state.code ? ` (${state.code})` : ''}.</p>;
  const { groups, candidates } = state.data;
  return (
    <section aria-label="Moderator groups" style={{ marginTop: 12 }}>
      <p className="admin-secondary" style={{ fontSize: 14 }}>Appoint approved teachers to a subject and phase. Until a group has {MODERATOR_THRESHOLD} moderators you approve its proposals; after that one moderator can. Points are only a guide.</p>
      {err && <p role="alert" style={{ fontSize: 13 }}>{err}</p>}
      <ul style={{ listStyle: 'none', margin: '12px 0 0', padding: 0, display: 'grid', gap: 8 }}>
        {groups.map((g) => (
          <li key={g.groupKey} className="admin-card" style={{ padding: 10, minWidth: 0 }}>
            <strong>{g.subject} · {g.phase}</strong> <span className="admin-muted" style={{ fontSize: 13 }}>{g.moderators.length} of {MODERATOR_THRESHOLD}{g.selfGoverning ? ' · moderators decide' : ' · owner decides'}</span>
            <ul style={{ margin: '6px 0', paddingLeft: 18, fontSize: 14 }}>
              {g.moderators.map((m) => <li key={m.userId} style={{ overflowWrap: 'anywhere' }}>{m.email} · {m.points} points <button type="button" className="admin-btn-danger" onClick={() => void act('remove', g.groupKey, m.userId)}>Remove</button></li>)}
            </ul>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <select className="admin-input" aria-label={`Appoint to ${g.subject} ${g.phase}`} value={pick[g.groupKey] ?? ''} onChange={(e) => setPick({ ...pick, [g.groupKey]: e.target.value })} style={{ flex: '1 1 220px', minWidth: 0 }}>
                <option value="">Choose a teacher…</option>
                {candidates.filter((c) => !g.moderators.some((m) => m.userId === c.userId)).map((c) => <option key={c.userId} value={c.userId}>{c.email} ({c.points} points{c.eligible ? '' : ', not yet 30'})</option>)}
              </select>
              <button type="button" className="admin-btn" disabled={!pick[g.groupKey]} onClick={() => void act('appoint', g.groupKey, pick[g.groupKey])}>Appoint</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ProposalsPage() {
  const [tab, setTab] = useState<'queue' | 'groups'>('queue');
  return (
    <main style={{ maxWidth: 980, margin: '0 auto', padding: 16 }}>
      <h1 style={{ fontSize: 22, fontWeight: 700 }}>Teacher proposals</h1>
      <div role="group" aria-label="View" style={{ display: 'flex', gap: 6, marginTop: 12 }}>
        <button type="button" className="admin-btn" aria-pressed={tab === 'queue'} onClick={() => setTab('queue')}>Proposals</button>
        <button type="button" className="admin-btn" aria-pressed={tab === 'groups'} onClick={() => setTab('groups')}>Moderator groups</button>
      </div>
      {tab === 'queue' ? <Queue /> : <Groups />}
    </main>
  );
}
