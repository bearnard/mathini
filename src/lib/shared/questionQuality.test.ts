import { test } from 'node:test';
import assert from 'node:assert/strict';
import { acceptItems, checkBatch, checkQuestion, flagsOf, isNearDuplicate, optionNumber, SCORE_CLEAN, type QuestionLike, type ReasonCode } from './questionQuality';

// Labelled examples. TRUE POSITIVES come from the 2026-11 audit (real item_cache rows); the FALSE POSITIVES are rows the
// audit's first-pass heuristics flagged and that a human cleared, so a rule can never silently get broader.

const q = (prompt: string, options: string[], answer: string, explanation = 'A clear explanation of why this is the right answer.'): QuestionLike => ({ prompt, options, answer, explanation });
const codes = (x: QuestionLike, ctx = {}) => checkQuestion(x, ctx).reasons.map((r) => r.code);
const has = (x: QuestionLike, code: ReasonCode, ctx = {}) => assert.ok(codes(x, ctx).includes(code), `expected ${code}, got ${codes(x, ctx).join(',') || 'nothing'}`);
const lacks = (x: QuestionLike, code: ReasonCode, ctx = {}) => assert.ok(!codes(x, ctx).includes(code), `did not expect ${code}`);

const clean = q('What is the job of the switch in a circuit?', ['It opens and closes the circuit', 'It makes the electricity stronger', 'It stores electrical energy', 'It changes electricity into light'], 'It opens and closes the circuit', 'A switch makes or breaks the path so the current can flow or stop.');

test('a good question is ok, scores clean and has no reasons', () => {
  const r = checkQuestion(clean);
  assert.equal(r.ok, true);
  assert.ok(r.score >= SCORE_CLEAN);
  assert.deepEqual(r.reasons, []);
});

test('shape, key and duplicate checks (reject)', () => {
  assert.equal(checkQuestion({ prompt: '', options: ['a', 'b'], answer: 'a' }).ok, false);
  has(q('Which is right?', ['a1', 'b1', 'c1', 'd1'], 'z9'), 'key_not_in_options');
  has(q('How many kilograms are in 1 tonne?', ['100 kg', '1 000 kg', '10 000 kg', '100 kg'], '1 000 kg'), 'duplicate_options');
  // capitalisation-variant options are a legitimate capitalisation question, not duplicates
  lacks(q('Which sentence is capitalised correctly?', ['We ate South African biltong.', 'We ate south african biltong.', 'We ate South african biltong.', 'We ate south African biltong.'], 'We ate South African biltong.'), 'duplicate_options');
});

test('STRONG length tell is rejected (Grade 9 audit rows)', () => {
  has(q('What is time management?', ['Wasting time', 'Organizing and using your time well', 'Studying all the time', 'Never resting'], 'Organizing and using your time well'), 'length_tell_strong');
  has(q('What is advocacy?', ['Just talking', 'Working to address social problems and create change', 'Not needed', 'Only for politicians'], 'Working to address social problems and create change'), 'length_tell_strong');
});

test('a mild length tell is only a warning, and lowers the score below clean', () => {
  const x = q('How can sand be separated from muddy water?', ['By filtering it twice', 'By using a magnet', 'By sieving the sand', 'By evaporating it'], 'By filtering it twice', 'Filter paper holds back the sand and lets the water through.');
  has(x, 'length_tell');
  lacks(x, 'length_tell_strong');
  const r = checkQuestion(x);
  assert.equal(r.ok, true);
  assert.ok(r.score < SCORE_CLEAN && r.score > 0);
  // the answer being the longest by a hair when others are equal is the same: warn
  assert.deepEqual(codes(q('Pick one', ['abcdef', 'abcde', 'abcd', 'abc'], 'abcdef', 'Because abcdef is the one.')), ['length_tell']);
  // the key not being the longest raises nothing
  lacks(clean, 'length_tell');
});

