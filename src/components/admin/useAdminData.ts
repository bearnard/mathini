'use client';

import { useEffect, useState } from 'react';

export type State<T> = { status: 'loading' } | { status: 'error'; code: number } | { status: 'ok'; data: T };

/** Fetches an admin API with the current filters. Keeps showing the previous data while a new filter loads. */
export function useAdminData<T>(path: string, qs: string): State<T> {
  const [state, setState] = useState<State<T>>({ status: 'loading' });
  useEffect(() => {
    const ctrl = new AbortController();
    setState((s) => (s.status === 'ok' ? s : { status: 'loading' }));
    fetch(`${path}${qs ? `?${qs}` : ''}`, { signal: ctrl.signal, cache: 'no-store' })
      .then(async (res) => {
        if (!res.ok) throw Object.assign(new Error('bad'), { code: res.status });
        setState({ status: 'ok', data: (await res.json()) as T });
      })
      .catch((e: { name?: string; code?: number }) => {
        if (e.name === 'AbortError') return;
        setState({ status: 'error', code: e.code ?? 0 });
      });
    return () => ctrl.abort();
  }, [path, qs]);
  return state;
}
