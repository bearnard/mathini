'use client';

import { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

/** "Show my login code": the signed-in learner can see their own code again (never the PIN, which the app cannot show). */
export default function MyLoginCode() {
  const [code, setCode] = useState<string | null>(null);
  const [state, setState] = useState<'idle' | 'loading' | 'error'>('idle');
  const show = async () => {
    setState('loading');
    try {
      const res = await fetch('/api/students/me/login-code', { cache: 'no-store' });
      if (!res.ok) throw new Error(String(res.status));
      setCode(((await res.json()) as { loginCode: string }).loginCode);
      setState('idle');
    } catch {
      setState('error');
    }
  };
  return (
    <Card className="mb-4 p-4 md:p-5" aria-label="My login code">
      <h3 className="text-base font-bold text-slate-800 md:text-lg">My login code</h3>
      {code ? (
        <>
          <p className="mt-2 font-mono text-2xl font-bold tracking-wider text-brand-blue" data-testid="my-login-code">{code}</p>
          <p className="mt-1 text-sm text-slate-600">You need this and your PIN to log in on another device. Your PIN is secret and the app cannot show it: if you forget it, a parent or guardian linked to you can make a new one.</p>
          <button type="button" className="mt-2 min-h-11 text-sm font-semibold text-slate-700 underline" onClick={() => setCode(null)}>Hide</button>
        </>
      ) : (
        <>
          <p className="mt-1 text-sm text-slate-600">Need to log in on another device? See your login code.</p>
          <Button variant="outline" className="mt-3 w-full" onClick={() => void show()} isLoading={state === 'loading'}>Show my login code</Button>
          {state === 'error' && <p className="mt-2 text-sm text-red-700" role="alert">We could not get your code just now. Try again.</p>}
        </>
      )}
    </Card>
  );
}
