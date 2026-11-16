import test from 'node:test';
import assert from 'node:assert/strict';
import { assertLessonShape, renderSlides, stubCss } from '../../../components/subjects/lesson/lessonTest';

// Grade 10 Mathematics, Term 3: every lesson has the standard shape (docs/notes/lesson-standard.md) and the worked numbers are the true ones.
// The numbers come from grade10Helpers3.ts (tested in grade10Helpers3.test.ts); the checks here pin what a learner reads, with independent arithmetic.

stubCss();
const lessons = {
  analytical: renderSlides((await import('./term3/analytical-geometry/AnalyticalGeometry')).learnSteps),
  finance: renderSlides((await import('./term3/finance-growth/FinanceGrowth')).learnSteps),
  statistics: renderSlides((await import('./term3/statistics/Statistics')).learnSteps),
  measurement: renderSlides((await import('./term3/measurement/Measurement')).learnSteps),
  trig: renderSlides((await import('./term3/trig-geometry/TrigGeometry')).learnSteps),
};
const text = (k: keyof typeof lessons) => lessons[k].map((s) => s.text).join(' | ');

test('every Term 3 lesson has the standard shape, labelled pictures and a sensible length', () => {
  for (const [name, slides] of Object.entries(lessons)) {
    assertLessonShape(slides);
    for (const s of slides) {
      assert.ok(s.text.split(' ').length < 330, `${name} / ${s.title}: too long for a slide`);
      assert.equal(s.labelled, s.pictures, `${name} / ${s.title}: every picture has an aria label`);
      assert.ok(!/\d\.\d/.test(s.text.replace(/ℓ/g, '')), `${name} / ${s.title}: a decimal point, use a comma`);
    }
  }
});

test('Analytical Geometry: the worked numbers are true', () => {
  const t = text('analytical');
  assert.match(t, /AB² = 3² \+ 4² = 9 \+ 16 = 25/);
  assert.match(t, /AB = √25 = 5/);
  assert.match(t, /\(2; 5\)/); // midpoint of (−2; 3) and (6; 7)
  assert.match(t, /−3\/2/);
  assert.match(t, /\(5; 4\)/); // B from the midpoint (3; 1) and A (1; −2)
  assert.match(t, /\(1; 3\)/); // D of the parallelogram
  assert.equal(Math.hypot(3, 4), 5);
  assert.equal(2 * 3 - 1, 5);
  assert.equal(2 * 1 - -2, 4);
  assert.equal((2 / 3) * (-3 / 2), -1);
  assert.equal(Math.hypot(-5, 12), 13);
});

test('Finance and Growth: the worked amounts are true', () => {
  const t = text('finance');
  assert.match(t, /R4 960,00/);
  assert.match(t, /R6 050,00/);
  assert.match(t, /R12 740,13/);
  assert.match(t, /R418,50/);
  assert.match(t, /R231,53/);
  assert.match(t, /22 510/);
  assert.match(t, /\$50,00/);
  assert.match(t, /R2 519,42/);
  assert.match(t, /R2 750,00/);
  assert.equal(4000 * (1 + 0.08 * 3), 4960);
  assert.ok(Math.abs(5000 * 1.1 ** 2 - 6050) < 1e-9);
  assert.equal(Math.round(12000 * (1 + 0.06 / 12) ** 12 * 100) / 100, 12740.13);
  assert.equal(9000 * 0.9 * (1 + 0.12 * 2) / 24, 418.5);
  assert.equal(Math.round(200 * 1.05 ** 3 * 100) / 100, 231.53);
  assert.equal(Math.round(20000 * 1.03 ** 4 / 10) * 10, 22510);
  assert.equal(925 / 18.5, 50);
});

