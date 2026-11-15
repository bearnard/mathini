'use client';
// ADR 0003 phase 3: a signed-in adult asks for the teacher role. The role is granted only when the owner approves; this form never grants anything.
import { useEffect, useState } from 'react';

interface Application { status: 'pending' | 'approved' | 'rejected'; schoolName: string; saceMasked: string; submittedAt: number; note: string | null; canApplyAgainAt: number | null }

const PROVINCES = ['Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 'Limpopo', 'Mpumalanga', 'Northern Cape', 'North West', 'Western Cape'];
const field = 'mt-1 block min-h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-base text-slate-900';

export default function TeacherApply({ roles }: { roles: string[] }) {
  const [app, setApp] = useState<Application | null | 'error' | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const [sace, setSace] = useState('');
  const [school, setSchool] = useState('');
  const [province, setProvince] = useState('');
  const [note, setNote] = useState('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');
  const isTeacher = roles.includes('teacher');
  const [newJoins, setNewJoins] = useState(0);
  useEffect(() => {
    if (!isTeacher) return;
    fetch('/api/teacher/notices', { cache: 'no-store' }).then((r) => (r.ok ? (r.json() as Promise<{ total: number }>) : null)).then((j) => { if (j) setNewJoins(j.total); }).catch(() => {});
  }, [isTeacher]);

  const load = () => {
    fetch('/api/teacher/application', { cache: 'no-store' })
      .then((r) => (r.ok ? (r.json() as Promise<{ application: Application | null }>) : Promise.reject(new Error('x'))))
      .then((j) => setApp(j.application))
      .catch(() => setApp('error'));
  };
  useEffect(() => { if (!isTeacher) load(); }, [isTeacher]);

  const submit = async () => {
    setBusy(true); setErr('');
    try {
      const res = await fetch('/api/teacher/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Auth-Action': 'teacher-apply' },
        body: JSON.stringify({ saceNumber: sace, schoolName: school, province, subjectsNote: note }),
      });
      const j = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) { setErr(j.error ?? 'That did not work. Try again.'); return; }
      setOpen(false); setSace(''); setSchool(''); setProvince(''); setNote('');
      load();
    } catch {
      setErr('That did not work. Try again.');
    } finally {
      setBusy(false);
    }
  };

  if (isTeacher) {
    return (
      <section className="mt-6 border-t border-slate-200 pt-5" aria-label="Teacher area">
        <h2 className="text-lg font-bold text-slate-900">Your classes</h2>
        <a href="/teacher" className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white">Open the teacher area{newJoins > 0 && <span className="rounded-full bg-emerald-400 px-2 py-0.5 text-xs font-bold text-emerald-950">{newJoins} new</span>}</a>
      </section>
    );
  }
  if (app === undefined) return null;
  // After a rejection there is a 30-day wait (the server enforces it; this only says so instead of offering a form that would be refused).
  const own = app && app !== 'error' ? app : null;
  const waiting = !!own && own.status === 'rejected' && own.canApplyAgainAt !== null && Date.now() < own.canApplyAgainAt;
  const waitDate = waiting && own && own.canApplyAgainAt !== null ? new Date(own.canApplyAgainAt).toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Africa/Johannesburg' }) : '';
  return (
    <section className="mt-6 border-t border-slate-200 pt-5" aria-label="Apply as a teacher">
      <h2 className="text-lg font-bold text-slate-900">Are you a teacher?</h2>
      {app === 'error' && <p className="mt-2 text-sm text-red-700" role="alert">Could not load your application.</p>}
      {app && app !== 'error' && app.status === 'pending' && (
        <p className="mt-2 text-slate-700" role="status">Thank you. Your application for {app.schoolName} (SACE {app.saceMasked}) is waiting to be checked. We will approve it once we have confirmed your details.</p>
      )}
      {app && app !== 'error' && app.status === 'rejected' && (
        <p className="mt-2 text-slate-700" role="status">Your last application was not approved{app.note ? `: ${app.note}` : '.'} {waiting ? `You can send a new one on ${waitDate}.` : 'You can send a new one.'}</p>
      )}
      {(!app || (app !== 'error' && app.status === 'rejected' && !waiting)) && !open && (
        <>
          {!app && <p className="mt-2 text-slate-600">Teachers can create classes, set the exam scope and see how their class is doing. We check every teacher before turning this on.</p>}
          <button onClick={() => setOpen(true)} className="mt-3 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base font-semibold text-slate-800">Apply as a teacher</button>
        </>
      )}
      {open && (
        <form className="mt-3 space-y-3" onSubmit={(e) => { e.preventDefault(); void submit(); }}>
          <label className="block text-sm font-medium text-slate-700">SACE registration number
            <input className={field} value={sace} onChange={(e) => setSace(e.target.value)} maxLength={21} autoComplete="off" inputMode="text" required />
          </label>
          <label className="block text-sm font-medium text-slate-700">School name
            <input className={field} value={school} onChange={(e) => setSchool(e.target.value)} maxLength={120} required />
          </label>
          <label className="block text-sm font-medium text-slate-700">Province
            <select className={field} value={province} onChange={(e) => setProvince(e.target.value)}>
              <option value="">Choose</option>
              {PROVINCES.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </label>
          <label className="block text-sm font-medium text-slate-700">What do you teach? (optional)
            <input className={field} value={note} onChange={(e) => setNote(e.target.value)} maxLength={200} />
          </label>
          <p className="text-sm text-slate-600">Your SACE number is seen only by the owner, to check you. It is never shown to learners or other teachers.</p>
          {err && <p className="text-sm text-red-700" role="alert">{err}</p>}
          <div className="flex gap-2">
            <button type="submit" disabled={busy} className="min-h-12 flex-1 rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white disabled:opacity-60">{busy ? 'Sending…' : 'Send application'}</button>
            <button type="button" onClick={() => setOpen(false)} className="min-h-12 rounded-xl border border-slate-300 bg-white px-4 text-base font-semibold text-slate-800">Cancel</button>
          </div>
        </form>
      )}
    </section>
  );
}
