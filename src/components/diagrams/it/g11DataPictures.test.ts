import test from 'node:test';
import assert from 'node:assert/strict';
import { checkSchematic, labelsOf } from '../schematic';
import { ADO_LINK, CUSTOMERS, KEYED, KEYED_DESC, KEYED_LABELS, ORDERS, VALIDATION, VALIDATION_ORDER, keyProblems } from './g11DataPictures';

test('primary keys are unique and every foreign key points at a real primary key', () => {
  assert.deepEqual(keyProblems(CUSTOMERS, ORDERS), []);
  assert.deepEqual(keyProblems([{ id: 1 }, { id: 1 }], []), ['a primary key value is repeated']);
  assert.deepEqual(keyProblems([{ id: 1 }], [{ customerId: 2 }]), ['a foreign key (2) matches no primary key']);
  // the picture shows many orders for one customer, which a foreign key allows and a primary key does not
  assert.ok(ORDERS.filter((o) => o.customerId === 1).length >= 2);
});

test('keyed tables: 4 labels, every row fits inside the frame, and the description says schematic', () => {
  assert.equal(KEYED_LABELS.length, 4);
  for (let i = 0; i < ORDERS.length; i++) assert.ok(KEYED.fk.rowY(i) + KEYED.fk.h < KEYED.height - 10);
  for (let i = 0; i < CUSTOMERS.length; i++) assert.ok(KEYED.pk.rowY(i) + KEYED.pk.h < KEYED.height - 10);
  assert.ok(KEYED.ordersData.x + KEYED.ordersData.w <= KEYED.width && KEYED.customersData.x + KEYED.customersData.w <= KEYED.pk.x);
  assert.match(KEYED_DESC, /schematic/);
});

test('ADO link: one connection serves two queries and holds the link to the database', () => {
  assert.deepEqual(checkSchematic(ADO_LINK), []);
  assert.deepEqual(ADO_LINK.arrows.filter((a) => a.to === 'conn').map((a) => a.from), ['q1', 'q2']);
  assert.equal(ADO_LINK.boxes.filter((b) => b.lines?.[0] === 'TADOConnection').length, 1);
  assert.ok(labelsOf(ADO_LINK).length <= 6);
});

test('validation: type is checked before range, any failure is rejected, only a pass is accepted', () => {
  assert.deepEqual(checkSchematic(VALIDATION), []);
  assert.deepEqual(VALIDATION_ORDER, ['presence', 'type', 'range']);
  const chain = VALIDATION.arrows.filter((a) => !a.dashed).map((a) => `${a.from}>${a.to}`);
  assert.deepEqual(chain, ['in>presence', 'presence>type', 'type>range', 'range>accepted']);
  const rejects = VALIDATION.arrows.filter((a) => a.to === 'rejected').map((a) => a.from);
  assert.deepEqual(rejects, [...VALIDATION_ORDER]);
  assert.equal(VALIDATION.arrows.filter((a) => a.to === 'accepted').length, 1);
});
