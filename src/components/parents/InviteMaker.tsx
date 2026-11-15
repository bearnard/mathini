'use client';
// On the LEARNER's own screen: make a link for a parent. The learner is identified by the pp_session cookie on the server; this page only asks.
import { useState } from 'react';
import { call } from './api';

export default function InviteMaker() {
  const [link, setLink] = useState('');
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);

  const make = async () => {
    setBusy(true); setMsg(''); setCopied(false);
    const r = await call<{ token: string }>('/api/students/me/parent-invite', 'parent-invite', {});
    setBusy(false);
    if (r.ok) setLink(`${window.location.origin}/parent/link#${r.data.token}`);
    else setMsg(r.status === 401 ? 'Please log in first.' : r.data.error ?? 'That did not work.');
  };
  const copy = async () => { try { await navigator.clipboard.writeText(link); setCopied(true); } catch { setMsg('Press and hold the link to copy it.'); } };
  const share = async () => { try { await navigator.share({ title: 'PrepPals', text: 'Link my PrepPals account to yours:', url: link }); } catch { /* cancelled */ } };

  return (
    <main className="mx-auto min-h-screen max-w-md bg-slate-50 px-4 py-10">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">PrepPals</p>
        <h1 className="mt-1 text-2xl font-bold text-slate-900">Link a parent</h1>
        <p className="mt-3 text-slate-700">Make a link and send it to your parent or guardian. They open it, sign in with their email, and can then see how you are doing and reset your PIN if you forget it.</p>
        <button onClick={() => void make()} disabled={busy} className="mt-5 min-h-12 w-full rounded-xl bg-indigo-600 px-4 text-base font-semibold text-white disabled:opacity-60">{busy ? 'Making…' : 'Make a link for my parent'}</button>
        {link && (
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="break-all text-sm text-slate-900" data-testid="invite-link">{link}</p>
            <p className="mt-2 text-xs text-slate-600">It works once and stops working after an hour. Only send it to your parent or guardian.</p>
            <div className="mt-3 flex gap-2">
              <button onClick={() => void copy()} className="min-h-11 flex-1 rounded-xl border border-slate-300 bg-white px-4 font-semibold text-slate-800">{copied ? 'Copied' : 'Copy'}</button>
              {typeof navigator !== 'undefined' && 'share' in navigator && <button onClick={() => void share()} className="min-h-11 flex-1 rounded-xl border border-slate-300 bg-white px-4 font-semibold text-slate-800">Share</button>}
            </div>
          </div>
        )}
        <p className="mt-3 min-h-6 text-sm text-red-700" role="alert">{msg}</p>
      </div>
    </main>
  );
}
