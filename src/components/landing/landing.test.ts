import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import zlib from 'node:zlib';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import GradeExplorer from './GradeExplorer';
import SiteStats from './SiteStats';
import { SEO_GRADES, allSeoTopics, gradePath, subjectPath, topicPath } from '../../lib/seo/curriculumIndex';
import { SITE_STATS, formatCount } from '../../lib/seo/siteStats';

const explorer = renderToStaticMarkup(createElement(GradeExplorer));
const hrefs = [...explorer.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);

test('GradeExplorer: one radio per grade, exactly one checked (Grade 6 by default), every grade has a tab and a panel', () => {
  const radios = [...explorer.matchAll(/<input[^>]*type="radio"[^>]*>/g)].map((m) => m[0]);
  assert.equal(radios.length, SEO_GRADES.length);
  assert.equal(radios.filter((r) => /checked/.test(r)).length, 1);
  assert.ok(/id="ge-g6"[^>]*checked|checked[^>]*id="ge-g6"/.test(radios.join('')), 'Grade 6 is the default');
  for (const g of SEO_GRADES) {
    assert.ok(explorer.includes(`id="ge-g${g.gradeId}"`) && explorer.includes(`for="ge-g${g.gradeId}"`) && explorer.includes(`id="ge-p${g.gradeId}"`), `grade ${g.gradeId}`);
    assert.ok(explorer.includes(`#ge-g${g.gradeId}:checked ~ .ge-panels #ge-p${g.gradeId}{display:block}`), `css for grade ${g.gradeId}`);
  }
});

test('GradeExplorer: every grade, subject and topic page is linked exactly once, and no link points anywhere else', () => {
  const valid = new Set<string>([...SEO_GRADES.map(gradePath), ...SEO_GRADES.flatMap((g) => g.subjects.map((s) => subjectPath(g, s))), ...allSeoTopics().map((x) => topicPath(x.grade, x.subject, x.topic))]);
  for (const h of hrefs) assert.ok(valid.has(h), `unexpected link ${h}`);
  const topicHrefs = hrefs.filter((h) => h.split('/').length === 4);
  assert.equal(topicHrefs.length, allSeoTopics().length);
  assert.equal(new Set(topicHrefs).size, topicHrefs.length, 'no topic is linked twice');
  assert.equal(hrefs.filter((h) => h.split('/').length === 3).length, SEO_GRADES.reduce((n, g) => n + g.subjects.length, 0));
});

test('GradeExplorer is light and server-rendered: no script, no image, no client directive, no database, and a size budget', () => {
  assert.ok(!/<script|<img|<iframe|<video/i.test(explorer));
  const src = fs.readFileSync('src/components/landing/GradeExplorer.tsx', 'utf8');
  assert.ok(!/['"]use client['"]/.test(src));
  assert.ok(!/getCloudflareContext|from '[^']*server[^']*'|fetch\(/.test(src));
  // The uncompressed size of the FULL explorer grows with every lesson; the real limits are the two gzip checks below (raised from 200 000 by the orchestrator, #957).
  assert.ok(explorer.length < 260_000, `explorer HTML is ${explorer.length} bytes`);
  // The FULL explorer (every topic) grows with the curriculum; the landing page renders it with topicsPerSubject={5} (checked below).
  assert.ok(zlib.gzipSync(explorer).length < 32_000, `full explorer ${zlib.gzipSync(explorer).length} bytes gzipped (budget 32 KB)`);
  const onLanding = renderToStaticMarkup(createElement(GradeExplorer, { topicsPerSubject: 5 }));
  assert.ok(zlib.gzipSync(onLanding).length < 16_000, `landing explorer ${zlib.gzipSync(onLanding).length} bytes gzipped (budget 16 KB)`);
});

test('GradeExplorer is accessible: a labelled fieldset, tabs are real labels at least 44px tall, headings in order, "Show topics" summaries', () => {
  assert.match(explorer, /<fieldset[^>]*>\s*<legend class="sr-only">Choose a grade<\/legend>/);
  assert.match(explorer, /<section id="grade-explorer" aria-labelledby="ge-title"/);
  assert.equal((explorer.match(/<h2/g) ?? []).length, 1);
  assert.ok(!/<h1/.test(explorer));
  assert.ok((explorer.match(/min-h-14/g) ?? []).length >= SEO_GRADES.length);
  assert.ok((explorer.match(/<summary[^>]*min-h-11[^>]*>Show topics/g) ?? []).length === SEO_GRADES.reduce((n, g) => n + g.subjects.length, 0));
});

test('SiteStats shows the real numbers and no invented ones', () => {
  const html = renderToStaticMarkup(createElement(SiteStats));
  for (const v of [SITE_STATS.topics, SITE_STATS.questions]) assert.ok(html.includes(formatCount(v)), String(v));
  for (const v of [SITE_STATS.grades, SITE_STATS.subjects]) assert.ok(html.includes(`>${v}<`), String(v));
  assert.ok(html.includes('Grades 5 to 12'));
  assert.ok(!/<script|<img/.test(html));
  const custom = renderToStaticMarkup(createElement(SiteStats, { stats: { ...SITE_STATS, topics: 1234, questions: 99 } }));
  assert.ok(custom.includes('1 234') && custom.includes('>99<'), 'it shows what it is given');
  const src = fs.readFileSync('src/components/landing/SiteStats.tsx', 'utf8');
  assert.ok(!/['"]use client['"]/.test(src) && !/\b\d{2,}\b/.test(src.replace(/className=("[^"]*"|\{[^}]*\})/g, '').replace(/^\/\*\*[\s\S]*?\*\//m, '').replace(/\/\/.*$/gm, '')), 'no number is typed into the component');
});

test('GradeExplorer topicsPerSubject makes it lighter and keeps every subject linked, with a link to the rest', () => {
  const light = renderToStaticMarkup(createElement(GradeExplorer, { topicsPerSubject: 4 }));
  assert.ok(light.length < explorer.length * 0.6, `${light.length} vs ${explorer.length}`);
  const lightHrefs = [...light.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(lightHrefs.filter((h) => h.split('/').length === 4).length <= 4 * SEO_GRADES.reduce((n, g) => n + g.subjects.length, 0), true);
  for (const g of SEO_GRADES) for (const sub of g.subjects) assert.ok(lightHrefs.includes(subjectPath(g, sub)), subjectPath(g, sub));
  assert.match(light, />All \d+ topics</);
  assert.ok(!/>All \d+ topics</.test(renderToStaticMarkup(createElement(GradeExplorer, { topicsPerSubject: 100000 }))), 'no "All N topics" link when everything is shown');
  assert.ok(renderToStaticMarkup(createElement(GradeExplorer, { defaultGrade: 9 })).includes('id="ge-g9"'));
  assert.equal([...renderToStaticMarkup(createElement(GradeExplorer, { defaultGrade: 99 })).matchAll(/<input[^>]*checked/g)].length, 1, 'an unknown default falls back to the first grade');
});
