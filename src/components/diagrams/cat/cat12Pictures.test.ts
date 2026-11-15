import test from 'node:test';
import assert from 'node:assert/strict';
import { checkSchematic } from '../schematic';
import { HTML_TREE, LAN_WAN, NESTED_IF, TABLE, TABLE_DESC, TABLE_LABELS, TOOL_CHOICE } from './cat12Pictures';
import { textWidth } from '../schematic';

test('table picture: 4 labels, the record row, field column and bad cell are all real cells, and labels fit the frame', () => {
  assert.equal(TABLE_LABELS.length, 4);
  assert.ok(TABLE.recordRow >= 0 && TABLE.recordRow < TABLE.rows);
  assert.ok(TABLE.fieldCol >= 0 && TABLE.fieldCol < TABLE.cols.length);
  assert.ok(TABLE.badCell.row < TABLE.rows && TABLE.badCell.col < TABLE.cols.length);
  const x1 = TABLE.cols[TABLE.cols.length - 1] + TABLE.colW;
  for (const t of TABLE_LABELS.slice(0, 3)) assert.ok(x1 + 8 + textWidth(t) <= TABLE.width, `${t} leaves the frame`);
  // the header row is above the first record, and columns do not overlap
  assert.ok(TABLE.headerY + TABLE.rowH < TABLE.rowY(0));
  for (let i = 1; i < TABLE.cols.length; i++) assert.ok(TABLE.cols[i] >= TABLE.cols[i - 1] + TABLE.colW);
  assert.match(TABLE_DESC, /schematic/);
});

test('HTML tree: html holds head and body; head holds title; body holds the content; each element has one parent', () => {
  assert.deepEqual(checkSchematic(HTML_TREE), []);
  const kids = (p: string) => HTML_TREE.arrows.filter((a) => a.from === p).map((a) => a.to);
  assert.deepEqual(kids('html'), ['head', 'body']);
  assert.deepEqual(kids('head'), ['title']);
  assert.deepEqual(kids('body'), ['h1', 'p']);
  for (const b of HTML_TREE.boxes) if (b.id !== 'html') assert.equal(HTML_TREE.arrows.filter((a) => a.to === b.id).length, 1, `${b.id} needs exactly one parent`);
  // title sits in the head, not the body: it is drawn on the head's side
  const x = (id: string) => HTML_TREE.boxes.find((b) => b.id === id)!.x;
  assert.ok(x('title') < x('body') && x('head') < x('body'));
});

test('LAN and WAN: devices join a switch inside the LAN; the router is outside it and is the only way to the WAN', () => {
  assert.deepEqual(checkSchematic(LAN_WAN), []);
  const into = (id: string) => LAN_WAN.arrows.filter((a) => a.to === id).map((a) => a.from);
  assert.deepEqual(into('switch'), ['pc', 'print']);
  assert.deepEqual(into('router'), ['switch']);
  assert.deepEqual(into('wan'), ['router']);
  const zone = LAN_WAN.zones![0];
  const inside = (id: string) => { const b = LAN_WAN.boxes.find((x) => x.id === id)!; return b.x >= zone.x && b.x + b.w <= zone.x + zone.w; };
  assert.deepEqual(['pc', 'print', 'switch'].map(inside), [true, true, true]);
  assert.deepEqual(['router', 'wan'].map(inside), [false, false]);
  // nothing in the LAN is joined to the WAN except through the router
  assert.equal(LAN_WAN.arrows.some((a) => (a.from === 'wan' || a.to === 'wan') && a.from !== 'router' && a.to !== 'router'), false);
  assert.ok(LAN_WAN.labels.some((l) => l.text === 'LAN'));
});

test('nested IF: two tests, three results; TRUE gives that test\'s result, FALSE moves on; every result has exactly one way in', () => {
  assert.deepEqual(checkSchematic(NESTED_IF), []);
  const truth = (from: string) => NESTED_IF.arrows.find((a) => a.from === from && !a.dashed)?.to;
  const falsy = (from: string) => NESTED_IF.arrows.find((a) => a.from === from && a.dashed)?.to;
  assert.equal(truth('t1'), 'r1');
  assert.equal(falsy('t1'), 't2');
  assert.equal(truth('t2'), 'r2');
  assert.equal(falsy('t2'), 'r3');
  // results are the leaves: nothing leaves them, and each is reached by exactly one arrow
  for (const r of ['r1', 'r2', 'r3']) {
    assert.equal(NESTED_IF.arrows.filter((a) => a.from === r).length, 0);
    assert.equal(NESTED_IF.arrows.filter((a) => a.to === r).length, 1);
  }
  const tests = NESTED_IF.boxes.filter((b) => b.id.startsWith('t')).length;
  assert.equal(NESTED_IF.boxes.length - tests, tests + 1, 'a nested IF with n tests has n + 1 results');
  // the first test is the top-left box: it is checked first
  assert.deepEqual(NESTED_IF.boxes.filter((b) => b.id.startsWith('t')).sort((a, b) => a.y - b.y).map((b) => b.id), ['t1', 't2']);
});

test('tool choice: each of the three applications points to its own job, one to one', () => {
  assert.deepEqual(checkSchematic(TOOL_CHOICE), []);
  const label = (id: string) => TOOL_CHOICE.boxes.find((b) => b.id === id)!.lines![0];
  const pairs = TOOL_CHOICE.arrows.map((a) => `${label(a.from)} > ${label(a.to)}`);
  assert.deepEqual(pairs, ['spreadsheet > calculations', 'database > structured records', 'word processor > polished findings']);
  assert.equal(new Set(TOOL_CHOICE.arrows.map((a) => a.to)).size, 3);
  assert.equal(new Set(TOOL_CHOICE.arrows.map((a) => a.from)).size, 3);
});
