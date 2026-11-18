import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import * as g from '../../../../../components/diagrams/geo11/geo11';
import { AtlasGrid, CoreRings, PairBars, RainBars, RostowSteps, SustainCircles, WeekGraph } from '../../../../../components/diagrams/geo11/Geo11Pictures';

// Every number comes from geo11.ts (tested in geo11.test.ts and g11GeoGaps.test.ts). All data are imaginary teaching data.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'What is a drought and who is at risk?',
    content: slide(
      <>
        <Rule>A drought is a long period when rainfall is well below the average, so there is not enough water for people, crops and animals. Areas at risk include semi-arid regions and places where rainfall varies a lot from year to year. At the regional scale this is the Sahel or the interior of southern Africa, and at the local scale it is a single catchment or farm.</Rule>
        <RainBars />
        <Worked
          title="Find the drought years"
          steps={[
            `In this lesson a year is a drought year when rain is below ${g.DROUGHT_LIMIT}% of the long-term mean of ${g.MEAN_RAIN} mm.`,
            `Year 3 had 330 mm, which is ${g.dec(g.percentOfMean(330))}% of the mean: a drought year. Year 4 had 300 mm, which is ${g.dec(g.percentOfMean(300))}%.`,
            `Year 2 had 470 mm, which is ${g.dec(g.percentOfMean(470))}%: below the mean, but not a drought.`,
          ]}
        />
        <Mistake>Calling every below-average year a drought. A drought is a long and serious shortage, not one slightly dry season.</Mistake>
      </>,
    ),
  },
  {
    title: 'Causes of droughts',
    content: slide(
      <>
        <Rule>Droughts have natural and human causes. Natural causes include high-pressure systems that block rain-bearing winds, shifts in the ITCZ, and ocean-atmosphere events such as El Niño. Human actions can make a drought worse, for example by cutting forests, draining wetlands and using more water than the rivers can supply.</Rule>
        <FactCards
          cards={[
            { title: 'Pressure', line1: 'a high-pressure system', line2: 'stays over the region' },
            { title: 'El Niño', line1: 'ocean warming changes', line2: 'rainfall patterns' },
            { title: 'Climate change', line1: 'higher temperatures', line2: 'dry the land faster' },
            { title: 'People', line1: 'overuse of water and', line2: 'loss of vegetation' },
          ]}
          aria="Causes of drought. Pressure: a high-pressure system stays over the region. El Niño: ocean warming changes rainfall patterns. Climate change: higher temperatures dry the land faster. People: overuse of water and loss of vegetation."
        />
        <Worked
          title="Separate natural and human causes"
          steps={[
            'A high-pressure system stays over a region for months: natural.',
            'Farmers pump so much water that the river runs dry: human.',
            'An El Niño year brings below-normal rain to southern Africa: natural.',
          ]}
        />
        <Mistake>Saying that drought is only natural. People may not cause the lack of rain, but how they use water and land decides how severe the effects are.</Mistake>
      </>,
    ),
  },
  {
    title: 'Effects of drought and differences in vulnerability',
    content: slide(
      <>
        <Rule>Droughts cause crop failure, loss of livestock, higher food prices, hunger and migration, and they dry up rivers and wetlands. Vulnerability is how badly a person or place is hurt. A household with irrigation, savings and insurance is less vulnerable than a household that depends on rain-fed crops and has no savings.</Rule>
        <PairBars title="Yield lost in a drought (%)" aLabel="rain-fed" a={g.lossPercent(g.YIELD.rainfedNormal, g.YIELD.rainfedDrought)} bLabel="irrigated" b={g.lossPercent(g.YIELD.irrigatedNormal, g.YIELD.irrigatedDrought)} unit="percent" verdict="rain-fed farms lose far more" />
        <Worked
          title="Compare two farms"
          steps={[
            `Rain-fed farm: yield falls from ${g.dec(g.YIELD.rainfedNormal)} to ${g.dec(g.YIELD.rainfedDrought)} tons per hectare, a loss of ${g.dec(g.lossPercent(g.YIELD.rainfedNormal, g.YIELD.rainfedDrought))}%.`,
            `Irrigated farm: yield falls from ${g.dec(g.YIELD.irrigatedNormal)} to ${g.dec(g.YIELD.irrigatedDrought)} tons, a loss of ${g.dec(g.lossPercent(g.YIELD.irrigatedNormal, g.YIELD.irrigatedDrought))}%.`,
            'The rain-fed household is far more vulnerable, even though both farms had the same rainfall.',
          ]}
        />
        <Mistake>Thinking that a drought hurts everyone equally. Poor households, small farmers and people far from services suffer most.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Rainfall of {g.RECORD[2].mm} mm falls where the mean is {g.MEAN_RAIN} mm. What percentage of the mean is this?</>,
          <>Give one natural and one human cause of drought.</>,
          <>Which farm is less vulnerable: rain-fed or irrigated?</>,
          <>What is meant by vulnerability?</>,
        ]}
        answers={[
          <>{g.dec(g.percentOfMean(g.RECORD[2].mm))}%.</>,
          <>Natural: a high-pressure system. Human: overuse of water.</>,
          <>The irrigated farm.</>,
          <>How badly a person or place is affected.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is a drought?",
    options: ["A sudden flood after heavy rain", "A short dry afternoon in summer", "A long spell of well-below-average rain", "A normal change in the seasons"],
    answer: "A long spell of well-below-average rain",
    explanation: "A drought is a long and serious shortage of rain.",
  },
  {
    prompt: "Which area is most at risk of drought?",
    options: ["A semi-arid area with variable rain", "A rainforest near the equator", "A snow-capped mountain peak", "A wet coastal plain with rain"],
    answer: "A semi-arid area with variable rain",
    explanation: "Semi-arid areas with unreliable rainfall are at greatest risk.",
  },
  {
    prompt: "A town with a mean of 500 mm receives 330 mm. What percentage of the mean is this?",
    options: ["34%", "150%", "6,6%", "66%"],
    answer: "66%",
    explanation: "330 ÷ 500 × 100 = 66.",
  },
  {
    prompt: "A town with a mean of 500 mm receives 300 mm. What is the rainfall deficit?",
    options: ["300 mm", "200 mm", "800 mm", "100 mm"],
    answer: "200 mm",
    explanation: "500 − 300 = 200.",
  },
  {
    prompt: "In this lesson a year is a drought year when rain is below 75% of the mean. Which year was a drought year with a mean of 500 mm?",
    options: ["A year with 470 mm", "A year with 330 mm", "A year with 520 mm", "A year with 480 mm"],
    answer: "A year with 330 mm",
    explanation: "330 mm is 66% of the mean.",
  },
  {
    prompt: "A year receives 470 mm where the mean is 500 mm. What can be said?",
    options: ["It was a severe drought year", "It was an above-average year", "It was a year of great floods", "It was dry but not a drought year"],
    answer: "It was dry but not a drought year",
    explanation: "470 mm is 94% of the mean, above the 75% limit.",
  },
  {
    prompt: "Which is a natural cause of drought?",
    options: ["A high-pressure system that stays", "Overuse of the river water supply", "Cutting down large areas of forest", "Draining the wetlands of the area"],
    answer: "A high-pressure system that stays",
    explanation: "Persistent high pressure blocks rain-bearing winds.",
  },
  {
    prompt: "Which is a human cause that can worsen drought?",
    options: ["An El Niño event over the ocean", "A high-pressure system overhead", "Pumping more water than flows in", "A shift in the ITCZ position"],
    answer: "Pumping more water than flows in",
    explanation: "Overuse of water makes a dry spell worse.",
  },
  {
    prompt: "How can an El Niño event affect southern Africa?",
    options: ["It always brings floods", "It stops all wind", "It raises sea level in Gauteng", "It can bring below-normal rainfall"],
    answer: "It can bring below-normal rainfall",
    explanation: "El Niño years are often dry in southern Africa.",
  },
  {
    prompt: "Which is an effect of drought?",
    options: ["Lower food prices in the shops", "Crop failure and stock losses", "More surface water in the dams", "Higher crop yields on the farms"],
    answer: "Crop failure and stock losses",
    explanation: "Dry conditions reduce harvests and grazing.",
  },
  {
    prompt: "What does vulnerability mean?",
    options: ["How badly a person or place is affected", "How much rain falls in a year", "How hot a place is", "How far a place is from the sea"],
    answer: "How badly a person or place is affected",
    explanation: "Vulnerability is the degree of harm suffered.",
  },
  {
    prompt: "Rain-fed maize falls from 3 to 1,2 tons per hectare in a drought. What is the percentage loss?",
    options: ["40%", "1,8%", "60%", "36%"],
    answer: "60%",
    explanation: "(3 − 1,2) ÷ 3 × 100 = 60.",
  },
  {
    prompt: "Irrigated maize falls from 3 to 2,7 tons per hectare in a drought. What is the percentage loss?",
    options: ["30%", "2,7%", "10%", "90%"],
    answer: "10%",
    explanation: "(3 − 2,7) ÷ 3 × 100 = 10.",
  },
  {
    prompt: "Why is a household with irrigation and savings less vulnerable to drought?",
    options: ["It can still water crops and buy food", "It receives more rainfall than others", "It lives much closer to the sea", "It has a smaller number of people"],
    answer: "It can still water crops and buy food",
    explanation: "Irrigation and savings protect against the loss of rain.",
  },
];

const DroughtsCausesEffects = () => (
  <CapsSubjectTopic
    title="Droughts: Causes, Effects and Vulnerability"
    subtitle="Areas at risk, natural and human causes, effects and who is most vulnerable"
    learnSteps={learnSteps}
    task="gr11-droughts-causes-effects-t1"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default DroughtsCausesEffects;
