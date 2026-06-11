import { test } from 'node:test';
import assert from 'node:assert/strict';
import { signSession, verifySession } from './session';

const SECRET = 'test-secret';

test('verifySession returns the student id for a valid token', async () => {
  const token = await signSession('student-123', SECRET);
  assert.equal(await verifySession(token, SECRET), 'student-123');
});

test('verifySession rejects a tampered payload', async () => {
  const token = await signSession('student-123', SECRET);
  const sig = token.slice(token.indexOf('.'));
  assert.equal(await verifySession(`student-456${sig}`, SECRET), null);
});

test('verifySession rejects a token signed with a different secret', async () => {
  const token = await signSession('student-123', 'other-secret');
  assert.equal(await verifySession(token, SECRET), null);
});

test('verifySession rejects malformed tokens', async () => {
  assert.equal(await verifySession('no-dot-here', SECRET), null);
  assert.equal(await verifySession('', SECRET), null);
  assert.equal(await verifySession(undefined, SECRET), null);
});
