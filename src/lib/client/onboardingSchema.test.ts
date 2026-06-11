import { test } from 'node:test';
import assert from 'node:assert/strict';
import { onboardingSchema, type OnboardingOutput } from './onboardingSchema';

test('valid payload passes', () => {
  const result = onboardingSchema.safeParse({
    realName: 'Alice Smith',
    displayName: 'Tiger_42',
    school: 'Sunrise Primary',
    age: 12,
    grade: 7,
  });
  assert.equal(result.success, true);
  if (result.success) {
    const data = result.data as OnboardingOutput;
    assert.equal(data.realName, 'Alice Smith');
    assert.equal(data.grade, 7);
  }
});

test('rejects empty realName', () => {
  const result = onboardingSchema.safeParse({
    realName: '',
    displayName: 'Tiger_42',
    school: 'Sunrise',
    age: 12,
    grade: 7,
  });
  assert.equal(result.success, false);
  assert.ok(!result.success && result.error.issues.some((e) => e.path.includes('realName')));
});

test('rejects short displayName', () => {
  const result = onboardingSchema.safeParse({
    realName: 'Bob',
    displayName: 'AB',
    school: 'Sunrise',
    age: 10,
    grade: 6,
  });
  assert.equal(result.success, false);
});

test('rejects displayName with special chars', () => {
  const result = onboardingSchema.safeParse({
    realName: 'Bob',
    displayName: '@dmin$tr@t0r',
    school: 'Sunrise',
    age: 10,
    grade: 6,
  });
  assert.equal(result.success, false);
});

test('accepts displayName with spaces and hyphens', () => {
  const result = onboardingSchema.safeParse({
    realName: 'Bob',
    displayName: 'Bob-the-Buildr',
    school: 'Sunrise',
    age: 10,
    grade: 6,
  });
  assert.equal(result.success, true);
});

test('rejects age out of range', () => {
  assert.equal(onboardingSchema.safeParse({ realName: 'X', displayName: 'Xyz1', school: 'S', age: 4, grade: 6 }).success, false);
  assert.equal(onboardingSchema.safeParse({ realName: 'X', displayName: 'Xyz1', school: 'S', age: 20, grade: 6 }).success, false);
});

test('rejects grade out of range', () => {
  assert.equal(onboardingSchema.safeParse({ realName: 'X', displayName: 'Xyz1', school: 'S', age: 12, grade: 4 }).success, false);
  assert.equal(onboardingSchema.safeParse({ realName: 'X', displayName: 'Xyz1', school: 'S', age: 12, grade: 13 }).success, false);
});

test('school is required', () => {
  const result = onboardingSchema.safeParse({
    realName: 'X',
    displayName: 'Xyz1',
    school: '',
    age: 12,
    grade: 6,
  });
  assert.equal(result.success, false);
});
