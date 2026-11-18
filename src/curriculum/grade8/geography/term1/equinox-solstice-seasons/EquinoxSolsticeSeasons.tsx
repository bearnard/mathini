import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { SunAngle } from '../../../../../components/diagrams/geo8/Geo8Pictures';
import { OVERHEAD, PLACES, TILT, sunAngle } from '../../../../../components/diagrams/geo8/grade8Geo';

// Every angle comes from grade8Geo (checked against vector geometry in grade8Geo.test.ts); g8GeographyC.test.ts checks the rendered text.
const deg = (n: number) => `${String(n).replace('.', ',')}°`;
const jhb = PLACES.johannesburg.lat; // 26 degrees south
const cpt = PLACES.capeTown.lat; // 34 degrees south
const jDec = sunAngle(jhb, OVERHEAD.december);
const jEq = sunAngle(jhb, OVERHEAD.equinox);
const jJun = sunAngle(jhb, OVERHEAD.june);
const cDec = sunAngle(cpt, OVERHEAD.december);
const cJun = sunAngle(cpt, OVERHEAD.june);
const cEq = sunAngle(cpt, OVERHEAD.equinox);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Revolution and the tilted axis',
    content: slide(
      <>
        <Rule>{`The Earth revolves once round the Sun in a year. Its axis is tilted at ${deg(TILT)} and always points the same way in space, so for part of the year the southern hemisphere leans towards the Sun and for part of the year it leans away. That gives us the seasons.`}</Rule>
        <FactCards
          cards={[
            { title: "One year", line1: "the Earth revolves", line2: "once round the Sun" },
            { title: "The tilt", line1: "the axis leans at 23,5°", line2: "and points the same way" },
            { title: "Summer", line1: "the hemisphere leans", line2: "towards the Sun" },
            { title: "Winter", line1: "the hemisphere leans", line2: "away from the Sun" },
          ]}
          aria={'Revolution and the seasons. The Earth revolves once round the Sun in a year. Its axis is tilted at 23,5 degrees and always points the same way. In summer a hemisphere leans towards the Sun. In winter it leans away from the Sun.'}
        />
        <Worked
          steps={[
            'In December the southern hemisphere leans towards the Sun, so it is summer in South Africa.',
            'In June the southern hemisphere leans away from the Sun, so it is winter in South Africa.',
            'At the same time the seasons are the other way round in the northern hemisphere.',
          ]}
        />
        <Mistake>Saying that we have summer because the Earth is closer to the Sun. The Earth is a little closer to the Sun in early January and further away in early July, but the tilt of the axis causes the seasons.</Mistake>
      </>,
    ),
  },
  {
    title: 'Equinoxes, solstices and the midday sun',
    content: slide(
      <>
        <Rule>{`On about 21 December the midday sun is overhead at the Tropic of Capricorn (${deg(TILT)} S), on about 21 June it is overhead at the Tropic of Cancer (${deg(TILT)} N), and on the equinoxes, about 21 March and 23 September, it is overhead at the equator. The angle of the midday sun is 90° minus the number of degrees between your latitude and the place where the sun is overhead.`}</Rule>
        <SunAngle
          place={`${PLACES.johannesburg.name} ${deg(Math.abs(jhb))} S`}
          rays={[
            { label: '21 Dec', angle: jDec, color: 'a' },
            { label: 'Equinox', angle: jEq, color: 'e' },
            { label: '21 Jun', angle: jJun, color: 'r' },
          ]}
        />
        <Worked
          title={`${PLACES.johannesburg.name} is at ${deg(Math.abs(jhb))} S.`}
          steps={[
            `21 December: the sun is overhead at ${deg(TILT)} S, which is ${deg(Math.abs(jhb) - TILT)} away, so the angle is 90° − ${deg(Math.abs(jhb) - TILT)} = ${deg(jDec)}.`,
            `The equinox: the sun is overhead at 0°, which is ${deg(Math.abs(jhb))} away, so the angle is 90° − ${deg(Math.abs(jhb))} = ${deg(jEq)}.`,
            `21 June: the sun is overhead at ${deg(TILT)} N, which is ${deg(Math.abs(jhb) + TILT)} away, so the angle is 90° − ${deg(Math.abs(jhb) + TILT)} = ${deg(jJun)}.`,
          ]}
        />
        <Mistake>Mixing up the hemispheres. About 21 December is the summer solstice, with the longest day, in South Africa, but it is the winter solstice in the northern hemisphere.</Mistake>
      </>,
    ),
  },
  {
    title: 'Day length and temperature through the year',
    content: slide(
      <>
        <Rule>In summer the sun is higher in the sky, so its energy falls on a smaller area, and the days are longer, so the ground has more time to warm. In winter the sun is lower and the days are shorter. Near the equator the length of day and night changes very little; near the poles it changes the most.</Rule>
        <FactCards
          cards={[
            { title: "21 December", line1: "the longest day", line2: "in South Africa" },
            { title: "21 June", line1: "the shortest day", line2: "in South Africa" },
            { title: "Equinox", line1: "day and night are", line2: "equal in length" },
            { title: "Equator", line1: "day and night stay", line2: "nearly equal all year" },
          ]}
          aria={'Day length through the year. About 21 December is the longest day in South Africa. About 21 June is the shortest day. On an equinox day and night are equal. At the equator day and night stay nearly equal all year.'}
        />
        <Worked
          title={`${PLACES.capeTown.name} is at ${deg(Math.abs(cpt))} S.`}
          steps={[
            `On 21 December the midday sun is ${deg(cDec)} high. On 21 June it is ${deg(cJun)} high.`,
            `The difference is ${deg(cDec - cJun)}, so the sun is much higher in summer than in winter.`,
            'A higher sun and longer days mean more warming in summer. A lower sun and shorter days mean less warming in winter.',
          ]}
        />
        <Mistake>Expecting the hottest day on the longest day. The land and sea keep warming for some weeks after the solstice, so the hottest weeks come later.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          'Why does the Earth have seasons?',
          `On about which date is the shortest day in South Africa?`,
          `What is the angle of the midday sun at the equinox at ${PLACES.capeTown.name} (${deg(Math.abs(cpt))} S)?`,
          'What is the length of day and night like at the equator through the year?',
        ]}
        answers={[
          `Its axis is tilted at ${deg(TILT)} and points the same way, so each hemisphere leans towards or away from the Sun.`,
          'About 21 June.',
          `90° − ${deg(Math.abs(cpt))} = ${deg(cEq)}.`,
          'Nearly equal all year.',
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which feature of the Earth's axis causes the seasons?",
    options: ["It stands upright, with no tilt", "It changes direction in each month", "It is tilted at 23,5°", "It spins faster in the summer"],
    answer: "It is tilted at 23,5°",
    explanation: "The axis is tilted at 23,5° and points the same way as the Earth moves round the Sun.",
  },
  {
    prompt: "On which date is the longest day in the south, when summer starts?",
    options: ["21 December", "21 June", "21 March", "23 September"],
    answer: "21 December",
    explanation: "On about 21 December the southern hemisphere leans most towards the Sun.",
  },
  {
    prompt: "About when is the shortest day in South Africa?",
    options: ["21 December", "21 March, when the day is shortest", "23 September, when the day is shortest", "21 June"],
    answer: "21 June",
    explanation: "The winter solstice, about 21 June, is the shortest day in the south.",
  },
  {
    prompt: "What is true about day and night on the equinoxes?",
    options: ["The days are shorter than the nights", "They are equal in length", "The days are longer than the nights", "The nights are twice as long as the days"],
    answer: "They are equal in length",
    explanation: "On an equinox the sun is overhead at the equator and day and night are equal.",
  },
  {
    prompt: "Where is the midday sun overhead on about 21 December?",
    options: ["The Tropic of Cancer in the north", "The equator", "The Tropic of Capricorn", "The South Pole"],
    answer: "The Tropic of Capricorn",
    explanation: "On about 21 December the sun is overhead at 23,5° S.",
  },
  {
    prompt: "Where is the midday sun overhead on the equinoxes?",
    options: ["The equator", "The Tropic of Cancer", "The Tropic of Capricorn", "The Prime Meridian"],
    answer: "The equator",
    explanation: "On the equinoxes the sun is overhead at 0° latitude.",
  },
  {
    prompt: "A place is at 30° S. What is the angle of the midday sun there at the equinox?",
    options: ["30°", "90°", "66,5°", "60°"],
    answer: "60°",
    explanation: "The sun is overhead at the equator, 30° away, so 90° − 30° = 60°.",
  },
  {
    prompt: "How high is the midday sun above the horizon on 21 December at a place on 30° S?",
    options: ["36,5°", "83,5°", "60°", "53,5°"],
    answer: "83,5°",
    explanation: "The sun is overhead at 23,5° S, which is 6,5° away, so 90° − 6,5° = 83,5°.",
  },
  {
    prompt: "On 21 June, at what angle does the midday sun reach a place on 30° S?",
    options: ["83,5°", "60°", "36,5°", "53,5°"],
    answer: "36,5°",
    explanation: "The sun is overhead at 23,5° N, which is 53,5° away, so 90° − 53,5° = 36,5°.",
  },
  {
    prompt: "Why is the sun's heat stronger when it is high in the sky?",
    options: ["Its energy falls on a smaller area", "The Sun is closer to the Earth", "The Sun gives out more heat in the summer months", "The clouds disappear in the summer"],
    answer: "Its energy falls on a smaller area",
    explanation: "A high sun concentrates its energy on a smaller area of ground.",
  },
  {
    prompt: "Which statement about the seasons is correct?",
    options: ["Both hemispheres have summer at the same time", "The seasons are caused by the distance to the Sun", "The seasons follow the phases of the Moon", "The hemisphere leaning towards the Sun has summer"],
    answer: "The hemisphere leaning towards the Sun has summer",
    explanation: "The tilt makes one hemisphere lean towards the Sun while the other leans away.",
  },
  {
    prompt: "When it is summer in South Africa, what season is it in the northern hemisphere?",
    options: ["Summer", "Winter", "Spring and early summer", "Autumn"],
    answer: "Winter",
    explanation: "The seasons are opposite in the two hemispheres.",
  },
  {
    prompt: "What happens to the length of day and night at the equator through the year?",
    options: ["Days are much longer in December", "Nights last 24 hours in June", "They stay nearly equal", "Days are shorter in June"],
    answer: "They stay nearly equal",
    explanation: "Near the equator the length of day and night changes very little.",
  },
  {
    prompt: "Why is the hottest part of summer usually a few weeks after the solstice?",
    options: ["The land and sea keep warming for a while", "The Sun is closest to the Earth then", "The days become longer after the solstice", "The Earth's tilt changes after the solstice"],
    answer: "The land and sea keep warming for a while",
    explanation: "The land and sea go on warming for some weeks after the longest day.",
  },
];

const EquinoxSolsticeSeasons = () => (
  <CapsSubjectTopic
    title="Equinox, Solstice and the Seasons"
    subtitle="The tilted axis, the midday sun and the length of day and night"
    learnSteps={learnSteps}
    task="gr8-equinox-solstice-seasons-t1"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default EquinoxSolsticeSeasons;
