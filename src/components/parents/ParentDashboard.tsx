'use client';
// The parent's page (ADR 0003 phase 2): children linked to me, with consent, a PIN reset and a way to link another child. Everything is decided on
// the server; this page only shows it and sends the buttons' requests.
import { useCallback, useEffect, useState } from 'react';
import { DashboardGrid, DashboardPage, EmptyState, GridItem, PageHeader, Skeleton, SkeletonCard } from '../dashboard';
import { call, type ChildSummary } from './api';
import ChildSection from './ChildSection';

type Me = { user: { email: string } | null; roles: string[] };

const btn = 'min-h-11 rounded-xl px-4 text-base font-semibold';
const field = 'mt-1 min-h-11 w-full rounded-lg border border-slate-300 px-3 py-2 text-base text-slate-900';

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

function SummarySwitch() {
  const [on, setOn] = useState<boolean | null>(null);
  const [note, setNote] = useState('');
  useEffect(() => {
    let live = true;
    void call<{ subscribed: boolean }>('/api/parent/summary').then((r) => { if (live) setOn(r.ok ? r.data.subscribed : null); });
    return () => { live = false; };
  }, []);
  const flip = async (next: boolean) => {
    setNote('');
    const r = await call<{ subscribed: boolean }>('/api/parent/summary', 'parent-summary', { subscribed: next });
    if (r.ok) setOn(r.data.subscribed); else setNote(r.data.error ?? 'That did not work.');
  };
  if (on === null) return null;
  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm" aria-label="Weekly email">
      <label className="flex items-start gap-3 text-sm text-slate-800">
        <input type="checkbox" className="mt-1 h-6 w-6 flex-none" checked={on} onChange={(e) => void flip(e.target.checked)} />
        <span>Send me a short summary email once a week about the children I have given consent for. <span className="text-slate-600">It uses only their practice results on PrepPals.</span></span>
      </label>
      {note && <p className="mt-2 text-sm text-red-700" role="alert">{note}</p>}
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

  const isParent = !!me && me !== 'error' && !!me.user && me.roles.includes('parent');
  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardPage>
        <PageHeader
          eyebrow="PrepPals"
          title="Your children"
          subtitle={isParent ? 'How each child is getting on, and the consent and PIN settings.' : undefined}
          actions={isParent ? <a className="text-sm font-semibold text-indigo-700 underline" href="/account">Your account</a> : undefined}
        />
        {me === null && <div role="status" aria-busy="true" aria-label="Loading"><Skeleton className="h-24 w-full" /></div>}
        {me === 'error' && <p className="text-red-700" role="alert">Could not load. Try again.</p>}
        {me && me !== 'error' && !me.user && <p className="text-slate-700">Please <a className="font-semibold underline" href="/sign-in">sign in</a> first.</p>}
        {me && me !== 'error' && me.user && !me.roles.includes('parent') && <p className="text-slate-700">This page is for parents and guardians.</p>}
        {isParent && (
          <div className="space-y-10">
            {children === null && <SkeletonCard label="Loading your children" />}
            {children && children.length === 0 && <EmptyState title="No child is linked yet">Link your child below with their login code and PIN, or with the link they send you.</EmptyState>}
            {(children ?? []).map((c) => <ChildSection key={c.id} child={c} now={now} onChanged={() => void load()} />)}
            <DashboardGrid>
              <GridItem><AddChild onLinked={() => void load()} /></GridItem>
              {children && children.length > 0 ? <GridItem><SummarySwitch /></GridItem> : null}
            </DashboardGrid>
          </div>
        )}
      </DashboardPage>
    </div>
  );
}
