import type { Q } from '../../../grade10/mathematics/_shared/bank';
import { q } from './q6';
import * as a from '../../../../components/diagrams/maths/grade6AddSub';
import * as m from '../../../../components/diagrams/maths/grade6MulDiv';

const g = a.group;
const R = (n: number) => `R${g(n)}`;
const div = (n: number, d: number) => {
  const r = m.divide(n, d);
  return r.remainder === 0 ? g(r.quotient) : `${g(r.quotient)} remainder ${g(r.remainder)}`;
};

// ---------------------------------------------------------------- Term 2: multiplying by 2-digit numbers
export const multiply2: Q[] = [
  q('Estimate 3 487 × 42 by rounding 3 487 to the nearest 1 000 and 42 to the nearest 10.', g(m.estimateProduct(3487, 1000, 42, 10)), ['140 000', '12 000', '150 000'], '3 487 rounds to 3 000 and 42 rounds to 40. Then 3 000 × 40 = 120 000.'),
  q('Calculate 547 × 45.', g(m.longMultiply(547, 45)), ['24 515', '25 615', '21 880'], '547 × 45 = 547 × 40 + 547 × 5 = 21 880 + 2 735 = 24 615.'),
  q('547 × 45 = 547 × 40 + 547 × 5. What is 547 × 40?', g(547 * 40), ['2 188', '218 800', '20 880'], '547 × 4 = 2 188, and multiplying by 10 gives 21 880.'),
  q('What is 547 × 50?', g(547 * 50), ['2 735', '273 500', '26 350'], '547 × 5 = 2 735, and multiplying by 10 gives 27 350.'),
  q('To calculate 547 × 42 you break 42 into the factors 6 × 7. What is 547 × 6?', g(547 * 6), ['3 182', '3 292', '3 252'], '547 × 6 = 3 282. Then 3 282 × 7 gives 547 × 42.'),
  q('Calculate 547 × 42.', g(m.byFactors(547, [6, 7]).total), ['22 874', '23 974', '21 880'], '547 × 6 = 3 282 and 3 282 × 7 = 22 974.'),
  q('Calculate 2 345 × 67.', g(m.longMultiply(2345, 67)), ['156 115', '157 215', '147 115'], '60 × 2 345 = 140 700 and 7 × 2 345 = 16 415. The sum is 157 115.'),
  q('Estimate 2 345 × 67 by rounding 2 345 to the nearest 1 000 and 67 to the nearest 10.', g(m.estimateProduct(2345, 1000, 67, 10)), ['14 000', '1 400 000', '180 000'], '2 345 rounds to 2 000 and 67 rounds to 70. Then 2 000 × 70 = 140 000.'),
  q('Calculate 3 456 × 23 with long multiplication.', g(m.longMultiply(3456, 23)), ['78 488', '79 588', '69 120'], 'Partial products: 3 × 3 456 = 10 368 and 20 × 3 456 = 69 120. Together: 79 488.'),
  q('In 3 456 × 23, what is the partial product for the 2 tens (20 × 3 456)?', g(20 * 3456), ['6 912', '691 200', '10 368'], '2 × 3 456 = 6 912, and the 2 is in the tens place, so the partial product is 69 120.'),
  q('A bus holds 65 learners. How many learners can 28 buses carry?', g(65 * 28), ['1 720', '1 920', '93'], '28 buses × 65 learners = 1 820 learners.'),
  q('How does the distributive property help you to calculate 23 × 15?', 'Split 15 into 10 + 5 and multiply each part by 23', ['Swap the numbers round to make 15 × 23 instead', 'Multiply 23 by 1 so that the number stays the same', 'Group three numbers in a different way'], 'Split one number into parts: 15 = 10 + 5, so 23 × 15 = 23 × 10 + 23 × 5 = 230 + 115 = 345.'),
  q('What is 4 506 × 100?', g(4506 * 100), ['45 060', '4 506 000', '450 060'], 'Multiplying by 100 moves every digit two places to the left: 450 600.'),
  q('A machine makes 235 bottles an hour. How many bottles does it make in 24 hours?', g(235 * 24), ['5 540', '5 740', '4 640'], '24 × 235 = 20 × 235 + 4 × 235 = 4 700 + 940 = 5 640.'),
];

