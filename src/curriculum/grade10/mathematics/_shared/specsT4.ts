import { q, type Q } from './bank';
import * as h from '../../../../components/diagrams/maths/grade10Helpers';
import * as t from '../../../../components/diagrams/maths/grade10Helpers3';
import * as p from '../../../../components/diagrams/maths/grade10Helpers4';

const fs = h.fracStr;
const d2 = (n: number) => h.dec(n, 2).replace(/0$/, '').replace(/,$/, '');
const pf = (a: number, b: number) => fs(p.probability(a, b));

// ---------------------------------------------------------------- Probability
export const probabilityQs: Q[] = [
  q('A fair die is rolled once. What is the probability of rolling a prime number?', pf(3, 6), ['1/3', '2/3', '5/6'], 'The prime numbers on a die are 2, 3 and 5, so 3 of the 6 equally likely outcomes are favourable: 3/6 = 1/2.'),
  q('Two coins are tossed together. How many outcomes are in the sample space?', String(p.coinOutcomes(2)), ['2', '3', '6'], 'List them: HH, HT, TH, TT. Each coin has 2 outcomes, so 2 × 2 = 4.'),
  q('Two coins are tossed together. What is the probability of getting two heads?', fs(p.probability(1, p.coinOutcomes(2))), ['1/2', '1/3', '1/8'], 'Only HH is favourable out of the 4 outcomes: 1/4.'),
  q('P(A) = 0,35. What is the probability that A does NOT happen?', d2(1 - 0.35), ['0,35', '0,53', '1,35'], 'The probabilities of an event and its complement add up to 1: 1 − 0,35 = 0,65.'),
  q('A bag has 5 red, 3 blue and 2 green balls. One ball is drawn. What is the probability that it is not blue?', fs(p.complement(p.probability(3, 10))), ['3/10', '1/2', '3/7'], 'P(blue) = 3/10, so P(not blue) = 1 − 3/10 = 7/10. Check: 5 + 2 = 7 balls are not blue out of 10.'),
  q('Events A and B are mutually exclusive, with P(A) = 0,5 and P(B) = 0,3. What is P(A or B)?', d2(p.unionProbability(0.5, 0.3, 0)), ['0,15', '0,2', '1'], 'Mutually exclusive events cannot happen together, so P(A and B) = 0 and P(A or B) = 0,5 + 0,3 = 0,8.'),
  q('P(A) = 0,6, P(B) = 0,5 and P(A and B) = 0,3. What is P(A or B)?', d2(p.unionProbability(0.6, 0.5, 0.3)), ['1,1', '0,3', '0,9'], 'P(A or B) = P(A) + P(B) − P(A and B) = 0,6 + 0,5 − 0,3 = 0,8.'),
  q('Of 40 learners, 25 play soccer, 18 play netball and 8 play both. How many play neither sport?', String(p.neitherCount(40, 25, 18, 8)), ['0', '8', '15'], 'n(soccer or netball) = 25 + 18 − 8 = 35, so 40 − 35 = 5 learners play neither.'),
  q('In a Venn diagram n(S) = 30, n(A) = 12, n(B) = 15 and n(A and B) = 5. What is P(A or B)?', fs(p.probability(p.unionCount(12, 15, 5), 30)), ['9/10', '3/5', '27/30'], 'n(A or B) = 12 + 15 − 5 = 22, so P(A or B) = 22/30 = 11/15.'),
  q('A coin is tossed 200 times and lands on heads 124 times. What is the relative frequency of heads?', d2(p.relativeFrequency(124, 200)), ['0,5', '0,38', '1,24'], 'Relative frequency = number of heads ÷ number of tosses = 124 ÷ 200 = 0,62.'),
  q('Two dice are rolled and the numbers are added. What is the probability that the sum is 7?', fs(p.probability(p.diceSumWays(7), 36)), ['1/12', '7/36', '1/7'], 'The sum 7 can happen in 6 ways (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) out of 36 outcomes: 6/36 = 1/6.'),
  q('A card is drawn from a pack. Which two events are mutually exclusive?', 'Drawing a heart and drawing a spade', ['Drawing a heart and drawing a king', 'Drawing a red card and drawing a queen', 'Drawing a spade and drawing an ace'], 'A card cannot be a heart and a spade at the same time. A king can be a heart, a queen can be red, and an ace can be a spade.'),
  q('The probability of rain on a day in March is 0,2. On about how many of the 30 days do you expect rain?', String(p.expectedCount(0.2, 30)), ['2', '10', '20'], 'Expected number = probability × number of days = 0,2 × 30 = 6.'),
  q('Which value cannot be the probability of an event?', '1,2', ['0', '0,5', '1'], 'A probability is always between 0 and 1 (inclusive). 1,2 is greater than 1, so it is impossible.'),
];

// ---------------------------------------------------------------- Revision and examination technique (mixed Terms 1 to 4, marks shown)
const roots = (a: number, b: number, c: number) => {
  const disc = b * b - 4 * a * c;
  const r1 = (-b + Math.sqrt(disc)) / (2 * a);
  const r2 = (-b - Math.sqrt(disc)) / (2 * a);
  return [r1, r2].sort((x, y) => y - x);
};
const [qa, qb] = roots(1, -1, -12);
const ci = t.compoundAmount(3000, 10, 2);
const sphere = t.sphereVolume(3);
const elev = (Math.atan(30 / 40) * 180) / Math.PI;
const dist = t.distanceExact([1, 2], [4, 6]);
const grad = t.gradient([2, 1], [6, 9]);
const mpt = t.midpoint([2, 3], [8, 7]);
const iqr = t.fiveNumber([4, 6, 7, 9, 10, 12, 15, 18]).iqr;

