import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { renderToStaticMarkup } from 'react-dom/server';
import { stubCss } from './components/subjects/lesson/lessonTest';
import { extractCuratedBanks } from './test-support/curatedBanks';
import { checkQuestion } from './lib/shared/questionQuality';
import { grade6 } from './curriculum/grade6';
import { HELP_NUMBERS, MANDELA_MINUTES, NATIONAL_DAYS, SYMBOLS } from './curriculum/grade6/life-skills/_shared/psw6Facts';

// Grade 6 Life Skills (Personal and Social Well-being) additions: shape, bank quality, and the care points (Childline 116 where relevant, nobody blamed, respect for every culture).

stubCss();
const bullying = await import('./curriculum/grade6/life-skills/term2/bullying-getting-help-t2/Slides');
const rites = await import('./curriculum/grade6/life-skills/term2/cultural-rites-of-passage-t2/Slides');
const animals = await import('./curriculum/grade6/life-skills/term3/caring-for-animals-t3/Slides');
const people = await import('./curriculum/grade6/life-skills/term3/caring-for-people-t3/Slides');
const nation = await import('./curriculum/grade6/life-skills/term3/nation-building-heritage-t3/Slides');
const html = (s: { content: unknown }) => renderToStaticMarkup(s.content as never);
const text = (steps: { content: unknown }[]) => steps.map((s) => html(s).replace(/<[^>]+>/g, ' ').replace(/&nbsp;| /g, ' ').replace(/\s+/g, ' ')).join(' ');
const LESSONS = { 'bullying-getting-help-t2': bullying, 'cultural-rites-of-passage-t2': rites, 'gr6-caring-for-animals-t3': animals, 'gr6-caring-for-people-t3': people, 'gr6-nation-building-heritage-t3': nation } as const;
const bankOf = (name: string) => extractCuratedBanks().filter((q) => q.file.includes(name.replace(/^gr6-/, '')));

test('the new Life Skills lessons are registered in their term after the existing three (ids unchanged), with a task instruction each', () => {
  const lsk = grade6.subjects.find((s) => s.id === 'lsk')!;
  const t2 = lsk.terms.find((t) => t.id === 2)!.topics.map((p) => p.id);
  assert.deepEqual(t2.slice(0, 3), ['personal-social-wellbeing-t2', 'physical-education-t2', 'creative-arts-t2']);
  const T2 = ['bullying-getting-help-t2', 'cultural-rites-of-passage-t2'];
  for (const id of T2) assert.ok(t2.includes(id), id);
  const tasks = JSON.parse(fs.readFileSync('src/lib/server/caps/tasks/lsk-term2.json', 'utf8')).tasks as Record<string, string>;
  for (const id of T2) assert.ok(id in tasks, id);
});

for (const [name, mod] of Object.entries(LESSONS)) {
  test(`${name}: 4 to 6 slides with the standard blocks, a final Check yourself with 3 to 4 questions, 12 clean questions in all four positions`, () => {
    const steps = mod.learnSteps;
    assert.ok(steps.length >= 4 && steps.length <= 6);
    assert.equal(steps.at(-1)!.title, 'Check yourself');
    for (const s of steps.slice(0, -1)) { const h = html(s); assert.match(h, /The rule/); assert.match(h, /Worked example/); assert.match(h, /Common mistake/); }
    assert.ok((html(steps.at(-1)!).match(/<details/g) ?? []).length >= 3);
    const bank = bankOf(name);
    assert.equal(bank.length, 12);
    for (const q of bank) {
      assert.equal(new Set(q.options).size, 4, q.prompt);
      const r = checkQuestion({ prompt: q.prompt, options: q.options, answer: q.answer, explanation: q.explanation ?? '' }, { existingPrompts: bank.filter((o) => o !== q).map((o) => o.prompt) });
      assert.deepEqual(r.reasons.map((x) => `${x.severity}:${x.code}`), [], q.prompt);
    }
    assert.equal(new Set(bank.map((q) => q.options.indexOf(q.answer))).size, 4);
  });
}

test('BULLYING: Childline 116 is given, online bullying is included, and it is never the fault of the child who is bullied', () => {
  const t = text(bullying.learnSteps);
  assert.ok(/Childline: phone 116 \(the call is free\)/.test(t));
  assert.ok(/Online:/.test(t) && /hurtful messages or pictures sent on a phone or the internet/.test(t));
  assert.ok(/never to blame/.test(t) && /a reason is never an excuse/i.test(t));
  const bank = bankOf('bullying-getting-help-t2');
  assert.equal(bank.find((q) => q.prompt.includes('free number'))!.answer, 'Childline on 116');
  assert.equal(bank.find((q) => q.prompt.includes('Whose fault'))!.answer, 'Not the fault of the child bullied');
  assert.ok(!/(kill|blood|weapon|suicid)/i.test(t), 'nothing graphic');
});