test('filler distractors are rejected, but legitimate topical words are not (precision)', () => {
  has(q('What should you do if you are unsure about your career path?', ['Take action now by exploring and gathering information', 'Wait passively', 'Choose randomly', 'Never decide'], 'Take action now by exploring and gathering information'), 'filler_distractor');
  has(q('During your school election, which value should guide how you vote?', ['Whom I trust to make good decisions', 'Whoever gives me a candy', 'My favourite person', 'The loudest speaker'], 'Whom I trust to make good decisions'), 'filler_distractor');
  has(q('How did traditional healers learn which plants cure?', ['Trial and error and passed-down knowledge', 'A magical crystal ball', 'Buying books abroad', 'Guessing every time'], 'Trial and error and passed-down knowledge'), 'filler_distractor');
  // cleared by hand: dance / TV / sleep / pizza / spell / banana are real topics in arts, PE, grammar and geography
  lacks(q('Timing accuracy in dance means...', ['Moving on the correct counts and cues', 'Always dancing faster than the music', 'Ignoring beat changes', 'Starting whenever you want'], 'Moving on the correct counts and cues'), 'filler_distractor');
  lacks(q('Which shows the wrong use of because?', ['It became cold because the sun went away.', 'I like pizza because it tastes good.', 'She slept because it was late.', 'Because I love music, I sing.'], 'It became cold because the sun went away.'), 'filler_distractor');
  lacks(q('Which plant suits the Kalahari best?', ['Cactus', 'Mango tree', 'Palm tree', 'Banana plant'], 'Cactus'), 'filler_distractor');
  // a filler word that the question itself is about is not filler
  lacks(q('Which of these is a magic square property?', ['Rows, columns and diagonals have the same sum', 'All numbers are even', 'It has a prime total', 'It has no repeated number'], 'Rows, columns and diagonals have the same sum', 'In a magic square every row, column and diagonal adds to the same total.'), 'filler_distractor');
});

test('the answer repeated in the prompt: reject when it is a long phrase, warn when it is short', () => {
  has(q('What is a line scale, also called a bar scale divided into equal parts?', ['A bar scale divided into equal parts', 'A compass rose', 'A grid reference', 'A hemisphere line'], 'A bar scale divided into equal parts'), 'key_in_prompt');
  const echo = q('If a graph decreases as x increases, then y...', ['decreases', 'increases', 'stays zero', 'is undefined'], 'decreases');
  has(echo, 'key_echo_in_prompt');
  lacks(echo, 'key_in_prompt');
});

test('explanation: missing, scratchpad, lands on another option, contradicts the key (TRUE positives)', () => {
  has(q('What is 2 + 2?', ['4', '3', '5', '6'], '4', 'ok'), 'explanation_missing');
  has(q('x', ['a', 'b'], 'a', ''), 'explanation_missing');
  has(q('If p = 5, find the value of 3p - p^2.', ['10', '5', '-10', '0'], '10', 'Substitute p = 5: 3(5) - (5)^2 = 15 - 25 = -10. Wait - no. Let us recheck: 3(5) = 15, and 5^2 = 25.'), 'explanation_scratchpad');
  has(q('How long does the taxi trip cost?', ['R20', 'R30', 'R35', 'R40'], 'R35', 'R15 + (3 * 5) = 30. Let me re-calculate. 1st km = 15. Let us change the options to R30.'), 'explanation_scratchpad');
  has(q('A class has 4 sections each with 2 parts of 5 minutes. How long in total?', ['20 minutes', '10 minutes', '30 minutes', '40 minutes'], '20 minutes', '4 sections x 2 parts x 5 minutes = 40 minutes.'), 'explanation_other_option');
  has(q('In a gymnastics warm-up, 5 students each do 10 stretches and then another 2. How many in total?', ['70', '60', '50', '40'], '70', 'Each student does 10 + 2 = 12 stretches. Then total = 5 x 12 = 60 stretches.'), 'explanation_other_option');
  has(q('What is 5^2 x 5^3?', ['5^10', '5^6', '5^5', '75'], '5^10', 'Remember when multiplying with the same base, add exponents: 5^2 x 5^3 = 5^(2+3) = 5^5, NOT 5^10.'), 'explanation_contradicts_key');
  has(q('What is the result of 2^3 + 2^2?', ['2^5', '12', '10', '6'], '2^5', 'Note: 2^3 + 2^2 = 8 + 4 = 12, which is not 2^5. The correct approach is to evaluate the powers first.'), 'explanation_contradicts_key');
});

