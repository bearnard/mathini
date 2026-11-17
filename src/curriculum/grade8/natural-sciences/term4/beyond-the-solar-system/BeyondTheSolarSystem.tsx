import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { LightDistances, MilkyWay, SouthernCross } from '../../../../../components/diagrams/ns8/Space8';
import { ALPHA_CENTAURI_LY, LIGHT_HOUR_KM, LIGHT_MINUTE_KM, SOLAR_SYSTEM_LIGHT_HOURS, trillionKm } from '../../../../../components/diagrams/ns8/space8Helpers';

// Every number comes from space8Helpers.ts (tested in space8Helpers.test.ts and g8NsT4.test.ts), with the values the Grade 8 CAPS uses.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const big = (x: number) => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const n = (x: number) => String(x).replace('.', ',');

export const learnSteps: LearnStep[] = [
  {
    title: 'The Milky Way Galaxy',
    content: slide(
      <>
        <Rule>A galaxy is a collection of stars held together by their mutual gravity. Our Solar System is in the Milky Way Galaxy, which has the shape of a spiral with many arms. Our Sun is only one of billions of stars in the Milky Way, and it is located towards the edge of the galaxy, in one of the spiral arms.</Rule>
        <MilkyWay />
        <Worked
          title="Why is there a hazy path of light across the sky?"
          steps={[
            'From the Earth we look along the disc of the galaxy towards its centre.',
            'We see the light of countless faint stars, which looks like a hazy path across the sky.',
            'The ancient Greeks described it as spilled milk, which gave the Milky Way its name.',
          ]}
        />
        <Mistake>Thinking that the Sun is at the centre of the galaxy. It is towards the edge, in one of the arms.</Mistake>
      </>,
    ),
  },
  {
    title: 'Our nearest star',
    content: slide(
      <>
        <Rule>The Sun is the nearest star to the Earth. The nearest star to the Sun that is easily visible is Alpha Centauri, the brighter of the two Pointers of the Southern Cross constellation. Alpha Centauri is {n(ALPHA_CENTAURI_LY)} light years away from our Solar System.</Rule>
        <SouthernCross />
        <Worked
          title="Find Alpha Centauri"
          steps={[
            'Find the Southern Cross, a small cross of four bright stars in the southern sky.',
            'The two bright Pointers lie beside the cross; the brighter one is Alpha Centauri.',
            `It is the nearest easily visible star to the Sun, at ${n(ALPHA_CENTAURI_LY)} light years.`,
          ]}
        />
        <Mistake>Calling Alpha Centauri the nearest star to the Earth. The nearest star to the Earth is the Sun.</Mistake>
      </>,
    ),
  },
  {
    title: 'Light minutes, hours and years',
    content: slide(
      <>
        <Rule>Distances beyond the Solar System are very large, so people measure them with the distance that light travels. A light year is the distance that light travels in one year, about 10 trillion kilometres. A light hour is the distance that light travels in one hour, and a light minute is the distance that light travels in one minute. The Earth is about 8 light minutes from the Sun, and the Solar System is about 13 light hours across.</Rule>
        <LightDistances />
        <Worked
          title="Work it out with light travelling at 300 000 km per second"
          steps={[
            `One light minute = 300 000 × 60 = ${big(LIGHT_MINUTE_KM)} km, so 8 light minutes is ${big(8 * LIGHT_MINUTE_KM)} km, about the 150 million km from the Sun to the Earth.`,
            `One light hour = 300 000 × 3 600 = ${big(LIGHT_HOUR_KM)} km, so ${SOLAR_SYSTEM_LIGHT_HOURS} light hours is about ${big(SOLAR_SYSTEM_LIGHT_HOURS * LIGHT_HOUR_KM)} km.`,
            `Using 10 trillion km for a light year, Alpha Centauri is ${n(ALPHA_CENTAURI_LY)} × 10 = ${trillionKm(ALPHA_CENTAURI_LY)} trillion km away.`,
          ]}
        />
        <Mistake>Thinking that a light year is a unit of time. It is a unit of distance.</Mistake>
      </>,
    ),
  },
  {
    title: 'Beyond the Milky Way',
    content: slide(
      <>
        <Rule>Our Milky Way Galaxy is only one of billions of galaxies scattered across the Universe. Galaxies have various shapes and sizes. The size of the observable Universe is estimated to be about 28 billion light years.</Rule>
        <FactCards
          cards={[
            { title: 'Many galaxies', line1: 'billions of galaxies are', line2: 'scattered across the Universe' },
            { title: 'Shapes and sizes', line1: 'galaxies come in various', line2: 'shapes and sizes' },
            { title: 'Observable Universe', line1: 'estimated size: about', line2: '28 billion light years' },
          ]}
          aria="Beyond the Milky Way. Billions of galaxies are scattered across the Universe. Galaxies come in various shapes and sizes. The size of the observable Universe is estimated to be about 28 billion light years."
        />
        <Worked
          title="Put the distances in order"
          steps={[
            'Earth to the Sun: 8 light minutes.',
            'Across the Solar System: about 13 light hours, then Alpha Centauri at 4,2 light years.',
            'The observable Universe is estimated at about 28 billion light years, billions of galaxies like the Milky Way.',
          ]}
        />
        <Mistake>Saying that the Milky Way is the whole Universe. It is one galaxy among billions.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What holds the stars of a galaxy together?</>,
          <>Which star is closest to us?</>,
          <>What does a light year measure?</>,
          <>Alpha Centauri is 4,2 light years away. How far is that in trillion km?</>,
        ]}
        answers={[
          <>Their mutual gravity.</>,
          <>The Sun.</>,
          <>Distance.</>,
          <>{trillionKm(ALPHA_CENTAURI_LY)} trillion km.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is a galaxy?",
    options: ["A single very large star", "A planet with many moons", "Stars held together by gravity", "A cloud of dust inside a star"],
    answer: "Stars held together by gravity",
    explanation: "A galaxy is a collection of stars held together by their mutual gravity.",
  },
  {
    prompt: "Our Solar System belongs to which galaxy?",
    options: ["The Milky Way Galaxy", "The Andromeda Galaxy", "The Solar Galaxy", "The Orion Galaxy"],
    answer: "The Milky Way Galaxy",
    explanation: "Our Solar System is in the Milky Way Galaxy.",
  },
  {
    prompt: "What shape has the Milky Way Galaxy?",
    options: ["A perfect sphere", "A flat ring only", "A long straight line", "A spiral with arms"],
    answer: "A spiral with arms",
    explanation: "The Milky Way is a spiral with many arms.",
  },
  {
    prompt: "Where in the Milky Way is our Sun?",
    options: ["At the very centre of it", "Near the edge, in a spiral arm", "Outside the galaxy altogether", "In the middle of a spiral gap"],
    answer: "Near the edge, in a spiral arm",
    explanation: "The Sun is only one of billions of stars, located towards the edge of the galaxy.",
  },
  {
    prompt: "About how many stars are in the Milky Way Galaxy?",
    options: ["Hundreds", "Billions", "Thousands", "Only one"],
    answer: "Billions",
    explanation: "Our Sun is only one of billions of stars in the Milky Way.",
  },
  {
    prompt: "What do we see when we look towards the centre of the Milky Way from the Earth?",
    options: ["A single bright planet", "A ring around the Moon", "A completely empty sky", "A hazy path of light"],
    answer: "A hazy path of light",
    explanation: "The light of countless faint stars forms a hazy path across the sky.",
  },
  {
    prompt: "What did the ancient Greeks think the hazy path of light in the sky looked like?",
    options: ["Spilled milk", "A river of fire", "A long snake", "A bridge of stars"],
    answer: "Spilled milk",
    explanation: "That is where the name Milky Way comes from.",
  },
  {
    prompt: "Which star is nearest to the Earth?",
    options: ["Alpha Centauri", "Sirius", "The Sun", "The Pole Star"],
    answer: "The Sun",
    explanation: "The Sun is the nearest star to the Earth.",
  },
  {
    prompt: "Which star is the nearest easily visible star to the Sun?",
    options: ["Betelgeuse", "Orion", "Polaris", "Alpha Centauri"],
    answer: "Alpha Centauri",
    explanation: "Alpha Centauri is the brighter of the two Pointers of the Southern Cross.",
  },
  {
    prompt: "What is a light year?",
    options: ["The time that light takes to reach the Earth", "The distance that light travels in one year", "The age of a star in years", "The speed of light in a year"],
    answer: "The distance that light travels in one year",
    explanation: "A light year is a unit of distance, not of time.",
  },
  {
    prompt: "About how far is one light year, as given in the CAPS?",
    options: ["10 trillion km", "10 million km", "10 billion km", "1 trillion km"],
    answer: "10 trillion km",
    explanation: "One light year is equal to about 10 trillion kilometres.",
  },
  {
    prompt: "Alpha Centauri is 4,2 light years away. Using 10 trillion km for a light year, how far is that?",
    options: ["4,2 trillion km", "420 trillion km", "42 trillion km", "14 trillion km"],
    answer: "42 trillion km",
    explanation: "4,2 × 10 = 42 trillion km.",
  },
  {
    prompt: "About how many light minutes is the Earth from the Sun?",
    options: ["80", "0,8", "8", "800"],
    answer: "8",
    explanation: "Light from the Sun takes about 8 minutes to reach the Earth, so the Earth is about 8 light minutes away.",
  },
  {
    prompt: "How many kilometres does light travel in one minute at 300 000 km per second?",
    options: ["18 000 000 km", "300 000 km", "1 800 000 km", "180 000 000 km"],
    answer: "18 000 000 km",
    explanation: "300 000 × 60 = 18 000 000 km.",
  },
];

const BeyondTheSolarSystem = () => (
  <CapsSubjectTopic
    title="Beyond the Solar System"
    subtitle="The Milky Way, our nearest star, light years and the Universe"
    learnSteps={learnSteps}
    task="gr8-beyond-the-solar-system-t4"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default BeyondTheSolarSystem;
