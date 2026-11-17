import test from 'node:test';
import assert from 'node:assert/strict';
import { duplicateTaskIds, lessonTaskIds, promptTaskIds } from './test-support/taskIds';

// GLOBAL GUARD. Questions live in D1 keyed by (task, prompt), and practice serves questions by task id. Two lessons (for example Afrikaans and English)
// on one task id would share one question pool, and a learner of one subject would be served the other's questions (found 2026-11-17: five ids).
// A task id used by lessons of different subjects MUST carry a subject prefix, for example gr7-afr-exam-writing-practice-t4.

test('every task id used by a lesson component is unique across all grades and subjects', () => {
  const uses = lessonTaskIds();
  assert.ok(uses.length > 1000, `${uses.length} lesson task ids found`);
  assert.deepEqual(duplicateTaskIds(uses), {}, 'these task ids are used by more than one lesson: give one of them a subject prefix');
});

test('no task id is empty or contains spaces or upper-case letters (the Grade 6 Afrikaans ids are short words, so only the characters are checked)', () => {
  for (const u of lessonTaskIds()) assert.match(u.task, /^[a-z0-9]+(-[a-z0-9]+)*$/, `${u.task} in ${u.file}`);
});

test('an AI prompt json never defines the same task id in two files', () => {
  const seen = new Map<string, string>();
  const dup: string[] = [];
  for (const u of promptTaskIds()) {
    const was = seen.get(u.task);
    if (was && was !== u.file) dup.push(`${u.task}: ${was} and ${u.file}`);
    seen.set(u.task, u.file);
  }
  assert.deepEqual(dup, []);
});

test('the detector itself finds a duplicate when there is one', () => {
  const found = duplicateTaskIds([
    { task: 'gr7-x-t1', file: 'a/English.tsx' },
    { task: 'gr7-x-t1', file: 'b/Afrikaans.tsx' },
    { task: 'gr7-y-t1', file: 'c/Other.tsx' },
    { task: 'gr7-y-t1', file: 'c/Other.tsx' },
  ]);
  assert.deepEqual(found, { 'gr7-x-t1': ['a/English.tsx', 'b/Afrikaans.tsx'] });
});
