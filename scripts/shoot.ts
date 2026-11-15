// Browser check: screenshot each URL at 390 and 1280 px with a per-page timeout, and report horizontal overflow and
// console errors. Usage and the reasons behind the flags: docs/notes/browser-check.md
//   node --import tsx scripts/shoot.ts [--widths 390,1280] [--out dir] [--timeout ms] [--wait-for css] [--stub-api] <url>...
import { spawn, type ChildProcess } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { chromiumArgs, isIgnorableError, parseArgs, shotName, summarize, type PageResult, type ShootOptions } from './lib/browserCheckCore';

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
const withTimeout = <T,>(p: Promise<T>, ms: number, what: string): Promise<T> =>
  Promise.race([p, new Promise<T>((_, rej) => setTimeout(() => rej(new Error(`timeout after ${ms} ms: ${what}`)), ms))]);

// SHOOT_MOCKS=file.json: [{ "match": "/api/admin/reviews/1", "body": {...}, "status": 200 }]. A request whose URL contains `match` gets that JSON. Longest match wins.
const MOCKS: { match: string; body: unknown; status?: number }[] = process.env.SHOOT_MOCKS
  ? (JSON.parse(fs.readFileSync(process.env.SHOOT_MOCKS, 'utf8')) as { match: string; body: unknown; status?: number }[]).sort((a, b) => b.match.length - a.match.length)
  : [];

type Msg = { id?: number; method?: string; params?: any; result?: any; error?: any; sessionId?: string };

class Cdp {
  private id = 0;
  private pending = new Map<number, (m: Msg) => void>();
  private listeners: ((m: Msg) => void)[] = [];
  constructor(private ws: WebSocket) {
    ws.onmessage = (e) => {
      const m: Msg = JSON.parse(String(e.data));
      if (m.id && this.pending.has(m.id)) { this.pending.get(m.id)!(m); this.pending.delete(m.id); } else this.listeners.forEach((l) => l(m));
    };
  }
  on(l: (m: Msg) => void) { this.listeners.push(l); }
  send(method: string, params: object = {}, sessionId?: string, ms = 15000): Promise<any> {
    const id = ++this.id;
    const p = new Promise<any>((res, rej) => {
      this.pending.set(id, (m) => (m.error ? rej(new Error(`${method}: ${m.error.message}`)) : res(m.result)));
      this.ws.send(JSON.stringify({ id, method, params, sessionId }));
    });
    return withTimeout(p, ms, method);
  }
  close() { this.ws.close(); }
}

const launch = async (o: ShootOptions) => {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'shoot-profile-'));
  // Strip D-Bus and the wayland/X11 session so the headless run never talks to the desktop session.
  const env = { ...process.env };
  delete env.WAYLAND_DISPLAY; delete env.DISPLAY;
  const child: ChildProcess = spawn(o.chromium, chromiumArgs(profile), { stdio: 'ignore', detached: true, env });
  const kill = () => { try { process.kill(-child.pid!, 'SIGKILL'); } catch { /* already gone */ } fs.rmSync(profile, { recursive: true, force: true }); };
  const portFile = path.join(profile, 'DevToolsActivePort');
  for (let i = 0; i < 100 && !fs.existsSync(portFile); i++) await sleep(100);
  if (!fs.existsSync(portFile)) { kill(); throw new Error(`${o.chromium} did not start (no DevToolsActivePort in 10 s)`); }
  const [port] = fs.readFileSync(portFile, 'utf8').split('\n');
  const version = await (await fetch(`http://127.0.0.1:${port}/json/version`)).json() as { webSocketDebuggerUrl: string };
  const ws = new WebSocket(version.webSocketDebuggerUrl);
  await new Promise<void>((res, rej) => { ws.onopen = () => res(); ws.onerror = () => rej(new Error('devtools websocket failed')); });
  return { cdp: new Cdp(ws), kill };
};

/** Ask the server for the page once so Next dev compiles it before the timed browser visit. */
const warmUp = async (url: string, ms: number) => {
  try { await fetch(url, { signal: AbortSignal.timeout(ms) }); } catch { /* the browser visit will report it */ }
};

const MEASURE = `(() => { const de = document.documentElement;
  const wide = [...document.querySelectorAll('body *')].filter((e) => { const r = e.getBoundingClientRect(); return r.right > de.clientWidth + 1 && r.width > 0 && !e.closest('pre, svg'); })
    .slice(0, 3).map((e) => e.tagName.toLowerCase() + '.' + String(e.className).split(' ')[0].slice(0, 30));
  return { scrollWidth: de.scrollWidth, clientWidth: de.clientWidth, wide }; })()`;

