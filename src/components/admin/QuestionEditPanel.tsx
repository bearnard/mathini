'use client';

import { useEffect, useMemo, useState } from 'react';
import { checkQuestion, type Reason } from '../../lib/shared/questionQuality';
import { EDIT_LIMITS, changedFields, isMeaningChange, sameContent } from '../../lib/shared/questionEdit';
import type { QuestionDetail } from '../../lib/server/questions/edit';

const when = (ms: number) => new Date(ms).toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg', dateStyle: 'medium', timeStyle: 'short' });

interface Failure { error: string; findings: Reason[] | null; needsAcknowledgement: boolean }

async function send(url: string, action: string, body: unknown): Promise<{ ok: true; data: Record<string, unknown> } | { ok: false; failure: Failure }> {
  try {
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Admin-Action': action }, body: JSON.stringify(body) });
    const data = (await res.json().catch(() => ({}))) as Record<string, unknown>;
    if (res.ok) return { ok: true, data };
    return { ok: false, failure: { error: String(data.error ?? 'That did not work'), findings: (data.findings as Reason[] | null) ?? null, needsAcknowledgement: data.needsAcknowledgement === true } };
  } catch {
    return { ok: false, failure: { error: 'That did not work', findings: null, needsAcknowledgement: false } };
  }
}

function Findings({ list }: { list: Reason[] }) {
  if (list.length === 0) return <p style={{ fontSize: 13, marginTop: 6 }} role="status">The quality checker is happy with this wording.</p>;
  return (
    <ul aria-label="Quality checker" style={{ margin: '6px 0 0', paddingLeft: 18, fontSize: 13, lineHeight: 1.5, listStyleType: 'disc' }}>
      {list.map((r, i) => (
        <li key={i} style={{ fontWeight: r.severity === 'reject' ? 700 : 400 }}>
          <span style={{ textTransform: 'uppercase', fontSize: 11 }}>{r.severity === 'reject' ? 'Blocks saving' : 'Warning'}</span> {r.detail}
        </li>
      ))}
    </ul>
  );
}

