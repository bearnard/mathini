import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { readStoredStudentId, writeStudentId, clearStudentId } from './student';

// Mock localStorage and document.cookie for the test environment.
let mockStorage = new Map<string, string>();
const mockDocument = {
  cookie: '',
  addEventListener() {},
  removeEventListener() {},
};

Object.defineProperty(globalThis, 'localStorage', {
  value: {
    getItem: (key: string) => mockStorage.get(key) ?? null,
    setItem: (key: string, value: string) => mockStorage.set(key, value),
    removeItem: (key: string) => mockStorage.delete(key),
  },
  writable: true,
});

Object.defineProperty(globalThis, 'document', {
  value: mockDocument,
  writable: true,
});

beforeEach(() => {
  mockStorage.clear();
  mockDocument.cookie = '';
});

test('writeStudentId writes to localStorage', () => {
  writeStudentId('abc123');
  assert.equal(mockStorage.get('preppals_student_id'), 'abc123');
});

test('readStoredStudentId reads from localStorage', () => {
  writeStudentId('test-id');
  assert.equal(readStoredStudentId(), 'test-id');
});

test('readStoredStudentId returns null when nothing stored', () => {
  mockStorage.clear();
  assert.equal(readStoredStudentId(), null);
});

test('clearStudentId removes from localStorage', () => {
  writeStudentId('abc');
  clearStudentId();
  assert.equal(mockStorage.has('preppals_student_id'), false);
});

test('writeStudentId sets cookie', () => {
  mockDocument.cookie = '';
  writeStudentId('cookie-test');
  assert.ok(mockDocument.cookie.includes('pp_sid='), 'Cookie should contain pp_sid');
  assert.ok(mockDocument.cookie.includes(encodeURIComponent('cookie-test')), 'Cookie value should match');
});
