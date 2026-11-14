// Minimal user-agent parsing for analytics. Returns browser/OS FAMILY only (no
// versions) and a device class. The raw UA string is never stored.

export type DeviceClass = 'mobile' | 'tablet' | 'desktop';

export interface ParsedUa {
  device: DeviceClass;
  browser: string;
  os: string;
}

const BOT_RE =
  /bot|crawl|spider|slurp|headless|lighthouse|pingdom|uptime|monitor|preview|facebookexternalhit|curl\/|wget\/|python-requests|python-urllib|aiohttp|httpclient|okhttp\/|axios\/|node-fetch|undici|go-http-client|java\/|libwww|scrapy|phantomjs/i;

/** True for obvious bots: bot-like or empty UA, or a Cloudflare-verified bot category. */
export function isBot(userAgent: string | null | undefined, verifiedBotCategory?: unknown): boolean {
  if (verifiedBotCategory) return true;
  const ua = (userAgent ?? '').trim();
  if (ua === '') return true;
  return BOT_RE.test(ua);
}

export function parseUserAgent(userAgent: string | null | undefined): ParsedUa {
  const ua = userAgent ?? '';

  let os = 'Other';
  if (/Android/i.test(ua)) os = 'Android';
  else if (/iPhone|iPad|iPod/i.test(ua)) os = 'iOS';
  else if (/Windows/i.test(ua)) os = 'Windows';
  else if (/CrOS/i.test(ua)) os = 'ChromeOS';
  else if (/Mac OS X|Macintosh/i.test(ua)) os = 'macOS';
  else if (/Linux|X11/i.test(ua)) os = 'Linux';

  // Order matters: many browsers also contain "Chrome" and "Safari" in their UA.
  let browser = 'Other';
  if (/EdgA?\/|EdgiOS\/|Edge\//.test(ua)) browser = 'Edge';
  else if (/OPR\/|Opera/.test(ua)) browser = 'Opera';
  else if (/SamsungBrowser/.test(ua)) browser = 'Samsung Internet';
  else if (/Firefox\/|FxiOS\//.test(ua)) browser = 'Firefox';
  else if (/Chrome\/|CriOS\//.test(ua)) browser = 'Chrome';
  else if (/Safari\//.test(ua) && /Version\//.test(ua)) browser = 'Safari';

  let device: DeviceClass = 'desktop';
  if (/iPad|Tablet|PlayBook|Silk\//i.test(ua) || (/Android/i.test(ua) && !/Mobile/i.test(ua))) {
    device = 'tablet';
  } else if (/Mobi|iPhone|iPod|Windows Phone/i.test(ua)) {
    device = 'mobile';
  }

  return { device, browser, os };
}
