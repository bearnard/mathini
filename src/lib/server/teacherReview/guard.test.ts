import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// Isolation guard (ADR 0004): the teacher-review routes, page, components and library read only pack data. They import
// nothing from the learner or admin modules, so a reviewer link can never reach learner, attempt or admin code.

const SRC = path.join(process.cwd(), 'src');
const LIB = path.join(SRC, 'lib', 'server', 'teacherReview');
// The reviewer side of the library. The other files in the folder (adminStore, merge, applyChanges, teacherCheck*) belong to
// the admin pages and may use admin code, so a reviewer-side file must never import them either.
const REVIEWER_LIB = ['db', 'http', 'proposal', 'reviewerLink', 'store', 'types'];
const ROOTS = [
  path.join(SRC, 'app', 'api', 'teacher-review'),
  path.join(SRC, 'app', 'teacher-review'),
  LIB,
  path.join(SRC, 'components', 'teacherReview'),
];
const ALLOWED_PACKAGES = [/^react(\/|$)/, /^react-dom(\/|$)/, /^next(\/|$)/, /^@opennextjs\/cloudflare$/, /^node:/];

function files(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...files(p));
    else if (/\.(ts|tsx)$/.test(e.name)) out.push(p);
  }
  return out.sort();
}

const isTest = (f: string) => /\.test\.tsx?$/.test(f) || /[\\/]test[A-Z][A-Za-z]*\.tsx?$/.test(f);
const production = ROOTS.flatMap(files).filter((f) => !isTest(f)).filter((f) => !f.startsWith(LIB + path.sep) || REVIEWER_LIB.includes(path.basename(f).replace(/\.tsx?$/, '')));

export const importsOf = (src: string): string[] => {
  const out: string[] = [];
  for (const m of src.matchAll(/(?:^|\n)\s*(?:import|export)\s[^;'"]*?from\s*['"]([^'"]+)['"]|(?:^|\n)\s*import\s*['"]([^'"]+)['"]|\bimport\(\s*['"]([^'"]+)['"]\s*\)|\brequire\(\s*['"]([^'"]+)['"]\s*\)/g)) out.push(m[1] ?? m[2] ?? m[3] ?? m[4]);
  return out;
};

test('there are teacher-review files to guard', () => {
  assert.ok(production.length >= 12, `found ${production.length}`);
  for (const name of REVIEWER_LIB) assert.ok(production.some((f) => path.basename(f).startsWith(name + '.')), `${name} must be scanned`);
  assert.ok(!production.some((f) => /adminStore|merge|applyChanges/.test(path.basename(f))), 'admin files are not part of the reviewer side');
});

const inRoots = (target: string) => {
  if (target === LIB || target.startsWith(LIB + path.sep)) return REVIEWER_LIB.includes(path.basename(target).replace(/\.tsx?$/, ''));
  return ROOTS.some((r) => target === r || target.startsWith(r + path.sep));
};
export const isAllowedImport = (fromFile: string, spec: string): boolean => {
  if (spec.startsWith('.')) return inRoots(path.resolve(path.dirname(fromFile), spec));
  if (spec.startsWith('@/')) return false;
  return ALLOWED_PACKAGES.some((re) => re.test(spec));
};

test('every import is a package on the allow list, or a file inside the teacher-review folders', () => {
  for (const f of production) {
    for (const spec of importsOf(fs.readFileSync(f, 'utf8'))) assert.ok(isAllowedImport(f, spec), `${path.relative(process.cwd(), f)} imports ${spec}`);
  }
});

