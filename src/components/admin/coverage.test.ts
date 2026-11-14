import { test } from 'node:test';
import assert from 'node:assert/strict';
import { shellRecordingNote, SHELL_SUBJECTS_TEXT } from './coverage';

test('before any answer is recorded for those subjects the note says so and points to Practice runs', () => {
  const n = shellRecordingNote(null);
  assert.match(n, /not recorded yet/);
  assert.match(n, /Practice runs/);
  assert.ok(n.includes(SHELL_SUBJECTS_TEXT));
  assert.equal(shellRecordingNote(undefined), n);
});
test('once answers are recorded the note gives the real start date and keeps the history pointer', () => {
  const n = shellRecordingNote('2026-11-20');
  assert.match(n, /recorded only since 20 Nov 2026/);
  assert.match(n, /earlier practice appears under Practice runs/);
  assert.ok(!/not recorded yet/.test(n));
});