test('explanation: FALSE positives cleared by hand must NOT be flagged', () => {
  for (const [p, opts, ans, e] of [
    ['What should you conclude when KE = -200 J?', ['An error was made: kinetic energy cannot be negative', 'The object moves backward', 'The answer is correct', 'The object decelerates'], 'An error was made: kinetic energy cannot be negative', 'KE = half m v squared is always zero or more. A negative result means a calculation error, so recheck your working.'],
    ['There is no legal requirement to wait after a law passes. When can a challenge be made?', ['As soon as possible', 'After one year', 'After ten years', 'Never'], 'As soon as possible', 'There is no legal requirement to wait after a law passes. Anyone who believes it violates their rights can go to court at once.'],
    ['What do event-driven programs do?', ['React to user actions', 'Run once and stop', 'Ignore the keyboard', 'Only print text'], 'React to user actions', 'Event-driven programs wait for actions such as clicks or key presses and respond when those events happen.'],
    ['A foreign company mines platinum and sends profits abroad. This reduces SA\'s:', ['GDP', 'GNI', 'Gross Value Added', 'Real GDP'], 'GNI', 'Profits repatriated abroad reduce GNI (but not GDP), since GNI adjusts for net factor income flows.'],
    ['Which word signals a concessive clause?', ['Because', 'Although', 'Therefore', 'Moreover'], 'Although', 'Concessive clauses acknowledge a contrasting point: Although he studied hard, he did not pass. Although, even though and while introduce them.'],
    ['A prepaid expense is classified on the balance sheet as:', ['A current liability', 'A non-current asset', 'A current asset', 'Equity'], 'A current asset', 'A prepaid expense is a benefit already paid for but not yet used. It is a current asset.'],
    ['What is the first thing you remove when changing direct to indirect speech?', ['Quotation marks', 'The subject', 'Every verb', 'All punctuation'], 'Quotation marks', 'Reported speech does not keep the original quotation marks.'],
    ['Solve 3(x - 1) = 12.', ['5', '4', '3', '15'], '5', 'Divide by 3 to get x - 1 = 4, then add 1.'],
    ['Solve x + 7 = 15.', ['8', '22', '7', '15'], '8', 'Subtract 7 from both sides.'],
    ['What is the mean of 2, 4, 6, 8?', ['5', '4', '6', '8'], '5', 'Add them: 2 + 4 + 6 + 8 = 20, then divide by 4 to get 5.'],
    ['How many faces does a cylinder have?', ['3 faces', '2 faces', '1 face', '4 faces'], '3 faces', 'A cylinder has 2 flat faces and 1 curved face, which makes 3 faces.'],
    ['A teacher says: actually, the faster you go, what happens to the time?', ['It decreases', 'It increases', 'It stays the same', 'It doubles'], 'It decreases', 'Actually, the faster you go, the less time it takes to cover the same distance.'],
    ['What improves exam technique?', ['Practice and correction', 'Rereading once', 'Skipping practice', 'Guessing'], 'Practice and correction', 'Practice and correction improve understanding better than passive reading alone.'],
  ] as [string, string[], string, string][]) {
    const c = codes(q(p, opts, ans, e));
    for (const bad of ['explanation_scratchpad', 'explanation_other_option', 'explanation_contradicts_key'] as ReasonCode[]) assert.ok(!c.includes(bad), `${p} falsely flagged ${bad}`);
  }
});

test('questions that ASK for the wrong/negated idea may mention it in the explanation', () => {
  lacks(q('What is a mistake in solving x + 5 = 12?', ['Subtracting 5 from both sides', 'Adding 5 to the other side', 'x = 12 + 5', 'Dividing both sides by 5'], 'x = 12 + 5', 'To solve x + 5 = 12 you subtract 5 from both sides, so x = 7. So x = 12 + 5 is incorrect.'), 'explanation_contradicts_key');
});

test('warn-level drift checks', () => {
  has(q('If a student buys 3 pens at R4 each, how many rand is that in total?', ['R12', 'R7', 'R16', 'R9'], 'R12', 'Three pens at R4 each cost 3 times R4, which is R12.'), 'off_topic_numeric', { numericOk: false });
  lacks(q('If a student buys 3 pens at R4 each, how many rand is that in total?', ['R12', 'R7', 'R16', 'R9'], 'R12', 'Three pens at R4 each cost 3 times R4, which is R12.'), 'off_topic_numeric', { numericOk: true });
  has(q('Why do many schools in Soweto not have basic health supplies?', ['Lack of funding', 'Too many students', 'No teachers', 'Rain'], 'Lack of funding', 'Funding for school health programmes is often limited.'), 'place_boilerplate');
  has(q('A student says that only white people can use the Bill of Rights. What is wrong with this idea?', ['All residents have rights equally', 'Rights do not apply to children', 'Only men are protected', 'Only adults are protected'], 'All residents have rights equally', 'Every person in South Africa has these rights.'), 'misconception_frame');
  has(q('Many fair-trade farms in the Western Cape produce which products?', ['Rice and wheat', 'Grapes, wine, and deciduous fruits', 'Coconuts and pineapples', 'Coffee and cocoa'], 'Grapes, wine, and deciduous fruits', 'The Western Cape is known for fruit and wine farms.'), 'list_count_tell');
  has(q('What should you do about your plan?', ['Take action and explore options', 'Only wait', 'Never decide', 'Always guess'], 'Take action and explore options', 'Exploring your options helps you decide well.'), 'absolutes_cue');
  has(q('Which is true?', ['A is right', 'B is right', 'All of the above', 'C is right'], 'A is right', 'A is the only true statement here.'), 'all_none_of_the_above');
});

