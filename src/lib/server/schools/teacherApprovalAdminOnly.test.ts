import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { FOR_TEACHERS } from '../../seo/adultPages';

// OWNER DECISION (November 2026): only the platform admin approves teachers, in /admin/teachers. A school admin can only recommend.
// The behavioural tests (a school admin's confirm grants nothing) are in schoolAdmins.test.ts and schoolHttp.test.ts; these pin the rule in the code and the words.

const walk = (dir: string): string[] => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));
const source = walk('src').filter((f) => /\.(ts|tsx)$/.test(f) && !/\.test\.|testDb|testdb/.test(f));

test('the teacher role is granted in exactly one place: the owner\'s decideApplication', () => {
  const granters = source.filter((f) => /INTO user_roles[^`"]*'teacher'/.test(fs.readFileSync(f, 'utf8')));
  assert.deepEqual(granters, [path.join('src', 'lib', 'server', 'schools', 'teachers.ts')]);
});

test('the school admin code cannot call the owner\'s decision', () => {
  const sa = fs.readFileSync('src/lib/server/schools/schoolAdmins.ts', 'utf8');
  assert.ok(!/decideApplication/.test(sa.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '')), 'schoolAdmins.ts does not use decideApplication');
  const http = fs.readFileSync('src/lib/server/schools/schoolHttp.ts', 'utf8');
  assert.ok(!/decideApplication/.test(http));
});

test('the only route that calls decideApplication is the owner\'s, behind the admin write check', () => {
  const users = source.filter((f) => /decideApplication\(/.test(fs.readFileSync(f, 'utf8')) && !f.endsWith(path.join('schools', 'teachers.ts')));
  assert.deepEqual(users, [path.join('src', 'app', 'api', 'admin', 'teachers', '[userId]', 'decide', 'route.ts')]);
  const route = fs.readFileSync(users[0], 'utf8');
  assert.match(route, /adminWrite\(/);
});

test('/for-teachers says that the PrepPals team checks the SACE registration and approves, and that a school admin cannot', () => {
  const all = [FOR_TEACHERS.description, FOR_TEACHERS.intro, ...FOR_TEACHERS.steps, ...FOR_TEACHERS.faq.map((f) => `${f.q} ${f.a}`)].join(' ');
  assert.match(all, /The PrepPals team checks your SACE registration and approves you/);
  assert.match(all, /Nobody else can approve you, not even a school admin/);
  assert.match(all, /A school admin cannot approve a teacher/);
  assert.ok(!/school confirm/i.test(all));
});

test('the apply form, the school admin screen and the owner screens use the new words', () => {
  const apply = fs.readFileSync('src/components/adultAuth/TeacherApply.tsx', 'utf8');
  assert.match(apply, /The PrepPals team checks your SACE registration and approves you/);
  const school = fs.readFileSync('src/components/school/SchoolArea.tsx', 'utf8');
  assert.ok(!school.includes('Confirm teacher'), 'no Confirm teacher button');
  assert.ok(!school.includes('They will get a teacher account'));
  assert.match(school, />Recommend</);
  const teachers = fs.readFileSync('src/components/admin/teachers/TeachersPage.tsx', 'utf8');
  assert.match(teachers, /Recommends/);
  assert.match(teachers, /Approve<\/button>/);
});
