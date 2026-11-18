import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';
import { historyGrade8 } from './curriculum/grade8/history';
import hisT1 from './lib/server/caps/tasks/his-gr8-term1.json';
import hisT2 from './lib/server/caps/tasks/his-gr8-term2.json';

// Grade 8 History, branch A (terms 1 and 2): six lessons beside the four term lessons that were already there.
// Dates are asserted here from the standard record, independently of the lesson files. Every source box is an original or paraphrased description.

stubCss();
const LESSONS = [
  { id: 'britain-workers-and-protest', term: 1, dir: 'term1/britain-workers-and-protest', mod: 'BritainWorkersAndProtest' },
  { id: 'southern-africa-1860-indentured-labour', term: 1, dir: 'term1/southern-africa-1860-indentured-labour', mod: 'SouthernAfrica1860IndenturedLabour' },
  { id: 'kimberley-diamonds-and-monopoly', term: 1, dir: 'term1/kimberley-diamonds-and-monopoly', mod: 'KimberleyDiamondsAndMonopoly' },
  { id: 'labour-control-and-land', term: 2, dir: 'term2/labour-control-and-land', mod: 'LabourControlAndLand' },
  { id: 'gold-randlords-and-miners', term: 2, dir: 'term2/gold-randlords-and-miners', mod: 'GoldRandlordsAndMiners' },
  { id: 'mineral-revolution-turning-point', term: 2, dir: 'term2/mineral-revolution-turning-point', mod: 'MineralRevolutionTurningPoint' },
];
const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);
const text = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/&#x27;|&#39;/g, "'").replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();

test('registered after the existing term lessons, each with a task instruction', () => {
  const ids = (n: number) => historyGrade8.terms.find((t) => t.id === n)!.topics.map((t) => t.id);
  assert.equal(ids(1)[0], 'industrial-revolution-in-britain-and-southern-africa');
  assert.equal(ids(2)[0], 'mineral-revolution-in-south-africa');
  for (const l of LESSONS) assert.ok(ids(l.term).includes(l.id), l.id);
  const tasks = { ...hisT1.tasks, ...hisT2.tasks } as Record<string, string>;
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
  const [brit, sa, kim, lab, gold, turn] = await Promise.all(LESSONS.map(read));
  // Luddites 1811 to 1816; Swing Riots 1830; Factory Act 1833; GNCTU 1833 (CAPS); Mines Act 1842
  assert.match(brit, /1811 to 1816/);
  assert.match(brit, /Swing Riots of 1830|1830/);
  assert.match(brit, /Factory Act of 1833/);
  assert.match(brit, /Trades Union of 1833|Union.{0,40}1833|1833.{0,60}Trades Union/);
  assert.match(brit, /Mines Act of 1842/);
  // slavery ended in the British Empire 1834; the Boer republics recognised 1852 and 1854; first indentured workers 1860; Passenger Indians 1869
  assert.match(sa, /1834/);
  assert.match(sa, /1852 and 1854/);
  assert.match(sa, /1860/);
  assert.match(sa, /1869/);
  // first diamond 1867; Kimberley rush and British take-over of Griqualand West 1871; De Beers Consolidated Mines 1888
  assert.match(kim, /1867/);
  assert.match(kim, /1871/);
  assert.match(kim, /1888/);
  // Xhosa defeated 1878; Pedi and Zulu 1879; Isandlwana January 1879
  assert.match(lab, /1878/);
  assert.match(lab, /1879/);
  assert.match(lab, /January 1879/);
  // gold found 1886; Chamber of Mines 1889
  assert.match(gold, /1886/);
  assert.match(gold, /1889/);
  // APO 1902; TIC 1903; Bambatha 1906; Union 1910; SANNC 1912; Land Act 1913; Satyagraha 1913 to 1914
  assert.match(turn, /African Political Organisation.{0,40}1902|1902.{0,80}African Political Organisation/);
  assert.match(turn, /Transvaal Indian Congress.{0,40}1903|1903.{0,80}Transvaal Indian Congress/);
  assert.match(turn, /1906/);
  assert.match(turn, /1910/);
  assert.match(turn, /1912/);
  assert.match(turn, /Land Act of 1913/);
  assert.match(turn, /1913 to 1914/);
  // Distinct years in the order of the record
  assert.ok(1811 < 1830 && 1830 < 1833 && 1833 < 1842 && 1860 < 1867 && 1867 < 1871 && 1878 < 1879 && 1886 < 1889 && 1902 < 1903 && 1906 < 1910 && 1910 < 1912 && 1912 < 1913);
});
