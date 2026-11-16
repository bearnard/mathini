import { q, type Q } from '../../../grade10/mathematics/_shared/bank';
import * as a from '../../../../components/diagrams/maths/grade6AddSub';

const g = a.group;
const R = (n: number) => `R${g(n)}`;

// ---------------------------------------------------------------- Term 1: adding and subtracting 5-digit numbers
export const addSub5: Q[] = [
  q('Estimate 45 678 + 12 345 by rounding both numbers to the nearest 1 000.', g(a.estimate(45678, 12345, 1000, '+')), ['57 000', '59 000', '50 000'], 'Round 45 678 to 46 000 and 12 345 to 12 000. Then 46 000 + 12 000 = 58 000.'),
  q('What is 56 423 rounded to the nearest 1 000?', g(a.roundTo(56423, 1000)), ['57 000', '56 400', '60 000'], 'The hundreds digit is 4, which is less than 5, so the 6 thousands stay the same: 56 000.'),
  q('What is 98 743 rounded to the nearest 10 000?', g(a.roundTo(98743, 10000)), ['90 000', '980 000', '99 000'], 'The thousands digit is 8, so round up the ten thousands: 90 000 becomes 100 000.'),
  q('Calculate 56 423 + 7 581 + 21 479.', g(a.columnAdd([56423, 7581, 21479]).result), ['85 383', '84 483', '86 483'], 'Add the columns from the ones: 3 + 1 + 9 = 13 (write 3, carry 1). Continue with carries to get 85 483.'),
  q('Calculate 98 743 − 45 684.', g(a.columnSubtract(98743, 45684).result), ['53 159', '54 059', '53 069'], 'Borrow when the top digit is too small: 3 < 4 and 4 < 8. The answer is 53 059.'),
  q('Calculate 45 362 + 32 488.', g(a.inverseOfSum(45362, 32488).sum), ['77 750', '78 850', '77 840'], '45 362 + 32 488: ones 2 + 8 = 10, tens 6 + 8 + 1 = 15, and so on to 77 850.'),
  q('54 687 − 32 134 = 22 553. Which calculation checks this answer?', `${g(22553)} + ${g(32134)} = ${g(54687)}`, [`${g(22553)} − ${g(32134)} = ${g(54687)}`, `${g(54687)} + ${g(32134)} = ${g(22553)}`, `${g(32134)} − ${g(22553)} = ${g(54687)}`], 'Check a subtraction by adding the answer and the number you took away: 22 553 + 32 134 = 54 687.'),
  q('45 362 + 32 488 = 77 850. Which subtraction checks this answer?', `${g(77850)} − ${g(32488)} = ${g(45362)}`, [`${g(77850)} + ${g(32488)} = ${g(45362)}`, `${g(45362)} − ${g(32488)} = ${g(77850)}`, `${g(32488)} − ${g(77850)} = ${g(45362)}`], 'Check an addition by subtracting one of the numbers from the total: 77 850 − 32 488 = 45 362.'),
  q('Veli\'s shopping costs R163. He pays with a R200 note. How much change does he get?', R(200 - 163), ['R47', 'R27', 'R363'], 'Add on from R163 to R200: R163 + R7 = R170, and R170 + R30 = R200. The change is R7 + R30 = R37.'),
  q('Which number sentence shows the commutative property of addition?', `${g(12345)} + ${g(6789)} = ${g(6789)} + ${g(12345)}`, [`${g(12345)} + 0 = ${g(12345)}`, '(1 + 2) + 3 = 1 + (2 + 3)', `${g(12345)} − ${g(6789)} = ${g(6789)} − ${g(12345)}`], 'The commutative property says that the order of the numbers does not change the sum: 12 345 + 6 789 = 6 789 + 12 345.'),
  q('What is 48 275 + 0?', g(48275), ['0', '48 276', '48 270'], 'Adding 0 does not change a number. Zero is the additive identity.'),
  q('In 98 743 − 45 684, the ones digit 3 is smaller than 4. What do you do?', 'Borrow 1 ten from the tens column', ['Swap the 3 and the 4 round to make 4 − 3', 'Write 1 as the answer for the ones column', 'Add the 3 and the 4 to get 7 ones'], 'Take 1 ten from the 4 tens, which leaves 3 tens, and add 10 ones to the 3 ones to make 13. Then 13 − 4 = 9.'),
  q('Use compensating: 4 999 + 3 245. Add 5 000 first. What is the answer?', g(4999 + 3245), ['8 245', '8 254', '7 244'], '4 999 is 1 less than 5 000. 5 000 + 3 245 = 8 245, then subtract the extra 1: 8 244.'),
  q('A school library has 12 345 books. It buys 5 678 more. How many books does it have now?', g(12345 + 5678), ['17 023', '18 013', '17 923'], '12 345 + 5 678 = 18 023. The words "buys more" tell you to add.'),
];

