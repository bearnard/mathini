import test from 'node:test';
import assert from 'node:assert/strict';
import { SCHEMATIC, demandKind, ped, percentChange, totalRevenue } from './elasticity';

const { p1, p2, q1, elasticQ2, inelasticQ2 } = SCHEMATIC;

test('percentage changes: price +20%, elastic quantity -40%, inelastic quantity -10%', () => {
  assert.equal(percentChange(p1, p2), 20);
  assert.equal(percentChange(q1, elasticQ2), -40);
  assert.equal(percentChange(q1, inelasticQ2), -10);
});

test('PED is negative: -2 for the elastic curve and -0.5 for the inelastic curve', () => {
  assert.equal(ped(p1, q1, p2, elasticQ2), -2);
  assert.equal(ped(p1, q1, p2, inelasticQ2), -0.5);
});

test('classification uses the size of PED', () => {
  assert.equal(demandKind(-2), 'elastic');
  assert.equal(demandKind(-0.5), 'inelastic');
  assert.equal(demandKind(-1), 'unit elastic');
  assert.equal(demandKind(0), 'perfectly inelastic');
});

test('total revenue falls when elastic demand meets a price rise and rises when inelastic', () => {
  assert.equal(totalRevenue(p1, q1), 1000);
  assert.equal(totalRevenue(p2, elasticQ2), 720);
  assert.equal(totalRevenue(p2, inelasticQ2), 1080);
});
