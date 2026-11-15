import test from 'node:test';
import assert from 'node:assert/strict';
import { PLACES, ROUTE_A, ROUTE_B, TROPIC, crossEastToWest, direction, groundMetres, hoursBetween, meridianRx, opposite, parallel, polylineLength, realMetres, routeMetres } from './mapHelpers';

test('the clinic is east of the school, so the school is west of the clinic (reversing a direction)', () => {
  assert.equal(direction(PLACES.school, PLACES.clinic), 'east');
  assert.equal(direction(PLACES.clinic, PLACES.school), 'west');
  assert.equal(opposite(direction(PLACES.school, PLACES.clinic)), direction(PLACES.clinic, PLACES.school));
  assert.equal(direction(PLACES.school, PLACES.shop), 'south');
  assert.equal(direction(PLACES.shop, PLACES.school), 'north');
});

test('scale: 1 cm is 100 m on the imaginary map, so 3,5 cm is 350 m', () => {
  assert.equal(realMetres(1), 100);
  assert.equal(realMetres(3.5), 350);
  assert.equal(polylineLength(ROUTE_A), 3.5);
});

test('both routes stay on the drawn roads: every leg is horizontal or vertical, so the lengths add up from whole and half centimetres', () => {
  for (const route of [ROUTE_A, ROUTE_B]) for (let i = 1; i < route.length; i++) assert.ok(route[i].x === route[i - 1].x || route[i].y === route[i - 1].y);
  assert.equal(polylineLength(ROUTE_B), 8.5);
});

test('the direct route is shorter than the long way round, by the scale', () => {
  assert.equal(routeMetres(ROUTE_A), 350);
  assert.equal(routeMetres(ROUTE_B), 850);
  assert.ok(routeMetres(ROUTE_A) < routeMetres(ROUTE_B));
});

test('ratio scale 1:50 000: 1 cm is 500 m, and 3 cm is 1 500 m; 1:10 000 is 100 m per cm', () => {
  assert.equal(groundMetres(1, 50000), 500);
  assert.equal(groundMetres(3, 50000), 1500);
  assert.equal(groundMetres(1, 10000), 100);
});

test('15 degrees of longitude is 1 hour; 45 degrees is 3 hours; 360 degrees is a day', () => {
  assert.equal(hoursBetween(0, 15), 1);
  assert.equal(hoursBetween(10, 55), 3);
  assert.equal(hoursBetween(0, 360), 24);
});

test('crossing the date line from east to west adds a day, and Sunday goes to Monday', () => {
  assert.equal(crossEastToWest('Monday'), 'Tuesday');
  assert.equal(crossEastToWest('Sunday'), 'Monday');
});

test('globe lines: the Equator is level with the centre, the tropics are above and below it by the same amount, and the Prime Meridian is a straight line', () => {
  assert.equal(parallel(0, 40).dy, 0);
  assert.ok(Math.abs(parallel(TROPIC, 40).dy + parallel(-TROPIC, 40).dy) < 1e-9);
  assert.ok(parallel(TROPIC, 40).dy > 0);
  assert.ok(parallel(TROPIC, 40).halfWidth < 40);
  assert.equal(meridianRx(0, 40), 0);
  assert.ok(meridianRx(60, 40) > meridianRx(30, 40));
});
