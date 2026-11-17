import { test } from 'node:test';
import assert from 'node:assert/strict';
import { NO_REVIEW_MESSAGE, REVIEW_ERROR_MESSAGE, startReviewOutcome } from './startOutcome';

test('/app?start=review: it starts when cards are ready, says so when there are none, says so when loading failed, and waits while loading', () => {
  const o = (state: Parameters<typeof startReviewOutcome>[0]['state'], over: Partial<Parameters<typeof startReviewOutcome>[0]> = {}) => startReviewOutcome({ wantsStart: true, grade: 6, state, ...over });
  assert.equal(o('ready'), 'start');
  assert.equal(o('none'), 'none');
  assert.equal(o('error'), 'error');
  assert.equal(o('loading'), 'wait');
  assert.equal(o('idle'), 'wait');
});

test('without ?start=review nothing happens; before sign-in it waits; a learner outside Grade 6 is told there is no review (never a silent home screen)', () => {
  assert.equal(startReviewOutcome({ wantsStart: false, grade: 6, state: 'none' }), 'ignore');
  assert.equal(startReviewOutcome({ wantsStart: true, grade: null, state: 'idle' }), 'wait');
  assert.equal(startReviewOutcome({ wantsStart: true, grade: 8, state: 'idle' }), 'none');
});

test('the two messages say what happened in plain words', () => {
  assert.match(NO_REVIEW_MESSAGE, /^No review cards today/);
  assert.match(REVIEW_ERROR_MESSAGE, /could not load/i);
});
