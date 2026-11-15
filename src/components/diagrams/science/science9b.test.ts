import test from 'node:test';
import assert from 'node:assert/strict';
import { EARTH_RADIUS_KM, LAYERS, SUN_DISTANCE_KM, heatChange, lightSeconds, lightYearKm, minutesAndSeconds, reactionKind, sunFractionOfMainSequence, thickestLayer, thickness } from './science9bHelpers';

test('products with less energy: exothermic and heat released; more energy: endothermic and heat absorbed', () => {
  assert.equal(reactionKind(100, 40), 'exothermic');
  assert.equal(heatChange(100, 40), 60);
  assert.equal(reactionKind(40, 100), 'endothermic');
  assert.equal(heatChange(40, 100), -60);
  assert.equal(reactionKind(50, 50), 'no heat change');
});

test('the layers run without gaps from the surface to the centre, and end at the Earth radius', () => {
  assert.equal(LAYERS[0].from, 0);
  for (let i = 1; i < LAYERS.length; i++) assert.equal(LAYERS[i].from, LAYERS[i - 1].to);
  assert.equal(LAYERS[LAYERS.length - 1].to, EARTH_RADIUS_KM);
});

test('the mantle is the thickest layer, the crust the thinnest', () => {
  assert.equal(thickestLayer(), 'mantle');
  assert.ok(thickness('crust') < thickness('inner core') && thickness('crust') < thickness('outer core'));
  assert.equal(thickness('mantle'), 2855);
});

test('light takes about 8 minutes to reach us from the Sun', () => {
  const s = lightSeconds(SUN_DISTANCE_KM);
  assert.ok(Math.abs(s - 499) < 1);
  assert.deepEqual(minutesAndSeconds(s), { m: 8, s: 19 });
});

test('a light year is about 9,5 trillion km', () => {
  const ly = lightYearKm();
  assert.ok(ly > 9.4e12 && ly < 9.5e12, `${ly}`);
});

test('the Sun is a bit under halfway through its main sequence', () => {
  assert.equal(sunFractionOfMainSequence(), 0.46);
});
