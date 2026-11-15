import test from 'node:test';
import assert from 'node:assert/strict';
import { checkSchematic } from '../schematic';
import { OPEN_CIRCULAR_FLOW, OPEN_FLOW_LINKS } from './circularFlow';

test('open circular flow: the four sectors, every link of the four-sector model, nothing else', () => {
  assert.deepEqual(checkSchematic(OPEN_CIRCULAR_FLOW), []);
  assert.deepEqual(OPEN_CIRCULAR_FLOW.boxes.map((b) => b.id).sort(), ['firms', 'foreign', 'government', 'households']);
  const links = OPEN_CIRCULAR_FLOW.arrows.map((a) => [a.from, a.to].sort().join('-')).sort();
  assert.deepEqual(links, [...OPEN_FLOW_LINKS].sort());
  // money and goods move both ways on every link
  assert.ok(OPEN_CIRCULAR_FLOW.arrows.every((a) => a.both));
  // it is OPEN: the foreign sector is joined to households and firms, and government is joined to both too
  const joined = (s: string) => links.filter((l) => l.split('-').includes(s)).length;
  assert.equal(joined('foreign'), 2);
  assert.equal(joined('government'), 2);
  assert.equal(joined('households'), 3);
  assert.equal(joined('firms'), 3);
  // households and firms are the only pair joined directly without a middle sector, and households sit left of firms
  const x = (id: string) => OPEN_CIRCULAR_FLOW.boxes.find((b) => b.id === id)!.x;
  assert.ok(x('households') < x('firms'));
});
