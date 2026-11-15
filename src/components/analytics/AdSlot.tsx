'use client';

// One responsive ad slot (see AD_SLOTS in lib/ads/adsense.ts). Draws nothing at all unless the owner has set the slot id. The space is reserved by
// CSS from the first paint when the visitor has already accepted (PublicAnalytics sets the page class before paint). This component, and only this
// one, asks for the AdSense script and for the ad, and only after Accept. Rendered ONLY by the topic page and the subject page.
import { useEffect, useRef } from 'react';
import { ADSENSE_CLIENT, AD_SLOTS, type AdPlacement } from '../../lib/ads/adsense';
import type { Choice } from '../../lib/consent/gtmConsent';
import { CONSENT_CHANGE_EVENT, applyAdsChoice, nonPersonalised, savedChoice } from './adsClient';

export default function AdSlot({ placement }: { placement: AdPlacement }) {
  const slot = AD_SLOTS[placement];
  const requested = useRef(false);

  useEffect(() => {
    if (!slot) return;
    const apply = (choice: Choice | null) => {
      if (!applyAdsChoice(choice) || requested.current) return;
      requested.current = true;
      nonPersonalised(window as never).push({});
    };
    apply(savedChoice());
    const onChange = (e: Event) => apply((e as CustomEvent<Choice | null>).detail);
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
