import test from 'node:test';
import assert from 'node:assert/strict';
import * as f from './grade8Finance';

// Every expected value below is worked out by hand or by a different route than the helper uses (string digits, BigInt, repeated addition).

test('scientific notation: digit counting agrees with BigInt and round-trips', () => {
  assert.deepEqual(f.sciNotation(2500), { mantissa: '2,5', exp: 3 });
  assert.deepEqual(f.sciNotation(25_000_000), { mantissa: '2,5', exp: 7 });
  assert.deepEqual(f.sciNotation(3_400_000), { mantissa: '3,4', exp: 6 });
  assert.deepEqual(f.sciNotation(60_000), { mantissa: '6', exp: 4 });
  assert.equal(f.sciNotation(9), null);
  for (const n of [10, 25, 250, 2500, 61_000, 480_000, 1_050_000, 7_300_000_000]) {
    const s = f.sciNotation(n)!;
    assert.equal(f.fromSci(s.mantissa, s.exp), n);
    assert.equal(BigInt(s.mantissa.replace(',', '')) * 10n ** BigInt(s.exp - (s.mantissa.includes(',') ? s.mantissa.length - 2 : 0)), BigInt(n));
    assert.ok(Number(s.mantissa.replace(',', '.')) >= 1 && Number(s.mantissa.replace(',', '.')) < 10);
  }
  assert.equal(f.fromSci('6,1', 4), 61_000);
  assert.equal(f.fromSci('2,5', 0), null);
  assert.equal(f.spaced(25_000_000), '25 000 000');
});

test('ratio: simplify, share, change in a ratio, rates', () => {
  assert.deepEqual(f.simplifyRatio(12, 18), { a: 2, b: 3, by: 6 });
  assert.deepEqual(f.simplifyRatio(250, 100), { a: 5, b: 2, by: 50 });
  assert.deepEqual(f.shareInRatio(20, [3, 2]), { onePart: 4, shares: [12, 8] });
  assert.deepEqual(f.shareInRatio(60, [1, 2, 3]), { onePart: 10, shares: [10, 20, 30] });
  assert.equal(f.shareInRatio(21, [3, 2]), null);
  assert.deepEqual(f.changeInRatio(12, 3, 5), { onePart: 4, result: 20 });
  assert.deepEqual(f.changeInRatio(20, 5, 3), { onePart: 4, result: 12 });
  assert.equal(f.changeInRatio(13, 3, 5), null);
  assert.equal(f.unitRate(36_000, 6), 6_000);
  assert.equal(f.speedKmH(240, 3), 80);
  assert.equal(f.hoursFor(300, 60), 5);
  assert.equal(f.speedKmH(100, 3), null);
});

test('percentages in cents: exact or null', () => {
  assert.equal(f.percentOf(25, 80_00), 20_00);
  assert.equal(f.percentOf(10, 1_50), 15);
  assert.equal(f.percentOf(10, 1_55), null);
  assert.deepEqual(f.increaseBy(200_00, 15), { change: 30_00, result: 230_00 });
  assert.deepEqual(f.decreaseBy(200_00, 15), { change: 30_00, result: 170_00 });
  assert.deepEqual(f.profitOrLoss(150_00, 180_00), { kind: 'profit', amount: 30_00 });
  assert.deepEqual(f.profitOrLoss(150_00, 120_00), { kind: 'loss', amount: 30_00 });
  assert.equal(f.profitOrLoss(150_00, 150_00).kind, 'break-even');
  assert.equal(f.profitPercent(150_00, 180_00), 20);
  assert.equal(f.profitPercent(150_00, 120_00), 20);
  assert.equal(f.profitPercent(150_00, 181_00), null);
  assert.deepEqual(f.discount(400_00, 20), { off: 80_00, pay: 320_00 });
});

test('VAT at 15%: adding and removing agree, including the 115% route', () => {
  assert.deepEqual(f.addVat(200_00), { vat: 30_00, inclusive: 230_00 });
  assert.deepEqual(f.removeVat(230_00), { exclusive: 200_00, vat: 30_00 });
  assert.deepEqual(f.removeVat(575_00), { exclusive: 500_00, vat: 75_00 });
  assert.equal(f.removeVat(100_00), null);
  for (const excl of [20_00, 100_00, 340_00, 1_000_00]) {
    const a = f.addVat(excl)!;
    assert.equal(a.inclusive, (excl * 115) / 100);
    assert.equal(f.removeVat(a.inclusive)!.exclusive, excl);
  }
  assert.deepEqual(f.budget(5_000_00, [1_800_00, 900_00, 450_00]), { spent: 3_150_00, left: 1_850_00 });
  assert.deepEqual(f.budget(1_000_00, [700_00, 450_00]), { spent: 1_150_00, left: -150_00 });
});

test('simple interest by repeated addition, hire purchase and exchange rates', () => {
  const si = f.simpleInterestByYear(600_00, 7, 3)!;
  assert.deepEqual(si.yearly, [42_00, 42_00, 42_00]);
  assert.equal(si.total, 42_00 + 42_00 + 42_00);
  assert.equal(si.amount, 726_00);
  assert.equal(f.simpleInterestByYear(5_000_00, 8, 2)!.amount, 5_800_00);
  assert.equal(f.simpleInterestByYear(1_55, 10, 1), null);
  assert.deepEqual(f.hirePurchase(3_000_00, 300_00, 250_00, 12), { paid: 3_300_00, extra: 300_00, instalments: 3_000_00 });
  assert.equal(f.toForeign(900_00, 18_00), 50);
  assert.equal(f.toForeign(901_00, 18_00), null);
  assert.equal(f.toRand(50, 18_00), 900_00);
  assert.equal(f.toRand(120, 19_00), 2_280_00);
});
