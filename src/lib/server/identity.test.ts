import { test } from 'node:test';
import assert from 'node:assert/strict';
import { hashPin, verifyPin, generateLoginCode, generatePin } from './identity';

test('generateLoginCode returns ADJECTIVE-NNNN format', () => {
  const code = generateLoginCode();
  assert.ok(/^([A-Z]+)-\d{4}$/.test(code), `Unexpected format: ${code}`);
});

test('generateLoginCode produces different codes', () => {
  const codes = new Set<string>();
  for (let i = 0; i < 50; i++) codes.add(generateLoginCode());
  assert.ok(codes.size > 10, 'Should produce diverse codes');
});

test('generatePin returns 4 digits', () => {
  const pin = generatePin();
  assert.ok(/^\d{4}$/.test(pin), `Unexpected format: ${pin}`);
});

test('hashPin produces a hash and salt', async () => {
  const { hash, salt } = await hashPin('1234');
  assert.ok(hash.length > 0, 'Hash should not be empty');
  assert.ok(salt.length > 0, 'Salt should not be empty');
  // Hash is 256 bits = 64 hex chars
  assert.equal(hash.length, 64);
  // Salt is 16 bytes = 32 hex chars
  assert.equal(salt.length, 32);
});

test('verifyPin succeeds for correct PIN', async () => {
  const pin = '4821';
  const { hash, salt } = await hashPin(pin);
  assert.equal(await verifyPin(pin, salt, hash), true);
});

test('verifyPin fails for wrong PIN', async () => {
  const { hash, salt } = await hashPin('1234');
  assert.equal(await verifyPin('4321', salt, hash), false);
});

test('different PINs produce different hashes', async () => {
  const h1 = await hashPin('1111');
  const h2 = await hashPin('2222');
  assert.notEqual(h1.hash, h2.hash);
  assert.notEqual(h1.salt, h2.salt);
});