const shootOne = async (cdp: Cdp, o: ShootOptions, url: string, width: number): Promise<PageResult> => {
  const t0 = Date.now();
  const r: PageResult = { url, width, status: 'ok', errors: [], ms: 0 };
  let targetId = '';
  try {
    targetId = (await cdp.send('Target.createTarget', { url: 'about:blank' })).targetId;
    const sessionId = (await cdp.send('Target.attachToTarget', { targetId, flatten: true })).sessionId;
    const s = (method: string, params: object = {}) => cdp.send(method, params, sessionId, o.timeoutMs);
    const loaded = new Promise<void>((res) => cdp.on((m) => { if (m.sessionId === sessionId && m.method === 'Page.loadEventFired') res(); }));
    cdp.on((m) => {
      if (m.sessionId !== sessionId) return;
      const p = m.params;
      let text = '';
      if (m.method === 'Runtime.exceptionThrown') text = `exception: ${p.exceptionDetails?.exception?.description ?? p.exceptionDetails?.text}`;
      else if (m.method === 'Runtime.consoleAPICalled' && p.type === 'error') text = `console.error: ${p.args.map((a: any) => a.value ?? a.description).join(' ')}`;
      else if (m.method === 'Log.entryAdded' && p.entry.level === 'error') text = `log: ${p.entry.text} ${p.entry.url ?? ''}`;
      else if (m.method === 'Network.loadingFailed' && !p.canceled) text = `request failed: ${p.errorText}`;
      else if (m.method === 'Fetch.requestPaused') {
        const u: string = p.request.url;
        const mock = MOCKS.find((x) => u.includes(x.match));
        if (mock) {
          void cdp.send('Fetch.fulfillRequest', { requestId: p.requestId, responseCode: mock.status ?? 200, responseHeaders: [{ name: 'content-type', value: 'application/json' }], body: Buffer.from(JSON.stringify(mock.body)).toString('base64') }, sessionId);
        } else if (o.stubApi && u.includes('/api/')) {
          const body = u.includes('/api/session') ? '{"studentId":"stub","displayName":"Test","grade":8,"xp":0,"consented":true}' : '{"items":[],"questions":[]}';
          void cdp.send('Fetch.fulfillRequest', { requestId: p.requestId, responseCode: 200, responseHeaders: [{ name: 'content-type', value: 'application/json' }], body: Buffer.from(body).toString('base64') }, sessionId);
        } else void cdp.send('Fetch.continueRequest', { requestId: p.requestId }, sessionId);
      }
      if (text && !isIgnorableError(text)) r.errors.push(text.slice(0, 300));
    });
    await Promise.all([s('Page.enable'), s('Runtime.enable'), s('Log.enable'), s('Network.enable')]);
    if (o.stubApi || MOCKS.length > 0) await s('Fetch.enable', { patterns: [{ urlPattern: '*' }] });
    await s('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: false });
    await s('Page.navigate', { url });
    await withTimeout(loaded, o.timeoutMs, `load of ${url}`);
    if (o.waitFor) {
      const sel = JSON.stringify(o.waitFor);
      const deadline = Date.now() + o.timeoutMs;
      while (!(await s('Runtime.evaluate', { expression: `!!document.querySelector(${sel})`, returnByValue: true })).result.value) {
        if (Date.now() > deadline) throw new Error(`timeout after ${o.timeoutMs} ms: waiting for ${o.waitFor}`);
        await sleep(200);
      }
    }
    await sleep(o.settleMs);
    const m = (await s('Runtime.evaluate', { expression: MEASURE, returnByValue: true })).result.value;
    Object.assign(r, { scrollWidth: m.scrollWidth, clientWidth: m.clientWidth, wideElements: m.wide });
    const shot = await s('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
    fs.mkdirSync(o.out, { recursive: true });
    r.file = path.join(o.out, shotName(url, width));
    fs.writeFileSync(r.file, Buffer.from(shot.data, 'base64'));
  } catch (e) {
    r.status = /timeout/.test(String(e)) ? 'timeout' : 'error';
    r.detail = String((e as Error).message).slice(0, 160);
  } finally {
    if (targetId) await cdp.send('Target.closeTarget', { targetId }, undefined, 5000).catch(() => undefined);
    r.ms = Date.now() - t0;
  }
  return r;
};

const main = async () => {
  let o: ShootOptions;
  try { o = parseArgs(process.argv.slice(2), process.env); } catch (e) { console.error(`shoot: ${(e as Error).message}`); process.exit(2); }
  if (o.warmup) for (const u of o.urls) if (/^https?:/.test(u)) await warmUp(u, o.timeoutMs);
  const { cdp, kill } = await launch(o);
  const results: PageResult[] = [];
  try {
    for (const w of o.widths) for (const u of o.urls) results.push(await shootOne(cdp, o, u, w));
  } finally { cdp.close(); kill(); }
  const { lines, failed } = summarize(results);
  lines.forEach((l) => console.log(l));
  fs.mkdirSync(o.out, { recursive: true });
  fs.writeFileSync(path.join(o.out, 'report.json'), JSON.stringify(results, null, 2));
  console.log(`${results.length - failed}/${results.length} ok, screenshots and report.json in ${o.out}`);
  process.exit(failed ? 1 : 0);
};
void main();
