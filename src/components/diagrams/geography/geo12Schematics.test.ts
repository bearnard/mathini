import test from 'node:test';
import assert from 'node:assert/strict';
import { checkSchematic } from '../schematic';
import { ECONOMIC_SECTORS, HIERARCHY, SECTORS, SETTLEMENT_HIERARCHY } from './geo12Schematics';

test('settlement hierarchy: five levels in the lesson order, each narrower than the one below, all centred, the note beside the top', () => {
  assert.deepEqual(checkSchematic(SETTLEMENT_HIERARCHY), []);
  const tiers = HIERARCHY.map((id) => SETTLEMENT_HIERARCHY.boxes.find((b) => b.id === id)!);
  assert.deepEqual(tiers.map((b) => b.lines?.[0]), ['hamlet', 'village', 'town', 'city', 'metropolitan']);
  for (let i = 1; i < tiers.length; i++) {
    assert.ok(tiers[i].w < tiers[i - 1].w, `${tiers[i].id} must be narrower than ${tiers[i - 1].id}`);
    assert.ok(tiers[i].y < tiers[i - 1].y, `${tiers[i].id} must sit above ${tiers[i - 1].id}`);
  }
  const centres = tiers.map((b) => b.x + b.w / 2);
  assert.ok(centres.every((c) => Math.abs(c - centres[0]) < 0.01));
  const note = SETTLEMENT_HIERARCHY.boxes.find((b) => b.id === 'note')!;
  assert.ok(note.x >= Math.max(...tiers.map((b) => b.x + b.w)), 'the note sits beside the pyramid, not on it');
  assert.match(note.lines!.join(' '), /more services/);
});

test('economic sectors: primary, secondary, tertiary, quaternary in order, each an example from that sector, each step leading to the next', () => {
  assert.deepEqual(checkSchematic(ECONOMIC_SECTORS), []);
  assert.deepEqual(SECTORS.map((s) => s.id), ['primary', 'secondary', 'tertiary', 'quaternary']);
  const eg = Object.fromEntries(SECTORS.map((s) => [s.id, s.text]));
  assert.match(eg.primary, /farming|mining/);
  assert.match(eg.secondary, /manufacturing/);
  assert.match(eg.tertiary, /shops|transport/);
  assert.match(eg.quaternary, /research|IT/);
  assert.deepEqual(ECONOMIC_SECTORS.arrows.map((a) => `${a.from}>${a.to}`), ['primary>secondary', 'secondary>tertiary', 'tertiary>quaternary']);
  const ys = ECONOMIC_SECTORS.boxes.map((b) => b.y);
  assert.deepEqual([...ys].sort((a, b) => a - b), ys, 'the sectors run top to bottom in order');
});
