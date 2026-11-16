import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../components/subjects/lesson/lessonTest';

// Grade 6 Mathematics, the CAPS gap topics: every lesson has the standard shape (docs/notes/lesson-standard.md), labelled pictures, no decimal point,
// and the worked numbers are the true ones (independent arithmetic below).
stubCss();
const lessons = {
  add5: renderSlides((await import('./term1/whole-numbers/AddSubtract5Digit')).learnSteps),
  add6: renderSlides((await import('./term3/whole-numbers/AddSubtract6Digit')).learnSteps),
  mul2: renderSlides((await import('./term2/whole-numbers/Multiply2Digit')).learnSteps),
  div2: renderSlides((await import('./term2/whole-numbers/Divide2Digit')).learnSteps),
  mul3: renderSlides((await import('./term4/whole-numbers/Multiply3Digit')).learnSteps),
  div3: renderSlides((await import('./term4/whole-numbers/Divide3Digit')).learnSteps),
  pct: renderSlides((await import('./term3/percentages/Percentages')).learnSteps),
  temp: renderSlides((await import('./term3/temperature/Temperature')).learnSteps),
  prob: renderSlides((await import('./term4/probability/Probability')).learnSteps),
  pos: renderSlides((await import('./term4/position-movement/PositionMovement')).learnSteps),
  trans: renderSlides((await import('./term3/transformations/Transformations')).learnSteps),
  enl: renderSlides((await import('./term4/enlargements/Enlargements')).learnSteps),
};
const text = (k: keyof typeof lessons) => lessons[k].map((s) => s.text.replace(/\u00a0/g, ' ')).join(' | ');

test('every new Grade 6 maths lesson has the standard shape, labelled pictures and a sensible length', () => {
  for (const [name, slides] of Object.entries(lessons)) {
    assertLessonShape(slides);
    for (const s of slides) {
      assert.ok(s.text.split(' ').length < 330, `${name} / ${s.title}: too long`);
      assert.equal(s.labelled, s.pictures, `${name} / ${s.title}: every picture has an aria label`);
      assert.ok(!/\d\.\d/.test(s.text), `${name} / ${s.title}: a decimal point, use a comma`);
      // s.text collapses a non-breaking space into an ordinary one, so look at the markup (tags removed, attribute text such as aria labels included)
      const markup = s.html.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, '\u00a0') + ' ' + [...s.html.matchAll(/aria-label="([^"]*)"/g)].map((m) => m[1]).join(' ');
      assert.ok(!/\d [\d]{3}(?!\d)/.test(markup.replace(/<[^>]+>\s*\d\s*</g, '')), `${name} / ${s.title}: a number has a breakable space (use grade6AddSub group() or a non-breaking space)`);
    }
  }
});

test('Adding and subtracting 5-digit numbers: the worked numbers are true', () => {
  const t = text('add5');
  assert.match(t, /46 000/);
  assert.match(t, /12 000/);
  assert.match(t, /58 000/);
  assert.match(t, /58 023/);
  assert.match(t, /85 483/);
  assert.match(t, /53 059/);
  assert.match(t, /77 850/);
  assert.match(t, /22 553/);
  assert.match(t, /R37/);
  assert.match(t, /5 566/);
  assert.equal(45678 + 12345, 58023);
  assert.equal(56423 + 7581 + 21479, 85483);
  assert.equal(98743 - 45684, 53059);
  assert.equal(45362 + 32488, 77850);
  assert.equal(54687 - 32134, 22553);
  assert.equal(200 - 163, 37);
  assert.equal(4567 + 999, 5566);
});

test('Adding and subtracting 6-digit numbers: the worked numbers are true', () => {
  const t = text('add6');
  for (const n of ['469 134', '601 105', '434 522', '812 888', '524 244', 'R224 442', 'R496 893', 'R600 000', '654 322', '423 455']) assert.ok(t.includes(n), `missing ${n}`);
  assert.equal(345678 + 123456, 469134);
  assert.equal(502340 + 98765, 601105);
  assert.equal(800000 - 365478, 434522);
  assert.equal(126789 + 341567 + 344532, 812888);
  assert.equal(866589 - 342345, 524244);
  assert.equal(268231 - 43789, 224442);
  assert.equal(864328 - 367435, 496893);
  assert.equal(589544 + 10456, 600000);
  assert.equal(1000000 - 345678, 654322);
  assert.equal(123456 + 299999, 423455);
  assert.equal(725604 - 389215, 336389);
  assert.ok(t.includes('R336 389'));
});

