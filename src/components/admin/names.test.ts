import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { plural, prettifySlug, subjectFilterLabel, subjectTitle, topicInfo, topicSubline } from './names';
import { TOPIC_NAMES } from './topicNames.generated';

test('a known task slug resolves to the registry title and subject (not the prettified slug)', () => {
  const i = topicInfo(6, 'earth-moon-movement');
  assert.deepEqual(i, { title: 'Earth & Moon Movement', subject: 'Natural Sciences & Technology', known: true });
  assert.equal(topicInfo(6, 'mains-electricity').title, 'Mains Electricity & Safety');
  assert.equal(topicInfo(6, 'systems-solve-problems').title, 'Systems to Solve Problems');
});
test('Grade 6 maths (task slugs with a gr6- prefix) resolves, and its subject is Mathematics, not "Grade 6 core"', () => {
  const entry = Object.entries(TOPIC_NAMES).find(([k]) => /^6\|gr6-.*-t\d$/.test(k) && TOPIC_NAMES[k][1] === 'Mathematics');
  assert.ok(entry, 'there is a Grade 6 maths topic in the registry');
  const [key, [title]] = entry!;
  const slug = key.split('|')[1];
  assert.deepEqual(topicInfo(6, slug), { title, subject: 'Mathematics', known: true });
  assert.equal(topicSubline(6, slug, 'grade6'), 'Mathematics · Grade 6');
});
test('FALLBACK: an unknown slug falls back to the prettified slug with no subject', () => {
  assert.deepEqual(topicInfo(6, 'brand-new-topic-t2'), { title: 'Brand new topic', subject: null, known: false });
  assert.deepEqual(topicInfo(99, 'earth-moon-movement'), { title: 'Earth moon movement', subject: null, known: false });
  assert.deepEqual(topicInfo(6, null), { title: 'Unknown topic', subject: null, known: false });
  assert.equal(prettifySlug('gr7-whole-numbers-t1'), 'Whole numbers');
});
test('without a grade, a slug is found in whichever grade has it', () => {
  assert.equal(topicInfo(null, 'earth-moon-movement').title, 'Earth & Moon Movement');
});
test('the same slug in two subjects resolves per grade', () => {
  assert.notEqual(topicInfo(7, 'gr7-extended-responses-t1').title, 'Extended responses');
});
test('subject titles: codes resolve through the registry, "grade6" is Mathematics, unknown codes fall back to the code', () => {
  assert.equal(subjectTitle('nst', 6), 'Natural Sciences & Technology');
  assert.equal(subjectTitle('grade6', 6), 'Mathematics');
  assert.equal(subjectTitle('math', 7), 'Mathematics');
  assert.equal(subjectTitle('zzz', 6), 'zzz');
  assert.equal(subjectTitle(null), 'Unknown subject');
});
test('filter labels are unambiguous: Grade 6 maths vs other maths', () => {
  assert.equal(subjectFilterLabel('grade6'), 'Mathematics (Grade 6)');
  assert.equal(subjectFilterLabel('math'), 'Mathematics');
  assert.equal(subjectFilterLabel('nst'), 'Natural Sciences & Technology');
  assert.equal(subjectFilterLabel('zzz'), 'zzz');
});
test('subline uses the registry subject when the topic is known, else the code', () => {
  assert.equal(topicSubline(6, 'earth-moon-movement', 'nst'), 'Natural Sciences & Technology · Grade 6');
  assert.equal(topicSubline(6, 'unknown-slug', 'grade6'), 'Mathematics · Grade 6');
  assert.equal(topicSubline(null, 'unknown-slug', 'nst'), 'Natural Sciences & Technology');
});
test('plural: 1 is singular, 0 and 2+ are plural, with an irregular form when given', () => {
  assert.equal(plural(1, 'learner'), '1 learner');
  assert.equal(plural(0, 'learner'), '0 learners');
  assert.equal(plural(2, 'device'), '2 devices');
  assert.equal(plural(1, 'run'), '1 run');
  assert.equal(plural(1234, 'answer').replace(/\s/g, ' '), '1 234 answers');
  assert.equal(plural(2, 'person', 'people'), '2 people');
  assert.equal(plural(1, 'private (Do Not Track) visit'), '1 private (Do Not Track) visit');
});
test('the generated lookup is up to date with the curriculum registry (re-run the generator if this fails)', () => {
  const r = spawnSync(process.execPath, ['--import', 'tsx', path.join(process.cwd(), 'scripts', 'build-topic-names.mjs'), '--check'], { encoding: 'utf8', cwd: process.cwd() });
  assert.equal(r.status, 0, r.stderr || r.stdout);
});
test('the generated lookup covers (almost) every registry topic that has a task', () => {
  assert.ok(Object.keys(TOPIC_NAMES).length > 900);
});
