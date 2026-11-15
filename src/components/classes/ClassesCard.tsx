'use client';
// ADR 0003 phase 3: a learner joins a class with the code their teacher gave them, and can leave at any time.
// The notice says plainly what the teacher will see. Nothing here shows the teacher's name or email.
import { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import Card from '../ui/Card';
import { JOIN_NOTICE } from '../../lib/shared/classNotice';

interface Joined { classId: string; name: string; grade: number; schoolName: string }

async function post(url: string, action: string, body?: unknown): Promise<{ ok: boolean; data: Record<string, unknown> }> {
  try {
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Auth-Action': action }, body: JSON.stringify(body ?? {}) });
    return { ok: res.ok, data: (await res.json().catch(() => ({}))) as Record<string, unknown> };
  } catch {
    return { ok: false, data: { error: 'That did not work. Check your connection and try again.' } };
  }
}

export default function ClassesCard() {
  const [classes, setClasses] = useState<Joined[] | null>(null);
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState('');
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);

  const load = () => {
    fetch('/api/classes/mine', { cache: 'no-store' })
      .then((r) => (r.ok ? (r.json() as Promise<{ classes: Joined[] }>) : Promise.reject(new Error('x'))))
      .then((j) => setClasses(j.classes))
      .catch(() => setClasses([]));
  };
  useEffect(load, []);

  const join = async () => {
    setBusy(true); setMsg('');
    const r = await post('/api/classes/join', 'class-join', { code });
    setBusy(false);
    if (!r.ok) { setMsg(String(r.data.error ?? 'That did not work.')); return; }
    const j = r.data.joined as Joined;
    setMsg(r.data.alreadyMember ? `You are already in ${j.name}.` : `You joined ${j.name}.`);
    setCode(''); setOpen(false);
    load();
  };
  const leave = async (c: Joined) => {
    if (!window.confirm(`Leave ${c.name}? Your teacher will stop seeing your progress.`)) return;
    const r = await post(`/api/classes/${c.classId}/leave`, 'class-leave');
    if (r.ok) { setMsg(`You left ${c.name}.`); load(); } else setMsg(String(r.data.error ?? 'That did not work.'));
  };

  if (classes === null) return null;
  return (
    <Card className="mb-4 p-4 md:p-5" aria-label="Your classes">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700"><Users className="h-6 w-6" /></div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-bold text-slate-800 md:text-lg">{classes.length ? 'Your classes' : 'Join your class'}</h3>
          {classes.length === 0 && !open && <p className="text-sm text-slate-600">Got a code from your teacher? Join to practise what your class is learning.</p>}
        </div>
        {!open && <button onClick={() => { setOpen(true); setMsg(''); }} className="min-h-11 shrink-0 rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800">{classes.length ? 'Join another' : 'Join'}</button>}
      </div>
      {classes.length > 0 && (
        <ul className="mt-3 space-y-2">
          {classes.map((c) => (
            <li key={c.classId} className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-2">
              <span className="min-w-0 text-sm text-slate-800"><strong className="break-words">{c.name}</strong>{c.schoolName ? <span className="text-slate-600"> · {c.schoolName}</span> : null}</span>
              <button onClick={() => void leave(c)} className="min-h-11 shrink-0 px-2 text-sm font-semibold text-slate-700 underline">Leave</button>
            </li>
          ))}
        </ul>
      )}
      {open && (
        <form className="mt-3" onSubmit={(e) => { e.preventDefault(); void join(); }}>
          <label className="block text-sm font-medium text-slate-700">Class code
            <input value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} maxLength={12} autoCapitalize="characters" autoComplete="off" autoCorrect="off" spellCheck={false}
              className="mt-1 block min-h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-lg font-semibold uppercase tracking-widest text-slate-900" placeholder="ABCD EFGH" />
          </label>
          <p className="mt-2 text-sm text-slate-600">{JOIN_NOTICE}</p>
          <div className="mt-3 flex gap-2">
            <button type="submit" disabled={busy || code.trim().length < 8} className="min-h-12 flex-1 rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white disabled:opacity-60">{busy ? 'Joining…' : 'Join class'}</button>
            <button type="button" onClick={() => { setOpen(false); setCode(''); }} className="min-h-12 rounded-xl border border-slate-300 bg-white px-4 text-base font-semibold text-slate-800">Cancel</button>
          </div>
        </form>
      )}
      {msg && <p className="mt-3 text-sm font-medium text-slate-800" role="status">{msg}</p>}
    </Card>
  );
}
