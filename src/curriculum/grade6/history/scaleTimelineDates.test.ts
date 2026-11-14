import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseTimelineDate } from '../../../components/diagrams/timelineDates';

/**
 * Guard for the Grade 6 History "Key Events" timelines. A topic may use the to-scale timeline
 * only if EVERY date in it can be placed; otherwise it must keep the plain list. Editing a date
 * to something vague ("Long before 1652") in a to-scale topic would otherwise silently turn the
 * picture back into a list, and a topic left on the list should be there on purpose.
 */

const base = path.dirname(fileURLToPath(import.meta.url));
const files: string[] = [];
const walk = (d: string) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) { if (e.name !== '_shared') walk(p); }
    else if (p.endsWith('.tsx')) files.push(p);
  }
};
walk(base);

const datesOf = (src: string) => [...src.matchAll(/"date":\s*"([^"]*)"/g)].map((m) => m[1]);

// Topics deliberately kept on the plain list because a date cannot be placed on a scale.
const KEPT_ON_LIST = new Set(['FrontierPeoples', 'EarlyIndigenousMedicine']);

test('every History timeline topic is found', () => {
  const withTimeline = files.filter((f) => /<(Scale)?Timeline\b/.test(fs.readFileSync(f, 'utf8')));
  assert.equal(withTimeline.length, 16);
});

test('topics on the to-scale timeline have only dates that can be placed, in chronological order', () => {
  const scaled = files.filter((f) => fs.readFileSync(f, 'utf8').includes('<ScaleTimeline'));
  assert.ok(scaled.length >= 14, `expected at least 14 to-scale topics, found ${scaled.length}`);
  for (const f of scaled) {
    const dates = datesOf(fs.readFileSync(f, 'utf8'));
    const years = dates.map((d) => {
      const p = parseTimelineDate(d);
      assert.ok(p, `${path.basename(f)}: "${d}" cannot be placed on a scale`);
      return p!.year;
    });
    // BCE years are negative, so plain numeric order is chronological order.
    const sorted = [...years].sort((a, b) => a - b);
    assert.deepEqual(years, sorted, `${path.basename(f)}: events are not listed oldest first (${dates.join(' | ')})`);
  }
});

test('topics still on the plain list are the ones we chose, and each really has an unplaceable date', () => {
  const listed = files.filter((f) => /<Timeline\b/.test(fs.readFileSync(f, 'utf8')));
  assert.deepEqual(listed.map((f) => path.basename(f, '.tsx')).sort(), [...KEPT_ON_LIST].sort());
  for (const f of listed) {
    const bad = datesOf(fs.readFileSync(f, 'utf8')).filter((d) => parseTimelineDate(d) === null);
    assert.ok(bad.length > 0, `${path.basename(f)} could move to the to-scale timeline now`);
  }
});
