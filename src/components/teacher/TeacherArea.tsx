'use client';
// ADR 0003 phase 3: the teacher's area. Make a class, share its code, see who joined, remove a learner, make a new code, archive.
// Learners appear by nickname only. Every action is checked again on the server by role; hiding a button is not a permission.
import { useEffect, useRef, useState } from 'react';
import ClassDashboard, { OpenLearnerLink } from './ClassDashboard';
import ClassList, { ClassTiles, normaliseClasses } from './ClassList';
import LearnerView from './LearnerView';
import { DashboardPage, EmptyState, PageHeader, SectionCard, SkeletonCard, StatTileRow, plural } from '../dashboard';

interface ClassSummary { id: string; name: string; grade: number; subjects: string[]; joinCode: string; status: 'active' | 'archived'; members: number; createdAt: number; schoolName: string }
interface RosterEntry { studentId: string; nickname: string; joinedAt: number; isNew?: boolean }
interface Notices { total: number; classes: { classId: string; name: string; count: number }[] }
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
function Exams({ classId, grade, active }: { classId: string; grade: number | null; active: boolean }) {
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
    <SectionCard id="exams" title="Exams" subtitle="Tell us what the exam covers and when. Your learners get matching practice and a plan that counts down to it.">
      {scopes && scopes.length > 0 && (
        <ul className="space-y-2">
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
    </SectionCard>
  );
}

function ClassView({ id, onBack, onChanged, onNewClass, onOpenLearner }: { id: string; onBack: () => void; onChanged: () => void; onNewClass: () => void; onOpenLearner: (studentId: string) => void }) {
  const [c, setC] = useState<ClassDetail | null | 'error'>(null);
  const [msg, setMsg] = useState('');
  const [copied, setCopied] = useState(false);
  const load = () => {
    void api<{ class: ClassDetail }>(`/api/teacher/classes/${id}`).then((r) => {
      setC(r.ok ? r.data.class : 'error');
      // the teacher has now seen who joined: clear the "new" markers for next time (the ones on screen stay until they leave)
      if (r.ok && r.data.class.roster.some((m) => m.isNew)) void api<Record<string, unknown>>(`/api/teacher/classes/${id}/seen`, 'class-seen').then(() => onChanged());
    });
  };
  useEffect(load, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  // The class, its progress and its exams are asked for AT THE SAME TIME (each one waiting for the one before cost a full round trip). The dashboard
  // mounts at once; the cards that need the class (header, code, roster) appear when it arrives.
  if (c === 'error') return <p className="text-red-700" role="alert">Could not load this class. <button className="underline" onClick={onBack}>Back</button></p>;
  if (c === null) {
    return (
      <>
        <PageHeader back={<button onClick={onBack} className="min-h-11 text-sm font-semibold text-indigo-700 underline">← All classes</button>} eyebrow="PrepPals teacher" title="Loading the class…" />
        <ClassDashboard classId={id} onOpenLearner={onOpenLearner} extras={{ exams: <Exams classId={id} grade={null} active={false} /> }} />
      </>
    );
  }
  const active = c.status === 'active';

  const act = async (url: string, action: string, confirm: string | null, done: string) => {
    if (confirm && !window.confirm(confirm)) return;
    const r = await api<Record<string, unknown>>(url, action);
    if (!r.ok) { setMsg(r.error); return; }
    // An archived class is no longer opened (its roster and progress are closed), so go back to the list instead of reloading it.
    if (action === 'class-archive') { onChanged(); onBack(); return; }
    setMsg(done); load(); onChanged();
  };
  const copy = () => { void navigator.clipboard?.writeText(c.joinCode).then(() => setCopied(true), () => setCopied(false)); };
  const toExams = () => { document.getElementById('exams')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };

  const actions = (
    <SectionCard id="actions" title="Class code and actions">
      {active ? (
        <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
          <p className="text-sm font-medium text-indigo-900">Class code: learners type this in the app</p>
          <p className="mt-1 break-all text-3xl font-black tracking-widest text-indigo-900" aria-label={`Class code ${c.joinCode.split('').join(' ')}`}>{show(c.joinCode)}</p>
          <button className={`${btn} mt-3 w-full`} onClick={copy}>{copied ? 'Copied' : 'Copy code'}</button>
        </div>
      ) : <p className="text-slate-600">This class is archived. Its code no longer works.</p>}
      <div className="mt-4 grid gap-2">
        {active && <button className={btnPrimary} onClick={toExams}>Set exam scope</button>}
        <button className={btn} onClick={onNewClass}>Create another class</button>
        {active && <button className={btn} onClick={() => void act(`/api/teacher/classes/${id}/regenerate`, 'class-regenerate', 'Make a new code? The old code stops working at once. Learners already in the class stay.', 'New code made.')}>Make a new code</button>}
        {active && <button className={`${btn} text-red-700`} onClick={() => void act(`/api/teacher/classes/${id}/archive`, 'class-archive', 'Archive this class? Its code stops working and you stop seeing its learners.', 'Class archived.')}>Archive this class</button>}
      </div>
      {msg && <p className="mt-3 text-sm font-medium text-slate-800" role="status">{msg}</p>}
    </SectionCard>
  );

  const roster = (
    <SectionCard id="roster" title={`Who is in the class (${c.roster.length})`} subtitle="You see nicknames only. A learner who leaves, or whom you remove, disappears from this list and from your view of progress.">
      {c.roster.length === 0 ? (
        <EmptyState title="No one has joined yet">Share the class code and learners will appear here.</EmptyState>
      ) : (
        <ul className="divide-y divide-slate-100">
          {c.roster.map((m) => (
            <li key={m.studentId} className="flex items-center justify-between gap-3 py-0.5">
              <span className="min-w-0 break-words font-semibold text-slate-900"><OpenLearnerLink nickname={m.nickname} onOpen={() => onOpenLearner(m.studentId)} />{m.isNew && <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-900">New</span>}</span>
              {active && <button className="min-h-11 shrink-0 px-2 text-sm font-semibold text-red-700 underline" onClick={() => void act(`/api/teacher/classes/${id}/members/${m.studentId}/remove`, 'class-remove', `Remove ${m.nickname} from this class? They can join again with the code.`, `${m.nickname} removed.`)}>Remove</button>}
            </li>
          ))}
        </ul>
      )}
    </SectionCard>
  );

  return (
    <>
      <PageHeader
        back={<button onClick={onBack} className="min-h-11 text-sm font-semibold text-indigo-700 underline">← All classes</button>}
        eyebrow="PrepPals teacher"
        title={c.name}
        subtitle={[`Grade ${c.grade}`, c.schoolName, active ? '' : 'archived'].filter(Boolean).join(' · ')}
        actions={active ? <><button className={btn} onClick={copy}>{copied ? 'Copied' : `Copy code ${show(c.joinCode)}`}</button><button className={btnPrimary} onClick={toExams}>Set exam scope</button></> : undefined}
      />
      <ClassDashboard classId={id} onOpenLearner={onOpenLearner} extras={{ actions, roster, exams: <Exams classId={id} grade={c.grade} active={active} /> }} />
    </>
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
    <SectionCard id="new-class" title="New class" subtitle="Make a class, then share its code with your learners.">
      <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); void create(); }}>
        <label className="block text-sm font-medium text-slate-700">Class name
          <input className={field} value={name} onChange={(e) => setName(e.target.value)} maxLength={60} placeholder="6B Natural Sciences" required />
        </label>
        <label className="block text-sm font-medium text-slate-700">Grade
          <select className={field} value={grade} onChange={(e) => setGrade(e.target.value)}>{[4, 5, 6, 7, 8, 9, 10, 11, 12].map((g) => <option key={g} value={g}>Grade {g}</option>)}</select>
        </label>
        {err && <p className="text-sm text-red-700" role="alert">{err}</p>}
        <button type="submit" disabled={busy || name.trim().length < 2} className={`${btnPrimary} w-full`}>{busy ? 'Making…' : 'Make class'}</button>
      </form>
    </SectionCard>
  );
}

