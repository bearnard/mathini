import GeoTopic from '../../_shared/GeoTopic';
import { GeoItem, LearnStep } from '../../_shared/types';
import GridRef from '@/components/diagrams/GridRef';

const learnSteps: LearnStep[] = [
  {
    title: 'Grids help us find places quickly',
    content: (
      <div className="space-y-4 text-center">
        <GridRef />
        <p className="text-lg text-slate-600">
          A map grid divides a map into rows and columns. We use <strong>grid references</strong>
          to say which square contains a place, such as a school, clinic, river, or road.
        </p>
      </div>
    ),
  },
  {
    title: 'Read the grid labels in order',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Many simple grids use <strong>letters</strong> along one side and <strong>numbers</strong>
          along another. Always check the map’s labels, then read the correct column and row.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-sky-50 p-4"><strong>Column</strong><br />letter label</div>
          <div className="rounded-xl bg-amber-50 p-4"><strong>Row</strong><br />number label</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Use symbols and keys with grid references',
    content: (
      <div className="space-y-4 text-center">
        <GridRef showKey />
        <p className="text-lg text-slate-600">
          Map symbols stand for real things. A <strong>key</strong> explains the symbols, and a grid
          reference tells us where to look. Together they make maps easier to read.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-green-50 p-4"><strong>Symbol</strong><br />small picture or sign</div>
          <div className="rounded-xl bg-indigo-50 p-4"><strong>Key</strong><br />explains symbols</div>
          <div className="rounded-xl bg-rose-50 p-4"><strong>Grid</strong><br />finds the square</div>
        </div>
      </div>
    ),
  },
];

export const bank: GeoItem[] = [
  { prompt: 'What is a grid reference used for?', options: ['Finding a place on a map grid', 'Measuring temperature', 'Naming oceans only', 'Showing the age of rocks'], answer: 'Finding a place on a map grid', explanation: 'A grid reference points you to a particular square on a map.' },
  { prompt: 'What do map grid lines usually form?', options: ['Rows and columns', 'Clouds and rain', 'Food chains', 'Only circles'], answer: 'Rows and columns', explanation: 'Rows and columns divide the map into easy-to-find squares.' },
  { prompt: 'In a simple letter-number grid, what could B3 mean?', options: ['Column B and row 3', 'Three kilometres north', 'The third compass point', 'A line of longitude only'], answer: 'Column B and row 3', explanation: 'The letter and number work together to identify one grid square.' },
  { prompt: 'What does a map key do?', options: ['Explains symbols used on the map', 'Changes the map scale', 'Shows only the Equator', 'Makes the map spin'], answer: 'Explains symbols used on the map', explanation: 'The key tells us what each symbol means.' },
  { prompt: 'Which would be a useful map symbol for a hospital?', options: ['A cross or H sign', 'A random scribble', 'A moon phase', 'A food web arrow'], answer: 'A cross or H sign', explanation: 'Common symbols should be easy to recognise and explain in the key.' },
  { prompt: 'Why are grid references helpful?', options: ['They make places quicker to find', 'They remove all roads from a map', 'They show weather forecasts', 'They replace every map label'], answer: 'They make places quicker to find', explanation: 'Instead of searching the whole map, you can go straight to the correct square.' },
  { prompt: 'If a school is shown in grid square C2, where should you look first?', options: ['Where column C meets row 2', 'Only the map title', 'The bottom of every column', 'Any square with water'], answer: 'Where column C meets row 2', explanation: 'A grid square is found by matching its letter and number labels.' },
  { prompt: 'What should you check if you do not understand a map symbol?', options: ['The map key', 'The page number only', 'A thermometer', 'A compass needle only'], answer: 'The map key', explanation: 'The key explains the meaning of the symbols.' },
  { prompt: 'Which pair is most useful for locating a feature on a grid map?', options: ['Grid reference and symbol', 'Temperature and rainfall', 'Food and energy', 'Moon and stars'], answer: 'Grid reference and symbol', explanation: 'The symbol shows what the feature is, and the grid reference shows where it is.' },
];

const LocatingPlaces = () => (
  <GeoTopic
    title="Locating Places"
    subtitle="Using grid references, symbols, and keys"
    learnSteps={learnSteps}
    task="locating-places"
    bank={bank}
  />
);

export default LocatingPlaces;
