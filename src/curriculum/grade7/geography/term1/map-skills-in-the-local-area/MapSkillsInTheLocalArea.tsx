import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Map skills in the local area',
    image: {
      src: '/curriculum/grade7/geo/term1/map-skills-in-the-local-area/diagram.webp',
      alt: 'Grade 7 learners using a local street map with scale, routes, and latitude and longitude references',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Local maps help us find routes, estimate distance with scale, and describe location using latitude and
          longitude. Atlas and mapwork skills support clear decisions about movement and place.
        </p>
      </div>
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
