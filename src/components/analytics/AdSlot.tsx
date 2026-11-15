'use client';

// One responsive ad slot (see AD_SLOTS in lib/ads/adsense.ts). Draws nothing at all unless the owner has set the slot id. The space is reserved by
// CSS from the first paint when the visitor has already accepted (PublicAnalytics sets the page class before paint), and the ad is requested only
// after Accept. Rendered ONLY by the topic page and the subject page.
import { useEffect, useRef } from 'react';
import { ADSENSE_CLIENT, AD_SLOTS, adsAllowed, type AdPlacement } from '../../lib/ads/adsense';
import { isPublicPath, privacySignalOn, readChoice, type Choice } from '../../lib/consent/gtmConsent';
import { CONSENT_CHANGE_EVENT, nonPersonalised } from './AdsLoader';

export default function AdSlot({ placement }: { placement: AdPlacement }) {
  const slot = AD_SLOTS[placement];
  const requested = useRef(false);

  useEffect(() => {
    if (!slot || !isPublicPath(window.location.pathname)) return;
    const ask = (choice: Choice | null) => {
      if (requested.current || !adsAllowed(choice, privacySignalOn(navigator as never))) return;
      requested.current = true;
      nonPersonalised(window as never).push({});
    };
    let saved: Choice | null = null;
    try { saved = readChoice(window.localStorage); } catch { /* blocked storage: no ads */ }
    ask(saved);
    const onChange = (e: Event) => ask((e as CustomEvent<Choice | null>).detail);
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  }, [slot]);

  if (!slot) return null;
  return (
    <aside className="pp-ad" aria-label="Advertisement">
      <p className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-400">Advertisement</p>
      <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client={ADSENSE_CLIENT} data-ad-slot={slot} data-ad-format="auto" data-full-width-responsive="true" />
    </aside>
  );
}
