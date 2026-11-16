import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { registerHooks } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { extractCuratedBanks } from '../../../test-support/curatedBanks';
import { checkQuestion } from '../../../lib/shared/questionQuality';
import { grade10 } from '../index';
import { lifeOrientationGrade10 } from './index';

// Grade 10 Life Orientation: every lesson meets docs/notes/lesson-standard.md, every bank is clean, and the subject, the topics and the server task prompts agree.
// The lesson files import the page shell, which imports katex's css. Node cannot load a .css file, so stub it.
registerHooks({
  load(url, context, nextLoad) {
    if (url.endsWith('.css')) return { format: 'module', source: 'export default {}', shortCircuit: true };
    return nextLoad(url, context);
  },
});

const here = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(here, '../../../..');
interface Lesson { term: number; dir: string; file: string; steps: import('../../../components/CapsSubjectTopic').LearnStep[]; src: string }

const lessons: Lesson[] = [];
for (const t of [1, 2, 3, 4]) {
  const termDir = path.join(here, `term${t}`);
  if (!fs.existsSync(termDir)) continue;
  for (const d of fs.readdirSync(termDir, { withFileTypes: true }).filter((e) => e.isDirectory())) {
    for (const f of fs.readdirSync(path.join(termDir, d.name)).filter((n) => n.endsWith('.tsx') && !n.includes('.test.'))) {
      const abs = path.join(termDir, d.name, f);
      const mod = await import(pathToFileURL(abs).href);
      lessons.push({ term: t, dir: d.name, file: f, steps: mod.learnSteps, src: fs.readFileSync(abs, 'utf8') });
    }
  }
}

const html = (n: React.ReactNode) => renderToStaticMarkup(createElement('div', null, n));
const words = (h: string) => h.replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').split(/\s+/).filter(Boolean).length;
const taskOf = (src: string) => /task="([^"]+)"/.exec(src)?.[1] ?? '';

test('the plan is complete for the terms that are written: topics per term match docs/notes/g10-life-orientation-plan.md', () => {
  const plan = fs.readFileSync(path.join(ROOT, 'docs/notes/g10-life-orientation-plan.md'), 'utf8');
  for (const term of lifeOrientationGrade10.terms) {
    for (const topic of term.topics) assert.ok(plan.includes(topic.id), `${topic.id} is in the plan`);
  }
  const counts = lessons.reduce<Record<number, number>>((m, l) => ({ ...m, [l.term]: (m[l.term] ?? 0) + 1 }), {});
  const expected: Record<number, number> = { 1: 6, 2: 3, 3: 5, 4: 3 };
  for (const [term, n] of Object.entries(counts)) assert.equal(n, expected[Number(term)], `term ${term} has ${n} lessons`);
});

test('Grade 10 has the Life Orientation subject (id lo), registered once, with the topics in the lesson folders', () => {
  assert.equal(grade10.subjects.filter((s) => s.id === 'lo').length, 1);
  assert.equal(lifeOrientationGrade10.title, 'Life Orientation');
  const ids = lifeOrientationGrade10.terms.flatMap((t) => t.topics.map((p) => ({ term: t.id, id: p.id })));
  assert.equal(new Set(ids.map((i) => i.id)).size, ids.length, 'topic ids are unique');
  for (const { term, id } of ids) assert.match(id, new RegExp(`^gr10-[a-z0-9-]+-t${term}$`), `${id} ends with its term`);
  assert.equal(ids.length, lessons.length, 'every lesson file is registered and every registered topic has a file');
  const tasks = new Set(lessons.map((l) => taskOf(l.src)));
  assert.deepEqual([...tasks].sort(), ids.map((i) => i.id).sort(), 'each lesson passes its topic id as its task');
});

