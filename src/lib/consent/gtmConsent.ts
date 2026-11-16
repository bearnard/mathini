// Google Tag Manager on the PUBLIC marketing pages only, behind Google Consent Mode v2. This file is the one place that knows the container id, the
// consent defaults, how long a choice is remembered and which paths count as public. src/lib/consent/gtmGuard.test.ts fails if the id, the script
// or the components appear anywhere a learner, parent, teacher, admin or reviewer can be.

export const GTM_ID = 'GTM-MNM3XGLP';
export const GTM_SCRIPT_URL = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;

export const CONSENT_KEY = 'pp_cookie_choice';
/** A choice is remembered for six months, then we ask again. */
export const CONSENT_DAYS = 183;
const DAY_MS = 86_400_000;

export type Choice = 'accept' | 'decline';

/** Consent Mode v2 defaults, set BEFORE the container loads: everything denied, and a short wait so a remembered Accept can update first. */
export const CONSENT_DEFAULT = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500,
} as const;

/** Accept grants analytics only. Ads stay denied unless the owner asks otherwise. */
export const consentUpdateFor = (choice: Choice): { analytics_storage: 'granted' | 'denied' } => ({ analytics_storage: choice === 'accept' ? 'granted' : 'denied' });

interface StorageLike { getItem(k: string): string | null; setItem(k: string, v: string): void; removeItem(k: string): void }

/** The remembered choice, or null when there is none, it is older than six months, or the stored value is not ours. Never throws. */
export function readChoice(storage: StorageLike | null, now = Date.now()): Choice | null {
  try {
    const raw = storage?.getItem(CONSENT_KEY);
    if (!raw) return null;
    const v = JSON.parse(raw) as { choice?: unknown; at?: unknown };
    if ((v.choice !== 'accept' && v.choice !== 'decline') || typeof v.at !== 'number') return null;
    if (v.at > now + DAY_MS || now - v.at > CONSENT_DAYS * DAY_MS) return null;
    return v.choice;
  } catch {
    return null;
  }
}

export function writeChoice(storage: StorageLike | null, choice: Choice, now = Date.now()): void {
  try { storage?.setItem(CONSENT_KEY, JSON.stringify({ choice, at: now })); } catch { /* storage blocked: the banner just asks again next time */ }
}

export function clearChoice(storage: StorageLike | null): void {
  try { storage?.removeItem(CONSENT_KEY); } catch { /* nothing to clear */ }
}

/** Paths that must never load Tag Manager: the app, every signed-in area, the admin and review pages, and the APIs. */
export const PRIVATE_PATH_PREFIXES = ['/app', '/progress', '/parent', '/teacher', '/teacher-review', '/admin', '/sign-in', '/account', '/invite-parent', '/unsubscribe', '/api'] as const;

/** True only for the marketing pages: the home page, /privacy, /for-parents, /for-teachers and the /grade-N pages (grade, subject, topic). */
export function isPublicPath(pathname: string): boolean {
  if (PRIVATE_PATH_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`))) return false;
  return pathname === '/' || pathname === '/privacy' || pathname === '/for-parents' || pathname === '/for-teachers' || /^\/grade-\d{1,2}(\/|$)/.test(pathname);
}

/** A browser that says Do Not Track or Global Privacy Control gets no Tag Manager and no banner, as the privacy page promises. */
export function privacySignalOn(nav: { doNotTrack?: string | null; globalPrivacyControl?: boolean } | undefined): boolean {
  return !!nav && (nav.doNotTrack === '1' || nav.doNotTrack === 'yes' || nav.globalPrivacyControl === true);
}

// ---------- loading Tag Manager: only after Accept ----------
// "Basic" Consent Mode: until the visitor has pressed Accept, NOTHING is requested from Google (no gtm.js, no analytics ping, no <noscript> iframe) and
// nothing is pushed to the dataLayer. Decline, no answer, Do Not Track and Global Privacy Control all load nothing. The privacy page and the banner say so.

type GtagFn = (...args: unknown[]) => void;
export interface GtmWindow { dataLayer?: unknown[]; gtag?: GtagFn }
export interface GtmDocument {
  querySelector(selector: string): unknown;
  createElement(tag: string): { async: boolean; src: string };
  head: { appendChild(node: unknown): unknown };
}

function ensureGtag(w: GtmWindow): GtagFn {
  w.dataLayer = w.dataLayer || [];
  if (!w.gtag) {
    // Google's own shape: it pushes the arguments object, which is what the container reads.
    w.gtag = function gtag() { (w.dataLayer as unknown[]).push(arguments); };
  }
  return w.gtag;
}

/**
 * Called ONLY for an Accept (a remembered one on a later visit, or the button just pressed). Sets the Consent Mode defaults, grants analytics,
 * starts the container and adds the script once. Safe to call again.
 */
export function loadGtm(w: GtmWindow, doc: GtmDocument): void {
  const gtag = ensureGtag(w);
  gtag('consent', 'default', { ...CONSENT_DEFAULT });
  gtag('consent', 'update', consentUpdateFor('accept'));
  (w.dataLayer as unknown[]).push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  if (!doc.querySelector(`script[src="${GTM_SCRIPT_URL}"]`)) {
    const s = doc.createElement('script');
    s.async = true;
    s.src = GTM_SCRIPT_URL;
    doc.head.appendChild(s);
  }
}

/** A Decline (or "ask me again") after Google was already loaded in this page view: switch analytics storage off again. Does nothing when nothing was loaded. */
export function withdrawGtm(w: GtmWindow): void {
  if (w.gtag) w.gtag('consent', 'update', consentUpdateFor('decline'));
}
