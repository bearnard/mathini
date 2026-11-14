'use client';

import { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useStudent } from '../../lib/client/StudentContext';
import { CONSENT_CHECKBOX_LABEL } from '../../lib/privacyNotice';

const SNOOZE_KEY = 'pp_consent_snooze';

function snoozedThisSession(): boolean {
  try {
    return sessionStorage.getItem(SNOOZE_KEY) === '1';
  } catch {
    return false;
  }
}

/**
 * One-time prompt for learners who registered before parent/guardian consent
 * existed. "Not now" never blocks learning: it hides the prompt for this
 * session and it comes back next session. Agreeing records consent on the server.
 */
export default function ConsentGate() {
  const { student, setStudent } = useStudent();
  // Fallback for blocked storage: remember "Not now" in memory for this page load.
  const [dismissed, setDismissed] = useState(snoozedThisSession);
  const [ticked, setTicked] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  if (!student || student.consented || dismissed) return null;

  const notNow = () => {
    try {
      sessionStorage.setItem(SNOOZE_KEY, '1');
    } catch {
      /* in-memory dismissal below still applies */
    }
    setDismissed(true);
  };

  const agree = async () => {
    setSaving(true);
    setError('');
    try {
      const res = await fetch('/api/consent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ agree: true }),
      });
      if (!res.ok) throw new Error('Could not save');
      setStudent({ ...student, consented: true });
    } catch {
      setError('Sorry, that did not save. You can try again, or tap "Not now" and keep learning.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="consent-title" className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
      <Card className="w-full max-w-md space-y-5 p-6">
        <h2 id="consent-title" className="text-xl font-bold text-slate-800">
          Ask a parent or guardian
        </h2>
        <p className="text-sm text-slate-600">
          We have added a short privacy notice. Please ask a parent or guardian to read it with you.
        </p>
        <label className="flex items-start gap-3 text-sm text-slate-700">
          <input type="checkbox" checked={ticked} onChange={(e) => setTicked(e.target.checked)} className="mt-1 h-5 w-5 shrink-0" />
          <span>
            {CONSENT_CHECKBOX_LABEL}{' '}
            <a href="/privacy" target="_blank" rel="noopener" className="underline">
              Privacy
            </a>
          </span>
        </label>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <div className="flex flex-col gap-2 sm:flex-row-reverse">
          <Button onClick={agree} disabled={!ticked || saving} isLoading={saving} className="w-full sm:w-auto">
            I agree
          </Button>
          <Button variant="secondary" onClick={notNow} disabled={saving} className="w-full sm:w-auto">
            Not now
          </Button>
        </div>
      </Card>
    </div>
  );
}
