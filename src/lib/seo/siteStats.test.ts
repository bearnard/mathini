import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSiteStats } from '../../../scripts/lib/siteStats';
import { SITE_STATS, formatCount, gradeRangeText, overCount } from './siteStats';
import { SEO_GRADES, allSeoTopics } from './curriculumIndex';

test('the committed site stats equal a fresh computation (run: node --import tsx scripts/generate-site-stats.ts)', () => {
  assert.deepEqual(SITE_STATS, buildSiteStats());
});

test('the stats agree with the public pages the site really has', () => {
  assert.equal(SITE_STATS.grades, SEO_GRADES.length);
  assert.equal(SITE_STATS.topics, allSeoTopics().length);
  assert.equal(SITE_STATS.subjectAreas, SEO_GRADES.reduce((n, g) => n + g.subjects.length, 0));
  assert.equal(SITE_STATS.subjects, new Set(SEO_GRADES.flatMap((g) => g.subjects.map((s) => s.title))).size);
  assert.deepEqual([SITE_STATS.gradeFrom, SITE_STATS.gradeTo], [Math.min(...SEO_GRADES.map((g) => g.gradeId)), Math.max(...SEO_GRADES.map((g) => g.gradeId))]);
});

test('the numbers are plausible, so a broken count cannot reach the page', () => {
  assert.ok(SITE_STATS.questions >= 1000, `questions ${SITE_STATS.questions}`);
  assert.ok(SITE_STATS.topics >= 100 && SITE_STATS.subjects >= 5 && SITE_STATS.grades >= 4);
  for (const v of Object.values(SITE_STATS)) assert.ok(Number.isInteger(v) && v > 0);
});

test('formatCount groups thousands with a non-breaking space; overCount never overstates', () => {
  assert.equal(formatCount(8055), '8 055');
  assert.equal(formatCount(974), '974');
  assert.equal(formatCount(1234567), '1 234 567');
  assert.equal(overCount(8055), 'over 8 000');
  assert.equal(overCount(8099), 'over 8 000');
  assert.equal(overCount(8100), 'over 8 100');
  assert.equal(gradeRangeText({ ...SITE_STATS, gradeFrom: 5, gradeTo: 12 }), 'Grades 5 to 12');
});
