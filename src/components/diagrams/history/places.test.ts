import test from 'node:test';
import assert from 'node:assert/strict';
import { SA_VIEWBOX } from '../../admin/saProvinces';
import { PLACES, broadArrow, edgeDistance, insideProvince, place } from './places';

test('Cape Town projects into the Western Cape and the Great Fish River mouth onto the Eastern Cape coast', () => {
  const ct = place('capeTown');
  const gf = place('greatFishRiver');
  // Cape Town sits on the coast of a simplified outline: inside the province or within ~13 km (5 map units)
  assert.ok(insideProvince(ct.x, ct.y, 'western-cape') || edgeDistance(ct.x, ct.y, 'western-cape') < 5, JSON.stringify(ct));
  assert.ok(insideProvince(gf.x, gf.y, 'eastern-cape') || edgeDistance(gf.x, gf.y, 'eastern-cape') < 5, JSON.stringify(gf));
});

test('both places are on the map, the river is east of Cape Town and about the same latitude band', () => {
  const ct = place('capeTown');
  const gf = place('greatFishRiver');
  for (const p of [ct, gf]) {
    assert.ok(p.x > 0 && p.x < SA_VIEWBOX.width && p.y > 0 && p.y < SA_VIEWBOX.height);
  }
  assert.ok(gf.x > ct.x, 'east is to the right');
  assert.ok(Math.abs(gf.y - ct.y) < 40, 'both on the south coast');
});

test('the source coordinates are southern-hemisphere decimal degrees from the cited pages', () => {
  assert.deepEqual([PLACES.capeTown.lat, PLACES.capeTown.lon], [-33.92528, 18.42389]);
  assert.deepEqual([PLACES.greatFishRiver.lat, PLACES.greatFishRiver.lon], [-33.49278, 27.13111]);
});

test('broad arrows: the tip is where asked, and every point is rounded', () => {
  const pts = broadArrow(10, 10, 110, 10, 10).split(' ').map((p) => p.split(',').map(Number));
  assert.equal(pts.length, 7);
  assert.deepEqual(pts[3], [110, 10]);
  assert.doesNotMatch(broadArrow(0, 0, 37, 91, 9), /\.\d{2,}/);
});
