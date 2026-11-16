import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { DashboardGrid, DashboardPage, EmptyState, GridItem, PageHeader, SectionCard, SkeletonCard, SkeletonTiles, SortableTable, StatTileRow, nextSort, plural, pctText, signedText, sortRows } from './index';

const html = (n: Parameters<typeof renderToStaticMarkup>[0]) => renderToStaticMarkup(n);

test('sortRows: numbers by value, text the South African way, empty values last in both directions, ties keep their order', () => {
  const rows = [{ n: 'Zanele', v: 70 }, { n: 'amy', v: null }, { n: 'Ben', v: 9 }, { n: 'Chloe', v: 70 }, { n: 'élan', v: undefined }];
  assert.deepEqual(sortRows(rows, (r) => r.v, 'asc').map((r) => r.n), ['Ben', 'Zanele', 'Chloe', 'amy', 'élan']);
  assert.deepEqual(sortRows(rows, (r) => r.v, 'desc').map((r) => r.n), ['Zanele', 'Chloe', 'Ben', 'amy', 'élan']);
  assert.deepEqual(sortRows(rows, (r) => r.n, 'asc').map((r) => r.n), ['amy', 'Ben', 'Chloe', 'élan', 'Zanele']);
  assert.deepEqual(sortRows([{ s: 'Learner 10' }, { s: 'Learner 9' }, { s: 'Learner 2' }], (r) => r.s, 'asc').map((r) => r.s), ['Learner 2', 'Learner 9', 'Learner 10'], 'numbers inside text sort as numbers');
  const input = [{ v: 2 }, { v: 1 }];
  sortRows(input, (r) => r.v, 'asc');
  assert.deepEqual(input, [{ v: 2 }, { v: 1 }], 'the input is not changed');
});

test('nextSort: a new column starts ascending, the same column flips', () => {
  assert.deepEqual(nextSort(null, 'a'), { key: 'a', dir: 'asc' });
  assert.deepEqual(nextSort({ key: 'a', dir: 'asc' }, 'a'), { key: 'a', dir: 'desc' });
  assert.deepEqual(nextSort({ key: 'a', dir: 'desc' }, 'a'), { key: 'a', dir: 'asc' });
  assert.deepEqual(nextSort({ key: 'a', dir: 'desc' }, 'b'), { key: 'b', dir: 'asc' });
});

test('number text: decimal comma, a real minus sign, "Not yet" and the dash for no data, singular and plural', () => {
  assert.equal(pctText(68.5), '68,5%');
  assert.equal(pctText(null), 'Not yet');
  assert.equal(signedText(3.5, ' points'), '+3,5 points');
  assert.equal(signedText(-2), '−2');
  assert.equal(signedText(0), '0');
  assert.equal(signedText(null), '–');
  assert.equal(plural(1, 'learner'), '1 learner');
  assert.equal(plural(24, 'learner'), '24 learners');
});

