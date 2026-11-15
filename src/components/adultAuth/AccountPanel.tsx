'use client';
// A minimal account page for adults: who is signed in, with which roles, and sign out. Later phases (families, teachers) grow from here.
import { useEffect, useState } from 'react';
import TeacherApply from './TeacherApply';

interface Me { user: { email: string } | null; roles: string[] }

const ROLE_LABEL: Record<string, string> = { parent: 'Parent or guardian', teacher: 'Teacher', moderator: 'Subject moderator', school_admin: 'School admin' };

/** Two steps: read what will be deleted, then type your own address to confirm. The server checks the address again. */
function DeleteAccount({ email, roles }: { email: string; roles: string[] }) {
  const [step, setStep] = useState<'idle' | 'confirm' | 'working' | 'done'>('idle');
  const [typed, setTyped] = useState('');
  const [msg, setMsg] = useState('');
  const matches = typed.trim().toLowerCase() === email.toLowerCase();

  const go = async () => {
    if (!matches) return;
    setStep('working'); setMsg('');
    const res = await fetch('/api/auth/delete', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Auth-Action': 'account-delete' }, body: JSON.stringify({ confirm: typed }), cache: 'no-store', referrerPolicy: 'no-referrer' }).catch(() => null);
    if (res?.ok) { setStep('done'); return; }
    const j = res ? ((await res.json().catch(() => ({}))) as { error?: string }) : {};
    setMsg(j.error ?? 'Could not reach the server. Nothing was deleted. Check your connection and try again.');
    setStep('confirm');
  };

  if (step === 'done') {
    return (
      <div className="mt-8 border-t border-slate-200 pt-6" role="status">
        <p className="font-semibold text-slate-900">Your account is deleted.</p>
        <p className="mt-1 text-slate-700">You are signed out everywhere. Your children&apos;s accounts are untouched. <a className="underline" href="/">Back to PrepPals</a></p>
      </div>
    );
  }
  return (
    <section className="mt-8 border-t border-slate-200 pt-6" aria-label="Delete my account">
      <h2 className="text-base font-bold text-slate-900">Delete my account</h2>
      {step === 'idle' ? (
        <>
          <p className="mt-1 text-sm text-slate-700">You can erase your account and the information we hold about you.</p>
          <button onClick={() => setStep('confirm')} className="mt-3 min-h-11 rounded-xl border border-red-300 bg-white px-4 text-base font-semibold text-red-700">Delete my account…</button>
        </>
      ) : (
        <div className="mt-2 rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="text-sm font-semibold text-red-900">This cannot be undone. It deletes:</p>
          <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-red-900">
            <li>your account, and your sign-in on every device;</li>
            <li>your links to your children (see below), and your weekly email settings;</li>
            {roles.includes('teacher') && <li>your classes, their join codes and who is in them, your exam scopes, and your teacher application with your SACE number;</li>}
            <li>any sign-in links sent to your address.</li>
          </ul>
          <p className="mt-3 text-sm text-red-900"><strong>What stays:</strong> your children&apos;s accounts and their progress are not deleted. A consent you gave for a child stays on record so their data stays lawful, but your name is removed from it.</p>
          <label className="mt-4 block text-sm font-semibold text-red-950">
            Type your email address ({email}) to confirm
            <input value={typed} onChange={(e) => setTyped(e.target.value)} type="email" autoComplete="off" className="mt-1 min-h-11 w-full rounded-lg border border-red-300 bg-white px-3 py-2 text-base font-normal text-slate-900" />
          </label>
          <div className="mt-3 flex gap-2">
            <button onClick={() => void go()} disabled={!matches || step === 'working'} className="min-h-11 flex-1 rounded-xl bg-red-700 px-4 text-base font-semibold text-white disabled:opacity-50">{step === 'working' ? 'Deleting…' : 'Delete my account for good'}</button>
            <button onClick={() => { setStep('idle'); setTyped(''); setMsg(''); }} disabled={step === 'working'} className="min-h-11 rounded-xl border border-slate-300 bg-white px-4 text-base font-semibold text-slate-800">Keep it</button>
          </div>
          {msg && <p className="mt-2 text-sm text-red-800" role="alert">{msg}</p>}
        </div>
      )}
    </section>
  );
}

export default function AccountPanel() {
  const [me, setMe] = useState<Me | null | 'error'>(null);
  const [out, setOut] = useState(false);

  useEffect(() => {
    let live = true;
    fetch('/api/auth/me', { cache: 'no-store' })
      .then((r) => (r.ok ? (r.json() as Promise<Me>) : Promise.reject(new Error('me'))))
      .then((m) => { if (live) setMe(m); })
      .catch(() => { if (live) setMe('error'); });
    return () => { live = false; };
  }, []);

  const signOut = async () => {
    setOut(true);
    try {
      await fetch('/api/auth/logout', { method: 'POST', headers: { 'X-Auth-Action': 'logout' }, cache: 'no-store' });
    } finally {
      window.location.assign('/sign-in');
    }
  };

  return (
    <main className="mx-auto min-h-screen max-w-md bg-slate-50 px-4 py-10">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">PrepPals</p>
        <h1 className="mt-1 text-2xl font-bold text-slate-900">Your account</h1>
        {me === null && <p className="mt-3 text-slate-600" role="status">Loading…</p>}
        {me === 'error' && <p className="mt-3 text-red-700" role="alert">Could not load your account. Try again.</p>}
        {me && me !== 'error' && !me.user && (
          <>
            <p className="mt-3 text-slate-700">You are not signed in.</p>
            <a href="/sign-in" className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white">Sign in</a>
          </>
        )}
        {me && me !== 'error' && me.user && (
          <>
            <p className="mt-3 text-slate-700">Signed in as <strong>{me.user.email}</strong>.</p>
            <ul className="mt-3 list-disc pl-5 text-slate-700">{me.roles.map((r) => <li key={r}>{ROLE_LABEL[r] ?? r}</li>)}</ul>
            <TeacherApply roles={me.roles} />
            <button onClick={() => void signOut()} disabled={out} className="mt-6 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base font-semibold text-slate-800 disabled:opacity-60">
              {out ? 'Signing out…' : 'Sign out'}
            </button>
            <DeleteAccount email={me.user.email} roles={me.roles} />
          </>
        )}
      </div>
    </main>
  );
}
