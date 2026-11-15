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

// ---- decimal comma (South African format) ----
import { decimalPointsIn } from './questionQuality';

const dq = (prompt: string, options: string[], answer: string, explanation = 'The explanation says why this is right.') => q(prompt, options, answer, explanation);

test('decimal_point: a decimal point in the prompt, options, answer or explanation is rejected where the policy is reject', () => {
  const inPrompt = dq('What is 0.4 + 0.3?', ['0,07', '0,7', '7', '0,12'], '0,7', 'Add the tenths: 4 + 3 = 7 tenths.');
  const inOption = dq('Convert 750 ml to litres.', ['0,075 l', '0.75 l', '7,5 l', '75 l'], '0.75 l', 'Divide by 1 000.');
  const inExplanation = dq('Convert 500 g to kilograms.', ['0,05 kg', '0,5 kg', '5 kg', '50 kg'], '0,5 kg', '500 / 1 000 = 0.5 kg.');
  const money = dq('A pen costs R18 and a ruler R12. How much in total?', ['R30', 'R6', 'R216', 'R3'], 'R30', 'R18 + R12 = R30, not R30.50 or R18.50.');
  for (const x of [inPrompt, inOption, inExplanation, money]) {
    const r = checkQuestion(x, { decimalComma: 'reject' });
    assert.equal(r.ok, false, x.prompt);
    const d = r.reasons.find((y) => y.code === 'decimal_point');
    assert.equal(d?.severity, 'reject');
    assert.match(d?.detail ?? '', /comma \(3,5 km; R18,50\) and times with a colon \(14:30\)/);
  }
  assert.match(checkQuestion(inOption, { decimalComma: 'reject' }).reasons.find((y) => y.code === 'decimal_point')?.detail ?? '', /0\.75/);
});

test('decimal_point: severity follows the policy: warn lowers the score but keeps the question; unset is not checked at all', () => {
  const x = dq('What is 1.3 + 0.7?', ['1,0', '1,37', '2,0', '20'], '2,0', 'The tenths add up to 10.');
  const w = checkQuestion(x, { decimalComma: 'warn' });
  assert.equal(w.ok, true);
  assert.equal(w.reasons.find((y) => y.code === 'decimal_point')?.severity, 'warn');
  assert.ok(w.score > 0 && w.score < SCORE_CLEAN);
  assert.equal(checkQuestion(x, {}).reasons.some((y) => y.code === 'decimal_point'), false, 'no policy: not checked (IT/CAT code, sciences, languages...)');
  assert.equal(checkQuestion(x).ok, true);
});

test('decimal_point: times written 14.30 are flagged too (CAPS writes 14:30)', () => {
  const x = dq('A bus leaves at 14.30 and the trip takes 45 minutes. When does it arrive?', ['15:15', '14:75', '15:30', '16:15'], '15:15', 'Add 45 minutes to 14:30.');
  assert.equal(checkQuestion(x, { decimalComma: 'reject' }).ok, false);
  assert.deepEqual(decimalPointsIn('leaves at 14.30 and arrives 15.15'), ['14.30', '15.15']);
});

test('decimal_point: NOT flagged: comma decimals, colon times, thousands with a space, plain integers, sentence ends and list numbers', () => {
  const fine = [
    dq('Convert 3,5 m to centimetres.', ['35 cm', '350 cm', '3 500 cm', '3,5 cm'], '350 cm', '3,5 x 100 = 350 cm.'),
    dq('A bus leaves at 14:30 for 45 minutes. When does it arrive?', ['15:15', '14:75', '15:30', '16:15'], '15:15', 'Add 45 minutes to 14:30.'),
    dq('A school has 1 250 learners. How many are 1 000 or more short of 2 000?', ['750', '1 250', '250', '2 000'], '750', '2 000 - 1 250 = 750.'),
    dq('Sam has R5. 3 more rand arrive. How much now?', ['R8', 'R2', 'R15', 'R53'], 'R8', 'R5 + R3 = R8. The sentence ends with a full stop.'),
    dq('What is 12 + 7? Choose 1. one of the options.', ['19', '5', '84', '127'], '19', 'The sum of 12 and 7 is 19.'),
  ];
  for (const x of fine) assert.equal(checkQuestion(x, { decimalComma: 'reject' }).reasons.some((y) => y.code === 'decimal_point'), false, x.prompt);
});

