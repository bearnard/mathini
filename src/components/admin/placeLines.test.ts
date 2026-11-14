import { test } from 'node:test';
import assert from 'node:assert/strict';
import { placeLines } from './WhereCard';

test('a real city is the title; its province and country are the muted line', () => {
  assert.deepEqual(placeLines({ country: 'ZA', region: 'Gauteng', city: 'Johannesburg', province: 'gauteng' }), { title: 'Johannesburg', sub: 'Gauteng · South Africa' });
});
test('province-level rows: the PROVINCE is the title, with "city not recorded"', () => {
  assert.deepEqual(placeLines({ country: 'ZA', region: 'Gauteng', city: null, province: 'gauteng' }), { title: 'Gauteng', sub: 'city not recorded · South Africa' });
  assert.deepEqual(placeLines({ country: 'ZA', region: 'KwaZulu Natal', city: null, province: 'kwazulu-natal' }), { title: 'KwaZulu-Natal', sub: 'city not recorded · South Africa' });
});
test('no province at all (Do Not Track): the country is the title, "province not recorded"', () => {
  assert.deepEqual(placeLines({ country: 'ZA', region: null, city: null, province: null }), { title: 'South Africa', sub: 'province not recorded' });
});
test('foreign rows use their region label, and "region not recorded" when there is none', () => {
  assert.deepEqual(placeLines({ country: 'GB', region: 'England', city: null, province: null }), { title: 'England', sub: 'city not recorded · United Kingdom' });
  assert.deepEqual(placeLines({ country: 'GB', region: null, city: null, province: null }), { title: 'United Kingdom', sub: 'region not recorded' });
  assert.deepEqual(placeLines({ country: null, region: null, city: null, province: null }), { title: 'Unknown', sub: 'region not recorded' });
});
test('a city with no region says the province is not recorded', () => {
  assert.deepEqual(placeLines({ country: 'ZA', region: null, city: 'Soweto', province: null }), { title: 'Soweto', sub: 'province not recorded · South Africa' });
});
