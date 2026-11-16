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
