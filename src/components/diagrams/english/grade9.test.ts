import test from 'node:test';
import assert from 'node:assert/strict';
import { sentenceType } from './grammar';
import { keepsTense } from './tense';
import {
  CHEF, PLAYER, POEM, PREPOSITIONS, ROLE_G9, TEACHER, active, backshift, closingFor, direct, endsAsClaimed,
  passive, pastDoubling, quoted, reported, rhymeScheme,
} from './grade9';

test('the invented poem rhymes ABAB and its end words are real', () => {
  assert.equal(rhymeScheme(POEM), 'ABAB');
  assert.ok(endsAsClaimed(POEM));
  assert.equal(rhymeScheme([{ rhyme: 'a' }, { rhyme: 'a' }, { rhyme: 'b' }, { rhyme: 'b' }]), 'AABB');
});

test('reported speech steps the verb back and changes the person', () => {
  assert.equal(direct('She', 'am', 'happy'), 'She said, “I am happy.”');
  assert.equal(reported('She', 'she', 'am', 'happy'), 'She said she was happy.');
  assert.equal(reported('He', 'he', 'am', 'tired'), 'He said he was tired.');
  assert.equal(backshift('will'), 'would');
  assert.equal(backshift('can'), 'could');
  assert.equal(backshift('are'), 'were');
  assert.equal(backshift('walked'), 'walked');
});

test('passive voice swaps subject and object', () => {
  assert.equal(active(CHEF), 'The chef prepared the meal.');
  assert.equal(passive(CHEF), 'The meal was prepared by the chef.');
  assert.equal(passive(TEACHER, true), 'The papers were marked by the teacher.');
  assert.equal(passive(PLAYER, false, false), 'A goal was scored.');
  assert.equal(active(PLAYER), 'The player scored a goal.');
});

test('formal closings', () => {
  assert.equal(closingFor('Dear Mr Dlamini,'), 'Yours sincerely,');
  assert.equal(closingFor('Dear Sir or Madam,'), 'Yours faithfully,');
});

test('spelling and punctuation helpers', () => {
  assert.equal(pastDoubling('occur'), 'occurred');
  assert.equal(pastDoubling('stop'), 'stopped');
  assert.equal(pastDoubling('walk'), 'walked');
  assert.equal(quoted('The boy', 'I will be late'), 'The boy said, “I will be late.”');
});

test('word roles in the revision sentence', () => {
  assert.deepEqual(ROLE_G9.filter((w) => w.role !== 'other').map((w) => `${w.text}:${w.role}`), ['old:adjective', 'car:noun', 'needs:verb', 'repair.:noun']);
});

test('sentence types for the lesson sentences', () => {
  assert.equal(sentenceType([{ kind: 'independent', text: 'The taxi arrived.' }]), 'simple');
  assert.equal(sentenceType([{ kind: 'independent', text: 'a' }, { kind: 'conjunction', text: 'and' }, { kind: 'independent', text: 'b' }]), 'compound');
  assert.equal(sentenceType([{ kind: 'dependent', text: 'Because it rained,' }, { kind: 'independent', text: 'x' }]), 'complex');
});

test('tense consistency check', () => {
  assert.ok(keepsTense([{ text: 'wrote', tense: 'past' }, { text: 'sent', tense: 'past' }]));
  assert.ok(!keepsTense([{ text: 'wrote', tense: 'past' }, { text: 'sends', tense: 'present' }]));
});

test('prepositions cover time, place and direction', () => {
  assert.deepEqual(PREPOSITIONS.map((p) => p.shows), ['time', 'place', 'direction']);
});

test('lesson check answers that are typed by hand match the helpers', () => {
  assert.equal(reported('She', 'she', 'will', 'come').replace('come.', '').trim(), 'She said she would');
});
