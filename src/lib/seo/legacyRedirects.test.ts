import test from 'node:test';
import assert from 'node:assert/strict';
import { LEGACY_REDIRECTS, nextRedirects } from './legacyRedirects';
import { publicPaths } from './publicPaths';
import { resolveDeepLink } from '../client/deepLink';
import { grade7 } from '../../curriculum/grade7';
import type { Curriculum } from '../../types/curriculum';

const live = new Set(publicPaths().map((p) => p.path));

test('every legacy source is gone and every destination is a live public page', () => {
  assert.ok(LEGACY_REDIRECTS.length > 0);
  for (const r of LEGACY_REDIRECTS) {
    assert.ok(!live.has(r.source), `${r.source} is still a live page, so it must not redirect`);
    assert.ok(live.has(r.destination), `${r.destination} (target of ${r.source}) is not a public page`);
  }
});

test('no source appears twice and no redirect chains', () => {
  const sources = LEGACY_REDIRECTS.map((r) => r.source);
  assert.equal(new Set(sources).size, sources.length);
  for (const r of LEGACY_REDIRECTS) assert.ok(!sources.includes(r.destination), `${r.source} chains through ${r.destination}`);
});

test('the Next config redirects are all permanent (308)', () => {
  const out = nextRedirects();
  assert.equal(out.length, LEGACY_REDIRECTS.length);
  for (const r of out) assert.equal(r.permanent, true);
});

// The pages that existed before the Grade 7 restructure: each must redirect to the right new subject.
const GRADE7_OLD_PAGES: Record<string, string> = {
  '/grade-7/natural-sciences-and-technology': '/grade-7/natural-sciences',
  '/grade-7/natural-sciences-and-technology/biosphere-biodiversity-and-reproduction': '/grade-7/natural-sciences/biosphere-biodiversity-and-reproduction',
  '/grade-7/natural-sciences-and-technology/matter-mixtures-acids-and-bases': '/grade-7/natural-sciences/matter-mixtures-acids-and-bases',
  '/grade-7/natural-sciences-and-technology/energy-transfer-heat-and-motion': '/grade-7/natural-sciences/energy-transfer-heat-and-motion',
  '/grade-7/natural-sciences-and-technology/sun-earth-relationship-and-gravity': '/grade-7/natural-sciences/sun-earth-relationship-and-gravity',
  '/grade-7/natural-sciences-and-technology/design-process-and-structures': '/grade-7/technology/design-process-and-structures',
  '/grade-7/natural-sciences-and-technology/mechanical-systems-and-control': '/grade-7/technology/mechanical-systems-and-control',
  '/grade-7/natural-sciences-and-technology/electrical-systems-and-control': '/grade-7/technology/electrical-systems-and-control',
  '/grade-7/natural-sciences-and-technology/processing-materials-and-properties': '/grade-7/technology/processing-materials-and-properties',
  '/grade-7/life-skills': '/grade-7/life-orientation',
  ...Object.fromEntries([1, 2, 3, 4].flatMap((n) => [
    [`/grade-7/life-skills/personal-and-social-well-being-term-${n}`, `/grade-7/life-orientation/personal-and-social-well-being-term-${n}`],
    [`/grade-7/life-skills/physical-education-term-${n}`, `/grade-7/life-orientation/physical-education-term-${n}`],
    [`/grade-7/life-skills/creative-arts-term-${n}`, `/grade-7/creative-arts/creative-arts-term-${n}`],
  ])),
};

test('every old Grade 7 URL redirects (308) to its new home', () => {
  const byDestination = new Map(nextRedirects().map((r) => [r.source, r]));
  for (const [oldPath, newPath] of Object.entries(GRADE7_OLD_PAGES)) {
    const r = byDestination.get(oldPath);
    assert.ok(r, `${oldPath} has no redirect`);
    assert.equal(r.destination, newPath);
    assert.equal(r.permanent, true);
  }
  assert.equal(Object.keys(GRADE7_OLD_PAGES).length, 22);
});

test('old Grade 7 app links (subject=nst / lsk) still open the subject that now holds the topic', () => {
  const curriculum: Curriculum = { grades: [grade7] };
  const open = (q: string) => { const r = resolveDeepLink(curriculum, new URLSearchParams(q)); return [r?.subject.id, r?.topic?.id]; };
  assert.deepEqual(open('grade=7&subject=nst&term=2&topic=design-process-and-structures'), ['tech', 'design-process-and-structures']);
  assert.deepEqual(open('grade=7&subject=nst&topic=energy-transfer-heat-and-motion'), ['ns', 'energy-transfer-heat-and-motion']);
  assert.deepEqual(open('grade=7&subject=nst'), ['ns', undefined]);
  assert.deepEqual(open('grade=7&subject=lsk&term=3&topic=gr7-creative-arts-t3'), ['ca', 'gr7-creative-arts-t3']);
  assert.deepEqual(open('grade=7&subject=lsk'), ['lo', undefined]);
});
