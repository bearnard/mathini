import test from 'node:test';
import assert from 'node:assert/strict';
import * as g from './grade8Geo';

const rad = (d: number) => (d * Math.PI) / 180;

test('sunAngle agrees with the vector geometry of the midday sun', () => {
  for (const lat of [-34, -26, -10, 0, 20]) {
    for (const decl of [-23.5, 0, 23.5]) {
      // surface normal and sun direction in the meridian plane; elevation = asin(normal . sun)
      const elevation = (Math.asin(Math.cos(rad(lat)) * Math.cos(rad(decl)) + Math.sin(rad(lat)) * Math.sin(rad(decl))) * 180) / Math.PI;
      assert.ok(Math.abs(elevation - g.sunAngle(lat, decl)) < 1e-9, `${lat} ${decl}`);
    }
  }
  assert.equal(g.sunAngle(-26, g.OVERHEAD.december), 87.5);
  assert.equal(g.sunAngle(-26, g.OVERHEAD.equinox), 64);
  assert.equal(g.sunAngle(-26, g.OVERHEAD.june), 40.5);
  assert.equal(g.sunAngle(-34, g.OVERHEAD.december), 79.5);
  assert.equal(g.sunAngle(-34, g.OVERHEAD.june), 32.5);
  assert.equal(g.sunAngle(-23.5, g.OVERHEAD.december), 90);
});

test('time zones: 15 degrees an hour, and conversions agree with Date arithmetic', () => {
  assert.equal(g.meridianOffsetHours(g.SA_MERIDIAN), 2);
  assert.equal(360 / 24, g.DEGREES_PER_HOUR);
  const noon = (h: number, m: number, from: number, to: number) => {
    const t = Date.UTC(2023, 0, 10, h, m) - from * 60000 + to * 60000; // a fixed date in standard time everywhere
    const d = new Date(t);
    return { hour: d.getUTCHours(), minute: d.getUTCMinutes(), dayShift: d.getUTCDate() - 10 };
  };
  for (const to of Object.values(g.ZONES)) {
    for (const [h, m] of [[12, 0], [0, 30], [23, 45], [6, 15]]) {
      assert.deepEqual(g.convertTime(h, m, g.ZONES.johannesburg.minutes, to.minutes), noon(h, m, 120, to.minutes), `${to.name} ${h}:${m}`);
    }
  }
  assert.equal(g.clock(g.convertTime(12, 0, 120, 540).hour, 0), '19:00');
  assert.equal(g.clock(g.convertTime(12, 0, 120, 0).hour, 0), '10:00');
  assert.deepEqual(g.convertTime(12, 0, 120, 330), { hour: 15, minute: 30, dayShift: 0 });
  assert.deepEqual(g.convertTime(22, 0, 120, 540), { hour: 5, minute: 0, dayShift: 1 });
  assert.deepEqual(g.convertTime(1, 0, 120, 0), { hour: 23, minute: 0, dayShift: -1 });
});

test('cooling with height', () => {
  assert.equal(g.coolerWithHeight(24, 2000), 11);
  assert.equal(g.coolerWithHeight(30, 1000), 23.5);
  assert.equal(g.coolerWithHeight(24, 0), 24);
});

test('climate example summaries, checked by hand', () => {
  const a = g.summary(g.EXAMPLES.mediterranean);
  assert.equal(a.wettest, 'June');
  assert.equal(a.driest, 'January');
  assert.equal(a.warmest, 'January');
  assert.equal(a.coldest, 'July');
  assert.equal(a.yearRain, 15 + 15 + 20 + 45 + 80 + 100 + 95 + 85 + 50 + 35 + 25 + 15);
  assert.equal(a.yearRain, 580);
  assert.equal(a.range, 10);
  assert.equal(a.winterWetter, true);
  const b = g.summary(g.EXAMPLES.tropical);
  assert.equal(b.wettest, 'January');
  assert.equal(b.yearRain, 2320);
  assert.equal(b.range, 1);
  assert.equal(b.winterWetter, false);
  const c = g.summary(g.EXAMPLES.desert);
  assert.equal(c.yearRain, 37);
  assert.equal(c.warmest, 'January');
  assert.equal(c.coldest, 'June');
  assert.equal(c.range, 14);
  for (const d of Object.values(g.EXAMPLES)) { assert.equal(d.rain.length, 12); assert.equal(d.temp.length, 12); }
});
