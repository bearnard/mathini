import { test } from 'node:test';
import assert from 'node:assert/strict';
import { provinceFor, PROVINCE_IDS } from './provinces';

test('every province matches by its plain name', () => {
  const names: [string, string][] = [['Eastern Cape', 'eastern-cape'], ['Free State', 'free-state'], ['Gauteng', 'gauteng'], ['KwaZulu-Natal', 'kwazulu-natal'], ['Limpopo', 'limpopo'], ['Mpumalanga', 'mpumalanga'], ['North West', 'north-west'], ['Northern Cape', 'northern-cape'], ['Western Cape', 'western-cape']];
  for (const [n, id] of names) assert.equal(provinceFor(n), id, n);
  assert.equal(new Set(names.map(([, id]) => id)).size, PROVINCE_IDS.length);
});
test('spelling and case variants Cloudflare has used', () => {
  assert.equal(provinceFor('KwaZulu Natal'), 'kwazulu-natal');
  assert.equal(provinceFor('KWAZULU-NATAL'), 'kwazulu-natal');
  assert.equal(provinceFor('North-West'), 'north-west');
  assert.equal(provinceFor('  western   cape '), 'western-cape');
  assert.equal(provinceFor('Orange Free State'), 'free-state');
  assert.equal(provinceFor('Northern Province'), 'limpopo');
});
test('falls back to the region code (ISO and older codes) when the name is missing or unknown', () => {
  assert.equal(provinceFor(null, 'GT'), 'gauteng');
  assert.equal(provinceFor('', 'NL'), 'kwazulu-natal');
  assert.equal(provinceFor(undefined, 'KZN'), 'kwazulu-natal');
  assert.equal(provinceFor('Something odd', 'NP'), 'limpopo');
  assert.equal(provinceFor(null, 'wc'), 'western-cape');
});
test('the name wins over a conflicting code', () => {
  assert.equal(provinceFor('Gauteng', 'WC'), 'gauteng');
});
test('non-South-African or missing regions give null', () => {
  for (const r of ['England', 'California', 'Harare Province', '', null, undefined, 'Cape', 'Gauteng Province']) assert.equal(provinceFor(r as string), null, String(r));
  assert.equal(provinceFor(null, null), null);
  assert.equal(provinceFor('Unknown', 'ZZ'), null);
});