test('every topic has a server task prompt in lo-gr10-term<N>.json, and every prompt belongs to a topic', () => {
  const topics = new Map(lifeOrientationGrade10.terms.flatMap((t) => t.topics.map((p) => [p.id, t.id] as const)));
  const seen = new Set<string>();
  for (const t of [1, 2, 3, 4]) {
    const f = path.join(ROOT, `src/lib/server/caps/tasks/lo-gr10-term${t}.json`);
    if (!fs.existsSync(f)) continue;
    const tasks = JSON.parse(fs.readFileSync(f, 'utf8')).tasks as Record<string, string>;
    for (const [id, prompt] of Object.entries(tasks)) {
      assert.equal(topics.get(id), t, `${id} is a Term ${t} topic`);
      assert.match(prompt, /^Topic: /);
      assert.ok(prompt.length > 200 && /Ask Grade 10 learners/.test(prompt), `${id}: prompt says what to ask`);
      seen.add(id);
    }
  }
  assert.deepEqual([...seen].sort(), [...topics.keys()].sort());
  const lo = fs.readFileSync(path.join(ROOT, 'src/lib/server/caps/lo.ts'), 'utf8');
  for (const t of [1, 2, 3, 4]) if (fs.existsSync(path.join(ROOT, `src/lib/server/caps/tasks/lo-gr10-term${t}.json`))) assert.match(lo, new RegExp(`lo-gr10-term${t}\\.json`));
});

for (const l of lessons) {
  const name = `${l.term}/${l.dir}`;

  test(`${name}: 5 slides (4 to 6), one idea each, ending with Check yourself`, () => {
    assert.ok(l.steps.length >= 4 && l.steps.length <= 6, `${l.steps.length} slides`);
    assert.equal(l.steps[l.steps.length - 1].title, 'Check yourself');
    for (const s of l.steps.slice(0, -1)) {
      const h = html(s.content);
      assert.ok(h.includes('The rule'), `${s.title}: Rule`);
      assert.ok(h.includes('Worked example'), `${s.title}: Worked`);
      assert.ok(h.includes('Common mistake'), `${s.title}: Mistake`);
      const w = words(h);
      assert.ok(w >= 40 && w <= 190, `${s.title}: ${w} words`);
    }
    const checks = html(l.steps[l.steps.length - 1].content);
    const n = (checks.match(/Show the answer/g) ?? []).length;
    assert.equal(n, 4, `${n} checks, one hidden answer each`);
  });

  test(`${name}: pictures have an aria description and few labels; no decimal point in the text`, () => {
    for (const s of l.steps) {
      const h = html(s.content);
      for (const svg of h.match(/<svg[\s\S]*?<\/svg>/g) ?? []) {
        assert.match(svg, /role="img"/);
        assert.match(svg, /aria-label="[^"]{30,}"/);
        assert.ok((svg.match(/<text[\s\S]*?<\/text>/g) ?? []).length <= 16, `${s.title}: too many labels`);
      }
      const text = h.replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/<[^>]+>/g, ' ');
      assert.ok(!/\d\.\d/.test(text), `${s.title}: decimal point (use a comma)`);
    }
  });

  test(`${name}: only the Childline number 116 appears as a phone number`, () => {
    const t = l.src;
    const numbers = t.match(/\b0\d{2}[ -]?\d{3}[ -]?\d{3,4}\b/g) ?? [];
    assert.deepEqual(numbers, [], 'a full phone number needs a source in the doubts file and an owner OK');
  });
}

test('the Grade 10 LO banks: 12 or more questions per topic, four options, one verbatim key, and no quality reason at all', () => {
  const qs = extractCuratedBanks().filter((q) => q.file.startsWith('grade10/life-orientation/') && q.kind === 'mcq');
  const byTopic = new Map<string, typeof qs>();
  for (const q of qs) byTopic.set(q.file, [...(byTopic.get(q.file) ?? []), q]);
  assert.equal(byTopic.size, lessons.length, 'every lesson has a bank');
  for (const [file, list] of byTopic) {
    assert.ok(list.length >= 12, `${file}: ${list.length} questions`);
    assert.equal(new Set(list.map((q) => q.prompt)).size, list.length, `${file}: prompts are unique`);
    const prompts = list.map((q) => q.prompt);
    for (const q of list) {
      assert.equal(q.options.length, 4, `${file}: ${q.prompt}`);
      assert.equal(q.options.filter((o) => o === q.answer).length, 1, `${file}: the key appears once, verbatim: ${q.prompt}`);
      const r = checkQuestion(q, { existingPrompts: prompts.filter((p) => p !== q.prompt) });
      assert.deepEqual(r.reasons.map((x) => `${x.severity}:${x.code}`), [], `${file}: ${q.prompt}`);
    }
    const spots = new Set(list.map((q) => q.options.indexOf(q.answer)));
    assert.ok(spots.size >= 3, `${file}: the key sits in at least three different positions`);
  }
});
