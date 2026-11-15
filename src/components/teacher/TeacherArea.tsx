'use client';
// ADR 0003 phase 3: the teacher's area. Make a class, share its code, see who joined, remove a learner, make a new code, archive.
// Learners appear by nickname only. Every action is checked again on the server by role; hiding a button is not a permission.
import { useEffect, useState } from 'react';
import ClassProgressPanel from './ClassProgressPanel';

interface ClassSummary { id: string; name: string; grade: number; subjects: string[]; joinCode: string; status: 'active' | 'archived'; members: number; createdAt: number; schoolName: string }
interface RosterEntry { studentId: string; nickname: string; joinedAt: number }
interface ClassDetail extends ClassSummary { roster: RosterEntry[] }
interface Me { user: { email: string } | null; roles: string[] }

const field = 'mt-1 block min-h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-base text-slate-900';
const btn = 'min-h-12 rounded-xl border border-slate-300 bg-white px-4 text-base font-semibold text-slate-800 disabled:opacity-60';
const btnPrimary = 'min-h-12 rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white disabled:opacity-60';

async function api<T>(url: string, action?: string, body?: unknown): Promise<{ ok: true; data: T } | { ok: false; error: string }> {
  try {
    const res = await fetch(url, action ? { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Auth-Action': action }, body: JSON.stringify(body ?? {}) } : { cache: 'no-store' });
    const data = (await res.json().catch(() => ({}))) as T & { error?: string };
    return res.ok ? { ok: true, data } : { ok: false, error: String((data as { error?: string }).error ?? 'That did not work. Try again.') };
  } catch {
    return { ok: false, error: 'That did not work. Check your connection and try again.' };
  }
}

/** The code in two groups of four, easy to read out. */
const show = (code: string) => `${code.slice(0, 4)} ${code.slice(4)}`;


interface Scope { id: string; subject: string; title: string; tasks: string[]; examDate: string }
interface Subject { code: string; title: string }
interface Topic { task: string; label: string }

const longDate = (d: string) => new Date(`${d}T12:00:00Z`).toLocaleDateString('en-ZA', { timeZone: 'UTC', day: 'numeric', month: 'long', year: 'numeric' });

/** The class's exams (ADR 0003 section 6): what an exam covers and when, so learners get matching practice and a countdown. */
function Exams({ classId, grade, active }: { classId: string; grade: number; active: boolean }) {
  const [scopes, setScopes] = useState<Scope[] | null>(null);
  const [open, setOpen] = useState(false);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [subject, setSubject] = useState('');
  const [topics, setTopics] = useState<Topic[]>([]);
  const [picked, setPicked] = useState<Record<string, boolean>>({});
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const load = () => { void api<{ scopes: Scope[] }>(`/api/teacher/classes/${classId}/scopes`).then((r) => setScopes(r.ok ? r.data.scopes : [])); };
  useEffect(load, [classId]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (open && subjects.length === 0) void api<{ subjects: Subject[] }>(`/api/teacher/catalog?grade=${grade}`).then((r) => { if (r.ok) setSubjects(r.data.subjects); });
  }, [open, grade, subjects.length]);
  useEffect(() => {
    setPicked({}); setTopics([]);
    if (subject) void api<{ topics: Topic[] }>(`/api/teacher/catalog?grade=${grade}&subject=${encodeURIComponent(subject)}`).then((r) => { if (r.ok) setTopics(r.data.topics); });
  }, [subject, grade]);

  const chosen = topics.filter((t) => picked[t.task]).map((t) => t.task);
  const save = async () => {
    setBusy(true); setErr('');
    const r = await api<{ scope: Scope }>(`/api/teacher/classes/${classId}/scopes`, 'scope-create', { subject, title, tasks: chosen, examDate: date });
    setBusy(false);
    if (!r.ok) { setErr(r.error); return; }
    setOpen(false); setTitle(''); setDate(''); setSubject(''); load();
  };
  const remove = async (sc: Scope) => {
    if (!window.confirm(`Remove “${sc.title}”? Learners stop seeing this countdown.`)) return;
    const r = await api<Record<string, unknown>>(`/api/teacher/classes/${classId}/scopes/${sc.id}/archive`, 'scope-archive');
    if (r.ok) load(); else setErr(r.error);
  };
  const today = new Date().toISOString().slice(0, 10);

  return (
    <section className="mt-6" aria-label="Exams">
      <h3 className="text-lg font-bold text-slate-900">Exams</h3>
      <p className="text-sm text-slate-600">Tell us what the exam covers and when. Your learners get matching practice and a plan that counts down to it.</p>
      {scopes && scopes.length > 0 && (
        <ul className="mt-2 space-y-2">
          {scopes.map((sc) => (
            <li key={sc.id} className="flex items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
              <span className="min-w-0"><strong className="block break-words text-slate-900">{sc.title}</strong><span className="text-sm text-slate-600">{longDate(sc.examDate)} · {sc.tasks.length} {sc.tasks.length === 1 ? 'topic' : 'topics'}</span></span>
              {active && <button className="min-h-11 shrink-0 px-2 text-sm font-semibold text-red-700 underline" onClick={() => void remove(sc)}>Remove</button>}
            </li>
          ))}
        </ul>
      )}
      {scopes && scopes.length === 0 && !open && <p className="mt-2 text-slate-600">No exam set yet.</p>}
      {active && !open && <button className={`${btn} mt-3 w-full`} onClick={() => setOpen(true)}>Set an exam</button>}
      {open && (
        <form className="mt-3 space-y-3 rounded-2xl border border-slate-200 bg-white p-4" onSubmit={(e) => { e.preventDefault(); void save(); }}>
          <label className="block text-sm font-medium text-slate-700">Exam name
            <input className={field} value={title} onChange={(e) => setTitle(e.target.value)} maxLength={80} placeholder="Term 3 and 4 test" required />
          </label>
          <label className="block text-sm font-medium text-slate-700">Subject
            <select className={field} value={subject} onChange={(e) => setSubject(e.target.value)} required>
              <option value="">Choose</option>
              {subjects.map((s) => <option key={s.code} value={s.code}>{s.title}</option>)}
            </select>
          </label>
          {topics.length > 0 && (
            <fieldset>
              <legend className="text-sm font-medium text-slate-700">Topics in the exam ({chosen.length} chosen)</legend>
              <button type="button" className="mt-1 min-h-11 text-sm font-semibold text-indigo-700 underline" onClick={() => setPicked(chosen.length === topics.length ? {} : Object.fromEntries(topics.map((t) => [t.task, true])))}>{chosen.length === topics.length ? 'Clear all' : 'Choose all'}</button>
              <div className="mt-1 max-h-72 space-y-1 overflow-y-auto rounded-xl border border-slate-200 p-2">
                {topics.map((t) => (
                  <label key={t.task} className="flex min-h-11 items-center gap-3 px-1 text-base text-slate-900">
                    <input type="checkbox" className="h-5 w-5 shrink-0" checked={!!picked[t.task]} onChange={(e) => setPicked({ ...picked, [t.task]: e.target.checked })} />
                    <span className="min-w-0 break-words">{t.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          )}
          <label className="block text-sm font-medium text-slate-700">Exam date
            <input type="date" className={field} value={date} min={today} onChange={(e) => setDate(e.target.value)} required />
          </label>
          {err && <p className="text-sm text-red-700" role="alert">{err}</p>}
          <div className="flex gap-2">
            <button type="submit" disabled={busy || chosen.length === 0 || !date || title.trim().length < 3} className={`${btnPrimary} flex-1`}>{busy ? 'Saving…' : 'Save exam'}</button>
            <button type="button" className={btn} onClick={() => { setOpen(false); setErr(''); }}>Cancel</button>
          </div>
        </form>
      )}
      {err && !open && <p className="mt-2 text-sm text-red-700" role="alert">{err}</p>}
    </section>
  );
}

function ClassView({ id, onBack, onChanged }: { id: string; onBack: () => void; onChanged: () => void }) {
  const [c, setC] = useState<ClassDetail | null | 'error'>(null);
  const [msg, setMsg] = useState('');
  const [copied, setCopied] = useState(false);
  const load = () => { void api<{ class: ClassDetail }>(`/api/teacher/classes/${id}`).then((r) => setC(r.ok ? r.data.class : 'error')); };
  useEffect(load, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (c === null) return <p className="mt-4 text-slate-600" role="status">Loading…</p>;
  if (c === 'error') return <p className="mt-4 text-red-700" role="alert">Could not load this class. <button className="underline" onClick={onBack}>Back</button></p>;
  const active = c.status === 'active';

  const act = async (url: string, action: string, confirm: string | null, done: string) => {
    if (confirm && !window.confirm(confirm)) return;
    const r = await api<Record<string, unknown>>(url, action);
    if (!r.ok) { setMsg(r.error); return; }
    setMsg(done); load(); onChanged();
  };

  return (
    <div className="mt-4">
      <button onClick={onBack} className="min-h-11 text-sm font-semibold text-indigo-700 underline">← All classes</button>
      <h2 className="mt-2 break-words text-xl font-bold text-slate-900">{c.name}</h2>
      <p className="text-sm text-slate-600">Grade {c.grade} · {c.schoolName}{active ? '' : ' · archived'}</p>
      {active && (
        <div className="mt-4 rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
          <p className="text-sm font-medium text-indigo-900">Class code: learners type this in the app</p>
          <p className="mt-1 break-all text-3xl font-black tracking-widest text-indigo-900" aria-label={`Class code ${c.joinCode.split('').join(' ')}`}>{show(c.joinCode)}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button className={btn} onClick={() => { void navigator.clipboard?.writeText(c.joinCode).then(() => setCopied(true), () => setCopied(false)); }}>{copied ? 'Copied' : 'Copy code'}</button>
            <button className={btn} onClick={() => void act(`/api/teacher/classes/${id}/regenerate`, 'class-regenerate', 'Make a new code? The old code stops working at once. Learners already in the class stay.', 'New code made.')}>New code</button>
          </div>
        </div>
      )}
      <ClassProgressPanel classId={id} />
      <h3 className="mt-5 text-lg font-bold text-slate-900">Who is in the class ({c.roster.length})</h3>
      {c.roster.length === 0 ? (
        <p className="mt-1 text-slate-600">No one has joined yet. Share the code above.</p>
      ) : (
        <ul className="mt-2 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {c.roster.map((m) => (
            <li key={m.studentId} className="flex items-center justify-between gap-3 px-4 py-2">
              <span className="min-w-0 break-words text-slate-900">{m.nickname}</span>
              {active && <button className="min-h-11 shrink-0 px-2 text-sm font-semibold text-red-700 underline" onClick={() => void act(`/api/teacher/classes/${id}/members/${m.studentId}/remove`, 'class-remove', `Remove ${m.nickname} from this class? You will stop seeing their progress.`, `${m.nickname} was removed.`)}>Remove</button>}
            </li>
          ))}
        </ul>
      )}
      <p className="mt-2 text-sm text-slate-600">You see nicknames only. A learner who leaves, or whom you remove, disappears from this list and from your view of progress.</p>
      <Exams classId={id} grade={c.grade} active={active} />
      {active && <button className={`${btn} mt-5 w-full`} onClick={() => void act(`/api/teacher/classes/${id}/archive`, 'class-archive', 'Archive this class? Its code stops working and you stop seeing its learners.', 'Class archived.')}>Archive class</button>}
      {msg && <p className="mt-3 text-sm font-medium text-slate-800" role="status">{msg}</p>}
    </div>
  );
}

function NewClass({ onCreated }: { onCreated: (id: string) => void }) {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('6');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const create = async () => {
    setBusy(true); setErr('');
    const r = await api<{ class: ClassSummary }>('/api/teacher/classes', 'class-create', { name, grade: Number(grade) });
    setBusy(false);
    if (!r.ok) { setErr(r.error); return; }
    setName('');
    onCreated(r.data.class.id);
  };
  return (
    <form className="mt-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-4" onSubmit={(e) => { e.preventDefault(); void create(); }}>
      <h2 className="text-lg font-bold text-slate-900">New class</h2>
      <label className="block text-sm font-medium text-slate-700">Class name
        <input className={field} value={name} onChange={(e) => setName(e.target.value)} maxLength={60} placeholder="6B Natural Sciences" required />
      </label>
      <label className="block text-sm font-medium text-slate-700">Grade
        <select className={field} value={grade} onChange={(e) => setGrade(e.target.value)}>{[4, 5, 6, 7, 8, 9, 10, 11, 12].map((g) => <option key={g} value={g}>Grade {g}</option>)}</select>
      </label>
      {err && <p className="text-sm text-red-700" role="alert">{err}</p>}
      <button type="submit" disabled={busy || name.trim().length < 2} className={`${btnPrimary} w-full`}>{busy ? 'Making…' : 'Make class'}</button>
    </form>
  );
}

export default function TeacherArea() {
  const [me, setMe] = useState<Me | null | 'error'>(null);
  const [classes, setClasses] = useState<ClassSummary[] | null>(null);
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    void api<Me>('/api/auth/me').then((r) => setMe(r.ok ? r.data : 'error'));
  }, []);
  const isTeacher = !!me && me !== 'error' && !!me.user && me.roles.includes('teacher');
  const loadClasses = () => { void api<{ classes: ClassSummary[] }>('/api/teacher/classes').then((r) => setClasses(r.ok ? r.data.classes : [])); };
  useEffect(() => { if (isTeacher) loadClasses(); }, [isTeacher]);

  return (
    <main className="mx-auto min-h-screen max-w-md bg-slate-50 px-4 py-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">PrepPals</p>
      <h1 className="mt-1 text-2xl font-bold text-slate-900">Your classes</h1>
      {me === null && <p className="mt-3 text-slate-600" role="status">Loading…</p>}
      {me === 'error' && <p className="mt-3 text-red-700" role="alert">Could not load your account. Try again.</p>}
      {me && me !== 'error' && !me.user && (
        <>
          <p className="mt-3 text-slate-700">Sign in to see your classes.</p>
          <a href="/sign-in" className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white">Sign in</a>
        </>
      )}
      {me && me !== 'error' && me.user && !isTeacher && (
        <>
          <p className="mt-3 text-slate-700">This area is for teachers. You can apply from your account page; we check every teacher before turning it on.</p>
          <a href="/account" className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white">Go to your account</a>
        </>
      )}
      {isTeacher && open && <ClassView id={open} onBack={() => setOpen(null)} onChanged={loadClasses} />}
      {isTeacher && !open && (
        <>
          {classes === null && <p className="mt-3 text-slate-600" role="status">Loading…</p>}
          {classes && classes.length === 0 && <p className="mt-3 text-slate-700">You have no classes yet. Make one below and share its code with your learners.</p>}
          {classes && classes.length > 0 && (
            <ul className="mt-4 space-y-2">
              {classes.map((c) => (
                <li key={c.id}>
                  <button onClick={() => setOpen(c.id)} className="flex min-h-14 w-full items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left">
                    <span className="min-w-0"><strong className="block break-words text-slate-900">{c.name}</strong><span className="text-sm text-slate-600">Grade {c.grade} · {c.members} {c.members === 1 ? 'learner' : 'learners'}{c.status === 'archived' ? ' · archived' : ''}</span></span>
                    {c.status === 'active' && <span className="shrink-0 rounded-lg bg-indigo-50 px-2 py-1 text-sm font-bold tracking-widest text-indigo-900">{show(c.joinCode)}</span>}
                  </button>
                </li>
              ))}
            </ul>
          )}
          <a href="/teacher/questions" className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-4 text-base font-semibold text-slate-800">Question bank: suggest changes</a>
          <NewClass onCreated={(id) => { loadClasses(); setOpen(id); }} />
        </>
      )}
    </main>
  );
}
