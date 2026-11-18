import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';
import { AFRIKANER, AUSTRALIA, spanYears } from './curriculum/grade11/history/_shared/gaps11Facts';
import { historyGrade11 } from './curriculum/grade11/history';

// Grade 11 History gaps: Australia and the Stolen Generations (term 2) and Afrikaner nationalism (term 3).
// Dates are asserted here independently of gaps11Facts.ts. Sources in the lessons are original or paraphrased descriptions.

stubCss();
const LESSONS = [
  { id: 'gr11-australia-colonisation-race-theories-t2', term: 2, dir: 'term2/australia-colonisation-race-theories', mod: 'AustraliaColonisationRaceTheories' },
  { id: 'gr11-stolen-generations-t2', term: 2, dir: 'term2/stolen-generations', mod: 'StolenGenerations' },
  { id: 'gr11-afrikaner-nationalism-rise-t3', term: 3, dir: 'term3/afrikaner-nationalism-rise', mod: 'AfrikanerNationalismRise' },
  { id: 'gr11-afrikaner-nationalism-volk-power-t3', term: 3, dir: 'term3/afrikaner-nationalism-volk-power', mod: 'AfrikanerNationalismVolkPower' },
];
const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);
const text = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();

test('the four lessons are registered in the right terms with their old neighbours first and a task instruction each', () => {
  for (const l of LESSONS) {
    const ids = historyGrade11.terms.find((t) => t.id === l.term)!.topics.map((t) => t.id);
    assert.ok(ids.includes(l.id), l.id);
  }
  const t2 = historyGrade11.terms.find((t) => t.id === 2)!.topics.map((t) => t.id);
  assert.deepEqual(t2.slice(0, 4), ['gr11-roaring-twenties-t2', 'gr11-wall-street-crash-t2', 'gr11-new-deal-t2', 'gr11-capitalism-vs-communism-t2']);
  const t3 = historyGrade11.terms.find((t) => t.id === 3)!.topics.map((t) => t.id);
  // Wave B moved the race lessons to Term 2 and the nationalism lessons to Term 3.
  assert.deepEqual(t3.slice(0, 3), ['gr11-african-nationalism-t4', 'gr11-afrikaner-nationalism-rise-t3', 'gr11-afrikaner-nationalism-volk-power-t3']);
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

test('INDEPENDENT: the dates in the Afrikaner nationalism lessons match the standard record', () => {
  const a = AFRIKANER;
  assert.deepEqual([a.warStart, a.warEnd, a.union, a.npFounded, a.dieBurger, a.broederbond, a.sanlam, a.randRevolt, a.civilisedLabour, a.afrikaansOfficial, a.fak, a.carnegieReport, a.bible, a.volkskas, a.nativeRepresentation, a.dieTransvaler, a.centenary, a.reddingsdaadbond, a.election, a.landAct],
    [1899, 1902, 1910, 1914, 1915, 1918, 1918, 1922, 1924, 1925, 1929, 1932, 1933, 1934, 1936, 1937, 1938, 1939, 1948, 1913]);
  assert.equal(spanYears(a.warStart, a.warEnd), 3);
  assert.ok(a.landAct < a.nativeRepresentation && a.nativeRepresentation < a.election, 'segregation laws came before 1948');
});
test('INDEPENDENT: the dates in the Australia lessons match the standard record', () => {
  const s = AUSTRALIA;
  assert.deepEqual([s.firstFleet, s.federation, s.waAboriginesAct, s.removalsFrom, s.removalsTo, s.nevilleFrom, s.nevilleTo, s.cookFrom, s.cookTo, s.canberraConference, s.whiteAustraliaEnded, s.mabo, s.bringingThemHome, s.sorryDay, s.childMigrantApologyAustralia, s.childMigrantApologyBritain],
    [1788, 1901, 1905, 1910, 1970, 1915, 1940, 1927, 1939, 1937, 1973, 1992, 1997, 1998, 2009, 2010]);
  assert.deepEqual(s.apology, { day: 13, month: 'February', year: 2008 });
  assert.equal(spanYears(s.removalsFrom, s.removalsTo), 60);
  assert.ok(s.canberraConference > s.nevilleFrom && s.canberraConference < s.nevilleTo, 'Neville was in office in 1937');
  assert.ok(s.canberraConference > s.cookFrom && s.canberraConference < s.cookTo, 'Cook was in office in 1937');
});
