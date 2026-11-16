import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';
import { Thermometers } from '../../../../components/diagrams/maths/Grade6Maths';
import * as p from '../../../../components/diagrams/maths/grade6Percent';

// Every number in the slides below comes from the tested helpers in grade6Percent.ts (grade6Percent.test.ts, g6MathsNewBank.test.ts).
// CAPS Grade 6: read analogue and digital thermometers in degrees Celsius, the referents 0, 37 and 100, and solve problems with positive whole numbers and decimals.
const t = p.tempText;
const read = { value: 260, lines: 3, step: 2 };
const diff = p.tempDifference(240, 110);
const fever = p.tempDifference(372, 367);
const rise = p.afterChange(140, 90)!;
const fall = p.afterChange(140, -60)!;
const c = { a: p.afterChange(200, 70)!, b: p.tempDifference(280, 150), c: p.tempDifference(385, 370) };

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Degrees Celsius and temperatures to know',
    content: slide(
      <>
        <Rule>Temperature tells us how hot or cold something is. We measure it in degrees Celsius (°C) with a thermometer. Three temperatures are worth remembering: water freezes at 0 °C, a healthy body is about 37 °C, and water boils at 100 °C.</Rule>
        <Thermometers items={[{ value: 0, label: 'freezing' }, { value: 370, label: 'body' }, { value: 1000, label: 'boiling' }]} min={0} max={100} step={10} numberEvery={20} />
        <Worked
          title="Is the temperature sensible?"
          steps={[
            <>Pure water freezes at <strong>{t(0)}</strong> and boils at <strong>{t(1000)}</strong>.</>,
            <>A healthy body is about <strong>{t(370)}</strong>.</>,
            <>A hot summer day in Pretoria is about {t(330)}. It cannot be {t(1030)}, because that is hotter than boiling water.</>,
            <>A cold winter morning can be about {t(30)}, close to freezing.</>,
          ]}
        />
        <Mistake>Thinking that 37 °C is a hot day. It is body temperature, so a day at 37 °C would be extremely hot, hotter than most summer days.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reading a thermometer',
    content: slide(
      <>
        <Rule>Look at the scale first. Find the numbered lines, and work out how many degrees each step between two small lines is worth. Then count the steps from the last numbered line up to the top of the mercury. A digital thermometer shows the reading as a decimal number.</Rule>
        <Thermometers items={[{ value: read.value, label: 'reading' }]} min={0} max={40} step={2} numberEvery={10} />
        <Worked
          title="An analogue and a digital thermometer"
          steps={[
            <>The numbered lines are 0, 10, 20, 30 and 40. The gap from 20 to 30 is split into {10 / read.step} equal steps by {p.smallLinesBetween(10, read.step)} small lines, so each step is 10 ÷ {10 / read.step} = {read.step} degrees.</>,
            <>The mercury is {read.lines} steps above 20: {read.lines} × {read.step} = 6, and 20 + 6 = <strong>{t(read.value)}</strong>.</>,
            <>Half way between 20 and 30 is {t(250)}.</>,
            <>A digital thermometer that shows 36,7 means <strong>{t(367)}</strong>: 36 whole degrees and 7 tenths of a degree.</>,
          ]}
        />
        <Mistake>Counting each step as 1 degree when it is worth 2, or counting the numbered line as a step. Always work out what one step is worth: the gap between two numbers divided by the number of equal steps.</Mistake>
      </>,
    ),
  },
  {
    title: 'Comparing, differences and changes',
    content: slide(
      <>
        <Rule>To compare temperatures, compare the whole degrees first and then the tenths. To find how much warmer or colder, subtract. A rise means add and a fall means subtract.</Rule>
        <Thermometers items={[{ value: 110, label: 'lowest' }, { value: 240, label: 'highest' }]} min={0} max={30} step={5} numberEvery={10} />
        <Worked
          title="Differences, rises and falls"
          steps={[
            <>Highest {t(240)} and lowest {t(110)}: 24 − 11 = <strong>{t(diff)}</strong> warmer.</>,
            <>Body temperatures {t(372)} and {t(367)}: the difference is 37,2 − 36,7 = <strong>{t(fever)}</strong>.</>,
            <>It is {t(140)} at 6 o&apos;clock and rises by 9 degrees: 14 + 9 = <strong>{t(rise)}</strong>.</>,
            <>It is {t(140)} and falls by 6 degrees: 14 − 6 = <strong>{t(fall)}</strong>.</>,
          ]}
        />
        <Mistake>Adding the two temperatures to find the difference. To find how much warmer one is than the other, subtract the lower from the higher.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>It is 20 °C at 8 o&apos;clock. By midday it has risen by 7 °C. What is the temperature at midday?</>,
            <>The lowest temperature is 15 °C and the highest is 28 °C. What is the difference?</>,
            <>A baby has a temperature of 38,5 °C. Normal is 37 °C. How much higher is it?</>,
            <>What are the freezing point and the boiling point of pure water?</>,
          ]}
          answers={[
            <>20 + 7 = <strong>{t(c.a)}</strong>.</>,
            <>28 − 15 = <strong>{t(c.b)}</strong>.</>,
            <>38,5 − 37 = <strong>{t(c.c)}</strong>.</>,
            <>Freezing: <strong>0 °C</strong>. Boiling: <strong>100 °C</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// BANK:START
export const bank: CapsItem[] = [
  {
    prompt: "At what temperature does pure water freeze?",
    options: ["10 °C", "0 °C", "32 °C", "100 °C"],
    answer: "0 °C",
    explanation: "The freezing point of pure water is 0 degrees Celsius.",
  },
  {
    prompt: "At what temperature does pure water boil?",
    options: ["100 °C", "10 °C", "90 °C", "212 °C"],
    answer: "100 °C",
    explanation: "The boiling point of pure water is 100 degrees Celsius.",
  },
  {
    prompt: "What is the normal temperature of a healthy human body?",
    options: ["27 °C", "73 °C", "100 °C", "37 °C"],
    answer: "37 °C",
    explanation: "The average normal body temperature is about 37 degrees Celsius.",
  },
  {
    prompt: "Which temperature is the best guess for a hot summer day?",
    options: ["3 °C", "63 °C", "33 °C", "103 °C"],
    answer: "33 °C",
    explanation: "A hot summer day is warm, about 33 °C. 3 °C is near freezing and 63 °C and 103 °C are far too hot.",
  },
  {
    prompt: "On a thermometer, 0, 10, 20 and 30 are numbered and each step between small lines is 2 degrees. The mercury is 3 steps above 20. What is the temperature?",
    options: ["23 °C", "26 °C", "30 °C", "29 °C"],
    answer: "26 °C",
    explanation: "Each step is 2 degrees, so 3 steps are 3 × 2 = 6 degrees above 20: 26 °C.",
  },
  {
    prompt: "The mercury on a thermometer is half way between 20 °C and 30 °C. What is the temperature?",
    options: ["25 °C", "23 °C", "27 °C", "50 °C"],
    answer: "25 °C",
    explanation: "Half way between 20 and 30 is 25.",
  },
  {
    prompt: "Which of these temperatures is higher than 37,0 °C and lower than 37,5 °C?",
    options: ["36,9 °C", "37,5 °C", "37,8 °C", "37,2 °C"],
    answer: "37,2 °C",
    explanation: "Compare the whole degrees first and then the tenths: 37,2 is more than 37,0 and less than 37,5. 36,9 is too low, and 37,5 and 37,8 are not lower than 37,5.",
  },
  {
    prompt: "Which of these temperatures is the lowest: 12 °C, 21 °C, 9 °C or 19 °C?",
    options: ["12 °C", "19 °C", "9 °C", "21 °C"],
    answer: "9 °C",
    explanation: "9 is smaller than 12, 19 and 21, so 9 °C is the lowest.",
  },
  {
    prompt: "The highest temperature one day is 24 °C and the lowest is 11 °C. How much warmer is the highest than the lowest?",
    options: ["35 °C", "13 °C", "14 °C", "12 °C"],
    answer: "13 °C",
    explanation: "Subtract: 24 − 11 = 13 degrees.",
  },
  {
    prompt: "A learner has a temperature of 37,2 °C. Normal body temperature is 36,7 °C. How much higher is the learner's temperature?",
    options: ["0,5 °C", "0,05 °C", "5 °C", "1,5 °C"],
    answer: "0,5 °C",
    explanation: "37,2 − 36,7 = 0,5 degrees.",
  },
  {
    prompt: "At 6 o'clock in the morning it is 14 °C. By noon the temperature has risen by 9 °C. What is the temperature at noon?",
    options: ["5 °C", "24 °C", "22 °C", "23 °C"],
    answer: "23 °C",
    explanation: "A rise means add: 14 + 9 = 23 degrees.",
  },
  {
    prompt: "The temperature is 14 °C in the afternoon and falls by 6 °C in the evening. What is the temperature in the evening?",
    options: ["20 °C", "9 °C", "8 °C", "7 °C"],
    answer: "8 °C",
    explanation: "A fall means subtract: 14 − 6 = 8 degrees.",
  },
];
// BANK:END

const Temperature = () => (
  <CapsSubjectTopic
    title="Temperature"
    subtitle="Degrees Celsius, reading thermometers, comparing temperatures and solving problems"
    learnSteps={learnSteps}
    task="gr6-temperature-t3"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default Temperature;
