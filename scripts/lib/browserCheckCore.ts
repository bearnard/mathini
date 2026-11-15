// Pure helpers for scripts/shoot.ts (the browser-check tool). No I/O here so they can be unit-tested.

export interface ShootOptions {
  urls: string[];
  widths: number[];
  out: string;
  timeoutMs: number;
  settleMs: number;
  stubApi: boolean;
  warmup: boolean;
  chromium: string;
}

export const DEFAULT_WIDTHS = [390, 1280];

/** Bare host:port and paths get http://127.0.0.1 (never `localhost`, which can resolve to ::1 first). */
export const normalizeUrl = (raw: string): string => {
  let u = raw.trim();
  if (!u) throw new Error('empty url');
  if (u.startsWith('/')) u = `http://127.0.0.1:3000${u}`;
  else if (!/^([a-z][a-z0-9+.-]*:\/\/|about:|data:)/i.test(u)) u = `http://${u}`;
  return u.replace(/^(https?:\/\/)localhost(?=[:/]|$)/i, '$1127.0.0.1');
};

export const parseWidths = (s: string): number[] => {
  const w = s.split(',').map((x) => Number(x.trim()));
  if (!w.length || w.some((n) => !Number.isInteger(n) || n < 200 || n > 4000)) throw new Error(`bad --widths "${s}" (use e.g. 390,1280)`);
  return w;
};

export const parseArgs = (argv: string[], env: Record<string, string | undefined> = {}): ShootOptions => {
  const o: ShootOptions = {
    urls: [], widths: DEFAULT_WIDTHS, out: 'shots', timeoutMs: 60000, settleMs: 800, stubApi: false, warmup: true,
    chromium: env.CHROMIUM_BIN || '/usr/bin/chromium',
  };
  const need = (i: number, flag: string) => {
    const v = argv[i + 1];
    if (v === undefined || v.startsWith('--')) throw new Error(`${flag} needs a value`);
    return v;
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--widths') o.widths = parseWidths(need(i++, a));
    else if (a === '--out') o.out = need(i++, a);
    else if (a === '--timeout') {
      o.timeoutMs = Number(need(i++, a));
      if (!(o.timeoutMs >= 1000)) throw new Error('--timeout is in milliseconds, at least 1000');
    } else if (a === '--settle') o.settleMs = Number(need(i++, a));
    else if (a === '--stub-api') o.stubApi = true;
    else if (a === '--no-warmup') o.warmup = false;
    else if (a === '--chromium') o.chromium = need(i++, a);
    else if (a.startsWith('--')) throw new Error(`unknown flag ${a}`);
    else o.urls.push(normalizeUrl(a));
  }
  if (!o.urls.length) throw new Error('give at least one URL');
  return o;
};

/**
 * Chromium flags that work on this machine. --password-store=basic is the one that matters: without it the network
 * service waits on the (locked) GNOME keyring over D-Bus and every http(s) request hangs. See docs/notes/browser-check.md.
 */
export const chromiumArgs = (profileDir: string): string[] => [
  '--headless=new',
  '--remote-debugging-port=0',
  `--user-data-dir=${profileDir}`,
  '--password-store=basic',
  '--use-mock-keychain',
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-extensions',
  '--disable-gpu',
  '--hide-scrollbars',
  'about:blank',
];

export const shotName = (url: string, width: number): string => {
  const u = new URL(url);
  const slug = `${u.hostname}${u.port ? '-' + u.port : ''}${u.pathname}${u.search}`.replace(/[^a-z0-9]+/gi, '_').replace(/^_+|_+$/g, '').slice(0, 80);
  return `${slug || 'page'}-${width}.png`;
};

export const hasOverflow = (scrollWidth: number, clientWidth: number, tolerance = 1): boolean => scrollWidth - clientWidth > tolerance;

/** Console noise that is not a page defect (favicon, HMR sockets, devtools hints). */
export const isIgnorableError = (text: string): boolean =>
  /favicon\.ico|\/_next\/(webpack-)?hmr|Download the React DevTools|\[HMR\]|\[Fast Refresh\]/i.test(text);

export interface PageResult {
  url: string;
  width: number;
  status: 'ok' | 'timeout' | 'error';
  scrollWidth?: number;
  clientWidth?: number;
  wideElements?: string[];
  errors: string[];
  file?: string;
  ms: number;
  detail?: string;
}

export const pageFailed = (r: PageResult): boolean =>
  r.status !== 'ok' || r.errors.length > 0 || (r.scrollWidth !== undefined && r.clientWidth !== undefined && hasOverflow(r.scrollWidth, r.clientWidth));

export const summarize = (results: PageResult[]): { lines: string[]; failed: number } => {
  const lines = results.map((r) => {
    const flags: string[] = [];
    if (r.status !== 'ok') flags.push(`${r.status.toUpperCase()}${r.detail ? ' ' + r.detail : ''}`);
    if (r.scrollWidth !== undefined && r.clientWidth !== undefined && hasOverflow(r.scrollWidth, r.clientWidth)) {
      flags.push(`OVERFLOW ${r.scrollWidth}>${r.clientWidth}${r.wideElements?.length ? ' (' + r.wideElements.join(', ') + ')' : ''}`);
    }
    if (r.errors.length) flags.push(`${r.errors.length} console error(s): ${r.errors[0].slice(0, 120)}`);
    return `${pageFailed(r) ? 'FAIL' : 'ok  '} ${r.width}px ${r.url} ${flags.join('; ')} [${r.ms} ms]`.trimEnd();
  });
  return { lines, failed: results.filter(pageFailed).length };
};
