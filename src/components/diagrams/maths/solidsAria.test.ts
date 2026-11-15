import test from 'node:test';
import assert from 'node:assert/strict';
import { solidCountLines, solidsAria } from './Solids';
import { SOLIDS } from './mathsHelpers';

test('the spoken description of curved solids matches how the lessons teach them', () => {
  assert.equal(solidsAria(['cylinder']), 'Cylinder: 2 circular faces and 1 curved surface, 2 edges, 0 vertices.');
  assert.equal(solidsAria(['cone']), 'Cone: 1 circular face and 1 curved surface, 1 edge, 1 vertex.');
  assert.equal(solidsAria(['sphere']), 'Sphere: 1 curved surface, 0 edges, 0 vertices.');
  assert.ok(!/3 faces/.test(solidsAria(['cylinder'])));
});

test('flat solids keep their face, edge and vertex counts', () => {
  assert.equal(solidsAria(['cube']), 'Cube: 6 faces, 12 edges, 8 vertices.');
  assert.equal(solidsAria(['cube', 'cylinder']), 'Cube: 6 faces, 12 edges, 8 vertices. Cylinder: 2 circular faces and 1 curved surface, 2 edges, 0 vertices.');
  // the numbers still come from the shared SOLIDS table (the Grade 6 convention counts a curved surface as a face)
  assert.equal(SOLIDS.cylinder.faces, 3);
  assert.equal(SOLIDS.cone.faces + SOLIDS.cone.edges + SOLIDS.cone.vertices, 4);
});

test('the lesson option labels curved solids with flat faces and a curved surface, never "3 faces"', () => {
  assert.deepEqual(solidCountLines('cylinder', true), ['2 flat faces', '1 curved surface', '0 vertices']);
  assert.deepEqual(solidCountLines('cone', true), ['1 flat face', '1 curved surface', '1 vertex']);
  assert.deepEqual(solidCountLines('sphere', true), ['0 flat faces', '1 curved surface', '0 vertices']);
  // flat solids and the default (Grade 6 and 8) labels are unchanged
  assert.deepEqual(solidCountLines('cube', true), ['6 faces', '12 edges', '8 vertices']);
  assert.deepEqual(solidCountLines('cylinder'), ['3 faces', '2 edges', '0 vertices']);
});
