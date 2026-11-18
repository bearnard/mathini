import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';
import { geographyGrade8 } from './curriculum/grade8/geography';
import geoT1 from './lib/server/caps/tasks/geo-gr8-term1.json';
import geoT2 from './lib/server/caps/tasks/geo-gr8-term2.json';

// Grade 8 Geography, branch C (terms 1 and 2): the seasons, world time, climate factors and kinds of climate, beside the four term lessons.
// Worked numbers are written out here by hand, independently of grade8Geo.ts.

stubCss();
const LESSONS = [
  { id: 'equinox-solstice-seasons', term: 1, dir: 'term1/equinox-solstice-seasons', mod: 'EquinoxSolsticeSeasons' },
  { id: 'world-time-and-sa-standard-time', term: 1, dir: 'term1/world-time-and-sa-standard-time', mod: 'WorldTimeAndSaStandardTime' },
  { id: 'climate-factors-and-sa-climate', term: 2, dir: 'term2/climate-factors-and-sa-climate', mod: 'ClimateFactorsAndSaClimate' },
  { id: 'climate-kinds-and-climate-graphs', term: 2, dir: 'term2/climate-kinds-and-graphs', mod: 'ClimateKindsAndGraphs' },
];
const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);
const text = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/&#x27;|&#39;/g, "'").replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();
const read = async (l: (typeof LESSONS)[number]) => {
  const { learnSteps } = await import(`./curriculum/grade8/geography/${l.dir}/${l.mod}`);
  return learnSteps.map((s: { title: string; content: React.ReactNode }) => ({ title: s.title, text: text(html(h('div', null, s.content))) }));
};

test('registered after the existing term lessons, each with a task instruction', () => {
  const ids = (n: number) => geographyGrade8.terms.find((t) => t.id === n)!.topics.map((t) => t.id);
  assert.equal(ids(1)[0], 'maps-globes-and-satellite-images');
  assert.equal(ids(2)[0], 'climate-regions-in-south-africa-and-the-world');
  const tasks = { ...geoT1.tasks, ...geoT2.tasks } as Record<string, string>;
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

test('INDEPENDENT: seasons and sun angles', async () => {
  const s = (await read(LESSONS[0])).map((x: { text: string }) => x.text).join(' ');
  // Johannesburg 26 S: 21 Dec 90 - 2,5 = 87,5; equinox 90 - 26 = 64; 21 June 90 - 49,5 = 40,5. Cape Town 34 S: 79,5 and 32,5; difference 47; equinox 56.
  assert.match(s, /87,5°/);
  assert.match(s, /90° − 2,5° = 87,5°/);
  assert.match(s, /90° − 26° = 64°/);
  assert.match(s, /90° − 49,5° = 40,5°/);
  assert.match(s, /79,5° high/);
  assert.match(s, /32,5° high/);
  assert.match(s, /difference is 47°/);
  assert.match(s, /90° − 34° = 56°/);
  assert.match(s, /23,5°/);
  assert.match(s, /21 December/);
  assert.match(s, /21 June/);
  assert.match(s, /21 March and 23 September/);
  assert.equal(90 - (26 - 23.5), 87.5);
  assert.equal(90 - 26, 64);
  assert.equal(90 - (26 + 23.5), 40.5);
  assert.equal(90 - (34 - 23.5) - (90 - (34 + 23.5)), 47);
});

test('INDEPENDENT: world time', async () => {
  const s = (await read(LESSONS[1])).map((x: { text: string }) => x.text).join(' ');
  assert.match(s, /360° ÷ 24 = 15°/);
  assert.match(s, /30° ÷ 15° = 2 hours/);
  assert.match(s, /45° E is 3 hours ahead/);
  assert.match(s, /60 minutes ÷ 15° = 4/);
  assert.match(s, /12 × 4 = 48 minutes later/);
  assert.match(s, /1 × 4 = 4 minutes earlier/);
  // 12:00 SAST: London 10:00, Nairobi 13:00, Delhi 15:30, Tokyo 19:00; 22:00 SAST is 05:00 next day in Tokyo
  assert.match(s, /London 10:00/);
  assert.match(s, /Nairobi 13:00/);
  assert.match(s, /Delhi 15:30/);
  assert.match(s, /Tokyo 19:00/);
  assert.match(s, /London is UTC\+0, which is 2 hours behind: 10:00/);
  assert.match(s, /05:00 the next day in Tokyo/);
  assert.match(s, /3 hours 30 minutes/);
  assert.match(s, /no daylight saving/);
  assert.match(s, /UTC\+2/);
  assert.equal(360 / 24, 15);
  assert.equal(new Date(Date.UTC(2023, 0, 10, 12) - 2 * 3600e3 + 9 * 3600e3).getUTCHours(), 19);
  assert.equal(new Date(Date.UTC(2023, 0, 10, 22) - 2 * 3600e3 + 9 * 3600e3).getUTCDate(), 11);
  assert.equal(new Date(Date.UTC(2023, 0, 10, 12) - 2 * 3600e3 + 5.5 * 3600e3).getUTCMinutes(), 30);
});

test('INDEPENDENT: climate figures', async () => {
  const f = (await read(LESSONS[2])).map((x: { text: string }) => x.text).join(' ');
  assert.match(f, /6,5 °C/);
  assert.match(f, /24 − 13 = 11 °C/);
  assert.match(f, /about 20,3 °C|about 20,25 °C|about 20,3|20,3 °C/);
  assert.equal(24 - 2 * 6.5, 11);
  assert.equal(30 - 1.5 * 6.5, 20.25);
  assert.ok(!/\d+ mm/.test(f), 'no rainfall figures are given for the real South African places');
  const k = (await read(LESSONS[3])).map((x: { text: string }) => x.text).join(' ');
  // example A: wettest June, driest January, warmest January 21, coldest July 11, range 10, total 580 mm; B: 2 320 mm, range 1; C: 37 mm
  const A = { rain: [15, 15, 20, 45, 80, 100, 95, 85, 50, 35, 25, 15], temp: [21, 21, 20, 17, 14, 12, 11, 12, 14, 16, 18, 20] };
  assert.equal(A.rain.reduce((x, y) => x + y, 0), 580);
  assert.equal(Math.max(...A.temp) - Math.min(...A.temp), 10);
  assert.match(k, /wettest month is June/);
  assert.match(k, /driest month is January/);
  assert.match(k, /temperature range is 10 °C/);
  assert.match(k, /580 mm/);
  assert.match(k, /2\s320 mm/);
  assert.match(k, /range of 1 °C/);
  assert.match(k, /37 mm/);
  assert.match(k, /not a real place/);
  for (const kind of ['tropical', 'subtropical', 'temperate', 'desert', 'semi-desert', 'continental', 'polar', 'Mediterranean', 'tundra', 'alpine']) assert.ok(new RegExp(kind, 'i').test(k), kind);
});
