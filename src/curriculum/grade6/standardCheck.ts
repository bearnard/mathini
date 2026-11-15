import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { uncoveredAnswers } from '../../components/diagrams/science/scienceHelpers';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, '..');

export type LessonSpec = { slides: number; uses?: string[] };

/** Structure checks for Grade 6 lessons rewritten to docs/notes/lesson-standard.md. */
export const checkLessons = (lessons: Record<string, LessonSpec>) => {
  for (const [file, want] of Object.entries(lessons)) {
    const name = path.basename(file, '.tsx');
    const src = fs.readFileSync(path.join(root, file), 'utf8');
    const slides = src.slice(0, src.indexOf('export const bank'));

    test(`${name}: ${want.slides} slides, the last one is "Check yourself"`, () => {
      const titles = [...slides.matchAll(/^\s{4}title: (['"])(.+?)\1,/gm)].map((m) => m[2]);
      assert.equal(titles.length, want.slides);
      assert.equal(titles[titles.length - 1], 'Check yourself');
    });

    test(`${name}: every slide but the last has a rule, a worked example and a common mistake`, () => {
      const body = slides.slice(slides.indexOf('const learnSteps'));
      const parts = body.split(/\n\s{2}\{\n\s{4}title:/).slice(1, -1);
      assert.equal(parts.length, want.slides - 1);
      for (const p of parts) for (const tag of ['<Rule>', '<Worked', '<Mistake>']) assert.ok(p.includes(tag), `${tag} missing in a slide`);
    });

    test(`${name}: uses its pictures and helpers`, () => {
      for (const u of want.uses ?? []) assert.ok(slides.includes(u), `${u} not used`);
    });

    test(`${name}: every bank answer can be answered from the slides`, () => {
      assert.deepEqual(uncoveredAnswers(src), []);
    });

    test(`${name}: the Check yourself slide has 4 questions with answers`, () => {
      const check = slides.slice(slides.lastIndexOf("title: 'Check yourself'"));
      assert.equal((check.match(/<li>/g) ?? []).length, 8);
    });
  }
};
