import test from 'node:test';
import assert from 'node:assert/strict';
import { DEGREES, PLURALS, VERBS, degreeKind, futureWords, layoutBoxes, participle, pastWords, pluralRule, presentWords, sentence, verbIndex } from './afrikaansHelpers';

test('plural rules: -e, double the last letter + e, -s, special', () => {
  const rules = Object.fromEntries(PLURALS.map((p) => [p.sg, pluralRule(p.sg, p.pl)]));
  assert.deepEqual(rules, {
    hond: 'e', boek: 'e', huis: 'e', kat: 'double-e', kop: 'double-e', blom: 'double-e', tafel: 's', appel: 's', kind: 'special', dag: 'special',
  });
});

test('degrees: regular, spelling change (groot, groter) and irregular (goed, beter, beste)', () => {
  const kinds = Object.fromEntries(DEGREES.map((d) => [d.base, degreeKind(d)]));
  assert.deepEqual(kinds, { mooi: 'regular', groot: 'spelling', klein: 'regular', vinnig: 'regular', warm: 'regular', goed: 'irregular' });
});

test('past tense: het + ge- verb at the end; eet becomes geëet', () => {
  assert.equal(sentence(pastWords('ek', 'sokker', 'speel')), 'Ek het sokker gespeel.');
  assert.equal(sentence(pastWords('ons', 'appels', 'eet')), 'Ons het appels geëet.');
  assert.equal(sentence(pastWords('sy', "'n boek", 'lees')), "Sy het 'n boek gelees.");
  assert.equal(sentence(pastWords('ons', 'skool toe', 'loop')), 'Ons het skool toe geloop.');
  assert.equal(sentence(pastWords('hulle', 'hard', 'werk')), 'Hulle het hard gewerk.');
  assert.equal(participle('sien'), 'gesien');
  assert.throws(() => participle('swem'));
});

test('future tense: sal in second place, the plain verb at the end', () => {
  assert.equal(sentence(futureWords('ek', 'sokker', 'speel')), 'Ek sal sokker speel.');
  assert.equal(sentence(futureWords('ons', 'aandete', 'eet')), 'Ons sal aandete eet.');
  assert.equal(sentence(futureWords('hulle', 'skool toe', 'gaan')), 'Hulle sal skool toe gaan.');
  assert.equal(sentence(futureWords('die hond', '', 'slaap')), 'Die hond sal slaap.');
});

test('present tense keeps the verb in second place', () => {
  assert.equal(sentence(presentWords('ek', 'sokker', 'speel')), 'Ek speel sokker.');
  assert.equal(sentence(presentWords('sy', "'n boek", 'lees')), "Sy lees 'n boek.");
});

test('verbIndex finds the verb or its participle', () => {
  assert.equal(verbIndex(['ek', 'sal', 'sokker', 'speel'], 'speel'), 3);
  assert.equal(verbIndex(['ek', 'het', 'sokker', 'gespeel'], 'speel'), 3);
  assert.equal(verbIndex(['ek', 'speel', 'sokker'], 'speel'), 1);
});

test('every verb participle starts with ge- and ends with the verb', () => {
  for (const v of VERBS) assert.ok(v.pp.startsWith('ge') && v.pp.endsWith(v.inf === 'eet' ? 'et' : v.inf), v.inf);
});

test('layoutBoxes puts the boxes left to right without overlap', () => {
  const { boxes, width } = layoutBoxes(['ek', 'sal', 'sokker', 'speel']);
  for (let i = 1; i < boxes.length; i++) assert.ok(boxes[i].x >= boxes[i - 1].x + boxes[i - 1].w);
  assert.ok(width >= boxes[boxes.length - 1].x + boxes[boxes.length - 1].w);
});
