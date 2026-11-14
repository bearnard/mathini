import { test } from 'node:test';
import assert from 'node:assert/strict';
import { registry } from './registry';
import { QUALITY_RULES, withQualityRules } from './qualityRules';

test('every subject preamble ends with the seven quality rules, exactly once', () => {
  const codes = Object.keys(registry);
  assert.ok(codes.length >= 20);
  for (const code of codes) {
    const text = registry[code].getPreamble(8);
    assert.ok(text.endsWith(QUALITY_RULES), `${code}: preamble must end with the quality rules`);
    assert.equal(text.split('QUALITY RULES').length - 1, 1, `${code}: rules appear once`);
    assert.ok(Object.keys(registry[code].tasks).length > 0, `${code}: tasks are kept`);
  }
});

test('the rules say what the validator rejects', () => {
  for (const phrase of ['must NOT be the longest', 'plausibly believe', 'exactly one option is correct', 'NO SCRATCHPAD', 'STAY ON TOPIC', 'direct question', 'check every calculation']) {
    assert.ok(QUALITY_RULES.includes(phrase), `missing: ${phrase}`);
  }
  assert.equal((QUALITY_RULES.match(/^\d\. /gm) ?? []).length, 7);
});

test('withQualityRules is idempotent', () => {
  const once = withQualityRules('Write items.');
  assert.equal(withQualityRules(once), once);
});
