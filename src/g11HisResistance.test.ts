import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';
import { RESISTANCE, ARMED, when } from './curriculum/grade11/history/_shared/topic5Facts';
import { historyGrade11 } from './curriculum/grade11/history';

// Grade 11 History Topic 5 (CAPS Term 4): resistance to apartheid 1948 to 1960, and Sharpeville, the armed struggle and the Rivonia Trial.
// Dates are asserted here independently of topic5Facts.ts. Sources in the lessons are original or paraphrased descriptions.

stubCss();
const LESSONS = [
  { id: 'gr11-resistance-to-apartheid-1948-1960-t4', term: 4, dir: 'term4/resistance-to-apartheid-1948-1960', mod: 'ResistanceToApartheid19481960' },
  { id: 'gr11-sharpeville-armed-struggle-rivonia-t4', term: 4, dir: 'term4/sharpeville-armed-struggle-rivonia', mod: 'SharpevilleArmedStruggleRivonia' },
];
const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);
const text = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();

test('the two lessons are registered in Term 4 after Segregation and Apartheid, with a task instruction each', async () => {
  const fs = await import('node:fs');
  const t4 = historyGrade11.terms.find((t) => t.id === 4)!.topics.map((t) => t.id);
  assert.deepEqual(t4.slice(0, 3), ['gr11-segregation-and-apartheid-t3', ...LESSONS.map((l) => l.id)]);
  const tasks = JSON.parse(fs.readFileSync('src/lib/server/caps/tasks/his-gr11-term4.json', 'utf8')).tasks as Record<string, string>;
  for (const l of LESSONS) assert.ok(l.id in tasks, l.id);
});

for (const l of LESSONS) {
  test(`${l.id}: 4 to 6 slides ending in Check yourself, every slide renders and has the lesson parts, 14 clean questions, key words in the lesson`, async () => {
    const { learnSteps } = await import(`./curriculum/grade11/history/${l.dir}/${l.mod}`);
    assert.ok(learnSteps.length >= 4 && learnSteps.length <= 6, `${learnSteps.length} slides`);
    assert.equal(learnSteps.at(-1)?.title, 'Check yourself');
    let lessonText = '';
    for (const s of learnSteps) {
      const out = html(h('div', null, s.content));
      lessonText += ' ' + text(out);
      assert.ok(text(out).length > 40, `${s.title}: empty slide`);
      assert.ok(!/undefined|\bNaN\b|\[object/.test(out), `${s.title}: broken text`);
      assert.ok(!/&ldquo;|&rsquo;/.test(s.title), `${s.title}: raw entity in a title`);
    }
    assert.ok((html(h('div', null, learnSteps.at(-1)!.content)).match(/<details/g) ?? []).length >= 3);
    const bank = extractCuratedBanks().filter((q) => q.file.includes(`grade11/history/${l.dir}/`));
    assert.equal(bank.length, 14);
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.equal(q.options.filter((o) => o === q.answer).length, 1, q.prompt);
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.filter((x) => x.severity === 'reject').map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
      const words = q.answer.toLowerCase().match(/[a-z]{6,}/g) ?? [];
      const missing = words.filter((w) => !lessonText.toLowerCase().includes(w));
      assert.ok(missing.length < 3, `${q.prompt}: ${missing.join(', ')}`);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4);
    // each content slide has a rule, a worked or source part and a common mistake
    for (const s of learnSteps.slice(1, -1)) {
      const out = html(h('div', null, s.content));
      assert.ok(/The rule/i.test(out) && /Common mistake/i.test(out), `${s.title}: missing rule or mistake`);
    }
  });
}

test('INDEPENDENT: the dates and numbers in the Topic 5 lessons match the standard record', () => {
  const r = RESISTANCE;
  assert.equal(when(r.defiance), '26 June 1952');
  assert.equal(when(r.charter), '26 June 1955');
  assert.equal(when(r.womenMarch), '9 August 1956');
  assert.deepEqual([r.nationalParty, r.youthLeague, r.programmeOfAction, r.groupAreas, r.suppressionCommunism, r.treasonArrests, r.treasonAcquittal, r.treasonAccused, r.pacFounded, r.womenMarchers],
    [1948, 1944, 1949, 1950, 1950, 1956, 1961, 156, 1959, 20000]);
  const a = ARMED;
  assert.equal(when(a.sharpeville), '21 March 1960');
  assert.equal(when(a.emergency), '30 March 1960');
  assert.equal(when(a.ban), '8 April 1960');
  assert.equal(when(a.mk), '16 December 1961');
  assert.equal(when(a.liliesleaf), '11 July 1963');
  assert.equal(when(a.speech), '20 April 1964');
  assert.equal(when(a.verdict), '12 June 1964');
  assert.deepEqual([a.killed, a.sabotageAct, a.trialStart, a.sentenced], [69, 1962, 1963, 8]);
  assert.ok(r.defiance.year < r.charter.year && r.charter.year < r.pacFounded && r.pacFounded < a.sharpeville.year, 'events are in order');
});
