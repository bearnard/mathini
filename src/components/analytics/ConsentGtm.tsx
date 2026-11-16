'use client';

// Google Tag Manager and its consent banner, for the PUBLIC pages only (never rendered inside the app or any signed-in area: see gtmGuard.test.ts).
// Nothing is requested from Google, and nothing is pushed to Google's data queue, until the visitor presses Accept (or a remembered Accept is found):
// see loadGtm() in gtmConsent.ts. Decline, no answer, Do Not Track and Global Privacy Control all load nothing.
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { clearChoice, isPublicPath, loadGtm, privacySignalOn, readChoice, withdrawGtm, writeChoice, type Choice, type GtmDocument, type GtmWindow } from '../../lib/consent/gtmConsent';

const storage = (): Storage | null => {
  try { return window.localStorage; } catch { return null; }
};

export const REOPEN_EVENT = 'pp-consent-reopen';
const announce = (choice: Choice | null) => window.dispatchEvent(new CustomEvent('pp-consent-change', { detail: choice }));

export default function ConsentGtm() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isPublicPath(window.location.pathname) || privacySignalOn(navigator as never)) return;
    const saved = readChoice(storage());
    if (saved === 'accept') loadGtm(window as GtmWindow, document as unknown as GtmDocument);
    else if (!saved) setShow(true);
    announce(saved);
    const reopen = () => { clearChoice(storage()); withdrawGtm(window as GtmWindow); setShow(true); announce(null); };
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_EVENT, reopen);
  }, []);

  const choose = (choice: Choice) => {
    writeChoice(storage(), choice);
    if (choice === 'accept') loadGtm(window as GtmWindow, document as unknown as GtmDocument);
    else withdrawGtm(window as GtmWindow);
    setShow(false);
    announce(choice);
  };

  if (!show) return null;
  return (
    <div role="region" aria-label="Cookie choices" className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-slate-300 bg-white p-4 shadow-2xl sm:flex-row sm:items-center">
        <p className="flex-1 text-sm text-slate-700">
          Can we use Google Analytics to count visits, and show non-personalised Google ads, on this public site? Both only run if you say yes, and neither ever runs inside the learner, parent or teacher areas.{' '}
          <Link href="/privacy" className="font-bold text-[#3285bc] underline">Privacy</Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => choose('decline')} className="min-h-11 flex-1 rounded-xl border-2 border-slate-300 bg-white px-5 text-sm font-bold text-slate-800 sm:flex-none">Decline</button>
          <button type="button" onClick={() => choose('accept')} className="min-h-11 flex-1 rounded-xl border-2 border-transparent bg-[#f68535] px-5 text-sm font-bold text-white sm:flex-none">Accept</button>
        </div>
      </div>
    </div>
  );
}
