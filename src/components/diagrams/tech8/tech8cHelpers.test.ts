import test from 'node:test';
import assert from 'node:assert/strict';
import { velocityRatio, gearMA, outputSpeed, outputForce, maFromDiameters, tradeOff, effectOf, directionOfGear, trainRatio, designMA3, designSpeed4, wheelTurnsPerPedalTurn, bicycleGear, BICYCLE_TERMS, whereMined, MINERALS, SYSTEM_PARTS, BEVEL_TURN } from './tech8cHelpers';

test('gear ratios (plain arithmetic)', () => {
  assert.equal(gearMA(10, 30), 3);
  assert.equal(velocityRatio(10, 30), 0.333);
  assert.equal(outputSpeed(120, 10, 30), 40);
  assert.equal(outputForce(20, 10, 30), 60);
  assert.equal(maFromDiameters(20, 80), 4);
  assert.equal(gearMA(40, 10), 0.25);
  assert.equal(velocityRatio(40, 10), 4);
  assert.equal(outputSpeed(100, 40, 10), 400);
  assert.equal(tradeOff(10, 30), 1);
  assert.equal(tradeOff(40, 10), 1);
  assert.equal(effectOf(10, 30), 'force increases and speed decreases');
  assert.equal(effectOf(40, 10), 'speed increases and force decreases');
  assert.equal(effectOf(20, 20), 'no change in force or speed');
  assert.equal(BEVEL_TURN, 90);
});

test('idlers and directions', () => {
  assert.equal(directionOfGear(1), 'same as the driver');
  assert.equal(directionOfGear(2), 'opposite to the driver');
  assert.equal(directionOfGear(3), 'same as the driver');
  // an idler between the driver and the driven gear does not change the ratio
  assert.equal(trainRatio(10, 30, 20), gearMA(10, 30));
  assert.equal(trainRatio(10, 30, 50), gearMA(10, 30));
  assert.equal(designMA3.driven / designMA3.driver, 3);
  assert.equal(designSpeed4.driver / designSpeed4.driven, 4);
});

test('bicycle gears, systems diagrams and mining', () => {
  assert.equal(wheelTurnsPerPedalTurn(48, 12), 4);
  assert.equal(wheelTurnsPerPedalTurn(32, 16), 2);
  assert.equal(bicycleGear(48, 12), 'high gear (speed)');
  assert.equal(bicycleGear(28, 28), 'equal');
  assert.equal(bicycleGear(28, 32), 'low gear (force, for hills)');
  assert.equal(BICYCLE_TERMS.length, 4);
  assert.deepEqual([...SYSTEM_PARTS], ['input', 'process', 'output']);
  assert.equal(MINERALS.length, 4);
  assert.equal(whereMined('coal'), 'Mpumalanga and KwaZulu-Natal');
});
