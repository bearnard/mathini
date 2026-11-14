import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractCuratedBanks } from '../../test-support/curatedBanks';

// South African convention: the decimal COMMA (3,5 km; R18,50), thousands separated by a space (1 000). The Grade 6 maths lessons use it, so the
// question banks must too, or a learner sees "3,5 km" in the lesson and "3.5 km" in the quiz.
//
// RATCHET AT ZERO: no Grade 6 maths curated question may contain a decimal point between digits in its prompt, options, answer or explanation.
// (A prompt cannot be edited without changing its qkey, which orphans review schedules; the last 14 point-prompts were converted on the owner's
// decision after checking that no learner had a review schedule for them.) Lists of decimals are separated with semicolons so the commas do not clash.

const POINT = /(?<=\d)\.(?=\d)/;

const maths = extractCuratedBanks().filter((q) => q.kind === 'mcq' && /^grade6\/term[1-4]\//.test(q.file));
const text = (q: (typeof maths)[number]) => [q.prompt, ...q.options, q.answer, q.explanation ?? ''];

test('the Grade 6 maths banks are found', () => {
  assert.ok(maths.length >= 140, `${maths.length} curated Grade 6 maths MCQs`);
});

test('no Grade 6 maths question has a decimal point anywhere (prompt, options, answer, explanation): use the comma (3,5 km; R18,50)', () => {
  const bad = maths.filter((q) => text(q).some((t) => POINT.test(t)));
  assert.deepEqual(bad.map((q) => q.prompt), []);
});

test('a list of decimals never uses the comma as BOTH the decimal mark and the separator (use semicolons or "and")', () => {
  // "0,3, 0,13, 0,31" is ambiguous; "0,3; 0,13; 0,31" is not
  const clash = /\d,\d+, \d/;
  const bad = maths.filter((q) => text(q).some((t) => clash.test(t)));
  assert.deepEqual(bad.map((q) => q.prompt), []);
});

test('the converted items make sense: the key is one of the options, and the ordering item reads clearly', () => {
  for (const q of maths) assert.ok(q.options.includes(q.answer), `answer not in options: ${q.prompt}`);
  const order = maths.find((x) => x.prompt.startsWith('Order from smallest to largest: 0,'));
  assert.ok(order);
  assert.equal(order.prompt, 'Order from smallest to largest: 0,3; 0,13; 0,31');
  assert.equal(order.answer, '0,13; 0,3; 0,31');
  assert.ok(order.options.every((o) => o.split('; ').length === 3));
  const q = maths.find((x) => x.prompt === 'Which decimal is equal to 3/10?');
  assert.ok(q);
  assert.equal(q.answer, '0,3');
  assert.match(q.explanation ?? '', /decimal comma/);
});
