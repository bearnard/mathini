import { test } from 'node:test';
import assert from 'node:assert/strict';
import { registry } from './registry';

test('the Grade 6 generator preamble asks for the South African decimal comma and space-separated thousands', () => {
  const text = registry.grade6.getPreamble(6);
  assert.match(text, /decimal COMMA \(3,5 km; R18,50\)/);
  assert.match(text, /separate thousands with a space \(1 000\)/);
  assert.match(text, /QUALITY RULES/, 'the quality rules are still appended after it');
});
