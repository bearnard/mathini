import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { SegmentBar } from '../../../../../components/diagrams/maths/Grade8FinancePictures';
import { changeInRatio, hoursFor, shareInRatio, simplifyRatio, speedKmH, unitRate } from '../../../../../components/diagrams/maths/grade8Finance';
import { formatRand } from '../../../../../components/diagrams/maths/mathsHelpers';

// Every number in the slides comes from grade8Finance (tested in grade8Finance.test.ts); g8FinanceT1.test.ts checks the rendered text.
const girls = 12;
const boys = 18;
const simple = simplifyRatio(girls, boys);
const wrongOrder = simplifyRatio(boys, girls);
const grams = simplifyRatio(250, 1000);

const whole = 30_000; // R300 in cents
const shareParts = [3, 2];
const share = shareInRatio(whole / 100, shareParts) ?? { onePart: 0, shares: [0, 0] };
const wrongHalf = whole / 100 / 2;

const up = changeInRatio(12, 3, 5) ?? { onePart: 0, result: 0 };
const down = changeInRatio(20, 5, 3) ?? { onePart: 0, result: 0 };

const speed = speedKmH(240, 3) ?? 0;
const dist = speed * 4;
const time = hoursFor(300, 60) ?? 0;
const perKgA = unitRate(66, 3) ?? 0;
const perKgB = unitRate(125, 5) ?? 0;
const rate6 = unitRate(36, 6) ?? 0;

