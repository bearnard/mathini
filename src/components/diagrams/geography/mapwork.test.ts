import test from 'node:test';
import assert from 'node:assert/strict';
import * as m from './mapwork';

test('scale, distance and area', () => {
  assert.equal(m.groundMetres(1, 50000), 500);
  assert.equal(m.groundMetres(7.2, 50000), 3600);
  assert.equal(m.groundMetres(4, 10000), 400);
  assert.equal(m.mapCmFor(2500, 50000), 5);
  assert.equal(m.scaleDenominator(4, 2000), 50000);
  assert.equal(m.scaleDenominator(5, 1000), 20000);
  assert.equal(m.routeCm([2.5, 3, 1.7]), 7.2);
  assert.equal(m.groundMetres(m.routeCm([2.5, 3, 1.7]), 50000), 3600);
  assert.equal(m.scaleRatio(10000, 50000), 5);
  assert.equal(m.gridSquareKm2(50000), 1);
  assert.equal(m.gridSquareKm2(50000, 4), 4);
  assert.equal(m.gridSquareKm2(10000), 0.04);
  assert.equal(m.areaKm2(3, 2), 6);
  assert.equal(m.hectares(6), 600);
  assert.equal(m.mapRectKm2(6, 4, 50000), 6);
  assert.equal(m.mapRectKm2(5, 3, 50000), 3.75);
  assert.equal(m.kmText(3600), '3,6 km');
  assert.equal(m.metresText(500), '500 m');
  assert.equal(m.metresText(2000), '2 km');
  // distance and scale round trip
  for (const d of [10000, 20000, 50000, 250000]) for (const cm of [1, 2.5, 8]) assert.equal(m.mapCmFor(m.groundMetres(cm, d), d), cm);
  // a bigger scale (smaller denominator) shows the same ground on more paper
  assert.ok(m.mapCmFor(1000, 10000) > m.mapCmFor(1000, 50000));
});

test('compass points, bearings and magnetic declination (west declination, as in South Africa)', () => {
  assert.equal(m.pointBearing('N'), 0);
  assert.equal(m.pointBearing('E'), 90);
  assert.equal(m.pointBearing('SW'), 225);
  assert.equal(m.pointBearing('NNW'), 337.5);
  assert.equal(m.nearestPoint(100), 'E');
  assert.equal(m.nearestPoint(350), 'N');
  assert.equal(m.nearestPoint(215), 'SW');
  assert.equal(m.bearingText(65), '065°');
  assert.equal(m.bearingText(5), '005°');
  assert.equal(m.backBearing(65), 245);
  assert.equal(m.backBearing(245), 65);
  assert.equal(m.backBearing(180), 0);
  assert.equal(m.bearingFromOffsets(1000, 1000), 45);
  assert.equal(m.bearingFromOffsets(1000, -1000), 135);
  assert.equal(m.bearingFromOffsets(-1000, -1000), 225);
  assert.equal(m.bearingFromOffsets(-1000, 1000), 315);
  assert.equal(m.bearingFromOffsets(0, 500), 0);
  assert.equal(m.bearingFromOffsets(500, 0), 90);
  assert.equal(m.magneticFromTrue(65, 19), 84);
  assert.equal(m.trueFromMagnetic(84, 19), 65);
  assert.equal(m.magneticFromTrue(350, 19), 9);
  assert.equal(m.magneticFromTrue(65, 19, 'E'), 46);
  for (const t of [0, 45, 90, 180, 270, 359]) for (const d of [10, 18.5, 25]) { assert.equal(m.trueFromMagnetic(m.magneticFromTrue(t, d), d), t); assert.equal(m.backBearing(m.backBearing(t)), t); }
  assert.equal(m.dm(22, 30), 22.5);
  assert.equal(m.toMinutes(22.5), 1350);
  assert.equal(m.dmText(22.5), "22°30'");
  assert.equal(m.dmText(23.7), "23°42'");
  assert.equal(m.declinationAfter(22.5, 6, 12), 23.7);
  assert.equal(m.dmText(m.declinationAfter(22.5, 6, 12)), "23°42'");
  assert.equal(m.dmText(m.declinationAfter(22.5, -6, 10)), "21°30'");
});