test('Multiplying by 2-digit numbers: the worked numbers are true', () => {
  const t = text('mul2');
  for (const n of ['120 000', '21 880', '2 735', '24 615', '27 350', '3 282', '22 974', '16 415', '140 700', '157 115', '180 000', '66 000', '100 548', '12 000']) assert.ok(t.includes(n), `missing ${n}`);
  assert.equal(3000 * 40, 120000);
  assert.equal(547 * 40, 21880);
  assert.equal(547 * 5, 2735);
  assert.equal(547 * 45, 24615);
  assert.equal(547 * 50 - 547 * 5, 24615);
  assert.equal(547 * 6, 3282);
  assert.equal(3282 * 7, 22974);
  assert.equal(2345 * 67, 157115);
  assert.equal(7 * 2345 + 60 * 2345, 157115);
  assert.equal(4125 * 16, 66000);
  assert.equal(1862 * 54, 100548);
});

test('Dividing by 2-digit numbers: the worked numbers are true', () => {
  const t = text('div2');
  for (const n of ['1 700', '3 400', '170', '340', '85', '34', '3 434', '202', 'remainder 13', '41', '13 buses', '119', '205', '93 remainder 12', '21 boxes']) assert.ok(t.includes(n), `missing ${n}`);
  assert.equal(17 * 100, 1700);
  assert.equal(200 * 17 + 2 * 17 + 13, 3447);
  assert.equal(202 * 17, 3434);
  assert.equal(500 - 12 * 41, 8);
  assert.equal(Math.ceil(300 / 24), 13);
  assert.equal(2856 / 24, 119);
  assert.equal(4305 / 21, 205);
  assert.equal(Math.floor(1500 / 16) + ' ' + (1500 % 16), '93 12');
  assert.equal(Math.ceil(250 / 12), 21);
});

test('Multiplying by 3-digit numbers: the worked numbers are true', () => {
  const t = text('mul3');
  for (const n of ['400 000', '432 000', '436 200', '475 200', '471 096', '34 896', '408 870', '324 500', '64 900', '19 470', '225 000', '525 000', '337 890', '516 000', '181 250', '1 500 000']) assert.ok(t.includes(n), `missing ${n}`);
  assert.equal(4400 * 108, 475200);
  assert.equal(4362 * 108, 471096);
  assert.equal(8 * 4362 + 100 * 4362, 471096);
  assert.equal(3245 * 126, 408870);
  assert.equal(1250 * 180, 225000);
  assert.equal(3125 * 168, 525000);
  assert.equal(3218 * 105, 337890);
  assert.equal(2150 * 240, 516000);
  assert.equal(1450 * 125, 181250);
  assert.equal(5000 * 300, 1500000);
});

test('Dividing by 3-digit numbers: the worked numbers are true', () => {
  const t = text('div3');
  for (const n of ['1 320', '2 640', '660', '792', '844', '26 remainder 52', '9 840', '80 remainder 36', '5 000', '1 125', 'R120', '13 full pallets', '60', '25 remainder 7', '32', 'R70']) assert.ok(t.includes(n), `missing ${n}`);
  assert.equal(10 * 132, 1320);
  assert.equal(132 * 6, 792);
  assert.equal(3484 - 2640, 844);
  assert.equal(844 - 792, 52);
  assert.equal(132 * 26 + 52, 3484);
  assert.equal(80 * 123, 9840);
  assert.equal(9876 - 9840, 36);
  assert.equal(125 * 49, 6125);
  assert.equal(105 * 120, 12600);
  assert.equal(Math.floor(2000 / 150) + ' ' + (2000 % 150), '13 50');
  assert.equal(113 * 60, 6780);
  assert.equal(217 * 25 + 7, 5432);
  assert.equal(8000 / 250, 32);
  assert.equal(9450 / 135, 70);
});

test('Percentages: the worked numbers are true and nothing goes beyond the CAPS scope', () => {
  const t = text('pct');
  for (const n of ['30%', '7%', '10%', '25/100', '75/100', '50%', '20%', '5%', '0,25', 'R75', 'R45', '40', '36', '18', 'R405', 'R200', 'R600']) assert.ok(t.includes(n), `missing ${n}`);
  assert.equal(300 / 4, 75);
  assert.equal(450 / 10, 45);
  assert.equal(80 / 2, 40);
  assert.equal(360 / 10 / 2, 18);
  assert.equal(450 - 45, 405);
  assert.equal(800 - 800 / 4, 600);
  assert.equal((2 * 100) / 5, 40);
  assert.equal(200 / 4 * 3, 150);
  assert.ok(!/1\/3|1\/8|33%/.test(t.replace('Fractions such as 1/3 do not fit into 100, and you do not need to change them.', '')), 'no fraction outside the denominators CAPS allows');
});