const c1 = simplifyRatio(20, 30);
const c2 = shareInRatio(56, [3, 4]) ?? { onePart: 0, shares: [0, 0] };
const c3 = changeInRatio(15, 3, 7) ?? { onePart: 0, result: 0 };
const c4 = speedKmH(150, 3) ?? 0;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'A ratio compares quantities of the same kind',
    content: slide(
      <>
        <Rule>A ratio compares two quantities of the same kind, in the order given. Divide both numbers by the same number to write it in simplest form.</Rule>
        <SegmentBar
          segments={[
            { label: `${girls} girls`, value: girls },
            { label: `${boys} boys`, value: boys },
          ]}
          total={`${girls + boys} learners`}
          aria={`One bar for ${girls + boys} learners: ${girls} girls and ${boys} boys.`}
        />
        <Worked
          title={<>A class has {girls} girls and {boys} boys.</>}
          steps={[
            <>Girls to boys is {girls} : {boys}.</>,
            <>The highest number that divides both is {simple.by}: {girls} ÷ {simple.by} = {simple.a} and {boys} ÷ {simple.by} = {simple.b}.</>,
            <>In simplest form the ratio is <strong>{simple.a} : {simple.b}</strong>.</>,
          ]}
        />
        <Mistake>
          Mixing the order or the units. Boys to girls is {wrongOrder.a} : {wrongOrder.b}, not {simple.a} : {simple.b}. And 250 g : 1 kg is not 250 : 1: write both in grams, 250 : 1 000, and simplify to {grams.a} : {grams.b}.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Sharing in a given ratio',
    content: slide(
      <>
        <Rule>To share a whole in a ratio, add the parts, divide the whole by the number of parts to find one part, then multiply.</Rule>
        <SegmentBar
          segments={[
            { label: '3 parts', value: 3 },
            { label: '2 parts', value: 2 },
          ]}
          total={`${formatRand(whole)} in 5 parts`}
          aria={`A bar of ${formatRand(whole)} split into 5 equal parts: 3 parts for Thabo and 2 parts for Lerato.`}
        />
        <Worked
          title={<>Thabo and Lerato share {formatRand(whole)} in the ratio 3 : 2.</>}
          steps={[
            <>3 + 2 = 5 parts.</>,
            <>One part is R{whole / 100} ÷ 5 = R{share.onePart}.</>,
            <>Thabo: 3 × R{share.onePart} = <strong>R{share.shares[0]}</strong>. Lerato: 2 × R{share.onePart} = <strong>R{share.shares[1]}</strong>.</>,
            <>Check: R{share.shares[0]} + R{share.shares[1]} = R{whole / 100}.</>,
          ]}
        />
        <Mistake>
          Dividing by the number of people: R{whole / 100} ÷ 2 = R{wrongHalf} is not one part. Divide by the 5 parts.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Increasing and decreasing in a ratio',
    content: slide(
      <>
        <Rule>To change a number in the ratio from : to, divide it by the first number to find one part, then multiply by the second number.</Rule>
        <SegmentBar
          segments={[
            { label: '12', value: 3 },
            { label: '+8', value: 2 },
          ]}
          total="12 increased in the ratio 3 : 5 is 20"
          aria="A bar for 12 in 3 parts, with 2 more parts of 4 added, making 5 parts and 20 altogether."
        />
        <Worked
          steps={[
            <>Increase 12 in the ratio 3 : 5. One part is 12 ÷ 3 = {up.onePart}.</>,
            <>5 × {up.onePart} = <strong>{up.result}</strong>.</>,
            <>Decrease 20 in the ratio 5 : 3. One part is 20 ÷ 5 = {down.onePart}, so 3 × {down.onePart} = <strong>{down.result}</strong>.</>,
          ]}
        />
        <Mistake>
          Adding the ratio numbers to the number: 12 in the ratio 3 : 5 is not 12 + 5. Find one part first.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Rate: speed, distance and time',
    content: slide(
      <>
        <Rule>A rate compares two quantities of different kinds, such as rand per kilogram or kilometres per hour. Speed = distance ÷ time, distance = speed × time and time = distance ÷ speed.</Rule>
        <SegmentBar
          segments={[
            { label: `${speed} km`, value: 1 },
            { label: `${speed} km`, value: 1 },
            { label: `${speed} km`, value: 1 },
          ]}
          total="240 km in 3 hours"
          aria={`A bar for 240 kilometres split into 3 hours of ${speed} kilometres each.`}
        />
        <Worked
          steps={[
            <>A car drives 240 km in 3 hours: 240 ÷ 3 = <strong>{speed} km/h</strong>.</>,
            <>At {speed} km/h for 4 hours it drives {speed} × 4 = <strong>{dist} km</strong>.</>,
            <>300 km at 60 km/h takes 300 ÷ 60 = <strong>{time} hours</strong>.</>,
            <>Best buy: 3 kg for R66 is R{perKgA} per kg and 5 kg for R125 is R{perKgB} per kg, so the 3 kg pack is cheaper per kg. 6 items for R36 is R{rate6} each.</>,
          ]}
        />
        <Mistake>
          Dividing time by distance: speed is not 3 ÷ 240. Distance goes on top: 240 ÷ 3.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Simplify the ratio 20 : 30.</>,
          <>Share 56 sweets in the ratio 3 : 4.</>,
          <>Increase 15 in the ratio 3 : 7.</>,
          <>A bus drives 150 km in 3 hours. What is its speed?</>,
        ]}
        answers={[
          <>Divide both by {c1.by}: {c1.a} : {c1.b}.</>,
          <>One part is 56 ÷ 7 = {c2.onePart}. The shares are {c2.shares[0]} and {c2.shares[1]}.</>,
          <>One part is 15 ÷ 3 = {c3.onePart}, so the answer is 7 × {c3.onePart} = {c3.result}.</>,
          <>150 ÷ 3 = {c4} km/h.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "A bag has 8 red and 12 blue sweets. What is the ratio of red to blue in simplest form?",
    options: ["3 : 2", "4 : 6", "2 : 3", "1 : 2"],
    answer: "2 : 3",
    explanation: "8 : 12 divided by 4 is 2 : 3.",
  },
  {
    prompt: "Simplify the ratio 15 : 25.",
    options: ["3 : 5", "5 : 3", "1 : 5", "15 : 5"],
    answer: "3 : 5",
    explanation: "Divide both numbers by 5: 3 : 5.",
  },
  {
    prompt: "A class has 14 girls and 21 boys. What is the ratio of boys to girls in simplest form?",
    options: ["2 : 3", "21 : 14", "7 : 3", "3 : 2"],
    answer: "3 : 2",
    explanation: "21 : 14 divided by 7 is 3 : 2, with boys first.",
  },
  {
    prompt: "Share R450 between two friends in the ratio 4 : 5. How much does the friend with the bigger share get?",
    options: ["R200,00", "R250,00", "R225,00", "R280,00"],
    answer: "R250,00",
    explanation: "4 + 5 = 9 parts; R450 ÷ 9 = R50; 5 × R50 = R250.",
  },
  {
    prompt: "Share 40 sweets in the ratio 3 : 5. How many sweets are in the smaller share?",
    options: ["25", "5", "15", "20"],
    answer: "15",
    explanation: "3 + 5 = 8 parts; 40 ÷ 8 = 5; 3 × 5 = 15.",
  },
  {
    prompt: "R600 is shared in the ratio 1 : 2 : 3. What is the biggest share?",
    options: ["R300,00", "R100,00", "R200,00", "R150,00"],
    answer: "R300,00",
    explanation: "1 + 2 + 3 = 6 parts; R600 ÷ 6 = R100; 3 × R100 = R300.",
  },
  {
    prompt: "Increase 8 in the ratio 2 : 5.",
    options: ["10", "32", "13", "20"],
    answer: "20",
    explanation: "One part is 8 ÷ 2 = 4; 5 × 4 = 20.",
  },
  {
    prompt: "Decrease 42 in the ratio 7 : 4.",
    options: ["36", "24", "10", "11"],
    answer: "24",
    explanation: "One part is 42 ÷ 7 = 6; 4 × 6 = 24.",
  },
  {
    prompt: "A car travels 360 km in 4 hours. What is its speed?",
    options: ["80 km/h", "100 km/h", "90 km/h", "1 440 km/h"],
    answer: "90 km/h",
    explanation: "Speed = distance ÷ time = 360 ÷ 4 = 90 km/h.",
  },
  {
    prompt: "A train travels at 75 km/h for 3 hours. How far does it go?",
    options: ["225 km", "25 km", "78 km", "300 km"],
    answer: "225 km",
    explanation: "Distance = speed × time = 75 × 3 = 225 km.",
  },
  {
    prompt: "A cyclist rides 90 km at 15 km/h. How long does the ride take?",
    options: ["5 hours", "75 hours", "105 hours", "6 hours"],
    answer: "6 hours",
    explanation: "Time = distance ÷ speed = 90 ÷ 15 = 6 hours.",
  },
  {
    prompt: "Which is the better buy: 4 kg of rice for R88 or 6 kg of rice for R120?",
    options: ["4 kg for R88", "6 kg for R120", "They cost the same per kg", "You cannot compare the two"],
    answer: "6 kg for R120",
    explanation: "R88 ÷ 4 = R22 per kg; R120 ÷ 6 = R20 per kg, so 6 kg is cheaper per kg.",
  },
  {
    prompt: "Which of these is a rate?",
    options: ["The ratio 3 : 4 of girls to boys", "25% of the class", "R15 per kilogram", "Half of 12 learners"],
    answer: "R15 per kilogram",
    explanation: "A rate compares different kinds of quantity, here rand and kilograms.",
  },
  {
    prompt: "Write the ratio 300 g : 2 kg in simplest form.",
    options: ["3 : 20", "300 : 2", "3 : 2", "15 : 1"],
    answer: "3 : 20",
    explanation: "2 kg = 2 000 g, so 300 : 2 000 simplifies to 3 : 20.",
  },
];

const RatioAndRate = () => (
  <CapsSubjectTopic
    title="Ratio and Rate"
    subtitle="Simplifying and sharing in a ratio, and rates such as speed and best buy"
    learnSteps={learnSteps}
    task="gr8-ratio-and-rate-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default RatioAndRate;