// ---------------------------------------------------------------- Term 2: dividing by 2-digit numbers
export const divide2: Q[] = [
  q('Calculate 3 447 ÷ 17.', div(3447, 17), ['202 remainder 31', '203 remainder 13', '200 remainder 47'], '200 × 17 = 3 400 leaves 47. 2 × 17 = 34 leaves 13. So 202 remainder 13.'),
  q('What is 200 × 17?', g(200 * 17), ['340', '34 000', '3 040'], '2 × 17 = 34, so 200 × 17 = 3 400.'),
  q('You know 10 × 17 = 170. How can you find 5 × 17?', `Halve 170 to get ${g(5 * 17)}`, ['Double 170 to get 340', 'Add 5 to 170 to get 175', 'Subtract 5 from 170 to get 165'], 'Five is half of ten, so 5 × 17 is half of 10 × 17: 170 ÷ 2 = 85.'),
  q('Calculate 1 440 ÷ 24.', div(1440, 24), ['6', '600', '66'], '24 × 60 = 1 440, so 1 440 ÷ 24 = 60.'),
  q('Calculate 5 640 ÷ 24.', div(5640, 24), ['234', '245', '225'], '24 × 200 = 4 800 leaves 840. 24 × 35 = 840. So 200 + 35 = 235.'),
  q('Calculate 4 536 ÷ 36.', div(4536, 36), ['125', '136', '116'], '36 × 100 = 3 600 leaves 936. 36 × 26 = 936. So 126.'),
  q('Calculate 1 000 ÷ 12.', div(1000, 12), ['83 remainder 14', '84 remainder 8', '82 remainder 16'], '12 × 83 = 996, and 1 000 − 996 = 4. So 83 remainder 4.'),
  q('500 sweets are shared equally among 12 learners. How many does each learner get, and how many are left over?', `${div(500, 12).replace(' remainder ', ' each and ')} left over`, ['42 each and 4 left over', '41 each and 12 left over', '40 each and 20 left over'], '12 × 41 = 492, and 500 − 492 = 8. Each learner gets 41 sweets and 8 are left over.'),
  q('Which calculation checks that 3 447 ÷ 17 = 202 remainder 13?', '202 × 17 + 13 = 3 447', ['202 × 17 = 3 447', '202 + 17 + 13 = 3 447', '17 × 13 + 202 = 3 447'], 'Multiply the quotient by the divisor and add the remainder: 202 × 17 = 3 434, and 3 434 + 13 = 3 447.'),
  q('Estimate 4 217 ÷ 21 by rounding to numbers that are easy to divide.', g(4200 / 20), ['21', '2 100', '200 remainder 20'], '4 217 is about 4 200 and 21 is about 20. Then 4 200 ÷ 20 = 210.'),
  q('Calculate 7 200 ÷ 18.', div(7200, 18), ['40', '4 000', '360'], '18 × 400 = 7 200, so 7 200 ÷ 18 = 400.'),
  q('Calculate 1 234 ÷ 15.', div(1234, 15), ['82 remainder 40', '83 remainder 4', '81 remainder 19'], '15 × 80 = 1 200 leaves 34. 15 × 2 = 30 leaves 4. So 82 remainder 4.'),
  q('300 learners go on a trip. Each bus seats 24 learners. How many buses are needed?', `${Math.ceil(300 / 24)} buses`, ['12 buses', '12 remainder 12 buses', '11 buses'], '300 ÷ 24 = 12 remainder 12. The 12 learners left over need another bus, so 13 buses are needed.'),
];

// ---------------------------------------------------------------- Term 4: multiplying by 3-digit numbers
export const multiply3: Q[] = [
  q('Calculate 4 362 × 108.', g(m.longMultiply(4362, 108)), ['470 096', '471 906', '472 096'], '8 × 4 362 = 34 896 and 100 × 4 362 = 436 200. The sum is 471 096.'),
  q('Estimate 4 362 × 108 by rounding 4 362 to the nearest 1 000 and 108 to the nearest 100.', g(m.estimateProduct(4362, 1000, 108, 100)), ['40 000', '4 000 000', '436 200'], '4 362 rounds to 4 000 and 108 rounds to 100. Then 4 000 × 100 = 400 000.'),
  q('In 4 362 × 108, what is the partial product 8 × 4 362?', g(8 * 4362), ['34 596', '35 896', '3 489'], '8 × 4 000 = 32 000, 8 × 300 = 2 400, 8 × 60 = 480 and 8 × 2 = 16. The total is 34 896.'),
  q('In 4 362 × 108, what is the partial product 100 × 4 362?', g(100 * 4362), ['43 620', '4 362 000', '435 200'], 'Multiplying by 100 moves every digit two places to the left: 436 200.'),
  q('Calculate 3 245 × 126.', g(m.longMultiply(3245, 126)), ['408 770', '409 870', '398 870'], '100 × 3 245 = 324 500, 20 × 3 245 = 64 900 and 6 × 3 245 = 19 470. The sum is 408 870.'),
  q('Calculate 2 457 × 312.', g(m.longMultiply(2457, 312)), ['765 584', '766 484', '756 584'], '300 × 2 457 = 737 100, 10 × 2 457 = 24 570 and 2 × 2 457 = 4 914. The sum is 766 584.'),
  q('Calculate 1 205 × 204.', g(m.longMultiply(1205, 204)), ['245 220', '244 820', '246 820'], '200 × 1 205 = 241 000 and 4 × 1 205 = 4 820. The sum is 245 820.'),
  q('Calculate 5 400 × 120.', g(5400 * 120), ['64 800', '6 480 000', '658 000'], '54 × 12 = 648, and the zeros give 648 000.'),
  q('A concert has 1 250 tickets at R180 each. How much money do all the tickets bring in?', R(1250 * 180), ['R22 500', 'R225 500', 'R2 250 000'], '1 250 × 180 = 225 000, so all the tickets bring in R225 000.'),
  q('A factory fills 3 125 bottles an hour. How many bottles does it fill in 168 hours?', g(3125 * 168), ['515 000', '525 600', '52 500'], '3 125 × 168 = 3 125 × 100 + 3 125 × 60 + 3 125 × 8 = 312 500 + 187 500 + 25 000 = 525 000.'),
  q('You multiply a number by 326 in long multiplication. Which partial product comes from the digit 3?', '300 × the number', ['3 × the number', '30 × the number', '326 × the number'], 'The 3 in 326 is in the hundreds place, so it stands for 300.'),
  q('Estimate 6 812 × 395 by rounding 6 812 to the nearest 1 000 and 395 to the nearest 100.', g(m.estimateProduct(6812, 1000, 395, 100)), ['280 000', '2 400 000', '28 000 000'], '6 812 rounds to 7 000 and 395 rounds to 400. Then 7 000 × 400 = 2 800 000.'),
  q('Which is the correct way to use the distributive property for 12 × 105?', '12 × 100 + 12 × 5 = 1 260', ['12 × 100 × 5 = 6 000 (multiplied the parts)', '12 + 100 + 5 = 117 (added all the numbers)', '12 × 105 = 105 × 120 (changed a number)'], '105 = 100 + 5, so 12 × 105 = 1 200 + 60 = 1 260.'),
  q('What is 3 456 × 0?', '0', ['3 456', '3 450', '1'], 'Any number multiplied by 0 is 0.'),
];