export default function QuestionEditPanel({ questionId, onDone, onClose }: { questionId: string; onDone: () => void; onClose: () => void }) {
  const [detail, setDetail] = useState<QuestionDetail | null>(null);
  const [loadErr, setLoadErr] = useState('');
  const [prompt, setPrompt] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [answerIdx, setAnswerIdx] = useState(0);
  const [explanation, setExplanation] = useState('');
  const [note, setNote] = useState('');
  const [kind, setKind] = useState<'wording' | 'meaning'>('wording');
  const [ack, setAck] = useState(false);
  const [busy, setBusy] = useState(false);
  const [failure, setFailure] = useState<Failure | null>(null);
  const [saved, setSaved] = useState('');
  const [n, setN] = useState(0);

  useEffect(() => {
    let live = true;
    (async () => {
      try {
        const res = await fetch(`/api/admin/questions/${encodeURIComponent(questionId)}`, { cache: 'no-store' });
        if (!res.ok) throw new Error(String(res.status));
        const d = (await res.json()) as QuestionDetail;
        if (!live) return;
        setDetail(d);
        setPrompt(d.current.prompt);
        setOptions(d.current.options);
        setAnswerIdx(Math.max(0, d.current.options.indexOf(d.current.answer)));
        setExplanation(d.current.explanation);
        setNote('');
        setKind('wording');
        setAck(false);
        setFailure(null);
      } catch {
        if (live) setLoadErr('This question could not be loaded. It may not be in the database yet.');
      }
    })();
    return () => { live = false; };
  }, [questionId, n]);

  const next = useMemo(() => ({ prompt: prompt.trim(), options: options.map((o) => o.trim()), answer: (options[answerIdx] ?? '').trim(), explanation: explanation.trim() }), [prompt, options, answerIdx, explanation]);
  const live = useMemo(() => checkQuestion(next), [next]);
  if (loadErr) return <p role="alert" style={{ fontSize: 13, marginTop: 8, fontWeight: 600 }}>{loadErr}</p>;
  if (!detail) return <p style={{ fontSize: 13, marginTop: 8 }}>Loading…</p>;
  if (!detail.editable) return <p role="alert" style={{ fontSize: 13, marginTop: 8, fontWeight: 600 }}>{detail.notEditableReason}</p>;

  const cur = detail.current;
  const changed = !sameContent(cur, next);
  const fields = changed ? changedFields(cur, next) : [];
  const meaning = changed && isMeaningChange(cur, next);
  const noteOk = note.trim().length >= EDIT_LIMITS.minNote;
  const shapeOk = next.prompt.length > 0 && next.options.length >= EDIT_LIMITS.minOptions && next.options.every(Boolean) && next.answer.length > 0;
  const rejected = live.reasons.some((r) => r.severity === 'reject');
  const warned = live.reasons.some((r) => r.severity === 'warn');
  const canSave = changed && shapeOk && noteOk && !rejected && (!warned || ack) && !busy;

  const save = async () => {
    setBusy(true); setFailure(null); setSaved('');
    const r = await send(`/api/admin/questions/${encodeURIComponent(questionId)}/edit`, 'question-edit', { expectedVersionId: cur.id, ...next, sourceNote: note.trim(), changeKind: meaning ? 'meaning' : kind, acknowledgeWarnings: ack });
    setBusy(false);
    if (!r.ok) { setFailure(r.failure); return; }
    const reset = Number(r.data.reviewsReset ?? 0);
    setSaved(`Saved as version ${String(r.data.versionNo)}. Learners get it on their next question fetch (within a minute).${reset ? ` ${reset} review ${reset === 1 ? 'box was' : 'boxes were'} reset.` : ''}`);
    setN((x) => x + 1);
    onDone();
  };

  const restore = async (v: QuestionDetail['versions'][number]) => {
    const reason = window.prompt(`Why are you restoring version ${v.versionNo}? (required)`)?.trim();
    if (!reason || reason.length < EDIT_LIMITS.minNote) return;
    setBusy(true); setFailure(null); setSaved('');
    const r = await send(`/api/admin/questions/${encodeURIComponent(questionId)}/restore`, 'question-restore', { expectedVersionId: cur.id, versionId: v.id, reason });
    setBusy(false);
    if (!r.ok) { setFailure(r.failure); return; }
    setSaved(`Restored as version ${String(r.data.versionNo)}.`);
    setN((x) => x + 1);
    onDone();
  };

  const setOption = (i: number, v: string) => setOptions((o) => o.map((x, k) => (k === i ? v : x)));
  const removeOption = (i: number) => {
    setOptions((o) => o.filter((_, k) => k !== i));
    setAnswerIdx((a) => (a === i ? 0 : a > i ? a - 1 : a));
  };

  return (
    <section aria-label="Edit this question" style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--admin-border, #ddd)' }}>
      <h3 style={{ fontSize: 15, fontWeight: 700 }}>Edit the wording (version {cur.versionNo} now · {detail.task})</h3>
      <p className="admin-muted" style={{ fontSize: 12, marginTop: 4, lineHeight: 1.5 }}>
        Multiple-choice only. The quality checker runs as you type and blocks anything it rejects. Learners see the new wording on their next question fetch; their review schedule keeps its place.
      </p>

      <label style={{ display: 'block', marginTop: 10, fontSize: 13, fontWeight: 600 }}>
        Question
        <textarea className="admin-input" value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={3} maxLength={EDIT_LIMITS.prompt} style={{ width: '100%', marginTop: 4, resize: 'vertical' }} />
      </label>

      <fieldset style={{ border: 0, padding: 0, margin: '10px 0 0' }}>
        <legend style={{ fontSize: 13, fontWeight: 600 }}>Options (pick the correct one)</legend>
        {options.map((o, i) => (
          <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 6 }}>
            <input type="radio" name={`answer-${questionId}`} checked={answerIdx === i} onChange={() => setAnswerIdx(i)} aria-label={`Option ${i + 1} is the correct answer`} />
            <input className="admin-input" value={o} onChange={(e) => setOption(i, e.target.value)} maxLength={EDIT_LIMITS.option} aria-label={`Option ${i + 1}`} style={{ flex: 1, minWidth: 0 }} />
            <button type="button" className="admin-btn" onClick={() => removeOption(i)} disabled={options.length <= EDIT_LIMITS.minOptions} aria-label={`Remove option ${i + 1}`}>×</button>
          </div>
        ))}
        {options.length < EDIT_LIMITS.maxOptions && <button type="button" className="admin-btn" style={{ marginTop: 8 }} onClick={() => setOptions((o) => [...o, ''])}>Add an option</button>}
      </fieldset>

      <label style={{ display: 'block', marginTop: 10, fontSize: 13, fontWeight: 600 }}>
        Explanation (shown after the answer)
        <textarea className="admin-input" value={explanation} onChange={(e) => setExplanation(e.target.value)} rows={2} maxLength={EDIT_LIMITS.explanation} style={{ width: '100%', marginTop: 4, resize: 'vertical' }} />
      </label>

      <label style={{ display: 'block', marginTop: 10, fontSize: 13, fontWeight: 600 }}>
        Why are you changing it? (required, kept with the version)
        <input className="admin-input" value={note} onChange={(e) => setNote(e.target.value)} maxLength={EDIT_LIMITS.note} style={{ width: '100%', marginTop: 4 }} placeholder="e.g. the key was wrong; typo in option B; CAPS says …" />
      </label>

      <fieldset style={{ border: 0, padding: 0, margin: '10px 0 0' }}>
        <legend style={{ fontSize: 13, fontWeight: 600 }}>What kind of change is it?</legend>
        <label style={{ display: 'block', fontSize: 13, marginTop: 4 }}>
          <input type="radio" name={`kind-${questionId}`} checked={kind === 'wording' && !meaning} disabled={meaning} onChange={() => setKind('wording')} /> A wording fix (typo, clearer words). Review schedules stay as they are.
        </label>
        <label style={{ display: 'block', fontSize: 13, marginTop: 4 }}>
          <input type="radio" name={`kind-${questionId}`} checked={kind === 'meaning' || meaning} onChange={() => setKind('meaning')} /> The answer or the options change. Learners who have it scheduled for review start that question again tomorrow.
        </label>
        {meaning && <p className="admin-muted" style={{ fontSize: 12, marginTop: 4 }}>You changed the answer or the options, so this counts as a change of meaning.</p>}
      </fieldset>

      <div style={{ marginTop: 10 }}>
        <strong style={{ fontSize: 13 }}>{changed ? `Changed: ${fields.join(', ')}` : 'Nothing changed yet'}</strong>
        <Findings list={live.reasons} />
        {warned && !rejected && (
          <label style={{ display: 'block', fontSize: 13, marginTop: 6 }}>
            <input type="checkbox" checked={ack} onChange={(e) => setAck(e.target.checked)} /> I have read the warnings and want to save anyway.
          </label>
        )}
      </div>

      <details style={{ marginTop: 10 }}>
        <summary style={{ cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>As a learner sees it</summary>
        <div className="admin-card" style={{ padding: 12, marginTop: 6 }}>
          <p style={{ fontSize: 15, fontWeight: 600 }}>{next.prompt || '…'}</p>
          <ul style={{ listStyle: 'none', margin: '8px 0 0', padding: 0, display: 'grid', gap: 6 }}>
            {next.options.map((o, i) => <li key={i} className="admin-card" style={{ padding: '8px 10px', fontSize: 14 }}>{o || '…'}</li>)}
          </ul>
          {next.explanation && <p className="admin-muted" style={{ fontSize: 13, marginTop: 8 }}>{next.explanation}</p>}
        </div>
      </details>

      <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
        <button type="button" className="admin-btn" disabled={!canSave} onClick={save}>{busy ? 'Saving…' : 'Save as a new version'}</button>
        <button type="button" className="admin-btn" onClick={onClose}>Close</button>
      </div>
      {failure && (
        <div role="alert" style={{ marginTop: 8, fontSize: 13 }}>
          <strong>{failure.error}</strong>
          {failure.findings && <Findings list={failure.findings} />}
        </div>
      )}
      {saved && <p role="status" style={{ marginTop: 8, fontSize: 13, fontWeight: 600 }}>{saved}</p>}

      <details style={{ marginTop: 12 }}>
        <summary style={{ cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>History and restore ({detail.versions.length} {detail.versions.length === 1 ? 'version' : 'versions'})</summary>
        <ul style={{ listStyle: 'none', margin: '6px 0 0', padding: 0, display: 'grid', gap: 6 }}>
          {detail.versions.map((v) => (
            <li key={v.id} className="admin-card" style={{ padding: 10, fontSize: 13 }}>
              <strong>Version {v.versionNo}{v.current ? ' (current)' : ''}</strong> · {when(v.at)} · <span className="admin-muted">{v.author}{v.note ? ` · ${v.note}` : ''}</span>
              <div style={{ marginTop: 4 }}>{v.prompt}</div>
              <div className="admin-muted" style={{ marginTop: 2 }}>Answer: {v.answer}</div>
              {!v.current && <button type="button" className="admin-btn" style={{ marginTop: 6 }} disabled={busy} onClick={() => restore(v)}>Restore this wording</button>}
            </li>
          ))}
        </ul>
        {detail.edits.length > 0 && (
          <ul aria-label="Edit trail" style={{ margin: '8px 0 0', paddingLeft: 18, fontSize: 12, lineHeight: 1.5, listStyleType: 'disc' }}>
            {detail.edits.map((e, i) => <li key={i}>{when(e.at)} · {e.kind} · {e.by}: {e.reason}{e.reviewsReset ? ` (${e.reviewsReset} review boxes reset)` : ''}</li>)}
          </ul>
        )}
      </details>
    </section>
  );
}
