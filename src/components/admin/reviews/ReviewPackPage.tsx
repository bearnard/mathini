'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAdminData } from '../useAdminData';
import { postJson, when, type Failure } from './api';
import type { PackResults, ResultItem } from '../../../lib/server/teacherReview/adminStore';
import type { DecisionKind, Proposal, QuestionProposal, ReviewResponse } from '../../../lib/shared/teacherReview/types';

const DECISION_TEXT: Record<DecisionKind, string> = {
  accept_merged: 'Accepted the merged version', accept_reviewer: 'Accepted one reviewer’s version', edit_accept: 'Edited, then accepted', keep_original: 'Kept the original', ask_again: 'Asked again in a new pack',
};
const VERDICT_TEXT = { correct: 'Correct as is', change: 'Suggests a change', unsure: 'Not sure' } as const;
const CONF_TEXT = { sure: 'sure', fairly_sure: 'fairly sure' } as const;

const isQ = (p: Proposal | null): p is QuestionProposal => !!p && 'prompt' in p;

function Content({ p, answerKey }: { p: Proposal; answerKey?: boolean }) {
  if (!isQ(p)) return <p style={{ fontSize: 14 }}>“{p.text}”</p>;
  return (
    <div style={{ fontSize: 14 }}>
      <p style={{ fontWeight: 600 }}>{p.prompt}</p>
      <ul style={{ margin: '4px 0 0', paddingLeft: 18, lineHeight: 1.5 }}>
        {p.options.map((o) => <li key={o} style={o === p.answer ? { fontWeight: 700 } : undefined}>{o}{o === p.answer ? (answerKey ? '  ← answer key' : '  ← key') : ''}</li>)}
      </ul>
      {p.explanation && <p className="admin-muted" style={{ fontSize: 13, marginTop: 4 }}>Explanation: {p.explanation}</p>}
    </div>
  );
}