export const revisionQs: Q[] = [
  q('(2 marks) Factorise completely: x² − 9', '(x − 3)(x + 3)', ['(x − 3)²', '(x + 3)²', 'x(x − 9)'], 'x² − 9 is a difference of squares: x² − 3² = (x − 3)(x + 3) (1 mark for the factors, 1 mark for the signs).'),
  q('(3 marks) Solve for x: x² − x − 12 = 0', `x = ${qa} or x = ${h.int(qb)}`, ['x = 3 or x = −4', 'x = 12 or x = −1', 'x = −4 or x = −3'], 'Factorise: (x − 4)(x + 3) = 0 (1 mark). Each factor can be 0 (1 mark): x = 4 or x = −3 (1 mark).'),
  q('(2 marks) Solve for x: 2^(x + 1) = 16', '3', ['4', '7', '15'], '16 = 2⁴ (1 mark), so x + 1 = 4 and x = 3 (1 mark).'),
  q('(2 marks) Solve for x: 3x − 7 ≥ 11', 'x ≥ 6', ['x ≤ 6', 'x ≥ 4', 'x ≥ 18'], 'Add 7: 3x ≥ 18 (1 mark). Divide by 3: x ≥ 6 (1 mark). The sign stays because you divide by a positive number.'),
  q('(2 marks) What is the 11th term of the pattern 3; 7; 11; 15; …?', String(4 * 11 - 1), ['47', '41', '37'], 'd = 4, so Tₙ = 4n − 1 (1 mark). T₁₁ = 4(11) − 1 = 43 (1 mark).'),
  q('(2 marks) Expand and simplify: (x + 3)²', 'x² + 6x + 9', ['x² + 9', 'x² + 3x + 9', 'x² + 6x + 6'], '(x + 3)(x + 3) = x² + 3x + 3x + 9 = x² + 6x + 9 (1 mark for expanding, 1 mark for collecting like terms).'),
  q('(2 marks) What are the coordinates of the y-intercept of y = 2x² − 8?', '(0; −8)', ['(0; 8)', '(−8; 0)', '(2; 0)'], 'The y-intercept is where x = 0: y = 2(0)² − 8 = −8 (1 mark). The point is (0; −8) (1 mark).'),
  q('(3 marks) What is the distance between the points (1; 2) and (4; 6)?', String(dist), ['7', '25', '3,5'], 'AB² = (4 − 1)² + (6 − 2)² = 9 + 16 = 25 (2 marks). AB = √25 = 5 (1 mark).'),
  q('(2 marks) What is the gradient of the line through (2; 1) and (6; 9)?', fs(grad), ['1/2', '4', '8'], 'Gradient = (9 − 1) ÷ (6 − 2) = 8 ÷ 4 = 2 (1 mark for the substitution, 1 mark for the answer).'),
  q('(3 marks) What is the midpoint of the line joining (2; 3) and (8; 7)?', `(${fs(mpt[0])}; ${fs(mpt[1])})`, ['(6; 4)', '(10; 10)', '(3; 2)'], 'x = (2 + 8) ÷ 2 = 5 (1 mark). y = (3 + 7) ÷ 2 = 5 (1 mark). The midpoint is (5; 5) (1 mark).'),
  q('(3 marks) R3 000 is invested at 10% p.a. compound interest for 2 years. What is the amount?', t.rand(ci), ['R3 600,00', 'R3 300,00', 'R3 660,00'], 'A = P(1 + i)ⁿ = 3 000(1,1)² (2 marks) = R3 630,00 (1 mark). Simple interest would give R3 600,00.'),
  q('(3 marks) What is the interquartile range of 4; 6; 7; 9; 10; 12; 15; 18?', String(iqr), ['11', '14', '6'], 'Q₁ = (6 + 7) ÷ 2 = 6,5 and Q₃ = (12 + 15) ÷ 2 = 13,5 (2 marks). IQR = 13,5 − 6,5 = 7 (1 mark).'),
  q('(3 marks) What is the volume of a sphere with a radius of 3 cm (one decimal place)?', `${h.dec(sphere, 1)} cm³`, ['37,7 cm³', '113,0 cm³', '28,3 cm³'], 'V = (4/3)πr³ = (4/3) × π × 27 (2 marks) = 113,1 cm³ (1 mark).'),
  q('(3 marks) A 30 m tall pole casts a shadow 40 m long. What is the angle of elevation of the sun (one decimal place)?', `${h.dec(elev, 1)}°`, ['53,1°', '48,6°', '41,4°'], 'tan θ = 30 ÷ 40 = 0,75 (2 marks). θ = tan⁻¹(0,75) = 36,9° (1 mark).'),
  q('(2 marks) A bag has the letters of the word MATHEMATICS. One letter is drawn. What is the probability that it is a vowel?', pf(4, 11), ['4/7', '1/3', '7/11'], 'MATHEMATICS has 11 letters. The vowels are A, E, A, I: 4 of 11 (2 marks): 4/11.'),
  q('(2 marks) Which exam habit earns the most marks on a 3-mark question?', 'Show each step of your working', ['Write only the final answer', 'Leave it blank if you are unsure', 'Round off every number early'], 'Method marks are given for steps. Even if the final answer is wrong you can still earn marks for correct working.'),
];