/** A small page for the states before the dashboard: loading, signed out, not a teacher. */
function Narrow({ children }: { children: React.ReactNode }) {
  return <main className="mx-auto min-h-screen max-w-md bg-slate-50 px-4 py-8">{children}</main>;
}

export default function TeacherArea() {
  const [me, setMe] = useState<Me | null | 'error'>(null);
  const [classes, setClasses] = useState<ClassSummary[] | null>(null);
  const [open, setOpenState] = useState<string | null>(null);
  const [notices, setNotices] = useState<Notices>({ total: 0, classes: [] });

  // /teacher?class=<id> opens that class (so a class view can be linked to and reloaded); the address follows the screen.
  const [learner, setLearnerState] = useState<string | null>(null);
  const [classKept, setClassKept] = useState(false); // true once the class page has been shown, so it can stay mounted behind a learner's page
  const setOpen = (id: string | null, learnerId: string | null = null) => {
    setOpenState(id);
    setLearnerState(id ? learnerId : null);
    window.history.replaceState(null, '', id ? `/teacher?class=${encodeURIComponent(id)}${learnerId ? `&learner=${encodeURIComponent(learnerId)}` : ''}` : '/teacher');
    window.scrollTo?.(0, 0);
  };
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const id = q.get('class');
    const sid = q.get('learner');
    if (id && /^[A-Za-z0-9_-]{1,64}$/.test(id)) { setOpenState(id); if (sid && /^[A-Za-z0-9-]{8,64}$/.test(sid)) setLearnerState(sid); }
    void api<Me>('/api/auth/me').then((r) => setMe(r.ok ? r.data : 'error'));
  }, []);
  useEffect(() => { if (!open) setClassKept(false); else if (!learner) setClassKept(true); }, [open, learner]);
  const isTeacher = !!me && me !== 'error' && !!me.user && me.roles.includes('teacher');
  const loadNotices = () => { void api<Notices>('/api/teacher/notices').then((r) => { if (r.ok) setNotices(r.data); }); };
  // The list and the notices are asked for together, and only while the list is what is on screen (a teacher who opens a class by its link never needs them
  // first). Something that changed them (a joiner seen, a class made or archived) marks the list stale; it is read again the next time it is shown.
  const listFresh = useRef(false);
  const loadClasses = () => { listFresh.current = true; void api<{ classes: ClassSummary[] }>('/api/teacher/classes').then((r) => setClasses(r.ok ? r.data.classes : [])); loadNotices(); };
  const markStale = () => { listFresh.current = false; };
  useEffect(() => { if (isTeacher && !open && !listFresh.current) loadClasses(); }, [isTeacher, open]); // eslint-disable-line react-hooks/exhaustive-deps

  if (me === null) return <Narrow><p className="text-slate-600" role="status">Loading…</p></Narrow>;
  if (me === 'error') return <Narrow><p className="text-red-700" role="alert">Could not load your account. Try again.</p></Narrow>;
  if (!me.user) {
    return (
      <Narrow>
        <h1 className="text-2xl font-bold text-slate-900">Your classes</h1>
        <p className="mt-3 text-slate-700">Sign in to see your classes.</p>
        <a href="/sign-in" className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white">Sign in</a>
      </Narrow>
    );
  }
  if (!isTeacher) {
    return (
      <Narrow>
        <h1 className="text-2xl font-bold text-slate-900">Your classes</h1>
        <p className="mt-3 text-slate-700">This area is for teachers. You can apply from your account page; we check every teacher before turning it on.</p>
        <a href="/account" className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white">Go to your account</a>
      </Narrow>
    );
  }

  if (open) {
    return (
      <div className="min-h-screen bg-slate-50">
        <DashboardPage>
          {learner && <LearnerView classId={open} studentId={learner} onBack={() => setOpen(open)} />}
          {/* the class stays mounted (hidden) while one learner is open, so Back is instant and nothing is fetched again */}
          {(!learner || classKept) && <div hidden={!!learner}><ClassView id={open} onBack={() => setOpen(null)} onChanged={markStale} onOpenLearner={(sid) => setOpen(open, sid)} onNewClass={() => { setOpen(null); setTimeout(() => document.getElementById('new-class')?.scrollIntoView({ behavior: 'smooth' }), 50); }} /></div>}
        </DashboardPage>
      </div>
    );
  }

  const cards = normaliseClasses(classes ?? []);
  const lostSome = Array.isArray(classes) && classes.length > cards.length;
  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardPage>
        <PageHeader
          eyebrow="PrepPals teacher"
          title="Your classes"
          subtitle="Share a class code, then see how your learners are doing."
          actions={<a href="/teacher/questions" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-4 text-base font-semibold text-slate-800">Question bank: suggest changes</a>}
        />
        {notices.total > 0 && (
          <p className="mb-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-900" role="status">
            {notices.total === 1 ? '1 new learner has' : `${notices.total} new learners have`} joined your {notices.classes.length === 1 ? 'class' : 'classes'}.
          </p>
        )}
        {lostSome && <p className="mb-4 rounded-2xl bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-900" role="alert">Some of your classes could not be shown. Reload the page, and tell us if it happens again.</p>}
        {classes === null && <SkeletonCard lines={3} label="Loading your classes" />}
        {classes !== null && (
          <>
            {cards.length > 0 && <div className="mb-4"><ClassTiles cards={cards} newLearners={notices.total} /></div>}
            <ClassList cards={cards} notices={notices.classes} onOpen={setOpen} extra={<NewClass onCreated={(id) => { markStale(); setOpen(id); }} />} />
          </>
        )}
      </DashboardPage>
    </div>
  );
}
