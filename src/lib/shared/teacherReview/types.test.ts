import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseProposal, proposalKey, summariseAgreement, unanimousProposal, type ReviewResponse } from './types';

const q = (prompt: string, answer = 'Ekuseni') => ({ prompt, options: ['Ekuseni', 'Ebusuku', 'Izolo', 'Ngoku'], answer, explanation: 'x' });
const r = (id: number, verdict: ReviewResponse['verdict'], proposal: ReviewResponse['proposal'] = null): ReviewResponse => ({ reviewerId: id, label: `Reviewer ${id}`, verdict, proposal, confidence: null, reason: '' });

test('no answers yet is pending', () => {
  const a = summariseAgreement(3, []);
  assert.equal(a.state, 'pending');
  assert.match(a.label, /3 reviewers/);
});
test('all correct reads as n/n correct', () => {
  const a = summariseAgreement(3, [r(1, 'correct'), r(2, 'correct'), r(3, 'correct')]);
  assert.deepEqual([a.state, a.label], ['all_correct', '3/3 correct']);
});
test('identical changes (whitespace aside) are the same change', () => {
  const a = summariseAgreement(2, [r(1, 'change', q('Which word means morning?')), r(2, 'change', q('  Which word  means morning? '))]);
  assert.deepEqual([a.state, a.sameChange, a.label], ['same_change', 2, '2/2 suggest the same change']);
});
test('different changes, and correct versus change, are disagreements', () => {
  assert.equal(summariseAgreement(2, [r(1, 'change', q('A?')), r(2, 'change', q('B?'))]).state, 'disagree');
  const c = summariseAgreement(3, [r(1, 'correct'), r(2, 'change', q('A?')), r(3, 'change', q('A?'))]);
  assert.deepEqual([c.state, c.sameChange], ['disagree', 2]);
});
test('unsure answers are mixed, and options order matters to a proposal key', () => {
  assert.equal(summariseAgreement(2, [r(1, 'unsure'), r(2, 'unsure')]).state, 'mixed');
  assert.notEqual(proposalKey(q('A?')), proposalKey({ ...q('A?'), options: ['Ebusuku', 'Ekuseni', 'Izolo', 'Ngoku'] }));
});
test('unanimousProposal needs every change to match and ignores correct and unsure', () => {
  const p = q('A?');
  assert.deepEqual(unanimousProposal([r(1, 'change', p), r(2, 'correct'), r(3, 'change', { ...p })]), p);
  assert.equal(unanimousProposal([r(1, 'change', p), r(2, 'change', q('B?'))]), null);
  assert.equal(unanimousProposal([r(1, 'correct')]), null);
});
test('parseProposal checks the shape for each item kind', () => {
  assert.deepEqual(parseProposal('lesson_line', { text: 'New line.' }), { text: 'New line.' });
  assert.equal(parseProposal('lesson_line', { text: '  ' }), null);
  assert.equal(parseProposal('question', { prompt: 'A?', options: ['x', 1], answer: 'x' }), null);
  assert.deepEqual(parseProposal('question', { prompt: 'A?', options: ['x', 'y'], answer: 'x' }), { prompt: 'A?', options: ['x', 'y'], answer: 'x', explanation: '' });
});
