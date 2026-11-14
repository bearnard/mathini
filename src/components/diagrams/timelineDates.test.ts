import test from 'node:test';
import assert from 'node:assert/strict';
import { axis, formatYear, parseTimelineDate, yearsBetween } from './timelineDates';

const ok = (s: string, year: number, approx = false) =>
  assert.deepEqual(parseTimelineDate(s), { year, approx }, s);
const no = (s: string) => assert.equal(parseTimelineDate(s), null, `"${s}" should be refused`);

test('plain years and day-month-year', () => {
  ok('1948', 1948);
  ok('1488', 1488);
  ok('27 Apr 1994', 1994);
  ok('11 February 1990', 1990);
  ok(' 1652 ', 1652);
});

test('BCE and BC are negative, CE and AD are positive', () => {
  ok('45 BCE', -45);
  ok('525 CE', 525);
  ok('c. 440 BCE', -440, true);
  ok('c. 1550 BCE', -1550, true);
  ok('c. 2600 BCE', -2600, true);
  ok('3200 BCE', -3200);
  ok('500 B.C.E.', -500);
  ok('500 BC', -500);
  ok('1066 AD', 1066);
  ok('AD 1066', 1066);
  ok('c. 200 CE', 200, true);
  ok('c. 370 CE', 370, true);
});

test('alternative years "508/507 BCE" use the first and are approximate', () => {
  ok('508/507 BCE', -508, true);
});

test('decades and circa', () => {
  ok('1800s', 1800, true);
  ok('1990s', 1990, true);
  ok('c. 1600', 1600, true);
  ok('about 1830', 1830, true);
  ok('circa 1700', 1700, true);
  ok('ca. 1700', 1700, true);
});

test('simple ranges place at the start and are approximate', () => {
  ok('1652-1700', 1652, true);
  ok('1652 – 1700', 1652, true);
  ok('1652 to 1700', 1652, true);
});

test('fuzzy or relative dates are refused, never guessed', () => {
  no('Long before 1652');
  no('Before 1652');
  no('After 1800');
  no('Early 1900s');
  no('Late 1800s');
  no('Mid 1800s');
  no('the 19th century');
  no('Since 1994');
  no('Between 1795 and 1806');
  no('Many years ago');
  no('');
  no('   ');
});

test('ambiguous numbers are refused', () => {
  no('45'); // no era: is it 45 CE or 45 BCE?
  no('525');
  no('3000'); // beyond the plain-year limit
  no('1795 and 1806'); // two events in one label
  no('1795, 1806');
  no('BCE');
  no('12 March');
  no('0 BCE'); // there is no year zero
});

test('no year zero: distances across BCE/CE', () => {
  assert.equal(axis(-1), -1);
  assert.equal(axis(1), 0);
  assert.equal(yearsBetween(-1, 1), 1); // 1 BCE to 1 CE is one year
  assert.equal(yearsBetween(-45, 525), 569);
  assert.equal(yearsBetween(1652, 1994), 342);
  assert.equal(yearsBetween(-440, -45), 395);
});

test('formatYear', () => {
  assert.equal(formatYear(-440), '440 BCE');
  assert.equal(formatYear(1994), '1994');
  assert.equal(formatYear(525), '525 CE');
});

test('every date string in the History lessons is either placed or refused (no throw)', () => {
  const samples = ['1900', '1930', '1975', '2020', 'Long before 1652', '1800s', '45 BCE', 'c. 1550 BCE', '508/507 BCE', '27 Apr 1994', '1 Jan 2000', '2007'];
  for (const s of samples) assert.doesNotThrow(() => parseTimelineDate(s));
});
