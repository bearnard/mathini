'use client';
// A minimal account page for adults: who is signed in, with which roles, and sign out. Later phases (families, teachers) grow from here.
import { useEffect, useState } from 'react';

interface Me { user: { email: string } | null; roles: string[] }

const ROLE_LABEL: Record<string, string> = { parent: 'Parent or guardian', teacher: 'Teacher', moderator: 'Subject moderator', school_admin: 'School admin' };

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
            <button onClick={() => void signOut()} disabled={out} className="mt-6 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base font-semibold text-slate-800 disabled:opacity-60">
              {out ? 'Signing out…' : 'Sign out'}
            </button>
          </>
        )}
      </div>
    </main>
  );
}
