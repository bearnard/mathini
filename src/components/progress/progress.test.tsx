import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderToStaticMarkup } from 'react-dom/server';
import ProgressView from './ProgressView';
import { MOCK_PROGRESS, MOCK_PROGRESS_NEW } from '../../lib/shared/progressMock';
import { MASTERY_LEVELS, type ProgressResponse } from '../../lib/shared/progressTypes';
import { LEVEL_TEXT, changeText, changeTone, numText, pctText, remembered, shortDate } from './format';
import { SPARK, sparkPoints } from './sparkline';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const text = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ');

test('format: decimal comma, arrows and gentle words; first try and zero are neutral', () => {
  assert.equal(pctText(72), '72%');
  assert.equal(pctText(72.5), '72,5%');
  assert.equal(pctText(0.1 + 0.2), '0,3%');
  assert.equal(pctText(null), 'Not yet');
  assert.equal(numText(3.5), '3,5');
  assert.equal(changeText(5), '↑ 5 since last time');
  assert.equal(changeText(-5), '↓ 5 since last time');
  assert.equal(changeText(2.5), '↑ 2,5 since last time');
  assert.equal(changeText(-2.5), '↓ 2,5 since last time');
  assert.equal(changeText(0), 'Same as last time');
  assert.equal(changeText(null), 'First try');
  assert.deepEqual([5, -5, 0, null].map(changeTone), ['up', 'down', 'flat', 'flat']);
  assert.equal(remembered(34, 40), 'You remembered 34 of 40 review cards this week');
  assert.equal(shortDate('2026-11-12T10:30:00.000Z'), '12 Nov');
  assert.deepEqual(MASTERY_LEVELS.map((l) => LEVEL_TEXT[l]), ['Not started', 'Learning', 'Getting there', 'Mastered']);
});

test('sparkline: a rising line rises, a falling line falls, a small wobble stays small, one point still draws', () => {
  const pts = (s: string) => s.split(' ').map((p) => p.split(',').map(Number));
  const up = pts(sparkPoints([30, 35, 38, 42]));
  assert.ok(up[0][1] > up[3][1], 'higher values are higher on screen (smaller y)');
  assert.ok(up.every((p, i) => i === 0 || p[0] > up[i - 1][0]), 'left to right');
  const down = pts(sparkPoints([70, 66, 61]));
  assert.ok(down[0][1] < down[2][1]);
  const wobble = pts(sparkPoints([60, 61]));
  assert.ok(Math.abs(wobble[0][1] - wobble[1][1]) < (SPARK.h - 2 * SPARK.pad) / 4, 'one point of change is not drawn as a cliff');
  assert.equal(pts(sparkPoints([50])).length, 2);
  assert.equal(pts(sparkPoints([10, 20, 30, 40, 50, 60])).length, 6);
  assert.ok(pts(sparkPoints([0, 100, 50])).flat().every((n) => n >= 0 && n <= SPARK.w));
});

