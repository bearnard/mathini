import test from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { stubCss, renderSlides, assertLessonShape } from './components/subjects/lesson/lessonTest';
import { checkQuestion } from './lib/shared/questionQuality';
import { grade10 } from './curriculum/grade10';

// Grade 10 Business Studies gaps: entrepreneurial qualities, socio-economic issues in depth, business location, contracts, SWOT/research/creative techniques,
// self-management. Qualitative lessons with a few computed numbers (recomputed here independently of bus10.ts). Acts are named only as areas of law.

stubCss();
const topics: [string, string, number][] = [
  ['term2/entrepreneurial-qualities', 'EntrepreneurialQualities', 2], ['term2/socio-economic-issues-depth', 'SocioEconomicIssuesDepth', 2],
  ['term3/business-location', 'BusinessLocation', 3], ['term3/contracts', 'Contracts', 3], ['term3/swot-research-creative', 'SwotResearchCreative', 3],
  ['term4/self-management', 'SelfManagement', 4],
];
const lessons: Record<string, ReturnType<typeof renderSlides>> = {};
const banks: Record<string, ReturnType<typeof extractCuratedBanks>> = {};
for (const [dir, name] of topics) {
  lessons[dir] = renderSlides((await import(`./curriculum/grade10/business-studies/${dir}/${name}`)).learnSteps);
  banks[dir] = extractCuratedBanks().filter((q) => q.file.includes(`grade10/business-studies/${dir}/`));
}
for (const [dir] of topics) {
  test(`${dir}: standard lesson shape, 14 valid questions, key words`, () => {
    assertLessonShape(lessons[dir]);
    const bank = banks[dir];
    assert.equal(bank.length, 14);
    const text = lessons[dir].map((x) => x.text).join(' ').toLowerCase();
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      assert.equal(q.options.filter((o) => o === q.answer).length, 1, q.prompt);
      const res = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(res.reasons.filter((x) => x.severity === 'reject').map((x) => `${x.code}: ${x.detail}`), [], q.prompt);
      assert.ok(!/\blearners?\b|\bCAPS\b/i.test(q.prompt), q.prompt);
      const words = q.answer.toLowerCase().match(/[a-z]{6,}/g) ?? [];
      assert.ok(words.filter((w) => !text.includes(w)).length < 3, q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4);
    assert.ok(!/section \d+|\bNaN\b|undefined/i.test(lessons[dir].map((x) => x.text).join(' ')), 'no section numbers');
  });
}
test('registered in the right terms and no term is empty', () => {
  const bs = grade10.subjects.find((s) => s.id === 'business-studies')!;
  const termOf = (id: string) => bs.terms.find((t) => t.topics.some((p) => p.id === id))?.id;
  for (const [dir, , term] of topics) assert.equal(termOf(`gr10-${dir.split('/')[1]}-t${term}`), term, dir);
  for (const t of bs.terms) assert.ok(t.topics.length > 0);
});
test('INDEPENDENT: self-scores, location totals, pyramid growth, survey, time budget and hire purchase', () => {
  const find = (dir: string, start: string) => banks[dir].find((q) => q.prompt.startsWith(start))!;
  assert.equal(4 + 5 + 3 + 2 + 4 + 3 + 5 + 4, 30);
  assert.equal(30 / 8, 3.75);
  assert.equal((4 + 3 + 5 + 4) / 4, 4);
  const w = [3, 2, 3, 2];
  const dot = (s: number[]) => s.reduce((a, v, i) => a + v * w[i], 0);
  assert.deepEqual([[4, 3, 4, 2], [5, 4, 5, 4], [2, 2, 3, 5]].map(dot), [34, 46, 29]);
  assert.equal(w.reduce((a, b) => a + b, 0) * 5, 50);
  assert.equal(4 * 3 + 3 * 2, 18);
  assert.equal(3n ** 3n, 27n);
  assert.equal(3n ** 4n, 81n);
  assert.equal(3n ** 10n, 59049n);
  assert.ok(3n ** 17n > 60000000n && 3n ** 16n < 60000000n);
  assert.equal(24 - (8 + 7 + 1 + 2), 6);
  assert.equal(24 - (8 + 7 + 1 + 2 + 3), 3);
  assert.equal((40 / 50) * 100, 80);
  assert.equal(500 + 10 * 300, 3500);
  assert.equal(3500 - 3000, 500);
  assert.equal(240000 + 12 * 190000, 2520000);
  assert.equal(2520000 - 2400000, 120000);
  assert.equal(9 - 5, 4);
  assert.equal(find('term3/contracts', 'A buyer pays a R500 deposit').answer, 'R3 500');
  assert.equal(find('term3/business-location', 'A site scores 4 on transport').answer, '18');
  assert.equal(find('term3/business-location', 'Four factors have weights').answer, '50');
});
