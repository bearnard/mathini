import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { devPreviewEnabled, findTopic, listTopics, parseTopicRef, topicPath, topicQuery } from './lib/devLessonPreview';
import type { Grade } from './types/curriculum';

const SRC = path.join(process.cwd(), 'src');
const read = (...p: string[]) => fs.readFileSync(path.join(SRC, ...p), 'utf8');
const MARKER = 'DEV_LESSON_PREVIEW_ONLY';

const lazy = (() => null) as never;
const grades: Grade[] = [
  { id: 7, title: 'Grade 7', subjects: [{ id: 'a', title: 'A', terms: [{ id: 1, title: 'Term 1', topics: [{ id: 'x', title: 'X', component: lazy }, { id: 'y', title: 'Y', component: lazy }] }] }] },
  { id: 8, title: 'Grade 8', subjects: [{ id: 'b', title: 'B', terms: [{ id: 1, title: 'T1', topics: [] }, { id: 2, title: 'T2', topics: [{ id: 'z', title: 'Z', component: lazy }] }] }] },
];

test('the preview is on outside production and off in production', () => {
  assert.equal(devPreviewEnabled({ NODE_ENV: 'development' }), true);
  assert.equal(devPreviewEnabled({ NODE_ENV: 'test' }), true);
  assert.equal(devPreviewEnabled({}), true);
  assert.equal(devPreviewEnabled({ NODE_ENV: 'production' }), false);
});

const GRADE_IDS = [5, 6, 7, 8, 9, 10, 11, 12];

test('every grade route answers 404 in production and never loads its preview', async () => {
  const env = process.env as Record<string, string | undefined>;
  const saved = env.NODE_ENV;
  env.NODE_ENV = 'production';
  try {
    for (const g of GRADE_IDS) {
      const { default: Page } = await import(`./app/dev-lesson/g${g}/page`);
      await assert.rejects(() => Page(), (e: unknown) => /NEXT_HTTP_ERROR_FALLBACK;404|NEXT_NOT_FOUND/.test(String((e as { digest?: string }).digest ?? e)), `grade ${g}`);
    }
  } finally {
    if (saved === undefined) delete env.NODE_ENV; else env.NODE_ENV = saved;
  }
});

test('each preview module is only reachable through the NODE_ENV branch, so a production build drops it', () => {
  for (const g of GRADE_IDS) {
    const page = read('app', 'dev-lesson', `g${g}`, 'page.tsx').split('\n').filter((l) => !l.trim().startsWith('//')).join('\n');
    const branch = page.match(/if \(process\.env\.NODE_ENV !== 'production'\) \{([\s\S]*?)\n  \}\n/);
    assert.ok(branch, `g${g}/page.tsx must wrap the import in if (process.env.NODE_ENV !== 'production')`);
    assert.match(branch![1], /import\('\.\/Preview'\)/);
    assert.equal((page.match(/Preview/g) ?? []).length, (branch![0].match(/Preview/g) ?? []).length, `g${g}: Preview is mentioned outside the branch`);
    assert.match(page, /notFound\(\)/);
    assert.ok(!/^import .*Preview/m.test(page), 'no static import of Preview');
    assert.match(read('app', 'dev-lesson', `g${g}`, 'Preview.tsx'), new RegExp(`from '../../../curriculum/grade${g}'`));
  }
  assert.ok(!fs.existsSync(path.join(SRC, 'app', 'dev-lesson', 'page.tsx')), 'no ungated /dev-lesson page');
});

test('nothing else imports the previews, and the marker lives only under app/dev-lesson', () => {
  const files = (fs.readdirSync(SRC, { recursive: true }) as string[]).filter((f) => /\.(ts|tsx|mjs)$/.test(f)).map((f) => f.replaceAll('\\', '/'));
  const importers = files.filter((f) => !f.includes('.test.') && /dev-lesson\/(g\d+\/)?(Preview|PreviewView)/.test(read(f)) && !f.startsWith('app/dev-lesson/'));
  assert.deepEqual(importers, [], 'only files under app/dev-lesson may import the previews');
  const withMarker = files.filter((f) => read(f).includes(MARKER) && !f.includes('.test.'));
  assert.ok(withMarker.length >= 9 && withMarker.every((f) => f.startsWith('app/dev-lesson/') && !f.endsWith('page.tsx')), withMarker.join(', '));
  assert.ok(files.filter((f) => f.startsWith('app/dev-lesson/')).every((f) => !read(f).includes('ADMIN_DEV_BYPASS')));
});

test('the production-bundle check looks for the marker', () => {
  assert.ok(fs.readFileSync(path.join(process.cwd(), 'scripts', 'check-no-admin-bypass.mjs'), 'utf8').includes(MARKER));
});

test('listTopics, parseTopicRef and findTopic address a lesson by position', () => {
  const all = listTopics(grades);
  assert.equal(all.length, 3);
  assert.deepEqual(all.map((e) => topicPath(e)), ['/dev-lesson/g7?s=0&t=0&i=0', '/dev-lesson/g7?s=0&t=0&i=1', '/dev-lesson/g8?s=0&t=1&i=0']);
  assert.equal(topicQuery(all[1], 3), 's=0&t=0&i=1&step=3');
  const q = (s: string) => new URLSearchParams(s);
  assert.deepEqual(parseTopicRef(q('s=0&t=1&i=0&step=2'), 8), { g: 8, s: 0, t: 1, i: 0, step: 2 });
  assert.deepEqual(parseTopicRef(q('s=0&t=1&i=0'), 8), { g: 8, s: 0, t: 1, i: 0, step: 0 });
  for (const bad of ['', 's=0', 's=0&t=1', 's=x&t=1&i=0', 's=-1&t=1&i=0', 's=0&t=1&i=99999']) assert.equal(parseTopicRef(q(bad), 8), null, bad);
  assert.equal(findTopic(all, { g: 8, s: 0, t: 1, i: 0 })?.topic.title, 'Z');
  assert.equal(findTopic(all, { g: 8, s: 0, t: 0, i: 0 }), null);
});

test('the real curriculum lists every topic of Grades 5 to 12 with a component and a unique address', async () => {
  const { grade5 } = await import('./curriculum/grade5');
  const { grade12 } = await import('./curriculum/grade12');
  const all = listTopics([grade5, grade12]);
  assert.ok(all.length > 50);
  assert.equal(new Set(all.map((e) => topicPath(e))).size, all.length);
  assert.ok(all.every((e) => !!e.topic.component));
});
