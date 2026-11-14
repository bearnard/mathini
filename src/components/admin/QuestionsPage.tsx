'use client';

import { useState } from 'react';
import { REPORT_REASON_LABELS, REPORT_REASONS } from '../../lib/shared/questionReport';
import { formatInt } from './format';
import { useAdminData } from './useAdminData';
import type { QueueItem, RecentAction } from '../../lib/server/questions/moderation';

interface Data { queue: QueueItem[]; recent: RecentAction[] }
type Action = 'dismiss' | 'retire' | 'reinstate';

const when = (ms: number) => new Date(ms).toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg', dateStyle: 'medium', timeStyle: 'short' });

async function post(id: string, action: Action, reason: string): Promise<string | null> {
  try {
    const res = await fetch(`/api/admin/questions/${encodeURIComponent(id)}/${action}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Admin-Action': `question-${action}` },
      body: JSON.stringify({ reason }),
    });
    if (res.ok) return null;
    const body = (await res.json().catch(() => ({}))) as { error?: string };
    return body.error ?? 'That did not work';
  } catch {
    return 'That did not work';
  }
}

function Reasons({ item }: { item: QueueItem }) {
  const parts = REPORT_REASONS.filter((r) => item.reasons[r] > 0).map((r) => `${REPORT_REASON_LABELS[r]}: ${item.reasons[r]}`);
  return <p className="admin-muted" style={{ fontSize: 13, marginTop: 6 }}>{parts.join(' · ')}</p>;
}

function Card({ item, onDone }: { item: QueueItem; onDone: () => void }) {
  const [reason, setReason] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const ok = reason.trim().length >= 3;
  const act = async (a: Action) => {
    setBusy(true);
    setErr('');
    const e = await post(item.questionId, a, reason.trim());
    setBusy(false);
    if (e) setErr(e); else onDone();
  };
  const c = item.current;
  return (
    <article className="admin-card" style={{ padding: 16 }} aria-label={`Reported question in ${item.task}`}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'baseline', justifyContent: 'space-between' }}>
        <strong style={{ fontSize: 15 }}>{item.reporters} {item.reporters === 1 ? 'learner' : 'learners'} · {item.reports} {item.reports === 1 ? 'report' : 'reports'}</strong>
        <span className="admin-muted" style={{ fontSize: 12 }}>{item.task} · latest {when(item.latestAt)}</span>
      </div>
      <Reasons item={item} />

      {c ? (
        <div style={{ marginTop: 10 }}>
          <p style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.4 }}>{c.prompt}</p>
          <ul style={{ margin: '8px 0 0', paddingLeft: 18, fontSize: 14, lineHeight: 1.6 }}>
            {c.options.map((o) => (
              <li key={o} style={o === c.answer ? { fontWeight: 700 } : undefined}>{o}{o === c.answer ? '  ← answer key' : ''}</li>
            ))}
          </ul>
          {c.explanation && <p className="admin-muted" style={{ fontSize: 13, marginTop: 6 }}>Explanation: {c.explanation}</p>}
          <p className="admin-muted" style={{ fontSize: 12, marginTop: 6 }}>Version {c.versionNo} · source: {c.source}</p>
        </div>
      ) : (
        <div style={{ marginTop: 10 }}>
          <p style={{ fontSize: 14, fontWeight: 600 }}>This question is not in the database yet, so it cannot be retired from here.</p>
          {item.promptSnapshot && <p className="admin-muted" style={{ fontSize: 13, marginTop: 6 }}>As the learner’s browser reported it (unverified): “{item.promptSnapshot}”</p>}
        </div>
      )}

      <p style={{ fontSize: 13, marginTop: 10 }}>
        {item.stats.answers === 0 ? 'No recorded answers.' : <>{formatInt(item.stats.answers)} {item.stats.answers === 1 ? 'answer' : 'answers'}, <strong>{item.stats.pctCorrect}% correct</strong></>}
      </p>

      {item.notes.length > 0 && (
        <details style={{ marginTop: 8 }}>
          <summary style={{ cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>Notes from learners ({item.notes.length})</summary>
          <ul style={{ margin: '6px 0 0', paddingLeft: 18, fontSize: 13, lineHeight: 1.5 }}>
            {item.notes.map((n, i) => <li key={i}>“{n.note}” <span className="admin-muted">({REPORT_REASON_LABELS[n.reason]})</span></li>)}
          </ul>
        </details>
      )}

      <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
        <input className="admin-input" value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Reason (required)" aria-label="Reason for the decision" maxLength={300} style={{ flex: '1 1 220px', minWidth: 0 }} />
        <button type="button" className="admin-btn" disabled={!ok || busy} onClick={() => act('dismiss')}>Dismiss</button>
        <button type="button" className="admin-btn-danger" disabled={!ok || busy || !item.registered || item.status === 'retired'} onClick={() => act('retire')}>{item.status === 'retired' ? 'Already retired' : 'Retire'}</button>
      </div>
      {err && <p role="alert" style={{ fontSize: 13, marginTop: 8, fontWeight: 600 }}>{err}</p>}
    </article>
  );
}

function Recent({ items, onDone }: { items: RecentAction[]; onDone: () => void }) {
  const [busy, setBusy] = useState('');
  const [err, setErr] = useState('');
  const reinstate = async (id: string) => {
    const reason = window.prompt('Why are you putting this question back? (required)')?.trim();
    if (!reason || reason.length < 3) return;
    setBusy(id);
    setErr('');
    const e = await post(id, 'reinstate', reason);
    setBusy('');
    if (e) setErr(e); else onDone();
  };
  return (
    <section style={{ marginTop: 24 }} aria-label="Recent decisions">
      <h2 style={{ fontSize: 17, fontWeight: 700 }}>Recent decisions</h2>
      {items.length === 0 ? <p className="admin-muted" style={{ fontSize: 14, marginTop: 6 }}>None yet.</p> : (
        <ul style={{ listStyle: 'none', margin: '8px 0 0', padding: 0, display: 'grid', gap: 8 }}>
          {items.map((r, i) => (
            <li key={i} className="admin-card" style={{ padding: 12, fontSize: 13 }}>
              <strong style={{ textTransform: 'capitalize' }}>{r.action}</strong> · {when(r.at)} · <span className="admin-muted">{r.by}</span>
              {r.prompt && <div style={{ marginTop: 4 }}>{r.prompt}</div>}
              <div className="admin-muted" style={{ marginTop: 4 }}>Reason: {r.reason}</div>
              {r.canReinstate && <button type="button" className="admin-btn" style={{ marginTop: 8 }} disabled={busy === r.questionId} onClick={() => reinstate(r.questionId)}>Reinstate</button>}
            </li>
          ))}
        </ul>
      )}
      {err && <p role="alert" style={{ fontSize: 13, marginTop: 8, fontWeight: 600 }}>{err}</p>}
    </section>
  );
}

export default function QuestionsPage() {
  const [n, setN] = useState(0);
  const state = useAdminData<Data>('/api/admin/questions/reports', `v=${n}`);
  const refresh = () => setN((x) => x + 1);
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '16px' }}>
      <h1 style={{ fontSize: 22, fontWeight: 700 }}>Reported questions</h1>
      <p className="admin-muted" style={{ fontSize: 13, marginTop: 4, lineHeight: 1.5 }}>
        Ranked by how many different learners reported the question, then by how many answers it has. Notes are written by children: read them here only, and do not copy them anywhere public.
        Retiring a question stops it being shown; learners already on the page see the change on their next visit.
      </p>
      {state.status === 'loading' && <p style={{ marginTop: 16 }}>Loading…</p>}
      {state.status === 'error' && <p role="alert" style={{ marginTop: 16 }}>Sorry, the reports could not be loaded.</p>}
      {state.status === 'ok' && (
        <>
          {state.data.queue.length === 0 ? (
            <p className="admin-card" style={{ padding: 16, marginTop: 16 }}>No open reports. 🎉</p>
          ) : (
            <div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
              {state.data.queue.map((q) => <Card key={q.questionId} item={q} onDone={refresh} />)}
            </div>
          )}
          <Recent items={state.data.recent} onDone={refresh} />
        </>
      )}
    </main>
  );
}