// ---------------------------------------------------------------- Term 4: dividing by 3-digit numbers
export const divide3: Q[] = [
  q('Calculate 3 484 ÷ 132.', div(3484, 132), ['26 remainder 25', '27 remainder 52', '26 remainder 5'], '132 × 20 = 2 640 leaves 844. 132 × 6 = 792 leaves 52. So 26 remainder 52.'),
  q('In 3 484 ÷ 132, what is the first multiple you take away, 20 × 132?', g(20 * 132), ['264', '26 400', '2 460'], '2 × 132 = 264, so 20 × 132 = 2 640.'),
  q('3 484 − 2 640 = ?', g(3484 - 2640), ['944', '1 844', '804'], '3 484 − 2 640 = 844. This is what is still to be divided.'),
  q('Calculate 8 640 ÷ 120.', div(8640, 120), ['7', '720', '82'], '120 × 70 = 8 400 leaves 240, and 120 × 2 = 240. So 72.'),
  q('Calculate 6 125 ÷ 125.', div(6125, 125), ['48', '59', '39'], '125 × 40 = 5 000 leaves 1 125, and 125 × 9 = 1 125. So 49.'),
  q('Calculate 9 876 ÷ 123.', div(9876, 123), ['80 remainder 63', '81 remainder 0', '79 remainder 36'], '123 × 80 = 9 840 leaves 36. So 80 remainder 36.'),
  q('Calculate 5 000 ÷ 150.', div(5000, 150), ['33 remainder 5', '34 remainder 0', '32 remainder 200'], '150 × 33 = 4 950 and 5 000 − 4 950 = 50. So 33 remainder 50.'),
  q('Which calculation checks that 9 876 ÷ 123 = 80 remainder 36?', '80 × 123 + 36 = 9 876', ['80 × 123 = 9 876', '80 + 123 + 36 = 9 876', '123 × 36 + 80 = 9 876'], '80 × 123 = 9 840, and 9 840 + 36 = 9 876.'),
  q('Estimate 7 812 ÷ 205 by rounding to numbers that are easy to divide.', g(8000 / 200), ['4', '400', '38 remainder 22'], '7 812 is about 8 000 and 205 is about 200. Then 8 000 ÷ 200 = 40.'),
  q('R12 600 is shared equally among 105 workers. How much does each worker get?', R(12600 / 105), ['R12', 'R1 200', 'R125'], '105 × 120 = 12 600, so each worker gets R120.'),
  q('2 000 bricks are packed on pallets of 150 bricks. How many full pallets are packed, and how many bricks are left over?', `${div(2000, 150).replace(' remainder ', ' full pallets and ')} bricks left over`, ['14 full pallets and 0 bricks left over', '12 full pallets and 200 bricks left over', '13 full pallets and 5 bricks left over'], '150 × 13 = 1 950 and 2 000 − 1 950 = 50. So 13 full pallets and 50 bricks are left over.'),
  q('Calculate 4 500 ÷ 100.', div(4500, 100), ['4 500', '4 050', '450'], 'Dividing by 100 moves every digit two places to the right: 45.'),
  q('How many packets of 125 g can be filled from 3 000 g of rice?', g(3000 / 125), ['2 400', '240', '22'], '125 × 24 = 3 000, so 24 packets can be filled.'),
  q('Calculate 7 245 ÷ 105.', div(7245, 105), ['79', '59', '690'], '105 × 60 = 6 300 leaves 945, and 105 × 9 = 945. So 69.'),
];
