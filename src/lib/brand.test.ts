import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { gradeAccent, BRAND_ACCENT_ORDER } from './brand';

describe('gradeAccent', () => {
  it('returns stable accents for the same grade id', () => {
    assert.deepEqual(gradeAccent(5), gradeAccent(5));
  });

  it('cycles through brand accents by grade id', () => {
    const a = gradeAccent(5);
    const b = gradeAccent(6);
    assert.notEqual(a.solid, b.solid);
  });

  it('wraps the accent list for higher grades', () => {
    const first = gradeAccent(5);
    const wrapped = gradeAccent(5 + BRAND_ACCENT_ORDER.length);
    assert.deepEqual(first, wrapped);
  });

  it('includes tailwind class strings for solid/soft/text/border/ring', () => {
    const a = gradeAccent(7);
    assert.match(a.solid, /^bg-/);
    assert.match(a.soft, /^bg-/);
    assert.match(a.text, /^text-/);
    assert.match(a.border, /^border-/);
    assert.match(a.ring, /^ring-/);
  });
});