test('decimal_point: version numbers and IP addresses are only a problem if the policy is set, and the policy is never set for IT/CAT (formatPolicy)', () => {
  const x = dq('Which address is a valid private IPv4 address?', ['192.168.1.10', '300.1.1.1', '192.168.1', '192,168,1,10'], '192.168.1.10', 'Private ranges include 192.168.x.x.');
  assert.equal(checkQuestion(x, {}).reasons.some((y) => y.code === 'decimal_point'), false);
  assert.ok(decimalPointsIn('192.168.1.10').length === 1, 'the matcher sees one dotted number');
});

// --- LaTeX guards (2026-11 bank-formula audit). Examples are real item_cache rows. ---
const FF = '\f';
const TAB = '\t';

test('control character in prompt/options/answer is rejected (id 12568: \\frac became FF + "rac")', () => {
  const x = q('Which equation matches "a divided by 7 is 39"?', [`$${FF}rac{a}{7} = 39$`, '$7a = 39$', '$a + 7 = 39$', '$a - 7 = 39$'], '$7a = 39$');
  has(x, 'latex_control_char');
  assert.equal(checkQuestion(x).ok, false);
});

test('a TAB (the silent \\times / \\text case, ids 10242 and 10147) is rejected, even leading an option that trim() would clean', () => {
  has(q('Which expression shows n multiplied by 10?', [`${TAB}imes n`, '$n + 10$', '$n - 10$', '$n \\div 10$'], '$n + 10$'), 'latex_control_char');
  has(q(`A temperature drops from $8^${TAB}ext{C}$ to $-3^${TAB}ext{C}$. How much did it drop?`, ['11', '5', '6', '12'], '11'), 'latex_control_char');
  has(q('What is 2 + 2?', ['4', '5', '6', '7'], `4${String.fromCharCode(8)}`), 'latex_control_char'); // backspace (\b)
  has(q('What is 2 + 2?', ['4\r', '5', '6', '7'], '5'), 'latex_control_char'); // carriage return (\r)
});

test('newline is NOT a control-char reject, and clean LaTeX passes', () => {
  lacks(q('Solve $x^2 = 9$.\nWhat is x?', ['$3$', '$4$', '$5$', '$6$'], '$3$'), 'latex_control_char');
  lacks(q('What is $\\frac{1}{2} + \\frac{1}{4}$?', ['$\\frac{3}{4}$', '$\\frac{2}{6}$', '$\\frac{1}{8}$', '$1$'], '$\\frac{3}{4}$'), 'latex_control_char');
});

test('doubled backslash inside $...$ is rejected (id 16700)', () => {
  const x = q("If a flow diagram shows the rule '$\\\\times 3$', what is the inverse rule?", ['$\\\\div 3$', '$\\\\times 3$', '$+ 3$', '$- 3$'], '$\\\\div 3$');
  has(x, 'latex_doubled_backslash');
  // a LaTeX line break (\\ then a space) and text outside $...$ are not flagged
  lacks(q('Which is right?', ['$a \\\\ b$', '$c$', '$d$', '$e$'], '$c$'), 'latex_doubled_backslash');
  lacks(q('Pick the path C:\\\\data here.', ['one', 'two', 'three', 'four'], 'one'), 'latex_doubled_backslash');
});

test('escaped dollar (currency) never opens a maths run (ExchangeRates.tsx:112)', () => {
  const x = q('A traveller needs A\\$400 at a rate of A\\$1 = R12.50. What is the cost?', ['R4 800', 'R5 000', 'R5 080', 'R5 200'], 'R5 080');
  const seen: string[] = [];
  checkQuestion(x, { validateMath: (l) => (seen.push(l), null) });
  assert.deepEqual(seen, []);
});

test('injected validateMath: a failing $...$ run is latex_parse (reject); absent validator does nothing', () => {
  const x = q('What is $\\frac{1}{2$?', ['$1$', '$2$', '$3$', '$4$'], '$1$');
  lacks(x, 'latex_parse');
  const err = (l: string) => (l.includes('{1}{2') ? 'Expected }' : null);
  has(x, 'latex_parse', { validateMath: err });
  assert.equal(checkQuestion(x, { validateMath: err }).ok, false);
  lacks(clean, 'latex_parse', { validateMath: err });
});
