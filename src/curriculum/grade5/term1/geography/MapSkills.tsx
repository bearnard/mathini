import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';
import { CompassRose, ScaleBar } from '../../../../components/diagrams/g5/Grade5Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Africa and its oceans',
    content: slide(
      <>
        <Rule>
          South Africa is at the southern tip of the continent of Africa. The Atlantic Ocean is on its west coast and the Indian Ocean is on its east coast.
        </Rule>
        <Worked
          title="Which ocean is which?"
          steps={[
            <>Cape Town is on the west coast, so it faces the Atlantic Ocean.</>,
            <>Durban is on the east coast, so it faces the Indian Ocean.</>,
            <>The two oceans meet near the southern tip of Africa.</>,
            <>Use the compass: west coast = Atlantic, east coast = Indian.</>,
          ]}
        />
        <Mistake>Thinking the whole coast faces the same ocean. The west coast has the Atlantic and the east coast has the Indian Ocean.</Mistake>
      </>,
    ),
  },
  {
    title: 'The eight compass points',
    content: slide(
      <>
        <Rule>
          A compass shows direction. The eight points are north, north-east, east, south-east, south, south-west, west and north-west. Opposite points are half a turn apart.
        </Rule>
        <CompassRose />
        <Worked
          title="Find the opposite direction"
          steps={[
            <>Find the direction on the compass: north-west (NW).</>,
            <>Go half a turn round the compass, which is 4 points on.</>,
            <>You arrive at south-east (SE).</>,
            <>So south-east is opposite north-west, and south-west is opposite north-east.</>,
          ]}
        />
        <Mistake>Thinking the opposite of north-west is south-west. South-west only shares the south half; the exact opposite is south-east.</Mistake>
      </>,
    ),
  },
  {
    title: 'Map scale and distance',
    content: slide(
      <>
        <Rule>
          A map scale tells you how far a distance on the map is on the ground. With the scale 1 cm = 50 km, you multiply the centimetres you measure by 50 to find the kilometres.
        </Rule>
        <ScaleBar />
        <Worked
          title="Measure a distance on a map"
          steps={[
            <>Measure the distance between two towns with a ruler: 3 cm.</>,
            <>Read the scale: 1 cm on the map = 50 km on the ground.</>,
            <>Multiply: 3 × 50 = 150.</>,
            <>The towns are 150 km apart.</>,
          ]}
        />
        <Mistake>Writing the centimetres you measured as kilometres. 3 cm on the map is not 3 km: use the scale to multiply.</Mistake>
      </>,
    ),
  },
  {
    title: 'Capital cities and provinces',
    content: slide(
      <>
        <Rule>
          South Africa has three capital cities: Pretoria is where the government works (the executive capital), Cape Town is where Parliament meets (the legislative capital) and Bloemfontein is where the Supreme Court of Appeal sits (the judicial capital). Gauteng is the smallest province by area but has the most people.
        </Rule>
        <Worked
          title="Match a city to its job"
          steps={[
            <>The President and the ministers work from Pretoria.</>,
            <>Parliament, where laws are made, meets in Cape Town.</>,
            <>The Supreme Court of Appeal sits in Bloemfontein.</>,
            <>Gauteng is small on the map but crowded with people, because Johannesburg and Pretoria are there.</>,
          ]}
        />
        <Mistake>Thinking one city does all three jobs. South Africa shares them between three cities.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Which ocean is on the west coast of South Africa, and which is on the east coast?</li>
            <li>What is the opposite of south-west?</li>
            <li>A map scale says 1 cm = 50 km. A distance measures 4 cm. How far is it on the ground?</li>
            <li>Which city is the legislative capital?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Atlantic (west); Indian (east).</li>
            <li>North-east.</li>
            <li>4 × 50 = 200 km.</li>
            <li>Cape Town.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which ocean washes the east coast of Durban?',
    options: ['Indian Ocean', 'Atlantic Ocean', 'Pacific Ocean', 'Southern Ocean'],
    answer: 'Indian Ocean',
    explanation: 'Durban is on the east coast, which faces the Indian Ocean.',
  },
  {
    prompt: 'Which direction is opposite to north-east?',
    options: ['South-west', 'North-west', 'South-east', 'West'],
    answer: 'South-west',
    explanation: 'Half a turn from north-east is south-west.',
  },
  {
    prompt: 'On a map 1 cm stands for 50 km. A distance of 4 cm is how far on the ground?',
    options: ['200 km', '54 km', '46 km', '2 000 km'],
    answer: '200 km',
    explanation: '4 × 50 = 200 km.',
  },
  {
    prompt: 'Where does the Parliament of South Africa meet?',
    options: ['Cape Town', 'Pretoria', 'Bloemfontein', 'Durban'],
    answer: 'Cape Town',
    explanation: 'Cape Town is the legislative capital.',
  },
  {
    prompt: 'Which city is the judicial capital of South Africa?',
    options: ['Bloemfontein', 'Pretoria', 'Kimberley', 'Polokwane'],
    answer: 'Bloemfontein',
    explanation: 'The Supreme Court of Appeal sits in Bloemfontein.',
  },
];

const MapSkills = () => (
  <CapsSubjectTopic
    title="Map Skills"
    subtitle="Oceans, compass points, scale and capital cities"
    learnSteps={learnSteps}
    task="gr5-geography-map-skills"
    bank={bank}
    apiPath="/api/caps/geo"
    grade={5}
  />
);

export default MapSkills;
