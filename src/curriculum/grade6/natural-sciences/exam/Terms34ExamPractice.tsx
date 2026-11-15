import NstMockTest from '../_shared/NstMockTest';
import { bank as electricCircuits } from '../term3/electric-circuits/ElectricCircuits';
import { bank as conductors } from '../term3/conductors-insulators/ConductorsInsulators';
import { bank as circuitDiagrams } from '../term3/circuit-diagrams/CircuitDiagrams';
import { bank as mains } from '../term3/mains-electricity/MainsElectricity';
import { bank as systems } from '../term3/systems-solve-problems/SystemsSolveProblems';
import { bank as solarSystem } from '../term4/solar-system/SolarSystem';
import { bank as earthMoon } from '../term4/earth-moon-movement/EarthMoonMovement';
import { bank as dayNight } from '../term4/day-night-seasons/DayNightSeasons';
import { bank as space } from '../term4/space-exploration/SpaceExploration';

/** All nine Term 3 and Term 4 topics: the November exam covers Terms 3 and 4 only. */
export const EXAM_GROUPS = [
  { topic: 'Electric Circuits', task: 'electric-circuits', items: electricCircuits },
  { topic: 'Conductors & Insulators', task: 'conductors-insulators', items: conductors },
  { topic: 'Circuit Diagrams & Symbols', task: 'circuit-diagrams', items: circuitDiagrams },
  { topic: 'Mains Electricity & Safety', task: 'mains-electricity', items: mains },
  { topic: 'Systems to Solve Problems', task: 'systems-solve-problems', items: systems },
  { topic: 'The Solar System', task: 'solar-system', items: solarSystem },
  { topic: 'Earth & Moon Movement', task: 'earth-moon-movement', items: earthMoon },
  { topic: 'Day, Night & Seasons', task: 'day-night-seasons', items: dayNight },
  { topic: 'Space Exploration & Technology', task: 'space-exploration', items: space },
];

export const EXAM_QUESTION_COUNT = 25;
/** Written answers in the paper. About half the marks in a real paper are written; here they are self-marked from a memo. */
export const EXAM_EXPLAIN_COUNT = 5;

const Terms34ExamPractice = () => (
  <NstMockTest
    title="Terms 3 & 4 Exam Practice"
    subtitle="25 questions on Terms 3 and 4, scored in marks. Written answers are marked by you from the memo."
    groups={EXAM_GROUPS}
    count={EXAM_QUESTION_COUNT}
    explainCount={EXAM_EXPLAIN_COUNT}
    run={{ kind: 'exam_practice', scopeKey: 'nst-terms34-exam' }}
  />
);

export default Terms34ExamPractice;
