'use client';

// Browser side of AdSense. Used ONLY by AdSlot, so the Google script is requested only on pages that actually draw an ad slot (the topic and subject pages),
// and only after Accept. Decline, Do Not Track, Global Privacy Control, a non-public path, or no choice yet: nothing loads.
// Ads are always requested non-personalised (requestNonPersonalizedAds=1, and the privacy-treatments flag that sends ppt=1).
import { ADSENSE_SCRIPT_URL, ADS_ON_CLASS, adsAllowed } from '../../lib/ads/adsense';
import { isPublicPath, privacySignalOn, readChoice, type Choice } from '../../lib/consent/gtmConsent';

export const CONSENT_CHANGE_EVENT = 'pp-consent-change';

export type AdsWindow = Window & { adsbygoogle?: unknown[] & { requestNonPersonalizedAds?: number; pauseAdRequests?: number } };

export const savedChoice = (): Choice | null => {
  try { return readChoice(window.localStorage); } catch { return null; }
};

export function nonPersonalised(w: AdsWindow): NonNullable<AdsWindow['adsbygoogle']> {
  const a = (w.adsbygoogle = w.adsbygoogle || []) as NonNullable<AdsWindow['adsbygoogle']>;
  a.requestNonPersonalizedAds = 1;
  return a;
}

/** Applies a consent choice for a page with an ad slot. Returns true when ads are on (the script is requested once). */
export function applyAdsChoice(choice: Choice | null): boolean {
  const w = window as AdsWindow;
  if (!isPublicPath(w.location.pathname)) return false;
  const on = adsAllowed(choice, privacySignalOn(navigator as never));
  document.documentElement.classList.toggle(ADS_ON_CLASS, on);
  if (!on) {
    if (w.adsbygoogle) w.adsbygoogle.pauseAdRequests = 1;
    return false;
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
  return true;
}
