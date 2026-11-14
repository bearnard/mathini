import NstMockTest from '../../_shared/NstMockTest';
import { bank as solar } from '../solar-system/SolarSystem';
import { bank as earthMoon } from '../earth-moon-movement/EarthMoonMovement';
import { bank as dayNight } from '../day-night-seasons/DayNightSeasons';
import { bank as space } from '../space-exploration/SpaceExploration';

const groups = [
  { topic: 'The Solar System', task: 'solar-system', items: solar },
  { topic: 'Earth & Moon Movement', task: 'earth-moon-movement', items: earthMoon },
  { topic: 'Day, Night & Seasons', task: 'day-night-seasons', items: dayNight },
  { topic: 'Space Exploration & Technology', task: 'space-exploration', items: space },
];

const Term4MockTest = () => (
  <NstMockTest title="Term 4 Mock Test" subtitle="20 mixed questions from all Term 4 topics" groups={groups} />
);

export default Term4MockTest;
