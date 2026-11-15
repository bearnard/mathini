import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { DigitSumPicture, FactorTreePicture, PrimeVennPicture, RatioBlocks, ValueChart } from '../../../../../components/diagrams/maths/Grade7Number';
import { digitSum, largestFrom, primeFactors, primeVenn, rateOf, simplifyRatio, smallestFrom, spaced } from '../../../../../components/diagrams/maths/grade7Helpers';

// Every number in the slides below comes from tested helpers (grade7Helpers.test.ts, wholeNumbersLesson.test.ts).
const digits = [7, 4, 2, 9];
const big = largestFrom(digits);
const small = smallestFrom(digits);
const div = { yes: 4572, no: 4571 };
const factors84 = primeFactors(84);
const v1824 = primeVenn(18, 24);
const v68 = primeVenn(6, 8);
const v3045 = primeVenn(30, 45);
const ratio = simplifyRatio(15, 25);
const speed = rateOf(180, 3);
const check = {
  f90: primeFactors(90),
  v: primeVenn(12, 18),
  ratio: simplifyRatio(18, 30),
  rate: rateOf(150, 2),
};
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Place value: build the largest number',
    content: slide(
      <>
        <Rule>The biggest digit goes in the biggest place. Read the places from the left: thousands, hundreds, tens, ones.</Rule>
        <ValueChart digits={String(big).split('')} heads={['thousands', 'hundreds', 'tens', 'ones']} highlight={0} caption={`largest number: ${spaced(big)}`} />
        <Worked
          title={`Digits ${digits.join(', ')}`}
          steps={[
            <>Largest digit first: 9, then 7, then 4, then 2.</>,
            <>Largest 4-digit number: <strong>{spaced(big)}</strong>. Smallest: {spaced(small)}.</>,
          ]}
        />
        <Mistake>Writing the digits in the order given. 7 429 is not the largest: the 9 must go in the thousands place.</Mistake>
      </>,
    ),
  },
  {
    title: 'Divisibility: use the digit sum',
    content: slide(
      <>
        <Rule>A number is divisible by 9 if its digit sum is divisible by 9. The same works for 3.</Rule>
        <DigitSumPicture n={div.yes} by={9} />
        <Worked
          title={`Is ${spaced(div.yes)} divisible by 9?`}
          steps={[
            <>Add the digits: {String(div.yes).split('').join(' + ')} = {digitSum(div.yes)}.</>,
            <>{digitSum(div.yes)} ÷ 9 = {digitSum(div.yes) / 9}, so <strong>yes</strong>.</>,
            <>Compare {spaced(div.no)}: the digits add to {digitSum(div.no)}, which 9 does not divide. So no.</>,
          ]}
        />
        <Mistake>Looking only at the last digit. That works for 2, 5 and 10, but not for 9.</Mistake>
      </>,
    ),
  },
  {
    title: 'Prime factors with a factor tree',
    content: slide(
      <>
        <Rule>Split a number into factors again and again until every factor is prime. A prime has only two factors: 1 and itself.</Rule>
        <FactorTreePicture n={84} />
        <Worked
          title="Prime factorisation of 84"
          steps={[
            <>84 = 2 × 42. The 2 is prime. Split 42.</>,
            <>42 = 2 × 21. Split 21.</>,
            <>21 = 3 × 7. Both are prime.</>,
            <>84 = <strong>{factors84.join(' × ')}</strong>.</>,
          ]}
        />
        <Mistake>Stopping at 4 × 21. The 4 is not prime (2 × 2), so keep splitting.</Mistake>
      </>,
    ),
  },
  {
    title: 'HCF and LCM from prime factors',
    content: slide(
      <>
        <Rule>HCF: multiply the primes the numbers share. LCM: multiply all the primes, counting shared ones once.</Rule>
        <PrimeVennPicture a={18} b={24} />
        <Worked
          steps={[
            <>HCF of 18 and 24: shared primes {v1824.common.join(' and ')}, so {v1824.common.join(' × ')} = <strong>{v1824.hcf}</strong>.</>,
            <>LCM of 6 and 8: 6 = {primeFactors(6).join(' × ')} and 8 = {primeFactors(8).join(' × ')}. Shared {v68.common[0]}. LCM = {[...v68.common, ...v68.onlyA, ...v68.onlyB].join(' × ')} = <strong>{v68.lcm}</strong>.</>,
            <>HCF of 30 and 45: shared {v3045.common.join(' and ')}, so <strong>{v3045.hcf}</strong>.</>,
          ]}
        />
        <Mistake>Mixing the two up. The HCF is never bigger than the smaller number. The LCM is never smaller than the bigger one.</Mistake>
      </>,
    ),
  },
  {
    title: 'Ratio and rate',
    content: slide(
      <>
        <Rule>Simplify a ratio by dividing both parts by their HCF. A rate compares different units, such as distance ÷ time.</Rule>
        <RatioBlocks a={15} b={25} />
        <Worked
          steps={[
            <>15 : 25. The HCF is {ratio.by}. Divide both: <strong>{ratio.a} : {ratio.b}</strong>.</>,
            <>A car drives 180 km in 3 hours. Rate = 180 ÷ 3 = <strong>{speed} km/h</strong>.</>,
          ]}
        />
        <Mistake>Swapping the order, 5 : 3. The ratio {ratio.a} : {ratio.b} keeps the order of the question. And a rate is a division, not 180 × 3 = 540.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Write 90 as a product of primes.</li>
            <li>Find the HCF and LCM of 12 and 18.</li>
            <li>Simplify the ratio 18 : 30.</li>
            <li>A bus travels 150 km in 2 hours. What is its average rate?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>90 = {check.f90.join(' × ')}.</li>
            <li>HCF = {check.v.hcf} (shared {check.v.common.join(' × ')}). LCM = {check.v.lcm}.</li>
            <li>{check.ratio.a} : {check.ratio.b} (divide by {check.ratio.by}).</li>
            <li>150 ÷ 2 = {check.rate} km/h.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the prime factorisation of 84?',
    options: ['2 × 2 × 3 × 7', '2 × 3 × 14', '4 × 21', '2 × 42'],
    answer: '2 × 2 × 3 × 7',
    explanation: '84 = 2 × 2 × 3 × 7, and all factors are prime.',
  },
  {
    prompt: 'What is the highest common factor (HCF) of 18 and 24?',
    options: ['6', '3', '9', '12'],
    answer: '6',
    explanation: 'The greatest number dividing both 18 and 24 is 6.',
  },
  {
    prompt: 'What is the lowest common multiple (LCM) of 6 and 8?',
    options: ['24', '12', '18', '48'],
    answer: '24',
    explanation: '24 is the first multiple shared by 6 and 8.',
  },
  {
    prompt: 'Simplify the ratio 15:25.',
    options: ['3:5', '5:3', '15:5', '6:10'],
    answer: '3:5',
    explanation: 'Divide both terms by 5 to get 3:5.',
  },
  {
    prompt: 'A car travels 180 km in 3 hours. What is its average rate?',
    options: ['60 km/h', '90 km/h', '30 km/h', '540 km/h'],
    answer: '60 km/h',
    explanation: 'Rate = distance ÷ time = 180 ÷ 3 = 60 km/h.',
  },
  {
    prompt: 'Which number is divisible by 9?',
    options: ['4 572', '4 571', '4 575', '4 578'],
    answer: '4 572',
    explanation: '4 + 5 + 7 + 2 = 18, and 18 is divisible by 9.',
  },
  {
    prompt: 'Which is the largest 4-digit number that can be made from 7, 4, 2, and 9?',
    options: ['9 742', '9 472', '7 942', '9 724'],
    answer: '9 742',
    explanation: 'Arrange digits from largest to smallest: 9, 7, 4, 2.',
  },
  {
    prompt: 'What is the greatest common factor of 30 and 45?',
    options: ['15', '5', '10', '30'],
    answer: '15',
    explanation: '15 is the biggest factor shared by 30 and 45.',
  },
];

const WholeNumbers = () => (
  <CapsSubjectTopic
    title="Whole Numbers"
    subtitle="Factors, multiples, HCF, LCM, ratio, and rate"
    learnSteps={learnSteps}
    task="gr7-whole-numbers-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default WholeNumbers;