test('near-duplicate prompts within a task', () => {
  assert.equal(isNearDuplicate('What does the equals sign mean in a number sentence?', 'what does the equals sign mean in a number sentence?'), true);
  assert.equal(isNearDuplicate('What does it mean to have a balanced diet according to nutrition?', 'What does it mean to have a "balanced diet" in nutrition?'), true);
  assert.equal(isNearDuplicate('What is a decomposer?', 'What is a producer?'), false, 'short prompts are only duplicates when identical');
  // templated maths: the same wording with different numbers is a different question; with the same numbers it is a duplicate
  assert.equal(isNearDuplicate('Thandi has 5 apples and buys 3 more at the shop. How many apples does she have now?', 'Thandi has 6 apples and buys 4 more at the shop. How many apples does she have now?'), false);
  assert.equal(isNearDuplicate('Thandi has 5 apples and buys 3 more at the shop. How many apples does she have now?', 'Thandi has 5 apples and buys 3 more at the shop. How many apples does she have in total?'), true);
  assert.equal(isNearDuplicate('How many sides does a hexagon have?', 'Which unit measures the mass of a bag of sugar?'), false);
  const existing = ['What does the equals sign mean in a number sentence?'];
  has(q('What does the equals sign mean in a number sentence?', ['Both sides have the same value', 'Add the numbers', 'Multiply', 'The answer is on the right'], 'Both sides have the same value', 'The equals sign means both sides balance.'), 'near_duplicate', { existingPrompts: existing });
  lacks(clean, 'near_duplicate', { existingPrompts: existing });
});

test('score: any reject is 0; one mild warning is below clean; the floor is 1', () => {
  const rej = checkQuestion(q('x?', ['a', 'b', 'c', 'd'], 'zz'));
  assert.equal(rej.ok, false);
  assert.equal(rej.score, 0);
  const manyWarn = q('A student says: how many sweets do 3 learners in Soweto get if all of the above?', ['Share them out fairly', 'Only wait', 'Never decide', 'All of the above'], 'Share them out fairly', 'Sharing out fairly gives each learner the same amount.');
  const r = checkQuestion(manyWarn, { numericOk: false });
  assert.equal(r.ok, true);
  assert.ok(r.score >= 1 && r.score < SCORE_CLEAN);
  // flags list rejects first, then warnings
  const flags = flagsOf(checkQuestion(q('What is time management?', ['Wasting time', 'Organizing and using your time well', 'Studying all the time', 'Never resting'], 'Organizing and using your time well')));
  assert.equal(flags[0], 'length_tell_strong');
  assert.ok(flags.includes('absolutes_cue'));
});

test('batch rule: more than half the keys being the longest means the model ignored the rule', () => {
  const long = (i: number) => q(`Q${i}?`, ['short', 'tiny', 'a much longer correct sentence', 'brief'], 'a much longer correct sentence');
  const fine = (i: number) => q(`F${i}?`, ['alpha beta', 'gamma delta epsilon', 'zeta', 'eta theta'], 'zeta');
  assert.equal(checkBatch([long(1), long(2), long(3), fine(1), fine(2)]).regenerate, true);
  assert.equal(checkBatch([long(1), fine(1), fine(2), fine(3)]).regenerate, false);
  assert.equal(checkBatch([long(1)]).regenerate, false, 'too few to judge');
});

test('acceptItems stores only ok rows, with score and flags, and rejects near-duplicates inside the batch', () => {
  const good = q('What is the job of the switch in a circuit?', ['It opens and closes the circuit', 'It makes the electricity stronger', 'It stores electrical energy', 'It changes electricity into light'], 'It opens and closes the circuit', 'A switch makes or breaks the path.');
  const dup = { ...good, options: [...good.options] };
  const bad = q('What is time management?', ['Wasting time', 'Organizing and using your time well', 'Studying all the time', 'Never resting'], 'Organizing and using your time well');
  const { accepted, rejected } = acceptItems([good, dup, bad]);
  assert.equal(accepted.length, 1);
  assert.equal(accepted[0].quality_score >= SCORE_CLEAN, true);
  assert.deepEqual(accepted[0].quality_flags, []);
  assert.equal(rejected.length, 2);
  assert.ok(rejected[0].reasons.some((r) => r.code === 'near_duplicate'));
  assert.ok(rejected[1].reasons.some((r) => r.code === 'length_tell_strong'));
});

test('optionNumber reads numeric options and nothing else', () => {
  assert.equal(optionNumber('R240'), 240);
  assert.equal(optionNumber('12.5 cm'), 12.5);
  assert.equal(optionNumber('1 000 kg'), 1000);
  assert.equal(optionNumber('-10'), -10);
  assert.equal(optionNumber('Three'), null);
  assert.equal(optionNumber('2, 6, 18, 54'), null);
});
