import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { taskOfBankFile } from '../../../../scripts/question-drift';

const tmp = () => fs.mkdtempSync(path.join(os.tmpdir(), 'taskof-'));
const put = (root: string, rel: string, body: string) => { fs.mkdirSync(path.dirname(path.join(root, rel)), { recursive: true }); fs.writeFileSync(path.join(root, rel), body); };

test('a bank file that names its task: that slug', () => {
  const r = tmp();
  put(r, 'grade9/x/Lesson.tsx', "<CapsSubjectTopic task=\"gr9-a-t1\" bank={bank} />");
  assert.equal(taskOfBankFile(r, 'grade9/x/Lesson.tsx'), 'gr9-a-t1');
  put(r, 'grade9/y/Lesson.tsx', "const x = { task: 'gr9-b-t2' };");
  assert.equal(taskOfBankFile(r, 'grade9/y/Lesson.tsx'), 'gr9-b-t2');
});

test('a bank file in <Name>Content.tsx that names no task takes it from the sibling component (Grade 10 English was missed by the sync before)', () => {
  const r = tmp();
  put(r, 'grade10/english/t1/lesson/LessonContent.tsx', 'export const bank = [{ prompt: "p", options: [], answer: "a" }];');
  put(r, 'grade10/english/t1/lesson/Lesson.tsx', '<CapsSubjectTopic task="gr10-lesson-t1" bank={bank} apiPath="/api/caps/eng" />');
  assert.equal(taskOfBankFile(r, 'grade10/english/t1/lesson/LessonContent.tsx'), 'gr10-lesson-t1');
});

test('no task anywhere, or two different tasks, gives null (the question is counted as unknown, as before)', () => {
  const r = tmp();
  put(r, 'g/a/BankOnly.tsx', 'export const bank = [];');
  assert.equal(taskOfBankFile(r, 'g/a/BankOnly.tsx'), null);
  put(r, 'g/b/Two.tsx', "task=\"gr9-one-t1\" and task=\"gr9-two-t1\"");
  assert.equal(taskOfBankFile(r, 'g/b/Two.tsx'), null);
  put(r, 'g/c/A.tsx', 'export const bank = [];');
  put(r, 'g/c/B.tsx', "task=\"gr9-x-t1\"");
  put(r, 'g/c/C.tsx', "task=\"gr9-y-t1\"");
  assert.equal(taskOfBankFile(r, 'g/c/A.tsx'), null, 'two sibling tasks are ambiguous');
});

test('the real Grade 10 English term 1 banks all resolve to a task', () => {
  const root = path.join(process.cwd(), 'src', 'curriculum');
  const dir = 'grade10/english/term1';
  for (const lesson of fs.readdirSync(path.join(root, dir))) {
    const f = fs.readdirSync(path.join(root, dir, lesson)).find((x) => x.endsWith('Content.tsx'))!;
    const t = taskOfBankFile(root, `${dir}/${lesson}/${f}`);
    assert.match(String(t), /^gr10-.*-t1$/, f);
  }
});