test('Temperature: the worked numbers are true', () => {
  const t = text('temp');
  for (const n of ['0 °C', '37 °C', '100 °C', '26 °C', '25 °C', '36,7 °C', '13 °C', '0,5 °C', '23 °C', '8 °C', '27 °C', '1,5 °C']) assert.ok(t.includes(n), `missing ${n}`);
  assert.equal(10 / 5, 2);
  assert.ok(t.includes('split into 5 equal steps by 4 small lines'), 'steps, not lines');
  assert.ok(!/5 small lines/.test(t));
  assert.equal(20 + 3 * 2, 26);
  assert.equal(24 - 11, 13);
  assert.equal(Math.round((37.2 - 36.7) * 10) / 10, 0.5);
  assert.equal(14 + 9, 23);
  assert.equal(14 - 6, 8);
  assert.equal(20 + 7, 27);
  assert.equal(28 - 15, 13);
  assert.equal(Math.round((38.5 - 37) * 10) / 10, 1.5);
});

test('Probability: the worked numbers are true and probability is not written as a fraction', () => {
  const t = text('prob');
  for (const n of ['13', '7', '20', '25', '30', '18', '12', '9', '15', '2 groups of five and 3 more', 'heads', 'tails', 'collating']) assert.ok(t.includes(n), `missing ${n}`);
  assert.equal(2 * 5 + 3, 13);
  assert.equal(13 + 7, 20);
  assert.equal(13 - 7, 6);
  const die = [4, 6, 3, 5, 2, 5];
  assert.equal(die.reduce((a, b) => a + b, 0), 25);
  assert.equal(die.indexOf(Math.max(...die)) + 1, 2);
  assert.equal(die.indexOf(Math.min(...die)) + 1, 5);
  assert.equal(die[1] - die[4], 4);
  assert.equal(10 + 10 + 10, 30);
  assert.equal(7 + 5 + 6, 18);
  assert.equal(30 - 18, 12);
  assert.equal(24 - 15, 9);
  assert.equal(6 + 4 + 7 + 3, 20);
  assert.ok(!/chance|likely|probability of|1\/2|per cent/i.test(t.replace(/Probability/g, '')), 'CAPS Grade 6 counts frequencies, it does not write probabilities as fractions');
});

test('Position and movement: the grid references and routes are true', () => {
  const t = text('pos');
  for (const n of ['B2', 'E2', 'E5', 'C4', 'D4', '3 squares right', '3 squares down', 'north', 'south', 'east', 'west', 'D2', 'A2', 'A4', 'C6', 'D3', 'E5']) assert.ok(t.includes(n), `missing ${n}`);
  assert.equal('B'.charCodeAt(0) + 3, 'E'.charCodeAt(0));
  assert.equal(5 - 2, 3);
  assert.equal(3 + 3, 6);
  assert.equal(3 + 3 + 0, 6);
});

test('Transformations: the worked numbers are true', () => {
  const x = text('trans');
  for (const n of ['4 squares right', '1 square down', 'translated', 'reflection', 'rotated', '360°', 'D5', 'E5', '3 lines of symmetry', '6']) assert.ok(x.includes(n), `missing ${n}`);
  assert.equal(5 - 1, 4);
  assert.equal(4 * 90, 360);
  assert.equal(String.fromCharCode(65 + 1 + 2) + (2 + 3), 'D5'); // check-yourself: B2 moved 2 right and 3 down
  assert.equal(String.fromCharCode(65 + 2 + (2 - 0)) + 5, 'E5'); // A5 reflected in the middle of column C
});

test('Enlargements and reductions: the worked numbers are true', () => {
  const x = text('enl');
  for (const n of ['6, 8, 10', '24', '12', '3, 4, 5', '6 by 4', '24', '4 times', '6, 9, 12', '12']) assert.ok(x.includes(n), `missing ${n}`);
  assert.deepEqual([3, 4, 5].map((n) => n * 2), [6, 8, 10]);
  assert.equal(6 + 8 + 10, 24);
  assert.equal((6 + 8 + 10) / 2, 12);
  assert.equal(3 * 2, 6);
  assert.equal(6 * 4, 24);
  assert.equal(24 / 6, 4);
  assert.equal(4 * 6, 24);
  assert.equal(3 + 4 + 5, 12);
});
