import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRICE_EXAMPLE, VAT_EXAMPLE, netVat, vatExclusive, vatInclusive, vatOnExclusive, vatPortion } from './vat';
import { rand } from './rand';

const here = path.dirname(fileURLToPath(import.meta.url));
const lesson = fs.readFileSync(path.join(here, '../../../curriculum/grade11/accounting/term4/vat-calculations-recording/VatCalculationsRecording.tsx'), 'utf8');

test('the price example: R200 plus 15 percent is R230 and the VAT in R230 is R30', () => {
  assert.equal(vatOnExclusive(200), 30);
  assert.equal(vatInclusive(200), 230);
  assert.equal(vatPortion(230), 30);
  assert.equal(vatExclusive(230), 200);
});

test('VAT in an inclusive price is 15/115 of it, which is NOT 15 percent of it (the classic slip)', () => {
  assert.notEqual(vatPortion(230), 230 * 0.15);
  assert.equal(230 * 0.15, 34.5);
  assert.ok(Math.abs(vatPortion(115) - 15) < 1e-9);
});

test('round trips: adding VAT then extracting it returns the same amounts, to the cent', () => {
  for (const excl of [1, 19.99, 200, 4350, 12345.67]) {
    const incl = vatInclusive(excl);
    assert.equal(Math.round((vatExclusive(incl) - excl) * 100), 0);
    assert.equal(Math.round((vatPortion(incl) - vatOnExclusive(excl)) * 100), 0);
  }
});

test('net VAT: output R18 000 less input R12 000 is R6 000 payable; more input than output is a refund', () => {
  assert.deepEqual(netVat(VAT_EXAMPLE.output, VAT_EXAMPLE.input), { amount: 6000, direction: 'payable' });
  assert.deepEqual(netVat(5000, 9000), { amount: 4000, direction: 'refund' });
  assert.deepEqual(netVat(7000, 7000), { amount: 0, direction: 'payable' });
});

test('rand formatting matches the lesson: R12 000, R6 000, R230, and cents only when needed', () => {
  assert.equal(rand(12000), 'R12 000');
  assert.equal(rand(6000), 'R6 000');
  assert.equal(rand(230), 'R230');
  assert.equal(rand(34.5), 'R34,50');
  assert.equal(rand(1234567), 'R1 234 567');
});

test('the example figures are the lesson\'s own numbers', () => {
  assert.ok(lesson.includes(`amount: ${VAT_EXAMPLE.input}`));
  assert.ok(lesson.includes(`amount: ${VAT_EXAMPLE.output}`));
  assert.ok(lesson.includes(`${rand(vatInclusive(PRICE_EXAMPLE.exclusive))}`));
  assert.ok(lesson.includes(rand(vatOnExclusive(PRICE_EXAMPLE.exclusive))));
  assert.ok(lesson.includes('15/115'));
  assert.ok(lesson.includes(rand(netVat(VAT_EXAMPLE.output, VAT_EXAMPLE.input).amount)));
});
