'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAdminData } from '../useAdminData';
import { postJson, when } from './api';
import type { Candidate, PackSummary } from '../../../lib/server/teacherReview/adminStore';

interface LessonRow { file: string; text: string; doubt: string }

function NewPack({ onCreated }: { onCreated: () => void }) {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState('');
  const [language, setLanguage] = useState('');
  const [needsCheck, setNeedsCheck] = useState(true);
  const [ids, setIds] = useState('');
  const [found, setFound] = useState<Candidate[] | null>(null);
  const [picked, setPicked] = useState<Record<string, boolean>>({});
  const [doubts, setDoubts] = useState<Record<string, string>>({});
  const [lessons, setLessons] = useState<LessonRow[]>([]);
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);

  const search = async () => {
    setMsg('');
    const q = new URLSearchParams();
    if (subject.trim()) q.set('subject', subject.trim());
    if (grade) q.set('grade', grade);
    if (language) q.set('language', language);
    if (needsCheck) q.set('needsCheck', '1');
    if (ids.trim()) q.set('ids', ids.split(/[\s,]+/).filter(Boolean).join(','));
    q.set('limit', '100');
    try {
      const res = await fetch(`/api/admin/reviews/candidates?${q}`, { cache: 'no-store' });
      if (!res.ok) throw new Error('bad');
      const d = (await res.json()) as { candidates: Candidate[] };
      setFound(d.candidates);
      setPicked({});
    } catch {
      setMsg('Could not load questions');
    }
  };
  const chosen = (found ?? []).filter((c) => picked[c.questionId]);
  const validLessons = lessons.filter((l) => l.file.trim() && l.text.trim().length >= 6);
  const total = chosen.length + validLessons.length;

  const create = async () => {
    setBusy(true);
    setMsg('');
    const items = [
      ...chosen.map((c) => ({ kind: 'question', questionId: c.questionId, doubt: doubts[c.questionId] ?? '' })),
      ...validLessons.map((l) => ({ kind: 'lesson_line', file: l.file.trim(), anchorText: l.text.trim(), doubt: l.doubt })),
    ];
    const r = await postJson('/api/admin/reviews', 'review-create', { title, items });
    setBusy(false);
    if (!r.ok) return setMsg(r.failure.error);
    setTitle(''); setFound(null); setPicked({}); setLessons([]);
    onCreated();
  };

  return (
    <section className="admin-card" style={{ padding: 16, marginTop: 16 }} aria-label="New review pack">
      <h2 style={{ fontSize: 17, fontWeight: 700 }}>New pack</h2>
      <div style={{ display: 'grid', gap: 10, marginTop: 10 }}>
        <label style={{ fontSize: 13 }}>Title
          <input className="admin-input" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={120} placeholder="Afrikaans Grade 6, first check" style={{ display: 'block', width: '100%', marginTop: 4 }} />
        </label>
        <fieldset style={{ border: 0, padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'end' }}>
          <legend style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Find questions</legend>
          <label style={{ fontSize: 13 }}>Subject contains<input className="admin-input" value={subject} onChange={(e) => setSubject(e.target.value)} style={{ display: 'block', width: 150, marginTop: 4 }} /></label>
          <label style={{ fontSize: 13 }}>Grade
            <select className="admin-input" value={grade} onChange={(e) => setGrade(e.target.value)} style={{ display: 'block', marginTop: 4 }}>
              <option value="">Any</option>
              {[4, 5, 6, 7, 8, 9, 10, 11, 12].map((g) => <option key={g} value={g}>{g}</option>)}
            </select>
          </label>
          <label style={{ fontSize: 13 }}>Language
            <select className="admin-input" value={language} onChange={(e) => setLanguage(e.target.value)} style={{ display: 'block', marginTop: 4 }}>
              <option value="">Any</option>
              <option value="afrikaans">Afrikaans</option>
              <option value="isixhosa">isiXhosa</option>
              <option value="english">English</option>
            </select>
          </label>
          <label style={{ fontSize: 13, display: 'flex', gap: 6, alignItems: 'center' }}><input type="checkbox" checked={needsCheck} onChange={(e) => setNeedsCheck(e.target.checked)} />Not yet teacher-checked</label>
          <label style={{ fontSize: 13, flex: '1 1 200px' }}>Or question ids
            <input className="admin-input" value={ids} onChange={(e) => setIds(e.target.value)} placeholder="a1b2c3d4e5f6, ..." style={{ display: 'block', width: '100%', marginTop: 4 }} />
          </label>
          <button type="button" className="admin-btn" onClick={search}>Find</button>
        </fieldset>

        {found && (
          <div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
              <strong style={{ fontSize: 13 }}>{found.length} found, {chosen.length} picked</strong>
              <button type="button" className="admin-btn" onClick={() => setPicked(Object.fromEntries(found.slice(0, 60).map((c) => [c.questionId, true])))}>Pick the first 60</button>
              <button type="button" className="admin-btn" onClick={() => setPicked({})}>Clear</button>
            </div>
            <ul style={{ listStyle: 'none', margin: '8px 0 0', padding: 0, display: 'grid', gap: 6, maxHeight: 360, overflow: 'auto' }}>
              {found.map((c) => (
                <li key={c.questionId} style={{ fontSize: 13, display: 'grid', gap: 4, borderBottom: '1px solid var(--border)', paddingBottom: 6 }}>
                  <label style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <input type="checkbox" checked={!!picked[c.questionId]} onChange={(e) => setPicked({ ...picked, [c.questionId]: e.target.checked })} style={{ marginTop: 3 }} />
                    <span><strong>{c.prompt}</strong><br /><span className="admin-muted">Key: {c.answer} · {c.subject} G{c.grade ?? '?'} · {c.topic}</span></span>
                  </label>
                  {picked[c.questionId] && <input className="admin-input" aria-label={`Doubt about: ${c.prompt}`} value={doubts[c.questionId] ?? ''} onChange={(e) => setDoubts({ ...doubts, [c.questionId]: e.target.value })} maxLength={400} placeholder="What are we unsure about? (shown to the teacher)" />}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <strong style={{ fontSize: 13 }}>Lesson lines</strong>
          <p className="admin-muted" style={{ fontSize: 12 }}>File under src/curriculum plus the exact sentence. The sentence must appear once in that file for the change to be applied later.</p>
          {lessons.map((l, i) => (
            <div key={i} style={{ display: 'grid', gap: 4, marginTop: 6 }}>
              <input className="admin-input" aria-label={`Lesson file ${i + 1}`} value={l.file} onChange={(e) => setLessons(lessons.map((x, j) => (j === i ? { ...x, file: e.target.value } : x)))} placeholder="grade6/isixhosa/term2/reading-viewing-t2/ReadingViewingT2.data.ts" />
              <textarea className="admin-input" aria-label={`Lesson line ${i + 1}`} value={l.text} onChange={(e) => setLessons(lessons.map((x, j) => (j === i ? { ...x, text: e.target.value } : x)))} rows={2} placeholder="The exact sentence" />
              <div style={{ display: 'flex', gap: 6 }}>
                <input className="admin-input" aria-label={`Doubt ${i + 1}`} value={l.doubt} onChange={(e) => setLessons(lessons.map((x, j) => (j === i ? { ...x, doubt: e.target.value } : x)))} placeholder="Doubt" style={{ flex: 1, minWidth: 0 }} />
                <button type="button" className="admin-btn" onClick={() => setLessons(lessons.filter((_, j) => j !== i))}>Remove</button>
              </div>
            </div>
          ))}
          <button type="button" className="admin-btn" style={{ marginTop: 8 }} onClick={() => setLessons([...lessons, { file: '', text: '', doubt: '' }])}>Add a lesson line</button>
        </div>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          <button type="button" className="admin-btn" disabled={busy || total === 0 || title.trim().length < 3} onClick={create}>Create pack ({total} {total === 1 ? 'item' : 'items'})</button>
          {total > 60 && <span role="alert" style={{ fontSize: 13, fontWeight: 600 }}>A pack holds at most 60 items.</span>}
          {msg && <span role="alert" style={{ fontSize: 13, fontWeight: 600 }}>{msg}</span>}
        </div>
      </div>
    </section>
  );
}

export default function ReviewsPage() {
  const [n, setN] = useState(0);
  const state = useAdminData<{ packs: PackSummary[] }>('/api/admin/reviews', `r=${n}`);
  return (
    <main style={{ maxWidth: 1180, margin: '0 auto', padding: '16px' }}>
      <h1 style={{ fontSize: 22, fontWeight: 700 }}>Teacher reviews</h1>
      <p className="admin-secondary" style={{ fontSize: 14, marginTop: 4 }}>Packs of questions and lesson lines for first-language and subject teachers to check by secure link.</p>
      {state.status === 'loading' && <p style={{ marginTop: 16 }}>Loading…</p>}
      {state.status === 'error' && <p role="alert" style={{ marginTop: 16 }}>Could not load the packs{state.code ? ` (${state.code})` : ''}.</p>}
      {state.status === 'ok' && (
        state.data.packs.length === 0 ? <p className="admin-muted" style={{ marginTop: 16 }}>No packs yet.</p> : (
          <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'grid', gap: 8 }}>
            {state.data.packs.map((p) => (
              <li key={p.id} className="admin-card" style={{ padding: 12 }}>
                <Link href={`/admin/reviews/${p.id}`} style={{ fontWeight: 700, fontSize: 15 }}>{p.title}</Link>
                <div className="admin-muted" style={{ fontSize: 13, marginTop: 4 }}>
                  {p.status} · {p.items} items · {p.reviewers} reviewers · {p.answeredItems} answered · {p.decided} decided · {when(p.createdAt)}
                </div>
              </li>
            ))}
          </ul>
        )
      )}
      <NewPack onCreated={() => setN((x) => x + 1)} />
    </main>
  );
}