test('Statistics: the worked numbers are true', () => {
  const t = text('statistics');
  const data = [12, 15, 11, 18, 20, 14, 17, 16].sort((a, b) => a - b);
  assert.match(t, /15,5/);
  assert.match(t, /\b13\b/);
  assert.match(t, /17,5/);
  assert.match(t, /4,5/);
  assert.match(t, /6,25/);
  assert.match(t, /17,7/);
  assert.match(t, /20 – 30/);
  assert.match(t, /10 – 20/);
  assert.equal((data[3] + data[4]) / 2, 15.5);
  assert.equal((data[1] + data[2]) / 2, 13);
  assert.equal((data[5] + data[6]) / 2, 17.5);
  assert.equal(17.5 - 13, 4.5);
  assert.equal((2 + 4 + 4 + 5 + 7 + 8 + 9 + 11) / 8, 6.25);
  assert.ok(Math.abs((5 * 4 + 15 * 8 + 25 * 10) / 22 - 17.727) < 0.001);
});

test('Measurement: the worked numbers are true', () => {
  const t = text('measurement');
  assert.match(t, /113,1 cm³/);
  assert.match(t, /314,2 cm²/);
  assert.match(t, /37,7 cm²/);
  assert.match(t, /37,7 cm³/);
  assert.match(t, /47,1 cm²/);
  assert.match(t, /75,4 cm²/);
  assert.match(t, /120 cm³/);
  assert.match(t, /96 cm²/);
  assert.match(t, /88,0 cm³/);
  assert.match(t, /113,1 cm²/);
  assert.match(t, /104,7 cm³/);
  assert.match(t, /60 ℓ/);
  const r1 = (x: number) => Math.round(x * 10) / 10;
  assert.equal(r1((4 / 3) * Math.PI * 27), 113.1);
  assert.equal(r1(4 * Math.PI * 25), 314.2);
  assert.equal(r1((Math.PI * 9 * 4) / 3), 37.7);
  assert.equal(r1(Math.PI * 3 * 5), 47.1);
  assert.equal(r1(Math.PI * 9 + Math.PI * 3 * 5), 75.4);
  assert.equal((36 * 10) / 3, 120);
  assert.equal(36 + 4 * 0.5 * 6 * 5, 96);
  assert.equal(r1(Math.PI * 4 * 7), 88);
  assert.equal(r1(2 * Math.PI * 4 + 2 * Math.PI * 2 * 7), 113.1);
  assert.equal(r1(Math.PI * 4 * 7 + (2 / 3) * Math.PI * 8), 104.7);
  assert.equal((50 * 40 * 30) / 1000, 60);
});

test('Trigonometry in two dimensions: the worked numbers are true', () => {
  const t = text('trig');
  const D = Math.PI / 180;
  const r1 = (x: number) => Math.round(x * 10) / 10;
  assert.match(t, /14,0 m/);
  assert.match(t, /1,7 m/);
  assert.match(t, /64,3 m/);
  assert.match(t, /22,6 m/);
  assert.match(t, /27,3 m/);
  assert.match(t, /11,5°/);
  assert.match(t, /56,3°/);
  assert.match(t, /36,9°/);
  assert.match(t, /9,4 cm/);
  assert.match(t, /50°/);
  assert.match(t, /53,1°/);
  assert.equal(r1(20 * Math.tan(35 * D)), 14);
  assert.equal(r1(5 * Math.cos(70 * D)), 1.7);
  assert.equal(r1(30 / Math.tan(25 * D)), 64.3);
  assert.equal(r1(12 / Math.tan(28 * D)), 22.6);
  const x = (20 * Math.tan(30 * D)) / (Math.tan(45 * D) - Math.tan(30 * D));
  assert.equal(r1(x * Math.tan(45 * D)), 27.3);
  assert.equal(r1(Math.asin(0.2) / D), 11.5);
  assert.equal(r1(Math.atan(1.5) / D), 56.3);
  assert.equal(r1(Math.acos(0.8) / D), 36.9);
  assert.equal(r1(10 * Math.cos(20 * D)), 9.4);
  assert.equal(180 - 2 * 65, 50);
  assert.equal(r1(Math.atan(8 / 6) / D), 53.1);
});
