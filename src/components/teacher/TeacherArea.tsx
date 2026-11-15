'use client';
// ADR 0003 phase 3: the teacher's area. Make a class, share its code, see who joined, remove a learner, make a new code, archive.
// Learners appear by nickname only. Every action is checked again on the server by role; hiding a button is not a permission.
import { useEffect, useState } from 'react';

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
      <h3 className="mt-5 text-lg font-bold text-slate-900">Learners ({c.roster.length})</h3>
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
          <NewClass onCreated={(id) => { loadClasses(); setOpen(id); }} />
        </>
      )}
    </main>
  );
}