test('the guard really catches a learner, admin or events import', () => {
  const from = path.join(ROOTS[0], '[token]', 'route.ts');
  const lib = path.join(ROOTS[2], 'http.ts');
  for (const line of [
    "import { adminWrite } from '../../../../lib/server/admin/http';",
    "import { x } from '../../../lib/client/StudentContext';",
    "import z from '@/lib/server/review/due';",
    "const m = await import('../events/handler');",
    "import { createRateLimiter } from '../events/ratelimit';",
    "import { d1Adapter } from '../admin/db';",
    "import { listPacks } from './adminStore';",
    "import { suggestMerge } from './merge';",
    "import fs from 'fs';",
  ]) {
    const spec = importsOf(line)[0];
    assert.ok(spec, line);
    assert.equal(isAllowedImport(spec.startsWith('../../..') ? from : lib, spec), false, line);
  }
  for (const line of ["import { a } from './store';", "import { b } from '../../../../lib/server/teacherReview/http';", "import { useState } from 'react';", "import type { Metadata } from 'next';", "import { getCloudflareContext } from '@opennextjs/cloudflare';", "import fs from 'node:fs';"]) {
    assert.equal(isAllowedImport(from, importsOf(line)[0]) || isAllowedImport(lib, importsOf(line)[0]), true, line);
  }
});

test('every API route goes through handleReview (privacy headers, action header, rate limit)', () => {
  const routes = files(path.join(SRC, 'app', 'api', 'teacher-review')).filter((f) => /route\.tsx?$/.test(f));
  assert.ok(routes.length >= 3);
  for (const f of routes) {
    const src = fs.readFileSync(f, 'utf8');
    assert.match(src, /\bhandleReview\(/, `${path.relative(process.cwd(), f)} must call handleReview`);
    assert.ok(!/params|searchParams|req\.url/.test(src), `${path.relative(process.cwd(), f)} must not read the token from the URL: request logs record URLs`);
  }
  assert.ok(!routes.some((f) => f.includes('[')), 'no dynamic segment: the token is not in the API path');
});

test('nothing in the teacher-review code logs the token, the URL or the request', () => {
  for (const f of production) {
    const src = fs.readFileSync(f, 'utf8');
    for (const m of src.matchAll(/console\.\w+\(([^;]*)\)/g)) {
      assert.ok(!/token|req\b|req\.|url|headers|params/i.test(m[1]), `${path.relative(process.cwd(), f)} logs ${m[0]}`);
    }
  }
});

test('the link is a fragment: the page has no token segment and the client reads location.hash', () => {
  assert.ok(!fs.existsSync(path.join(SRC, 'app', 'teacher-review', '[token]')), 'no /teacher-review/<token> route: the path would be logged');
  const app = fs.readFileSync(path.join(SRC, 'components', 'teacherReview', 'ReviewApp.tsx'), 'utf8');
  assert.match(app, /location\.hash/);
  assert.match(app, /history\.replaceState/);
  assert.match(app, /sessionStorage/);
  assert.ok(!/fetch\(`[^`]*\$\{token\}/.test(app), 'the token must not be put into a URL');
});

test('the admin invite builds the fragment link /teacher-review#<token>', () => {
  const admin = fs.readFileSync(path.join(SRC, 'components', 'admin', 'reviews', 'ReviewPackPage.tsx'), 'utf8');
  assert.match(admin, /\/teacher-review#\$\{/);
  assert.ok(!/\/teacher-review\/\$\{|\/review\/\$\{/.test(admin), 'no path-style link');
});

test('the reviewer page is noindex and sends no referrer', () => {
  const page = fs.readFileSync(path.join(SRC, 'app', 'teacher-review', 'page.tsx'), 'utf8');
  assert.match(page, /robots:\s*\{[^}]*index:\s*false/);
  assert.match(page, /referrer:\s*'no-referrer'/);
});

test('the link is kept out of analytics, robots.txt and the sitemap', () => {
  assert.equal(fs.readFileSync(path.join(SRC, 'lib', 'seo', 'publicPaths.ts'), 'utf8').includes("'/teacher-review'"), true);
  assert.equal(fs.readFileSync(path.join(SRC, 'app', 'robots.ts'), 'utf8').includes('PRIVATE_PREFIXES'), true);
  assert.ok(!fs.readFileSync(path.join(SRC, 'app', 'sitemap.ts'), 'utf8').includes('teacher-review'));
});
