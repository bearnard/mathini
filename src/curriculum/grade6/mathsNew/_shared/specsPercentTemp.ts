import type { Q } from '../../../grade10/mathematics/_shared/bank';
import { q } from './q6';
import { group as g } from '../../../../components/diagrams/maths/grade6AddSub';
import * as p from '../../../../components/diagrams/maths/grade6Percent';

const R = (n: number) => `R${g(n)}`;
const pc = (n: number | null) => `${n}%`;
const deg = (tenths: number) => p.tempText(tenths);

// ---------------------------------------------------------------- Term 3: percentages
export const percentages: Q[] = [
  q('What is 1/10 written as a percentage?', pc(p.fractionToPercent(1, 10)), ['1%', '100%', '0,1%'], '1/10 = 10/100, and 10/100 is 10 per cent.'),
  q('What is 7/100 written as a percentage?', pc(p.fractionToPercent(7, 100)), ['70%', '17%', '0,07%'], 'Per cent means out of 100, so 7/100 is 7%.'),
  q('What is 3/10 written as a percentage?', pc(p.fractionToPercent(3, 10)), ['3%', '33%', '300%'], '3/10 = 30/100, which is 30%.'),
  q('What is 1/4 written as a percentage?', pc(p.fractionToPercent(1, 4)), ['14%', '40%', '75%'], '4 × 25 = 100, so 1/4 = 25/100 = 25%.'),
  q('What is 3/4 written as a percentage?', pc(p.fractionToPercent(3, 4)), ['34%', '60%', '25%'], '3/4 = 75/100, which is 75%.'),
  q('What is 1/5 written as a percentage?', pc(p.fractionToPercent(1, 5)), ['15%', '50%', '5%'], '5 × 20 = 100, so 1/5 = 20/100 = 20%.'),
  q('A grid has 100 squares and 40 of them are shaded. What percentage is shaded?', pc(p.partAsPercent(40, 100)), ['4%', '60%', '140%'], '40 out of 100 is 40%.'),
  q('Which decimal fraction is equal to 25%?', '0,25', ['2,5', '0,025', '0,52'], '25% is 25/100, and 25 hundredths is 0,25.'),
  q('What is 0,3 written as a percentage?', pc(p.decimalToPercent(30)), ['3%', '0,3%', '300%'], '0,3 is 3 tenths, which is 30/100, so it is 30%.'),
  q('What is 25% of R300?', R(p.percentOf(25, 300)!), ['R25', 'R7 500', 'R225'], '25% = 1/4, so find a quarter of R300: R300 ÷ 4 = R75.'),
  q('What is 50% of 80 learners?', String(p.percentOf(50, 80)), ['50', '4', '30'], '50% is half, and half of 80 is 40.'),
  q('What is 10% of R450?', R(p.percentOf(10, 450)!), ['R4,50', 'R450', 'R405'], '10% is 1/10, so R450 ÷ 10 = R45.'),
  q('A jacket costs R450. It is sold with a 10% discount. What is the new price?', R(p.afterDiscount(450, 10)!), ['R45', 'R445', 'R495'], '10% of R450 is R45. The new price is R450 − R45 = R405.'),
  q('Sipho gets 18 out of 20 in a test. What percentage is this?', pc(p.partAsPercent(18, 20)), ['18%', '80%', '20%'], '20 × 5 = 100, so 18/20 = 90/100 = 90%.'),
];

// ---------------------------------------------------------------- Term 3: temperature
export const temperature: Q[] = [
  q('At what temperature does pure water freeze?', deg(0), ['10 °C', '32 °C', '100 °C'], 'The freezing point of pure water is 0 degrees Celsius.'),
  q('At what temperature does pure water boil?', deg(1000), ['10 °C', '90 °C', '212 °C'], 'The boiling point of pure water is 100 degrees Celsius.'),
  q('What is the normal temperature of a healthy human body?', deg(370), ['27 °C', '73 °C', '100 °C'], 'The average normal body temperature is about 37 degrees Celsius.'),
  q('Which temperature is the best guess for a hot summer day?', deg(330), ['3 °C', '63 °C', '103 °C'], 'A hot summer day is warm, about 33 °C. 3 °C is near freezing and 63 °C and 103 °C are far too hot.'),
  q('On a thermometer, 0, 10, 20 and 30 are numbered and each step between small lines is 2 degrees. The mercury is 3 steps above 20. What is the temperature?', deg(260), ['23 °C', '30 °C', '29 °C'], 'Each step is 2 degrees, so 3 steps are 3 × 2 = 6 degrees above 20: 26 °C.'),
  q('The mercury on a thermometer is half way between 20 °C and 30 °C. What is the temperature?', deg(250), ['23 °C', '27 °C', '50 °C'], 'Half way between 20 and 30 is 25.'),
  q('Which of these temperatures is higher than 37,0 °C and lower than 37,5 °C?', deg(372), ['36,9 °C', '37,5 °C', '37,8 °C'], 'Compare the whole degrees first and then the tenths: 37,2 is more than 37,0 and less than 37,5. 36,9 is too low, and 37,5 and 37,8 are not lower than 37,5.'),
  q('Which of these temperatures is the lowest: 12 °C, 21 °C, 9 °C or 19 °C?', deg(90), ['12 °C', '19 °C', '21 °C'], '9 is smaller than 12, 19 and 21, so 9 °C is the lowest.'),
  q('The highest temperature one day is 24 °C and the lowest is 11 °C. How much warmer is the highest than the lowest?', deg(p.tempDifference(240, 110)), ['35 °C', '14 °C', '12 °C'], 'Subtract: 24 − 11 = 13 degrees.'),
  q('A learner has a temperature of 37,2 °C. Normal body temperature is 36,7 °C. How much higher is the learner\'s temperature?', deg(p.tempDifference(372, 367)), ['0,05 °C', '5 °C', '1,5 °C'], '37,2 − 36,7 = 0,5 degrees.'),
  q('At 6 o\'clock in the morning it is 14 °C. By noon the temperature has risen by 9 °C. What is the temperature at noon?', deg(p.afterChange(140, 90)!), ['5 °C', '24 °C', '22 °C'], 'A rise means add: 14 + 9 = 23 degrees.'),
  q('The temperature is 14 °C in the afternoon and falls by 6 °C in the evening. What is the temperature in the evening?', deg(p.afterChange(140, -60)!), ['20 °C', '9 °C', '7 °C'], 'A fall means subtract: 14 − 6 = 8 degrees.'),
];
