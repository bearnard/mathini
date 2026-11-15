// Google AdSense on the PUBLIC information pages only, and only after a visitor presses Accept in the consent banner. This file is the one place that
// knows the publisher id, the script URL, the slot ids and the placement rules. src/lib/consent/gtmGuard.test.ts fails if the id or the script
// appears anywhere a learner, parent, teacher, admin or reviewer can be.
import { CONSENT_DAYS, CONSENT_KEY } from '../consent/gtmConsent';

export const ADSENSE_CLIENT = 'ca-pub-4961734822376251';
export const ADSENSE_PUBLISHER = 'pub-4961734822376251';
export const ADSENSE_SCRIPT_URL = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
/** The one line of /ads.txt (public/ads.txt must hold exactly this). */
export const ADS_TXT_LINE = `google.com, ${ADSENSE_PUBLISHER}, DIRECT, f08c47fec0942fa0`;

/**
 * AdSense ad-unit ids (AdSense > Ads > By ad unit: a display unit, responsive). Until the owner creates them and sets these two build variables, no
 * slot is drawn at all (no empty box, no script call): the page is exactly as it was. At most ONE slot per topic page and one per subject page.
 */
export const AD_SLOTS = {
  topic: process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOPIC ?? '',
  subject: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SUBJECT ?? '',
} as const;
export type AdPlacement = keyof typeof AD_SLOTS;

/** The room reserved for a slot, so an ad that arrives later cannot push the page around. A responsive unit is 100 to 280 px high on a phone. */
export const AD_RESERVED_PX = 280;
export const ADS_ON_CLASS = 'pp-ads-on';

/** Ads need an Accept, a browser with no Do Not Track / Global Privacy Control signal, and a public path (the caller checks the path). */
export const adsAllowed = (choice: 'accept' | 'decline' | null, privacySignal: boolean): boolean => choice === 'accept' && !privacySignal;

/**
 * Runs before the page is painted (an inline script on the public pages): if the remembered choice is Accept, mark the page so the reserved ad space
 * exists from the first paint. Without it, an ad area that appeared after the page loaded would move the content below it (layout shift).
 * It reads the same key and the same six-month limit as readChoice() in gtmConsent.ts. A test runs this very text in a stub browser.
 */
export const adsPrePaintScript = (): string =>
  `try{var c=JSON.parse(localStorage.getItem(${JSON.stringify(CONSENT_KEY)})||'null');` +
  `if(c&&c.choice==='accept'&&typeof c.at==='number'&&Date.now()-c.at<${CONSENT_DAYS}*864e5&&Date.now()>=c.at-864e5&&navigator.doNotTrack!=='1'&&navigator.doNotTrack!=='yes'&&!navigator.globalPrivacyControl)` +
  `document.documentElement.classList.add(${JSON.stringify(ADS_ON_CLASS)})}catch(e){}`;

/** CSS for the slot: hidden unless the page is marked, then a fixed-height box. */
export const adsCss = (): string => `.pp-ad{display:none}.${ADS_ON_CLASS} .pp-ad{display:block;min-height:${AD_RESERVED_PX}px;margin:1.5rem 0;overflow:hidden}`;