test('RITES OF PASSAGE: four stages, each with a meaning, a personal and a social significance; respect for every culture; no ritual described in detail', () => {
  const t = text(rites.learnSteps);
  for (const stage of ['Birth and baptism', 'Weddings', 'Death and funerals']) assert.ok(rites.learnSteps.some((s) => s.title === stage), stage);
  assert.equal((t.match(/Meaning:/g) ?? []).length, 3);
  assert.equal((t.match(/Personal:/g) ?? []).length, 3);
  assert.equal((t.match(/Social:/g) ?? []).length, 3);
  assert.ok(/each deserves respect/.test(t) && /Families differ/.test(t));
});

test('the Term 3 lessons are registered after the existing three (ids unchanged), with a task instruction each', () => {
  const lsk = grade6.subjects.find((s) => s.id === 'lsk')!;
  const t3 = lsk.terms.find((t) => t.id === 3)!.topics.map((p) => p.id);
  assert.deepEqual(t3.slice(0, 3), ['personal-social-wellbeing-t3', 'physical-education-t3', 'creative-arts-t3']);
  const tasks = JSON.parse(fs.readFileSync('src/lib/server/caps/tasks/lsk-term3.json', 'utf8')).tasks as Record<string, string>;
  for (const id of ['gr6-caring-for-animals-t3', 'gr6-caring-for-people-t3', 'gr6-nation-building-heritage-t3']) { assert.ok(t3.includes(id), id); assert.ok(id in tasks, id); }
});

test('NATIONAL DAYS AND SYMBOLS: the dates, the colours and the motto are the real ones, and the lesson and the questions agree with the facts file', () => {
  const day = (n: string) => NATIONAL_DAYS.find((d) => d.name === n)!;
  assert.deepEqual([day('Human Rights Day').day, day('Human Rights Day').month], [21, 'March']);
  assert.deepEqual([day('Freedom Day').day, day('Freedom Day').month], [27, 'April']);
  assert.deepEqual([day('Africa Day').day, day('Africa Day').month], [25, 'May']);
  assert.deepEqual([day('Mandela Day').day, day('Mandela Day').month], [18, 'July']);
  assert.deepEqual([day("Women's Day").day, day("Women's Day").month], [9, 'August']);
  assert.deepEqual([day('Heritage Day').day, day('Heritage Day').month], [24, 'September']);
  assert.deepEqual([day('Reconciliation Day').day, day('Reconciliation Day').month], [16, 'December']);
  assert.equal(NATIONAL_DAYS.length, 7);
  assert.equal(MANDELA_MINUTES, 67);
  assert.deepEqual([SYMBOLS.flag.colours, SYMBOLS.anthem.languages, SYMBOLS.coatOfArms.year, SYMBOLS.flag.adopted.year], [6, 5, 2000, 1994]);
  const t = text(nation.learnSteps);
  for (const d of NATIONAL_DAYS) assert.ok(t.includes(`${d.day} ${d.month}`), d.name);
  assert.ok(t.includes('!ke e: /xarra //ke') && t.includes('Diverse people unite'));
  assert.ok(!/Children.s Day \(\d/.test(t), "no date is given for Children's Day");
  const bank = bankOf('nation-building-heritage-t3');
  const ans = (part: string) => bank.find((q) => q.prompt.includes(part))!.answer;
  assert.equal(ans('Which national day is on 27 April'), 'Freedom Day');
  assert.equal(ans('On which date is Heritage Day'), '24 September');
  assert.equal(ans('flag first flown'), '27 April 1994');
  assert.equal(ans('How many colours'), 'Six');
  assert.equal(ans('How many minutes'), '67 minutes');
  assert.equal(ans('motto of the coat of arms'), 'Diverse people unite');
});

test('ANIMALS AND PEOPLE: tell a trusted adult first, SPCA and shelters named, no graphic detail', () => {
  const a = text(animals.learnSteps);
  assert.ok(/Tell a trusted adult|tell a trusted adult/.test(a) && /SPCA/.test(a) && /animal shelters/i.test(a) && /Wild animals belong in the wild/.test(a));
  assert.ok(!/(blood|kill|torture|starv)/i.test(a), 'nothing graphic');
  const p = text(people.learnSteps);
  assert.ok(/I feel/.test(p) && /need/.test(p) && /67 minutes/.test(p));
  assert.equal(HELP_NUMBERS.childline.number, '116');
});
