import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseRegistration, recordConsent, lookupStudentConsent, CONSENT_REQUIRED_MESSAGE } from './consent';
import { CONSENT_VERSION } from '../privacyNotice';

const valid = { realName: ' Alice ', displayName: ' Tiger_42 ', school: ' Sunrise Primary ', age: 11, grade: 6, avatar: '/avatars/avatar-3.webp', parentConsent: true };

test('registration WITHOUT consent is rejected (400-level result), whatever else is valid', () => {
  for (const bad of [undefined, false, 'true', 1, 'yes', null, {}, []]) {
    const r = parseRegistration({ ...valid, parentConsent: bad });
    assert.equal(r.ok, false, String(bad));
    if (!r.ok) assert.equal(r.error, CONSENT_REQUIRED_MESSAGE);
  }
});
test('registration with the field missing entirely is rejected', () => {
  const { parentConsent: _omit, ...rest } = valid;
  void _omit;
  assert.equal(parseRegistration(rest).ok, false);
});
test('non-object bodies are rejected', () => {
  for (const bad of [null, undefined, 'x', 5, []]) assert.equal(parseRegistration(bad).ok, false);
});
test('registration WITH consent is accepted and trimmed', () => {
  const r = parseRegistration(valid);
  assert.equal(r.ok, true);
  if (r.ok) assert.deepEqual(r.value, { realName: 'Alice', displayName: 'Tiger_42', school: 'Sunrise Primary', age: 11, grade: 6, avatar: '/avatars/avatar-3.webp' });
});
test('consent does not bypass the existing validation', () => {
  for (const over of [{ realName: '' }, { displayName: '  ' }, { school: '' }, { grade: 4 }, { grade: 13 }, { grade: 6.5 }, { grade: 'x' }]) {
    const r = parseRegistration({ ...valid, ...over });
    assert.equal(r.ok, false, JSON.stringify(over));
    if (!r.ok) assert.equal(r.error, 'Invalid input');
  }
});
test('avatar defaults and age 0/missing becomes null', () => {
  const r = parseRegistration({ ...valid, avatar: undefined, age: undefined });
  assert.equal(r.ok, true);
  if (r.ok) {
    assert.equal(r.value.avatar, '/avatars/avatar-1.webp');
    assert.equal(r.value.age, null);
  }
});

function fakeDb(row: { parent_consent_at: number | null } | null) {
  const calls: { sql: string; args: unknown[] }[] = [];
  return {
    calls,
    prepare: (sql: string) => ({
      bind: (...args: unknown[]) => ({
        run: async () => { calls.push({ sql, args }); },
        first: async <T,>() => { calls.push({ sql, args }); return row as T | null; },
      }),
    }),
  };
}

test('recordConsent stores the server time and the current notice version for that learner', async () => {
  const db = fakeDb(null);
  await recordConsent(db, 'stu-1', 1234);
  assert.equal(db.calls.length, 1);
  assert.match(db.calls[0].sql, /UPDATE students SET parent_consent_at = \?, consent_version = \? WHERE id = \?/);
  assert.deepEqual(db.calls[0].args, [1234, CONSENT_VERSION, 'stu-1']);
});
test('lookupStudentConsent: consented, not consented, and missing learner', async () => {
  assert.deepEqual(await lookupStudentConsent(fakeDb({ parent_consent_at: 99 }), 'a'), { exists: true, consented: true });
  assert.deepEqual(await lookupStudentConsent(fakeDb({ parent_consent_at: null }), 'a'), { exists: true, consented: false });
  assert.deepEqual(await lookupStudentConsent(fakeDb(null), 'a'), { exists: false, consented: false });
});
test('the notice version changed with the new tick-box text', () => {
  assert.equal(CONSENT_VERSION, 'privacy-2026-11-15-v5');
});
