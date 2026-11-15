'use client';
// Adult sign-in (ADR 0003 section 2): type an email, get a link. Talks only to /api/auth. The reply is the same whether or not the address
// has an account, and the page never says otherwise.
import { useState } from 'react';

type State = 'idle' | 'sending' | 'sent' | 'limited' | 'unavailable' | 'error';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<State>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('sending');
    try {
      const res = await fetch('/api/auth/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Auth-Action': 'request' },
        body: JSON.stringify({ email }),
        cache: 'no-store',
        referrerPolicy: 'no-referrer',
      });
      setState(res.ok ? 'sent' : res.status === 429 ? 'limited' : res.status === 503 ? 'unavailable' : 'error');
    } catch {
      setState('error');
    }
  };

  return (
    <main className="mx-auto min-h-screen max-w-md bg-slate-50 px-4 py-10">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">PrepPals</p>
        <h1 className="mt-1 text-2xl font-bold text-slate-900">Parents and teachers: sign in</h1>
        {state === 'sent' ? (
          <div className="mt-4 text-slate-700" role="status">
            <p className="font-semibold">Check your email.</p>
            <p className="mt-2">If that address can sign in, a link is on its way. It works once and expires in 15 minutes. Open it on this device.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-4 space-y-4">
            <p className="text-slate-700">Enter your email address and we will send you a link. There is no password to remember.</p>
            <label className="block">
              <span className="text-sm font-semibold text-slate-800">Email address</span>
              <input
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                maxLength={254}
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                className="mt-1 min-h-11 w-full rounded-lg border border-slate-300 px-3 py-2 text-base text-slate-900"
              />
            </label>
            <button type="submit" disabled={state === 'sending'} className="min-h-12 w-full rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white hover:bg-indigo-700 disabled:opacity-60">
              {state === 'sending' ? 'Sending…' : 'Email me a link'}
            </button>
            <p className="min-h-6 text-sm text-red-700" role="alert">
              {state === 'limited' && 'Too many requests. Please wait a while and try again.'}
              {state === 'unavailable' && 'Email sign-in is not available yet. Please try again later.'}
              {state === 'error' && 'Something went wrong. Please try again.'}
            </p>
          </form>
        )}
        <p className="mt-4 text-sm text-slate-600">Learners do not use this page: they sign in with their login code and PIN.</p>
      </div>
    </main>
  );
}
