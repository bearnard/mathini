import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

// The production-bundle check must be able to FAIL: prove it detects the flag and refuses empty scans.
const SCRIPT = path.join(process.cwd(), 'scripts', 'check-no-admin-bypass.mjs');
const run = (...args: string[]) => spawnSync(process.execPath, [SCRIPT, ...args], { encoding: 'utf8' });

function tmp(files: Record<string, string>) {
  const d = fs.mkdtempSync(path.join(os.tmpdir(), 'bypass-check-'));
  for (const [name, body] of Object.entries(files)) {
    fs.mkdirSync(path.dirname(path.join(d, name)), { recursive: true });
    fs.writeFileSync(path.join(d, name), body);
  }
  return d;
}

test('passes on a bundle without the flag', () => {
  const d = tmp({ 'server/app.js': 'export const x = 1;', 'static/a.js': 'console.log("hi")' });
  const r = run(d);
  fs.rmSync(d, { recursive: true });
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /not present/);
});
test('FAILS (exit 1) when the flag name is anywhere in the bundle, including nested files', () => {
  const d = tmp({ 'server/chunks/guard.js': 'if (process.env.ADMIN_DEV_BYPASS === "1") allow()', 'static/a.js': 'ok' });
  const r = run(d);
  fs.rmSync(d, { recursive: true });
  assert.equal(r.status, 1);
  assert.match(r.stderr, /ADMIN_DEV_BYPASS/);
});
test('source maps (never executed) are ignored, but real code next to them is still checked', () => {
  const ok = tmp({ 'server/a.js': 'export const x = 1;', 'server/a.js.map': '{"sourcesContent":["// ADMIN_DEV_BYPASS comment"]}' });
  const r1 = run(ok);
  fs.rmSync(ok, { recursive: true });
  assert.equal(r1.status, 0, r1.stderr);
  const bad = tmp({ 'server/a.js': 'if (process.env.ADMIN_DEV_BYPASS) x()', 'server/a.js.map': '{}' });
  const r2 = run(bad);
  fs.rmSync(bad, { recursive: true });
  assert.equal(r2.status, 1);
});
test('refuses to report success when nothing was scanned or the directory is missing', () => {
  const d = tmp({});
  const empty = run(d);
  fs.rmSync(d, { recursive: true });
  assert.equal(empty.status, 2);
  assert.equal(run(path.join(os.tmpdir(), 'does-not-exist-bypass-check')).status, 2);
});
test('the guard source has the dev-only shape the check relies on', () => {
  const src = fs.readFileSync(path.join(process.cwd(), 'src', 'lib', 'server', 'admin', 'guard.ts'), 'utf8');
  assert.match(src, /process\.env\.NODE_ENV === 'development' && process\.env\.ADMIN_DEV_BYPASS === '1'/);
  // The flag is read in exactly one place.
  const code = src.split('\n').filter((l) => !l.trim().startsWith('//') && !l.trim().startsWith('*') && !l.trim().startsWith('/*')).join('\n');
  assert.equal((code.match(/ADMIN_DEV_BYPASS/g) ?? []).length, 1);
  const all = fs.readdirSync(path.join(process.cwd(), 'src'), { recursive: true }) as string[];
  const users = all.filter((f) => /\.(ts|tsx)$/.test(f) && !/\.test\./.test(f) && fs.readFileSync(path.join(process.cwd(), 'src', f), 'utf8').includes('ADMIN_DEV_BYPASS'));
  assert.deepEqual(users.map((u) => u.replaceAll('\\', '/')), ['lib/server/admin/guard.ts']);
});
