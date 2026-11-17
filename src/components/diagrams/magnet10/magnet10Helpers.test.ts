import test from 'node:test';
import assert from 'node:assert/strict';
import * as m from './magnet10Helpers';

test('forces between poles: like repel, unlike attract', () => {
  assert.equal(m.force('N', 'N'), 'repel');
  assert.equal(m.force('S', 'S'), 'repel');
  assert.equal(m.force('N', 'S'), 'attract');
  assert.equal(m.force('S', 'N'), 'attract');
});

test('the field of a bar magnet: out of the north pole, into the south pole, against the magnet at its side', () => {
  // magnet along the x axis with N on the right
  assert.equal(m.dipoleField(3, 0).angle, 0, 'beyond the north end the field points away from the magnet (along +x)');
  assert.equal(Math.abs(m.dipoleField(-3, 0).angle), 0, 'beyond the south end the field points towards the magnet (along +x)');
  assert.equal(Math.abs(m.dipoleField(0, 3).angle), 180, 'beside the middle the field points back from N to S (along -x)');
  assert.equal(Math.abs(m.dipoleField(0, -3).angle), 180);
  // above and to the right of the north pole the lines curve up: the angle is between 0 and 90
  const a = m.dipoleField(2, 2).angle;
  assert.ok(a > 0 && a < 90);
  // the field is symmetrical about the axis of the magnet (mirror in x axis flips the angle's sign)
  assert.ok(Math.abs(m.dipoleField(2, 2).angle + m.dipoleField(2, -2).angle) < 1e-9);
  // the field gets weaker with distance: 1/r^3, so twice as far is 1/8
  assert.ok(m.dipoleField(6, 0).strength < m.dipoleField(3, 0).strength);
  assert.ok(Math.abs(m.dipoleField(6, 0).strength / m.dipoleField(3, 0).strength - 0.125) < 0.02, "rounded to three decimals");
  assert.equal(m.fieldFactor(2), 0.125);
});

test("the Earth's field and the materials", () => {
  assert.equal(m.compassPointsTo(), 'geographic north');
  assert.equal(m.poleNearGeographicNorth(), 'S');
  // the needle's north end is attracted to a south pole: it points to the geographic north, where the Earth's S pole is
  assert.equal(m.force('N', m.poleNearGeographicNorth()), 'attract');
  assert.ok(m.isMagnetic('iron') && m.isMagnetic('nickel') && m.isMagnetic('steel'));
  assert.ok(!m.isMagnetic('copper') && !m.isMagnetic('plastic'));
  for (const x of m.MAGNETIC) assert.ok(!(m.NOT_MAGNETIC as readonly string[]).includes(x));
});
