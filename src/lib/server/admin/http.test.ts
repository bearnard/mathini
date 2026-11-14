import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkWriteRequest, validLearnerId, ADMIN_ACTION_HEADER } from './http';

const req = (headers: Record<string, string>, url = 'https://scholar.example.org/api/admin/learners/abc/delete') => new Request(url, { method: 'POST', headers });

test('a write needs the action header AND a matching Origin', () => {
  assert.equal(checkWriteRequest(req({ [ADMIN_ACTION_HEADER]: 'delete', Origin: 'https://scholar.example.org' }), 'delete'), null);
});
test('missing or wrong action header is rejected', () => {
  assert.equal(checkWriteRequest(req({ Origin: 'https://scholar.example.org' }), 'delete'), 'missing action header');
  assert.equal(checkWriteRequest(req({ [ADMIN_ACTION_HEADER]: 'export', Origin: 'https://scholar.example.org' }), 'delete'), 'missing action header');
  assert.equal(checkWriteRequest(req({ [ADMIN_ACTION_HEADER]: '', Origin: 'https://scholar.example.org' }), 'delete'), 'missing action header');
});
test('a missing Origin is rejected (browsers always send it on POST)', () => {
  assert.equal(checkWriteRequest(req({ [ADMIN_ACTION_HEADER]: 'delete' }), 'delete'), 'missing origin');
});
test('a cross-site Origin is rejected, including look-alike hosts and other ports', () => {
  for (const origin of ['https://evil.example.com', 'https://scholar.example.org.evil.com', 'https://scholar.example.org:8443', 'http://scholar.example.org:81', 'null', 'not a url']) {
    const r = checkWriteRequest(req({ [ADMIN_ACTION_HEADER]: 'delete', Origin: origin }), 'delete');
    assert.ok(r !== null, origin);
  }
});
test('the scheme may differ only if the host (with port) matches; localhost dev works', () => {
  assert.equal(checkWriteRequest(req({ [ADMIN_ACTION_HEADER]: 'delete', Origin: 'http://localhost:3000' }, 'http://localhost:3000/api/admin/learners/x/delete'), 'delete'), null);
  assert.notEqual(checkWriteRequest(req({ [ADMIN_ACTION_HEADER]: 'delete', Origin: 'http://localhost:3001' }, 'http://localhost:3000/api/admin/learners/x/delete'), 'delete'), null);
});
test('learner ids are checked before they reach SQL', () => {
  assert.equal(validLearnerId('6c7a5b68-a283-47ee-b374-d9921e5c26e0'), true);
  assert.equal(validLearnerId('demo-stu-001'), true);
  for (const bad of [undefined, '', "x'; DROP TABLE students;--", '../etc', 'a b', 'a%20b', 'x'.repeat(65), 'é']) assert.equal(validLearnerId(bad as string), false, String(bad));
});
