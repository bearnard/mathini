import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { ModelText } from '@/curriculum/grade9/english/_shared/ModelText';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Information texts",
    content: slide(
      <>
        <Rule>An information text gives facts about a topic, such as the weather. It can use sentences, a table, a chart or a map. It is written in the present tense or the future tense and uses clear, exact words. You read it to find facts, and you write it to give them.</Rule>
        <KeyTable
          title="Forms of information text"
          head={["Form", "What it shows"]}
          aria="Forms of information text. Weather report: Today’s weather in words. Weather chart: Weather for each day in a table. Map: Places and symbols. Key: What each symbol means. Heading: Tells what the text is about."
          rows={[["Weather report", "Today’s weather in words"], ["Weather chart", "Weather for each day in a table"], ["Map", "Places and symbols"], ["Key", "What each symbol means"], ["Heading", "Tells what the text is about"]]}
        />
        <Worked
          steps={[
            <>A chart shows Monday: sunny, 28 °C. A report in words says Monday will be sunny and warm.</>,
            <>The key explains that the sun symbol means sunny.</>,
          ]}
        />
        <Mistake>Adding an opinion. Information texts give facts, such as 28 °C, not feelings.</Mistake>
      </>,
    ),
  },
  {
    title: "Reading a weather chart",
    content: slide(
      <>
        <Rule>A weather chart lists days and the weather for each one: the weather type, the highest temperature and the lowest temperature. Read across the row for the day you want, then read down to compare days. Check the units, such as degrees Celsius (°C) and millimetres (mm) of rain.</Rule>
        <KeyTable
          title="A weather chart"
          head={["Day", "Weather and temperature"]}
          aria="A weather chart. Monday: Sunny, high 28 °C, low 14 °C. Tuesday: Cloudy, high 24 °C, low 13 °C. Wednesday: Rain, high 21 °C, low 12 °C, 8 mm. Thursday: Windy, high 23 °C, low 11 °C. Friday: Sunny, high 27 °C, low 13 °C."
          rows={[["Monday", "Sunny, high 28 °C, low 14 °C"], ["Tuesday", "Cloudy, high 24 °C, low 13 °C"], ["Wednesday", "Rain, high 21 °C, low 12 °C, 8 mm"], ["Thursday", "Windy, high 23 °C, low 11 °C"], ["Friday", "Sunny, high 27 °C, low 13 °C"]]}
        />
        <Worked
          steps={[
            <>To find the warmest day, compare the highest temperatures: Monday has 28 °C, which is the highest.</>,
            <>Wednesday is the only day with rain, and 8 mm fell.</>,
          ]}
        />
        <Mistake>Mixing up the high and the low. The high is the warmest of the day and the low is the coolest.</Mistake>
      </>,
    ),
  },
  {
    title: "Writing a weather report",
    content: slide(
      <>
        <Rule>To write a weather report from a chart, say the day, the weather and the temperature. Use the present tense for today and the future tense for tomorrow, such as will be. Use words such as mostly, partly and later to describe change. Keep the report short and accurate.</Rule>
        <KeyTable
          title="Words for a report"
          head={["Purpose", "Examples"]}
          aria="Words for a report. Day: Today, tomorrow, on Friday. Weather: Sunny, cloudy, rainy, windy. Temperature: A high of 28 °C and a low of 14 °C. Change: Later, in the afternoon, by evening. Future tense: Will be, is expected to be."
          rows={[["Day", "Today, tomorrow, on Friday"], ["Weather", "Sunny, cloudy, rainy, windy"], ["Temperature", "A high of 28 °C and a low of 14 °C"], ["Change", "Later, in the afternoon, by evening"], ["Future tense", "Will be, is expected to be"]]}
        />
        <ModelText label="A short model weather report" note="An original model written for this lesson.">
          <p>Weather for Wednesday</p>
          <p>Wednesday will be cloudy and cool, with rain in the afternoon. The high will be 21 °C and the low will be 12 °C. About 8 mm of rain is expected. Take an umbrella if you will be outside.</p>
        </ModelText>
        <Worked
          steps={[
            <>Tomorrow will be cloudy with a high of 24 °C and a low of 13 °C. Rain is expected in the afternoon.</>,
            <>The report uses will be for the future and gives temperatures with units.</>,
          ]}
        />
        <Mistake>Writing long sentences with no numbers. Give the temperature and the units.</Mistake>
      </>,
    ),
  },
  {
    title: "Check your information text",
    content: slide(
      <>
        <Rule>Compare your report with the chart. Are the day, the weather and the temperatures correct? Did you write the units? Is the tense right? Read it again to make sure that it is clear and gives facts only.</Rule>
        <KeyTable
          title="Checklist"
          head={["Check", "Why"]}
          aria="Checklist. Facts match the chart: Information must be correct. Units: °C and mm tell the reader what the numbers mean. Tense: Present for now, future for later. Clear words: Short and exact. No opinions: Give facts only."
          rows={[["Facts match the chart", "Information must be correct"], ["Units", "°C and mm tell the reader what the numbers mean"], ["Tense", "Present for now, future for later"], ["Clear words", "Short and exact"], ["No opinions", "Give facts only"]]}
        />
        <Worked
          steps={[
            <>You compare your sentence with the chart and find that you wrote 22 °C instead of 21 °C. You correct it.</>,
            <>You remove I think it will be lovely, because it is an opinion.</>,
          ]}
        />
        <Mistake>Copying numbers from the wrong row. Check each number against the day.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does an information text give?</>,
          <>What is the high temperature?</>,
          <>What does °C stand for?</>,
          <>In which tense do you write a forecast for the next day?</>,
        ]}
        answers={[
          <>Facts about a topic.</>,
          <>The warmest temperature of the day.</>,
          <>Degrees Celsius.</>,
          <>The future tense.</>,
        ]}
      />,
    ),
  },
];
