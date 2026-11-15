import test from 'node:test';
import assert from 'node:assert/strict';
import { chromiumArgs, hasOverflow, isIgnorableError, normalizeUrl, pageFailed, parseArgs, parseWidths, shortHash, shotName, summarize, type PageResult } from '../scripts/lib/browserCheckCore';

test('normalizeUrl avoids localhost (IPv6 first) and fills in a scheme', () => {
  assert.equal(normalizeUrl('localhost:3000/x?l=a'), 'http://127.0.0.1:3000/x?l=a');
  assert.equal(normalizeUrl('http://localhost:3147/zz'), 'http://127.0.0.1:3147/zz');
  assert.equal(normalizeUrl('127.0.0.1:3000'), 'http://127.0.0.1:3000');
  assert.equal(normalizeUrl('/grade11'), 'http://127.0.0.1:3000/grade11');
  assert.equal(normalizeUrl('file:///tmp/a.html'), 'file:///tmp/a.html');
  assert.equal(normalizeUrl('https://example.com/localhost'), 'https://example.com/localhost');
  assert.throws(() => normalizeUrl('  '));
});

test('parseArgs: defaults, flags and errors', () => {
  const o = parseArgs(['127.0.0.1:3000/a', 'localhost:3000/b'], {});
  assert.deepEqual(o.widths, [390, 1280]);
  assert.deepEqual(o.urls, ['http://127.0.0.1:3000/a', 'http://127.0.0.1:3000/b']);
  assert.equal(o.timeoutMs, 60000);
  assert.equal(o.chromium, '/usr/bin/chromium');
  const p = parseArgs(['--widths', '320,768', '--timeout', '5000', '--stub-api', '--no-warmup', '--wait-for', 'main h1', '--out', 'x', 'a:1'], { CHROMIUM_BIN: '/opt/c' });
  assert.deepEqual([p.widths, p.timeoutMs, p.stubApi, p.warmup, p.out, p.chromium, p.waitFor], [[320, 768], 5000, true, false, 'x', '/opt/c', 'main h1']);
  assert.equal(o.waitFor, null);
  assert.throws(() => parseArgs([], {}), /at least one URL/);
  assert.throws(() => parseArgs(['--bogus', 'a:1'], {}), /unknown flag/);
  assert.throws(() => parseArgs(['--timeout', '5', 'a:1'], {}), /milliseconds/);
  assert.throws(() => parseArgs(['--out'], {}), /needs a value/);
  assert.throws(() => parseWidths('390,abc'));
});

test('chromiumArgs: the flags that stop the hang, none of the ones that cause trouble', () => {
  const a = chromiumArgs('/tmp/p');
  assert.ok(a.includes('--password-store=basic'));
  assert.ok(a.includes('--headless=new'));
  assert.ok(a.includes('--user-data-dir=/tmp/p'));
  assert.ok(a.includes('--remote-debugging-port=0'));
  assert.ok(!a.some((f) => /ozone|wayland|no-sandbox/.test(f)));
});

test('shotName is filesystem safe and distinct per width', () => {
  assert.equal(shotName('http://127.0.0.1:3000/zz-preview?l=fh', 390), '127_0_0_1_3000_zz_preview_l_fh-390.png');
  assert.notEqual(shotName('http://127.0.0.1:3000/a', 390), shotName('http://127.0.0.1:3000/a', 1280));
  assert.ok(shotName('http://127.0.0.1:3000/' + 'x'.repeat(300), 390).length < 100);
});

test('shotName: long URLs that differ only after the cut never collide (the pilotpreview bug)', () => {
  const topic = 'grade8naturalsciencesterm4forcesmotionandmeasurement';
  const names = new Set<string>();
  for (let s = 0; s < 6; s++) for (const w of [320, 390]) names.add(shotName(`http://127.0.0.1:3231/pilotpreview?t=${topic}&s=${s}`, w));
  assert.equal(names.size, 12);
  for (const n of names) assert.ok(n.length < 100 && /^[a-z0-9_.-]+$/i.test(n), n);
  const a = shotName('http://127.0.0.1:3231/pilotpreview?t=' + topic + '&s=1', 390);
  assert.equal(a, shotName('http://127.0.0.1:3231/pilotpreview?t=' + topic + '&s=1', 390), 'stable');
  assert.notEqual(shotName('http://127.0.0.1:3231/p?' + 'a'.repeat(80) + '1', 390), shotName('http://127.0.0.1:3231/p?' + 'a'.repeat(80) + '2', 390));
  assert.equal(shotName('http://127.0.0.1:3000/a', 390), '127_0_0_1_3000_a-390.png', 'short names stay readable and unhashed');
  assert.equal(shotName('http://127.0.0.1:3000/' + 'x'.repeat(100) + '#secret', 390), shotName('http://127.0.0.1:3000/' + 'x'.repeat(100) + '#other', 390));
  assert.ok(!shotName('http://127.0.0.1:3000/x#tok3nvalue', 390).includes('tok3n'), 'a fragment never reaches a file name');
  assert.equal(shortHash('abc'), shortHash('abc'));
  assert.notEqual(shortHash('abc'), shortHash('abd'));
  assert.equal(shortHash('').length, 7);
});

test('overflow and console-noise rules', () => {
  assert.equal(hasOverflow(390, 390), false);
  assert.equal(hasOverflow(391, 390), false);
  assert.equal(hasOverflow(420, 390), true);
  assert.equal(isIgnorableError('GET /favicon.ico 404'), true);
  assert.equal(isIgnorableError("WebSocket connection to 'ws://127.0.0.1:3172/_next/hmr?id=x' failed"), true);
  assert.equal(isIgnorableError('TypeError: x is not a function'), false);
});

test('summarize counts failures: timeouts, overflow and errors all fail the run', () => {
  const ok: PageResult = { url: 'http://127.0.0.1:3000/a', width: 390, status: 'ok', scrollWidth: 390, clientWidth: 390, errors: [], ms: 10 };
  const wide: PageResult = { ...ok, width: 1280, scrollWidth: 1500, clientWidth: 1280, wideElements: ['div.grid'] };
  const err: PageResult = { ...ok, errors: ['console.error: boom'] };
  const slow: PageResult = { ...ok, status: 'timeout', scrollWidth: undefined, clientWidth: undefined, detail: 'load' };
  assert.equal(pageFailed(ok), false);
  const s = summarize([ok, wide, err, slow]);
  assert.equal(s.failed, 3);
  assert.match(s.lines[1], /OVERFLOW 1500>1280 \(div\.grid\)/);
  assert.match(s.lines[2], /boom/);
  assert.match(s.lines[3], /TIMEOUT load/);
  assert.match(s.lines[0], /^ok /);
});
