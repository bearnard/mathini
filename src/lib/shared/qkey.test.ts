import { test } from 'node:test';
import assert from 'node:assert/strict';
import { makeQkey, normalisePrompt, isQkey } from './qkey';

// Pinned values: if one of these fails, the scheme changed and every stored qkey is orphaned.
// Values were cross-checked against an independent FNV-1a 64 implementation.
test('known prompts keep their known keys', () => {
  assert.equal(makeQkey('mains-electricity', 'Where is most of South Africa’s mains electricity made?'), '7be453035b74');
  assert.equal(makeQkey('mains-electricity', 'What does the steam do in a power station?'), '60ab0be931f9');
  assert.equal(makeQkey('fractions', 'What is 1/2 + 1/4?'), 'e0836c309ce6');
});
test('case, spacing and curly quotes do not change the key', () => {
  const a = makeQkey('t', 'Where is South Africa’s coal?');
  assert.equal(makeQkey('t', "  where is   south africa's COAL? "), a);
  assert.equal(makeQkey('t', 'Where is South\nAfrica’s coal?'), a);
});
test('different task or different wording gives a different key', () => {
  assert.notEqual(makeQkey('a', 'Same prompt?'), makeQkey('b', 'Same prompt?'));
  assert.notEqual(makeQkey('a', 'Same prompt?'), makeQkey('a', 'Same prompt!'));
});
test('keys are 12 lower-case hex chars; isQkey validates', () => {
  const k = makeQkey('t', 'Anything at all, including emoji 🙂 and ünïcode');
  assert.match(k, /^[0-9a-f]{12}$/);
  assert.ok(isQkey(k));
  for (const bad of ['', 'ABCDEF012345', '123', 123, null, undefined, '7be453035b74x']) assert.equal(isQkey(bad), false);
});
test('normalisePrompt is idempotent', () => {
  const n = normalisePrompt('  “Quoted”  —  text\t ');
  assert.equal(normalisePrompt(n), n);
});
