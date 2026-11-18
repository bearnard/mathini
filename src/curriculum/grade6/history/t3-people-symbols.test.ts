import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../components/subjects/lesson/lessonTest';
import { batchesFor } from '../../../lib/server/caps/batches';
import { TASK_INDEX } from '../../../lib/server/caps/taskIndex.generated';
import { grade6 } from './../index';

// Grade 6 History Term 3: national symbols, Fatima Meer, Pius Langa, the Children's Charter. Years and spans recomputed with plain arithmetic.
stubCss();
const dirs: [string, string, string][] = [
  ['national-symbols', 'NationalSymbols', 'gr6-national-symbols-t3'], ['fatima-meer', 'FatimaMeer', 'gr6-fatima-meer-t3'],
  ['pius-langa', 'PiusLanga', 'gr6-pius-langa-t3'], ['childrens-charter-rights', 'ChildrensCharterRights', 'gr6-childrens-charter-rights-t3'],
];
const mods: Record<string, any> = {};
for (const [d, n] of dirs) mods[d] = await import(`./term3/${d}/${n}`);
const slides = (d: string) => renderSlides(mods[d].learnSteps);
const text = (d: string) => slides(d).map((s) => s.text.replace(/ /g, ' ')).join(' | ');
const key = (d: string, start: string): string => {
  const hit = mods[d].bank.filter((b: { prompt: string }) => b.prompt.startsWith(start));
  assert.equal(hit.length, 1, start);
  return hit[0].answer;
};

test('standard shape, labelled pictures, 14 questions with four distinct options', () => {
  for (const [d] of dirs) {
    const sl = slides(d);
    assertLessonShape(sl);
    for (const s of sl) assert.equal(s.labelled, s.pictures, `${d} / ${s.title}`);
    const bank = mods[d].bank;
    assert.equal(bank.length, 14);
    for (const b of bank) { assert.equal(b.options.length, 4); assert.equal(new Set(b.options).size, 4); assert.ok(b.options.includes(b.answer)); }
    assert.equal(new Set(bank.map((b: any) => b.options.indexOf(b.answer))).size, 4);
  }
});

test('INDEPENDENT: years and spans', () => {
  assert.equal(key('national-symbols', 'The new flag was first flown'), '1994');
  assert.equal(key('national-symbols', 'The coat of arms came into use'), '2000');
  assert.equal(key('national-symbols', 'In which year were the two songs'), '1997');
  assert.equal(key('national-symbols', 'What is the gap in years'), `${2000 - 1994} years`);
  assert.equal(key('fatima-meer', 'What was the year of birth'), '1928');
  assert.equal(key('fatima-meer', 'In which year did Fatima Meer die'), '2010');
  assert.equal(key('fatima-meer', 'How many years did Fatima Meer live'), `${2010 - 1928} years`);
  assert.equal(key('pius-langa', 'Pius Langa joined the Constitutional'), '1994');
  assert.equal(key('pius-langa', 'In which year did Pius Langa become Chief'), '2005');
  assert.equal(key('pius-langa', 'For how many years was Pius Langa'), `${2009 - 2005} years`);
  assert.equal(key('childrens-charter-rights', 'In which year was the Children'), '1992');
  assert.equal(key('childrens-charter-rights', 'How many years before the first democratic'), `${1994 - 1992} years`);
  const all = dirs.map(([d]) => text(d)).join(' ');
  for (const s of ['/Xam', 'diverse people unite', 'Nkosi Sikelel', 'Die Stem', 'Bushbuckridge', 'Chief Justice', 'banned', 'detained', 'best interests', 'Bill of Rights']) assert.ok(all.includes(s), `missing ${s}`);
});

test('facts are told plainly: no colour meanings invented, no section numbers, no graphic language', () => {
  const all = dirs.map(([d]) => text(d)).join(' ');
  assert.ok(!/\bsection \d+|\bact \d+ of\b/i.test(all));
  assert.ok(!/(red|blue|green|yellow|black|white|orange) (stands|means|shows) /i.test(all));
  assert.ok(!/\b(blood|brutal|torture|massacre)\b/i.test(all));
});

test('registered in Term 3 and the task ids are History, not Maths', () => {
  const hist = grade6.subjects.find((s) => s.terms.some((t) => t.topics.some((p) => p.id === 'his-national-symbols')))!;
  assert.ok(hist);
  const t3 = hist.terms.find((t) => t.id === 3)!;
  for (const id of ['his-national-symbols', 'his-fatima-meer', 'his-pius-langa', 'his-childrens-charter-rights']) assert.ok(t3.topics.some((p) => p.id === id), id);
  for (const t of hist.terms) assert.ok(t.topics.length > 0);
  for (const [, , task] of dirs) {
    assert.deepEqual(TASK_INDEX[task], ['his', 6], task);
    const b = batchesFor(task, 'his');
    assert.ok(!b.includes('calculations' as never) && !b.includes('misconceptions' as never), `${task}: ${b.join(',')}`);
  }
});
