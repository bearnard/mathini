'use client';

// Google Tag Manager and its consent banner, for the PUBLIC pages only (never rendered inside the app or any signed-in area: see gtmGuard.test.ts).
// Order matters: the Consent Mode defaults go into the dataLayer first (everything denied), a remembered Accept updates them, and only then the
// container script is added. Without an Accept, Tag Manager loads but analytics storage stays denied.
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CONSENT_DEFAULT, GTM_SCRIPT_URL, clearChoice, consentUpdateFor, isPublicPath, privacySignalOn, readChoice, writeChoice, type Choice } from '../../lib/consent/gtmConsent';

type DataLayerWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

const storage = (): Storage | null => {
  try { return window.localStorage; } catch { return null; }
};

function ensureGtag(w: DataLayerWindow): (...args: unknown[]) => void {
  w.dataLayer = w.dataLayer || [];
  if (!w.gtag) {
    // Google's own shape: it pushes the arguments object, which is what the container reads.
    w.gtag = function gtag() { (w.dataLayer as unknown[]).push(arguments); };
  }
  return w.gtag;
}

export const REOPEN_EVENT = 'pp-consent-reopen';
const announce = (choice: Choice | null) => window.dispatchEvent(new CustomEvent('pp-consent-change', { detail: choice }));

export default function ConsentGtm() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const w = window as DataLayerWindow;
    if (!isPublicPath(w.location.pathname) || privacySignalOn(navigator as never)) return;
    const gtag = ensureGtag(w);
    gtag('consent', 'default', { ...CONSENT_DEFAULT });
    const saved = readChoice(storage());
    if (saved) gtag('consent', 'update', consentUpdateFor(saved));
    else setShow(true);
    // The standard container snippet, after the consent defaults.
    (w.dataLayer as unknown[]).push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    announce(saved);
    if (!document.querySelector(`script[src="${GTM_SCRIPT_URL}"]`)) {
      const s = document.createElement('script');
      s.async = true;
      s.src = GTM_SCRIPT_URL;
      document.head.appendChild(s);
    }
    const reopen = () => { clearChoice(storage()); setShow(true); announce(null); };
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_EVENT, reopen);
  }, []);

  const choose = (choice: Choice) => {
    writeChoice(storage(), choice);
    (window as DataLayerWindow).gtag?.('consent', 'update', consentUpdateFor(choice));
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