test('the mock has the shape the page expects: valid levels, at most 6 trend points, percentages 0 to 100, tests newest first', () => {
  const pct = (n: number | null) => n === null || (n >= 0 && n <= 100);
  for (const s of MOCK_PROGRESS.subjects) {
    assert.ok(MASTERY_LEVELS.includes(s.level) && pct(s.masteryPct));
    for (const t of s.topics) {
      assert.ok(MASTERY_LEVELS.includes(t.level) && pct(t.accuracyPct) && t.trend.length <= 6 && t.trend.every((v) => pct(v)));
      assert.match(t.practiseHref, /^\//);
    }
  }
  const times = MOCK_PROGRESS.tests.map((t) => Date.parse(t.finishedAt));
  assert.deepEqual([...times].sort((x, y) => y - x), times);
  assert.ok(pct(MOCK_PROGRESS.exam!.readinessPct) && pct(MOCK_PROGRESS.retention.weekPct));
});

test('the page shows every number the API sent, with the decimal comma, and the next best step first', () => {
  const html = renderToStaticMarkup(<ProgressView data={MOCK_PROGRESS} />);
  const t = text(html);
  const d = MOCK_PROGRESS;
  for (const must of ['68,5%', '64%', '6 of 8', '72% on 12 Nov', '42,5%', '↑ 12,5 since last time', '↑ 8 since last time', '↓ 5 since last time', 'You remembered 34 of 40 review cards this week', '12 cards remembered for good', '5 cards ready for you', '9 of the last 14 days', 'streak: 3 days', 'Do your 5 review cards']) assert.ok(t.includes(must), `missing "${must}"`);
  assert.ok(t.indexOf('Your next best step') < t.indexOf('Exam readiness') && t.indexOf('Exam readiness') < t.indexOf('Test history'));
  assert.ok(!/\d\.\d/.test(t.replace(/\d{4}-\d{2}-\d{2}/g, '')), 'a decimal point leaked into the text');
  // topics in the order the server sent them, "Practise this" on every one, and bar fills straight from the data
  const order = d.subjects[0].topics.map((x) => x.label).map((l) => t.indexOf(l));
  assert.deepEqual([...order].sort((a, b) => a - b), order);
  assert.equal((html.match(/Practise this/g) ?? []).length, d.subjects.reduce((n, s) => n + s.topics.length, 0));
  assert.ok(html.includes('style="width:68.5%"'));
  for (const topic of d.subjects[0].topics) assert.ok(html.includes(`href="${topic.practiseHref}"`));
});

test('the tone: encouraging words, nothing that compares with other learners or shames', () => {
  for (const data of [MOCK_PROGRESS, MOCK_PROGRESS_NEW]) {
    const t = text(renderToStaticMarkup(<ProgressView data={data} />)).toLowerCase();
    for (const bad of ['rank', 'leaderboard', 'other learners', 'classmates', 'compared with', 'behind', 'fail', 'poor', 'worst', 'bad ', 'lazy', 'top of the class']) assert.ok(!t.includes(bad), `"${bad}" on the page`);
    assert.ok(t.includes('every try counts'));
  }
});

test('a new learner sees friendly empty states, never a blank or a broken card', () => {
  const t = text(renderToStaticMarkup(<ProgressView data={MOCK_PROGRESS_NEW} />));
  for (const must of ['Practise a few topics and your exam readiness will show up here', 'Your subjects and topics will appear here', 'it will be listed here', 'Review cards help you remember', 'Try your first topic', 'Choose a topic']) assert.ok(t.includes(must), `missing "${must}"`);
  assert.ok(!t.includes('NaN') && !t.includes('undefined') && !t.includes('null'));
});

test('a next step with nothing to do shows no button', () => {
  const data: ProgressResponse = { ...MOCK_PROGRESS, nextStep: { kind: 'all_caught_up', title: 'You are all caught up', reason: 'Lovely work today.', href: null, cta: '' } };
  const html = renderToStaticMarkup(<ProgressView data={data} />);
  assert.ok(text(html).includes('You are all caught up'));
  assert.ok(!html.includes('Start review'));
});

test('charts: at most 6 labels (5 test dates and the series name), line chart of the repeated test', () => {
  const many: ProgressResponse = {
    ...MOCK_PROGRESS,
    testSeries: [{ scopeKey: 'k', scopeLabel: 'Seven tries', points: Array.from({ length: 7 }, (_, i) => ({ finishedAt: `2026-11-${String(i + 1).padStart(2, '0')}T09:00:00.000Z`, scorePct: 40 + i })) }],
  };
  const t = text(renderToStaticMarkup(<ProgressView data={many} />));
  assert.ok(t.includes('Seven tries'));
  const src = fs.readFileSync(path.join(__dirname, 'ProgressView.tsx'), 'utf8');
  assert.match(src, /points\.slice\(-5\)/);
});

test('the UI computes nothing: no arithmetic, sorting or aggregation in the view or the page loader', () => {
  const forbidden = /\.(sort|reduce|filter|toFixed)\(|Math\.|\bavg\b|\bmean\b|\bsum\(/;
  for (const f of ['ProgressView.tsx', 'ProgressPage.tsx', 'format.ts']) {
    const src = fs.readFileSync(path.join(__dirname, f), 'utf8').replace(/\/\/.*$/gm, '');
    assert.equal(forbidden.test(src), false, `${f} does arithmetic or aggregation`);
  }
  // the only division/multiplication allowed in the page folder is the sparkline's drawing geometry
  for (const f of ['ProgressView.tsx', 'ProgressPage.tsx', 'format.ts']) {
    const src = fs.readFileSync(path.join(__dirname, f), 'utf8').replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
    assert.equal(/[\w)\]]\s*[*/]\s*[\w(]/.test(src.replace(/<\/?[A-Za-z][^>]*>/g, '').replace(/'[^']*'|"[^"]*"|`[^`]*`/g, '')), false, `${f} multiplies or divides`);
  }
});

test('the page route is not indexed and fetches /api/progress without caching', () => {
  const route = fs.readFileSync(path.join(__dirname, '../../app/progress/page.tsx'), 'utf8');
  assert.match(route, /index: false/);
  assert.match(fs.readFileSync(path.join(__dirname, 'ProgressPage.tsx'), 'utf8'), /fetch\('\/api\/progress', \{ cache: 'no-store' \}\)/);
});
