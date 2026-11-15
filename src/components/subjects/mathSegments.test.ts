import { test } from 'node:test';
import assert from 'node:assert/strict';
import { splitMath } from './mathSegments';

test('splits plain text and $...$ runs as MathText always has', () => {
  assert.deepEqual(splitMath('Solve $x^2 = 9$ for x.'), [
    { math: false, text: 'Solve ' },
    { math: true, text: 'x^2 = 9' },
    { math: false, text: ' for x.' },
  ]);
  assert.deepEqual(splitMath('no maths'), [{ math: false, text: 'no maths' }]);
  assert.deepEqual(splitMath('only R$5'), [{ math: false, text: 'only R$5' }]);
});

test('\\$ is a literal dollar: currency pairs no longer swallow the text between them (Gr12 ExchangeRates)', () => {
  assert.deepEqual(splitMath('costs \\$50 and the rate is \\$1 = R17.20'), [{ math: false, text: 'costs $50 and the rate is $1 = R17.20' }]);
  assert.deepEqual(splitMath('cell \\$C\\$1 is absolute'), [{ math: false, text: 'cell $C$1 is absolute' }]);
});

test('an escaped dollar inside a maths run stays an escaped dollar for KaTeX', () => {
  assert.deepEqual(splitMath('Total $x = \\$5$ now'), [
    { math: false, text: 'Total ' },
    { math: true, text: 'x = \\$5' },
    { math: false, text: ' now' },
  ]);
});
