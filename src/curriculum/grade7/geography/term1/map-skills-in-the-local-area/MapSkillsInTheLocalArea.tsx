import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { GlobeLines, NeighbourhoodMap } from '../../../../../components/diagrams/geography/MapPictures';
import { PLACES, ROUTE_A, ROUTE_B, direction, opposite, polylineLength, routeMetres } from '../../../../../components/diagrams/geography/mapHelpers';
import { ROUTE_STEPS } from '../../../../../components/diagrams/geography/mapSteps';

// Directions and distances come from tested helpers (mapHelpers.test.ts). The place is imaginary.
const clinicFromSchool = direction(PLACES.school, PLACES.clinic);
const schoolFromClinic = opposite(clinicFromSchool);
const shopFromSchool = direction(PLACES.school, PLACES.shop);
const sa = (n: number) => String(Math.round(n * 10) / 10).replace('.', ',');
const aCm = polylineLength(ROUTE_A);
const bCm = polylineLength(ROUTE_B);
const aM = routeMetres(ROUTE_A);
const bM = routeMetres(ROUTE_B);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Sketch maps, street maps and atlases',
    content: slide(
      <>
        <Rule>
          A sketch map is a simple drawing of key places and routes. A street map shows roads and place names in enough detail for route finding. An atlas is a collection of maps in one book.
        </Rule>
        <NeighbourhoodMap />
        <Worked
          title="Choose the right map"
          steps={[<>To find a route between two streets in town: a street map, because it shows roads and names.</>, <>To show a friend the way to your house with only the main places: a sketch map.</>, <>To look up different maps for places, themes and regions: an atlas.</>]}
        />
        <Mistake>Expecting a sketch map to be exact. A sketch map is simplified and highlights the main features rather than exact detail.</Mistake>
      </>,
    ),
  },
  {
    title: 'Directions on a map',
    content: slide(
      <>
        <Rule>
          Use the compass rose to give directions. When you switch the reference point, directions reverse.
        </Rule>
        <NeighbourhoodMap />
        <Worked
          title="Read directions on the imaginary map"
          steps={[
            <>The clinic is {clinicFromSchool} of the school.</>,
            <>So, from the clinic, the school is {schoolFromClinic}.</>,
            <>The shop is {shopFromSchool} of the school, so the school is {opposite(shopFromSchool)} of the shop.</>,
          ]}
        />
        <Mistake>Giving the same direction both ways. If the clinic is east of the school, the school is west of the clinic.</Mistake>
      </>,
    ),
  },
  {
    title: 'Using the scale',
    content: slide(
      <>
        <Rule>
          A map scale shows how map distance relates to real distance. Using scale is the most helpful skill when comparing two routes by distance.
        </Rule>
        <NeighbourhoodMap routes />
        <Worked
          title="Compare two routes from the school to the clinic (1 cm = 100 m)"
          steps={[
            <>Route A runs straight along the main road: about {sa(aCm)} cm, so {aM} m.</>,
            <>Route B goes round by the roads through the shop and the park: about {sa(bCm)} cm, so {bM} m.</>,
            <>Route A is shorter by {bM - aM} m. Scale lets you calculate and compare real distances fairly.</>,
          ]}
        />
        <Mistake>Comparing routes by how they look on the page. Measure them and use the scale to convert to real distance.</Mistake>
      </>,
    ),
  },
  {
    title: 'Latitude and longitude',
    content: slide(
      <>
        <Rule>
          Latitude and longitude give the exact position of a place on Earth. Latitude is the distance north or south of the Equator; longitude is the distance east or west of the Prime Meridian.
        </Rule>
        <GlobeLines />
        <Worked
          title="Give a position"
          steps={[<>Say how far north or south of the Equator: for example 30° south.</>, <>Then say how far east or west of the Prime Meridian: for example 25° east.</>, <>Together the two numbers locate a place accurately.</>]}
        />
        <Mistake>Mixing up the two. Latitude lines run east to west and measure north or south; longitude lines run from pole to pole and measure east or west.</Mistake>
      </>,
    ),
  },
  {
    title: 'Route finding',
    content: slide(
      <>
        <Rule>
          Route finding in local area mapwork helps people find their way efficiently and safely. It helps you choose practical paths between places.
        </Rule>
        <NumberedSteps steps={ROUTE_STEPS} tone="teal" label="Finding a route on a map" />
        <Worked
          title="Plan a walk to the clinic"
          steps={[<>Start at the school, end at the clinic.</>, <>Route A is {aM} m along the main road, and Route B is {bM} m.</>, <>Choose Route A: it is shorter, and a main road is easy to follow.</>]}
        />
        <Mistake>Choosing the shortest route only. A good route is also safe and easy to follow.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is the main purpose of a map scale? Which map is most useful for finding a route between two streets in town?</li>
            <li>What does a sketch map usually show? What is an atlas?</li>
            <li>If a clinic is east of a school, where is the school from the clinic?</li>
            <li>What are latitude and longitude used for? Which map-reading skill helps when comparing two routes by distance? Why is route finding important?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>To show how map distance relates to real distance. A street map.</li>
            <li>A simple drawing of key places and routes. A collection of maps in one book.</li>
            <li>West.</li>
            <li>To give exact position on Earth. Using scale. It helps people find their way efficiently and safely.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the main purpose of a map scale?',
    options: ['To show how map distance relates to real distance', 'To show whether the roads are safe to use', 'To show north and south and nothing more', 'To show how the population is growing'],
    answer: 'To show how map distance relates to real distance',
    explanation: 'A map scale helps you convert measured map distance to real-world distance.',
  },
  {
    prompt: 'Which map is most useful for finding a route between two streets in town?',
    options: ['Street map', 'World climate map', 'Relief map of Africa', 'Rainfall graph'],
    answer: 'Street map',
    explanation: 'Street maps show roads and place names in enough detail for route finding.',
  },
  {
    prompt: 'What does a sketch map usually show?',
    options: ['A simple drawing of key places and routes', 'Exact measurements taken from satellites', 'Oceans and continents and nothing more', 'Historical dates and nothing more'],
    answer: 'A simple drawing of key places and routes',
    explanation: 'Sketch maps are simplified and highlight main features rather than exact detail.',
  },
  {
    prompt: 'If a clinic is east of a school, where is the school from the clinic?',
    options: ['West', 'East', 'North', 'South'],
    answer: 'West',
    explanation: 'Directions reverse when you switch the reference point.',
  },
  {
    prompt: 'What are latitude and longitude used for?',
    options: [
      'To give exact position on Earth',
      'To measure daily temperature',
      'To classify rock types',
      'To record test marks',
    ],
    answer: 'To give exact position on Earth',
    explanation: 'Coordinates use latitude and longitude to locate places accurately.',
  },
  {
    prompt: 'Which map-reading skill is most helpful when comparing two routes by distance?',
    options: ['Using scale', 'Estimating rainfall', 'Naming capitals', 'Drawing pie charts'],
    answer: 'Using scale',
    explanation: 'Scale lets you calculate and compare real distances fairly.',
  },
  {
    prompt: 'What is an atlas?',
    options: [
      'A collection of maps in one book',
      'A weather instrument',
      'A set of bar graphs',
      'A list of mountain heights only',
    ],
    answer: 'A collection of maps in one book',
    explanation: 'An atlas contains different maps for places, themes, and regions.',
  },
  {
    prompt: 'Why is route finding in local area mapwork important?',
    options: ['It helps people find their way efficiently and safely', 'It takes the place of all map symbols', 'It makes the use of scale unnecessary', 'It is used in the study of history only'],
    answer: 'It helps people find their way efficiently and safely',
    explanation: 'Route finding helps choose practical paths between places.',
  },
];

const MapSkillsInTheLocalArea = () => (
  <CapsSubjectTopic
    title="Map Skills in the Local Area"
    subtitle="Street maps, route finding, sketch maps, scale, and coordinates"
    learnSteps={learnSteps}
    task="gr7-map-skills-in-the-local-area-t1"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default MapSkillsInTheLocalArea;
