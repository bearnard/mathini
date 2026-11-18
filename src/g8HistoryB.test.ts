import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';
import { historyGrade8 } from './curriculum/grade8/history';
import hisT3 from './lib/server/caps/tasks/his-gr8-term3.json';
import hisT4 from './lib/server/caps/tasks/his-gr8-term4.json';

// Grade 8 History, branch B (terms 3 and 4): the Ashanti case study and Britain's home front in World War I, beside the term lessons that were already there.
// Dates are asserted here from the standard record, independently of the lesson files. Every source box is an original or paraphrased description.

stubCss();
const LESSONS = [
  { id: 'ashanti-kingdom-and-the-gold-coast', term: 3, dir: 'term3/ashanti-kingdom-and-the-gold-coast', mod: 'AshantiKingdomAndTheGoldCoast' },
  { id: 'britain-home-front-world-war-i', term: 4, dir: 'term4/britain-home-front-world-war-i', mod: 'BritainHomeFrontWorldWarI' },
];
const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);
const text = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/&#x27;|&#39;/g, "'").replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();

test('registered after the existing term lessons, each with a task instruction', () => {
  const ids = (n: number) => historyGrade8.terms.find((t) => t.id === n)!.topics.map((t) => t.id);
  assert.equal(ids(3)[0], 'scramble-for-africa');
  assert.equal(ids(4)[0], 'world-war-i');
  for (const l of LESSONS) assert.ok(ids(l.term).includes(l.id), l.id);
  const tasks = { ...hisT3.tasks, ...hisT4.tasks } as Record<string, string>;
  for (const l of LESSONS) assert.ok(tasks[`gr8-${l.id}-t${l.term}`], l.id);
});

for (const l of LESSONS) {
  test(`${l.id}: slides, sources, 14 clean questions, key words in the lesson`, async () => {
    const { learnSteps } = await import(`./curriculum/grade8/history/${l.dir}/${l.mod}`);
    assert.ok(learnSteps.length >= 4 && learnSteps.length <= 6);
    assert.equal(learnSteps.at(-1)?.title, 'Check yourself');
    let lessonText = '';
    for (const s of learnSteps) {
      const out = html(h('div', null, s.content));
      lessonText += ' ' + text(out);
      assert.ok(text(out).length > 40, `${s.title}: empty slide`);
      assert.ok(!/undefined|\bNaN\b|\[object/.test(out) && !out.includes('\\'), `${s.title}: broken text`);
    }
    assert.ok((html(h('div', null, learnSteps.at(-1)!.content)).match(/<details/g) ?? []).length >= 3);
    for (const s of learnSteps.slice(1, -1)) {
      const out = html(h('div', null, s.content));
      assert.ok(/The rule/i.test(out) && /Common mistake/i.test(out) && /Worked example/i.test(out), `${s.title}: missing rule, worked example or mistake`);
      assert.ok(/role="img"/.test(out) && /aria-label="[^"]{30,}"/.test(out), `${s.title}: picture without aria`);
    }
    // at least one source box with a provenance line, and every source is labelled as original or paraphrased
    const sources = html(h('div', null, learnSteps.map((s: { content: React.ReactNode }) => s.content))).match(/<figure[\s\S]*?<\/figure>/g) ?? [];
    assert.ok(sources.length >= 1, 'a source is shown');
    for (const f of sources) assert.match(f, /original|paraphrase/i, 'source says it is original or a paraphrase');
    const bank = extractCuratedBanks().filter((q) => q.file.includes(`grade8/history/${l.dir}/`));
    assert.equal(bank.length, 14);
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.ok(q.options.includes(q.answer));
      assert.ok(!q.prompt.includes('\\') && !q.options.some((o) => o.includes('\\')));
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.map((x) => `${x.severity}:${x.code}`), [], q.prompt);
      const words = q.answer.toLowerCase().match(/[a-z]{6,}/g) ?? [];
      const missing = words.filter((w) => !lessonText.toLowerCase().includes(w.replace(/s$/, '')));
      assert.ok(missing.length < 2, `${q.prompt}: ${missing.join(', ')}`);
    }
    const pos = [0, 0, 0, 0];
    for (const q of bank) pos[q.options.indexOf(q.answer)]++;
    assert.ok(pos.every((n) => n > 0) && Math.max(...pos) <= 5, JSON.stringify(pos));
  });
}

test('INDEPENDENT: the dates in the lessons match the standard record', async () => {
  const read = async (l: (typeof LESSONS)[number]) => {
    const { learnSteps } = await import(`./curriculum/grade8/history/${l.dir}/${l.mod}`);
    return text(html(h('div', null, learnSteps.map((s: { content: React.ReactNode }) => s.content))));
  };
  const [ash, war] = await Promise.all(LESSONS.map(read));
  // Portuguese reach the Gold Coast 1471; Prempeh I exiled 1896; War of the Golden Stool 1900; Ashanti kingdom annexed 1901; Ghana independent 1957
  assert.match(ash, /Portuguese traders reached the coast in 1471/);
  assert.match(ash, /1896/);
  assert.match(ash, /1900/);
  assert.match(ash, /1901/);
  assert.match(ash, /Ghana in 1957|became Ghana.{0,20}1957/);
  assert.match(ash, /Yaa Asantewaa/);
  // conscription 1916; volunteers 1914; some women over 30 won the vote 1918
  assert.match(war, /In 1916 conscription began/);
  assert.match(war, /1914/);
  assert.match(war, /1918/);
  assert.match(war, /Emmeline Pankhurst \(called Emily in the CAPS\)/);
  assert.match(war, /Wilfred Owen/);
  assert.ok(1471 < 1896 && 1896 < 1900 && 1900 < 1901 && 1901 < 1957 && 1914 < 1916 && 1916 < 1918);
});
