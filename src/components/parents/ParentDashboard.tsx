'use client';
// The parent's page (ADR 0003 phase 2): children linked to me, with consent, a PIN reset and a way to link another child. Everything is decided on
// the server; this page only shows it and sends the buttons' requests.
import { useCallback, useEffect, useState } from 'react';
import { ago, call, CONSENT_TEXT, type Activity, type ChildSummary } from './api';

type Me = { user: { email: string } | null; roles: string[] };

const btn = 'min-h-11 rounded-xl px-4 text-base font-semibold';
const field = 'mt-1 min-h-11 w-full rounded-lg border border-slate-300 px-3 py-2 text-base text-slate-900';

function ChildCard({ child, now, onChanged }: { child: ChildSummary; now: number; onChanged: () => void }) {
  const [activity, setActivity] = useState<Activity | null>(null);
  const [note, setNote] = useState('');
  const [pin, setPin] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let live = true;
    void call<{ activity: Activity }>(`/api/parent/children/${child.id}/progress`).then((r) => { if (live && r.ok) setActivity(r.data.activity); });
    return () => { live = false; };
  }, [child.id]);

  const act = async (path: string, action: string, body: unknown, done: (d: Record<string, unknown>) => void) => {
    setBusy(true); setNote('');
    const r = await call<Record<string, unknown>>(`/api/parent/children/${child.id}/${path}`, action, body);
    setBusy(false);
    if (r.ok) done(r.data); else setNote(r.data.error ?? 'That did not work.');
  };

  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm" aria-label={child.displayName}>
      <h2 className="text-lg font-bold text-slate-900">{child.displayName} <span className="text-sm font-semibold text-slate-600">Grade {child.grade}</span></h2>
      <p className="mt-1 text-sm text-slate-600">Last on PrepPals: {ago(child.lastSeenAt, now)}</p>
      {activity && (
        <dl className="mt-3 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-xl bg-slate-50 p-2"><dt className="text-xs text-slate-600">Answers, 7 days</dt><dd className="text-xl font-bold text-slate-900">{activity.attemptsLast7Days}</dd></div>
          <div className="rounded-xl bg-slate-50 p-2"><dt className="text-xs text-slate-600">Days practised, of 14</dt><dd className="text-xl font-bold text-slate-900">{activity.daysPractisedLast14}</dd></div>
          <div className="rounded-xl bg-slate-50 p-2"><dt className="text-xs text-slate-600">Recent answers right</dt><dd className="text-xl font-bold text-slate-900">{activity.recentAccuracyPct == null ? 'not yet' : `${activity.recentAccuracyPct}%`}</dd></div>
        </dl>
      )}
      <p className="mt-3 text-sm text-slate-700">{CONSENT_TEXT[child.consent]}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {child.consent === 'parent' ? (
          <button disabled={busy} className={`${btn} border border-slate-300 bg-white text-slate-800`} onClick={() => void act('consent', 'parent-consent', { give: false }, onChanged)}>Withdraw consent</button>
        ) : (
          <button disabled={busy} className={`${btn} bg-emerald-600 text-white`} onClick={() => void act('consent', 'parent-consent', { give: true }, onChanged)}>I give consent</button>
        )}
        <button disabled={busy} className={`${btn} border border-slate-300 bg-white text-slate-800`} onClick={() => { if (window.confirm(`Make a new PIN for ${child.displayName}? The old PIN stops working.`)) void act('reset-pin', 'parent-reset-pin', {}, (d) => setPin(String(d.pin))); }}>Reset PIN</button>
        <button disabled={busy} className={`${btn} text-red-700 underline`} onClick={() => { if (window.confirm(`Stop being linked to ${child.displayName}?`)) void act('unlink', 'parent-unlink', {}, onChanged); }}>Unlink</button>
      </div>
      {pin && (
        <div className="mt-3 rounded-xl border border-amber-300 bg-amber-50 p-3" role="status">
          <p className="text-sm text-amber-900">New PIN for {child.displayName}. Write it down and tell your child: it is shown only once.</p>
          <p className="mt-1 text-3xl font-bold tracking-widest text-amber-950">{pin}</p>
          <button className="mt-2 text-sm font-semibold text-slate-700 underline" onClick={() => setPin(null)}>I have written it down</button>
        </div>
      )}
      {note && <p className="mt-2 text-sm text-red-700" role="alert">{note}</p>}
    </section>
  );
}

