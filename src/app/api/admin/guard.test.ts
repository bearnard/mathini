import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Guard-scan: EVERY route under /api/admin must be protected, so a future route cannot forget it.

const ROOT = path.join(process.cwd(), 'src', 'app', 'api', 'admin');
const METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'] as const;

function routeFiles(dir: string): string[] {
  const out: string[] = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...routeFiles(p));
    else if (/^route\.(t|j)sx?$/.test(e.name)) out.push(p);
  }
  return out.sort();
}

const saved = { NODE_ENV: process.env.NODE_ENV, BYPASS: process.env.ADMIN_DEV_BYPASS };
afterEach(() => {
  const e = process.env as Record<string, string | undefined>;
  if (saved.NODE_ENV === undefined) delete e.NODE_ENV; else e.NODE_ENV = saved.NODE_ENV;
  if (saved.BYPASS === undefined) delete e.ADMIN_DEV_BYPASS; else e.ADMIN_DEV_BYPASS = saved.BYPASS;
});

test('there is at least one admin route to protect', () => {
  assert.ok(routeFiles(ROOT).length >= 2);
});

test('every admin route file calls requireAdmin() or adminGet() (which calls it)', () => {
  for (const f of routeFiles(ROOT)) {
    const src = fs.readFileSync(f, 'utf8');
    assert.match(src, /\b(requireAdmin|adminGet|adminWrite)\(/, `${path.relative(process.cwd(), f)} does not call the admin guard`);
  }
});

test('the shared admin helpers call requireAdmin BEFORE doing any work', () => {
  const src = fs.readFileSync(path.join(process.cwd(), 'src', 'lib', 'server', 'admin', 'http.ts'), 'utf8');
  for (const fn of ['adminGet', 'adminWrite']) {
    const start = src.indexOf(`export async function ${fn}`);
    if (start === -1) continue; // not defined yet
    const body = src.slice(start, start + 1200);
    const guardAt = body.indexOf('requireAdmin(');
    const firstWork = Math.min(...['getCloudflareContext', 'parseFilters', 'req.json', 'cache.get'].map((s) => (body.indexOf(s) === -1 ? Infinity : body.indexOf(s))));
    assert.ok(guardAt !== -1 && guardAt < firstWork, `${fn} must call requireAdmin() first`);
  }
});

test('every handler of every admin route returns 403 with no Access assertion (even with the dev bypass flag set in production)', async () => {
  const e = process.env as Record<string, string | undefined>;
  e.NODE_ENV = 'production';
  e.ADMIN_DEV_BYPASS = '1';
  let checked = 0;
  for (const f of routeFiles(ROOT)) {
    const mod = (await import(pathToFileURL(f).href)) as Record<string, unknown>;
    for (const m of METHODS) {
      const handler = mod[m];
      if (typeof handler !== 'function') continue;
      const res = (await (handler as (r: Request, c?: unknown) => Promise<Response> | Response)(
        new Request('http://localhost/api/admin/x', { method: m, headers: m === 'GET' || m === 'HEAD' ? {} : { 'Content-Type': 'application/json', 'X-Admin-Action': 'delete', Origin: 'http://localhost' }, body: m === 'GET' || m === 'HEAD' ? undefined : '{}' }),
        { params: Promise.resolve({ id: 'x' }) },
      )) as Response;
      assert.equal(res.status, 403, `${path.relative(process.cwd(), f)} ${m} returned ${res.status}`);
      checked++;
    }
  }
  assert.ok(checked >= 2);
});

test('every admin route rejects a garbage Access assertion too', async () => {
  const e = process.env as Record<string, string | undefined>;
  e.NODE_ENV = 'production';
  delete e.ADMIN_DEV_BYPASS;
  for (const f of routeFiles(ROOT)) {
    const mod = (await import(pathToFileURL(f).href)) as Record<string, unknown>;
    for (const m of METHODS) {
      const handler = mod[m];
      if (typeof handler !== 'function') continue;
      const res = (await (handler as (r: Request, c?: unknown) => Promise<Response> | Response)(
        new Request('http://localhost/api/admin/x', { method: m, headers: { 'Cf-Access-Jwt-Assertion': 'aaa.bbb.ccc' }, body: m === 'GET' || m === 'HEAD' ? undefined : '{}' }),
        { params: Promise.resolve({ id: 'x' }) },
      )) as Response;
      assert.equal(res.status, 403, `${path.relative(process.cwd(), f)} ${m}`);
    }
  }
});
