'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { ProgressResponse } from '../../lib/shared/progressTypes';
import ProgressView from './ProgressView';

type State = { kind: 'loading' } | { kind: 'ready'; data: ProgressResponse } | { kind: 'signin' } | { kind: 'error' };

/** Loads GET /api/progress and shows it. Loading, signed-out and failure states are friendly and never blame the learner. */
export default function ProgressPage() {
  const [state, setState] = useState<State>({ kind: 'loading' });
  useEffect(() => {
    let live = true;
    fetch('/api/progress', { cache: 'no-store' })
      .then(async (res) => {
        if (res.status === 401 || res.status === 403) return live && setState({ kind: 'signin' });
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as ProgressResponse;
        if (live) setState({ kind: 'ready', data });
      })
      .catch(() => live && setState({ kind: 'error' }));
    return () => {
      live = false;
    };
  }, []);

  if (state.kind === 'ready') return <ProgressView data={state.data} />;
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-3 px-4 py-10 text-center">
      <h1 className="text-2xl font-extrabold text-slate-900">My progress</h1>
      {state.kind === 'loading' && <p className="text-slate-700">Getting your progress ready…</p>}
      {state.kind === 'signin' && (
        <>
          <p className="text-slate-700">Sign in to see how you are growing.</p>
          <Link href="/app" className="mx-auto inline-flex min-h-11 items-center rounded-xl bg-brand-orange px-5 py-2 font-extrabold text-white">Go to the app</Link>
        </>
      )}
      {state.kind === 'error' && <p className="text-slate-700">We could not load your progress just now. Please try again in a moment.</p>}
    </main>
  );
}
