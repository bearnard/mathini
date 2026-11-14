import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from '../../test-support/curatedBanks';

// South African convention: the decimal COMMA (3,5 km; R18,50), thousands separated by a space (1 000). The Grade 6 maths lessons use it, so the
// question banks must too, or a learner sees "3,5 km" in the lesson and "3.5 km" in the quiz.
//
// A question's PROMPT cannot be edited without changing its qkey (task + prompt) and orphaning every learner's review schedule for it.
// So the 14 questions whose PROMPT contains a decimal point are listed here and left alone until the owner decides (accept the orphaning, or wait
// for stable question ids). This is a RATCHET: everything else must already use the comma, and an entry that no longer has a point must be removed.

const POINT = /(?<=\d)\.(?=\d)/;
const PENDING_PROMPTS = new Set([
  'In 3.52, the digit 5 represents...',
  'What is the value of the digit 4 in 12.47?',
  'Write 0.07 as a fraction.',
  'In 5.62, which digit is in the hundredths place?',
  'Order from smallest to largest: 0.3, 0.13, 0.31',
  'What is 0.4 + 0.3?',
  'What is 0.85 − 0.3?',
  'Which decimal is between 0.4 and 0.6?',
  'Write 0.25 as a fraction in its simplest form.',
  'What is 1.3 + 0.7?',
  'Convert 3.5 m to centimetres.',
  'A road is 2.5 km long. How many metres is that?',
  'Convert 2.5 litres to millilitres.',
  'Convert 3.5 kg to grams.',
]);

const maths = extractCuratedBanks().filter((q) => q.kind === 'mcq' && /^grade6\/term[1-4]\//.test(q.file));
const text = (q: (typeof maths)[number]) => [q.prompt, ...q.options, q.answer, q.explanation ?? ''];

test('the Grade 6 maths banks are found', () => {
  assert.ok(maths.length >= 140, `${maths.length} curated Grade 6 maths MCQs`);
});

test('every question whose PROMPT has no decimal point uses the decimal comma in its options, answer and explanation', () => {
  const bad = maths.filter((q) => !POINT.test(q.prompt) && [...q.options, q.answer, q.explanation ?? ''].some((t) => POINT.test(t)));
  assert.deepEqual(bad.map((q) => q.prompt), [], 'these questions still show a decimal point; use the comma (3,5 km; R18,50)');
});

test('PENDING list: only prompts that really contain a point, and no prompt outside it contains one', () => {
  const withPoint = maths.filter((q) => POINT.test(q.prompt)).map((q) => q.prompt);
  for (const p of withPoint) assert.ok(PENDING_PROMPTS.has(p), `new decimal-point prompt not in the pending list: ${p}`);
  for (const p of PENDING_PROMPTS) assert.ok(withPoint.includes(p), `"${p}" no longer has a point (or was reworded): remove it from the pending list`);
});

test('a pending question is consistent with itself: it uses points throughout, never a mix of point and comma', () => {
  for (const q of maths.filter((x) => PENDING_PROMPTS.has(x.prompt))) {
    const all = text(q).join(' ');
    assert.doesNotMatch(all, /(?<=\d),(?=\d{1,2}(?!\d))/, `mixed notation in: ${q.prompt}`);
  }
});

test('the converted items still make sense: the key is one of the options, and the comma versions agree', () => {
  for (const q of maths) assert.ok(q.options.includes(q.answer), `answer not in options: ${q.prompt}`);
  const q = maths.find((x) => x.prompt === 'Which decimal is equal to 3/10?');
  assert.ok(q);
  assert.equal(q.answer, '0,3');
  assert.deepEqual([...q.options].sort(), ['0,03', '0,3', '3,0', '30']);
  assert.match(q.explanation ?? '', /decimal comma/);
});