// ---------------------------------------------------------------- Term 3: adding and subtracting 6-digit numbers, and problems
export const addSub6: Q[] = [
  q('Calculate 345 678 + 123 456.', g(a.columnAdd([345678, 123456]).result), ['468 134', '469 124', '479 134'], 'Add the columns from the ones: 8 + 6 = 14, 7 + 5 + 1 = 13, and so on. The sum is 469 134.'),
  q('Calculate 800 000 − 365 478.', g(a.columnSubtract(800000, 365478).result), ['435 522', '434 622', '444 522'], 'Borrow across the zeros: 800 000 − 365 478 = 434 522. Check: 434 522 + 365 478 = 800 000.'),
  q('Calculate 502 340 + 98 765.', g(a.columnAdd([502340, 98765]).result), ['600 105', '601 005', '591 105'], '502 340 + 98 765 = 601 105. Line up the digits by place value, so the 98 765 starts under the thousands.'),
  q('Estimate 489 650 + 312 400 by rounding both numbers to the nearest 10 000.', g(a.estimate(489650, 312400, 10000, '+')), ['790 000', '810 000', '700 000'], '489 650 rounds to 490 000 and 312 400 rounds to 310 000. Then 490 000 + 310 000 = 800 000.'),
  q('Farm workers picked 342 345 pears in the morning. By the end of the day they had 866 589 pears. How many did they pick after lunch?', g(866589 - 342345), ['1 208 934', '524 344', '523 244'], 'This is a missing part: 342 345 + ? = 866 589. Subtract: 866 589 − 342 345 = 524 244.'),
  q('A man buys 126 789 black, 341 567 white and 344 532 silver DVD players. How many does he buy altogether?', g(126789 + 341567 + 344532), ['812 788', '813 888', '802 888'], 'Altogether means add: 126 789 + 341 567 + 344 532 = 812 888.'),
  q('The price of sugar is R268 231. A leak decreases the price by R43 789. What is the decreased price?', R(268231 - 43789), ['R312 020', 'R225 442', 'R224 552'], 'Decrease means subtract: R268 231 − R43 789 = R224 442.'),
  q('A factory makes R864 328 in November and R367 435 in December. How much less does it make in December?', R(864328 - 367435), ['R1 231 763', 'R497 893', 'R496 993'], 'Comparison by difference: R864 328 − R367 435 = R496 893.'),
  q('A farmer decreased the price of his farm by R10 456 and sold it for R589 544. What was the original price?', R(589544 + 10456), ['R579 088', 'R599 000', 'R600 100'], 'The original price is bigger: R589 544 + R10 456 = R600 000.'),
  q('Calculate 1 000 000 − 345 678.', g(a.columnSubtract(1000000, 345678).result), ['654 332', '655 322', '754 322'], '1 000 000 − 345 678 = 654 322. Check: 654 322 + 345 678 = 1 000 000.'),
  q('Which number sentence shows the associative property of addition?', '(245 000 + 100 000) + 55 000 = 245 000 + (100 000 + 55 000)', ['245 000 + 100 000 = 100 000 + 245 000 (the numbers swap places)', '245 000 + 0 = 245 000 (adding zero changes nothing)', '245 000 − 100 000 = 100 000 − 245 000 (the numbers swap places)'], 'The associative property says that you can group the numbers differently and get the same sum.'),
  q('654 322 + 345 678 = 1 000 000. Which subtraction checks this?', `${g(1000000)} − ${g(345678)} = ${g(654322)}`, [`${g(1000000)} + ${g(345678)} = ${g(654322)}`, `${g(345678)} − ${g(654322)} = ${g(1000000)}`, `${g(654322)} − ${g(345678)} = ${g(1000000)}`], 'Subtract one of the numbers from the total: 1 000 000 − 345 678 = 654 322.'),
  q('Use compensating: 299 999 + 123 456. Add 300 000 first. What is the answer?', g(299999 + 123456), ['423 465', '424 455', '423 355'], '299 999 is 1 less than 300 000. 300 000 + 123 456 = 423 456, then subtract the extra 1: 423 455.'),
  q('Estimate 598 214 − 201 876 by rounding both numbers to the nearest 100 000.', g(a.estimate(598214, 201876, 100000, '−')), ['300 000', '500 000', '390 000'], '598 214 rounds to 600 000 and 201 876 rounds to 200 000. Then 600 000 − 200 000 = 400 000.'),
];
