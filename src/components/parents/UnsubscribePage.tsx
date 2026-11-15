'use client';
// One click to stop the weekly summary email. The token is in the URL fragment (never sent to a server), cleared from the address bar and held in
// memory. It needs a click: a mail scanner opening the link cannot unsubscribe anyone by accident.
import { useEffect, useRef, useState } from 'react';
import { call } from './api';

export default function UnsubscribePage() {
  const [token, setToken] = useState<string | null>(null);
  const [state, setState] = useState<'loading' | 'ready' | 'working' | 'done' | 'failed' | 'invalid'>('loading');
  const [msg, setMsg] = useState('');
  const read = useRef(false);

  useEffect(() => {
    if (read.current) return; // development runs effects twice; the fragment is only there the first time
    read.current = true;
    const t = window.location.hash.replace(/^#/, '');
    try { if (window.location.hash) window.history.replaceState(null, '', window.location.pathname); } catch { /* carry on */ }
    if (t.length > 20) { setToken(t); setState('ready'); } else setState('invalid');
  }, []);

  const go = async () => {
    if (!token) return;
    setState('working'); setMsg('');
    const res = await fetch('/api/unsubscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token }), cache: 'no-store', referrerPolicy: 'no-referrer' }).catch(() => null);
    if (res?.ok) { setState('done'); return; }
    const j = res ? ((await res.json().catch(() => ({}))) as { error?: string }) : {};
    setMsg(j.error ?? 'Could not reach the server. Check your connection and try again.');
    setState('failed');
  };

  return (
    <main className="mx-auto min-h-screen max-w-md bg-slate-50 px-4 py-10">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">PrepPals</p>
        <h1 className="mt-1 text-2xl font-bold text-slate-900">Weekly summary email</h1>
        {state === 'loading' && <p className="mt-3 text-slate-600" role="status">One moment…</p>}
        {(state === 'ready' || state === 'working' || state === 'failed') && (
          <>
            <p className="mt-3 text-slate-700">Press the button to stop the weekly email about your child. You can turn it back on any time on your children page.</p>
            <button onClick={() => void go()} disabled={state === 'working'} className="mt-5 min-h-12 w-full rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white disabled:opacity-60">{state === 'working' ? 'Stopping…' : 'Stop the weekly email'}</button>
            {state === 'failed' && <p className="mt-3 text-sm text-red-700" role="alert">{msg}</p>}
          </>
        )}
        {state === 'done' && <p className="mt-3 text-slate-700" role="status">Done. You will not get the weekly email any more. Your child&apos;s account and your consent are unchanged. <a className="underline" href="/parent">Your children page</a></p>}
        {state === 'invalid' && <p className="mt-3 text-slate-700" role="alert">This link is not valid. <a className="underline" href="/parent">Sign in and use the switch on your children page</a> instead.</p>}
      </div>
    </main>
  );
}
