import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';
import { geographyGrade8 } from './curriculum/grade8/geography';
import geoT3 from './lib/server/caps/tasks/geo-gr8-term3.json';
import geoT4 from './lib/server/caps/tasks/geo-gr8-term4.json';

// Grade 8 Geography, branch D (terms 3 and 4): the settlement project guide, land use in settlements, and moving goods and people, beside the term lessons.
// No figures (tonnes, rand, percentages) are given for any harbour, road or railway: the lessons are qualitative.

stubCss();
const LESSONS = [
  { id: 'settlement-investigation-project', term: 3, dir: 'term3/settlement-investigation-project', mod: 'SettlementInvestigationProject' },
  { id: 'land-use-urban-and-rural-settlements', term: 3, dir: 'term3/land-use-urban-and-rural-settlements', mod: 'LandUseUrbanAndRuralSettlements' },
  { id: 'moving-goods-and-people-in-south-africa', term: 4, dir: 'term4/moving-goods-and-people-in-south-africa', mod: 'MovingGoodsAndPeopleInSouthAfrica' },
];
const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);
const text = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/&#x27;|&#39;/g, "'").replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();
const read = async (l: (typeof LESSONS)[number]) => {
  const { learnSteps } = await import(`./curriculum/grade8/geography/${l.dir}/${l.mod}`);
  return learnSteps.map((s: { title: string; content: React.ReactNode }) => ({ title: s.title, text: text(html(h('div', null, s.content))) }));
};

test('registered after the existing term lessons, each with a task instruction', () => {
  const ids = (n: number) => geographyGrade8.terms.find((t) => t.id === n)!.topics.map((t) => t.id);
  assert.equal(ids(3)[0], 'settlement-and-urbanisation');
  assert.equal(ids(4)[0], 'transport-and-trade');
  const tasks = { ...geoT3.tasks, ...geoT4.tasks } as Record<string, string>;
  for (const l of LESSONS) {
    assert.ok(ids(l.term).includes(l.id), l.id);
    assert.ok(tasks[`gr8-${l.id}-t${l.term}`], l.id);
  }
});

for (const l of LESSONS) {
  test(`${l.id}: slides, 14 clean questions, key words in the lesson`, async () => {
    const { learnSteps } = await import(`./curriculum/grade8/geography/${l.dir}/${l.mod}`);
    assert.ok(learnSteps.length >= 4 && learnSteps.length <= 6);
    assert.equal(learnSteps.at(-1)?.title, 'Check yourself');
    let lessonText = '';
    for (const s of learnSteps) {
      const out = html(h('div', null, s.content));
      lessonText += ' ' + text(out);
      assert.ok(text(out).length > 40 && !/undefined|\bNaN\b|\[object/.test(out) && !out.includes('\\'), `${s.title}: broken text`);
    }
    assert.ok((html(h('div', null, learnSteps.at(-1)!.content)).match(/<details/g) ?? []).length >= 3);
    for (const s of learnSteps.slice(0, -1)) {
      const out = html(h('div', null, s.content));
      assert.ok(/The rule/i.test(out) && /Common mistake/i.test(out) && /Worked example/i.test(out), `${s.title}: rule, worked example or mistake missing`);
      assert.ok(/role="img"/.test(out) && /aria-label="[^"]{30,}"/.test(out), `${s.title}: picture without aria`);
    }
    const bank = extractCuratedBanks().filter((q) => q.file.includes(`grade8/geography/${l.dir}/`));
    assert.equal(bank.length, 14);
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.ok(q.options.includes(q.answer));
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.map((x) => `${x.severity}:${x.code}`), [], q.prompt);
    }
    const pos = [0, 0, 0, 0];
    for (const q of bank) pos[q.options.indexOf(q.answer)]++;
    assert.ok(pos.every((n) => n > 0) && Math.max(...pos) <= 5, JSON.stringify(pos));
  });
}

test('INDEPENDENT: facts and no figures', async () => {
  const all: Record<string, string> = {};
  for (const l of LESSONS) all[l.id] = (await read(l)).map((x: { text: string }) => x.text).join(' ');
  // Johannesburg grew after gold was found in 1886
  assert.match(all['settlement-investigation-project'], /1886/);
  for (const part of ['sketch map', 'north arrow', 'key', 'interview', 'landmarks', 'growth or decline']) assert.ok(all['settlement-investigation-project'].toLowerCase().includes(part), part);
  for (const zone of ['central business district', 'light and heavy industry', 'high-income', 'middle-income', 'low-income', 'shopping centres', 'recreation', 'farming', 'mining', 'forestry', 'fishing', 'vertical', 'oblique']) assert.ok(all['land-use-urban-and-rural-settlements'].toLowerCase().includes(zone) || all['land-use-urban-and-rural-settlements'].toLowerCase().includes(zone.replace(' and heavy', '')), zone);
  for (const ship of ['container ships', 'tankers', 'bulk carriers', 'passenger liners']) assert.ok(all['moving-goods-and-people-in-south-africa'].includes(ship), ship);
  for (const strategy of ['bus rapid transport', 'subsidised public transport', 'bus and cycle lanes', 'park and ride', 'car-free zones']) assert.ok(all['moving-goods-and-people-in-south-africa'].includes(strategy), strategy);
  assert.match(all['moving-goods-and-people-in-south-africa'], /Bogot/);
  assert.match(all['moving-goods-and-people-in-south-africa'], /Curitiba/);
  for (const text of Object.values(all)) {
    assert.ok(!/\b\d[\d\s]*\s?(tonnes|million|billion|%|rand|containers a year)/i.test(text), 'no cargo, money or percentage figures');
  }
});
