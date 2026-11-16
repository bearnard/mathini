'use client';
// ADR 0003 section 6: the school admin's area. Confirm or decline teachers who named their school, and see how the school's classes are doing.
// School-level numbers first; a class opens into the same view its teacher has (nicknames only). Only the school(s) the owner appointed them to.
import { useEffect, useState } from 'react';
import ClassProgressPanel from '../teacher/ClassProgressPanel';
import type { SchoolProgress } from '../../lib/shared/schoolProgressTypes';

interface Overview {
  schools: { id: string; name: string }[];
  schoolId: string;
  applications: { userId: string; email: string; schoolName: string; province: string | null; subjectsNote: string | null; saceMasked: string; submittedAt: number }[];
  progress: SchoolProgress | null;
}

const num = (n: number | null, suffix = '') => (n === null ? '–' : `${String(n).replace('.', ',')}${suffix}`);
const when = (ms: number) => new Date(ms).toLocaleDateString('en-ZA', { timeZone: 'Africa/Johannesburg', day: 'numeric', month: 'short', year: 'numeric' });
const btn = 'min-h-12 rounded-xl border border-slate-300 bg-white px-4 text-base font-semibold text-slate-800 disabled:opacity-60';
const btnPrimary = 'min-h-12 rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white disabled:opacity-60';

async function getJson<T>(url: string): Promise<{ ok: true; data: T } | { ok: false; status: number; error: string }> {
  try {
    const res = await fetch(url, { cache: 'no-store' });
    const j = (await res.json().catch(() => ({}))) as T & { error?: string };
    return res.ok ? { ok: true, data: j } : { ok: false, status: res.status, error: String((j as { error?: string }).error ?? 'That did not work.') };
  } catch {
    return { ok: false, status: 0, error: 'That did not work. Check your connection and try again.' };
  }
}

