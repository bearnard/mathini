'use client';
// A parent opens the link their child made (/parent/link#<token>). The token is in the fragment (never sent to a server), removed from the address
// bar, held in memory only, and used on a CLICK. The parent must be signed in first.
import { useEffect, useRef, useState } from 'react';
import { isWellFormedToken } from '../../lib/server/adultAuth/crypto';
import { call } from './api';

export default function InviteLanding() {
  const [token, setToken] = useState<string | null>(null);
  const [signedIn, setSignedIn] = useState<boolean | null>(null);
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<'loading' | 'ready' | 'working' | 'done' | 'failed'>('loading');
  const [msg, setMsg] = useState('');
  const read = useRef(false);

  useEffect(() => {
    if (read.current) return; // development runs effects twice; the fragment is only there the first time
    read.current = true;
    const t = window.location.hash.replace(/^#/, '');
    try { if (window.location.hash) window.history.replaceState(null, '', window.location.pathname); } catch { /* carry on */ }
    setToken(isWellFormedToken(t) ? t : null);
    void call<{ user: unknown }>('/api/auth/me').then((r) => { setSignedIn(r.ok && !!r.data.user); setState('ready'); });
  }, []);

  const go = async () => {
    if (!token) return;
    setState('working'); setMsg('');
    const r = await call<{ child?: { displayName: string } }>('/api/parent/link-invite', 'parent-link-invite', { token, consent });
    if (r.ok) { setMsg(r.data.child?.displayName ?? ''); setState('done'); } else { setMsg(r.data.error ?? 'That did not work.'); setState('failed'); }
  };

  return (
    <main className="mx-auto min-h-screen max-w-md bg-slate-50 px-4 py-10">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">PrepPals</p>
        <h1 className="mt-1 text-2xl font-bold text-slate-900">Link your child</h1>
        {state === 'loading' && <p className="mt-3 text-slate-600" role="status">One moment…</p>}
        {state !== 'loading' && !token && <p className="mt-3 text-slate-700" role="alert">This link is not valid. Ask your child to make a new one.</p>}
        {state !== 'loading' && token && signedIn === false && (
          <>
            <p className="mt-3 text-slate-700">Sign in first, then open your child&apos;s link again.</p>
            <a href="/sign-in" className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white">Sign in</a>
          </>
        )}
        {token && signedIn && (state === 'ready' || state === 'working' || state === 'failed') && (
          <>
            <p className="mt-3 text-slate-700">Press the button to link this learner to your account. You will then see their progress and can reset their PIN.</p>
            <label className="mt-4 flex items-start gap-3 text-sm text-slate-800">
              <input type="checkbox" className="mt-1 h-6 w-6 flex-none" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
              <span>I am this learner&apos;s parent or guardian, and I agree to the <a className="underline" href="/privacy">privacy notice</a>. (You can withdraw this at any time.)</span>
            </label>
            <button onClick={() => void go()} disabled={state === 'working'} className="mt-5 min-h-12 w-full rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white disabled:opacity-60">{state === 'working' ? 'Linking…' : 'Link my child'}</button>
            {state === 'failed' && <p className="mt-3 text-sm text-red-700" role="alert">{msg}</p>}
          </>
        )}
        {state === 'done' && (
          <>
            <p className="mt-3 text-slate-700" role="status">{msg ? `${msg} is linked to your account.` : 'Your child is linked.'}</p>
            <a href="/parent" className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white">Go to your children</a>
          </>
        )}
      </div>
    </main>
  );
}
