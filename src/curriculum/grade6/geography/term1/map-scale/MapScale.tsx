import GeoTopic from '../../_shared/GeoTopic';
import { GeoItem, LearnStep } from '../../_shared/types';
import { MapScaleWays, MapScaleRuler } from '@/components/diagrams/MapScale';

const learnSteps: LearnStep[] = [
  {
    title: 'Scale links map distance to real distance',
    content: (
      <div className="space-y-4 text-center">
        <MapScaleWays />
        <p className="text-lg text-slate-600">
          A map is smaller than the real place. <strong>Scale</strong> tells us how a distance on a
          map compares with the actual distance on the ground.
        </p>
      </div>
    ),
  },
  {
    title: 'A line scale is like a ruler for maps',
    content: (
      <div className="space-y-4 text-center">
        <MapScaleRuler />
        <p className="text-lg text-slate-600">
          A <strong>line scale</strong>, or bar scale, is divided into equal parts. We can measure a
          route on the map and compare it with the bar to estimate kilometres in real life.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-sky-50 p-4"><strong>Measure</strong><br />the map distance</div>
          <div className="rounded-xl bg-indigo-50 p-4"><strong>Compare</strong><br />with the scale bar</div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong>Estimate</strong><br />real distance</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Large-scale and small-scale maps',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>large-scale map</strong> shows a small area with lots of detail, like a school map.
          A <strong>small-scale map</strong> shows a large area with less detail, like a map of Africa.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4"><strong>Large-scale</strong><br />small area, more detail</div>
          <div className="rounded-xl bg-orange-50 p-4"><strong>Small-scale</strong><br />large area, less detail</div>
        </div>
      </div>
    ),
  },
];

export const bank: GeoItem[] = [
  { prompt: 'What does map scale show?', options: ['How map distance compares with real distance', 'Which way is north', 'How much rain fell', 'Where the Equator is'], answer: 'How map distance compares with real distance', explanation: 'Scale changes map measurements into real-world distances.' },
  { prompt: 'What is a line scale also called?', options: ['Bar scale', 'Compass rose', 'Grid reference', 'Hemisphere line'], answer: 'Bar scale', explanation: 'A line scale is often drawn as a bar divided into equal distances.' },
  { prompt: 'If one section of a bar scale represents 1 km, what do three sections represent?', options: ['3 km', '1 km', '4 m', '30 cm'], answer: '3 km', explanation: 'Three equal 1 km sections add up to 3 km.' },
  { prompt: 'Which map usually shows the most detail?', options: ['A large-scale map of a school', 'A small-scale map of the world', 'A map of all continents', 'A globe with no labels'], answer: 'A large-scale map of a school', explanation: 'Large-scale maps show smaller areas in more detail.' },
  { prompt: 'Which map shows a large area with less detail?', options: ['Small-scale map', 'Large-scale map', 'Classroom plan only', 'Street corner sketch'], answer: 'Small-scale map', explanation: 'Small-scale maps show big areas, so they cannot include every small detail.' },
  { prompt: 'Why can we not draw most places at real size on a map?', options: ['Real places are too large for the page', 'Maps must always be round', 'Distances do not exist on maps', 'A compass rose takes all the space'], answer: 'Real places are too large for the page', explanation: 'Scale lets us shrink real places so they fit on paper or a screen.' },
  { prompt: 'Which tool could you use with a bar scale to measure straight map distance?', options: ['Ruler', 'Thermometer', 'Clock', 'Magnet'], answer: 'Ruler', explanation: 'A ruler can measure the distance on the map before comparing it with the scale.' },
  { prompt: 'A town map showing individual streets is most likely what kind of map?', options: ['Large-scale map', 'Small-scale map', 'World map', 'Ocean-only map'], answer: 'Large-scale map', explanation: 'Town maps show a smaller area with useful detail such as streets.' },
  { prompt: 'Which statement is true about scale?', options: ['The same scale must be used carefully for all measurements on that map', 'Scale only shows direction', 'Scale makes north point south', 'Scale is another word for weather'], answer: 'The same scale must be used carefully for all measurements on that map', explanation: 'Use the map’s own scale when converting its distances.' },
  { kind: 'order', section: 'measuring-distance', prompt: 'Put the steps for finding a real distance from a map in order.', options: ['Measure the map distance', 'Compare it with the scale bar', 'Estimate the real distance'], answer: 'Measure the map distance|Compare it with the scale bar|Estimate the real distance', explanation: 'Measure the route on the map, compare it with the bar scale, then estimate the real distance in kilometres.' },
];

const MapScale = () => (
  <GeoTopic
    title="Map Scale & Distance"
    subtitle="Measuring real distances from maps"
    learnSteps={learnSteps}
    task="map-scale"
    bank={bank}
  />
);

export default MapScale;
