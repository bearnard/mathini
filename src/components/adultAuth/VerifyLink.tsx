'use client';
// Opens a sign-in link. The token is in the URL fragment, which the browser never sends to a server, so it is not in request logs. It is read
// once, removed from the address bar, and held in memory only. Signing in needs a CLICK: a mail scanner that opens the link cannot use it up.
import { useEffect, useRef, useState } from 'react';
import { isWellFormedToken } from '../../lib/server/adultAuth/crypto';
import { adultLandingPath } from '../../lib/shared/landingPath';

type State = 'loading' | 'ready' | 'working' | 'failed' | 'invalid';

export default function VerifyLink() {
  const [token, setToken] = useState<string | null>(null);
  const [state, setState] = useState<State>('loading');
  const [message, setMessage] = useState('');
  const read = useRef(false);

  useEffect(() => {
    // Read the fragment ONCE: development runs effects twice, and the second run would find the address bar already cleared.
    if (read.current) return;
    read.current = true;
    const t = window.location.hash.replace(/^#/, '');
    try {
      if (window.location.hash) window.history.replaceState(null, '', window.location.pathname);
    } catch {
      /* no history API: carry on */
    }
    if (isWellFormedToken(t)) {
      setToken(t);
      setState('ready');
    } else {
      setState('invalid');
    }
  }, []);

  const go = async () => {
    if (!token) return;
    setState('working');
    try {
      const res = await fetch('/api/auth/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Auth-Action': 'verify' },
        body: JSON.stringify({ token }),
        cache: 'no-store',
        referrerPolicy: 'no-referrer',
      });
      if (res.ok) {
        // Teachers go to their classes, school admins to their school, parents to their children; anyone else to the account page.
        const j = (await res.json().catch(() => ({}))) as { roles?: string[] };
        window.location.assign(adultLandingPath(j.roles));
        return;
      }
      const j = (await res.json().catch(() => ({}))) as { error?: string };
      setMessage(j.error ?? 'This link could not be used.');
      setState('failed');
    } catch {
      setMessage('Could not reach the server. Check your connection and try again.');
      setState('ready');
    }
  };

  return (
    <main className="mx-auto min-h-screen max-w-md bg-slate-50 px-4 py-10">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">PrepPals</p>
        <h1 className="mt-1 text-2xl font-bold text-slate-900">Sign in</h1>
        {state === 'loading' && <p className="mt-3 text-slate-600" role="status">One moment…</p>}
        {(state === 'ready' || state === 'working') && (
          <>
            <p className="mt-3 text-slate-700">Press the button to finish signing in on this device.</p>
            <button onClick={() => void go()} disabled={state === 'working'} className="mt-5 min-h-12 w-full rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white hover:bg-indigo-700 disabled:opacity-60">
              {state === 'working' ? 'Signing in…' : 'Sign in'}
            </button>
            {message && <p className="mt-3 text-sm text-red-700" role="alert">{message}</p>}
          </>
        )}
        {(state === 'failed' || state === 'invalid') && (
          <>
            <p className="mt-3 text-slate-700" role="alert">{state === 'failed' ? message : 'This link is not valid. Ask for a new one.'}</p>
            <a href="/sign-in" className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white">Get a new link</a>
          </>
        )}
      </div>
    </main>
  );
}
