'use client';

// Loads the AdSense script, only after Accept. Decline, Do Not Track, Global Privacy Control, a non-public path, or no choice yet: nothing loads.
// Ads are always requested non-personalised (requestNonPersonalizedAds=1, and the privacy-treatments flag that sends ppt=1).
import { useEffect } from 'react';
import { ADSENSE_SCRIPT_URL, ADS_ON_CLASS, adsAllowed } from '../../lib/ads/adsense';
import { isPublicPath, privacySignalOn, readChoice, type Choice } from '../../lib/consent/gtmConsent';

export const CONSENT_CHANGE_EVENT = 'pp-consent-change';

type AdsWindow = Window & { adsbygoogle?: unknown[] & { requestNonPersonalizedAds?: number; pauseAdRequests?: number } };

const storage = (): Storage | null => {
  try { return window.localStorage; } catch { return null; }
};

export function nonPersonalised(w: AdsWindow): NonNullable<AdsWindow['adsbygoogle']> {
  const a = (w.adsbygoogle = w.adsbygoogle || []) as NonNullable<AdsWindow['adsbygoogle']>;
  a.requestNonPersonalizedAds = 1;
  return a;
}

export default function AdsLoader() {
  useEffect(() => {
    const w = window as AdsWindow;
    if (!isPublicPath(w.location.pathname)) return;
    const apply = (choice: Choice | null) => {
      const on = adsAllowed(choice, privacySignalOn(navigator as never));
      document.documentElement.classList.toggle(ADS_ON_CLASS, on);
      if (!on) {
        if (w.adsbygoogle) w.adsbygoogle.pauseAdRequests = 1;
        return;
      }
      const a = nonPersonalised(w);
      a.pauseAdRequests = 0;
      if (!document.querySelector(`script[src="${ADSENSE_SCRIPT_URL}"]`)) {
        const s = document.createElement('script');
        s.async = true;
        s.crossOrigin = 'anonymous';
        s.setAttribute('data-privacy-treatments', 'disablePersonalization');
        s.src = ADSENSE_SCRIPT_URL;
        document.head.appendChild(s);
      }
    };
    apply(readChoice(storage()));
    const onChange = (e: Event) => apply((e as CustomEvent<Choice | null>).detail);
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  }, []);
  return null;
}