function Application({ a, schoolId, onDone }: { a: Overview['applications'][number]; schoolId: string; onDone: (decision: 'confirm' | 'decline' | null) => void }) {
  const [note, setNote] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const decide = async (decision: 'confirm' | 'decline') => {
    if (!window.confirm(decision === 'confirm' ? `Confirm that ${a.email} teaches at your school? They will get a teacher account.` : `Decline ${a.email}?`)) return;
    setBusy(true); setErr('');
    try {
      const res = await fetch(`/api/school/applications/${a.userId}/decide?school=${encodeURIComponent(schoolId)}`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Auth-Action': 'school-decide' }, body: JSON.stringify({ decision, note }) });
      const j = (await res.json().catch(() => ({}))) as { error?: string };
      if (res.ok) onDone(decision);
      else { setErr(j.error ?? 'That did not work.'); if (res.status === 409 || res.status === 404) onDone(null); } // already decided elsewhere: the list is out of date
    } catch { setErr('That did not work. Check your connection and try again.'); }
    setBusy(false);
  };
  return (
    <li className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="break-all font-semibold text-slate-900">{a.email}</p>
      <p className="text-sm text-slate-600">{a.schoolName}{a.province ? `, ${a.province}` : ''} · sent {when(a.submittedAt)}</p>
      {a.subjectsNote && <p className="text-sm text-slate-700">Teaches: {a.subjectsNote}</p>}
      <p className="text-sm text-slate-600">SACE number {a.saceMasked} (the owner checks the full number)</p>
      <label className="mt-3 block text-sm font-medium text-slate-700">Note (optional)
        <input value={note} onChange={(e) => setNote(e.target.value)} maxLength={300} className="mt-1 block min-h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-base text-slate-900" />
      </label>
      {err && <p className="mt-2 text-sm text-red-700" role="alert">{err}</p>}
      <div className="mt-3 flex gap-2">
        <button className={`${btnPrimary} flex-1`} disabled={busy} onClick={() => void decide('confirm')}>Confirm teacher</button>
        <button className={btn} disabled={busy} onClick={() => void decide('decline')}>Decline</button>
      </div>
    </li>
  );
}

export default function SchoolArea() {
  const [data, setData] = useState<Overview | null | 'error' | 'denied' | 'signin'>(null);
  const [school, setSchool] = useState('');
  const [open, setOpen] = useState<string | null>(null);

  const load = (s: string) => {
    void getJson<Overview>(`/api/school/overview${s ? `?school=${encodeURIComponent(s)}` : ''}`).then((r) => {
      if (r.ok) { setData(r.data); setSchool(r.data.schoolId); } else setData(r.status === 401 ? 'signin' : r.status === 403 || r.status === 404 ? 'denied' : 'error');
    });
  };
  useEffect(() => load(''), []);
  // The teacher leaves the waiting list AT ONCE (a second click would only meet a 409), then the school's numbers are read again.
  const [done, setDone] = useState('');
  const decided = (a: Overview['applications'][number], d: 'confirm' | 'decline' | null) => {
    setData((cur) => (cur && typeof cur === 'object' ? { ...cur, applications: cur.applications.filter((x) => x.userId !== a.userId) } : cur));
    if (d) setDone(d === 'confirm' ? `${a.email} now has a teacher account.` : `${a.email} was declined.`);
    load(school);
  };

  const p = data && typeof data === 'object' ? data.progress : null;
  return (
    <main className="mx-auto min-h-screen max-w-md bg-slate-50 px-4 py-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">PrepPals</p>
      <h1 className="mt-1 text-2xl font-bold text-slate-900">Your school</h1>
      {data === null && <p className="mt-3 text-slate-600" role="status">Loading…</p>}
      {data === 'error' && <p className="mt-3 text-red-700" role="alert">Could not load your school. Try again.</p>}
      {data === 'signin' && (<><p className="mt-3 text-slate-700">Sign in to see your school.</p><a href="/sign-in" className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white">Sign in</a></>)}
      {data === 'denied' && <p className="mt-3 text-slate-700">This area is for school admins. The owner appoints them for each school. <a href="/account" className="font-semibold text-indigo-700 underline">Back to your account</a></p>}
      {data && typeof data === 'object' && (
        <>
          {data.schools.length > 1 && (
            <label className="mt-3 block text-sm font-medium text-slate-700">School
              <select className="mt-1 block min-h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-base text-slate-900" value={school} onChange={(e) => { setOpen(null); load(e.target.value); }}>
                {data.schools.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </label>
          )}
          <p className="mt-2 text-lg font-semibold text-slate-900">{p?.schoolName ?? data.schools.find((s) => s.id === data.schoolId)?.name}</p>

          <section className="mt-5" aria-label="Teachers waiting">
            <h2 className="text-lg font-bold text-slate-900">Teachers waiting for you{data.applications.length ? ` (${data.applications.length})` : ''}</h2>
            {done && <p className="mt-1 rounded-xl bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-900" role="status">{done}</p>}
            {data.applications.length === 0 ? <p className="mt-1 text-slate-600">No one is waiting. Teachers who name your school on their application will appear here.</p> : (
              <ul className="mt-2 space-y-3">{data.applications.map((a) => <Application key={a.userId} a={a} schoolId={data.schoolId} onDone={(d) => decided(a, d)} />)}</ul>
            )}
          </section>

          <section className="mt-6" aria-label="Classes">
            <h2 className="text-lg font-bold text-slate-900">How the classes are doing</h2>
            {!p || p.classes.length === 0 ? <p className="mt-1 text-slate-600">No classes yet. They appear when your teachers make them.</p> : (
              <>
                <dl className="mt-2 grid grid-cols-2 gap-2">
                  {[
                    ['Classes', String(p.totals.classes)], ['Learners', String(p.totals.learners)],
                    ['Practised this week', `${p.totals.practisedLast7} of ${p.totals.learners}`], ['Practice test average', num(p.totals.mockAveragePct, '%')],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-2xl border border-slate-200 bg-white p-3 text-center"><dd className="text-2xl font-black text-indigo-700">{v}</dd><dt className="text-xs font-semibold text-slate-600">{k}</dt></div>
                  ))}
                </dl>
                <ul className="mt-3 space-y-3">
                  {p.classes.map((c) => (
                    <li key={c.classId} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <button className="w-full text-left" onClick={() => setOpen(open === c.classId ? null : c.classId)} aria-expanded={open === c.classId}>
                        <span className="block break-words font-bold text-slate-900">{c.name}</span>
                        <span className="block break-all text-sm text-slate-600">Grade {c.grade} · {c.teacherEmail}</span>
                        <span className="mt-2 block h-2.5 overflow-hidden rounded-full bg-slate-100" role="img" aria-label={`${c.practisedLast7} of ${c.members} learners practised this week`}>
                          <span className="block h-full rounded-full bg-emerald-500" style={{ width: `${c.members ? (100 * c.practisedLast7) / c.members : 0}%` }} />
                        </span>
                        <span className="mt-1 block text-sm text-slate-700">{c.practisedLast7} of {c.members} practised this week · average {num(c.avgAccuracyPct, '%')} · practice test {num(c.mockAveragePct, '%')}{c.exam ? ` · ${c.exam.title}: ${c.exam.daysLeft === 0 ? 'today' : `${c.exam.daysLeft} days`}` : ''}</span>
                        <span className="mt-1 block text-sm font-semibold text-indigo-700">{open === c.classId ? 'Hide the class' : 'Open the class'}</span>
                      </button>
                      {open === c.classId && <ClassProgressPanel classId={c.classId} endpoint={`/api/school/classes/${c.classId}/progress?school=${encodeURIComponent(data.schoolId)}`} />}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>
        </>
      )}
    </main>
  );
}
