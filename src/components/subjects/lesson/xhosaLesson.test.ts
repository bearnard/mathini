import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { words, xhosaStrings, type XhLesson } from './xhosaLessonData';

// Every rewritten isiXhosa lesson keeps its content in a `<Topic>.data.ts` file next to the component. This test holds them all to the
// lesson standard (docs/notes/lesson-standard.md): 4-6 slides including "Check yourself", short prose, a gloss for every example.
const files: string[] = [];
const walk = (d: string) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (/isixhosa/.test(p) && e.name.endsWith('.data.ts')) files.push(p);
  }
};
walk(path.join(process.cwd(), 'src', 'curriculum'));

test('there are rewritten isiXhosa lessons to check', () => assert.ok(files.length >= 1));

for (const f of files) {
  test(`isiXhosa lesson data meets the standard: ${path.relative('src/curriculum', f)}`, async () => {
    const lesson = (await import(path.resolve(f))).default as XhLesson;
    assert.ok(lesson.slides.length >= 3 && lesson.slides.length <= 5, `${lesson.slides.length} teaching slides (plus Check yourself = 4-6)`);
    assert.ok(lesson.checks.length >= 3 && lesson.checks.length <= 4, `${lesson.checks.length} checks`);
    for (const s of lesson.slides) {
      assert.ok(s.title && s.rule, 'title and rule');
      assert.ok(s.examples.length >= 2, `${s.title}: at least two examples`);
      for (const e of s.examples) assert.ok(e.xh.trim() && e.en.trim(), `${s.title}: example needs isiXhosa and an English gloss`);
      const prose = words(s.rule) + words(s.mistake ?? '');
      assert.ok(prose <= 80, `${s.title}: ${prose} words of prose (limit 80)`);
      if (s.wordParts) assert.ok(s.wordParts.parts.length <= 6, `${s.title}: at most 6 parts`);
    }
    assert.ok(xhosaStrings(lesson).length >= 6, 'enough isiXhosa content');
  });
}
