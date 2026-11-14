import GeoTopic from '../../_shared/GeoTopic';
import { GeoItem, LearnStep } from '../../_shared/types';
import { COMPASS_HOTSPOTS } from '@/components/diagrams/Compass';
import { radialHotspots } from '../../../natural-sciences/_shared/diagrams/radialHotspots';
import { CompassRose, DirectionMap } from '@/components/diagrams/Compass';

const learnSteps: LearnStep[] = [
  {
    title: 'Maps help us find direction',
    content: (
      <div className="space-y-4 text-center">
        <CompassRose />
        <p className="text-lg text-slate-600">
          A <strong>map</strong> is a drawing of a place from above. A <strong>compass rose</strong>
          shows directions so we can describe where places are and how to move between them.
        </p>
      </div>
    ),
  },
  {
    title: 'Cardinal and intermediate directions',
    content: (
      <div className="space-y-4 text-center">
        <DirectionMap />
        <p className="text-lg text-slate-600">
          <strong>Cardinal directions</strong> are north, south, east, and west. Directions halfway
          between them are <strong>intermediate directions</strong>, such as north-east and south-west.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4"><strong>Cardinal</strong><br />N, S, E, W</div>
          <div className="rounded-xl bg-cyan-50 p-4"><strong>Intermediate</strong><br />NE, NW, SE, SW</div>
        </div>
      </div>
    ),
  },
  {
    title: 'The globe is a model of Earth',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>globe</strong> is a round model of Earth, so it shows the shape of continents and
          oceans more accurately than a flat map. Maps are easier to carry and can show more detail.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4"><strong>Globe</strong><br />round model of Earth</div>
          <div className="rounded-xl bg-amber-50 p-4"><strong>Map</strong><br />flat drawing of a place</div>
        </div>
      </div>
    ),
  },
];

export const bank: GeoItem[] = [
  { prompt: 'What does a compass rose show on a map?', options: ['Directions', 'Rainfall', 'Population', 'Height of buildings'], answer: 'Directions', explanation: 'A compass rose helps us find north, south, east, west, and other directions.' },
  { prompt: 'Which set lists the four cardinal directions?', options: ['North, South, East, West', 'North-east, North-west, South-east, South-west', 'Up, Down, Left, Right', 'Near, Far, High, Low'], answer: 'North, South, East, West', explanation: 'The cardinal directions are north, south, east, and west.' },
  { prompt: 'Which direction is halfway between north and east?', options: ['North-east', 'North-west', 'South-east', 'South-west'], answer: 'North-east', explanation: 'North-east lies between north and east on a compass rose.' },
  { prompt: 'If a river is east of a school, which direction is the school from the river?', options: ['West', 'East', 'North', 'South'], answer: 'West', explanation: 'Opposite directions help us describe positions from either place.' },
  { prompt: 'What is a globe?', options: ['A round model of Earth', 'A flat street map', 'A list of map symbols', 'A scale bar for distance'], answer: 'A round model of Earth', explanation: 'A globe shows Earth as a sphere.' },
  { prompt: 'Why are maps useful even though Earth is round?', options: ['They are flat and can show local detail', 'They make oceans disappear', 'They always show places at real size', 'They replace all globes'], answer: 'They are flat and can show local detail', explanation: 'Maps are portable and can focus on small areas in detail.' },
  { prompt: 'Which intermediate direction is between south and west?', options: ['South-west', 'South-east', 'North-west', 'North-east'], answer: 'South-west', explanation: 'South-west is halfway between south and west.' },
  { prompt: 'On most maps, which direction is usually at the top?', options: ['North', 'South', 'East', 'West'], answer: 'North', explanation: 'Most maps place north at the top unless a compass rose shows otherwise.' },
  { prompt: 'Which tool would best help you describe that a clinic is north-west of a park?', options: ['Compass rose', 'Bar graph', 'Thermometer', 'Rain gauge'], answer: 'Compass rose', explanation: 'A compass rose gives the directions used to describe locations.' },
  { kind: 'label', section: 'compass-directions', prompt: 'Label four directions on this compass rose.', Diagram: CompassRose, hotspots: radialHotspots(COMPASS_HOTSPOTS, ['ne', 'e', 'sw', 'w'], 12), options: ['North-east', 'East', 'South-west', 'West', 'South-east', 'North-west'], answer: 'ne=North-east|e=East|sw=South-west|w=West', explanation: 'East and west are cardinal directions. North-east and south-west are intermediate directions, halfway between two cardinal ones.' },

];

const MapSkills = () => (
  <GeoTopic
    title="Map Skills & the Globe"
    subtitle="Using directions, maps, and globes"
    learnSteps={learnSteps}
    task="map-skills"
    bank={bank}
  />
);

export default MapSkills;
