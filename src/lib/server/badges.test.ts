import { test } from 'node:test';
import assert from 'node:assert/strict';
import { evaluateBadges, type BadgeStats } from './badges';

function makeStats(overrides: Partial<BadgeStats> = {}): BadgeStats {
  return {
    totalXp: 0,
    streak: 0,
    bestStreak: 0,
    topicCorrect: 0,
    topicTotal: 0,
    topicAccuracy: 0,
    perfectStreak: 0,
    ...overrides,
  };
}

test('first-correct awarded when totalXp >= 10', () => {
  const earned = evaluateBadges(makeStats({ totalXp: 10 }));
  assert.ok(earned.includes('first-correct'));
});

test('first-correct not awarded when totalXp < 10', () => {
  const earned = evaluateBadges(makeStats({ totalXp: 8 }));
  assert.ok(!earned.includes('first-correct'));
});

test('streak-3 awarded when bestStreak >= 3', () => {
  assert.ok(evaluateBadges(makeStats({ bestStreak: 3 })).includes('streak-3'));
});

test('streak-10 awarded when bestStreak >= 10', () => {
  assert.ok(evaluateBadges(makeStats({ bestStreak: 10 })).includes('streak-10'));
});

test('streak-10 not awarded when bestStreak < 10', () => {
  assert.ok(!evaluateBadges(makeStats({ bestStreak: 9 })).includes('streak-10'));
});

test('xp-500 awarded when totalXp >= 500', () => {
  assert.ok(evaluateBadges(makeStats({ totalXp: 500 })).includes('xp-500'));
});

test('xp-5000 awarded when totalXp >= 5000', () => {
  assert.ok(evaluateBadges(makeStats({ totalXp: 5000 })).includes('xp-5000'));
});

test('topic-complete-5 awarded when topicTotal >= 5', () => {
  assert.ok(evaluateBadges(makeStats({ topicTotal: 5 })).includes('topic-complete-5'));
});

test('topic-complete-20 requires both >= 20 attempts and >= 90% accuracy', () => {
  assert.ok(evaluateBadges(makeStats({ topicTotal: 20, topicAccuracy: 0.9 })).includes('topic-complete-20'));
});

test('topic-complete-20 not awarded with high accuracy but < 20 attempts', () => {
  assert.ok(!evaluateBadges(makeStats({ topicTotal: 15, topicAccuracy: 1.0 })).includes('topic-complete-20'));
});

test('perfect-set-10 awarded when perfectStreak >= 10', () => {
  assert.ok(evaluateBadges(makeStats({ perfectStreak: 10 })).includes('perfect-set-10'));
});

test('empty stats yields no badges', () => {
  assert.equal(evaluateBadges(makeStats({})).length, 0);
});
