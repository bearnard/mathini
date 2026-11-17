import test from 'node:test';
import assert from 'node:assert/strict';
import { afterRubbing, force, chargeAfter, COMPONENTS, bulbLights, totalCurrentChange, brightnessEach, pathways, othersStayLit, SPECTRUM, highestFrequency, lowestFrequency, lightTravelSeconds, minutesAndSeconds, reflectionAngle, angleToSurface, refractionBend, looksColour, passesLight, SUN_EARTH_KM, SPEED_OF_LIGHT_KM_PER_S } from './ns8bHelpers';

test('static electricity', () => {
  assert.deepEqual(afterRubbing('wool', 'plastic'), { wool: 'positive', plastic: 'negative' });
  assert.equal(force('positive', 'positive'), 'repel');
  assert.equal(force('negative', 'negative'), 'repel');
  assert.equal(force('positive', 'negative'), 'attract');
  assert.equal(force('neutral', 'negative'), 'none');
  assert.equal(chargeAfter(8, 9), 'negative');
  assert.equal(chargeAfter(8, 7), 'positive');
  assert.equal(chargeAfter(8, 8), 'neutral');
});

test('circuits: a bulb lights only in a closed circuit with a cell', () => {
  assert.equal(COMPONENTS.length, 5);
  assert.ok(bulbLights(true, true, true));
  assert.ok(!bulbLights(true, false, true));
  assert.ok(!bulbLights(true, true, false));
  assert.ok(!bulbLights(false, true, true));
});

test('series and parallel behave as the CAPS says (qualitatively)', () => {
  assert.equal(totalCurrentChange('series', 1, 2), 'decreases');
  assert.equal(totalCurrentChange('series', 3, 2), 'increases');
  assert.equal(totalCurrentChange('parallel', 1, 3), 'increases');
  assert.equal(totalCurrentChange('parallel', 3, 1), 'decreases');
  assert.equal(totalCurrentChange('parallel', 2, 2), 'stays the same');
  assert.equal(brightnessEach('series', 3), 'dimmer than one bulb');
  assert.equal(brightnessEach('parallel', 3), 'as bright as one bulb');
  assert.equal(pathways('series', 4), 1);
  assert.equal(pathways('parallel', 4), 4);
  assert.ok(othersStayLit('parallel') && !othersStayLit('series'));
});

test('light: spectrum, speed and angles (plain arithmetic)', () => {
  assert.equal(SPECTRUM.length, 7);
  assert.equal(highestFrequency(), 'violet');
  assert.equal(lowestFrequency(), 'red');
  assert.equal(lightTravelSeconds(SUN_EARTH_KM), 150000000 / 300000);
  assert.equal(lightTravelSeconds(SUN_EARTH_KM), 500);
  assert.equal(minutesAndSeconds(500), '8 min 20 s');
  assert.equal(SPEED_OF_LIGHT_KM_PER_S * 500, SUN_EARTH_KM);
  assert.equal(lightTravelSeconds(300000), 1);
  assert.equal(reflectionAngle(35), 35);
  assert.equal(angleToSurface(30), 60);
  assert.equal(refractionBend(true), 'towards the normal');
  assert.equal(refractionBend(false), 'away from the normal');
  assert.equal(looksColour([]), 'black');
  assert.equal(looksColour(['red']), 'red');
  assert.equal(looksColour([...SPECTRUM]), 'white');
  assert.match(passesLight('opaque'), /shadow/);
});
