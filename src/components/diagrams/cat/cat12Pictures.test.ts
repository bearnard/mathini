import test from 'node:test';
import assert from 'node:assert/strict';
import { checkSchematic } from '../schematic';
import { HTML_TREE, LAN_WAN, TABLE, TABLE_DESC, TABLE_LABELS } from './cat12Pictures';
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

test('LAN and WAN: devices join a switch, the switch joins a router, the router joins the WAN', () => {
  assert.deepEqual(checkSchematic(LAN_WAN), []);
  const into = (id: string) => LAN_WAN.arrows.filter((a) => a.to === id).map((a) => a.from);
  assert.deepEqual(into('switch'), ['pc1', 'pc2', 'print']);
  assert.deepEqual(into('router'), ['switch']);
  assert.deepEqual(into('wan'), ['router']);
  // the WAN is the only thing past the router, so the LAN does not reach it except through the router
  assert.equal(LAN_WAN.arrows.filter((a) => a.to === 'wan' || a.from === 'wan').every((a) => a.from === 'router' || a.to === 'router'), true);
});