function Editor({ start, isQuestion, onSubmit, onCancel, busy }: { start: Proposal; isQuestion: boolean; onSubmit: (p: Proposal) => void; onCancel: () => void; busy: boolean }) {
  const q = isQ(start) ? start : { prompt: '', options: [], answer: '', explanation: '' };
  const [prompt, setPrompt] = useState(q.prompt);
  const [options, setOptions] = useState(q.options.join('\n'));
  const [answer, setAnswer] = useState(q.answer);
  const [explanation, setExplanation] = useState(q.explanation);
  const [text, setText] = useState(isQ(start) ? '' : start.text);
  const opts = options.split('\n').map((o) => o.trim()).filter(Boolean);
  if (!isQuestion) {
    return (
      <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
        <label style={{ fontSize: 13 }}>New text<textarea className="admin-input" rows={3} value={text} onChange={(e) => setText(e.target.value)} style={{ display: 'block', width: '100%', marginTop: 4 }} /></label>
        <div style={{ display: 'flex', gap: 8 }}>
          <button type="button" className="admin-btn" disabled={busy || !text.trim()} onClick={() => onSubmit({ text })}>Accept this text</button>
          <button type="button" className="admin-btn" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    );
  }
  return (
    <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
      <label style={{ fontSize: 13 }}>Question<textarea className="admin-input" rows={2} value={prompt} onChange={(e) => setPrompt(e.target.value)} style={{ display: 'block', width: '100%', marginTop: 4 }} /></label>
      <label style={{ fontSize: 13 }}>Options (one per line)<textarea className="admin-input" rows={4} value={options} onChange={(e) => setOptions(e.target.value)} style={{ display: 'block', width: '100%', marginTop: 4 }} /></label>
      <label style={{ fontSize: 13 }}>Answer key
        <select className="admin-input" value={answer} onChange={(e) => setAnswer(e.target.value)} style={{ display: 'block', marginTop: 4, maxWidth: '100%' }}>
          <option value="">Choose…</option>
          {opts.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </label>
      <label style={{ fontSize: 13 }}>Explanation<textarea className="admin-input" rows={2} value={explanation} onChange={(e) => setExplanation(e.target.value)} style={{ display: 'block', width: '100%', marginTop: 4 }} /></label>
      <div style={{ display: 'flex', gap: 8 }}>
        <button type="button" className="admin-btn" disabled={busy || !prompt.trim() || opts.length < 2 || !opts.includes(answer)} onClick={() => onSubmit({ prompt, options: opts, answer, explanation })}>Accept this version</button>
        <button type="button" className="admin-btn" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

function Responses({ list }: { list: (ReviewResponse & { displayName: string })[] }) {
  if (list.length === 0) return <p className="admin-muted" style={{ fontSize: 13, marginTop: 8 }}>No answers yet.</p>;
  return (
    <div style={{ display: 'grid', gap: 8, marginTop: 8, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }} aria-label="Reviewer answers">
      {list.map((r) => (
        <div key={r.reviewerId} className="admin-card" style={{ padding: 10 }}>
          <strong style={{ fontSize: 13 }}>{r.label}{r.displayName ? ` · ${r.displayName}` : ''}</strong>
          <div style={{ fontSize: 13, marginTop: 2 }}>{VERDICT_TEXT[r.verdict]}{r.confidence ? ` (${CONF_TEXT[r.confidence]})` : ''}</div>
          {r.reason && <p className="admin-muted" style={{ fontSize: 13, marginTop: 4 }}>“{r.reason}”</p>}
          {r.proposal && <div style={{ marginTop: 6 }}><Content p={r.proposal} /></div>}
        </div>
      ))}
    </div>
  );
}

function ItemCard({ item, n, packId, onDone }: { item: ResultItem; n: number; packId: number; onDone: () => void }) {
  const [editing, setEditing] = useState(false);
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState('');
  const [changeKind, setChangeKind] = useState<'wording' | 'meaning'>('wording');
  const [failure, setFailure] = useState<Failure | null>(null);
  const [ack, setAck] = useState(false);
  const [info, setInfo] = useState('');
  const original: Proposal | null = item.question ? { prompt: item.question.prompt, options: item.question.options, answer: item.question.answer, explanation: item.question.explanation } : item.anchorText ? { text: item.anchorText } : null;
  const changers = item.responses.filter((r) => r.verdict === 'change' && r.proposal);
  const stale = !!item.question && item.question.currentVersionId !== item.question.versionId;
  const decidable = !item.decision || item.decision.decision === 'ask_again';

  const decide = async (body: Record<string, unknown>) => {
    setBusy(true); setFailure(null); setInfo('');
    const r = await postJson(`/api/admin/reviews/${packId}/items/${item.id}/decide`, 'review-decide', { ...body, note, changeKind, acknowledgeWarnings: ack });
    setBusy(false);
    if (!r.ok) return setFailure(r.failure);
    if (typeof r.data.askAgainPackId === 'number') setInfo(`Added to pack ${r.data.askAgainPackId}`);
    setEditing(false);
    onDone();
  };

  return (
    <article className="admin-card" style={{ padding: 16 }} aria-label={`Item ${n}`}>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <strong style={{ fontSize: 14 }}>{n}. {item.kind === 'question' ? 'Question' : 'Lesson line'}</strong>
        <span style={{ fontSize: 13, fontWeight: 600 }} role="status">{item.agreement.label}</span>
      </div>
      {item.doubt && <p style={{ fontSize: 13, marginTop: 4 }}><strong>Doubt:</strong> {item.doubt}</p>}
      <div style={{ marginTop: 8 }}>
        {item.question && <><Content p={{ prompt: item.question.prompt, options: item.question.options, answer: item.question.answer, explanation: item.question.explanation }} answerKey /><p className="admin-muted" style={{ fontSize: 12, marginTop: 4 }}>{item.question.subject} G{item.question.grade ?? '?'} · {item.question.topic} · id {item.question.questionId}</p></>}
        {item.kind === 'lesson_line' && item.anchorText && <><Content p={{ text: item.anchorText }} /><p className="admin-muted" style={{ fontSize: 12, marginTop: 4 }}>{item.file}</p></>}
      </div>
      {stale && <p role="alert" style={{ fontSize: 13, marginTop: 8, fontWeight: 600 }}>This question was edited after the pack was made; changes cannot be accepted. Keep the original or ask again.</p>}
      <Responses list={item.responses} />
      <p className="admin-muted" style={{ fontSize: 12, marginTop: 8 }} data-merge-hook>AI merge suggestion: not available yet. {item.merged ? 'Every reviewer who suggested a change suggested the same one, so it is offered as the merged version.' : ''}</p>

      {item.decision && (
        <p style={{ fontSize: 13, marginTop: 8, fontWeight: 600 }}>
          {DECISION_TEXT[item.decision.decision]} · {item.decision.decidedBy} · {when(item.decision.decidedAt)}
          {item.decision.appliedVersionId != null ? ` · live as version id ${item.decision.appliedVersionId}` : ''}
          {item.decision.changeQueueId != null ? ` · queued as lesson change ${item.decision.changeQueueId}` : ''}
        </p>
      )}

      {decidable && !editing && (
        <div style={{ marginTop: 10, display: 'grid', gap: 8 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            <input className="admin-input" aria-label="Note for the audit trail" placeholder="Note (optional)" value={note} onChange={(e) => setNote(e.target.value)} maxLength={120} style={{ flex: '1 1 200px', minWidth: 0 }} />
            {item.kind === 'question' && (
              <label style={{ fontSize: 13 }}>Change is a <select className="admin-input" value={changeKind} onChange={(e) => setChangeKind(e.target.value as 'wording' | 'meaning')}><option value="wording">wording fix</option><option value="meaning">change of meaning</option></select></label>
            )}
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button type="button" className="admin-btn" disabled={busy || stale || !item.merged} onClick={() => decide({ decision: 'accept_merged' })}>Accept merged</button>
            {changers.map((r) => <button key={r.reviewerId} type="button" className="admin-btn" disabled={busy || stale} onClick={() => decide({ decision: 'accept_reviewer', reviewerId: r.reviewerId })}>Accept {r.label}’s</button>)}
            <button type="button" className="admin-btn" disabled={busy || stale || !original} onClick={() => setEditing(true)}>Edit then accept</button>
            <button type="button" className="admin-btn" disabled={busy} onClick={() => decide({ decision: 'keep_original' })}>Keep original</button>
            <button type="button" className="admin-btn" disabled={busy} onClick={() => decide({ decision: 'ask_again' })}>Ask again</button>
          </div>
        </div>
      )}
      {editing && original && <Editor start={item.merged ?? changers[0]?.proposal ?? original} isQuestion={item.kind === 'question'} busy={busy} onCancel={() => setEditing(false)} onSubmit={(p) => decide({ decision: 'edit_accept', proposal: p })} />}
      {failure && (
        <div role="alert" style={{ marginTop: 8, fontSize: 13 }}>
          <strong>{failure.error}</strong>
          {failure.findings && <ul style={{ margin: '4px 0 0', paddingLeft: 18 }}>{failure.findings.map((f, i) => <li key={i}>{f.severity}: {f.detail}</li>)}</ul>}
          {failure.needsAcknowledgement && <label style={{ display: 'flex', gap: 6, marginTop: 6 }}><input type="checkbox" checked={ack} onChange={(e) => setAck(e.target.checked)} />Save anyway, I have read the warnings</label>}
        </div>
      )}
      {info && <p role="status" style={{ fontSize: 13, marginTop: 8 }}>{info}</p>}
    </article>
  );
}

function Reviewers({ data, onDone }: { data: PackResults; onDone: () => void }) {
  const [name, setName] = useState('');
  const [note, setNote] = useState('');
  const [days, setDays] = useState('14');
  const [link, setLink] = useState<{ name: string; url: string } | null>(null);
  const [err, setErr] = useState('');
  const [copied, setCopied] = useState(false);
  const open = data.pack.status === 'open';
  const now = Date.now();

  const invite = async () => {
    setErr(''); setCopied(false);
    const r = await postJson(`/api/admin/reviews/${data.pack.id}/invite`, 'review-invite', { displayName: name, note, days: Number(days) });
    if (!r.ok) return setErr(r.failure.error);
    setLink({ name, url: `${window.location.origin}/review/${String(r.data.token)}` });
    setName(''); setNote('');
    onDone();
  };
  const revoke = async (id: number, label: string) => {
    if (!window.confirm(`Revoke ${label}'s link? It stops working at once.`)) return;
    const r = await postJson(`/api/admin/reviews/${data.pack.id}/revoke`, 'review-revoke', { reviewerId: id });
    if (!r.ok) setErr(r.failure.error); else onDone();
  };
  const state = (r: PackResults['reviewers'][number]) => (r.revokedAt ? 'revoked' : r.expiresAt < now ? 'expired' : r.doneAt ? 'finished' : r.lastSeenAt ? 'in progress' : 'not opened');

  return (
    <section className="admin-card" style={{ padding: 16, marginTop: 16 }} aria-label="Reviewers">
      <h2 style={{ fontSize: 17, fontWeight: 700 }}>Reviewers</h2>
      {data.reviewers.length === 0 ? <p className="admin-muted" style={{ fontSize: 13, marginTop: 6 }}>Nobody invited yet.</p> : (
        <ul style={{ listStyle: 'none', margin: '8px 0 0', padding: 0, display: 'grid', gap: 6 }}>
          {data.reviewers.map((r) => (
            <li key={r.id} style={{ fontSize: 13, display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
              <span><strong>{r.label}</strong> · {r.displayName}{r.note ? ` (${r.note})` : ''} · {state(r)} · {r.answered}/{data.items.length} answered · link ends {when(r.expiresAt)}</span>
              {!r.revokedAt && <button type="button" className="admin-btn-danger" onClick={() => revoke(r.id, r.label)}>Revoke</button>}
            </li>
          ))}
        </ul>
      )}
      {open && (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'end', marginTop: 12 }}>
          <label style={{ fontSize: 13 }}>Display name<input className="admin-input" value={name} onChange={(e) => setName(e.target.value)} maxLength={60} placeholder="Ms N." style={{ display: 'block', marginTop: 4, width: 140 }} /></label>
          <label style={{ fontSize: 13, flex: '1 1 180px' }}>Note (optional)<input className="admin-input" value={note} onChange={(e) => setNote(e.target.value)} maxLength={200} placeholder="WhatsApp number or school" style={{ display: 'block', marginTop: 4, width: '100%' }} /></label>
          <label style={{ fontSize: 13 }}>Days<input className="admin-input" inputMode="numeric" value={days} onChange={(e) => setDays(e.target.value)} style={{ display: 'block', marginTop: 4, width: 60 }} /></label>
          <button type="button" className="admin-btn" disabled={!name.trim()} onClick={invite}>Create link</button>
        </div>
      )}
      {err && <p role="alert" style={{ fontSize: 13, marginTop: 8, fontWeight: 600 }}>{err}</p>}
      {link && (
        <div role="status" className="admin-card" style={{ padding: 12, marginTop: 12 }}>
          <strong style={{ fontSize: 13 }}>Link for {link.name}. Copy it now: it is shown once and cannot be recovered.</strong>
          <input className="admin-input" readOnly aria-label="Reviewer link" value={link.url} onFocus={(e) => e.currentTarget.select()} style={{ display: 'block', width: '100%', marginTop: 6 }} />
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            <button type="button" className="admin-btn" onClick={() => { void navigator.clipboard?.writeText(link.url).then(() => setCopied(true), () => setCopied(false)); }}>{copied ? 'Copied' : 'Copy'}</button>
            <button type="button" className="admin-btn" onClick={() => setLink(null)}>I have copied it, hide</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default function ReviewPackPage({ packId }: { packId: string }) {
  const [n, setN] = useState(0);
  const [filter, setFilter] = useState<'all' | 'undecided' | 'changes' | 'disagree'>('all');
  const state = useAdminData<PackResults>(`/api/admin/reviews/${encodeURIComponent(packId)}`, `r=${n}`);
  const reload = () => setN((x) => x + 1);
  return (
    <main style={{ maxWidth: 1180, margin: '0 auto', padding: '16px' }}>
      <p style={{ fontSize: 13 }}><Link href="/admin/reviews" className="admin-link">← All packs</Link></p>
      {state.status === 'loading' && <p style={{ marginTop: 16 }}>Loading…</p>}
      {state.status === 'error' && <p role="alert" style={{ marginTop: 16 }}>{state.code === 404 ? 'That pack does not exist.' : 'Could not load the pack.'}</p>}
      {state.status === 'ok' && (() => {
        const d = state.data;
        const shown = d.items.map((it, i) => ({ it, i })).filter(({ it }) => filter === 'all' ? true : filter === 'undecided' ? !it.decision || it.decision.decision === 'ask_again' : filter === 'changes' ? it.agreement.change > 0 : it.agreement.state === 'disagree');
        const decided = d.items.filter((i) => i.decision && i.decision.decision !== 'ask_again').length;
        const close = async () => {
          if (!window.confirm('Close this pack? No more links can be made. Existing links keep working until they end.')) return;
          const r = await postJson(`/api/admin/reviews/${d.pack.id}/close`, 'review-close', {});
          if (r.ok) reload();
        };
        return (
          <>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
              <h1 style={{ fontSize: 22, fontWeight: 700 }}>{d.pack.title}</h1>
              {d.pack.status === 'open' ? <button type="button" className="admin-btn" onClick={close}>Close pack</button> : <span className="admin-muted">Closed</span>}
            </div>
            <p className="admin-secondary" style={{ fontSize: 13, marginTop: 4 }}>{d.items.length} items · {decided} decided · created {when(d.pack.createdAt)}</p>
            <Reviewers data={d} onDone={reload} />
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 16 }} role="group" aria-label="Show items">
              {(['all', 'undecided', 'changes', 'disagree'] as const).map((f) => (
                <button key={f} type="button" className="admin-btn" aria-pressed={filter === f} onClick={() => setFilter(f)}>{{ all: 'All', undecided: 'Not decided', changes: 'With suggestions', disagree: 'Disagreements' }[f]}</button>
              ))}
            </div>
            <div style={{ display: 'grid', gap: 12, marginTop: 12 }}>
              {shown.length === 0 ? <p className="admin-muted">Nothing matches.</p> : shown.map(({ it, i }) => <ItemCard key={it.id} item={it} n={i + 1} packId={d.pack.id} onDone={reload} />)}
            </div>
          </>
        );
      })()}
    </main>
  );
}