test('layout: one column on a phone, two from md, three from xl, at most 1200 px wide; wide items span; items may shrink', () => {
  const page = html(h(DashboardPage, null, h(DashboardGrid, null, h(GridItem, { span: 'full' as const }, 'a'), h(GridItem, { span: 'wide' as const }, 'b'), h(GridItem, null, 'c'))));
  assert.match(page, /<main class="mx-auto w-full max-w-\[1200px\]/);
  assert.match(page, /grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3/);
  assert.match(page, /min-w-0 md:col-span-2 xl:col-span-3/);
  assert.match(page, /min-w-0 md:col-span-2 "/);
});

test('page header: title is the one h1; subtitle, eyebrow and actions are optional and the actions wrap under the title on a phone', () => {
  const full = html(h(PageHeader, { title: '6B Natural Sciences', subtitle: 'Grade 6', eyebrow: 'PrepPals', actions: h('button', null, 'Copy') }));
  assert.equal((full.match(/<h1/g) ?? []).length, 1);
  assert.match(full, /flex-col gap-3 sm:flex-row sm:items-start sm:justify-between/);
  assert.match(full, /Copy/);
  const bare = html(h(PageHeader, { title: 'Only a title' }));
  assert.ok(!/<p /.test(bare));
});

test('stat tiles: a description list, two across on a phone and four from md, with arrows AND words for a change (never colour alone), decimal comma', () => {
  const row = html(h(StatTileRow, { tiles: [
    { label: 'Learners', value: '24' },
    { label: 'Average mastery', value: pctText(68.5), change: 4.5, changeNote: 'since 1 Oct' },
    { label: 'Active this week', value: '19', note: 'of 24 learners', change: -2 },
    { label: 'Exam', value: '12 days', change: 0 },
  ] }));
  assert.match(row, /<dl aria-label="Key numbers" class="grid grid-cols-2 gap-3 md:grid-cols-4"/);
  assert.match(row, /68,5%/);
  assert.match(row, /up 4,5 points/);
  assert.match(row, /down 2 points/);
  assert.match(row, /no change/);
  assert.match(row, /since 1 Oct/);
  assert.match(row, /aria-hidden="true">↑ /);
  assert.match(html(h(StatTileRow, { tiles: [{ label: 'a', value: '1' }, { label: 'b', value: '2' }, { label: 'c', value: '3' }] })), /md:grid-cols-3/);
  assert.ok(!/text-red/.test(row), 'a fall is never red');
});

test('section card: a labelled region with an h2, optional subtitle and actions', () => {
  const s = html(h(SectionCard, { id: 'heatmap', title: 'Topics', subtitle: 'Weakest first', actions: h('a', null, 'More') }, 'body'));
  assert.match(s, /<section id="heatmap" aria-labelledby="heatmap-h"/);
  assert.match(s, /<h2 id="heatmap-h"/);
  assert.match(s, /Weakest first/);
  assert.match(s, /More/);
});

type Row = { name: string; avg: number | null };
const RowTable = SortableTable<Row>;
const cols = [
  { key: 'name', label: 'Nickname', sortValue: (r: { name: string; avg: number | null }) => r.name },
  { key: 'avg', label: 'Average', align: 'right' as const, sortValue: (r: { name: string; avg: number | null }) => r.avg, render: (r: { name: string; avg: number | null }) => pctText(r.avg) },
  { key: 'plain', label: 'Note' },
];
const data = [{ name: 'Thandi', avg: 71.5 }, { name: 'Ben', avg: 40 }, { name: 'Amy', avg: null }];

test('sortable table: caption for screen readers, scoped headers, aria-sort, header buttons only on sortable columns, default sort applied, no-data last', () => {
  const t = html(h(RowTable, { columns: cols, rows: data, rowKey: (r: Row) => r.name, caption: 'Learners in the class', defaultSort: { key: 'avg', dir: 'desc' } }));
  assert.match(t, /<caption class="sr-only">Learners in the class<\/caption>/);
  assert.equal((t.match(/scope="col"/g) ?? []).length, 3);
  assert.match(t, /aria-sort="descending"/);
  assert.match(t, /aria-sort="none"/);
  assert.equal((t.match(/<button type="button"/g) ?? []).length, 2, 'two sortable columns, one plain');
  assert.ok(t.indexOf('Thandi') < t.indexOf('Ben') && t.indexOf('Ben') < t.indexOf('Amy'));
  assert.match(t, /71,5%/);
  assert.match(t, /Not yet/);
  assert.match(t, /overflow-x-auto/, 'a phone scrolls the table inside its box');
});

test('sortable table: no rows shows the empty state, not an empty table', () => {
  const t = html(h(RowTable, { columns: cols, rows: [], rowKey: () => 'x', caption: 'c', empty: h(EmptyState, { title: 'No learners yet' }, 'Share the code.') }));
  assert.match(t, /No learners yet/);
  assert.ok(!/<table/.test(t));
  assert.match(html(h(RowTable, { columns: cols, rows: [], rowKey: () => 'x', caption: 'c' })), /Nothing to show yet/);
});

test('empty state and skeletons: announced politely, calm, motion-safe', () => {
  const e = html(h(EmptyState, { title: 'No practice test yet', action: h('a', null, 'Set an exam') }, 'Scores appear here after the first test.'));
  assert.match(e, /role="status"/);
  assert.match(e, /Scores appear here/);
  assert.match(e, /Set an exam/);
  for (const s of [html(h(SkeletonTiles)), html(h(SkeletonCard))]) {
    assert.match(s, /aria-busy="true"/);
    assert.match(s, /motion-reduce:animate-none/);
  }
  assert.equal((html(h(SkeletonTiles, { count: 3 })).match(/rounded-2xl/g) ?? []).length, 3);
});

test('the kit stays plain: only SortableTable and its ScrollBox are client components, and nothing imports server, learner or admin code', () => {
  const dir = path.join(process.cwd(), 'src/components/dashboard');
  for (const f of fs.readdirSync(dir).filter((x) => /\.tsx?$/.test(x) && !/\.test\./.test(x))) {
    const src = fs.readFileSync(path.join(dir, f), 'utf8');
    assert.equal(/^'use client'/.test(src), f === 'SortableTable.tsx' || f === 'ScrollBox.tsx', `${f}: use client`);
    assert.ok(!/from '[^']*(lib\/server|lib\/client|components\/admin|StudentContext)[^']*'/.test(src), `${f} imports app code it should not`);
  }
});
