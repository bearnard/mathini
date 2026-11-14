import { test } from 'node:test';
import assert from 'node:assert/strict';
import { registry } from './registry';

test('the Grade 6 generator preamble asks for the South African decimal comma and space-separated thousands', () => {
  const text = registry.grade6.getPreamble(6);
  assert.match(text, /decimal COMMA \(3,5 km; R18,50\)/);
  assert.match(text, /separate thousands with a space \(1 000\)/);
  assert.match(text, /write times with a colon \(14:30\)/);
  assert.match(text, /Never use a decimal point in a number or a time/);
  assert.match(text, /QUALITY RULES/, 'the quality rules are still appended after it');
});