function AddChild({ onLinked }: { onLinked: () => void }) {
  const [mode, setMode] = useState<'pin' | 'invite'>('pin');
  const [code, setCode] = useState('');
  const [pin, setPin] = useState('');
  const [invite, setInvite] = useState('');
  const [consent, setConsent] = useState(false);
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true); setMsg('');
    const token = invite.includes('#') ? invite.split('#').pop() ?? '' : invite.trim();
    const r = mode === 'pin'
      ? await call('/api/parent/link', 'parent-link', { loginCode: code, pin, consent })
      : await call('/api/parent/link-invite', 'parent-link-invite', { token, consent });
    setBusy(false);
    if (r.ok) { setCode(''); setPin(''); setInvite(''); onLinked(); } else setMsg(r.data.error ?? 'That did not work.');
  };

  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm" aria-label="Link a child">
      <h2 className="text-lg font-bold text-slate-900">Link a child</h2>
      <div className="mt-2 flex gap-2" role="group" aria-label="How to link">
        <button type="button" aria-pressed={mode === 'pin'} className={`${btn} flex-1 border-2 ${mode === 'pin' ? 'border-slate-800 bg-slate-800 text-white' : 'border-slate-300 bg-white text-slate-800'}`} onClick={() => setMode('pin')}>Code and PIN</button>
        <button type="button" aria-pressed={mode === 'invite'} className={`${btn} flex-1 border-2 ${mode === 'invite' ? 'border-slate-800 bg-slate-800 text-white' : 'border-slate-300 bg-white text-slate-800'}`} onClick={() => setMode('invite')}>Link from my child</button>
      </div>
      <form onSubmit={submit} className="mt-3 space-y-3">
        {mode === 'pin' ? (
          <>
            <label className="block"><span className="text-sm font-semibold text-slate-800">Your child&apos;s login code</span><input className={field} value={code} onChange={(e) => setCode(e.target.value)} autoCapitalize="characters" autoComplete="off" placeholder="TIGER-4821" required /></label>
            <label className="block"><span className="text-sm font-semibold text-slate-800">Your child&apos;s 4-digit PIN</span><input className={field} value={pin} onChange={(e) => setPin(e.target.value)} inputMode="numeric" pattern="\d{4}" maxLength={4} autoComplete="off" required /></label>
          </>
        ) : (
          <label className="block"><span className="text-sm font-semibold text-slate-800">The link your child sent you</span><input className={field} value={invite} onChange={(e) => setInvite(e.target.value)} autoComplete="off" required /></label>
        )}
        <label className="flex items-start gap-3 text-sm text-slate-800">
          <input type="checkbox" className="mt-1 h-6 w-6 flex-none" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
          <span>I am this learner&apos;s parent or guardian, and I agree to the <a className="underline" href="/privacy">privacy notice</a>. (You can withdraw this at any time.)</span>
        </label>
        <button type="submit" disabled={busy} className={`${btn} w-full bg-indigo-600 text-white disabled:opacity-60`}>{busy ? 'Linking…' : 'Link my child'}</button>
        <p className="min-h-6 text-sm text-red-700" role="alert">{msg}</p>
      </form>
    </section>
  );
}

export default function ParentDashboard() {
  const [me, setMe] = useState<Me | null | 'error'>(null);
  const [children, setChildren] = useState<ChildSummary[] | null>(null);
  const [now] = useState(() => Date.now());

  const load = useCallback(async () => {
    const m = await call<Me>('/api/auth/me');
    if (!m.ok) return setMe('error');
    setMe(m.data);
    if (m.data.user && m.data.roles.includes('parent')) {
      const c = await call<{ children: ChildSummary[] }>('/api/parent/children');
      setChildren(c.ok ? c.data.children : []);
    }
  }, []);
  useEffect(() => { void load(); }, [load]);

  return (
    <main className="mx-auto min-h-screen max-w-xl space-y-4 bg-slate-50 px-4 py-8">
      <h1 className="text-2xl font-bold text-slate-900">Your children</h1>
      {me === null && <p className="text-slate-600" role="status">Loading…</p>}
      {me === 'error' && <p className="text-red-700" role="alert">Could not load. Try again.</p>}
      {me && me !== 'error' && !me.user && <p className="text-slate-700">Please <a className="font-semibold underline" href="/sign-in">sign in</a> first.</p>}
      {me && me !== 'error' && me.user && !me.roles.includes('parent') && <p className="text-slate-700">This page is for parents and guardians.</p>}
      {me && me !== 'error' && me.user && me.roles.includes('parent') && (
        <>
          {children && children.length === 0 && <p className="text-slate-700">No child is linked yet. Link one below.</p>}
          {(children ?? []).map((c) => <ChildCard key={c.id} child={c} now={now} onChanged={() => void load()} />)}
          <AddChild onLinked={() => void load()} />
          <p className="text-sm text-slate-600"><a className="underline" href="/account">Your account</a></p>
        </>
      )}
    </main>
  );
}