test('the current declination from the map base year, with the carry from 60 minutes', () => {
  assert.equal(m.dmText(m.declinationOnYear(m.dm(24, 10), 2006, 6, 2026)), "26°10'");
  assert.equal(m.dmText(m.declinationOnYear(m.dm(24, 50), 2006, 6, 2026)), "26°50'");
  assert.equal(m.dmText(m.declinationOnYear(m.dm(24, 50), 2016, 6, 2026)), "25°50'");
  assert.equal(m.dmText(m.declinationOnYear(m.dm(22, 40), 2015, 8, 2025)), "24°00'");
  assert.equal(m.dmText(m.declinationOnYear(m.dm(22, 50), 2010, 6, 2020)), "23°50'");
  assert.equal(m.dmText(m.declinationOnYear(m.dm(22, 55), 2010, 6, 2020)), "23°55'");
  assert.equal(m.dmText(m.declinationOnYear(m.dm(22, 58), 2010, 6, 2012)), "23°10'");
  // 90 degrees true plus 26°10' W is 116°10' magnetic
  assert.equal(m.dmText(m.addDeclination(90, m.dm(26, 10))), "116°10'");
  assert.equal(m.dmText(m.addDeclination(m.dm(65, 40), m.dm(19, 35))), "85°15'");
});

test('gradient, vertical exaggeration, cross-sections and intervisibility', () => {
  assert.equal(m.gradientRatio(100, 2500), 25);
  assert.equal(m.gradientRatio(50, 1000), 20);
  assert.equal(m.gradientPercent(100, 2500), 4);
  assert.equal(m.gradientPercent(50, 1000), 5);
  assert.equal(m.verticalExaggeration(50000, 2000), 25);
  assert.equal(m.verticalDenominator(20), 2000);
  assert.equal(m.verticalExaggeration(50000, m.verticalDenominator(20)), 25);
  assert.equal(m.verticalExaggeration(50000, m.verticalDenominator(10)), 50);
  assert.equal(m.sectionCm(1100, 1000, 20), 5);
  assert.equal(m.sectionCm(1000, 1000, 20), 0);
  // a ridge in the middle blocks the view; a dip does not
  assert.equal(m.intervisible([1000, 1020, 1100, 1030, 1000]), false);
  assert.equal(m.blockingIndex([1000, 1020, 1100, 1030, 1000]), 1);
  assert.equal(m.intervisible([1000, 940, 900, 960, 1000]), true);
  assert.equal(m.blockingIndex([1000, 940, 900, 960, 1000]), -1);
  assert.equal(m.intervisible([1000, 1100, 1200]), false, 'a point exactly on the line blocks');
  assert.equal(m.intervisible([1000, 1040, 1200]), true);
  assert.equal(m.contourInterval(1000, 1100, 5), 20);
  assert.equal(m.heightAbove(1000, 20, 3), 1060);
});

test('GIS cells, buffers and queries', () => {
  assert.equal(m.cellAreaM2(30), 900);
  assert.equal(m.cellsHa(100, 30), 9);
  assert.equal(m.cellsHa(1111, 30), 99.99);
  assert.equal(m.cellsCovering(600, 300, 30), 200);
  assert.equal(m.cellsHa(m.cellsCovering(600, 300, 30), 30), 18);
  assert.equal(m.bufferWidth(100), 200);
  assert.equal(m.bufferAreaHa(3000, 100), 60);
  assert.deepEqual(m.both(['A', 'B', 'C'], ['B', 'C', 'D']), ['B', 'C']);
  assert.deepEqual(m.either(['A', 'B'], ['B', 'C']), ['A', 'B', 'C']);
});
