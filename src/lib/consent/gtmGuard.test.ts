import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// Google Tag Manager belongs on the public marketing pages ONLY. This guard reads the source: the container id and script may live in three
// files, the components may be rendered by three, and no route a learner, parent, teacher, admin or reviewer uses may reach them through any import.

const ROOT = process.cwd();
const SRC = path.join(ROOT, 'src');
const rel = (f: string) => path.relative(ROOT, f).split(path.sep).join('/');

const walk = (dir: string): string[] =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : /\.(ts|tsx)$/.test(e.name) ? [path.join(dir, e.name)] : []));
const files = walk(SRC).filter((f) => !/\.test\.tsx?$/.test(f));

const OWNS_ID = new Set(['src/lib/consent/gtmConsent.ts']);
const RENDERS_ANALYTICS = new Set(['src/components/seo/PublicShell.tsx', 'src/app/page.tsx', 'src/app/privacy/page.tsx']);
const ANALYTICS_COMPONENTS = new Set(['src/components/analytics/PublicAnalytics.tsx', 'src/components/analytics/ConsentGtm.tsx', 'src/components/analytics/CookieChoiceButton.tsx']);

test('the container id and the Tag Manager URLs appear in one library file and nowhere else in the app', () => {
  const hits = files.filter((f) => /GTM-MNM3XGLP|googletagmanager\.com|google-analytics\.com/i.test(fs.readFileSync(f, 'utf8'))).map(rel);
  assert.deepEqual(hits.sort(), [...OWNS_ID]);
});

test('only the home page, the privacy page and PublicShell render the analytics components', () => {
  const importers = files
    .filter((f) => !ANALYTICS_COMPONENTS.has(rel(f)))
    .filter((f) => /from ['"][^'"]*(analytics\/(PublicAnalytics|ConsentGtm|CookieChoiceButton)|consent\/gtmConsent)['"]/.test(fs.readFileSync(f, 'utf8')))
    .map(rel);
  assert.deepEqual(importers.sort(), [...RENDERS_ANALYTICS, 'src/components/analytics/PublicAnalytics.tsx'].filter((f) => !ANALYTICS_COMPONENTS.has(f)).sort());
});

// Resolve a relative import to a file in src (ts, tsx, index).
function resolveImport(from: string, spec: string): string | null {
  if (!spec.startsWith('.') && !spec.startsWith('@/')) return null;
  const base = spec.startsWith('@/') ? path.join(SRC, spec.slice(2)) : path.resolve(path.dirname(from), spec);
  for (const c of [base, `${base}.ts`, `${base}.tsx`, path.join(base, 'index.ts'), path.join(base, 'index.tsx')]) if (fs.existsSync(c) && fs.statSync(c).isFile()) return c;
  return null;
}
const importsOf = (f: string): string[] =>
  [...fs.readFileSync(f, 'utf8').matchAll(/(?:import|export)[^'"]*?from\s*['"]([^'"]+)['"]|import\(\s*['"]([^'"]+)['"]\s*\)/g)].map((m) => resolveImport(f, m[1] ?? m[2])).filter((x): x is string => !!x);

function reaches(start: string, targets: Set<string>): string | null {
  const seen = new Set<string>();
  const stack = [start];
  while (stack.length) {
    const f = stack.pop()!;
    if (seen.has(f)) continue;
    seen.add(f);
    if (targets.has(rel(f)) && f !== start) return rel(f);
    stack.push(...importsOf(f));
  }
  return null;
}

const PRIVATE_ROUTE_DIRS = ['app/app', 'app/progress', 'app/parent', 'app/teacher', 'app/teacher-review', 'app/admin', 'app/sign-in', 'app/account', 'app/invite-parent', 'app/unsubscribe', 'app/api'];

test('no learner, parent, teacher, admin or review route (page, layout or API) reaches the analytics code through any import', () => {
  const targets = new Set([...ANALYTICS_COMPONENTS, ...OWNS_ID, 'src/components/seo/PublicShell.tsx']);
  let checked = 0;
  for (const dir of PRIVATE_ROUTE_DIRS) {
    const abs = path.join(SRC, dir);
    if (!fs.existsSync(abs)) continue;
    for (const f of walk(abs).filter((x) => !/\.test\.tsx?$/.test(x))) {
      checked++;
      const hit = reaches(f, targets);
      assert.equal(hit, null, `${rel(f)} reaches ${hit}`);
    }
  }
  assert.ok(checked > 40, `${checked} private route files checked`);
});

test('the root layout and every layout outside the public pages stay free of Tag Manager', () => {
  const layouts = files.filter((f) => /\/layout\.tsx$/.test(f));
  assert.ok(layouts.length >= 2);
  const targets = new Set([...ANALYTICS_COMPONENTS, ...OWNS_ID, 'src/components/seo/PublicShell.tsx']);
  for (const l of layouts) assert.equal(reaches(l, targets), null, `${rel(l)} must not load Tag Manager`);
});

test('the public pages that must have it do: shell, home, privacy', () => {
  for (const f of RENDERS_ANALYTICS) assert.match(fs.readFileSync(path.join(ROOT, f), 'utf8'), /<PublicAnalytics \/>/, f);
  const component = fs.readFileSync(path.join(ROOT, 'src/components/analytics/ConsentGtm.tsx'), 'utf8');
  assert.match(component, /isPublicPath\(/, 'the loader re-checks the path itself');
  assert.ok(component.indexOf("'consent', 'default'") < component.indexOf('GTM_SCRIPT_URL}"]'), 'consent defaults are set before the container script is added');
});

test('the privacy page says what is true: analytics only with consent, never in the app or signed-in areas', () => {
  const notice = fs.readFileSync(path.join(ROOT, 'src/lib/privacyNotice.ts'), 'utf8');
  assert.match(notice, /Google Tag Manager and Google Analytics/);
  assert.match(notice, /only run if you press Accept/);
  assert.match(notice, /never loaded inside the app/i);
  assert.ok(!/We do not use advertising or third-party analytics, and we do not sell/.test(notice), 'the old blanket claim is gone');
});
